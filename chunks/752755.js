n.d(e, { A: () => c, e: () => l });
var s,
    i = n(17928),
    a = n(228366),
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
    getMediaPostEmbed(t) {
        if (null != t) return o[t];
    }
    getEmbedFetchState(t) {
        return r[t] ?? 0;
    }
    getMediaPostEmbeds() {
        return o;
    }
}
let c = new u(a.h, {
    CONNECTION_OPEN: function () {
        (o = {}), (r = {});
    },
    MEDIA_POST_EMBED_FETCH: function (t) {
        let { threadId: e } = t;
        r[e] = 1;
    },
    MEDIA_POST_EMBED_FETCH_SUCCESS: function (t) {
        let { threadId: e, mediaPostEmbed: n } = t;
        (o = { ...o, [e]: n }), (r[e] = 2);
    },
    MEDIA_POST_EMBED_FETCH_FAILURE: function (t) {
        let { threadId: e } = t;
        r[e] = 3;
    },
    LOGOUT: function (t) {
        t.isSwitchingAccount || ((o = {}), (r = {}));
    },
});
