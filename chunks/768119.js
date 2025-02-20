n.d(t, { Z: () => V }), n(566702), n(733860);
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
    p = n(981631);
function _(e, t, n) {
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
    return e === p.aib.DMS ? p.aib.DMS : e === p.I_8 ? p.aib.FAVORITES : null != f.Z.getGuild(e) ? p.aib.GUILD : null != d.Z.getChannel(e) ? p.aib.CHANNEL : null;
}
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == e) return n;
    let r = m[e];
    return null == r ? n : t(r);
}
let b = 'SearchStore',
    y = 'tokenized',
    O = !1,
    S = {},
    I = null;
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
        _ = s.searchType,
        h = new c.ZP(f, _, a);
    (s.searchFetcher = h),
        (s.isSearching = !0),
        (s.rawResults = null),
        (s.analyticsId = null),
        (s.query = o().omit(a, 'type')),
        (s.offset = null !== (n = a.offset) && void 0 !== n ? n : 0),
        (s.showBlockedResults = !1),
        C({
            type: 'SEARCH_ADD_HISTORY',
            searchId: i,
            query: r
        });
    let m = i === p.I_8 ? (null === (t = d.Z.getChannel(f)) || void 0 === t ? void 0 : t.guild_id) : _ === p.aib.GUILD ? i : null;
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
                threads: null !== (t = e.body.threads) && void 0 !== t ? t : [],
                members: (null !== (n = e.body.members) && void 0 !== n ? n : []).map((e) => (0, u.Z)(e)),
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
    let i = (S[n] = null !== (t = S[n]) && void 0 !== t ? t : []),
        o = i.indexOf(r);
    -1 !== o ? (i.splice(o, 1), i.unshift(r)) : null != i[0] && '' !== i[0] && r.startsWith(i[0]) ? (i[0] = r) : o < 0 && i.unshift(r), i.length > 5 && i.splice(5, i.length), s.K.set(b, { history: S });
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
    if (e === I) return !1;
    null != e && null == m[e] && g(e), (I = e);
}
function x(e) {
    let { guildId: t, channelId: n } = e;
    D(null != t ? t : n);
}
function L(e) {
    let { searchId: t } = e;
    D(t);
}
function M(e) {
    let { searchId: t } = e;
    null == t ? (s.K.remove(b), (S = {})) : (delete S[t], s.K.set(b, { history: S }));
}
function k(e) {
    let { searchId: t, query: n } = e;
    null != S[t] && ((S[t] = S[t].filter((e) => e !== n)), s.K.set(b, { history: S }));
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
    s.K.remove(b), (S = {});
}
function Z() {
    return null != I && w({ searchId: I });
}
class F extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, d.Z);
        let e = s.K.get(b);
        (null == e ? void 0 : e.history) != null && (S = j(e.history)), (O = !!s.K.get(y));
    }
    getCurrentSearchId() {
        return I;
    }
    isActive() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I;
        return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e));
    }
    isTokenized() {
        return O;
    }
    getSearchType(e) {
        return v(null != e ? e : I, (e) => e.searchType);
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
        return S[e];
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
_(F, 'displayName', 'SearchStore');
let V = new F(l.Z, {
    SEARCH_START: A,
    SEARCH_INDEXING: R,
    SEARCH_FINISH: P,
    SEARCH_EDITOR_STATE_CLEAR: w,
    SEARCH_ENSURE_SEARCH_STATE: N,
    SEARCH_EDITOR_STATE_CHANGE: T,
    SEARCH_SET_SHOW_BLOCKED_RESULTS: U,
    SEARCH_SCREEN_OPEN: L,
    CHANNEL_SELECT: x,
    CHANNEL_TOGGLE_MEMBERS_SECTION: Z,
    SEARCH_CLEAR_HISTORY: M,
    SEARCH_REMOVE_HISTORY: k,
    SEARCH_ADD_HISTORY: C,
    LOGOUT: B,
    CONNECTION_OPEN: G
});
