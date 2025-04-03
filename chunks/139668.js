n.d(t, { R: () => l });
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2025-03_shop_feed_item_size_experiment',
        label: 'Shop Feed Item Size Experiment',
        defaultConfig: { numFeedItems: 36 },
        treatments: [
            {
                id: 1,
                label: 'Increased feed size',
                config: { numFeedItems: 72 }
            }
        ]
    }),
    l = (e) => r.useExperiment({ location: e }).numFeedItems;
