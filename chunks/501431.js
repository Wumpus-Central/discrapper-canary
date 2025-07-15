(r.d(t, {
    A: () => v,
    S: () => _
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
    c = r(149705);
function u(e) {
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
function d(e, t) {
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
function p(e, t) {
    let r = new Set(e);
    return (r.has(t) ? r.delete(t) : r.add(t), r);
}
let f = {
        sortType: a.E.RECENCY,
        sortDirection: o.F.DESC
    },
    g = {
        sortType: a.E.POPULARITY,
        sortDirection: o.F.DESC
    },
    h = {
        sortType: a.E.RELEVANCE,
        sortDirection: o.F.DESC
    },
    b = {
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        sort: f,
        searchQuery: '',
        queryPageSize: 20,
        queryPageOffset: 0,
        isFetchingResults: !1,
        fullScreenOpen: !1,
        userHasSelectedSort: !1,
        currentTab: null
    },
    m = (e) => {
        let { colorFilters: t, themeFilters: r, searchQuery: n, itemTypeFilters: l } = e;
        return t.size > 0 || r.size > 0 || '' !== n.trim() ? h : l.size > 0 ? g : f;
    },
    _ = (0, l.U)(
        (0, i.XR)((e, t) =>
            d(u({}, b), {
                hasDefaultFilters: () => !t().hasFilters() && t().sort.sortType === f.sortType && t().sort.sortDirection === f.sortDirection,
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
                        let r = p(e.itemTypeFilters, t),
                            n = d(u({}, e), {
                                itemTypeFilters: r,
                                queryPageOffset: 0
                            });
                        return (e.userHasSelectedSort || (n.sort = m(n)), n);
                    });
                },
                onToggleColor: (t) => {
                    e((e) => {
                        let r = p(e.colorFilters, t),
                            n = d(u({}, e), {
                                colorFilters: r,
                                queryPageOffset: 0
                            });
                        return (e.userHasSelectedSort || (n.sort = m(n)), n);
                    });
                },
                onToggleTheme: (t) => {
                    e((e) => {
                        let r = p(e.themeFilters, t),
                            n = d(u({}, e), {
                                themeFilters: r,
                                queryPageOffset: 0
                            });
                        return (e.userHasSelectedSort || (n.sort = m(n)), n);
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
                        let r = d(u({}, e), {
                            searchQuery: t,
                            queryPageOffset: 0
                        });
                        return ('' !== t.trim() ? ((r.sort = h), (r.userHasSelectedSort = !1)) : e.userHasSelectedSort || (r.sort = m(r)), r);
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
                            n = d(u({}, e), {
                                itemTypeFilters: r,
                                queryPageOffset: 0
                            });
                        return (e.userHasSelectedSort || (n.sort = m(n)), n);
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
                },
                setCurrentTab: (t) => {
                    e({ currentTab: t });
                }
            })
        )
    ),
    O = (e) => {
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
    C = (e) => {
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
    v = () => {
        let { onSetResponse: e, setSearchError: t, clear: r, setIsFetchingResults: l } = (0, c.a)();
        n.useEffect(() => {
            let n = (n) => {
                (async () => {
                    (r(), l(!0));
                    try {
                        let t = await (0, s.y)(n);
                        e(C(t));
                    } catch (e) {
                        var i;
                        t(null != (i = null == e ? void 0 : e.message) ? i : 'Unknown error');
                    } finally {
                        l(!1);
                    }
                })();
            };
            n(O(_.getState()));
            let i = _.subscribe(O, n, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
                o = _.subscribe(
                    (e) => e.hasFilters(),
                    (e, t) => {
                        if (!e && t) {
                            let e = _.getState();
                            e.userHasSelectedSort || _.setState({ sort: m(e) });
                        }
                    }
                );
            return () => {
                (i(), o());
            };
        }, [e, t, r, l]);
    };
