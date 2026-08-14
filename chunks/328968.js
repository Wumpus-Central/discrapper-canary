let l;
i.d(t, { A: () => T });
var r = i(17928),
    n = i(228366),
    s = i(773669),
    u = i(112589),
    a = i(403362);
let o = {},
    d = {},
    h = {},
    c = {},
    S = new Set();
function _(e) {
    let t = e.id,
        i = e.sku.id,
        l = o[t],
        r = u.A.createFromServer(e);
    (null != l && !l.isSlimDirectoryVersion() && r.isSlimDirectoryVersion()) ||
        (!1 === e.published ? (null == h[i] && (h[i] = new Set()), h[i].add(t)) : (c[i] = t),
        (o[t] = r),
        S.delete(e.sku.id));
}
function g(e, t) {
    return `${e}:${t}`;
}
function p() {
    (o = {}), (c = {}), (h = {}), (d = {}), (S = new Set());
}
function m() {
    if (l === s.default.locale) return !1;
    p(), (l = s.default.locale);
}
class I extends r.Ay.Store {
    static displayName = "StoreListingStore";
    initialize() {
        this.waitFor(s.default), this.syncWith([s.default], m), (l = s.default.locale);
    }
    get(e) {
        return o[e];
    }
    getForSKU(e, t) {
        let i = c[e];
        return null != t ? d[g(t, e)] : null != i ? o[i] : null;
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
        return d[g(e, t)];
    }
    isFetchingForSKU(e) {
        return S.has(e);
    }
    getStoreListing(e) {
        let { storeListingId: t, skuId: i, channelId: l, isTestMode: r } = e;
        if (r && null != i) {
            let e = this.getUnpublishedForSKU(i);
            if (null != e && e.length > 0) return e[0];
        }
        if (null != t) return this.get(t);
        if (null != l) {
            if (null == i) throw Error("getStoreListing with channel expects a skuId");
            return this.getForChannel(l, i);
        }
        return null != i ? this.getForSKU(i) : null;
    }
}
let T = new I(n.h, {
    STORE_LISTINGS_FETCH_START: function (e) {
        let { skuId: t } = e;
        S.add(t);
    },
    STORE_LISTINGS_FETCH_FAIL: function (e) {
        let { skuId: t } = e;
        S.delete(t);
    },
    STORE_LISTINGS_FETCH_SUCCESS: function (e) {
        let { storeListings: t } = e;
        for (let e of t) _(e);
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { storeListing: t, channelId: i } = e;
        if (null != i) {
            let e = u.A.createFromServer(t);
            (d[g(i, e.skuId)] = e), (c[e.skuId] = e.id);
        } else _(t);
    },
    USER_SETTINGS_PROTO_UPDATE: m,
    APPLICATION_STORE_CLEAR_DATA: p,
    GIFT_CODE_RESOLVE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        if (null == t.store_listing) return !1;
        _(t.store_listing);
    },
});
