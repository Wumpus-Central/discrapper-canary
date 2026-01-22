n.d(t, { A: () => G }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(777480),
    a = n(311907),
    s = n(192308),
    o = n(990078),
    c = n(397927),
    u = n(793574),
    d = n(688810),
    f = n(979286),
    p = n(871123),
    b = n(690946),
    g = n(898616),
    m = n(44724),
    y = n(531755),
    O = n(808247),
    j = n(594832),
    x = n(287809),
    h = n(183555),
    v = n(622543),
    A = n(600761),
    w = n(535089),
    I = n(128988),
    P = n(515054),
    E = n(203647),
    S = n(383430),
    T = n(300131),
    _ = n(518477),
    N = n(188275),
    D = n(985018),
    R = n(39427);
function C(e) {
    let { isSocialLayerStorefrontEnabled: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t
        ? (0, r.jsx)(S.A, {
              title: D.intl.string(D.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationId: N.XR,
          })
        : (0, r.jsx)(c.Button, {
              variant: "secondary",
              size: "sm",
              icon: c.U1X,
              text: D.intl.string(D.t["i/yzHs"]),
              onClick: n,
          });
}
function k(e) {
    let {
        isSocialLayerStorefrontEnabled: t,
        isWishlistPublic: n,
        handleOpenShop: l,
        handleOpenGameShop: i,
        handleToggleWishlistVisibility: a,
        socialLayerStorefrontApplicationId: s,
    } = e;
    return (0, r.jsxs)("div", {
        className: R.$s,
        children: [
            t
                ? (0, r.jsx)(S.A, {
                      title: D.intl.string(D.t.SDUwM0),
                      handleOpenCollectiblesShop: l,
                      handleOpenGameShop: i,
                      socialLayerStorefrontApplicationId: s,
                  })
                : (0, r.jsx)(c.Button, {
                      variant: "secondary",
                      size: "sm",
                      icon: c.j96,
                      text: D.intl.string(D.t.SDUwM0),
                      onClick: l,
                  }),
            (0, r.jsx)(T.A, {
                isOwner: !0,
                isWishlistPublic: n,
                onToggleVisibility: a,
            }),
        ],
    });
}
function G(e) {
    var t;
    let { profileOwner: n } = e,
        S = l.useRef(null);
    (0, A.i)({
        containerRef: S,
        itemType: "WISHLIST_ITEM",
    });
    let {
            wishlistId: T,
            currentUser: G,
            wishlistSettings: L,
        } = (0, a.cf)([v.A, x.default], () => {
            let e = v.A.getFirstWishlistId(n.id);
            return {
                wishlistId: e,
                currentUser: x.default.getCurrentUser(),
                wishlistSettings: null != e ? v.A.getWishlistSettings(n.id, e) : null,
            };
        }),
        { analyticsLocations: U } = (0, d.Ay)(),
        { trackUserProfileWishlistAction: M } = (0, h.NJ)(),
        F = (null == G ? void 0 : G.id) === n.id,
        X = !1 === n.nsfwAllowed,
        W = N.XR,
        [B, H] = l.useState(!0);
    l.useEffect(() => {
        (null == L ? void 0 : L.visibility) != null && H(L.visibility === i.a.PUBLIC);
    }, [null == L ? void 0 : L.visibility]);
    let { wishlist: K, error: z } = (0, j.fw)({
            wishlistId: T,
            userId: n.id,
        }),
        V = (0, g.A)({
            location: "user-profile-modal-v2-wishlist",
            wishlist: K,
        }),
        Y = (0, b.X)({ location: "user-profile-modal-v2-wishlist" }),
        q = V && Y,
        J = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: r } = e;
                null != t &&
                    M({
                        wishlistId: t,
                        action: n,
                        productLines: r,
                    });
            },
            [M],
        ),
        Q = (0, w.A)({
            wishlistId: T,
            onAction: J,
            productLines: null != (t = null == K ? void 0 : K.getProductLines()) ? t : null,
        }),
        Z = l.useCallback(() => {
            if (null == T) return;
            let e = B ? i.a.PRIVATE : i.a.PUBLIC;
            H(!B),
                O.A.updateWishlistVisibility(T, e),
                M({
                    wishlistId: T,
                    action: B ? _.Mq.WISHLIST_TOGGLE_PRIVATE : _.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null == K ? void 0 : K.getProductLines(),
                });
        }, [T, B, M, K]),
        $ = l.useCallback(() => {
            (0, s.closeAllModals)(),
                (0, f.Cz)({
                    analyticsLocations: U,
                    analyticsSource: u.A.USER_PROFILE_WISHLIST,
                });
        }, [U]),
        ee = l.useCallback(() => {
            (0, m.X)({ guildId: (0, p.zf)() });
        }, []),
        et = l.useCallback(() => {
            (0, s.closeAllModals)(), (0, m.default)({ guildId: (0, p.zf)() });
        }, []);
    return null != z
        ? null
        : null == K || 0 === K.items.length
          ? (0, r.jsxs)(P.K, {
                fade: !0,
                children: [
                    (0, r.jsxs)("div", {
                        className: R.y7,
                        children: [
                            (0, r.jsxs)("div", {
                                className: R.q6,
                                children: [
                                    (0, r.jsx)(c.Heading, {
                                        variant: "heading-md/medium",
                                        color: "text-strong",
                                        children: D.intl.string(D.t.HGnLLT),
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: D.intl.string(D.t["/X1ny6"]),
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(c.ButtonGroup, {
                                size: "sm",
                                children: [
                                    F &&
                                        (0, r.jsx)(c.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            icon: c.U1X,
                                            text: D.intl.string(D.t.ZbS4QB),
                                            onClick: $,
                                        }),
                                    V &&
                                        (0, r.jsx)(c.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            icon: c.U1X,
                                            text: W === N.XR ? D.intl.string(D.t["kq/75v"]) : D.intl.string(D.t.apFNLU),
                                            onMouseDown: ee,
                                            onClick: et,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    q &&
                        (0, r.jsx)(y.A, {
                            user: n,
                            isOwner: F,
                            wishlist: K,
                            analyticsLocations: U,
                            className: R._E,
                        }),
                ],
            })
          : (0, r.jsxs)(P.K, {
                scrollerRef: S,
                className: R.XG,
                fade: !0,
                children: [
                    (0, r.jsx)(I.A, { scrollerRef: S }),
                    (0, r.jsxs)("div", {
                        ref: Q,
                        className: R.U1,
                        children: [
                            (0, r.jsxs)("div", {
                                className: R.Us,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: D.intl.format(D.t.r6Y1Lg, { count: K.items.length }),
                                    }),
                                    !B &&
                                        (0, r.jsx)(o.m, {
                                            text: D.intl.string(D.t.RX7D9h),
                                            asContainer: !0,
                                            children: (0, r.jsx)(c.vN3, {
                                                children: (0, r.jsx)("div", {
                                                    role: "tooltip",
                                                    tabIndex: 0,
                                                    children: (0, r.jsx)(c.G3N, {
                                                        size: "custom",
                                                        width: 16,
                                                        height: 16,
                                                    }),
                                                }),
                                            }),
                                        }),
                                    B &&
                                        X &&
                                        (0, r.jsx)(o.m, {
                                            text: D.intl.string(D.t.d78ChW),
                                            asContainer: !0,
                                            children: (0, r.jsx)(c.vN3, {
                                                children: (0, r.jsx)("div", {
                                                    role: "tooltip",
                                                    tabIndex: 0,
                                                    children: (0, r.jsx)(c.mir, {
                                                        size: "custom",
                                                        width: 16,
                                                        height: 16,
                                                    }),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            F
                                ? (0, r.jsx)(k, {
                                      isSocialLayerStorefrontEnabled: V,
                                      isWishlistPublic: B,
                                      handleOpenShop: $,
                                      handleOpenGameShop: et,
                                      handleToggleWishlistVisibility: Z,
                                      socialLayerStorefrontApplicationId: W,
                                  })
                                : (0, r.jsx)(C, {
                                      isSocialLayerStorefrontEnabled: V,
                                      handleOpenShop: $,
                                      handleOpenGameShop: et,
                                  }),
                        ],
                    }),
                    (0, r.jsx)(E.A, {
                        items: K.items,
                        profileOwner: n,
                        isOwner: F,
                    }),
                    q &&
                        (0, r.jsx)(y.A, {
                            user: n,
                            isOwner: F,
                            wishlist: K,
                            analyticsLocations: U,
                            className: R.HZ,
                        }),
                ],
            });
}
