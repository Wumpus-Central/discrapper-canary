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
    m = n(429913),
    g = n(576030),
    x = n(713517),
    f = n(492518),
    p = n(592356),
    h = n(366523),
    _ = n(287809),
    A = n(808247),
    I = n(310250),
    j = n(178213),
    v = n(594832),
    E = n(631784),
    T = n(672564),
    b = n(188275),
    N = n(518477),
    S = n(985018),
    y = n(525785);
function C(e) {
    let { application: t, sku: n, handleOpenUserProfileModal: a, analyticsLocations: s } = e,
        o = l.useRef(null),
        { analyticsLocations: m } = (0, u.Ay)(s ?? []),
        { isHoveringOrFocusing: p } = (0, x.A)(o),
        [_, I] = l.useState(!1),
        j = l.useCallback(
            async (e) => {
                if ((e.stopPropagation(), !_)) {
                    I(!0);
                    try {
                        await A.A.addSkuToWishlist(n.id, m), a?.({ tabSection: N.RP.WISHLIST });
                    } catch (e) {
                        (0, d.showToast)((0, d.createToast)(S.intl.string(S.t.F8FvUy), d.ToastType.FAILURE)),
                            r.ORC.announce(S.intl.string(S.t.F8FvUy));
                    } finally {
                        I(!1);
                    }
                }
            },
            [n.id, m, a, _],
        );
    return (0, i.jsx)(c.un, {
        title: S.intl.string(S.t["8DkMEQ"]),
        body: n.name,
        asset: (0, i.jsx)(g.mW, { application: t }),
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
                (p || _) &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("div", { className: y.p0 }),
                            (0, i.jsx)("div", {
                                className: y.R$,
                                children: _
                                    ? (0, i.jsx)(f.k, {})
                                    : (0, i.jsx)(r.pa$, { size: "lg", color: d.LU0.unsafe_rawColors.WHITE_500 }),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
function R(e) {
    let {
            wishlist: t,
            handleOpenUserProfileModal: n,
            analyticsLocations: a,
            numWishlistItemsToRecommend: r,
            maxWishlistItemsToShow: c = r,
            className: d,
            isLoading: u,
            recommendations: g,
        } = e,
        x = (0, m.h)(b.XR),
        p = (0, o.bG)([_.default], () => _.default.getUser(t?.userId)),
        h = (0, j.GG)("add_to_wishlist_grid"),
        A = l.useMemo(() => new Set(t?.items.map((e) => e.skuId) ?? []), [t]),
        I = g.filter((e) => !A.has(e.id)).slice(0, c);
    return u
        ? (0, i.jsx)("div", { className: y.g4, children: (0, i.jsx)(f.k, {}) })
        : 0 === I.length
          ? null
          : (0, i.jsx)("ul", {
                className: s()(y.Vg, d),
                children: I.map((e) =>
                    h
                        ? (0, i.jsx)(
                              T.J,
                              {
                                  sku: e,
                                  wishlistId: t?.id,
                                  wishlistOwner: p,
                                  handleOpenUserProfileModal: n,
                                  analyticsLocations: a,
                              },
                              e.id,
                          )
                        : (0, i.jsx)(
                              C,
                              { application: x, sku: e, handleOpenUserProfileModal: n, analyticsLocations: a },
                              e.id,
                          ),
                ),
            });
}
function k(e) {
    let { userId: t, numWishlistItemsToRecommend: n, ...l } = e,
        { recommendations: a, status: s } = (0, E.U)({ userId: t, numItems: n, source: v.B5.USER_PROFILE });
    return (0, i.jsx)(R, { isLoading: "loading" === s, recommendations: a, numWishlistItemsToRecommend: n, ...l });
}
function L(e) {
    let { userId: t, numWishlistItemsToRecommend: n, ...a } = e,
        s = l.useMemo(() => (null != t ? [t] : void 0), [t]),
        { state: r, recommendations: o } = (0, p.A)({
            numWishlistItems: n,
            applicationId: b.XR,
            userIds: s,
            includeWishlists: !1,
        }),
        c = l.useMemo(() => o.map((e) => e.sku), [o]);
    return (0, i.jsx)(R, { isLoading: "loading" === r, recommendations: c, numWishlistItemsToRecommend: n, ...a });
}
function w(e) {
    return (0, I.T)("add_to_wishlist_grid") ? (0, i.jsx)(k, { ...e }) : (0, i.jsx)(L, { ...e });
}
