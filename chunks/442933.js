n.d(t, {
    H: () => a,
    e: () => o
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
        kind: 'user',
        id: '2025-02_nameplate_purchasing',
        label: 'Nameplate Purchase Experiment',
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        defaultConfig: { canPurchase: !1 },
        treatments: [
            {
                id: 1,
                label: 'Can purchase',
                config: { canPurchase: !0 }
            }
        ]
    }),
    a = (e) => {
        let { canPurchase: t } = o.useExperiment({ location: e }, { autoTrackExposure: !1 });
        return t;
    };
