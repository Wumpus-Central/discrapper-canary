n.d(t, { z: () => r });
var i = n(987170),
    l = n(987338);
let r = (0, i.Z)({
    kind: 'user',
    id: '2025-02_test_user_auth_apply_filter',
    label: 'Test User Auth Apply Filter',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: l.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Variation with treatment enabled',
            config: { enabled: !0 }
        }
    ]
});
