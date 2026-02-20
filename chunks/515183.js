"use strict";
n.d(t, {
    E1: () => T,
    O4: () => R,
    T$: () => d,
    Zj: () => C,
    e3: () => b,
    gK: () => h,
    ph: () => _,
    qJ: () => y,
    wR: () => p,
    zi: () => S,
});
var r = n(56562),
    i = n(626584),
    s = n(15285),
    a = n(760751),
    o = n(837921),
    l = n(777334),
    u = n(41984);
let c = new i.A("OverlayRenderUtils"),
    d = 5e3;
function _(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Ay],
        n = t.getGameOrTransformedSubgameForPID(e);
    try {
        return null == n
            ? o.Ay.GetWindowFullscreenTypeByPid(e)
            : o.Ay.GetWindowFullscreenTypeByPid(n.pid, n.name, n.fullscreenType);
    } catch (t) {
        return (
            c.error(`Error getting overlay fullscreen type for pid ${e}: ${t}`),
            (0, l.pj)(t, u.Ue.OutOfProcess),
            n?.fullscreenType ?? r.aI.UNKNOWN
        );
    }
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.Ay];
    return new Promise((r) => {
        setTimeout(() => {
            r(_(e, [n]));
        }, t);
    });
}
function p(e) {
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
function h(e) {
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
function m(e, t) {
    let { quns: n } = o.Ay.GetWindowFullscreenTypeExtraByPid(e, t.name);
    return c.info(`QUNS for ${t.name}: ${n}`), n === r.YL.QUNS_RUNNING_D3D_FULL_SCREEN;
}
let E = { "1314682894106497096": (e, t, n) => (m(e, t) ? r.aI.FULLSCREEN : n) },
    g = new Set(["762434991303950386", "1402418239342120960", "1124351860376096858"]),
    A = 16,
    I = !0;
async function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A,
        n = await f(e, t),
        r = s.Ay.getGameOrTransformedSubgameForPID(e);
    if (null == r || null == r.name) return n;
    let i = a.A.getGameByName_DEPRECATED_DO_NOT_USE(r.name)?.id;
    if (null == i) return n;
    let o = E[i];
    return null != o ? o(e, r, n) : n;
}
function S(e) {
    let t = a.A.getGameByName_DEPRECATED_DO_NOT_USE(e.name)?.id;
    return null != t && g.has(t);
}
function y(e) {
    let t = s.Ay.getGameOrTransformedSubgameForPID(e);
    return null != t && null != t.name && S(t);
}
let v = new Set([r.aI.UNKNOWN, r.aI.FULLSCREEN]);
function N(e) {
    let t = Object.keys(e)
        .map(Number)
        .sort((e, t) => t - e);
    return 0 === t.length ? r.aI.UNKNOWN : e[t.length > 1 ? t[1] : t[0]];
}
function C(e, t, n) {
    if (e.overlayMethod !== u.Ue.OutOfProcess && e.overlayMethod !== u.Ue.OutOfProcessLimitedInteraction) return !1;
    if (!n) return !0;
    switch (t) {
        case r.aI.UNKNOWN:
            return v.has(N(e.fullscreenHistory));
        case r.aI.FULLSCREEN:
            return !0;
    }
    return !1;
}
function b(e, t) {
    if (!t) return !1;
    switch (e) {
        case r.aI.UNKNOWN:
        case r.aI.MINIMIZED:
        case r.aI.FULLSCREEN:
            return !1;
    }
    return !0;
}
function R(e) {
    return null == e
        ? { source: u.yp.DEFAULT, enabledOOP: !1, enabledLegacy: !1, overlayMethod: u.Ue.Disabled }
        : (0, s.hw)(e, I);
}
