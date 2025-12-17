n.d(t, {
    A: () => v,
    S: () => C,
}),
    n(388685),
    n(781311),
    n(642613),
    n(49124);
var r = n(473749),
    l = n(663042),
    a = n(690775),
    s = n(497598),
    o = n(792091),
    i = n(653654),
    c = n(149705);
function u(e) {
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
function d(e, t) {
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
function f(e, t) {
    let n = new Set(e);
    return n.has(t) ? n.delete(t) : n.add(t), n;
}
let g = {
        sortType: o.E.RECENCY,
        sortDirection: s.F.DESC,
    },
    b = {
        sortType: o.E.POPULARITY,
        sortDirection: s.F.DESC,
    },
    p = {
        sortType: o.E.RELEVANCE,
        sortDirection: s.F.DESC,
    },
    m = {
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        sort: g,
        searchQuery: "",
        queryPageSize: 0,
        queryPageOffset: 0,
        isFetchingResults: !1,
        userHasSelectedSort: !1,
        currentTab: null,
    },
    h = (e) => {
        let { colorFilters: t, themeFilters: n, searchQuery: r, itemTypeFilters: l } = e;
        return t.size > 0 || n.size > 0 || "" !== r.trim() ? p : l.size > 0 ? b : g;
    },
    C = (0, l.U)(
        (0, a.XR)((e, t) =>
            d(u({}, m), {
                hasDefaultFilters: () =>
                    !t().hasFilters() && t().sort.sortType === g.sortType && t().sort.sortDirection === g.sortDirection,
                hasFilters: () => {
                    let { itemTypeFilters: e, colorFilters: n, themeFilters: r, orbEligible: l, searchQuery: a } = t();
                    return [e, n, r].some((e) => e.size > 0) || l || "" !== a;
                },
                hasRelevanceFilters: () => {
                    let { colorFilters: e, themeFilters: n, searchQuery: r } = t();
                    return e.size > 0 || n.size > 0 || "" !== r.trim();
                },
                onToggleItemType: (t) => {
                    e((e) => {
                        let n = f(e.itemTypeFilters, t),
                            r = d(u({}, e), {
                                itemTypeFilters: n,
                                queryPageOffset: 0,
                            });
                        return e.userHasSelectedSort || (r.sort = h(r)), r;
                    });
                },
                onToggleColor: (t) => {
                    e((e) => {
                        let n = f(e.colorFilters, t),
                            r = d(u({}, e), {
                                colorFilters: n,
                                queryPageOffset: 0,
                            });
                        return e.userHasSelectedSort || (r.sort = h(r)), r;
                    });
                },
                onToggleTheme: (t) => {
                    e((e) => {
                        let n = f(e.themeFilters, t),
                            r = d(u({}, e), {
                                themeFilters: n,
                                queryPageOffset: 0,
                            });
                        return e.userHasSelectedSort || (r.sort = h(r)), r;
                    });
                },
                onToggleOrbEligible: () => {
                    e((e) => {
                        let t = d(u({}, e), {
                            orbEligible: !e.orbEligible,
                            queryPageOffset: 0,
                        });
                        return e.userHasSelectedSort || (t.sort = h(t)), t;
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
                    e((e) => u({}, e, t));
                },
                onSetSearchQuery: (t) => {
                    e((e) => {
                        let n = d(u({}, e), {
                            searchQuery: t,
                            queryPageOffset: 0,
                        });
                        return (
                            "" !== t.trim()
                                ? ((n.sort = p), (n.userHasSelectedSort = !1))
                                : e.userHasSelectedSort || (n.sort = h(n)),
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
                            r = d(u({}, e), {
                                colorFilters: new Set(),
                                themeFilters: new Set(),
                                orbEligible: !1,
                                itemTypeFilters: n,
                                queryPageOffset: 0,
                            });
                        return e.userHasSelectedSort || (r.sort = h(r)), r;
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
                        d(u({}, m), {
                            queryPageSize: n,
                            queryPageOffset: r,
                        }),
                    );
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
            sort: a,
            searchQuery: s,
            queryPageSize: o,
            queryPageOffset: i,
        } = e;
        return {
            item_types: Array.from(t),
            colors: Array.from(n),
            themes: Array.from(r),
            orbs_eligible: !!l || void 0,
            offset: i,
            limit: o,
            sort_type: a.sortType,
            sort_direction: a.sortDirection,
            search: "" !== s ? s : void 0,
        };
    },
    v = () => {
        let { onSetResponse: e, setSearchError: t, setIsFetchingResults: n } = (0, c.a)();
        r.useEffect(() => {
            let r = (r) => {
                let l = async () => {
                    n(!0);
                    try {
                        let t = await (0, i.y)(r);
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
                0 !== r.limit && l();
            };
            r(E(C.getState()));
            let l = C.subscribe(E, r, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
                a = C.subscribe(
                    (e) => e.hasFilters(),
                    (e, t) => {
                        if (!e && t) {
                            let e = C.getState();
                            e.userHasSelectedSort || C.setState({ sort: h(e) });
                        }
                    },
                );
            return () => {
                l(), a();
            };
        }, [e, t, n]);
    };
