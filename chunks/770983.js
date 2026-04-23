n.d(t, { A: () => f });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    l = n(311907),
    o = n(492518),
    u = n(260811),
    c = n(287809),
    d = n(909536),
    _ = n(594832),
    E = n(631784),
    S = n(672564),
    p = n(652215),
    h = n(788868),
    A = n(985018),
    I = n(817990);
function m(e) {
    let {
            wishlist: t,
            handleOpenUserProfileModal: n,
            analyticsLocations: a,
            numWishlistItemsToRecommend: _,
            maxWishlistItemsToShow: E = _,
            className: m,
            isLoading: f,
            recommendations: T,
        } = e,
        R = (0, l.bG)([c.default], () => c.default.getUser(t?.userId)),
        g = (0, d.Gh)("add_to_wishlist_grid_suggested_nitro"),
        y = s.useMemo(() => new Set(t?.items.map((e) => e.skuId) ?? []), [t]),
        v = g && !y.has(h.pe.TIER_2),
        L = s.useMemo(
            () =>
                v
                    ? new u.A({
                          id: h.pe.TIER_2,
                          productLine: p.EZt.PREMIUM,
                          name: A.intl.string(A.t.lG6a5x),
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
            [v],
        ),
        N = T.filter((e) => !y.has(e.id)).slice(0, null != L ? Math.max(0, E - 1) : E),
        C = null != L ? [L, ...N] : N;
    return f
        ? (0, i.jsx)("div", { className: I.g4, children: (0, i.jsx)(o.k, {}) })
        : 0 === C.length
          ? null
          : (0, i.jsx)("ul", {
                className: r()(I.Vg, m),
                children: C.map((e) =>
                    (0, i.jsx)(
                        S.J,
                        {
                            sku: e,
                            wishlistId: t?.id,
                            wishlistOwner: R,
                            handleOpenUserProfileModal: n,
                            analyticsLocations: a,
                        },
                        e.id,
                    ),
                ),
            });
}
function f(e) {
    let { userId: t, numWishlistItemsToRecommend: n, ...s } = e,
        { recommendations: a, status: r } = (0, E.Ul)({ userId: t, numItems: n, source: _.B5.USER_PROFILE });
    return (0, i.jsx)(m, { isLoading: "loading" === r, recommendations: a, numWishlistItemsToRecommend: n, ...s });
}
