(n.d(t, {
    Ab: () => g,
    Iy: () => f,
    S0: () => u
}),
    n(388685),
    n(642613));
var r = n(73800),
    l = n(97519),
    i = n(497598),
    o = n(792091),
    a = n(653654),
    s = n(149705);
function c(e, t) {
    let n = new Set(e);
    return (n.has(t) ? n.delete(t) : n.add(t), n);
}
let u = (0, l.U)((e, t) => ({
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        sort: {
            sortType: o.E.RECENCY,
            sortDirection: i.F.DESC
        },
        hasFilters: () => {
            let { itemTypeFilters: e, colorFilters: n, themeFilters: r, orbEligible: l, sort: a } = t();
            return [e, n, r].some((e) => e.size > 0) || l || a.sortType !== o.E.RECENCY || a.sortDirection !== i.F.DESC;
        },
        onToggleItemType: (t) => {
            e((e) => ({ itemTypeFilters: c(e.itemTypeFilters, t) }));
        },
        onToggleColor: (t) => {
            e((e) => ({ colorFilters: c(e.colorFilters, t) }));
        },
        onToggleTheme: (t) => {
            e((e) => ({ themeFilters: c(e.themeFilters, t) }));
        },
        onToggleOrbEligible: () => {
            e((e) => ({ orbEligible: !e.orbEligible }));
        },
        onSetSort: (t) => {
            e({ sort: t });
        },
        onSetResponse: (t) => {
            e((e) =>
                (function (e) {
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
                })({}, e, t)
            );
        },
        setItemTypeFilter: (t) => {
            e({ itemTypeFilters: new Set([t]) });
        },
        clearItemTypeFilter: () => {
            e({ itemTypeFilters: new Set() });
        }
    })),
    d = (e, t, n) => {
        let { itemTypeFilters: r, colorFilters: l, themeFilters: i, orbEligible: o, sort: a } = e;
        return {
            item_types: Array.from(r),
            colors: Array.from(l),
            themes: Array.from(i),
            orbs_eligible: !!o || void 0,
            offset: null != t ? t : 0,
            limit: null != n ? n : 20,
            sort_type: a.sortType,
            sort_direction: a.sortDirection
        };
    },
    p = (e) => {
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
    g = () => {
        let { onSetResponse: e, setSearchError: t } = (0, s.a)();
        r.useEffect(() => {
            let n = u.subscribe((n) => {
                (async () => {
                    let r = d(n);
                    try {
                        let t = await (0, a.y)(r),
                            n = p(t);
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
    },
    f = () => {
        let { onSetResponse: e, pageLimit: t, setSearchError: n } = (0, s.a)();
        return r.useCallback(
            async (r) => {
                let l = r * t,
                    i = d(u.getState(), l, t);
                try {
                    let t = await (0, a.y)(i),
                        n = p(t);
                    e(n);
                } catch (e) {
                    var o;
                    n(null != (o = null == e ? void 0 : e.message) ? o : 'Unknown error');
                }
            },
            [e, t, n]
        );
    };
