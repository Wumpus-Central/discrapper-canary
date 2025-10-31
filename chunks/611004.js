n.d(t, { Z: () => C }), n(704826), n(35282), n(781311);
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
function b(e) {
    let t = (0, u.Tm)(e);
    p.Z.clearSearchEditorState(e), c.Z.clearSearchMessages(t), d.Z.cleanUp(t), f.Z.cleanUp(t);
}
function y(e) {
    let { searchContext: t, searchQueryString: n, searchQuery: r, offset: i } = e,
        a = (0, u.Tm)(t);
    c.Z.clearSearchMessages(a),
        p.Z.setShowNoResultsAlt(t),
        p.Z.setShowBlockedResults(t, !1),
        p.Z.updateSearchResultsQuery(t, n, r, i),
        p.Z.addSearchHistoryItem(t, n);
}
function O(e) {
    var t;
    let { searchContext: n, searchQueryString: r, searchEverywhere: i, offset: a } = e,
        o = (0, u.Tm)(n),
        s = null != (t = h.Z.getSearchMode(o)) ? t : g.o,
        l = { offset: a };
    n.type === E.aib.DMS
        ? c.Z.fetchTabMessages({
              searchContext: n,
              searchTabs: [m.sR.MESSAGES],
              searchQueryString: r,
              searchMode: s,
              getId: () => o,
              getLimit: () => E.vpv,
              pagination: l,
              trackExactTotalHits: !0,
              onFetchStart: (e) => {
                  let { searchQueryString: t, searchQuery: r } = e;
                  y({
                      searchContext: n,
                      searchQueryString: t,
                      searchQuery: r,
                      offset: a,
                  });
              },
          })
        : c.Z.fetchMessages({
              searchContext: n,
              searchQueryString: r,
              pagination: l,
              searchMode: s,
              searchEverywhere: i,
              onFetchStart: (e) => {
                  let { searchQueryString: t, searchQuery: r } = e;
                  y({
                      searchContext: n,
                      searchQueryString: t,
                      searchQuery: r,
                      offset: a,
                  });
              },
          });
}
function v(e) {
    let t = (0, u.Tm)(e),
        n = h.Z.getEditorState(t);
    return null != n ? s.Sq(n) : null;
}
function I(e, t) {
    var n;
    let r = (0, u.Tm)(e),
        a = null != (n = h.Z.getEditorState(r)) ? n : s.nR(l.Jl(_.ZP)),
        o = s.c2(t, a);
    o = s.Hl(o, 512);
    let c = (0, u.kG)(t).filter((e) => e.type !== i.ZP.NON_TOKEN_TYPE);
    (o = s.lv(c, o, _.ZP)), (o = s.iK(0 + t.length, o)), p.Z.updateSearchEditorState(e, o);
}
function T(e, t) {
    let n = v(e);
    if (null == n) return;
    let r = n.endsWith(" ") ? n + t : n + " " + t;
    I(e, r),
        O({
            searchContext: e,
            searchQueryString: r,
            offset: 0,
        });
}
function S(e, t, n) {
    let r = (0, u.Tm)(e),
        i = h.Z.getEditorState(r);
    if (null == i) return;
    let a = s.Sq(i),
        o = t.type === E.aib.CHANNEL ? (0, u.EX)(a) : a;
    I(t, (o = o.trim()));
    let l = h.Z.getSearchMode(r);
    p.Z.updateSearchMode(t, null != l ? l : g.o), c.Z.clearSearchMessages(r), p.Z.clearSearchEditorState(e), n(o);
}
function A() {
    h.Z.getSearchStateIds().forEach((e) => {
        let t = a.Z.getChannel(e);
        null != t &&
            t.isPrivate() &&
            b({
                type: E.aib.CHANNEL,
                channelId: t.id,
            });
    });
}
let C = {
    cleanUpSearchState: b,
    fetchMessages: O,
    setSearchInputText: I,
    appendToSearchInputText: T,
    getSearchInputText: v,
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
    transitionQueryStateToSearchContext: S,
    cleanUpPrivateChannelSearchState: A,
};
