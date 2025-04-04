n.d(t, {
    C: () => a,
    t: () => s
});
var r = n(818083),
    i = n(987338);
let s = (0, r.B)({
    kind: 'user',
    id: '2025-03_sub_marketing_page_v2_experiment',
    label: 'Sub Marketing Page V2 Experiment',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: 'Sub Users see current marketing page',
            config: { enabled: !1 }
        },
        {
            id: 1,
            label: 'sub users see new marketing page',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { enabled: t } = s.useExperiment({ location: e }, { autoTrackExposure: !1 });
    return t;
}
