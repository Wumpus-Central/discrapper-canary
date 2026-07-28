l.d(t, { S: () => p, v: () => E });
var r = l(582128),
    n = l(196765),
    s = l(537812),
    a = l(401864),
    i = l(124987),
    o = l(946716),
    c = l(856686);
function u(e, t) {
    let l = new Set(e);
    return l.has(t) ? l.delete(t) : l.add(t), l;
}
let d = { sortType: i.$.RECENCY, sortDirection: a.A.DESC },
    b = { sortType: i.$.POPULARITY, sortDirection: a.A.DESC },
    f = { sortType: i.$.RELEVANCE, sortDirection: a.A.DESC },
    m = {
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        thirdPartyOnly: !1,
        offerEligible: !1,
        sort: d,
        searchQuery: "",
        queryPageSize: 0,
        queryPageOffset: 0,
        isFetchingResults: !1,
        userHasSelectedSort: !1,
        currentTab: null,
    };
function S(e) {
    let { colorFilters: t, themeFilters: l, searchQuery: r, itemTypeFilters: n } = e;
    return t.size > 0 || l.size > 0 || "" !== r.trim() ? f : n.size > 0 ? b : d;
}
let E = (0, n.v)(
    (0, s.eh)((e, t) => ({
        ...m,
        hasDefaultFilters: () =>
            !t().hasFilters() && t().sort.sortType === d.sortType && t().sort.sortDirection === d.sortDirection,
        hasFilters: () => {
            let {
                itemTypeFilters: e,
                colorFilters: l,
                themeFilters: r,
                orbEligible: n,
                thirdPartyOnly: s,
                offerEligible: a,
                searchQuery: i,
            } = t();
            return [e, l, r].some((e) => e.size > 0) || n || s || a || "" !== i;
        },
        hasRelevanceFilters: () => {
            let { colorFilters: e, themeFilters: l, searchQuery: r } = t();
            return e.size > 0 || l.size > 0 || "" !== r.trim();
        },
        onToggleItemType: (t) => {
            e((e) => {
                let l = u(e.itemTypeFilters, t),
                    r = { ...e, itemTypeFilters: l, queryPageOffset: 0 };
                return e.userHasSelectedSort || (r.sort = S(r)), r;
            });
        },
        onToggleColor: (t) => {
            e((e) => {
                let l = u(e.colorFilters, t),
                    r = { ...e, colorFilters: l, queryPageOffset: 0 };
                return e.userHasSelectedSort || (r.sort = S(r)), r;
            });
        },
        onToggleTheme: (t) => {
            e((e) => {
                let l = u(e.themeFilters, t),
                    r = { ...e, themeFilters: l, queryPageOffset: 0 };
                return e.userHasSelectedSort || (r.sort = S(r)), r;
            });
        },
        onToggleOrbEligible: () => {
            e((e) => {
                let t = { ...e, orbEligible: !e.orbEligible, queryPageOffset: 0 };
                return e.userHasSelectedSort || (t.sort = S(t)), t;
            });
        },
        onToggleThirdPartyOnly: () => {
            e((e) => {
                let t = { ...e, thirdPartyOnly: !e.thirdPartyOnly, queryPageOffset: 0 };
                return e.userHasSelectedSort || (t.sort = S(t)), t;
            });
        },
        onToggleOfferEligible: () => {
            e((e) => {
                let t = { ...e, offerEligible: !e.offerEligible, queryPageOffset: 0 };
                return e.userHasSelectedSort || (t.sort = S(t)), t;
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
                        : e.userHasSelectedSort || (l.sort = S(l)),
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
                        thirdPartyOnly: !1,
                        offerEligible: !1,
                        itemTypeFilters: l,
                        queryPageOffset: 0,
                    };
                return e.userHasSelectedSort || (r.sort = S(r)), r;
            });
        },
        setThirdPartyOnlyFilter: () => {
            e((e) => {
                let t = {
                    ...e,
                    colorFilters: new Set(),
                    themeFilters: new Set(),
                    orbEligible: !1,
                    thirdPartyOnly: !0,
                    offerEligible: !1,
                    itemTypeFilters: new Set(),
                    queryPageOffset: 0,
                };
                return e.userHasSelectedSort || (t.sort = S(t)), t;
            });
        },
        setOfferEligibleFilter: () => {
            e((e) => {
                let t = {
                    ...e,
                    colorFilters: new Set(),
                    themeFilters: new Set(),
                    orbEligible: !1,
                    thirdPartyOnly: !1,
                    offerEligible: !0,
                    itemTypeFilters: new Set(),
                    queryPageOffset: 0,
                };
                return e.userHasSelectedSort || (t.sort = S(t)), t;
            });
        },
        clearFilters: () => {
            e({
                colorFilters: new Set(),
                themeFilters: new Set(),
                itemTypeFilters: new Set(),
                orbEligible: !1,
                thirdPartyOnly: !1,
                offerEligible: !1,
            });
        },
        reset: () => {
            let { queryPageSize: l, queryPageOffset: r } = t();
            e({ ...m, queryPageSize: l, queryPageOffset: r });
        },
        setCurrentTab: (t) => {
            e({ currentTab: t });
        },
    })),
);
function p(e) {
    let { onSetResponse: t, setSearchError: l, setIsFetchingResults: n } = (0, c.S)();
    r.useEffect(() => {
        function r(e) {
            async function r() {
                n(!0);
                try {
                    let l,
                        r,
                        n,
                        s,
                        a = await (0, o.$)(e);
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
                    thirdPartyOnly: a,
                    offerEligible: i,
                    sort: o,
                    searchQuery: c,
                    queryPageSize: u,
                    queryPageOffset: d,
                } = e;
                return {
                    item_types: Array.from(l),
                    colors: Array.from(r),
                    themes: Array.from(n),
                    orbs_eligible: !!s || void 0,
                    is_first_party: !a && void 0,
                    promotion_filter: !!i || void 0,
                    offset: d,
                    limit: u,
                    sort_type: o.sortType,
                    sort_direction: o.sortDirection,
                    search: "" !== c ? c : void 0,
                    include_unpublished: !!t || void 0,
                };
            })(t, e);
        }
        r(s(E.getState()));
        let a = E.subscribe(s, r, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
            i = E.subscribe(
                (e) => e.hasFilters(),
                (e, t) => {
                    if (!e && t) {
                        let e = E.getState();
                        e.userHasSelectedSort || E.setState({ sort: S(e) });
                    }
                },
            );
        return () => {
            a(), i();
        };
    }, [t, l, n, e]);
}
