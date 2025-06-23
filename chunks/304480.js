n.d(t, { Z: () => r });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-06_referral_program_badge_banner',
    label: 'Referral Program Badge Banner Experiment',
    defaultConfig: {
        enabled: !1,
        nDelayDays: 0
    },
    treatments: [
        {
            id: 0,
            label: 'Control group. Users experience existing flow.',
            config: {
                enabled: !1,
                nDelayDays: 0
            }
        },
        {
            id: 1,
            label: 'Treatment group. Users with a see a badge and updated marketing page immediately after receiving a referral trial.',
            config: {
                enabled: !0,
                nDelayDays: 0
            }
        },
        {
            id: 2,
            label: 'Treatment group. Users with a see a badge and updated marketing page 6 days after receiving a referral trial.',
            config: {
                enabled: !0,
                nDelayDays: 6
            }
        }
    ]
});
