n.d(t, { Z: () => l });
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: 'user',
    id: '2025-07_att_exposure_aa',
    label: 'ATT exposure experiment',
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    defaultConfig: { enabled: !0 },
    treatments: [
        {
            id: 1,
            label: 'T1',
            config: { enabled: !0 }
        },
        {
            id: 2,
            label: 'T2',
            config: { enabled: !0 }
        }
    ]
});
