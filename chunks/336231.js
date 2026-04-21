n.d(t, { A: () => K });
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(311907),
    o = n(397927),
    c = n(964486),
    d = n(736653),
    u = n(793574),
    _ = n(688810),
    m = n(429913),
    h = n(427209),
    x = n(993046),
    f = n(801228),
    p = n(309954),
    g = n(652165),
    b = n(594832),
    C = n(961350),
    j = n(328968),
    v = n(954571),
    A = n(371794),
    T = n(871123),
    N = n(733391),
    S = n(832163),
    k = n(681064),
    I = n(429635),
    E = n(476438),
    y = n(44724),
    R = n(345938),
    O = n(510022),
    U = n(108105),
    L = n(317560),
    B = n(533406),
    P = n(148252),
    w = n(263911),
    D = n(971146),
    M = n(430580),
    H = n(743693),
    F = n(995393),
    W = n(188275),
    Y = n(652215),
    G = n(985018),
    q = n(334588);
function X(e) {
    let { sku: t } = e;
    return null == t
        ? null
        : (0, l.jsxs)("div", {
              className: q.AX,
              children: [
                  (0, l.jsx)(o.Heading, { variant: "heading-lg/bold", color: "text-strong", children: t.name }),
                  (0, l.jsx)(o.Text, { variant: "text-sm/medium", color: "text-subtle", children: t.description }),
              ],
          });
}
function J(e) {
    let { sku: t } = e,
        { normalPrice: n, discountedPrice: a, discountPercent: s } = (0, x.CD)({ sku: t });
    if (null == n) return null;
    let i = null != t.orbsReward && t.orbsReward > 0;
    return (0, l.jsxs)("div", {
        className: q.sj,
        children: [
            (0, l.jsx)(D.V, { textColor: "text-subtle" }),
            (0, l.jsxs)("div", {
                className: q.hO,
                children: [
                    null != s && null != a
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(o.Text, { variant: "text-md/medium", className: q.Jb, children: n }),
                                  (0, l.jsx)(o.Text, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: a,
                                  }),
                                  (0, l.jsx)(o.Text, { variant: "text-md/bold", className: q.Fi, children: s }),
                              ],
                          })
                        : (0, l.jsx)(o.Text, { variant: "text-md/semibold", color: "text-strong", children: n }),
                    i &&
                        (0, l.jsx)("div", {
                            className: q.pt,
                            children: (0, l.jsx)(o.Text, {
                                variant: "text-sm/semibold",
                                color: "currentColor",
                                children: G.intl.format(G.t.GiVd2Q, {
                                    orbCount: t.orbsReward,
                                    orbIconHook: () =>
                                        (0, l.jsx)(o.Cp8, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                }),
                            }),
                        }),
                ],
            }),
        ],
    });
}
function V(e) {
    let {
            sku: t,
            guildId: n,
            shouldShowShopLink: s,
            giftRecipient: i,
            giftingOrigin: c,
            trackPDPClick: d,
            analyticsLocations: _,
        } = e,
        h = t.id,
        f = (0, r.bG)([S.A], () => S.A.getNormalizedSKUEligibility(h), [h]),
        b = (0, k.R)({ location: "product_details_modal" }),
        C = (0, x.JL)({ sku: t });
    (0, p.W)({ disableFetch: !b });
    let j = (0, m.h)(t.applicationId),
        v = a.useCallback(() => {
            null != n &&
                (d(F.Jq.BUY_BUTTON),
                (0, B.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [..._, u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: n,
                    },
                ));
        }, [t, d, n, _]),
        A = a.useCallback(() => {
            null != n && (0, y.X)({ guildId: n });
        }, [n]),
        T = a.useCallback(() => {
            null != n && (d(F.Jq.VISIT_SHOP), (0, o.s7G)(), (0, y.default)({ guildId: n }));
        }, [n, d]),
        N = a.useCallback(() => {
            d(F.Jq.GIFT_BUTTON),
                (0, B.a)(
                    t,
                    { isGift: !0, giftRecipient: i, giftingOrigin: c },
                    { analyticsLocations: [..._, u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [t, d, i, c, _]),
        I = a.useCallback(() => {
            if (null == j || !b) return;
            d(F.Jq.BUY_WITH_ORBS_BUTTON);
            let e = [..._, u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON];
            (0, g.B4)({
                skuId: t.id,
                applicationId: t.applicationId,
                onCheckoutSuccess: () => {
                    (0, L.j)(), (0, O.n)({ sku: t, application: j, analyticsLocations: e });
                },
                analyticsLocations: e,
            });
        }, [t, d, _, j, b]);
    return (0, l.jsxs)("div", {
        className: q.NC,
        children: [
            !f &&
                (0, l.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: G.intl.string(G.t.IqlPbQ),
                }),
            f
                ? (0, l.jsxs)("div", {
                      className: q.mr,
                      children: [
                          (0, l.jsx)(o.Button, {
                              variant: "primary",
                              onClick: v,
                              text: G.intl.string(G.t.boqtTA),
                              fullWidth: !0,
                          }),
                          (0, l.jsx)(o.DUT, {
                              className: q.xP,
                              onClick: N,
                              "aria-label": G.intl.string(G.t.QAZA5f),
                              role: "button",
                              children: (0, l.jsx)(o.okO, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  })
                : (0, l.jsx)(o.Button, {
                      icon: o.okO,
                      variant: "secondary",
                      onClick: N,
                      text: G.intl.string(G.t.QAZA5f),
                      fullWidth: !0,
                  }),
            s &&
                (0, l.jsx)(o.Button, {
                    icon: o.U1X,
                    variant: "secondary",
                    onMouseDown: A,
                    onClick: T,
                    text: G.intl.string(G.t["2QW9nR"]),
                    fullWidth: !0,
                }),
            b &&
                f &&
                null != C &&
                (0, l.jsx)(o.Button, {
                    icon: o.Cp8,
                    variant: "secondary",
                    onClick: I,
                    text: G.intl.format(G.t.lOtBOI, {
                        orbPrice: C.amount,
                        orbIconHook: () => (0, l.jsx)(o.Cp8, { size: "xs", color: "currentColor" }, "orbs-icon"),
                    }),
                    fullWidth: !0,
                }),
        ],
    });
}
function z(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let a = null != t.labelIconAssetId ? (0, A.YE)(n, t.labelIconAssetId) : null;
    return (0, l.jsxs)("div", {
        className: q.HI,
        children: [
            null != a && (0, l.jsx)("img", { className: q.IX, src: a, alt: t.label }, a),
            (0, l.jsx)(o.Text, { variant: "text-xs/medium", color: "text-subtle", children: t.label }),
        ],
    });
}
function $(e) {
    let { onClick: t, children: n, ariaLabel: a } = e;
    return (0, l.jsx)(o.DUT, { onClick: t, className: q.jU, "aria-label": a, role: "button", children: n });
}
function K(e) {
    let {
            transitionState: t,
            returnRef: n,
            skuId: s,
            applicationId: u,
            isStorefront: m,
            giftRecipient: x,
            giftingOrigin: p,
            analyticsLocations: g,
            analyticsContext: k,
            onClose: y,
        } = e,
        { analyticsLocations: O } = (0, _.Ay)(g ?? []),
        { guildId: L } = (0, T.nG)(u),
        B = (0, r.bG)([C.default], () => C.default.getId());
    a.useEffect(() => {
        null != L && null != s && (0, N.iR)(L, s);
    }, [L, s]);
    let D = (0, I.A)({ guildId: L }),
        K = (0, r.bG)([S.A], () => S.A.getSkuAssets()),
        Z = (0, r.bG)([j.A], () => j.A.isFetchingForSKU(s)),
        ee = (0, o.Mwr)((0, d.Ay)()),
        [et, en] = a.useState(!0),
        el = (0, f.A)({ skuId: s, location: "SocialLayerStorefrontProductDetailsModal" }),
        [ea, es] = a.useState(0),
        [ei, er] = a.useMemo(() => (0, U.L)(el?.tenantMetadata?.socialLayer?.carouselItems ?? [], u, K), [el, u, K]),
        [eo, ec] = a.useState(null),
        [ed, eu] = a.useState(!1);
    a.useEffect(() => {
        if (null == eo) return;
        let e = new ResizeObserver(() => {
            eu(eo.scrollHeight > eo.clientHeight);
        });
        return e.observe(eo), () => e.disconnect();
    }, [eo]);
    let e_ = ea < er.length ? ea : 0,
        em = ei[e_] ?? null,
        eh = er.length > 1,
        ex = er.some((e) => "video" === e.type);
    (0, b.pE)(),
        (0, c.Ay)(() => {
            v.default.track(Y.HAw.OPEN_MODAL, { location_stack: O, type: W.Nh, sku_id: s, application_id: u }),
                (0, N.Xw)();
        });
    let ef = a.useCallback(
            (e) => {
                v.default.track(Y.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: k?.sessionId,
                    sku_id: s,
                    guild_id: k?.guildId,
                    cta_type: e,
                    location_stack: O,
                });
            },
            [k, s, O],
        ),
        ep = a.useCallback(
            (e) => {
                es(e), ef(F.Jq.CAROUSEL_ITEM);
            },
            [ef],
        );
    a.useEffect(() => {
        null == L || null == s || j.A.isFetchingForSKU(s) || (0, N.qf)(L, s);
    }, [L, s]);
    let eg = a.useCallback(() => {
            null != el &&
                null != L &&
                (ef(F.Jq.FORWARD_BUTTON),
                (0, R.d)({
                    sku: el,
                    guildId: L,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: O,
                    analyticsContext: k,
                }));
        }, [el, L, ef, O, k]),
        eb = a.useCallback(() => {
            ef(F.Jq.WISHLIST_BUTTON);
        }, [ef]),
        eC = a.useCallback(() => {
            en(!et), ef(F.Jq.MUTE_BUTTON);
        }, [et, ef]),
        ej = (0, E.B)(),
        ev = el?.tenantMetadata?.socialLayer;
    if (null == el || null == ev) return Z ? (0, l.jsx)(o.y$y, {}) : null;
    let eA = D?.storefront,
        eT = eA?.logoAssetId != null ? (0, A.YE)(eA.applicationId, eA.logoAssetId, 75) : null,
        eN = eA?.lightThemeLogoAssetId != null ? (0, A.YE)(eA.applicationId, eA.lightThemeLogoAssetId, 75) : null,
        eS = null;
    eS = ee ? (eT ?? eN) : (eN ?? eT);
    let ek = null != el.orbsReward && el.orbsReward > 0;
    return (0, l.jsx)(o.EOs, {
        transitionState: t,
        "hide-shadow": !0,
        parentComponent: "SocialLayerStorefrontProductDetailsModal",
        className: q.CR,
        size: o.rIJ.DYNAMIC,
        returnRef: n,
        children: (0, l.jsxs)(o.$mQ, {
            className: q.jE,
            children: [
                ek &&
                    (0, l.jsx)(Q, {
                        timeRemaining: ej ?? void 0,
                        text: G.intl.format(G.t.d3njXi, { orbCount: el.orbsReward }),
                    }),
                (0, l.jsxs)("div", {
                    className: q.nr,
                    children: [
                        (0, l.jsxs)("div", {
                            className: q.op,
                            children: [
                                (0, l.jsx)("div", {
                                    className: q.r$,
                                    children:
                                        null != eS ? (0, l.jsx)("img", { className: q.wm, src: eS, alt: "" }) : null,
                                }),
                                (0, l.jsxs)("div", {
                                    ref: ec,
                                    className: q.zD,
                                    children: [
                                        el.exclusive &&
                                            (0, l.jsx)("div", { className: q.K3, children: (0, l.jsx)(w.I, {}) }),
                                        eh
                                            ? (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(X, { sku: el }),
                                                      (0, l.jsx)("div", {
                                                          className: q._D,
                                                          children: (0, l.jsx)(P.A, {
                                                              mediaItems: er,
                                                              labels: ei.map((e) => e.label),
                                                              selectedIndex: e_,
                                                              onSelectIndex: ep,
                                                          }),
                                                      }),
                                                      (0, l.jsx)("div", {
                                                          className: q.Jv,
                                                          children: (0, l.jsx)(z, {
                                                              applicationId: u,
                                                              selectedCarouselItem: em,
                                                          }),
                                                      }),
                                                  ],
                                              })
                                            : (0, l.jsxs)("div", {
                                                  className: q.cP,
                                                  children: [
                                                      (0, l.jsx)(o.Heading, {
                                                          variant: "heading-lg/bold",
                                                          color: "text-strong",
                                                          children: el.name,
                                                      }),
                                                      (0, l.jsx)(z, { applicationId: u, selectedCarouselItem: em }),
                                                      (0, l.jsx)(o.Text, {
                                                          variant: "text-sm/medium",
                                                          color: "text-subtle",
                                                          children: el.description,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: i()(q.Td, { [q.t7]: ed }),
                                    children: [
                                        (0, l.jsx)(J, { sku: el }),
                                        (0, l.jsx)(V, {
                                            sku: el,
                                            guildId: L,
                                            shouldShowShopLink: !m,
                                            giftRecipient: x?.id !== B ? x : void 0,
                                            giftingOrigin: x?.id !== B ? p : void 0,
                                            trackPDPClick: ef,
                                            analyticsLocations: O,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: q.il,
                            children: [
                                (0, l.jsx)(M.A, { item: er[e_], isMuted: et }),
                                (0, l.jsxs)("div", {
                                    className: q.V7,
                                    children: [
                                        null != el &&
                                            (0, l.jsx)(H._, {
                                                sku: el,
                                                isCardHovered: !0,
                                                className: i()(q.jU, q.ij),
                                                trackButtonClick: eb,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, l.jsx)($, {
                                            onClick: eg,
                                            ariaLabel: G.intl.string(G.t.Ej3B3Y),
                                            children: (0, l.jsx)(h.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        ex &&
                                            (0, l.jsx)($, {
                                                onClick: eC,
                                                ariaLabel: et ? G.intl.string(G.t.YqAjXy) : G.intl.string(G.t.w4m945),
                                                children: et
                                                    ? (0, l.jsx)(o._RO, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, l.jsx)(o.HKD, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, l.jsx)($, {
                                            onClick: y,
                                            ariaLabel: G.intl.string(G.t.cpT0Cq),
                                            children: (0, l.jsx)(o.d$L, { size: "refresh_sm", color: "currentColor" }),
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
function Q(e) {
    let { timeRemaining: t, text: n } = e;
    return (0, l.jsxs)("div", {
        className: q.pP,
        children: [
            (0, l.jsxs)("div", {
                className: q.Wi,
                children: [
                    (0, l.jsx)(o.Cp8, { size: "refresh_sm", color: "currentColor" }),
                    (0, l.jsx)(o.Text, { variant: "text-sm/semibold", color: "currentColor", children: n }),
                ],
            }),
            null != t && (0, l.jsx)(o.Text, { variant: "text-sm/medium", color: "currentColor", children: t }),
        ],
    });
}
