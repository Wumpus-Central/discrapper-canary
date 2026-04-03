n.d(t, { A: () => Y });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(777480),
    o = n(311907),
    c = n(192308),
    d = n(397927),
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
    b = n(673843),
    C = n(594832),
    S = n(287809),
    N = n(183555),
    y = n(622543),
    R = n(600761),
    k = n(535089),
    w = n(128988),
    O = n(515054),
    L = n(203647),
    P = n(376932),
    D = n(383430),
    G = n(300131),
    M = n(518477),
    U = n(788868),
    F = n(985018),
    W = n(426158);
function H(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, i.jsx)(D.A, {
              title: F.intl.string(F.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, i.jsx)(d.Button, {
              variant: "secondary",
              size: "sm",
              icon: d.U1X,
              text: F.intl.string(F.t["i/yzHs"]),
              onClick: n,
          });
}
function B(e) {
    let {
        socialLayerStorefrontApplicationIds: t,
        isWishlistPublic: n,
        handleOpenShop: l,
        handleOpenGameShop: a,
        handleAddNitroToWishlist: s,
        handleToggleWishlistVisibility: r,
    } = e;
    return (0, i.jsxs)("div", {
        className: W.$s,
        children: [
            t.length > 0 || null != s
                ? (0, i.jsx)(D.A, {
                      title: F.intl.string(F.t.SDUwM0),
                      handleOpenCollectiblesShop: l,
                      handleOpenGameShop: t.length > 0 ? a : void 0,
                      handleAddNitroToWishlist: s,
                      socialLayerStorefrontApplicationIds: t,
                  })
                : (0, i.jsx)(d.Button, {
                      variant: "secondary",
                      size: "sm",
                      icon: d.j96,
                      text: F.intl.string(F.t.SDUwM0),
                      onClick: l,
                  }),
            (0, i.jsx)(G.A, { isOwner: !0, isWishlistPublic: n, onToggleVisibility: r }),
        ],
    });
}
function X(e) {
    let { application: t, handleOpenGameShop: n, handleOpenGameShopMouseDown: a } = e,
        s = l.useCallback(() => {
            n(t.id);
        }, [t, n]),
        r = l.useCallback(() => {
            a(t.id);
        }, [t, a]);
    return (0, i.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        icon: d.U1X,
        text: F.intl.formatToPlainString(F.t["HDT/rg"], { applicationName: t.name }),
        onClick: s,
        onMouseDown: r,
    });
}
function V(e) {
    let {
            isOwner: t,
            socialLayerStorefrontApplicationIds: n,
            handleOpenShop: a,
            handleOpenGameShop: s,
            handleOpenGameShopMouseDown: r,
        } = e,
        o = (0, m.A)(n),
        c = l.useMemo(() => {
            if (0 === n.length) return null;
            let e = o.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === n.length) {
                let t = e[n[0]];
                return null == t
                    ? null
                    : (0, i.jsx)(X, { application: t, handleOpenGameShop: s, handleOpenGameShopMouseDown: r });
            }
            return (0, i.jsx)(D.A, {
                title: F.intl.string(F.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: s,
                socialLayerStorefrontApplicationIds: n,
            });
        }, [n, s, o, r]);
    return (0, i.jsxs)("div", {
        className: W.y7,
        children: [
            (0, i.jsxs)("div", {
                className: W.q6,
                children: [
                    (0, i.jsx)(d.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: F.intl.string(F.t.HGnLLT),
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: F.intl.string(F.t["/X1ny6"]),
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
                            text: F.intl.string(F.t.ZbS4QB),
                            onClick: a,
                        }),
                    c,
                ],
            }),
        ],
    });
}
function z(e) {
    let {
            isOwner: t,
            profileOwner: n,
            wishlist: a,
            socialLayerStorefrontApplicationIds: s,
            handleOpenShop: c,
            handleOpenGameShop: u,
            handleAddNitroToWishlist: g,
        } = e,
        m = a.id,
        x = (0, o.bG)([y.A], () => y.A.getWishlistSettings(n.id, m)),
        { trackUserProfileWishlistAction: p } = (0, N.NJ)(),
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
        I = (0, k.A)({ wishlistId: m, onAction: A, productLines: a?.getProductLines() ?? null }),
        j = l.useCallback(() => {
            if (null == m) return;
            let e = h ? r.a.PRIVATE : r.a.PUBLIC;
            _(!h),
                v.A.updateWishlistVisibility(m, e),
                p({
                    wishlistId: m,
                    action: h ? M.Mq.WISHLIST_TOGGLE_PRIVATE : M.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: a?.getProductLines(),
                });
        }, [m, h, p, a]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !h &&
                (0, i.jsxs)("div", {
                    className: W.lm,
                    children: [
                        (0, i.jsx)(d.G3N, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: F.intl.string(F.t.RX7D9h),
                        }),
                    ],
                }),
            h &&
                f &&
                (0, i.jsxs)("div", {
                    className: W.lm,
                    children: [
                        (0, i.jsx)(d.mir, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: F.intl.string(F.t.d78ChW),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                ref: I,
                className: W.U1,
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: F.intl.format(F.t.r6Y1Lg, { count: a.items.length }),
                    }),
                    t
                        ? (0, i.jsx)(B, {
                              socialLayerStorefrontApplicationIds: s,
                              isWishlistPublic: h,
                              handleOpenShop: c,
                              handleOpenGameShop: u,
                              handleAddNitroToWishlist: g,
                              handleToggleWishlistVisibility: j,
                          })
                        : (0, i.jsx)(H, {
                              socialLayerStorefrontApplicationIds: s,
                              handleOpenShop: c,
                              handleOpenGameShop: u,
                          }),
                ],
            }),
        ],
    });
}
function Y(e) {
    let { profileOwner: t } = e,
        n = l.useRef(null);
    (0, R.i)({ containerRef: n, itemType: "WISHLIST_ITEM" });
    let { wishlistId: a, currentUser: r } = (0, o.cf)([y.A, S.default], () => ({
            wishlistId: y.A.getFirstWishlistId(t.id),
            currentUser: S.default.getCurrentUser(),
        })),
        { analyticsLocations: d } = (0, g.Ay)(),
        m = r?.id === t.id,
        { wishlist: v, wasFetched: N, error: k } = (0, C.fw)({ wishlistId: a, userId: t.id });
    (0, b.A)(v);
    let D = (0, I.A)({ wishlist: v, profileOwner: t, currentUser: r }),
        G = (0, A.X)({ location: "user-profile-modal-v2-wishlist" }),
        M = (0, T.GG)("user-profile-modal-v2-wishlist"),
        F = (0, E.Gh)("user-profile-modal-v2-wishlist"),
        H = m && ((G && D.length > 0) || M),
        B = l.useCallback(() => {
            (0, c.closeAllModals)(), (0, x.Cz)({ analyticsLocations: d, analyticsSource: u.A.USER_PROFILE_WISHLIST });
        }, [d]),
        X = l.useCallback((e) => {
            let t = _.A.getGuildIdFromApplicationId(e);
            null != t && (0, j.X)({ guildId: t });
        }, []),
        Y = l.useCallback((e) => {
            let t = _.A.getGuildIdFromApplicationId(e);
            null != t && ((0, c.closeAllModals)(), (0, j.default)({ guildId: t }));
        }, []),
        { handleToggle: K } = (0, f.c)({
            userId: r?.id,
            skuId: U.pe.TIER_2,
            nuxGraphic: F ? h.g : void 0,
            onNuxShow: p.D,
            location: u.A.USER_PROFILE_WISHLIST,
        });
    if (null == r || null != k) return null;
    let q = null == v || 0 === v.items.length;
    return (0, i.jsxs)(O.K, {
        scrollerRef: n,
        className: s()({ [W.XG]: !q }),
        fade: !0,
        children: [
            q
                ? (0, i.jsx)(V, {
                      isOwner: m,
                      socialLayerStorefrontApplicationIds: D,
                      handleOpenShop: B,
                      handleOpenGameShop: Y,
                      handleOpenGameShopMouseDown: X,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(w.A, { scrollerRef: n }),
                          (0, i.jsx)(z, {
                              isOwner: m,
                              profileOwner: t,
                              wishlist: v,
                              socialLayerStorefrontApplicationIds: D,
                              handleOpenShop: B,
                              handleOpenGameShop: Y,
                              handleAddNitroToWishlist: F && !v.hasSkuId(U.pe.TIER_2) ? K : void 0,
                          }),
                          (0, i.jsx)(L.A, { items: v.items, profileOwner: t, isOwner: m }),
                      ],
                  }),
            H &&
                (0, i.jsx)(P.A, {
                    user: t,
                    wishlist: v,
                    applicationIds: D,
                    hasFetchedWishlist: N,
                    analyticsLocations: d,
                    className: q ? W._E : W.HZ,
                }),
        ],
    });
}
