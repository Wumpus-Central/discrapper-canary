n.d(t, {
    X: () => a,
    i: () => l
});
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
        kind: 'user',
        id: '2025-02_name_plate_experiment',
        label: 'Nameplates Experiment',
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        defaultConfig: { canView: !1 },
        treatments: [
            {
                id: 1,
                label: 'Can see',
                config: { canView: !0 }
            },
            {
                id: 2,
                label: 'Can see (updated)',
                config: { canView: !0 }
            }
        ]
    }),
    a = (e) => l.useExperiment({ location: e }, { autoTrackExposure: !1 }).canView;
