n.d(t, {
    A: () => x,
    S: () => b,
}),
    n(388685),
    n(781311),
    n(642613),
    n(49124);
var r = n(473749),
    l = n(663042),
    i = n(690775),
    a = n(497598),
    s = n(792091),
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
function f(e, t) {
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
function g(e, t) {
    let n = new Set(e);
    return n.has(t) ? n.delete(t) : n.add(t), n;
}
let p = {
        sortType: s.E.RECENCY,
        sortDirection: a.F.DESC,
    },
    m = {
        sortType: s.E.POPULARITY,
        sortDirection: a.F.DESC,
    },
    h = {
        sortType: s.E.RELEVANCE,
        sortDirection: a.F.DESC,
    },
    C = {
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        sort: p,
        searchQuery: "",
        queryPageSize: 0,
        queryPageOffset: 0,
        isFetchingResults: !1,
        userHasSelectedSort: !1,
        currentTab: null,
    },
    _ = (e) => {
        let { colorFilters: t, themeFilters: n, searchQuery: r, itemTypeFilters: l } = e;
        return t.size > 0 || n.size > 0 || "" !== r.trim() ? h : l.size > 0 ? m : p;
    },
    b = (0, l.U)(
        (0, i.XR)((e, t) =>
            f(d({}, C), {
                hasDefaultFilters: () =>
                    !t().hasFilters() && t().sort.sortType === p.sortType && t().sort.sortDirection === p.sortDirection,
                hasFilters: () => {
                    let { itemTypeFilters: e, colorFilters: n, themeFilters: r, orbEligible: l, searchQuery: i } = t();
                    return [e, n, r].some((e) => e.size > 0) || l || "" !== i;
                },
                hasRelevanceFilters: () => {
                    let { colorFilters: e, themeFilters: n, searchQuery: r } = t();
                    return e.size > 0 || n.size > 0 || "" !== r.trim();
                },
                onToggleItemType: (t) => {
                    e((e) => {
                        let n = g(e.itemTypeFilters, t),
                            r = f(d({}, e), {
                                itemTypeFilters: n,
                                queryPageOffset: 0,
                            });
                        return e.userHasSelectedSort || (r.sort = _(r)), r;
                    });
                },
                onToggleColor: (t) => {
                    e((e) => {
                        let n = g(e.colorFilters, t),
                            r = f(d({}, e), {
                                colorFilters: n,
                                queryPageOffset: 0,
                            });
                        return e.userHasSelectedSort || (r.sort = _(r)), r;
                    });
                },
                onToggleTheme: (t) => {
                    e((e) => {
                        let n = g(e.themeFilters, t),
                            r = f(d({}, e), {
                                themeFilters: n,
                                queryPageOffset: 0,
                            });
                        return e.userHasSelectedSort || (r.sort = _(r)), r;
                    });
                },
                onToggleOrbEligible: () => {
                    e((e) => {
                        let t = f(d({}, e), {
                            orbEligible: !e.orbEligible,
                            queryPageOffset: 0,
                        });
                        return e.userHasSelectedSort || (t.sort = _(t)), t;
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
                        let n = f(d({}, e), {
                            searchQuery: t,
                            queryPageOffset: 0,
                        });
                        return (
                            "" !== t.trim()
                                ? ((n.sort = h), (n.userHasSelectedSort = !1))
                                : e.userHasSelectedSort || (n.sort = _(n)),
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
                            r = f(d({}, e), {
                                colorFilters: new Set(),
                                themeFilters: new Set(),
                                orbEligible: !1,
                                itemTypeFilters: n,
                                queryPageOffset: 0,
                            });
                        return e.userHasSelectedSort || (r.sort = _(r)), r;
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
                        f(d({}, C), {
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
    v = (e) => {
        let {
            itemTypeFilters: t,
            colorFilters: n,
            themeFilters: r,
            orbEligible: l,
            sort: i,
            searchQuery: a,
            queryPageSize: s,
            queryPageOffset: o,
        } = e;
        return {
            item_types: Array.from(t),
            colors: Array.from(n),
            themes: Array.from(r),
            orbs_eligible: !!l || void 0,
            offset: o,
            limit: s,
            sort_type: i.sortType,
            sort_direction: i.sortDirection,
            search: "" !== a ? a : void 0,
        };
    },
    x = () => {
        let { onSetResponse: e, setSearchError: t, setIsFetchingResults: n } = (0, u.a)(),
            l = (0, c.FF)("collectibles_shop_header_bar");
        r.useEffect(() => {
            let r = (r) => {
                let i = async () => {
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
                l && 0 !== r.limit && i();
            };
            r(v(b.getState()));
            let i = b.subscribe(v, r, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
                a = b.subscribe(
                    (e) => e.hasFilters(),
                    (e, t) => {
                        if (!e && t) {
                            let e = b.getState();
                            e.userHasSelectedSort || b.setState({ sort: _(e) });
                        }
                    },
                );
            return () => {
                i(), a();
            };
        }, [e, t, n, l]);
    };
