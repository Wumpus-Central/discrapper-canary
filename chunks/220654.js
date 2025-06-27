n.d(t, {
    C: () => s,
    Z: () => l
});
var i = n(818083),
    r = n(987338);
let s = (0, i.B)({
    kind: 'user',
    id: '2025-07_marketing_home_premium_brand_refresh_experiment',
    label: 'Marketing Home Premium Brand Refresh Experiment',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: 'User sees control marketing home design',
            config: { enabled: !1 }
        },
        {
            id: 1,
            label: 'User sees premium brand refresh marketing home design',
            config: { enabled: !0 }
        }
    ]
});
function l(e) {
    let { location: t } = e;
    return s.useExperiment({ location: t }, { autoTrackExposure: !0 }).enabled;
}
