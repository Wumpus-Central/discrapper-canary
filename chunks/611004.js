n.d(t, { Z: () => L }), n(704826), n(35282), n(539854), n(781311);
var r = n(258863),
    i = n(349033),
    a = n(592125),
    o = n(585483),
    s = n(72006),
    l = n(181389),
    c = n(748610),
    u = n(607802),
    d = n(187462),
    f = n(532496),
    _ = n(532428),
    p = n(991896),
    h = n(817190),
    m = n(723642),
    g = n(125085),
    E = n(981631);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    let t = (0, u.Tm)(e);
    p.Z.clearSearchEditorState(e), c.Z.clearSearchMessages(t), d.Z.cleanUp(t), f.Z.cleanUp(t);
}
function T(e) {
    let { searchContext: t, searchQueryString: n, searchQuery: r, offset: i } = e,
        a = (0, u.Tm)(t);
    c.Z.clearSearchMessages(a),
        p.Z.setShowNoResultsAlt(t),
        p.Z.setShowBlockedResults(t, !1),
        p.Z.updateSearchResultsQuery(t, n, r, i),
        p.Z.addSearchHistoryItem(t, n);
}
function S(e) {
    var t;
    let { searchContext: n, selectedPageIndex: r, queryString: i } = e,
        a = (0, u.Tm)(n),
        o = null != (t = h.Z.getSearchMode(a)) ? t : g.o;
    c.Z.fetchTabMessages({
        searchContext: n,
        searchTabs: [m.sR.MESSAGES],
        searchQueryString: i,
        searchMode: o,
        getId: () => a,
        getLimit: () => E.vpv,
        onFetchStart: (e) => {
            let { searchQueryString: t, searchQuery: i } = e;
            T({
                searchContext: n,
                searchQueryString: t,
                searchQuery: i,
                offset: r * E.vpv,
            });
        },
        pagination: { offset: r * E.vpv },
        trackExactTotalHits: !0,
    });
}
function A(e) {
    var t;
    let { searchContext: n, searchQuery: r, queryString: i, searchEverywhere: a, offset: o } = e,
        s = (0, u.Tm)(n),
        l = null != (t = h.Z.getSearchMode(s)) ? t : g.o,
        d = v(y({}, r, (0, u.zH)(l)), { offset: o });
    T({
        searchContext: n,
        searchQueryString: i,
        searchQuery: d,
        offset: o,
    }),
        c.Z.fetchMessages({
            searchContext: n,
            query: d,
            searchEverywhere: a,
        });
}
function C(e) {
    let t = (0, u.Tm)(e),
        n = h.Z.getEditorState(t);
    return null != n ? s.Sq(n) : null;
}
function N(e, t) {
    var n;
    let r = (0, u.Tm)(e),
        a = null != (n = h.Z.getEditorState(r)) ? n : s.nR(l.Jl(_.ZP)),
        o = s.c2(t, a);
    o = s.Hl(o, 512);
    let c = (0, u.kG)(t).filter((e) => e.type !== i.ZP.NON_TOKEN_TYPE);
    (o = s.lv(c, o, _.ZP)), (o = s.iK(0 + t.length, o)), p.Z.updateSearchEditorState(e, o);
}
function R(e, t) {
    let n = C(e);
    if (null == n) return;
    let r = n.endsWith(" ") ? n + t : n + " " + t;
    N(e, r);
    let i = (0, u.kG)(r),
        a = (0, u.$G)(i);
    e.type === E.aib.DMS
        ? S({
              searchContext: e,
              selectedPageIndex: 0,
              queryString: r,
          })
        : A({
              searchContext: e,
              queryString: r,
              searchQuery: a,
              offset: 0,
          });
}
function P(e, t) {
    let n = (0, u.kG)(t),
        r = [];
    n.forEach((t) => {
        let n = t.type === E.dCx.FILTER_IN || t.type === E.dCx.ANSWER_IN;
        ((0, u.R6)(e) || !n) && r.push(t);
    });
    let i = "";
    return (
        r.forEach((e) => {
            i += e.getFullMatch();
        }),
        i
    );
}
function D(e, t, n) {
    let r = (0, u.Tm)(e),
        i = h.Z.getEditorState(r);
    if (null == i) return;
    let a = P(t, s.Sq(i));
    N(t, (a = a.trim()));
    let o = h.Z.getSearchMode(r);
    p.Z.updateSearchMode(t, null != o ? o : g.o), c.Z.clearSearchMessages(r), p.Z.clearSearchEditorState(e), n(a);
}
function w() {
    h.Z.getSearchStateIds().forEach((e) => {
        let t = a.Z.getChannel(e);
        null != t &&
            t.isPrivate() &&
            I({
                type: E.aib.CHANNEL,
                channelId: t.id,
            });
    });
}
let L = {
    fetchCrossDMMessages: S,
    cleanUpSearchState: I,
    fetchMessages: A,
    setSearchInputText: N,
    appendToSearchInputText: R,
    getSearchInputText: C,
    ensureSearchInputDecorators: function (e) {
        let t,
            n = (0, u.Tm)(e),
            i = h.Z.getEditorState(n),
            a = null == i ? void 0 : i.getCurrentContent(),
            o = null == i ? void 0 : i.getSelection();
        null != a && null != o
            ? ((t = s.l8(l.Jl(_.ZP), a)), (t = r.EditorState.forceSelection(t, o)))
            : (t = s.nR(l.Jl(_.ZP))),
            p.Z.updateSearchEditorState(e, t);
    },
    setSearchQuery: function (e) {
        let { query: t, performSearch: n, replace: r, resultsState: i } = e,
            { mode: a, cursorScope: s } = i,
            l = 0;
        null != a.token
            ? (l = a.token.start)
            : (null == s ? void 0 : s.currentToken) != null && (l = s.currentToken.end);
        let c = null != a.token ? a.token.end : l;
        o.S.dispatch(E.CkL.SET_SEARCH_QUERY, {
            query: t,
            anchor: l,
            focus: c,
            performSearch: n,
            replace: r,
        });
    },
    transitionQueryStateToSearchContext: D,
    cleanUpPrivateChannelSearchState: w,
};
