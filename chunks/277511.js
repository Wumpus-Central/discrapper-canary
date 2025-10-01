n.d(t, { Z: () => p });
var r = n(544891),
    i = n(570140),
    l = n(232567),
    a = n(881052),
    o = n(621853),
    s = n(594174),
    c = n(960048),
    u = n(22494),
    d = n(981631);
let p = {
    async fetchWishlist(e) {
        i.Z.dispatch({
            type: "WISHLIST_FETCH_START",
            wishlistId: e,
        });
        try {
            var t;
            let n = await r.tn.get({
                url: d.ANM.USER_WISHLIST(e),
                rejectWithError: !0,
            });
            (null == (t = n.body) ? void 0 : t.wishlist_items) == null &&
                c.Z.captureMessage("Wishlist items not found in response");
            let l = u.Z.fromServer(n.body);
            i.Z.dispatch({
                type: "WISHLIST_FETCH_SUCCESS",
                wishlistId: e,
                wishlistData: l,
            });
        } catch (t) {
            i.Z.dispatch({
                type: "WISHLIST_FETCH_FAILURE",
                wishlistId: e,
                error: new a.Hx(t),
            }),
                c.Z.captureException(t);
        }
    },
    async addSkuToWishlist(e) {
        let t = null;
        try {
            t = await r.tn.post({
                url: d.ANM.USER_WISHLIST_ITEMS,
                body: { sku_id: e },
                rejectWithError: !0,
            });
            let n = u.Z.fromServer(t.body);
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
                    error: new a.Hx(t),
                }),
                t)
            );
        }
        if (null == t) return;
        let n = s.default.getCurrentUser();
        if (null != n && null == o.Z.getFirstWishlistId(n.id))
            try {
                await (0, l.In)(n.id);
            } catch (e) {}
    },
    async removeSkuFromWishlist(e, t) {
        try {
            let n = await r.tn.del({
                    url: d.ANM.USER_WISHLIST_ITEM(e, t),
                    rejectWithError: !0,
                }),
                l = u.Z.fromServer(n.body);
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
                    error: new a.Hx(n),
                }),
                n)
            );
        }
    },
};
