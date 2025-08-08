n.d(t, {
    A: () => E,
    S: () => v,
}),
    n(388685),
    n(781311),
    n(642613),
    n(49124);
var r = n(73800),
    l = n(97519),
    a = n(296574),
    i = n(497598),
    o = n(792091),
    s = n(653654),
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
function p(e, t) {
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
        sortType: o.E.RECENCY,
        sortDirection: i.F.DESC,
    },
    b = {
        sortType: o.E.POPULARITY,
        sortDirection: i.F.DESC,
    },
    h = {
        sortType: o.E.RELEVANCE,
        sortDirection: i.F.DESC,
    },
    m = {
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
    _ = (e) => {
        let { colorFilters: t, themeFilters: n, searchQuery: r, itemTypeFilters: l } = e;
        return t.size > 0 || n.size > 0 || "" !== r.trim() ? h : l.size > 0 ? b : f;
    },
    v = (0, l.U)(
        (0, a.XR)((e, t) =>
            p(d({}, m), {
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
                        let n = g(e.itemTypeFilters, t),
                            r = p(d({}, e), {
                                itemTypeFilters: n,
                                queryPageOffset: 0,
                            });
                        return e.userHasSelectedSort || (r.sort = _(r)), r;
                    });
                },
                onToggleColor: (t) => {
                    e((e) => {
                        let n = g(e.colorFilters, t),
                            r = p(d({}, e), {
                                colorFilters: n,
                                queryPageOffset: 0,
                            });
                        return e.userHasSelectedSort || (r.sort = _(r)), r;
                    });
                },
                onToggleTheme: (t) => {
                    e((e) => {
                        let n = g(e.themeFilters, t),
                            r = p(d({}, e), {
                                themeFilters: n,
                                queryPageOffset: 0,
                            });
                        return e.userHasSelectedSort || (r.sort = _(r)), r;
                    });
                },
                onToggleOrbEligible: () => {
                    e((e) => {
                        let t = p(d({}, e), {
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
                        let n = p(d({}, e), {
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
                            r = p(d({}, e), {
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
                        p(d({}, m), {
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
    O = (e) => {
        let {
            itemTypeFilters: t,
            colorFilters: n,
            themeFilters: r,
            orbEligible: l,
            sort: a,
            searchQuery: i,
            queryPageSize: o,
            queryPageOffset: s,
        } = e;
        return {
            item_types: Array.from(t),
            colors: Array.from(n),
            themes: Array.from(r),
            orbs_eligible: !!l || void 0,
            offset: s,
            limit: o,
            sort_type: a.sortType,
            sort_direction: a.sortDirection,
            search: "" !== i ? i : void 0,
        };
    },
    C = (e) => {
        let t = e.skus,
            n = e.pagination.total,
            r = e.pagination.has_more;
        return {
            skus: t,
            totalCount: n,
            hasMorePages: r,
            pageOffset: e.pagination.offset,
            pageLimit: e.pagination.limit,
        };
    },
    E = () => {
        let { onSetResponse: e, setSearchError: t, setIsFetchingResults: n } = (0, u.a)(),
            l = (0, c.FF)("collectibles_shop_header_bar");
        r.useEffect(() => {
            let r = (r) => {
                let a = async () => {
                    n(!0);
                    try {
                        let t = await (0, s.y)(r);
                        e(C(t));
                    } catch (e) {
                        var l;
                        t(null != (l = null == e ? void 0 : e.message) ? l : "Unknown error");
                    } finally {
                        n(!1);
                    }
                };
                l && 0 !== r.limit && a();
            };
            r(O(v.getState()));
            let a = v.subscribe(O, r, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
                i = v.subscribe(
                    (e) => e.hasFilters(),
                    (e, t) => {
                        if (!e && t) {
                            let e = v.getState();
                            e.userHasSelectedSort || v.setState({ sort: _(e) });
                        }
                    },
                );
            return () => {
                a(), i();
            };
        }, [e, t, n, l]);
    };
