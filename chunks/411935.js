n.d(t, {
    K: () => d,
    Y: () => o,
}),
    n(415506);
var a = n(544891),
    r = n(570140),
    l = n(164670),
    i = n(981631);
async function o(e) {
    try {
        var t;
        r.Z.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_LOAD",
            guildId: e,
        });
        let n = await a.tn.get({
            url: i.ANM.SOCIAL_LAYER_APPLICATION_STOREFRONT(e),
            rejectWithError: !0,
        });
        if (null == n.body || !n.ok) throw Error("Failed to fetch social layer storefront");
        let o = (0, l.Uc)(n.body);
        r.Z.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
            guildId: e,
            storefront: o,
        }),
            r.Z.dispatch({
                type: "STORE_LISTINGS_FETCH_SUCCESS",
                storeListings: null != (t = n.body.store_listings) ? t : [],
            });
    } catch (t) {
        r.Z.dispatch({
            type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE",
            guildId: e,
        });
    }
}
function d(e, t) {
    r.Z.dispatch({
        type: "SOCIAL_LAYER_STOREFRONT_SELECT_PAGE",
        guildId: e,
        pageIndex: t,
    });
}
