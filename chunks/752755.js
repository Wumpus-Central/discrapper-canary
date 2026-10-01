n.d(t, { A: () => c, e: () => l });
var s,
    i = n(17928),
    a = n(73153),
    l =
        (((s = {})[(s.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (s[(s.FETCHING = 1)] = "FETCHING"),
        (s[(s.FETCHED = 2)] = "FETCHED"),
        (s[(s.FAILED = 3)] = "FAILED"),
        s);
let o = {},
    r = {};
class u extends i.Ay.Store {
    static displayName = "MediaPostEmbedStore";
    getMediaPostEmbed(e) {
        if (null != e) return o[e];
    }
    getEmbedFetchState(e) {
        return r[e] ?? 0;
    }
    getMediaPostEmbeds() {
        return o;
    }
}
let c = new u(a.h, {
    CONNECTION_OPEN: function () {
        ((o = {}), (r = {}));
    },
    MEDIA_POST_EMBED_FETCH: function (e) {
        let { threadId: t } = e;
        r[t] = 1;
    },
    MEDIA_POST_EMBED_FETCH_SUCCESS: function (e) {
        let { threadId: t, mediaPostEmbed: n } = e;
        ((o = { ...o, [t]: n }), (r[t] = 2));
    },
    MEDIA_POST_EMBED_FETCH_FAILURE: function (e) {
        let { threadId: t } = e;
        r[t] = 3;
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount || ((o = {}), (r = {}));
    },
});
