let r;
(n.d(t, { Z: () => A }), n(388685), n(415506));
var i,
    a = n(442837),
    o = n(570140),
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
    _ = {},
    f = {},
    p = {},
    h = new Set();
function m(e) {
    let t = e.id,
        n = e.sku.id,
        r = d[t],
        i = l.Z.createFromServer(e);
    (null != r && !r.isSlimDirectoryVersion() && i.isSlimDirectoryVersion()) || (!1 === e.published ? (null == f[n] && (f[n] = new Set()), f[n].add(t)) : (p[n] = t), (d[t] = i), h.delete(e.sku.id));
}
function g(e, t) {
    return ''.concat(e, ':').concat(t);
}
function E(e) {
    let { storeListings: t } = e;
    for (let e of t) m(e);
}
function b(e) {
    let { storeListing: t, channelId: n } = e;
    if (null != n) {
        let e = l.Z.createFromServer(t);
        ((_[g(n, e.skuId)] = e), (p[e.skuId] = e.id));
    } else m(t);
}
function y(e) {
    let { giftCode: t } = e;
    if (null == t.store_listing) return !1;
    m(t.store_listing);
}
function O(e) {
    let { skuId: t } = e;
    h.add(t);
}
function v(e) {
    let { skuId: t } = e;
    h.delete(t);
}
function I() {
    ((d = {}), (p = {}), (f = {}), (_ = {}), (h = new Set()));
}
function T() {
    if (r === s.default.locale) return !1;
    (I(), (r = s.default.locale));
}
class S extends (i = a.ZP.Store) {
    initialize() {
        (this.waitFor(s.default), this.syncWith([s.default], T), (r = s.default.locale));
    }
    get(e) {
        return d[e];
    }
    getForSKU(e, t) {
        let n = p[e];
        return null != t ? _[g(t, e)] : null != n ? d[n] : null;
    }
    getUnpublishedForSKU(e) {
        let t = f[e];
        return null == t
            ? []
            : Array.from(t)
                  .map((e) => d[e])
                  .filter(c.lm);
    }
    getForChannel(e, t) {
        return _[g(e, t)];
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
u(S, 'displayName', 'StoreListingStore');
let A = new S(o.Z, {
    STORE_LISTINGS_FETCH_START: O,
    STORE_LISTINGS_FETCH_FAIL: v,
    STORE_LISTINGS_FETCH_SUCCESS: E,
    STORE_LISTING_FETCH_SUCCESS: b,
    USER_SETTINGS_PROTO_UPDATE: T,
    APPLICATION_STORE_CLEAR_DATA: I,
    GIFT_CODE_RESOLVE_SUCCESS: y
});
