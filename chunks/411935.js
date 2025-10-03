t.d(n, {
    K: () => o,
    Y: () => d,
}),
    t(415506);
var a = t(544891),
    l = t(570140),
    r = t(164670),
    i = t(981631);
async function d(e) {
    try {
        var n;
        l.Z.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_LOAD",
            guildId: e,
        });
        let t = await a.tn.get({
            url: i.ANM.SOCIAL_LAYER_APPLICATION_STOREFRONT(e),
            rejectWithError: !0,
        });
        if (null == t.body || !t.ok) throw Error("Failed to fetch social layer storefront");
        let d = (0, r.Uc)(t.body);
        l.Z.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
            guildId: e,
            storefront: d,
        }),
            l.Z.dispatch({
                type: "STORE_LISTINGS_FETCH_SUCCESS",
                storeListings: null != (n = t.body.store_listings) ? n : [],
            });
    } catch (n) {
        l.Z.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE",
            guildId: e,
        });
    }
}
function o(e, n) {
    l.Z.dispatch({
        type: "SOCIAL_LAYER_STOREFRONT_SELECT_PAGE",
        guildId: e,
        pageIndex: n,
    });
}
