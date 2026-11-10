var l = r(582128),
    s = r(196765),
    i = r(537812),
    n = r(401864),
    o = r(124987),
    u = r(319400),
    a = r(946716),
    c = r(856686),
    f = r(758836);
function S(e, t) {
    let r = new Set(e);
    return (r.has(t) ? r.delete(t) : r.add(t), r);
}
let y = { sortType: o.$.RECENCY, sortDirection: n.A.DESC },
    g = { sortType: o.$.POPULARITY, sortDirection: n.A.DESC },
    h = { sortType: o.$.RELEVANCE, sortDirection: n.A.DESC },
    d = {
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        thirdPartyOnly: !1,
        offerEligible: !1,
        sort: y,
        searchQuery: "",
        queryPageSize: 0,
        queryPageOffset: 0,
        isFetchingResults: !1,
        userHasSelectedSort: !1,
        currentTab: null,
    };
function E(e) {
    let { colorFilters: t, themeFilters: r, searchQuery: l, itemTypeFilters: s } = e;
    return t.size > 0 || r.size > 0 || "" !== l.trim() ? h : s.size > 0 ? g : y;
}
let p = (0, s.v)(
    (0, i.eh)((e, t) => ({
        ...d,
        hasDefaultFilters: () =>
            !t().hasFilters() && t().sort.sortType === y.sortType && t().sort.sortDirection === y.sortDirection,
        hasFilters: () => {
            let {
                itemTypeFilters: e,
                colorFilters: r,
                themeFilters: l,
                orbEligible: s,
                thirdPartyOnly: i,
                offerEligible: n,
                searchQuery: o,
            } = t();
            return [e, r, l].some((e) => e.size > 0) || s || i || n || "" !== o;
        },
        hasRelevanceFilters: () => {
            let { colorFilters: e, themeFilters: r, searchQuery: l } = t();
            return e.size > 0 || r.size > 0 || "" !== l.trim();
        },
        onToggleItemType: (t) => {
            e((e) => {
                let r = S(e.itemTypeFilters, t),
                    l = { ...e, itemTypeFilters: r, queryPageOffset: 0 };
                return (e.userHasSelectedSort || (l.sort = E(l)), l);
            });
        },
        onToggleColor: (t) => {
            e((e) => {
                let r = S(e.colorFilters, t),
                    l = { ...e, colorFilters: r, queryPageOffset: 0 };
                return (e.userHasSelectedSort || (l.sort = E(l)), l);
            });
        },
        onToggleTheme: (t) => {
            e((e) => {
                let r = S(e.themeFilters, t),
                    l = { ...e, themeFilters: r, queryPageOffset: 0 };
                return (e.userHasSelectedSort || (l.sort = E(l)), l);
            });
        },
        onToggleOrbEligible: () => {
            e((e) => {
                let t = { ...e, orbEligible: !e.orbEligible, queryPageOffset: 0 };
                return (e.userHasSelectedSort || (t.sort = E(t)), t);
            });
        },
        onToggleThirdPartyOnly: () => {
            e((e) => {
                let t = { ...e, thirdPartyOnly: !e.thirdPartyOnly, queryPageOffset: 0 };
                return (e.userHasSelectedSort || (t.sort = E(t)), t);
            });
        },
        onToggleOfferEligible: () => {
            e((e) => {
                let t = { ...e, offerEligible: !e.offerEligible, queryPageOffset: 0 };
                return (e.userHasSelectedSort || (t.sort = E(t)), t);
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
                        : e.userHasSelectedSort || (r.sort = E(r)),
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
                        thirdPartyOnly: !1,
                        offerEligible: !1,
                        itemTypeFilters: r,
                        queryPageOffset: 0,
                    };
                return (e.userHasSelectedSort || (l.sort = E(l)), l);
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
                return (e.userHasSelectedSort || (t.sort = E(t)), t);
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
                return (e.userHasSelectedSort || (t.sort = E(t)), t);
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
                queryPageOffset: 0,
            });
        },
        reset: () => {
            let { queryPageSize: r, queryPageOffset: l } = t();
            e({ ...d, queryPageSize: r, queryPageOffset: l });
        },
        resetWithSearchQuery: (r) => {
            let { queryPageSize: l } = t();
            e({ ...d, queryPageSize: l, searchQuery: r, sort: "" !== r.trim() ? h : y });
        },
        setCurrentTab: (t) => {
            e({ currentTab: t });
        },
    })),
);
r.d(
    t,
    {},
    {
        Sf: function (e) {
            let { startRequest: t, onSetResponse: r, setSearchError: s, setIsFetchingResults: i } = (0, c.S)();
            l.useEffect(() => {
                function l(e) {
                    0 !== e.limit &&
                        (async function () {
                            let l = t(),
                                n = e.search ?? "";
                            try {
                                let t,
                                    s,
                                    i,
                                    o,
                                    u = await (0, a.$)(e);
                                r(
                                    ((t = u.skus),
                                    (s = u.pagination.total),
                                    (i = u.pagination.has_more),
                                    (o = u.pagination.offset),
                                    {
                                        skus: t,
                                        totalCount: s,
                                        hasMorePages: i,
                                        pageOffset: o,
                                        pageLimit: u.pagination.limit,
                                    }),
                                    n,
                                    l,
                                );
                            } catch (t) {
                                let e;
                                s(
                                    t?.message ?? "Unknown error",
                                    n,
                                    null != (e = t instanceof u.LG ? t.status : null) && e > 0
                                        ? { type: f.El.HTTP, code: e }
                                        : { type: f.El.NETWORK, code: null },
                                    l,
                                );
                            } finally {
                                i(!1);
                            }
                        })();
                }
                function n(t) {
                    return (function (e, t) {
                        let {
                            itemTypeFilters: r,
                            colorFilters: l,
                            themeFilters: s,
                            orbEligible: i,
                            thirdPartyOnly: n,
                            offerEligible: o,
                            sort: u,
                            searchQuery: a,
                            queryPageSize: c,
                            queryPageOffset: f,
                        } = e;
                        return {
                            item_types: Array.from(r),
                            colors: Array.from(l),
                            themes: Array.from(s),
                            orbs_eligible: !!i || void 0,
                            is_first_party: !n && void 0,
                            promotion_filter: !!o || void 0,
                            offset: f,
                            limit: c,
                            sort_type: u.sortType,
                            sort_direction: u.sortDirection,
                            search: "" !== a ? a.slice(0, 256) : void 0,
                            include_unpublished: !!t || void 0,
                            published_collections_only: !0,
                        };
                    })(t, e);
                }
                l(n(p.getState()));
                let o = p.subscribe(n, l, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
                    c = p.subscribe(
                        (e) => e.hasFilters(),
                        (e, t) => {
                            if (!e && t) {
                                let e = p.getState();
                                e.userHasSelectedSort || p.setState({ sort: E(e) });
                            }
                        },
                    );
                return () => {
                    (o(), c());
                };
            }, [t, r, s, i, e]);
        },
        vs: p,
    },
);
