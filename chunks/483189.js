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
    A = i(885574),
    f = i(793574),
    j = i(688810),
    I = i(429913),
    v = i(693477),
    S = i(895360),
    b = i(152472),
    y = i(274681),
    E = i(400669),
    N = i(832163);
i(321073);
var C = i(735438),
    w = i(721932),
    T = i(403362),
    R = i(501838),
    O = i(44724),
    k = i(808247),
    L = i(909536),
    M = i(673843),
    _ = i(594832),
    G = i(855052),
    P = i(287809),
    D = i(183555),
    U = i(841595),
    F = i(600761),
    W = i(535089),
    H = i(128988),
    B = i(515054),
    V = i(688807),
    z = i(107563);
i(872472), i(394300);
var Y = i(652215),
    X = i(647924),
    q = i(451395),
    K = i(823016),
    Z = i(985018),
    Q = i(130821);
function J(e) {
    let { item: t, index: i, wishlistId: l, onReorder: s, children: a } = e,
        { manageFocusOnReorder: r } = (0, K.r)();
    return (0, n.jsx)(q.mG, {
        index: i,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": Z.intl.formatToPlainString(Z.t["7SnyMA"], { positionNumber: i + 1 }),
        onReorder: s,
        onEnd: () => r(String(t.skuId)),
        className: Q.C,
        dropBeforeClassName: Q.A,
        dropAfterClassName: Q.Ze,
        draggingClassName: Q.Id,
        children: (0, n.jsx)("div", { className: Q.An, children: a }),
    });
}
let $ = l.memo(function (e) {
    let { item: t, index: i, profileOwner: s, isOwner: a, wishlistId: r, isDragging: d, onReorder: o } = e,
        { registerDragHandleRef: c } = (0, K.r)(),
        u = l.useMemo(
            () =>
                a
                    ? (0, n.jsx)(q.jV, {
                          buttonRef: c(String(t.skuId)),
                          className: Q.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, c, t.skuId],
        ),
        g = l.useMemo(
            () => (0, n.jsx)(X.A, { item: t, wishlistOwner: s, wishlistId: r, isDragging: d, dragHandle: u }),
            [t, s, d, u, r],
        );
    return a
        ? (0, n.jsx)("li", { children: (0, n.jsx)(J, { item: t, index: i, wishlistId: r, onReorder: o, children: g }) })
        : (0, n.jsx)("li", { children: g });
});
function ee(e) {
    let { items: t, profileOwner: i, isOwner: s } = e,
        a = P.default.getCurrentUser(),
        { defaultWishlistId: r } = (0, d.cf)([U.A], () => ({ defaultWishlistId: U.A.getFirstWishlistId(i.id) })),
        { isDragging: o } = (0, V.V)((e) => ({ isDragging: e.isDragging() })),
        c = l.useCallback(
            (e, i) => {
                if (e === i || null == r || 0 === t.length || e < 0 || e >= t.length || i < 0 || i >= t.length) return;
                let n = z.A.getWishlist(r);
                if (null == n) return;
                let l = t[e],
                    {
                        newWishlistData: s,
                        previousSkuId: a,
                        nextSkuId: d,
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
                    })(n, t, e, i);
                k.A.reorderWishlistItem(r, l.skuId, { previousSkuId: a, nextSkuId: d, newWishlistData: s });
            },
            [r, t],
        );
    if (null == a || null == r) return null;
    let u = (0, n.jsx)("ul", {
        className: Q.Vg,
        children: t.map((e, t) =>
            (0, n.jsx)(
                $,
                { item: e, index: t, profileOwner: i, isOwner: s, wishlistId: r, isDragging: o, onReorder: c },
                e.skuId,
            ),
        ),
    });
    return s ? (0, n.jsx)(K.B, { emptyListFallbackRef: null, children: u }) : u;
}
var et = i(815021),
    ei = i(554146),
    en = i(932001),
    el = i(973912),
    es = i(927813),
    ea = i(49999),
    er = i(294085);
let ed = 90 * es.A.Millis.DAY,
    eo = 90 * es.A.Millis.DAY;
