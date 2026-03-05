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
    g = n(793574),
    m = n(688810),
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
    N = n(535089),
    S = n(128988),
    y = n(515054),
    C = n(203647),
    k = n(383430),
    R = n(300131),
    L = n(518477),
    O = n(188275),
    w = n(985018),
    D = n(376721);
function P(e) {
    let { isSocialLayerStorefrontEnabled: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t
        ? (0, i.jsx)(k.A, {
              title: w.intl.string(w.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationId: O.XR,
          })
        : (0, i.jsx)(u.Button, {
              variant: "secondary",
              size: "sm",
              icon: u.U1X,
              text: w.intl.string(w.t["i/yzHs"]),
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
        className: D.$s,
        children: [
            t
                ? (0, i.jsx)(k.A, {
                      title: w.intl.string(w.t.SDUwM0),
                      handleOpenCollectiblesShop: l,
                      handleOpenGameShop: a,
                      socialLayerStorefrontApplicationId: r,
                  })
                : (0, i.jsx)(u.Button, {
                      variant: "secondary",
                      size: "sm",
                      icon: u.j96,
                      text: w.intl.string(w.t.SDUwM0),
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
        className: D.y7,
        children: [
            (0, i.jsxs)("div", {
                className: D.q6,
                children: [
                    (0, i.jsx)(u.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: w.intl.string(w.t.HGnLLT),
                    }),
                    (0, i.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: w.intl.string(w.t["/X1ny6"]),
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
                            text: w.intl.string(w.t.ZbS4QB),
                            onClick: a,
                        }),
                    l &&
                        (0, i.jsx)(u.Button, {
                            variant: "primary",
                            size: "sm",
                            icon: u.U1X,
                            text: n === O.XR ? w.intl.string(w.t["kq/75v"]) : w.intl.string(w.t.apFNLU),
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
            handleOpenShop: g,
            handleOpenGameShop: m,
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
        v = (0, N.A)({ wishlistId: x, onAction: j, productLines: a?.getProductLines() ?? null }),
        b = l.useCallback(() => {
            if (null == x) return;
            let e = _ ? r.a.PRIVATE : r.a.PUBLIC;
            A(!_),
                I.A.updateWishlistVisibility(x, e),
                p({
                    wishlistId: x,
                    action: _ ? L.Mq.WISHLIST_TOGGLE_PRIVATE : L.Mq.WISHLIST_TOGGLE_PUBLIC,
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
                        children: w.intl.format(w.t.r6Y1Lg, { count: a.items.length }),
                    }),
                    !_ &&
                        (0, i.jsx)(d.m, {
                            text: w.intl.string(w.t.RX7D9h),
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
                            text: w.intl.string(w.t.d78ChW),
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
                      handleOpenShop: g,
                      handleOpenGameShop: m,
                      handleToggleWishlistVisibility: b,
                      socialLayerStorefrontApplicationId: s,
                  })
                : (0, i.jsx)(P, { isSocialLayerStorefrontEnabled: c, handleOpenShop: g, handleOpenGameShop: m }),
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
        { analyticsLocations: d } = (0, m.Ay)(),
        u = r?.id === t.id,
        I = O.XR,
        { wishlist: E, wasFetched: N, error: k } = (0, j.fw)({ wishlistId: a, userId: t.id }),
        R = (0, h.A)({ wishlist: E, profileOwner: t, currentUser: r }),
        L = (0, p.X)({ location: "user-profile-modal-v2-wishlist" }),
        w = u && R && L,
        P = l.useCallback(() => {
            (0, c.closeAllModals)(), (0, x.Cz)({ analyticsLocations: d, analyticsSource: g.A.USER_PROFILE_WISHLIST });
        }, [d]),
        G = l.useCallback(() => {
            (0, _.X)({ guildId: (0, f.zf)() });
        }, []),
        F = l.useCallback(() => {
            (0, c.closeAllModals)(), (0, _.default)({ guildId: (0, f.zf)() });
        }, []);
    if (null != k) return null;
    let W = null == E || 0 === E.items.length;
    return (0, i.jsxs)(y.K, {
        scrollerRef: n,
        className: s()({ [D.XG]: !W }),
        fade: !0,
        children: [
            W
                ? (0, i.jsx)(M, {
                      isOwner: u,
                      socialLayerStorefrontApplicationId: I,
                      isEligibleForSocialLayerMarketingInWishlist: R,
                      handleOpenShop: P,
                      handleOpenGameShop: F,
                      handleOpenGameShopMouseDown: G,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(S.A, { scrollerRef: n }),
                          (0, i.jsx)(U, {
                              isOwner: u,
                              profileOwner: t,
                              wishlist: E,
                              socialLayerStorefrontApplicationId: I,
                              isEligibleForSocialLayerMarketingInWishlist: R,
                              handleOpenShop: P,
                              handleOpenGameShop: F,
                          }),
                          (0, i.jsx)(C.A, { items: E.items, profileOwner: t, isOwner: u }),
                      ],
                  }),
            w &&
                (0, i.jsx)(A.A, {
                    user: t,
                    wishlist: E,
                    hasFetchedWishlist: N,
                    analyticsLocations: d,
                    className: W ? D._E : D.HZ,
                }),
        ],
    });
}
