n.d(t, { Z: () => x }), n(704826), n(35282), n(781311);
var r = n(951288),
    i = n(258863),
    a = n(952265),
    o = n(349033),
    s = n(592125),
    l = n(585483),
    c = n(72006),
    u = n(181389),
    d = n(748610),
    f = n(607802),
    _ = n(187462),
    p = n(532496),
    h = n(532428),
    m = n(991896),
    g = n(817190),
    E = n(723642),
    b = n(125085),
    y = n(981631);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let t = (0, f.Tm)(e);
    m.Z.clearSearchEditorState(e), d.Z.clearSearchMessages(t), _.Z.cleanUp(t), p.Z.cleanUp(t);
}
function A(e) {
    let { searchContext: t, searchQueryString: n, searchQuery: r, offset: i } = e,
        a = (0, f.Tm)(t);
    d.Z.clearSearchMessages(a),
        m.Z.setShowNoResultsAlt(t),
        m.Z.setShowBlockedResults(t, !1),
        m.Z.updateSearchResultsQuery(t, n, r, i),
        m.Z.addSearchHistoryItem(t, n);
}
function C(e) {
    var t;
    let { searchContext: n, searchQueryString: r, searchEverywhere: i, offset: a } = e,
        o = (0, f.Tm)(n),
        s = null != (t = g.Z.getSearchMode(o)) ? t : b.o,
        l = { offset: a };
    n.type === y.aib.DMS
        ? d.Z.fetchTabMessages({
              searchContext: n,
              searchTabs: [E.sR.MESSAGES],
              searchQueryString: r,
              searchMode: s,
              getId: () => o,
              getLimit: () => y.vpv,
              pagination: l,
              trackExactTotalHits: !0,
              onFetchStart: (e) => {
                  let { searchQueryString: t, searchQuery: r } = e;
                  A({
                      searchContext: n,
                      searchQueryString: t,
                      searchQuery: r,
                      offset: a,
                  });
              },
          })
        : d.Z.fetchMessages({
              searchContext: n,
              searchQueryString: r,
              pagination: l,
              searchMode: s,
              searchEverywhere: i,
              onFetchStart: (e) => {
                  let { searchQueryString: t, searchQuery: r } = e;
                  A({
                      searchContext: n,
                      searchQueryString: t,
                      searchQuery: r,
                      offset: a,
                  });
              },
          });
}
function N(e) {
    let t = (0, f.Tm)(e),
        n = g.Z.getEditorState(t);
    return null != n ? c.Sq(n) : null;
}
function R(e, t) {
    var n;
    let r = (0, f.Tm)(e),
        i = null != (n = g.Z.getEditorState(r)) ? n : c.nR(u.Jl(h.ZP)),
        a = c.c2(t, i);
    a = c.Hl(a, 512);
    let s = (0, f.kG)(t).filter((e) => e.type !== o.ZP.NON_TOKEN_TYPE);
    (a = c.lv(s, a, h.ZP)), (a = c.iK(0 + t.length, a)), m.Z.updateSearchEditorState(e, a);
}
function P(e, t) {
    let n = N(e);
    if (null == n) return;
    let r = n.endsWith(" ") ? n + t : n + " " + t;
    R(e, r),
        C({
            searchContext: e,
            searchQueryString: r,
            offset: 0,
        });
}
function D(e, t, n) {
    let r = (0, f.Tm)(e),
        i = g.Z.getEditorState(r);
    if (null == i) return;
    let a = c.Sq(i),
        o = t.type === y.aib.CHANNEL ? (0, f.EX)(a) : a;
    R(t, (o = o.trim()));
    let s = g.Z.getSearchMode(r);
    m.Z.updateSearchMode(t, null != s ? s : b.o), d.Z.clearSearchMessages(r), m.Z.clearSearchEditorState(e), n(o);
}
function w() {
    g.Z.getSearchStateIds().forEach((e) => {
        let t = s.Z.getChannel(e);
        null != t &&
            t.isPrivate() &&
            S({
                type: y.aib.CHANNEL,
                channelId: t.id,
            });
    });
}
let x = {
    cleanUpSearchState: S,
    fetchMessages: C,
    setSearchInputText: R,
    appendToSearchInputText: P,
    getSearchInputText: N,
    ensureSearchInputDecorators: function (e) {
        let t,
            n = (0, f.Tm)(e),
            r = g.Z.getEditorState(n),
            a = null == r ? void 0 : r.getCurrentContent(),
            o = null == r ? void 0 : r.getSelection();
        null != a && null != o
            ? ((t = c.l8(u.Jl(h.ZP), a)), (t = i.EditorState.forceSelection(t, o)))
            : (t = c.nR(u.Jl(h.ZP))),
            m.Z.updateSearchEditorState(e, t);
    },
    setSearchQuery: function (e) {
        let { query: t, performSearch: n, replace: r, resultsState: i } = e,
            { mode: a, cursorScope: o } = i,
            s = 0;
        null != a.token
            ? (s = a.token.start)
            : (null == o ? void 0 : o.currentToken) != null && (s = o.currentToken.end);
        let c = null != a.token ? a.token.end : s;
        l.S.dispatch(y.CkL.SET_SEARCH_QUERY, {
            query: t,
            anchor: s,
            focus: c,
            performSearch: n,
            replace: r,
        });
    },
    transitionQueryStateToSearchContext: D,
    cleanUpPrivateChannelSearchState: w,
    openSearchFiltersModal: function (e) {
        (0, a.ZD)(
            async () => {
                let { default: t } = await Promise.all([n.e("30474"), n.e("37979")]).then(n.bind(n, 238088));
                return (n) => (0, r.jsx)(t, T(v({}, n), { searchContext: e }));
            },
            { modalKey: b.L },
        );
    },
};
