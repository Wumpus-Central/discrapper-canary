n.d(t, {
    r8: () => i,
    wn: () => o
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-01_friend_tiers_ui',
    label: 'Slayer Friend Tiers UI',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable game friend features in app',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: i } = r.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return i;
}
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
    return i;
}
