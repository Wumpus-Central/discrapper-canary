n.d(t, { t: () => a });
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-07_cloud_play_cta',
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    label: 'Cloud Play CTA Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Cloud Play CTA',
            config: { enabled: !0 }
        }
    ]
});
