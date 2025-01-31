n.d(t, {
    N: () => r,
    n: () => l
});
let i = (0, n(818083).B)({
        kind: 'user',
        id: '2024-12_shop_home_experiment',
        label: 'Shop Home API Experiment',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Use Shop Home API',
                config: { enabled: !0 }
            },
            {
                id: 2,
                label: 'Use Shop Home API, include popular picks',
                config: {
                    enabled: !0,
                    includePopularPicks: !0
                }
            }
        ]
    }),
    l = (e) => i.useExperiment({ location: e }).enabled,
    r = (e) => i.useExperiment({ location: e }).includePopularPicks;
