let r;
n.d(t, { Z: () => A }), n(388685), n(415506);
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
    m = new Set();
function h(e) {
    let t = e.id,
        n = e.sku.id,
        r = d[t],
        i = l.Z.createFromServer(e);
    (null != r && !r.isSlimDirectoryVersion() && i.isSlimDirectoryVersion()) ||
        (!1 === e.published ? (null == p[n] && (p[n] = new Set()), p[n].add(t)) : (_[n] = t),
        (d[t] = i),
        m.delete(e.sku.id));
}
function g(e, t) {
    return "".concat(e, ":").concat(t);
}
function E(e) {
    let { storeListings: t } = e;
    for (let e of t) h(e);
}
function b(e) {
    let { storeListing: t, channelId: n } = e;
    if (null != n) {
        let e = l.Z.createFromServer(t);
        (f[g(n, e.skuId)] = e), (_[e.skuId] = e.id);
    } else h(t);
}
function y(e) {
    let { giftCode: t } = e;
    if (null == t.store_listing) return !1;
    h(t.store_listing);
}
function O(e) {
    let { skuId: t } = e;
    m.add(t);
}
function v(e) {
    let { skuId: t } = e;
    m.delete(t);
}
function S() {
    (d = {}), (_ = {}), (p = {}), (f = {}), (m = new Set());
}
function I() {
    if (r === s.default.locale) return !1;
    S(), (r = s.default.locale);
}
class T extends (i = a.ZP.Store) {
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
        return m.has(e);
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
u(T, "displayName", "StoreListingStore");
let A = new T(o.Z, {
    STORE_LISTINGS_FETCH_START: O,
    STORE_LISTINGS_FETCH_FAIL: v,
    STORE_LISTINGS_FETCH_SUCCESS: E,
    STORE_LISTING_FETCH_SUCCESS: b,
    USER_SETTINGS_PROTO_UPDATE: I,
    APPLICATION_STORE_CLEAR_DATA: S,
    GIFT_CODE_RESOLVE_SUCCESS: y,
});
