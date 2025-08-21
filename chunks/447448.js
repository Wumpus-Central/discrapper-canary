n.d(t, {
    h: () => s,
    k: () => o,
});
var r = n(818083),
    i = n(438379);
let a = (0, r.B)({
    kind: "user",
    id: "2025-07_user_profile_game_widgets",
    label: "User Profile Game Widgets",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enable game widgets on user profile",
            config: { enabled: !0 },
        },
    ],
});
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.J)({
            location: t,
            autoTrackExposure: n,
        }),
        { enabled: o } = a.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r,
            },
        );
    return o;
}
function s(e) {
    let { isInHoldout: t } = i.m.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }),
        { enabled: n } = a.getCurrentConfig(
            { location: e },
            {
                autoTrackExposure: !1,
                disable: t,
            },
        );
    return n;
}
