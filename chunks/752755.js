"use strict";
n.d(t, { A: () => c, e: () => a });
var i,
    r = n(17928),
    s = n(228366),
    a =
        (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        (i[(i.FAILED = 3)] = "FAILED"),
        i);
let o = {},
    l = {};
class u extends r.Ay.Store {
    static displayName = "MediaPostEmbedStore";
    getMediaPostEmbed(e) {
        if (null != e) return o[e];
    }
    getEmbedFetchState(e) {
        return l[e] ?? 0;
    }
    getMediaPostEmbeds() {
        return o;
    }
}
let c = new u(s.h, {
    CONNECTION_OPEN: function () {
        (o = {}), (l = {});
    },
    MEDIA_POST_EMBED_FETCH: function (e) {
        let { threadId: t } = e;
        l[t] = 1;
    },
    MEDIA_POST_EMBED_FETCH_SUCCESS: function (e) {
        let { threadId: t, mediaPostEmbed: n } = e;
        (o = { ...o, [t]: n }), (l[t] = 2);
    },
    MEDIA_POST_EMBED_FETCH_FAILURE: function (e) {
        let { threadId: t } = e;
        l[t] = 3;
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount || ((o = {}), (l = {}));
    },
});
