var r = s(477900),
    a = s(192308),
    n = s(221355),
    i = s(624018),
    c = s(138298),
    l = s(734057),
    _ = s(188567),
    u = s(256796),
    d = s(822382),
    h = s(23667),
    o = s(956467),
    S = s(617713),
    A = s(616252),
    E = s(65600),
    g = s(145331),
    p = s(768570),
    y = s(921242),
    R = s(652215);
function T(e) {
    let t = (0, d.bS)(e);
    (A.A.clearSearchQueryText(e), u.A.clearSearchMessages(t), h.A.cleanUp(t), o.A.cleanUp(t));
}
function f(e) {
    let { searchContext: t, searchQueryString: s, searchQuery: r, offset: a, includeSmartSearch: n } = e,
        i = (0, d.bS)(t);
    (u.A.clearSearchMessages(i),
        A.A.setShowNoResultsAlt(t),
        A.A.setShowBlockedResults(t, !1),
        A.A.updateSearchResultsQuery(t, s, r, a, n),
        A.A.addSearchHistoryItem(t, s));
}
function I(e) {
    let { searchContext: t, searchQueryString: s, searchEverywhere: r, offset: a, includeSmartSearch: c = !1 } = e,
        l = (0, d.bS)(t),
        _ = E.A.getSearchMode(l) ?? y.z,
        h = { offset: a };
    (t.type === R.I4_.DMS
        ? u.A.fetchTabMessages({
              searchContext: t,
              searchTabs: [p.$H.MESSAGES],
              searchQueryString: s,
              searchMode: _,
              getId: () => l,
              getLimit: () => 25,
              pagination: h,
              trackExactTotalHits: !0,
              onFetchStart: (e) => {
                  let { searchQueryString: s, searchQuery: r } = e;
                  f({ searchContext: t, searchQueryString: s, searchQuery: r, offset: a, includeSmartSearch: c });
              },
          })
        : u.A.fetchMessages({
              searchContext: t,
              searchQueryString: s,
              pagination: h,
              searchMode: _,
              searchEverywhere: r,
              searchAnalyticsIds: (0, d.VI)(t, S.A),
              onFetchStart: (e) => {
                  let { searchQueryString: s, searchQuery: r } = e;
                  f({ searchContext: t, searchQueryString: s, searchQuery: r, offset: a, includeSmartSearch: c });
              },
          }),
        c &&
            null != (0, i.W)(t, s) &&
            n.$({
                searchContext: t,
                searchQueryString: s,
                SearchSessionAnalyticsManager: S.A,
                failImmediatelyWhenRateLimited: !0,
            }));
}
function w(e) {
    let t = (0, d.bS)(e);
    return E.A.getQueryText(t) ?? null;
}
function C(e, t) {
    A.A.updateSearchQueryText(e, t.slice(0, 512));
}
function m(e) {
    _._.dispatch(R.jej.SET_SEARCH_QUERY, e);
}
s.d(
    t,
    {},
    {
        A: {
            cleanUpSearchState: T,
            fetchMessages: I,
            setSearchInputText: C,
            appendToSearchInputText: function (e, t) {
                let s = w(e);
                null == s ||
                    m({
                        query: s.endsWith(" ") ? s + t : s + " " + t,
                        replace: !0,
                        performSearch: !0,
                        searchQuerySource: p.Q_.SEARCH_RESULTS_HINT,
                    });
            },
            getSearchInputText: w,
            setSearchQuery: function (e) {
                let { query: t, performSearch: s, replace: r, resultsState: a, searchQuerySource: n } = e,
                    { mode: i, cursorScope: c } = a,
                    l = 0;
                null != i.token ? (l = i.token.start) : c?.currentToken != null && (l = c.currentToken.end);
                let _ = null != i.token ? i.token.end : l;
                m({ query: t, anchor: l, focus: _, performSearch: s, replace: r, searchQuerySource: n });
            },
            dispatchSetSearchQuery: m,
            transitionStateToSearchContext: function (e, t, s) {
                let r = (0, d.bS)(e),
                    a = E.A.getQueryText(r);
                if (null == a) return;
                let n = t.type === R.I4_.CHANNEL ? (0, d.EH)(a) : a;
                C(t, (n = n.trim()));
                let i = E.A.getSearchMode(r);
                (A.A.updateSearchMode(t, i ?? y.z), S.A.transferSession(e, t));
                let l = (0, d._o)(n),
                    _ = (0, d.Zf)(l);
                (S.A.refreshQueryId(t),
                    (0, g.fd)({
                        searchContext: t,
                        query: _,
                        queryString: n,
                        searchQuerySource: p.Q_.SEARCH_XDM_SETTINGS,
                    }),
                    I({ searchContext: t, searchQueryString: n, offset: 0 }));
                let h = (0, d.bS)(t);
                (c.A.setSelectedSearchContext(h), A.A.clearSearchQueryText(e), u.A.clearSearchMessages(r), s?.());
            },
            cleanUpPrivateChannelSearchState: function () {
                E.A.getSearchStateIds().forEach((e) => {
                    let t = l.A.getChannel(e);
                    null != t && t.isPrivate() && T({ type: R.I4_.CHANNEL, channelId: t.id });
                });
            },
            openSearchFiltersModal: function (e) {
                ((0, g.TJ)({ searchContext: e }),
                    (0, a.mM)(
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
