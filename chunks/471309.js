n.d(t, {
    E: () => o,
    Z: () => a
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
        kind: 'user',
        id: '2024-08_tiered_tenure_badges',
        label: 'Tiered Tenure Badging',
        defaultConfig: {
            enabled: !1,
            isBadgeVersion2: !1
        },
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Enable Tiered Tenure Badges v1',
                config: {
                    enabled: !0,
                    version: 1,
                    isBadgeVersion2: !1
                }
            },
            {
                id: 2,
                label: 'Enable Tiered Tenure Badges v2',
                config: {
                    enabled: !0,
                    version: 2,
                    isBadgeVersion2: !0
                }
            }
        ]
    }),
    a = o;
