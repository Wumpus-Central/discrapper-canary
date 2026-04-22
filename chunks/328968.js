"use strict";
let r;
n.d(t, { A: () => A });
var i = n(311907),
    s = n(73153),
    a = n(773669),
    o = n(60717),
    l = n(403362);
let u = {},
    d = {},
    c = {},
    _ = {},
    f = new Set();
function E(e) {
    let t = e.id,
        n = e.sku.id,
        r = u[t],
        i = o.A.createFromServer(e);
    (null != r && !r.isSlimDirectoryVersion() && i.isSlimDirectoryVersion()) ||
        (!1 === e.published ? (null == c[n] && (c[n] = new Set()), c[n].add(t)) : (_[n] = t),
        (u[t] = i),
        f.delete(e.sku.id));
}
function h(e, t) {
    return `${e}:${t}`;
}
function p() {
    (u = {}), (_ = {}), (c = {}), (d = {}), (f = new Set());
}
function m() {
    if (r === a.default.locale) return !1;
    p(), (r = a.default.locale);
}
class g extends i.Ay.Store {
    static displayName = "StoreListingStore";
    initialize() {
        this.waitFor(a.default), this.syncWith([a.default], m), (r = a.default.locale);
    }
    get(e) {
        return u[e];
    }
    getForSKU(e, t) {
        let n = _[e];
        return null != t ? d[h(t, e)] : null != n ? u[n] : null;
    }
    getUnpublishedForSKU(e) {
        let t = c[e];
        return null == t
            ? []
            : Array.from(t)
                  .map((e) => u[e])
                  .filter(l.Vq);
    }
    getForChannel(e, t) {
        return d[h(e, t)];
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
let A = new g(s.h, {
    STORE_LISTINGS_FETCH_START: function (e) {
        let { skuId: t } = e;
        f.add(t);
    },
    STORE_LISTINGS_FETCH_FAIL: function (e) {
        let { skuId: t } = e;
        f.delete(t);
    },
    STORE_LISTINGS_FETCH_SUCCESS: function (e) {
        let { storeListings: t } = e;
        for (let e of t) E(e);
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { storeListing: t, channelId: n } = e;
        if (null != n) {
            let e = o.A.createFromServer(t);
            (d[h(n, e.skuId)] = e), (_[e.skuId] = e.id);
        } else E(t);
    },
    USER_SETTINGS_PROTO_UPDATE: m,
    APPLICATION_STORE_CLEAR_DATA: p,
    GIFT_CODE_RESOLVE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        if (null == t.store_listing) return !1;
        E(t.store_listing);
    },
});
