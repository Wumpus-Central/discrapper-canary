n.d(t, { Z: () => k }), n(388685);
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
    p = n(917967),
    m = n(705338),
    b = n(277511),
    h = n(602733),
    y = n(594174),
    v = n(785717),
    O = n(621853),
    j = n(471341),
    x = n(661462),
    _ = n(319396),
    P = n(654544),
    I = n(778567),
    w = n(228168),
    S = n(582113),
    E = n(388032),
    T = n(10094);
function C(e) {
    let { isSocialLayerStorefrontEnabled: t, handleOpenShop: n, handleOpenGameShop: i } = e;
    return t
        ? (0, r.jsx)(P.Z, {
              title: E.intl.string(E.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: i,
              socialLayerStorefrontApplicationId: S.t9,
          })
        : (0, r.jsx)(s.Button, {
              variant: "secondary",
              size: "sm",
              icon: s.EOn,
              text: E.intl.string(E.t["i/yzHs"]),
              onClick: n,
          });
}
function D(e) {
    let {
        isSocialLayerStorefrontEnabled: t,
        isWishlistPublic: n,
        handleOpenShop: i,
        handleOpenGameShop: l,
        handleToggleWishlistVisibility: a,
        socialLayerStorefrontApplicationId: o,
    } = e;
    return (0, r.jsxs)("div", {
        className: T.headerActions,
        children: [
            t
                ? (0, r.jsx)(P.Z, {
                      title: E.intl.string(E.t.SDUwM0),
                      handleOpenCollectiblesShop: i,
                      handleOpenGameShop: l,
                      socialLayerStorefrontApplicationId: o,
                  })
                : (0, r.jsx)(s.Button, {
                      variant: "secondary",
                      size: "sm",
                      icon: s.qJs,
                      text: E.intl.string(E.t.SDUwM0),
                      onClick: i,
                  }),
            (0, r.jsx)(I.Z, {
                isOwner: !0,
                isWishlistPublic: n,
                onToggleVisibility: a,
            }),
        ],
    });
}
function k(e) {
    var t;
    let { profileOwner: n } = e,
        {
            wishlistId: P,
            currentUser: I,
            wishlistSettings: k,
        } = (0, a.cj)([O.Z, y.default], () => {
            let e = O.Z.getFirstWishlistId(n.id);
            return {
                wishlistId: e,
                currentUser: y.default.getCurrentUser(),
                wishlistSettings: null != e ? O.Z.getWishlistSettings(n.id, e) : null,
            };
        }),
        { analyticsLocations: N } = (0, d.ZP)(),
        { trackUserProfileWishlistAction: A } = (0, v.KZ)(),
        Z = (null == I ? void 0 : I.id) === n.id,
        R = !1 === n.nsfwAllowed,
        G = S.t9,
        [L, M] = i.useState(!0);
    i.useEffect(() => {
        (null == k ? void 0 : k.visibility) != null && M(k.visibility === l.f.PUBLIC);
    }, [null == k ? void 0 : k.visibility]);
    let { wishlist: B, error: F } = (0, h.kZ)(P, n.id),
        U = (0, p.Z)({
            location: "user-profile-modal-v2-wishlist",
            wishlist: B,
        }),
        W = i.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: r } = e;
                null != t &&
                    A({
                        wishlistId: t,
                        action: n,
                        productLines: r,
                    });
            },
            [A],
        ),
        H = (0, j.Z)({
            wishlistId: P,
            onAction: W,
            productLines: null != (t = null == B ? void 0 : B.getProductLines()) ? t : null,
        }),
        z = i.useCallback(() => {
            if (null == P) return;
            let e = L ? l.f.PRIVATE : l.f.PUBLIC;
            M(!L),
                b.Z.updateWishlistVisibility(P, e),
                A({
                    wishlistId: P,
                    action: L ? w.NW.WISHLIST_TOGGLE_PRIVATE : w.NW.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null == B ? void 0 : B.getProductLines(),
                });
        }, [P, L, A, B]),
        K = i.useCallback(() => {
            (0, o.closeAllModals)(),
                (0, f.mK)({
                    analyticsLocations: N,
                    analyticsSource: u.Z.USER_PROFILE_WISHLIST,
                });
        }, [N]),
        V = i.useCallback(() => {
            (0, m.eagerNavigateToSocialLayerStorefront)({ guildId: (0, g.ac)() });
        }, []),
        q = i.useCallback(() => {
            (0, o.closeAllModals)(), (0, m.default)({ guildId: (0, g.ac)() });
        }, []);
    return null != F
        ? null
        : null == B || 0 === B.items.length
          ? (0, r.jsx)(x.F, {
                fade: !0,
                children: (0, r.jsxs)("div", {
                    className: T.emptyStateContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: T.emptyStateText,
                            children: [
                                (0, r.jsx)(s.Heading, {
                                    variant: "heading-md/medium",
                                    color: "header-primary",
                                    children: E.intl.string(E.t.HGnLLT),
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: E.intl.string(E.t["/X1ny6"]),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(s.ButtonGroup, {
                            size: "sm",
                            children: [
                                Z &&
                                    (0, r.jsx)(s.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: s.EOn,
                                        text: E.intl.string(E.t.ZbS4QB),
                                        onClick: K,
                                    }),
                                U &&
                                    (0, r.jsx)(s.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: s.EOn,
                                        text: G === S.t9 ? E.intl.string(E.t["kq/75v"]) : E.intl.string(E.t.apFNLU),
                                        onMouseDown: V,
                                        onClick: q,
                                    }),
                            ],
                        }),
                    ],
                }),
            })
          : (0, r.jsxs)(x.F, {
                className: T.scroller,
                fade: !0,
                children: [
                    (0, r.jsxs)("div", {
                        ref: H,
                        className: T.headerRow,
                        children: [
                            (0, r.jsxs)("div", {
                                className: T.teenDisclaimer,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: E.intl.format(E.t.r6Y1Lg, { count: B.items.length }),
                                    }),
                                    !L &&
                                        (0, r.jsx)(c.u, {
                                            text: E.intl.string(E.t.RX7D9h),
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
                                    L &&
                                        R &&
                                        (0, r.jsx)(c.u, {
                                            text: E.intl.string(E.t.d78ChW),
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
                            Z
                                ? (0, r.jsx)(D, {
                                      isSocialLayerStorefrontEnabled: U,
                                      isWishlistPublic: L,
                                      handleOpenShop: K,
                                      handleOpenGameShop: q,
                                      handleToggleWishlistVisibility: z,
                                      socialLayerStorefrontApplicationId: G,
                                  })
                                : (0, r.jsx)(C, {
                                      isSocialLayerStorefrontEnabled: U,
                                      handleOpenShop: K,
                                      handleOpenGameShop: q,
                                  }),
                        ],
                    }),
                    (0, r.jsx)(_.Z, {
                        items: B.items,
                        profileOwner: n,
                        isOwner: Z,
                    }),
                ],
            });
}
