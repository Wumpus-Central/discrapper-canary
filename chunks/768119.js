var i,
    a = r(733860);
var s = r(392711),
    o = r.n(s),
    l = r(442837),
    u = r(433517),
    c = r(570140),
    d = r(840877),
    f = r(952537),
    _ = r(592125),
    h = r(430824),
    p = r(981631);
function m(e, n, r) {
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
let g = 0.05,
    E = {};
function v(e) {
    return (
        null == E[e] &&
            (E[e] = {
                searchId: e,
                searchType: I(e),
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
        E[e]
    );
}
function I(e) {
    return e === p.aib.DMS ? p.aib.DMS : e === p.I_8 ? p.aib.FAVORITES : null != h.Z.getGuild(e) ? p.aib.GUILD : null != _.Z.getChannel(e) ? p.aib.CHANNEL : null;
}
function T(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == e) return r;
    let i = E[e];
    return null == i ? r : n(i);
}
let b = 'SearchStore',
    y = 'tokenized',
    S = !1,
    A = {},
    N = null;
function C(e) {
    let { searchId: n, editorState: r } = e;
    v(n).editorState = r;
}
function R(e) {
    let { searchId: n } = e;
    null != n && v(n);
}
function O(e) {
    var n, r;
    let { queryString: i, searchId: a, query: s } = e,
        l = v(a);
    null != l.searchFetcher && (l.searchFetcher.cancel(), (l.searchFetcher = null));
    let u = a,
        h = l.searchType,
        m = new d.ZP(u, h, s);
    (l.searchFetcher = m),
        (l.isSearching = !0),
        (l.rawResults = null),
        (l.analyticsId = null),
        (l.query = o().omit(s, 'type')),
        (l.offset = null !== (r = s.offset) && void 0 !== r ? r : 0),
        (l.showBlockedResults = !1),
        D({
            type: 'SEARCH_ADD_HISTORY',
            searchId: a,
            query: i
        });
    let g = a === p.I_8 ? (null === (n = _.Z.getChannel(u)) || void 0 === n ? void 0 : n.guild_id) : h === p.aib.GUILD ? a : null;
    m.fetch(
        (e) => {
            var n, r;
            c.Z.dispatch({
                type: 'SEARCH_FINISH',
                searchId: a,
                guildId: g,
                analyticsId: e.body.analytics_id,
                totalResults: e.body.total_results,
                messages: e.body.messages,
                threads: null !== (n = e.body.threads) && void 0 !== n ? n : [],
                members: (null !== (r = e.body.members) && void 0 !== r ? r : []).map((e) => (0, f.Z)(e)),
                hasError: !1,
                doingHistoricalIndex: e.body.doing_deep_historical_index,
                documentsIndexed: e.body.documents_indexed
            });
        },
        () => {
            c.Z.dispatch({
                type: 'SEARCH_INDEXING',
                searchId: a
            });
        },
        () => {
            c.Z.dispatch({
                type: 'SEARCH_FINISH',
                searchId: a,
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
function D(e) {
    var n;
    let { searchId: r, query: i } = e;
    if ('string' != typeof i || '' === (i = i.trim())) return;
    let a = (A[r] = null !== (n = A[r]) && void 0 !== n ? n : []),
        s = a.indexOf(i);
    -1 !== s ? (a.splice(s, 1), a.unshift(i)) : null != a[0] && '' !== a[0] && i.startsWith(a[0]) ? (a[0] = i) : s < 0 && a.unshift(i), a.length > 5 && a.splice(5, a.length), u.K.set(b, { history: A });
}
function L(e) {
    let { searchId: n } = e,
        r = v(n);
    (r.isIndexing = !0), (r.isHistoricalIndexing = !0), (r.isSearching = !1);
}
function x(e) {
    let { searchId: n } = e,
        r = v(n);
    (r.isSearching = !1), (r.isIndexing = !1), (r.isHistoricalIndexing = e.doingHistoricalIndex || !1), (r.searchFetcher = null), (r.totalResults = e.totalResults), (r.hasError = e.hasError), (r.analyticsId = e.analyticsId), (r.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0), (r.showNoResultsAlt = Math.random() < g), (r.rawResults = e.messages), null == r.query && (r.hasError = !0);
}
function w(e) {
    let { searchId: n } = e,
        r = E[n];
    if (null == r) return !1;
    null != r.searchFetcher && r.searchFetcher.cancel(), delete E[n];
}
function P(e) {
    if (e === N) return !1;
    null != e && null == E[e] && v(e), (N = e);
}
function M(e) {
    let { guildId: n, channelId: r } = e;
    P(null != n ? n : r);
}
function k(e) {
    let { searchId: n } = e;
    P(n);
}
function U(e) {
    let { searchId: n } = e;
    null == n ? (u.K.remove(b), (A = {})) : (delete A[n], u.K.set(b, { history: A }));
}
function B(e) {
    let { searchId: n, query: r } = e;
    null != A[n] && ((A[n] = A[n].filter((e) => e !== r)), u.K.set(b, { history: A }));
}
function G(e) {
    return (
        Object.keys(e).forEach((n) => {
            Array.isArray(e[n]) && (e[n] = e[n].filter((e) => 'string' == typeof e && e.trim())), (!Array.isArray(e[n]) || 0 === e[n].length) && delete e[n];
        }),
        e
    );
}
function Z(e) {
    let { searchId: n, showBlocked: r } = e;
    v(n).showBlockedResults = r;
}
function F() {
    Object.keys(E).forEach((e) => {
        null != E[e] && (E[e].searchType = I(e));
    });
}
function V() {
    u.K.remove(b), (A = {});
}
function j() {
    return null != N && w({ searchId: N });
}
class H extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, _.Z);
        let e = u.K.get(b);
        (null == e ? void 0 : e.history) != null && (A = G(e.history)), (S = !!u.K.get(y));
    }
    getCurrentSearchId() {
        return N;
    }
    isActive() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N;
        return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e));
    }
    isTokenized() {
        return S;
    }
    getSearchType(e) {
        return T(null != e ? e : N, (e) => e.searchType);
    }
    getRawResults(e) {
        return T(e, (e) => e.rawResults);
    }
    hasResults(e) {
        return null != T(e, (e) => e.rawResults);
    }
    isIndexing(e) {
        return T(e, (e) => e.isIndexing) || !1;
    }
    isHistoricalIndexing(e) {
        return T(e, (e) => e.isHistoricalIndexing) || !1;
    }
    isSearching(e) {
        return T(e, (e) => e.isSearching) || !1;
    }
    getAnalyticsId(e) {
        return T(e, (e) => e.analyticsId);
    }
    getResultsBlocked(e) {
        return T(e, (e) => e.resultsBlocked);
    }
    getDocumentsIndexedCount(e) {
        return T(e, (e) => e.documentsIndexed);
    }
    getSearchFetcher(e) {
        return T(e, (e) => e.searchFetcher);
    }
    getTotalResults(e) {
        var n;
        return null !== (n = T(e, (e) => e.totalResults)) && void 0 !== n ? n : 0;
    }
    getEditorState(e) {
        return T(e, (e) => e.editorState);
    }
    getHistory(e) {
        return A[e];
    }
    getOffset(e) {
        var n;
        return null !== (n = T(e, (e) => e.offset)) && void 0 !== n ? n : 0;
    }
    getQuery(e) {
        return T(e, (e) => e.query);
    }
    hasError(e) {
        var n;
        return null !== (n = T(e, (e) => e.hasError)) && void 0 !== n && n;
    }
    shouldShowBlockedResults(e) {
        var n;
        return null !== (n = T(e, (e) => e.showBlockedResults, !1)) && void 0 !== n && n;
    }
    shouldShowNoResultsAlt(e) {
        var n;
        return null !== (n = T(e, (e) => e.showNoResultsAlt, !1)) && void 0 !== n && n;
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
m(H, 'displayName', 'SearchStore'),
    (n.Z = new H(c.Z, {
        SEARCH_START: O,
        SEARCH_INDEXING: L,
        SEARCH_FINISH: x,
        SEARCH_EDITOR_STATE_CLEAR: w,
        SEARCH_ENSURE_SEARCH_STATE: R,
        SEARCH_EDITOR_STATE_CHANGE: C,
        SEARCH_SET_SHOW_BLOCKED_RESULTS: Z,
        SEARCH_SCREEN_OPEN: k,
        CHANNEL_SELECT: M,
        CHANNEL_TOGGLE_MEMBERS_SECTION: j,
        SEARCH_CLEAR_HISTORY: U,
        SEARCH_REMOVE_HISTORY: B,
        SEARCH_ADD_HISTORY: D,
        LOGOUT: V,
        CONNECTION_OPEN: F
    }));
