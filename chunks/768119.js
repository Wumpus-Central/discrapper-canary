n.d(t, { Z: () => j }), n(733860);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(433517),
    l = n(570140),
    u = n(840877),
    c = n(952537),
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
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == e) return n;
    let i = m[e];
    return null == i ? n : t(i);
}
let y = 'SearchStore',
    I = 'tokenized',
    T = !1,
    b = {},
    S = null;
function A(e) {
    let { searchId: t, editorState: n } = e;
    g(t).editorState = n;
}
function N(e) {
    let { searchId: t } = e;
    null != t && g(t);
}
function C(e) {
    var t, n;
    let { queryString: i, searchId: r, query: s } = e,
        o = g(r);
    null != o.searchFetcher && (o.searchFetcher.cancel(), (o.searchFetcher = null));
    let f = r,
        p = o.searchType,
        h = new u.ZP(f, p, s);
    (o.searchFetcher = h),
        (o.isSearching = !0),
        (o.rawResults = null),
        (o.analyticsId = null),
        (o.query = a().omit(s, 'type')),
        (o.offset = null !== (n = s.offset) && void 0 !== n ? n : 0),
        (o.showBlockedResults = !1),
        R({
            type: 'SEARCH_ADD_HISTORY',
            searchId: r,
            query: i
        });
    let m = r === _.I_8 ? (null === (t = d.Z.getChannel(f)) || void 0 === t ? void 0 : t.guild_id) : p === _.aib.GUILD ? r : null;
    h.fetch(
        (e) => {
            var t, n;
            l.Z.dispatch({
                type: 'SEARCH_FINISH',
                searchId: r,
                guildId: m,
                analyticsId: e.body.analytics_id,
                totalResults: e.body.total_results,
                messages: e.body.messages,
                threads: null !== (t = e.body.threads) && void 0 !== t ? t : [],
                members: (null !== (n = e.body.members) && void 0 !== n ? n : []).map((e) => (0, c.Z)(e)),
                hasError: !1,
                doingHistoricalIndex: e.body.doing_deep_historical_index,
                documentsIndexed: e.body.documents_indexed
            });
        },
        () => {
            l.Z.dispatch({
                type: 'SEARCH_INDEXING',
                searchId: r
            });
        },
        () => {
            l.Z.dispatch({
                type: 'SEARCH_FINISH',
                searchId: r,
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
    let { searchId: n, query: i } = e;
    if ('string' != typeof i || '' === (i = i.trim())) return;
    let r = (b[n] = null !== (t = b[n]) && void 0 !== t ? t : []),
        a = r.indexOf(i);
    -1 !== a ? (r.splice(a, 1), r.unshift(i)) : null != r[0] && '' !== r[0] && i.startsWith(r[0]) ? (r[0] = i) : a < 0 && r.unshift(i), r.length > 5 && r.splice(5, r.length), o.K.set(y, { history: b });
}
function O(e) {
    let { searchId: t } = e,
        n = g(t);
    (n.isIndexing = !0), (n.isHistoricalIndexing = !0), (n.isSearching = !1);
}
function D(e) {
    let { searchId: t } = e,
        n = g(t);
    (n.isSearching = !1), (n.isIndexing = !1), (n.isHistoricalIndexing = e.doingHistoricalIndex || !1), (n.searchFetcher = null), (n.totalResults = e.totalResults), (n.hasError = e.hasError), (n.analyticsId = e.analyticsId), (n.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0), (n.showNoResultsAlt = Math.random() < h), (n.rawResults = e.messages), null == n.query && (n.hasError = !0);
}
function L(e) {
    let { searchId: t } = e,
        n = m[t];
    if (null == n) return !1;
    null != n.searchFetcher && n.searchFetcher.cancel(), delete m[t];
}
function x(e) {
    if (e === S) return !1;
    null != e && null == m[e] && g(e), (S = e);
}
function P(e) {
    let { guildId: t, channelId: n } = e;
    x(null != t ? t : n);
}
function w(e) {
    let { searchId: t } = e;
    x(t);
}
function M(e) {
    let { searchId: t } = e;
    null == t ? (o.K.remove(y), (b = {})) : (delete b[t], o.K.set(y, { history: b }));
}
function k(e) {
    let { searchId: t, query: n } = e;
    null != b[t] && ((b[t] = b[t].filter((e) => e !== n)), o.K.set(y, { history: b }));
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
    g(t).showBlockedResults = n;
}
function B() {
    Object.keys(m).forEach((e) => {
        null != m[e] && (m[e].searchType = E(e));
    });
}
function Z() {
    o.K.remove(y), (b = {});
}
function F() {
    return null != S && L({ searchId: S });
}
class V extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, d.Z);
        let e = o.K.get(y);
        (null == e ? void 0 : e.history) != null && (b = U(e.history)), (T = !!o.K.get(I));
    }
    getCurrentSearchId() {
        return S;
    }
    isActive() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S;
        return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e));
    }
    isTokenized() {
        return T;
    }
    getSearchType(e) {
        return v(null != e ? e : S, (e) => e.searchType);
    }
    getRawResults(e) {
        return v(e, (e) => e.rawResults);
    }
    hasResults(e) {
        return null != v(e, (e) => e.rawResults);
    }
    isIndexing(e) {
        return v(e, (e) => e.isIndexing) || !1;
    }
    isHistoricalIndexing(e) {
        return v(e, (e) => e.isHistoricalIndexing) || !1;
    }
    isSearching(e) {
        return v(e, (e) => e.isSearching) || !1;
    }
    getAnalyticsId(e) {
        return v(e, (e) => e.analyticsId);
    }
    getResultsBlocked(e) {
        return v(e, (e) => e.resultsBlocked);
    }
    getDocumentsIndexedCount(e) {
        return v(e, (e) => e.documentsIndexed);
    }
    getSearchFetcher(e) {
        return v(e, (e) => e.searchFetcher);
    }
    getTotalResults(e) {
        var t;
        return null !== (t = v(e, (e) => e.totalResults)) && void 0 !== t ? t : 0;
    }
    getEditorState(e) {
        return v(e, (e) => e.editorState);
    }
    getHistory(e) {
        return b[e];
    }
    getOffset(e) {
        var t;
        return null !== (t = v(e, (e) => e.offset)) && void 0 !== t ? t : 0;
    }
    getQuery(e) {
        return v(e, (e) => e.query);
    }
    hasError(e) {
        var t;
        return null !== (t = v(e, (e) => e.hasError)) && void 0 !== t && t;
    }
    shouldShowBlockedResults(e) {
        var t;
        return null !== (t = v(e, (e) => e.showBlockedResults, !1)) && void 0 !== t && t;
    }
    shouldShowNoResultsAlt(e) {
        var t;
        return null !== (t = v(e, (e) => e.showNoResultsAlt, !1)) && void 0 !== t && t;
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
let j = new V(l.Z, {
    SEARCH_START: C,
    SEARCH_INDEXING: O,
    SEARCH_FINISH: D,
    SEARCH_EDITOR_STATE_CLEAR: L,
    SEARCH_ENSURE_SEARCH_STATE: N,
    SEARCH_EDITOR_STATE_CHANGE: A,
    SEARCH_SET_SHOW_BLOCKED_RESULTS: G,
    SEARCH_SCREEN_OPEN: w,
    CHANNEL_SELECT: P,
    CHANNEL_TOGGLE_MEMBERS_SECTION: F,
    SEARCH_CLEAR_HISTORY: M,
    SEARCH_REMOVE_HISTORY: k,
    SEARCH_ADD_HISTORY: R,
    LOGOUT: Z,
    CONNECTION_OPEN: B
});
