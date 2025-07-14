r.d(t, {
    A: () => o,
    s: () => i
});
var n = r(818083),
    l = r(987338);
let o = (0, n.B)({
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
    i = (e) => o.useExperiment({ location: e }).showShopHomeSorting;
