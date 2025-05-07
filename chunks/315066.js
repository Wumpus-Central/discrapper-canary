n.d(t, { s: () => a });
var r = n(818083),
    l = n(987338);
let i = (0, r.B)({
        kind: 'user',
        id: '2025-04_shop_home_sorting',
        label: 'Shop Home Sorting',
        defaultConfig: { showShopHomeSorting: !1 },
        commonTriggerPoint: l.$P.COLLECTIBLES_SHOP_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Use shop home sorting',
                config: { showShopHomeSorting: !0 }
            }
        ]
    }),
    a = (e) => i.useExperiment({ location: e }).showShopHomeSorting;
