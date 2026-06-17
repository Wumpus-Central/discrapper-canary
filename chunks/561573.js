"use strict";
n.d(t, { A: () => p });
var i = n(17928),
    r = n(228366),
    s = n(773669),
    a = n(403362);
let o = {},
    l = {},
    u = {},
    c = {};
function d(e) {
    return "application" === e.type ? `application:${e.applicationId}` : `skus:${e.skuId}`;
}
function _(e, t) {
    o =
        "application" === e.type
            ? { ...o, [d({ type: "application", applicationId: e.applicationId })]: t }
            : { ...o, ...Object.fromEntries(e.skuIds.map((e) => [d({ type: "sku", skuId: e }), t])) };
}
function h() {
    (o = {}), (l = {}), (u = {}), (c = {});
}
class f extends i.Ay.Store {
    static displayName = "SKUPricesStore";
    initialize() {
        this.waitFor(s.default), this.syncWith([s.default], h);
    }
    getPricesForSkuId(e) {
        if (null == e) return;
        let t = c[e]?.pricingResultId;
        if (null != t) return l[t];
    }
    getFetchStateForSkuId(e) {
        if (null != e) return o[d({ type: "sku", skuId: e })];
    }
    getFetchStateForApplicationId(e) {
        if (null != e) return o[d({ type: "application", applicationId: e })];
    }
    getRewardsForSkuId(e) {
        if (null == e) return;
        let t = c[e];
        if (null != t) return t.rewardResultIds.map((e) => u[e]).filter(a.Vq);
    }
}
let p = new f(r.h, {
    LOGOUT: h,
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
            (l = { ...l, ...n.pricingResultIdMap }),
            (c = { ...c, ...n.skuPriceMap }),
            (u = { ...u, ...n.rewardResultIdMap });
    },
    SKUS_PRICING_FETCH_FAIL: function (e) {
        let { priceId: t } = e;
        _(t, { type: "error", fetchedAt: Date.now() });
    },
    STOREFRONT_PROMOTION_ID_OVERRIDE_SET: h,
});
