n.d(t, {
    YL: () => s,
    m0: () => c,
    y: () => l,
}),
    n(415506);
var r = n(544891),
    i = n(570140),
    a = n(164670),
    o = n(981631);
async function s(e) {
    try {
        var t;
        i.Z.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_LOAD",
            guildId: e,
        });
        let n = await r.tn.get({
            url: o.ANM.SOCIAL_LAYER_APPLICATION_STOREFRONT(e),
            rejectWithError: !0,
        });
        if (null == n.body || !n.ok) throw Error("Failed to fetch social layer storefront");
        i.Z.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
            guildId: e,
            storefront: (0, a.Uc)(n.body),
        }),
            i.Z.dispatch({
                type: "STORE_LISTINGS_FETCH_SUCCESS",
                storeListings: null != (t = n.body.store_listings) ? t : [],
            });
    } catch (t) {
        i.Z.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE",
            guildId: e,
        });
    }
}
async function l(e, t) {
    try {
        i.Z.dispatch({
            type: "STORE_LISTINGS_FETCH_START",
            skuId: t,
        });
        let n = await r.tn.get({
            url: o.ANM.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU(e, t),
            rejectWithError: !0,
        });
        if (null == n.body || !n.ok) throw Error("Failed to fetch social layer storefront SKU");
        i.Z.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS",
            guildId: e,
            storefront: (0, a.Uc)({
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
function c(e, t, n) {
    i.Z.dispatch({
        type: "SET_SOCIAL_LAYER_STOREFRONT_STATE",
        guildId: e,
        pageIndex: t,
        skuId: n,
    });
}
