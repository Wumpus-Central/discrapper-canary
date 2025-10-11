n.d(t, {
    Y: () => o,
    m: () => d,
}),
    n(415506);
var a = n(544891),
    l = n(570140),
    r = n(164670),
    i = n(981631);
async function o(e) {
    try {
        var t;
        l.Z.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_LOAD",
            guildId: e,
        });
        let n = await a.tn.get({
            url: i.ANM.SOCIAL_LAYER_APPLICATION_STOREFRONT(e),
            rejectWithError: !0,
        });
        if (null == n.body || !n.ok) throw Error("Failed to fetch social layer storefront");
        let o = (0, r.Uc)(n.body);
        l.Z.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
            guildId: e,
            storefront: o,
        }),
            l.Z.dispatch({
                type: "STORE_LISTINGS_FETCH_SUCCESS",
                storeListings: null != (t = n.body.store_listings) ? t : [],
            });
    } catch (t) {
        l.Z.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE",
            guildId: e,
        });
    }
}
function d(e, t, n) {
    l.Z.dispatch({
        type: "SET_SOCIAL_LAYER_STOREFRONT_STATE",
        guildId: e,
        pageIndex: t,
        skuId: n,
    });
}
