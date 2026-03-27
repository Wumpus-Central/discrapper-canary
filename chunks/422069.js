n.d(t, { A: () => h });
var a = n(311907),
    i = n(73153);
let l = {},
    r = {},
    s = {},
    c = {},
    o = {},
    d = {},
    u = {},
    m = {};
class x extends a.Ay.Store {
    static displayName = "GameProfileStore";
    getSimilarGames(e) {
        return l[e];
    }
    getSimilarGamesError(e) {
        return r[e];
    }
    getShopCollectionSkuIds(e) {
        return s[e];
    }
    hasShopCollectionBeenFetched(e) {
        return c[e] ?? !1;
    }
    isShopCollectionFetching(e) {
        return o[e] ?? !1;
    }
    getAnnouncements(e) {
        return d[e];
    }
    hasAnnouncementsBeenFetched(e) {
        return u[e] ?? !1;
    }
    isAnnouncementsFetching(e) {
        return m[e] ?? !1;
    }
}
let h = new x(i.h, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
        let { applicationId: t, games: n } = e;
        l[t] = n;
    },
    GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function (e) {
        let { applicationId: t, error: n } = e;
        r[t] = n;
    },
    GAME_PROFILE_GET_SHOP_COLLECTION_START: function (e) {
        let { collectionId: t } = e;
        o[t] = !0;
    },
    GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS: function (e) {
        let { collectionId: t, skuIds: n } = e;
        (s[t] = n), (c[t] = !0), (o[t] = !1);
    },
    GAME_PROFILE_GET_SHOP_COLLECTION_ERROR: function (e) {
        let { collectionId: t } = e;
        (c[t] = !0), (o[t] = !1);
    },
    GAME_PROFILE_GET_ANNOUNCEMENTS_START: function (e) {
        let { gameId: t } = e;
        m[t] = !0;
    },
    GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS: function (e) {
        let { gameId: t, messages: n, channelId: a, guildId: i } = e;
        (d[t] = { messages: n, channelId: a, guildId: i }), (u[t] = !0), (m[t] = !1);
    },
    GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR: function (e) {
        let { gameId: t } = e;
        (u[t] = !0), (m[t] = !1);
    },
});
