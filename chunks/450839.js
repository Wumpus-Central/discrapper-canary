n.d(t, {
    A7: () => a,
    ru: () => o
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-04_dcf3p_integration_experiment',
    label: 'DCF3P Integration Experiment',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: 'Users see 3p notice without dcf',
            config: { enabled: !1 }
        },
        {
            id: 1,
            label: 'Users see 3p notice through dcf',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { enabled: t } = o.getCurrentConfig({ location: e }, { autoTrackExposure: !1 });
    return t;
}
