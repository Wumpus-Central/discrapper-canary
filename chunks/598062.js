n.d(t, {
    AK: () => l,
    PW: () => s,
    XD: () => o,
    i5: () => a
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
        kind: 'user',
        id: '2025-02_name_plate_experiment',
        label: 'Nameplates Experiment',
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        defaultConfig: {
            canView: !1,
            canViewAll: !1,
            hasUpdatedDMBehavior: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Can see',
                config: {
                    canView: !0,
                    canViewAll: !1,
                    hasUpdatedDMBehavior: !1
                }
            },
            {
                id: 2,
                label: 'Can see (updated)',
                config: {
                    canView: !0,
                    canViewAll: !0,
                    hasUpdatedDMBehavior: !0
                }
            }
        ]
    }),
    o = (e) => a.useExperiment({ location: e }, { autoTrackExposure: !1 }).canView,
    s = (e) => a.useExperiment({ location: e }, { autoTrackExposure: !1 }).canViewAll,
    l = (e) => a.useExperiment({ location: e }, { autoTrackExposure: !1 }).hasUpdatedDMBehavior;
