r.d(n, {
    E: function () {
        return o;
    }
});
var i = r(818083),
    a = r(987338);
let o = (0, i.B)({
    kind: 'user',
    id: '2024-08_tiered_tenure_badges',
    label: 'Tiered Tenure Badging',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enable Tiered Tenure Badges v1',
            config: {
                enabled: !0,
                version: 1
            }
        },
        {
            id: 2,
            label: 'Enable Tiered Tenure Badges v2',
            config: {
                enabled: !0,
                version: 2
            }
        }
    ]
});
n.Z = o;
