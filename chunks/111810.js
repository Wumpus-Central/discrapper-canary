r.d(n, {
    HZ: function () {
        return o;
    },
    kf: function () {
        return l;
    },
    p7: function () {
        return u;
    }
});
var i = r(192379),
    a = r(818083),
    s = r(987338);
let o = (0, a.B)({
        kind: 'user',
        id: '2024-12_confetti_potion',
        label: 'Confetti Potion Experiment',
        commonTriggerPoint: s.$P.CONNECTION_OPEN,
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
    l = (e) => i.useMemo(() => o.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }), [e]).canSeeConfetti,
    u = (e) => i.useMemo(() => o.getCurrentConfig({ location: e }, { autoTrackExposure: !0 }), [e]).canSeeConfetti;
