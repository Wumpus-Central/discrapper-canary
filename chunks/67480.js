"use strict";
let r;
n.d(t, { A: () => L });
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
    let t = a.A.createFromServer(e);
    null == t.price && _.get(e.id)?.price != null && (t.price = _.get(e.id)?.price),
        _.set(e.id, t),
        c.delete(e.id),
        d.delete(e.id),
        e.bundled_sku_ids?.forEach((t) => {
            u.set(t, e.id);
        }),
        f.has(e.application_id) || f.set(e.application_id, new Set()),
        f.get(e.application_id).add(e.id);
}
function m(e) {
    h(e);
}
function E(e) {
    let { skuId: t } = e;
    c.add(t);
}
function g(e) {
    let { skuId: t } = e;
    c.add(t);
}
function A(e) {
    let { skuId: t } = e;
    c.delete(t), d.add(t);
}
function I(e) {
    let { skuId: t } = e;
    c.delete(t), d.add(t);
}
function T(e) {
    let { giftCode: t } = e;
    if (null == t.store_listing) return !1;
    h(t.store_listing.sku);
}
function S(e) {
    let { sku: t } = e;
    m(t);
}
function y(e) {
    let { guildId: t, skus: n } = e;
    for (let e of n) m(e);
    null != t && p.set(t, new Set(n.map((e) => e.id)));
}
function v(e) {
    h(e.sku),
        null != e.child_skus && e.child_skus.forEach((e) => h(e)),
        null != e.alternative_skus && e.alternative_skus.forEach((e) => h(e));
}
function N(e) {
    let { storeListings: t } = e;
    for (let e of t) v(e);
}
function C(e) {
    let { storeListing: t } = e;
    v(t);
}
function R(e) {
    let { entitlements: t } = e;
    for (let e of t) null != e.sku && h(e.sku);
}
function O() {
    (u = new Map()), (c = new Set()), (d = new Set()), (_ = new Map()), (f = new Map()), (p = new Map());
}
function b() {
    if (r === o.default.locale) return !1;
    (r = o.default.locale), O();
}
class D extends i.il {
    static displayName = "SKUStore";
    initialize() {
        this.waitFor(o.default, l.A), this.syncWith([o.default], b), (r = o.default.locale);
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
let L = new D(s.h, {
    STORE_LISTINGS_FETCH_START: E,
    STORE_LISTINGS_FETCH_FAIL: A,
    STORE_LISTINGS_FETCH_SUCCESS: N,
    STORE_LISTING_FETCH_SUCCESS: C,
    GIFT_CODE_RESOLVE_SUCCESS: T,
    SKU_FETCH_START: g,
    SKU_FETCH_SUCCESS: S,
    SKU_FETCH_FAIL: I,
    SKUS_FETCH_SUCCESS: y,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: R,
    APPLICATION_STORE_CLEAR_DATA: O,
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: R,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: R,
});
