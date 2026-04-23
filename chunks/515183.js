"use strict";
n.d(t, {
    E1: () => g,
    O4: () => N,
    T$: () => u,
    Zj: () => T,
    e3: () => S,
    gK: () => h,
    ph: () => c,
    qJ: () => A,
    wR: () => E,
    zi: () => p,
});
var i = n(56562),
    r = n(626584),
    s = n(328153),
    a = n(760751),
    o = n(19575),
    l = n(777334),
    d = n(41984);
let _ = new r.A("OverlayRenderUtils"),
    u = 5e3;
function c(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Ay],
        n = t.getGameOrTransformedSubgameForPID(e);
    try {
        return null == n
            ? o.Ay.GetWindowFullscreenTypeByPid(e)
            : o.Ay.GetWindowFullscreenTypeByPid(n.pid, n.name, n.fullscreenType);
    } catch (t) {
        return (
            _.error(`Error getting overlay fullscreen type for pid ${e}: ${t}`),
            (0, l.pj)(t, d.Ue.OutOfProcess),
            n?.fullscreenType ?? i.aI.UNKNOWN
        );
    }
}
function E(e) {
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
}
function h(e) {
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
}
let m = {
        "1314682894106497096": (e, t, n) =>
            !(function (e, t) {
                let { quns: n } = o.Ay.GetWindowFullscreenTypeExtraByPid(e, t.name);
                return _.info(`QUNS for ${t.name}: ${n}`), n === i.YL.QUNS_RUNNING_D3D_FULL_SCREEN;
            })(e, t)
                ? n
                : i.aI.FULLSCREEN,
    },
    f = new Set(["762434991303950386", "1402418239342120960", "1124351860376096858"]);
async function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16,
        n = await (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.Ay];
            return new Promise((i) => {
                setTimeout(() => {
                    i(c(e, [n]));
                }, t);
            });
        })(e, t),
        i = s.Ay.getGameOrTransformedSubgameForPID(e);
    if (null == i || null == i.name) return n;
    let r = a.A.findGame(i)?.id;
    if (null == r) return n;
    let o = m[r];
    return null != o ? o(e, i, n) : n;
}
function p(e) {
    let t = a.A.findGame(e)?.id;
    return null != t && f.has(t);
}
function A(e) {
    let t = s.Ay.getGameOrTransformedSubgameForPID(e);
    return null != t && null != t.name && p(t);
}
let I = new Set([i.aI.UNKNOWN, i.aI.FULLSCREEN]);
function T(e, t, n) {
    if (e.overlayMethod !== d.Ue.OutOfProcess && e.overlayMethod !== d.Ue.OutOfProcessLimitedInteraction) return !1;
    if (!n) return !0;
    switch (t) {
        case i.aI.UNKNOWN:
            var r;
            let s;
            return I.has(
                0 ===
                    (s = Object.keys((r = e.fullscreenHistory))
                        .map(Number)
                        .sort((e, t) => t - e)).length
                    ? i.aI.UNKNOWN
                    : r[s.length > 1 ? s[1] : s[0]],
            );
        case i.aI.FULLSCREEN:
            return !0;
    }
    return !1;
}
function S(e, t) {
    if (!t) return !1;
    switch (e) {
        case i.aI.UNKNOWN:
        case i.aI.MINIMIZED:
        case i.aI.FULLSCREEN:
            return !1;
    }
    return !0;
}
function N(e) {
    return null == e
        ? { source: d.yp.DEFAULT, enabledOOP: !1, enabledLegacy: !1, overlayMethod: d.Ue.Disabled }
        : (0, s.hw)(e, !0);
}
