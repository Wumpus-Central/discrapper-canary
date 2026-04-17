n.d(t, { A: () => Q });
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
    T = n(954571),
    A = n(371794),
    v = n(871123),
    N = n(733391),
    S = n(832163),
    k = n(207654),
    I = n(681064),
    E = n(429635),
    y = n(476438),
    R = n(44724),
    O = n(345938),
    U = n(510022),
    L = n(108105),
    P = n(317560),
    B = n(533406),
    D = n(148252),
    w = n(263911),
    M = n(971146),
    H = n(430580),
    F = n(743693),
    Y = n(995393),
    G = n(188275),
    W = n(652215),
    q = n(985018),
    X = n(334588);
function J(e) {
    let { sku: t } = e;
    return null == t
        ? null
        : (0, l.jsxs)("div", {
              className: X.AX,
              children: [
                  (0, l.jsx)(o.Heading, { variant: "heading-lg/bold", color: "text-strong", children: t.name }),
                  (0, l.jsx)(o.Text, { variant: "text-sm/medium", color: "text-subtle", children: t.description }),
              ],
          });
}
function V(e) {
    let { sku: t } = e,
        n = (0, k.b)({ location: "product_details_modal" }),
        {
            normalPrice: a,
            discountedPrice: s,
            discountPercent: i,
        } = (0, x.ou)({ sku: t, priceSetAssignmentPurchaseType: W.lid.DEFAULT });
    if (null == a) return null;
    let r = null != t.orbsReward && t.orbsReward > 0;
    return (0, l.jsxs)("div", {
        className: X.sj,
        children: [
            n && (0, l.jsx)(M.V, { textColor: "text-subtle" }),
            (0, l.jsxs)("div", {
                className: X.hO,
                children: [
                    null != i && null != s
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(o.Text, { variant: "text-md/medium", className: X.Jb, children: a }),
                                  (0, l.jsx)(o.Text, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: s,
                                  }),
                                  (0, l.jsx)(o.Text, { variant: "text-md/bold", className: X.Fi, children: i }),
                              ],
                          })
                        : (0, l.jsx)(o.Text, { variant: "text-md/semibold", color: "text-strong", children: a }),
                    r &&
                        (0, l.jsx)("div", {
                            className: X.pt,
                            children: (0, l.jsx)(o.Text, {
                                variant: "text-sm/semibold",
                                color: "currentColor",
                                children: q.intl.format(q.t.GiVd2Q, {
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
function z(e) {
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
        b = (0, I.R)({ location: "product_details_modal" }),
        C = (0, x.JL)({ sku: t, priceSetAssignmentPurchaseType: W.lid.DEFAULT });
    (0, p.W)({ disableFetch: !b });
    let j = (0, m.h)(t.applicationId),
        T = a.useCallback(() => {
            null != n &&
                (d(Y.Jq.BUY_BUTTON),
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
            null != n && (0, R.X)({ guildId: n });
        }, [n]),
        v = a.useCallback(() => {
            null != n && (d(Y.Jq.VISIT_SHOP), (0, o.s7G)(), (0, R.default)({ guildId: n }));
        }, [n, d]),
        N = a.useCallback(() => {
            d(Y.Jq.GIFT_BUTTON),
                (0, B.a)(
                    t,
                    { isGift: !0, giftRecipient: i, giftingOrigin: c },
                    { analyticsLocations: [..._, u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [t, d, i, c, _]),
        k = a.useCallback(() => {
            if (null == j || !b) return;
            d(Y.Jq.BUY_WITH_ORBS_BUTTON);
            let e = [..._, u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON];
            (0, g.B4)({
                skuId: t.id,
                applicationId: t.applicationId,
                onCheckoutSuccess: () => {
                    (0, P.j)(), (0, U.n)({ sku: t, application: j, analyticsLocations: e });
                },
                analyticsLocations: e,
            });
        }, [t, d, _, j, b]);
    return (0, l.jsxs)("div", {
        className: X.NC,
        children: [
            !f &&
                (0, l.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: q.intl.string(q.t.IqlPbQ),
                }),
            (0, l.jsxs)("div", {
                className: X.mr,
                children: [
                    f &&
                        (0, l.jsx)(o.Button, {
                            variant: "primary",
                            onClick: T,
                            text: q.intl.string(q.t.boqtTA),
                            fullWidth: !0,
                        }),
                    (0, l.jsx)(o.DUT, {
                        className: X.xP,
                        onClick: N,
                        "aria-label": q.intl.string(q.t.QAZA5f),
                        role: "button",
                        children: (0, l.jsx)(o.okO, { size: "refresh_sm", color: "currentColor" }),
                    }),
                ],
            }),
            s &&
                (0, l.jsx)(o.Button, {
                    icon: o.U1X,
                    variant: "secondary",
                    onMouseDown: A,
                    onClick: v,
                    text: q.intl.string(q.t["2QW9nR"]),
                    fullWidth: !0,
                }),
            b &&
                f &&
                null != C &&
                (0, l.jsx)(o.Button, {
                    icon: o.Cp8,
                    variant: "secondary",
                    onClick: k,
                    text: q.intl.format(q.t.lOtBOI, {
                        orbPrice: C.amount,
                        orbIconHook: () => (0, l.jsx)(o.Cp8, { size: "xs", color: "currentColor" }, "orbs-icon"),
                    }),
                    fullWidth: !0,
                }),
        ],
    });
}
function $(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let a = null != t.labelIconAssetId ? (0, A.YE)(n, t.labelIconAssetId) : null;
    return (0, l.jsxs)("div", {
        className: X.HI,
        children: [
            null != a && (0, l.jsx)("img", { className: X.IX, src: a, alt: t.label }, a),
            (0, l.jsx)(o.Text, { variant: "text-xs/medium", color: "text-subtle", children: t.label }),
        ],
    });
}
function K(e) {
    let { onClick: t, children: n, ariaLabel: a } = e;
    return (0, l.jsx)(o.DUT, { onClick: t, className: X.jU, "aria-label": a, role: "button", children: n });
}
function Q(e) {
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
            onClose: I,
        } = e,
        { analyticsLocations: R } = (0, _.Ay)(g ?? []),
        { guildId: U } = (0, v.nG)(u),
        P = (0, r.bG)([C.default], () => C.default.getId());
    a.useEffect(() => {
        null != U && null != s && (0, N.iR)(U, s);
    }, [U, s]);
    let B = (0, E.A)({ guildId: U }),
        M = (0, r.bG)([S.A], () => S.A.getSkuAssets()),
        Q = (0, r.bG)([j.A], () => j.A.isFetchingForSKU(s)),
        ee = (0, o.Mwr)((0, d.Ay)()),
        [et, en] = a.useState(!0),
        el = (0, f.A)({ skuId: s, location: "SocialLayerStorefrontProductDetailsModal" }),
        [ea, es] = a.useState(0),
        [ei, er] = a.useMemo(() => (0, L.L)(el?.tenantMetadata?.socialLayer?.carouselItems ?? [], u, M), [el, u, M]),
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
        eh = (0, L.j)(u, em),
        ex = er.length > 1;
    (0, b.pE)(),
        (0, c.Ay)(() => {
            T.default.track(W.HAw.OPEN_MODAL, { location_stack: R, type: G.Nh, sku_id: s, application_id: u }),
                (0, N.Xw)();
        });
    let ef = a.useCallback(
            (e) => {
                T.default.track(W.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: k?.sessionId,
                    sku_id: s,
                    guild_id: k?.guildId,
                    cta_type: e,
                    location_stack: R,
                });
            },
            [k, s, R],
        ),
        ep = a.useCallback(
            (e) => {
                es(e), ef(Y.Jq.CAROUSEL_ITEM);
            },
            [ef],
        );
    a.useEffect(() => {
        null == U || null == s || j.A.isFetchingForSKU(s) || (0, N.qf)(U, s);
    }, [U, s]);
    let eg = a.useCallback(() => {
            null != el &&
                null != U &&
                (ef(Y.Jq.FORWARD_BUTTON),
                (0, O.d)({
                    sku: el,
                    guildId: U,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: R,
                    analyticsContext: k,
                }));
        }, [el, U, ef, R, k]),
        eb = a.useCallback(() => {
            ef(Y.Jq.WISHLIST_BUTTON);
        }, [ef]),
        eC = a.useCallback(() => {
            en(!et), ef(Y.Jq.MUTE_BUTTON);
        }, [et, ef]),
        ej = (0, y.B)(),
        eT = el?.tenantMetadata?.socialLayer;
    if (null == el || null == eT) return Q ? (0, l.jsx)(o.y$y, {}) : null;
    let eA = B?.storefront,
        ev = eA?.logoAssetId != null ? (0, A.YE)(eA.applicationId, eA.logoAssetId, 75) : null,
        eN = eA?.lightThemeLogoAssetId != null ? (0, A.YE)(eA.applicationId, eA.lightThemeLogoAssetId, 75) : null,
        eS = null;
    eS = ee ? (ev ?? eN) : (eN ?? ev);
    let ek = null != el.orbsReward && el.orbsReward > 0;
    return (0, l.jsx)(o.EOs, {
        transitionState: t,
        "hide-shadow": !0,
        parentComponent: "SocialLayerStorefrontProductDetailsModal",
        className: X.CR,
        size: o.rIJ.DYNAMIC,
        returnRef: n,
        children: (0, l.jsxs)(o.$mQ, {
            className: X.jE,
            children: [
                ek &&
                    (0, l.jsx)(Z, {
                        timeRemaining: ej ?? void 0,
                        text: q.intl.format(q.t.d3njXi, { orbCount: el.orbsReward }),
                    }),
                (0, l.jsxs)("div", {
                    className: X.nr,
                    children: [
                        (0, l.jsxs)("div", {
                            className: X.op,
                            style: { background: eh },
                            children: [
                                (0, l.jsx)("div", {
                                    className: X.r$,
                                    children:
                                        null != eS ? (0, l.jsx)("img", { className: X.wm, src: eS, alt: "" }) : null,
                                }),
                                (0, l.jsxs)("div", {
                                    ref: ec,
                                    className: X.zD,
                                    children: [
                                        el.exclusive &&
                                            (0, l.jsx)("div", { className: X.K3, children: (0, l.jsx)(w.I, {}) }),
                                        ex
                                            ? (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(J, { sku: el }),
                                                      (0, l.jsx)("div", {
                                                          className: X._D,
                                                          children: (0, l.jsx)(D.A, {
                                                              mediaItems: er,
                                                              labels: ei.map((e) => e.label),
                                                              selectedIndex: e_,
                                                              onSelectIndex: ep,
                                                          }),
                                                      }),
                                                      (0, l.jsx)("div", {
                                                          className: X.Jv,
                                                          children: (0, l.jsx)($, {
                                                              applicationId: u,
                                                              selectedCarouselItem: em,
                                                          }),
                                                      }),
                                                  ],
                                              })
                                            : (0, l.jsxs)("div", {
                                                  className: X.cP,
                                                  children: [
                                                      (0, l.jsx)(o.Heading, {
                                                          variant: "heading-lg/bold",
                                                          color: "text-strong",
                                                          children: el.name,
                                                      }),
                                                      (0, l.jsx)($, { applicationId: u, selectedCarouselItem: em }),
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
                                    className: i()(X.Td, { [X.t7]: ed }),
                                    children: [
                                        (0, l.jsx)(V, { sku: el }),
                                        (0, l.jsx)(z, {
                                            sku: el,
                                            guildId: U,
                                            shouldShowShopLink: !m,
                                            giftRecipient: x?.id !== P ? x : void 0,
                                            giftingOrigin: x?.id !== P ? p : void 0,
                                            trackPDPClick: ef,
                                            analyticsLocations: R,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: X.il,
                            children: [
                                (0, l.jsx)(H.A, { item: er[e_], isMuted: et }),
                                (0, l.jsxs)("div", {
                                    className: X.V7,
                                    children: [
                                        null != el &&
                                            (0, l.jsx)(F._, {
                                                sku: el,
                                                isCardHovered: !0,
                                                className: i()(X.jU, X.ij),
                                                trackButtonClick: eb,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, l.jsx)(K, {
                                            onClick: eg,
                                            ariaLabel: q.intl.string(q.t.Ej3B3Y),
                                            children: (0, l.jsx)(h.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        (0, l.jsx)(K, {
                                            onClick: eC,
                                            ariaLabel: et ? q.intl.string(q.t.YqAjXy) : q.intl.string(q.t.w4m945),
                                            children: et
                                                ? (0, l.jsx)(o._RO, { size: "refresh_sm", color: "currentColor" })
                                                : (0, l.jsx)(o.HKD, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        (0, l.jsx)(K, {
                                            onClick: I,
                                            ariaLabel: q.intl.string(q.t.cpT0Cq),
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
function Z(e) {
    let { timeRemaining: t, text: n } = e;
    return (0, l.jsxs)("div", {
        className: X.pP,
        children: [
            (0, l.jsxs)("div", {
                className: X.Wi,
                children: [
                    (0, l.jsx)(o.Cp8, { size: "refresh_sm", color: "currentColor" }),
                    (0, l.jsx)(o.Text, { variant: "text-sm/semibold", color: "currentColor", children: n }),
                ],
            }),
            null != t && (0, l.jsx)(o.Text, { variant: "text-sm/medium", color: "currentColor", children: t }),
        ],
    });
}
