i.d(t, { A: () => eM });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(777480),
    d = i(17928),
    o = i(192308),
    c = i(821609),
    u = i(34188),
    g = i(307301),
    m = i(534514),
    h = i(834730),
    x = i(825484),
    p = i(952270),
    j = i(885574),
    f = i(793574),
    A = i(688810),
    I = i(429913),
    v = i(859040),
    S = i(895360),
    y = i(152472),
    b = i(274681),
    E = i(400669);
i(321073);
var w = i(735438),
    C = i(721932),
    N = i(403362),
    T = i(832163),
    R = i(501838),
    k = i(44724),
    O = i(808247),
    L = i(909536),
    G = i(673843),
    P = i(561794),
    M = i(855052),
    _ = i(287809),
    U = i(183555),
    D = i(841595),
    W = i(600761),
    F = i(535089),
    H = i(128988),
    V = i(515054),
    B = i(688807),
    z = i(575593),
    Y = i(772427),
    X = i(107563);
i(723090), i(872472), i(394300);
var q = i(652215),
    Q = i(248550),
    K = i(451395),
    $ = i(823016),
    J = i(375708),
    Z = i(130821);
function ee(e) {
    let { item: t, index: i, wishlistId: l, onReorder: s, children: a } = e,
        { manageFocusOnReorder: r } = (0, $.r)();
    return (0, n.jsx)(K.mG, {
        index: i,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": J.intl.formatToPlainString(J.t["7SnyMA"], { positionNumber: i + 1 }),
        onReorder: s,
        onEnd: () => r(String(t.skuId)),
        className: Z.C,
        dropBeforeClassName: Z.A,
        dropAfterClassName: Z.Ze,
        draggingClassName: Z.Id,
        children: (0, n.jsx)("div", { className: Z.An, children: a }),
    });
}
let et = l.memo(function (e) {
    let { item: t, index: i, profileOwner: s, isOwner: a, wishlistId: r, isDragging: d, onReorder: o } = e,
        { registerDragHandleRef: c } = (0, $.r)(),
        u = l.useMemo(
            () =>
                a
                    ? (0, n.jsx)(K.jV, {
                          buttonRef: c(String(t.skuId)),
                          className: Z.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, c, t.skuId],
        ),
        g = l.useMemo(
            () => (0, n.jsx)(Q.A, { item: t, wishlistOwner: s, wishlistId: r, isDragging: d, dragHandle: u }),
            [t, s, d, u, r],
        );
    return a
        ? (0, n.jsx)("li", {
              children: (0, n.jsx)(ee, { item: t, index: i, wishlistId: r, onReorder: o, children: g }),
          })
        : (0, n.jsx)("li", { children: g });
});
function ei(e) {
    let { items: t, profileOwner: i, isOwner: s } = e,
        a = _.default.getCurrentUser(),
        { defaultWishlistId: r } = (0, d.cf)([D.A], () => ({ defaultWishlistId: D.A.getFirstWishlistId(i.id) })),
        o = (0, Y.rV)("UserProfileModalV2WishlistGrid"),
        c = l.useMemo(
            () => (o ? t : t.filter((e) => e.sku?.tenantMetadata?.collectibles?.type !== z.R.PROFILE_FRAME)),
            [t, o],
        ),
        { isDragging: u } = (0, B.V)((e) => ({ isDragging: e.isDragging() })),
        g = l.useCallback(
            (e, t) => {
                if (e === t || null == r || 0 === c.length || e < 0 || e >= c.length || t < 0 || t >= c.length) return;
                let i = X.A.getWishlist(r);
                if (null == i) return;
                let n = c[e],
                    {
                        newWishlistData: l,
                        previousSkuId: s,
                        nextSkuId: a,
                    } = (function (e, t, i, n) {
                        let l = null,
                            s = null;
                        i < n
                            ? ((l = t[n]?.skuId ?? null), (s = t[n + 1]?.skuId ?? null))
                            : ((l = t[n - 1]?.skuId ?? null), (s = t[n]?.skuId ?? null));
                        let a = [...t],
                            [r] = a.splice(i, 1);
                        return (
                            a.splice(n, 0, r), { newWishlistData: e.set("items", a), previousSkuId: l, nextSkuId: s }
                        );
                    })(i, c, e, t);
                O.A.reorderWishlistItem(r, n.skuId, { previousSkuId: s, nextSkuId: a, newWishlistData: l });
            },
            [r, c],
        );
    if (null == a || null == r) return null;
    let m = (0, n.jsx)("ul", {
        className: Z.Vg,
        children: c.map((e, t) =>
            (0, n.jsx)(
                et,
                { item: e, index: t, profileOwner: i, isOwner: s, wishlistId: r, isDragging: u, onReorder: g },
                e.skuId,
            ),
        ),
    });
    return s ? (0, n.jsx)($.B, { emptyListFallbackRef: null, children: m }) : m;
}
var en = i(815021),
    el = i(554146),
    es = i(131607),
    ea = i(973912),
    er = i(927813),
    ed = i(49999),
    eo = i(294085);
let ec = 90 * er.A.Millis.DAY,
    eu = 90 * er.A.Millis.DAY;
function eg(e) {
    let { user: t, wishlist: i, hasFetchedWishlist: s = !1, analyticsLocations: r, className: o } = e,
        c = (i?.items.length ?? 0) > 0,
        [u, g] = l.useState(!1);
    !s || c || u || g(!0);
    let m = (0, d.bG)([D.A], () =>
            null != i ? new Date(D.A.getWishlistSettings(t.id, i.id)?.updated_at ?? 0).valueOf() : 0,
        ),
        [x, p] = (0, es.Wl)(
            el.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
            { showAfterTimestamp: m + eu, cooldownDurationMs: ec },
            void 0,
            !0,
        ),
        j = x === el.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
    return s && (!c || j || u)
        ? (0, n.jsxs)("div", {
              className: a()(eo.kL, o),
              children: [
                  (0, n.jsxs)("div", {
                      className: eo.wx,
                      children: [
                          (0, n.jsx)(h.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: J.intl.string(J.t["+GB8Kt"]),
                          }),
                          c &&
                              (0, n.jsx)(en.J, {
                                  size: "xs",
                                  onClick: () => {
                                      g(!1), p(ed.i.USER_DISMISS);
                                  },
                              }),
                      ],
                  }),
                  (0, n.jsx)(ea.A, {
                      userId: t.id,
                      wishlist: i,
                      className: a()(eo.Vg, eo.e6),
                      analyticsLocations: r,
                      numWishlistItemsToRecommend: 15,
                      maxWishlistItemsToShow: 8,
                  }),
              ],
          })
        : null;
}
var em = i(477782),
    eh = i(403581),
    ex = i(922016),
    ep = i(980707),
    ej = i(789645),
    ef = i(847374),
    eA = i(486020),
    eI = i(420641);
