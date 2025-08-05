n.d(t, {
    Y: () => a,
    Z: () => o
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-07_wow_moment_premium_brand_refresh_experiment',
    label: 'Wow Moment Premium Brand Refresh Experiment',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'User sees premium brand refresh wow moment design',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    let { location: t } = e;
    return a.useExperiment({ location: t }, { autoTrackExposure: !0 }).enabled;
}
