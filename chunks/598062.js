n.d(t, {
    X: () => o,
    i: () => i
});
var r = n(818083),
    l = n(987338);
let i = (0, r.B)({
        kind: 'user',
        id: '2025-02_name_plate_experiment',
        label: 'Nameplates Experiment',
        commonTriggerPoint: l.$P.CONNECTION_OPEN,
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
    o = (e) => i.useExperiment({ location: e }, { autoTrackExposure: !1 }).canView;
