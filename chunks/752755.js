n.d(t, { A: () => c, e: () => s });
var i,
    l = n(17928),
    r = n(228366),
    s =
        (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        (i[(i.FAILED = 3)] = "FAILED"),
        i);
let a = {},
    E = {};
class o extends l.Ay.Store {
    static displayName = "MediaPostEmbedStore";
    getMediaPostEmbed(e) {
        if (null != e) return a[e];
    }
    getEmbedFetchState(e) {
        return E[e] ?? 0;
    }
    getMediaPostEmbeds() {
        return a;
    }
}
let c = new o(r.h, {
    CONNECTION_OPEN: function () {
        (a = {}), (E = {});
    },
    MEDIA_POST_EMBED_FETCH: function (e) {
        let { threadId: t } = e;
        E[t] = 1;
    },
    MEDIA_POST_EMBED_FETCH_SUCCESS: function (e) {
        let { threadId: t, mediaPostEmbed: n } = e;
        (a = { ...a, [t]: n }), (E[t] = 2);
    },
    MEDIA_POST_EMBED_FETCH_FAILURE: function (e) {
        let { threadId: t } = e;
        E[t] = 3;
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount || ((a = {}), (E = {}));
    },
});
