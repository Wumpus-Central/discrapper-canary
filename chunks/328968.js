let i;
l.d(t, { A: () => k });
var n = l(17928),
    r = l(228366),
    s = l(773669),
    u = l(112589),
    a = l(403362);
let o = {},
    d = {},
    h = {},
    c = {},
    g = new Set();
function m(e) {
    let t = e.id,
        l = e.sku.id,
        i = o[t],
        n = u.A.createFromServer(e);
    (null != i && !i.isSlimDirectoryVersion() && n.isSlimDirectoryVersion()) ||
        (!1 === e.published ? (null == h[l] && (h[l] = new Set()), h[l].add(t)) : (c[l] = t),
        (o[t] = n),
        g.delete(e.sku.id));
}
function _(e, t) {
    return `${e}:${t}`;
}
function p() {
    (o = {}), (c = {}), (h = {}), (d = {}), (g = new Set());
}
function S() {
    if (i === s.default.locale) return !1;
    p(), (i = s.default.locale);
}
class f extends n.Ay.Store {
    static displayName = "StoreListingStore";
    initialize() {
        this.waitFor(s.default), this.syncWith([s.default], S), (i = s.default.locale);
    }
    get(e) {
        return o[e];
    }
    getForSKU(e, t) {
        let l = c[e];
        return null != t ? d[_(t, e)] : null != l ? o[l] : null;
    }
    getUnpublishedForSKU(e) {
        let t = h[e];
        return null == t
            ? []
            : Array.from(t)
                  .map((e) => o[e])
                  .filter(a.Vq);
    }
    getForChannel(e, t) {
        return d[_(e, t)];
    }
    isFetchingForSKU(e) {
        return g.has(e);
    }
    getStoreListing(e) {
        let { storeListingId: t, skuId: l, channelId: i, isTestMode: n } = e;
        if (n && null != l) {
            let e = this.getUnpublishedForSKU(l);
            if (null != e && e.length > 0) return e[0];
        }
        if (null != t) return this.get(t);
        if (null != i) {
            if (null == l) throw Error("getStoreListing with channel expects a skuId");
            return this.getForChannel(i, l);
        }
        return null != l ? this.getForSKU(l) : null;
    }
}
let k = new f(r.h, {
    STORE_LISTINGS_FETCH_START: function (e) {
        let { skuId: t } = e;
        g.add(t);
    },
    STORE_LISTINGS_FETCH_FAIL: function (e) {
        let { skuId: t } = e;
        g.delete(t);
    },
    STORE_LISTINGS_FETCH_SUCCESS: function (e) {
        let { storeListings: t } = e;
        for (let e of t) m(e);
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { storeListing: t, channelId: l } = e;
        if (null != l) {
            let e = u.A.createFromServer(t);
            (d[_(l, e.skuId)] = e), (c[e.skuId] = e.id);
        } else m(t);
    },
    USER_SETTINGS_PROTO_UPDATE: S,
    APPLICATION_STORE_CLEAR_DATA: p,
    GIFT_CODE_RESOLVE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        if (null == t.store_listing) return !1;
        m(t.store_listing);
    },
});
