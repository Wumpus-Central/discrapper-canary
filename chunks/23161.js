r.d(t, { S: () => A, v: () => g });
var l = r(64700),
    n = r(353640),
    s = r(499867),
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
function p(e, t) {
    let r = new Set(e);
    return r.has(t) ? r.delete(t) : r.add(t), r;
}
let S = { sortType: o.$.RECENCY, sortDirection: a.A.DESC },
    E = { sortType: o.$.POPULARITY, sortDirection: a.A.DESC },
    h = { sortType: o.$.RELEVANCE, sortDirection: a.A.DESC },
    f = {
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        sort: S,
        searchQuery: "",
        queryPageSize: 0,
        queryPageOffset: 0,
        isFetchingResults: !1,
        userHasSelectedSort: !1,
        currentTab: null,
    },
    C = (e) => {
        let { colorFilters: t, themeFilters: r, searchQuery: l, itemTypeFilters: n } = e;
        return t.size > 0 || r.size > 0 || "" !== l.trim() ? h : n.size > 0 ? E : S;
    },
    g = (0, n.v)(
        (0, s.eh)((e, t) => ({
            ...f,
            hasDefaultFilters: () =>
                !t().hasFilters() && t().sort.sortType === S.sortType && t().sort.sortDirection === S.sortDirection,
            hasFilters: () => {
                let { itemTypeFilters: e, colorFilters: r, themeFilters: l, orbEligible: n, searchQuery: s } = t();
                return [e, r, l].some((e) => e.size > 0) || n || "" !== s;
            },
            hasRelevanceFilters: () => {
                let { colorFilters: e, themeFilters: r, searchQuery: l } = t();
                return e.size > 0 || r.size > 0 || "" !== l.trim();
            },
            onToggleItemType: (t) => {
                e((e) => {
                    let r = p(e.itemTypeFilters, t),
                        l = { ...e, itemTypeFilters: r, queryPageOffset: 0 };
                    return e.userHasSelectedSort || (l.sort = C(l)), l;
                });
            },
            onToggleColor: (t) => {
                e((e) => {
                    let r = p(e.colorFilters, t),
                        l = { ...e, colorFilters: r, queryPageOffset: 0 };
                    return e.userHasSelectedSort || (l.sort = C(l)), l;
                });
            },
            onToggleTheme: (t) => {
                e((e) => {
                    let r = p(e.themeFilters, t),
                        l = { ...e, themeFilters: r, queryPageOffset: 0 };
                    return e.userHasSelectedSort || (l.sort = C(l)), l;
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
                            ? ((r.sort = h), (r.userHasSelectedSort = !1))
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
                        l = {
                            ...e,
                            colorFilters: new Set(),
                            themeFilters: new Set(),
                            orbEligible: !1,
                            itemTypeFilters: r,
                            queryPageOffset: 0,
                        };
                    return e.userHasSelectedSort || (l.sort = C(l)), l;
                });
            },
            clearFilters: () => {
                e({ colorFilters: new Set(), themeFilters: new Set(), itemTypeFilters: new Set(), orbEligible: !1 });
            },
            reset: () => {
                let { queryPageSize: r, queryPageOffset: l } = t();
                e({ ...f, queryPageSize: r, queryPageOffset: l });
            },
            setCurrentTab: (t) => {
                e({ currentTab: t });
            },
        })),
    ),
    A = (e) => {
        let { onSetResponse: t, setSearchError: r, setIsFetchingResults: n } = (0, m.S)();
        l.useEffect(() => {
            let l = (e) => {
                    let l = async () => {
                        n(!0);
                        try {
                            let r,
                                l,
                                n,
                                s,
                                a = await b(e);
                            t(
                                ((r = a.skus),
                                (l = a.pagination.total),
                                (n = a.pagination.has_more),
                                (s = a.pagination.offset),
                                {
                                    skus: r,
                                    totalCount: l,
                                    hasMorePages: n,
                                    pageOffset: s,
                                    pageLimit: a.pagination.limit,
                                }),
                            );
                        } catch (e) {
                            r(e?.message ?? "Unknown error");
                        } finally {
                            n(!1);
                        }
                    };
                    0 !== e.limit && l();
                },
                s = (t) =>
                    ((e, t) => {
                        let {
                            itemTypeFilters: r,
                            colorFilters: l,
                            themeFilters: n,
                            orbEligible: s,
                            sort: a,
                            searchQuery: o,
                            queryPageSize: i,
                            queryPageOffset: c,
                        } = e;
                        return {
                            item_types: Array.from(r),
                            colors: Array.from(l),
                            themes: Array.from(n),
                            orbs_eligible: !!s || void 0,
                            offset: c,
                            limit: i,
                            sort_type: a.sortType,
                            sort_direction: a.sortDirection,
                            search: "" !== o ? o : void 0,
                            include_unpublished: !!t || void 0,
                        };
                    })(t, e);
            l(s(g.getState()));
            let a = g.subscribe(s, l, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
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
        }, [t, r, n, e]);
    };
