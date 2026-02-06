n.d(t, { A: () => O });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(158954),
    o = n(311907),
    d = n(435371),
    c = n(397927),
    u = n(688810),
    A = n(429913),
    h = n(576030),
    _ = n(713517),
    m = n(492518),
    p = n(798048),
    g = n(808247),
    E = n(178213),
    I = n(594832),
    f = n(672564),
    C = n(287809),
    N = n(592356),
    T = n(366523),
    S = n(235218),
    x = n(188275),
    v = n(518477),
    b = n(985018),
    y = n(30621);
function L(e) {
    let { application: t, sku: n, handleOpenUserProfileModal: a, analyticsLocations: l } = e,
        o = r.useRef(null),
        { analyticsLocations: A } = (0, u.Ay)(l ?? []),
        { isHoveringOrFocusing: p } = (0, _.A)(o),
        [E, f] = r.useState(!1),
        C = r.useCallback(
            async (e) => {
                if ((e.stopPropagation(), !E)) {
                    f(!0);
                    try {
                        await g.A.addSkuToWishlist(n.id, A), a?.({ tabSection: v.RP.WISHLIST });
                    } catch (e) {
                        (0, c.showToast)((0, c.createToast)(b.intl.string(b.t.F8FvUy), c.ToastType.FAILURE)),
                            s.ORC.announce(b.intl.string(b.t.F8FvUy));
                    } finally {
                        f(!1);
                    }
                }
            },
            [n.id, A, a, E],
        );
    return (0, i.jsx)(d.un, {
        title: b.intl.string(b.t["8DkMEQ"]),
        body: n.name,
        asset: (0, i.jsx)(h.mW, { application: t }),
        assetSize: I.Q8,
        children: (0, i.jsxs)(s.sqX, {
            className: y.Nr,
            ref: o,
            "aria-label": n.name,
            onClick: C,
            children: [
                (0, i.jsx)(
                    T.e,
                    {
                        shape: "custom",
                        containerClassName: y.Nr,
                        foregroundImageClassName: y.wP,
                        backgroundImageClassName: y.GC,
                        sku: n,
                    },
                    n.id,
                ),
                (p || E) &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("div", { className: y.p0 }),
                            (0, i.jsx)("div", {
                                className: y.R$,
                                children: E
                                    ? (0, i.jsx)(m.k, {})
                                    : (0, i.jsx)(s.pa$, { size: "lg", color: c.LU0.unsafe_rawColors.WHITE_500 }),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
function O(e) {
    let {
            wishlist: t,
            handleOpenUserProfileModal: n,
            analyticsLocations: a,
            numWishlistItemsToRecommend: s,
            maxWishlistItemsToShow: d = s,
            className: c,
        } = e,
        u = (0, A.h)(x.XR),
        h = (0, o.bG)([C.default], () => C.default.getCurrentUser()),
        _ = (0, o.bG)([C.default], () => C.default.getUser(t?.userId)),
        g = null == t || (null != h && null != t && t.userId === h.id),
        I = r.useMemo(() => (null == t ? (null != h ? [h.id] : void 0) : [t.userId]), [t, h]),
        T = (0, E.G)("add_to_wishlist_grid"),
        v = (0, N.A)({
            numWishlistItems: s,
            location: "SocialLayerAddToWishlistGrid",
            applicationId: x.XR,
            userIds: I,
            includeWishlists: !1,
        }),
        b = r.useMemo(() => new Set(t?.items.map((e) => e.skuId) ?? []), [t]),
        O = v.recommendations.filter((e) => !b.has(e.skuId)).slice(0, d);
    return "success" !== v.state
        ? (0, i.jsx)("div", { className: y.g4, children: (0, i.jsx)(m.k, {}) })
        : 0 === O.length
          ? null
          : (0, i.jsx)("ul", {
                className: l()(y.Vg, c),
                children: O.map((e) =>
                    T
                        ? g
                            ? (0, i.jsx)(
                                  f.J,
                                  {
                                      sku: e.sku,
                                      wishlistId: t?.id,
                                      wishlistOwner: _,
                                      handleOpenUserProfileModal: n,
                                      analyticsLocations: a,
                                  },
                                  e.skuId,
                              )
                            : (0, i.jsx)(
                                  f.D,
                                  { sku: e.sku, wishlistId: t.id, wishlistOwner: _, analyticsLocations: a },
                                  e.skuId,
                              )
                        : g
                          ? (0, i.jsx)(
                                L,
                                { application: u, sku: e.sku, handleOpenUserProfileModal: n, analyticsLocations: a },
                                e.skuId,
                            )
                          : (0, i.jsx)(
                                S.A,
                                {
                                    item: e,
                                    wishlistId: t.id,
                                    isOwner: !1,
                                    profileOwner: _,
                                    cardSize: p.Y.FLEX,
                                    showOverlayButton: !0,
                                    hideButtonIcon: !0,
                                    isDragging: !1,
                                },
                                e.skuId,
                            ),
                ),
            });
}
