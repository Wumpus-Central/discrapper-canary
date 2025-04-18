n.d(t, {
    G: () => o,
    u: () => a
});
var r = n(818083),
    i = n(987338),
    a = (function (e) {
        return (e[(e.NONE = 0)] = 'NONE'), (e[(e.POPULAR = 1)] = 'POPULAR'), (e[(e.RECENT = 2)] = 'RECENT'), e;
    })({});
let o = (0, r.B)({
    kind: 'user',
    id: '2024-10_shop_skus_in_gift_flow',
    label: 'Gift Collectibles in DM',
    defaultConfig: {
        enabled: !1,
        showBothNitroSkusInCategorySelect: !1,
        giftRecommendationAlgorithm: 0
    },
    commonTriggerPoint: i.$P.DM_GDM_LIST_RENDER,
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
