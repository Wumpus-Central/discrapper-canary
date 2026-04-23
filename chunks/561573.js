"use strict";
n.d(t, { A: () => m });
var i = n(17928),
    r = n(228366),
    s = n(773669),
    a = n(403362);
let o = {},
    l = {},
    d = {},
    _ = {};
function u(e) {
    return "application" === e.type ? `application:${e.applicationId}` : `skus:${e.skuId}`;
}
function c(e, t) {
    o =
        "application" === e.type
            ? { ...o, [u({ type: "application", applicationId: e.applicationId })]: t }
            : { ...o, ...Object.fromEntries(e.skuIds.map((e) => [u({ type: "sku", skuId: e }), t])) };
}
function E() {
    (o = {}), (l = {}), (d = {}), (_ = {});
}
class h extends i.Ay.Store {
    static displayName = "SKUPricesStore";
    initialize() {
        this.waitFor(s.default), this.syncWith([s.default], E);
    }
    getPricesForSkuId(e) {
        if (null == e) return;
        let t = _[e]?.pricingResultId;
        if (null != t) return l[t];
    }
    getFetchStateForSkuId(e) {
        if (null != e) return o[u({ type: "sku", skuId: e })];
    }
    getFetchStateForApplicationId(e) {
        if (null != e) return o[u({ type: "application", applicationId: e })];
    }
    getRewardsForSkuId(e) {
        if (null == e) return;
        let t = _[e];
        if (null != t) return t.rewardResultIds.map((e) => d[e]).filter(a.Vq);
    }
}
let m = new h(r.h, {
    LOGOUT: E,
    SKUS_PRICING_FETCH_START: function (e) {
        let { priceId: t } = e;
        c(t, { type: "loading" });
    },
    SKUS_PRICING_FETCH_SUCCESS: function (e) {
        let { priceId: t, data: n } = e,
            i = Date.now();
        c(t, { type: "success", fetchedAt: i }),
            "application" === t.type &&
                c({ type: "skus", skuIds: Object.keys(n.skuPriceMap) }, { type: "success", fetchedAt: i }),
            (l = { ...l, ...n.pricingResultIdMap }),
            (_ = { ..._, ...n.skuPriceMap }),
            (d = { ...d, ...n.rewardResultIdMap });
    },
    SKUS_PRICING_FETCH_FAIL: function (e) {
        let { priceId: t } = e;
        c(t, { type: "error", fetchedAt: Date.now() });
    },
});
