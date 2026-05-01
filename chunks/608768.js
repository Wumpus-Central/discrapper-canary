n.d(t, { AD: () => c, SB: () => a, hH: () => s });
var r = n(780755),
    i = n(272469);
let o = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function a(e, t = !1) {
    let { host: n, path: r, pass: i, port: o, projectId: s, protocol: l, publicKey: c } = e;
    return `${l}://${c}${t && i ? `:${i}` : ""}@${n}${o ? `:${o}` : ""}/${r ? `${r}/` : r}${s}`;
}
function s(e) {
    let t = o.exec(e);
    if (!t)
        return void (0, i.pq)(() => {
            console.error(`Invalid Sentry Dsn: ${e}`);
        });
    let [n, r, a = "", s = "", c = "", u = ""] = t.slice(1),
        d = "",
        p = u,
        h = p.split("/");
    if ((h.length > 1 && ((d = h.slice(0, -1).join("/")), (p = h.pop())), p)) {
        let e = p.match(/^\d+/);
        e && (p = e[0]);
    }
    return l({ host: s, pass: a, path: d, projectId: p, port: c, protocol: n, publicKey: r });
}
function l(e) {
    return {
        protocol: e.protocol,
        publicKey: e.publicKey || "",
        pass: e.pass || "",
        host: e.host,
        port: e.port || "",
        path: e.path || "",
        projectId: e.projectId,
    };
}
function c(e) {
    let t = "string" == typeof e ? s(e) : l(e);
    if (
        t &&
        (function (e) {
            if (!r.T) return !0;
            let { port: t, projectId: n, protocol: o } = e;
            return (
                !["protocol", "publicKey", "host", "projectId"].find(
                    (t) => !e[t] && (i.vF.error(`Invalid Sentry Dsn: ${t} missing`), !0),
                ) &&
                (n.match(/^\d+$/)
                    ? "http" !== o && "https" !== o
                        ? (i.vF.error(`Invalid Sentry Dsn: Invalid protocol ${o}`), !1)
                        : !(t && isNaN(parseInt(t, 10))) || (i.vF.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
                    : (i.vF.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1))
            );
        })(t)
    )
        return t;
}
