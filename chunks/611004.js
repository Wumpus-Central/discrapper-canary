n.d(t, { Z: () => k }), n(704826), n(35282), n(781311);
var r = n(54381),
    i = n(923010),
    a = n(952265),
    o = n(349033),
    s = n(6025),
    l = n(592125),
    c = n(585483),
    u = n(72006),
    d = n(181389),
    f = n(748610),
    p = n(607802),
    _ = n(187462),
    m = n(971128),
    h = n(532496),
    g = n(532428),
    E = n(991896),
    b = n(817190),
    y = n(315322),
    O = n(723642),
    v = n(125085),
    S = n(981631);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e) {
    let t = (0, p.Tm)(e);
    E.Z.clearSearchEditorState(e), f.Z.clearSearchMessages(t), _.Z.cleanUp(t), h.Z.cleanUp(t);
}
function P(e) {
    let { searchContext: t, searchQueryString: n, searchQuery: r, offset: i } = e,
        a = (0, p.Tm)(t);
    f.Z.clearSearchMessages(a),
        E.Z.setShowNoResultsAlt(t),
        E.Z.setShowBlockedResults(t, !1),
        E.Z.updateSearchResultsQuery(t, n, r, i),
        E.Z.addSearchHistoryItem(t, n);
}
function R(e) {
    var t;
    let { searchContext: n, searchQueryString: r, searchEverywhere: i, offset: a } = e,
        o = (0, p.Tm)(n),
        s = null != (t = b.Z.getSearchMode(o)) ? t : v.o,
        l = { offset: a };
    n.type === S.aib.DMS
        ? f.Z.fetchTabMessages({
              searchContext: n,
              searchTabs: [O.sR.MESSAGES],
              searchQueryString: r,
              searchMode: s,
              getId: () => o,
              getLimit: () => S.vpv,
              pagination: l,
              trackExactTotalHits: !0,
              onFetchStart: (e) => {
                  let { searchQueryString: t, searchQuery: r } = e;
                  P({
                      searchContext: n,
                      searchQueryString: t,
                      searchQuery: r,
                      offset: a,
                  });
              },
          })
        : f.Z.fetchMessages({
              searchContext: n,
              searchQueryString: r,
              pagination: l,
              searchMode: s,
              searchEverywhere: i,
              onFetchStart: (e) => {
                  let { searchQueryString: t, searchQuery: r } = e;
                  P({
                      searchContext: n,
                      searchQueryString: t,
                      searchQuery: r,
                      offset: a,
                  });
              },
          });
}
function D(e) {
    let t = (0, p.Tm)(e),
        n = b.Z.getEditorState(t);
    return null != n ? u.Sq(n) : null;
}
function w(e, t) {
    var n;
    let r = (0, p.Tm)(e),
        i = null != (n = b.Z.getEditorState(r)) ? n : u.nR(d.Jl(g.ZP)),
        a = u.c2(t, i);
    a = u.Hl(a, 512);
    let s = (0, p.kG)(t).filter((e) => e.type !== o.ZP.NON_TOKEN_TYPE);
    (a = u.lv(s, a, g.ZP)), (a = u.iK(0 + t.length, a)), E.Z.updateSearchEditorState(e, a);
}
function x(e, t) {
    let n = D(e);
    if (null == n) return;
    let r = n.endsWith(" ") ? n + t : n + " " + t;
    w(e, r),
        R({
            searchContext: e,
            searchQueryString: r,
            offset: 0,
        });
}
function L(e) {
    c.S.dispatch(S.CkL.SET_SEARCH_QUERY, e);
}
function j(e, t, n) {
    let r = (0, p.Tm)(e),
        i = b.Z.getEditorState(r);
    if (null == i) return;
    let a = u.Sq(i),
        o = t.type === S.aib.CHANNEL ? (0, p.EX)(a) : a;
    w(t, (o = o.trim()));
    let l = b.Z.getSearchMode(r);
    E.Z.updateSearchMode(t, null != l ? l : v.o), m.Z.transitionSessionAnalytics(e, t);
    let c = (0, p.kG)(o),
        d = (0, p.$G)(c);
    m.Z.refreshSearchQueryAnalyticsId(t),
        (0, y.tI)({
            searchContext: t,
            query: d,
            queryString: o,
            searchQuerySource: O.w7.SEARCH_XDM_SETTINGS,
        }),
        R({
            searchContext: t,
            searchQueryString: o,
            offset: 0,
        });
    let _ = (0, p.Tm)(t);
    s.Z.setSelectedSearchContext(_), E.Z.clearSearchEditorState(e), f.Z.clearSearchMessages(r), null == n || n();
}
function M() {
    b.Z.getSearchStateIds().forEach((e) => {
        let t = l.Z.getChannel(e);
        null != t &&
            t.isPrivate() &&
            N({
                type: S.aib.CHANNEL,
                channelId: t.id,
            });
    });
}
let k = {
    cleanUpSearchState: N,
    fetchMessages: R,
    setSearchInputText: w,
    appendToSearchInputText: x,
    getSearchInputText: D,
    ensureSearchInputDecorators: function (e) {
        let t,
            n = (0, p.Tm)(e),
            r = b.Z.getEditorState(n),
            a = null == r ? void 0 : r.getCurrentContent(),
            o = null == r ? void 0 : r.getSelection();
        null != a && null != o
            ? ((t = u.l8(d.Jl(g.ZP), a)), (t = i.EditorState.forceSelection(t, o)))
            : (t = u.nR(d.Jl(g.ZP))),
            E.Z.updateSearchEditorState(e, t);
    },
    setSearchQuery: function (e) {
        let { query: t, performSearch: n, replace: r, resultsState: i, searchQuerySource: a } = e,
            { mode: o, cursorScope: s } = i,
            l = 0;
        null != o.token
            ? (l = o.token.start)
            : (null == s ? void 0 : s.currentToken) != null && (l = s.currentToken.end);
        let c = null != o.token ? o.token.end : l;
        L({
            query: t,
            anchor: l,
            focus: c,
            performSearch: n,
            replace: r,
            searchQuerySource: a,
        });
    },
    dispatchSetSearchQuery: L,
    transitionStateToSearchContext: j,
    cleanUpPrivateChannelSearchState: M,
    openSearchFiltersModal: function (e) {
        (0, y.aR)({ searchContext: e }),
            (0, a.openModalLazy)(
                async () => {
                    let { default: t } = await n.e("37979").then(n.bind(n, 238088));
                    return (n) => (0, r.jsx)(t, A(T({}, n), { searchContext: e }));
                },
                { modalKey: v.L },
            );
    },
};
