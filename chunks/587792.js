r.d(t, {
    g: () => a,
    o: () => i,
});
var n = r(818083),
    l = r(987338);
let a = (0, n.B)({
        kind: "user",
        id: "2025-02_shop_paired_deco_upsell",
        label: "Shop Paired Deco Upsell Experiment",
        defaultConfig: { showPairedDecoUpsell: !1 },
        treatments: [
            {
                id: 1,
                label: "Show paired deco upsell",
                config: { showPairedDecoUpsell: !0 },
            },
        ],
        commonTriggerPoint: l.$P.COLLECTIBLES_SHOP_OPEN,
    }),
    i = (e) => a.useExperiment({ location: e }).showPairedDecoUpsell;
