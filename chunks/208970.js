n.d(t, { Z: () => y });
var i,
    r = n(442837),
    a = n(570140),
    s = n(592125);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = {};
function u(e) {
    let t = s.Z.getChannel(e);
    return !!(null != t && t.isForumLikeChannel());
}
function c(e) {
    var t;
    let n =
        null !== (t = l[e]) && void 0 !== t
            ? t
            : {
                  query: null,
                  loading: !1,
                  results: null
              };
    return (l[e] = n), n;
}
function d(e) {
    let { channelId: t, query: n } = e;
    if (!u(t)) return !1;
    let i = c(t);
    l[t] = {
        ...i,
        query: n,
        results: null
    };
}
function f(e) {
    let { channelId: t } = e;
    if (!u(t)) return !1;
    let n = c(t);
    l[t] = {
        ...n,
        loading: !0
    };
}
function _(e) {
    let { channelId: t, threadIds: n } = e;
    if (!u(t)) return !1;
    let i = c(t);
    l[t] = {
        ...i,
        loading: !1,
        results: n
    };
}
function p(e) {
    let { channelId: t } = e;
    if (!u(t)) return !1;
    let n = c(t);
    l[t] = {
        ...n,
        loading: !1,
        results: []
    };
}
function h(e) {
    let { channelId: t } = e;
    return !!u(t) && delete l[t];
}
function m(e) {
    var t;
    let { channel: n } = e,
        i = n.parent_id;
    if (null == i) return !1;
    let r = l[i];
    if (null == r) return !1;
    l[i] = {
        ...r,
        results: null === (t = r.results) || void 0 === t ? void 0 : t.filter((e) => n.id !== e)
    };
}
function g(e) {
    let { channel: t } = e;
    return delete l[t.id];
}
function E() {
    l = {};
}
class v extends (i = r.ZP.Store) {
    getSearchQuery(e) {
        let t = l[e];
        return null == t ? void 0 : t.query;
    }
    getSearchLoading(e) {
        var t;
        let n = l[e];
        return null !== (t = null == n ? void 0 : n.loading) && void 0 !== t && t;
    }
    getSearchResults(e) {
        let t = l[e];
        return null == t ? void 0 : t.results;
    }
    getHasSearchResults(e) {
        let t = l[e];
        return (null == t ? void 0 : t.results) != null && t.results.length > 0;
    }
}
o(v, 'displayName', 'ForumSearchStore');
let y = new v(a.Z, {
    CONNECTION_OPEN: E,
    THREAD_DELETE: m,
    CHANNEL_DELETE: g,
    FORUM_SEARCH_QUERY_UPDATED: d,
    FORUM_SEARCH_START: f,
    FORUM_SEARCH_SUCCESS: _,
    FORUM_SEARCH_FAILURE: p,
    FORUM_SEARCH_CLEAR: h
});
