n.d(t, {
    C7: () => s,
    DW: () => a,
    i5: () => o
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
        kind: 'user',
        id: '2025-02_name_plate_experiment',
        label: 'Nameplates Experiment',
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        defaultConfig: { canSee: !1 },
        treatments: [
            {
                id: 1,
                label: 'Can see',
                config: {
                    canSee: !0,
                    defaultPaletteOpacity: '33'
                }
            },
            {
                id: 2,
                label: 'Can see and default palette opacity 10%',
                config: {
                    canSee: !0,
                    defaultPaletteOpacity: '1A'
                }
            }
        ]
    }),
    a = (e) => o.useExperiment({ location: e }, { autoTrackExposure: !1 }).canSee,
    s = (e) => o.useExperiment({ location: e }, { autoTrackExposure: !1 }).defaultPaletteOpacity;
