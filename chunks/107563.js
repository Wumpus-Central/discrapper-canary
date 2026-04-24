s.d(e, { A: () => c });
var r = s(17928),
    i = s(228366),
    n = s(38405),
    l = s(855052);
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
        let s = this.get(t).data;
        return null != s && (0, l.C3)(s, e);
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
let c = new d(i.h, {
    WISHLIST_FETCH_START: function (t) {
        let { wishlistId: e } = t,
            s = u(e);
        (s.status = "fetching"), (s.error = void 0);
    },
    WISHLIST_FETCH_SUCCESS: function (t) {
        let { wishlistId: e, wishlistData: s, updatedAt: r } = t,
            i = u(e);
        (i.data = s), (i.status = "success"), (i.error = void 0), (i.updatedAt = r), (i.lastFetchedAt = Date.now());
    },
    WISHLIST_FETCH_FAILURE: function (t) {
        let { wishlistId: e, error: s } = t,
            r = u(e);
        (r.status = "error"), (r.error = s);
    },
    WISHLIST_ADD_SKU_SUCCESS: function (t) {
        let { wishlistId: e, wishlistData: s } = t,
            r = u(e);
        (r.data = s), (r.status = "success"), (r.error = void 0), (r.lastFetchedAt = Date.now());
    },
    WISHLIST_ADD_SKU_FAILURE: function (t) {
        let { error: e } = t;
        n.A.captureException(e);
    },
    WISHLIST_REMOVE_SKU_START: function (t) {
        let { wishlistId: e, skuId: s } = t,
            r = u(e);
        null != r.data &&
            (r.data = new l.Ay({
                id: r.data.id,
                userId: r.data.userId,
                items: r.data.items.filter((t) => t.skuId !== s),
                applications: r.data.applications,
            }));
    },
    WISHLIST_REMOVE_SKU_SUCCESS: function (t) {
        let { wishlistId: e, wishlistData: s } = t,
            r = u(e);
        (r.data = s), (r.status = "success"), (r.error = void 0), (r.lastFetchedAt = Date.now());
    },
    WISHLIST_REMOVE_SKU_FAILURE: function (t) {
        let { wishlistId: e, error: s } = t;
        (u(e).updatedAt = void 0), n.A.captureException(s);
    },
    WISHLIST_UPDATE_VISIBILITY_SUCCESS: function (t) {
        let { wishlistId: e } = t,
            s = u(e);
        (s.status = "success"), (s.error = void 0), (s.lastFetchedAt = Date.now());
    },
    WISHLIST_UPDATE_VISIBILITY_FAILURE: function (t) {
        let { error: e } = t;
        n.A.captureException(e);
    },
    WISHLIST_REORDER_START: function (t) {
        let { wishlistId: e, newWishlistData: s } = t;
        u(e).data = s;
    },
    WISHLIST_REORDER_SUCCESS: function (t) {
        let { wishlistId: e, wishlistData: s } = t,
            r = u(e);
        (r.data = s), (r.status = "success"), (r.error = void 0), (r.lastFetchedAt = Date.now());
    },
    WISHLIST_REORDER_FAILURE: function (t) {
        let { wishlistId: e, error: s } = t;
        (u(e).updatedAt = void 0), n.A.captureException(s);
    },
    WISHLIST_ITEM_PURCHASED: function (t) {
        let { recipientId: e, skuId: r } = t,
            i = s(841595).A.getFirstWishlistId(e);
        null != i && null != a[i] && null != a[i].data && (0, l.C3)(a[i].data, r) && (a[i].updatedAt = void 0);
    },
});
