"use strict";
n.d(t, { A: () => h });
var r = n(311907),
    i = n(73153),
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
function f() {
    (o = {}), (l = {}), (u = {}), (c = {});
}
class p extends r.Ay.Store {
    static displayName = "SKUPricesStore";
    initialize() {
        this.waitFor(s.default), this.syncWith([s.default], f);
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
let h = new p(i.h, {
    LOGOUT: f,
    SKUS_PRICING_FETCH_START: function (e) {
        let { priceId: t } = e;
        _(t, { type: "loading" });
    },
    SKUS_PRICING_FETCH_SUCCESS: function (e) {
        let { priceId: t, data: n } = e,
            r = Date.now();
        _(t, { type: "success", fetchedAt: r }),
            "application" === t.type &&
                _({ type: "skus", skuIds: Object.keys(n.skuPriceMap) }, { type: "success", fetchedAt: r }),
            (l = { ...l, ...n.pricingResultIdMap }),
            (c = { ...c, ...n.skuPriceMap }),
            (u = { ...u, ...n.rewardResultIdMap });
    },
    SKUS_PRICING_FETCH_FAIL: function (e) {
        let { priceId: t } = e;
        _(t, { type: "error", fetchedAt: Date.now() });
    },
});
