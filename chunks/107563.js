"use strict";
n.d(t, { A: () => S });
var r = n(311907),
    i = n(73153),
    a = n(728458);
let s = {},
    o = () => ({ data: null, status: "not_loaded" });
function l(e) {
    return (s[e] ??= o());
}
function u(e) {
    let { wishlistId: t } = e,
        n = l(t);
    (n.status = "fetching"), (n.error = void 0);
}
function c(e) {
    let { wishlistId: t, wishlistData: n, updatedAt: r } = e,
        i = l(t);
    (i.data = n), (i.status = "success"), (i.error = void 0), (i.updatedAt = r);
}
function d(e) {
    let { wishlistId: t, error: n } = e,
        r = l(t);
    (r.status = "error"), (r.error = n);
}
function _(e) {
    let { wishlistId: t, wishlistData: n } = e,
        r = l(t);
    (r.data = n), (r.status = "success"), (r.error = void 0);
}
function f(e) {
    let { error: t } = e;
    a.A.captureException(t);
}
function p(e) {
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
function A(e) {
    let { wishlistId: t, wishlistData: n } = e,
        r = l(t);
    (r.data = n), (r.status = "success"), (r.error = void 0);
}
function I(e) {
    let { wishlistId: t, error: n } = e;
    (l(t).updatedAt = void 0), a.A.captureException(n);
}
function T(e) {
    let { recipientId: t, skuId: r } = e,
        i = n(622543).A.getFirstWishlistId(t);
    null != i && null != s[i] && s[i].data?.hasSkuId(r) && (s[i].updatedAt = void 0);
}
class y extends r.Ay.Store {
    get(e) {
        return s[e] ?? o();
    }
    getWishlist(e) {
        return this.get(e).data;
    }
    getWishlistItems(e) {
        return this.get(e).data?.getSkuIds() ?? [];
    }
    hasSkuId(e, t) {
        return this.get(e).data?.hasSkuId(t) ?? !1;
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
let S = new y(i.h, {
    WISHLIST_FETCH_START: u,
    WISHLIST_FETCH_SUCCESS: c,
    WISHLIST_FETCH_FAILURE: d,
    WISHLIST_ADD_SKU_SUCCESS: _,
    WISHLIST_ADD_SKU_FAILURE: f,
    WISHLIST_REMOVE_SKU_SUCCESS: p,
    WISHLIST_REMOVE_SKU_FAILURE: h,
    WISHLIST_UPDATE_VISIBILITY_SUCCESS: m,
    WISHLIST_UPDATE_VISIBILITY_FAILURE: g,
    WISHLIST_REORDER_START: E,
    WISHLIST_REORDER_SUCCESS: A,
    WISHLIST_REORDER_FAILURE: I,
    WISHLIST_ITEM_PURCHASED: T,
});
