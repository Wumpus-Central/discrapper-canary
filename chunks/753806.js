var r = s(477900),
    n = s(192308),
    a = s(221355),
    i = s(624018),
    c = s(138298),
    l = s(734057),
    u = s(188567),
    _ = s(256796),
    h = s(822382),
    d = s(23667),
    o = s(956467),
    S = s(617713),
    A = s(616252),
    E = s(65600),
    g = s(145331),
    p = s(768570),
    y = s(921242),
    R = s(652215);
function T(e) {
    let t = (0, h.bS)(e);
    (A.A.clearSearchQueryText(e), _.A.clearSearchMessages(t), d.A.cleanUp(t), o.A.cleanUp(t));
}
function f(e) {
    let { searchContext: t, searchQueryString: s, searchQuery: r, offset: n, includeSmartSearch: a } = e,
        i = (0, h.bS)(t);
    (_.A.clearSearchMessages(i),
        A.A.setShowNoResultsAlt(t),
        A.A.setShowBlockedResults(t, !1),
        A.A.updateSearchResultsQuery(t, s, r, n, a),
        A.A.addSearchHistoryItem(t, s));
}
function I(e) {
    let { searchContext: t, searchQueryString: s, searchEverywhere: r, offset: n, includeSmartSearch: c = !1 } = e,
        l = (0, h.bS)(t),
        u = E.A.getSearchMode(l) ?? y.z,
        d = { offset: n };
    (t.type === R.I4_.DMS
        ? _.A.fetchTabMessages({
              searchContext: t,
              searchTabs: [p.$H.MESSAGES],
              searchQueryString: s,
              searchMode: u,
              getId: () => l,
              getLimit: () => 25,
              pagination: d,
              trackExactTotalHits: !0,
              onFetchStart: (e) => {
                  let { searchQueryString: s, searchQuery: r } = e;
                  f({ searchContext: t, searchQueryString: s, searchQuery: r, offset: n, includeSmartSearch: c });
              },
          })
        : _.A.fetchMessages({
              searchContext: t,
              searchQueryString: s,
              pagination: d,
              searchMode: u,
              searchEverywhere: r,
              searchAnalyticsIds: (0, h.VI)(t, S.A),
              onFetchStart: (e) => {
                  let { searchQueryString: s, searchQuery: r } = e;
                  f({ searchContext: t, searchQueryString: s, searchQuery: r, offset: n, includeSmartSearch: c });
              },
          }),
        c &&
            null != (0, i.W)(t, s) &&
            a.$({ searchContext: t, searchQueryString: s, SearchSessionAnalyticsManager: S.A }));
}
function w(e) {
    let t = (0, h.bS)(e);
    return E.A.getQueryText(t) ?? null;
}
function m(e, t) {
    A.A.updateSearchQueryText(e, t.slice(0, 512));
}
function C(e) {
    u._.dispatch(R.jej.SET_SEARCH_QUERY, e);
}
s.d(
    t,
    {},
    {
        A: {
            cleanUpSearchState: T,
            fetchMessages: I,
            setSearchInputText: m,
            appendToSearchInputText: function (e, t) {
                let s = w(e);
                null == s ||
                    C({
                        query: s.endsWith(" ") ? s + t : s + " " + t,
                        replace: !0,
                        performSearch: !0,
                        searchQuerySource: p.Q_.SEARCH_RESULTS_HINT,
                    });
            },
            getSearchInputText: w,
            setSearchQuery: function (e) {
                let { query: t, performSearch: s, replace: r, resultsState: n, searchQuerySource: a } = e,
                    { mode: i, cursorScope: c } = n,
                    l = 0;
                null != i.token ? (l = i.token.start) : c?.currentToken != null && (l = c.currentToken.end);
                let u = null != i.token ? i.token.end : l;
                C({ query: t, anchor: l, focus: u, performSearch: s, replace: r, searchQuerySource: a });
            },
            dispatchSetSearchQuery: C,
            transitionStateToSearchContext: function (e, t, s) {
                let r = (0, h.bS)(e),
                    n = E.A.getQueryText(r);
                if (null == n) return;
                let a = t.type === R.I4_.CHANNEL ? (0, h.EH)(n) : n;
                m(t, (a = a.trim()));
                let i = E.A.getSearchMode(r);
                (A.A.updateSearchMode(t, i ?? y.z), S.A.transferSession(e, t));
                let l = (0, h._o)(a),
                    u = (0, h.Zf)(l);
                (S.A.refreshQueryId(t),
                    (0, g.fd)({
                        searchContext: t,
                        query: u,
                        queryString: a,
                        searchQuerySource: p.Q_.SEARCH_XDM_SETTINGS,
                    }),
                    I({ searchContext: t, searchQueryString: a, offset: 0 }));
                let d = (0, h.bS)(t);
                (c.A.setSelectedSearchContext(d), A.A.clearSearchQueryText(e), _.A.clearSearchMessages(r), s?.());
            },
            cleanUpPrivateChannelSearchState: function () {
                E.A.getSearchStateIds().forEach((e) => {
                    let t = l.A.getChannel(e);
                    null != t && t.isPrivate() && T({ type: R.I4_.CHANNEL, channelId: t.id });
                });
            },
            openSearchFiltersModal: function (e) {
                ((0, g.TJ)({ searchContext: e }),
                    (0, n.mM)(
                        async () => {
                            let { default: t } = await Promise.all([
                                s.e(855151),
                                s.e(67316),
                                s.e(966016),
                                s.e(671367),
                                s.e(79171),
                                s.e(147230),
                            ]).then(s.bind(s, 561965));
                            return (s) => (0, r.jsx)(t, { ...s, searchContext: e });
                        },
                        { modalKey: y.b },
                    ));
            },
        },
    },
);
