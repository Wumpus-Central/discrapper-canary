"use strict";
let i;
n.d(t, { A: () => m });
var r = n(17928),
    a = n(228366),
    s = n(32731),
    l = n(773669);
let o = new Map(),
    d = new Set(),
    c = new Set(),
    u = new Map(),
    _ = new Map(),
    E = new Map();
function A(e) {
    var t;
    let n = u.get(e.id),
        i =
            ((t = s.A.createFromServer(e)),
            null == n ||
                (null == t.price && null != n.price && (t.price = n.price),
                0 === Object.keys(t.prices).length && Object.keys(n.prices).length > 0 && (t.prices = n.prices),
                null == t.orbsReward && null != n.orbsReward && (t.orbsReward = n.orbsReward),
                0 === t.eligibleOffers.length && n.eligibleOffers.length > 0 && (t.eligibleOffers = n.eligibleOffers)),
            t);
    u.set(e.id, i),
        d.delete(e.id),
        c.delete(e.id),
        e.bundled_sku_ids?.forEach((t) => {
            o.set(t, e.id);
        }),
        _.has(e.application_id) || _.set(e.application_id, new Set()),
        _.get(e.application_id).add(e.id);
}
function h(e) {
    A(e.sku),
        null != e.child_skus && e.child_skus.forEach((e) => A(e)),
        null != e.alternative_skus && e.alternative_skus.forEach((e) => A(e));
}
function I(e) {
    let { entitlements: t } = e;
    for (let e of t) null != e.sku && A(e.sku);
}
function f() {
    (o = new Map()), (d = new Set()), (c = new Set()), (u = new Map()), (_ = new Map()), (E = new Map());
}
function p() {
    if (i === l.default.locale) return !1;
    (i = l.default.locale), f();
}
class T extends r.il {
    static displayName = "SKUStore";
    initialize() {
        this.waitFor(l.default), this.syncWith([l.default], p), (i = l.default.locale);
    }
    get(e) {
        return u.get(e);
    }
    getForApplication(e) {
        let t = _.get(e);
        return null == t ? [] : Array.from(t).map((e) => u.get(e));
    }
    isFetching(e) {
        return d.has(e);
    }
    getFetchingSkuIds() {
        return [...d.keys()];
    }
    getSKUs() {
        return Object.fromEntries(u);
    }
    getParentSKU(e) {
        let t = o.get(e);
        if (null != t) return this.get(t);
    }
    didFetchingSkuFail(e) {
        return c.has(e);
    }
}
let m = new T(a.h, {
    STORE_LISTINGS_FETCH_START: function (e) {
        let { skuId: t } = e;
        d.add(t);
    },
    STORE_LISTINGS_FETCH_FAIL: function (e) {
        let { skuId: t } = e;
        d.delete(t), c.add(t);
    },
    STORE_LISTINGS_FETCH_SUCCESS: function (e) {
        let { storeListings: t } = e;
        for (let e of t) h(e);
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { storeListing: t } = e;
        h(t);
    },
    GIFT_CODE_RESOLVE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        if (null == t.store_listing) return !1;
        A(t.store_listing.sku);
    },
    SKU_FETCH_START: function (e) {
        let { skuId: t } = e;
        d.add(t);
    },
    SKU_FETCH_SUCCESS: function (e) {
        let { sku: t } = e;
        A(t);
    },
    SKU_FETCH_FAIL: function (e) {
        let { skuId: t } = e;
        d.delete(t), c.add(t);
    },
    SKUS_FETCH_SUCCESS: function (e) {
        let { guildId: t, skus: n } = e;
        for (let e of n) A(e);
        null != t && E.set(t, new Set(n.map((e) => e.id)));
    },
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: I,
    APPLICATION_STORE_CLEAR_DATA: f,
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: I,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: I,
});
