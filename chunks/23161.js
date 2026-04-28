r.d(t, { S: () => A, v: () => g });
var s = r(64700),
    l = r(353640),
    n = r(499867),
    a = r(401864),
    o = r(124987),
    i = r(636537),
    c = r(319400),
    u = r(18572),
    d = r(652215);
let b = async (e) => {
    try {
        return (await i.Bo.get({ url: d.Rsh.COLLECTIBLES_SEARCH, query: e, rejectWithError: !0 })).body;
    } catch (t) {
        let e = new c.LG(t);
        throw ((0, u.o)(e), e);
    }
};
var m = r(856686);
function S(e, t) {
    let r = new Set(e);
    return r.has(t) ? r.delete(t) : r.add(t), r;
}
let p = { sortType: o.$.RECENCY, sortDirection: a.A.DESC },
    h = { sortType: o.$.POPULARITY, sortDirection: a.A.DESC },
    E = { sortType: o.$.RELEVANCE, sortDirection: a.A.DESC },
    f = {
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        sort: p,
        searchQuery: "",
        queryPageSize: 0,
        queryPageOffset: 0,
        isFetchingResults: !1,
        userHasSelectedSort: !1,
        currentTab: null,
    },
    C = (e) => {
        let { colorFilters: t, themeFilters: r, searchQuery: s, itemTypeFilters: l } = e;
        return t.size > 0 || r.size > 0 || "" !== s.trim() ? E : l.size > 0 ? h : p;
    },
    g = (0, l.v)(
        (0, n.eh)((e, t) => ({
            ...f,
            hasDefaultFilters: () =>
                !t().hasFilters() && t().sort.sortType === p.sortType && t().sort.sortDirection === p.sortDirection,
            hasFilters: () => {
                let { itemTypeFilters: e, colorFilters: r, themeFilters: s, orbEligible: l, searchQuery: n } = t();
                return [e, r, s].some((e) => e.size > 0) || l || "" !== n;
            },
            hasRelevanceFilters: () => {
                let { colorFilters: e, themeFilters: r, searchQuery: s } = t();
                return e.size > 0 || r.size > 0 || "" !== s.trim();
            },
            onToggleItemType: (t) => {
                e((e) => {
                    let r = S(e.itemTypeFilters, t),
                        s = { ...e, itemTypeFilters: r, queryPageOffset: 0 };
                    return e.userHasSelectedSort || (s.sort = C(s)), s;
                });
            },
            onToggleColor: (t) => {
                e((e) => {
                    let r = S(e.colorFilters, t),
                        s = { ...e, colorFilters: r, queryPageOffset: 0 };
                    return e.userHasSelectedSort || (s.sort = C(s)), s;
                });
            },
            onToggleTheme: (t) => {
                e((e) => {
                    let r = S(e.themeFilters, t),
                        s = { ...e, themeFilters: r, queryPageOffset: 0 };
                    return e.userHasSelectedSort || (s.sort = C(s)), s;
                });
            },
            onToggleOrbEligible: () => {
                e((e) => {
                    let t = { ...e, orbEligible: !e.orbEligible, queryPageOffset: 0 };
                    return e.userHasSelectedSort || (t.sort = C(t)), t;
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
                            ? ((r.sort = E), (r.userHasSelectedSort = !1))
                            : e.userHasSelectedSort || (r.sort = C(r)),
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
                        s = {
                            ...e,
                            colorFilters: new Set(),
                            themeFilters: new Set(),
                            orbEligible: !1,
                            itemTypeFilters: r,
                            queryPageOffset: 0,
                        };
                    return e.userHasSelectedSort || (s.sort = C(s)), s;
                });
            },
            clearFilters: () => {
                e({ colorFilters: new Set(), themeFilters: new Set(), itemTypeFilters: new Set(), orbEligible: !1 });
            },
            reset: () => {
                let { queryPageSize: r, queryPageOffset: s } = t();
                e({ ...f, queryPageSize: r, queryPageOffset: s });
            },
            setCurrentTab: (t) => {
                e({ currentTab: t });
            },
        })),
    ),
    A = (e) => {
        let { onSetResponse: t, setSearchError: r, setIsFetchingResults: l } = (0, m.S)();
        s.useEffect(() => {
            let s = (e) => {
                    let s = async () => {
                        l(!0);
                        try {
                            let r,
                                s,
                                l,
                                n,
                                a = await b(e);
                            t(
                                ((r = a.skus),
                                (s = a.pagination.total),
                                (l = a.pagination.has_more),
                                (n = a.pagination.offset),
                                {
                                    skus: r,
                                    totalCount: s,
                                    hasMorePages: l,
                                    pageOffset: n,
                                    pageLimit: a.pagination.limit,
                                }),
                            );
                        } catch (e) {
                            r(e?.message ?? "Unknown error");
                        } finally {
                            l(!1);
                        }
                    };
                    0 !== e.limit && s();
                },
                n = (t) =>
                    ((e, t) => {
                        let {
                            itemTypeFilters: r,
                            colorFilters: s,
                            themeFilters: l,
                            orbEligible: n,
                            sort: a,
                            searchQuery: o,
                            queryPageSize: i,
                            queryPageOffset: c,
                        } = e;
                        return {
                            item_types: Array.from(r),
                            colors: Array.from(s),
                            themes: Array.from(l),
                            orbs_eligible: !!n || void 0,
                            offset: c,
                            limit: i,
                            sort_type: a.sortType,
                            sort_direction: a.sortDirection,
                            search: "" !== o ? o : void 0,
                            include_unpublished: !!t || void 0,
                        };
                    })(t, e);
            s(n(g.getState()));
            let a = g.subscribe(n, s, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
                o = g.subscribe(
                    (e) => e.hasFilters(),
                    (e, t) => {
                        if (!e && t) {
                            let e = g.getState();
                            e.userHasSelectedSort || g.setState({ sort: C(e) });
                        }
                    },
                );
            return () => {
                a(), o();
            };
        }, [t, r, l, e]);
    };
