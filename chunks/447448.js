n.d(t, { k: () => a });
var r = n(818083),
    o = n(438379);
let i = (0, r.B)({
    kind: 'user',
    id: '2025-07_user_profile_game_widgets',
    label: 'User Profile Game Widgets',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable game widgets on user profile',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, o.J)({
            location: t,
            autoTrackExposure: n
        }),
        { enabled: a } = i.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r
            }
        );
    return a;
}
