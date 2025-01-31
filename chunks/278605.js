s.d(t, {
    ah: () => r,
    xP: () => a
});
var n = s(818083),
    i = s(987338);
let r = (0, n.B)({
    kind: 'user',
    id: '2024-11_marketing_page_v2_experiment',
    label: 'Marketing Page V2 Experiment',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: 'User see current marketing page',
            config: { enabled: !1 }
        },
        {
            id: 1,
            label: 'users see new marketing page',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { enabled: t } = r.useExperiment({ location: e }, { autoTrackExposure: !1 });
    return t;
}
