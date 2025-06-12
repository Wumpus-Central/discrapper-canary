n.d(t, {
    Z: () => Y,
    g: () => b
}),
    n(781311),
    n(290780);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(433517),
    l = n(570140),
    c = n(840877),
    u = n(778877),
    d = n(952537),
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
                searchType: b(e),
                isIndexing: !1,
                isHistoricalIndexing: !1,
                isSearching: !1,
                analyticsId: null,
                editorState: null,
                offset: 0,
                query: null,
                hasError: !1,
                searchFetcher: null,
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
function b(e) {
    return e === p.aib.DMS ? p.aib.DMS : e === p.I_8 ? p.aib.FAVORITES : null != f.Z.getGuild(e) ? p.aib.GUILD : null != _.Z.getChannel(e) ? p.aib.CHANNEL : null;
}
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == e) return n;
    let r = g[e];
    return null == r ? n : t(r);
}
let O = 'SearchStore',
    v = 'tokenized',
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
    var t, n;
    let { queryString: r, searchId: i, query: o } = e,
        s = E(i);
    null != s.searchFetcher && (s.searchFetcher.cancel(), (s.searchFetcher = null));
    let u = i,
        f = s.searchType,
        h = new c.ZP(u, f, o);
    (s.searchFetcher = h),
        (s.isSearching = !0),
        (s.rawResults = null),
        (s.analyticsId = null),
        (s.query = a().omit(o, 'type')),
        (s.offset = null != (n = o.offset) ? n : 0),
        (s.showBlockedResults = !1),
        (s.searchResultsQueryString = r),
        R({
            type: 'SEARCH_ADD_HISTORY',
            searchId: i,
            query: r
        });
    let m = i === p.I_8 ? (null == (t = _.Z.getChannel(u)) ? void 0 : t.guild_id) : f === p.aib.GUILD ? i : null;
    h.fetch(
        (e) => {
            var t, n;
            l.Z.dispatch({
                type: 'SEARCH_FINISH',
                searchId: i,
                guildId: m,
                analyticsId: e.body.analytics_id,
                totalResults: e.body.total_results,
                messages: e.body.messages,
                threads: null != (t = e.body.threads) ? t : [],
                members: (null != (n = e.body.members) ? n : []).map((e) => (0, d.Z)(e)),
                hasError: !1,
                doingHistoricalIndex: e.body.doing_deep_historical_index,
                documentsIndexed: e.body.documents_indexed
            });
        },
        () => {
            l.Z.dispatch({
                type: 'SEARCH_INDEXING',
                searchId: i
            });
        },
        () => {
            l.Z.dispatch({
                type: 'SEARCH_FINISH',
                searchId: i,
                guildId: m,
                messages: [],
                threads: [],
                members: [],
                totalResults: 0,
                analyticsId: null,
                hasError: !0,
                doingHistoricalIndex: !1,
                documentsIndexed: 0
            });
        }
    );
}
function R(e) {
    var t;
    let { searchId: n, query: r } = e;
    if ('string' != typeof r || '' === (r = r.trim())) return;
    let i = (T[n] = null != (t = T[n]) ? t : []),
        a = i.indexOf(r);
    -1 !== a ? (i.splice(a, 1), i.unshift(r)) : null != i[0] && '' !== i[0] && r.startsWith(i[0]) ? (i[0] = r) : a < 0 && i.unshift(r), i.length > 5 && i.splice(5, i.length), s.K.set(O, { history: T });
}
function P(e) {
    let { searchId: t } = e,
        n = E(t);
    (n.isIndexing = !0), (n.isHistoricalIndexing = !0), (n.isSearching = !1);
}
function w(e) {
    let { searchId: t } = e,
        n = E(t);
    (n.isSearching = !1), (n.isIndexing = !1), (n.isHistoricalIndexing = e.doingHistoricalIndex || !1), (n.searchFetcher = null), (n.totalResults = e.totalResults), (n.hasError = e.hasError), (n.analyticsId = e.analyticsId), (n.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0), (n.showNoResultsAlt = Math.random() < m), (n.rawResults = e.messages), null == n.query && (n.hasError = !0);
}
function D(e) {
    let { searchId: t } = e,
        n = g[t];
    if (null == n) return !1;
    null != n.searchFetcher && n.searchFetcher.cancel(), delete g[t];
}
function L(e) {
    if (e === S) return !1;
    null != e && null == g[e] && E(e), (S = e);
}
function x(e) {
    let { guildId: t, channelId: n } = e;
    null == t && (0, u.a)({ location: 'SearchStore' }) ? L(p.aib.DMS) : L(null != t ? t : n);
}
function M(e) {
    let { searchId: t } = e;
    L(t);
}
function k(e) {
    let { searchId: t } = e;
    null == t ? (s.K.remove(O), (T = {})) : (delete T[t], s.K.set(O, { history: T }));
}
function j(e) {
    let { searchId: t, query: n } = e;
    null != T[t] && ((T[t] = T[t].filter((e) => e !== n)), s.K.set(O, { history: T }));
}
function U(e) {
    return (
        Object.keys(e).forEach((t) => {
            Array.isArray(e[t]) && (e[t] = e[t].filter((e) => 'string' == typeof e && e.trim())), (Array.isArray(e[t]) && 0 !== e[t].length) || delete e[t];
        }),
        e
    );
}
function G(e) {
    let { searchId: t, showBlocked: n } = e;
    E(t).showBlockedResults = n;
}
function B() {
    Object.keys(g).forEach((e) => {
        null != g[e] && (g[e].searchType = b(e));
    });
}
function V() {
    s.K.remove(O), (T = {});
}
function F() {
    return null != S && D({ searchId: S });
}
function Z(e) {
    let { searchId: t, queryString: n, query: r } = e,
        i = E(t);
    (i.searchResultsQueryString = n), (i.query = r);
}
class H extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, _.Z);
        let e = s.K.get(O);
        (null == e ? void 0 : e.history) != null && (T = U(e.history)), (I = !!s.K.get(v));
    }
    getCurrentSearchId() {
        return S;
    }
    isActive() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S;
        return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e));
    }
    isTokenized() {
        return I;
    }
    getSearchType(e) {
        return y(null != e ? e : S, (e) => e.searchType);
    }
    getRawResults(e) {
        return y(e, (e) => e.rawResults);
    }
    hasResults(e) {
        return null != y(e, (e) => e.rawResults);
    }
    isIndexing(e) {
        return y(e, (e) => e.isIndexing) || !1;
    }
    isHistoricalIndexing(e) {
        return y(e, (e) => e.isHistoricalIndexing) || !1;
    }
    isSearching(e) {
        return y(e, (e) => e.isSearching) || !1;
    }
    getAnalyticsId(e) {
        return y(e, (e) => e.analyticsId);
    }
    getResultsBlocked(e) {
        return y(e, (e) => e.resultsBlocked);
    }
    getDocumentsIndexedCount(e) {
        return y(e, (e) => e.documentsIndexed);
    }
    getSearchFetcher(e) {
        return y(e, (e) => e.searchFetcher);
    }
    getTotalResults(e) {
        var t;
        return null != (t = y(e, (e) => e.totalResults)) ? t : 0;
    }
    getEditorState(e) {
        return y(e, (e) => e.editorState);
    }
    getHistory(e) {
        return T[e];
    }
    getOffset(e) {
        var t;
        return null != (t = y(e, (e) => e.offset)) ? t : 0;
    }
    getQuery(e) {
        return y(e, (e) => e.query);
    }
    hasError(e) {
        var t;
        return null != (t = y(e, (e) => e.hasError)) && t;
    }
    shouldShowBlockedResults(e) {
        var t;
        return null != (t = y(e, (e) => e.showBlockedResults, !1)) && t;
    }
    shouldShowNoResultsAlt(e) {
        var t;
        return null != (t = y(e, (e) => e.showNoResultsAlt, !1)) && t;
    }
    getSearchResultsQueryString(e) {
        return y(e, (e) => e.searchResultsQueryString);
    }
    getSearchResultsQuery(e) {
        return y(e, (e) => e.searchResultsQuery);
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
    SEARCH_START: C,
    SEARCH_INDEXING: P,
    SEARCH_FINISH: w,
    SEARCH_RESULTS_QUERY_UPDATE: Z,
    SEARCH_EDITOR_STATE_CLEAR: D,
    SEARCH_ENSURE_SEARCH_STATE: N,
    SEARCH_EDITOR_STATE_CHANGE: A,
    SEARCH_SET_SHOW_BLOCKED_RESULTS: G,
    SEARCH_SCREEN_OPEN: M,
    CHANNEL_SELECT: x,
    CHANNEL_TOGGLE_MEMBERS_SECTION: F,
    SEARCH_CLEAR_HISTORY: k,
    SEARCH_REMOVE_HISTORY: j,
    SEARCH_ADD_HISTORY: R,
    LOGOUT: V,
    CONNECTION_OPEN: B
});
