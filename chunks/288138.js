n.d(t, { Z: () => a });
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-06_payment_elements_experiment',
    label: 'Payment Elements Experiment',
    commonTriggerPoint: i.$P.PAYMENT_FLOW_STARTED,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Payment Element features',
            config: { enabled: !0 }
        }
    ]
});
