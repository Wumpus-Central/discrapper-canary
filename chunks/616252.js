s.d(t, { A: () => i });
var n = s(228366),
    r = s(822382);
let i = {
    addSearchHistoryItem: function (e, t) {
        let s = (0, r.Jl)(e);
        null != s && n.h.dispatch({ type: "SEARCH_HISTORY_WEB_ADD_ITEM", id: s, query: t });
    },
    removeSearchHistoryItem: function (e, t) {
        let s = (0, r.Jl)(e);
        null != s && n.h.dispatch({ type: "SEARCH_HISTORY_WEB_REMOVE_ITEM", id: s, query: t });
    },
    clearSearchHistory: function (e) {
        let t = (0, r.Jl)(e);
        null != t && n.h.dispatch({ type: "SEARCH_HISTORY_WEB_CLEAR_ITEMS", id: t });
    },
    updateSearchEditorState: function (e, t) {
        let s = (0, r.bS)(e);
        n.h.dispatch({ type: "SEARCH_EDITOR_STATE_CHANGE", id: s, editorState: t });
    },
    clearSearchEditorState: function (e) {
        let t = (0, r.bS)(e);
        n.h.wait(() => n.h.dispatch({ type: "SEARCH_EDITOR_STATE_CLEAR", id: t }));
    },
    setShowBlockedResults: function (e, t) {
        let s = (0, r.bS)(e);
        n.h.dispatch({ type: "SEARCH_SET_SHOW_BLOCKED_RESULTS", id: s, showBlocked: t });
    },
    setShowNoResultsAlt: function (e) {
        let t = (0, r.bS)(e);
        n.h.dispatch({ type: "SEARCH_SET_SHOW_NO_RESULTS_ALT", id: t });
    },
    updateSearchResultsQuery: function (e, t, s, i) {
        let a = (0, r.bS)(e);
        n.h.dispatch({ type: "SEARCH_RESULTS_QUERY_UPDATE", id: a, queryString: t, query: s, offset: i });
    },
    updateSearchMode: function (e, t) {
        let s = (0, r.bS)(e);
        n.h.dispatch({ type: "SEARCH_SEARCH_MODE_UPDATE", id: s, searchMode: t });
    },
};
