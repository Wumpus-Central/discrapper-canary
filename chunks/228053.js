n.d(t, {
    A: () => T,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(158954),
    o = n(311907),
    c = n(435371),
    u = n(397927),
    d = n(688810),
    p = n(429913),
    h = n(576030),
    f = n(713517),
    g = n(492518),
    m = n(242640),
    A = n(808247),
    _ = n(594832),
    b = n(287809),
    E = n(592356),
    O = n(366523),
    y = n(235218),
    I = n(188275),
    v = n(518477),
    S = n(985018),
    C = n(30621);

function N(e) {
    let { application: t, sku: n, handleOpenUserProfileModal: l, analyticsLocations: a } = e,
        o = i.useRef(null),
        { analyticsLocations: p } = (0, d.Ay)(null != a ? a : []),
        { isHoveringOrFocusing: m } = (0, f.A)(o),
        [b, E] = i.useState(!1),
        y = i.useCallback(
            async (e) => {
                if ((e.stopPropagation(), !b)) {
                    E(!0);
                    try {
                        await A.A.addSkuToWishlist(n.id, p),
                            null == l ||
                                l({
                                    tabSection: v.RP.WISHLIST,
                                });
                    } catch (e) {
                        (0, u.showToast)((0, u.createToast)(S.intl.string(S.t.F8FvUy), u.ToastType.FAILURE)),
                            s.ORC.announce(S.intl.string(S.t.F8FvUy));
                    } finally {
                        E(!1);
                    }
                }
            },
            [n.id, p, l, b],
        );
    return (0, r.jsx)(c.un, {
        title: S.intl.string(S.t["8DkMEQ"]),
        body: n.name,
        asset: (0, r.jsx)(h.mW, {
            application: t,
        }),
        assetSize: _.Q8,
        children: (0, r.jsxs)(s.sqX, {
            className: C.Nr,
            ref: o,
            "aria-label": n.name,
            onClick: y,
            children: [
                (0, r.jsx)(
                    O.e,
                    {
                        shape: "custom",
                        containerClassName: C.Nr,
                        foregroundImageClassName: C.wP,
                        backgroundImageClassName: C.GC,
                        sku: n,
                    },
                    n.id,
                ),
                (m || b) &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", {
                                className: C.p0,
                            }),
                            (0, r.jsx)("div", {
                                className: C.R$,
                                children: b
                                    ? (0, r.jsx)(g.k, {})
                                    : (0, r.jsx)(s.pa$, {
                                          size: "lg",
                                          color: u.LU0.unsafe_rawColors.WHITE_500,
                                      }),
                            }),
                        ],
                    }),
            ],
        }),
    });
}

function T(e) {
    let {
            wishlist: t,
            handleOpenUserProfileModal: n,
            analyticsLocations: l,
            numWishlistItemsToRecommend: s,
            maxWishlistItemsToShow: c = s,
            className: u,
        } = e,
        d = (0, p.h)(I.XR),
        h = (0, o.bG)([b.default], () => b.default.getCurrentUser()),
        f = (0, o.bG)([b.default], () => b.default.getUser(null == t ? void 0 : t.userId)),
        A = null == t || (null != h && null != t && t.userId === h.id),
        _ = i.useMemo(() => (null == t ? (null != h ? [h.id] : void 0) : [t.userId]), [t, h]),
        O = (0, E.A)({
            numWishlistItems: s,
            location: "SocialLayerAddToWishlistGrid",
            applicationId: I.XR,
            userIds: _,
            includeWishlists: !1,
        }),
        v = i.useMemo(() => {
            var e;
            return new Set(null != (e = null == t ? void 0 : t.items.map((e) => e.skuId)) ? e : []);
        }, [t]),
        S = O.recommendations.filter((e) => !v.has(e.skuId)).slice(0, c);
    return "success" !== O.state
        ? (0, r.jsx)("div", {
              className: C.g4,
              children: (0, r.jsx)(g.k, {}),
          })
        : 0 === S.length
          ? null
          : (0, r.jsx)("ul", {
                className: a()(C.Vg, u),
                children: S.map((e) =>
                    A
                        ? (0, r.jsx)(
                              N,
                              {
                                  application: d,
                                  sku: e.sku,
                                  handleOpenUserProfileModal: n,
                                  analyticsLocations: l,
                              },
                              e.skuId,
                          )
                        : (0, r.jsx)(
                              y.A,
                              {
                                  item: e,
                                  wishlistId: t.id,
                                  isOwner: !1,
                                  profileOwner: f,
                                  cardSize: m.Y.FLEX,
                                  showOverlayButton: !0,
                                  hideButtonIcon: !0,
                                  isDragging: !1,
                              },
                              e.skuId,
                          ),
                ),
            });
}
