n.d(t, { _: () => s });
var r = n(540059),
    i = n(818083),
    o = n(987338);
let a = (0, i.B)({
    kind: 'user',
    id: '2025-02_rive_staff_testing',
    label: 'Rive staff testing',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: o.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: 'Control',
            config: { enabled: !1 }
        },
        {
            id: 1,
            label: 'Enable Rive staff testing',
            config: { enabled: !0 }
        }
    ]
});
function s(e) {
    let t = (0, r.Q3)(''.concat(e, '-rive-experiment')),
        { enabled: n } = a.useExperiment({ location: e });
    return n && t;
}
