(r.d(t, { Z: () => h }), r(35282));
var n = r(603263),
    s = r(977885),
    l = r(961216),
    a = r(416638),
    i = r(187462),
    o = r(981631),
    c = r(862825);
function u(e) {
    let { searchId: t, searchQueryString: r, searchQuery: l, offset: a } = e;
    (s.Z.clearSearchMessages(t), n.Gn(t), n.QY(t, !1), n.Vs(t, r, l, a), n.uJ(t, r));
}
let h = {
    fetchCrossDMMessages: function (e) {
        let { searchContext: t, selectedPageIndex: r, queryString: n, searchMode: l } = e,
            i = (0, a.WJ)(t);
        s.Z.fetchMessages({
            searchContext: t,
            searchTabs: [c.sR.MESSAGES],
            searchQueryString: n,
            searchMode: l,
            getId: () => i,
            getLimit: () => o.vpv,
            onFetchStart: (e) => {
                let { searchQueryString: t, searchQuery: n } = e;
                u({
                    searchId: i,
                    searchQueryString: t,
                    searchQuery: n,
                    offset: r * o.vpv
                });
            },
            pagination: { offset: r * o.vpv },
            trackExactTotalHits: !0
        });
    },
    cleanUpSearchState: function (e) {
        (n.qt(e), s.Z.clearSearchMessages(e), i.Z.cleanUp(e), l.Z.cleanUp(e));
    },
    fetchMessages: function (e) {
        var t, r;
        let { searchId: s, searchQuery: l, queryString: a, searchEverywhere: i, offset: o, searchMode: c } = e,
            h =
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                })
                            )),
                            n.forEach(function (t) {
                                var n;
                                ((n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = n));
                            }));
                    }
                    return e;
                })({}, l, null != c ? n.zH(c) : {})),
                (r = r = { offset: o }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                t);
        (u({
            searchId: s,
            searchQueryString: a,
            searchQuery: h,
            offset: o
        }),
            n.yC({
                searchId: s,
                query: h,
                searchEverywhere: i
            }));
    }
};
