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
    _ = n(607802),
    p = n(187462),
    h = n(971128),
    m = n(532496),
    g = n(532428),
    E = n(991896),
    b = n(817190),
    y = n(315322),
    O = n(723642),
    v = n(125085),
    I = n(981631);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e) {
    let t = (0, _.Tm)(e);
    E.Z.clearSearchEditorState(e), f.Z.clearSearchMessages(t), p.Z.cleanUp(t), m.Z.cleanUp(t);
}
function R(e) {
    let { searchContext: t, searchQueryString: n, searchQuery: r, offset: i } = e,
        a = (0, _.Tm)(t);
    f.Z.clearSearchMessages(a),
        E.Z.setShowNoResultsAlt(t),
        E.Z.setShowBlockedResults(t, !1),
        E.Z.updateSearchResultsQuery(t, n, r, i),
        E.Z.addSearchHistoryItem(t, n);
}
function P(e) {
    var t;
    let { searchContext: n, searchQueryString: r, searchEverywhere: i, offset: a } = e,
        o = (0, _.Tm)(n),
        s = null != (t = b.Z.getSearchMode(o)) ? t : v.o,
        l = { offset: a };
    n.type === I.aib.DMS
        ? f.Z.fetchTabMessages({
              searchContext: n,
              searchTabs: [O.sR.MESSAGES],
              searchQueryString: r,
              searchMode: s,
              getId: () => o,
              getLimit: () => I.vpv,
              pagination: l,
              trackExactTotalHits: !0,
              onFetchStart: (e) => {
                  let { searchQueryString: t, searchQuery: r } = e;
                  R({
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
                  R({
                      searchContext: n,
                      searchQueryString: t,
                      searchQuery: r,
                      offset: a,
                  });
              },
          });
}
function D(e) {
    let t = (0, _.Tm)(e),
        n = b.Z.getEditorState(t);
    return null != n ? u.Sq(n) : null;
}
function w(e, t) {
    var n;
    let r = (0, _.Tm)(e),
        i = null != (n = b.Z.getEditorState(r)) ? n : u.nR(d.Jl(g.ZP)),
        a = u.c2(t, i);
    a = u.Hl(a, 512);
    let s = (0, _.kG)(t).filter((e) => e.type !== o.ZP.NON_TOKEN_TYPE);
    (a = u.lv(s, a, g.ZP)), (a = u.iK(0 + t.length, a)), E.Z.updateSearchEditorState(e, a);
}
function x(e, t) {
    let n = D(e);
    if (null == n) return;
    let r = n.endsWith(" ") ? n + t : n + " " + t;
    w(e, r),
        P({
            searchContext: e,
            searchQueryString: r,
            offset: 0,
        });
}
function L(e, t, n) {
    let r = (0, _.Tm)(e),
        i = b.Z.getEditorState(r);
    if (null == i) return;
    let a = u.Sq(i),
        o = t.type === I.aib.CHANNEL ? (0, _.EX)(a) : a;
    w(t, (o = o.trim()));
    let l = b.Z.getSearchMode(r);
    E.Z.updateSearchMode(t, null != l ? l : v.o), h.Z.transitionSessionAnalytics(e, t);
    let c = (0, _.kG)(o),
        d = (0, _.$G)(c);
    h.Z.refreshSearchQueryAnalyticsId(t),
        (0, y.tI)({
            searchContext: t,
            query: d,
            queryString: o,
        }),
        P({
            searchContext: t,
            searchQueryString: o,
            offset: 0,
        });
    let p = (0, _.Tm)(t);
    s.Z.setSelectedSearchContext(p), E.Z.clearSearchEditorState(e), f.Z.clearSearchMessages(r), null == n || n();
}
function M() {
    b.Z.getSearchStateIds().forEach((e) => {
        let t = l.Z.getChannel(e);
        null != t &&
            t.isPrivate() &&
            N({
                type: I.aib.CHANNEL,
                channelId: t.id,
            });
    });
}
let k = {
    cleanUpSearchState: N,
    fetchMessages: P,
    setSearchInputText: w,
    appendToSearchInputText: x,
    getSearchInputText: D,
    ensureSearchInputDecorators: function (e) {
        let t,
            n = (0, _.Tm)(e),
            r = b.Z.getEditorState(n),
            a = null == r ? void 0 : r.getCurrentContent(),
            o = null == r ? void 0 : r.getSelection();
        null != a && null != o
            ? ((t = u.l8(d.Jl(g.ZP), a)), (t = i.EditorState.forceSelection(t, o)))
            : (t = u.nR(d.Jl(g.ZP))),
            E.Z.updateSearchEditorState(e, t);
    },
    setSearchQuery: function (e) {
        let { query: t, performSearch: n, replace: r, resultsState: i } = e,
            { mode: a, cursorScope: o } = i,
            s = 0;
        null != a.token
            ? (s = a.token.start)
            : (null == o ? void 0 : o.currentToken) != null && (s = o.currentToken.end);
        let l = null != a.token ? a.token.end : s;
        c.S.dispatch(I.CkL.SET_SEARCH_QUERY, {
            query: t,
            anchor: s,
            focus: l,
            performSearch: n,
            replace: r,
        });
    },
    transitionStateToSearchContext: L,
    cleanUpPrivateChannelSearchState: M,
    openSearchFiltersModal: function (e) {
        (0, a.ZD)(
            async () => {
                let { default: t } = await Promise.all([n.e("30474"), n.e("37979")]).then(n.bind(n, 238088));
                return (n) => (0, r.jsx)(t, C(S({}, n), { searchContext: e }));
            },
            { modalKey: v.L },
        );
    },
};
