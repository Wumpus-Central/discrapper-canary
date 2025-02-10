n.d(t, {
    g: () => a,
    o: () => s
});
var i = n(818083),
    r = n(987338);
let a = (0, i.B)({
        kind: 'user',
        id: '2025-02_shop_paired_deco_upsell',
        label: 'Shop Paired Deco Upsell Experiment',
        defaultConfig: { showPairedDecoUpsell: !1 },
        treatments: [
            {
                id: 1,
                label: 'Show paired deco upsell',
                config: { showPairedDecoUpsell: !0 }
            }
        ],
        commonTriggerPoint: r.$P.COLLECTIBLES_SHOP_OPEN
    }),
    s = (e) => a.useExperiment({ location: e }).showPairedDecoUpsell;
