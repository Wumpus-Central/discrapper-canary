i.d(t, { A: () => eU });
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
    S = i(564064),
    v = i(895360),
    E = i(152472),
    y = i(267102),
    b = i(274681),
    w = i(400669);
i(321073);
var C = i(735438),
    T = i(721932),
    N = i(403362),
    R = i(832163),
    k = i(501838),
    O = i(44724),
    L = i(808247),
    P = i(909536),
    G = i(673843),
    M = i(561794),
    _ = i(855052),
    U = i(287809),
    D = i(183555),
    W = i(841595),
    F = i(600761),
    H = i(579950),
    V = i(535089),
    B = i(128988),
    Y = i(515054),
    z = i(688807),
    X = i(575593),
    q = i(772427),
    Q = i(107563);
i(117218), i(872472), i(394300);
var K = i(652215),
    $ = i(519182),
    J = i(451395),
    Z = i(823016),
    ee = i(375708),
    et = i(130821);
function ei(e) {
    let { item: t, index: i, wishlistId: l, onReorder: s, children: a } = e,
        { manageFocusOnReorder: r } = (0, Z.r)();
    return (0, n.jsx)(J.mG, {
        index: i,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": ee.intl.formatToPlainString(ee.t["7SnyMA"], { positionNumber: i + 1 }),
        onReorder: s,
        onEnd: () => r(String(t.skuId)),
        className: et.C,
        dropBeforeClassName: et.A,
        dropAfterClassName: et.Ze,
        draggingClassName: et.Id,
        children: (0, n.jsx)("div", { className: et.An, children: a }),
    });
}
let en = l.memo(function (e) {
    let { item: t, index: i, profileOwner: s, showEditingControls: a, wishlistId: r, isDragging: d, onReorder: o } = e,
        { registerDragHandleRef: c } = (0, Z.r)(),
        u = l.useMemo(
            () =>
                a
                    ? (0, n.jsx)(J.jV, {
                          buttonRef: c(String(t.skuId)),
                          className: et.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, c, t.skuId],
        ),
        g = l.useMemo(
            () => (0, n.jsx)($.A, { item: t, wishlistOwner: s, wishlistId: r, isDragging: d, dragHandle: u }),
            [t, s, d, u, r],
        );
    return a
        ? (0, n.jsx)("li", {
              children: (0, n.jsx)(ei, { item: t, index: i, wishlistId: r, onReorder: o, children: g }),
          })
        : (0, n.jsx)("li", { children: g });
});
function el(e) {
    let { items: t, profileOwner: i, showEditingControls: s } = e,
        a = U.default.getCurrentUser(),
        { defaultWishlistId: r } = (0, d.cf)([W.A], () => ({ defaultWishlistId: W.A.getFirstWishlistId(i.id) })),
        o = (0, q.rV)("UserProfileModalV2WishlistGrid"),
        c = l.useMemo(
            () => (o ? t : t.filter((e) => e.sku?.tenantMetadata?.collectibles?.type !== X.R.PROFILE_FRAME)),
            [t, o],
        ),
        { isDragging: u } = (0, z.V)((e) => ({ isDragging: e.isDragging() })),
        g = l.useCallback(
            (e, t) => {
                if (e === t || null == r || 0 === c.length || e < 0 || e >= c.length || t < 0 || t >= c.length) return;
                let i = Q.A.getWishlist(r);
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
                L.A.reorderWishlistItem(r, n.skuId, { previousSkuId: s, nextSkuId: a, newWishlistData: l });
            },
            [r, c],
        );
    if (null == a || null == r) return null;
    let m = (0, n.jsx)("ul", {
        className: et.Vg,
        children: c.map((e, t) =>
            (0, n.jsx)(
                en,
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
    return s ? (0, n.jsx)(Z.B, { emptyListFallbackRef: null, children: m }) : m;
}
var es = i(815021),
    ea = i(554146),
    er = i(131607),
    ed = i(973912),
    eo = i(927813),
    ec = i(49999),
    eu = i(294085);
let eg = 90 * eo.A.Millis.DAY,
    em = 90 * eo.A.Millis.DAY;
function eh(e) {
    let { user: t, wishlist: i, hasFetchedWishlist: s = !1, analyticsLocations: r, className: o } = e,
        c = (i?.items.length ?? 0) > 0,
        [u, g] = l.useState(!1);
    !s || c || u || g(!0);
    let m = (0, d.bG)([W.A], () =>
            null != i ? new Date(W.A.getWishlistSettings(t.id, i.id)?.updated_at ?? 0).valueOf() : 0,
        ),
        [x, p] = (0, er.Wl)(
            ea.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
            { showAfterTimestamp: m + em, cooldownDurationMs: eg },
            void 0,
            !0,
        ),
        j = x === ea.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
    return s && (!c || j || u)
        ? (0, n.jsxs)("div", {
              className: a()(eu.kL, o),
              children: [
                  (0, n.jsxs)("div", {
                      className: eu.wx,
                      children: [
                          (0, n.jsx)(h.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: ee.intl.string(ee.t["+GB8Kt"]),
                          }),
                          c &&
                              (0, n.jsx)(es.J, {
                                  size: "xs",
                                  onClick: () => {
                                      g(!1), p(ec.i.USER_DISMISS);
                                  },
                              }),
                      ],
                  }),
                  (0, n.jsx)(ed.A, {
                      userId: t.id,
                      wishlist: i,
                      className: a()(eu.Vg, eu.e6),
                      analyticsLocations: r,
                      numWishlistItemsToRecommend: 15,
                      maxWishlistItemsToShow: 8,
                  }),
              ],
          })
        : null;
}
var ex = i(477782),
    ep = i(403581),
    ej = i(922016),
    ef = i(980707),
    eA = i(789645),
    eI = i(847374),
    eS = i(486020),
    ev = i(420641);
function eE(e) {
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
                        let t = eS.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: ee.intl.formatToPlainString(ee.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != t ? () => (0, n.jsx)("img", { className: ev.I, src: t, alt: "" }) : u.U,
                            leadingAccessory: null != t ? { type: "image", src: t } : { type: "icon", icon: u.U },
                            action: () => i?.(e.id),
                        };
                    }),
                [t, i],
            );
        })({ applications: (0, I.A)(d), handleOpenGameShop: a }),
        x = l.useMemo(
            () =>
                (0, n.jsxs)(ex.rX, {
                    children: [
                        null != s &&
                            (0, n.jsx)(ex.Dr, {
                                id: "browse-collectibles-shop",
                                label: ee.intl.string(ee.t["5upuqx"]),
                                iconLeft: u.U,
                                leadingAccessory: { type: "icon", icon: u.U },
                                action: s,
                            }),
                        null != r &&
                            (0, n.jsx)(ex.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: ee.intl.string(ee.t.lG6a5x),
                                iconLeft: ep.t,
                                leadingAccessory: { type: "icon", icon: ep.t },
                                action: r,
                            }),
                        null != a &&
                            h.map((e) => {
                                let { id: t, label: i, iconLeft: l, leadingAccessory: s, action: a } = e;
                                return (0, n.jsx)(
                                    ex.Dr,
                                    { id: t, label: i, iconLeft: l, leadingAccessory: s, action: a },
                                    t,
                                );
                            }),
                    ],
                }),
            [s, a, r, h],
        );
    return (0, n.jsx)(ej.Y, {
        targetElementRef: o,
        position: "bottom",
        onRequestOpen: () => m(!0),
        onRequestClose: () => m(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(ef.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": ee.intl.string(ee.t.GdNkvG),
                children: x,
            });
        },
        children: (e) =>
            (0, n.jsx)(c.$, {
                buttonRef: o,
                variant: i,
                size: "sm",
                icon: g ? eA.P : eI.a,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var ey = i(509434),
    eb = i(365199),
    ew = i(975571),
    eC = i(993401);
let eT = ew.A.getArticleURL(K.MVz.CUSTOM_PROFILES_WISHLIST);
function eN(e) {
    let { isOwner: t, isWishlistPublic: i, onToggleVisibility: s } = e,
        a = l.useRef(null),
        { analyticsLocations: r } = (0, A.Ay)(f.A.USER_PROFILE_WISHLIST),
        d = l.useMemo(
            () =>
                t
                    ? (0, n.jsxs)(ex.rX, {
                          children: [
                              (0, n.jsx)(ex.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: ee.intl.string(ee.t.b2nFyA),
                                  subtext: ee.intl.string(ee.t.dw58pE),
                                  checked: i,
                                  action: s,
                              }),
                              (0, n.jsx)(ex.bX, {}),
                              (0, n.jsx)(ex.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: ee.intl.string(ee.t.hvVgAZ),
                                  icon: ey.I,
                                  trailingIndicator: { type: "icon", icon: ey.I },
                                  action: () => window.open(eT),
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
              children: (0, n.jsx)(ej.Y, {
                  targetElementRef: a,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, n.jsx)(ef.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": ee.intl.string(ee.t.GdNkvG),
                          children: d,
                      });
                  },
                  children: (e) =>
                      (0, n.jsx)(eC.q3, {
                          buttonRef: a,
                          icon: eb.j,
                          tooltipText: ee.intl.string(ee.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var eR = i(518477),
    ek = i(788868),
    eO = i(964350);
function eL(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: i, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, n.jsx)(eE, {
              title: ee.intl.string(ee.t["i/yzHs"]),
              handleOpenCollectiblesShop: i,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, n.jsx)(c.$, {
              variant: "secondary",
              size: "sm",
              icon: u.U,
              text: ee.intl.string(ee.t["i/yzHs"]),
              onClick: i,
          });
}
function eP(e) {
    let {
        showEditingControls: t,
        socialLayerStorefrontApplicationIds: i,
        isWishlistPublic: l,
        handleOpenShop: s,
        handleOpenGameShop: a,
        handleAddNitroToWishlist: r,
        handleToggleWishlistVisibility: d,
    } = e;
    return (0, n.jsxs)("div", {
        className: eO.$s,
        children: [
            t &&
                (i.length > 0 || null != r
                    ? (0, n.jsx)(eE, {
                          title: ee.intl.string(ee.t.SDUwM0),
                          handleOpenCollectiblesShop: s,
                          handleOpenGameShop: i.length > 0 ? a : void 0,
                          handleAddNitroToWishlist: r,
                          socialLayerStorefrontApplicationIds: i,
                      })
                    : (0, n.jsx)(c.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: g.j,
                          text: ee.intl.string(ee.t.SDUwM0),
                          onClick: s,
                      })),
            (0, n.jsx)(eN, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: d }),
        ],
    });
}
function eG(e) {
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
        text: ee.intl.formatToPlainString(ee.t["HDT/rg"], { applicationName: t.name }),
        onClick: a,
        onMouseDown: r,
    });
}
function eM(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: i,
            handleOpenShop: s,
            handleOpenGameShop: a,
            handleOpenGameShopMouseDown: r,
        } = e,
        d = (0, y.Us)() === K.BRT.OVERLAY,
        o = (0, I.A)(i),
        g = l.useMemo(() => {
            if (d || 0 === i.length) return null;
            let e = o.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === i.length) {
                let t = e[i[0]];
                return null == t
                    ? null
                    : (0, n.jsx)(eG, { application: t, handleOpenGameShop: a, handleOpenGameShopMouseDown: r });
            }
            return (0, n.jsx)(eE, {
                title: ee.intl.string(ee.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: a,
                socialLayerStorefrontApplicationIds: i,
            });
        }, [d, i, a, o, r]);
    return (0, n.jsxs)("div", {
        className: eO.y7,
        children: [
            (0, n.jsxs)("div", {
                className: eO.q6,
                children: [
                    (0, n.jsx)(m.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: ee.intl.string(ee.t.HGnLLT),
                    }),
                    (0, n.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: ee.intl.string(ee.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != g) &&
                (0, n.jsxs)(x.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, n.jsx)(c.$, {
                                variant: "primary",
                                size: "sm",
                                icon: u.U,
                                text: ee.intl.string(ee.t.ZbS4QB),
                                onClick: s,
                            }),
                        g,
                    ],
                }),
        ],
    });
}
function e_(e) {
    let {
            isOwner: t,
            showEditingControls: i,
            profileOwner: s,
            wishlist: a,
            socialLayerStorefrontApplicationIds: o,
            handleOpenShop: c,
            handleOpenGameShop: u,
            handleAddNitroToWishlist: g,
        } = e,
        m = a.id,
        x = (0, d.bG)([W.A], () => W.A.getWishlistSettings(s.id, m)),
        { trackUserProfileWishlistAction: f } = (0, D.NJ)(),
        A = !1 === s.nsfwAllowed,
        [I, S] = l.useState(!0);
    l.useEffect(() => {
        x?.visibility != null && S(x.visibility === r.a.PUBLIC);
    }, [x?.visibility]);
    let v = l.useCallback(
            (e) => {
                let { wishlistId: t, action: i, productLines: n } = e;
                null != t && f({ wishlistId: t, action: i, productLines: n });
            },
            [f],
        ),
        E = (0, V.A)({ wishlistId: m, onAction: v, productLines: null != a ? (0, _.y9)(a) : null }),
        y = l.useCallback(() => {
            if (null == m) return;
            let e = I ? r.a.PRIVATE : r.a.PUBLIC;
            S(!I),
                L.A.updateWishlistVisibility(m, e),
                f({
                    wishlistId: m,
                    action: I ? eR.Mq.WISHLIST_TOGGLE_PRIVATE : eR.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != a ? (0, _.y9)(a) : void 0,
                });
        }, [m, I, f, a]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            !I &&
                (0, n.jsxs)("div", {
                    className: eO.lm,
                    children: [
                        (0, n.jsx)(p.G, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: ee.intl.string(ee.t.RX7D9h),
                        }),
                    ],
                }),
            I &&
                A &&
                (0, n.jsxs)("div", {
                    className: eO.lm,
                    children: [
                        (0, n.jsx)(j.m, { size: "custom", width: 16, height: 16 }),
                        (0, n.jsx)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: ee.intl.string(ee.t.d78ChW),
                        }),
                    ],
                }),
            (0, n.jsxs)("div", {
                ref: E,
                className: eO.U1,
                children: [
                    (0, n.jsx)(h.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: ee.intl.format(ee.t.r6Y1Lg, { count: a.items.length }),
                    }),
                    t
                        ? (0, n.jsx)(eP, {
                              showEditingControls: i,
                              socialLayerStorefrontApplicationIds: o,
                              isWishlistPublic: I,
                              handleOpenShop: c,
                              handleOpenGameShop: u,
                              handleAddNitroToWishlist: g,
                              handleToggleWishlistVisibility: y,
                          })
                        : (0, n.jsx)(eL, {
                              socialLayerStorefrontApplicationIds: o,
                              handleOpenShop: c,
                              handleOpenGameShop: u,
                          }),
                ],
            }),
        ],
    });
}
function eU(e) {
    let { profileOwner: t } = e,
        i = l.useRef(null);
    (0, F.i)({ containerRef: i, itemType: "WISHLIST_ITEM" });
    let { wishlistId: s, currentUser: r } = (0, d.cf)([W.A, U.default], () => ({
            wishlistId: W.A.getFirstWishlistId(t.id),
            currentUser: U.default.getCurrentUser(),
        })),
        { analyticsLocations: c } = (0, A.Ay)(),
        u = (0, H.A)(t.id),
        { wishlist: g, wasFetched: m, error: h } = (0, M.fw)({ wishlistId: s, userId: t.id });
    (0, G.A)(g);
    let x = (function (e) {
            let { wishlist: t, profileOwner: i, currentUser: n } = e,
                s = i.id === n?.id,
                a = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                r = (0, d.bG)([R.A], () => R.A.getDetectableIdsToApplicationIds()),
                o = l.useMemo(() => {
                    let e = [];
                    for (let i of t?.items ?? [])
                        (0, T.$)(i) && null != r[i.sku.applicationId] && e.push(i.sku.applicationId);
                    return e;
                }, [t, r]),
                c = (0, k.w)({ userIds: a }),
                u = (0, k.mn)({ userIds: a }),
                g = (0, k.tR)(a),
                m = (0, k.rY)(),
                h = (0, k.qx)(),
                x = (0, k.px)();
            return l.useMemo(
                () => (0, C.uniq)([...o, ...c, ...u, ...g, ...(s ? [...m, ...h, ...x] : [])].filter(N.Vq)),
                [o, c, u, g, m, h, x, s],
            );
        })({ wishlist: g, profileOwner: t, currentUser: r }),
        p = (0, P.Gh)("user-profile-modal-v2-wishlist"),
        j = l.useCallback(() => {
            (0, o.closeAllModals)(), (0, S.Cz)({ analyticsLocations: c, analyticsSource: f.A.USER_PROFILE_WISHLIST });
        }, [c]),
        I = l.useCallback((e) => {
            (0, O.G)({ applicationId: e });
        }, []),
        y = l.useCallback((e) => {
            (0, o.closeAllModals)(), (0, O.default)({ applicationId: e });
        }, []),
        { handleToggle: L } = (0, E.c)({
            userId: r?.id,
            skuId: ek.pe.TIER_2,
            nuxGraphic: p ? w.g : void 0,
            onNuxShow: v.D,
            location: f.A.USER_PROFILE_WISHLIST,
            onAddSuccess: b.w,
        });
    if (null == r || null != h) return null;
    let D = null == g || 0 === g.items.length;
    return (0, n.jsxs)(Y.K, {
        scrollerRef: i,
        className: a()({ [eO.XG]: !D }),
        fade: !0,
        children: [
            D
                ? (0, n.jsx)(eM, {
                      showEditingControls: u,
                      socialLayerStorefrontApplicationIds: x,
                      handleOpenShop: j,
                      handleOpenGameShop: y,
                      handleOpenGameShopMouseDown: I,
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(B.A, { scrollerRef: i }),
                          (0, n.jsx)(e_, {
                              isOwner: r?.id === t.id,
                              showEditingControls: u,
                              profileOwner: t,
                              wishlist: g,
                              socialLayerStorefrontApplicationIds: x,
                              handleOpenShop: j,
                              handleOpenGameShop: y,
                              handleAddNitroToWishlist: p && !(0, _.C3)(g, ek.pe.TIER_2) ? L : void 0,
                          }),
                          (0, n.jsx)(el, { items: g.items, profileOwner: t, showEditingControls: u }),
                      ],
                  }),
            u &&
                (0, n.jsx)(eh, {
                    user: t,
                    wishlist: g,
                    hasFetchedWishlist: m,
                    analyticsLocations: c,
                    className: D ? eO._E : eO.HZ,
                }),
        ],
    });
}
