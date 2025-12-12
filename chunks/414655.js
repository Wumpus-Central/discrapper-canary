n.d(t, { Z: () => A }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(370523),
    l = n(442837),
    o = n(952265),
    c = n(28664),
    s = n(481060),
    u = n(100527),
    d = n(906732),
    f = n(335131),
    g = n(164670),
    p = n(917967),
    b = n(705338),
    m = n(277511),
    h = n(602733),
    y = n(594174),
    O = n(785717),
    v = n(621853),
    j = n(5136),
    x = n(471341),
    P = n(683881),
    I = n(661462),
    w = n(319396),
    S = n(654544),
    E = n(778567),
    _ = n(228168),
    T = n(582113),
    C = n(388032),
    D = n(626836);
function k(e) {
    let { isSocialLayerStorefrontEnabled: t, handleOpenShop: n, handleOpenGameShop: i } = e;
    return t
        ? (0, r.jsx)(S.Z, {
              title: C.intl.string(C.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: i,
              socialLayerStorefrontApplicationId: T.t9,
          })
        : (0, r.jsx)(s.Button, {
              variant: "secondary",
              size: "sm",
              icon: s.EOn,
              text: C.intl.string(C.t["i/yzHs"]),
              onClick: n,
          });
}
function N(e) {
    let {
        isSocialLayerStorefrontEnabled: t,
        isWishlistPublic: n,
        handleOpenShop: i,
        handleOpenGameShop: a,
        handleToggleWishlistVisibility: l,
        socialLayerStorefrontApplicationId: o,
    } = e;
    return (0, r.jsxs)("div", {
        className: D.headerActions,
        children: [
            t
                ? (0, r.jsx)(S.Z, {
                      title: C.intl.string(C.t.SDUwM0),
                      handleOpenCollectiblesShop: i,
                      handleOpenGameShop: a,
                      socialLayerStorefrontApplicationId: o,
                  })
                : (0, r.jsx)(s.Button, {
                      variant: "secondary",
                      size: "sm",
                      icon: s.qJs,
                      text: C.intl.string(C.t.SDUwM0),
                      onClick: i,
                  }),
            (0, r.jsx)(E.Z, {
                isOwner: !0,
                isWishlistPublic: n,
                onToggleVisibility: l,
            }),
        ],
    });
}
function A(e) {
    var t;
    let { profileOwner: n } = e,
        S = i.useRef(null);
    (0, j.r)({
        containerRef: S,
        itemType: "WISHLIST_ITEM",
    });
    let {
            wishlistId: E,
            currentUser: A,
            wishlistSettings: Z,
        } = (0, l.cj)([v.Z, y.default], () => {
            let e = v.Z.getFirstWishlistId(n.id);
            return {
                wishlistId: e,
                currentUser: y.default.getCurrentUser(),
                wishlistSettings: null != e ? v.Z.getWishlistSettings(n.id, e) : null,
            };
        }),
        { analyticsLocations: R } = (0, d.ZP)(),
        { trackUserProfileWishlistAction: G } = (0, O.KZ)(),
        L = (null == A ? void 0 : A.id) === n.id,
        M = !1 === n.nsfwAllowed,
        B = T.t9,
        [F, U] = i.useState(!0);
    i.useEffect(() => {
        (null == Z ? void 0 : Z.visibility) != null && U(Z.visibility === a.f.PUBLIC);
    }, [null == Z ? void 0 : Z.visibility]);
    let { wishlist: W, error: H } = (0, h.kZ)({
            wishlistId: E,
            userId: n.id,
        }),
        z = (0, p.Z)({
            location: "user-profile-modal-v2-wishlist",
            wishlist: W,
        }),
        K = i.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: r } = e;
                null != t &&
                    G({
                        wishlistId: t,
                        action: n,
                        productLines: r,
                    });
            },
            [G],
        ),
        q = (0, x.Z)({
            wishlistId: E,
            onAction: K,
            productLines: null != (t = null == W ? void 0 : W.getProductLines()) ? t : null,
        }),
        V = i.useCallback(() => {
            if (null == E) return;
            let e = F ? a.f.PRIVATE : a.f.PUBLIC;
            U(!F),
                m.Z.updateWishlistVisibility(E, e),
                G({
                    wishlistId: E,
                    action: F ? _.NW.WISHLIST_TOGGLE_PRIVATE : _.NW.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null == W ? void 0 : W.getProductLines(),
                });
        }, [E, F, G, W]),
        Y = i.useCallback(() => {
            (0, o.closeAllModals)(),
                (0, f.mK)({
                    analyticsLocations: R,
                    analyticsSource: u.Z.USER_PROFILE_WISHLIST,
                });
        }, [R]),
        X = i.useCallback(() => {
            (0, b.eagerNavigateToSocialLayerStorefront)({ guildId: (0, g.ac)() });
        }, []),
        Q = i.useCallback(() => {
            (0, o.closeAllModals)(), (0, b.default)({ guildId: (0, g.ac)() });
        }, []);
    return null != H
        ? null
        : null == W || 0 === W.items.length
          ? (0, r.jsx)(I.F, {
                fade: !0,
                children: (0, r.jsxs)("div", {
                    className: D.emptyStateContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: D.emptyStateText,
                            children: [
                                (0, r.jsx)(s.Heading, {
                                    variant: "heading-md/medium",
                                    color: "text-strong",
                                    children: C.intl.string(C.t.HGnLLT),
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: C.intl.string(C.t["/X1ny6"]),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(s.ButtonGroup, {
                            size: "sm",
                            children: [
                                L &&
                                    (0, r.jsx)(s.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: s.EOn,
                                        text: C.intl.string(C.t.ZbS4QB),
                                        onClick: Y,
                                    }),
                                z &&
                                    (0, r.jsx)(s.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: s.EOn,
                                        text: B === T.t9 ? C.intl.string(C.t["kq/75v"]) : C.intl.string(C.t.apFNLU),
                                        onMouseDown: X,
                                        onClick: Q,
                                    }),
                            ],
                        }),
                    ],
                }),
            })
          : (0, r.jsxs)(I.F, {
                scrollerRef: S,
                className: D.scroller,
                fade: !0,
                children: [
                    (0, r.jsx)(P.Z, { scrollerRef: S }),
                    (0, r.jsxs)("div", {
                        ref: q,
                        className: D.headerRow,
                        children: [
                            (0, r.jsxs)("div", {
                                className: D.teenDisclaimer,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: C.intl.format(C.t.r6Y1Lg, { count: W.items.length }),
                                    }),
                                    !F &&
                                        (0, r.jsx)(c.u, {
                                            text: C.intl.string(C.t.RX7D9h),
                                            asContainer: !0,
                                            children: (0, r.jsx)(s.tEY, {
                                                children: (0, r.jsx)("div", {
                                                    role: "tooltip",
                                                    tabIndex: 0,
                                                    children: (0, r.jsx)(s.kZF, {
                                                        size: "custom",
                                                        width: 16,
                                                        height: 16,
                                                    }),
                                                }),
                                            }),
                                        }),
                                    F &&
                                        M &&
                                        (0, r.jsx)(c.u, {
                                            text: C.intl.string(C.t.d78ChW),
                                            asContainer: !0,
                                            children: (0, r.jsx)(s.tEY, {
                                                children: (0, r.jsx)("div", {
                                                    role: "tooltip",
                                                    tabIndex: 0,
                                                    children: (0, r.jsx)(s.d3s, {
                                                        size: "custom",
                                                        width: 16,
                                                        height: 16,
                                                    }),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            L
                                ? (0, r.jsx)(N, {
                                      isSocialLayerStorefrontEnabled: z,
                                      isWishlistPublic: F,
                                      handleOpenShop: Y,
                                      handleOpenGameShop: Q,
                                      handleToggleWishlistVisibility: V,
                                      socialLayerStorefrontApplicationId: B,
                                  })
                                : (0, r.jsx)(k, {
                                      isSocialLayerStorefrontEnabled: z,
                                      handleOpenShop: Y,
                                      handleOpenGameShop: Q,
                                  }),
                        ],
                    }),
                    (0, r.jsx)(w.Z, {
                        items: W.items,
                        profileOwner: n,
                        isOwner: L,
                    }),
                ],
            });
}
