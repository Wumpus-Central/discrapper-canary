l.d(t, { A: () => ec });
var n = l(627968),
    a = l(64700),
    i = l(503698),
    r = l.n(i),
    s = l(311907),
    o = l(534514),
    d = l(834730),
    c = l(318254),
    u = l(192308),
    _ = l(821609),
    m = l(939249),
    h = l(597770),
    p = l(34188),
    b = l(366010),
    f = l(289873),
    x = l(935462),
    g = l(358618),
    C = l(983851),
    v = l(972213),
    A = l(964486),
    j = l(736653),
    I = l(793574),
    E = l(688810),
    T = l(429913),
    N = l(427209),
    S = l(993046),
    y = l(801228),
    k = l(309954),
    R = l(652165),
    L = l(594832),
    O = l(961350),
    U = l(328968),
    w = l(954571),
    P = l(371794),
    B = l(871123),
    D = l(733391),
    M = l(832163),
    F = l(681064),
    H = l(429635),
    G = l(476438),
    W = l(44724),
    Y = l(345938),
    V = l(510022),
    q = l(108105),
    z = l(317560),
    $ = l(533406),
    X = l(148252),
    J = l(263911),
    K = l(971146),
    Q = l(430580),
    Z = l(743693),
    ee = l(995393),
    et = l(188275),
    el = l(652215),
    en = l(985018),
    ea = l(334588);
