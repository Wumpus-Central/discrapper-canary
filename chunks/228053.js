n.d(t, { A: () => y });
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
    p = n(242640),
    g = n(808247),
    E = n(594832),
    f = n(287809),
    I = n(592356),
    C = n(366523),
    N = n(235218),
    T = n(188275),
    S = n(518477),
    x = n(985018),
    v = n(30621);
function b(e) {
    let { application: t, sku: n, handleOpenUserProfileModal: a, analyticsLocations: l } = e,
        o = r.useRef(null),
        { analyticsLocations: A } = (0, u.Ay)(l ?? []),
        { isHoveringOrFocusing: p } = (0, _.A)(o),
        [f, I] = r.useState(!1),
        N = r.useCallback(
            async (e) => {
                if ((e.stopPropagation(), !f)) {
                    I(!0);
                    try {
                        await g.A.addSkuToWishlist(n.id, A), a?.({ tabSection: S.RP.WISHLIST });
                    } catch (e) {
                        (0, c.showToast)((0, c.createToast)(x.intl.string(x.t.F8FvUy), c.ToastType.FAILURE)),
                            s.ORC.announce(x.intl.string(x.t.F8FvUy));
                    } finally {
                        I(!1);
                    }
                }
            },
            [n.id, A, a, f],
        );
    return (0, i.jsx)(d.un, {
        title: x.intl.string(x.t["8DkMEQ"]),
        body: n.name,
        asset: (0, i.jsx)(h.mW, { application: t }),
        assetSize: E.Q8,
        children: (0, i.jsxs)(s.sqX, {
            className: v.Nr,
            ref: o,
            "aria-label": n.name,
            onClick: N,
            children: [
                (0, i.jsx)(
                    C.e,
                    {
                        shape: "custom",
                        containerClassName: v.Nr,
                        foregroundImageClassName: v.wP,
                        backgroundImageClassName: v.GC,
                        sku: n,
                    },
                    n.id,
                ),
                (p || f) &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("div", { className: v.p0 }),
                            (0, i.jsx)("div", {
                                className: v.R$,
                                children: f
                                    ? (0, i.jsx)(m.k, {})
                                    : (0, i.jsx)(s.pa$, { size: "lg", color: c.LU0.unsafe_rawColors.WHITE_500 }),
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
            numWishlistItemsToRecommend: s,
            maxWishlistItemsToShow: d = s,
            className: c,
        } = e,
        u = (0, A.h)(T.XR),
        h = (0, o.bG)([f.default], () => f.default.getCurrentUser()),
        _ = (0, o.bG)([f.default], () => f.default.getUser(t?.userId)),
        g = null == t || (null != h && null != t && t.userId === h.id),
        E = r.useMemo(() => (null == t ? (null != h ? [h.id] : void 0) : [t.userId]), [t, h]),
        C = (0, I.A)({
            numWishlistItems: s,
            location: "SocialLayerAddToWishlistGrid",
            applicationId: T.XR,
            userIds: E,
            includeWishlists: !1,
        }),
        S = r.useMemo(() => new Set(t?.items.map((e) => e.skuId) ?? []), [t]),
        x = C.recommendations.filter((e) => !S.has(e.skuId)).slice(0, d);
    return "success" !== C.state
        ? (0, i.jsx)("div", { className: v.g4, children: (0, i.jsx)(m.k, {}) })
        : 0 === x.length
          ? null
          : (0, i.jsx)("ul", {
                className: l()(v.Vg, c),
                children: x.map((e) =>
                    g
                        ? (0, i.jsx)(
                              b,
                              { application: u, sku: e.sku, handleOpenUserProfileModal: n, analyticsLocations: a },
                              e.skuId,
                          )
                        : (0, i.jsx)(
                              N.A,
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
