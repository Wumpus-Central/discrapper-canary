n.d(t, {
    U: () => o,
    h: () => s,
});
var r = n(427164),
    i = n(438379);
let a = (0, r.le)({
    name: "2025-07-user-profile-game-widgets",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
    },
});
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.J)({
            location: t,
            autoTrackExposure: n,
        }),
        o = a.useConfig({ location: t }).enabled;
    return !r && o;
}
function s(e) {
    let { isInHoldout: t } = i.m.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }),
        n = a.getConfig({ location: e }).enabled;
    return !t && n;
}
