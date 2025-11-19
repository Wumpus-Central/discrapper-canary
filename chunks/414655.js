n.d(t, { Z: () => D }), n(388685);
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
    g = n(699955),
    p = n(705338),
    m = n(277511),
    b = n(602733),
    h = n(594174),
    y = n(221292),
    O = n(621853),
    v = n(471341),
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
        socialLayerStorefrontApplicationId: o,
    } = e;
    return (0, r.jsxs)("div", {
        className: E.headerActions,
        children: [
            t
                ? (0, r.jsx)(_.Z, {
                      title: S.intl.string(S.t.SDUwM0),
                      handleOpenCollectiblesShop: i,
                      handleOpenGameShop: a,
                      socialLayerStorefrontApplicationId: o,
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
    var t;
    let { profileOwner: n } = e,
        {
            wishlistId: _,
            currentUser: P,
            wishlistSettings: D,
        } = (0, l.cj)([O.Z, h.default], () => {
            let e = O.Z.getFirstWishlistId(n.id);
            return {
                wishlistId: e,
                currentUser: h.default.getCurrentUser(),
                wishlistSettings: null != e ? O.Z.getWishlistSettings(n.id, e) : null,
            };
        }),
        k = (0, g.c)({ location: "user-profile-modal-v2-wishlist" }),
        { analyticsLocations: N } = (0, d.ZP)(),
        A = (null == P ? void 0 : P.id) === n.id,
        Z = !1 === n.nsfwAllowed,
        R = w.t9,
        [L, M] = i.useState(!0);
    i.useEffect(() => {
        (null == D ? void 0 : D.visibility) != null && M(D.visibility === a.f.PUBLIC);
    }, [null == D ? void 0 : D.visibility]);
    let { wishlist: G, error: B } = (0, b.kZ)(_, n.id),
        F = i.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: r } = e;
                null != t &&
                    (0, y.Er)({
                        wishlistId: t,
                        action: n,
                        analyticsLocations: N,
                        productLines: r,
                    });
            },
            [N],
        ),
        U = (0, v.Z)({
            wishlistId: _,
            onAction: F,
            productLines: null != (t = null == G ? void 0 : G.getProductLines()) ? t : null,
        }),
        W = i.useCallback(() => {
            if (null == _) return;
            let e = L ? a.f.PRIVATE : a.f.PUBLIC;
            M(!L),
                m.Z.updateWishlistVisibility(_, e),
                (0, y.Er)({
                    wishlistId: _,
                    action: L ? I.NW.WISHLIST_TOGGLE_PRIVATE : I.NW.WISHLIST_TOGGLE_PUBLIC,
                    analyticsLocations: N,
                    productLines: null == G ? void 0 : G.getProductLines(),
                });
        }, [_, L, N, G]),
        H = i.useCallback(() => {
            (0, o.pT)(),
                (0, f.mK)({
                    analyticsLocations: N,
                    analyticsSource: u.Z.USER_PROFILE_WISHLIST,
                });
        }, [N]),
        z = i.useCallback(() => {
            (0, o.pT)(), (0, p.Z)({ guildId: w.ON });
        }, []);
    return null != B
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
                                A &&
                                    (0, r.jsx)(s.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: s.EOn,
                                        text: S.intl.string(S.t.ZbS4QB),
                                        onClick: H,
                                    }),
                                k &&
                                    (0, r.jsx)(s.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: s.EOn,
                                        text: R === w.t9 ? S.intl.string(S.t["kq/75v"]) : S.intl.string(S.t.apFNLU),
                                        onClick: z,
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
                        ref: U,
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
                                    !L &&
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
                                    L &&
                                        Z &&
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
                            A
                                ? (0, r.jsx)(C, {
                                      isSocialLayerStorefrontEnabled: k,
                                      isWishlistPublic: L,
                                      handleOpenShop: H,
                                      handleOpenGameShop: z,
                                      handleToggleWishlistVisibility: W,
                                      socialLayerStorefrontApplicationId: R,
                                  })
                                : (0, r.jsx)(T, {
                                      isSocialLayerStorefrontEnabled: k,
                                      handleOpenShop: H,
                                      handleOpenGameShop: z,
                                  }),
                        ],
                    }),
                    (0, r.jsx)(x.Z, {
                        items: G.items,
                        profileOwner: n,
                        isOwner: A,
                    }),
                ],
            });
}
