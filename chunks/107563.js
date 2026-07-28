"use strict";
n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366),
    a = n(38405),
    s = n(855052);
let l = {};
function o() {
    return { data: null, status: "not_loaded" };
}
function d(e) {
    return (l[e] ??= o());
}
class c extends i.Ay.Store {
    get(e) {
        return l[e] ?? o();
    }
    getWishlist(e) {
        return this.get(e).data;
    }
    getWishlistItems(e) {
        let t = this.get(e).data;
        return null != t ? (0, s.Lh)(t) : [];
    }
    hasSkuId(e, t) {
        let n = this.get(e).data;
        return null != n && (0, s.C3)(n, t);
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
let u = new c(r.h, {
    WISHLIST_FETCH_START: function (e) {
        let { wishlistId: t } = e,
            n = d(t);
        (n.status = "fetching"), (n.error = void 0);
    },
    WISHLIST_FETCH_SUCCESS: function (e) {
        let { wishlistId: t, wishlistData: n, updatedAt: i } = e,
            r = d(t);
        (r.data = n), (r.status = "success"), (r.error = void 0), (r.updatedAt = i), (r.lastFetchedAt = Date.now());
    },
    WISHLIST_FETCH_FAILURE: function (e) {
        let { wishlistId: t, error: n } = e,
            i = d(t);
        (i.status = "error"), (i.error = n);
    },
    WISHLIST_ADD_SKU_SUCCESS: function (e) {
        let { wishlistId: t, wishlistData: n } = e,
            i = d(t);
        (i.data = n), (i.status = "success"), (i.error = void 0), (i.lastFetchedAt = Date.now());
    },
    WISHLIST_ADD_SKU_FAILURE: function (e) {
        let { error: t } = e;
        a.A.captureException(t);
    },
    WISHLIST_REMOVE_SKU_START: function (e) {
        let { wishlistId: t, skuId: n } = e,
            i = d(t);
        null != i.data &&
            (i.data = new s.Ay({
                id: i.data.id,
                userId: i.data.userId,
                items: i.data.items.filter((e) => e.skuId !== n),
                applications: i.data.applications,
            }));
    },
    WISHLIST_REMOVE_SKU_SUCCESS: function (e) {
        let { wishlistId: t, wishlistData: n } = e,
            i = d(t);
        (i.data = n), (i.status = "success"), (i.error = void 0), (i.lastFetchedAt = Date.now());
    },
    WISHLIST_REMOVE_SKU_FAILURE: function (e) {
        let { wishlistId: t, error: n } = e;
        (d(t).updatedAt = void 0), a.A.captureException(n);
    },
    WISHLIST_UPDATE_VISIBILITY_SUCCESS: function (e) {
        let { wishlistId: t } = e,
            n = d(t);
        (n.status = "success"), (n.error = void 0), (n.lastFetchedAt = Date.now());
    },
    WISHLIST_UPDATE_VISIBILITY_FAILURE: function (e) {
        let { error: t } = e;
        a.A.captureException(t);
    },
    WISHLIST_REORDER_START: function (e) {
        let { wishlistId: t, newWishlistData: n } = e;
        d(t).data = n;
    },
    WISHLIST_REORDER_SUCCESS: function (e) {
        let { wishlistId: t, wishlistData: n } = e,
            i = d(t);
        (i.data = n), (i.status = "success"), (i.error = void 0), (i.lastFetchedAt = Date.now());
    },
    WISHLIST_REORDER_FAILURE: function (e) {
        let { wishlistId: t, error: n } = e;
        (d(t).updatedAt = void 0), a.A.captureException(n);
    },
    WISHLIST_ITEM_PURCHASED: function (e) {
        let { recipientId: t, skuId: i } = e,
            r = n(321191).A.getFirstWishlistId(t);
        null != r && null != l[r] && null != l[r].data && (0, s.C3)(l[r].data, i) && (l[r].updatedAt = void 0);
    },
});
