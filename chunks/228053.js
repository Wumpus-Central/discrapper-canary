n.d(t, { A: () => y });
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
    f = n(492518),
    p = n(808247),
    h = n(178213),
    _ = n(594832),
    A = n(672564),
    I = n(287809),
    j = n(592356),
    v = n(366523),
    E = n(188275),
    T = n(518477),
    b = n(985018),
    N = n(79547);
function S(e) {
    let { application: t, sku: n, handleOpenUserProfileModal: a, analyticsLocations: s } = e,
        o = l.useRef(null),
        { analyticsLocations: g } = (0, u.Ay)(s ?? []),
        { isHoveringOrFocusing: h } = (0, x.A)(o),
        [A, I] = l.useState(!1),
        j = l.useCallback(
            async (e) => {
                if ((e.stopPropagation(), !A)) {
                    I(!0);
                    try {
                        await p.A.addSkuToWishlist(n.id, g), a?.({ tabSection: T.RP.WISHLIST });
                    } catch (e) {
                        (0, d.showToast)((0, d.createToast)(b.intl.string(b.t.F8FvUy), d.ToastType.FAILURE)),
                            r.ORC.announce(b.intl.string(b.t.F8FvUy));
                    } finally {
                        I(!1);
                    }
                }
            },
            [n.id, g, a, A],
        );
    return (0, i.jsx)(c.un, {
        title: b.intl.string(b.t["8DkMEQ"]),
        body: n.name,
        asset: (0, i.jsx)(m.mW, { application: t }),
        assetSize: _.Q8,
        children: (0, i.jsxs)(r.sqX, {
            className: N.Nr,
            ref: o,
            "aria-label": n.name,
            onClick: j,
            children: [
                (0, i.jsx)(
                    v.e,
                    {
                        shape: "custom",
                        containerClassName: N.Nr,
                        foregroundImageClassName: N.wP,
                        backgroundImageClassName: N.GC,
                        sku: n,
                    },
                    n.id,
                ),
                (h || A) &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("div", { className: N.p0 }),
                            (0, i.jsx)("div", {
                                className: N.R$,
                                children: A
                                    ? (0, i.jsx)(f.k, {})
                                    : (0, i.jsx)(r.pa$, { size: "lg", color: d.LU0.unsafe_rawColors.WHITE_500 }),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
function y(e) {
    let {
            wishlist: t,
            handleOpenUserProfileModal: n,
            analyticsLocations: a,
            numWishlistItemsToRecommend: r,
            maxWishlistItemsToShow: c = r,
            className: d,
        } = e,
        u = (0, g.h)(E.XR),
        m = (0, o.bG)([I.default], () => I.default.getCurrentUser()),
        x = (0, o.bG)([I.default], () => I.default.getUser(t?.userId)),
        p = l.useMemo(() => (null == t ? (null != m ? [m.id] : void 0) : [t.userId]), [t, m]),
        _ = (0, h.G)("add_to_wishlist_grid"),
        v = (0, j.A)({ numWishlistItems: r, applicationId: E.XR, userIds: p, includeWishlists: !1 }),
        T = l.useMemo(() => new Set(t?.items.map((e) => e.skuId) ?? []), [t]),
        b = v.recommendations.filter((e) => !T.has(e.skuId)).slice(0, c);
    return "success" !== v.state
        ? (0, i.jsx)("div", { className: N.g4, children: (0, i.jsx)(f.k, {}) })
        : 0 === b.length
          ? null
          : (0, i.jsx)("ul", {
                className: s()(N.Vg, d),
                children: b.map((e) =>
                    _
                        ? (0, i.jsx)(
                              A.J,
                              {
                                  sku: e.sku,
                                  wishlistId: t?.id,
                                  wishlistOwner: x,
                                  handleOpenUserProfileModal: n,
                                  analyticsLocations: a,
                              },
                              e.skuId,
                          )
                        : (0, i.jsx)(
                              S,
                              { application: u, sku: e.sku, handleOpenUserProfileModal: n, analyticsLocations: a },
                              e.skuId,
                          ),
                ),
            });
}
