n.d(t, { A: () => I });
var i = n(17928),
    r = n(228366),
    a = n(773669),
    s = n(403362);
let l = {},
    o = {},
    d = {},
    c = {},
    u = {};
function _(e) {
    return "application" === e.type ? `application:${e.applicationId}` : `skus:${e.skuId}`;
}
function E(e, t) {
    l =
        "application" === e.type
            ? { ...l, [_({ type: "application", applicationId: e.applicationId })]: t }
            : { ...l, ...Object.fromEntries(e.skuIds.map((e) => [_({ type: "sku", skuId: e }), t])) };
}
function A() {
    ((l = {}), (o = {}), (d = {}), (c = {}), (u = {}));
}
class h extends i.Ay.Store {
    static displayName = "SKUPricesStore";
    initialize() {
        (this.waitFor(a.default), this.syncWith([a.default], A));
    }
    getPricesForSkuId(e) {
        if (null == e) return;
        let t = c[e]?.pricingResultId;
        if (null != t) return o[t];
    }
    getFetchStateForSkuId(e) {
        if (null != e) return l[_({ type: "sku", skuId: e })];
    }
    getFetchStateForApplicationId(e) {
        if (null != e) return l[_({ type: "application", applicationId: e })];
    }
    getPromotionIdsForSkuId(e) {
        if (null != e) return c[e]?.storefrontPromotionIds;
    }
    getOffersForSkuId(e) {
        if (null == e) return;
        let t = c[e]?.offerResultIds;
        if (null != t) return t.map((e) => u[e]).filter(s.Vq);
    }
    getRewardsForSkuId(e) {
        if (null == e) return;
        let t = c[e];
        if (null != t) return t.rewardResultIds.map((e) => d[e]).filter(s.Vq);
    }
}
let I = new h(r.h, {
    LOGOUT: A,
    SKUS_PRICING_FETCH_START: function (e) {
        let { priceId: t } = e;
        E(t, { type: "loading" });
    },
    SKUS_PRICING_FETCH_SUCCESS: function (e) {
        let { priceId: t, data: n } = e,
            i = Date.now();
        (E(t, { type: "success", fetchedAt: i }),
            "application" === t.type &&
                E({ type: "skus", skuIds: Object.keys(n.skuPriceMap) }, { type: "success", fetchedAt: i }),
            (o = { ...o, ...n.pricingResultIdMap }),
            (c = { ...c, ...n.skuPriceMap }),
            (d = { ...d, ...n.rewardResultIdMap }),
            (u = { ...u, ...n.offerResultIdMap }));
    },
    SKUS_PRICING_FETCH_FAIL: function (e) {
        let { priceId: t } = e;
        E(t, { type: "error", fetchedAt: Date.now() });
    },
    STOREFRONT_PROMOTION_ID_OVERRIDE_SET: A,
});
