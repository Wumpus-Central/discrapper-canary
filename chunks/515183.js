"use strict";
n.d(t, {
    Ag: () => p,
    E1: () => v,
    O4: () => L,
    T$: () => _,
    Zj: () => O,
    e3: () => D,
    gK: () => E,
    mk: () => f,
    ph: () => h,
    qJ: () => b,
    wR: () => g,
    zi: () => C,
});
var r = n(56562),
    i = n(626584),
    a = n(15285),
    s = n(760751),
    o = n(837921),
    l = n(777334),
    u = n(41984),
    c = n(589051);
let d = new i.A("OverlayRenderUtils"),
    _ = 5e3;
function f(e) {
    return (0, c.Yz)(e).longTimeout;
}
function p(e) {
    return (0, c.Yz)(e).shortTimeout;
}
function h(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Ay],
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
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.Ay];
    return new Promise((r) => {
        setTimeout(() => {
            r(h(e, [n]));
        }, t);
    });
}
function g(e) {
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
function A(e, t) {
    let { quns: n } = o.Ay.GetWindowFullscreenTypeExtraByPid(e, t.name);
    return d.info(`QUNS for ${t.name}: ${n}`), n === r.YL.QUNS_RUNNING_D3D_FULL_SCREEN;
}
let I = { "1314682894106497096": (e, t, n) => (A(e, t) ? r.aI.FULLSCREEN : n) },
    T = new Set(["762434991303950386", "1402418239342120960", "1124351860376096858"]),
    y = 16,
    S = !0;
async function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y,
        n = await m(e, t),
        r = a.Ay.getGameOrTransformedSubgameForPID(e);
    if (null == r || null == r.name) return n;
    let i = s.A.getGameByName(r.name)?.id;
    if (null == i) return n;
    let o = I[i];
    return null != o ? o(e, r, n) : n;
}
function C(e) {
    let t = s.A.getGameByName(e.name)?.id;
    return null != t && T.has(t);
}
function b(e) {
    let t = a.Ay.getGameOrTransformedSubgameForPID(e);
    return null != t && null != t.name && C(t);
}
let N = new Set([r.aI.UNKNOWN, r.aI.FULLSCREEN]);
function R(e) {
    let t = Object.keys(e)
        .map(Number)
        .sort((e, t) => t - e);
    return 0 === t.length ? r.aI.UNKNOWN : e[t.length > 1 ? t[1] : t[0]];
}
function O(e, t, n) {
    if (e.overlayMethod !== u.Ue.OutOfProcess && e.overlayMethod !== u.Ue.OutOfProcessLimitedInteraction) return !1;
    if (!n) return !0;
    switch (t) {
        case r.aI.UNKNOWN:
            return N.has(R(e.fullscreenHistory));
        case r.aI.FULLSCREEN:
            return !0;
    }
    return !1;
}
function D(e, t) {
    if (!t) return !1;
    switch (e) {
        case r.aI.UNKNOWN:
        case r.aI.MINIMIZED:
        case r.aI.FULLSCREEN:
            return !1;
    }
    return !0;
}
function L(e) {
    return null == e
        ? { source: u.yp.DEFAULT, enabledOOP: !1, enabledLegacy: !1, overlayMethod: u.Ue.Disabled }
        : (0, a.hw)(e, S);
}
