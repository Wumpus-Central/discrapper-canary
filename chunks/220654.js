n.d(t, { C: () => l });
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: 'user',
    id: '2025-07_marketing_home_premium_brand_refresh_experiment',
    label: 'Marketing Home Premium Brand Refresh Experiment',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
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
