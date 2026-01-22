let r;
n.d(t, { A: () => x }), n(896048), n(446912);
var i,
    a = n(311907),
    s = n(73153),
    o = n(773669),
    l = n(731935),
    c = n(760751);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let d = new Map(),
    f = new Set(),
    p = new Set(),
    _ = new Map(),
    h = new Map(),
    m = new Map();
function g(e) {
    var t;
    _.set(e.id, l.A.createFromServer(e)),
        f.delete(e.id),
        p.delete(e.id),
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
function O(e) {
    let { skuId: t } = e;
    f.delete(t), p.add(t);
}
function A(e) {
    let { skuId: t } = e;
    f.delete(t), p.add(t);
}
function v(e) {
    let { giftCode: t } = e;
    if (null == t.store_listing) return !1;
    g(t.store_listing.sku);
}
function S(e) {
    let { sku: t } = e;
    E(t);
}
function I(e) {
    let { guildId: t, skus: n } = e;
    for (let e of n) E(e);
    null != t && m.set(t, new Set(n.map((e) => e.id)));
}
function T(e) {
    g(e.sku),
        null != e.child_skus && e.child_skus.forEach((e) => g(e)),
        null != e.alternative_skus && e.alternative_skus.forEach((e) => g(e));
}
function C(e) {
    let { storeListings: t } = e;
    for (let e of t) T(e);
}
function N(e) {
    let { storeListing: t } = e;
    T(t);
}
function R(e) {
    let { entitlements: t } = e;
    for (let e of t) null != e.sku && g(e.sku);
}
function w() {
    (d = new Map()), (f = new Set()), (p = new Set()), (_ = new Map()), (h = new Map()), (m = new Map());
}
function P() {
    if (r === o.default.locale) return !1;
    (r = o.default.locale), w();
}
class D extends (i = a.il) {
    initialize() {
        this.waitFor(o.default, c.A), this.syncWith([o.default], P), (r = o.default.locale);
    }
    get(e) {
        return _.get(e);
    }
    getForApplication(e) {
        let t = h.get(e);
        return null == t ? [] : Array.from(t).map((e) => _.get(e));
    }
    isFetching(e) {
        return f.has(e);
    }
    getSKUs() {
        return Object.fromEntries(_);
    }
    getParentSKU(e) {
        let t = d.get(e);
        if (null != t) return this.get(t);
    }
    didFetchingSkuFail(e) {
        return p.has(e);
    }
}
u(D, "displayName", "SKUStore");
let x = new D(s.h, {
    STORE_LISTINGS_FETCH_START: b,
    STORE_LISTINGS_FETCH_FAIL: O,
    STORE_LISTINGS_FETCH_SUCCESS: C,
    STORE_LISTING_FETCH_SUCCESS: N,
    GIFT_CODE_RESOLVE_SUCCESS: v,
    SKU_FETCH_START: y,
    SKU_FETCH_SUCCESS: S,
    SKU_FETCH_FAIL: A,
    SKUS_FETCH_SUCCESS: I,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: R,
    APPLICATION_STORE_CLEAR_DATA: w,
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: R,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: R,
});
