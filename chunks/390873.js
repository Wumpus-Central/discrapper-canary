n.d(t, {
    RA: () => o,
    U4: () => _,
    vK: () => c,
});
var r = n(975318),
    i = n(98076);
let a = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function o(e, t = !1) {
    let { host: n, path: r, pass: i, port: a, projectId: _, protocol: s, publicKey: c } = e;
    return `${s}://${c}${t && i ? `:${i}` : ""}@${n}${a ? `:${a}` : ""}/${r ? `${r}/` : r}${_}`;
}
function _(e) {
    let t = a.exec(e);
    if (!t)
        return void (0, i.Cf)(() => {
            console.error(`Invalid Sentry Dsn: ${e}`);
        });
    let [n, r, o = "", _ = "", c = "", E = ""] = t.slice(1),
        l = "",
        u = E,
        d = u.split("/");
    if ((d.length > 1 && ((l = d.slice(0, -1).join("/")), (u = d.pop())), u)) {
        let e = u.match(/^\d+/);
        e && (u = e[0]);
    }
    return s({
        host: _,
        pass: o,
        path: l,
        projectId: u,
        port: c,
        protocol: n,
        publicKey: r,
    });
}
function s(e) {
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
    let t = "string" == typeof e ? _(e) : s(e);
    if (
        t &&
        (function (e) {
            if (!r.X) return !0;
            let { port: t, projectId: n, protocol: a } = e;
            return (
                !["protocol", "publicKey", "host", "projectId"].find(
                    (t) => !e[t] && (i.kg.error(`Invalid Sentry Dsn: ${t} missing`), !0),
                ) &&
                (n.match(/^\d+$/)
                    ? "http" !== a && "https" !== a
                        ? (i.kg.error(`Invalid Sentry Dsn: Invalid protocol ${a}`), !1)
                        : !(t && isNaN(parseInt(t, 10))) || (i.kg.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
                    : (i.kg.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1))
            );
        })(t)
    )
        return t;
}
