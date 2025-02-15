n.d(t, { Z: () => r });
var i = n(818083),
    l = n(987338);
let r = (0, i.B)({
    kind: 'user',
    id: '2025-02_reverse_trial_load_test',
    label: 'Reverse Trials',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: l.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Users receives reverse trial + 1 week follow-up offer',
            config: { enabled: !0 }
        }
    ]
});
