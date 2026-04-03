n.d(t, { A: () => w });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(158954),
    o = n(311907),
    c = n(435371),
    d = n(397927),
    u = n(688810),
    g = n(429913),
    m = n(576030),
    x = n(713517),
    p = n(492518),
    f = n(260811),
    h = n(366523),
    _ = n(287809),
    A = n(808247),
    I = n(178213),
    j = n(909536),
    v = n(594832),
    E = n(631784),
    T = n(672564),
    b = n(652215),
    C = n(788868),
    S = n(518477),
    N = n(985018),
    y = n(978358);
function R(e) {
    let { application: t, sku: n, handleOpenUserProfileModal: a, analyticsLocations: s } = e,
        o = l.useRef(null),
        { analyticsLocations: g } = (0, u.Ay)(s ?? []),
        { isHoveringOrFocusing: f } = (0, x.A)(o),
        [_, I] = l.useState(!1),
        j = l.useCallback(
            async (e) => {
                if ((e.stopPropagation(), !_)) {
                    I(!0);
                    try {
                        await A.A.addSkuToWishlist(n.id, g), a?.({ tabSection: S.RP.WISHLIST });
                    } catch (e) {
                        (0, d.showToast)((0, d.createToast)(N.intl.string(N.t.F8FvUy), d.ToastType.FAILURE)),
                            r.ORC.announce(N.intl.string(N.t.F8FvUy));
                    } finally {
                        I(!1);
                    }
                }
            },
            [n.id, g, a, _],
        );
    return (0, i.jsx)(c.un, {
        title: N.intl.string(N.t["8DkMEQ"]),
        body: n.name,
        asset: (0, i.jsx)(m.mW, { application: t }),
        assetSize: v.Q8,
        children: (0, i.jsxs)(r.sqX, {
            className: y.Nr,
            ref: o,
            "aria-label": n.name,
            onClick: j,
            children: [
                (0, i.jsx)(
                    h.e,
                    {
                        shape: "custom",
                        containerClassName: y.Nr,
                        foregroundImageClassName: y.wP,
                        backgroundImageClassName: y.GC,
                        sku: n,
                    },
                    n.id,
                ),
                (f || _) &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("div", { className: y.p0 }),
                            (0, i.jsx)("div", {
                                className: y.R$,
                                children: _
                                    ? (0, i.jsx)(p.k, {})
                                    : (0, i.jsx)(r.pa$, { size: "lg", color: d.LU0.unsafe_rawColors.WHITE_500 }),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
function k(e) {
    let {
            wishlist: t,
            handleOpenUserProfileModal: n,
            analyticsLocations: a,
            numWishlistItemsToRecommend: r,
            maxWishlistItemsToShow: c = r,
            className: d,
            isLoading: u,
            recommendations: m,
            applicationIds: x,
        } = e,
        h = (0, g.A)(x),
        A = (0, o.bG)([_.default], () => _.default.getUser(t?.userId)),
        v = (0, I.GG)("add_to_wishlist_grid"),
        E = (0, j.Gh)("add_to_wishlist_grid_suggested_nitro"),
        S = l.useMemo(() => h.reduce((e, t) => (null == t || (e[t.id] = t), e), {}), [h]),
        k = l.useMemo(() => new Set(t?.items.map((e) => e.skuId) ?? []), [t]),
        w = E && v && !k.has(C.pe.TIER_2),
        O = l.useMemo(
            () =>
                w
                    ? new f.A({
                          id: C.pe.TIER_2,
                          productLine: b.EZt.PREMIUM,
                          name: N.intl.string(N.t.lG6a5x),
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
            [w],
        ),
        L = m.filter((e) => !k.has(e.id)).slice(0, null != O ? Math.max(0, c - 1) : c),
        P = null != O ? [O, ...L] : L;
    return u
        ? (0, i.jsx)("div", { className: y.g4, children: (0, i.jsx)(p.k, {}) })
        : 0 === P.length
          ? null
          : (0, i.jsx)("ul", {
                className: s()(y.Vg, d),
                children: P.map((e) =>
                    v
                        ? (0, i.jsx)(
                              T.J,
                              {
                                  sku: e,
                                  wishlistId: t?.id,
                                  wishlistOwner: A,
                                  handleOpenUserProfileModal: n,
                                  analyticsLocations: a,
                              },
                              e.id,
                          )
                        : null == e.applicationId || null == S[e.applicationId]
                          ? null
                          : (0, i.jsx)(
                                R,
                                {
                                    application: S[e.applicationId],
                                    sku: e,
                                    handleOpenUserProfileModal: n,
                                    analyticsLocations: a,
                                },
                                e.id,
                            ),
                ),
            });
}
function w(e) {
    let { userId: t, numWishlistItemsToRecommend: n, ...l } = e,
        { recommendations: a, status: s } = (0, E.Ul)({ userId: t, numItems: n, source: v.B5.USER_PROFILE });
    return (0, i.jsx)(k, { isLoading: "loading" === s, recommendations: a, numWishlistItemsToRecommend: n, ...l });
}
