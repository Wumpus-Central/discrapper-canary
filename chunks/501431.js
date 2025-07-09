(n.d(t, {
    A: () => C,
    S: () => b
}),
    n(388685),
    n(642613),
    n(49124));
var r = n(73800),
    l = n(97519),
    o = n(296574),
    a = n(497598),
    i = n(792091),
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
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        sort: {
            sortType: i.E.RECENCY,
            sortDirection: a.F.DESC
        },
        searchQuery: '',
        queryPageSize: 20,
        queryPageOffset: 0,
        isFetchingResults: !1,
        fullScreenOpen: !1
    },
    f = {
        sortType: i.E.RELEVANCE,
        sortDirection: a.F.DESC
    },
    h = {
        sortType: i.E.RECENCY,
        sortDirection: a.F.DESC
    },
    b = (0, l.U)(
        (0, o.XR)((e, t) =>
            d(u({}, g), {
                hasDefaultFilters: () => !t().hasFilters() && t().sort.sortType === h.sortType && t().sort.sortDirection === h.sortDirection,
                hasFilters: () => {
                    let { itemTypeFilters: e, colorFilters: n, themeFilters: r, orbEligible: l, searchQuery: o } = t();
                    return [e, n, r].some((e) => e.size > 0) || l || '' !== o;
                },
                onToggleItemType: (t) => {
                    e((e) => ({
                        itemTypeFilters: p(e.itemTypeFilters, t),
                        sort: h,
                        queryPageOffset: 0
                    }));
                },
                onToggleColor: (t) => {
                    e((e) => ({
                        colorFilters: p(e.colorFilters, t),
                        sort: f,
                        queryPageOffset: 0
                    }));
                },
                onToggleTheme: (t) => {
                    e((e) => ({
                        themeFilters: p(e.themeFilters, t),
                        sort: f,
                        queryPageOffset: 0
                    }));
                },
                onToggleOrbEligible: () => {
                    e((e) => ({
                        orbEligible: !e.orbEligible,
                        sort: h,
                        queryPageOffset: 0
                    }));
                },
                onSetSort: (t) => {
                    e({
                        sort: t,
                        queryPageOffset: 0
                    });
                },
                onSetResponse: (t) => {
                    e((e) => u({}, e, t));
                },
                onSetSearchQuery: (t) => {
                    let n = '' === t ? h : f;
                    e((e) =>
                        d(u({}, e), {
                            searchQuery: t,
                            sort: n,
                            queryPageOffset: 0
                        })
                    );
                },
                setQueryPageSize: (t) => {
                    e({ queryPageSize: t });
                },
                setQueryPageOffset: (t) => {
                    e({ queryPageOffset: t });
                },
                setItemTypeFilter: (t) => {
                    e({
                        itemTypeFilters: new Set([t]),
                        queryPageOffset: 0
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
                    e(u({}, g));
                },
                setFullScreenOpen: (t) => {
                    e({ fullScreenOpen: t });
                }
            })
        )
    ),
    m = (e) => {
        let { itemTypeFilters: t, colorFilters: n, themeFilters: r, orbEligible: l, sort: o, searchQuery: a, queryPageSize: i, queryPageOffset: s } = e;
        return {
            item_types: Array.from(t),
            colors: Array.from(n),
            themes: Array.from(r),
            orbs_eligible: !!l || void 0,
            offset: s,
            limit: i,
            sort_type: o.sortType,
            sort_direction: o.sortDirection,
            search: '' !== a ? a : void 0
        };
    },
    _ = (e) => {
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
    C = () => {
        let { onSetResponse: e, setSearchError: t, clear: n, setIsFetchingResults: l } = (0, c.a)();
        r.useEffect(() => {
            let r = b.subscribe(
                    m,
                    (r) => {
                        (async () => {
                            (n(), l(!0));
                            try {
                                let t = await (0, s.y)(r);
                                e(_(t));
                            } catch (e) {
                                var o;
                                t(null != (o = null == e ? void 0 : e.message) ? o : 'Unknown error');
                            } finally {
                                l(!1);
                            }
                        })();
                    },
                    { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }
                ),
                o = b.subscribe(
                    (e) => e.hasFilters(),
                    (e, t) => {
                        !e && t && b.setState({ sort: h });
                    }
                );
            return () => {
                (r(), o());
            };
        }, [e, t, n, l]);
    };
