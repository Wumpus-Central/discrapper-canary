var i,
    a = r(442837),
    o = r(570140),
    s = r(592125);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = {};
function c(e) {
    let n = s.Z.getChannel(e);
    return !!(null != n && n.isForumLikeChannel()) || !1;
}
function d(e) {
    var n;
    let r =
        null !== (n = u[e]) && void 0 !== n
            ? n
            : {
                  query: null,
                  loading: !1,
                  results: null
              };
    return (u[e] = r), r;
}
function f(e) {
    let { channelId: n, query: r } = e;
    if (!c(n)) return !1;
    let i = d(n);
    u[n] = {
        ...i,
        query: r,
        results: null
    };
}
function p(e) {
    let { channelId: n } = e;
    if (!c(n)) return !1;
    let r = d(n);
    u[n] = {
        ...r,
        loading: !0
    };
}
function h(e) {
    let { channelId: n, threadIds: r } = e;
    if (!c(n)) return !1;
    let i = d(n);
    u[n] = {
        ...i,
        loading: !1,
        results: r
    };
}
function _(e) {
    let { channelId: n } = e;
    if (!c(n)) return !1;
    let r = d(n);
    u[n] = {
        ...r,
        loading: !1,
        results: []
    };
}
function m(e) {
    let { channelId: n } = e;
    return !!c(n) && delete u[n];
}
function g(e) {
    var n;
    let { channel: r } = e,
        i = r.parent_id;
    if (null == i) return !1;
    let a = u[i];
    if (null == a) return !1;
    u[i] = {
        ...a,
        results: null === (n = a.results) || void 0 === n ? void 0 : n.filter((e) => r.id !== e)
    };
}
function E(e) {
    let { channel: n } = e;
    return delete u[n.id];
}
function v() {
    u = {};
}
class y extends (i = a.ZP.Store) {
    getSearchQuery(e) {
        let n = u[e];
        return null == n ? void 0 : n.query;
    }
    getSearchLoading(e) {
        var n;
        let r = u[e];
        return null !== (n = null == r ? void 0 : r.loading) && void 0 !== n && n;
    }
    getSearchResults(e) {
        let n = u[e];
        return null == n ? void 0 : n.results;
    }
    getHasSearchResults(e) {
        let n = u[e];
        return (null == n ? void 0 : n.results) != null && n.results.length > 0;
    }
}
l(y, 'displayName', 'ForumSearchStore'),
    (n.Z = new y(o.Z, {
        CONNECTION_OPEN: v,
        THREAD_DELETE: g,
        CHANNEL_DELETE: E,
        FORUM_SEARCH_QUERY_UPDATED: f,
        FORUM_SEARCH_START: p,
        FORUM_SEARCH_SUCCESS: h,
        FORUM_SEARCH_FAILURE: _,
        FORUM_SEARCH_CLEAR: m
    }));
