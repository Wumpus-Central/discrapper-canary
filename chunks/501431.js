(n.d(t, {
    Ab: () => d,
    Iy: () => p,
    S0: () => s
}),
    n(388685));
var r = n(73800),
    l = n(97519),
    i = n(653654),
    a = n(149705);
function o(e, t) {
    let n = new Set(e);
    return (n.has(t) ? n.delete(t) : n.add(t), n);
}
let s = (0, l.U)((e, t) => ({
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        hasFilters: () => {
            let { itemTypeFilters: e, colorFilters: n, themeFilters: r, orbEligible: l } = t();
            return [e, n, r].some((e) => e.size > 0) || l;
        },
        onToggleItemType: (t) => {
            e((e) => ({ itemTypeFilters: o(e.itemTypeFilters, t) }));
        },
        onToggleColor: (t) => {
            e((e) => ({ colorFilters: o(e.colorFilters, t) }));
        },
        onToggleTheme: (t) => {
            e((e) => ({ themeFilters: o(e.themeFilters, t) }));
        },
        onToggleOrbEligible: () => {
            e((e) => ({ orbEligible: !e.orbEligible }));
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
    c = (e, t, n) => {
        let { itemTypeFilters: r, colorFilters: l, themeFilters: i, orbEligible: a } = e;
        return {
            item_types: Array.from(r),
            colors: Array.from(l),
            themes: Array.from(i),
            orbs_eligible: !!a || void 0,
            offset: null != t ? t : 0,
            limit: null != n ? n : 20
        };
    },
    u = (e) => {
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
    d = () => {
        let { onSetResponse: e, clear: t, setSearchError: n } = (0, a.a)();
        r.useEffect(() => {
            let r = s.subscribe((r) => {
                (async () => {
                    t();
                    let l = c(r);
                    try {
                        let t = await (0, i.y)(l),
                            n = u(t);
                        e(n);
                    } catch (e) {
                        var a;
                        n(null != (a = null == e ? void 0 : e.message) ? a : 'Unknown error');
                    }
                })();
            });
            return () => {
                r();
            };
        }, [e, t, n]);
    },
    p = () => {
        let { onSetResponse: e, pageLimit: t, setSearchError: n } = (0, a.a)();
        return r.useCallback(
            async (r) => {
                let l = r * t,
                    a = c(s.getState(), l, t);
                try {
                    let t = await (0, i.y)(a),
                        n = u(t);
                    e(n);
                } catch (e) {
                    var o;
                    n(null != (o = null == e ? void 0 : e.message) ? o : 'Unknown error');
                }
            },
            [e, t, n]
        );
    };
