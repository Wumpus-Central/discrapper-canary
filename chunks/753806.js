s.d(t, { A: () => C });
var r = s(477900),
    a = s(192308),
    n = s(138298),
    i = s(734057),
    _ = s(625494),
    c = s(256796),
    l = s(822382),
    h = s(23667),
    d = s(956467),
    u = s(443390),
    S = s(616252),
    o = s(65600),
    E = s(145331),
    A = s(768570),
    y = s(921242),
    p = s(652215);
function R(e) {
    let t = (0, l.bS)(e);
    (S.A.clearSearchQueryText(e), c.A.clearSearchMessages(t), h.A.cleanUp(t), d.A.cleanUp(t));
}
function g(e) {
    let { searchContext: t, searchQueryString: s, searchQuery: r, offset: a } = e,
        n = (0, l.bS)(t);
    (c.A.clearSearchMessages(n),
        S.A.setShowNoResultsAlt(t),
        S.A.setShowBlockedResults(t, !1),
        S.A.updateSearchResultsQuery(t, s, r, a),
        S.A.addSearchHistoryItem(t, s));
}
function T(e) {
    let { searchContext: t, searchQueryString: s, searchEverywhere: r, offset: a } = e,
        n = (0, l.bS)(t),
        i = o.A.getSearchMode(n) ?? y.z,
        _ = { offset: a };
    t.type === p.I4_.DMS
        ? c.A.fetchTabMessages({
              searchContext: t,
              searchTabs: [A.$H.MESSAGES],
              searchQueryString: s,
              searchMode: i,
              getId: () => n,
              getLimit: () => p.T_y,
              pagination: _,
              trackExactTotalHits: !0,
              onFetchStart: (e) => {
                  let { searchQueryString: s, searchQuery: r } = e;
                  g({ searchContext: t, searchQueryString: s, searchQuery: r, offset: a });
              },
          })
        : c.A.fetchMessages({
              searchContext: t,
              searchQueryString: s,
              pagination: _,
              searchMode: i,
              searchEverywhere: r,
              searchAnalyticsIds: (0, l.VI)(t, u.A),
              onFetchStart: (e) => {
                  let { searchQueryString: s, searchQuery: r } = e;
                  g({ searchContext: t, searchQueryString: s, searchQuery: r, offset: a });
              },
          });
}
function f(e) {
    let t = (0, l.bS)(e);
    return o.A.getQueryText(t) ?? null;
}
function I(e, t) {
    S.A.updateSearchQueryText(e, t.slice(0, 512));
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
        let { query: t, performSearch: s, replace: r, resultsState: a, searchQuerySource: n } = e,
            { mode: i, cursorScope: _ } = a,
            c = 0;
        null != i.token ? (c = i.token.start) : _?.currentToken != null && (c = _.currentToken.end);
        let l = null != i.token ? i.token.end : c;
        H({ query: t, anchor: c, focus: l, performSearch: s, replace: r, searchQuerySource: n });
    },
    dispatchSetSearchQuery: H,
    transitionStateToSearchContext: function (e, t, s) {
        let r = (0, l.bS)(e),
            a = o.A.getQueryText(r);
        if (null == a) return;
        let i = t.type === p.I4_.CHANNEL ? (0, l.EH)(a) : a;
        I(t, (i = i.trim()));
        let _ = o.A.getSearchMode(r);
        (S.A.updateSearchMode(t, _ ?? y.z), u.A.transferSession(e, t));
        let h = (0, l._o)(i),
            d = (0, l.Zf)(h);
        (u.A.refreshQueryId(t),
            (0, E.fd)({ searchContext: t, query: d, queryString: i, searchQuerySource: A.Q_.SEARCH_XDM_SETTINGS }),
            T({ searchContext: t, searchQueryString: i, offset: 0 }));
        let R = (0, l.bS)(t);
        (n.A.setSelectedSearchContext(R), S.A.clearSearchQueryText(e), c.A.clearSearchMessages(r), s?.());
    },
    cleanUpPrivateChannelSearchState: function () {
        o.A.getSearchStateIds().forEach((e) => {
            let t = i.A.getChannel(e);
            null != t && t.isPrivate() && R({ type: p.I4_.CHANNEL, channelId: t.id });
        });
    },
    openSearchFiltersModal: function (e) {
        ((0, E.TJ)({ searchContext: e }),
            (0, a.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        s.e("66554"),
                        s.e("67316"),
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
