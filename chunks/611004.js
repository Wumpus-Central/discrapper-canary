n.d(t, { Z: () => P }), n(704826), n(35282), n(539854), n(781311);
var r = n(258863),
    i = n(349033),
    a = n(585483),
    o = n(72006),
    s = n(181389),
    l = n(748610),
    c = n(607802),
    u = n(187462),
    d = n(532496),
    f = n(532428),
    _ = n(991896),
    p = n(817190),
    h = n(723642),
    m = n(125085),
    g = n(981631);
function E(e, t, n) {
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
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    let { searchContext: t, searchQueryString: n, searchQuery: r, offset: i } = e,
        a = (0, c.Tm)(t);
    l.Z.clearSearchMessages(a),
        _.Z.setShowNoResultsAlt(t),
        _.Z.setShowBlockedResults(t, !1),
        _.Z.updateSearchResultsQuery(t, n, r, i),
        _.Z.addSearchHistoryItem(t, n);
}
function I(e) {
    var t;
    let { searchContext: n, selectedPageIndex: r, queryString: i } = e,
        a = (0, c.Tm)(n),
        o = null != (t = p.Z.getSearchMode(a)) ? t : m.o;
    l.Z.fetchTabMessages({
        searchContext: n,
        searchTabs: [h.sR.MESSAGES],
        searchQueryString: i,
        searchMode: o,
        getId: () => a,
        getLimit: () => g.vpv,
        onFetchStart: (e) => {
            let { searchQueryString: t, searchQuery: i } = e;
            v({
                searchContext: n,
                searchQueryString: t,
                searchQuery: i,
                offset: r * g.vpv,
            });
        },
        pagination: { offset: r * g.vpv },
        trackExactTotalHits: !0,
    });
}
function T(e) {
    var t;
    let { searchContext: n, searchQuery: r, queryString: i, searchEverywhere: a, offset: o } = e,
        s = (0, c.Tm)(n),
        u = null != (t = p.Z.getSearchMode(s)) ? t : m.o,
        d = O(b({}, r, (0, c.zH)(u)), { offset: o });
    v({
        searchContext: n,
        searchQueryString: i,
        searchQuery: d,
        offset: o,
    }),
        l.Z.fetchMessages({
            searchContext: n,
            query: d,
            searchEverywhere: a,
        });
}
function S(e) {
    let t = (0, c.Tm)(e),
        n = p.Z.getEditorState(t);
    return null != n ? o.Sq(n) : null;
}
function A(e, t) {
    var n;
    let r = (0, c.Tm)(e),
        a = null != (n = p.Z.getEditorState(r)) ? n : o.nR(s.Jl(f.ZP)),
        l = o.c2(t, a);
    l = o.Hl(l, 512);
    let u = (0, c.kG)(t).filter((e) => e.type !== i.ZP.NON_TOKEN_TYPE);
    (l = o.lv(u, l, f.ZP)), (l = o.iK(0 + t.length, l)), _.Z.updateSearchEditorState(e, l);
}
function C(e, t) {
    let n = S(e);
    if (null == n) return;
    let r = n.endsWith(" ") ? n + t : n + " " + t;
    A(e, r);
    let i = (0, c.kG)(r),
        a = (0, c.$G)(i);
    e.type === g.aib.DMS
        ? I({
              searchContext: e,
              selectedPageIndex: 0,
              queryString: r,
          })
        : T({
              searchContext: e,
              queryString: r,
              searchQuery: a,
              offset: 0,
          });
}
function N(e, t) {
    let n = (0, c.kG)(t),
        r = [];
    n.forEach((t) => {
        let n = t.type === g.dCx.FILTER_IN || t.type === g.dCx.ANSWER_IN;
        ((0, c.R6)(e) || !n) && r.push(t);
    });
    let i = "";
    return (
        r.forEach((e) => {
            i += e.getFullMatch();
        }),
        i
    );
}
function R(e, t, n) {
    let r = (0, c.Tm)(e),
        i = p.Z.getEditorState(r);
    if (null == i) return;
    let a = N(t, o.Sq(i));
    A(t, (a = a.trim()));
    let s = p.Z.getSearchMode(r);
    _.Z.updateSearchMode(t, null != s ? s : m.o), l.Z.clearSearchMessages(r), _.Z.clearSearchEditorState(e), n(a);
}
let P = {
    fetchCrossDMMessages: I,
    cleanUpSearchState: function (e) {
        let t = (0, c.Tm)(e);
        _.Z.clearSearchEditorState(e), l.Z.clearSearchMessages(t), u.Z.cleanUp(t), d.Z.cleanUp(t);
    },
    fetchMessages: T,
    setSearchInputText: A,
    appendToSearchInputText: C,
    getSearchInputText: S,
    ensureSearchInputDecorators: function (e) {
        let t,
            n = (0, c.Tm)(e),
            i = p.Z.getEditorState(n),
            a = null == i ? void 0 : i.getCurrentContent(),
            l = null == i ? void 0 : i.getSelection();
        null != a && null != l
            ? ((t = o.l8(s.Jl(f.ZP), a)), (t = r.EditorState.forceSelection(t, l)))
            : (t = o.nR(s.Jl(f.ZP))),
            _.Z.updateSearchEditorState(e, t);
    },
    setSearchQuery: function (e) {
        let { query: t, performSearch: n, replace: r, resultsState: i } = e,
            { mode: o, cursorScope: s } = i,
            l = 0;
        null != o.token
            ? (l = o.token.start)
            : (null == s ? void 0 : s.currentToken) != null && (l = s.currentToken.end);
        let c = null != o.token ? o.token.end : l;
        a.S.dispatch(g.CkL.SET_SEARCH_QUERY, {
            query: t,
            anchor: l,
            focus: c,
            performSearch: n,
            replace: r,
        });
    },
    transitionQueryStateToSearchContext: R,
    removeCrossDMSpecificSearchTokens: N,
};
