"use strict";
n.d(t, {
    E1: () => m,
    O4: () => y,
    T$: () => c,
    Zj: () => T,
    e3: () => S,
    gK: () => E,
    ph: () => _,
    qJ: () => A,
    wR: () => f,
    zi: () => g,
});
var r = n(56562),
    i = n(626584),
    s = n(15285),
    a = n(760751),
    o = n(837921),
    l = n(777334),
    u = n(41984);
let d = new i.A("OverlayRenderUtils"),
    c = 5e3;
function _(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Ay],
        n = t.getGameOrTransformedSubgameForPID(e);
    try {
        return null == n
            ? o.Ay.GetWindowFullscreenTypeByPid(e)
            : o.Ay.GetWindowFullscreenTypeByPid(n.pid, n.name, n.fullscreenType);
    } catch (t) {
        return (
            d.error(`Error getting overlay fullscreen type for pid ${e}: ${t}`),
            (0, l.pj)(t, u.Ue.OutOfProcess),
            n?.fullscreenType ?? r.aI.UNKNOWN
        );
    }
}
function f(e) {
    switch (e) {
        case r.aI.BORDERLESS_FULLSCREEN:
            return "Borderless Fullscreen";
        case r.aI.FULLSCREEN:
            return "Fullscreen";
        case r.aI.WINDOWED:
            return "Windowed";
        case r.aI.MINIMIZED:
            return "Minimized";
        case r.aI.MAXIMIZED:
            return "Maximized";
        case r.aI.UNKNOWN:
            return "Unknown";
    }
}
function E(e) {
    switch (e) {
        case u.Ue.OutOfProcess:
            return "Out of Process";
        case u.Ue.OutOfProcessLimitedInteraction:
            return "Out of Process (Limited Interaction)";
        case u.Ue.Hook:
            return "Hook";
        case u.Ue.Disabled:
            return "Disabled";
    }
}
let h = {
        "1314682894106497096": (e, t, n) =>
            !(function (e, t) {
                let { quns: n } = o.Ay.GetWindowFullscreenTypeExtraByPid(e, t.name);
                return d.info(`QUNS for ${t.name}: ${n}`), n === r.YL.QUNS_RUNNING_D3D_FULL_SCREEN;
            })(e, t)
                ? n
                : r.aI.FULLSCREEN,
    },
    p = new Set(["762434991303950386", "1402418239342120960", "1124351860376096858"]);
async function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16,
        n = await (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.Ay];
            return new Promise((r) => {
                setTimeout(() => {
                    r(_(e, [n]));
                }, t);
            });
        })(e, t),
        r = s.Ay.getGameOrTransformedSubgameForPID(e);
    if (null == r || null == r.name) return n;
    let i = a.A.findGame(r)?.id;
    if (null == i) return n;
    let o = h[i];
    return null != o ? o(e, r, n) : n;
}
function g(e) {
    let t = a.A.findGame(e)?.id;
    return null != t && p.has(t);
}
function A(e) {
    let t = s.Ay.getGameOrTransformedSubgameForPID(e);
    return null != t && null != t.name && g(t);
}
let I = new Set([r.aI.UNKNOWN, r.aI.FULLSCREEN]);
function T(e, t, n) {
    if (e.overlayMethod !== u.Ue.OutOfProcess && e.overlayMethod !== u.Ue.OutOfProcessLimitedInteraction) return !1;
    if (!n) return !0;
    switch (t) {
        case r.aI.UNKNOWN:
            var i;
            let s;
            return I.has(
                0 ===
                    (s = Object.keys((i = e.fullscreenHistory))
                        .map(Number)
                        .sort((e, t) => t - e)).length
                    ? r.aI.UNKNOWN
                    : i[s.length > 1 ? s[1] : s[0]],
            );
        case r.aI.FULLSCREEN:
            return !0;
    }
    return !1;
}
function S(e, t) {
    if (!t) return !1;
    switch (e) {
        case r.aI.UNKNOWN:
        case r.aI.MINIMIZED:
        case r.aI.FULLSCREEN:
            return !1;
    }
    return !0;
}
function y(e) {
    return null == e
        ? { source: u.yp.DEFAULT, enabledOOP: !1, enabledLegacy: !1, overlayMethod: u.Ue.Disabled }
        : (0, s.hw)(e, !0);
}
