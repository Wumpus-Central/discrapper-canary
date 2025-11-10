n.d(t, { Z: () => C }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(370523),
    l = n(442837),
    o = n(952265),
    c = n(28664),
    s = n(481060),
    u = n(100527),
    d = n(906732),
    g = n(335131),
    f = n(699955),
    p = n(705338),
    m = n(277511),
    b = n(602733),
    h = n(594174),
    y = n(221292),
    v = n(621853),
    O = n(661462),
    j = n(319396),
    x = n(654544),
    _ = n(778567),
    P = n(228168),
    I = n(132724),
    w = n(388032),
    S = n(10094);
function E(e) {
    let { isSocialLayerStorefrontEnabled: t, handleOpenShop: n, handleOpenGameShop: i } = e;
    return t
        ? (0, r.jsx)(x.Z, {
              title: w.intl.string(w.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: i,
              socialLayerStorefrontApplicationId: I.s,
          })
        : (0, r.jsx)(s.Button, {
              variant: "secondary",
              size: "sm",
              icon: s.EOn,
              text: w.intl.string(w.t["i/yzHs"]),
              onClick: n,
          });
}
function T(e) {
    let {
        isSocialLayerStorefrontEnabled: t,
        isWishlistPublic: n,
        handleOpenShop: i,
        handleOpenGameShop: a,
        handleToggleWishlistVisibility: l,
    } = e;
    return (0, r.jsxs)("div", {
        className: S.headerActions,
        children: [
            t
                ? (0, r.jsx)(x.Z, {
                      title: w.intl.string(w.t.SDUwM0),
                      handleOpenCollectiblesShop: i,
                      handleOpenGameShop: a,
                      socialLayerStorefrontApplicationId: I.s,
                  })
                : (0, r.jsx)(s.Button, {
                      variant: "secondary",
                      size: "sm",
                      icon: s.qJs,
                      text: w.intl.string(w.t.SDUwM0),
                      onClick: i,
                  }),
            (0, r.jsx)(_.Z, {
                isOwner: !0,
                isWishlistPublic: n,
                onToggleVisibility: l,
            }),
        ],
    });
}
function C(e) {
    let { profileOwner: t } = e,
        {
            wishlistId: n,
            currentUser: x,
            wishlistSettings: _,
        } = (0, l.cj)([v.Z, h.default], () => {
            let e = v.Z.getFirstWishlistId(t.id);
            return {
                wishlistId: e,
                currentUser: h.default.getCurrentUser(),
                wishlistSettings: null != e ? v.Z.getWishlistSettings(t.id, e) : null,
            };
        }),
        C = (0, f.c)({ location: "user-profile-modal-v2-wishlist" }),
        { analyticsLocations: D } = (0, d.ZP)(),
        k = (null == x ? void 0 : x.id) === t.id,
        N = !1 === t.nsfwAllowed,
        [A, Z] = i.useState(!0);
    i.useEffect(() => {
        (null == _ ? void 0 : _.visibility) != null && Z(_.visibility === a.f.PUBLIC);
    }, [null == _ ? void 0 : _.visibility]);
    let { wishlist: R, error: G } = (0, b.kZ)(n, t.id),
        L = i.useCallback(() => {
            if (null == n) return;
            let e = A ? a.f.PRIVATE : a.f.PUBLIC;
            Z(!A),
                m.Z.updateWishlistVisibility(n, e),
                (0, y.Er)({
                    wishlistId: n,
                    action: A ? P.NW.WISHLIST_TOGGLE_PRIVATE : P.NW.WISHLIST_TOGGLE_PUBLIC,
                    analyticsLocations: D,
                });
        }, [n, A, D]),
        B = i.useCallback(() => {
            (0, o.pT)(),
                (0, g.mK)({
                    analyticsLocations: D,
                    analyticsSource: u.Z.USER_PROFILE_WISHLIST,
                });
        }, [D]),
        M = i.useCallback(() => {
            (0, o.pT)(), (0, p.Z)({ guildId: I.A });
        }, []);
    return null != G
        ? null
        : null == R || 0 === R.items.length
          ? (0, r.jsx)(O.F, {
                fade: !0,
                children: (0, r.jsxs)("div", {
                    className: S.emptyStateContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: S.emptyStateText,
                            children: [
                                (0, r.jsx)(s.Heading, {
                                    variant: "heading-md/medium",
                                    color: "header-primary",
                                    children: w.intl.string(w.t.HGnLLT),
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: w.intl.string(w.t["/X1ny6"]),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(s.ButtonGroup, {
                            size: "sm",
                            children: [
                                k &&
                                    (0, r.jsx)(s.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: s.EOn,
                                        text: w.intl.string(w.t.ZbS4QB),
                                        onClick: B,
                                    }),
                                C &&
                                    (0, r.jsx)(s.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: s.EOn,
                                        text: w.intl.string(w.t.apFNLU),
                                        onClick: M,
                                    }),
                            ],
                        }),
                    ],
                }),
            })
          : (0, r.jsxs)(O.F, {
                className: S.scroller,
                fade: !0,
                children: [
                    (0, r.jsxs)("div", {
                        className: S.headerRow,
                        children: [
                            (0, r.jsxs)("div", {
                                className: S.teenDisclaimer,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-secondary",
                                        children: w.intl.format(w.t.r6Y1Lg, { count: R.items.length }),
                                    }),
                                    !A &&
                                        (0, r.jsx)(c.u, {
                                            text: w.intl.string(w.t.RX7D9h),
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
                                    A &&
                                        N &&
                                        (0, r.jsx)(c.u, {
                                            text: w.intl.string(w.t.d78ChW),
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
                            k
                                ? (0, r.jsx)(T, {
                                      isSocialLayerStorefrontEnabled: C,
                                      isWishlistPublic: A,
                                      handleOpenShop: B,
                                      handleOpenGameShop: M,
                                      handleToggleWishlistVisibility: L,
                                  })
                                : (0, r.jsx)(E, {
                                      isSocialLayerStorefrontEnabled: C,
                                      handleOpenShop: B,
                                      handleOpenGameShop: M,
                                  }),
                        ],
                    }),
                    (0, r.jsx)(j.Z, {
                        items: R.items,
                        profileOwner: t,
                        isOwner: k,
                    }),
                ],
            });
}
