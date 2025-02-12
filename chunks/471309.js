n.d(t, {
    E: () => a,
    Z: () => s
});
var i = n(818083),
    r = n(987338);
let a = (0, i.B)({
        kind: 'user',
        id: '2024-08_tiered_tenure_badges',
        label: 'Tiered Tenure Badging',
        defaultConfig: {
            enabled: !1,
            isBadgeVersion2: !1
        },
        commonTriggerPoint: r.$P.CONNECTION_OPEN,
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
    s = a;
