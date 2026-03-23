n.d(t, { A: () => H });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(777480),
    o = n(311907),
    d = n(192308),
    c = n(397927),
    u = n(793574),
    g = n(688810),
    m = n(979286),
    x = n(871123),
    p = n(690946),
    f = n(898616),
    h = n(44724),
    _ = n(808247),
    A = n(178213),
    I = n(909536),
    j = n(594832),
    v = n(287809),
    E = n(183555),
    T = n(622543),
    b = n(600761),
    N = n(535089),
    y = n(128988),
    S = n(515054),
    C = n(203647),
    R = n(376932),
    k = n(383430),
    L = n(300131),
    w = n(518477),
    O = n(788868),
    P = n(188275),
    D = n(985018),
    G = n(39427);
function M(e) {
    let { isSocialLayerStorefrontEnabled: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t
        ? (0, i.jsx)(k.A, {
              title: D.intl.string(D.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationId: P.XR,
          })
        : (0, i.jsx)(c.Button, {
              variant: "secondary",
              size: "sm",
              icon: c.U1X,
              text: D.intl.string(D.t["i/yzHs"]),
              onClick: n,
          });
}
function U(e) {
    let {
        isSocialLayerStorefrontEnabled: t,
        isWishlistPublic: n,
        handleOpenShop: l,
        handleOpenGameShop: a,
        handleAddNitroToWishlist: s,
        handleToggleWishlistVisibility: r,
        socialLayerStorefrontApplicationId: o,
    } = e;
    return (0, i.jsxs)("div", {
        className: G.$s,
        children: [
            t || null != s
                ? (0, i.jsx)(k.A, {
                      title: D.intl.string(D.t.SDUwM0),
                      handleOpenCollectiblesShop: l,
                      handleOpenGameShop: t ? a : void 0,
                      handleAddNitroToWishlist: s,
                      socialLayerStorefrontApplicationId: o,
                  })
                : (0, i.jsx)(c.Button, {
                      variant: "secondary",
                      size: "sm",
                      icon: c.j96,
                      text: D.intl.string(D.t.SDUwM0),
                      onClick: l,
                  }),
            (0, i.jsx)(L.A, { isOwner: !0, isWishlistPublic: n, onToggleVisibility: r }),
        ],
    });
}
function F(e) {
    let {
        isOwner: t,
        socialLayerStorefrontApplicationId: n,
        isEligibleForSocialLayerMarketingInWishlist: l,
        handleOpenShop: a,
        handleOpenGameShop: s,
        handleOpenGameShopMouseDown: r,
    } = e;
    return (0, i.jsxs)("div", {
        className: G.y7,
        children: [
            (0, i.jsxs)("div", {
                className: G.q6,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: D.intl.string(D.t.HGnLLT),
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: D.intl.string(D.t["/X1ny6"]),
                    }),
                ],
            }),
            (0, i.jsxs)(c.ButtonGroup, {
                size: "sm",
                children: [
                    t &&
                        (0, i.jsx)(c.Button, {
                            variant: "primary",
                            size: "sm",
                            icon: c.U1X,
                            text: D.intl.string(D.t.ZbS4QB),
                            onClick: a,
                        }),
                    l &&
                        (0, i.jsx)(c.Button, {
                            variant: "primary",
                            size: "sm",
                            icon: c.U1X,
                            text: n === P.XR ? D.intl.string(D.t["kq/75v"]) : D.intl.string(D.t.apFNLU),
                            onMouseDown: r,
                            onClick: s,
                        }),
                ],
            }),
        ],
    });
}
function W(e) {
    let {
            isOwner: t,
            profileOwner: n,
            wishlist: a,
            socialLayerStorefrontApplicationId: s,
            isEligibleForSocialLayerMarketingInWishlist: d,
            handleOpenShop: u,
            handleOpenGameShop: g,
            handleAddNitroToWishlist: m,
        } = e,
        x = a.id,
        p = (0, o.bG)([T.A], () => T.A.getWishlistSettings(n.id, x)),
        { trackUserProfileWishlistAction: f } = (0, E.NJ)(),
        h = !1 === n.nsfwAllowed,
        [A, I] = l.useState(!0);
    l.useEffect(() => {
        p?.visibility != null && I(p.visibility === r.a.PUBLIC);
    }, [p?.visibility]);
    let j = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && f({ wishlistId: t, action: n, productLines: i });
            },
            [f],
        ),
        v = (0, N.A)({ wishlistId: x, onAction: j, productLines: a?.getProductLines() ?? null }),
        b = l.useCallback(() => {
            if (null == x) return;
            let e = A ? r.a.PRIVATE : r.a.PUBLIC;
            I(!A),
                _.A.updateWishlistVisibility(x, e),
                f({
                    wishlistId: x,
                    action: A ? w.Mq.WISHLIST_TOGGLE_PRIVATE : w.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: a?.getProductLines(),
                });
        }, [x, A, f, a]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !A &&
                (0, i.jsxs)("div", {
                    className: G.lm,
                    children: [
                        (0, i.jsx)(c.G3N, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: D.intl.string(D.t.RX7D9h),
                        }),
                    ],
                }),
            A &&
                h &&
                (0, i.jsxs)("div", {
                    className: G.lm,
                    children: [
                        (0, i.jsx)(c.mir, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: D.intl.string(D.t.d78ChW),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                ref: v,
                className: G.U1,
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: D.intl.format(D.t.r6Y1Lg, { count: a.items.length }),
                    }),
                    t
                        ? (0, i.jsx)(U, {
                              isSocialLayerStorefrontEnabled: d,
                              isWishlistPublic: A,
                              handleOpenShop: u,
                              handleOpenGameShop: g,
                              handleAddNitroToWishlist: m,
                              handleToggleWishlistVisibility: b,
                              socialLayerStorefrontApplicationId: s,
                          })
                        : (0, i.jsx)(M, {
                              isSocialLayerStorefrontEnabled: d,
                              handleOpenShop: u,
                              handleOpenGameShop: g,
                          }),
                ],
            }),
        ],
    });
}
function H(e) {
    let { profileOwner: t } = e,
        n = l.useRef(null);
    (0, b.i)({ containerRef: n, itemType: "WISHLIST_ITEM" });
    let { wishlistId: a, currentUser: r } = (0, o.cf)([T.A, v.default], () => ({
            wishlistId: T.A.getFirstWishlistId(t.id),
            currentUser: v.default.getCurrentUser(),
        })),
        { analyticsLocations: E } = (0, g.Ay)(),
        N = r?.id === t.id,
        k = P.XR,
        { wishlist: L, wasFetched: w, error: M } = (0, j.fw)({ wishlistId: a, userId: t.id }),
        U = (0, f.A)({ wishlist: L, profileOwner: t, currentUser: r }),
        H = (0, p.X)({ location: "user-profile-modal-v2-wishlist" }),
        B = (0, A.GG)("user-profile-modal-v2-wishlist"),
        X = (0, I.Gh)("user-profile-modal-v2-wishlist"),
        z = N && ((H && U) || B),
        V = l.useCallback(() => {
            (0, d.closeAllModals)(), (0, m.Cz)({ analyticsLocations: E, analyticsSource: u.A.USER_PROFILE_WISHLIST });
        }, [E]),
        Y = l.useCallback(() => {
            (0, h.X)({ guildId: (0, x.zf)() });
        }, []),
        K = l.useCallback(() => {
            (0, d.closeAllModals)(), (0, h.default)({ guildId: (0, x.zf)() });
        }, []),
        q = l.useCallback(async () => {
            try {
                await _.A.addSkuToWishlist(O.pe.TIER_2, E);
            } catch {
                (0, c.showToast)((0, c.createToast)(D.intl.string(D.t.F8FvUy), c.ToastType.FAILURE)),
                    c.ORC.announce(D.intl.string(D.t.F8FvUy));
            }
        }, [E]);
    if (null != M) return null;
    let J = null == L || 0 === L.items.length;
    return (0, i.jsxs)(S.K, {
        scrollerRef: n,
        className: s()({ [G.XG]: !J }),
        fade: !0,
        children: [
            J
                ? (0, i.jsx)(F, {
                      isOwner: N,
                      socialLayerStorefrontApplicationId: k,
                      isEligibleForSocialLayerMarketingInWishlist: U,
                      handleOpenShop: V,
                      handleOpenGameShop: K,
                      handleOpenGameShopMouseDown: Y,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(y.A, { scrollerRef: n }),
                          (0, i.jsx)(W, {
                              isOwner: N,
                              profileOwner: t,
                              wishlist: L,
                              socialLayerStorefrontApplicationId: k,
                              isEligibleForSocialLayerMarketingInWishlist: U,
                              handleOpenShop: V,
                              handleOpenGameShop: K,
                              handleAddNitroToWishlist: X && !L.hasSkuId(O.pe.TIER_2) ? q : void 0,
                          }),
                          (0, i.jsx)(C.A, { items: L.items, profileOwner: t, isOwner: N }),
                      ],
                  }),
            z &&
                (0, i.jsx)(R.A, {
                    user: t,
                    wishlist: L,
                    hasFetchedWishlist: w,
                    analyticsLocations: E,
                    className: J ? G._E : G.HZ,
                }),
        ],
    });
}
