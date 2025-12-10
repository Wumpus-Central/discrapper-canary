n.d(t, {
    A: () => v,
    S: () => _,
}),
    n(388685),
    n(781311),
    n(642613),
    n(49124);
var r = n(473749),
    l = n(663042),
    i = n(690775),
    o = n(497598),
    s = n(792091),
    a = n(653654),
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
function g(e, t) {
    let n = new Set(e);
    return n.has(t) ? n.delete(t) : n.add(t), n;
}
let f = {
        sortType: s.E.RECENCY,
        sortDirection: o.F.DESC,
    },
    p = {
        sortType: s.E.POPULARITY,
        sortDirection: o.F.DESC,
    },
    m = {
        sortType: s.E.RELEVANCE,
        sortDirection: o.F.DESC,
    },
    h = {
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        sort: f,
        searchQuery: "",
        queryPageSize: 0,
        queryPageOffset: 0,
        isFetchingResults: !1,
        userHasSelectedSort: !1,
        currentTab: null,
    },
    C = (e) => {
        let { colorFilters: t, themeFilters: n, searchQuery: r, itemTypeFilters: l } = e;
        return t.size > 0 || n.size > 0 || "" !== r.trim() ? m : l.size > 0 ? p : f;
    },
    _ = (0, l.U)(
        (0, i.XR)((e, t) =>
            d(u({}, h), {
                hasDefaultFilters: () =>
                    !t().hasFilters() && t().sort.sortType === f.sortType && t().sort.sortDirection === f.sortDirection,
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
                            r = d(u({}, e), {
                                itemTypeFilters: n,
                                queryPageOffset: 0,
                            });
                        return e.userHasSelectedSort || (r.sort = C(r)), r;
                    });
                },
                onToggleColor: (t) => {
                    e((e) => {
                        let n = g(e.colorFilters, t),
                            r = d(u({}, e), {
                                colorFilters: n,
                                queryPageOffset: 0,
                            });
                        return e.userHasSelectedSort || (r.sort = C(r)), r;
                    });
                },
                onToggleTheme: (t) => {
                    e((e) => {
                        let n = g(e.themeFilters, t),
                            r = d(u({}, e), {
                                themeFilters: n,
                                queryPageOffset: 0,
                            });
                        return e.userHasSelectedSort || (r.sort = C(r)), r;
                    });
                },
                onToggleOrbEligible: () => {
                    e((e) => {
                        let t = d(u({}, e), {
                            orbEligible: !e.orbEligible,
                            queryPageOffset: 0,
                        });
                        return e.userHasSelectedSort || (t.sort = C(t)), t;
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
                                ? ((n.sort = m), (n.userHasSelectedSort = !1))
                                : e.userHasSelectedSort || (n.sort = C(n)),
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
                        return e.userHasSelectedSort || (r.sort = C(r)), r;
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
                        d(u({}, h), {
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
    b = (e) => {
        let {
            itemTypeFilters: t,
            colorFilters: n,
            themeFilters: r,
            orbEligible: l,
            sort: i,
            searchQuery: o,
            queryPageSize: s,
            queryPageOffset: a,
        } = e;
        return {
            item_types: Array.from(t),
            colors: Array.from(n),
            themes: Array.from(r),
            orbs_eligible: !!l || void 0,
            offset: a,
            limit: s,
            sort_type: i.sortType,
            sort_direction: i.sortDirection,
            search: "" !== o ? o : void 0,
        };
    },
    v = () => {
        let { onSetResponse: e, setSearchError: t, setIsFetchingResults: n } = (0, c.a)();
        r.useEffect(() => {
            let r = (r) => {
                let l = async () => {
                    n(!0);
                    try {
                        let t = await (0, a.y)(r);
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
            r(b(_.getState()));
            let l = _.subscribe(b, r, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
                i = _.subscribe(
                    (e) => e.hasFilters(),
                    (e, t) => {
                        if (!e && t) {
                            let e = _.getState();
                            e.userHasSelectedSort || _.setState({ sort: C(e) });
                        }
                    },
                );
            return () => {
                l(), i();
            };
        }, [e, t, n]);
    };
