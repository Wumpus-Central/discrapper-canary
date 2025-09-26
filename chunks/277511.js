n.d(t, { Z: () => c });
var r = n(544891),
    i = n(570140),
    l = n(881052),
    a = n(960048),
    o = n(22494),
    s = n(981631);
let c = {
    async fetchWishlist(e) {
        i.Z.dispatch({
            type: "WISHLIST_FETCH_START",
            wishlistId: e,
        });
        try {
            var t;
            let n = await r.tn.get({
                url: s.ANM.USER_WISHLIST(e),
                rejectWithError: !0,
            });
            (null == (t = n.body) ? void 0 : t.wishlist_items) == null &&
                a.Z.captureMessage("Wishlist items not found in response");
            let l = o.Z.fromServer(n.body);
            i.Z.dispatch({
                type: "WISHLIST_FETCH_SUCCESS",
                wishlistId: e,
                wishlistData: l,
            });
        } catch (t) {
            i.Z.dispatch({
                type: "WISHLIST_FETCH_FAILURE",
                wishlistId: e,
                error: new l.Hx(t),
            }),
                a.Z.captureException(t);
        }
    },
    async addSkuToWishlist(e) {
        try {
            let t = await r.tn.post({
                    url: s.ANM.USER_WISHLIST_ITEMS,
                    body: { sku_id: e },
                    rejectWithError: !0,
                }),
                n = o.Z.fromServer(t.body);
            i.Z.dispatch({
                type: "WISHLIST_ADD_SKU_SUCCESS",
                wishlistId: n.id,
                skuId: e,
                wishlistData: n,
            });
        } catch (t) {
            throw (
                (i.Z.dispatch({
                    type: "WISHLIST_ADD_SKU_FAILURE",
                    skuId: e,
                    error: new l.Hx(t),
                }),
                t)
            );
        }
    },
    async removeSkuFromWishlist(e, t) {
        try {
            let n = await r.tn.del({
                    url: s.ANM.USER_WISHLIST_ITEM(e, t),
                    rejectWithError: !0,
                }),
                l = o.Z.fromServer(n.body);
            i.Z.dispatch({
                type: "WISHLIST_REMOVE_SKU_SUCCESS",
                wishlistId: e,
                skuId: t,
                wishlistData: l,
            });
        } catch (n) {
            throw (
                (i.Z.dispatch({
                    type: "WISHLIST_REMOVE_SKU_FAILURE",
                    wishlistId: e,
                    skuId: t,
                    error: new l.Hx(n),
                }),
                n)
            );
        }
    },
};
