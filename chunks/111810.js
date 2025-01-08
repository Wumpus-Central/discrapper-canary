r.d(n, {
    HZ: function () {
        return s;
    },
    V1: function () {
        return u;
    },
    kf: function () {
        return o;
    },
    p7: function () {
        return l;
    }
});
var i = r(818083),
    a = r(987338);
let s = (0, i.B)({
        kind: 'user',
        id: '2024-12_confetti_potion',
        label: 'Confetti Potion Experiment',
        commonTriggerPoint: a.$P.CONNECTION_OPEN,
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
    o = (e) => s.useExperiment({ location: e }, { autoTrackExposure: !1 }).canSeeConfetti,
    l = (e) => s.useExperiment({ location: e }, { autoTrackExposure: !0 }).canSeeConfetti,
    u = (e) => s.useExperiment({ location: e }, { autoTrackExposure: !1 }).canPurchase;
