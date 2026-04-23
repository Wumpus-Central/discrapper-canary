"use strict";
n.d(t, { A: () => d });
var r = n(311907),
    i = n(73153),
    s = n(728458),
    a = n(855052);
let o = {},
    l = () => ({ data: null, status: "not_loaded" });
function u(e) {
    return (o[e] ??= l());
}
class c extends r.Ay.Store {
    get(e) {
        return o[e] ?? l();
    }
    getWishlist(e) {
        return this.get(e).data;
    }
    getWishlistItems(e) {
        let t = this.get(e).data;
        return null != t ? (0, a.Lh)(t) : [];
    }
    hasSkuId(e, t) {
        let n = this.get(e).data;
        return null != n && (0, a.C3)(n, t);
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
        let { wishlistId: t, wishlistData: n, updatedAt: r } = e,
            i = u(t);
        (i.data = n), (i.status = "success"), (i.error = void 0), (i.updatedAt = r), (i.lastFetchedAt = Date.now());
    },
    WISHLIST_FETCH_FAILURE: function (e) {
        let { wishlistId: t, error: n } = e,
            r = u(t);
        (r.status = "error"), (r.error = n);
    },
    WISHLIST_ADD_SKU_SUCCESS: function (e) {
        let { wishlistId: t, wishlistData: n } = e,
            r = u(t);
        (r.data = n), (r.status = "success"), (r.error = void 0), (r.lastFetchedAt = Date.now());
    },
    WISHLIST_ADD_SKU_FAILURE: function (e) {
        let { error: t } = e;
        s.A.captureException(t);
    },
    WISHLIST_REMOVE_SKU_START: function (e) {
        let { wishlistId: t, skuId: n } = e,
            r = u(t);
        null != r.data &&
            (r.data = new a.Ay({
                id: r.data.id,
                userId: r.data.userId,
                items: r.data.items.filter((e) => e.skuId !== n),
                applications: r.data.applications,
            }));
    },
    WISHLIST_REMOVE_SKU_SUCCESS: function (e) {
        let { wishlistId: t, wishlistData: n } = e,
            r = u(t);
        (r.data = n), (r.status = "success"), (r.error = void 0), (r.lastFetchedAt = Date.now());
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
            r = u(t);
        (r.data = n), (r.status = "success"), (r.error = void 0), (r.lastFetchedAt = Date.now());
    },
    WISHLIST_REORDER_FAILURE: function (e) {
        let { wishlistId: t, error: n } = e;
        (u(t).updatedAt = void 0), s.A.captureException(n);
    },
    WISHLIST_ITEM_PURCHASED: function (e) {
        let { recipientId: t, skuId: r } = e,
            i = n(622543).A.getFirstWishlistId(t);
        null != i && null != o[i] && null != o[i].data && (0, a.C3)(o[i].data, r) && (o[i].updatedAt = void 0);
    },
});
