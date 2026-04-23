"use strict";
let i;
n.d(t, { A: () => A });
var r = n(17928),
    s = n(228366),
    a = n(773669),
    o = n(112589),
    l = n(403362);
let d = {},
    _ = {},
    u = {},
    c = {},
    E = new Set();
function h(e) {
    let t = e.id,
        n = e.sku.id,
        i = d[t],
        r = o.A.createFromServer(e);
    (null != i && !i.isSlimDirectoryVersion() && r.isSlimDirectoryVersion()) ||
        (!1 === e.published ? (null == u[n] && (u[n] = new Set()), u[n].add(t)) : (c[n] = t),
        (d[t] = r),
        E.delete(e.sku.id));
}
function m(e, t) {
    return `${e}:${t}`;
}
function f() {
    (d = {}), (c = {}), (u = {}), (_ = {}), (E = new Set());
}
function g() {
    if (i === a.default.locale) return !1;
    f(), (i = a.default.locale);
}
class p extends r.Ay.Store {
    static displayName = "StoreListingStore";
    initialize() {
        this.waitFor(a.default), this.syncWith([a.default], g), (i = a.default.locale);
    }
    get(e) {
        return d[e];
    }
    getForSKU(e, t) {
        let n = c[e];
        return null != t ? _[m(t, e)] : null != n ? d[n] : null;
    }
    getUnpublishedForSKU(e) {
        let t = u[e];
        return null == t
            ? []
            : Array.from(t)
                  .map((e) => d[e])
                  .filter(l.Vq);
    }
    getForChannel(e, t) {
        return _[m(e, t)];
    }
    isFetchingForSKU(e) {
        return E.has(e);
    }
    getStoreListing(e) {
        let { storeListingId: t, skuId: n, channelId: i, isTestMode: r } = e;
        if (r && null != n) {
            let e = this.getUnpublishedForSKU(n);
            if (null != e && e.length > 0) return e[0];
        }
        if (null != t) return this.get(t);
        if (null != i) {
            if (null == n) throw Error("getStoreListing with channel expects a skuId");
            return this.getForChannel(i, n);
        }
        return null != n ? this.getForSKU(n) : null;
    }
}
let A = new p(s.h, {
    STORE_LISTINGS_FETCH_START: function (e) {
        let { skuId: t } = e;
        E.add(t);
    },
    STORE_LISTINGS_FETCH_FAIL: function (e) {
        let { skuId: t } = e;
        E.delete(t);
    },
    STORE_LISTINGS_FETCH_SUCCESS: function (e) {
        let { storeListings: t } = e;
        for (let e of t) h(e);
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { storeListing: t, channelId: n } = e;
        if (null != n) {
            let e = o.A.createFromServer(t);
            (_[m(n, e.skuId)] = e), (c[e.skuId] = e.id);
        } else h(t);
    },
    USER_SETTINGS_PROTO_UPDATE: g,
    APPLICATION_STORE_CLEAR_DATA: f,
    GIFT_CODE_RESOLVE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        if (null == t.store_listing) return !1;
        h(t.store_listing);
    },
});
