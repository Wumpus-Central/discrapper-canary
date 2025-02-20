n.d(t, {
    ah: () => i,
    xP: () => o
});
var s = n(818083),
    r = n(987338);
let i = (0, s.B)({
    kind: 'user',
    id: '2024-11_marketing_page_v2_experiment',
    label: 'Marketing Page V2 Experiment',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
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
function o(e) {
    let { enabled: t } = i.useExperiment({ location: e }, { autoTrackExposure: !1 });
    return t;
}
