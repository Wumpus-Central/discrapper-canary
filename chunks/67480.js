"use strict";
let i;
n.d(t, { A: () => T });
var r = n(17928),
    s = n(228366),
    a = n(32731),
    o = n(773669),
    l = n(760751);
let _ = new Map(),
    d = new Set(),
    u = new Set(),
    c = new Map(),
    E = new Map(),
    h = new Map();
function m(e) {
    var t;
    let n = c.get(e.id),
        i =
            ((t = a.A.createFromServer(e)),
            null == n ||
                (null == t.price && null != n.price && (t.price = n.price),
                0 === Object.keys(t.prices).length && Object.keys(n.prices).length > 0 && (t.prices = n.prices),
                null == t.orbsReward && null != n.orbsReward && (t.orbsReward = n.orbsReward),
                0 === t.eligibleOffers.length && n.eligibleOffers.length > 0 && (t.eligibleOffers = n.eligibleOffers)),
            t);
    c.set(e.id, i),
        d.delete(e.id),
        u.delete(e.id),
        e.bundled_sku_ids?.forEach((t) => {
            _.set(t, e.id);
        }),
        E.has(e.application_id) || E.set(e.application_id, new Set()),
        E.get(e.application_id).add(e.id);
}
function f(e) {
    m(e.sku),
        null != e.child_skus && e.child_skus.forEach((e) => m(e)),
        null != e.alternative_skus && e.alternative_skus.forEach((e) => m(e));
}
function g(e) {
    let { entitlements: t } = e;
    for (let e of t) null != e.sku && m(e.sku);
}
function A() {
    (_ = new Map()), (d = new Set()), (u = new Set()), (c = new Map()), (E = new Map()), (h = new Map());
}
function I() {
    if (i === o.default.locale) return !1;
    (i = o.default.locale), A();
}
class p extends r.il {
    static displayName = "SKUStore";
    initialize() {
        this.waitFor(o.default, l.A), this.syncWith([o.default], I), (i = o.default.locale);
    }
    get(e) {
        return c.get(e);
    }
    getForApplication(e) {
        let t = E.get(e);
        return null == t ? [] : Array.from(t).map((e) => c.get(e));
    }
    isFetching(e) {
        return d.has(e);
    }
    getFetchingSkuIds() {
        return [...d.keys()];
    }
    getSKUs() {
        return Object.fromEntries(c);
    }
    getParentSKU(e) {
        let t = _.get(e);
        if (null != t) return this.get(t);
    }
    didFetchingSkuFail(e) {
        return u.has(e);
    }
}
let T = new p(s.h, {
    STORE_LISTINGS_FETCH_START: function (e) {
        let { skuId: t } = e;
        d.add(t);
    },
    STORE_LISTINGS_FETCH_FAIL: function (e) {
        let { skuId: t } = e;
        d.delete(t), u.add(t);
    },
    STORE_LISTINGS_FETCH_SUCCESS: function (e) {
        let { storeListings: t } = e;
        for (let e of t) f(e);
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { storeListing: t } = e;
        f(t);
    },
    GIFT_CODE_RESOLVE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        if (null == t.store_listing) return !1;
        m(t.store_listing.sku);
    },
    SKU_FETCH_START: function (e) {
        let { skuId: t } = e;
        d.add(t);
    },
    SKU_FETCH_SUCCESS: function (e) {
        let { sku: t } = e;
        m(t);
    },
    SKU_FETCH_FAIL: function (e) {
        let { skuId: t } = e;
        d.delete(t), u.add(t);
    },
    SKUS_FETCH_SUCCESS: function (e) {
        let { guildId: t, skus: n } = e;
        for (let e of n) m(e);
        null != t && h.set(t, new Set(n.map((e) => e.id)));
    },
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: g,
    APPLICATION_STORE_CLEAR_DATA: A,
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: g,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: g,
});
