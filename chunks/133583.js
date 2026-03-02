n.d(t, { A: () => F });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(777480),
    o = n(311907),
    c = n(192308),
    d = n(990078),
    u = n(397927),
    m = n(793574),
    g = n(688810),
    x = n(979286),
    f = n(871123),
    p = n(690946),
    h = n(898616),
    _ = n(44724),
    A = n(531755),
    I = n(808247),
    j = n(594832),
    v = n(287809),
    E = n(183555),
    T = n(622543),
    b = n(600761),
    y = n(535089),
    N = n(128988),
    S = n(515054),
    C = n(203647),
    k = n(383430),
    R = n(300131),
    w = n(518477),
    O = n(188275),
    L = n(985018),
    P = n(39427);
function D(e) {
    let { isSocialLayerStorefrontEnabled: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t
        ? (0, i.jsx)(k.A, {
              title: L.intl.string(L.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationId: O.XR,
          })
        : (0, i.jsx)(u.Button, {
              variant: "secondary",
              size: "sm",
              icon: u.U1X,
              text: L.intl.string(L.t["i/yzHs"]),
              onClick: n,
          });
}
function G(e) {
    let {
        isSocialLayerStorefrontEnabled: t,
        isWishlistPublic: n,
        handleOpenShop: l,
        handleOpenGameShop: a,
        handleToggleWishlistVisibility: s,
        socialLayerStorefrontApplicationId: r,
    } = e;
    return (0, i.jsxs)("div", {
        className: P.$s,
        children: [
            t
                ? (0, i.jsx)(k.A, {
                      title: L.intl.string(L.t.SDUwM0),
                      handleOpenCollectiblesShop: l,
                      handleOpenGameShop: a,
                      socialLayerStorefrontApplicationId: r,
                  })
                : (0, i.jsx)(u.Button, {
                      variant: "secondary",
                      size: "sm",
                      icon: u.j96,
                      text: L.intl.string(L.t.SDUwM0),
                      onClick: l,
                  }),
            (0, i.jsx)(R.A, { isOwner: !0, isWishlistPublic: n, onToggleVisibility: s }),
        ],
    });
}
function M(e) {
    let {
        isOwner: t,
        socialLayerStorefrontApplicationId: n,
        isEligibleForSocialLayerMarketingInWishlist: l,
        handleOpenShop: a,
        handleOpenGameShop: s,
        handleOpenGameShopMouseDown: r,
    } = e;
    return (0, i.jsxs)("div", {
        className: P.y7,
        children: [
            (0, i.jsxs)("div", {
                className: P.q6,
                children: [
                    (0, i.jsx)(u.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: L.intl.string(L.t.HGnLLT),
                    }),
                    (0, i.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: L.intl.string(L.t["/X1ny6"]),
                    }),
                ],
            }),
            (0, i.jsxs)(u.ButtonGroup, {
                size: "sm",
                children: [
                    t &&
                        (0, i.jsx)(u.Button, {
                            variant: "primary",
                            size: "sm",
                            icon: u.U1X,
                            text: L.intl.string(L.t.ZbS4QB),
                            onClick: a,
                        }),
                    l &&
                        (0, i.jsx)(u.Button, {
                            variant: "primary",
                            size: "sm",
                            icon: u.U1X,
                            text: n === O.XR ? L.intl.string(L.t["kq/75v"]) : L.intl.string(L.t.apFNLU),
                            onMouseDown: r,
                            onClick: s,
                        }),
                ],
            }),
        ],
    });
}
function U(e) {
    let {
            isOwner: t,
            profileOwner: n,
            wishlist: a,
            socialLayerStorefrontApplicationId: s,
            isEligibleForSocialLayerMarketingInWishlist: c,
            handleOpenShop: m,
            handleOpenGameShop: g,
        } = e,
        x = a.id,
        f = (0, o.bG)([T.A], () => T.A.getWishlistSettings(n.id, x)),
        { trackUserProfileWishlistAction: p } = (0, E.NJ)(),
        h = !1 === n.nsfwAllowed,
        [_, A] = l.useState(!0);
    l.useEffect(() => {
        f?.visibility != null && A(f.visibility === r.a.PUBLIC);
    }, [f?.visibility]);
    let j = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && p({ wishlistId: t, action: n, productLines: i });
            },
            [p],
        ),
        v = (0, y.A)({ wishlistId: x, onAction: j, productLines: a?.getProductLines() ?? null }),
        b = l.useCallback(() => {
            if (null == x) return;
            let e = _ ? r.a.PRIVATE : r.a.PUBLIC;
            A(!_),
                I.A.updateWishlistVisibility(x, e),
                p({
                    wishlistId: x,
                    action: _ ? w.Mq.WISHLIST_TOGGLE_PRIVATE : w.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: a?.getProductLines(),
                });
        }, [x, _, p, a]);
    return (0, i.jsxs)("div", {
        ref: v,
        className: P.U1,
        children: [
            (0, i.jsxs)("div", {
                className: P.Us,
                children: [
                    (0, i.jsx)(u.Text, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: L.intl.format(L.t.r6Y1Lg, { count: a.items.length }),
                    }),
                    !_ &&
                        (0, i.jsx)(d.m, {
                            text: L.intl.string(L.t.RX7D9h),
                            asContainer: !0,
                            children: (0, i.jsx)(u.vN3, {
                                children: (0, i.jsx)("div", {
                                    role: "tooltip",
                                    tabIndex: 0,
                                    children: (0, i.jsx)(u.G3N, { size: "custom", width: 16, height: 16 }),
                                }),
                            }),
                        }),
                    _ &&
                        h &&
                        (0, i.jsx)(d.m, {
                            text: L.intl.string(L.t.d78ChW),
                            asContainer: !0,
                            children: (0, i.jsx)(u.vN3, {
                                children: (0, i.jsx)("div", {
                                    role: "tooltip",
                                    tabIndex: 0,
                                    children: (0, i.jsx)(u.mir, { size: "custom", width: 16, height: 16 }),
                                }),
                            }),
                        }),
                ],
            }),
            t
                ? (0, i.jsx)(G, {
                      isSocialLayerStorefrontEnabled: c,
                      isWishlistPublic: _,
                      handleOpenShop: m,
                      handleOpenGameShop: g,
                      handleToggleWishlistVisibility: b,
                      socialLayerStorefrontApplicationId: s,
                  })
                : (0, i.jsx)(D, { isSocialLayerStorefrontEnabled: c, handleOpenShop: m, handleOpenGameShop: g }),
        ],
    });
}
function F(e) {
    let { profileOwner: t } = e,
        n = l.useRef(null);
    (0, b.i)({ containerRef: n, itemType: "WISHLIST_ITEM" });
    let { wishlistId: a, currentUser: r } = (0, o.cf)([T.A, v.default], () => ({
            wishlistId: T.A.getFirstWishlistId(t.id),
            currentUser: v.default.getCurrentUser(),
        })),
        { analyticsLocations: d } = (0, g.Ay)(),
        u = r?.id === t.id,
        I = O.XR,
        { wishlist: E, wasFetched: y, error: k } = (0, j.fw)({ wishlistId: a, userId: t.id }),
        R = (0, h.A)({ location: "user-profile-modal-v2-wishlist", wishlist: E, profileOwner: t, currentUser: r }),
        w = (0, p.X)({ location: "user-profile-modal-v2-wishlist" }),
        L = u && R && w,
        D = l.useCallback(() => {
            (0, c.closeAllModals)(), (0, x.Cz)({ analyticsLocations: d, analyticsSource: m.A.USER_PROFILE_WISHLIST });
        }, [d]),
        G = l.useCallback(() => {
            (0, _.X)({ guildId: (0, f.zf)() });
        }, []),
        F = l.useCallback(() => {
            (0, c.closeAllModals)(), (0, _.default)({ guildId: (0, f.zf)() });
        }, []);
    if (null != k) return null;
    let W = null == E || 0 === E.items.length;
    return (0, i.jsxs)(S.K, {
        scrollerRef: n,
        className: s()({ [P.XG]: !W }),
        fade: !0,
        children: [
            W
                ? (0, i.jsx)(M, {
                      isOwner: u,
                      socialLayerStorefrontApplicationId: I,
                      isEligibleForSocialLayerMarketingInWishlist: R,
                      handleOpenShop: D,
                      handleOpenGameShop: F,
                      handleOpenGameShopMouseDown: G,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(N.A, { scrollerRef: n }),
                          (0, i.jsx)(U, {
                              isOwner: u,
                              profileOwner: t,
                              wishlist: E,
                              socialLayerStorefrontApplicationId: I,
                              isEligibleForSocialLayerMarketingInWishlist: R,
                              handleOpenShop: D,
                              handleOpenGameShop: F,
                          }),
                          (0, i.jsx)(C.A, { items: E.items, profileOwner: t, isOwner: u }),
                      ],
                  }),
            L &&
                (0, i.jsx)(A.A, {
                    user: t,
                    wishlist: E,
                    hasFetchedWishlist: y,
                    analyticsLocations: d,
                    className: W ? P._E : P.HZ,
                }),
        ],
    });
}
