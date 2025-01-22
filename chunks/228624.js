r.d(n, {
    ed: function () {
        return c;
    },
    hv: function () {
        return l;
    },
    k: function () {
        return s;
    },
    oj: function () {
        return u;
    }
});
var i = r(311570),
    a = r(818083),
    o = r(987338);
let s = (0, a.B)({
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
        commonTriggerPoint: o.$P.COLLECTIBLES_SHOP_OPEN
    }),
    l = (e) => s.useExperiment({ location: e }).variantsReturnStyle,
    u = (e) => s.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).variantsReturnStyle,
    c = (e) => l(e) === i.v.VARIANTS_GROUP;
