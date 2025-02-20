let r;
n.d(t, { Z: () => N }), n(47120), n(411104);
var i,
    o = n(442837),
    a = n(570140),
    s = n(706454),
    l = n(156570),
    c = n(823379);
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
let d = {},
    f = {},
    p = {},
    _ = {},
    h = new Set();
function m(e) {
    let t = e.id,
        n = e.sku.id,
        r = d[t],
        i = l.Z.createFromServer(e);
    !(null != r && !r.isSlimDirectoryVersion() && i.isSlimDirectoryVersion()) && (!1 === e.published ? (null == p[n] && (p[n] = new Set()), p[n].add(t)) : (_[n] = t), (d[t] = i), h.delete(e.sku.id));
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
        (f[g(n, e.skuId)] = e), (_[e.skuId] = e.id);
    } else m(t);
}
function b(e) {
    let { giftCode: t } = e;
    if (null == t.store_listing) return !1;
    m(t.store_listing);
}
function y(e) {
    let { skuId: t } = e;
    h.add(t);
}
function O(e) {
    let { skuId: t } = e;
    h.delete(t);
}
function S() {
    (d = {}), (_ = {}), (p = {}), (f = {}), (h = new Set());
}
function I() {
    if (r === s.default.locale) return !1;
    S(), (r = s.default.locale);
}
class T extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(s.default), this.syncWith([s.default], I), (r = s.default.locale);
    }
    get(e) {
        return d[e];
    }
    getForSKU(e, t) {
        let n = _[e];
        return null != t ? f[g(t, e)] : null != n ? d[n] : null;
    }
    getUnpublishedForSKU(e) {
        let t = p[e];
        return null == t
            ? []
            : Array.from(t)
                  .map((e) => d[e])
                  .filter(c.lm);
    }
    getForChannel(e, t) {
        return f[g(e, t)];
    }
    isFetchingForSKU(e) {
        return h.has(e);
    }
    getStoreListing(e) {
        let { storeListingId: t, skuId: n, channelId: r, isTestMode: i } = e;
        if (i && null != n) {
            let e = this.getUnpublishedForSKU(n);
            if (null != e && e.length > 0) return e[0];
        }
        if (null != t) return this.get(t);
        if (null != r) {
            if (null == n) throw Error('getStoreListing with channel expects a skuId');
            return this.getForChannel(r, n);
        }
        return null != n ? this.getForSKU(n) : null;
    }
}
u(T, 'displayName', 'StoreListingStore');
let N = new T(a.Z, {
    STORE_LISTINGS_FETCH_START: y,
    STORE_LISTINGS_FETCH_FAIL: O,
    STORE_LISTINGS_FETCH_SUCCESS: E,
    STORE_LISTING_FETCH_SUCCESS: v,
    USER_SETTINGS_PROTO_UPDATE: I,
    APPLICATION_STORE_CLEAR_DATA: S,
    GIFT_CODE_RESOLVE_SUCCESS: b
});
