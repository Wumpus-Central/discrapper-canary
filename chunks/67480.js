"use strict";
let r;
n.d(t, { A: () => w });
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
function h(e, t) {
    return (
        null == t ||
            (null == e.price && null != t.price && (e.price = t.price),
            0 === Object.keys(e.prices).length && Object.keys(t.prices).length > 0 && (e.prices = t.prices),
            null == e.orbsReward && null != t.orbsReward && (e.orbsReward = t.orbsReward),
            0 === e.eligibleOffers.length && t.eligibleOffers.length > 0 && (e.eligibleOffers = t.eligibleOffers)),
        e
    );
}
function m(e) {
    let t = _.get(e.id),
        n = h(a.A.createFromServer(e), t);
    _.set(e.id, n),
        c.delete(e.id),
        d.delete(e.id),
        e.bundled_sku_ids?.forEach((t) => {
            u.set(t, e.id);
        }),
        f.has(e.application_id) || f.set(e.application_id, new Set()),
        f.get(e.application_id).add(e.id);
}
function E(e) {
    m(e);
}
function g(e) {
    let { skuId: t } = e;
    c.add(t);
}
function A(e) {
    let { skuId: t } = e;
    c.add(t);
}
function I(e) {
    let { skuId: t } = e;
    c.delete(t), d.add(t);
}
function T(e) {
    let { skuId: t } = e;
    c.delete(t), d.add(t);
}
function S(e) {
    let { giftCode: t } = e;
    if (null == t.store_listing) return !1;
    m(t.store_listing.sku);
}
function y(e) {
    let { sku: t } = e;
    E(t);
}
function v(e) {
    let { guildId: t, skus: n } = e;
    for (let e of n) E(e);
    null != t && p.set(t, new Set(n.map((e) => e.id)));
}
function N(e) {
    m(e.sku),
        null != e.child_skus && e.child_skus.forEach((e) => m(e)),
        null != e.alternative_skus && e.alternative_skus.forEach((e) => m(e));
}
function C(e) {
    let { storeListings: t } = e;
    for (let e of t) N(e);
}
function R(e) {
    let { storeListing: t } = e;
    N(t);
}
function O(e) {
    let { entitlements: t } = e;
    for (let e of t) null != e.sku && m(e.sku);
}
function b() {
    (u = new Map()), (c = new Set()), (d = new Set()), (_ = new Map()), (f = new Map()), (p = new Map());
}
function D() {
    if (r === o.default.locale) return !1;
    (r = o.default.locale), b();
}
class L extends i.il {
    static displayName = "SKUStore";
    initialize() {
        this.waitFor(o.default, l.A), this.syncWith([o.default], D), (r = o.default.locale);
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
let w = new L(s.h, {
    STORE_LISTINGS_FETCH_START: g,
    STORE_LISTINGS_FETCH_FAIL: I,
    STORE_LISTINGS_FETCH_SUCCESS: C,
    STORE_LISTING_FETCH_SUCCESS: R,
    GIFT_CODE_RESOLVE_SUCCESS: S,
    SKU_FETCH_START: A,
    SKU_FETCH_SUCCESS: y,
    SKU_FETCH_FAIL: T,
    SKUS_FETCH_SUCCESS: v,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: O,
    APPLICATION_STORE_CLEAR_DATA: b,
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: O,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: O,
});
