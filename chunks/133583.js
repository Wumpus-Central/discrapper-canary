i.d(t, { A: () => z });
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
    T = i(287809),
    y = i(183555),
    C = i(622543),
    N = i(600761),
    w = i(535089),
    R = i(128988),
    k = i(515054),
    L = i(203647),
    O = i(376932),
    M = i(383430),
    _ = i(300131),
    P = i(518477),
    U = i(788868),
    G = i(985018),
    F = i(426158);
function D(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: i, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, n.jsx)(M.A, {
              title: G.intl.string(G.t["i/yzHs"]),
              handleOpenCollectiblesShop: i,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, n.jsx)(c.Button, {
              variant: "secondary",
              size: "sm",
              icon: c.U1X,
              text: G.intl.string(G.t["i/yzHs"]),
              onClick: i,
          });
}
function W(e) {
    let {
        socialLayerStorefrontApplicationIds: t,
        isWishlistPublic: i,
        handleOpenShop: l,
        handleOpenGameShop: s,
        handleAddNitroToWishlist: a,
        handleToggleWishlistVisibility: r,
    } = e;
    return (0, n.jsxs)("div", {
        className: F.$s,
        children: [
            t.length > 0 || null != a
                ? (0, n.jsx)(M.A, {
                      title: G.intl.string(G.t.SDUwM0),
                      handleOpenCollectiblesShop: l,
                      handleOpenGameShop: t.length > 0 ? s : void 0,
                      handleAddNitroToWishlist: a,
                      socialLayerStorefrontApplicationIds: t,
                  })
                : (0, n.jsx)(c.Button, {
                      variant: "secondary",
                      size: "sm",
                      icon: c.j96,
                      text: G.intl.string(G.t.SDUwM0),
                      onClick: l,
                  }),
            (0, n.jsx)(_.A, { isOwner: !0, isWishlistPublic: i, onToggleVisibility: r }),
        ],
    });
}
function H(e) {
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
        text: G.intl.formatToPlainString(G.t["HDT/rg"], { applicationName: t.name }),
        onClick: a,
        onMouseDown: r,
    });
}
function B(e) {
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
                    : (0, n.jsx)(H, { application: t, handleOpenGameShop: a, handleOpenGameShopMouseDown: r });
            }
            return (0, n.jsx)(M.A, {
                title: G.intl.string(G.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: a,
                socialLayerStorefrontApplicationIds: i,
            });
        }, [i, a, d, r]);
    return (0, n.jsxs)("div", {
        className: F.y7,
        children: [
            (0, n.jsxs)("div", {
                className: F.q6,
                children: [
                    (0, n.jsx)(c.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: G.intl.string(G.t.HGnLLT),
                    }),
                    (0, n.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: G.intl.string(G.t["/X1ny6"]),
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
                            text: G.intl.string(G.t.ZbS4QB),
                            onClick: s,
                        }),
                    o,
                ],
            }),
        ],
    });
}
function V(e) {
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
        h = (0, d.bG)([C.A], () => C.A.getWishlistSettings(i.id, m)),
        { trackUserProfileWishlistAction: x } = (0, y.NJ)(),
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
        j = (0, w.A)({ wishlistId: m, onAction: I, productLines: s?.getProductLines() ?? null }),
        S = l.useCallback(() => {
            if (null == m) return;
            let e = p ? r.a.PRIVATE : r.a.PUBLIC;
            f(!p),
                v.A.updateWishlistVisibility(m, e),
                x({
                    wishlistId: m,
                    action: p ? P.Mq.WISHLIST_TOGGLE_PRIVATE : P.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: s?.getProductLines(),
                });
        }, [m, p, x, s]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            !p &&
                (0, n.jsxs)("div", {
                    className: F.lm,
                    children: [
                        (0, n.jsx)(c.G3N, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: G.intl.string(G.t.RX7D9h),
                        }),
                    ],
                }),
            p &&
                A &&
                (0, n.jsxs)("div", {
                    className: F.lm,
                    children: [
                        (0, n.jsx)(c.mir, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: G.intl.string(G.t.d78ChW),
                        }),
                    ],
                }),
            (0, n.jsxs)("div", {
                ref: j,
                className: F.U1,
                children: [
                    (0, n.jsx)(c.Text, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: G.intl.format(G.t.r6Y1Lg, { count: s.items.length }),
                    }),
                    t
                        ? (0, n.jsx)(W, {
                              socialLayerStorefrontApplicationIds: a,
                              isWishlistPublic: p,
                              handleOpenShop: o,
                              handleOpenGameShop: u,
                              handleAddNitroToWishlist: g,
                              handleToggleWishlistVisibility: S,
                          })
                        : (0, n.jsx)(D, {
                              socialLayerStorefrontApplicationIds: a,
                              handleOpenShop: o,
                              handleOpenGameShop: u,
                          }),
                ],
            }),
        ],
    });
}
function z(e) {
    let { profileOwner: t } = e,
        i = l.useRef(null);
    (0, N.i)({ containerRef: i, itemType: "WISHLIST_ITEM" });
    let { wishlistId: s, currentUser: r } = (0, d.cf)([C.A, T.default], () => ({
            wishlistId: C.A.getFirstWishlistId(t.id),
            currentUser: T.default.getCurrentUser(),
        })),
        { analyticsLocations: c } = (0, g.Ay)(),
        m = r?.id === t.id,
        { wishlist: v, wasFetched: y, error: w } = (0, b.fw)({ wishlistId: s, userId: t.id });
    (0, E.A)(v);
    let M = (0, I.A)({ wishlist: v, profileOwner: t, currentUser: r }),
        _ = (0, S.Gh)("user-profile-modal-v2-wishlist"),
        P = l.useCallback(() => {
            (0, o.closeAllModals)(), (0, h.Cz)({ analyticsLocations: c, analyticsSource: u.A.USER_PROFILE_WISHLIST });
        }, [c]),
        G = l.useCallback((e) => {
            let t = f.A.getGuildIdFromApplicationId(e);
            null != t && (0, j.X)({ guildId: t });
        }, []),
        D = l.useCallback((e) => {
            let t = f.A.getGuildIdFromApplicationId(e);
            null != t && ((0, o.closeAllModals)(), (0, j.default)({ guildId: t }));
        }, []),
        { handleToggle: W } = (0, A.c)({
            userId: r?.id,
            skuId: U.pe.TIER_2,
            nuxGraphic: _ ? p.g : void 0,
            onNuxShow: x.D,
            location: u.A.USER_PROFILE_WISHLIST,
        });
    if (null == r || null != w) return null;
    let H = null == v || 0 === v.items.length;
    return (0, n.jsxs)(k.K, {
        scrollerRef: i,
        className: a()({ [F.XG]: !H }),
        fade: !0,
        children: [
            H
                ? (0, n.jsx)(B, {
                      isOwner: m,
                      socialLayerStorefrontApplicationIds: M,
                      handleOpenShop: P,
                      handleOpenGameShop: D,
                      handleOpenGameShopMouseDown: G,
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(R.A, { scrollerRef: i }),
                          (0, n.jsx)(V, {
                              isOwner: m,
                              profileOwner: t,
                              wishlist: v,
                              socialLayerStorefrontApplicationIds: M,
                              handleOpenShop: P,
                              handleOpenGameShop: D,
                              handleAddNitroToWishlist: _ && !v.hasSkuId(U.pe.TIER_2) ? W : void 0,
                          }),
                          (0, n.jsx)(L.A, { items: v.items, profileOwner: t, isOwner: m }),
                      ],
                  }),
            m &&
                (0, n.jsx)(O.A, {
                    user: t,
                    wishlist: v,
                    hasFetchedWishlist: y,
                    analyticsLocations: c,
                    className: H ? F._E : F.HZ,
                }),
        ],
    });
}
