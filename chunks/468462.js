n.d(t, { E: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-04_user_profile_performance_analytics',
    label: 'User Profile Performance Analytics Experiment',
    defaultConfig: { performanceAnalyticsEnabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Performance analytics enabled',
            config: { performanceAnalyticsEnabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { performanceAnalyticsEnabled: i } = r.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return i;
}
