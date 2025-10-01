n.d(t, { Z: () => f });
var r = n(544891),
    i = n(570140),
    l = n(232567),
    a = n(881052),
    o = n(621853),
    s = n(594174),
    c = n(626135),
    u = n(960048),
    d = n(22494),
    p = n(981631);
let f = {
    async fetchWishlist(e) {
        i.Z.dispatch({
            type: "WISHLIST_FETCH_START",
            wishlistId: e,
        });
        try {
            var t;
            let n = await r.tn.get({
                url: p.ANM.USER_WISHLIST(e),
                rejectWithError: !0,
            });
            (null == (t = n.body) ? void 0 : t.wishlist_items) == null &&
                u.Z.captureMessage("Wishlist items not found in response");
            let l = d.Z.fromServer(n.body);
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
                u.Z.captureException(t);
        }
    },
    async addSkuToWishlist(e, t) {
        let n = null;
        try {
            n = await r.tn.post({
                url: p.ANM.USER_WISHLIST_ITEMS,
                body: { sku_id: e },
                rejectWithError: !0,
            });
            let l = d.Z.fromServer(n.body);
            if (
                (i.Z.dispatch({
                    type: "WISHLIST_ADD_SKU_SUCCESS",
                    wishlistId: l.id,
                    skuId: e,
                    wishlistData: l,
                }),
                null != t)
            )
                try {
                    let n = l.getSkuIds();
                    c.default.track(p.rMx.WISHLIST_UPDATED, {
                        wishlist_id: l.id,
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
                    error: new a.Hx(t),
                }),
                t)
            );
        }
        if (null == n) return;
        let u = s.default.getCurrentUser();
        if (null != u && null == o.Z.getFirstWishlistId(u.id))
            try {
                await (0, l.In)(u.id);
            } catch (e) {}
    },
    async removeSkuFromWishlist(e, t, n) {
        try {
            let l = await r.tn.del({
                    url: p.ANM.USER_WISHLIST_ITEM(e, t),
                    rejectWithError: !0,
                }),
                a = d.Z.fromServer(l.body);
            if (
                (i.Z.dispatch({
                    type: "WISHLIST_REMOVE_SKU_SUCCESS",
                    wishlistId: e,
                    skuId: t,
                    wishlistData: a,
                }),
                null != n)
            )
                try {
                    let e = a.getSkuIds();
                    c.default.track(p.rMx.WISHLIST_UPDATED, {
                        wishlist_id: a.id,
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
                    error: new a.Hx(n),
                }),
                n)
            );
        }
    },
};
