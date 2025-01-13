n.d(t, {
    M: function () {
        return o;
    }
});
var i,
    r,
    l,
    a,
    o,
    s,
    c = n(442837),
    d = n(570140);
((i = o || (o = {}))[(i.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (i[(i.FETCHING = 1)] = 'FETCHING'), (i[(i.FETCHED = 2)] = 'FETCHED'), (i[(i.FAILED = 3)] = 'FAILED');
let u = {},
    m = {};
class h extends (s = c.ZP.Store) {
    getMediaPostEmbed(e) {
        if (null != e) return u[e];
    }
    getEmbedFetchState(e) {
        var t;
        return null !== (t = m[e]) && void 0 !== t ? t : 0;
    }
    getMediaPostEmbeds() {
        return u;
    }
}
(a = 'MediaPostEmbedStore'),
    (l = 'displayName') in (r = h)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    (t.Z = new h(d.Z, {
        CONNECTION_OPEN: function () {
            (u = {}), (m = {});
        },
        MEDIA_POST_EMBED_FETCH: function (e) {
            let { threadId: t } = e;
            m[t] = 1;
        },
        MEDIA_POST_EMBED_FETCH_SUCCESS: function (e) {
            let { threadId: t, mediaPostEmbed: n } = e;
            (u = {
                ...u,
                [t]: n
            }),
                (m[t] = 2);
        },
        MEDIA_POST_EMBED_FETCH_FAILURE: function (e) {
            let { threadId: t } = e;
            m[t] = 3;
        },
        LOGOUT: function (e) {
            !e.isSwitchingAccount && ((u = {}), (m = {}));
        }
    }));
