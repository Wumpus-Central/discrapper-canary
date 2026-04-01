n.d(t, { A: () => z });
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
    m = n(429913),
    x = n(979286),
    p = n(895360),
    f = n(574499),
    h = n(400669),
    _ = n(832163),
    A = n(690946),
    I = n(898616),
    j = n(44724),
    v = n(808247),
    T = n(178213),
    E = n(909536),
    b = n(594832),
    C = n(287809),
    S = n(183555),
    N = n(622543),
    y = n(600761),
    R = n(535089),
    k = n(128988),
    w = n(515054),
    O = n(203647),
    L = n(376932),
    P = n(383430),
    D = n(300131),
    G = n(518477),
    M = n(788868),
    U = n(985018),
    F = n(426158);
function W(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, i.jsx)(P.A, {
              title: U.intl.string(U.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, i.jsx)(c.Button, {
              variant: "secondary",
              size: "sm",
              icon: c.U1X,
              text: U.intl.string(U.t["i/yzHs"]),
              onClick: n,
          });
}
function H(e) {
    let {
        socialLayerStorefrontApplicationIds: t,
        isWishlistPublic: n,
        handleOpenShop: l,
        handleOpenGameShop: a,
        handleAddNitroToWishlist: s,
        handleToggleWishlistVisibility: r,
    } = e;
    return (0, i.jsxs)("div", {
        className: F.$s,
        children: [
            t.length > 0 || null != s
                ? (0, i.jsx)(P.A, {
                      title: U.intl.string(U.t.SDUwM0),
                      handleOpenCollectiblesShop: l,
                      handleOpenGameShop: t.length > 0 ? a : void 0,
                      handleAddNitroToWishlist: s,
                      socialLayerStorefrontApplicationIds: t,
                  })
                : (0, i.jsx)(c.Button, {
                      variant: "secondary",
                      size: "sm",
                      icon: c.j96,
                      text: U.intl.string(U.t.SDUwM0),
                      onClick: l,
                  }),
            (0, i.jsx)(D.A, { isOwner: !0, isWishlistPublic: n, onToggleVisibility: r }),
        ],
    });
}
function B(e) {
    let { application: t, handleOpenGameShop: n, handleOpenGameShopMouseDown: a } = e,
        s = l.useCallback(() => {
            n(t.id);
        }, [t, n]),
        r = l.useCallback(() => {
            a(t.id);
        }, [t, a]);
    return (0, i.jsx)(c.Button, {
        variant: "primary",
        size: "sm",
        icon: c.U1X,
        text: U.intl.formatToPlainString(U.t["HDT/rg"], { applicationName: t.name }),
        onClick: s,
        onMouseDown: r,
    });
}
function X(e) {
    let {
            isOwner: t,
            socialLayerStorefrontApplicationIds: n,
            handleOpenShop: a,
            handleOpenGameShop: s,
            handleOpenGameShopMouseDown: r,
        } = e,
        o = (0, m.A)(n),
        d = l.useMemo(() => {
            if (0 === n.length) return null;
            let e = o.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === n.length) {
                let t = e[n[0]];
                return null == t
                    ? null
                    : (0, i.jsx)(B, { application: t, handleOpenGameShop: s, handleOpenGameShopMouseDown: r });
            }
            return (0, i.jsx)(P.A, {
                title: U.intl.string(U.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: s,
                socialLayerStorefrontApplicationIds: n,
            });
        }, [n, s, o, r]);
    return (0, i.jsxs)("div", {
        className: F.y7,
        children: [
            (0, i.jsxs)("div", {
                className: F.q6,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: U.intl.string(U.t.HGnLLT),
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: U.intl.string(U.t["/X1ny6"]),
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
                            text: U.intl.string(U.t.ZbS4QB),
                            onClick: a,
                        }),
                    d,
                ],
            }),
        ],
    });
}
function V(e) {
    let {
            isOwner: t,
            profileOwner: n,
            wishlist: a,
            socialLayerStorefrontApplicationIds: s,
            handleOpenShop: d,
            handleOpenGameShop: u,
            handleAddNitroToWishlist: g,
        } = e,
        m = a.id,
        x = (0, o.bG)([N.A], () => N.A.getWishlistSettings(n.id, m)),
        { trackUserProfileWishlistAction: p } = (0, S.NJ)(),
        f = !1 === n.nsfwAllowed,
        [h, _] = l.useState(!0);
    l.useEffect(() => {
        x?.visibility != null && _(x.visibility === r.a.PUBLIC);
    }, [x?.visibility]);
    let A = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && p({ wishlistId: t, action: n, productLines: i });
            },
            [p],
        ),
        I = (0, R.A)({ wishlistId: m, onAction: A, productLines: a?.getProductLines() ?? null }),
        j = l.useCallback(() => {
            if (null == m) return;
            let e = h ? r.a.PRIVATE : r.a.PUBLIC;
            _(!h),
                v.A.updateWishlistVisibility(m, e),
                p({
                    wishlistId: m,
                    action: h ? G.Mq.WISHLIST_TOGGLE_PRIVATE : G.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: a?.getProductLines(),
                });
        }, [m, h, p, a]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !h &&
                (0, i.jsxs)("div", {
                    className: F.lm,
                    children: [
                        (0, i.jsx)(c.G3N, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: U.intl.string(U.t.RX7D9h),
                        }),
                    ],
                }),
            h &&
                f &&
                (0, i.jsxs)("div", {
                    className: F.lm,
                    children: [
                        (0, i.jsx)(c.mir, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: U.intl.string(U.t.d78ChW),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                ref: I,
                className: F.U1,
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: U.intl.format(U.t.r6Y1Lg, { count: a.items.length }),
                    }),
                    t
                        ? (0, i.jsx)(H, {
                              socialLayerStorefrontApplicationIds: s,
                              isWishlistPublic: h,
                              handleOpenShop: d,
                              handleOpenGameShop: u,
                              handleAddNitroToWishlist: g,
                              handleToggleWishlistVisibility: j,
                          })
                        : (0, i.jsx)(W, {
                              socialLayerStorefrontApplicationIds: s,
                              handleOpenShop: d,
                              handleOpenGameShop: u,
                          }),
                ],
            }),
        ],
    });
}
function z(e) {
    let { profileOwner: t } = e,
        n = l.useRef(null);
    (0, y.i)({ containerRef: n, itemType: "WISHLIST_ITEM" });
    let { wishlistId: a, currentUser: r } = (0, o.cf)([N.A, C.default], () => ({
            wishlistId: N.A.getFirstWishlistId(t.id),
            currentUser: C.default.getCurrentUser(),
        })),
        { analyticsLocations: c } = (0, g.Ay)(),
        m = r?.id === t.id,
        { wishlist: v, wasFetched: S, error: R } = (0, b.fw)({ wishlistId: a, userId: t.id }),
        P = (0, I.A)({ wishlist: v, profileOwner: t, currentUser: r }),
        D = (0, A.X)({ location: "user-profile-modal-v2-wishlist" }),
        G = (0, T.GG)("user-profile-modal-v2-wishlist"),
        U = (0, E.Gh)("user-profile-modal-v2-wishlist"),
        W = m && ((D && P.length > 0) || G),
        H = l.useCallback(() => {
            (0, d.closeAllModals)(), (0, x.Cz)({ analyticsLocations: c, analyticsSource: u.A.USER_PROFILE_WISHLIST });
        }, [c]),
        B = l.useCallback((e) => {
            let t = _.A.getGuildIdFromApplicationId(e);
            null != t && (0, j.X)({ guildId: t });
        }, []),
        z = l.useCallback((e) => {
            let t = _.A.getGuildIdFromApplicationId(e);
            null != t && ((0, d.closeAllModals)(), (0, j.default)({ guildId: t }));
        }, []),
        { handleToggle: Y } = (0, f.c)({
            userId: r?.id,
            skuId: M.pe.TIER_2,
            nuxGraphic: U ? h.g : void 0,
            onNuxShow: p.D,
            location: u.A.USER_PROFILE_WISHLIST,
        }),
        K = v?.items ?? [];
    if (null == r || null != R) return null;
    let q = null == v || 0 === K.length;
    return (0, i.jsxs)(w.K, {
        scrollerRef: n,
        className: s()({ [F.XG]: !q }),
        fade: !0,
        children: [
            q
                ? (0, i.jsx)(X, {
                      isOwner: m,
                      socialLayerStorefrontApplicationIds: P,
                      handleOpenShop: H,
                      handleOpenGameShop: z,
                      handleOpenGameShopMouseDown: B,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(k.A, { scrollerRef: n }),
                          (0, i.jsx)(V, {
                              isOwner: m,
                              profileOwner: t,
                              wishlist: v,
                              socialLayerStorefrontApplicationIds: P,
                              handleOpenShop: H,
                              handleOpenGameShop: z,
                              handleAddNitroToWishlist: U && !v.hasSkuId(M.pe.TIER_2) ? Y : void 0,
                          }),
                          (0, i.jsx)(O.A, { items: K, profileOwner: t, isOwner: m }),
                      ],
                  }),
            W &&
                (0, i.jsx)(L.A, {
                    user: t,
                    wishlist: v,
                    applicationIds: P,
                    hasFetchedWishlist: S,
                    analyticsLocations: c,
                    className: q ? F._E : F.HZ,
                }),
        ],
    });
}
