n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(158954),
    o = n(311907),
    d = n(435371),
    c = n(397927),
    u = n(688810),
    g = n(429913),
    m = n(576030),
    x = n(713517),
    p = n(492518),
    f = n(366523),
    h = n(287809),
    _ = n(808247),
    A = n(178213),
    I = n(594832),
    j = n(631784),
    v = n(672564),
    E = n(188275),
    T = n(518477),
    b = n(985018),
    N = n(79711);
function y(e) {
    let { application: t, sku: n, handleOpenUserProfileModal: a, analyticsLocations: s } = e,
        o = l.useRef(null),
        { analyticsLocations: g } = (0, u.Ay)(s ?? []),
        { isHoveringOrFocusing: h } = (0, x.A)(o),
        [A, j] = l.useState(!1),
        v = l.useCallback(
            async (e) => {
                if ((e.stopPropagation(), !A)) {
                    j(!0);
                    try {
                        await _.A.addSkuToWishlist(n.id, g), a?.({ tabSection: T.RP.WISHLIST });
                    } catch (e) {
                        (0, c.showToast)((0, c.createToast)(b.intl.string(b.t.F8FvUy), c.ToastType.FAILURE)),
                            r.ORC.announce(b.intl.string(b.t.F8FvUy));
                    } finally {
                        j(!1);
                    }
                }
            },
            [n.id, g, a, A],
        );
    return (0, i.jsx)(d.un, {
        title: b.intl.string(b.t["8DkMEQ"]),
        body: n.name,
        asset: (0, i.jsx)(m.mW, { application: t }),
        assetSize: I.Q8,
        children: (0, i.jsxs)(r.sqX, {
            className: N.Nr,
            ref: o,
            "aria-label": n.name,
            onClick: v,
            children: [
                (0, i.jsx)(
                    f.e,
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
                                    ? (0, i.jsx)(p.k, {})
                                    : (0, i.jsx)(r.pa$, { size: "lg", color: c.LU0.unsafe_rawColors.WHITE_500 }),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
function S(e) {
    let {
            wishlist: t,
            handleOpenUserProfileModal: n,
            analyticsLocations: a,
            numWishlistItemsToRecommend: r,
            maxWishlistItemsToShow: d = r,
            className: c,
            isLoading: u,
            recommendations: m,
        } = e,
        x = (0, g.h)(E.XR),
        f = (0, o.bG)([h.default], () => h.default.getUser(t?.userId)),
        _ = (0, A.GG)("add_to_wishlist_grid"),
        I = l.useMemo(() => new Set(t?.items.map((e) => e.skuId) ?? []), [t]),
        j = m.filter((e) => !I.has(e.id)).slice(0, d);
    return u
        ? (0, i.jsx)("div", { className: N.g4, children: (0, i.jsx)(p.k, {}) })
        : 0 === j.length
          ? null
          : (0, i.jsx)("ul", {
                className: s()(N.Vg, c),
                children: j.map((e) =>
                    _
                        ? (0, i.jsx)(
                              v.J,
                              {
                                  sku: e,
                                  wishlistId: t?.id,
                                  wishlistOwner: f,
                                  handleOpenUserProfileModal: n,
                                  analyticsLocations: a,
                              },
                              e.id,
                          )
                        : (0, i.jsx)(
                              y,
                              { application: x, sku: e, handleOpenUserProfileModal: n, analyticsLocations: a },
                              e.id,
                          ),
                ),
            });
}
function C(e) {
    let { userId: t, numWishlistItemsToRecommend: n, ...l } = e,
        { recommendations: a, status: s } = (0, j.Ul)({ userId: t, numItems: n, source: I.B5.USER_PROFILE });
    return (0, i.jsx)(S, { isLoading: "loading" === s, recommendations: a, numWishlistItemsToRecommend: n, ...l });
}
