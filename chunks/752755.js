n.d(t, { A: () => _, e: () => l });
var i,
    r = n(17928),
    s = n(228366),
    l =
        (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        (i[(i.FAILED = 3)] = "FAILED"),
        i);
let a = {},
    d = {};
class o extends r.Ay.Store {
    static displayName = "MediaPostEmbedStore";
    getMediaPostEmbed(e) {
        if (null != e) return a[e];
    }
    getEmbedFetchState(e) {
        return d[e] ?? 0;
    }
    getMediaPostEmbeds() {
        return a;
    }
}
let _ = new o(s.h, {
    CONNECTION_OPEN: function () {
        (a = {}), (d = {});
    },
    MEDIA_POST_EMBED_FETCH: function (e) {
        let { threadId: t } = e;
        d[t] = 1;
    },
    MEDIA_POST_EMBED_FETCH_SUCCESS: function (e) {
        let { threadId: t, mediaPostEmbed: n } = e;
        (a = { ...a, [t]: n }), (d[t] = 2);
    },
    MEDIA_POST_EMBED_FETCH_FAILURE: function (e) {
        let { threadId: t } = e;
        d[t] = 3;
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount || ((a = {}), (d = {}));
    },
});
