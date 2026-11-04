var l = r(582128),
    s = r(196765),
    i = r(537812),
    o = r(401864),
    n = r(124987),
    u = r(946716),
    a = r(856686);
function c(e, t) {
    let r = new Set(e);
    return (r.has(t) ? r.delete(t) : r.add(t), r);
}
let f = { sortType: n.$.RECENCY, sortDirection: o.A.DESC },
    S = { sortType: n.$.POPULARITY, sortDirection: o.A.DESC },
    y = { sortType: n.$.RELEVANCE, sortDirection: o.A.DESC },
    g = {
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        thirdPartyOnly: !1,
        offerEligible: !1,
        sort: f,
        searchQuery: "",
        queryPageSize: 0,
        queryPageOffset: 0,
        isFetchingResults: !1,
        userHasSelectedSort: !1,
        currentTab: null,
    };
function h(e) {
    let { colorFilters: t, themeFilters: r, searchQuery: l, itemTypeFilters: s } = e;
    return t.size > 0 || r.size > 0 || "" !== l.trim() ? y : s.size > 0 ? S : f;
}
let d = (0, s.v)(
    (0, i.eh)((e, t) => ({
        ...g,
        hasDefaultFilters: () =>
            !t().hasFilters() && t().sort.sortType === f.sortType && t().sort.sortDirection === f.sortDirection,
        hasFilters: () => {
            let {
                itemTypeFilters: e,
                colorFilters: r,
                themeFilters: l,
                orbEligible: s,
                thirdPartyOnly: i,
                offerEligible: o,
                searchQuery: n,
            } = t();
            return [e, r, l].some((e) => e.size > 0) || s || i || o || "" !== n;
        },
        hasRelevanceFilters: () => {
            let { colorFilters: e, themeFilters: r, searchQuery: l } = t();
            return e.size > 0 || r.size > 0 || "" !== l.trim();
        },
        onToggleItemType: (t) => {
            e((e) => {
                let r = c(e.itemTypeFilters, t),
                    l = { ...e, itemTypeFilters: r, queryPageOffset: 0 };
                return (e.userHasSelectedSort || (l.sort = h(l)), l);
            });
        },
        onToggleColor: (t) => {
            e((e) => {
                let r = c(e.colorFilters, t),
                    l = { ...e, colorFilters: r, queryPageOffset: 0 };
                return (e.userHasSelectedSort || (l.sort = h(l)), l);
            });
        },
        onToggleTheme: (t) => {
            e((e) => {
                let r = c(e.themeFilters, t),
                    l = { ...e, themeFilters: r, queryPageOffset: 0 };
                return (e.userHasSelectedSort || (l.sort = h(l)), l);
            });
        },
        onToggleOrbEligible: () => {
            e((e) => {
                let t = { ...e, orbEligible: !e.orbEligible, queryPageOffset: 0 };
                return (e.userHasSelectedSort || (t.sort = h(t)), t);
            });
        },
        onToggleThirdPartyOnly: () => {
            e((e) => {
                let t = { ...e, thirdPartyOnly: !e.thirdPartyOnly, queryPageOffset: 0 };
                return (e.userHasSelectedSort || (t.sort = h(t)), t);
            });
        },
        onToggleOfferEligible: () => {
            e((e) => {
                let t = { ...e, offerEligible: !e.offerEligible, queryPageOffset: 0 };
                return (e.userHasSelectedSort || (t.sort = h(t)), t);
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
                        ? ((r.sort = y), (r.userHasSelectedSort = !1))
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
                return (e.userHasSelectedSort || (l.sort = h(l)), l);
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
                return (e.userHasSelectedSort || (t.sort = h(t)), t);
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
                return (e.userHasSelectedSort || (t.sort = h(t)), t);
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
            e({ ...g, queryPageSize: r, queryPageOffset: l });
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
        S: function (e) {
            let { onSetResponse: t, setSearchError: r, setIsFetchingResults: s } = (0, a.S)();
            l.useEffect(() => {
                function l(e) {
                    0 !== e.limit &&
                        (async function () {
                            s(!0);
                            try {
                                let r,
                                    l,
                                    s,
                                    i,
                                    o = await (0, u.$)(e);
                                t(
                                    ((r = o.skus),
                                    (l = o.pagination.total),
                                    (s = o.pagination.has_more),
                                    (i = o.pagination.offset),
                                    {
                                        skus: r,
                                        totalCount: l,
                                        hasMorePages: s,
                                        pageOffset: i,
                                        pageLimit: o.pagination.limit,
                                    }),
                                );
                            } catch (e) {
                                r(e?.message ?? "Unknown error");
                            } finally {
                                s(!1);
                            }
                        })();
                }
                function i(t) {
                    return (function (e, t) {
                        let {
                            itemTypeFilters: r,
                            colorFilters: l,
                            themeFilters: s,
                            orbEligible: i,
                            thirdPartyOnly: o,
                            offerEligible: n,
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
                            is_first_party: !o && void 0,
                            promotion_filter: !!n || void 0,
                            offset: f,
                            limit: c,
                            sort_type: u.sortType,
                            sort_direction: u.sortDirection,
                            search: "" !== a ? a : void 0,
                            include_unpublished: !!t || void 0,
                            published_collections_only: !0,
                        };
                    })(t, e);
                }
                l(i(d.getState()));
                let o = d.subscribe(i, l, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
                    n = d.subscribe(
                        (e) => e.hasFilters(),
                        (e, t) => {
                            if (!e && t) {
                                let e = d.getState();
                                e.userHasSelectedSort || d.setState({ sort: h(e) });
                            }
                        },
                    );
                return () => {
                    (o(), n());
                };
            }, [t, r, s, e]);
        },
        v: d,
    },
);
