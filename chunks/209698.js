n.d(t, { b: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-04_stacked_activity_cards',
    label: 'User Profile Stacked Activity Cards',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable stacked activity cards on user profile',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
    return i;
}
