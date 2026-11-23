var r = s(855986),
    a = s(73153),
    n = s(921242);
let i = new Map(),
    c = !1,
    l = 0;
function _(e) {
    let t = i.get(e) ?? {
        searchSubmissionId: 0,
        queryText: null,
        showBlockedResults: !1,
        showNoResultsAlt: !1,
        searchResultsQueryString: null,
        searchResultsQuery: null,
        searchResultsOffset: null,
        searchMode: n.z,
    };
    return (i.set(e, t), t);
}
function u(e, t) {
    let s = i.get(e);
    return null == s ? null : t(s);
}
class d extends r.Ay.Store {
    static displayName = "SearchQueryStore";
    getQueryText(e) {
        return u(e, (e) => e.queryText);
    }
    shouldShowBlockedResults(e) {
        return u(e, (e) => e.showBlockedResults) ?? !1;
    }
    shouldShowNoResultsAlt(e) {
        return u(e, (e) => e.showNoResultsAlt) ?? !1;
    }
    getSearchSubmissionId(e) {
        return u(e, (e) => e.searchSubmissionId) ?? 0;
    }
    getSearchResultsQueryString(e) {
        return u(e, (e) => e.searchResultsQueryString);
    }
    getSearchResultsQuery(e) {
        return u(e, (e) => e.searchResultsQuery);
    }
    getSearchMode(e) {
        return u(e, (e) => e.searchMode);
    }
    getSearchResultsOffset(e) {
        return u(e, (e) => e.searchResultsOffset);
    }
    getIsSearchTokensInitialized() {
        return c;
    }
    getSearchStateIds() {
        return Array.from(i.keys());
    }
}
let h = new d(a.h, {
    SEARCH_RESULTS_QUERY_UPDATE: function (e) {
        let { id: t, queryString: s, query: r, offset: a, isNewSearch: n } = e,
            i = _(t);
        (!0 === n && (i.searchSubmissionId = ++l),
            (i.searchResultsQueryString = s),
            (i.searchResultsQuery = r),
            (i.searchResultsOffset = a ?? 0));
    },
    SEARCH_QUERY_TEXT_CLEAR: function (e) {
        let { id: t } = e;
        return i.delete(t);
    },
    SEARCH_ENSURE_SEARCH_STATE: function (e) {
        let { id: t } = e;
        _(t);
    },
    SEARCH_QUERY_TEXT_CHANGE: function (e) {
        let { id: t, queryText: s } = e;
        _(t).queryText = s;
    },
    SEARCH_SET_SHOW_BLOCKED_RESULTS: function (e) {
        let { id: t, showBlocked: s } = e;
        _(t).showBlockedResults = s;
    },
    SEARCH_SET_SHOW_NO_RESULTS_ALT: function (e) {
        let { id: t } = e;
        _(t).showNoResultsAlt = 0.05 > Math.random();
    },
    SEARCH_SEARCH_MODE_UPDATE: function (e) {
        let { id: t, searchMode: s } = e;
        _(t).searchMode = s;
    },
    SEARCH_TOKENS_REFRESHED: function () {
        c = !0;
    },
});
s.d(t, {}, { A: h });
