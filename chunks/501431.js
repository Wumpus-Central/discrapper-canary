(n.d(t, {
    A: () => v,
    S: () => _
}),
    n(388685),
    n(781311),
    n(642613),
    n(49124));
var r = n(73800),
    l = n(97519),
    o = n(296574),
    i = n(497598),
    a = n(792091),
    s = n(653654),
    c = n(149705);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
function p(e, t) {
    let n = new Set(e);
    return (n.has(t) ? n.delete(t) : n.add(t), n);
}
let g = {
        sortType: a.E.RECENCY,
        sortDirection: i.F.DESC
    },
    f = {
        sortType: a.E.POPULARITY,
        sortDirection: i.F.DESC
    },
    h = {
        sortType: a.E.RELEVANCE,
        sortDirection: i.F.DESC
    },
    b = {
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        sort: g,
        searchQuery: '',
        queryPageSize: 20,
        queryPageOffset: 0,
        isFetchingResults: !1,
        fullScreenOpen: !1,
        userHasSelectedSort: !1
    },
    m = (e) => {
        let { colorFilters: t, themeFilters: n, searchQuery: r, itemTypeFilters: l } = e;
        return t.size > 0 || n.size > 0 || '' !== r.trim() ? h : l.size > 0 ? f : g;
    },
    _ = (0, l.U)(
        (0, o.XR)((e, t) =>
            d(u({}, b), {
                hasDefaultFilters: () => !t().hasFilters() && t().sort.sortType === g.sortType && t().sort.sortDirection === g.sortDirection,
                hasFilters: () => {
                    let { itemTypeFilters: e, colorFilters: n, themeFilters: r, orbEligible: l, searchQuery: o } = t();
                    return [e, n, r].some((e) => e.size > 0) || l || '' !== o;
                },
                hasRelevanceFilters: () => {
                    let { colorFilters: e, themeFilters: n, searchQuery: r } = t();
                    return e.size > 0 || n.size > 0 || '' !== r.trim();
                },
                onToggleItemType: (t) => {
                    e((e) => {
                        let n = p(e.itemTypeFilters, t),
                            r = d(u({}, e), {
                                itemTypeFilters: n,
                                queryPageOffset: 0
                            });
                        return (e.userHasSelectedSort || (r.sort = m(r)), r);
                    });
                },
                onToggleColor: (t) => {
                    e((e) => {
                        let n = p(e.colorFilters, t),
                            r = d(u({}, e), {
                                colorFilters: n,
                                queryPageOffset: 0
                            });
                        return (e.userHasSelectedSort || (r.sort = m(r)), r);
                    });
                },
                onToggleTheme: (t) => {
                    e((e) => {
                        let n = p(e.themeFilters, t),
                            r = d(u({}, e), {
                                themeFilters: n,
                                queryPageOffset: 0
                            });
                        return (e.userHasSelectedSort || (r.sort = m(r)), r);
                    });
                },
                onToggleOrbEligible: () => {
                    e((e) => {
                        let t = d(u({}, e), {
                            orbEligible: !e.orbEligible,
                            queryPageOffset: 0
                        });
                        return (e.userHasSelectedSort || (t.sort = m(t)), t);
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
                    e((e) => u({}, e, t));
                },
                onSetSearchQuery: (t) => {
                    e((e) => {
                        let n = d(u({}, e), {
                            searchQuery: t,
                            queryPageOffset: 0
                        });
                        return ('' !== t.trim() ? ((n.sort = h), (n.userHasSelectedSort = !1)) : e.userHasSelectedSort || (n.sort = m(n)), n);
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
                                itemTypeFilters: n,
                                queryPageOffset: 0
                            });
                        return (e.userHasSelectedSort || (r.sort = m(r)), r);
                    });
                },
                clearFilters: () => {
                    e({
                        itemTypeFilters: new Set(),
                        colorFilters: new Set(),
                        themeFilters: new Set()
                    });
                },
                reset: () => {
                    e(u({}, b));
                },
                setFullScreenOpen: (t) => {
                    e({ fullScreenOpen: t });
                }
            })
        )
    ),
    C = (e) => {
        let { itemTypeFilters: t, colorFilters: n, themeFilters: r, orbEligible: l, sort: o, searchQuery: i, queryPageSize: a, queryPageOffset: s } = e;
        return {
            item_types: Array.from(t),
            colors: Array.from(n),
            themes: Array.from(r),
            orbs_eligible: !!l || void 0,
            offset: s,
            limit: a,
            sort_type: o.sortType,
            sort_direction: o.sortDirection,
            search: '' !== i ? i : void 0
        };
    },
    O = (e) => {
        let t = e.skus,
            n = e.pagination.total,
            r = e.pagination.has_more;
        return {
            skus: t,
            totalCount: n,
            hasMorePages: r,
            pageOffset: e.pagination.offset,
            pageLimit: e.pagination.limit
        };
    },
    v = () => {
        let { onSetResponse: e, setSearchError: t, clear: n, setIsFetchingResults: l } = (0, c.a)();
        r.useEffect(() => {
            let r = (r) => {
                (async () => {
                    (n(), l(!0));
                    try {
                        let t = await (0, s.y)(r);
                        e(O(t));
                    } catch (e) {
                        var o;
                        t(null != (o = null == e ? void 0 : e.message) ? o : 'Unknown error');
                    } finally {
                        l(!1);
                    }
                })();
            };
            r(C(_.getState()));
            let o = _.subscribe(C, r, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
                i = _.subscribe(
                    (e) => e.hasFilters(),
                    (e, t) => {
                        if (!e && t) {
                            let e = _.getState();
                            e.userHasSelectedSort || _.setState({ sort: m(e) });
                        }
                    }
                );
            return () => {
                (o(), i());
            };
        }, [e, t, n, l]);
    };
