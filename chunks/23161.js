r.d(t, { S: () => O, v: () => m });
var s = r(64700),
    i = r(353640),
    o = r(499867),
    l = r(401864),
    n = r(124987),
    a = r(562465),
    u = r(319400),
    c = r(39418),
    f = r(652215);
async function y(e) {
    let { timeout: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    try {
        return (await a.Bo.get({ url: f.Rsh.COLLECTIBLES_SEARCH, query: e, rejectWithError: !0, timeout: t })).body;
    } catch (t) {
        let e = new u.LG(t);
        throw ((0, c.o)(e), e);
    }
}
var g = r(856686);
function S(e, t) {
    let r = new Set(e);
    return r.has(t) ? r.delete(t) : r.add(t), r;
}
let h = { sortType: n.$.RECENCY, sortDirection: l.A.DESC },
    d = { sortType: n.$.POPULARITY, sortDirection: l.A.DESC },
    b = { sortType: n.$.RELEVANCE, sortDirection: l.A.DESC },
    p = {
        itemTypeFilters: new Set(),
        colorFilters: new Set(),
        themeFilters: new Set(),
        orbEligible: !1,
        thirdPartyOnly: !1,
        offerEligible: !1,
        sort: h,
        searchQuery: "",
        queryPageSize: 0,
        queryPageOffset: 0,
        isFetchingResults: !1,
        userHasSelectedSort: !1,
        currentTab: null,
    };
function E(e) {
    let { colorFilters: t, themeFilters: r, searchQuery: s, itemTypeFilters: i } = e;
    return t.size > 0 || r.size > 0 || "" !== s.trim() ? b : i.size > 0 ? d : h;
}
let m = (0, i.v)(
    (0, o.eh)((e, t) => ({
        ...p,
        hasDefaultFilters: () =>
            !t().hasFilters() && t().sort.sortType === h.sortType && t().sort.sortDirection === h.sortDirection,
        hasFilters: () => {
            let {
                itemTypeFilters: e,
                colorFilters: r,
                themeFilters: s,
                orbEligible: i,
                thirdPartyOnly: o,
                offerEligible: l,
                searchQuery: n,
            } = t();
            return [e, r, s].some((e) => e.size > 0) || i || o || l || "" !== n;
        },
        hasRelevanceFilters: () => {
            let { colorFilters: e, themeFilters: r, searchQuery: s } = t();
            return e.size > 0 || r.size > 0 || "" !== s.trim();
        },
        onToggleItemType: (t) => {
            e((e) => {
                let r = S(e.itemTypeFilters, t),
                    s = { ...e, itemTypeFilters: r, queryPageOffset: 0 };
                return e.userHasSelectedSort || (s.sort = E(s)), s;
            });
        },
        onToggleColor: (t) => {
            e((e) => {
                let r = S(e.colorFilters, t),
                    s = { ...e, colorFilters: r, queryPageOffset: 0 };
                return e.userHasSelectedSort || (s.sort = E(s)), s;
            });
        },
        onToggleTheme: (t) => {
            e((e) => {
                let r = S(e.themeFilters, t),
                    s = { ...e, themeFilters: r, queryPageOffset: 0 };
                return e.userHasSelectedSort || (s.sort = E(s)), s;
            });
        },
        onToggleOrbEligible: () => {
            e((e) => {
                let t = { ...e, orbEligible: !e.orbEligible, queryPageOffset: 0 };
                return e.userHasSelectedSort || (t.sort = E(t)), t;
            });
        },
        onToggleThirdPartyOnly: () => {
            e((e) => {
                let t = { ...e, thirdPartyOnly: !e.thirdPartyOnly, queryPageOffset: 0 };
                return e.userHasSelectedSort || (t.sort = E(t)), t;
            });
        },
        onToggleOfferEligible: () => {
            e((e) => {
                let t = { ...e, offerEligible: !e.offerEligible, queryPageOffset: 0 };
                return e.userHasSelectedSort || (t.sort = E(t)), t;
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
                        ? ((r.sort = b), (r.userHasSelectedSort = !1))
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
                return e.userHasSelectedSort || (s.sort = E(s)), s;
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
                    itemTypeFilters: new Set(),
                    queryPageOffset: 0,
                };
                return e.userHasSelectedSort || (t.sort = E(t)), t;
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
            let { queryPageSize: r, queryPageOffset: s } = t();
            e({ ...p, queryPageSize: r, queryPageOffset: s });
        },
        setCurrentTab: (t) => {
            e({ currentTab: t });
        },
    })),
);
function O(e) {
    let { onSetResponse: t, setSearchError: r, setIsFetchingResults: i } = (0, g.S)();
    s.useEffect(() => {
        function s(e) {
            async function s() {
                i(!0);
                try {
                    let r,
                        s,
                        i,
                        o,
                        l = await y(e);
                    t(
                        ((r = l.skus),
                        (s = l.pagination.total),
                        (i = l.pagination.has_more),
                        (o = l.pagination.offset),
                        { skus: r, totalCount: s, hasMorePages: i, pageOffset: o, pageLimit: l.pagination.limit }),
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
            return (function (e, t) {
                let {
                    itemTypeFilters: r,
                    colorFilters: s,
                    themeFilters: i,
                    orbEligible: o,
                    thirdPartyOnly: l,
                    offerEligible: n,
                    sort: a,
                    searchQuery: u,
                    queryPageSize: c,
                    queryPageOffset: f,
                } = e;
                return {
                    item_types: Array.from(r),
                    colors: Array.from(s),
                    themes: Array.from(i),
                    orbs_eligible: !!o || void 0,
                    is_first_party: !l && void 0,
                    promotion_filter: !!n || void 0,
                    offset: f,
                    limit: c,
                    sort_type: a.sortType,
                    sort_direction: a.sortDirection,
                    search: "" !== u ? u : void 0,
                    include_unpublished: !!t || void 0,
                };
            })(t, e);
        }
        s(o(m.getState()));
        let l = m.subscribe(o, s, { equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t) }),
            n = m.subscribe(
                (e) => e.hasFilters(),
                (e, t) => {
                    if (!e && t) {
                        let e = m.getState();
                        e.userHasSelectedSort || m.setState({ sort: E(e) });
                    }
                },
            );
        return () => {
            l(), n();
        };
    }, [t, r, i, e]);
}
