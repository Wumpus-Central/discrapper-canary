i.d(e, { A: () => c });
var r = i(311907),
    s = i(73153),
    n = i(728458),
    l = i(855052);
let a = {},
    o = () => ({ data: null, status: "not_loaded" });
function u(t) {
    return (a[t] ??= o());
}
class d extends r.Ay.Store {
    get(t) {
        return a[t] ?? o();
    }
    getWishlist(t) {
        return this.get(t).data;
    }
    getWishlistItems(t) {
        let e = this.get(t).data;
        return null != e ? (0, l.Lh)(e) : [];
    }
    hasSkuId(t, e) {
        let i = this.get(t).data;
        return null != i && (0, l.C3)(i, e);
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
let c = new d(s.h, {
    WISHLIST_FETCH_START: function (t) {
        let { wishlistId: e } = t,
            i = u(e);
        (i.status = "fetching"), (i.error = void 0);
    },
    WISHLIST_FETCH_SUCCESS: function (t) {
        let { wishlistId: e, wishlistData: i, updatedAt: r } = t,
            s = u(e);
        (s.data = i), (s.status = "success"), (s.error = void 0), (s.updatedAt = r), (s.lastFetchedAt = Date.now());
    },
    WISHLIST_FETCH_FAILURE: function (t) {
        let { wishlistId: e, error: i } = t,
            r = u(e);
        (r.status = "error"), (r.error = i);
    },
    WISHLIST_ADD_SKU_SUCCESS: function (t) {
        let { wishlistId: e, wishlistData: i } = t,
            r = u(e);
        (r.data = i), (r.status = "success"), (r.error = void 0), (r.lastFetchedAt = Date.now());
    },
    WISHLIST_ADD_SKU_FAILURE: function (t) {
        let { error: e } = t;
        n.A.captureException(e);
    },
    WISHLIST_REMOVE_SKU_START: function (t) {
        let { wishlistId: e, skuId: i } = t,
            r = u(e);
        null != r.data &&
            (r.data = new l.Ay({
                id: r.data.id,
                userId: r.data.userId,
                items: r.data.items.filter((t) => t.skuId !== i),
                applications: r.data.applications,
            }));
    },
    WISHLIST_REMOVE_SKU_SUCCESS: function (t) {
        let { wishlistId: e, wishlistData: i } = t,
            r = u(e);
        (r.data = i), (r.status = "success"), (r.error = void 0), (r.lastFetchedAt = Date.now());
    },
    WISHLIST_REMOVE_SKU_FAILURE: function (t) {
        let { wishlistId: e, error: i } = t;
        (u(e).updatedAt = void 0), n.A.captureException(i);
    },
    WISHLIST_UPDATE_VISIBILITY_SUCCESS: function (t) {
        let { wishlistId: e } = t,
            i = u(e);
        (i.status = "success"), (i.error = void 0), (i.lastFetchedAt = Date.now());
    },
    WISHLIST_UPDATE_VISIBILITY_FAILURE: function (t) {
        let { error: e } = t;
        n.A.captureException(e);
    },
    WISHLIST_REORDER_START: function (t) {
        let { wishlistId: e, newWishlistData: i } = t;
        u(e).data = i;
    },
    WISHLIST_REORDER_SUCCESS: function (t) {
        let { wishlistId: e, wishlistData: i } = t,
            r = u(e);
        (r.data = i), (r.status = "success"), (r.error = void 0), (r.lastFetchedAt = Date.now());
    },
    WISHLIST_REORDER_FAILURE: function (t) {
        let { wishlistId: e, error: i } = t;
        (u(e).updatedAt = void 0), n.A.captureException(i);
    },
    WISHLIST_ITEM_PURCHASED: function (t) {
        let { recipientId: e, skuId: r } = t,
            s = i(622543).A.getFirstWishlistId(e);
        null != s && null != a[s] && null != a[s].data && (0, l.C3)(a[s].data, r) && (a[s].updatedAt = void 0);
    },
});
