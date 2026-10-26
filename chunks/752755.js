n.d(e, { A: () => d, e: () => s });
var i,
    a = n(17928),
    l = n(73153),
    s =
        (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        (i[(i.FAILED = 3)] = "FAILED"),
        i);
let r = {},
    o = {};
class u extends a.Ay.Store {
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
let d = new u(l.h, {
    CONNECTION_OPEN: function () {
        ((r = {}), (o = {}));
    },
    MEDIA_POST_EMBED_FETCH: function (t) {
        let { threadId: e } = t;
        o[e] = 1;
    },
    MEDIA_POST_EMBED_FETCH_SUCCESS: function (t) {
        let { threadId: e, mediaPostEmbed: n } = t;
        ((r = { ...r, [e]: n }), (o[e] = 2));
    },
    MEDIA_POST_EMBED_FETCH_FAILURE: function (t) {
        let { threadId: e } = t;
        o[e] = 3;
    },
    LOGOUT: function (t) {
        t.isSwitchingAccount || ((r = {}), (o = {}));
    },
});
