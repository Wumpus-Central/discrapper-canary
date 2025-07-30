a.d(t, { k: () => i });
var n = a(818083),
    r = a(438379);
let l = (0, n.B)({
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
function i(e) {
    let { location: t, autoTrackExposure: a = !0 } = e,
        n = (0, r.J)({
            location: t,
            autoTrackExposure: a
        }),
        { enabled: i } = l.useExperiment(
            { location: t },
            {
                autoTrackExposure: a,
                disable: n
            }
        );
    return i;
}
