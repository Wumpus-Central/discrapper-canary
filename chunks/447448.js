n.d(t, { k: () => c });
var o = n(818083),
    r = n(438379);
let i = (0, o.B)({
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
function c(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        o = (0, r.J)({
            location: t,
            autoTrackExposure: n
        }),
        { enabled: c } = i.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: o
            }
        );
    return c;
}
