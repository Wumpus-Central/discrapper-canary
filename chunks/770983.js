i.d(t, { A: () => j });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(311907),
    d = i(492518),
    o = i(260811),
    c = i(287809),
    u = i(909536),
    g = i(594832),
    m = i(631784),
    h = i(672564),
    x = i(652215),
    A = i(788868),
    p = i(985018),
    f = i(978358);
function I(e) {
    let {
            wishlist: t,
            handleOpenUserProfileModal: i,
            analyticsLocations: s,
            numWishlistItemsToRecommend: g,
            maxWishlistItemsToShow: m = g,
            className: I,
            isLoading: j,
            recommendations: v,
        } = e,
        S = (0, r.bG)([c.default], () => c.default.getUser(t?.userId)),
        E = (0, u.Gh)("add_to_wishlist_grid_suggested_nitro"),
        b = l.useMemo(() => new Set(t?.items.map((e) => e.skuId) ?? []), [t]),
        T = E && !b.has(A.pe.TIER_2),
        y = l.useMemo(
            () =>
                T
                    ? new o.A({
                          id: A.pe.TIER_2,
                          productLine: x.EZt.PREMIUM,
                          name: p.intl.string(p.t.lG6a5x),
                          features: new Set(),
                          genres: new Set(),
                          manifests: [],
                          availableRegions: [],
                          locales: [],
                          bundledSkuIds: [],
                          selectedOptions: [],
                          eligibleOffers: [],
                          prices: {},
                      })
                    : null,
            [T],
        ),
        C = v.filter((e) => !b.has(e.id)).slice(0, null != y ? Math.max(0, m - 1) : m),
        N = null != y ? [y, ...C] : C;
    return j
        ? (0, n.jsx)("div", { className: f.g4, children: (0, n.jsx)(d.k, {}) })
        : 0 === N.length
          ? null
          : (0, n.jsx)("ul", {
                className: a()(f.Vg, I),
                children: N.map((e) =>
                    (0, n.jsx)(
                        h.J,
                        {
                            sku: e,
                            wishlistId: t?.id,
                            wishlistOwner: S,
                            handleOpenUserProfileModal: i,
                            analyticsLocations: s,
                        },
                        e.id,
                    ),
                ),
            });
}
function j(e) {
    let { userId: t, numWishlistItemsToRecommend: i, ...l } = e,
        { recommendations: s, status: a } = (0, m.Ul)({ userId: t, numItems: i, source: g.B5.USER_PROFILE });
    return (0, n.jsx)(I, { isLoading: "loading" === a, recommendations: s, numWishlistItemsToRecommend: i, ...l });
}
