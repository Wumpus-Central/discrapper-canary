n.d(t, { A: () => u });
var a = n(311907),
    l = n(73153);
let i = {},
    r = {},
    s = {},
    o = {},
    c = {};
class d extends a.Ay.Store {
    static displayName = "GameProfileStore";
    getSimilarGames(e) {
        return i[e];
    }
    getSimilarGamesError(e) {
        return r[e];
    }
    getShopCollectionSkuIds(e) {
        return s[e];
    }
    hasShopCollectionBeenFetched(e) {
        return o[e] ?? !1;
    }
    isShopCollectionFetching(e) {
        return c[e] ?? !1;
    }
}
let u = new d(l.h, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
        let { applicationId: t, games: n } = e;
        i[t] = n;
    },
    GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function (e) {
        let { applicationId: t, error: n } = e;
        r[t] = n;
    },
    GAME_PROFILE_GET_SHOP_COLLECTION_START: function (e) {
        let { collectionId: t } = e;
        c[t] = !0;
    },
    GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS: function (e) {
        let { collectionId: t, skuIds: n } = e;
        (s[t] = n), (o[t] = !0), (c[t] = !1);
    },
    GAME_PROFILE_GET_SHOP_COLLECTION_ERROR: function (e) {
        let { collectionId: t } = e;
        (o[t] = !0), (c[t] = !1);
    },
});
