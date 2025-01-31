n.d(t, { i: () => l });
var i = n(818083);
(0, i.B)({
    kind: 'user',
    id: '2024-01_expiring_status',
    label: 'Expiring status Experiment ',
    defaultConfig: { expiringStatus: !1 },
    treatments: [
        {
            id: 1,
            label: 'allow expiring status',
            config: { expiringStatus: !0 }
        }
    ]
});
let l = (0, i.B)({
    kind: 'user',
    id: '2025-01_expiring_status_v2',
    label: 'Expiring status Experiment V2',
    defaultConfig: {
        expiringStatus: !1,
        defaultClickExpire: !1
    },
    treatments: [
        {
            id: 1,
            label: 'allow expiring status',
            config: {
                expiringStatus: !0,
                defaultClickExpire: !1
            }
        },
        {
            id: 2,
            label: 'default change status click expires after 24h',
            config: {
                expiringStatus: !0,
                defaultClickExpire: !0
            }
        }
    ]
});
