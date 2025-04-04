n.d(t, { Z: () => Z }), n(566702), n(733860);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(433517),
    l = n(570140),
    c = n(840877),
    u = n(952537),
    d = n(592125),
    f = n(430824),
    _ = n(981631);
function p(e, t, n) {
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
let h = 0.05,
    m = {};
function g(e) {
    return (
        null == m[e] &&
            (m[e] = {
                searchId: e,
                searchType: E(e),
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
                showNoResultsAlt: !1
            }),
        m[e]
    );
}
function E(e) {
    return e === _.aib.DMS ? _.aib.DMS : e === _.I_8 ? _.aib.FAVORITES : null != f.Z.getGuild(e) ? _.aib.GUILD : null != d.Z.getChannel(e) ? _.aib.CHANNEL : null;
}
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == e) return n;
    let r = m[e];
    return null == r ? n : t(r);
}
let y = 'SearchStore',
    v = 'tokenized',
    O = !1,
    I = {},
    S = null;
function T(e) {
    let { searchId: t, editorState: n } = e;
    g(t).editorState = n;
}
function N(e) {
    let { searchId: t } = e;
    null != t && g(t);
}
function A(e) {
    var t, n;
    let { queryString: r, searchId: i, query: a } = e,
        s = g(i);
    null != s.searchFetcher && (s.searchFetcher.cancel(), (s.searchFetcher = null));
    let f = i,
        p = s.searchType,
        h = new c.ZP(f, p, a);
    (s.searchFetcher = h),
        (s.isSearching = !0),
        (s.rawResults = null),
        (s.analyticsId = null),
        (s.query = o().omit(a, 'type')),
        (s.offset = null != (n = a.offset) ? n : 0),
        (s.showBlockedResults = !1),
        C({
            type: 'SEARCH_ADD_HISTORY',
            searchId: i,
            query: r
        });
    let m = i === _.I_8 ? (null == (t = d.Z.getChannel(f)) ? void 0 : t.guild_id) : p === _.aib.GUILD ? i : null;
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
                members: (null != (n = e.body.members) ? n : []).map((e) => (0, u.Z)(e)),
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
function C(e) {
    var t;
    let { searchId: n, query: r } = e;
    if ('string' != typeof r || '' === (r = r.trim())) return;
    let i = (I[n] = null != (t = I[n]) ? t : []),
        o = i.indexOf(r);
    -1 !== o ? (i.splice(o, 1), i.unshift(r)) : null != i[0] && '' !== i[0] && r.startsWith(i[0]) ? (i[0] = r) : o < 0 && i.unshift(r), i.length > 5 && i.splice(5, i.length), s.K.set(y, { history: I });
}
function R(e) {
    let { searchId: t } = e,
        n = g(t);
    (n.isIndexing = !0), (n.isHistoricalIndexing = !0), (n.isSearching = !1);
}
function P(e) {
    let { searchId: t } = e,
        n = g(t);
    (n.isSearching = !1), (n.isIndexing = !1), (n.isHistoricalIndexing = e.doingHistoricalIndex || !1), (n.searchFetcher = null), (n.totalResults = e.totalResults), (n.hasError = e.hasError), (n.analyticsId = e.analyticsId), (n.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0), (n.showNoResultsAlt = Math.random() < h), (n.rawResults = e.messages), null == n.query && (n.hasError = !0);
}
function w(e) {
    let { searchId: t } = e,
        n = m[t];
    if (null == n) return !1;
    null != n.searchFetcher && n.searchFetcher.cancel(), delete m[t];
}
function D(e) {
    if (e === S) return !1;
    null != e && null == m[e] && g(e), (S = e);
}
function L(e) {
    let { guildId: t, channelId: n } = e;
    D(null != t ? t : n);
}
function x(e) {
    let { searchId: t } = e;
    D(t);
}
function M(e) {
    let { searchId: t } = e;
    null == t ? (s.K.remove(y), (I = {})) : (delete I[t], s.K.set(y, { history: I }));
}
function k(e) {
    let { searchId: t, query: n } = e;
    null != I[t] && ((I[t] = I[t].filter((e) => e !== n)), s.K.set(y, { history: I }));
}
function j(e) {
    return (
        Object.keys(e).forEach((t) => {
            Array.isArray(e[t]) && (e[t] = e[t].filter((e) => 'string' == typeof e && e.trim())), (Array.isArray(e[t]) && 0 !== e[t].length) || delete e[t];
        }),
        e
    );
}
function U(e) {
    let { searchId: t, showBlocked: n } = e;
    g(t).showBlockedResults = n;
}
function G() {
    Object.keys(m).forEach((e) => {
        null != m[e] && (m[e].searchType = E(e));
    });
}
function B() {
    s.K.remove(y), (I = {});
}
function F() {
    return null != S && w({ searchId: S });
}
class V extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, d.Z);
        let e = s.K.get(y);
        (null == e ? void 0 : e.history) != null && (I = j(e.history)), (O = !!s.K.get(v));
    }
    getCurrentSearchId() {
        return S;
    }
    isActive() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S;
        return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e));
    }
    isTokenized() {
        return O;
    }
    getSearchType(e) {
        return b(null != e ? e : S, (e) => e.searchType);
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
    getSearchFetcher(e) {
        return b(e, (e) => e.searchFetcher);
    }
    getTotalResults(e) {
        var t;
        return null != (t = b(e, (e) => e.totalResults)) ? t : 0;
    }
    getEditorState(e) {
        return b(e, (e) => e.editorState);
    }
    getHistory(e) {
        return I[e];
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
p(V, 'displayName', 'SearchStore');
let Z = new V(l.Z, {
    SEARCH_START: A,
    SEARCH_INDEXING: R,
    SEARCH_FINISH: P,
    SEARCH_EDITOR_STATE_CLEAR: w,
    SEARCH_ENSURE_SEARCH_STATE: N,
    SEARCH_EDITOR_STATE_CHANGE: T,
    SEARCH_SET_SHOW_BLOCKED_RESULTS: U,
    SEARCH_SCREEN_OPEN: x,
    CHANNEL_SELECT: L,
    CHANNEL_TOGGLE_MEMBERS_SECTION: F,
    SEARCH_CLEAR_HISTORY: M,
    SEARCH_REMOVE_HISTORY: k,
    SEARCH_ADD_HISTORY: C,
    LOGOUT: B,
    CONNECTION_OPEN: G
});
