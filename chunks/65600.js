s.d(t, { A: () => _ });
var n = s(17928),
    r = s(228366),
    i = s(921242);
let a = new Map(),
    c = !1;
function o(e) {
    let t = a.get(e) ?? {
        editorState: null,
        showBlockedResults: !1,
        showNoResultsAlt: !1,
        searchResultsQueryString: null,
        searchResultsQuery: null,
        searchResultsOffset: null,
        searchMode: i.z,
    };
    return a.set(e, t), t;
}
function l(e, t) {
    let s = a.get(e);
    return null == s ? null : t(s);
}
class u extends n.Ay.Store {
    static displayName = "SearchQueryStore";
    getEditorState(e) {
        return l(e, (e) => e.editorState);
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
        return c;
    }
    getSearchStateIds() {
        return Array.from(a.keys());
    }
}
let _ = new u(r.h, {
    SEARCH_RESULTS_QUERY_UPDATE: function (e) {
        let { id: t, queryString: s, query: n, offset: r } = e,
            i = o(t);
        (i.searchResultsQueryString = s), (i.searchResultsQuery = n), (i.searchResultsOffset = r ?? 0);
    },
    SEARCH_EDITOR_STATE_CLEAR: function (e) {
        let { id: t } = e;
        return a.delete(t);
    },
    SEARCH_ENSURE_SEARCH_STATE: function (e) {
        let { id: t } = e;
        o(t);
    },
    SEARCH_EDITOR_STATE_CHANGE: function (e) {
        let { id: t, editorState: s } = e;
        o(t).editorState = s;
    },
    SEARCH_SET_SHOW_BLOCKED_RESULTS: function (e) {
        let { id: t, showBlocked: s } = e;
        o(t).showBlockedResults = s;
    },
    SEARCH_SET_SHOW_NO_RESULTS_ALT: function (e) {
        let { id: t } = e;
        o(t).showNoResultsAlt = 0.05 > Math.random();
    },
    SEARCH_SEARCH_MODE_UPDATE: function (e) {
        let { id: t, searchMode: s } = e;
        o(t).searchMode = s;
    },
    SEARCH_TOKENS_REFRESHED: function () {
        c = !0;
    },
});
