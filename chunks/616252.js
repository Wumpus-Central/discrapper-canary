s.d(t, { A: () => i });
var r = s(228366),
    n = s(822382);
let i = {
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
        r.h.wait(() => r.h.dispatch({ type: "SEARCH_QUERY_TEXT_CLEAR", id: t }));
    },
    setShowBlockedResults: function (e, t) {
        let s = (0, n.bS)(e);
        r.h.dispatch({ type: "SEARCH_SET_SHOW_BLOCKED_RESULTS", id: s, showBlocked: t });
    },
    setShowNoResultsAlt: function (e) {
        let t = (0, n.bS)(e);
        r.h.dispatch({ type: "SEARCH_SET_SHOW_NO_RESULTS_ALT", id: t });
    },
    updateSearchResultsQuery: function (e, t, s, i) {
        let a = (0, n.bS)(e);
        r.h.dispatch({ type: "SEARCH_RESULTS_QUERY_UPDATE", id: a, queryString: t, query: s, offset: i });
    },
    updateSearchMode: function (e, t) {
        let s = (0, n.bS)(e);
        r.h.dispatch({ type: "SEARCH_SEARCH_MODE_UPDATE", id: s, searchMode: t });
    },
};
