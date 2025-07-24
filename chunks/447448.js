n.d(t, { k: () => r });
let o = (0, n(818083).B)({
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
function r(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: r } = o.useExperiment({ location: t }, { autoTrackExposure: n });
    return r;
}
