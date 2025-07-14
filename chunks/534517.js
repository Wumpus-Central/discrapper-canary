r.d(t, {
    B: () => o,
    S: () => i
});
var n = r(818083),
    l = r(987338);
let o = (0, n.B)({
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
    i = (e) => o.useExperiment({ location: e }).showShopMenuWithIndexPage;
