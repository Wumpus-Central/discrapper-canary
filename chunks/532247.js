var n = l(191850),
    a = l(792996);
let r = {
        enable: ["sandbox", "files", "packages", "prepare", "build", "server", "reload"],
        disable: ["snapshot", "stopping", "reload"],
    },
    i = {
        sandbox: n.default.wYBwzU,
        files: n.default["5hvVF1"],
        packages: n.default.DKR23W,
        prepare: n.default.qc4VkW,
        build: n.default.ZcJIE6,
        server: n.default.mAXkyS,
        stopping: n.default.dI8HGD,
        snapshot: n.default.E3ZRQo,
        reload: n.default.ZWcCXh,
    };
function s(e) {
    return "starting" === e ? "enable" : "stopping" === e || "building" === e ? "disable" : null;
}
function u(e, t) {
    let l,
        u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        o = s(e),
        d = o ?? u;
    if (null == d) return null;
    l = null == o ? "reload" : "starting" === e ? t : "stopping" === e ? "stopping" : "snapshot";
    let c = r[d];
    return {
        direction: d,
        title: a.intl.string("enable" === d ? n.default.NeoP8L : n.default["3+DCLs"]),
        stepLabel: null == l ? null : a.intl.string(i[l]),
        stepIndex: null == l ? 0 : Math.max(0, c.indexOf(l)),
        stepCount: c.length,
    };
}
l.d(
    t,
    {},
    {
        QP: function (e, t) {
            return "live" === e ? "enable" : "idle" === e || ("error" === e && "disable" === t) ? "disable" : null;
        },
        dv: s,
        h_: u,
        oV: function (e) {
            let t = a.intl.string(n.default.xjblZt);
            if ("error" === e.phase || (null == e.phase && null != e.error))
                return a.intl.formatToPlainString(e.enabled ? n.default["9YJAIN"] : n.default.JUqlqE, {
                    error: e.error ?? "",
                });
            let l = u(e.phase, e.step);
            return null != l
                ? null == l.stepLabel
                    ? l.title
                    : `${l.title} \xb7 ${l.stepLabel}`
                : "idle" === e.phase && e.enabled
                  ? `${a.intl.string(n.default.gCey7s)} \xb7 ${t}`
                  : t;
        },
    },
);
