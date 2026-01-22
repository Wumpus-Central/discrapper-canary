n.d(t, {
    A: () => A,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(921242);

function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let l = 0.05,
    c = new Map(),
    u = !1;

function d(e) {
    var t;
    let n =
        null != (t = c.get(e))
            ? t
            : {
                  editorState: null,
                  showBlockedResults: !1,
                  showNoResultsAlt: !1,
                  searchResultsQueryString: null,
                  searchResultsQuery: null,
                  searchResultsOffset: null,
                  searchMode: s.z,
              };
    return c.set(e, n), n;
}

function f(e, t) {
    let n = c.get(e);
    return null == n ? null : t(n);
}

function p(e) {
    let { id: t, editorState: n } = e;
    d(t).editorState = n;
}

function _(e) {
    let { id: t } = e;
    d(t);
}

function h(e) {
    let { id: t } = e;
    return c.delete(t);
}

function m(e) {
    let { id: t, showBlocked: n } = e;
    d(t).showBlockedResults = n;
}

function g(e) {
    let { id: t } = e;
    d(t).showNoResultsAlt = Math.random() < l;
}

function E(e) {
    let { id: t, queryString: n, query: r, offset: i } = e,
        a = d(t);
    (a.searchResultsQueryString = n), (a.searchResultsQuery = r), (a.searchResultsOffset = null != i ? i : 0);
}

function b(e) {
    let { id: t, searchMode: n } = e;
    d(t).searchMode = n;
}

function y() {
    u = !0;
}
class O extends (r = i.Ay.Store) {
    getEditorState(e) {
        return f(e, (e) => e.editorState);
    }
    shouldShowBlockedResults(e) {
        var t;
        return null != (t = f(e, (e) => e.showBlockedResults)) && t;
    }
    shouldShowNoResultsAlt(e) {
        var t;
        return null != (t = f(e, (e) => e.showNoResultsAlt)) && t;
    }
    getSearchResultsQueryString(e) {
        return f(e, (e) => e.searchResultsQueryString);
    }
    getSearchResultsQuery(e) {
        return f(e, (e) => e.searchResultsQuery);
    }
    getSearchMode(e) {
        return f(e, (e) => e.searchMode);
    }
    getSearchResultsOffset(e) {
        return f(e, (e) => e.searchResultsOffset);
    }
    getIsSearchTokensInitialized() {
        return u;
    }
    getSearchStateIds() {
        return Array.from(c.keys());
    }
}
o(O, "displayName", "SearchQueryStore");
let A = new O(a.h, {
    SEARCH_RESULTS_QUERY_UPDATE: E,
    SEARCH_EDITOR_STATE_CLEAR: h,
    SEARCH_ENSURE_SEARCH_STATE: _,
    SEARCH_EDITOR_STATE_CHANGE: p,
    SEARCH_SET_SHOW_BLOCKED_RESULTS: m,
    SEARCH_SET_SHOW_NO_RESULTS_ALT: g,
    SEARCH_SEARCH_MODE_UPDATE: b,
    SEARCH_TOKENS_REFRESHED: y,
});
