n.d(t, { A: () => F });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(777480),
    o = n(311907),
    c = n(192308),
    d = n(397927),
    u = n(793574),
    m = n(688810),
    g = n(979286),
    x = n(871123),
    f = n(690946),
    p = n(898616),
    h = n(44724),
    _ = n(808247),
    A = n(178213),
    I = n(594832),
    j = n(287809),
    v = n(183555),
    E = n(622543),
    T = n(600761),
    b = n(535089),
    N = n(128988),
    S = n(515054),
    y = n(203647),
    C = n(376932),
    R = n(383430),
    k = n(300131),
    L = n(518477),
    w = n(188275),
    O = n(985018),
    P = n(39427);
function D(e) {
    let { isSocialLayerStorefrontEnabled: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t
        ? (0, i.jsx)(R.A, {
              title: O.intl.string(O.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationId: w.XR,
          })
        : (0, i.jsx)(d.Button, {
              variant: "secondary",
              size: "sm",
              icon: d.U1X,
              text: O.intl.string(O.t["i/yzHs"]),
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
                ? (0, i.jsx)(R.A, {
                      title: O.intl.string(O.t.SDUwM0),
                      handleOpenCollectiblesShop: l,
                      handleOpenGameShop: a,
                      socialLayerStorefrontApplicationId: r,
                  })
                : (0, i.jsx)(d.Button, {
                      variant: "secondary",
                      size: "sm",
                      icon: d.j96,
                      text: O.intl.string(O.t.SDUwM0),
                      onClick: l,
                  }),
            (0, i.jsx)(k.A, { isOwner: !0, isWishlistPublic: n, onToggleVisibility: s }),
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
                    (0, i.jsx)(d.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: O.intl.string(O.t.HGnLLT),
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: O.intl.string(O.t["/X1ny6"]),
                    }),
                ],
            }),
            (0, i.jsxs)(d.ButtonGroup, {
                size: "sm",
                children: [
                    t &&
                        (0, i.jsx)(d.Button, {
                            variant: "primary",
                            size: "sm",
                            icon: d.U1X,
                            text: O.intl.string(O.t.ZbS4QB),
                            onClick: a,
                        }),
                    l &&
                        (0, i.jsx)(d.Button, {
                            variant: "primary",
                            size: "sm",
                            icon: d.U1X,
                            text: n === w.XR ? O.intl.string(O.t["kq/75v"]) : O.intl.string(O.t.apFNLU),
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
            handleOpenShop: u,
            handleOpenGameShop: m,
        } = e,
        g = a.id,
        x = (0, o.bG)([E.A], () => E.A.getWishlistSettings(n.id, g)),
        { trackUserProfileWishlistAction: f } = (0, v.NJ)(),
        p = !1 === n.nsfwAllowed,
        [h, A] = l.useState(!0);
    l.useEffect(() => {
        x?.visibility != null && A(x.visibility === r.a.PUBLIC);
    }, [x?.visibility]);
    let I = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && f({ wishlistId: t, action: n, productLines: i });
            },
            [f],
        ),
        j = (0, b.A)({ wishlistId: g, onAction: I, productLines: a?.getProductLines() ?? null }),
        T = l.useCallback(() => {
            if (null == g) return;
            let e = h ? r.a.PRIVATE : r.a.PUBLIC;
            A(!h),
                _.A.updateWishlistVisibility(g, e),
                f({
                    wishlistId: g,
                    action: h ? L.Mq.WISHLIST_TOGGLE_PRIVATE : L.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: a?.getProductLines(),
                });
        }, [g, h, f, a]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !h &&
                (0, i.jsxs)("div", {
                    className: P.Q9,
                    children: [
                        (0, i.jsx)(d.G3N, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: O.intl.string(O.t.RX7D9h),
                        }),
                    ],
                }),
            h &&
                p &&
                (0, i.jsxs)("div", {
                    className: P.n3,
                    children: [
                        (0, i.jsx)(d.mir, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: O.intl.string(O.t.d78ChW),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                ref: j,
                className: P.U1,
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: O.intl.format(O.t.r6Y1Lg, { count: a.items.length }),
                    }),
                    t
                        ? (0, i.jsx)(G, {
                              isSocialLayerStorefrontEnabled: c,
                              isWishlistPublic: h,
                              handleOpenShop: u,
                              handleOpenGameShop: m,
                              handleToggleWishlistVisibility: T,
                              socialLayerStorefrontApplicationId: s,
                          })
                        : (0, i.jsx)(D, {
                              isSocialLayerStorefrontEnabled: c,
                              handleOpenShop: u,
                              handleOpenGameShop: m,
                          }),
                ],
            }),
        ],
    });
}
function F(e) {
    let { profileOwner: t } = e,
        n = l.useRef(null);
    (0, T.i)({ containerRef: n, itemType: "WISHLIST_ITEM" });
    let { wishlistId: a, currentUser: r } = (0, o.cf)([E.A, j.default], () => ({
            wishlistId: E.A.getFirstWishlistId(t.id),
            currentUser: j.default.getCurrentUser(),
        })),
        { analyticsLocations: d } = (0, m.Ay)(),
        _ = r?.id === t.id,
        v = w.XR,
        { wishlist: b, wasFetched: R, error: k } = (0, I.fw)({ wishlistId: a, userId: t.id }),
        L = (0, p.A)({ wishlist: b, profileOwner: t, currentUser: r }),
        O = (0, f.X)({ location: "user-profile-modal-v2-wishlist" }),
        D = (0, A.GG)("user-profile-modal-v2-wishlist"),
        G = _ && ((O && L) || D),
        F = l.useCallback(() => {
            (0, c.closeAllModals)(), (0, g.Cz)({ analyticsLocations: d, analyticsSource: u.A.USER_PROFILE_WISHLIST });
        }, [d]),
        W = l.useCallback(() => {
            (0, h.X)({ guildId: (0, x.zf)() });
        }, []),
        H = l.useCallback(() => {
            (0, c.closeAllModals)(), (0, h.default)({ guildId: (0, x.zf)() });
        }, []);
    if (null != k) return null;
    let B = null == b || 0 === b.items.length;
    return (0, i.jsxs)(S.K, {
        scrollerRef: n,
        className: s()({ [P.XG]: !B }),
        fade: !0,
        children: [
            B
                ? (0, i.jsx)(M, {
                      isOwner: _,
                      socialLayerStorefrontApplicationId: v,
                      isEligibleForSocialLayerMarketingInWishlist: L,
                      handleOpenShop: F,
                      handleOpenGameShop: H,
                      handleOpenGameShopMouseDown: W,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(N.A, { scrollerRef: n }),
                          (0, i.jsx)(U, {
                              isOwner: _,
                              profileOwner: t,
                              wishlist: b,
                              socialLayerStorefrontApplicationId: v,
                              isEligibleForSocialLayerMarketingInWishlist: L,
                              handleOpenShop: F,
                              handleOpenGameShop: H,
                          }),
                          (0, i.jsx)(y.A, { items: b.items, profileOwner: t, isOwner: _ }),
                      ],
                  }),
            G &&
                (0, i.jsx)(C.A, {
                    user: t,
                    wishlist: b,
                    hasFetchedWishlist: R,
                    analyticsLocations: d,
                    className: B ? P._E : P.HZ,
                }),
        ],
    });
}
