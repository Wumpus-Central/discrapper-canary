n.d(t, { Z: () => k }), n(388685);
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
    p = n(699955),
    m = n(705338),
    b = n(277511),
    h = n(602733),
    y = n(594174),
    v = n(221292),
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
        handleOpenGameShop: a,
        handleToggleWishlistVisibility: l,
        socialLayerStorefrontApplicationId: o,
    } = e;
    return (0, r.jsxs)("div", {
        className: T.headerActions,
        children: [
            t
                ? (0, r.jsx)(P.Z, {
                      title: E.intl.string(E.t.SDUwM0),
                      handleOpenCollectiblesShop: i,
                      handleOpenGameShop: a,
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
                onToggleVisibility: l,
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
        } = (0, l.cj)([O.Z, y.default], () => {
            let e = O.Z.getFirstWishlistId(n.id);
            return {
                wishlistId: e,
                currentUser: y.default.getCurrentUser(),
                wishlistSettings: null != e ? O.Z.getWishlistSettings(n.id, e) : null,
            };
        }),
        N = (0, p.c)({ location: "user-profile-modal-v2-wishlist" }),
        { analyticsLocations: A } = (0, d.ZP)(),
        Z = (null == I ? void 0 : I.id) === n.id,
        R = !1 === n.nsfwAllowed,
        L = S.t9,
        [G, M] = i.useState(!0);
    i.useEffect(() => {
        (null == k ? void 0 : k.visibility) != null && M(k.visibility === a.f.PUBLIC);
    }, [null == k ? void 0 : k.visibility]);
    let { wishlist: B, error: F } = (0, h.kZ)(P, n.id),
        U = i.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: r } = e;
                null != t &&
                    (0, v.Er)({
                        wishlistId: t,
                        action: n,
                        analyticsLocations: A,
                        productLines: r,
                    });
            },
            [A],
        ),
        W = (0, j.Z)({
            wishlistId: P,
            onAction: U,
            productLines: null != (t = null == B ? void 0 : B.getProductLines()) ? t : null,
        }),
        H = i.useCallback(() => {
            if (null == P) return;
            let e = G ? a.f.PRIVATE : a.f.PUBLIC;
            M(!G),
                b.Z.updateWishlistVisibility(P, e),
                (0, v.Er)({
                    wishlistId: P,
                    action: G ? w.NW.WISHLIST_TOGGLE_PRIVATE : w.NW.WISHLIST_TOGGLE_PUBLIC,
                    analyticsLocations: A,
                    productLines: null == B ? void 0 : B.getProductLines(),
                });
        }, [P, G, A, B]),
        z = i.useCallback(() => {
            (0, o.pT)(),
                (0, f.mK)({
                    analyticsLocations: A,
                    analyticsSource: u.Z.USER_PROFILE_WISHLIST,
                });
        }, [A]),
        K = i.useCallback(() => {
            (0, o.pT)(), (0, m.Z)({ guildId: (0, g.ac)() });
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
                                    color: "header-secondary",
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
                                        onClick: z,
                                    }),
                                N &&
                                    (0, r.jsx)(s.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: s.EOn,
                                        text: L === S.t9 ? E.intl.string(E.t["kq/75v"]) : E.intl.string(E.t.apFNLU),
                                        onClick: K,
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
                        ref: W,
                        className: T.headerRow,
                        children: [
                            (0, r.jsxs)("div", {
                                className: T.teenDisclaimer,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-secondary",
                                        children: E.intl.format(E.t.r6Y1Lg, { count: B.items.length }),
                                    }),
                                    !G &&
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
                                    G &&
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
                                      isSocialLayerStorefrontEnabled: N,
                                      isWishlistPublic: G,
                                      handleOpenShop: z,
                                      handleOpenGameShop: K,
                                      handleToggleWishlistVisibility: H,
                                      socialLayerStorefrontApplicationId: L,
                                  })
                                : (0, r.jsx)(C, {
                                      isSocialLayerStorefrontEnabled: N,
                                      handleOpenShop: z,
                                      handleOpenGameShop: K,
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
