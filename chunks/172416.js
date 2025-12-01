n.d(t, {
    Un: () => d,
    bg: () => u,
    hL: () => p,
});
var r = n(442837),
    i = n(427164),
    a = n(594174),
    o = n(74538),
    s = n(438379);
let l = (0, i.le)({
        name: "2025-07-user-profile-game-widgets",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: {
            0: { enabled: !1 },
            1: { enabled: !0 },
        },
    }),
    c = (0, i.le)({
        name: "2025-10-user-profile-game-widgets-early-access",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: {
            0: { enabled: !1 },
            1: { enabled: !0 },
        },
    });
function u(e) {
    let { location: t } = e,
        n = c.useConfig({ location: t }).enabled,
        i = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
        s = (0, o.I5)(i);
    return n && s;
}
function d(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, s.J)({
            location: t,
            autoTrackExposure: n,
        }),
        i = u({
            location: t,
            autoTrackExposure: n,
        }),
        a = l.useConfig({ location: t }).enabled;
    return (!r && a) || i;
}
function f(e) {
    let t = a.default.getCurrentUser(),
        n = (0, o.I5)(t);
    return c.getConfig({ location: e }).enabled && n;
}
function p(e) {
    let { isInHoldout: t } = s.m.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }),
        n = f(e),
        r = l.getConfig({ location: e }).enabled;
    return (!t && r) || n;
}