function ec(e) {
    let { user: t, wishlist: i, hasFetchedWishlist: s = !1, analyticsLocations: r, className: o } = e,
        c = (i?.items.length ?? 0) > 0,
        [u, g] = l.useState(!1);
    !s || c || u || g(!0);
    let m = (0, d.bG)([U.A], () =>
            null != i ? new Date(U.A.getWishlistSettings(t.id, i.id)?.updated_at ?? 0).valueOf() : 0,
        ),
        [x, p] = (0, en.Wl)(
            ei.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
            { showAfterTimestamp: m + eo, cooldownDurationMs: ed },
            void 0,
            !0,
        ),
        A = x === ei.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
    return s && (!c || A || u)
        ? (0, n.jsxs)("div", {
              className: a()(er.kL, o),
              children: [
                  (0, n.jsxs)("div", {
                      className: er.wx,
                      children: [
                          (0, n.jsx)(h.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: Z.intl.string(Z.t["+GB8Kt"]),
                          }),
                          c &&
                              (0, n.jsx)(et.J, {
                                  size: "xs",
                                  onClick: () => {
                                      g(!1), p(ea.i.USER_DISMISS);
                                  },
                              }),
                      ],
                  }),
                  (0, n.jsx)(el.A, {
                      userId: t.id,
                      wishlist: i,
                      className: a()(er.Vg, er.e6),
                      analyticsLocations: r,
                      numWishlistItemsToRecommend: 15,
                      maxWishlistItemsToShow: 8,
                  }),
              ],
          })
        : null;
}
var eu = i(477782),
    eg = i(403581),
    em = i(922016),
    eh = i(550079),
    ex = i(789645),
    ep = i(847374),
    eA = i(486020),
    ef = i(420641);
