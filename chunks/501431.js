(n.d(t, {
    A: () => h,
    S: () => p
}),
    n(388685),
    n(642613));
var r = n(73800),
    l = n(97519),
    i = n(497598),
    o = n(792091),
    a = n(653654),
    s = n(149705);
function c(e) {
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
function u(e, t) {
    let n = new Set(e);
    return (n.has(t) ? n.delete(t) : n.add(t), n);
}
let d = {
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        sort: {
            sortType: o.E.RECENCY,
            sortDirection: i.F.DESC
        },
        searchQuery: '',
        queryPageSize: 20,
        queryPageOffset: 0
    },
    p = (0, l.U)((e, t) => {
        var n, r;
        return (
            (n = c({}, d)),
            (r = r =
                {
                    hasFilters: () => {
                        let { itemTypeFilters: e, colorFilters: n, themeFilters: r, orbEligible: l, sort: a, searchQuery: s } = t();
                        return [e, n, r].some((e) => e.size > 0) || l || a.sortType !== o.E.RECENCY || a.sortDirection !== i.F.DESC || '' !== s;
                    },
                    onToggleItemType: (t) => {
                        e((e) => ({ itemTypeFilters: u(e.itemTypeFilters, t) }));
                    },
                    onToggleColor: (t) => {
                        e((e) => ({ colorFilters: u(e.colorFilters, t) }));
                    },
                    onToggleTheme: (t) => {
                        e((e) => ({ themeFilters: u(e.themeFilters, t) }));
                    },
                    onToggleOrbEligible: () => {
                        e((e) => ({ orbEligible: !e.orbEligible }));
                    },
                    onSetSort: (t) => {
                        e({ sort: t });
                    },
                    onSetResponse: (t) => {
                        e((e) => c({}, e, t));
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
                        e(c({}, d));
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
    }),
    f = (e) => {
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
            search: o
        };
    },
    g = (e) => {
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
    h = () => {
        let { onSetResponse: e, setSearchError: t } = (0, s.a)();
        r.useEffect(() => {
            let n = p.subscribe((n) => {
                (async () => {
                    let r = f(n);
                    try {
                        let t = await (0, a.y)(r),
                            n = g(t);
                        e(n);
                    } catch (e) {
                        var l;
                        t(null != (l = null == e ? void 0 : e.message) ? l : 'Unknown error');
                    }
                })();
            });
            return () => {
                n();
            };
        }, [e, t]);
    };
