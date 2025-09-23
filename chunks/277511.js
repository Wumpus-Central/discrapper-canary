n.d(t, { Z: () => c });
var r = n(544891),
    i = n(570140),
    a = n(881052),
    o = n(960048),
    s = n(22494),
    l = n(981631);
let c = {
    async fetchWishlist(e) {
        i.Z.dispatch({
            type: "WISHLIST_FETCH_START",
            wishlistId: e,
        });
        try {
            var t;
            let n = await r.tn.get({
                url: l.ANM.USER_WISHLIST(e),
                rejectWithError: !0,
            });
            (null == (t = n.body) ? void 0 : t.wishlist_items) == null &&
                o.Z.captureMessage("Wishlist items not found in response");
            let a = s.Z.fromServer(n.body);
            i.Z.dispatch({
                type: "WISHLIST_FETCH_SUCCESS",
                wishlistId: e,
                wishlistData: a,
            });
        } catch (t) {
            i.Z.dispatch({
                type: "WISHLIST_FETCH_FAILURE",
                wishlistId: e,
                error: new a.Hx(t),
            }),
                o.Z.captureException(t);
        }
    },
    addSkuToWishlist(e, t) {
        i.Z.dispatch({
            type: "WISHLIST_ADD_SKU",
            wishlistId: e,
            skuId: t,
        });
    },
    removeSkuFromWishlist(e, t) {
        i.Z.dispatch({
            type: "WISHLIST_REMOVE_SKU",
            wishlistId: e,
            skuId: t,
        });
    },
};
