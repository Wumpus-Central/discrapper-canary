l.d(t, { S: () => A, v: () => g });
var r = l(64700),
    n = l(353640),
    s = l(499867),
    a = l(401864),
    o = l(124987),
    i = l(636537),
    c = l(319400),
    u = l(18572),
    d = l(652215);
async function b(e) {
    try {
        return (await i.Bo.get({ url: d.Rsh.COLLECTIBLES_SEARCH, query: e, rejectWithError: !0 })).body;
    } catch (t) {
        let e = new c.LG(t);
        throw ((0, u.o)(e), e);
    }
}
var m = l(856686);
function p(e, t) {
    let l = new Set(e);
    return l.has(t) ? l.delete(t) : l.add(t), l;
}
let S = { sortType: o.$.RECENCY, sortDirection: a.A.DESC },
    E = { sortType: o.$.POPULARITY, sortDirection: a.A.DESC },
    f = { sortType: o.$.RELEVANCE, sortDirection: a.A.DESC },
    h = {
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
    };
function C(e) {
    let { colorFilters: t, themeFilters: l, searchQuery: r, itemTypeFilters: n } = e;
    return t.size > 0 || l.size > 0 || "" !== r.trim() ? f : n.size > 0 ? E : S;
}
let g = (0, n.v)(
    (0, s.eh)((e, t) => ({
        ...h,
        hasDefaultFilters: () =>
            !t().hasFilters() && t().sort.sortType === S.sortType && t().sort.sortDirection === S.sortDirection,
        hasFilters: () => {
            let { itemTypeFilters: e, colorFilters: l, themeFilters: r, orbEligible: n, searchQuery: s } = t();
            return [e, l, r].some((e) => e.size > 0) || n || "" !== s;
        },
        hasRelevanceFilters: () => {
            let { colorFilters: e, themeFilters: l, searchQuery: r } = t();
            return e.size > 0 || l.size > 0 || "" !== r.trim();
        },
        onToggleItemType: (t) => {
            e((e) => {
                let l = p(e.itemTypeFilters, t),
                    r = { ...e, itemTypeFilters: l, queryPageOffset: 0 };
                return e.userHasSelectedSort || (r.sort = C(r)), r;
            });
        },
        onToggleColor: (t) => {
            e((e) => {
                let l = p(e.colorFilters, t),
                    r = { ...e, colorFilters: l, queryPageOffset: 0 };
                return e.userHasSelectedSort || (r.sort = C(r)), r;
            });
        },
        onToggleTheme: (t) => {
            e((e) => {
                let l = p(e.themeFilters, t),
                    r = { ...e, themeFilters: l, queryPageOffset: 0 };
                return e.userHasSelectedSort || (r.sort = C(r)), r;
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
                let l = { ...e, searchQuery: t, queryPageOffset: 0 };
                return (
                    "" !== t.trim()
                        ? ((l.sort = f), (l.userHasSelectedSort = !1))
                        : e.userHasSelectedSort || (l.sort = C(l)),
                    l
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
                let l = new Set([t]),
                    r = {
                        ...e,
                        colorFilters: new Set(),
                        themeFilters: new Set(),
                        orbEligible: !1,
                        itemTypeFilters: l,
                        queryPageOffset: 0,
                    };
                return e.userHasSelectedSort || (r.sort = C(r)), r;
            });
        },
        clearFilters: () => {
            e({ colorFilters: new Set(), themeFilters: new Set(), itemTypeFilters: new Set(), orbEligible: !1 });
        },
        reset: () => {
            let { queryPageSize: l, queryPageOffset: r } = t();
            e({ ...h, queryPageSize: l, queryPageOffset: r });
        },
        setCurrentTab: (t) => {
            e({ currentTab: t });
        },
    })),
);
function A(e) {
    let { onSetResponse: t, setSearchError: l, setIsFetchingResults: n } = (0, m.S)();
    r.useEffect(() => {
        function r(e) {
            async function r() {
                n(!0);
                try {
                    let l,
                        r,
                        n,
                        s,
                        a = await b(e);
                    t(
                        ((l = a.skus),
                        (r = a.pagination.total),
                        (n = a.pagination.has_more),
                        (s = a.pagination.offset),
                        { skus: l, totalCount: r, hasMorePages: n, pageOffset: s, pageLimit: a.pagination.limit }),
                    );
                } catch (e) {
                    l(e?.message ?? "Unknown error");
                } finally {
                    n(!1);
                }
            }
            0 !== e.limit && r();
        }
        function s(t) {
            return (function (e, t) {
                let {
                    itemTypeFilters: l,
                    colorFilters: r,
                    themeFilters: n,
                    orbEligible: s,
                    sort: a,
                    searchQuery: o,
                    queryPageSize: i,
                    queryPageOffset: c,
                } = e;
                return {
                    item_types: Array.from(l),
                    colors: Array.from(r),
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
        }
        r(s(g.getState()));
        let a = g.subscribe(s, r, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
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
    }, [t, l, n, e]);
}
