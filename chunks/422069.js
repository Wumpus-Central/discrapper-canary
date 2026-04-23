n.d(t, { A: () => _ });
var l = n(17928),
    a = n(228366);
let i = {},
    r = {},
    s = {},
    o = {},
    c = {},
    d = {},
    u = {},
    m = {},
    h = null;
class f extends l.Ay.Store {
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
    getAnnouncements(e) {
        return d[e];
    }
    hasAnnouncementsBeenFetched(e) {
        return u[e] ?? !1;
    }
    isAnnouncementsFetching(e) {
        return m[e] ?? !1;
    }
    getPendingReturn() {
        return h;
    }
}
let _ = new f(a.h, {
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
    GAME_PROFILE_GET_ANNOUNCEMENTS_START: function (e) {
        let { gameId: t } = e;
        m[t] = !0;
    },
    GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS: function (e) {
        let { gameId: t, messages: n, channelId: l, guildId: a } = e;
        (d[t] = { messages: n, channelId: l, guildId: a }), (u[t] = !0), (m[t] = !1);
    },
    GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR: function (e) {
        let { gameId: t } = e;
        (u[t] = !0), (m[t] = !1);
    },
    GAME_PROFILE_SET_PENDING_RETURN: function (e) {
        let { gameId: t, channelId: n, initialScrollOffset: l } = e;
        if (h?.gameId === t && h?.channelId === n && h?.initialScrollOffset === l) return !1;
        h = { gameId: t, channelId: n, initialScrollOffset: l };
    },
    GAME_PROFILE_CLEAR_PENDING_RETURN: function (e) {
        let { gameId: t } = e;
        if (null == h || h.gameId !== t) return !1;
        h = null;
    },
});
