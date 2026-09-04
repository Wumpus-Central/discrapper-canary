r.d(e, { A: () => d });
var i = r(17928),
    n = r(228366),
    l = r(38405),
    s = r(855052);
let u = {};
function a() {
    return { data: null, status: "not_loaded" };
}
function o(t) {
    return (u[t] ??= a());
}
class c extends i.Ay.Store {
    get(t) {
        return u[t] ?? a();
    }
    getWishlist(t) {
        return this.get(t).data;
    }
    getWishlistItems(t) {
        let e = this.get(t).data;
        return null != e ? (0, s.Lh)(e) : [];
    }
    hasSkuId(t, e) {
        let r = this.get(t).data;
        return null != r && (0, s.C3)(r, e);
    }
    getStatus(t) {
        return this.get(t).status;
    }
    isFetching(t) {
        return "fetching" === this.getStatus(t);
    }
    hasError(t) {
        return "error" === this.getStatus(t);
    }
    getError(t) {
        return this.get(t).error;
    }
    getUpdatedAt(t) {
        return this.get(t).updatedAt;
    }
    getLastFetchedAt(t) {
        return this.get(t).lastFetchedAt;
    }
}
let d = new c(n.h, {
    WISHLIST_FETCH_START: function (t) {
        let { wishlistId: e } = t,
            r = o(e);
        (r.status = "fetching"), (r.error = void 0);
    },
    WISHLIST_FETCH_SUCCESS: function (t) {
        let { wishlistId: e, wishlistData: r, updatedAt: i } = t,
            n = o(e);
        (n.data = r), (n.status = "success"), (n.error = void 0), (n.updatedAt = i), (n.lastFetchedAt = Date.now());
    },
    WISHLIST_FETCH_FAILURE: function (t) {
        let { wishlistId: e, error: r } = t,
            i = o(e);
        (i.status = "error"), (i.error = r);
    },
    WISHLIST_ADD_SKU_SUCCESS: function (t) {
        let { wishlistId: e, wishlistData: r } = t,
            i = o(e);
        (i.data = r), (i.status = "success"), (i.error = void 0), (i.lastFetchedAt = Date.now());
    },
    WISHLIST_ADD_SKU_FAILURE: function (t) {
        let { error: e } = t;
        l.A.captureException(e);
    },
    WISHLIST_REMOVE_SKU_START: function (t) {
        let { wishlistId: e, skuId: r } = t,
            i = o(e);
        null != i.data &&
            (i.data = new s.Ay({
                id: i.data.id,
                userId: i.data.userId,
                items: i.data.items.filter((t) => t.skuId !== r),
                applications: i.data.applications,
            }));
    },
    WISHLIST_REMOVE_SKU_SUCCESS: function (t) {
        let { wishlistId: e, wishlistData: r } = t,
            i = o(e);
        (i.data = r), (i.status = "success"), (i.error = void 0), (i.lastFetchedAt = Date.now());
    },
    WISHLIST_REMOVE_SKU_FAILURE: function (t) {
        let { wishlistId: e, error: r } = t;
        (o(e).updatedAt = void 0), l.A.captureException(r);
    },
    WISHLIST_UPDATE_VISIBILITY_SUCCESS: function (t) {
        let { wishlistId: e } = t,
            r = o(e);
        (r.status = "success"), (r.error = void 0), (r.lastFetchedAt = Date.now());
    },
    WISHLIST_UPDATE_VISIBILITY_FAILURE: function (t) {
        let { error: e } = t;
        l.A.captureException(e);
    },
    WISHLIST_REORDER_START: function (t) {
        let { wishlistId: e, newWishlistData: r } = t;
        o(e).data = r;
    },
    WISHLIST_REORDER_SUCCESS: function (t) {
        let { wishlistId: e, wishlistData: r } = t,
            i = o(e);
        (i.data = r), (i.status = "success"), (i.error = void 0), (i.lastFetchedAt = Date.now());
    },
    WISHLIST_REORDER_FAILURE: function (t) {
        let { wishlistId: e, error: r } = t;
        (o(e).updatedAt = void 0), l.A.captureException(r);
    },
    WISHLIST_ITEM_PURCHASED: function (t) {
        let { recipientId: e, skuId: i } = t,
            n = r(321191).A.getFirstWishlistId(e);
        null != n && null != u[n] && null != u[n].data && (0, s.C3)(u[n].data, i) && (u[n].updatedAt = void 0);
    },
});
