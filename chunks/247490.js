n.d(t, { k: () => l });
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: 'user',
    id: '2025-06_payment_modal_nitro_rebrand_experiment',
    label: 'Payment Modal Nitro Rebrand Experiment',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: 'User sees control payment modal',
            config: { enabled: !1 }
        },
        {
            id: 1,
            label: 'User sees nitro rebrand payment modal',
            config: { enabled: !0 }
        }
    ]
});
