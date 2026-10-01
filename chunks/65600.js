s.d(t, { A: () => u });
var r = s(17928),
    n = s(228366),
    i = s(921242);
let a = new Map(),
    _ = !1;
function c(e) {
    let t = a.get(e) ?? {
        queryText: null,
        showBlockedResults: !1,
        showNoResultsAlt: !1,
        searchResultsQueryString: null,
        searchResultsQuery: null,
        searchResultsOffset: null,
        searchMode: i.z,
    };
    return (a.set(e, t), t);
}
function l(e, t) {
    let s = a.get(e);
    return null == s ? null : t(s);
}
class h extends r.Ay.Store {
    static displayName = "SearchQueryStore";
    getQueryText(e) {
        return l(e, (e) => e.queryText);
    }
    shouldShowBlockedResults(e) {
        return l(e, (e) => e.showBlockedResults) ?? !1;
    }
    shouldShowNoResultsAlt(e) {
        return l(e, (e) => e.showNoResultsAlt) ?? !1;
    }
    getSearchResultsQueryString(e) {
        return l(e, (e) => e.searchResultsQueryString);
    }
    getSearchResultsQuery(e) {
        return l(e, (e) => e.searchResultsQuery);
    }
    getSearchMode(e) {
        return l(e, (e) => e.searchMode);
    }
    getSearchResultsOffset(e) {
        return l(e, (e) => e.searchResultsOffset);
    }
    getIsSearchTokensInitialized() {
        return _;
    }
    getSearchStateIds() {
        return Array.from(a.keys());
    }
}
let u = new h(n.h, {
    SEARCH_RESULTS_QUERY_UPDATE: function (e) {
        let { id: t, queryString: s, query: r, offset: n } = e,
            i = c(t);
        ((i.searchResultsQueryString = s), (i.searchResultsQuery = r), (i.searchResultsOffset = n ?? 0));
    },
    SEARCH_QUERY_TEXT_CLEAR: function (e) {
        let { id: t } = e;
        return a.delete(t);
    },
    SEARCH_ENSURE_SEARCH_STATE: function (e) {
        let { id: t } = e;
        c(t);
    },
    SEARCH_QUERY_TEXT_CHANGE: function (e) {
        let { id: t, queryText: s } = e;
        c(t).queryText = s;
    },
    SEARCH_SET_SHOW_BLOCKED_RESULTS: function (e) {
        let { id: t, showBlocked: s } = e;
        c(t).showBlockedResults = s;
    },
    SEARCH_SET_SHOW_NO_RESULTS_ALT: function (e) {
        let { id: t } = e;
        c(t).showNoResultsAlt = 0.05 > Math.random();
    },
    SEARCH_SEARCH_MODE_UPDATE: function (e) {
        let { id: t, searchMode: s } = e;
        c(t).searchMode = s;
    },
    SEARCH_TOKENS_REFRESHED: function () {
        _ = !0;
    },
});
