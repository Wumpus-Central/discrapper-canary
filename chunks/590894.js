n.d(t, { q: () => l });
var r = n(987170),
    i = n(987338);
let l = (0, r.Z)({
    kind: 'user',
    id: '2025-02_test_large_bucket_second',
    label: 'Test Large Bucket Second Experiment',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Variation with first treatment enabled',
            config: { enabled: !0 }
        },
        {
            id: 2,
            label: 'Variation with second treatment enabled',
            config: { enabled: !0 }
        }
    ]
});
