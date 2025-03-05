n.d(t, { H: () => i });
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2025-02_nameplate_purchasing',
        label: 'Nameplate Purchase Experiment',
        defaultConfig: { canPurchase: !1 },
        treatments: [
            {
                id: 1,
                label: 'Can purchase',
                config: { canPurchase: !0 }
            }
        ]
    }),
    i = (e) => {
        let { canPurchase: t } = r.useExperiment({ location: e }, { autoTrackExposure: !1 });
        return t;
    };
