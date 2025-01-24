var i = n(818083),
    r = n(987338);
let l = (0, i.B)({
    kind: 'user',
    id: '2025-01_tiered_tenure_badges_mobile',
    label: 'Tiered Tenure Badging Mobile Experience',
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 2,
            label: 'Enable Tiered Tenure Badges v2 on mobile',
            config: {
                enabled: !0,
                version: 2
            }
        }
    ]
});
t.Z = l;
