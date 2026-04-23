r.d(t, { S: () => g, v: () => f });
var n = r(64700),
    s = r(353640),
    l = r(499867),
    a = r(401864),
    o = r(124987),
    i = r(946716),
    c = r(856686);
function d(e, t) {
    let r = new Set(e);
    return r.has(t) ? r.delete(t) : r.add(t), r;
}
let u = { sortType: o.$.RECENCY, sortDirection: a.A.DESC },
    _ = { sortType: o.$.POPULARITY, sortDirection: a.A.DESC },
    b = { sortType: o.$.RELEVANCE, sortDirection: a.A.DESC },
    p = {
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        sort: u,
        searchQuery: "",
        queryPageSize: 0,
        queryPageOffset: 0,
        isFetchingResults: !1,
        userHasSelectedSort: !1,
        currentTab: null,
    },
    m = (e) => {
        let { colorFilters: t, themeFilters: r, searchQuery: n, itemTypeFilters: s } = e;
        return t.size > 0 || r.size > 0 || "" !== n.trim() ? b : s.size > 0 ? _ : u;
    },
    f = (0, s.v)(
        (0, l.eh)((e, t) => ({
            ...p,
            hasDefaultFilters: () =>
                !t().hasFilters() && t().sort.sortType === u.sortType && t().sort.sortDirection === u.sortDirection,
            hasFilters: () => {
                let { itemTypeFilters: e, colorFilters: r, themeFilters: n, orbEligible: s, searchQuery: l } = t();
                return [e, r, n].some((e) => e.size > 0) || s || "" !== l;
            },
            hasRelevanceFilters: () => {
                let { colorFilters: e, themeFilters: r, searchQuery: n } = t();
                return e.size > 0 || r.size > 0 || "" !== n.trim();
            },
            onToggleItemType: (t) => {
                e((e) => {
                    let r = d(e.itemTypeFilters, t),
                        n = { ...e, itemTypeFilters: r, queryPageOffset: 0 };
                    return e.userHasSelectedSort || (n.sort = m(n)), n;
                });
            },
            onToggleColor: (t) => {
                e((e) => {
                    let r = d(e.colorFilters, t),
                        n = { ...e, colorFilters: r, queryPageOffset: 0 };
                    return e.userHasSelectedSort || (n.sort = m(n)), n;
                });
            },
            onToggleTheme: (t) => {
                e((e) => {
                    let r = d(e.themeFilters, t),
                        n = { ...e, themeFilters: r, queryPageOffset: 0 };
                    return e.userHasSelectedSort || (n.sort = m(n)), n;
                });
            },
            onToggleOrbEligible: () => {
                e((e) => {
                    let t = { ...e, orbEligible: !e.orbEligible, queryPageOffset: 0 };
                    return e.userHasSelectedSort || (t.sort = m(t)), t;
                });
            },
            onSetSort: (t) => {
                e({ sort: t, queryPageOffset: 0, userHasSelectedSort: !0 });
            },
            onSetResponse: (t) => {
                e((e) => ({ ...e, ...t }));
            },
            onSetSearchQuery: (t) => {
                e((e) => {
                    let r = { ...e, searchQuery: t, queryPageOffset: 0 };
                    return (
                        "" !== t.trim()
                            ? ((r.sort = b), (r.userHasSelectedSort = !1))
                            : e.userHasSelectedSort || (r.sort = m(r)),
                        r
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
                    let r = new Set([t]),
                        n = {
                            ...e,
                            colorFilters: new Set(),
                            themeFilters: new Set(),
                            orbEligible: !1,
                            itemTypeFilters: r,
                            queryPageOffset: 0,
                        };
                    return e.userHasSelectedSort || (n.sort = m(n)), n;
                });
            },
            clearFilters: () => {
                e({ colorFilters: new Set(), themeFilters: new Set(), itemTypeFilters: new Set(), orbEligible: !1 });
            },
            reset: () => {
                let { queryPageSize: r, queryPageOffset: n } = t();
                e({ ...p, queryPageSize: r, queryPageOffset: n });
            },
            setCurrentTab: (t) => {
                e({ currentTab: t });
            },
        })),
    ),
    C = (e) => {
        let {
            itemTypeFilters: t,
            colorFilters: r,
            themeFilters: n,
            orbEligible: s,
            sort: l,
            searchQuery: a,
            queryPageSize: o,
            queryPageOffset: i,
        } = e;
        return {
            item_types: Array.from(t),
            colors: Array.from(r),
            themes: Array.from(n),
            orbs_eligible: !!s || void 0,
            offset: i,
            limit: o,
            sort_type: l.sortType,
            sort_direction: l.sortDirection,
            search: "" !== a ? a : void 0,
        };
    },
    g = () => {
        let { onSetResponse: e, setSearchError: t, setIsFetchingResults: r } = (0, c.S)();
        n.useEffect(() => {
            let n = (n) => {
                let s = async () => {
                    r(!0);
                    try {
                        let t,
                            r,
                            s,
                            l,
                            a = await (0, i.$)(n);
                        e(
                            ((t = a.skus),
                            (r = a.pagination.total),
                            (s = a.pagination.has_more),
                            (l = a.pagination.offset),
                            { skus: t, totalCount: r, hasMorePages: s, pageOffset: l, pageLimit: a.pagination.limit }),
                        );
                    } catch (e) {
                        t(e?.message ?? "Unknown error");
                    } finally {
                        r(!1);
                    }
                };
                0 !== n.limit && s();
            };
            n(C(f.getState()));
            let s = f.subscribe(C, n, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
                l = f.subscribe(
                    (e) => e.hasFilters(),
                    (e, t) => {
                        if (!e && t) {
                            let e = f.getState();
                            e.userHasSelectedSort || f.setState({ sort: m(e) });
                        }
                    },
                );
            return () => {
                s(), l();
            };
        }, [e, t, r]);
    };
