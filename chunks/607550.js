n.d(t, { Z: () => c });
var r = n(442837),
    i = n(570140);
let l = {},
    a = () => ({
        data: null,
        status: "not_loaded",
    });
function o(e) {
    var t;
    return null != (t = l[e]) ? t : (l[e] = a());
}
class s extends r.ZP.Store {
    get(e) {
        var t;
        return null != (t = l[e]) ? t : a();
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
let c = new s(i.Z, {
    WISHLIST_FETCH_START: function (e) {
        let { wishlistId: t } = e,
            n = o(t);
        (n.status = "fetching"), (n.error = void 0);
    },
    WISHLIST_FETCH_SUCCESS: function (e) {
        let { wishlistId: t, wishlistData: n } = e,
            r = o(t);
        (r.data = n), (r.status = "success"), (r.error = void 0);
    },
    WISHLIST_FETCH_FAILURE: function (e) {
        let { wishlistId: t, error: n } = e,
            r = o(t);
        (r.status = "error"), (r.error = n);
    },
    WISHLIST_ADD_SKU: function (e) {
        let {} = e;
    },
    WISHLIST_REMOVE_SKU: function (e) {
        let {} = e;
    },
});
