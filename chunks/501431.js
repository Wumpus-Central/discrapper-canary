(n.d(t, {
    A: () => b,
    S: () => f
}),
    n(388685),
    n(642613),
    n(49124));
var r = n(73800),
    l = n(97519),
    i = n(296574),
    o = n(497598),
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
    let n = new Set(e);
    return (n.has(t) ? n.delete(t) : n.add(t), n);
}
let p = {
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        sort: {
            sortType: a.E.RECENCY,
            sortDirection: o.F.DESC
        },
        searchQuery: '',
        queryPageSize: 20,
        queryPageOffset: 0,
        isFetchingResults: !1
    },
    f = (0, l.U)(
        (0, i.XR)((e, t) => {
            var n, r;
            return (
                (n = u({}, p)),
                (r = r =
                    {
                        hasFilters: () => {
                            let { itemTypeFilters: e, colorFilters: n, themeFilters: r, orbEligible: l, sort: i, searchQuery: s } = t();
                            return [e, n, r].some((e) => e.size > 0) || l || i.sortType !== a.E.RECENCY || i.sortDirection !== o.F.DESC || '' !== s;
                        },
                        onToggleItemType: (t) => {
                            e((e) => ({ itemTypeFilters: d(e.itemTypeFilters, t) }));
                        },
                        onToggleColor: (t) => {
                            e((e) => ({ colorFilters: d(e.colorFilters, t) }));
                        },
                        onToggleTheme: (t) => {
                            e((e) => ({ themeFilters: d(e.themeFilters, t) }));
                        },
                        onToggleOrbEligible: () => {
                            e((e) => ({ orbEligible: !e.orbEligible }));
                        },
                        onSetSort: (t) => {
                            e({ sort: t });
                        },
                        onSetResponse: (t) => {
                            e((e) => u({}, e, t));
                        },
                        onSetSearchQuery: (t) => {
                            e({ searchQuery: t });
                        },
                        setQueryPageSize: (t) => {
                            e({ queryPageSize: t });
                        },
                        setQueryPageOffset: (t) => {
                            e({ queryPageOffset: t });
                        },
                        setItemTypeFilter: (t) => {
                            e({ itemTypeFilters: new Set([t]) });
                        },
                        clearItemTypeFilter: () => {
                            e({ itemTypeFilters: new Set() });
                        },
                        clearFilters: () => {
                            e({
                                itemTypeFilters: new Set(),
                                colorFilters: new Set(),
                                themeFilters: new Set()
                            });
                        },
                        reset: () => {
                            e(u({}, p));
                        }
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                n
            );
        })
    ),
    g = (e) => {
        let { itemTypeFilters: t, colorFilters: n, themeFilters: r, orbEligible: l, sort: i, searchQuery: o, queryPageSize: a, queryPageOffset: s } = e;
        return {
            item_types: Array.from(t),
            colors: Array.from(n),
            themes: Array.from(r),
            orbs_eligible: !!l || void 0,
            offset: s,
            limit: a,
            sort_type: i.sortType,
            sort_direction: i.sortDirection,
            search: '' !== o ? o : void 0
        };
    },
    h = (e) => {
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
    b = () => {
        let { onSetResponse: e, setSearchError: t, clear: n, setIsFetchingResults: l } = (0, c.a)();
        r.useEffect(() => {
            let r = f.subscribe(
                g,
                (r) => {
                    (async () => {
                        (n(), l(!0));
                        try {
                            let t = await (0, s.y)(r);
                            e(h(t));
                        } catch (e) {
                            var i;
                            t(null != (i = null == e ? void 0 : e.message) ? i : 'Unknown error');
                        } finally {
                            l(!1);
                        }
                    })();
                },
                { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }
            );
            return () => {
                r();
            };
        }, [e, t, n, l]);
    };
