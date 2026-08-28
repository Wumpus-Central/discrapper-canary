r.d(t, { S: () => p, v: () => b });
var s = r(582128),
    i = r(196765),
    l = r(537812),
    o = r(401864),
    n = r(124987),
    a = r(946716),
    u = r(395856),
    f = r(856686);
function c(e, t) {
    let r = new Set(e);
    return r.has(t) ? r.delete(t) : r.add(t), r;
}
let g = { sortType: n.$.RECENCY, sortDirection: o.A.DESC },
    y = { sortType: n.$.POPULARITY, sortDirection: o.A.DESC },
    S = { sortType: n.$.RELEVANCE, sortDirection: o.A.DESC },
    h = {
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        thirdPartyOnly: !1,
        offerEligible: !1,
        sort: g,
        searchQuery: "",
        queryPageSize: 0,
        queryPageOffset: 0,
        isFetchingResults: !1,
        userHasSelectedSort: !1,
        currentTab: null,
    };
function d(e) {
    let { colorFilters: t, themeFilters: r, searchQuery: s, itemTypeFilters: i } = e;
    return t.size > 0 || r.size > 0 || "" !== s.trim() ? S : i.size > 0 ? y : g;
}
let b = (0, i.v)(
    (0, l.eh)((e, t) => ({
        ...h,
        hasDefaultFilters: () =>
            !t().hasFilters() && t().sort.sortType === g.sortType && t().sort.sortDirection === g.sortDirection,
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
                let r = c(e.itemTypeFilters, t),
                    s = { ...e, itemTypeFilters: r, queryPageOffset: 0 };
                return e.userHasSelectedSort || (s.sort = d(s)), s;
            });
        },
        onToggleColor: (t) => {
            e((e) => {
                let r = c(e.colorFilters, t),
                    s = { ...e, colorFilters: r, queryPageOffset: 0 };
                return e.userHasSelectedSort || (s.sort = d(s)), s;
            });
        },
        onToggleTheme: (t) => {
            e((e) => {
                let r = c(e.themeFilters, t),
                    s = { ...e, themeFilters: r, queryPageOffset: 0 };
                return e.userHasSelectedSort || (s.sort = d(s)), s;
            });
        },
        onToggleOrbEligible: () => {
            e((e) => {
                let t = { ...e, orbEligible: !e.orbEligible, queryPageOffset: 0 };
                return e.userHasSelectedSort || (t.sort = d(t)), t;
            });
        },
        onToggleThirdPartyOnly: () => {
            e((e) => {
                let t = { ...e, thirdPartyOnly: !e.thirdPartyOnly, queryPageOffset: 0 };
                return e.userHasSelectedSort || (t.sort = d(t)), t;
            });
        },
        onToggleOfferEligible: () => {
            e((e) => {
                let t = { ...e, offerEligible: !e.offerEligible, queryPageOffset: 0 };
                return e.userHasSelectedSort || (t.sort = d(t)), t;
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
                        ? ((r.sort = S), (r.userHasSelectedSort = !1))
                        : e.userHasSelectedSort || (r.sort = d(r)),
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
                return e.userHasSelectedSort || (s.sort = d(s)), s;
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
                return e.userHasSelectedSort || (t.sort = d(t)), t;
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
                return e.userHasSelectedSort || (t.sort = d(t)), t;
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
            e({ ...h, queryPageSize: r, queryPageOffset: s });
        },
        setCurrentTab: (t) => {
            e({ currentTab: t });
        },
    })),
);
function p(e) {
    let { onSetResponse: t, setSearchError: r, setIsFetchingResults: i } = (0, f.S)(),
        l = (0, u.$)("collectibles_browse_search");
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
        function o(t) {
            return (function (e, t, r) {
                let {
                    itemTypeFilters: s,
                    colorFilters: i,
                    themeFilters: l,
                    orbEligible: o,
                    thirdPartyOnly: n,
                    offerEligible: a,
                    sort: u,
                    searchQuery: f,
                    queryPageSize: c,
                    queryPageOffset: g,
                } = e;
                return {
                    item_types: Array.from(s),
                    colors: Array.from(i),
                    themes: Array.from(l),
                    orbs_eligible: !!o || void 0,
                    is_first_party: !n && void 0,
                    promotion_filter: !!a || void 0,
                    offset: g,
                    limit: c,
                    sort_type: u.sortType,
                    sort_direction: u.sortDirection,
                    search: "" !== f ? f : void 0,
                    include_unpublished: !!t || void 0,
                    representative_only: !!r || void 0,
                    published_collections_only: !!r || void 0,
                };
            })(t, e, l);
        }
        s(o(b.getState()));
        let n = b.subscribe(o, s, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
            u = b.subscribe(
                (e) => e.hasFilters(),
                (e, t) => {
                    if (!e && t) {
                        let e = b.getState();
                        e.userHasSelectedSort || b.setState({ sort: d(e) });
                    }
                },
            );
        return () => {
            n(), u();
        };
    }, [t, r, i, e, l]);
}
