t.d(n, { A: () => s });
var E = t(17928),
    _ = t(73153);
let i = {},
    u = {},
    l = {},
    r = {},
    c = {},
    o = {},
    S = {},
    O = null;
class R extends E.Ay.Store {
    static displayName = "GameProfileStore";
    getSimilarGames(e) {
        return i[e];
    }
    getShopCollectionSkuIds(e) {
        return u[e];
    }
    hasShopCollectionBeenFetched(e) {
        return l[e] ?? !1;
    }
    isShopCollectionFetching(e) {
        return r[e] ?? !1;
    }
    getAnnouncements(e) {
        return c[e];
    }
    hasAnnouncementsBeenFetched(e) {
        return o[e] ?? !1;
    }
    isAnnouncementsFetching(e) {
        return S[e] ?? !1;
    }
    getPendingReturn() {
        return O;
    }
}
let s = new R(_.h, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
        let { gameId: n, games: t } = e;
        i[n] = t;
    },
    GAME_PROFILE_GET_SHOP_COLLECTION_START: function (e) {
        let { collectionId: n } = e;
        r[n] = !0;
    },
    GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS: function (e) {
        let { collectionId: n, skuIds: t } = e;
        ((u[n] = t), (l[n] = !0), (r[n] = !1));
    },
    GAME_PROFILE_GET_SHOP_COLLECTION_ERROR: function (e) {
        let { collectionId: n } = e;
        ((l[n] = !0), (r[n] = !1));
    },
    GAME_PROFILE_GET_ANNOUNCEMENTS_START: function (e) {
        let { gameId: n } = e;
        S[n] = !0;
    },
    GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS: function (e) {
        let { gameId: n, messages: t, channelId: E, guildId: _ } = e;
        ((c[n] = { messages: t, channelId: E, guildId: _ }), (o[n] = !0), (S[n] = !1));
    },
    GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR: function (e) {
        let { gameId: n } = e;
        ((o[n] = !0), (S[n] = !1));
    },
    GAME_PROFILE_SET_PENDING_RETURN: function (e) {
        let { gameId: n, channelId: t, initialScrollOffset: E, tab: _, source: i } = e;
        if (O?.gameId === n && O?.channelId === t && O?.initialScrollOffset === E && O?.tab === _ && O?.source === i)
            return !1;
        O = { gameId: n, channelId: t, initialScrollOffset: E, tab: _, source: i };
    },
    GAME_PROFILE_CLEAR_PENDING_RETURN: function (e) {
        let { gameId: n } = e;
        if (null == O || O.gameId !== n) return !1;
        O = null;
    },
});
