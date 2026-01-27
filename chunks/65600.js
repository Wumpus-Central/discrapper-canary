r.d(t, {
    A: () => p,
}),
    r(896048);
var n,
    l,
    s = r(311907),
    a = r(73153),
    i = r(921242);
let o = new Map(),
    c = !1;

function u(e) {
    var t;
    let r =
        null != (t = o.get(e))
            ? t
            : {
                  editorState: null,
                  showBlockedResults: !1,
                  showNoResultsAlt: !1,
                  searchResultsQueryString: null,
                  searchResultsQuery: null,
                  searchResultsOffset: null,
                  searchMode: i.z,
              };
    return o.set(e, r), r;
}

function d(e, t) {
    let r = o.get(e);
    return null == r ? null : t(r);
}
class h extends (n = s.Ay.Store) {
    getEditorState(e) {
        return d(e, (e) => e.editorState);
    }
    shouldShowBlockedResults(e) {
        var t;
        return null != (t = d(e, (e) => e.showBlockedResults)) && t;
    }
    shouldShowNoResultsAlt(e) {
        var t;
        return null != (t = d(e, (e) => e.showNoResultsAlt)) && t;
    }
    getSearchResultsQueryString(e) {
        return d(e, (e) => e.searchResultsQueryString);
    }
    getSearchResultsQuery(e) {
        return d(e, (e) => e.searchResultsQuery);
    }
    getSearchMode(e) {
        return d(e, (e) => e.searchMode);
    }
    getSearchResultsOffset(e) {
        return d(e, (e) => e.searchResultsOffset);
    }
    getIsSearchTokensInitialized() {
        return c;
    }
    getSearchStateIds() {
        return Array.from(o.keys());
    }
}
(l = "displayName") in h
    ? Object.defineProperty(h, l, {
          value: "SearchQueryStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (h[l] = "SearchQueryStore");
let p = new h(a.h, {
    SEARCH_RESULTS_QUERY_UPDATE: function (e) {
        let { id: t, queryString: r, query: n, offset: l } = e,
            s = u(t);
        (s.searchResultsQueryString = r), (s.searchResultsQuery = n), (s.searchResultsOffset = null != l ? l : 0);
    },
    SEARCH_EDITOR_STATE_CLEAR: function (e) {
        let { id: t } = e;
        return o.delete(t);
    },
    SEARCH_ENSURE_SEARCH_STATE: function (e) {
        let { id: t } = e;
        u(t);
    },
    SEARCH_EDITOR_STATE_CHANGE: function (e) {
        let { id: t, editorState: r } = e;
        u(t).editorState = r;
    },
    SEARCH_SET_SHOW_BLOCKED_RESULTS: function (e) {
        let { id: t, showBlocked: r } = e;
        u(t).showBlockedResults = r;
    },
    SEARCH_SET_SHOW_NO_RESULTS_ALT: function (e) {
        let { id: t } = e;
        u(t).showNoResultsAlt = 0.05 > Math.random();
    },
    SEARCH_SEARCH_MODE_UPDATE: function (e) {
        let { id: t, searchMode: r } = e;
        u(t).searchMode = r;
    },
    SEARCH_TOKENS_REFRESHED: function () {
        c = !0;
    },
});
