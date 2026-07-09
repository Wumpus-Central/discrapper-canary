i.d(t, { A: () => eV });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(132500),
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
    L = i(501838),
    P = i(44724),
    _ = i(808247),
    G = i(909536),
    M = i(673843),
    U = i(561794),
    D = i(855052),
    W = i(287809),
    F = i(183555),
    H = i(543572),
    V = i(600761),
    B = i(579950),
    Y = i(535089),
    z = i(128988),
    X = i(515054),
    q = i(688807),
    Q = i(575593),
    K = i(772427),
    $ = i(107563);
i(993046), i(872472), i(394300);
var J = i(652215),
    Z = i(248550),
    ee = i(451395),
    et = i(823016),
    ei = i(375708),
    en = i(999346);
function el(e) {
    let { item: t, index: i, wishlistId: l, onReorder: s, children: a } = e,
        { manageFocusOnReorder: r } = (0, et.r)();
    return (0, n.jsx)(ee.mG, {
        index: i,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": ei.intl.formatToPlainString(ei.t["7SnyMA"], { positionNumber: i + 1 }),
        onReorder: s,
        onEnd: () => r(String(t.skuId)),
        className: en.C,
        dropBeforeClassName: en.A,
        dropAfterClassName: en.Ze,
        draggingClassName: en.Id,
        children: (0, n.jsx)("div", { className: en.An, children: a }),
    });
}
let es = l.memo(function (e) {
    let { item: t, index: i, profileOwner: s, showEditingControls: a, wishlistId: r, isDragging: o, onReorder: d } = e,
        { registerDragHandleRef: c } = (0, et.r)(),
        u = l.useMemo(
            () =>
                a
                    ? (0, n.jsx)(ee.jV, {
                          buttonRef: c(String(t.skuId)),
                          className: en.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, c, t.skuId],
        ),
        g = l.useMemo(
            () => (0, n.jsx)(Z.A, { item: t, wishlistOwner: s, wishlistId: r, isDragging: o, dragHandle: u }),
            [t, s, o, u, r],
        );
    return a
        ? (0, n.jsx)("li", {
              children: (0, n.jsx)(el, { item: t, index: i, wishlistId: r, onReorder: d, children: g }),
          })
        : (0, n.jsx)("li", { children: g });
});
function ea(e) {
    let { items: t, profileOwner: i, showEditingControls: s } = e,
        a = W.default.getCurrentUser(),
        { defaultWishlistId: r } = (0, d.cf)([H.A], () => ({ defaultWishlistId: H.A.getFirstWishlistId(i.id) })),
        o = (0, K.rV)("UserProfileModalV2WishlistGrid"),
        c = l.useMemo(
            () => (o ? t : t.filter((e) => e.sku?.tenantMetadata?.collectibles?.type !== Q.R.PROFILE_FRAME)),
            [t, o],
        ),
        { isDragging: u } = (0, q.V)((e) => ({ isDragging: e.isDragging() })),
        g = l.useCallback(
            (e, t) => {
                if (e === t || null == r || 0 === c.length || e < 0 || e >= c.length || t < 0 || t >= c.length) return;
                let i = $.A.getWishlist(r);
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
                _.A.reorderWishlistItem(r, n.skuId, { previousSkuId: s, nextSkuId: a, newWishlistData: l });
            },
            [r, c],
        );
    if (null == a || null == r) return null;
    let m = (0, n.jsx)("ul", {
        className: en.Vg,
        children: c.map((e, t) =>
            (0, n.jsx)(
                es,
                {
                    item: e,
                    index: t,
                    profileOwner: i,
                    showEditingControls: s,
                    wishlistId: r,
                    isDragging: u,
                    onReorder: g,
                },
                e.skuId,
            ),
        ),
    });
    return s ? (0, n.jsx)(et.B, { emptyListFallbackRef: null, children: m }) : m;
}
var er = i(815021),
    eo = i(554146),
    ed = i(131607),
    ec = i(945810),
    eu = i(299679),
    eg = i(973912),
    em = i(927813),
    eh = i(49999),
    ex = i(894533);
let ep = 90 * em.A.Millis.DAY,
    ef = 90 * em.A.Millis.DAY,
    ej = (0, ec.mj)({
        name: "2026-07-smag-wishlist-recommendations-dismiss-threshold",
        kind: "user",
        defaultConfig: { minItemsToDismiss: 1 },
        variations: { 0: { minItemsToDismiss: 1 }, 1: { minItemsToDismiss: 3 } },
    });
function eA(e) {
    let {
            user: t,
            wishlist: i,
            hasFetchedWishlist: s = !1,
            analyticsLocations: r,
            impressionSessionId: o,
            className: c,
        } = e,
        { minItemsToDismiss: u } = ej.useConfig({ location: "user_profile_wishlist_suggestions_grid" }),
        g = (i?.items.length ?? 0) >= u,
        [m, h] = l.useState(!1);
    !s || g || m || h(!0);
    let p = (0, d.bG)([H.A], () =>
            null != i ? new Date(H.A.getWishlistSettings(t.id, i.id)?.updated_at ?? 0).valueOf() : 0,
        ),
        [f, j] = (0, ed.Wl)(
            eo.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
            { showAfterTimestamp: p + ef, cooldownDurationMs: ep },
            void 0,
            !0,
        ),
        A = f === eo.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
    return s && (!g || A || m)
        ? (0, n.jsxs)("div", {
              className: a()(ex.kL, c),
              children: [
                  (0, n.jsxs)("div", {
                      className: ex.wx,
                      children: [
                          (0, n.jsx)(x.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: ei.intl.string(ei.t["+GB8Kt"]),
                          }),
                          g &&
                              (0, n.jsx)(er.J, {
                                  size: "xs",
                                  onClick: () => {
                                      h(!1), j(eh.i.USER_DISMISS);
                                  },
                              }),
                      ],
                  }),
                  (0, n.jsx)(eu.dB, {
                      newValue: {
                          impressionSessionId: o,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: i?.id,
                          analyticsLocations: r,
                      },
                      children: (0, n.jsx)(eg.A, {
                          userId: t.id,
                          wishlist: i,
                          className: a()(ex.Vg, ex.e6),
                          analyticsLocations: r,
                          numWishlistItemsToRecommend: 15,
                          maxWishlistItemsToShow: 8,
                      }),
                  }),
              ],
          })
        : null;
}
var eI = i(477782),
    eS = i(403581),
    ev = i(922016),
    eE = i(980707),
    ey = i(789645),
    ew = i(847374),
    eb = i(486020),
    eC = i(790817);
