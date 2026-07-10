i.d(t, { A: () => eq });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    r = i.n(s),
    a = i(132500),
    o = i(777480),
    d = i(17928),
    c = i(192308),
    u = i(821609),
    g = i(34188),
    m = i(307301),
    h = i(534514),
    x = i(834730),
    p = i(825484),
    f = i(952270),
    j = i(885574),
    A = i(444927),
    I = i(793574),
    S = i(688810),
    v = i(429913),
    E = i(662388),
    y = i(895360),
    w = i(152472),
    b = i(267102),
    C = i(274681),
    T = i(400669);
i(321073);
var N = i(735438),
    R = i(721932),
    k = i(403362),
    O = i(832163),
    P = i(501838),
    L = i(44724),
    _ = i(808247),
    G = i(909536),
    M = i(673843),
    U = i(561794),
    D = i(855052),
    F = i(287809),
    W = i(183555),
    H = i(543572),
    V = i(600761),
    B = i(579950),
    Y = i(535089),
    z = i(128988),
    X = i(515054),
    q = i(688807),
    Q = i(575593),
    K = i(772427),
    $ = i(107563),
    J = i(840411),
    Z = i(711690),
    ee = i(248550),
    et = i(428262),
    ei = i(451395),
    en = i(823016),
    el = i(375708),
    es = i(999346);
