n.d(t, { _: () => l });
var r = n(143770),
    i = n(688151);
let l = (0, r.A)({
    kind: "user",
    id: "2025-02_test_large_bucket_third",
    label: "Test Large Bucket Third Experiment",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$G.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: "Variation with first treatment enabled",
            config: { enabled: !0 },
        },
        {
            id: 2,
            label: "Variation with second treatment enabled",
            config: { enabled: !0 },
        },
    ],
});
