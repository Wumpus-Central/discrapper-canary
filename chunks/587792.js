n.d(t, { g: () => i });
var r = n(818083),
    l = n(987338);
let i = (0, r.B)({
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
    commonTriggerPoint: l.$P.COLLECTIBLES_SHOP_OPEN
});
