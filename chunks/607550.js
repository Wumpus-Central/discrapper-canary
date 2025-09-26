n.d(t, { Z: () => u });
var r = n(442837),
    i = n(570140),
    l = n(960048);
let a = {},
    o = () => ({
        data: null,
        status: "not_loaded",
    });
function s(e) {
    var t;
    return null != (t = a[e]) ? t : (a[e] = o());
}
class c extends r.ZP.Store {
    get(e) {
        var t;
        return null != (t = a[e]) ? t : o();
    }
    getWishlist(e) {
        return this.get(e).data;
    }
    getWishlistItems(e) {
        var t, n;
        return null != (n = null == (t = this.get(e).data) ? void 0 : t.getSkuIds()) ? n : [];
    }
    hasSkuId(e, t) {
        var n, r;
        return null != (r = null == (n = this.get(e).data) ? void 0 : n.hasSkuId(t)) && r;
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
}
let u = new c(i.Z, {
    WISHLIST_FETCH_START: function (e) {
        let { wishlistId: t } = e,
            n = s(t);
        (n.status = "fetching"), (n.error = void 0);
    },
    WISHLIST_FETCH_SUCCESS: function (e) {
        let { wishlistId: t, wishlistData: n } = e,
            r = s(t);
        (r.data = n), (r.status = "success"), (r.error = void 0);
    },
    WISHLIST_FETCH_FAILURE: function (e) {
        let { wishlistId: t, error: n } = e,
            r = s(t);
        (r.status = "error"), (r.error = n);
    },
    WISHLIST_ADD_SKU_SUCCESS: function (e) {
        let { wishlistId: t, wishlistData: n } = e,
            r = s(t);
        (r.data = n), (r.status = "success"), (r.error = void 0);
    },
    WISHLIST_ADD_SKU_FAILURE: function (e) {
        let { error: t } = e;
        l.Z.captureException(t);
    },
    WISHLIST_REMOVE_SKU_SUCCESS: function (e) {
        let { wishlistId: t, wishlistData: n } = e,
            r = s(t);
        (r.data = n), (r.status = "success"), (r.error = void 0);
    },
    WISHLIST_REMOVE_SKU_FAILURE: function (e) {
        let { error: t } = e;
        l.Z.captureException(t);
    },
});
