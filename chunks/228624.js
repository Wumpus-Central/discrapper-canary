n.d(t, {
    ed: () => c,
    hv: () => s,
    k: () => o,
    oj: () => l
});
var r = n(311570),
    i = n(818083),
    a = n(987338);
let o = (0, i.B)({
        kind: 'user',
        id: '2024-10_shop_variants',
        label: 'Shop Variants Experiment',
        defaultConfig: { variantsReturnStyle: r.v.INDIVIDUAL_PRODUCTS },
        treatments: [
            {
                id: 1,
                label: 'Return Variants as Group',
                config: { variantsReturnStyle: r.v.VARIANTS_GROUP }
            }
        ],
        commonTriggerPoint: a.$P.COLLECTIBLES_SHOP_OPEN
    }),
    s = (e) => o.useExperiment({ location: e }).variantsReturnStyle,
    l = (e) => o.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).variantsReturnStyle,
    c = (e) => s(e) === r.v.VARIANTS_GROUP;
