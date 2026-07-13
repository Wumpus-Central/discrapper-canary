"use strict";
let i;
n.d(t, { A: () => T });
var r = n(17928),
    a = n(228366),
    s = n(773669),
    l = n(112589),
    o = n(403362);
let d = {},
    c = {},
    u = {},
    _ = {},
    E = new Set();
function A(e) {
    let t = e.id,
        n = e.sku.id,
        i = d[t],
        r = l.A.createFromServer(e);
    (null != i && !i.isSlimDirectoryVersion() && r.isSlimDirectoryVersion()) ||
        (!1 === e.published ? (null == u[n] && (u[n] = new Set()), u[n].add(t)) : (_[n] = t),
        (d[t] = r),
        E.delete(e.sku.id));
}
function h(e, t) {
    return `${e}:${t}`;
}
function I() {
    (d = {}), (_ = {}), (u = {}), (c = {}), (E = new Set());
}
function f() {
    if (i === s.default.locale) return !1;
    I(), (i = s.default.locale);
}
class p extends r.Ay.Store {
    static displayName = "StoreListingStore";
    initialize() {
        this.waitFor(s.default), this.syncWith([s.default], f), (i = s.default.locale);
    }
    get(e) {
        return d[e];
    }
    getForSKU(e, t) {
        let n = _[e];
        return null != t ? c[h(t, e)] : null != n ? d[n] : null;
    }
    getUnpublishedForSKU(e) {
        let t = u[e];
        return null == t
            ? []
            : Array.from(t)
                  .map((e) => d[e])
                  .filter(o.Vq);
    }
    getForChannel(e, t) {
        return c[h(e, t)];
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
let T = new p(a.h, {
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
        for (let e of t) A(e);
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { storeListing: t, channelId: n } = e;
        if (null != n) {
            let e = l.A.createFromServer(t);
            (c[h(n, e.skuId)] = e), (_[e.skuId] = e.id);
        } else A(t);
    },
    USER_SETTINGS_PROTO_UPDATE: f,
    APPLICATION_STORE_CLEAR_DATA: I,
    GIFT_CODE_RESOLVE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        if (null == t.store_listing) return !1;
        A(t.store_listing);
    },
});
