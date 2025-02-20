n.d(t, { S: () => l });
var r = n(987170),
    i = n(987338);
let l = (0, r.Z)({
    kind: 'user',
    id: '2025-02_test_user_auth_filter_marketing',
    label: 'Test User Auth Filter Marketing',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Variation with treatment enabled',
            config: { enabled: !0 }
        }
    ]
});
