r.d(t, { S: () => F, v: () => E });
var s = r(64700),
    o = r(353640),
    i = r(499867),
    l = r(401864),
    n = r(124987),
    a = r(636537),
    u = r(319400),
    c = r(39418),
    S = r(652215);
async function g(e) {
    let { timeout: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    try {
        return (await a.Bo.get({ url: S.Rsh.COLLECTIBLES_SEARCH, query: e, rejectWithError: !0, timeout: t })).body;
    } catch (t) {
        let e = new u.LG(t);
        throw ((0, c.o)(e), e);
    }
}
var f = r(856686);
function y(e, t) {
    let r = new Set(e);
    return r.has(t) ? r.delete(t) : r.add(t), r;
}
let h = { sortType: n.$.RECENCY, sortDirection: l.A.DESC },
    p = { sortType: n.$.POPULARITY, sortDirection: l.A.DESC },
    d = { sortType: n.$.RELEVANCE, sortDirection: l.A.DESC },
    m = {
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        sort: h,
        searchQuery: "",
        queryPageSize: 0,
        queryPageOffset: 0,
        isFetchingResults: !1,
        userHasSelectedSort: !1,
        currentTab: null,
    };
function b(e) {
    let { colorFilters: t, themeFilters: r, searchQuery: s, itemTypeFilters: o } = e;
    return t.size > 0 || r.size > 0 || "" !== s.trim() ? d : o.size > 0 ? p : h;
}
let E = (0, o.v)(
    (0, i.eh)((e, t) => ({
        ...m,
        hasDefaultFilters: () =>
            !t().hasFilters() && t().sort.sortType === h.sortType && t().sort.sortDirection === h.sortDirection,
        hasFilters: () => {
            let { itemTypeFilters: e, colorFilters: r, themeFilters: s, orbEligible: o, searchQuery: i } = t();
            return [e, r, s].some((e) => e.size > 0) || o || "" !== i;
        },
        hasRelevanceFilters: () => {
            let { colorFilters: e, themeFilters: r, searchQuery: s } = t();
            return e.size > 0 || r.size > 0 || "" !== s.trim();
        },
        onToggleItemType: (t) => {
            e((e) => {
                let r = y(e.itemTypeFilters, t),
                    s = { ...e, itemTypeFilters: r, queryPageOffset: 0 };
                return e.userHasSelectedSort || (s.sort = b(s)), s;
            });
        },
        onToggleColor: (t) => {
            e((e) => {
                let r = y(e.colorFilters, t),
                    s = { ...e, colorFilters: r, queryPageOffset: 0 };
                return e.userHasSelectedSort || (s.sort = b(s)), s;
            });
        },
        onToggleTheme: (t) => {
            e((e) => {
                let r = y(e.themeFilters, t),
                    s = { ...e, themeFilters: r, queryPageOffset: 0 };
                return e.userHasSelectedSort || (s.sort = b(s)), s;
            });
        },
        onToggleOrbEligible: () => {
            e((e) => {
                let t = { ...e, orbEligible: !e.orbEligible, queryPageOffset: 0 };
                return e.userHasSelectedSort || (t.sort = b(t)), t;
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
                        ? ((r.sort = d), (r.userHasSelectedSort = !1))
                        : e.userHasSelectedSort || (r.sort = b(r)),
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
                return e.userHasSelectedSort || (s.sort = b(s)), s;
            });
        },
        clearFilters: () => {
            e({ colorFilters: new Set(), themeFilters: new Set(), itemTypeFilters: new Set(), orbEligible: !1 });
        },
        reset: () => {
            let { queryPageSize: r, queryPageOffset: s } = t();
            e({ ...m, queryPageSize: r, queryPageOffset: s });
        },
        setCurrentTab: (t) => {
            e({ currentTab: t });
        },
    })),
);
function F(e) {
    let { onSetResponse: t, setSearchError: r, setIsFetchingResults: o } = (0, f.S)();
    s.useEffect(() => {
        function s(e) {
            async function s() {
                o(!0);
                try {
                    let r,
                        s,
                        o,
                        i,
                        l = await g(e);
                    t(
                        ((r = l.skus),
                        (s = l.pagination.total),
                        (o = l.pagination.has_more),
                        (i = l.pagination.offset),
                        { skus: r, totalCount: s, hasMorePages: o, pageOffset: i, pageLimit: l.pagination.limit }),
                    );
                } catch (e) {
                    r(e?.message ?? "Unknown error");
                } finally {
                    o(!1);
                }
            }
            0 !== e.limit && s();
        }
        function i(t) {
            return (function (e, t) {
                let {
                    itemTypeFilters: r,
                    colorFilters: s,
                    themeFilters: o,
                    orbEligible: i,
                    sort: l,
                    searchQuery: n,
                    queryPageSize: a,
                    queryPageOffset: u,
                } = e;
                return {
                    item_types: Array.from(r),
                    colors: Array.from(s),
                    themes: Array.from(o),
                    orbs_eligible: !!i || void 0,
                    offset: u,
                    limit: a,
                    sort_type: l.sortType,
                    sort_direction: l.sortDirection,
                    search: "" !== n ? n : void 0,
                    include_unpublished: !!t || void 0,
                };
            })(t, e);
        }
        s(i(E.getState()));
        let l = E.subscribe(i, s, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
            n = E.subscribe(
                (e) => e.hasFilters(),
                (e, t) => {
                    if (!e && t) {
                        let e = E.getState();
                        e.userHasSelectedSort || E.setState({ sort: b(e) });
                    }
                },
            );
        return () => {
            l(), n();
        };
    }, [t, r, o, e]);
}
