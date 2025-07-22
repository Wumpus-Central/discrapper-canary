(n.d(t, { Z: () => K }), n(781311), n(290780));
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(433517),
    l = n(570140),
    c = n(353926),
    u = n(861262),
    d = n(187462),
    f = n(778877),
    _ = n(952537),
    p = n(592125),
    h = n(430824),
    m = n(981631);
function g(e, t, n) {
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
let E = 0.05,
    b = {};
function y(e) {
    return (
        null == b[e] &&
            (b[e] = {
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
        b[e]
    );
}
function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == e) return n;
    let r = b[e];
    return null == r ? n : t(r);
}
let v = 'SearchStore',
    I = 'tokenized',
    T = !1,
    S = !1,
    A = {},
    N = null;
function C(e) {
    let { searchId: t, editorState: n } = e;
    y(t).editorState = n;
}
function R(e) {
    let { searchId: t } = e;
    null != t && y(t);
}
function P(e) {
    var t, n;
    let { queryString: r, searchId: i, query: o } = e,
        s = y(i),
        c = i,
        f = (0, u.g)(i),
        h = d.Z.create({
            id: i,
            searchType: f,
            searchQuery: o
        });
    ((s.isSearching = !0),
        (s.rawResults = null),
        (s.analyticsId = null),
        (s.query = a().omit(o, 'type')),
        (s.offset = null != (n = o.offset) ? n : 0),
        (s.showBlockedResults = !1),
        (s.searchResultsQueryString = r),
        w({
            type: 'SEARCH_ADD_HISTORY',
            searchId: i,
            query: r
        }));
    let g = i === m.I_8 ? (null == (t = p.Z.getChannel(c)) ? void 0 : t.guild_id) : f === m.aib.GUILD ? i : null;
    h.fetch(
        (e) => {
            var t, n;
            l.Z.dispatch({
                type: 'SEARCH_FINISH',
                searchId: i,
                guildId: g,
                analyticsId: e.body.analytics_id,
                totalResults: e.body.total_results,
                messages: e.body.messages,
                threads: null != (t = e.body.threads) ? t : [],
                members: (null != (n = e.body.members) ? n : []).map((e) => (0, _.Z)(e)),
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
                guildId: g,
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
function w(e) {
    var t;
    let { searchId: n, query: r } = e;
    if ('string' != typeof r || '' === (r = r.trim())) return;
    let i = (A[n] = null != (t = A[n]) ? t : []),
        a = i.indexOf(r);
    (-1 !== a ? (i.splice(a, 1), i.unshift(r)) : null != i[0] && '' !== i[0] && r.startsWith(i[0]) ? (i[0] = r) : a < 0 && i.unshift(r), i.length > 5 && i.splice(5, i.length), s.K.set(v, { history: A }));
}
function D(e) {
    let { searchId: t } = e,
        n = y(t);
    ((n.isIndexing = !0), (n.isHistoricalIndexing = !0), (n.isSearching = !1));
}
function L(e) {
    let { searchId: t } = e,
        n = y(t);
    ((n.isSearching = !1), (n.isIndexing = !1), (n.isHistoricalIndexing = e.doingHistoricalIndex || !1), (n.totalResults = e.totalResults), (n.hasError = e.hasError), (n.analyticsId = e.analyticsId), (n.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0), (n.showNoResultsAlt = Math.random() < E), (n.rawResults = e.messages), null == n.query && (n.hasError = !0));
}
function x(e) {
    let { searchId: t } = e;
    if (null == b[t]) return !1;
    delete b[t];
}
function M(e) {
    if (e === N) return !1;
    (null != e && null == b[e] && y(e), (N = e));
}
function k() {
    ((S = !0), null != N && (0, u.g)(N) === m.aib.CHANNEL && (0, f.a)({ location: 'SearchStore_handleConnectionOpen' }) && M(m.aib.DMS));
}
function j(e) {
    let { guildId: t, channelId: n } = e;
    null != t
        ? M(t)
        : (0, f.a)({
                location: 'SearchStore_handleChannelSelect',
                autoTrackExposure: S
            })
          ? M(m.aib.DMS)
          : M(n);
}
function U(e) {
    let { searchId: t } = e;
    M(t);
}
function G(e) {
    let { searchId: t } = e;
    null == t ? (s.K.remove(v), (A = {})) : (delete A[t], s.K.set(v, { history: A }));
}
function B(e) {
    let { searchId: t, query: n } = e;
    null != A[t] && ((A[t] = A[t].filter((e) => e !== n)), s.K.set(v, { history: A }));
}
function V(e) {
    return (
        Object.keys(e).forEach((t) => {
            (Array.isArray(e[t]) && (e[t] = e[t].filter((e) => 'string' == typeof e && e.trim())), (Array.isArray(e[t]) && 0 !== e[t].length) || delete e[t]);
        }),
        e
    );
}
function F(e) {
    let { searchId: t, showBlocked: n } = e;
    y(t).showBlockedResults = n;
}
function Z(e) {
    let { searchId: t } = e;
    y(t).showNoResultsAlt = Math.random() < E;
}
function H() {
    (s.K.remove(v), (A = {}));
}
function Y(e) {
    let { searchId: t, queryString: n, query: r, offset: i } = e,
        a = y(t);
    ((a.searchResultsQueryString = n), (a.query = r), (a.offset = null != i ? i : 0));
}
class W extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, p.Z, c.Z);
        let e = s.K.get(v);
        ((null == e ? void 0 : e.history) != null && (A = V(e.history)), (T = !!s.K.get(I)));
    }
    getCurrentSearchId() {
        return N;
    }
    isActive() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N;
        return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e));
    }
    isTokenized() {
        return T;
    }
    getRawResults(e) {
        return O(e, (e) => e.rawResults);
    }
    hasResults(e) {
        return null != O(e, (e) => e.rawResults);
    }
    isIndexing(e) {
        return O(e, (e) => e.isIndexing) || !1;
    }
    isHistoricalIndexing(e) {
        return O(e, (e) => e.isHistoricalIndexing) || !1;
    }
    isSearching(e) {
        return O(e, (e) => e.isSearching) || !1;
    }
    getAnalyticsId(e) {
        return O(e, (e) => e.analyticsId);
    }
    getResultsBlocked(e) {
        return O(e, (e) => e.resultsBlocked);
    }
    getDocumentsIndexedCount(e) {
        return O(e, (e) => e.documentsIndexed);
    }
    getTotalResults(e) {
        var t;
        return null != (t = O(e, (e) => e.totalResults)) ? t : 0;
    }
    getEditorState(e) {
        return O(e, (e) => e.editorState);
    }
    getHistory(e) {
        return A[e];
    }
    getOffset(e) {
        var t;
        return null != (t = O(e, (e) => e.offset)) ? t : 0;
    }
    getQuery(e) {
        return O(e, (e) => e.query);
    }
    hasError(e) {
        var t;
        return null != (t = O(e, (e) => e.hasError)) && t;
    }
    shouldShowBlockedResults(e) {
        var t;
        return null != (t = O(e, (e) => e.showBlockedResults, !1)) && t;
    }
    shouldShowNoResultsAlt(e) {
        var t;
        return null != (t = O(e, (e) => e.showNoResultsAlt, !1)) && t;
    }
    getSearchResultsQueryString(e) {
        return O(e, (e) => e.searchResultsQueryString);
    }
    getSearchResultsQuery(e) {
        return O(e, (e) => e.searchResultsQuery);
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
g(W, 'displayName', 'SearchStore');
let K = new W(l.Z, {
    CONNECTION_OPEN: k,
    SEARCH_START: P,
    SEARCH_INDEXING: D,
    SEARCH_FINISH: L,
    SEARCH_RESULTS_QUERY_UPDATE: Y,
    SEARCH_EDITOR_STATE_CLEAR: x,
    SEARCH_ENSURE_SEARCH_STATE: R,
    SEARCH_EDITOR_STATE_CHANGE: C,
    SEARCH_SET_SHOW_BLOCKED_RESULTS: F,
    SEARCH_SET_SHOW_NO_RESULTS_ALT: Z,
    SEARCH_SCREEN_OPEN: U,
    CHANNEL_SELECT: j,
    SEARCH_CLEAR_HISTORY: G,
    SEARCH_REMOVE_HISTORY: B,
    SEARCH_ADD_HISTORY: w,
    LOGOUT: H
});
