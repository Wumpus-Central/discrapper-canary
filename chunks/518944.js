n.d(t, { Z: () => P });
var r,
    i = n(442837),
    a = n(570140),
    o = n(353926),
    s = n(592125),
    l = n(430824),
    c = n(945577),
    u = n(861262),
    d = n(981631);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = 0.05,
    p = {};
function h(e) {
    return (
        null == p[e] &&
            (p[e] = {
                searchId: e,
                editorState: null,
                showBlockedResults: !1,
                showNoResultsAlt: !1,
                searchResultsQueryString: null,
                searchResultsQuery: null,
                searchResultsOffset: null
            }),
        p[e]
    );
}
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == e) return n;
    let r = p[e];
    return null == r ? n : t(r);
}
let g = !1,
    E = null;
function b(e) {
    let { searchId: t, editorState: n } = e;
    h(t).editorState = n;
}
function y(e) {
    let { searchId: t } = e;
    null != t && h(t);
}
function O(e) {
    let { searchId: t } = e;
    if (null == p[t]) return !1;
    delete p[t];
}
function v(e) {
    if (e === E) return !1;
    (null != e && null == p[e] && h(e), (E = e));
}
function I() {
    ((g = !0), null != E && (0, u.g)(E) === d.aib.CHANNEL && (0, c.a)({ location: 'SearchStore_handleConnectionOpen' }) && v(d.aib.DMS));
}
function T(e) {
    let { guildId: t, channelId: n } = e;
    null != t
        ? v(t)
        : (0, c.a)({
                location: 'SearchStore_handleChannelSelect',
                autoTrackExposure: g
            })
          ? v(d.aib.DMS)
          : v(n);
}
function S(e) {
    let { searchId: t } = e;
    v(t);
}
function A(e) {
    let { searchId: t, showBlocked: n } = e;
    h(t).showBlockedResults = n;
}
function N(e) {
    let { searchId: t } = e;
    h(t).showNoResultsAlt = Math.random() < f;
}
function C(e) {
    let { searchId: t, queryString: n, query: r, offset: i } = e,
        a = h(t);
    ((a.searchResultsQueryString = n), (a.searchResultsQuery = r), (a.searchResultsOffset = null != i ? i : 0));
}
class R extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, s.Z, o.Z);
    }
    getCurrentSearchId() {
        return E;
    }
    getEditorState(e) {
        return m(e, (e) => e.editorState);
    }
    shouldShowBlockedResults(e) {
        var t;
        return null != (t = m(e, (e) => e.showBlockedResults, !1)) && t;
    }
    shouldShowNoResultsAlt(e) {
        var t;
        return null != (t = m(e, (e) => e.showNoResultsAlt, !1)) && t;
    }
    getSearchResultsQueryString(e) {
        return m(e, (e) => e.searchResultsQueryString);
    }
    getSearchResultsQuery(e) {
        return m(e, (e) => e.searchResultsQuery);
    }
    getSearchResultsOffset(e) {
        return m(e, (e) => e.searchResultsOffset);
    }
    hasSearchState(e) {
        return null != e && null != p[e];
    }
}
_(R, 'displayName', 'SearchStore');
let P = new R(a.Z, {
    CONNECTION_OPEN: I,
    SEARCH_RESULTS_QUERY_UPDATE: C,
    SEARCH_EDITOR_STATE_CLEAR: O,
    SEARCH_ENSURE_SEARCH_STATE: y,
    SEARCH_EDITOR_STATE_CHANGE: b,
    SEARCH_SET_SHOW_BLOCKED_RESULTS: A,
    SEARCH_SET_SHOW_NO_RESULTS_ALT: N,
    SEARCH_SCREEN_OPEN: S,
    CHANNEL_SELECT: T
});
