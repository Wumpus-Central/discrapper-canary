n.d(t, { A: () => D });
var i = n(627968),
    l = n(64700),
    a = n(777480),
    r = n(311907),
    s = n(192308),
    o = n(990078),
    d = n(397927),
    c = n(793574),
    u = n(688810),
    g = n(979286),
    m = n(871123),
    x = n(690946),
    f = n(898616),
    h = n(44724),
    p = n(531755),
    _ = n(808247),
    A = n(594832),
    I = n(287809),
    v = n(183555),
    j = n(622543),
    T = n(600761),
    b = n(535089),
    E = n(128988),
    y = n(515054),
    C = n(203647),
    N = n(383430),
    S = n(300131),
    w = n(518477),
    k = n(188275),
    R = n(985018),
    O = n(376721);
function L(e) {
    let { isSocialLayerStorefrontEnabled: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t
        ? (0, i.jsx)(N.A, {
              title: R.intl.string(R.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationId: k.XR,
          })
        : (0, i.jsx)(d.Button, {
              variant: "secondary",
              size: "sm",
              icon: d.U1X,
              text: R.intl.string(R.t["i/yzHs"]),
              onClick: n,
          });
}
function P(e) {
    let {
        isSocialLayerStorefrontEnabled: t,
        isWishlistPublic: n,
        handleOpenShop: l,
        handleOpenGameShop: a,
        handleToggleWishlistVisibility: r,
        socialLayerStorefrontApplicationId: s,
    } = e;
    return (0, i.jsxs)("div", {
        className: O.$s,
        children: [
            t
                ? (0, i.jsx)(N.A, {
                      title: R.intl.string(R.t.SDUwM0),
                      handleOpenCollectiblesShop: l,
                      handleOpenGameShop: a,
                      socialLayerStorefrontApplicationId: s,
                  })
                : (0, i.jsx)(d.Button, {
                      variant: "secondary",
                      size: "sm",
                      icon: d.j96,
                      text: R.intl.string(R.t.SDUwM0),
                      onClick: l,
                  }),
            (0, i.jsx)(S.A, { isOwner: !0, isWishlistPublic: n, onToggleVisibility: r }),
        ],
    });
}
function D(e) {
    let { profileOwner: t } = e,
        n = l.useRef(null);
    (0, T.i)({ containerRef: n, itemType: "WISHLIST_ITEM" });
    let {
            wishlistId: N,
            currentUser: S,
            wishlistSettings: D,
        } = (0, r.cf)([j.A, I.default], () => {
            let e = j.A.getFirstWishlistId(t.id);
            return {
                wishlistId: e,
                currentUser: I.default.getCurrentUser(),
                wishlistSettings: null != e ? j.A.getWishlistSettings(t.id, e) : null,
            };
        }),
        { analyticsLocations: G } = (0, u.Ay)(),
        { trackUserProfileWishlistAction: M } = (0, v.NJ)(),
        U = S?.id === t.id,
        F = !1 === t.nsfwAllowed,
        W = k.XR,
        [H, B] = l.useState(!0);
    l.useEffect(() => {
        D?.visibility != null && B(D.visibility === a.a.PUBLIC);
    }, [D?.visibility]);
    let { wishlist: X, error: z } = (0, A.fw)({ wishlistId: N, userId: t.id }),
        V = (0, f.A)({ location: "user-profile-modal-v2-wishlist", wishlist: X }),
        K = (0, x.X)({ location: "user-profile-modal-v2-wishlist" }),
        Y = V && K,
        q = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && M({ wishlistId: t, action: n, productLines: i });
            },
            [M],
        ),
        J = (0, b.A)({ wishlistId: N, onAction: q, productLines: X?.getProductLines() ?? null }),
        Z = l.useCallback(() => {
            if (null == N) return;
            let e = H ? a.a.PRIVATE : a.a.PUBLIC;
            B(!H),
                _.A.updateWishlistVisibility(N, e),
                M({
                    wishlistId: N,
                    action: H ? w.Mq.WISHLIST_TOGGLE_PRIVATE : w.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: X?.getProductLines(),
                });
        }, [N, H, M, X]),
        Q = l.useCallback(() => {
            (0, s.closeAllModals)(), (0, g.Cz)({ analyticsLocations: G, analyticsSource: c.A.USER_PROFILE_WISHLIST });
        }, [G]),
        $ = l.useCallback(() => {
            (0, h.X)({ guildId: (0, m.zf)() });
        }, []),
        ee = l.useCallback(() => {
            (0, s.closeAllModals)(), (0, h.default)({ guildId: (0, m.zf)() });
        }, []);
    return null != z
        ? null
        : null == X || 0 === X.items.length
          ? (0, i.jsxs)(y.K, {
                fade: !0,
                children: [
                    (0, i.jsxs)("div", {
                        className: O.y7,
                        children: [
                            (0, i.jsxs)("div", {
                                className: O.q6,
                                children: [
                                    (0, i.jsx)(d.Heading, {
                                        variant: "heading-md/medium",
                                        color: "text-strong",
                                        children: R.intl.string(R.t.HGnLLT),
                                    }),
                                    (0, i.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: R.intl.string(R.t["/X1ny6"]),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(d.ButtonGroup, {
                                size: "sm",
                                children: [
                                    U &&
                                        (0, i.jsx)(d.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            icon: d.U1X,
                                            text: R.intl.string(R.t.ZbS4QB),
                                            onClick: Q,
                                        }),
                                    V &&
                                        (0, i.jsx)(d.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            icon: d.U1X,
                                            text: W === k.XR ? R.intl.string(R.t["kq/75v"]) : R.intl.string(R.t.apFNLU),
                                            onMouseDown: $,
                                            onClick: ee,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    Y && (0, i.jsx)(p.A, { user: t, isOwner: U, wishlist: X, analyticsLocations: G, className: O._E }),
                ],
            })
          : (0, i.jsxs)(y.K, {
                scrollerRef: n,
                className: O.XG,
                fade: !0,
                children: [
                    (0, i.jsx)(E.A, { scrollerRef: n }),
                    (0, i.jsxs)("div", {
                        ref: J,
                        className: O.U1,
                        children: [
                            (0, i.jsxs)("div", {
                                className: O.Us,
                                children: [
                                    (0, i.jsx)(d.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: R.intl.format(R.t.r6Y1Lg, { count: X.items.length }),
                                    }),
                                    !H &&
                                        (0, i.jsx)(o.m, {
                                            text: R.intl.string(R.t.RX7D9h),
                                            asContainer: !0,
                                            children: (0, i.jsx)(d.vN3, {
                                                children: (0, i.jsx)("div", {
                                                    role: "tooltip",
                                                    tabIndex: 0,
                                                    children: (0, i.jsx)(d.G3N, {
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
                                            text: R.intl.string(R.t.d78ChW),
                                            asContainer: !0,
                                            children: (0, i.jsx)(d.vN3, {
                                                children: (0, i.jsx)("div", {
                                                    role: "tooltip",
                                                    tabIndex: 0,
                                                    children: (0, i.jsx)(d.mir, {
                                                        size: "custom",
                                                        width: 16,
                                                        height: 16,
                                                    }),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            U
                                ? (0, i.jsx)(P, {
                                      isSocialLayerStorefrontEnabled: V,
                                      isWishlistPublic: H,
                                      handleOpenShop: Q,
                                      handleOpenGameShop: ee,
                                      handleToggleWishlistVisibility: Z,
                                      socialLayerStorefrontApplicationId: W,
                                  })
                                : (0, i.jsx)(L, {
                                      isSocialLayerStorefrontEnabled: V,
                                      handleOpenShop: Q,
                                      handleOpenGameShop: ee,
                                  }),
                        ],
                    }),
                    (0, i.jsx)(C.A, { items: X.items, profileOwner: t, isOwner: U }),
                    Y && (0, i.jsx)(p.A, { user: t, isOwner: U, wishlist: X, analyticsLocations: G, className: O.HZ }),
                ],
            });
}