function ei(e) {
    let { sku: t } = e;
    return null == t
        ? null
        : (0, n.jsxs)("div", {
              className: ea.AX,
              children: [
                  (0, n.jsx)(o.D, { variant: "heading-lg/bold", color: "text-strong", children: t.name }),
                  (0, n.jsx)(d.E, { variant: "text-sm/medium", color: "text-subtle", children: t.description }),
              ],
          });
}
function er(e) {
    let { sku: t } = e,
        { normalPrice: l, discountedPrice: a, discountPercent: i } = (0, S.CD)({ sku: t });
    if (null == l) return null;
    let r = null != t.orbsReward && t.orbsReward > 0;
    return (0, n.jsxs)("div", {
        className: ea.sj,
        children: [
            (0, n.jsx)(K.V, { textColor: "text-subtle" }),
            (0, n.jsxs)("div", {
                className: ea.hO,
                children: [
                    null != i && null != a
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(d.E, { variant: "text-md/medium", className: ea.Jb, children: l }),
                                  (0, n.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: a }),
                                  (0, n.jsx)(d.E, { variant: "text-md/bold", className: ea.Fi, children: i }),
                              ],
                          })
                        : (0, n.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: l }),
                    r &&
                        (0, n.jsx)("div", {
                            className: ea.pt,
                            children: (0, n.jsx)(d.E, {
                                variant: "text-sm/semibold",
                                color: "currentColor",
                                children: en.intl.format(en.t.GiVd2Q, {
                                    orbCount: t.orbsReward,
                                    orbIconHook: () =>
                                        (0, n.jsx)(c.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                }),
                            }),
                        }),
                ],
            }),
        ],
    });
}
function es(e) {
    let {
            sku: t,
            guildId: l,
            shouldShowShopLink: i,
            giftRecipient: r,
            giftingOrigin: o,
            trackPDPClick: b,
            analyticsLocations: f,
        } = e,
        x = t.id,
        g = (0, s.bG)([M.A], () => M.A.getNormalizedSKUEligibility(x), [x]),
        C = (0, F.R)({ location: "product_details_modal" }),
        v = (0, S.JL)({ sku: t });
    (0, k.W)({ disableFetch: !C });
    let A = (0, T.h)(t.applicationId),
        j = a.useCallback(() => {
            null != l &&
                (b(ee.Jq.BUY_BUTTON),
                (0, $.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...f, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: l,
                    },
                ));
        }, [t, b, l, f]),
        E = a.useCallback(() => {
            null != l && (0, W.X)({ guildId: l });
        }, [l]),
        N = a.useCallback(() => {
            null != l && (b(ee.Jq.VISIT_SHOP), (0, u.closeAllModals)(), (0, W.default)({ guildId: l }));
        }, [l, b]),
        y = a.useCallback(() => {
            b(ee.Jq.GIFT_BUTTON),
                (0, $.a)(
                    t,
                    { isGift: !0, giftRecipient: r, giftingOrigin: o },
                    { analyticsLocations: [...f, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [t, b, r, o, f]),
        L = a.useCallback(() => {
            if (null == A || !C) return;
            b(ee.Jq.BUY_WITH_ORBS_BUTTON);
            let e = [...f, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON];
            (0, R.B4)({
                skuId: t.id,
                applicationId: t.applicationId,
                onCheckoutSuccess: () => {
                    (0, z.j)(), (0, V.n)({ sku: t, application: A, analyticsLocations: e });
                },
                analyticsLocations: e,
            });
        }, [t, b, f, A, C]);
    return (0, n.jsxs)("div", {
        className: ea.NC,
        children: [
            !g &&
                (0, n.jsx)(d.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: en.intl.string(en.t.IqlPbQ),
                }),
            g
                ? (0, n.jsxs)("div", {
                      className: ea.mr,
                      children: [
                          (0, n.jsx)(_.$, {
                              variant: "primary",
                              onClick: j,
                              text: en.intl.string(en.t.boqtTA),
                              fullWidth: !0,
                          }),
                          (0, n.jsx)(m.D, {
                              className: ea.xP,
                              onClick: y,
                              "aria-label": en.intl.string(en.t.QAZA5f),
                              role: "button",
                              children: (0, n.jsx)(h.o, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  })
                : (0, n.jsx)(_.$, {
                      icon: h.o,
                      variant: "secondary",
                      onClick: y,
                      text: en.intl.string(en.t.QAZA5f),
                      fullWidth: !0,
                  }),
            i &&
                (0, n.jsx)(_.$, {
                    icon: p.U,
                    variant: "secondary",
                    onMouseDown: E,
                    onClick: N,
                    text: en.intl.string(en.t["2QW9nR"]),
                    fullWidth: !0,
                }),
            C &&
                g &&
                null != v &&
                (0, n.jsx)(_.$, {
                    icon: c.C,
                    variant: "secondary",
                    onClick: L,
                    text: en.intl.format(en.t.lOtBOI, {
                        orbPrice: v.amount,
                        orbIconHook: () => (0, n.jsx)(c.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                    }),
                    fullWidth: !0,
                }),
        ],
    });
}
function eo(e) {
    let { selectedCarouselItem: t, applicationId: l } = e;
    if (null == t) return null;
    let a = null != t.labelIconAssetId ? (0, P.YE)(l, t.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: ea.HI,
        children: [
            null != a && (0, n.jsx)("img", { className: ea.IX, src: a, alt: "" }, a),
            (0, n.jsx)(d.E, { variant: "text-xs/medium", color: "text-subtle", children: t.label }),
        ],
    });
}
function ed(e) {
    let { onClick: t, children: l, ariaLabel: a } = e;
    return (0, n.jsx)(m.D, { onClick: t, className: ea.jU, "aria-label": a, role: "button", children: l });
}
function ec(e) {
    let {
            transitionState: t,
            returnRef: l,
            skuId: i,
            applicationId: c,
            isStorefront: u,
            giftRecipient: _,
            giftingOrigin: m,
            analyticsLocations: h,
            analyticsContext: p,
            onClose: I,
        } = e,
        { analyticsLocations: T } = (0, E.Ay)(h ?? []),
        { guildId: S } = (0, B.nG)(c),
        k = (0, s.bG)([O.default], () => O.default.getId());
    a.useEffect(() => {
        null != S && null != i && (0, D.iR)(S, i);
    }, [S, i]);
    let R = (0, H.A)({ guildId: S }),
        F = (0, s.bG)([M.A], () => M.A.getSkuAssets()),
        W = (0, s.bG)([U.A], () => U.A.isFetchingForSKU(i)),
        V = (0, b.M)((0, j.Ay)()),
        [z, $] = a.useState(!0),
        K = (0, y.A)({ skuId: i, location: "SocialLayerStorefrontProductDetailsModal" }),
        [ec, e_] = a.useState(0),
        [em, eh] = a.useMemo(() => (0, q.L)(K?.tenantMetadata?.socialLayer?.carouselItems ?? [], c, F), [K, c, F]),
        [ep, eb] = a.useState(null),
        [ef, ex] = a.useState(!1);
    a.useEffect(() => {
        if (null == ep) return;
        let e = new ResizeObserver(() => {
            ex(ep.scrollHeight > ep.clientHeight);
        });
        return e.observe(ep), () => e.disconnect();
    }, [ep]);
    let eg = ec < eh.length ? ec : 0,
        eC = em[eg] ?? null,
        ev = eh.length > 1,
        eA = eh.some((e) => "video" === e.type);
    (0, L.pE)(),
        (0, A.Ay)(() => {
            w.default.track(el.HAw.OPEN_MODAL, { location_stack: T, type: et.Nh, sku_id: i, application_id: c }),
                (0, D.Xw)();
        });
    let ej = a.useCallback(
            (e) => {
                w.default.track(el.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: p?.sessionId,
                    sku_id: i,
                    guild_id: p?.guildId,
                    cta_type: e,
                    location_stack: T,
                });
            },
            [p, i, T],
        ),
        eI = a.useCallback(
            (e) => {
                e_(e), ej(ee.Jq.CAROUSEL_ITEM);
            },
            [ej],
        );
    a.useEffect(() => {
        null == S || null == i || U.A.isFetchingForSKU(i) || (0, D.qf)(S, i);
    }, [S, i]);
    let eE = a.useCallback(() => {
            null != K &&
                null != S &&
                (ej(ee.Jq.FORWARD_BUTTON),
                (0, Y.d)({
                    sku: K,
                    guildId: S,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: T,
                    analyticsContext: p,
                }));
        }, [K, S, ej, T, p]),
        eT = a.useCallback(() => {
            ej(ee.Jq.WISHLIST_BUTTON);
        }, [ej]),
        eN = a.useCallback(() => {
            $(!z), ej(ee.Jq.MUTE_BUTTON);
        }, [z, ej]),
        eS = (0, G.B)(),
        ey = K?.tenantMetadata?.socialLayer;
    if (null == K || null == ey) return W ? (0, n.jsx)(f.y, {}) : null;
    let ek = R?.storefront,
        eR = ek?.logoAssetId != null ? (0, P.YE)(ek.applicationId, ek.logoAssetId, 75) : null,
        eL = ek?.lightThemeLogoAssetId != null ? (0, P.YE)(ek.applicationId, ek.lightThemeLogoAssetId, 75) : null,
        eO = null;
    eO = V ? (eR ?? eL) : (eL ?? eR);
    let eU = null != K.orbsReward && K.orbsReward > 0;
    return (0, n.jsx)(x.EO, {
        transitionState: t,
        "hide-shadow": !0,
        parentComponent: "SocialLayerStorefrontProductDetailsModal",
        className: ea.CR,
        size: x.rI.DYNAMIC,
        returnRef: l,
        children: (0, n.jsxs)(x.$m, {
            className: ea.jE,
            children: [
                eU &&
                    (0, n.jsx)(eu, {
                        timeRemaining: eS ?? void 0,
                        text: en.intl.format(en.t.d3njXi, { orbCount: K.orbsReward }),
                    }),
                (0, n.jsxs)("div", {
                    className: ea.nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: ea.op,
                            children: [
                                (0, n.jsx)("div", {
                                    className: ea.r$,
                                    children:
                                        null != eO
                                            ? (0, n.jsx)("img", { className: ea.wm, src: eO, alt: ek?.title ?? "" })
                                            : null,
                                }),
                                (0, n.jsxs)("div", {
                                    ref: eb,
                                    className: ea.zD,
                                    children: [
                                        K.exclusive &&
                                            (0, n.jsx)("div", { className: ea.K3, children: (0, n.jsx)(J.I, {}) }),
                                        ev
                                            ? (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(ei, { sku: K }),
                                                      (0, n.jsx)("div", {
                                                          className: ea._D,
                                                          children: (0, n.jsx)(X.A, {
                                                              mediaItems: eh,
                                                              labels: em.map((e) => e.label),
                                                              selectedIndex: eg,
                                                              onSelectIndex: eI,
                                                          }),
                                                      }),
                                                      (0, n.jsx)("div", {
                                                          className: ea.Jv,
                                                          children: (0, n.jsx)(eo, {
                                                              applicationId: c,
                                                              selectedCarouselItem: eC,
                                                          }),
                                                      }),
                                                  ],
                                              })
                                            : (0, n.jsxs)("div", {
                                                  className: ea.cP,
                                                  children: [
                                                      (0, n.jsx)(o.D, {
                                                          variant: "heading-lg/bold",
                                                          color: "text-strong",
                                                          children: K.name,
                                                      }),
                                                      (0, n.jsx)(eo, { applicationId: c, selectedCarouselItem: eC }),
                                                      (0, n.jsx)(d.E, {
                                                          variant: "text-sm/medium",
                                                          color: "text-subtle",
                                                          children: K.description,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: r()(ea.Td, { [ea.t7]: ef }),
                                    children: [
                                        (0, n.jsx)(er, { sku: K }),
                                        (0, n.jsx)(es, {
                                            sku: K,
                                            guildId: S,
                                            shouldShowShopLink: !u,
                                            giftRecipient: _?.id !== k ? _ : void 0,
                                            giftingOrigin: _?.id !== k ? m : void 0,
                                            trackPDPClick: ej,
                                            analyticsLocations: T,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: ea.il,
                            children: [
                                (0, n.jsx)(Q.A, { item: eh[eg], isMuted: z, alt: eC?.label ?? K.name }),
                                (0, n.jsxs)("div", {
                                    className: ea.V7,
                                    children: [
                                        null != K &&
                                            (0, n.jsx)(Z._, {
                                                sku: K,
                                                isCardHovered: !0,
                                                className: r()(ea.jU, ea.ij),
                                                trackButtonClick: eT,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, n.jsx)(ed, {
                                            onClick: eE,
                                            ariaLabel: en.intl.string(en.t.Ej3B3Y),
                                            children: (0, n.jsx)(N.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        eA &&
                                            (0, n.jsx)(ed, {
                                                onClick: eN,
                                                ariaLabel: z
                                                    ? en.intl.string(en.t.YqAjXy)
                                                    : en.intl.string(en.t.w4m945),
                                                children: z
                                                    ? (0, n.jsx)(g._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, n.jsx)(C.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, n.jsx)(ed, {
                                            onClick: I,
                                            ariaLabel: en.intl.string(en.t.cpT0Cq),
                                            children: (0, n.jsx)(v.d, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function eu(e) {
    let { timeRemaining: t, text: l } = e;
    return (0, n.jsxs)("div", {
        className: ea.pP,
        children: [
            (0, n.jsxs)("div", {
                className: ea.Wi,
                children: [
                    (0, n.jsx)(c.C, { size: "refresh_sm", color: "currentColor" }),
                    (0, n.jsx)(d.E, { variant: "text-sm/semibold", color: "currentColor", children: l }),
                ],
            }),
            null != t && (0, n.jsx)(d.E, { variant: "text-sm/medium", color: "currentColor", children: t }),
        ],
    });
}
