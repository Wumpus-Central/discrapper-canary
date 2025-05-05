n.d(t, {
    HZ: () => o,
    V1: () => l,
    kf: () => a,
    p7: () => s
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
        kind: 'user',
        id: '2024-12_confetti_potion',
        label: 'Confetti Potion Experiment',
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        defaultConfig: {
            canPurchase: !1,
            canSeeConfetti: !1,
            canSeeEducation: !1,
            canSeeUpsells: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Viewer Treatment',
                config: {
                    canPurchase: !1,
                    canSeeConfetti: !0,
                    canSeeEducation: !0,
                    canSeeUpsells: !1
                }
            },
            {
                id: 2,
                label: 'Purchaser Treatment',
                config: {
                    canPurchase: !0,
                    canSeeConfetti: !0,
                    canSeeEducation: !0,
                    canSeeUpsells: !0
                }
            }
        ]
    }),
    a = (e) => o.useExperiment({ location: e }, { autoTrackExposure: !1 }).canSeeConfetti,
    s = (e) => o.useExperiment({ location: e }, { autoTrackExposure: !0 }).canSeeConfetti,
    l = (e) => o.useExperiment({ location: e }, { autoTrackExposure: !1 }).canPurchase;
