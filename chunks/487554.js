n.d(t, {
    M: () => c,
    Z: () => _
});
var i,
    l,
    a,
    r,
    s = n(442837),
    o = n(570140),
    c = (((i = {})[(i.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (i[(i.FETCHING = 1)] = 'FETCHING'), (i[(i.FETCHED = 2)] = 'FETCHED'), (i[(i.FAILED = 3)] = 'FAILED'), i);
let d = {},
    u = {};
class m extends (r = s.ZP.Store) {
    getMediaPostEmbed(e) {
        if (null != e) return d[e];
    }
    getEmbedFetchState(e) {
        var t;
        return null !== (t = u[e]) && void 0 !== t ? t : 0;
    }
    getMediaPostEmbeds() {
        return d;
    }
}
(a = 'MediaPostEmbedStore'),
    (l = 'displayName') in m
        ? Object.defineProperty(m, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (m[l] = a);
let _ = new m(o.Z, {
    CONNECTION_OPEN: function () {
        (d = {}), (u = {});
    },
    MEDIA_POST_EMBED_FETCH: function (e) {
        let { threadId: t } = e;
        u[t] = 1;
    },
    MEDIA_POST_EMBED_FETCH_SUCCESS: function (e) {
        let { threadId: t, mediaPostEmbed: n } = e;
        (d = {
            ...d,
            [t]: n
        }),
            (u[t] = 2);
    },
    MEDIA_POST_EMBED_FETCH_FAILURE: function (e) {
        let { threadId: t } = e;
        u[t] = 3;
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount || ((d = {}), (u = {}));
    }
});