function eT(e) {
    let {
            title: t,
            variant: i = "secondary",
            handleOpenCollectiblesShop: s,
            handleOpenGameShop: a,
            handleAddNitroToWishlist: r,
            socialLayerStorefrontApplicationIds: o,
        } = e,
        d = l.useRef(null),
        [c, m] = l.useState(!1),
        h = (function (e) {
            let { applications: t, handleOpenGameShop: i } = e;
            return l.useMemo(
                () =>
                    t.filter(k.Vq).map((e) => {
                        let t = eb.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: ei.intl.formatToPlainString(ei.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != t ? () => (0, n.jsx)("img", { className: eC.I, src: t, alt: "" }) : g.U,
                            leadingAccessory: null != t ? { type: "image", src: t } : { type: "icon", icon: g.U },
                            action: () => i?.(e.id),
                        };
                    }),
                [t, i],
            );
        })({ applications: (0, v.A)(o), handleOpenGameShop: a }),
        x = l.useMemo(
            () =>
                (0, n.jsxs)(eI.rX, {
                    children: [
                        null != s &&
                            (0, n.jsx)(eI.Dr, {
                                id: "browse-collectibles-shop",
                                label: ei.intl.string(ei.t["5upuqx"]),
                                iconLeft: g.U,
                                leadingAccessory: { type: "icon", icon: g.U },
                                action: s,
                            }),
                        null != r &&
                            (0, n.jsx)(eI.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: ei.intl.string(ei.t.lG6a5x),
                                iconLeft: eS.t,
                                leadingAccessory: { type: "icon", icon: eS.t },
                                action: r,
                            }),
                        null != a &&
                            h.map((e) => {
                                let { id: t, label: i, iconLeft: l, leadingAccessory: s, action: a } = e;
                                return (0, n.jsx)(
                                    eI.Dr,
                                    { id: t, label: i, iconLeft: l, leadingAccessory: s, action: a },
                                    t,
                                );
                            }),
                    ],
                }),
            [s, a, r, h],
        );
    return (0, n.jsx)(ev.Y, {
        targetElementRef: d,
        position: "bottom",
        onRequestOpen: () => m(!0),
        onRequestClose: () => m(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(eE.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": ei.intl.string(ei.t.GdNkvG),
                children: x,
            });
        },
        children: (e) =>
            (0, n.jsx)(u.$, {
                buttonRef: d,
                variant: i,
                size: "sm",
                icon: c ? ey.P : ew.a,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var eN = i(509434),
    eR = i(365199),
    ek = i(975571),
    eO = i(993401);
let eL = ek.A.getArticleURL(J.MVz.CUSTOM_PROFILES_WISHLIST);
function eP(e) {
    let { isOwner: t, isWishlistPublic: i, onToggleVisibility: s } = e,
        a = l.useRef(null),
        { analyticsLocations: r } = (0, S.Ay)(I.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, n.jsxs)(eI.rX, {
                          children: [
                              (0, n.jsx)(eI.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: ei.intl.string(ei.t.b2nFyA),
                                  subtext: ei.intl.string(ei.t.dw58pE),
                                  checked: i,
                                  action: s,
                              }),
                              (0, n.jsx)(eI.bX, {}),
                              (0, n.jsx)(eI.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: ei.intl.string(ei.t.hvVgAZ),
                                  icon: eN.I,
                                  trailingIndicator: { type: "icon", icon: eN.I },
                                  action: () => window.open(eL),
                              }),
                          ],
                      })
                    : null,
            [t, i, s],
        );
    return null == o
        ? null
        : (0, n.jsx)(S.f5, {
              value: r,
              children: (0, n.jsx)(ev.Y, {
                  targetElementRef: a,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, n.jsx)(eE.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": ei.intl.string(ei.t.GdNkvG),
                          children: o,
                      });
                  },
                  children: (e) =>
                      (0, n.jsx)(eO.q3, {
                          buttonRef: a,
                          icon: eR.j,
                          tooltipText: ei.intl.string(ei.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var e_ = i(518477),
    eG = i(202541),
    eM = i(614526);
function eU(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: i, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, n.jsx)(eT, {
              title: ei.intl.string(ei.t["i/yzHs"]),
              handleOpenCollectiblesShop: i,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, n.jsx)(u.$, {
              variant: "secondary",
              size: "sm",
              icon: g.U,
              text: ei.intl.string(ei.t["i/yzHs"]),
              onClick: i,
          });
}
function eD(e) {
    let {
        showEditingControls: t,
        socialLayerStorefrontApplicationIds: i,
        isWishlistPublic: l,
        handleOpenShop: s,
        handleOpenGameShop: a,
        handleAddNitroToWishlist: r,
        handleToggleWishlistVisibility: o,
    } = e;
    return (0, n.jsxs)("div", {
        className: eM.$s,
        children: [
            t &&
                (i.length > 0 || null != r
                    ? (0, n.jsx)(eT, {
                          title: ei.intl.string(ei.t.SDUwM0),
                          handleOpenCollectiblesShop: s,
                          handleOpenGameShop: i.length > 0 ? a : void 0,
                          handleAddNitroToWishlist: r,
                          socialLayerStorefrontApplicationIds: i,
                      })
                    : (0, n.jsx)(u.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: m.j,
                          text: ei.intl.string(ei.t.SDUwM0),
                          onClick: s,
                      })),
            (0, n.jsx)(eP, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function eW(e) {
    let { application: t, handleOpenGameShop: i, handleOpenGameShopMouseDown: s } = e,
        a = l.useCallback(() => {
            i(t.id);
        }, [t, i]),
        r = l.useCallback(() => {
            s(t.id);
        }, [t, s]);
    return (0, n.jsx)(u.$, {
        variant: "primary",
        size: "sm",
        icon: g.U,
        text: ei.intl.formatToPlainString(ei.t["HDT/rg"], { applicationName: t.name }),
        onClick: a,
        onMouseDown: r,
    });
}
function eF(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: i,
            handleOpenShop: s,
            handleOpenGameShop: a,
            handleOpenGameShopMouseDown: r,
        } = e,
        o = (0, b.Us)() === J.BRT.OVERLAY,
        d = (0, v.A)(i),
        c = l.useMemo(() => {
            if (o || 0 === i.length) return null;
            let e = d.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === i.length) {
                let t = e[i[0]];
                return null == t
                    ? null
                    : (0, n.jsx)(eW, { application: t, handleOpenGameShop: a, handleOpenGameShopMouseDown: r });
            }
            return (0, n.jsx)(eT, {
                title: ei.intl.string(ei.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: a,
                socialLayerStorefrontApplicationIds: i,
            });
        }, [o, i, a, d, r]);
    return (0, n.jsxs)("div", {
        className: eM.y7,
        children: [
            (0, n.jsxs)("div", {
                className: eM.q6,
                children: [
                    (0, n.jsx)(h.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: ei.intl.string(ei.t.HGnLLT),
                    }),
                    (0, n.jsx)(x.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: ei.intl.string(ei.t["/X1ny6"]),
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
                                text: ei.intl.string(ei.t.ZbS4QB),
                                onClick: s,
                            }),
                        c,
                    ],
                }),
        ],
    });
}
function eH(e) {
    let {
            isOwner: t,
            showEditingControls: i,
            profileOwner: s,
            wishlist: a,
            socialLayerStorefrontApplicationIds: r,
            handleOpenShop: c,
            handleOpenGameShop: u,
            handleAddNitroToWishlist: g,
        } = e,
        m = a.id,
        h = (0, d.bG)([H.A], () => H.A.getWishlistSettings(s.id, m)),
        { trackUserProfileWishlistAction: p } = (0, F.NJ)(),
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
        E = (0, Y.A)({ wishlistId: m, onAction: v, productLines: null != a ? (0, D.y9)(a) : null }),
        y = l.useCallback(() => {
            if (null == m) return;
            let e = I ? o.a.PRIVATE : o.a.PUBLIC;
            S(!I),
                _.A.updateWishlistVisibility(m, e),
                p({
                    wishlistId: m,
                    action: I ? e_.Mq.WISHLIST_TOGGLE_PRIVATE : e_.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != a ? (0, D.y9)(a) : void 0,
                });
        }, [m, I, p, a]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            !I &&
                (0, n.jsxs)("div", {
                    className: eM.lm,
                    children: [
                        (0, n.jsx)(f.G, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(x.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: ei.intl.string(ei.t.RX7D9h),
                        }),
                    ],
                }),
            I &&
                A &&
                (0, n.jsxs)("div", {
                    className: eM.lm,
                    children: [
                        (0, n.jsx)(j.m, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(x.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: ei.intl.string(ei.t.d78ChW),
                        }),
                    ],
                }),
            (0, n.jsxs)("div", {
                ref: E,
                className: eM.U1,
                children: [
                    (0, n.jsx)(x.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: ei.intl.format(ei.t.r6Y1Lg, { count: a.items.length }),
                    }),
                    t
                        ? (0, n.jsx)(eD, {
                              showEditingControls: i,
                              socialLayerStorefrontApplicationIds: r,
                              isWishlistPublic: I,
                              handleOpenShop: c,
                              handleOpenGameShop: u,
                              handleAddNitroToWishlist: g,
                              handleToggleWishlistVisibility: y,
                          })
                        : (0, n.jsx)(eU, {
                              socialLayerStorefrontApplicationIds: r,
                              handleOpenShop: c,
                              handleOpenGameShop: u,
                          }),
                ],
            }),
        ],
    });
}
function eV(e) {
    let { profileOwner: t } = e,
        i = l.useRef(null);
    (0, V.i)({ containerRef: i, itemType: "WISHLIST_ITEM" });
    let { wishlistId: s, currentUser: o } = (0, d.cf)([H.A, W.default], () => ({
            wishlistId: H.A.getFirstWishlistId(t.id),
            currentUser: W.default.getCurrentUser(),
        })),
        { analyticsLocations: u } = (0, S.Ay)(),
        g = (0, B.A)(t.id),
        { wishlist: m, wasFetched: h, error: x } = (0, U.fw)({ wishlistId: s, userId: t.id });
    (0, M.A)(m);
    let p = (function (e) {
            let { wishlist: t, profileOwner: i, currentUser: n } = e,
                s = i.id === n?.id,
                a = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                r = (0, d.bG)([O.A], () => O.A.getDetectableIdsToApplicationIds()),
                o = l.useMemo(() => {
                    let e = [];
                    for (let i of t?.items ?? [])
                        (0, R.$)(i) && null != r[i.sku.applicationId] && e.push(i.sku.applicationId);
                    return e;
                }, [t, r]),
                c = (0, L.w)({ userIds: a }),
                u = (0, L.mn)({ userIds: a }),
                g = (0, L.tR)(a),
                m = (0, L.rY)(),
                h = (0, L.qx)(),
                x = (0, L.px)();
            return l.useMemo(
                () => (0, N.uniq)([...o, ...c, ...u, ...g, ...(s ? [...m, ...h, ...x] : [])].filter(k.Vq)),
                [o, c, u, g, m, h, x, s],
            );
        })({ wishlist: m, profileOwner: t, currentUser: o }),
        f = (0, G.Gh)("user-profile-modal-v2-wishlist"),
        j = (0, A.A)(() => (0, r.A)()),
        v = l.useCallback(() => {
            (0, c.closeAllModals)(), (0, E.Cz)({ analyticsLocations: u, analyticsSource: I.A.USER_PROFILE_WISHLIST });
        }, [u]),
        b = l.useCallback((e) => {
            (0, P.G)({ applicationId: e });
        }, []),
        _ = l.useCallback((e) => {
            (0, c.closeAllModals)(), (0, P.default)({ applicationId: e });
        }, []),
        { handleToggle: F } = (0, w.c)({
            userId: o?.id,
            skuId: eG.pe.TIER_2,
            nuxGraphic: f ? T.g : void 0,
            onNuxShow: y.D,
            location: I.A.USER_PROFILE_WISHLIST,
            onAddSuccess: C.w,
        });
    if (null == o || null != x) return null;
    let Y = null == m || 0 === m.items.length;
    return (0, n.jsxs)(X.K, {
        scrollerRef: i,
        className: a()({ [eM.XG]: !Y }),
        fade: !0,
        children: [
            Y
                ? (0, n.jsx)(eF, {
                      showEditingControls: g,
                      socialLayerStorefrontApplicationIds: p,
                      handleOpenShop: v,
                      handleOpenGameShop: _,
                      handleOpenGameShopMouseDown: b,
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(z.A, { scrollerRef: i }),
                          (0, n.jsx)(eH, {
                              isOwner: o?.id === t.id,
                              showEditingControls: g,
                              profileOwner: t,
                              wishlist: m,
                              socialLayerStorefrontApplicationIds: p,
                              handleOpenShop: v,
                              handleOpenGameShop: _,
                              handleAddNitroToWishlist: f && !(0, D.C3)(m, eG.pe.TIER_2) ? F : void 0,
                          }),
                          (0, n.jsx)(ea, { items: m.items, profileOwner: t, showEditingControls: g }),
                      ],
                  }),
            g &&
                (0, n.jsx)(eA, {
                    user: t,
                    wishlist: m,
                    hasFetchedWishlist: h,
                    analyticsLocations: u,
                    impressionSessionId: j,
                    className: Y ? eM._E : eM.HZ,
                }),
        ],
    });
}
