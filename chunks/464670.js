n.d(t, {
    PU: () => a,
    XS: () => l
});
var i,
    r = n(818083),
    s = n(987338),
    l = (((i = {})[(i.Control = 0)] = 'Control'), (i[(i.Variant1 = 1)] = 'Variant1'), (i[(i.Variant2 = 2)] = 'Variant2'), i);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-04_member_hub_gifting',
    label: 'Member Hub Gifting',
    defaultConfig: { cohort: 0 },
    commonTriggerPoint: s.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: 'Users see existing member hub gifting screen',
            config: { cohort: 0 }
        },
        {
            id: 1,
            label: 'Users see variant 1 of member hub gifting screen and coachmark',
            config: { cohort: 1 }
        },
        {
            id: 2,
            label: 'Users see variant 2 of member hub gifting screen',
            config: { cohort: 2 }
        }
    ]
});
