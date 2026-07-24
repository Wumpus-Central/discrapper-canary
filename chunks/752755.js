l.d(t, { A: () => d, e: () => n });
var a,
    s = l(17928),
    i = l(228366),
    n =
        (((a = {})[(a.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (a[(a.FETCHING = 1)] = "FETCHING"),
        (a[(a.FETCHED = 2)] = "FETCHED"),
        (a[(a.FAILED = 3)] = "FAILED"),
        a);
let r = {},
    o = {};
class c extends s.Ay.Store {
    static displayName = "MediaPostEmbedStore";
    getMediaPostEmbed(e) {
        if (null != e) return r[e];
    }
    getEmbedFetchState(e) {
        return o[e] ?? 0;
    }
    getMediaPostEmbeds() {
        return r;
    }
}
let d = new c(i.h, {
    CONNECTION_OPEN: function () {
        (r = {}), (o = {});
    },
    MEDIA_POST_EMBED_FETCH: function (e) {
        let { threadId: t } = e;
        o[t] = 1;
    },
    MEDIA_POST_EMBED_FETCH_SUCCESS: function (e) {
        let { threadId: t, mediaPostEmbed: l } = e;
        (r = { ...r, [t]: l }), (o[t] = 2);
    },
    MEDIA_POST_EMBED_FETCH_FAILURE: function (e) {
        let { threadId: t } = e;
        o[t] = 3;
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount || ((r = {}), (o = {}));
    },
});
