n.d(t, { Z: () => y });
var r = n(442837),
    i = n(570140),
    a = n(960048);
let o = {},
    s = () => ({
        data: null,
        status: "not_loaded",
    });
function l(e) {
    var t, n, r;
    return null != (r = (t = o)[(n = e)]) ? r : (t[n] = s());
}
function c(e) {
    let { wishlistId: t } = e,
        n = l(t);
    (n.status = "fetching"), (n.error = void 0);
}
function u(e) {
    let { wishlistId: t, wishlistData: n, updatedAt: r } = e,
        i = l(t);
    (i.data = n), (i.status = "success"), (i.error = void 0), (i.updatedAt = r);
}
function d(e) {
    let { wishlistId: t, error: n } = e,
        r = l(t);
    (r.status = "error"), (r.error = n);
}
function f(e) {
    let { wishlistId: t, wishlistData: n } = e,
        r = l(t);
    (r.data = n), (r.status = "success"), (r.error = void 0);
}
function p(e) {
    let { error: t } = e;
    a.Z.captureException(t);
}
function _(e) {
    let { wishlistId: t, wishlistData: n } = e,
        r = l(t);
    (r.data = n), (r.status = "success"), (r.error = void 0);
}
function m(e) {
    let { error: t } = e;
    a.Z.captureException(t);
}
function h(e) {
    let { wishlistId: t } = e,
        n = l(t);
    (n.status = "success"), (n.error = void 0);
}
function g(e) {
    let { error: t } = e;
    a.Z.captureException(t);
}
function E(e) {
    var t;
    let { recipientId: r, skuId: i } = e,
        a = n(621853).Z.getFirstWishlistId(r);
    null != a && null != o[a] && (null == (t = o[a].data) ? void 0 : t.hasSkuId(i)) && (o[a].updatedAt = void 0);
}
class b extends r.ZP.Store {
    get(e) {
        var t;
        return null != (t = o[e]) ? t : s();
    }
    getWishlist(e) {
        return this.get(e).data;
    }
    getWishlistItems(e) {
        var t, n;
        return null != (n = null == (t = this.get(e).data) ? void 0 : t.getSkuIds()) ? n : [];
    }
    hasSkuId(e, t) {
        var n, r;
        return null != (r = null == (n = this.get(e).data) ? void 0 : n.hasSkuId(t)) && r;
    }
    getStatus(e) {
        return this.get(e).status;
    }
    isFetching(e) {
        return "fetching" === this.getStatus(e);
    }
    hasError(e) {
        return "error" === this.getStatus(e);
    }
    getError(e) {
        return this.get(e).error;
    }
    getUpdatedAt(e) {
        return this.get(e).updatedAt;
    }
}
let y = new b(i.Z, {
    WISHLIST_FETCH_START: c,
    WISHLIST_FETCH_SUCCESS: u,
    WISHLIST_FETCH_FAILURE: d,
    WISHLIST_ADD_SKU_SUCCESS: f,
    WISHLIST_ADD_SKU_FAILURE: p,
    WISHLIST_REMOVE_SKU_SUCCESS: _,
    WISHLIST_REMOVE_SKU_FAILURE: m,
    WISHLIST_UPDATE_VISIBILITY_SUCCESS: h,
    WISHLIST_UPDATE_VISIBILITY_FAILURE: g,
    WISHLIST_ITEM_PURCHASED: E,
});