function er(e) {
    let { item: t, index: i, wishlistId: l, onReorder: s, children: r } = e,
        { manageFocusOnReorder: a } = (0, en.r)();
    return (0, n.jsx)(ei.mG, {
        index: i,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": el.intl.formatToPlainString(el.t["7SnyMA"], { positionNumber: i + 1 }),
        onReorder: s,
        onEnd: () => a(String(t.skuId)),
        className: es.C,
        dropBeforeClassName: es.A,
        dropAfterClassName: es.Ze,
        draggingClassName: es.Id,
        children: (0, n.jsx)("div", { className: es.An, children: r }),
    });
}
let ea = l.memo(function (e) {
    let { item: t, index: i, profileOwner: s, showEditingControls: r, wishlistId: a, isDragging: o, onReorder: d } = e,
        { registerDragHandleRef: c } = (0, en.r)(),
        u = l.useMemo(
            () =>
                r
                    ? (0, n.jsx)(ei.jV, {
                          buttonRef: c(String(t.skuId)),
                          className: es.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [r, c, t.skuId],
        ),
        g = l.useMemo(
            () => (0, n.jsx)(ee.A, { item: t, wishlistOwner: s, wishlistId: a, isDragging: o, dragHandle: u }),
            [t, s, o, u, a],
        );
    return r
        ? (0, n.jsx)("li", {
              children: (0, n.jsx)(er, { item: t, index: i, wishlistId: a, onReorder: d, children: g }),
          })
        : (0, n.jsx)("li", { children: g });
});
function eo(e) {
    let { items: t, profileOwner: i, showEditingControls: s, isSortingNitroToFront: r } = e,
        a = F.default.getCurrentUser(),
        { defaultWishlistId: o } = (0, d.cf)([H.A], () => ({ defaultWishlistId: H.A.getFirstWishlistId(i.id) })),
        c = (0, K.rV)("UserProfileModalV2WishlistGrid"),
        u = l.useMemo(
            () => (c ? t : t.filter((e) => e.sku?.tenantMetadata?.collectibles?.type !== Q.R.PROFILE_FRAME)),
            [t, c],
        ),
        g = l.useMemo(() => (r ? (0, J.gm)(u) : u), [u, r]),
        { isDragging: m } = (0, q.V)((e) => ({ isDragging: e.isDragging() })),
        h = l.useCallback(
            (e, t) => {
                if (e === t || null == o || 0 === g.length || e < 0 || e >= g.length || t < 0 || t >= g.length) return;
                let i = $.A.getWishlist(o);
                if (null == i) return;
                let n = g[e],
                    { newWishlistData: l, previousSkuId: s, nextSkuId: r } = (0, J.Ap)(i, g, e, t);
                _.A.reorderWishlistItem(o, n.skuId, { previousSkuId: s, nextSkuId: r, newWishlistData: l });
            },
            [o, g],
        );
    if (null == a || null == o) return null;
    let x = (0, n.jsx)("ul", {
        className: es.Vg,
        children: g.map((e, t) =>
            (0, n.jsx)(
                ea,
                {
                    item: e,
                    index: t,
                    profileOwner: i,
                    showEditingControls: s,
                    wishlistId: o,
                    isDragging: m,
                    onReorder: h,
                },
                e.skuId,
            ),
        ),
    });
    return s ? (0, n.jsx)(en.B, { emptyListFallbackRef: null, children: x }) : x;
}
function ed(e) {
    let t = (0, Z.a)("UserProfileModalV2WishlistGrid");
    return (0, n.jsx)(eo, { ...e, isSortingNitroToFront: t });
}
function ec(e) {
    let t = F.default.getCurrentUser()?.id,
        i = null != t && t !== e.profileOwner.id,
        l = e.items.some((e) => et.Ay.isPremiumSku(e.skuId));
    return i && l ? (0, n.jsx)(ed, { ...e }) : (0, n.jsx)(eo, { ...e, isSortingNitroToFront: !1 });
}
var eu = i(815021),
    eg = i(554146),
    em = i(131607),
    eh = i(945810),
    ex = i(299679),
    ep = i(973912),
    ef = i(927813),
    ej = i(49999),
    eA = i(894533);
let eI = 90 * ef.A.Millis.DAY,
    eS = 90 * ef.A.Millis.DAY,
    ev = (0, eh.mj)({
        name: "2026-07-smag-wishlist-recommendations-dismiss-threshold",
        kind: "user",
        defaultConfig: { minItemsToDismiss: 1 },
        variations: { 0: { minItemsToDismiss: 1 }, 1: { minItemsToDismiss: 3 } },
    });
function eE(e) {
    let {
            user: t,
            wishlist: i,
            hasFetchedWishlist: s = !1,
            analyticsLocations: a,
            impressionSessionId: o,
            className: c,
        } = e,
        { minItemsToDismiss: u } = ev.useConfig({ location: "user_profile_wishlist_suggestions_grid" }),
        g = (i?.items.length ?? 0) >= u,
        [m, h] = l.useState(!1);
    !s || g || m || h(!0);
    let p = (0, d.bG)([H.A], () =>
            null != i ? new Date(H.A.getWishlistSettings(t.id, i.id)?.updated_at ?? 0).valueOf() : 0,
        ),
        [f, j] = (0, em.Wl)(
            eg.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
            { showAfterTimestamp: p + eS, cooldownDurationMs: eI },
            void 0,
            !0,
        ),
        A = f === eg.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
    return s && (!g || A || m)
        ? (0, n.jsxs)("div", {
              className: r()(eA.kL, c),
              children: [
                  (0, n.jsxs)("div", {
                      className: eA.wx,
                      children: [
                          (0, n.jsx)(x.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: el.intl.string(el.t["+GB8Kt"]),
                          }),
                          g &&
                              (0, n.jsx)(eu.J, {
                                  size: "xs",
                                  onClick: () => {
                                      h(!1), j(ej.i.USER_DISMISS);
                                  },
                              }),
                      ],
                  }),
                  (0, n.jsx)(ex.dB, {
                      newValue: {
                          impressionSessionId: o,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: i?.id,
                          analyticsLocations: a,
                      },
                      children: (0, n.jsx)(ep.A, {
                          userId: t.id,
                          wishlist: i,
                          className: r()(eA.Vg, eA.e6),
                          analyticsLocations: a,
                          numWishlistItemsToRecommend: 15,
                          maxWishlistItemsToShow: 8,
                      }),
                  }),
              ],
          })
        : null;
}
var ey = i(477782),
    ew = i(403581),
    eb = i(922016),
    eC = i(980707),
    eT = i(789645),
    eN = i(847374),
    eR = i(486020),
    ek = i(790817);
function eO(e) {
    let {
            title: t,
            variant: i = "secondary",
            handleOpenCollectiblesShop: s,
            handleOpenGameShop: r,
            handleAddNitroToWishlist: a,
            socialLayerStorefrontApplicationIds: o,
        } = e,
        d = l.useRef(null),
        [c, m] = l.useState(!1),
        h = (function (e) {
            let { applications: t, handleOpenGameShop: i } = e;
            return l.useMemo(
                () =>
                    t.filter(k.Vq).map((e) => {
                        let t = eR.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: el.intl.formatToPlainString(el.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != t ? () => (0, n.jsx)("img", { className: ek.I, src: t, alt: "" }) : g.U,
                            leadingAccessory: null != t ? { type: "image", src: t } : { type: "icon", icon: g.U },
                            action: () => i?.(e.id),
                        };
                    }),
                [t, i],
            );
        })({ applications: (0, v.A)(o), handleOpenGameShop: r }),
        x = l.useMemo(
            () =>
                (0, n.jsxs)(ey.rX, {
                    children: [
                        null != s &&
                            (0, n.jsx)(ey.Dr, {
                                id: "browse-collectibles-shop",
                                label: el.intl.string(el.t["5upuqx"]),
                                iconLeft: g.U,
                                leadingAccessory: { type: "icon", icon: g.U },
                                action: s,
                            }),
                        null != a &&
                            (0, n.jsx)(ey.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: el.intl.string(el.t.lG6a5x),
                                iconLeft: ew.t,
                                leadingAccessory: { type: "icon", icon: ew.t },
                                action: a,
                            }),
                        null != r &&
                            h.map((e) => {
                                let { id: t, label: i, iconLeft: l, leadingAccessory: s, action: r } = e;
                                return (0, n.jsx)(
                                    ey.Dr,
                                    { id: t, label: i, iconLeft: l, leadingAccessory: s, action: r },
                                    t,
                                );
                            }),
                    ],
                }),
            [s, r, a, h],
        );
    return (0, n.jsx)(eb.Y, {
        targetElementRef: d,
        position: "bottom",
        onRequestOpen: () => m(!0),
        onRequestClose: () => m(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(eC.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": el.intl.string(el.t.GdNkvG),
                children: x,
            });
        },
        children: (e) =>
            (0, n.jsx)(u.$, {
                buttonRef: d,
                variant: i,
                size: "sm",
                icon: c ? eT.P : eN.a,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var eP = i(509434),
    eL = i(365199),
    e_ = i(975571),
    eG = i(993401),
    eM = i(652215);
let eU = e_.A.getArticleURL(eM.MVz.CUSTOM_PROFILES_WISHLIST);
function eD(e) {
    let { isOwner: t, isWishlistPublic: i, onToggleVisibility: s } = e,
        r = l.useRef(null),
        { analyticsLocations: a } = (0, S.Ay)(I.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, n.jsxs)(ey.rX, {
                          children: [
                              (0, n.jsx)(ey.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: el.intl.string(el.t.b2nFyA),
                                  subtext: el.intl.string(el.t.dw58pE),
                                  checked: i,
                                  action: s,
                              }),
                              (0, n.jsx)(ey.bX, {}),
                              (0, n.jsx)(ey.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: el.intl.string(el.t.hvVgAZ),
                                  icon: eP.I,
                                  trailingIndicator: { type: "icon", icon: eP.I },
                                  action: () => window.open(eU),
                              }),
                          ],
                      })
                    : null,
            [t, i, s],
        );
    return null == o
        ? null
        : (0, n.jsx)(S.f5, {
              value: a,
              children: (0, n.jsx)(eb.Y, {
                  targetElementRef: r,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, n.jsx)(eC.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": el.intl.string(el.t.GdNkvG),
                          children: o,
                      });
                  },
                  children: (e) =>
                      (0, n.jsx)(eG.q3, {
                          buttonRef: r,
                          icon: eL.j,
                          tooltipText: el.intl.string(el.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var eF = i(518477),
    eW = i(202541),
    eH = i(614526);
function eV(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: i, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, n.jsx)(eO, {
              title: el.intl.string(el.t["i/yzHs"]),
              handleOpenCollectiblesShop: i,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, n.jsx)(u.$, {
              variant: "secondary",
              size: "sm",
              icon: g.U,
              text: el.intl.string(el.t["i/yzHs"]),
              onClick: i,
          });
}
function eB(e) {
    let {
        showEditingControls: t,
        socialLayerStorefrontApplicationIds: i,
        isWishlistPublic: l,
        handleOpenShop: s,
        handleOpenGameShop: r,
        handleAddNitroToWishlist: a,
        handleToggleWishlistVisibility: o,
    } = e;
    return (0, n.jsxs)("div", {
        className: eH.$s,
        children: [
            t &&
                (i.length > 0 || null != a
                    ? (0, n.jsx)(eO, {
                          title: el.intl.string(el.t.SDUwM0),
                          handleOpenCollectiblesShop: s,
                          handleOpenGameShop: i.length > 0 ? r : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: i,
                      })
                    : (0, n.jsx)(u.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: m.j,
                          text: el.intl.string(el.t.SDUwM0),
                          onClick: s,
                      })),
            (0, n.jsx)(eD, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function eY(e) {
    let { application: t, handleOpenGameShop: i, handleOpenGameShopMouseDown: s } = e,
        r = l.useCallback(() => {
            i(t.id);
        }, [t, i]),
        a = l.useCallback(() => {
            s(t.id);
        }, [t, s]);
    return (0, n.jsx)(u.$, {
        variant: "primary",
        size: "sm",
        icon: g.U,
        text: el.intl.formatToPlainString(el.t["HDT/rg"], { applicationName: t.name }),
        onClick: r,
        onMouseDown: a,
    });
}
function ez(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: i,
            handleOpenShop: s,
            handleOpenGameShop: r,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, b.Us)() === eM.BRT.OVERLAY,
        d = (0, v.A)(i),
        c = l.useMemo(() => {
            if (o || 0 === i.length) return null;
            let e = d.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === i.length) {
                let t = e[i[0]];
                return null == t
                    ? null
                    : (0, n.jsx)(eY, { application: t, handleOpenGameShop: r, handleOpenGameShopMouseDown: a });
            }
            return (0, n.jsx)(eO, {
                title: el.intl.string(el.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: r,
                socialLayerStorefrontApplicationIds: i,
            });
        }, [o, i, r, d, a]);
    return (0, n.jsxs)("div", {
        className: eH.y7,
        children: [
            (0, n.jsxs)("div", {
                className: eH.q6,
                children: [
                    (0, n.jsx)(h.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: el.intl.string(el.t.HGnLLT),
                    }),
                    (0, n.jsx)(x.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: el.intl.string(el.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != c) &&
                (0, n.jsxs)(p.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, n.jsx)(u.$, {
                                variant: "primary",
                                size: "sm",
                                icon: g.U,
                                text: el.intl.string(el.t.ZbS4QB),
                                onClick: s,
                            }),
                        c,
                    ],
                }),
        ],
    });
}
function eX(e) {
    let {
            isOwner: t,
            showEditingControls: i,
            profileOwner: s,
            wishlist: r,
            socialLayerStorefrontApplicationIds: a,
            handleOpenShop: c,
            handleOpenGameShop: u,
            handleAddNitroToWishlist: g,
        } = e,
        m = r.id,
        h = (0, d.bG)([H.A], () => H.A.getWishlistSettings(s.id, m)),
        { trackUserProfileWishlistAction: p } = (0, W.NJ)(),
        A = !1 === s.nsfwAllowed,
        [I, S] = l.useState(!0);
    l.useEffect(() => {
        h?.visibility != null && S(h.visibility === o.a.PUBLIC);
    }, [h?.visibility]);
    let v = l.useCallback(
            (e) => {
                let { wishlistId: t, action: i, productLines: n } = e;
                null != t && p({ wishlistId: t, action: i, productLines: n });
            },
            [p],
        ),
        E = (0, Y.A)({ wishlistId: m, onAction: v, productLines: null != r ? (0, D.y9)(r) : null }),
        y = l.useCallback(() => {
            if (null == m) return;
            let e = I ? o.a.PRIVATE : o.a.PUBLIC;
            S(!I),
                _.A.updateWishlistVisibility(m, e),
                p({
                    wishlistId: m,
                    action: I ? eF.Mq.WISHLIST_TOGGLE_PRIVATE : eF.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != r ? (0, D.y9)(r) : void 0,
                });
        }, [m, I, p, r]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            !I &&
                (0, n.jsxs)("div", {
                    className: eH.lm,
                    children: [
                        (0, n.jsx)(f.G, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(x.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: el.intl.string(el.t.RX7D9h),
                        }),
                    ],
                }),
            I &&
                A &&
                (0, n.jsxs)("div", {
                    className: eH.lm,
                    children: [
                        (0, n.jsx)(j.m, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(x.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: el.intl.string(el.t.d78ChW),
                        }),
                    ],
                }),
            (0, n.jsxs)("div", {
                ref: E,
                className: eH.U1,
                children: [
                    (0, n.jsx)(x.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: el.intl.format(el.t.r6Y1Lg, { count: r.items.length }),
                    }),
                    t
                        ? (0, n.jsx)(eB, {
                              showEditingControls: i,
                              socialLayerStorefrontApplicationIds: a,
                              isWishlistPublic: I,
                              handleOpenShop: c,
                              handleOpenGameShop: u,
                              handleAddNitroToWishlist: g,
                              handleToggleWishlistVisibility: y,
                          })
                        : (0, n.jsx)(eV, {
                              socialLayerStorefrontApplicationIds: a,
                              handleOpenShop: c,
                              handleOpenGameShop: u,
                          }),
                ],
            }),
        ],
    });
}
function eq(e) {
    let { profileOwner: t } = e,
        i = l.useRef(null);
    (0, V.i)({ containerRef: i, itemType: "WISHLIST_ITEM" });
    let { wishlistId: s, currentUser: o } = (0, d.cf)([H.A, F.default], () => ({
            wishlistId: H.A.getFirstWishlistId(t.id),
            currentUser: F.default.getCurrentUser(),
        })),
        { analyticsLocations: u } = (0, S.Ay)(),
        g = (0, B.A)(t.id),
        { wishlist: m, wasFetched: h, error: x } = (0, U.fw)({ wishlistId: s, userId: t.id });
    (0, M.A)(m);
    let p = (function (e) {
            let { wishlist: t, profileOwner: i, currentUser: n } = e,
                s = i.id === n?.id,
                r = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                a = (0, d.bG)([O.A], () => O.A.getDetectableIdsToApplicationIds()),
                o = l.useMemo(() => {
                    let e = [];
                    for (let i of t?.items ?? [])
                        (0, R.$)(i) && null != a[i.sku.applicationId] && e.push(i.sku.applicationId);
                    return e;
                }, [t, a]),
                c = (0, P.w)({ userIds: r }),
                u = (0, P.mn)({ userIds: r }),
                g = (0, P.tR)(r),
                m = (0, P.rY)(),
                h = (0, P.qx)(),
                x = (0, P.px)();
            return l.useMemo(
                () => (0, N.uniq)([...o, ...c, ...u, ...g, ...(s ? [...m, ...h, ...x] : [])].filter(k.Vq)),
                [o, c, u, g, m, h, x, s],
            );
        })({ wishlist: m, profileOwner: t, currentUser: o }),
        f = (0, G.Gh)("user-profile-modal-v2-wishlist"),
        j = (0, A.A)(() => (0, a.A)()),
        v = l.useCallback(() => {
            (0, c.closeAllModals)(), (0, E.Cz)({ analyticsLocations: u, analyticsSource: I.A.USER_PROFILE_WISHLIST });
        }, [u]),
        b = l.useCallback((e) => {
            (0, L.G)({ applicationId: e });
        }, []),
        _ = l.useCallback((e) => {
            (0, c.closeAllModals)(), (0, L.default)({ applicationId: e });
        }, []),
        { handleToggle: W } = (0, w.c)({
            userId: o?.id,
            skuId: eW.pe.TIER_2,
            nuxGraphic: f ? T.g : void 0,
            onNuxShow: y.D,
            location: I.A.USER_PROFILE_WISHLIST,
            onAddSuccess: C.w,
        });
    if (null == o || null != x) return null;
    let Y = null == m || 0 === m.items.length;
    return (0, n.jsxs)(X.K, {
        scrollerRef: i,
        className: r()({ [eH.XG]: !Y }),
        fade: !0,
        children: [
            Y
                ? (0, n.jsx)(ez, {
                      showEditingControls: g,
                      socialLayerStorefrontApplicationIds: p,
                      handleOpenShop: v,
                      handleOpenGameShop: _,
                      handleOpenGameShopMouseDown: b,
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(z.A, { scrollerRef: i }),
                          (0, n.jsx)(eX, {
                              isOwner: o?.id === t.id,
                              showEditingControls: g,
                              profileOwner: t,
                              wishlist: m,
                              socialLayerStorefrontApplicationIds: p,
                              handleOpenShop: v,
                              handleOpenGameShop: _,
                              handleAddNitroToWishlist: f && !(0, D.C3)(m, eW.pe.TIER_2) ? W : void 0,
                          }),
                          (0, n.jsx)(ec, { items: m.items, profileOwner: t, showEditingControls: g }),
                      ],
                  }),
            g &&
                (0, n.jsx)(eE, {
                    user: t,
                    wishlist: m,
                    hasFetchedWishlist: h,
                    analyticsLocations: u,
                    impressionSessionId: j,
                    className: Y ? eH._E : eH.HZ,
                }),
        ],
    });
}
