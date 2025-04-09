n.d(t, {
    XD: () => o,
    i5: () => i
});
var r = n(818083),
    l = n(987338);
let i = (0, r.B)({
        kind: 'user',
        id: '2025-02_name_plate_experiment',
        label: 'Nameplates Experiment',
        commonTriggerPoint: l.$P.CONNECTION_OPEN,
        defaultConfig: {
            canSee: !1,
            canSeeOffline: !1,
            hasUpdatedDMBehavior: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Can see',
                config: {
                    canSee: !0,
                    canSeeOffline: !1,
                    hasUpdatedDMBehavior: !1
                }
            },
            {
                id: 2,
                label: 'Can see (updated)',
                config: {
                    canSee: !0,
                    canSeeOffline: !0,
                    hasUpdatedDMBehavior: !0
                }
            }
        ]
    }),
    o = (e) => i.useExperiment({ location: e }, { autoTrackExposure: !1 }).canSee;
