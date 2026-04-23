r.d(t, { S: () => A, v: () => S });
var n = r(64700),
    s = r(353640),
    l = r(499867),
    a = r(401864),
    o = r(124987),
    i = r(636537),
    c = r(319400),
    d = r(18572),
    u = r(652215);
let _ = async (e) => {
    try {
        return (await i.Bo.get({ url: u.Rsh.COLLECTIBLES_SEARCH, query: e, rejectWithError: !0 })).body;
    } catch (t) {
        let e = new c.LG(t);
        throw ((0, d.o)(e), e);
    }
};
var b = r(856686);
function p(e, t) {
    let r = new Set(e);
    return r.has(t) ? r.delete(t) : r.add(t), r;
}
let m = { sortType: o.$.RECENCY, sortDirection: a.A.DESC },
    f = { sortType: o.$.POPULARITY, sortDirection: a.A.DESC },
    C = { sortType: o.$.RELEVANCE, sortDirection: a.A.DESC },
    g = {
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        sort: m,
        searchQuery: "",
        queryPageSize: 0,
        queryPageOffset: 0,
        isFetchingResults: !1,
        userHasSelectedSort: !1,
        currentTab: null,
    },
    h = (e) => {
        let { colorFilters: t, themeFilters: r, searchQuery: n, itemTypeFilters: s } = e;
        return t.size > 0 || r.size > 0 || "" !== n.trim() ? C : s.size > 0 ? f : m;
    },
    S = (0, s.v)(
        (0, l.eh)((e, t) => ({
            ...g,
            hasDefaultFilters: () =>
                !t().hasFilters() && t().sort.sortType === m.sortType && t().sort.sortDirection === m.sortDirection,
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
                    let r = p(e.itemTypeFilters, t),
                        n = { ...e, itemTypeFilters: r, queryPageOffset: 0 };
                    return e.userHasSelectedSort || (n.sort = h(n)), n;
                });
            },
            onToggleColor: (t) => {
                e((e) => {
                    let r = p(e.colorFilters, t),
                        n = { ...e, colorFilters: r, queryPageOffset: 0 };
                    return e.userHasSelectedSort || (n.sort = h(n)), n;
                });
            },
            onToggleTheme: (t) => {
                e((e) => {
                    let r = p(e.themeFilters, t),
                        n = { ...e, themeFilters: r, queryPageOffset: 0 };
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
                    let r = { ...e, searchQuery: t, queryPageOffset: 0 };
                    return (
                        "" !== t.trim()
                            ? ((r.sort = C), (r.userHasSelectedSort = !1))
                            : e.userHasSelectedSort || (r.sort = h(r)),
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
                    return e.userHasSelectedSort || (n.sort = h(n)), n;
                });
            },
            clearFilters: () => {
                e({ colorFilters: new Set(), themeFilters: new Set(), itemTypeFilters: new Set(), orbEligible: !1 });
            },
            reset: () => {
                let { queryPageSize: r, queryPageOffset: n } = t();
                e({ ...g, queryPageSize: r, queryPageOffset: n });
            },
            setCurrentTab: (t) => {
                e({ currentTab: t });
            },
        })),
    ),
    E = (e) => {
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
    A = () => {
        let { onSetResponse: e, setSearchError: t, setIsFetchingResults: r } = (0, b.S)();
        n.useEffect(() => {
            let n = (n) => {
                let s = async () => {
                    r(!0);
                    try {
                        let t,
                            r,
                            s,
                            l,
                            a = await _(n);
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
            n(E(S.getState()));
            let s = S.subscribe(E, n, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
                l = S.subscribe(
                    (e) => e.hasFilters(),
                    (e, t) => {
                        if (!e && t) {
                            let e = S.getState();
                            e.userHasSelectedSort || S.setState({ sort: h(e) });
                        }
                    },
                );
            return () => {
                s(), l();
            };
        }, [e, t, r]);
    };
