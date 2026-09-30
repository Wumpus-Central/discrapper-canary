s.d(t, { A: () => C });
var r = s(477900),
    n = s(192308),
    i = s(138298),
    a = s(734057),
    _ = s(625494),
    c = s(256796),
    l = s(822382),
    h = s(23667),
    u = s(956467),
    S = s(443390),
    o = s(616252),
    d = s(65600),
    E = s(145331),
    A = s(768570),
    y = s(921242),
    p = s(652215);
function R(e) {
    let t = (0, l.bS)(e);
    (o.A.clearSearchQueryText(e), c.A.clearSearchMessages(t), h.A.cleanUp(t), u.A.cleanUp(t));
}
function g(e) {
    let { searchContext: t, searchQueryString: s, searchQuery: r, offset: n } = e,
        i = (0, l.bS)(t);
    (c.A.clearSearchMessages(i),
        o.A.setShowNoResultsAlt(t),
        o.A.setShowBlockedResults(t, !1),
        o.A.updateSearchResultsQuery(t, s, r, n),
        o.A.addSearchHistoryItem(t, s));
}
function T(e) {
    let { searchContext: t, searchQueryString: s, searchEverywhere: r, offset: n } = e,
        i = (0, l.bS)(t),
        a = d.A.getSearchMode(i) ?? y.z,
        _ = { offset: n };
    t.type === p.I4_.DMS
        ? c.A.fetchTabMessages({
              searchContext: t,
              searchTabs: [A.$H.MESSAGES],
              searchQueryString: s,
              searchMode: a,
              getId: () => i,
              getLimit: () => p.T_y,
              pagination: _,
              trackExactTotalHits: !0,
              onFetchStart: (e) => {
                  let { searchQueryString: s, searchQuery: r } = e;
                  g({ searchContext: t, searchQueryString: s, searchQuery: r, offset: n });
              },
          })
        : c.A.fetchMessages({
              searchContext: t,
              searchQueryString: s,
              pagination: _,
              searchMode: a,
              searchEverywhere: r,
              searchAnalyticsIds: (0, l.VI)(t, S.A),
              onFetchStart: (e) => {
                  let { searchQueryString: s, searchQuery: r } = e;
                  g({ searchContext: t, searchQueryString: s, searchQuery: r, offset: n });
              },
          });
}
function f(e) {
    let t = (0, l.bS)(e);
    return d.A.getQueryText(t) ?? null;
}
function I(e, t) {
    o.A.updateSearchQueryText(e, t.slice(0, 512));
}
function H(e) {
    _._.dispatch(p.jej.SET_SEARCH_QUERY, e);
}
let C = {
    cleanUpSearchState: R,
    fetchMessages: T,
    setSearchInputText: I,
    appendToSearchInputText: function (e, t) {
        let s = f(e);
        null == s ||
            H({
                query: s.endsWith(" ") ? s + t : s + " " + t,
                replace: !0,
                performSearch: !0,
                searchQuerySource: A.Q_.SEARCH_RESULTS_HINT,
            });
    },
    getSearchInputText: f,
    setSearchQuery: function (e) {
        let { query: t, performSearch: s, replace: r, resultsState: n, searchQuerySource: i } = e,
            { mode: a, cursorScope: _ } = n,
            c = 0;
        null != a.token ? (c = a.token.start) : _?.currentToken != null && (c = _.currentToken.end);
        let l = null != a.token ? a.token.end : c;
        H({ query: t, anchor: c, focus: l, performSearch: s, replace: r, searchQuerySource: i });
    },
    dispatchSetSearchQuery: H,
    transitionStateToSearchContext: function (e, t, s) {
        let r = (0, l.bS)(e),
            n = d.A.getQueryText(r);
        if (null == n) return;
        let a = t.type === p.I4_.CHANNEL ? (0, l.EH)(n) : n;
        I(t, (a = a.trim()));
        let _ = d.A.getSearchMode(r);
        (o.A.updateSearchMode(t, _ ?? y.z), S.A.transferSession(e, t));
        let h = (0, l._o)(a),
            u = (0, l.Zf)(h);
        (S.A.refreshQueryId(t),
            (0, E.fd)({ searchContext: t, query: u, queryString: a, searchQuerySource: A.Q_.SEARCH_XDM_SETTINGS }),
            T({ searchContext: t, searchQueryString: a, offset: 0 }));
        let R = (0, l.bS)(t);
        (i.A.setSelectedSearchContext(R), o.A.clearSearchQueryText(e), c.A.clearSearchMessages(r), s?.());
    },
    cleanUpPrivateChannelSearchState: function () {
        d.A.getSearchStateIds().forEach((e) => {
            let t = a.A.getChannel(e);
            null != t && t.isPrivate() && R({ type: p.I4_.CHANNEL, channelId: t.id });
        });
    },
    openSearchFiltersModal: function (e) {
        ((0, E.TJ)({ searchContext: e }),
            (0, n.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        s.e("923972"),
                        s.e("966016"),
                        s.e("671367"),
                        s.e("79171"),
                        s.e("147230"),
                    ]).then(s.bind(s, 561965));
                    return (s) => (0, r.jsx)(t, { ...s, searchContext: e });
                },
                { modalKey: y.b },
            ));
    },
};
