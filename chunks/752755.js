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
let l = {},
    r = {};
class u extends i.Ay.Store {
    static displayName = "MediaPostEmbedStore";
    getMediaPostEmbed(t) {
        if (null != t) return l[t];
    }
    getEmbedFetchState(t) {
        return r[t] ?? 0;
    }
    getMediaPostEmbeds() {
        return l;
    }
}
let c = new u(a.h, {
    CONNECTION_OPEN: function () {
        (l = {}), (r = {});
    },
    MEDIA_POST_EMBED_FETCH: function (t) {
        let { threadId: e } = t;
        r[e] = 1;
    },
    MEDIA_POST_EMBED_FETCH_SUCCESS: function (t) {
        let { threadId: e, mediaPostEmbed: n } = t;
        (l = { ...l, [e]: n }), (r[e] = 2);
    },
    MEDIA_POST_EMBED_FETCH_FAILURE: function (t) {
        let { threadId: e } = t;
        r[e] = 3;
    },
    LOGOUT: function (t) {
        t.isSwitchingAccount || ((l = {}), (r = {}));
    },
});
