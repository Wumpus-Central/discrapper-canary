i.d(t, { A: () => $ });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(777480),
    d = i(311907),
    o = i(192308),
    c = i(821609),
    u = i(34188),
    g = i(307301),
    m = i(534514),
    h = i(834730),
    x = i(825484),
    p = i(952270),
    A = i(885574),
    j = i(793574),
    f = i(688810),
    I = i(429913),
    v = i(979286),
    S = i(895360),
    E = i(574499),
    y = i(400669),
    b = i(832163),
    w = i(898616),
    N = i(44724),
    T = i(808247),
    C = i(909536),
    R = i(673843),
    O = i(594832),
    k = i(855052),
    L = i(287809),
    G = i(183555),
    _ = i(622543),
    M = i(823142),
    P = i(535089),
    U = i(128988),
    D = i(515054),
    F = i(203647),
    W = i(376932),
    B = i(383430),
    H = i(300131),
    V = i(518477),
    z = i(788868),
    X = i(985018),
    Y = i(964350);
function q(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: i, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, n.jsx)(B.A, {
              title: X.intl.string(X.t["i/yzHs"]),
              handleOpenCollectiblesShop: i,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, n.jsx)(c.$, {
              variant: "secondary",
              size: "sm",
              icon: u.U,
              text: X.intl.string(X.t["i/yzHs"]),
              onClick: i,
          });
}
function Z(e) {
    let {
        socialLayerStorefrontApplicationIds: t,
        isWishlistPublic: i,
        handleOpenShop: l,
        handleOpenGameShop: s,
        handleAddNitroToWishlist: a,
        handleToggleWishlistVisibility: r,
    } = e;
    return (0, n.jsxs)("div", {
        className: Y.$s,
        children: [
            t.length > 0 || null != a
                ? (0, n.jsx)(B.A, {
                      title: X.intl.string(X.t.SDUwM0),
                      handleOpenCollectiblesShop: l,
                      handleOpenGameShop: t.length > 0 ? s : void 0,
                      handleAddNitroToWishlist: a,
                      socialLayerStorefrontApplicationIds: t,
                  })
                : (0, n.jsx)(c.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: g.j,
                      text: X.intl.string(X.t.SDUwM0),
                      onClick: l,
                  }),
            (0, n.jsx)(H.A, { isOwner: !0, isWishlistPublic: i, onToggleVisibility: r }),
        ],
    });
}
function K(e) {
    let { application: t, handleOpenGameShop: i, handleOpenGameShopMouseDown: s } = e,
        a = l.useCallback(() => {
            i(t.id);
        }, [t, i]),
        r = l.useCallback(() => {
            s(t.id);
        }, [t, s]);
    return (0, n.jsx)(c.$, {
        variant: "primary",
        size: "sm",
        icon: u.U,
        text: X.intl.formatToPlainString(X.t["HDT/rg"], { applicationName: t.name }),
        onClick: a,
        onMouseDown: r,
    });
}
function Q(e) {
    let {
            isOwner: t,
            socialLayerStorefrontApplicationIds: i,
            handleOpenShop: s,
            handleOpenGameShop: a,
            handleOpenGameShopMouseDown: r,
        } = e,
        d = (0, I.A)(i),
        o = l.useMemo(() => {
            if (0 === i.length) return null;
            let e = d.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === i.length) {
                let t = e[i[0]];
                return null == t
                    ? null
                    : (0, n.jsx)(K, { application: t, handleOpenGameShop: a, handleOpenGameShopMouseDown: r });
            }
            return (0, n.jsx)(B.A, {
                title: X.intl.string(X.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: a,
                socialLayerStorefrontApplicationIds: i,
            });
        }, [i, a, d, r]);
    return (0, n.jsxs)("div", {
        className: Y.y7,
        children: [
            (0, n.jsxs)("div", {
                className: Y.q6,
                children: [
                    (0, n.jsx)(m.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: X.intl.string(X.t.HGnLLT),
                    }),
                    (0, n.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: X.intl.string(X.t["/X1ny6"]),
                    }),
                ],
            }),
            (0, n.jsxs)(x.e, {
                size: "sm",
                children: [
                    t &&
                        (0, n.jsx)(c.$, {
                            variant: "primary",
                            size: "sm",
                            icon: u.U,
                            text: X.intl.string(X.t.ZbS4QB),
                            onClick: s,
                        }),
                    o,
                ],
            }),
        ],
    });
}
function J(e) {
    let {
            isOwner: t,
            profileOwner: i,
            wishlist: s,
            socialLayerStorefrontApplicationIds: a,
            handleOpenShop: o,
            handleOpenGameShop: c,
            handleAddNitroToWishlist: u,
        } = e,
        g = s.id,
        m = (0, d.bG)([_.A], () => _.A.getWishlistSettings(i.id, g)),
        { trackUserProfileWishlistAction: x } = (0, G.NJ)(),
        j = !1 === i.nsfwAllowed,
        [f, I] = l.useState(!0);
    l.useEffect(() => {
        m?.visibility != null && I(m.visibility === r.a.PUBLIC);
    }, [m?.visibility]);
    let v = l.useCallback(
            (e) => {
                let { wishlistId: t, action: i, productLines: n } = e;
                null != t && x({ wishlistId: t, action: i, productLines: n });
            },
            [x],
        ),
        S = (0, P.A)({ wishlistId: g, onAction: v, productLines: null != s ? (0, k.y9)(s) : null }),
        E = l.useCallback(() => {
            if (null == g) return;
            let e = f ? r.a.PRIVATE : r.a.PUBLIC;
            I(!f),
                T.A.updateWishlistVisibility(g, e),
                x({
                    wishlistId: g,
                    action: f ? V.Mq.WISHLIST_TOGGLE_PRIVATE : V.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != s ? (0, k.y9)(s) : void 0,
                });
        }, [g, f, x, s]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            !f &&
                (0, n.jsxs)("div", {
                    className: Y.lm,
                    children: [
                        (0, n.jsx)(p.G, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: X.intl.string(X.t.RX7D9h),
                        }),
                    ],
                }),
            f &&
                j &&
                (0, n.jsxs)("div", {
                    className: Y.lm,
                    children: [
                        (0, n.jsx)(A.m, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: X.intl.string(X.t.d78ChW),
                        }),
                    ],
                }),
            (0, n.jsxs)("div", {
                ref: S,
                className: Y.U1,
                children: [
                    (0, n.jsx)(h.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: X.intl.format(X.t.r6Y1Lg, { count: s.items.length }),
                    }),
                    t
                        ? (0, n.jsx)(Z, {
                              socialLayerStorefrontApplicationIds: a,
                              isWishlistPublic: f,
                              handleOpenShop: o,
                              handleOpenGameShop: c,
                              handleAddNitroToWishlist: u,
                              handleToggleWishlistVisibility: E,
                          })
                        : (0, n.jsx)(q, {
                              socialLayerStorefrontApplicationIds: a,
                              handleOpenShop: o,
                              handleOpenGameShop: c,
                          }),
                ],
            }),
        ],
    });
}
function $(e) {
    let { profileOwner: t } = e,
        i = l.useRef(null);
    (0, M.i)({ containerRef: i, itemType: "WISHLIST_ITEM" });
    let { wishlistId: s, currentUser: r } = (0, d.cf)([_.A, L.default], () => ({
            wishlistId: _.A.getFirstWishlistId(t.id),
            currentUser: L.default.getCurrentUser(),
        })),
        { analyticsLocations: c } = (0, f.Ay)(),
        u = r?.id === t.id,
        { wishlist: g, wasFetched: m, error: h } = (0, O.fw)({ wishlistId: s, userId: t.id });
    (0, R.A)(g);
    let x = (0, w.A)({ wishlist: g, profileOwner: t, currentUser: r }),
        p = (0, C.Gh)("user-profile-modal-v2-wishlist"),
        A = l.useCallback(() => {
            (0, o.closeAllModals)(), (0, v.Cz)({ analyticsLocations: c, analyticsSource: j.A.USER_PROFILE_WISHLIST });
        }, [c]),
        I = l.useCallback((e) => {
            let t = b.A.getGuildIdFromApplicationId(e);
            null != t && (0, N.X)({ guildId: t });
        }, []),
        T = l.useCallback((e) => {
            let t = b.A.getGuildIdFromApplicationId(e);
            null != t && ((0, o.closeAllModals)(), (0, N.default)({ guildId: t }));
        }, []),
        { handleToggle: G } = (0, E.c)({
            userId: r?.id,
            skuId: z.pe.TIER_2,
            nuxGraphic: p ? y.g : void 0,
            onNuxShow: S.D,
            location: j.A.USER_PROFILE_WISHLIST,
        });
    if (null == r || null != h) return null;
    let P = null == g || 0 === g.items.length;
    return (0, n.jsxs)(D.K, {
        scrollerRef: i,
        className: a()({ [Y.XG]: !P }),
        fade: !0,
        children: [
            P
                ? (0, n.jsx)(Q, {
                      isOwner: u,
                      socialLayerStorefrontApplicationIds: x,
                      handleOpenShop: A,
                      handleOpenGameShop: T,
                      handleOpenGameShopMouseDown: I,
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(U.A, { scrollerRef: i }),
                          (0, n.jsx)(J, {
                              isOwner: u,
                              profileOwner: t,
                              wishlist: g,
                              socialLayerStorefrontApplicationIds: x,
                              handleOpenShop: A,
                              handleOpenGameShop: T,
                              handleAddNitroToWishlist: p && !(0, k.C3)(g, z.pe.TIER_2) ? G : void 0,
                          }),
                          (0, n.jsx)(F.A, { items: g.items, profileOwner: t, isOwner: u }),
                      ],
                  }),
            u &&
                (0, n.jsx)(W.A, {
                    user: t,
                    wishlist: g,
                    hasFetchedWishlist: m,
                    analyticsLocations: c,
                    className: P ? Y._E : Y.HZ,
                }),
        ],
    });
}
