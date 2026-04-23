r.d(t, { A: () => F });
var n = r(627968),
    s = r(271830),
    l = r(192308),
    a = r(988665),
    i = r(138298),
    o = r(734057),
    u = r(203982),
    c = r(504531),
    h = r(614690),
    d = r(256796),
    _ = r(822382),
    E = r(23667),
    S = r(956467),
    f = r(408730),
    p = r(771650),
    g = r(616252),
    A = r(65600),
    y = r(145331),
    R = r(768570),
    m = r(921242),
    I = r(652215);
function T(e) {
    let t = (0, _.bS)(e);
    g.A.clearSearchEditorState(e), d.A.clearSearchMessages(t), E.A.cleanUp(t), S.A.cleanUp(t);
}
function L(e) {
    let { searchContext: t, searchQueryString: r, searchQuery: n, offset: s } = e,
        l = (0, _.bS)(t);
    d.A.clearSearchMessages(l),
        g.A.setShowNoResultsAlt(t),
        g.A.setShowBlockedResults(t, !1),
        g.A.updateSearchResultsQuery(t, r, n, s),
        g.A.addSearchHistoryItem(t, r);
}
function x(e) {
    let { searchContext: t, searchQueryString: r, searchEverywhere: n, offset: s } = e,
        l = (0, _.bS)(t),
        a = A.A.getSearchMode(l) ?? m.z,
        i = { offset: s };
    t.type === I.I4_.DMS
        ? d.A.fetchTabMessages({
              searchContext: t,
              searchTabs: [R.$H.MESSAGES],
              searchQueryString: r,
              searchMode: a,
              getId: () => l,
              getLimit: () => I.T_y,
              pagination: i,
              trackExactTotalHits: !0,
              onFetchStart: (e) => {
                  let { searchQueryString: r, searchQuery: n } = e;
                  L({ searchContext: t, searchQueryString: r, searchQuery: n, offset: s });
              },
          })
        : d.A.fetchMessages({
              searchContext: t,
              searchQueryString: r,
              pagination: i,
              searchMode: a,
              searchEverywhere: n,
              onFetchStart: (e) => {
                  let { searchQueryString: r, searchQuery: n } = e;
                  L({ searchContext: t, searchQueryString: r, searchQuery: n, offset: s });
              },
          });
}
function b(e) {
    let t = (0, _.bS)(e),
        r = A.A.getEditorState(t);
    return null != r ? c.pe(r) : null;
}
function N(e, t) {
    let r = (0, _.bS)(e),
        n = A.A.getEditorState(r) ?? c.e_(h.ys(p.Ay)),
        s = c.t7(t, n);
    s = c.a4(s, 512);
    let l = (0, _._o)(t).filter((e) => e.type !== a.Ay.NON_TOKEN_TYPE);
    (s = c.uD(l, s, p.Ay)), (s = c.UO(0 + t.length, s)), g.A.updateSearchEditorState(e, s);
}
function C(e) {
    u._.dispatch(I.jej.SET_SEARCH_QUERY, e);
}
let F = {
    cleanUpSearchState: T,
    fetchMessages: x,
    setSearchInputText: N,
    appendToSearchInputText: function (e, t) {
        let r = b(e);
        if (null == r) return;
        let n = r.endsWith(" ") ? r + t : r + " " + t;
        N(e, n), x({ searchContext: e, searchQueryString: n, offset: 0 });
    },
    getSearchInputText: b,
    ensureSearchInputDecorators: function (e) {
        let t,
            r = (0, _.bS)(e),
            n = A.A.getEditorState(r),
            l = n?.getCurrentContent(),
            a = n?.getSelection();
        null != l && null != a
            ? ((t = c.Rg(h.ys(p.Ay), l)), (t = s.EditorState.forceSelection(t, a)))
            : (t = c.e_(h.ys(p.Ay))),
            g.A.updateSearchEditorState(e, t);
    },
    setSearchQuery: function (e) {
        let { query: t, performSearch: r, replace: n, resultsState: s, searchQuerySource: l } = e,
            { mode: a, cursorScope: i } = s,
            o = 0;
        null != a.token ? (o = a.token.start) : i?.currentToken != null && (o = i.currentToken.end);
        let u = null != a.token ? a.token.end : o;
        C({ query: t, anchor: o, focus: u, performSearch: r, replace: n, searchQuerySource: l });
    },
    dispatchSetSearchQuery: C,
    transitionStateToSearchContext: function (e, t, r) {
        let n = (0, _.bS)(e),
            s = A.A.getEditorState(n);
        if (null == s) return;
        let l = c.pe(s),
            a = t.type === I.I4_.CHANNEL ? (0, _.EH)(l) : l;
        N(t, (a = a.trim()));
        let o = A.A.getSearchMode(n);
        g.A.updateSearchMode(t, o ?? m.z), f.A.transferSession(e, t);
        let u = (0, _._o)(a),
            h = (0, _.Zf)(u);
        f.A.refreshQueryId(t),
            (0, y.fd)({ searchContext: t, query: h, queryString: a, searchQuerySource: R.Q_.SEARCH_XDM_SETTINGS }),
            x({ searchContext: t, searchQueryString: a, offset: 0 });
        let E = (0, _.bS)(t);
        i.A.setSelectedSearchContext(E), g.A.clearSearchEditorState(e), d.A.clearSearchMessages(n), r?.();
    },
    cleanUpPrivateChannelSearchState: function () {
        A.A.getSearchStateIds().forEach((e) => {
            let t = o.A.getChannel(e);
            null != t && t.isPrivate() && T({ type: I.I4_.CHANNEL, channelId: t.id });
        });
    },
    openSearchFiltersModal: function (e) {
        (0, y.TJ)({ searchContext: e }),
            (0, l.openModalLazy)(
                async () => {
                    let { default: t } = await r.e("47230").then(r.bind(r, 561965));
                    return (r) => (0, n.jsx)(t, { ...r, searchContext: e });
                },
                { modalKey: m.b },
            );
    },
};
