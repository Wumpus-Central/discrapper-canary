n.d(t, { A: () => D });
var i = n(627968),
    l = n(64700),
    a = n(777480),
    s = n(311907),
    r = n(192308),
    o = n(990078),
    c = n(397927),
    d = n(793574),
    u = n(688810),
    m = n(979286),
    g = n(871123),
    x = n(690946),
    f = n(898616),
    p = n(44724),
    h = n(531755),
    _ = n(808247),
    A = n(594832),
    I = n(287809),
    j = n(183555),
    v = n(622543),
    E = n(600761),
    T = n(535089),
    b = n(128988),
    y = n(515054),
    N = n(203647),
    C = n(383430),
    S = n(300131),
    k = n(518477),
    R = n(188275),
    w = n(985018),
    L = n(376721);
function O(e) {
    let { isSocialLayerStorefrontEnabled: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t
        ? (0, i.jsx)(C.A, {
              title: w.intl.string(w.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationId: R.XR,
          })
        : (0, i.jsx)(c.Button, {
              variant: "secondary",
              size: "sm",
              icon: c.U1X,
              text: w.intl.string(w.t["i/yzHs"]),
              onClick: n,
          });
}
function P(e) {
    let {
        isSocialLayerStorefrontEnabled: t,
        isWishlistPublic: n,
        handleOpenShop: l,
        handleOpenGameShop: a,
        handleToggleWishlistVisibility: s,
        socialLayerStorefrontApplicationId: r,
    } = e;
    return (0, i.jsxs)("div", {
        className: L.$s,
        children: [
            t
                ? (0, i.jsx)(C.A, {
                      title: w.intl.string(w.t.SDUwM0),
                      handleOpenCollectiblesShop: l,
                      handleOpenGameShop: a,
                      socialLayerStorefrontApplicationId: r,
                  })
                : (0, i.jsx)(c.Button, {
                      variant: "secondary",
                      size: "sm",
                      icon: c.j96,
                      text: w.intl.string(w.t.SDUwM0),
                      onClick: l,
                  }),
            (0, i.jsx)(S.A, { isOwner: !0, isWishlistPublic: n, onToggleVisibility: s }),
        ],
    });
}
function D(e) {
    let { profileOwner: t } = e,
        n = l.useRef(null);
    (0, E.i)({ containerRef: n, itemType: "WISHLIST_ITEM" });
    let {
            wishlistId: C,
            currentUser: S,
            wishlistSettings: D,
        } = (0, s.cf)([v.A, I.default], () => {
            let e = v.A.getFirstWishlistId(t.id);
            return {
                wishlistId: e,
                currentUser: I.default.getCurrentUser(),
                wishlistSettings: null != e ? v.A.getWishlistSettings(t.id, e) : null,
            };
        }),
        { analyticsLocations: G } = (0, u.Ay)(),
        { trackUserProfileWishlistAction: U } = (0, j.NJ)(),
        M = S?.id === t.id,
        F = !1 === t.nsfwAllowed,
        W = R.XR,
        [H, B] = l.useState(!0);
    l.useEffect(() => {
        D?.visibility != null && B(D.visibility === a.a.PUBLIC);
    }, [D?.visibility]);
    let { wishlist: X, error: z } = (0, A.fw)({ wishlistId: C, userId: t.id }),
        V = (0, f.A)({ location: "user-profile-modal-v2-wishlist", wishlist: X, profileOwner: t, currentUser: S }),
        Y = (0, x.X)({ location: "user-profile-modal-v2-wishlist" }),
        K = M && V && Y,
        q = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && U({ wishlistId: t, action: n, productLines: i });
            },
            [U],
        ),
        J = (0, T.A)({ wishlistId: C, onAction: q, productLines: X?.getProductLines() ?? null }),
        Q = l.useCallback(() => {
            if (null == C) return;
            let e = H ? a.a.PRIVATE : a.a.PUBLIC;
            B(!H),
                _.A.updateWishlistVisibility(C, e),
                U({
                    wishlistId: C,
                    action: H ? k.Mq.WISHLIST_TOGGLE_PRIVATE : k.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: X?.getProductLines(),
                });
        }, [C, H, U, X]),
        Z = l.useCallback(() => {
            (0, r.closeAllModals)(), (0, m.Cz)({ analyticsLocations: G, analyticsSource: d.A.USER_PROFILE_WISHLIST });
        }, [G]),
        $ = l.useCallback(() => {
            (0, p.X)({ guildId: (0, g.zf)() });
        }, []),
        ee = l.useCallback(() => {
            (0, r.closeAllModals)(), (0, p.default)({ guildId: (0, g.zf)() });
        }, []);
    return null != z
        ? null
        : null == X || 0 === X.items.length
          ? (0, i.jsxs)(y.K, {
                fade: !0,
                children: [
                    (0, i.jsxs)("div", {
                        className: L.y7,
                        children: [
                            (0, i.jsxs)("div", {
                                className: L.q6,
                                children: [
                                    (0, i.jsx)(c.Heading, {
                                        variant: "heading-md/medium",
                                        color: "text-strong",
                                        children: w.intl.string(w.t.HGnLLT),
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: w.intl.string(w.t["/X1ny6"]),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(c.ButtonGroup, {
                                size: "sm",
                                children: [
                                    M &&
                                        (0, i.jsx)(c.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            icon: c.U1X,
                                            text: w.intl.string(w.t.ZbS4QB),
                                            onClick: Z,
                                        }),
                                    V &&
                                        (0, i.jsx)(c.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            icon: c.U1X,
                                            text: W === R.XR ? w.intl.string(w.t["kq/75v"]) : w.intl.string(w.t.apFNLU),
                                            onMouseDown: $,
                                            onClick: ee,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    K && (0, i.jsx)(h.A, { wishlist: X, analyticsLocations: G, className: L._E }),
                ],
            })
          : (0, i.jsxs)(y.K, {
                scrollerRef: n,
                className: L.XG,
                fade: !0,
                children: [
                    (0, i.jsx)(b.A, { scrollerRef: n }),
                    (0, i.jsxs)("div", {
                        ref: J,
                        className: L.U1,
                        children: [
                            (0, i.jsxs)("div", {
                                className: L.Us,
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: w.intl.format(w.t.r6Y1Lg, { count: X.items.length }),
                                    }),
                                    !H &&
                                        (0, i.jsx)(o.m, {
                                            text: w.intl.string(w.t.RX7D9h),
                                            asContainer: !0,
                                            children: (0, i.jsx)(c.vN3, {
                                                children: (0, i.jsx)("div", {
                                                    role: "tooltip",
                                                    tabIndex: 0,
                                                    children: (0, i.jsx)(c.G3N, {
                                                        size: "custom",
                                                        width: 16,
                                                        height: 16,
                                                    }),
                                                }),
                                            }),
                                        }),
                                    H &&
                                        F &&
                                        (0, i.jsx)(o.m, {
                                            text: w.intl.string(w.t.d78ChW),
                                            asContainer: !0,
                                            children: (0, i.jsx)(c.vN3, {
                                                children: (0, i.jsx)("div", {
                                                    role: "tooltip",
                                                    tabIndex: 0,
                                                    children: (0, i.jsx)(c.mir, {
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
                                ? (0, i.jsx)(P, {
                                      isSocialLayerStorefrontEnabled: V,
                                      isWishlistPublic: H,
                                      handleOpenShop: Z,
                                      handleOpenGameShop: ee,
                                      handleToggleWishlistVisibility: Q,
                                      socialLayerStorefrontApplicationId: W,
                                  })
                                : (0, i.jsx)(O, {
                                      isSocialLayerStorefrontEnabled: V,
                                      handleOpenShop: Z,
                                      handleOpenGameShop: ee,
                                  }),
                        ],
                    }),
                    (0, i.jsx)(N.A, { items: X.items, profileOwner: t, isOwner: M }),
                    K && (0, i.jsx)(h.A, { wishlist: X, analyticsLocations: G, className: L.HZ }),
                ],
            });
}
