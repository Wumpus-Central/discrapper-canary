r.d(t, { S: () => b, v: () => d });
var s = r(582128),
    i = r(196765),
    l = r(537812),
    o = r(401864),
    n = r(124987),
    a = r(946716),
    u = r(856686);
function f(e, t) {
    let r = new Set(e);
    return (r.has(t) ? r.delete(t) : r.add(t), r);
}
let c = { sortType: n.$.RECENCY, sortDirection: o.A.DESC },
    g = { sortType: n.$.POPULARITY, sortDirection: o.A.DESC },
    y = { sortType: n.$.RELEVANCE, sortDirection: o.A.DESC },
    S = {
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        thirdPartyOnly: !1,
        offerEligible: !1,
        sort: c,
        searchQuery: "",
        queryPageSize: 0,
        queryPageOffset: 0,
        isFetchingResults: !1,
        userHasSelectedSort: !1,
        currentTab: null,
    };
function h(e) {
    let { colorFilters: t, themeFilters: r, searchQuery: s, itemTypeFilters: i } = e;
    return t.size > 0 || r.size > 0 || "" !== s.trim() ? y : i.size > 0 ? g : c;
}
let d = (0, i.v)(
    (0, l.eh)((e, t) => ({
        ...S,
        hasDefaultFilters: () =>
            !t().hasFilters() && t().sort.sortType === c.sortType && t().sort.sortDirection === c.sortDirection,
        hasFilters: () => {
            let {
                itemTypeFilters: e,
                colorFilters: r,
                themeFilters: s,
                orbEligible: i,
                thirdPartyOnly: l,
                offerEligible: o,
                searchQuery: n,
            } = t();
            return [e, r, s].some((e) => e.size > 0) || i || l || o || "" !== n;
        },
        hasRelevanceFilters: () => {
            let { colorFilters: e, themeFilters: r, searchQuery: s } = t();
            return e.size > 0 || r.size > 0 || "" !== s.trim();
        },
        onToggleItemType: (t) => {
            e((e) => {
                let r = f(e.itemTypeFilters, t),
                    s = { ...e, itemTypeFilters: r, queryPageOffset: 0 };
                return (e.userHasSelectedSort || (s.sort = h(s)), s);
            });
        },
        onToggleColor: (t) => {
            e((e) => {
                let r = f(e.colorFilters, t),
                    s = { ...e, colorFilters: r, queryPageOffset: 0 };
                return (e.userHasSelectedSort || (s.sort = h(s)), s);
            });
        },
        onToggleTheme: (t) => {
            e((e) => {
                let r = f(e.themeFilters, t),
                    s = { ...e, themeFilters: r, queryPageOffset: 0 };
                return (e.userHasSelectedSort || (s.sort = h(s)), s);
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
                    s = {
                        ...e,
                        colorFilters: new Set(),
                        themeFilters: new Set(),
                        orbEligible: !1,
                        thirdPartyOnly: !1,
                        offerEligible: !1,
                        itemTypeFilters: r,
                        queryPageOffset: 0,
                    };
                return (e.userHasSelectedSort || (s.sort = h(s)), s);
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
            let { queryPageSize: r, queryPageOffset: s } = t();
            e({ ...S, queryPageSize: r, queryPageOffset: s });
        },
        setCurrentTab: (t) => {
            e({ currentTab: t });
        },
    })),
);
function b(e) {
    let { onSetResponse: t, setSearchError: r, setIsFetchingResults: i } = (0, u.S)();
    s.useEffect(() => {
        function s(e) {
            async function s() {
                i(!0);
                try {
                    let r,
                        s,
                        i,
                        l,
                        o = await (0, a.$)(e);
                    t(
                        ((r = o.skus),
                        (s = o.pagination.total),
                        (i = o.pagination.has_more),
                        (l = o.pagination.offset),
                        { skus: r, totalCount: s, hasMorePages: i, pageOffset: l, pageLimit: o.pagination.limit }),
                    );
                } catch (e) {
                    r(e?.message ?? "Unknown error");
                } finally {
                    i(!1);
                }
            }
            0 !== e.limit && s();
        }
        function l(t) {
            return (function (e, t) {
                let {
                    itemTypeFilters: r,
                    colorFilters: s,
                    themeFilters: i,
                    orbEligible: l,
                    thirdPartyOnly: o,
                    offerEligible: n,
                    sort: a,
                    searchQuery: u,
                    queryPageSize: f,
                    queryPageOffset: c,
                } = e;
                return {
                    item_types: Array.from(r),
                    colors: Array.from(s),
                    themes: Array.from(i),
                    orbs_eligible: !!l || void 0,
                    is_first_party: !o && void 0,
                    promotion_filter: !!n || void 0,
                    offset: c,
                    limit: f,
                    sort_type: a.sortType,
                    sort_direction: a.sortDirection,
                    search: "" !== u ? u : void 0,
                    include_unpublished: !!t || void 0,
                    published_collections_only: !0,
                };
            })(t, e);
        }
        s(l(d.getState()));
        let o = d.subscribe(l, s, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
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
    }, [t, r, i, e]);
}
