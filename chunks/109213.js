r.d(n, {
    G: function () {
        return s;
    },
    u: function () {
        return i;
    }
});
var i,
    a = r(818083),
    o = r(987338);
!(function (e) {
    (e[(e.NONE = 0)] = 'NONE'), (e[(e.POPULAR = 1)] = 'POPULAR'), (e[(e.RECENT = 2)] = 'RECENT');
})(i || (i = {}));
let s = (0, a.B)({
    kind: 'user',
    id: '2024-10_shop_skus_in_gift_flow',
    label: 'Gift Collectibles in DM',
    defaultConfig: {
        enabled: !1,
        showBothNitroSkusInCategorySelect: !1,
        giftRecommendationAlgorithm: 0
    },
    commonTriggerPoint: o.$P.DM_GDM_LIST_RENDER,
    treatments: [
        {
            id: 1,
            label: 'Gift Collectibles in DM, with existing Nitro flow, showing popular items',
            config: {
                enabled: !0,
                showBothNitroSkusInCategorySelect: !1,
                giftRecommendationAlgorithm: 1
            }
        },
        {
            id: 2,
            label: 'Gift Collectibles in DM, with existing Nitro flow, showing recent items',
            config: {
                enabled: !0,
                showBothNitroSkusInCategorySelect: !1,
                giftRecommendationAlgorithm: 2
            }
        },
        {
            id: 3,
            label: 'Gift Collectibles in DM, select Nitro SKU from category, showing popular items',
            config: {
                enabled: !0,
                showBothNitroSkusInCategorySelect: !0,
                giftRecommendationAlgorithm: 1
            }
        },
        {
            id: 4,
            label: 'Gift Collectibles in DM, select Nitro SKU from category, showing recent items',
            config: {
                enabled: !0,
                showBothNitroSkusInCategorySelect: !0,
                giftRecommendationAlgorithm: 2
            }
        }
    ]
});
