n.d(t, { Z: () => D }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(370523),
    l = n(442837),
    o = n(952265),
    c = n(28664),
    s = n(481060),
    u = n(100527),
    d = n(906732),
    f = n(335131),
    g = n(699955),
    p = n(705338),
    m = n(277511),
    b = n(602733),
    h = n(594174),
    y = n(221292),
    v = n(621853),
    O = n(471341),
    j = n(661462),
    x = n(319396),
    _ = n(654544),
    P = n(778567),
    I = n(228168),
    w = n(582113),
    S = n(388032),
    E = n(10094);
function T(e) {
    let { isSocialLayerStorefrontEnabled: t, handleOpenShop: n, handleOpenGameShop: i } = e;
    return t
        ? (0, r.jsx)(_.Z, {
              title: S.intl.string(S.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: i,
              socialLayerStorefrontApplicationId: w.t9,
          })
        : (0, r.jsx)(s.Button, {
              variant: "secondary",
              size: "sm",
              icon: s.EOn,
              text: S.intl.string(S.t["i/yzHs"]),
              onClick: n,
          });
}
function C(e) {
    let {
        isSocialLayerStorefrontEnabled: t,
        isWishlistPublic: n,
        handleOpenShop: i,
        handleOpenGameShop: a,
        handleToggleWishlistVisibility: l,
    } = e;
    return (0, r.jsxs)("div", {
        className: E.headerActions,
        children: [
            t
                ? (0, r.jsx)(_.Z, {
                      title: S.intl.string(S.t.SDUwM0),
                      handleOpenCollectiblesShop: i,
                      handleOpenGameShop: a,
                      socialLayerStorefrontApplicationId: w.t9,
                  })
                : (0, r.jsx)(s.Button, {
                      variant: "secondary",
                      size: "sm",
                      icon: s.qJs,
                      text: S.intl.string(S.t.SDUwM0),
                      onClick: i,
                  }),
            (0, r.jsx)(P.Z, {
                isOwner: !0,
                isWishlistPublic: n,
                onToggleVisibility: l,
            }),
        ],
    });
}
function D(e) {
    let { profileOwner: t } = e,
        {
            wishlistId: n,
            currentUser: _,
            wishlistSettings: P,
        } = (0, l.cj)([v.Z, h.default], () => {
            let e = v.Z.getFirstWishlistId(t.id);
            return {
                wishlistId: e,
                currentUser: h.default.getCurrentUser(),
                wishlistSettings: null != e ? v.Z.getWishlistSettings(t.id, e) : null,
            };
        }),
        D = (0, g.c)({ location: "user-profile-modal-v2-wishlist" }),
        { analyticsLocations: k } = (0, d.ZP)(),
        N = (null == _ ? void 0 : _.id) === t.id,
        A = !1 === t.nsfwAllowed,
        [Z, R] = i.useState(!0);
    i.useEffect(() => {
        (null == P ? void 0 : P.visibility) != null && R(P.visibility === a.f.PUBLIC);
    }, [null == P ? void 0 : P.visibility]);
    let { wishlist: G, error: L } = (0, b.kZ)(n, t.id),
        B = i.useCallback(
            (e) => {
                let { wishlistId: t, action: n, skuId: r } = e;
                null != t &&
                    (0, y.Er)({
                        wishlistId: t,
                        action: n,
                        skuId: r,
                        analyticsLocations: k,
                    });
            },
            [k],
        ),
        M = (0, O.Z)({
            wishlistId: n,
            onAction: B,
        }),
        U = i.useCallback(() => {
            var e;
            if (null == n) return;
            let t = Z ? a.f.PRIVATE : a.f.PUBLIC;
            R(!Z), m.Z.updateWishlistVisibility(n, t);
            let r = null != (e = null == G ? void 0 : G.hasThirdPartySku()) && e;
            (0, y.Er)({
                wishlistId: n,
                action: Z ? I.NW.WISHLIST_TOGGLE_PRIVATE : I.NW.WISHLIST_TOGGLE_PUBLIC,
                analyticsLocations: k,
                hasThirdPartySku: r,
            });
        }, [n, Z, k, G]),
        F = i.useCallback(() => {
            (0, o.pT)(),
                (0, f.mK)({
                    analyticsLocations: k,
                    analyticsSource: u.Z.USER_PROFILE_WISHLIST,
                });
        }, [k]),
        W = i.useCallback(() => {
            (0, o.pT)(), (0, p.Z)({ guildId: w.ON });
        }, []);
    return null != L
        ? null
        : null == G || 0 === G.items.length
          ? (0, r.jsx)(j.F, {
                fade: !0,
                children: (0, r.jsxs)("div", {
                    className: E.emptyStateContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: E.emptyStateText,
                            children: [
                                (0, r.jsx)(s.Heading, {
                                    variant: "heading-md/medium",
                                    color: "header-primary",
                                    children: S.intl.string(S.t.HGnLLT),
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: S.intl.string(S.t["/X1ny6"]),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(s.ButtonGroup, {
                            size: "sm",
                            children: [
                                N &&
                                    (0, r.jsx)(s.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: s.EOn,
                                        text: S.intl.string(S.t.ZbS4QB),
                                        onClick: F,
                                    }),
                                D &&
                                    (0, r.jsx)(s.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: s.EOn,
                                        text: S.intl.string(S.t.apFNLU),
                                        onClick: W,
                                    }),
                            ],
                        }),
                    ],
                }),
            })
          : (0, r.jsxs)(j.F, {
                className: E.scroller,
                fade: !0,
                children: [
                    (0, r.jsxs)("div", {
                        ref: M,
                        className: E.headerRow,
                        children: [
                            (0, r.jsxs)("div", {
                                className: E.teenDisclaimer,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-secondary",
                                        children: S.intl.format(S.t.r6Y1Lg, { count: G.items.length }),
                                    }),
                                    !Z &&
                                        (0, r.jsx)(c.u, {
                                            text: S.intl.string(S.t.RX7D9h),
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
                                    Z &&
                                        A &&
                                        (0, r.jsx)(c.u, {
                                            text: S.intl.string(S.t.d78ChW),
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
                            N
                                ? (0, r.jsx)(C, {
                                      isSocialLayerStorefrontEnabled: D,
                                      isWishlistPublic: Z,
                                      handleOpenShop: F,
                                      handleOpenGameShop: W,
                                      handleToggleWishlistVisibility: U,
                                  })
                                : (0, r.jsx)(T, {
                                      isSocialLayerStorefrontEnabled: D,
                                      handleOpenShop: F,
                                      handleOpenGameShop: W,
                                  }),
                        ],
                    }),
                    (0, r.jsx)(x.Z, {
                        items: G.items,
                        profileOwner: t,
                        isOwner: N,
                    }),
                ],
            });
}
