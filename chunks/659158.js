n.d(t, { S: () => i });
var a = n(427164),
    r = n(438379);
let l = (0, a.le)({
    name: "2025-12-user-profile-application-widgets-coachmarks",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
    },
});
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        a = (0, r.J)({
            location: t,
            autoTrackExposure: n,
        }),
        i = l.useConfig({ location: t }).enabled;
    return !a && i;
}
