n.d(t, {
    YL: () => d,
    m0: () => p,
    y: () => f,
}),
    n(415506);
var r = n(544891),
    i = n(570140),
    a = n(70956),
    o = n(164670),
    s = n(210218),
    l = n(981631);
let c = 30 * a.Z.Millis.SECOND,
    u = 30 * a.Z.Millis.MINUTE;
async function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = s.Z.getStorefrontData(e),
        a = (null == n ? void 0 : n.state) === "loading",
        d =
            (null == n ? void 0 : n.state) === "error" &&
            (null == n ? void 0 : n.fetchedAt) != null &&
            Date.now() - n.fetchedAt < c,
        f =
            (null == n ? void 0 : n.state) === "fetched" &&
            (null == n ? void 0 : n.fetchedAt) != null &&
            Date.now() - n.fetchedAt < u;
    if (!a && !d && !f)
        try {
            var p;
            i.Z.dispatch({
                type: "SOCIAL_LAYER_STOREFRONT_LOAD",
                guildId: e,
            });
            let t = await r.tn.get({
                url: l.ANM.SOCIAL_LAYER_APPLICATION_STOREFRONT(e),
                rejectWithError: !0,
                retries: 3,
            });
            i.Z.dispatch({
                type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
                guildId: e,
                storefront: (0, o.Uc)(t.body),
            }),
                i.Z.dispatch({
                    type: "STORE_LISTINGS_FETCH_SUCCESS",
                    storeListings: null != (p = t.body.store_listings) ? p : [],
                });
        } catch (n) {
            i.Z.dispatch({
                type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE",
                guildId: e,
                eager: t,
            });
        }
}
async function f(e, t) {
    try {
        i.Z.dispatch({
            type: "STORE_LISTINGS_FETCH_START",
            skuId: t,
        });
        let n = await r.tn.get({
            url: l.ANM.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU(e, t),
            rejectWithError: !0,
        });
        if (null == n.body || !n.ok) throw Error("Failed to fetch social layer storefront SKU");
        i.Z.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS",
            guildId: e,
            storefront: (0, o.Uc)({
                application_id: n.body.store_listing.sku.application_id,
                title: "",
                logo_asset_id: void 0,
                light_theme_logo_asset_id: void 0,
                pages: [],
                store_listings: [],
                assets: n.body.assets,
            }),
        }),
            i.Z.dispatch({
                type: "STORE_LISTING_FETCH_SUCCESS",
                storeListing: n.body.store_listing,
            });
    } catch (e) {
        i.Z.dispatch({
            type: "STORE_LISTINGS_FETCH_FAIL",
            skuId: t,
        });
    }
}
function p(e, t, n) {
    i.Z.dispatch({
        type: "SET_SOCIAL_LAYER_STOREFRONT_STATE",
        guildId: e,
        pageIndex: t,
        skuId: n,
    });
}
