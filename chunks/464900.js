n.d(t, { L: () => o });
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    kind: 'user',
    id: '2024-12_uplift_trial_nux',
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    label: 'Uplift Trial NUX',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Users will see the uplift trial NUX',
            config: { enabled: !0 }
        }
    ]
});
