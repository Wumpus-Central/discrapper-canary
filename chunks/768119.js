(n.d(t, { Z: () => Y }), n(781311), n(290780));
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(433517),
    l = n(570140),
    c = n(353926),
    u = n(861262),
    d = n(778877),
    _ = n(592125),
    f = n(430824),
    p = n(981631);
function h(e, t, n) {
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
let m = 0.05,
    g = {};
function E(e) {
    return (
        null == g[e] &&
            (g[e] = {
                searchId: e,
                isIndexing: !1,
                isHistoricalIndexing: !1,
                isSearching: !1,
                analyticsId: null,
                editorState: null,
                offset: 0,
                query: null,
                hasError: !1,
                rawResults: null,
                totalResults: 0,
                documentsIndexed: 0,
                resultsBlocked: 0,
                showBlockedResults: !1,
                showNoResultsAlt: !1,
                searchResultsQueryString: null,
                searchResultsQuery: null
            }),
        g[e]
    );
}
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == e) return n;
    let r = g[e];
    return null == r ? n : t(r);
}
let y = 'SearchStore',
    O = 'tokenized',
    v = !1,
    I = !1,
    T = {},
    S = null;
function A(e) {
    let { searchId: t, editorState: n } = e;
    E(t).editorState = n;
}
function N(e) {
    let { searchId: t } = e;
    null != t && E(t);
}
function C(e) {
    var t;
    let { queryString: n, searchId: r, query: i } = e,
        o = E(r);
    ((o.isSearching = !0), (o.rawResults = null), (o.analyticsId = null), (o.query = a().omit(i, 'type')), (o.offset = null != (t = i.offset) ? t : 0), (o.showBlockedResults = !1), (o.searchResultsQueryString = n));
}
function R(e) {
    var t;
    let { searchId: n, query: r } = e;
    if ('string' != typeof r || '' === (r = r.trim())) return;
    let i = (T[n] = null != (t = T[n]) ? t : []),
        a = i.indexOf(r);
    (-1 !== a ? (i.splice(a, 1), i.unshift(r)) : null != i[0] && '' !== i[0] && r.startsWith(i[0]) ? (i[0] = r) : a < 0 && i.unshift(r), i.length > 5 && i.splice(5, i.length), s.K.set(y, { history: T }));
}
function P(e) {
    let { searchId: t } = e,
        n = E(t);
    ((n.isIndexing = !0), (n.isHistoricalIndexing = !0), (n.isSearching = !1));
}
function w(e) {
    let { searchId: t } = e,
        n = E(t);
    ((n.isSearching = !1), (n.isIndexing = !1), (n.isHistoricalIndexing = e.doingHistoricalIndex || !1), (n.totalResults = e.totalResults), (n.hasError = e.hasError), (n.analyticsId = e.analyticsId), (n.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0), (n.showNoResultsAlt = Math.random() < m), (n.rawResults = e.messages), null == n.query && (n.hasError = !0));
}
function D(e) {
    let { searchId: t } = e;
    if (null == g[t]) return !1;
    delete g[t];
}
function L(e) {
    if (e === S) return !1;
    (null != e && null == g[e] && E(e), (S = e));
}
function x() {
    ((I = !0), null != S && (0, u.g)(S) === p.aib.CHANNEL && (0, d.a)({ location: 'SearchStore_handleConnectionOpen' }) && L(p.aib.DMS));
}
function M(e) {
    let { guildId: t, channelId: n } = e;
    null != t
        ? L(t)
        : (0, d.a)({
                location: 'SearchStore_handleChannelSelect',
                autoTrackExposure: I
            })
          ? L(p.aib.DMS)
          : L(n);
}
function k(e) {
    let { searchId: t } = e;
    L(t);
}
function j(e) {
    let { searchId: t } = e;
    null == t ? (s.K.remove(y), (T = {})) : (delete T[t], s.K.set(y, { history: T }));
}
function U(e) {
    let { searchId: t, query: n } = e;
    null != T[t] && ((T[t] = T[t].filter((e) => e !== n)), s.K.set(y, { history: T }));
}
function G(e) {
    return (
        Object.keys(e).forEach((t) => {
            (Array.isArray(e[t]) && (e[t] = e[t].filter((e) => 'string' == typeof e && e.trim())), (Array.isArray(e[t]) && 0 !== e[t].length) || delete e[t]);
        }),
        e
    );
}
function B(e) {
    let { searchId: t, showBlocked: n } = e;
    E(t).showBlockedResults = n;
}
function V(e) {
    let { searchId: t } = e;
    E(t).showNoResultsAlt = Math.random() < m;
}
function F() {
    (s.K.remove(y), (T = {}));
}
function Z(e) {
    let { searchId: t, queryString: n, query: r, offset: i } = e,
        a = E(t);
    ((a.searchResultsQueryString = n), (a.query = r), (a.offset = null != i ? i : 0));
}
class H extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, _.Z, c.Z);
        let e = s.K.get(y);
        ((null == e ? void 0 : e.history) != null && (T = G(e.history)), (v = !!s.K.get(O)));
    }
    getCurrentSearchId() {
        return S;
    }
    isActive() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S;
        return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e));
    }
    isTokenized() {
        return v;
    }
    getRawResults(e) {
        return b(e, (e) => e.rawResults);
    }
    hasResults(e) {
        return null != b(e, (e) => e.rawResults);
    }
    isIndexing(e) {
        return b(e, (e) => e.isIndexing) || !1;
    }
    isHistoricalIndexing(e) {
        return b(e, (e) => e.isHistoricalIndexing) || !1;
    }
    isSearching(e) {
        return b(e, (e) => e.isSearching) || !1;
    }
    getAnalyticsId(e) {
        return b(e, (e) => e.analyticsId);
    }
    getResultsBlocked(e) {
        return b(e, (e) => e.resultsBlocked);
    }
    getDocumentsIndexedCount(e) {
        return b(e, (e) => e.documentsIndexed);
    }
    getTotalResults(e) {
        var t;
        return null != (t = b(e, (e) => e.totalResults)) ? t : 0;
    }
    getEditorState(e) {
        return b(e, (e) => e.editorState);
    }
    getHistory(e) {
        return T[e];
    }
    getOffset(e) {
        var t;
        return null != (t = b(e, (e) => e.offset)) ? t : 0;
    }
    getQuery(e) {
        return b(e, (e) => e.query);
    }
    hasError(e) {
        var t;
        return null != (t = b(e, (e) => e.hasError)) && t;
    }
    shouldShowBlockedResults(e) {
        var t;
        return null != (t = b(e, (e) => e.showBlockedResults, !1)) && t;
    }
    shouldShowNoResultsAlt(e) {
        var t;
        return null != (t = b(e, (e) => e.showNoResultsAlt, !1)) && t;
    }
    getSearchResultsQueryString(e) {
        return b(e, (e) => e.searchResultsQueryString);
    }
    getSearchResultsQuery(e) {
        return b(e, (e) => e.searchResultsQuery);
    }
    getResultsState(e) {
        return {
            isSearching: this.isSearching(e),
            isIndexing: this.isIndexing(e),
            isHistoricalIndexing: this.isHistoricalIndexing(e),
            documentsIndexed: this.getDocumentsIndexedCount(e),
            offset: this.getOffset(e),
            totalResults: this.getTotalResults(e),
            hasError: this.hasError(e),
            showBlockedResults: this.shouldShowBlockedResults(e),
            showNoResultsAlt: this.shouldShowNoResultsAlt(e)
        };
    }
}
h(H, 'displayName', 'SearchStore');
let Y = new H(l.Z, {
    CONNECTION_OPEN: x,
    SEARCH_START: C,
    SEARCH_INDEXING: P,
    SEARCH_FINISH: w,
    SEARCH_RESULTS_QUERY_UPDATE: Z,
    SEARCH_EDITOR_STATE_CLEAR: D,
    SEARCH_ENSURE_SEARCH_STATE: N,
    SEARCH_EDITOR_STATE_CHANGE: A,
    SEARCH_SET_SHOW_BLOCKED_RESULTS: B,
    SEARCH_SET_SHOW_NO_RESULTS_ALT: V,
    SEARCH_SCREEN_OPEN: k,
    CHANNEL_SELECT: M,
    SEARCH_CLEAR_HISTORY: j,
    SEARCH_REMOVE_HISTORY: U,
    SEARCH_ADD_HISTORY: R,
    LOGOUT: F
});
