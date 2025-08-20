n.d(t, { Z: () => v });
var r = n(349033),
    i = n(72006),
    a = n(748610),
    o = n(171900),
    s = n(607802),
    l = n(187462),
    c = n(532496),
    u = n(532428),
    d = n(817190),
    f = n(723642),
    _ = n(981631);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    let { searchContext: t, searchQueryString: n, searchQuery: r, offset: i } = e,
        o = (0, s.Tm)(t);
    a.Z.clearSearchMessages(o),
        a.Z.setShowNoResultsAlt(t),
        a.Z.setShowBlockedResults(t, !1),
        a.Z.updateSearchResultsQuery(t, n, r, i),
        a.Z.addWebSearchHistoryItem(t, n);
}
function b(e) {
    let { searchContext: t, selectedPageIndex: n, queryString: r, searchMode: i } = e,
        o = (0, s.Tm)(t);
    a.Z.fetchTabMessages({
        searchContext: t,
        searchTabs: [f.sR.MESSAGES],
        searchQueryString: r,
        searchMode: i,
        getId: () => o,
        getLimit: () => _.vpv,
        onFetchStart: (e) => {
            let { searchQueryString: r, searchQuery: i } = e;
            E({
                searchContext: t,
                searchQueryString: r,
                searchQuery: i,
                offset: n * _.vpv,
            });
        },
        pagination: { offset: n * _.vpv },
        trackExactTotalHits: !0,
    });
}
function y(e) {
    let { searchContext: t, searchQuery: n, queryString: r, searchEverywhere: i, offset: o, searchMode: l } = e,
        c = g(h({}, n, null != l ? (0, s.zH)(l) : {}), { offset: o });
    E({
        searchContext: t,
        searchQueryString: r,
        searchQuery: c,
        offset: o,
    }),
        a.Z.fetchMessages({
            searchContext: t,
            query: c,
            searchEverywhere: i,
        });
}
function O(e, t) {
    let n = (0, s.Tm)(e),
        l = d.Z.getEditorState(n),
        c = d.Z.getSearchResultsQueryString(n),
        f = o.Z.getIsFetching(n);
    if (null == l || null == c || f) return;
    let p = c.endsWith(" ") ? c + t : c + " " + t,
        h = i.c2(p, l);
    h = i.Hl(h, 512);
    let m = (0, s.kG)(p),
        g = m.filter((e) => e.type !== r.ZP.NON_TOKEN_TYPE);
    (h = i.lv(g, h, u.ZP)), (h = i.iK(0 + p.length, h)), a.Z.setSearchState(e, h);
    let E = (0, s.$G)(m);
    e.type === _.aib.DMS
        ? b({
              searchContext: e,
              selectedPageIndex: 0,
              queryString: p,
          })
        : y({
              searchContext: e,
              queryString: p,
              searchQuery: E,
              offset: 0,
          });
}
let v = {
    fetchCrossDMMessages: b,
    cleanUpSearchState: function (e) {
        let t = (0, s.Tm)(e);
        a.Z.clearSearchState(e), a.Z.clearSearchMessages(t), l.Z.cleanUp(t), c.Z.cleanUp(t);
    },
    fetchMessages: y,
    appendTextToSearchInput: O,
    getSearchInputText: function (e) {
        let t = (0, s.Tm)(e),
            n = null != t ? d.Z.getEditorState(t) : null;
        return null != n ? i.Sq(n) : null;
    },
};
