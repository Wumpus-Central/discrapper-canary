n.d(t, { Z: () => R }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(370523),
    a = n(442837),
    o = n(952265),
    c = n(28664),
    s = n(481060),
    u = n(100527),
    d = n(906732),
    f = n(335131),
    g = n(164670),
    p = n(479712),
    m = n(917967),
    b = n(705338),
    y = n(828222),
    h = n(277511),
    j = n(602733),
    O = n(594174),
    x = n(785717),
    v = n(621853),
    P = n(5136),
    I = n(471341),
    w = n(683881),
    E = n(661462),
    S = n(319396),
    T = n(654544),
    _ = n(778567),
    C = n(228168),
    N = n(582113),
    Z = n(388032),
    A = n(626836);
function D(e) {
    let { isSocialLayerStorefrontEnabled: t, handleOpenShop: n, handleOpenGameShop: i } = e;
    return t
        ? (0, r.jsx)(T.Z, {
              title: Z.intl.string(Z.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: i,
              socialLayerStorefrontApplicationId: N.t9,
          })
        : (0, r.jsx)(s.Button, {
              variant: "secondary",
              size: "sm",
              icon: s.EOn,
              text: Z.intl.string(Z.t["i/yzHs"]),
              onClick: n,
          });
}
function k(e) {
    let {
        isSocialLayerStorefrontEnabled: t,
        isWishlistPublic: n,
        handleOpenShop: i,
        handleOpenGameShop: l,
        handleToggleWishlistVisibility: a,
        socialLayerStorefrontApplicationId: o,
    } = e;
    return (0, r.jsxs)("div", {
        className: A.headerActions,
        children: [
            t
                ? (0, r.jsx)(T.Z, {
                      title: Z.intl.string(Z.t.SDUwM0),
                      handleOpenCollectiblesShop: i,
                      handleOpenGameShop: l,
                      socialLayerStorefrontApplicationId: o,
                  })
                : (0, r.jsx)(s.Button, {
                      variant: "secondary",
                      size: "sm",
                      icon: s.qJs,
                      text: Z.intl.string(Z.t.SDUwM0),
                      onClick: i,
                  }),
            (0, r.jsx)(_.Z, {
                isOwner: !0,
                isWishlistPublic: n,
                onToggleVisibility: a,
            }),
        ],
    });
}
function R(e) {
    var t;
    let { profileOwner: n } = e,
        T = i.useRef(null);
    (0, P.r)({
        containerRef: T,
        itemType: "WISHLIST_ITEM",
    });
    let {
            wishlistId: _,
            currentUser: R,
            wishlistSettings: L,
        } = (0, a.cj)([v.Z, O.default], () => {
            let e = v.Z.getFirstWishlistId(n.id);
            return {
                wishlistId: e,
                currentUser: O.default.getCurrentUser(),
                wishlistSettings: null != e ? v.Z.getWishlistSettings(n.id, e) : null,
            };
        }),
        { analyticsLocations: G } = (0, d.ZP)(),
        { trackUserProfileWishlistAction: B } = (0, x.KZ)(),
        M = (null == R ? void 0 : R.id) === n.id,
        F = !1 === n.nsfwAllowed,
        U = N.t9,
        [W, H] = i.useState(!0);
    i.useEffect(() => {
        (null == L ? void 0 : L.visibility) != null && H(L.visibility === l.f.PUBLIC);
    }, [null == L ? void 0 : L.visibility]);
    let { wishlist: z, error: K } = (0, j.kZ)({
            wishlistId: _,
            userId: n.id,
        }),
        q = (0, m.Z)({
            location: "user-profile-modal-v2-wishlist",
            wishlist: z,
        }),
        V = (0, p.R)({ location: "user-profile-modal-v2-wishlist" }),
        X = q && V,
        Y = i.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: r } = e;
                null != t &&
                    B({
                        wishlistId: t,
                        action: n,
                        productLines: r,
                    });
            },
            [B],
        ),
        J = (0, I.Z)({
            wishlistId: _,
            onAction: Y,
            productLines: null != (t = null == z ? void 0 : z.getProductLines()) ? t : null,
        }),
        Q = i.useCallback(() => {
            if (null == _) return;
            let e = W ? l.f.PRIVATE : l.f.PUBLIC;
            H(!W),
                h.Z.updateWishlistVisibility(_, e),
                B({
                    wishlistId: _,
                    action: W ? C.NW.WISHLIST_TOGGLE_PRIVATE : C.NW.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null == z ? void 0 : z.getProductLines(),
                });
        }, [_, W, B, z]),
        $ = i.useCallback(() => {
            (0, o.closeAllModals)(),
                (0, f.mK)({
                    analyticsLocations: G,
                    analyticsSource: u.Z.USER_PROFILE_WISHLIST,
                });
        }, [G]),
        ee = i.useCallback(() => {
            (0, b.eagerNavigateToSocialLayerStorefront)({ guildId: (0, g.ac)() });
        }, []),
        et = i.useCallback(() => {
            (0, o.closeAllModals)(), (0, b.default)({ guildId: (0, g.ac)() });
        }, []);
    return null != K
        ? null
        : null == z || 0 === z.items.length
          ? (0, r.jsxs)(E.F, {
                fade: !0,
                children: [
                    (0, r.jsxs)("div", {
                        className: A.emptyStateContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: A.emptyStateText,
                                children: [
                                    (0, r.jsx)(s.Heading, {
                                        variant: "heading-md/medium",
                                        color: "text-strong",
                                        children: Z.intl.string(Z.t.HGnLLT),
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: Z.intl.string(Z.t["/X1ny6"]),
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(s.ButtonGroup, {
                                size: "sm",
                                children: [
                                    M &&
                                        (0, r.jsx)(s.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            icon: s.EOn,
                                            text: Z.intl.string(Z.t.ZbS4QB),
                                            onClick: $,
                                        }),
                                    X &&
                                        (0, r.jsx)(s.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            icon: s.EOn,
                                            text: U === N.t9 ? Z.intl.string(Z.t["kq/75v"]) : Z.intl.string(Z.t.apFNLU),
                                            onMouseDown: ee,
                                            onClick: et,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    q &&
                        (0, r.jsx)(y.Z, {
                            user: n,
                            isOwner: M,
                            wishlist: z,
                            analyticsLocations: G,
                            className: A.recommendationsContainerEmptyWishlist,
                        }),
                ],
            })
          : (0, r.jsxs)(E.F, {
                scrollerRef: T,
                className: A.scroller,
                fade: !0,
                children: [
                    (0, r.jsx)(w.Z, { scrollerRef: T }),
                    (0, r.jsxs)("div", {
                        ref: J,
                        className: A.headerRow,
                        children: [
                            (0, r.jsxs)("div", {
                                className: A.teenDisclaimer,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: Z.intl.format(Z.t.r6Y1Lg, { count: z.items.length }),
                                    }),
                                    !W &&
                                        (0, r.jsx)(c.u, {
                                            text: Z.intl.string(Z.t.RX7D9h),
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
                                    W &&
                                        F &&
                                        (0, r.jsx)(c.u, {
                                            text: Z.intl.string(Z.t.d78ChW),
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
                            M
                                ? (0, r.jsx)(k, {
                                      isSocialLayerStorefrontEnabled: q,
                                      isWishlistPublic: W,
                                      handleOpenShop: $,
                                      handleOpenGameShop: et,
                                      handleToggleWishlistVisibility: Q,
                                      socialLayerStorefrontApplicationId: U,
                                  })
                                : (0, r.jsx)(D, {
                                      isSocialLayerStorefrontEnabled: q,
                                      handleOpenShop: $,
                                      handleOpenGameShop: et,
                                  }),
                        ],
                    }),
                    (0, r.jsx)(S.Z, {
                        items: z.items,
                        profileOwner: n,
                        isOwner: M,
                    }),
                    X &&
                        (0, r.jsx)(y.Z, {
                            user: n,
                            isOwner: M,
                            wishlist: z,
                            analyticsLocations: G,
                            className: A.recommendationsContainerWithWishlist,
                        }),
                ],
            });
}
