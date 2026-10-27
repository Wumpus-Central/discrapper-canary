r.d(e, { A: () => c });
var i = r(17928),
    l = r(73153),
    s = r(38405),
    n = r(855052);
let u = {};
function o() {
    return { data: null, status: "not_loaded" };
}
function a(t) {
    return (u[t] ??= o());
}
class d extends i.Ay.Store {
    get(t) {
        return u[t] ?? o();
    }
    getWishlist(t) {
        return this.get(t).data;
    }
    getWishlistItems(t) {
        let e = this.get(t).data;
        return null != e ? (0, n.Lh)(e) : [];
    }
    hasSkuId(t, e) {
        let r = this.get(t).data;
        return null != r && (0, n.C3)(r, e);
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
let c = new d(l.h, {
    WISHLIST_FETCH_START: function (t) {
        let { wishlistId: e } = t,
            r = a(e);
        ((r.status = "fetching"), (r.error = void 0));
    },
    WISHLIST_FETCH_SUCCESS: function (t) {
        let { wishlistId: e, wishlistData: r, updatedAt: i } = t,
            l = a(e);
        ((l.data = r), (l.status = "success"), (l.error = void 0), (l.updatedAt = i), (l.lastFetchedAt = Date.now()));
    },
    WISHLIST_FETCH_FAILURE: function (t) {
        let { wishlistId: e, error: r } = t,
            i = a(e);
        ((i.status = "error"), (i.error = r));
    },
    WISHLIST_ADD_SKU_SUCCESS: function (t) {
        let { wishlistId: e, wishlistData: r } = t,
            i = a(e);
        ((i.data = r), (i.status = "success"), (i.error = void 0), (i.lastFetchedAt = Date.now()));
    },
    WISHLIST_ADD_SKU_FAILURE: function (t) {
        let { error: e } = t;
        s.A.captureException(e);
    },
    WISHLIST_REMOVE_SKU_START: function (t) {
        let { wishlistId: e, skuId: r } = t,
            i = a(e);
        null != i.data &&
            (i.data = new n.Ay({
                id: i.data.id,
                userId: i.data.userId,
                items: i.data.items.filter((t) => t.skuId !== r),
                applications: i.data.applications,
            }));
    },
    WISHLIST_REMOVE_SKU_SUCCESS: function (t) {
        let { wishlistId: e, wishlistData: r } = t,
            i = a(e);
        ((i.data = r), (i.status = "success"), (i.error = void 0), (i.lastFetchedAt = Date.now()));
    },
    WISHLIST_REMOVE_SKU_FAILURE: function (t) {
        let { wishlistId: e, error: r } = t;
        ((a(e).updatedAt = void 0), s.A.captureException(r));
    },
    WISHLIST_UPDATE_VISIBILITY_SUCCESS: function (t) {
        let { wishlistId: e } = t,
            r = a(e);
        ((r.status = "success"), (r.error = void 0), (r.lastFetchedAt = Date.now()));
    },
    WISHLIST_UPDATE_VISIBILITY_FAILURE: function (t) {
        let { error: e } = t;
        s.A.captureException(e);
    },
    WISHLIST_REORDER_START: function (t) {
        let { wishlistId: e, newWishlistData: r } = t;
        a(e).data = r;
    },
    WISHLIST_REORDER_SUCCESS: function (t) {
        let { wishlistId: e, wishlistData: r } = t,
            i = a(e);
        ((i.data = r), (i.status = "success"), (i.error = void 0), (i.lastFetchedAt = Date.now()));
    },
    WISHLIST_REORDER_FAILURE: function (t) {
        let { wishlistId: e, error: r } = t;
        ((a(e).updatedAt = void 0), s.A.captureException(r));
    },
    WISHLIST_ITEM_PURCHASED: function (t) {
        let { recipientId: e, skuId: i } = t,
            l = r(321191).A.getFirstWishlistId(e);
        null != l && null != u[l] && null != u[l].data && (0, n.C3)(u[l].data, i) && (u[l].updatedAt = void 0);
    },
});
