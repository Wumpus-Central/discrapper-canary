n.d(t, { QP: () => u, dv: () => s, h_: () => o, oV: () => d });
var l = n(50617),
    r = n(375708);
let a = {
        enable: ["sandbox", "files", "packages", "prepare", "build", "server", "reload"],
        disable: ["snapshot", "stopping", "reload"],
    },
    i = {
        sandbox: l.default.RBhBVu,
        files: l.default["/U4dT8"],
        packages: l.default.Ie457W,
        prepare: l.default.mdVHTQ,
        build: l.default.ZASeZg,
        server: l.default["/GiZNH"],
        stopping: l.default.AdGkz9,
        snapshot: l.default.zQ1CmU,
        reload: l.default.Lu00h9,
    };
function s(e) {
    return "starting" === e ? "enable" : "stopping" === e || "building" === e ? "disable" : null;
}
function u(e, t) {
    return "live" === e ? "enable" : "idle" === e || ("error" === e && "disable" === t) ? "disable" : null;
}
function o(e, t) {
    let n,
        u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        o = s(e),
        d = o ?? u;
    if (null == d) return null;
    n = null == o ? "reload" : "starting" === e ? t : "stopping" === e ? "stopping" : "snapshot";
    let c = a[d];
    return {
        direction: d,
        title: r.intl.string("enable" === d ? l.default["1TcEz0"] : l.default.huahAR),
        stepLabel: null == n ? null : r.intl.string(i[n]),
        stepIndex: null == n ? 0 : Math.max(0, c.indexOf(n)),
        stepCount: c.length,
    };
}
function d(e) {
    let t = r.intl.string(l.default.bm0WV1);
    if ("error" === e.phase || (null == e.phase && null != e.error))
        return r.intl.formatToPlainString(e.enabled ? l.default.VcsnmW : l.default.kB51qn, { error: e.error ?? "" });
    let n = o(e.phase, e.step);
    return null != n
        ? null == n.stepLabel
            ? n.title
            : `${n.title} \xb7 ${n.stepLabel}`
        : "idle" === e.phase && e.enabled
          ? `${r.intl.string(l.default["68nO2D"])} \xb7 ${t}`
          : t;
}
