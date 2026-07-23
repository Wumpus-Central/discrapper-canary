t.d(s, { A: () => S });
var i = t(228366),
    n = t(822382);
let S = {
    addSearchHistoryItem: function (e, s) {
        let t = (0, n.Jl)(e);
        null != t && i.h.dispatch({ type: "SEARCH_HISTORY_WEB_ADD_ITEM", id: t, query: s });
    },
    removeSearchHistoryItem: function (e, s) {
        let t = (0, n.Jl)(e);
        null != t && i.h.dispatch({ type: "SEARCH_HISTORY_WEB_REMOVE_ITEM", id: t, query: s });
    },
    clearSearchHistory: function (e) {
        let s = (0, n.Jl)(e);
        null != s && i.h.dispatch({ type: "SEARCH_HISTORY_WEB_CLEAR_ITEMS", id: s });
    },
    updateSearchQueryText: function (e, s) {
        let t = (0, n.bS)(e);
        i.h.dispatch({ type: "SEARCH_QUERY_TEXT_CHANGE", id: t, queryText: s });
    },
    clearSearchQueryText: function (e) {
        let s = (0, n.bS)(e);
        i.h.wait(() => i.h.dispatch({ type: "SEARCH_QUERY_TEXT_CLEAR", id: s }));
    },
    setShowBlockedResults: function (e, s) {
        let t = (0, n.bS)(e);
        i.h.dispatch({ type: "SEARCH_SET_SHOW_BLOCKED_RESULTS", id: t, showBlocked: s });
    },
    setShowNoResultsAlt: function (e) {
        let s = (0, n.bS)(e);
        i.h.dispatch({ type: "SEARCH_SET_SHOW_NO_RESULTS_ALT", id: s });
    },
    updateSearchResultsQuery: function (e, s, t, S) {
        let h = (0, n.bS)(e);
        i.h.dispatch({ type: "SEARCH_RESULTS_QUERY_UPDATE", id: h, queryString: s, query: t, offset: S });
    },
    updateSearchMode: function (e, s) {
        let t = (0, n.bS)(e);
        i.h.dispatch({ type: "SEARCH_SEARCH_MODE_UPDATE", id: t, searchMode: s });
    },
};
