s.d(t, { S: () => m, v: () => f });
var r = s(64700),
    l = s(353640),
    a = s(499867),
    n = s(401864),
    o = s(124987),
    i = s(946716),
    c = s(856686);
function u(e, t) {
    let s = new Set(e);
    return s.has(t) ? s.delete(t) : s.add(t), s;
}
let d = { sortType: o.$.RECENCY, sortDirection: n.A.DESC },
    b = { sortType: o.$.POPULARITY, sortDirection: n.A.DESC },
    S = { sortType: o.$.RELEVANCE, sortDirection: n.A.DESC },
    E = {
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        sort: d,
        searchQuery: "",
        queryPageSize: 0,
        queryPageOffset: 0,
        isFetchingResults: !1,
        userHasSelectedSort: !1,
        currentTab: null,
    },
    p = (e) => {
        let { colorFilters: t, themeFilters: s, searchQuery: r, itemTypeFilters: l } = e;
        return t.size > 0 || s.size > 0 || "" !== r.trim() ? S : l.size > 0 ? b : d;
    },
    f = (0, l.v)(
        (0, a.eh)((e, t) => ({
            ...E,
            hasDefaultFilters: () =>
                !t().hasFilters() && t().sort.sortType === d.sortType && t().sort.sortDirection === d.sortDirection,
            hasFilters: () => {
                let { itemTypeFilters: e, colorFilters: s, themeFilters: r, orbEligible: l, searchQuery: a } = t();
                return [e, s, r].some((e) => e.size > 0) || l || "" !== a;
            },
            hasRelevanceFilters: () => {
                let { colorFilters: e, themeFilters: s, searchQuery: r } = t();
                return e.size > 0 || s.size > 0 || "" !== r.trim();
            },
            onToggleItemType: (t) => {
                e((e) => {
                    let s = u(e.itemTypeFilters, t),
                        r = { ...e, itemTypeFilters: s, queryPageOffset: 0 };
                    return e.userHasSelectedSort || (r.sort = p(r)), r;
                });
            },
            onToggleColor: (t) => {
                e((e) => {
                    let s = u(e.colorFilters, t),
                        r = { ...e, colorFilters: s, queryPageOffset: 0 };
                    return e.userHasSelectedSort || (r.sort = p(r)), r;
                });
            },
            onToggleTheme: (t) => {
                e((e) => {
                    let s = u(e.themeFilters, t),
                        r = { ...e, themeFilters: s, queryPageOffset: 0 };
                    return e.userHasSelectedSort || (r.sort = p(r)), r;
                });
            },
            onToggleOrbEligible: () => {
                e((e) => {
                    let t = { ...e, orbEligible: !e.orbEligible, queryPageOffset: 0 };
                    return e.userHasSelectedSort || (t.sort = p(t)), t;
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
                    let s = { ...e, searchQuery: t, queryPageOffset: 0 };
                    return (
                        "" !== t.trim()
                            ? ((s.sort = S), (s.userHasSelectedSort = !1))
                            : e.userHasSelectedSort || (s.sort = p(s)),
                        s
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
                    let s = new Set([t]),
                        r = {
                            ...e,
                            colorFilters: new Set(),
                            themeFilters: new Set(),
                            orbEligible: !1,
                            itemTypeFilters: s,
                            queryPageOffset: 0,
                        };
                    return e.userHasSelectedSort || (r.sort = p(r)), r;
                });
            },
            clearFilters: () => {
                e({ colorFilters: new Set(), themeFilters: new Set(), itemTypeFilters: new Set(), orbEligible: !1 });
            },
            reset: () => {
                let { queryPageSize: s, queryPageOffset: r } = t();
                e({ ...E, queryPageSize: s, queryPageOffset: r });
            },
            setCurrentTab: (t) => {
                e({ currentTab: t });
            },
        })),
    ),
    h = (e) => {
        let {
            itemTypeFilters: t,
            colorFilters: s,
            themeFilters: r,
            orbEligible: l,
            sort: a,
            searchQuery: n,
            queryPageSize: o,
            queryPageOffset: i,
        } = e;
        return {
            item_types: Array.from(t),
            colors: Array.from(s),
            themes: Array.from(r),
            orbs_eligible: !!l || void 0,
            offset: i,
            limit: o,
            sort_type: a.sortType,
            sort_direction: a.sortDirection,
            search: "" !== n ? n : void 0,
        };
    },
    m = () => {
        let { onSetResponse: e, setSearchError: t, setIsFetchingResults: s } = (0, c.S)();
        r.useEffect(() => {
            let r = (r) => {
                let l = async () => {
                    s(!0);
                    try {
                        let t,
                            s,
                            l,
                            a,
                            n = await (0, i.$)(r);
                        e(
                            ((t = n.skus),
                            (s = n.pagination.total),
                            (l = n.pagination.has_more),
                            (a = n.pagination.offset),
                            { skus: t, totalCount: s, hasMorePages: l, pageOffset: a, pageLimit: n.pagination.limit }),
                        );
                    } catch (e) {
                        t(e?.message ?? "Unknown error");
                    } finally {
                        s(!1);
                    }
                };
                0 !== r.limit && l();
            };
            r(h(f.getState()));
            let l = f.subscribe(h, r, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
                a = f.subscribe(
                    (e) => e.hasFilters(),
                    (e, t) => {
                        if (!e && t) {
                            let e = f.getState();
                            e.userHasSelectedSort || f.setState({ sort: p(e) });
                        }
                    },
                );
            return () => {
                l(), a();
            };
        }, [e, t, s]);
    };
