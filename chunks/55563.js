let r;
n.d(t, { Z: () => L }), n(47120), n(977457);
var i,
    o = n(442837),
    a = n(570140),
    s = n(706454),
    l = n(659181),
    c = n(77498);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = new Map(),
    f = new Set(),
    _ = new Set(),
    p = new Map(),
    h = new Map(),
    m = new Map();
function g(e) {
    var t;
    p.set(e.id, l.Z.createFromServer(e)),
        f.delete(e.id),
        _.delete(e.id),
        null == (t = e.bundled_sku_ids) ||
            t.forEach((t) => {
                d.set(t, e.id);
            }),
        h.has(e.application_id) || h.set(e.application_id, new Set()),
        h.get(e.application_id).add(e.id);
}
function E(e) {
    g(e);
}
function b(e) {
    let { skuId: t } = e;
    f.add(t);
}
function y(e) {
    let { skuId: t } = e;
    f.add(t);
}
function v(e) {
    let { skuId: t } = e;
    f.delete(t), _.add(t);
}
function O(e) {
    let { skuId: t } = e;
    f.delete(t), _.add(t);
}
function I(e) {
    let { giftCode: t } = e;
    if (null == t.store_listing) return !1;
    g(t.store_listing.sku);
}
function S(e) {
    let { sku: t } = e;
    E(t);
}
function T(e) {
    let { guildId: t, skus: n } = e;
    for (let e of n) E(e);
    null != t && m.set(t, new Set(n.map((e) => e.id)));
}
function N(e) {
    g(e.sku), null != e.child_skus && e.child_skus.forEach((e) => g(e)), null != e.alternative_skus && e.alternative_skus.forEach((e) => g(e));
}
function A(e) {
    let { storeListings: t } = e;
    for (let e of t) N(e);
}
function C(e) {
    let { storeListing: t } = e;
    N(t);
}
function R(e) {
    let { entitlements: t } = e;
    for (let e of t) null != e.sku && g(e.sku);
}
function P() {
    (d = new Map()), (f = new Set()), (_ = new Set()), (p = new Map()), (h = new Map()), (m = new Map());
}
function w() {
    if (r === s.default.locale) return !1;
    (r = s.default.locale), P();
}
class D extends (i = o.yh) {
    initialize() {
        this.waitFor(s.default, c.Z), this.syncWith([s.default], w), (r = s.default.locale);
    }
    get(e) {
        return p.get(e);
    }
    getForApplication(e) {
        let t = h.get(e);
        return null == t ? [] : Array.from(t).map((e) => p.get(e));
    }
    isFetching(e) {
        return f.has(e);
    }
    getSKUs() {
        return Object.fromEntries(p);
    }
    getParentSKU(e) {
        let t = d.get(e);
        if (null != t) return this.get(t);
    }
    didFetchingSkuFail(e) {
        return _.has(e);
    }
}
u(D, 'displayName', 'SKUStore');
let L = new D(a.Z, {
    STORE_LISTINGS_FETCH_START: b,
    STORE_LISTINGS_FETCH_FAIL: v,
    STORE_LISTINGS_FETCH_SUCCESS: A,
    STORE_LISTING_FETCH_SUCCESS: C,
    GIFT_CODE_RESOLVE_SUCCESS: I,
    SKU_FETCH_START: y,
    SKU_FETCH_SUCCESS: S,
    SKU_FETCH_FAIL: O,
    SKUS_FETCH_SUCCESS: T,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: R,
    APPLICATION_STORE_CLEAR_DATA: P,
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: R,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: R
});
