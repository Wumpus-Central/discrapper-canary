r.d(t, {
    B: () => i,
    S: () => o
});
var n = r(818083),
    l = r(987338);
let i = (0, n.B)({
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
    o = (e) => i.useExperiment({ location: e }).showShopMenuWithIndexPage;
