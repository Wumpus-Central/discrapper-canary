n.d(t, { Z: () => s });
var i = n(818083),
    r = n(987338);
let s = (0, i.B)({
    kind: 'user',
    id: '2025-06_referral_program_sender_copy',
    label: 'Referral Program Sender Copy Experiment',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: 'Control group. Users see existing copy.',
            config: { enabled: !1 }
        },
        {
            id: 1,
            label: 'Treatment group. Users see updated copy.',
            config: { enabled: !0 }
        }
    ]
});
