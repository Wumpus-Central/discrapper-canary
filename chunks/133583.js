i.d(t, { A: () => X });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(777480),
    d = i(311907),
    o = i(192308),
    c = i(397927),
    u = i(793574),
    g = i(688810),
    m = i(429913),
    h = i(979286),
    x = i(895360),
    A = i(574499),
    p = i(400669),
    f = i(832163),
    I = i(898616),
    j = i(44724),
    v = i(808247),
    S = i(909536),
    E = i(673843),
    b = i(594832),
    T = i(855052),
    y = i(287809),
    C = i(183555),
    N = i(622543),
    w = i(600761),
    R = i(535089),
    k = i(128988),
    O = i(515054),
    L = i(203647),
    M = i(376932),
    _ = i(383430),
    P = i(300131),
    U = i(518477),
    G = i(788868),
    F = i(985018),
    D = i(426158);
function W(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: i, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, n.jsx)(_.A, {
              title: F.intl.string(F.t["i/yzHs"]),
              handleOpenCollectiblesShop: i,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, n.jsx)(c.Button, {
              variant: "secondary",
              size: "sm",
              icon: c.U1X,
              text: F.intl.string(F.t["i/yzHs"]),
              onClick: i,
          });
}
function H(e) {
    let {
        socialLayerStorefrontApplicationIds: t,
        isWishlistPublic: i,
        handleOpenShop: l,
        handleOpenGameShop: s,
        handleAddNitroToWishlist: a,
        handleToggleWishlistVisibility: r,
    } = e;
    return (0, n.jsxs)("div", {
        className: D.$s,
        children: [
            t.length > 0 || null != a
                ? (0, n.jsx)(_.A, {
                      title: F.intl.string(F.t.SDUwM0),
                      handleOpenCollectiblesShop: l,
                      handleOpenGameShop: t.length > 0 ? s : void 0,
                      handleAddNitroToWishlist: a,
                      socialLayerStorefrontApplicationIds: t,
                  })
                : (0, n.jsx)(c.Button, {
                      variant: "secondary",
                      size: "sm",
                      icon: c.j96,
                      text: F.intl.string(F.t.SDUwM0),
                      onClick: l,
                  }),
            (0, n.jsx)(P.A, { isOwner: !0, isWishlistPublic: i, onToggleVisibility: r }),
        ],
    });
}
function B(e) {
    let { application: t, handleOpenGameShop: i, handleOpenGameShopMouseDown: s } = e,
        a = l.useCallback(() => {
            i(t.id);
        }, [t, i]),
        r = l.useCallback(() => {
            s(t.id);
        }, [t, s]);
    return (0, n.jsx)(c.Button, {
        variant: "primary",
        size: "sm",
        icon: c.U1X,
        text: F.intl.formatToPlainString(F.t["HDT/rg"], { applicationName: t.name }),
        onClick: a,
        onMouseDown: r,
    });
}
function V(e) {
    let {
            isOwner: t,
            socialLayerStorefrontApplicationIds: i,
            handleOpenShop: s,
            handleOpenGameShop: a,
            handleOpenGameShopMouseDown: r,
        } = e,
        d = (0, m.A)(i),
        o = l.useMemo(() => {
            if (0 === i.length) return null;
            let e = d.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === i.length) {
                let t = e[i[0]];
                return null == t
                    ? null
                    : (0, n.jsx)(B, { application: t, handleOpenGameShop: a, handleOpenGameShopMouseDown: r });
            }
            return (0, n.jsx)(_.A, {
                title: F.intl.string(F.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: a,
                socialLayerStorefrontApplicationIds: i,
            });
        }, [i, a, d, r]);
    return (0, n.jsxs)("div", {
        className: D.y7,
        children: [
            (0, n.jsxs)("div", {
                className: D.q6,
                children: [
                    (0, n.jsx)(c.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: F.intl.string(F.t.HGnLLT),
                    }),
                    (0, n.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: F.intl.string(F.t["/X1ny6"]),
                    }),
                ],
            }),
            (0, n.jsxs)(c.ButtonGroup, {
                size: "sm",
                children: [
                    t &&
                        (0, n.jsx)(c.Button, {
                            variant: "primary",
                            size: "sm",
                            icon: c.U1X,
                            text: F.intl.string(F.t.ZbS4QB),
                            onClick: s,
                        }),
                    o,
                ],
            }),
        ],
    });
}
function z(e) {
    let {
            isOwner: t,
            profileOwner: i,
            wishlist: s,
            socialLayerStorefrontApplicationIds: a,
            handleOpenShop: o,
            handleOpenGameShop: u,
            handleAddNitroToWishlist: g,
        } = e,
        m = s.id,
        h = (0, d.bG)([N.A], () => N.A.getWishlistSettings(i.id, m)),
        { trackUserProfileWishlistAction: x } = (0, C.NJ)(),
        A = !1 === i.nsfwAllowed,
        [p, f] = l.useState(!0);
    l.useEffect(() => {
        h?.visibility != null && f(h.visibility === r.a.PUBLIC);
    }, [h?.visibility]);
    let I = l.useCallback(
            (e) => {
                let { wishlistId: t, action: i, productLines: n } = e;
                null != t && x({ wishlistId: t, action: i, productLines: n });
            },
            [x],
        ),
        j = (0, R.A)({ wishlistId: m, onAction: I, productLines: null != s ? (0, T.y9)(s) : null }),
        S = l.useCallback(() => {
            if (null == m) return;
            let e = p ? r.a.PRIVATE : r.a.PUBLIC;
            f(!p),
                v.A.updateWishlistVisibility(m, e),
                x({
                    wishlistId: m,
                    action: p ? U.Mq.WISHLIST_TOGGLE_PRIVATE : U.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != s ? (0, T.y9)(s) : void 0,
                });
        }, [m, p, x, s]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            !p &&
                (0, n.jsxs)("div", {
                    className: D.lm,
                    children: [
                        (0, n.jsx)(c.G3N, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: F.intl.string(F.t.RX7D9h),
                        }),
                    ],
                }),
            p &&
                A &&
                (0, n.jsxs)("div", {
                    className: D.lm,
                    children: [
                        (0, n.jsx)(c.mir, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: F.intl.string(F.t.d78ChW),
                        }),
                    ],
                }),
            (0, n.jsxs)("div", {
                ref: j,
                className: D.U1,
                children: [
                    (0, n.jsx)(c.Text, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: F.intl.format(F.t.r6Y1Lg, { count: s.items.length }),
                    }),
                    t
                        ? (0, n.jsx)(H, {
                              socialLayerStorefrontApplicationIds: a,
                              isWishlistPublic: p,
                              handleOpenShop: o,
                              handleOpenGameShop: u,
                              handleAddNitroToWishlist: g,
                              handleToggleWishlistVisibility: S,
                          })
                        : (0, n.jsx)(W, {
                              socialLayerStorefrontApplicationIds: a,
                              handleOpenShop: o,
                              handleOpenGameShop: u,
                          }),
                ],
            }),
        ],
    });
}
function X(e) {
    let { profileOwner: t } = e,
        i = l.useRef(null);
    (0, w.i)({ containerRef: i, itemType: "WISHLIST_ITEM" });
    let { wishlistId: s, currentUser: r } = (0, d.cf)([N.A, y.default], () => ({
            wishlistId: N.A.getFirstWishlistId(t.id),
            currentUser: y.default.getCurrentUser(),
        })),
        { analyticsLocations: c } = (0, g.Ay)(),
        m = r?.id === t.id,
        { wishlist: v, wasFetched: C, error: R } = (0, b.fw)({ wishlistId: s, userId: t.id });
    (0, E.A)(v);
    let _ = (0, I.A)({ wishlist: v, profileOwner: t, currentUser: r }),
        P = (0, S.Gh)("user-profile-modal-v2-wishlist"),
        U = l.useCallback(() => {
            (0, o.closeAllModals)(), (0, h.Cz)({ analyticsLocations: c, analyticsSource: u.A.USER_PROFILE_WISHLIST });
        }, [c]),
        F = l.useCallback((e) => {
            let t = f.A.getGuildIdFromApplicationId(e);
            null != t && (0, j.X)({ guildId: t });
        }, []),
        W = l.useCallback((e) => {
            let t = f.A.getGuildIdFromApplicationId(e);
            null != t && ((0, o.closeAllModals)(), (0, j.default)({ guildId: t }));
        }, []),
        { handleToggle: H } = (0, A.c)({
            userId: r?.id,
            skuId: G.pe.TIER_2,
            nuxGraphic: P ? p.g : void 0,
            onNuxShow: x.D,
            location: u.A.USER_PROFILE_WISHLIST,
        });
    if (null == r || null != R) return null;
    let B = null == v || 0 === v.items.length;
    return (0, n.jsxs)(O.K, {
        scrollerRef: i,
        className: a()({ [D.XG]: !B }),
        fade: !0,
        children: [
            B
                ? (0, n.jsx)(V, {
                      isOwner: m,
                      socialLayerStorefrontApplicationIds: _,
                      handleOpenShop: U,
                      handleOpenGameShop: W,
                      handleOpenGameShopMouseDown: F,
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(k.A, { scrollerRef: i }),
                          (0, n.jsx)(z, {
                              isOwner: m,
                              profileOwner: t,
                              wishlist: v,
                              socialLayerStorefrontApplicationIds: _,
                              handleOpenShop: U,
                              handleOpenGameShop: W,
                              handleAddNitroToWishlist: P && !(0, T.C3)(v, G.pe.TIER_2) ? H : void 0,
                          }),
                          (0, n.jsx)(L.A, { items: v.items, profileOwner: t, isOwner: m }),
                      ],
                  }),
            m &&
                (0, n.jsx)(M.A, {
                    user: t,
                    wishlist: v,
                    hasFetchedWishlist: C,
                    analyticsLocations: c,
                    className: B ? D._E : D.HZ,
                }),
        ],
    });
}
