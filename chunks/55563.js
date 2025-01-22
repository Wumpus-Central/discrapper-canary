let i;
var a,
    o = r(47120);
var s = r(442837),
    l = r(570140),
    u = r(706454),
    c = r(659181),
    d = r(77498);
function f(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let p = new Map(),
    h = new Set(),
    _ = new Set(),
    m = new Map(),
    g = new Map(),
    E = new Map();
function v(e) {
    var n;
    m.set(e.id, c.Z.createFromServer(e)),
        h.delete(e.id),
        _.delete(e.id),
        null === (n = e.bundled_sku_ids) ||
            void 0 === n ||
            n.forEach((n) => {
                p.set(n, e.id);
            }),
        !g.has(e.application_id) && g.set(e.application_id, new Set()),
        g.get(e.application_id).add(e.id);
}
function y(e) {
    v(e);
}
function b(e) {
    let { skuId: n } = e;
    h.add(n);
}
function I(e) {
    let { skuId: n } = e;
    h.add(n);
}
function T(e) {
    let { skuId: n } = e;
    h.delete(n), _.add(n);
}
function S(e) {
    let { skuId: n } = e;
    h.delete(n), _.add(n);
}
function A(e) {
    let { giftCode: n } = e;
    if (null == n.store_listing) return !1;
    v(n.store_listing.sku);
}
function C(e) {
    let { sku: n } = e;
    y(n);
}
function N(e) {
    let { guildId: n, skus: r } = e;
    for (let e of r) y(e);
    null != n && E.set(n, new Set(r.map((e) => e.id)));
}
function R(e) {
    v(e.sku), null != e.child_skus && e.child_skus.forEach((e) => v(e)), null != e.alternative_skus && e.alternative_skus.forEach((e) => v(e));
}
function O(e) {
    let { storeListings: n } = e;
    for (let e of n) R(e);
}
function D(e) {
    let { storeListing: n } = e;
    R(n);
}
function L(e) {
    let { entitlements: n } = e;
    for (let e of n) null != e.sku && v(e.sku);
}
function x() {
    (p = new Map()), (h = new Set()), (_ = new Set()), (m = new Map()), (g = new Map()), (E = new Map());
}
function w() {
    if (i === u.default.locale) return !1;
    (i = u.default.locale), x();
}
class P extends (a = s.yh) {
    initialize() {
        this.waitFor(u.default, d.Z), this.syncWith([u.default], w), (i = u.default.locale);
    }
    get(e) {
        return m.get(e);
    }
    getForApplication(e) {
        let n = g.get(e);
        return null == n ? [] : Array.from(n).map((e) => m.get(e));
    }
    isFetching(e) {
        return h.has(e);
    }
    getSKUs() {
        return Object.fromEntries(m);
    }
    getParentSKU(e) {
        let n = p.get(e);
        if (null != n) return this.get(n);
    }
    didFetchingSkuFail(e) {
        return _.has(e);
    }
}
f(P, 'displayName', 'SKUStore'),
    (n.Z = new P(l.Z, {
        STORE_LISTINGS_FETCH_START: b,
        STORE_LISTINGS_FETCH_FAIL: T,
        STORE_LISTINGS_FETCH_SUCCESS: O,
        STORE_LISTING_FETCH_SUCCESS: D,
        GIFT_CODE_RESOLVE_SUCCESS: A,
        SKU_FETCH_START: I,
        SKU_FETCH_SUCCESS: C,
        SKU_FETCH_FAIL: S,
        SKUS_FETCH_SUCCESS: N,
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: L,
        APPLICATION_STORE_CLEAR_DATA: x,
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: L,
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: L
    }));
