n.d(t, {
    Ag: () => _,
    E1: () => S,
    O4: () => P,
    T$: () => f,
    Zj: () => R,
    e3: () => w,
    gK: () => E,
    mk: () => p,
    ph: () => h,
    qJ: () => T,
    wR: () => g,
    zi: () => I,
}),
    n(896048),
    n(638769);
var r = n(56562),
    i = n(626584),
    a = n(15285),
    s = n(760751),
    o = n(837921),
    l = n(777334),
    c = n(41984),
    u = n(589051);
let d = new i.A("OverlayRenderUtils"),
    f = 5e3;

function p(e) {
    return (0, u.Yz)(e).longTimeout;
}

function _(e) {
    return (0, u.Yz)(e).shortTimeout;
}

function h(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Ay],
        n = t.getGameOrTransformedSubgameForPID(e);
    try {
        return null == n
            ? o.Ay.GetWindowFullscreenTypeByPid(e)
            : o.Ay.GetWindowFullscreenTypeByPid(n.pid, n.name, n.fullscreenType);
    } catch (t) {
        var i;
        return (
            d.error("Error getting overlay fullscreen type for pid ".concat(e, ": ").concat(t)),
            (0, l.pj)(t, c.Ue.OutOfProcess),
            null != (i = null == n ? void 0 : n.fullscreenType) ? i : r.aI.UNKNOWN
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
        case c.Ue.OutOfProcess:
            return "Out of Process";
        case c.Ue.OutOfProcessLimitedInteraction:
            return "Out of Process (Limited Interaction)";
        case c.Ue.Hook:
            return "Hook";
        case c.Ue.Disabled:
            return "Disabled";
    }
}

function b(e, t) {
    let { quns: n } = o.Ay.GetWindowFullscreenTypeExtraByPid(e, t.name);
    return d.info("QUNS for ".concat(t.name, ": ").concat(n)), n === r.YL.QUNS_RUNNING_D3D_FULL_SCREEN;
}
let y = {
        "1314682894106497096": (e, t, n) => (b(e, t) ? r.aI.FULLSCREEN : n),
    },
    O = new Set(["762434991303950386", "1402418239342120960", "1124351860376096858"]),
    A = 16,
    v = !0;
async function S(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A,
        r = await m(e, n),
        i = a.Ay.getGameOrTransformedSubgameForPID(e);
    if (null == i || null == i.name) return r;
    let o = null == (t = s.A.getGameByName(i.name)) ? void 0 : t.id;
    if (null == o) return r;
    let l = y[o];
    return null != l ? l(e, i, r) : r;
}

function I(e) {
    var t;
    let n = null == (t = s.A.getGameByName(e.name)) ? void 0 : t.id;
    return null != n && O.has(n);
}

function T(e) {
    let t = a.Ay.getGameOrTransformedSubgameForPID(e);
    return null != t && null != t.name && I(t);
}
let C = new Set([r.aI.UNKNOWN, r.aI.FULLSCREEN]);

function N(e) {
    let t = Object.keys(e)
        .map(Number)
        .sort((e, t) => t - e);
    return 0 === t.length ? r.aI.UNKNOWN : e[t.length > 1 ? t[1] : t[0]];
}

function R(e, t, n) {
    if (e.overlayMethod !== c.Ue.OutOfProcess && e.overlayMethod !== c.Ue.OutOfProcessLimitedInteraction) return !1;
    if (!n) return !0;
    switch (t) {
        case r.aI.UNKNOWN:
            return C.has(N(e.fullscreenHistory));
        case r.aI.FULLSCREEN:
            return !0;
    }
    return !1;
}

function w(e, t) {
    if (!t) return !1;
    switch (e) {
        case r.aI.UNKNOWN:
        case r.aI.MINIMIZED:
        case r.aI.FULLSCREEN:
            return !1;
    }
    return !0;
}

function P(e) {
    return null == e
        ? {
              source: c.yp.DEFAULT,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: c.Ue.Disabled,
          }
        : (0, a.hw)(e, v);
}
