"use strict";
n.d(t, { A: () => h });
var i = n(17928),
    r = n(228366),
    a = n(773669),
    s = n(403362);
let l = {},
    o = {},
    d = {},
    c = {};
function u(e) {
    return "application" === e.type ? `application:${e.applicationId}` : `skus:${e.skuId}`;
}
function _(e, t) {
    l =
        "application" === e.type
            ? { ...l, [u({ type: "application", applicationId: e.applicationId })]: t }
            : { ...l, ...Object.fromEntries(e.skuIds.map((e) => [u({ type: "sku", skuId: e }), t])) };
}
function E() {
    (l = {}), (o = {}), (d = {}), (c = {});
}
class A extends i.Ay.Store {
    static displayName = "SKUPricesStore";
    initialize() {
        this.waitFor(a.default), this.syncWith([a.default], E);
    }
    getPricesForSkuId(e) {
        if (null == e) return;
        let t = c[e]?.pricingResultId;
        if (null != t) return o[t];
    }
    getFetchStateForSkuId(e) {
        if (null != e) return l[u({ type: "sku", skuId: e })];
    }
    getFetchStateForApplicationId(e) {
        if (null != e) return l[u({ type: "application", applicationId: e })];
    }
    getPromotionIdsForSkuId(e) {
        if (null != e) return c[e]?.storefrontPromotionIds;
    }
    getRewardsForSkuId(e) {
        if (null == e) return;
        let t = c[e];
        if (null != t) return t.rewardResultIds.map((e) => d[e]).filter(s.Vq);
    }
}
let h = new A(r.h, {
    LOGOUT: E,
    SKUS_PRICING_FETCH_START: function (e) {
        let { priceId: t } = e;
        _(t, { type: "loading" });
    },
    SKUS_PRICING_FETCH_SUCCESS: function (e) {
        let { priceId: t, data: n } = e,
            i = Date.now();
        _(t, { type: "success", fetchedAt: i }),
            "application" === t.type &&
                _({ type: "skus", skuIds: Object.keys(n.skuPriceMap) }, { type: "success", fetchedAt: i }),
            (o = { ...o, ...n.pricingResultIdMap }),
            (c = { ...c, ...n.skuPriceMap }),
            (d = { ...d, ...n.rewardResultIdMap });
    },
    SKUS_PRICING_FETCH_FAIL: function (e) {
        let { priceId: t } = e;
        _(t, { type: "error", fetchedAt: Date.now() });
    },
    STOREFRONT_PROMOTION_ID_OVERRIDE_SET: E,
});