function ej(e) {
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
                    t.filter(T.Vq).map((e) => {
                        let t = eA.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: Z.intl.formatToPlainString(Z.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != t ? () => (0, n.jsx)("img", { className: ef.I, src: t, alt: "" }) : u.U,
                            leadingAccessory: null != t ? { type: "image", src: t } : { type: "icon", icon: u.U },
                            action: () => i?.(e.id),
                        };
                    }),
                [t, i],
            );
        })({ applications: (0, I.A)(d), handleOpenGameShop: a }),
        x = l.useMemo(
            () =>
                (0, n.jsxs)(eu.rX, {
                    children: [
                        null != s &&
                            (0, n.jsx)(eu.Dr, {
                                id: "browse-collectibles-shop",
                                label: Z.intl.string(Z.t["5upuqx"]),
                                iconLeft: u.U,
                                leadingAccessory: { type: "icon", icon: u.U },
                                action: s,
                            }),
                        null != r &&
                            (0, n.jsx)(eu.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: Z.intl.string(Z.t.lG6a5x),
                                iconLeft: eg.t,
                                leadingAccessory: { type: "icon", icon: eg.t },
                                action: r,
                            }),
                        null != a &&
                            h.map((e) => {
                                let { id: t, label: i, iconLeft: l, leadingAccessory: s, action: a } = e;
                                return (0, n.jsx)(
                                    eu.Dr,
                                    { id: t, label: i, iconLeft: l, leadingAccessory: s, action: a },
                                    t,
                                );
                            }),
                    ],
                }),
            [s, a, r, h],
        );
    return (0, n.jsx)(em.Y, {
        targetElementRef: o,
        position: "bottom",
        onRequestOpen: () => m(!0),
        onRequestClose: () => m(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(eh.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": Z.intl.string(Z.t.GdNkvG),
                children: x,
            });
        },
        children: (e) =>
            (0, n.jsx)(c.$, {
                buttonRef: o,
                variant: i,
                size: "sm",
                icon: g ? ex.P : ep.a,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var eI = i(509434),
    ev = i(365199),
    eS = i(975571),
    eb = i(993401);
let ey = eS.A.getArticleURL(Y.MVz.CUSTOM_PROFILES_WISHLIST);
function eE(e) {
    let { isOwner: t, isWishlistPublic: i, onToggleVisibility: s } = e,
        a = l.useRef(null),
        { analyticsLocations: r } = (0, j.Ay)(f.A.USER_PROFILE_WISHLIST),
        d = l.useMemo(
            () =>
                t
                    ? (0, n.jsxs)(eu.rX, {
                          children: [
                              (0, n.jsx)(eu.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: Z.intl.string(Z.t.b2nFyA),
                                  subtext: Z.intl.string(Z.t.dw58pE),
                                  checked: i,
                                  action: s,
                              }),
                              (0, n.jsx)(eu.bX, {}),
                              (0, n.jsx)(eu.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: Z.intl.string(Z.t.hvVgAZ),
                                  icon: eI.I,
                                  trailingIndicator: { type: "icon", icon: eI.I },
                                  action: () => window.open(ey),
                              }),
                          ],
                      })
                    : null,
            [t, i, s],
        );
    return null == d
        ? null
        : (0, n.jsx)(j.f5, {
              value: r,
              children: (0, n.jsx)(em.Y, {
                  targetElementRef: a,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, n.jsx)(eh.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": Z.intl.string(Z.t.GdNkvG),
                          children: d,
                      });
                  },
                  children: (e) =>
                      (0, n.jsx)(eb.q3, {
                          buttonRef: a,
                          icon: ev.j,
                          tooltipText: Z.intl.string(Z.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var eN = i(518477),
    eC = i(788868),
    ew = i(964350);
function eT(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: i, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, n.jsx)(ej, {
              title: Z.intl.string(Z.t["i/yzHs"]),
              handleOpenCollectiblesShop: i,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, n.jsx)(c.$, {
              variant: "secondary",
              size: "sm",
              icon: u.U,
              text: Z.intl.string(Z.t["i/yzHs"]),
              onClick: i,
          });
}
function eR(e) {
    let {
        socialLayerStorefrontApplicationIds: t,
        isWishlistPublic: i,
        handleOpenShop: l,
        handleOpenGameShop: s,
        handleAddNitroToWishlist: a,
        handleToggleWishlistVisibility: r,
    } = e;
    return (0, n.jsxs)("div", {
        className: ew.$s,
        children: [
            t.length > 0 || null != a
                ? (0, n.jsx)(ej, {
                      title: Z.intl.string(Z.t.SDUwM0),
                      handleOpenCollectiblesShop: l,
                      handleOpenGameShop: t.length > 0 ? s : void 0,
                      handleAddNitroToWishlist: a,
                      socialLayerStorefrontApplicationIds: t,
                  })
                : (0, n.jsx)(c.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: g.j,
                      text: Z.intl.string(Z.t.SDUwM0),
                      onClick: l,
                  }),
            (0, n.jsx)(eE, { isOwner: !0, isWishlistPublic: i, onToggleVisibility: r }),
        ],
    });
}
function eO(e) {
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
        text: Z.intl.formatToPlainString(Z.t["HDT/rg"], { applicationName: t.name }),
        onClick: a,
        onMouseDown: r,
    });
}
function ek(e) {
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
                    : (0, n.jsx)(eO, { application: t, handleOpenGameShop: a, handleOpenGameShopMouseDown: r });
            }
            return (0, n.jsx)(ej, {
                title: Z.intl.string(Z.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: a,
                socialLayerStorefrontApplicationIds: i,
            });
        }, [i, a, d, r]);
    return (0, n.jsxs)("div", {
        className: ew.y7,
        children: [
            (0, n.jsxs)("div", {
                className: ew.q6,
                children: [
                    (0, n.jsx)(m.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: Z.intl.string(Z.t.HGnLLT),
                    }),
                    (0, n.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: Z.intl.string(Z.t["/X1ny6"]),
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
                            text: Z.intl.string(Z.t.ZbS4QB),
                            onClick: s,
                        }),
                    o,
                ],
            }),
        ],
    });
}
function eL(e) {
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
        m = (0, d.bG)([U.A], () => U.A.getWishlistSettings(i.id, g)),
        { trackUserProfileWishlistAction: x } = (0, D.NJ)(),
        f = !1 === i.nsfwAllowed,
        [j, I] = l.useState(!0);
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
        S = (0, W.A)({ wishlistId: g, onAction: v, productLines: null != s ? (0, G.y9)(s) : null }),
        b = l.useCallback(() => {
            if (null == g) return;
            let e = j ? r.a.PRIVATE : r.a.PUBLIC;
            I(!j),
                k.A.updateWishlistVisibility(g, e),
                x({
                    wishlistId: g,
                    action: j ? eN.Mq.WISHLIST_TOGGLE_PRIVATE : eN.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != s ? (0, G.y9)(s) : void 0,
                });
        }, [g, j, x, s]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            !j &&
                (0, n.jsxs)("div", {
                    className: ew.lm,
                    children: [
                        (0, n.jsx)(p.G, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: Z.intl.string(Z.t.RX7D9h),
                        }),
                    ],
                }),
            j &&
                f &&
                (0, n.jsxs)("div", {
                    className: ew.lm,
                    children: [
                        (0, n.jsx)(A.m, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: Z.intl.string(Z.t.d78ChW),
                        }),
                    ],
                }),
            (0, n.jsxs)("div", {
                ref: S,
                className: ew.U1,
                children: [
                    (0, n.jsx)(h.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: Z.intl.format(Z.t.r6Y1Lg, { count: s.items.length }),
                    }),
                    t
                        ? (0, n.jsx)(eR, {
                              socialLayerStorefrontApplicationIds: a,
                              isWishlistPublic: j,
                              handleOpenShop: o,
                              handleOpenGameShop: c,
                              handleAddNitroToWishlist: u,
                              handleToggleWishlistVisibility: b,
                          })
                        : (0, n.jsx)(eT, {
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
    (0, F.i)({ containerRef: i, itemType: "WISHLIST_ITEM" });
    let { wishlistId: s, currentUser: r } = (0, d.cf)([U.A, P.default], () => ({
            wishlistId: U.A.getFirstWishlistId(t.id),
            currentUser: P.default.getCurrentUser(),
        })),
        { analyticsLocations: c } = (0, j.Ay)(),
        u = r?.id === t.id,
        { wishlist: g, wasFetched: m, error: h } = (0, _.fw)({ wishlistId: s, userId: t.id });
    (0, M.A)(g);
    let x = (function (e) {
            let { wishlist: t, profileOwner: i, currentUser: n } = e,
                s = i.id === n?.id,
                a = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                r = (0, d.bG)([N.A], () => N.A.getDetectableIdsToApplicationIds()),
                o = l.useMemo(() => {
                    let e = [];
                    for (let i of t?.items ?? [])
                        (0, w.$)(i) && null != r[i.sku.applicationId] && e.push(i.sku.applicationId);
                    return e;
                }, [t, r]),
                c = (0, R.w)({ userIds: a }),
                u = (0, R.mn)({ userIds: a }),
                g = (0, R.tR)(a),
                m = (0, R.rY)(),
                h = (0, R.qx)(),
                x = (0, R.px)();
            return l.useMemo(
                () => (0, C.uniq)([...o, ...c, ...u, ...g, ...(s ? [...m, ...h, ...x] : [])].filter(T.Vq)),
                [o, c, u, g, m, h, x, s],
            );
        })({ wishlist: g, profileOwner: t, currentUser: r }),
        p = (0, L.Gh)("user-profile-modal-v2-wishlist"),
        A = l.useCallback(() => {
            (0, o.closeAllModals)(), (0, v.Cz)({ analyticsLocations: c, analyticsSource: f.A.USER_PROFILE_WISHLIST });
        }, [c]),
        I = l.useCallback((e) => {
            let t = N.A.getGuildIdFromApplicationId(e);
            null != t && (0, O.X)({ guildId: t });
        }, []),
        k = l.useCallback((e) => {
            let t = N.A.getGuildIdFromApplicationId(e);
            null != t && ((0, o.closeAllModals)(), (0, O.default)({ guildId: t }));
        }, []),
        { handleToggle: D } = (0, b.c)({
            userId: r?.id,
            skuId: eC.pe.TIER_2,
            nuxGraphic: p ? E.g : void 0,
            onNuxShow: S.D,
            location: f.A.USER_PROFILE_WISHLIST,
            onAddSuccess: y.w,
        });
    if (null == r || null != h) return null;
    let W = null == g || 0 === g.items.length;
    return (0, n.jsxs)(B.K, {
        scrollerRef: i,
        className: a()({ [ew.XG]: !W }),
        fade: !0,
        children: [
            W
                ? (0, n.jsx)(ek, {
                      isOwner: u,
                      socialLayerStorefrontApplicationIds: x,
                      handleOpenShop: A,
                      handleOpenGameShop: k,
                      handleOpenGameShopMouseDown: I,
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(H.A, { scrollerRef: i }),
                          (0, n.jsx)(eL, {
                              isOwner: u,
                              profileOwner: t,
                              wishlist: g,
                              socialLayerStorefrontApplicationIds: x,
                              handleOpenShop: A,
                              handleOpenGameShop: k,
                              handleAddNitroToWishlist: p && !(0, G.C3)(g, eC.pe.TIER_2) ? D : void 0,
                          }),
                          (0, n.jsx)(ee, { items: g.items, profileOwner: t, isOwner: u }),
                      ],
                  }),
            u &&
                (0, n.jsx)(ec, {
                    user: t,
                    wishlist: g,
                    hasFetchedWishlist: m,
                    analyticsLocations: c,
                    className: W ? ew._E : ew.HZ,
                }),
        ],
    });
}
