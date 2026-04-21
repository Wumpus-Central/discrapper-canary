l.d(t, { A: () => K });
var n = l(627968),
    a = l(64700),
    s = l(503698),
    i = l.n(s),
    r = l(311907),
    o = l(397927),
    c = l(964486),
    d = l(736653),
    u = l(793574),
    _ = l(688810),
    m = l(429913),
    h = l(427209),
    x = l(993046),
    f = l(801228),
    p = l(309954),
    g = l(652165),
    b = l(594832),
    C = l(961350),
    j = l(328968),
    v = l(954571),
    A = l(371794),
    T = l(871123),
    N = l(733391),
    S = l(832163),
    I = l(681064),
    k = l(429635),
    E = l(476438),
    y = l(44724),
    R = l(345938),
    O = l(510022),
    U = l(108105),
    L = l(317560),
    B = l(533406),
    P = l(148252),
    w = l(263911),
    D = l(971146),
    M = l(430580),
    H = l(743693),
    F = l(995393),
    G = l(188275),
    W = l(652215),
    Y = l(985018),
    q = l(334588);
function X(e) {
    let { sku: t } = e;
    return null == t
        ? null
        : (0, n.jsxs)("div", {
              className: q.AX,
              children: [
                  (0, n.jsx)(o.Heading, { variant: "heading-lg/bold", color: "text-strong", children: t.name }),
                  (0, n.jsx)(o.Text, { variant: "text-sm/medium", color: "text-subtle", children: t.description }),
              ],
          });
}
function V(e) {
    let { sku: t } = e,
        { normalPrice: l, discountedPrice: a, discountPercent: s } = (0, x.CD)({ sku: t });
    if (null == l) return null;
    let i = null != t.orbsReward && t.orbsReward > 0;
    return (0, n.jsxs)("div", {
        className: q.sj,
        children: [
            (0, n.jsx)(D.V, { textColor: "text-subtle" }),
            (0, n.jsxs)("div", {
                className: q.hO,
                children: [
                    null != s && null != a
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(o.Text, { variant: "text-md/medium", className: q.Jb, children: l }),
                                  (0, n.jsx)(o.Text, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: a,
                                  }),
                                  (0, n.jsx)(o.Text, { variant: "text-md/bold", className: q.Fi, children: s }),
                              ],
                          })
                        : (0, n.jsx)(o.Text, { variant: "text-md/semibold", color: "text-strong", children: l }),
                    i &&
                        (0, n.jsx)("div", {
                            className: q.pt,
                            children: (0, n.jsx)(o.Text, {
                                variant: "text-sm/semibold",
                                color: "currentColor",
                                children: Y.intl.format(Y.t.GiVd2Q, {
                                    orbCount: t.orbsReward,
                                    orbIconHook: () =>
                                        (0, n.jsx)(o.Cp8, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                }),
                            }),
                        }),
                ],
            }),
        ],
    });
}
function J(e) {
    let {
            sku: t,
            guildId: l,
            shouldShowShopLink: s,
            giftRecipient: i,
            giftingOrigin: c,
            trackPDPClick: d,
            analyticsLocations: _,
        } = e,
        h = t.id,
        f = (0, r.bG)([S.A], () => S.A.getNormalizedSKUEligibility(h), [h]),
        b = (0, I.R)({ location: "product_details_modal" }),
        C = (0, x.JL)({ sku: t });
    (0, p.W)({ disableFetch: !b });
    let j = (0, m.h)(t.applicationId),
        v = a.useCallback(() => {
            null != l &&
                (d(F.Jq.BUY_BUTTON),
                (0, B.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [..._, u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: l,
                    },
                ));
        }, [t, d, l, _]),
        A = a.useCallback(() => {
            null != l && (0, y.X)({ guildId: l });
        }, [l]),
        T = a.useCallback(() => {
            null != l && (d(F.Jq.VISIT_SHOP), (0, o.s7G)(), (0, y.default)({ guildId: l }));
        }, [l, d]),
        N = a.useCallback(() => {
            d(F.Jq.GIFT_BUTTON),
                (0, B.a)(
                    t,
                    { isGift: !0, giftRecipient: i, giftingOrigin: c },
                    { analyticsLocations: [..._, u.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [t, d, i, c, _]),
        k = a.useCallback(() => {
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
    return (0, n.jsxs)("div", {
        className: q.NC,
        children: [
            !f &&
                (0, n.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: Y.intl.string(Y.t.IqlPbQ),
                }),
            f
                ? (0, n.jsxs)("div", {
                      className: q.mr,
                      children: [
                          (0, n.jsx)(o.Button, {
                              variant: "primary",
                              onClick: v,
                              text: Y.intl.string(Y.t.boqtTA),
                              fullWidth: !0,
                          }),
                          (0, n.jsx)(o.DUT, {
                              className: q.xP,
                              onClick: N,
                              "aria-label": Y.intl.string(Y.t.QAZA5f),
                              role: "button",
                              children: (0, n.jsx)(o.okO, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  })
                : (0, n.jsx)(o.Button, {
                      icon: o.okO,
                      variant: "secondary",
                      onClick: N,
                      text: Y.intl.string(Y.t.QAZA5f),
                      fullWidth: !0,
                  }),
            s &&
                (0, n.jsx)(o.Button, {
                    icon: o.U1X,
                    variant: "secondary",
                    onMouseDown: A,
                    onClick: T,
                    text: Y.intl.string(Y.t["2QW9nR"]),
                    fullWidth: !0,
                }),
            b &&
                f &&
                null != C &&
                (0, n.jsx)(o.Button, {
                    icon: o.Cp8,
                    variant: "secondary",
                    onClick: k,
                    text: Y.intl.format(Y.t.lOtBOI, {
                        orbPrice: C.amount,
                        orbIconHook: () => (0, n.jsx)(o.Cp8, { size: "xs", color: "currentColor" }, "orbs-icon"),
                    }),
                    fullWidth: !0,
                }),
        ],
    });
}
function z(e) {
    let { selectedCarouselItem: t, applicationId: l } = e;
    if (null == t) return null;
    let a = null != t.labelIconAssetId ? (0, A.YE)(l, t.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: q.HI,
        children: [
            null != a && (0, n.jsx)("img", { className: q.IX, src: a, alt: "" }, a),
            (0, n.jsx)(o.Text, { variant: "text-xs/medium", color: "text-subtle", children: t.label }),
        ],
    });
}
function $(e) {
    let { onClick: t, children: l, ariaLabel: a } = e;
    return (0, n.jsx)(o.DUT, { onClick: t, className: q.jU, "aria-label": a, role: "button", children: l });
}
function K(e) {
    let {
            transitionState: t,
            returnRef: l,
            skuId: s,
            applicationId: u,
            isStorefront: m,
            giftRecipient: x,
            giftingOrigin: p,
            analyticsLocations: g,
            analyticsContext: I,
            onClose: y,
        } = e,
        { analyticsLocations: O } = (0, _.Ay)(g ?? []),
        { guildId: L } = (0, T.nG)(u),
        B = (0, r.bG)([C.default], () => C.default.getId());
    a.useEffect(() => {
        null != L && null != s && (0, N.iR)(L, s);
    }, [L, s]);
    let D = (0, k.A)({ guildId: L }),
        K = (0, r.bG)([S.A], () => S.A.getSkuAssets()),
        Z = (0, r.bG)([j.A], () => j.A.isFetchingForSKU(s)),
        ee = (0, o.Mwr)((0, d.Ay)()),
        [et, el] = a.useState(!0),
        en = (0, f.A)({ skuId: s, location: "SocialLayerStorefrontProductDetailsModal" }),
        [ea, es] = a.useState(0),
        [ei, er] = a.useMemo(() => (0, U.L)(en?.tenantMetadata?.socialLayer?.carouselItems ?? [], u, K), [en, u, K]),
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
            v.default.track(W.HAw.OPEN_MODAL, { location_stack: O, type: G.Nh, sku_id: s, application_id: u }),
                (0, N.Xw)();
        });
    let ef = a.useCallback(
            (e) => {
                v.default.track(W.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: I?.sessionId,
                    sku_id: s,
                    guild_id: I?.guildId,
                    cta_type: e,
                    location_stack: O,
                });
            },
            [I, s, O],
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
            null != en &&
                null != L &&
                (ef(F.Jq.FORWARD_BUTTON),
                (0, R.d)({
                    sku: en,
                    guildId: L,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: O,
                    analyticsContext: I,
                }));
        }, [en, L, ef, O, I]),
        eb = a.useCallback(() => {
            ef(F.Jq.WISHLIST_BUTTON);
        }, [ef]),
        eC = a.useCallback(() => {
            el(!et), ef(F.Jq.MUTE_BUTTON);
        }, [et, ef]),
        ej = (0, E.B)(),
        ev = en?.tenantMetadata?.socialLayer;
    if (null == en || null == ev) return Z ? (0, n.jsx)(o.y$y, {}) : null;
    let eA = D?.storefront,
        eT = eA?.logoAssetId != null ? (0, A.YE)(eA.applicationId, eA.logoAssetId, 75) : null,
        eN = eA?.lightThemeLogoAssetId != null ? (0, A.YE)(eA.applicationId, eA.lightThemeLogoAssetId, 75) : null,
        eS = null;
    eS = ee ? (eT ?? eN) : (eN ?? eT);
    let eI = null != en.orbsReward && en.orbsReward > 0;
    return (0, n.jsx)(o.EOs, {
        transitionState: t,
        "hide-shadow": !0,
        parentComponent: "SocialLayerStorefrontProductDetailsModal",
        className: q.CR,
        size: o.rIJ.DYNAMIC,
        returnRef: l,
        children: (0, n.jsxs)(o.$mQ, {
            className: q.jE,
            children: [
                eI &&
                    (0, n.jsx)(Q, {
                        timeRemaining: ej ?? void 0,
                        text: Y.intl.format(Y.t.d3njXi, { orbCount: en.orbsReward }),
                    }),
                (0, n.jsxs)("div", {
                    className: q.nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: q.op,
                            children: [
                                (0, n.jsx)("div", {
                                    className: q.r$,
                                    children:
                                        null != eS
                                            ? (0, n.jsx)("img", { className: q.wm, src: eS, alt: eA?.title ?? "" })
                                            : null,
                                }),
                                (0, n.jsxs)("div", {
                                    ref: ec,
                                    className: q.zD,
                                    children: [
                                        en.exclusive &&
                                            (0, n.jsx)("div", { className: q.K3, children: (0, n.jsx)(w.I, {}) }),
                                        eh
                                            ? (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(X, { sku: en }),
                                                      (0, n.jsx)("div", {
                                                          className: q._D,
                                                          children: (0, n.jsx)(P.A, {
                                                              mediaItems: er,
                                                              labels: ei.map((e) => e.label),
                                                              selectedIndex: e_,
                                                              onSelectIndex: ep,
                                                          }),
                                                      }),
                                                      (0, n.jsx)("div", {
                                                          className: q.Jv,
                                                          children: (0, n.jsx)(z, {
                                                              applicationId: u,
                                                              selectedCarouselItem: em,
                                                          }),
                                                      }),
                                                  ],
                                              })
                                            : (0, n.jsxs)("div", {
                                                  className: q.cP,
                                                  children: [
                                                      (0, n.jsx)(o.Heading, {
                                                          variant: "heading-lg/bold",
                                                          color: "text-strong",
                                                          children: en.name,
                                                      }),
                                                      (0, n.jsx)(z, { applicationId: u, selectedCarouselItem: em }),
                                                      (0, n.jsx)(o.Text, {
                                                          variant: "text-sm/medium",
                                                          color: "text-subtle",
                                                          children: en.description,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: i()(q.Td, { [q.t7]: ed }),
                                    children: [
                                        (0, n.jsx)(V, { sku: en }),
                                        (0, n.jsx)(J, {
                                            sku: en,
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
                        (0, n.jsxs)("div", {
                            className: q.il,
                            children: [
                                (0, n.jsx)(M.A, { item: er[e_], isMuted: et, alt: em?.label ?? en.name }),
                                (0, n.jsxs)("div", {
                                    className: q.V7,
                                    children: [
                                        null != en &&
                                            (0, n.jsx)(H._, {
                                                sku: en,
                                                isCardHovered: !0,
                                                className: i()(q.jU, q.ij),
                                                trackButtonClick: eb,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, n.jsx)($, {
                                            onClick: eg,
                                            ariaLabel: Y.intl.string(Y.t.Ej3B3Y),
                                            children: (0, n.jsx)(h.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        ex &&
                                            (0, n.jsx)($, {
                                                onClick: eC,
                                                ariaLabel: et ? Y.intl.string(Y.t.YqAjXy) : Y.intl.string(Y.t.w4m945),
                                                children: et
                                                    ? (0, n.jsx)(o._RO, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, n.jsx)(o.HKD, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, n.jsx)($, {
                                            onClick: y,
                                            ariaLabel: Y.intl.string(Y.t.cpT0Cq),
                                            children: (0, n.jsx)(o.d$L, { size: "refresh_sm", color: "currentColor" }),
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
    let { timeRemaining: t, text: l } = e;
    return (0, n.jsxs)("div", {
        className: q.pP,
        children: [
            (0, n.jsxs)("div", {
                className: q.Wi,
                children: [
                    (0, n.jsx)(o.Cp8, { size: "refresh_sm", color: "currentColor" }),
                    (0, n.jsx)(o.Text, { variant: "text-sm/semibold", color: "currentColor", children: l }),
                ],
            }),
            null != t && (0, n.jsx)(o.Text, { variant: "text-sm/medium", color: "currentColor", children: t }),
        ],
    });
}
