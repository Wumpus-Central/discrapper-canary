n.d(t, { b: () => i });
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2024-09_collectibles_shop_preload',
        label: 'Collectibles Shop Preload',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Preloads collectible shop payload',
                config: { enabled: !0 }
            }
        ]
    }),
    i = (e) => r.useExperiment({ location: e }).enabled;
