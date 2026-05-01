n.d(e, { A: () => u, e: () => a });
var s,
    i = n(17928),
    l = n(228366),
    a =
        (((s = {})[(s.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (s[(s.FETCHING = 1)] = "FETCHING"),
        (s[(s.FETCHED = 2)] = "FETCHED"),
        (s[(s.FAILED = 3)] = "FAILED"),
        s);
let r = {},
    o = {};
class c extends i.Ay.Store {
    static displayName = "MediaPostEmbedStore";
    getMediaPostEmbed(t) {
        if (null != t) return r[t];
    }
    getEmbedFetchState(t) {
        return o[t] ?? 0;
    }
    getMediaPostEmbeds() {
        return r;
    }
}
let u = new c(l.h, {
    CONNECTION_OPEN: function () {
        (r = {}), (o = {});
    },
    MEDIA_POST_EMBED_FETCH: function (t) {
        let { threadId: e } = t;
        o[e] = 1;
    },
    MEDIA_POST_EMBED_FETCH_SUCCESS: function (t) {
        let { threadId: e, mediaPostEmbed: n } = t;
        (r = { ...r, [e]: n }), (o[e] = 2);
    },
    MEDIA_POST_EMBED_FETCH_FAILURE: function (t) {
        let { threadId: e } = t;
        o[e] = 3;
    },
    LOGOUT: function (t) {
        t.isSwitchingAccount || ((r = {}), (o = {}));
    },
});
