"use strict";
n.d(t, { A: () => N });
var r = n(311907),
    i = n(73153),
    s = n(728458),
    a = n(855052);
let o = {},
    l = () => ({ data: null, status: "not_loaded" });
function u(e) {
    return (o[e] ??= l());
}
function c(e) {
    let { wishlistId: t } = e,
        n = u(t);
    (n.status = "fetching"), (n.error = void 0);
}
function d(e) {
    let { wishlistId: t, wishlistData: n, updatedAt: r } = e,
        i = u(t);
    (i.data = n), (i.status = "success"), (i.error = void 0), (i.updatedAt = r), (i.lastFetchedAt = Date.now());
}
function _(e) {
    let { wishlistId: t, error: n } = e,
        r = u(t);
    (r.status = "error"), (r.error = n);
}
function f(e) {
    let { wishlistId: t, wishlistData: n } = e,
        r = u(t);
    (r.data = n), (r.status = "success"), (r.error = void 0), (r.lastFetchedAt = Date.now());
}
function p(e) {
    let { error: t } = e;
    s.A.captureException(t);
}
function h(e) {
    let { wishlistId: t, skuId: n } = e,
        r = u(t);
    null != r.data &&
        (r.data = new a.A({
            id: r.data.id,
            userId: r.data.userId,
            items: r.data.items.filter((e) => e.skuId !== n),
            applications: r.data.applications,
        }));
}
function m(e) {
    let { wishlistId: t, wishlistData: n } = e,
        r = u(t);
    (r.data = n), (r.status = "success"), (r.error = void 0), (r.lastFetchedAt = Date.now());
}
function E(e) {
    let { wishlistId: t, error: n } = e;
    (u(t).updatedAt = void 0), s.A.captureException(n);
}
function g(e) {
    let { wishlistId: t } = e,
        n = u(t);
    (n.status = "success"), (n.error = void 0), (n.lastFetchedAt = Date.now());
}
function A(e) {
    let { error: t } = e;
    s.A.captureException(t);
}
function I(e) {
    let { wishlistId: t, newWishlistData: n } = e;
    u(t).data = n;
}
function T(e) {
    let { wishlistId: t, wishlistData: n } = e,
        r = u(t);
    (r.data = n), (r.status = "success"), (r.error = void 0), (r.lastFetchedAt = Date.now());
}
function S(e) {
    let { wishlistId: t, error: n } = e;
    (u(t).updatedAt = void 0), s.A.captureException(n);
}
function y(e) {
    let { recipientId: t, skuId: r } = e,
        i = n(622543).A.getFirstWishlistId(t);
    null != i && null != o[i] && o[i].data?.hasSkuId(r) && (o[i].updatedAt = void 0);
}
class v extends r.Ay.Store {
    get(e) {
        return o[e] ?? l();
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
    getLastFetchedAt(e) {
        return this.get(e).lastFetchedAt;
    }
}
let N = new v(i.h, {
    WISHLIST_FETCH_START: c,
    WISHLIST_FETCH_SUCCESS: d,
    WISHLIST_FETCH_FAILURE: _,
    WISHLIST_ADD_SKU_SUCCESS: f,
    WISHLIST_ADD_SKU_FAILURE: p,
    WISHLIST_REMOVE_SKU_START: h,
    WISHLIST_REMOVE_SKU_SUCCESS: m,
    WISHLIST_REMOVE_SKU_FAILURE: E,
    WISHLIST_UPDATE_VISIBILITY_SUCCESS: g,
    WISHLIST_UPDATE_VISIBILITY_FAILURE: A,
    WISHLIST_REORDER_START: I,
    WISHLIST_REORDER_SUCCESS: T,
    WISHLIST_REORDER_FAILURE: S,
    WISHLIST_ITEM_PURCHASED: y,
});