function ev(e) {
    let {
            title: t,
            variant: i = "secondary",
            handleOpenCollectiblesShop: s,
            handleOpenGameShop: a,
            handleAddNitroToWishlist: r,
            socialLayerStorefrontApplicationIds: d,
        } = e,
        o = l.useRef(null),
        [g, m] = l.useState(!1),
        h = (function (e) {
            let { applications: t, handleOpenGameShop: i } = e;
            return l.useMemo(
                () =>
                    t.filter(N.Vq).map((e) => {
                        let t = eA.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: J.intl.formatToPlainString(J.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != t ? () => (0, n.jsx)("img", { className: eI.I, src: t, alt: "" }) : u.U,
                            leadingAccessory: null != t ? { type: "image", src: t } : { type: "icon", icon: u.U },
                            action: () => i?.(e.id),
                        };
                    }),
                [t, i],
            );
        })({ applications: (0, I.A)(d), handleOpenGameShop: a }),
        x = l.useMemo(
            () =>
                (0, n.jsxs)(em.rX, {
                    children: [
                        null != s &&
                            (0, n.jsx)(em.Dr, {
                                id: "browse-collectibles-shop",
                                label: J.intl.string(J.t["5upuqx"]),
                                iconLeft: u.U,
                                leadingAccessory: { type: "icon", icon: u.U },
                                action: s,
                            }),
                        null != r &&
                            (0, n.jsx)(em.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: J.intl.string(J.t.lG6a5x),
                                iconLeft: eh.t,
                                leadingAccessory: { type: "icon", icon: eh.t },
                                action: r,
                            }),
                        null != a &&
                            h.map((e) => {
                                let { id: t, label: i, iconLeft: l, leadingAccessory: s, action: a } = e;
                                return (0, n.jsx)(
                                    em.Dr,
                                    { id: t, label: i, iconLeft: l, leadingAccessory: s, action: a },
                                    t,
                                );
                            }),
                    ],
                }),
            [s, a, r, h],
        );
    return (0, n.jsx)(ex.Y, {
        targetElementRef: o,
        position: "bottom",
        onRequestOpen: () => m(!0),
        onRequestClose: () => m(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(ep.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": J.intl.string(J.t.GdNkvG),
                children: x,
            });
        },
        children: (e) =>
            (0, n.jsx)(c.$, {
                buttonRef: o,
                variant: i,
                size: "sm",
                icon: g ? ej.P : ef.a,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var eS = i(509434),
    ey = i(365199),
    eb = i(975571),
    eE = i(993401);
let ew = eb.A.getArticleURL(q.MVz.CUSTOM_PROFILES_WISHLIST);
function eC(e) {
    let { isOwner: t, isWishlistPublic: i, onToggleVisibility: s } = e,
        a = l.useRef(null),
        { analyticsLocations: r } = (0, A.Ay)(f.A.USER_PROFILE_WISHLIST),
        d = l.useMemo(
            () =>
                t
                    ? (0, n.jsxs)(em.rX, {
                          children: [
                              (0, n.jsx)(em.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: J.intl.string(J.t.b2nFyA),
                                  subtext: J.intl.string(J.t.dw58pE),
                                  checked: i,
                                  action: s,
                              }),
                              (0, n.jsx)(em.bX, {}),
                              (0, n.jsx)(em.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: J.intl.string(J.t.hvVgAZ),
                                  icon: eS.I,
                                  trailingIndicator: { type: "icon", icon: eS.I },
                                  action: () => window.open(ew),
                              }),
                          ],
                      })
                    : null,
            [t, i, s],
        );
    return null == d
        ? null
        : (0, n.jsx)(A.f5, {
              value: r,
              children: (0, n.jsx)(ex.Y, {
                  targetElementRef: a,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, n.jsx)(ep.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": J.intl.string(J.t.GdNkvG),
                          children: d,
                      });
                  },
                  children: (e) =>
                      (0, n.jsx)(eE.q3, {
                          buttonRef: a,
                          icon: ey.j,
                          tooltipText: J.intl.string(J.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var eN = i(518477),
    eT = i(788868),
    eR = i(964350);
function ek(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: i, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, n.jsx)(ev, {
              title: J.intl.string(J.t["i/yzHs"]),
              handleOpenCollectiblesShop: i,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, n.jsx)(c.$, {
              variant: "secondary",
              size: "sm",
              icon: u.U,
              text: J.intl.string(J.t["i/yzHs"]),
              onClick: i,
          });
}
function eO(e) {
    let {
        socialLayerStorefrontApplicationIds: t,
        isWishlistPublic: i,
        handleOpenShop: l,
        handleOpenGameShop: s,
        handleAddNitroToWishlist: a,
        handleToggleWishlistVisibility: r,
    } = e;
    return (0, n.jsxs)("div", {
        className: eR.$s,
        children: [
            t.length > 0 || null != a
                ? (0, n.jsx)(ev, {
                      title: J.intl.string(J.t.SDUwM0),
                      handleOpenCollectiblesShop: l,
                      handleOpenGameShop: t.length > 0 ? s : void 0,
                      handleAddNitroToWishlist: a,
                      socialLayerStorefrontApplicationIds: t,
                  })
                : (0, n.jsx)(c.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: g.j,
                      text: J.intl.string(J.t.SDUwM0),
                      onClick: l,
                  }),
            (0, n.jsx)(eC, { isOwner: !0, isWishlistPublic: i, onToggleVisibility: r }),
        ],
    });
}
function eL(e) {
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
        text: J.intl.formatToPlainString(J.t["HDT/rg"], { applicationName: t.name }),
        onClick: a,
        onMouseDown: r,
    });
}
function eG(e) {
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
                    : (0, n.jsx)(eL, { application: t, handleOpenGameShop: a, handleOpenGameShopMouseDown: r });
            }
            return (0, n.jsx)(ev, {
                title: J.intl.string(J.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: a,
                socialLayerStorefrontApplicationIds: i,
            });
        }, [i, a, d, r]);
    return (0, n.jsxs)("div", {
        className: eR.y7,
        children: [
            (0, n.jsxs)("div", {
                className: eR.q6,
                children: [
                    (0, n.jsx)(m.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: J.intl.string(J.t.HGnLLT),
                    }),
                    (0, n.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: J.intl.string(J.t["/X1ny6"]),
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
                            text: J.intl.string(J.t.ZbS4QB),
                            onClick: s,
                        }),
                    o,
                ],
            }),
        ],
    });
}
function eP(e) {
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
        m = (0, d.bG)([D.A], () => D.A.getWishlistSettings(i.id, g)),
        { trackUserProfileWishlistAction: x } = (0, U.NJ)(),
        f = !1 === i.nsfwAllowed,
        [A, I] = l.useState(!0);
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
        S = (0, F.A)({ wishlistId: g, onAction: v, productLines: null != s ? (0, M.y9)(s) : null }),
        y = l.useCallback(() => {
            if (null == g) return;
            let e = A ? r.a.PRIVATE : r.a.PUBLIC;
            I(!A),
                O.A.updateWishlistVisibility(g, e),
                x({
                    wishlistId: g,
                    action: A ? eN.Mq.WISHLIST_TOGGLE_PRIVATE : eN.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != s ? (0, M.y9)(s) : void 0,
                });
        }, [g, A, x, s]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            !A &&
                (0, n.jsxs)("div", {
                    className: eR.lm,
                    children: [
                        (0, n.jsx)(p.G, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: J.intl.string(J.t.RX7D9h),
                        }),
                    ],
                }),
            A &&
                f &&
                (0, n.jsxs)("div", {
                    className: eR.lm,
                    children: [
                        (0, n.jsx)(j.m, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: J.intl.string(J.t.d78ChW),
                        }),
                    ],
                }),
            (0, n.jsxs)("div", {
                ref: S,
                className: eR.U1,
                children: [
                    (0, n.jsx)(h.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: J.intl.format(J.t.r6Y1Lg, { count: s.items.length }),
                    }),
                    t
                        ? (0, n.jsx)(eO, {
                              socialLayerStorefrontApplicationIds: a,
                              isWishlistPublic: A,
                              handleOpenShop: o,
                              handleOpenGameShop: c,
                              handleAddNitroToWishlist: u,
                              handleToggleWishlistVisibility: y,
                          })
                        : (0, n.jsx)(ek, {
                              socialLayerStorefrontApplicationIds: a,
                              handleOpenShop: o,
                              handleOpenGameShop: c,
                          }),
                ],
            }),
        ],
    });
}
function eM(e) {
    let { profileOwner: t } = e,
        i = l.useRef(null);
    (0, W.i)({ containerRef: i, itemType: "WISHLIST_ITEM" });
    let { wishlistId: s, currentUser: r } = (0, d.cf)([D.A, _.default], () => ({
            wishlistId: D.A.getFirstWishlistId(t.id),
            currentUser: _.default.getCurrentUser(),
        })),
        { analyticsLocations: c } = (0, A.Ay)(),
        u = r?.id === t.id,
        { wishlist: g, wasFetched: m, error: h } = (0, P.fw)({ wishlistId: s, userId: t.id });
    (0, G.A)(g);
    let x = (function (e) {
            let { wishlist: t, profileOwner: i, currentUser: n } = e,
                s = i.id === n?.id,
                a = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                r = (0, d.bG)([T.A], () => T.A.getDetectableIdsToApplicationIds()),
                o = l.useMemo(() => {
                    let e = [];
                    for (let i of t?.items ?? [])
                        (0, C.$)(i) && null != r[i.sku.applicationId] && e.push(i.sku.applicationId);
                    return e;
                }, [t, r]),
                c = (0, R.w)({ userIds: a }),
                u = (0, R.mn)({ userIds: a }),
                g = (0, R.tR)(a),
                m = (0, R.rY)(),
                h = (0, R.qx)(),
                x = (0, R.px)();
            return l.useMemo(
                () => (0, w.uniq)([...o, ...c, ...u, ...g, ...(s ? [...m, ...h, ...x] : [])].filter(N.Vq)),
                [o, c, u, g, m, h, x, s],
            );
        })({ wishlist: g, profileOwner: t, currentUser: r }),
        p = (0, L.Gh)("user-profile-modal-v2-wishlist"),
        j = l.useCallback(() => {
            (0, o.closeAllModals)(), (0, v.Cz)({ analyticsLocations: c, analyticsSource: f.A.USER_PROFILE_WISHLIST });
        }, [c]),
        I = l.useCallback((e) => {
            (0, k.G)({ applicationId: e });
        }, []),
        O = l.useCallback((e) => {
            (0, o.closeAllModals)(), (0, k.default)({ applicationId: e });
        }, []),
        { handleToggle: U } = (0, y.c)({
            userId: r?.id,
            skuId: eT.pe.TIER_2,
            nuxGraphic: p ? E.g : void 0,
            onNuxShow: S.D,
            location: f.A.USER_PROFILE_WISHLIST,
            onAddSuccess: b.w,
        });
    if (null == r || null != h) return null;
    let F = null == g || 0 === g.items.length;
    return (0, n.jsxs)(V.K, {
        scrollerRef: i,
        className: a()({ [eR.XG]: !F }),
        fade: !0,
        children: [
            F
                ? (0, n.jsx)(eG, {
                      isOwner: u,
                      socialLayerStorefrontApplicationIds: x,
                      handleOpenShop: j,
                      handleOpenGameShop: O,
                      handleOpenGameShopMouseDown: I,
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(H.A, { scrollerRef: i }),
                          (0, n.jsx)(eP, {
                              isOwner: u,
                              profileOwner: t,
                              wishlist: g,
                              socialLayerStorefrontApplicationIds: x,
                              handleOpenShop: j,
                              handleOpenGameShop: O,
                              handleAddNitroToWishlist: p && !(0, M.C3)(g, eT.pe.TIER_2) ? U : void 0,
                          }),
                          (0, n.jsx)(ei, { items: g.items, profileOwner: t, isOwner: u }),
                      ],
                  }),
            u &&
                (0, n.jsx)(eg, {
                    user: t,
                    wishlist: g,
                    hasFetchedWishlist: m,
                    analyticsLocations: c,
                    className: F ? eR._E : eR.HZ,
                }),
        ],
    });
}
