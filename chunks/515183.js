var i = n(56562),
    r = n(626584),
    a = n(397369),
    s = n(760751),
    l = n(253400),
    o = n(777334),
    d = n(41984);
let c = new r.A("OverlayRenderUtils");
function u(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Ay],
        n = t.getGameOrTransformedSubgameForPID(e);
    try {
        return null == n
            ? l.Ay.GetWindowFullscreenTypeByPid(e)
            : l.Ay.GetWindowFullscreenTypeByPid(n.pid, n.name, n.fullscreenType);
    } catch (t) {
        return (
            c.error(`Error getting overlay fullscreen type for pid ${e}: ${t}`),
            (0, o.pj)(t, d.Ue.OutOfProcess),
            n?.fullscreenType ?? i.aI.UNKNOWN
        );
    }
}
let _ = {
        "1314682894106497096": (e, t, n) =>
            !(function (e, t) {
                let { quns: n } = l.Ay.GetWindowFullscreenTypeExtraByPid(e, t.name);
                return (c.info(`QUNS for ${t.name}: ${n}`), n === i.YL.QUNS_RUNNING_D3D_FULL_SCREEN);
            })(e, t)
                ? n
                : i.aI.FULLSCREEN,
    },
    E = new Set(["762434991303950386", "1402418239342120960", "1124351860376096858"]);
function A(e) {
    let t = s.A.findGame(e)?.id;
    return null != t && E.has(t);
}
let f = new Set([i.aI.UNKNOWN, i.aI.FULLSCREEN]);
n.d(
    t,
    {},
    {
        E1: async function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16,
                n = await (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.Ay];
                    return new Promise((i) => {
                        setTimeout(() => {
                            i(u(e, [n]));
                        }, t);
                    });
                })(e, t),
                i = a.Ay.getGameOrTransformedSubgameForPID(e);
            if (null == i || null == i.name) return n;
            let r = s.A.findGame(i)?.id;
            if (null == r) return n;
            let l = _[r];
            return null != l ? l(e, i, n) : n;
        },
        O4: function (e) {
            return null == e
                ? { source: d.yp.DEFAULT, enabledOOP: !1, enabledLegacy: !1, overlayMethod: d.Ue.Disabled }
                : (0, a.hw)(e, !0);
        },
        Zj: function (e, t, n) {
            if (e.overlayMethod !== d.Ue.OutOfProcess && e.overlayMethod !== d.Ue.OutOfProcessLimitedInteraction)
                return !1;
            if (!n) return !0;
            switch (t) {
                case i.aI.UNKNOWN:
                    var r;
                    let a;
                    return f.has(
                        0 ===
                            (a = Object.keys((r = e.fullscreenHistory))
                                .map(Number)
                                .sort((e, t) => t - e)).length
                            ? i.aI.UNKNOWN
                            : r[a.length > 1 ? a[1] : a[0]],
                    );
                case i.aI.FULLSCREEN:
                    return !0;
            }
            return !1;
        },
        e3: function (e, t) {
            if (!t) return !1;
            switch (e) {
                case i.aI.UNKNOWN:
                case i.aI.MINIMIZED:
                case i.aI.FULLSCREEN:
                    return !1;
            }
            return !0;
        },
        gK: function (e) {
            switch (e) {
                case d.Ue.OutOfProcess:
                    return "Out of Process";
                case d.Ue.OutOfProcessLimitedInteraction:
                    return "Out of Process (Limited Interaction)";
                case d.Ue.Hook:
                    return "Hook";
                case d.Ue.Disabled:
                    return "Disabled";
            }
        },
        ph: u,
        qJ: function (e) {
            let t = a.Ay.getGameOrTransformedSubgameForPID(e);
            return null != t && null != t.name && A(t);
        },
        wR: function (e) {
            switch (e) {
                case i.aI.BORDERLESS_FULLSCREEN:
                    return "Borderless Fullscreen";
                case i.aI.FULLSCREEN:
                    return "Fullscreen";
                case i.aI.WINDOWED:
                    return "Windowed";
                case i.aI.MINIMIZED:
                    return "Minimized";
                case i.aI.MAXIMIZED:
                    return "Maximized";
                case i.aI.UNKNOWN:
                    return "Unknown";
            }
        },
        zi: A,
    },
);
