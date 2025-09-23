r.d(t, { Z: () => c });
var n = r(442837),
    l = r(570140);
let i = {},
    a = {
        data: null,
        status: "not_loaded",
    };
function o(e) {
    var t;
    return null != (t = i[e]) ? t : (i[e] = a);
}
class s extends n.ZP.Store {
    get(e) {
        var t;
        return null != (t = i[e]) ? t : a;
    }
    getWishlist(e) {
        return this.get(e).data;
    }
    getWishlistItems(e) {
        var t, r;
        return null != (r = null == (t = this.get(e).data) ? void 0 : t.getSkuIds()) ? r : [];
    }
    hasSkuId(e, t) {
        var r, n;
        return null != (n = null == (r = this.get(e).data) ? void 0 : r.hasSkuId(t)) && n;
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
let c = new s(l.Z, {
    WISHLIST_FETCH_START: function (e) {
        let { wishlistId: t } = e,
            r = o(t);
        (r.status = "fetching"), (r.error = void 0);
    },
    WISHLIST_FETCH_SUCCESS: function (e) {
        let { wishlistId: t, wishlistData: r } = e,
            n = o(t);
        (n.data = r), (n.status = "success"), (n.error = void 0);
    },
    WISHLIST_FETCH_FAILURE: function (e) {
        let { wishlistId: t, error: r } = e,
            n = o(t);
        (n.status = "error"), (n.error = r);
    },
    WISHLIST_ADD_SKU: function (e) {
        let {} = e;
    },
    WISHLIST_REMOVE_SKU: function (e) {
        let {} = e;
    },
});
