n.d(t, { A: () => c, e: () => a });
var s,
    i = n(17928),
    l = n(73153),
    a =
        (((s = {})[(s.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (s[(s.FETCHING = 1)] = "FETCHING"),
        (s[(s.FETCHED = 2)] = "FETCHED"),
        (s[(s.FAILED = 3)] = "FAILED"),
        s);
let o = {},
    u = {};
class r extends i.Ay.Store {
    static displayName = "MediaPostEmbedStore";
    getMediaPostEmbed(e) {
        if (null != e) return o[e];
    }
    getEmbedFetchState(e) {
        return u[e] ?? 0;
    }
    getMediaPostEmbeds() {
        return o;
    }
}
let c = new r(l.h, {
    CONNECTION_OPEN: function () {
        ((o = {}), (u = {}));
    },
    MEDIA_POST_EMBED_FETCH: function (e) {
        let { threadId: t } = e;
        u[t] = 1;
    },
    MEDIA_POST_EMBED_FETCH_SUCCESS: function (e) {
        let { threadId: t, mediaPostEmbed: n } = e;
        ((o = { ...o, [t]: n }), (u[t] = 2));
    },
    MEDIA_POST_EMBED_FETCH_FAILURE: function (e) {
        let { threadId: t } = e;
        u[t] = 3;
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount || ((o = {}), (u = {}));
    },
});
