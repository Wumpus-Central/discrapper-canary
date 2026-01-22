n.d(t, { A: () => v });
var r = n(311907),
    i = n(73153),
    a = n(728458);
let s = {},
    o = () => ({
        data: null,
        status: "not_loaded",
    });
function l(e) {
    var t, n, r;
    return null != (r = (t = s)[(n = e)]) ? r : (t[n] = o());
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
    a.A.captureException(t);
}
function _(e) {
    let { wishlistId: t, wishlistData: n } = e,
        r = l(t);
    (r.data = n), (r.status = "success"), (r.error = void 0);
}
function h(e) {
    let { error: t } = e;
    a.A.captureException(t);
}
function m(e) {
    let { wishlistId: t } = e,
        n = l(t);
    (n.status = "success"), (n.error = void 0);
}
function g(e) {
    let { error: t } = e;
    a.A.captureException(t);
}
function E(e) {
    let { wishlistId: t, newWishlistData: n } = e;
    l(t).data = n;
}
function b(e) {
    let { wishlistId: t, wishlistData: n } = e,
        r = l(t);
    (r.data = n), (r.status = "success"), (r.error = void 0);
}
function y(e) {
    let { wishlistId: t, error: n } = e;
    (l(t).updatedAt = void 0), a.A.captureException(n);
}
function O(e) {
    var t;
    let { recipientId: r, skuId: i } = e,
        a = n(622543).A.getFirstWishlistId(r);
    null != a && null != s[a] && (null == (t = s[a].data) ? void 0 : t.hasSkuId(i)) && (s[a].updatedAt = void 0);
}
class A extends r.Ay.Store {
    get(e) {
        var t;
        return null != (t = s[e]) ? t : o();
    }
    getWishlist(e) {
        return this.get(e).data;
    }
    getWishlistItems(e) {
        var t, n;
        return null != (t = null == (n = this.get(e).data) ? void 0 : n.getSkuIds()) ? t : [];
    }
    hasSkuId(e, t) {
        var n, r;
        return null != (n = null == (r = this.get(e).data) ? void 0 : r.hasSkuId(t)) && n;
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
let v = new A(i.h, {
    WISHLIST_FETCH_START: c,
    WISHLIST_FETCH_SUCCESS: u,
    WISHLIST_FETCH_FAILURE: d,
    WISHLIST_ADD_SKU_SUCCESS: f,
    WISHLIST_ADD_SKU_FAILURE: p,
    WISHLIST_REMOVE_SKU_SUCCESS: _,
    WISHLIST_REMOVE_SKU_FAILURE: h,
    WISHLIST_UPDATE_VISIBILITY_SUCCESS: m,
    WISHLIST_UPDATE_VISIBILITY_FAILURE: g,
    WISHLIST_REORDER_START: E,
    WISHLIST_REORDER_SUCCESS: b,
    WISHLIST_REORDER_FAILURE: y,
    WISHLIST_ITEM_PURCHASED: O,
});
