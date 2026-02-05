"use strict";
let r;
n.d(t, { A: () => v });
var i = n(311907),
    a = n(73153),
    s = n(773669),
    o = n(60717),
    l = n(403362);
let u = {},
    c = {},
    d = {},
    _ = {},
    f = new Set();
function p(e) {
    let t = e.id,
        n = e.sku.id,
        r = u[t],
        i = o.A.createFromServer(e);
    (null != r && !r.isSlimDirectoryVersion() && i.isSlimDirectoryVersion()) ||
        (!1 === e.published ? (null == d[n] && (d[n] = new Set()), d[n].add(t)) : (_[n] = t),
        (u[t] = i),
        f.delete(e.sku.id));
}
function h(e, t) {
    return `${e}:${t}`;
}
function m(e) {
    let { storeListings: t } = e;
    for (let e of t) p(e);
}
function g(e) {
    let { storeListing: t, channelId: n } = e;
    if (null != n) {
        let e = o.A.createFromServer(t);
        (c[h(n, e.skuId)] = e), (_[e.skuId] = e.id);
    } else p(t);
}
function E(e) {
    let { giftCode: t } = e;
    if (null == t.store_listing) return !1;
    p(t.store_listing);
}
function A(e) {
    let { skuId: t } = e;
    f.add(t);
}
function I(e) {
    let { skuId: t } = e;
    f.delete(t);
}
function T() {
    (u = {}), (_ = {}), (d = {}), (c = {}), (f = new Set());
}
function y() {
    if (r === s.default.locale) return !1;
    T(), (r = s.default.locale);
}
class S extends i.Ay.Store {
    static displayName = "StoreListingStore";
    initialize() {
        this.waitFor(s.default), this.syncWith([s.default], y), (r = s.default.locale);
    }
    get(e) {
        return u[e];
    }
    getForSKU(e, t) {
        let n = _[e];
        return null != t ? c[h(t, e)] : null != n ? u[n] : null;
    }
    getUnpublishedForSKU(e) {
        let t = d[e];
        return null == t
            ? []
            : Array.from(t)
                  .map((e) => u[e])
                  .filter(l.Vq);
    }
    getForChannel(e, t) {
        return c[h(e, t)];
    }
    isFetchingForSKU(e) {
        return f.has(e);
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
let v = new S(a.h, {
    STORE_LISTINGS_FETCH_START: A,
    STORE_LISTINGS_FETCH_FAIL: I,
    STORE_LISTINGS_FETCH_SUCCESS: m,
    STORE_LISTING_FETCH_SUCCESS: g,
    USER_SETTINGS_PROTO_UPDATE: y,
    APPLICATION_STORE_CLEAR_DATA: T,
    GIFT_CODE_RESOLVE_SUCCESS: E,
});
