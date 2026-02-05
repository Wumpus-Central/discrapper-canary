"use strict";
s.d(t, { S: () => E, v: () => p });
var n = s(64700),
    r = s(353640),
    l = s(499867),
    a = s(401864),
    i = s(124987),
    o = s(946716),
    c = s(856686);
function d(e, t) {
    let s = new Set(e);
    return s.has(t) ? s.delete(t) : s.add(t), s;
}
let u = { sortType: i.$.RECENCY, sortDirection: a.A.DESC },
    g = { sortType: i.$.POPULARITY, sortDirection: a.A.DESC },
    m = { sortType: i.$.RELEVANCE, sortDirection: a.A.DESC },
    _ = {
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
    h = (e) => {
        let { colorFilters: t, themeFilters: s, searchQuery: n, itemTypeFilters: r } = e;
        return t.size > 0 || s.size > 0 || "" !== n.trim() ? m : r.size > 0 ? g : u;
    },
    p = (0, r.v)(
        (0, l.eh)((e, t) => ({
            ..._,
            hasDefaultFilters: () =>
                !t().hasFilters() && t().sort.sortType === u.sortType && t().sort.sortDirection === u.sortDirection,
            hasFilters: () => {
                let { itemTypeFilters: e, colorFilters: s, themeFilters: n, orbEligible: r, searchQuery: l } = t();
                return [e, s, n].some((e) => e.size > 0) || r || "" !== l;
            },
            hasRelevanceFilters: () => {
                let { colorFilters: e, themeFilters: s, searchQuery: n } = t();
                return e.size > 0 || s.size > 0 || "" !== n.trim();
            },
            onToggleItemType: (t) => {
                e((e) => {
                    let s = d(e.itemTypeFilters, t),
                        n = { ...e, itemTypeFilters: s, queryPageOffset: 0 };
                    return e.userHasSelectedSort || (n.sort = h(n)), n;
                });
            },
            onToggleColor: (t) => {
                e((e) => {
                    let s = d(e.colorFilters, t),
                        n = { ...e, colorFilters: s, queryPageOffset: 0 };
                    return e.userHasSelectedSort || (n.sort = h(n)), n;
                });
            },
            onToggleTheme: (t) => {
                e((e) => {
                    let s = d(e.themeFilters, t),
                        n = { ...e, themeFilters: s, queryPageOffset: 0 };
                    return e.userHasSelectedSort || (n.sort = h(n)), n;
                });
            },
            onToggleOrbEligible: () => {
                e((e) => {
                    let t = { ...e, orbEligible: !e.orbEligible, queryPageOffset: 0 };
                    return e.userHasSelectedSort || (t.sort = h(t)), t;
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
                            ? ((s.sort = m), (s.userHasSelectedSort = !1))
                            : e.userHasSelectedSort || (s.sort = h(s)),
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
                        n = {
                            ...e,
                            colorFilters: new Set(),
                            themeFilters: new Set(),
                            orbEligible: !1,
                            itemTypeFilters: s,
                            queryPageOffset: 0,
                        };
                    return e.userHasSelectedSort || (n.sort = h(n)), n;
                });
            },
            clearFilters: () => {
                e({ colorFilters: new Set(), themeFilters: new Set(), itemTypeFilters: new Set(), orbEligible: !1 });
            },
            reset: () => {
                let { queryPageSize: s, queryPageOffset: n } = t();
                e({ ..._, queryPageSize: s, queryPageOffset: n });
            },
            setCurrentTab: (t) => {
                e({ currentTab: t });
            },
        })),
    ),
    f = (e) => {
        let {
            itemTypeFilters: t,
            colorFilters: s,
            themeFilters: n,
            orbEligible: r,
            sort: l,
            searchQuery: a,
            queryPageSize: i,
            queryPageOffset: o,
        } = e;
        return {
            item_types: Array.from(t),
            colors: Array.from(s),
            themes: Array.from(n),
            orbs_eligible: !!r || void 0,
            offset: o,
            limit: i,
            sort_type: l.sortType,
            sort_direction: l.sortDirection,
            search: "" !== a ? a : void 0,
        };
    },
    E = () => {
        let { onSetResponse: e, setSearchError: t, setIsFetchingResults: s } = (0, c.S)();
        n.useEffect(() => {
            let n = (n) => {
                let r = async () => {
                    s(!0);
                    try {
                        let t,
                            s,
                            r,
                            l,
                            a = await (0, o.$)(n);
                        e(
                            ((t = a.skus),
                            (s = a.pagination.total),
                            (r = a.pagination.has_more),
                            (l = a.pagination.offset),
                            { skus: t, totalCount: s, hasMorePages: r, pageOffset: l, pageLimit: a.pagination.limit }),
                        );
                    } catch (e) {
                        t(e?.message ?? "Unknown error");
                    } finally {
                        s(!1);
                    }
                };
                0 !== n.limit && r();
            };
            n(f(p.getState()));
            let r = p.subscribe(f, n, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
                l = p.subscribe(
                    (e) => e.hasFilters(),
                    (e, t) => {
                        if (!e && t) {
                            let e = p.getState();
                            e.userHasSelectedSort || p.setState({ sort: h(e) });
                        }
                    },
                );
            return () => {
                r(), l();
            };
        }, [e, t, s]);
    };
