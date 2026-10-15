n.d(e, { A: () => d, e: () => l });
var i,
    s = n(17928),
    a = n(73153),
    l =
        (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        (i[(i.FAILED = 3)] = "FAILED"),
        i);
let o = {},
    r = {};
class u extends s.Ay.Store {
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
let d = new u(a.h, {
    CONNECTION_OPEN: function () {
        ((o = {}), (r = {}));
    },
    MEDIA_POST_EMBED_FETCH: function (t) {
        let { threadId: e } = t;
        r[e] = 1;
    },
    MEDIA_POST_EMBED_FETCH_SUCCESS: function (t) {
        let { threadId: e, mediaPostEmbed: n } = t;
        ((o = { ...o, [e]: n }), (r[e] = 2));
    },
    MEDIA_POST_EMBED_FETCH_FAILURE: function (t) {
        let { threadId: e } = t;
        r[e] = 3;
    },
    LOGOUT: function (t) {
        t.isSwitchingAccount || ((o = {}), (r = {}));
    },
});
