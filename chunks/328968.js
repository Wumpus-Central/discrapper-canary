let r;
n.d(t, {
    A: () => T,
}),
    n(896048),
    n(65821);
var i,
    a = n(311907),
    s = n(73153),
    o = n(773669),
    l = n(60717),
    c = n(403362);

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
let d = {},
    f = {},
    p = {},
    _ = {},
    h = new Set();

function m(e) {
    let t = e.id,
        n = e.sku.id,
        r = d[t],
        i = l.A.createFromServer(e);
    (null != r && !r.isSlimDirectoryVersion() && i.isSlimDirectoryVersion()) ||
        (!1 === e.published ? (null == p[n] && (p[n] = new Set()), p[n].add(t)) : (_[n] = t),
        (d[t] = i),
        h.delete(e.sku.id));
}

function g(e, t) {
    return "".concat(e, ":").concat(t);
}

function E(e) {
    let { storeListings: t } = e;
    for (let e of t) m(e);
}

function b(e) {
    let { storeListing: t, channelId: n } = e;
    if (null != n) {
        let e = l.A.createFromServer(t);
        (f[g(n, e.skuId)] = e), (_[e.skuId] = e.id);
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

function A(e) {
    let { skuId: t } = e;
    h.delete(t);
}

function v() {
    (d = {}), (_ = {}), (p = {}), (f = {}), (h = new Set());
}

function S() {
    if (r === o.default.locale) return !1;
    v(), (r = o.default.locale);
}
class I extends (i = a.Ay.Store) {
    initialize() {
        this.waitFor(o.default), this.syncWith([o.default], S), (r = o.default.locale);
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
                  .filter(c.Vq);
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
            if (null == n) throw Error("getStoreListing with channel expects a skuId");
            return this.getForChannel(r, n);
        }
        return null != n ? this.getForSKU(n) : null;
    }
}
u(I, "displayName", "StoreListingStore");
let T = new I(s.h, {
    STORE_LISTINGS_FETCH_START: O,
    STORE_LISTINGS_FETCH_FAIL: A,
    STORE_LISTINGS_FETCH_SUCCESS: E,
    STORE_LISTING_FETCH_SUCCESS: b,
    USER_SETTINGS_PROTO_UPDATE: S,
    APPLICATION_STORE_CLEAR_DATA: v,
    GIFT_CODE_RESOLVE_SUCCESS: y,
});
