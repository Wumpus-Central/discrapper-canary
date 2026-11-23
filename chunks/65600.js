var r = s(855986),
    n = s(73153),
    a = s(921242);
let i = new Map(),
    c = !1,
    l = 0;
function u(e) {
    let t = i.get(e) ?? {
        searchSubmissionId: 0,
        queryText: null,
        showBlockedResults: !1,
        showNoResultsAlt: !1,
        searchResultsQueryString: null,
        searchResultsQuery: null,
        searchResultsOffset: null,
        searchMode: a.z,
    };
    return (i.set(e, t), t);
}
function _(e, t) {
    let s = i.get(e);
    return null == s ? null : t(s);
}
class h extends r.Ay.Store {
    static displayName = "SearchQueryStore";
    getQueryText(e) {
        return _(e, (e) => e.queryText);
    }
    shouldShowBlockedResults(e) {
        return _(e, (e) => e.showBlockedResults) ?? !1;
    }
    shouldShowNoResultsAlt(e) {
        return _(e, (e) => e.showNoResultsAlt) ?? !1;
    }
    getSearchSubmissionId(e) {
        return _(e, (e) => e.searchSubmissionId) ?? 0;
    }
    getSearchResultsQueryString(e) {
        return _(e, (e) => e.searchResultsQueryString);
    }
    getSearchResultsQuery(e) {
        return _(e, (e) => e.searchResultsQuery);
    }
    getSearchMode(e) {
        return _(e, (e) => e.searchMode);
    }
    getSearchResultsOffset(e) {
        return _(e, (e) => e.searchResultsOffset);
    }
    getIsSearchTokensInitialized() {
        return c;
    }
    getSearchStateIds() {
        return Array.from(i.keys());
    }
}
let d = new h(n.h, {
    SEARCH_RESULTS_QUERY_UPDATE: function (e) {
        let { id: t, queryString: s, query: r, offset: n, isNewSearch: a } = e,
            i = u(t);
        (!0 === a && (i.searchSubmissionId = ++l),
            (i.searchResultsQueryString = s),
            (i.searchResultsQuery = r),
            (i.searchResultsOffset = n ?? 0));
    },
    SEARCH_QUERY_TEXT_CLEAR: function (e) {
        let { id: t } = e;
        return i.delete(t);
    },
    SEARCH_ENSURE_SEARCH_STATE: function (e) {
        let { id: t } = e;
        u(t);
    },
    SEARCH_QUERY_TEXT_CHANGE: function (e) {
        let { id: t, queryText: s } = e;
        u(t).queryText = s;
    },
    SEARCH_SET_SHOW_BLOCKED_RESULTS: function (e) {
        let { id: t, showBlocked: s } = e;
        u(t).showBlockedResults = s;
    },
    SEARCH_SET_SHOW_NO_RESULTS_ALT: function (e) {
        let { id: t } = e;
        u(t).showNoResultsAlt = 0.05 > Math.random();
    },
    SEARCH_SEARCH_MODE_UPDATE: function (e) {
        let { id: t, searchMode: s } = e;
        u(t).searchMode = s;
    },
    SEARCH_TOKENS_REFRESHED: function () {
        c = !0;
    },
});
s.d(t, {}, { A: d });
