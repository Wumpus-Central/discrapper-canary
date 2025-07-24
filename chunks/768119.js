(n.d(t, { Z: () => B }), n(781311), n(290780));
var r,
    i = n(442837),
    a = n(433517),
    o = n(570140),
    s = n(353926),
    l = n(861262),
    c = n(778877),
    u = n(592125),
    d = n(430824),
    _ = n(981631);
function f(e, t, n) {
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
let p = 0.05,
    h = {};
function m(e) {
    return (
        null == h[e] &&
            (h[e] = {
                searchId: e,
                editorState: null,
                showBlockedResults: !1,
                showNoResultsAlt: !1,
                searchResultsQueryString: null,
                searchResultsQuery: null,
                searchResultsOffset: null
            }),
        h[e]
    );
}
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == e) return n;
    let r = h[e];
    return null == r ? n : t(r);
}
let E = 'SearchStore',
    b = 'tokenized',
    y = !1,
    O = !1,
    v = {},
    I = null;
function T(e) {
    let { searchId: t, editorState: n } = e;
    m(t).editorState = n;
}
function S(e) {
    let { searchId: t } = e;
    null != t && m(t);
}
function A(e) {
    var t;
    let { searchId: n, query: r } = e;
    if ('string' != typeof r || '' === (r = r.trim())) return;
    let i = (v[n] = null != (t = v[n]) ? t : []),
        o = i.indexOf(r);
    (-1 !== o ? (i.splice(o, 1), i.unshift(r)) : null != i[0] && '' !== i[0] && r.startsWith(i[0]) ? (i[0] = r) : o < 0 && i.unshift(r), i.length > 5 && i.splice(5, i.length), a.K.set(E, { history: v }));
}
function N(e) {
    let { searchId: t } = e;
    if (null == h[t]) return !1;
    delete h[t];
}
function C(e) {
    if (e === I) return !1;
    (null != e && null == h[e] && m(e), (I = e));
}
function R() {
    ((O = !0), null != I && (0, l.g)(I) === _.aib.CHANNEL && (0, c.a)({ location: 'SearchStore_handleConnectionOpen' }) && C(_.aib.DMS));
}
function P(e) {
    let { guildId: t, channelId: n } = e;
    null != t
        ? C(t)
        : (0, c.a)({
                location: 'SearchStore_handleChannelSelect',
                autoTrackExposure: O
            })
          ? C(_.aib.DMS)
          : C(n);
}
function w(e) {
    let { searchId: t } = e;
    C(t);
}
function D(e) {
    let { searchId: t } = e;
    null == t ? (a.K.remove(E), (v = {})) : (delete v[t], a.K.set(E, { history: v }));
}
function L(e) {
    let { searchId: t, query: n } = e;
    null != v[t] && ((v[t] = v[t].filter((e) => e !== n)), a.K.set(E, { history: v }));
}
function x(e) {
    return (
        Object.keys(e).forEach((t) => {
            (Array.isArray(e[t]) && (e[t] = e[t].filter((e) => 'string' == typeof e && e.trim())), (Array.isArray(e[t]) && 0 !== e[t].length) || delete e[t]);
        }),
        e
    );
}
function M(e) {
    let { searchId: t, showBlocked: n } = e;
    m(t).showBlockedResults = n;
}
function k(e) {
    let { searchId: t } = e;
    m(t).showNoResultsAlt = Math.random() < p;
}
function j() {
    (a.K.remove(E), (v = {}));
}
function U(e) {
    let { searchId: t, queryString: n, query: r, offset: i } = e,
        a = m(t);
    ((a.searchResultsQueryString = n), (a.searchResultsQuery = r), (a.searchResultsOffset = null != i ? i : 0));
}
class G extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, u.Z, s.Z);
        let e = a.K.get(E);
        ((null == e ? void 0 : e.history) != null && (v = x(e.history)), (y = !!a.K.get(b)));
    }
    getCurrentSearchId() {
        return I;
    }
    isTokenized() {
        return y;
    }
    getEditorState(e) {
        return g(e, (e) => e.editorState);
    }
    getHistory(e) {
        return v[e];
    }
    shouldShowBlockedResults(e) {
        var t;
        return null != (t = g(e, (e) => e.showBlockedResults, !1)) && t;
    }
    shouldShowNoResultsAlt(e) {
        var t;
        return null != (t = g(e, (e) => e.showNoResultsAlt, !1)) && t;
    }
    getSearchResultsQueryString(e) {
        return g(e, (e) => e.searchResultsQueryString);
    }
    getSearchResultsQuery(e) {
        return g(e, (e) => e.searchResultsQuery);
    }
    getSearchResultsOffset(e) {
        return g(e, (e) => e.searchResultsOffset);
    }
    hasSearchState(e) {
        return null != e && null != h[e];
    }
}
f(G, 'displayName', 'SearchStore');
let B = new G(o.Z, {
    CONNECTION_OPEN: R,
    SEARCH_RESULTS_QUERY_UPDATE: U,
    SEARCH_EDITOR_STATE_CLEAR: N,
    SEARCH_ENSURE_SEARCH_STATE: S,
    SEARCH_EDITOR_STATE_CHANGE: T,
    SEARCH_SET_SHOW_BLOCKED_RESULTS: M,
    SEARCH_SET_SHOW_NO_RESULTS_ALT: k,
    SEARCH_SCREEN_OPEN: w,
    CHANNEL_SELECT: P,
    SEARCH_CLEAR_HISTORY: D,
    SEARCH_REMOVE_HISTORY: L,
    SEARCH_ADD_HISTORY: A,
    LOGOUT: j
});
