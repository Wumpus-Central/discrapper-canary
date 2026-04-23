"use strict";
let r;
n.d(t, { A: () => T });
var i = n(311907),
    s = n(73153),
    a = n(260811),
    o = n(773669),
    l = n(760751);
let u = new Map(),
    c = new Set(),
    d = new Set(),
    _ = new Map(),
    f = new Map(),
    p = new Map();
function h(e) {
    var t;
    let n = _.get(e.id),
        r =
            ((t = a.A.createFromServer(e)),
            null == n ||
                (null == t.price && null != n.price && (t.price = n.price),
                0 === Object.keys(t.prices).length && Object.keys(n.prices).length > 0 && (t.prices = n.prices),
                null == t.orbsReward && null != n.orbsReward && (t.orbsReward = n.orbsReward),
                0 === t.eligibleOffers.length && n.eligibleOffers.length > 0 && (t.eligibleOffers = n.eligibleOffers)),
            t);
    _.set(e.id, r),
        c.delete(e.id),
        d.delete(e.id),
        e.bundled_sku_ids?.forEach((t) => {
            u.set(t, e.id);
        }),
        f.has(e.application_id) || f.set(e.application_id, new Set()),
        f.get(e.application_id).add(e.id);
}
function E(e) {
    h(e.sku),
        null != e.child_skus && e.child_skus.forEach((e) => h(e)),
        null != e.alternative_skus && e.alternative_skus.forEach((e) => h(e));
}
function m(e) {
    let { entitlements: t } = e;
    for (let e of t) null != e.sku && h(e.sku);
}
function g() {
    (u = new Map()), (c = new Set()), (d = new Set()), (_ = new Map()), (f = new Map()), (p = new Map());
}
function A() {
    if (r === o.default.locale) return !1;
    (r = o.default.locale), g();
}
class I extends i.il {
    static displayName = "SKUStore";
    initialize() {
        this.waitFor(o.default, l.A), this.syncWith([o.default], A), (r = o.default.locale);
    }
    get(e) {
        return _.get(e);
    }
    getForApplication(e) {
        let t = f.get(e);
        return null == t ? [] : Array.from(t).map((e) => _.get(e));
    }
    isFetching(e) {
        return c.has(e);
    }
    getSKUs() {
        return Object.fromEntries(_);
    }
    getParentSKU(e) {
        let t = u.get(e);
        if (null != t) return this.get(t);
    }
    didFetchingSkuFail(e) {
        return d.has(e);
    }
}
let T = new I(s.h, {
    STORE_LISTINGS_FETCH_START: function (e) {
        let { skuId: t } = e;
        c.add(t);
    },
    STORE_LISTINGS_FETCH_FAIL: function (e) {
        let { skuId: t } = e;
        c.delete(t), d.add(t);
    },
    STORE_LISTINGS_FETCH_SUCCESS: function (e) {
        let { storeListings: t } = e;
        for (let e of t) E(e);
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { storeListing: t } = e;
        E(t);
    },
    GIFT_CODE_RESOLVE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        if (null == t.store_listing) return !1;
        h(t.store_listing.sku);
    },
    SKU_FETCH_START: function (e) {
        let { skuId: t } = e;
        c.add(t);
    },
    SKU_FETCH_SUCCESS: function (e) {
        let { sku: t } = e;
        h(t);
    },
    SKU_FETCH_FAIL: function (e) {
        let { skuId: t } = e;
        c.delete(t), d.add(t);
    },
    SKUS_FETCH_SUCCESS: function (e) {
        let { guildId: t, skus: n } = e;
        for (let e of n) h(e);
        null != t && p.set(t, new Set(n.map((e) => e.id)));
    },
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: m,
    APPLICATION_STORE_CLEAR_DATA: g,
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: m,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: m,
});
