n.d(t, { Z: () => I });
var r,
    i = n(442837),
    o = n(570140),
    a = n(592125);
function s(e, t, n) {
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
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = {};
function f(e) {
    let t = a.Z.getChannel(e);
    return null != t && !!t.isForumLikeChannel();
}
function _(e) {
    var t;
    let n =
        null != (t = d[e])
            ? t
            : {
                  query: null,
                  loading: !1,
                  results: null
              };
    return (d[e] = n), n;
}
function p(e) {
    let { channelId: t, query: n } = e;
    if (!f(t)) return !1;
    let r = _(t);
    d[t] = u(l({}, r), {
        query: n,
        results: null
    });
}
function h(e) {
    let { channelId: t } = e;
    if (!f(t)) return !1;
    let n = _(t);
    d[t] = u(l({}, n), { loading: !0 });
}
function m(e) {
    let { channelId: t, threadIds: n } = e;
    if (!f(t)) return !1;
    let r = _(t);
    d[t] = u(l({}, r), {
        loading: !1,
        results: n
    });
}
function g(e) {
    let { channelId: t } = e;
    if (!f(t)) return !1;
    let n = _(t);
    d[t] = u(l({}, n), {
        loading: !1,
        results: []
    });
}
function E(e) {
    let { channelId: t } = e;
    return !!f(t) && delete d[t];
}
function b(e) {
    var t;
    let { channel: n } = e,
        r = n.parent_id;
    if (null == r) return !1;
    let i = d[r];
    if (null == i) return !1;
    d[r] = u(l({}, i), { results: null == (t = i.results) ? void 0 : t.filter((e) => n.id !== e) });
}
function y(e) {
    let { channel: t } = e;
    return delete d[t.id];
}
function v() {
    d = {};
}
class O extends (r = i.ZP.Store) {
    getSearchQuery(e) {
        let t = d[e];
        return null == t ? void 0 : t.query;
    }
    getSearchLoading(e) {
        var t;
        let n = d[e];
        return null != (t = null == n ? void 0 : n.loading) && t;
    }
    getSearchResults(e) {
        let t = d[e];
        return null == t ? void 0 : t.results;
    }
    getHasSearchResults(e) {
        let t = d[e];
        return (null == t ? void 0 : t.results) != null && t.results.length > 0;
    }
}
s(O, 'displayName', 'ForumSearchStore');
let I = new O(o.Z, {
    CONNECTION_OPEN: v,
    THREAD_DELETE: b,
    CHANNEL_DELETE: y,
    FORUM_SEARCH_QUERY_UPDATED: p,
    FORUM_SEARCH_START: h,
    FORUM_SEARCH_SUCCESS: m,
    FORUM_SEARCH_FAILURE: g,
    FORUM_SEARCH_CLEAR: E
});
