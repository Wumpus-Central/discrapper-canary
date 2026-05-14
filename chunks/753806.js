s.d(t, { A: () => N });
var n = s(627968),
    r = s(271830),
    i = s(192308),
    a = s(988665),
    c = s(138298),
    o = s(734057),
    l = s(625494),
    u = s(504531),
    _ = s(77277),
    h = s(256796),
    d = s(822382),
    S = s(23667),
    E = s(956467),
    A = s(443390),
    f = s(304578),
    g = s(616252),
    y = s(65600),
    p = s(145331),
    R = s(768570),
    T = s(921242),
    I = s(652215);
function C(e) {
    let t = (0, d.bS)(e);
    g.A.clearSearchEditorState(e), h.A.clearSearchMessages(t), S.A.cleanUp(t), E.A.cleanUp(t);
}
function H(e) {
    let { searchContext: t, searchQueryString: s, searchQuery: n, offset: r } = e,
        i = (0, d.bS)(t);
    h.A.clearSearchMessages(i),
        g.A.setShowNoResultsAlt(t),
        g.A.setShowBlockedResults(t, !1),
        g.A.updateSearchResultsQuery(t, s, n, r),
        g.A.addSearchHistoryItem(t, s);
}
function L(e) {
    let { searchContext: t, searchQueryString: s, searchEverywhere: n, offset: r } = e,
        i = (0, d.bS)(t),
        a = y.A.getSearchMode(i) ?? T.z,
        c = { offset: r };
    t.type === I.I4_.DMS
        ? h.A.fetchTabMessages({
              searchContext: t,
              searchTabs: [R.$H.MESSAGES],
              searchQueryString: s,
              searchMode: a,
              getId: () => i,
              getLimit: () => I.T_y,
              pagination: c,
              trackExactTotalHits: !0,
              onFetchStart: (e) => {
                  let { searchQueryString: s, searchQuery: n } = e;
                  H({ searchContext: t, searchQueryString: s, searchQuery: n, offset: r });
              },
          })
        : h.A.fetchMessages({
              searchContext: t,
              searchQueryString: s,
              pagination: c,
              searchMode: a,
              searchEverywhere: n,
              onFetchStart: (e) => {
                  let { searchQueryString: s, searchQuery: n } = e;
                  H({ searchContext: t, searchQueryString: s, searchQuery: n, offset: r });
              },
          });
}
function M(e) {
    let t = (0, d.bS)(e),
        s = y.A.getEditorState(t);
    return null != s ? u.pe(s) : null;
}
function O(e, t) {
    let s = (0, d.bS)(e),
        n = y.A.getEditorState(s) ?? u.e_(_.ys(f.Ay)),
        r = u.t7(t, n);
    r = u.a4(r, 512);
    let i = (0, d._o)(t).filter((e) => e.type !== a.Ay.NON_TOKEN_TYPE);
    (r = u.uD(i, r, f.Ay)), (r = u.UO(0 + t.length, r)), g.A.updateSearchEditorState(e, r);
}
function w(e) {
    l._.dispatch(I.jej.SET_SEARCH_QUERY, e);
}
let N = {
    cleanUpSearchState: C,
    fetchMessages: L,
    setSearchInputText: O,
    appendToSearchInputText: function (e, t) {
        let s = M(e);
        if (null == s) return;
        let n = s.endsWith(" ") ? s + t : s + " " + t;
        O(e, n), L({ searchContext: e, searchQueryString: n, offset: 0 });
    },
    getSearchInputText: M,
    ensureSearchInputDecorators: function (e) {
        let t,
            s = (0, d.bS)(e),
            n = y.A.getEditorState(s),
            i = n?.getCurrentContent(),
            a = n?.getSelection();
        null != i && null != a
            ? ((t = u.Rg(_.ys(f.Ay), i)), (t = r.EditorState.forceSelection(t, a)))
            : (t = u.e_(_.ys(f.Ay))),
            g.A.updateSearchEditorState(e, t);
    },
    setSearchQuery: function (e) {
        let { query: t, performSearch: s, replace: n, resultsState: r, searchQuerySource: i } = e,
            { mode: a, cursorScope: c } = r,
            o = 0;
        null != a.token ? (o = a.token.start) : c?.currentToken != null && (o = c.currentToken.end);
        let l = null != a.token ? a.token.end : o;
        w({ query: t, anchor: o, focus: l, performSearch: s, replace: n, searchQuerySource: i });
    },
    dispatchSetSearchQuery: w,
    transitionStateToSearchContext: function (e, t, s) {
        let n = (0, d.bS)(e),
            r = y.A.getEditorState(n);
        if (null == r) return;
        let i = u.pe(r),
            a = t.type === I.I4_.CHANNEL ? (0, d.EH)(i) : i;
        O(t, (a = a.trim()));
        let o = y.A.getSearchMode(n);
        g.A.updateSearchMode(t, o ?? T.z), A.A.transferSession(e, t);
        let l = (0, d._o)(a),
            _ = (0, d.Zf)(l);
        A.A.refreshQueryId(t),
            (0, p.fd)({ searchContext: t, query: _, queryString: a, searchQuerySource: R.Q_.SEARCH_XDM_SETTINGS }),
            L({ searchContext: t, searchQueryString: a, offset: 0 });
        let S = (0, d.bS)(t);
        c.A.setSelectedSearchContext(S), g.A.clearSearchEditorState(e), h.A.clearSearchMessages(n), s?.();
    },
    cleanUpPrivateChannelSearchState: function () {
        y.A.getSearchStateIds().forEach((e) => {
            let t = o.A.getChannel(e);
            null != t && t.isPrivate() && C({ type: I.I4_.CHANNEL, channelId: t.id });
        });
    },
    openSearchFiltersModal: function (e) {
        (0, p.TJ)({ searchContext: e }),
            (0, i.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        s.e("58171"),
                        s.e("79937"),
                        s.e("11394"),
                        s.e("68883"),
                        s.e("16767"),
                        s.e("81202"),
                        s.e("66016"),
                        s.e("88990"),
                        s.e("21225"),
                        s.e("12549"),
                        s.e("83752"),
                        s.e("47230"),
                    ]).then(s.bind(s, 561965));
                    return (s) => (0, n.jsx)(t, { ...s, searchContext: e });
                },
                { modalKey: T.b },
            );
    },
};
