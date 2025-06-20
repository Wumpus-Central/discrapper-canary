n.d(t, {
    Z: () => o,
    j: () => a
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-09_premium_brand_refresh_ga',
    label: 'Premium Brand Refresh GA',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: 'User sees control',
            config: { enabled: !1 }
        },
        {
            id: 1,
            label: 'User sees premium brand refresh',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    let { location: t } = e;
    return a.useExperiment({ location: t }, { autoTrackExposure: !0 }).enabled;
}
