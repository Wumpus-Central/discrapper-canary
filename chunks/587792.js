l.d(t, {
    g: () => n,
    o: () => i
});
var o = l(818083),
    r = l(987338);
let n = (0, o.B)({
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
    i = (e) => n.useExperiment({ location: e }).showPairedDecoUpsell;
