n.d(t, {
    h: () => s,
    k: () => a,
});
var r = n(427164),
    i = n(438379);
let o = (0, r.le)({
    name: "2025-07-user-profile-game-widgets",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
    },
});
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.J)({
            location: t,
            autoTrackExposure: n,
        }),
        a = o.useConfig({ location: t }).enabled;
    return !r && a;
}
function s(e) {
    let { isInHoldout: t } = i.m.getCurrentConfig({ location: e }, { autoTrackExposure: !1 });
    return !t && o.getConfig({ location: e }).enabled;
}
