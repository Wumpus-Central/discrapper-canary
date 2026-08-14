s.d(t, { A: () => L });
var r = s(477900),
    n = s(192308),
    i = s(138298),
    a = s(734057),
    _ = s(625494),
    c = s(256796),
    u = s(822382),
    l = s(23667),
    h = s(956467),
    o = s(408730),
    d = s(616252),
    S = s(65600),
    A = s(145331),
    E = s(768570),
    y = s(921242),
    p = s(652215);
function g(e) {
    let t = (0, u.bS)(e);
    d.A.clearSearchQueryText(e), c.A.clearSearchMessages(t), l.A.cleanUp(t), h.A.cleanUp(t);
}
function R(e) {
    let { searchContext: t, searchQueryString: s, searchQuery: r, offset: n } = e,
        i = (0, u.bS)(t);
    c.A.clearSearchMessages(i),
        d.A.setShowNoResultsAlt(t),
        d.A.setShowBlockedResults(t, !1),
        d.A.updateSearchResultsQuery(t, s, r, n),
        d.A.addSearchHistoryItem(t, s);
}
function T(e) {
    let { searchContext: t, searchQueryString: s, searchEverywhere: r, offset: n } = e,
        i = (0, u.bS)(t),
        a = S.A.getSearchMode(i) ?? y.z,
        _ = { offset: n };
    t.type === p.I4_.DMS
        ? c.A.fetchTabMessages({
              searchContext: t,
              searchTabs: [E.$H.MESSAGES],
              searchQueryString: s,
              searchMode: a,
              getId: () => i,
              getLimit: () => p.T_y,
              pagination: _,
              trackExactTotalHits: !0,
              onFetchStart: (e) => {
                  let { searchQueryString: s, searchQuery: r } = e;
                  R({ searchContext: t, searchQueryString: s, searchQuery: r, offset: n });
              },
          })
        : c.A.fetchMessages({
              searchContext: t,
              searchQueryString: s,
              pagination: _,
              searchMode: a,
              searchEverywhere: r,
              onFetchStart: (e) => {
                  let { searchQueryString: s, searchQuery: r } = e;
                  R({ searchContext: t, searchQueryString: s, searchQuery: r, offset: n });
              },
          });
}
function f(e) {
    let t = (0, u.bS)(e);
    return S.A.getQueryText(t) ?? null;
}
function I(e, t) {
    d.A.updateSearchQueryText(e, t.slice(0, 512));
}
function H(e) {
    _._.dispatch(p.jej.SET_SEARCH_QUERY, e);
}
let L = {
    cleanUpSearchState: g,
    fetchMessages: T,
    setSearchInputText: I,
    appendToSearchInputText: function (e, t) {
        let s = f(e);
        if (null == s) return;
        let r = s.endsWith(" ") ? s + t : s + " " + t;
        I(e, r), T({ searchContext: e, searchQueryString: r, offset: 0 });
    },
    getSearchInputText: f,
    setSearchQuery: function (e) {
        let { query: t, performSearch: s, replace: r, resultsState: n, searchQuerySource: i } = e,
            { mode: a, cursorScope: _ } = n,
            c = 0;
        null != a.token ? (c = a.token.start) : _?.currentToken != null && (c = _.currentToken.end);
        let u = null != a.token ? a.token.end : c;
        H({ query: t, anchor: c, focus: u, performSearch: s, replace: r, searchQuerySource: i });
    },
    dispatchSetSearchQuery: H,
    transitionStateToSearchContext: function (e, t, s) {
        let r = (0, u.bS)(e),
            n = S.A.getQueryText(r);
        if (null == n) return;
        let a = t.type === p.I4_.CHANNEL ? (0, u.EH)(n) : n;
        I(t, (a = a.trim()));
        let _ = S.A.getSearchMode(r);
        d.A.updateSearchMode(t, _ ?? y.z), o.A.transferSession(e, t);
        let l = (0, u._o)(a),
            h = (0, u.Zf)(l);
        o.A.refreshQueryId(t),
            (0, A.fd)({ searchContext: t, query: h, queryString: a, searchQuerySource: E.Q_.SEARCH_XDM_SETTINGS }),
            T({ searchContext: t, searchQueryString: a, offset: 0 });
        let g = (0, u.bS)(t);
        i.A.setSelectedSearchContext(g), d.A.clearSearchQueryText(e), c.A.clearSearchMessages(r), s?.();
    },
    cleanUpPrivateChannelSearchState: function () {
        S.A.getSearchStateIds().forEach((e) => {
            let t = a.A.getChannel(e);
            null != t && t.isPrivate() && g({ type: p.I4_.CHANNEL, channelId: t.id });
        });
    },
    openSearchFiltersModal: function (e) {
        (0, A.TJ)({ searchContext: e }),
            (0, n.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        s.e("187524"),
                        s.e("865482"),
                        s.e("636893"),
                        s.e("693691"),
                        s.e("966016"),
                        s.e("781202"),
                        s.e("421225"),
                        s.e("671367"),
                        s.e("79171"),
                        s.e("798567"),
                        s.e("147230"),
                    ]).then(s.bind(s, 561965));
                    return (s) => (0, r.jsx)(t, { ...s, searchContext: e });
                },
                { modalKey: y.b },
            );
    },
};
