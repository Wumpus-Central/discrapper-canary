let i;
n.d(t, { Z: () => P }), n(47120);
var r,
    a = n(442837),
    s = n(570140),
    o = n(706454),
    l = n(659181),
    u = n(77498);
function c(e, t, n) {
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
        null === (t = e.bundled_sku_ids) ||
            void 0 === t ||
            t.forEach((t) => {
                d.set(t, e.id);
            }),
        h.has(e.application_id) || h.set(e.application_id, new Set()),
        h.get(e.application_id).add(e.id);
}
function E(e) {
    g(e);
}
function v(e) {
    let { skuId: t } = e;
    f.add(t);
}
function y(e) {
    let { skuId: t } = e;
    f.add(t);
}
function I(e) {
    let { skuId: t } = e;
    f.delete(t), _.add(t);
}
function T(e) {
    let { skuId: t } = e;
    f.delete(t), _.add(t);
}
function b(e) {
    let { giftCode: t } = e;
    if (null == t.store_listing) return !1;
    g(t.store_listing.sku);
}
function S(e) {
    let { sku: t } = e;
    E(t);
}
function A(e) {
    let { guildId: t, skus: n } = e;
    for (let e of n) E(e);
    null != t && m.set(t, new Set(n.map((e) => e.id)));
}
function N(e) {
    g(e.sku), null != e.child_skus && e.child_skus.forEach((e) => g(e)), null != e.alternative_skus && e.alternative_skus.forEach((e) => g(e));
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
    for (let e of t) null != e.sku && g(e.sku);
}
function D() {
    (d = new Map()), (f = new Set()), (_ = new Set()), (p = new Map()), (h = new Map()), (m = new Map());
}
function x() {
    if (i === o.default.locale) return !1;
    (i = o.default.locale), D();
}
class L extends (r = a.yh) {
    initialize() {
        this.waitFor(o.default, u.Z), this.syncWith([o.default], x), (i = o.default.locale);
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
c(L, 'displayName', 'SKUStore');
let P = new L(s.Z, {
    STORE_LISTINGS_FETCH_START: v,
    STORE_LISTINGS_FETCH_FAIL: I,
    STORE_LISTINGS_FETCH_SUCCESS: C,
    STORE_LISTING_FETCH_SUCCESS: R,
    GIFT_CODE_RESOLVE_SUCCESS: b,
    SKU_FETCH_START: y,
    SKU_FETCH_SUCCESS: S,
    SKU_FETCH_FAIL: T,
    SKUS_FETCH_SUCCESS: A,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: O,
    APPLICATION_STORE_CLEAR_DATA: D,
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: O,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: O
});
