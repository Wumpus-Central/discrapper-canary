(r.d(t, {
    A: () => E,
    S: () => O
}),
    r(388685),
    r(781311),
    r(642613),
    r(49124));
var n = r(73800),
    l = r(97519),
    i = r(296574),
    o = r(497598),
    a = r(792091),
    s = r(653654),
    c = r(870289),
    u = r(149705);
function d(e) {
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
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function f(e, t) {
    let r = new Set(e);
    return (r.has(t) ? r.delete(t) : r.add(t), r);
}
let g = {
        sortType: a.E.RECENCY,
        sortDirection: o.F.DESC
    },
    h = {
        sortType: a.E.POPULARITY,
        sortDirection: o.F.DESC
    },
    b = {
        sortType: a.E.RELEVANCE,
        sortDirection: o.F.DESC
    },
    m = {
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        sort: g,
        searchQuery: '',
        queryPageSize: 0,
        queryPageOffset: 0,
        isFetchingResults: !1,
        fullScreenOpen: !1,
        userHasSelectedSort: !1,
        currentTab: null
    },
    _ = (e) => {
        let { colorFilters: t, themeFilters: r, searchQuery: n, itemTypeFilters: l } = e;
        return t.size > 0 || r.size > 0 || '' !== n.trim() ? b : l.size > 0 ? h : g;
    },
    O = (0, l.U)(
        (0, i.XR)((e, t) =>
            p(d({}, m), {
                hasDefaultFilters: () => !t().hasFilters() && t().sort.sortType === g.sortType && t().sort.sortDirection === g.sortDirection,
                hasFilters: () => {
                    let { itemTypeFilters: e, colorFilters: r, themeFilters: n, orbEligible: l, searchQuery: i } = t();
                    return [e, r, n].some((e) => e.size > 0) || l || '' !== i;
                },
                hasRelevanceFilters: () => {
                    let { colorFilters: e, themeFilters: r, searchQuery: n } = t();
                    return e.size > 0 || r.size > 0 || '' !== n.trim();
                },
                onToggleItemType: (t) => {
                    e((e) => {
                        let r = f(e.itemTypeFilters, t),
                            n = p(d({}, e), {
                                itemTypeFilters: r,
                                queryPageOffset: 0
                            });
                        return (e.userHasSelectedSort || (n.sort = _(n)), n);
                    });
                },
                onToggleColor: (t) => {
                    e((e) => {
                        let r = f(e.colorFilters, t),
                            n = p(d({}, e), {
                                colorFilters: r,
                                queryPageOffset: 0
                            });
                        return (e.userHasSelectedSort || (n.sort = _(n)), n);
                    });
                },
                onToggleTheme: (t) => {
                    e((e) => {
                        let r = f(e.themeFilters, t),
                            n = p(d({}, e), {
                                themeFilters: r,
                                queryPageOffset: 0
                            });
                        return (e.userHasSelectedSort || (n.sort = _(n)), n);
                    });
                },
                onToggleOrbEligible: () => {
                    e((e) => {
                        let t = p(d({}, e), {
                            orbEligible: !e.orbEligible,
                            queryPageOffset: 0
                        });
                        return (e.userHasSelectedSort || (t.sort = _(t)), t);
                    });
                },
                onSetSort: (t) => {
                    e({
                        sort: t,
                        queryPageOffset: 0,
                        userHasSelectedSort: !0
                    });
                },
                onSetResponse: (t) => {
                    e((e) => d({}, e, t));
                },
                onSetSearchQuery: (t) => {
                    e((e) => {
                        let r = p(d({}, e), {
                            searchQuery: t,
                            queryPageOffset: 0
                        });
                        return ('' !== t.trim() ? ((r.sort = b), (r.userHasSelectedSort = !1)) : e.userHasSelectedSort || (r.sort = _(r)), r);
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
                        let r = new Set([t]),
                            n = p(d({}, e), {
                                colorFilters: new Set(),
                                themeFilters: new Set(),
                                orbEligible: !1,
                                itemTypeFilters: r,
                                queryPageOffset: 0
                            });
                        return (e.userHasSelectedSort || (n.sort = _(n)), n);
                    });
                },
                clearFilters: () => {
                    e({
                        colorFilters: new Set(),
                        themeFilters: new Set(),
                        itemTypeFilters: new Set(),
                        orbEligible: !1
                    });
                },
                reset: () => {
                    let { queryPageSize: r, queryPageOffset: n } = t();
                    e(
                        p(d({}, m), {
                            queryPageSize: r,
                            queryPageOffset: n
                        })
                    );
                },
                setFullScreenOpen: (t) => {
                    e({ fullScreenOpen: t });
                },
                setCurrentTab: (t) => {
                    e({ currentTab: t });
                }
            })
        )
    ),
    C = (e) => {
        let { itemTypeFilters: t, colorFilters: r, themeFilters: n, orbEligible: l, sort: i, searchQuery: o, queryPageSize: a, queryPageOffset: s } = e;
        return {
            item_types: Array.from(t),
            colors: Array.from(r),
            themes: Array.from(n),
            orbs_eligible: !!l || void 0,
            offset: s,
            limit: a,
            sort_type: i.sortType,
            sort_direction: i.sortDirection,
            search: '' !== o ? o : void 0
        };
    },
    v = (e) => {
        let t = e.skus,
            r = e.pagination.total,
            n = e.pagination.has_more;
        return {
            skus: t,
            totalCount: r,
            hasMorePages: n,
            pageOffset: e.pagination.offset,
            pageLimit: e.pagination.limit
        };
    },
    E = () => {
        let { onSetResponse: e, setSearchError: t, setIsFetchingResults: r } = (0, u.a)(),
            l = (0, c.FF)('collectibles_shop_header_bar');
        n.useEffect(() => {
            let n = (n) => {
                let i = async () => {
                    r(!0);
                    try {
                        let t = await (0, s.y)(n);
                        e(v(t));
                    } catch (e) {
                        var l;
                        t(null != (l = null == e ? void 0 : e.message) ? l : 'Unknown error');
                    } finally {
                        r(!1);
                    }
                };
                l && 0 !== n.limit && i();
            };
            n(C(O.getState()));
            let i = O.subscribe(C, n, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
                o = O.subscribe(
                    (e) => e.hasFilters(),
                    (e, t) => {
                        if (!e && t) {
                            let e = O.getState();
                            e.userHasSelectedSort || O.setState({ sort: _(e) });
                        }
                    }
                );
            return () => {
                (i(), o());
            };
        }, [e, t, r, l]);
    };
