n.d(t, { Z: () => S });
var r = n(349033),
    s = n(72006),
    l = n(748610),
    a = n(171900),
    i = n(607802),
    o = n(187462),
    c = n(532496),
    u = n(532428),
    d = n(817190),
    h = n(723642),
    p = n(981631);
function f(e) {
    let { searchContext: t, searchQueryString: n, searchQuery: r, offset: s } = e,
        a = (0, i.Tm)(t);
    l.Z.clearSearchMessages(a),
        l.Z.setShowNoResultsAlt(t),
        l.Z.setShowBlockedResults(t, !1),
        l.Z.updateSearchResultsQuery(t, n, r, s),
        l.Z.addWebSearchHistoryItem(t, n);
}
function _(e) {
    let { searchContext: t, selectedPageIndex: n, queryString: r, searchMode: s } = e,
        a = (0, i.Tm)(t);
    l.Z.fetchTabMessages({
        searchContext: t,
        searchTabs: [h.sR.MESSAGES],
        searchQueryString: r,
        searchMode: s,
        getId: () => a,
        getLimit: () => p.vpv,
        onFetchStart: (e) => {
            let { searchQueryString: r, searchQuery: s } = e;
            f({
                searchContext: t,
                searchQueryString: r,
                searchQuery: s,
                offset: n * p.vpv,
            });
        },
        pagination: { offset: n * p.vpv },
        trackExactTotalHits: !0,
    });
}
function g(e) {
    var t, n;
    let { searchContext: r, searchQuery: s, queryString: a, searchEverywhere: o, offset: c, searchMode: u } = e,
        d =
            ((t = (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, s, null != u ? (0, i.zH)(u) : {})),
            (n = n = { offset: c }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t);
    f({
        searchContext: r,
        searchQueryString: a,
        searchQuery: d,
        offset: c,
    }),
        l.Z.fetchMessages({
            searchContext: r,
            query: d,
            searchEverywhere: o,
        });
}
let S = {
    fetchCrossDMMessages: _,
    cleanUpSearchState: function (e) {
        let t = (0, i.Tm)(e);
        l.Z.clearSearchState(e), l.Z.clearSearchMessages(t), o.Z.cleanUp(t), c.Z.cleanUp(t);
    },
    fetchMessages: g,
    appendTextToSearchInput: function (e, t) {
        let n = (0, i.Tm)(e),
            o = d.Z.getEditorState(n),
            c = d.Z.getSearchResultsQueryString(n),
            h = a.Z.getIsFetching(n);
        if (null == o || null == c || h) return;
        let f = c.endsWith(" ") ? c + t : c + " " + t,
            S = s.c2(f, o);
        S = s.Hl(S, 512);
        let m = (0, i.kG)(f),
            y = m.filter((e) => e.type !== r.ZP.NON_TOKEN_TYPE);
        (S = s.lv(y, S, u.ZP)), (S = s.iK(0 + f.length, S)), l.Z.setSearchState(e, S);
        let b = (0, i.$G)(m);
        e.type === p.aib.DMS
            ? _({
                  searchContext: e,
                  selectedPageIndex: 0,
                  queryString: f,
              })
            : g({
                  searchContext: e,
                  queryString: f,
                  searchQuery: b,
                  offset: 0,
              });
    },
    getSearchInputText: function (e) {
        let t = (0, i.Tm)(e),
            n = null != t ? d.Z.getEditorState(t) : null;
        return null != n ? s.Sq(n) : null;
    },
};
