n.d(t, {
    A: () => S,
    S: () => b,
}),
    n(388685),
    n(781311),
    n(642613),
    n(49124);
var r = n(647438),
    l = n(191336),
    s = n(180059),
    a = n(497598),
    i = n(792091),
    o = n(653654),
    c = n(870289),
    u = n(149705);
function d(e) {
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
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    let n = new Set(e);
    return n.has(t) ? n.delete(t) : n.add(t), n;
}
let f = {
        sortType: i.E.RECENCY,
        sortDirection: a.F.DESC,
    },
    C = {
        sortType: i.E.POPULARITY,
        sortDirection: a.F.DESC,
    },
    h = {
        sortType: i.E.RELEVANCE,
        sortDirection: a.F.DESC,
    },
    _ = {
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        sort: f,
        searchQuery: "",
        queryPageSize: 0,
        queryPageOffset: 0,
        isFetchingResults: !1,
        fullScreenOpen: !1,
        userHasSelectedSort: !1,
        currentTab: null,
    },
    m = (e) => {
        let { colorFilters: t, themeFilters: n, searchQuery: r, itemTypeFilters: l } = e;
        return t.size > 0 || n.size > 0 || "" !== r.trim() ? h : l.size > 0 ? C : f;
    },
    b = (0, l.U)(
        (0, s.XR)((e, t) =>
            g(d({}, _), {
                hasDefaultFilters: () =>
                    !t().hasFilters() && t().sort.sortType === f.sortType && t().sort.sortDirection === f.sortDirection,
                hasFilters: () => {
                    let { itemTypeFilters: e, colorFilters: n, themeFilters: r, orbEligible: l, searchQuery: s } = t();
                    return [e, n, r].some((e) => e.size > 0) || l || "" !== s;
                },
                hasRelevanceFilters: () => {
                    let { colorFilters: e, themeFilters: n, searchQuery: r } = t();
                    return e.size > 0 || n.size > 0 || "" !== r.trim();
                },
                onToggleItemType: (t) => {
                    e((e) => {
                        let n = p(e.itemTypeFilters, t),
                            r = g(d({}, e), {
                                itemTypeFilters: n,
                                queryPageOffset: 0,
                            });
                        return e.userHasSelectedSort || (r.sort = m(r)), r;
                    });
                },
                onToggleColor: (t) => {
                    e((e) => {
                        let n = p(e.colorFilters, t),
                            r = g(d({}, e), {
                                colorFilters: n,
                                queryPageOffset: 0,
                            });
                        return e.userHasSelectedSort || (r.sort = m(r)), r;
                    });
                },
                onToggleTheme: (t) => {
                    e((e) => {
                        let n = p(e.themeFilters, t),
                            r = g(d({}, e), {
                                themeFilters: n,
                                queryPageOffset: 0,
                            });
                        return e.userHasSelectedSort || (r.sort = m(r)), r;
                    });
                },
                onToggleOrbEligible: () => {
                    e((e) => {
                        let t = g(d({}, e), {
                            orbEligible: !e.orbEligible,
                            queryPageOffset: 0,
                        });
                        return e.userHasSelectedSort || (t.sort = m(t)), t;
                    });
                },
                onSetSort: (t) => {
                    e({
                        sort: t,
                        queryPageOffset: 0,
                        userHasSelectedSort: !0,
                    });
                },
                onSetResponse: (t) => {
                    e((e) => d({}, e, t));
                },
                onSetSearchQuery: (t) => {
                    e((e) => {
                        let n = g(d({}, e), {
                            searchQuery: t,
                            queryPageOffset: 0,
                        });
                        return (
                            "" !== t.trim()
                                ? ((n.sort = h), (n.userHasSelectedSort = !1))
                                : e.userHasSelectedSort || (n.sort = m(n)),
                            n
                        );
                    });
                },
                setQueryPageSize: (t) => {
                    e({ queryPageSize: t });
                },
                setQueryPageOffset: (t) => {
                    e({ queryPageOffset: t });
                },
                setItemTypeFilter: (t) => {
                    e((e) => {
                        let n = new Set([t]),
                            r = g(d({}, e), {
                                colorFilters: new Set(),
                                themeFilters: new Set(),
                                orbEligible: !1,
                                itemTypeFilters: n,
                                queryPageOffset: 0,
                            });
                        return e.userHasSelectedSort || (r.sort = m(r)), r;
                    });
                },
                clearFilters: () => {
                    e({
                        colorFilters: new Set(),
                        themeFilters: new Set(),
                        itemTypeFilters: new Set(),
                        orbEligible: !1,
                    });
                },
                reset: () => {
                    let { queryPageSize: n, queryPageOffset: r } = t();
                    e(
                        g(d({}, _), {
                            queryPageSize: n,
                            queryPageOffset: r,
                        }),
                    );
                },
                setFullScreenOpen: (t) => {
                    e({ fullScreenOpen: t });
                },
                setCurrentTab: (t) => {
                    e({ currentTab: t });
                },
            }),
        ),
    ),
    E = (e) => {
        let {
            itemTypeFilters: t,
            colorFilters: n,
            themeFilters: r,
            orbEligible: l,
            sort: s,
            searchQuery: a,
            queryPageSize: i,
            queryPageOffset: o,
        } = e;
        return {
            item_types: Array.from(t),
            colors: Array.from(n),
            themes: Array.from(r),
            orbs_eligible: !!l || void 0,
            offset: o,
            limit: i,
            sort_type: s.sortType,
            sort_direction: s.sortDirection,
            search: "" !== a ? a : void 0,
        };
    },
    S = () => {
        let { onSetResponse: e, setSearchError: t, setIsFetchingResults: n } = (0, u.a)(),
            l = (0, c.FF)("collectibles_shop_header_bar");
        r.useEffect(() => {
            let r = (r) => {
                let s = async () => {
                    n(!0);
                    try {
                        let t = await (0, o.y)(r);
                        e(
                            ((e) => {
                                let t = e.skus,
                                    n = e.pagination.total,
                                    r = e.pagination.has_more,
                                    l = e.pagination.offset;
                                return {
                                    skus: t,
                                    totalCount: n,
                                    hasMorePages: r,
                                    pageOffset: l,
                                    pageLimit: e.pagination.limit,
                                };
                            })(t),
                        );
                    } catch (e) {
                        var l;
                        t(null != (l = null == e ? void 0 : e.message) ? l : "Unknown error");
                    } finally {
                        n(!1);
                    }
                };
                l && 0 !== r.limit && s();
            };
            r(E(b.getState()));
            let s = b.subscribe(E, r, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
                a = b.subscribe(
                    (e) => e.hasFilters(),
                    (e, t) => {
                        if (!e && t) {
                            let e = b.getState();
                            e.userHasSelectedSort || b.setState({ sort: m(e) });
                        }
                    },
                );
            return () => {
                s(), a();
            };
        }, [e, t, n, l]);
    };
