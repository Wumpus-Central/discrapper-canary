n.d(t, {
    B: () => a,
    S: () => o
});
var r = n(818083),
    l = n(987338);
let a = (0, r.B)({
        kind: 'user',
        id: '2025-05_shop_index_page_menu',
        label: 'Shop Index Page Menu',
        defaultConfig: { showShopMenuWithIndexPage: !1 },
        commonTriggerPoint: l.$P.COLLECTIBLES_SHOP_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Show shop menu with index page',
                config: { showShopMenuWithIndexPage: !0 }
            }
        ]
    }),
    o = (e) => a.useExperiment({ location: e }).showShopMenuWithIndexPage;
