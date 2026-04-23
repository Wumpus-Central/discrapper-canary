i.d(t, { A: () => ee });
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
    y = i(274681),
    w = i(400669),
    b = i(832163),
    N = i(898616),
    T = i(44724),
    C = i(808247),
    R = i(909536),
    O = i(673843),
    k = i(594832),
    L = i(855052),
    G = i(287809),
    _ = i(183555),
    M = i(622543),
    P = i(823142),
    U = i(535089),
    D = i(128988),
    F = i(515054),
    W = i(203647),
    B = i(376932),
    H = i(383430),
    V = i(300131),
    z = i(518477),
    X = i(788868),
    Y = i(985018),
    q = i(964350);
function Z(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: i, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, n.jsx)(H.A, {
              title: Y.intl.string(Y.t["i/yzHs"]),
              handleOpenCollectiblesShop: i,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, n.jsx)(c.$, {
              variant: "secondary",
              size: "sm",
              icon: u.U,
              text: Y.intl.string(Y.t["i/yzHs"]),
              onClick: i,
          });
}
function K(e) {
    let {
        socialLayerStorefrontApplicationIds: t,
        isWishlistPublic: i,
        handleOpenShop: l,
        handleOpenGameShop: s,
        handleAddNitroToWishlist: a,
        handleToggleWishlistVisibility: r,
    } = e;
    return (0, n.jsxs)("div", {
        className: q.$s,
        children: [
            t.length > 0 || null != a
                ? (0, n.jsx)(H.A, {
                      title: Y.intl.string(Y.t.SDUwM0),
                      handleOpenCollectiblesShop: l,
                      handleOpenGameShop: t.length > 0 ? s : void 0,
                      handleAddNitroToWishlist: a,
                      socialLayerStorefrontApplicationIds: t,
                  })
                : (0, n.jsx)(c.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: g.j,
                      text: Y.intl.string(Y.t.SDUwM0),
                      onClick: l,
                  }),
            (0, n.jsx)(V.A, { isOwner: !0, isWishlistPublic: i, onToggleVisibility: r }),
        ],
    });
}
function Q(e) {
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
        text: Y.intl.formatToPlainString(Y.t["HDT/rg"], { applicationName: t.name }),
        onClick: a,
        onMouseDown: r,
    });
}
function J(e) {
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
                    : (0, n.jsx)(Q, { application: t, handleOpenGameShop: a, handleOpenGameShopMouseDown: r });
            }
            return (0, n.jsx)(H.A, {
                title: Y.intl.string(Y.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: a,
                socialLayerStorefrontApplicationIds: i,
            });
        }, [i, a, d, r]);
    return (0, n.jsxs)("div", {
        className: q.y7,
        children: [
            (0, n.jsxs)("div", {
                className: q.q6,
                children: [
                    (0, n.jsx)(m.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: Y.intl.string(Y.t.HGnLLT),
                    }),
                    (0, n.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: Y.intl.string(Y.t["/X1ny6"]),
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
                            text: Y.intl.string(Y.t.ZbS4QB),
                            onClick: s,
                        }),
                    o,
                ],
            }),
        ],
    });
}
function $(e) {
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
        m = (0, d.bG)([M.A], () => M.A.getWishlistSettings(i.id, g)),
        { trackUserProfileWishlistAction: x } = (0, _.NJ)(),
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
        S = (0, U.A)({ wishlistId: g, onAction: v, productLines: null != s ? (0, L.y9)(s) : null }),
        E = l.useCallback(() => {
            if (null == g) return;
            let e = f ? r.a.PRIVATE : r.a.PUBLIC;
            I(!f),
                C.A.updateWishlistVisibility(g, e),
                x({
                    wishlistId: g,
                    action: f ? z.Mq.WISHLIST_TOGGLE_PRIVATE : z.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != s ? (0, L.y9)(s) : void 0,
                });
        }, [g, f, x, s]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            !f &&
                (0, n.jsxs)("div", {
                    className: q.lm,
                    children: [
                        (0, n.jsx)(p.G, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: Y.intl.string(Y.t.RX7D9h),
                        }),
                    ],
                }),
            f &&
                j &&
                (0, n.jsxs)("div", {
                    className: q.lm,
                    children: [
                        (0, n.jsx)(A.m, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: Y.intl.string(Y.t.d78ChW),
                        }),
                    ],
                }),
            (0, n.jsxs)("div", {
                ref: S,
                className: q.U1,
                children: [
                    (0, n.jsx)(h.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: Y.intl.format(Y.t.r6Y1Lg, { count: s.items.length }),
                    }),
                    t
                        ? (0, n.jsx)(K, {
                              socialLayerStorefrontApplicationIds: a,
                              isWishlistPublic: f,
                              handleOpenShop: o,
                              handleOpenGameShop: c,
                              handleAddNitroToWishlist: u,
                              handleToggleWishlistVisibility: E,
                          })
                        : (0, n.jsx)(Z, {
                              socialLayerStorefrontApplicationIds: a,
                              handleOpenShop: o,
                              handleOpenGameShop: c,
                          }),
                ],
            }),
        ],
    });
}
function ee(e) {
    let { profileOwner: t } = e,
        i = l.useRef(null);
    (0, P.i)({ containerRef: i, itemType: "WISHLIST_ITEM" });
    let { wishlistId: s, currentUser: r } = (0, d.cf)([M.A, G.default], () => ({
            wishlistId: M.A.getFirstWishlistId(t.id),
            currentUser: G.default.getCurrentUser(),
        })),
        { analyticsLocations: c } = (0, f.Ay)(),
        u = r?.id === t.id,
        { wishlist: g, wasFetched: m, error: h } = (0, k.fw)({ wishlistId: s, userId: t.id });
    (0, O.A)(g);
    let x = (0, N.A)({ wishlist: g, profileOwner: t, currentUser: r }),
        p = (0, R.Gh)("user-profile-modal-v2-wishlist"),
        A = l.useCallback(() => {
            (0, o.closeAllModals)(), (0, v.Cz)({ analyticsLocations: c, analyticsSource: j.A.USER_PROFILE_WISHLIST });
        }, [c]),
        I = l.useCallback((e) => {
            let t = b.A.getGuildIdFromApplicationId(e);
            null != t && (0, T.X)({ guildId: t });
        }, []),
        C = l.useCallback((e) => {
            let t = b.A.getGuildIdFromApplicationId(e);
            null != t && ((0, o.closeAllModals)(), (0, T.default)({ guildId: t }));
        }, []),
        { handleToggle: _ } = (0, E.c)({
            userId: r?.id,
            skuId: X.pe.TIER_2,
            nuxGraphic: p ? w.g : void 0,
            onNuxShow: S.D,
            location: j.A.USER_PROFILE_WISHLIST,
            onAddSuccess: y.w,
        });
    if (null == r || null != h) return null;
    let U = null == g || 0 === g.items.length;
    return (0, n.jsxs)(F.K, {
        scrollerRef: i,
        className: a()({ [q.XG]: !U }),
        fade: !0,
        children: [
            U
                ? (0, n.jsx)(J, {
                      isOwner: u,
                      socialLayerStorefrontApplicationIds: x,
                      handleOpenShop: A,
                      handleOpenGameShop: C,
                      handleOpenGameShopMouseDown: I,
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(D.A, { scrollerRef: i }),
                          (0, n.jsx)($, {
                              isOwner: u,
                              profileOwner: t,
                              wishlist: g,
                              socialLayerStorefrontApplicationIds: x,
                              handleOpenShop: A,
                              handleOpenGameShop: C,
                              handleAddNitroToWishlist: p && !(0, L.C3)(g, X.pe.TIER_2) ? _ : void 0,
                          }),
                          (0, n.jsx)(W.A, { items: g.items, profileOwner: t, isOwner: u }),
                      ],
                  }),
            u &&
                (0, n.jsx)(B.A, {
                    user: t,
                    wishlist: g,
                    hasFetchedWishlist: m,
                    analyticsLocations: c,
                    className: U ? q._E : q.HZ,
                }),
        ],
    });
}
