n.d(t, {
    ed: () => u,
    hv: () => o,
    k: () => s,
    oj: () => l
});
var i = n(311570),
    r = n(818083),
    a = n(987338);
let s = (0, r.B)({
        kind: 'user',
        id: '2024-10_shop_variants',
        label: 'Shop Variants Experiment',
        defaultConfig: { variantsReturnStyle: i.v.INDIVIDUAL_PRODUCTS },
        treatments: [
            {
                id: 1,
                label: 'Return Variants as Group',
                config: { variantsReturnStyle: i.v.VARIANTS_GROUP }
            }
        ],
        commonTriggerPoint: a.$P.COLLECTIBLES_SHOP_OPEN
    }),
    o = (e) => s.useExperiment({ location: e }).variantsReturnStyle,
    l = (e) => s.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).variantsReturnStyle,
    u = (e) => o(e) === i.v.VARIANTS_GROUP;
