n.d(t, { J: () => o });
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    id: '2025-05_tenure_ambient_badges',
    kind: 'user',
    label: 'Tenure Ambient Badges',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enables new ambient badges for the Nitro tenure badge tooltips.',
            config: { enabled: !0 }
        }
    ]
});
