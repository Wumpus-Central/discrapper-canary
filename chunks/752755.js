n.d(e, { A: () => c, e: () => o });
var s,
    i = n(17928),
    a = n(228366),
    o =
        (((s = {})[(s.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (s[(s.FETCHING = 1)] = "FETCHING"),
        (s[(s.FETCHED = 2)] = "FETCHED"),
        (s[(s.FAILED = 3)] = "FAILED"),
        s);
let r = {},
    l = {};
class u extends i.Ay.Store {
    static displayName = "MediaPostEmbedStore";
    getMediaPostEmbed(t) {
        if (null != t) return r[t];
    }
    getEmbedFetchState(t) {
        return l[t] ?? 0;
    }
    getMediaPostEmbeds() {
        return r;
    }
}
let c = new u(a.h, {
    CONNECTION_OPEN: function () {
        (r = {}), (l = {});
    },
    MEDIA_POST_EMBED_FETCH: function (t) {
        let { threadId: e } = t;
        l[e] = 1;
    },
    MEDIA_POST_EMBED_FETCH_SUCCESS: function (t) {
        let { threadId: e, mediaPostEmbed: n } = t;
        (r = { ...r, [e]: n }), (l[e] = 2);
    },
    MEDIA_POST_EMBED_FETCH_FAILURE: function (t) {
        let { threadId: e } = t;
        l[e] = 3;
    },
    LOGOUT: function (t) {
        t.isSwitchingAccount || ((r = {}), (l = {}));
    },
});
