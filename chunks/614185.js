n.d(t, {
    D: () => s,
    E: () => a
});
var i = n(818083),
    r = n(987338);
let a = (0, i.B)({
        kind: 'user',
        id: '2025-02_name_plate_experiment',
        label: 'Nameplates Experiment',
        commonTriggerPoint: r.$P.CONNECTION_OPEN,
        defaultConfig: {
            canSee: !1,
            canBuy: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Can see',
                config: {
                    canSee: !0,
                    canBuy: !1
                }
            },
            {
                id: 2,
                label: 'Can see and buy',
                config: {
                    canSee: !0,
                    canBuy: !0
                }
            }
        ]
    }),
    s = (e) => a.useExperiment({ location: e }, { autoTrackExposure: !1 }).canSee;
