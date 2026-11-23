var r = s(73153),
    n = s(822382);
s.d(
    t,
    {},
    {
        A: {
            addSearchHistoryItem: function (e, t) {
                let s = (0, n.Jl)(e);
                null != s && r.h.dispatch({ type: "SEARCH_HISTORY_WEB_ADD_ITEM", id: s, query: t });
            },
            removeSearchHistoryItem: function (e, t) {
                let s = (0, n.Jl)(e);
                null != s && r.h.dispatch({ type: "SEARCH_HISTORY_WEB_REMOVE_ITEM", id: s, query: t });
            },
            clearSearchHistory: function (e) {
                let t = (0, n.Jl)(e);
                null != t && r.h.dispatch({ type: "SEARCH_HISTORY_WEB_CLEAR_ITEMS", id: t });
            },
            updateSearchQueryText: function (e, t) {
                let s = (0, n.bS)(e);
                r.h.dispatch({ type: "SEARCH_QUERY_TEXT_CHANGE", id: s, queryText: t });
            },
            clearSearchQueryText: function (e) {
                let t = (0, n.bS)(e);
                r.h.dispatch({ type: "SEARCH_QUERY_TEXT_CLEAR", id: t });
            },
            setShowBlockedResults: function (e, t) {
                let s = (0, n.bS)(e);
                r.h.dispatch({ type: "SEARCH_SET_SHOW_BLOCKED_RESULTS", id: s, showBlocked: t });
            },
            setShowNoResultsAlt: function (e) {
                let t = (0, n.bS)(e);
                r.h.dispatch({ type: "SEARCH_SET_SHOW_NO_RESULTS_ALT", id: t });
            },
            updateSearchResultsQuery: function (e, t, s, a) {
                let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    c = (0, n.bS)(e);
                r.h.dispatch({
                    type: "SEARCH_RESULTS_QUERY_UPDATE",
                    id: c,
                    queryString: t,
                    query: s,
                    offset: a,
                    isNewSearch: i,
                });
            },
            updateSearchMode: function (e, t) {
                let s = (0, n.bS)(e);
                r.h.dispatch({ type: "SEARCH_SEARCH_MODE_UPDATE", id: s, searchMode: t });
            },
        },
    },
);
