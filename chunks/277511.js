n.d(t, { Z: () => p });
var r = n(544891),
    i = n(570140),
    a = n(232567),
    o = n(881052),
    s = n(621853),
    l = n(594174),
    c = n(626135),
    u = n(960048),
    d = n(22494),
    f = n(981631);
let p = {
    async fetchWishlist(e, t) {
        i.Z.dispatch({
            type: "WISHLIST_FETCH_START",
            wishlistId: e,
        });
        try {
            var n;
            let a = await r.tn.get({
                url: f.ANM.USER_WISHLIST(e),
                rejectWithError: !0,
            });
            (null == (n = a.body) ? void 0 : n.wishlist_items) == null &&
                u.Z.captureMessage("Wishlist items not found in response");
            let o = d.Z.fromServer(a.body);
            i.Z.dispatch({
                type: "WISHLIST_FETCH_SUCCESS",
                wishlistId: e,
                wishlistData: o,
                updatedAt: t,
            });
        } catch (t) {
            i.Z.dispatch({
                type: "WISHLIST_FETCH_FAILURE",
                wishlistId: e,
                error: new o.Hx(t),
            }),
                u.Z.captureException(t);
        }
    },
    async addSkuToWishlist(e, t) {
        let n = null;
        try {
            n = await r.tn.post({
                url: f.ANM.USER_WISHLIST_ITEMS,
                body: { sku_id: e },
                rejectWithError: !0,
            });
            let a = d.Z.fromServer(n.body);
            if (
                (i.Z.dispatch({
                    type: "WISHLIST_ADD_SKU_SUCCESS",
                    wishlistId: a.id,
                    skuId: e,
                    wishlistData: a,
                }),
                null != t)
            )
                try {
                    let n = a.getSkuIds();
                    c.default.track(f.rMx.WISHLIST_UPDATED, {
                        wishlist_id: a.id,
                        action_type: "ADD",
                        sku_id: e,
                        sku_ids: n,
                        location_stack: t,
                    });
                } catch (e) {}
        } catch (t) {
            throw (
                (i.Z.dispatch({
                    type: "WISHLIST_ADD_SKU_FAILURE",
                    skuId: e,
                    error: new o.Hx(t),
                }),
                t)
            );
        }
        if (null == n) return;
        let u = l.default.getCurrentUser();
        if (null != u && null == s.Z.getFirstWishlistId(u.id))
            try {
                await (0, a.In)(u.id);
            } catch (e) {}
    },
    async removeSkuFromWishlist(e, t, n) {
        try {
            let a = await r.tn.del({
                    url: f.ANM.USER_WISHLIST_ITEM(e, t),
                    rejectWithError: !0,
                }),
                o = d.Z.fromServer(a.body);
            if (
                (i.Z.dispatch({
                    type: "WISHLIST_REMOVE_SKU_SUCCESS",
                    wishlistId: e,
                    skuId: t,
                    wishlistData: o,
                }),
                null != n)
            )
                try {
                    let e = o.getSkuIds();
                    c.default.track(f.rMx.WISHLIST_UPDATED, {
                        wishlist_id: o.id,
                        action_type: "REMOVE",
                        sku_id: t,
                        sku_ids: e,
                        location_stack: n,
                    });
                } catch (e) {}
        } catch (n) {
            throw (
                (i.Z.dispatch({
                    type: "WISHLIST_REMOVE_SKU_FAILURE",
                    wishlistId: e,
                    skuId: t,
                    error: new o.Hx(n),
                }),
                n)
            );
        }
    },
    async updateWishlistVisibility(e, t) {
        let n = l.default.getCurrentUser();
        if (null != n)
            try {
                await r.tn.patch({
                    url: f.ANM.USER_WISHLIST_PATCH(e),
                    body: { visibility: t },
                    rejectWithError: !0,
                }),
                    i.Z.dispatch({
                        type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS",
                        wishlistId: e,
                        visibility: t,
                    });
                try {
                    await (0, a.In)(n.id);
                } catch (e) {}
            } catch (t) {
                throw (
                    (i.Z.dispatch({
                        type: "WISHLIST_UPDATE_VISIBILITY_FAILURE",
                        wishlistId: e,
                        error: new o.Hx(t),
                    }),
                    t)
                );
            }
    },
};
