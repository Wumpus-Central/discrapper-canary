n.d(t, { A: () => g });
var i = n(17928),
    l = n(228366);
let s = {},
    a = {},
    r = {},
    o = {},
    c = {},
    d = {},
    u = {},
    h = {},
    m = null;
class p extends i.Ay.Store {
    static displayName = "GameProfileStore";
    getSimilarGames(e) {
        return s[e];
    }
    getSimilarGamesError(e) {
        return a[e];
    }
    getShopCollectionSkuIds(e) {
        return r[e];
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
        return h[e] ?? !1;
    }
    getPendingReturn() {
        return m;
    }
}
let g = new p(l.h, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
        let { gameId: t, games: n } = e;
        s[t] = n;
    },
    GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function (e) {
        let { gameId: t, error: n } = e;
        a[t] = n;
    },
    GAME_PROFILE_GET_SHOP_COLLECTION_START: function (e) {
        let { collectionId: t } = e;
        c[t] = !0;
    },
    GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS: function (e) {
        let { collectionId: t, skuIds: n } = e;
        (r[t] = n), (o[t] = !0), (c[t] = !1);
    },
    GAME_PROFILE_GET_SHOP_COLLECTION_ERROR: function (e) {
        let { collectionId: t } = e;
        (o[t] = !0), (c[t] = !1);
    },
    GAME_PROFILE_GET_ANNOUNCEMENTS_START: function (e) {
        let { gameId: t } = e;
        h[t] = !0;
    },
    GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS: function (e) {
        let { gameId: t, messages: n, channelId: i, guildId: l } = e;
        (d[t] = { messages: n, channelId: i, guildId: l }), (u[t] = !0), (h[t] = !1);
    },
    GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR: function (e) {
        let { gameId: t } = e;
        (u[t] = !0), (h[t] = !1);
    },
    GAME_PROFILE_SET_PENDING_RETURN: function (e) {
        let { gameId: t, channelId: n, initialScrollOffset: i } = e;
        if (m?.gameId === t && m?.channelId === n && m?.initialScrollOffset === i) return !1;
        m = { gameId: t, channelId: n, initialScrollOffset: i };
    },
    GAME_PROFILE_CLEAR_PENDING_RETURN: function (e) {
        let { gameId: t } = e;
        if (null == m || m.gameId !== t) return !1;
        m = null;
    },
});
