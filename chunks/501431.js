n.d(t, {
    A: () => S,
    S: () => C,
}),
    n(388685),
    n(781311),
    n(642613),
    n(49124);
var r = n(647438),
    l = n(879690),
    a = n(8058),
    s = n(497598),
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
        sortDirection: s.F.DESC,
    },
    m = {
        sortType: i.E.POPULARITY,
        sortDirection: s.F.DESC,
    },
    _ = {
        sortType: i.E.RELEVANCE,
        sortDirection: s.F.DESC,
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
        fullScreenOpen: !1,
        userHasSelectedSort: !1,
        currentTab: null,
    },
    b = (e) => {
        let { colorFilters: t, themeFilters: n, searchQuery: r, itemTypeFilters: l } = e;
        return t.size > 0 || n.size > 0 || "" !== r.trim() ? _ : l.size > 0 ? m : f;
    },
    C = (0, l.U)(
        (0, a.XR)((e, t) =>
            g(d({}, h), {
                hasDefaultFilters: () =>
                    !t().hasFilters() && t().sort.sortType === f.sortType && t().sort.sortDirection === f.sortDirection,
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
                        let n = p(e.itemTypeFilters, t),
                            r = g(d({}, e), {
                                itemTypeFilters: n,
                                queryPageOffset: 0,
                            });
                        return e.userHasSelectedSort || (r.sort = b(r)), r;
                    });
                },
                onToggleColor: (t) => {
                    e((e) => {
                        let n = p(e.colorFilters, t),
                            r = g(d({}, e), {
                                colorFilters: n,
                                queryPageOffset: 0,
                            });
                        return e.userHasSelectedSort || (r.sort = b(r)), r;
                    });
                },
                onToggleTheme: (t) => {
                    e((e) => {
                        let n = p(e.themeFilters, t),
                            r = g(d({}, e), {
                                themeFilters: n,
                                queryPageOffset: 0,
                            });
                        return e.userHasSelectedSort || (r.sort = b(r)), r;
                    });
                },
                onToggleOrbEligible: () => {
                    e((e) => {
                        let t = g(d({}, e), {
                            orbEligible: !e.orbEligible,
                            queryPageOffset: 0,
                        });
                        return e.userHasSelectedSort || (t.sort = b(t)), t;
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
                                ? ((n.sort = _), (n.userHasSelectedSort = !1))
                                : e.userHasSelectedSort || (n.sort = b(n)),
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
                        return e.userHasSelectedSort || (r.sort = b(r)), r;
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
                        g(d({}, h), {
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
            sort: a,
            searchQuery: s,
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
            sort_type: a.sortType,
            sort_direction: a.sortDirection,
            search: "" !== s ? s : void 0,
        };
    },
    S = () => {
        let { onSetResponse: e, setSearchError: t, setIsFetchingResults: n } = (0, u.a)(),
            l = (0, c.FF)("collectibles_shop_header_bar");
        r.useEffect(() => {
            let r = (r) => {
                let a = async () => {
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
                l && 0 !== r.limit && a();
            };
            r(E(C.getState()));
            let a = C.subscribe(E, r, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
                s = C.subscribe(
                    (e) => e.hasFilters(),
                    (e, t) => {
                        if (!e && t) {
                            let e = C.getState();
                            e.userHasSelectedSort || C.setState({ sort: b(e) });
                        }
                    },
                );
            return () => {
                a(), s();
            };
        }, [e, t, n, l]);
    };
