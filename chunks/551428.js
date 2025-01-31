let i;
n.d(t, { Z: () => N }), n(47120), n(411104);
var r,
    a = n(442837),
    s = n(570140),
    o = n(706454),
    l = n(156570),
    u = n(823379);
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
let d = {},
    f = {},
    _ = {},
    p = {},
    h = new Set();
function m(e) {
    let t = e.id,
        n = e.sku.id,
        i = d[t],
        r = l.Z.createFromServer(e);
    !(null != i && !i.isSlimDirectoryVersion() && r.isSlimDirectoryVersion()) && (!1 === e.published ? (null == _[n] && (_[n] = new Set()), _[n].add(t)) : (p[n] = t), (d[t] = r), h.delete(e.sku.id));
}
function g(e, t) {
    return ''.concat(e, ':').concat(t);
}
function E(e) {
    let { storeListings: t } = e;
    for (let e of t) m(e);
}
function v(e) {
    let { storeListing: t, channelId: n } = e;
    if (null != n) {
        let e = l.Z.createFromServer(t);
        (f[g(n, e.skuId)] = e), (p[e.skuId] = e.id);
    } else m(t);
}
function y(e) {
    let { giftCode: t } = e;
    if (null == t.store_listing) return !1;
    m(t.store_listing);
}
function I(e) {
    let { skuId: t } = e;
    h.add(t);
}
function b(e) {
    let { skuId: t } = e;
    h.delete(t);
}
function T() {
    (d = {}), (p = {}), (_ = {}), (f = {}), (h = new Set());
}
function S() {
    if (i === o.default.locale) return !1;
    T(), (i = o.default.locale);
}
class A extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(o.default), this.syncWith([o.default], S), (i = o.default.locale);
    }
    get(e) {
        return d[e];
    }
    getForSKU(e, t) {
        let n = p[e];
        return null != t ? f[g(t, e)] : null != n ? d[n] : null;
    }
    getUnpublishedForSKU(e) {
        let t = _[e];
        return null == t
            ? []
            : Array.from(t)
                  .map((e) => d[e])
                  .filter(u.lm);
    }
    getForChannel(e, t) {
        return f[g(e, t)];
    }
    isFetchingForSKU(e) {
        return h.has(e);
    }
    getStoreListing(e) {
        let { storeListingId: t, skuId: n, channelId: i, isTestMode: r } = e;
        if (r && null != n) {
            let e = this.getUnpublishedForSKU(n);
            if (null != e && e.length > 0) return e[0];
        }
        if (null != t) return this.get(t);
        if (null != i) {
            if (null == n) throw Error('getStoreListing with channel expects a skuId');
            return this.getForChannel(i, n);
        }
        return null != n ? this.getForSKU(n) : null;
    }
}
c(A, 'displayName', 'StoreListingStore');
let N = new A(s.Z, {
    STORE_LISTINGS_FETCH_START: I,
    STORE_LISTINGS_FETCH_FAIL: b,
    STORE_LISTINGS_FETCH_SUCCESS: E,
    STORE_LISTING_FETCH_SUCCESS: v,
    USER_SETTINGS_PROTO_UPDATE: S,
    APPLICATION_STORE_CLEAR_DATA: T,
    GIFT_CODE_RESOLVE_SUCCESS: y
});
