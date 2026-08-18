"use strict";
n.d(t, { A: () => d });
var l = n(17928),
    i = n(228366),
    s = n(38405),
    r = n(855052);
let a = {};
function o() {
    return { data: null, status: "not_loaded" };
}
function u(e) {
    return (a[e] ??= o());
}
class c extends l.Ay.Store {
    get(e) {
        return a[e] ?? o();
    }
    getWishlist(e) {
        return this.get(e).data;
    }
    getWishlistItems(e) {
        let t = this.get(e).data;
        return null != t ? (0, r.Lh)(t) : [];
    }
    hasSkuId(e, t) {
        let n = this.get(e).data;
        return null != n && (0, r.C3)(n, t);
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
let d = new c(i.h, {
    WISHLIST_FETCH_START: function (e) {
        let { wishlistId: t } = e,
            n = u(t);
        (n.status = "fetching"), (n.error = void 0);
    },
    WISHLIST_FETCH_SUCCESS: function (e) {
        let { wishlistId: t, wishlistData: n, updatedAt: l } = e,
            i = u(t);
        (i.data = n), (i.status = "success"), (i.error = void 0), (i.updatedAt = l), (i.lastFetchedAt = Date.now());
    },
    WISHLIST_FETCH_FAILURE: function (e) {
        let { wishlistId: t, error: n } = e,
            l = u(t);
        (l.status = "error"), (l.error = n);
    },
    WISHLIST_ADD_SKU_SUCCESS: function (e) {
        let { wishlistId: t, wishlistData: n } = e,
            l = u(t);
        (l.data = n), (l.status = "success"), (l.error = void 0), (l.lastFetchedAt = Date.now());
    },
    WISHLIST_ADD_SKU_FAILURE: function (e) {
        let { error: t } = e;
        s.A.captureException(t);
    },
    WISHLIST_REMOVE_SKU_START: function (e) {
        let { wishlistId: t, skuId: n } = e,
            l = u(t);
        null != l.data &&
            (l.data = new r.Ay({
                id: l.data.id,
                userId: l.data.userId,
                items: l.data.items.filter((e) => e.skuId !== n),
                applications: l.data.applications,
            }));
    },
    WISHLIST_REMOVE_SKU_SUCCESS: function (e) {
        let { wishlistId: t, wishlistData: n } = e,
            l = u(t);
        (l.data = n), (l.status = "success"), (l.error = void 0), (l.lastFetchedAt = Date.now());
    },
    WISHLIST_REMOVE_SKU_FAILURE: function (e) {
        let { wishlistId: t, error: n } = e;
        (u(t).updatedAt = void 0), s.A.captureException(n);
    },
    WISHLIST_UPDATE_VISIBILITY_SUCCESS: function (e) {
        let { wishlistId: t } = e,
            n = u(t);
        (n.status = "success"), (n.error = void 0), (n.lastFetchedAt = Date.now());
    },
    WISHLIST_UPDATE_VISIBILITY_FAILURE: function (e) {
        let { error: t } = e;
        s.A.captureException(t);
    },
    WISHLIST_REORDER_START: function (e) {
        let { wishlistId: t, newWishlistData: n } = e;
        u(t).data = n;
    },
    WISHLIST_REORDER_SUCCESS: function (e) {
        let { wishlistId: t, wishlistData: n } = e,
            l = u(t);
        (l.data = n), (l.status = "success"), (l.error = void 0), (l.lastFetchedAt = Date.now());
    },
    WISHLIST_REORDER_FAILURE: function (e) {
        let { wishlistId: t, error: n } = e;
        (u(t).updatedAt = void 0), s.A.captureException(n);
    },
    WISHLIST_ITEM_PURCHASED: function (e) {
        let { recipientId: t, skuId: l } = e,
            i = n(321191).A.getFirstWishlistId(t);
        null != i && null != a[i] && null != a[i].data && (0, r.C3)(a[i].data, l) && (a[i].updatedAt = void 0);
    },
});
