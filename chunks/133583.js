n.d(t, { A: () => W });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(777480),
    o = n(311907),
    d = n(192308),
    c = n(990078),
    u = n(397927),
    m = n(793574),
    g = n(688810),
    x = n(979286),
    f = n(871123),
    p = n(690946),
    h = n(898616),
    _ = n(44724),
    A = n(808247),
    I = n(178213),
    j = n(594832),
    v = n(287809),
    E = n(183555),
    T = n(622543),
    b = n(600761),
    N = n(535089),
    S = n(128988),
    y = n(515054),
    C = n(203647),
    R = n(376932),
    k = n(383430),
    L = n(300131),
    w = n(518477),
    O = n(188275),
    P = n(985018),
    D = n(39427);
function G(e) {
    let { isSocialLayerStorefrontEnabled: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t
        ? (0, i.jsx)(k.A, {
              title: P.intl.string(P.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationId: O.XR,
          })
        : (0, i.jsx)(u.Button, {
              variant: "secondary",
              size: "sm",
              icon: u.U1X,
              text: P.intl.string(P.t["i/yzHs"]),
              onClick: n,
          });
}
function M(e) {
    let {
        isSocialLayerStorefrontEnabled: t,
        isWishlistPublic: n,
        handleOpenShop: l,
        handleOpenGameShop: a,
        handleToggleWishlistVisibility: s,
        socialLayerStorefrontApplicationId: r,
    } = e;
    return (0, i.jsxs)("div", {
        className: D.$s,
        children: [
            t
                ? (0, i.jsx)(k.A, {
                      title: P.intl.string(P.t.SDUwM0),
                      handleOpenCollectiblesShop: l,
                      handleOpenGameShop: a,
                      socialLayerStorefrontApplicationId: r,
                  })
                : (0, i.jsx)(u.Button, {
                      variant: "secondary",
                      size: "sm",
                      icon: u.j96,
                      text: P.intl.string(P.t.SDUwM0),
                      onClick: l,
                  }),
            (0, i.jsx)(L.A, { isOwner: !0, isWishlistPublic: n, onToggleVisibility: s }),
        ],
    });
}
function U(e) {
    let {
        isOwner: t,
        socialLayerStorefrontApplicationId: n,
        isEligibleForSocialLayerMarketingInWishlist: l,
        handleOpenShop: a,
        handleOpenGameShop: s,
        handleOpenGameShopMouseDown: r,
    } = e;
    return (0, i.jsxs)("div", {
        className: D.y7,
        children: [
            (0, i.jsxs)("div", {
                className: D.q6,
                children: [
                    (0, i.jsx)(u.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: P.intl.string(P.t.HGnLLT),
                    }),
                    (0, i.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: P.intl.string(P.t["/X1ny6"]),
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
                            text: P.intl.string(P.t.ZbS4QB),
                            onClick: a,
                        }),
                    l &&
                        (0, i.jsx)(u.Button, {
                            variant: "primary",
                            size: "sm",
                            icon: u.U1X,
                            text: n === O.XR ? P.intl.string(P.t["kq/75v"]) : P.intl.string(P.t.apFNLU),
                            onMouseDown: r,
                            onClick: s,
                        }),
                ],
            }),
        ],
    });
}
function F(e) {
    let {
            isOwner: t,
            profileOwner: n,
            wishlist: a,
            socialLayerStorefrontApplicationId: s,
            isEligibleForSocialLayerMarketingInWishlist: d,
            handleOpenShop: m,
            handleOpenGameShop: g,
        } = e,
        x = a.id,
        f = (0, o.bG)([T.A], () => T.A.getWishlistSettings(n.id, x)),
        { trackUserProfileWishlistAction: p } = (0, E.NJ)(),
        h = !1 === n.nsfwAllowed,
        [_, I] = l.useState(!0);
    l.useEffect(() => {
        f?.visibility != null && I(f.visibility === r.a.PUBLIC);
    }, [f?.visibility]);
    let j = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && p({ wishlistId: t, action: n, productLines: i });
            },
            [p],
        ),
        v = (0, N.A)({ wishlistId: x, onAction: j, productLines: a?.getProductLines() ?? null }),
        b = l.useCallback(() => {
            if (null == x) return;
            let e = _ ? r.a.PRIVATE : r.a.PUBLIC;
            I(!_),
                A.A.updateWishlistVisibility(x, e),
                p({
                    wishlistId: x,
                    action: _ ? w.Mq.WISHLIST_TOGGLE_PRIVATE : w.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: a?.getProductLines(),
                });
        }, [x, _, p, a]);
    return (0, i.jsxs)("div", {
        ref: v,
        className: D.U1,
        children: [
            (0, i.jsxs)("div", {
                className: D.Us,
                children: [
                    (0, i.jsx)(u.Text, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: P.intl.format(P.t.r6Y1Lg, { count: a.items.length }),
                    }),
                    !_ &&
                        (0, i.jsx)(c.m, {
                            text: P.intl.string(P.t.RX7D9h),
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
                        (0, i.jsx)(c.m, {
                            text: P.intl.string(P.t.d78ChW),
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
                ? (0, i.jsx)(M, {
                      isSocialLayerStorefrontEnabled: d,
                      isWishlistPublic: _,
                      handleOpenShop: m,
                      handleOpenGameShop: g,
                      handleToggleWishlistVisibility: b,
                      socialLayerStorefrontApplicationId: s,
                  })
                : (0, i.jsx)(G, { isSocialLayerStorefrontEnabled: d, handleOpenShop: m, handleOpenGameShop: g }),
        ],
    });
}
function W(e) {
    let { profileOwner: t } = e,
        n = l.useRef(null);
    (0, b.i)({ containerRef: n, itemType: "WISHLIST_ITEM" });
    let { wishlistId: a, currentUser: r } = (0, o.cf)([T.A, v.default], () => ({
            wishlistId: T.A.getFirstWishlistId(t.id),
            currentUser: v.default.getCurrentUser(),
        })),
        { analyticsLocations: c } = (0, g.Ay)(),
        u = r?.id === t.id,
        A = O.XR,
        { wishlist: E, wasFetched: N, error: k } = (0, j.fw)({ wishlistId: a, userId: t.id }),
        L = (0, h.A)({ wishlist: E, profileOwner: t, currentUser: r }),
        w = (0, p.X)({ location: "user-profile-modal-v2-wishlist" }),
        P = (0, I.GG)("user-profile-modal-v2-wishlist"),
        G = u && ((w && L) || P),
        M = l.useCallback(() => {
            (0, d.closeAllModals)(), (0, x.Cz)({ analyticsLocations: c, analyticsSource: m.A.USER_PROFILE_WISHLIST });
        }, [c]),
        W = l.useCallback(() => {
            (0, _.X)({ guildId: (0, f.zf)() });
        }, []),
        H = l.useCallback(() => {
            (0, d.closeAllModals)(), (0, _.default)({ guildId: (0, f.zf)() });
        }, []);
    if (null != k) return null;
    let B = null == E || 0 === E.items.length;
    return (0, i.jsxs)(y.K, {
        scrollerRef: n,
        className: s()({ [D.XG]: !B }),
        fade: !0,
        children: [
            B
                ? (0, i.jsx)(U, {
                      isOwner: u,
                      socialLayerStorefrontApplicationId: A,
                      isEligibleForSocialLayerMarketingInWishlist: L,
                      handleOpenShop: M,
                      handleOpenGameShop: H,
                      handleOpenGameShopMouseDown: W,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(S.A, { scrollerRef: n }),
                          (0, i.jsx)(F, {
                              isOwner: u,
                              profileOwner: t,
                              wishlist: E,
                              socialLayerStorefrontApplicationId: A,
                              isEligibleForSocialLayerMarketingInWishlist: L,
                              handleOpenShop: M,
                              handleOpenGameShop: H,
                          }),
                          (0, i.jsx)(C.A, { items: E.items, profileOwner: t, isOwner: u }),
                      ],
                  }),
            G &&
                (0, i.jsx)(R.A, {
                    user: t,
                    wishlist: E,
                    hasFetchedWishlist: N,
                    analyticsLocations: c,
                    className: B ? D._E : D.HZ,
                }),
        ],
    });
}
