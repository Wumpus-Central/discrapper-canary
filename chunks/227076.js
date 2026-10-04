n.d(t, { QP: () => u, dv: () => s, h_: () => o, oV: () => d });
var l = n(248675),
    r = n(375708);
let a = {
        enable: ["sandbox", "files", "packages", "prepare", "build", "server", "reload"],
        disable: ["snapshot", "stopping", "reload"],
    },
    i = {
        sandbox: l.default.wYBwzU,
        files: l.default["5hvVF1"],
        packages: l.default.DKR23W,
        prepare: l.default.qc4VkW,
        build: l.default.ZcJIE6,
        server: l.default.mAXkyS,
        stopping: l.default.dI8HGD,
        snapshot: l.default.E3ZRQo,
        reload: l.default.ZWcCXh,
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
        title: r.intl.string("enable" === d ? l.default.NeoP8L : l.default["3+DCLs"]),
        stepLabel: null == n ? null : r.intl.string(i[n]),
        stepIndex: null == n ? 0 : Math.max(0, c.indexOf(n)),
        stepCount: c.length,
    };
}
function d(e) {
    let t = r.intl.string(l.default.xjblZt);
    if ("error" === e.phase || (null == e.phase && null != e.error))
        return r.intl.formatToPlainString(e.enabled ? l.default["9YJAIN"] : l.default.JUqlqE, { error: e.error ?? "" });
    let n = o(e.phase, e.step);
    return null != n
        ? null == n.stepLabel
            ? n.title
            : `${n.title} \xb7 ${n.stepLabel}`
        : "idle" === e.phase && e.enabled
          ? `${r.intl.string(l.default.gCey7s)} \xb7 ${t}`
          : t;
}
