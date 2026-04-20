n.d(t, { L: () => $, default: () => en }), n(321073);
var l = n(627968),
    a = n(64700),
    s = n(310784),
    i = n.n(s),
    r = n(503698),
    o = n.n(r),
    c = n(311907),
    d = n(397927),
    u = n(262427),
    _ = n(964486),
    m = n(736653),
    h = n(793574),
    x = n(688810),
    f = n(429913),
    p = n(654107),
    g = n(427209),
    b = n(993046),
    C = n(801228),
    j = n(309954),
    T = n(652165),
    A = n(594832),
    v = n(961350),
    N = n(328968),
    S = n(954571),
    I = n(371794),
    k = n(871123),
    E = n(733391),
    y = n(832163),
    R = n(207654),
    O = n(681064),
    U = n(857875),
    L = n(476438),
    P = n(44724),
    B = n(345938),
    D = n(510022),
    w = n(317560),
    M = n(336231),
    H = n(533406),
    F = n(263911),
    Y = n(971146),
    G = n(953590),
    W = n(743693),
    q = n(995393),
    X = n(188275),
    J = n(652215),
    V = n(985018),
    z = n(199138);
function $(e, t, n) {
    let l = [],
        a = [];
    if (null == e || 0 === e.length) return [l, a];
    for (let s of e) {
        let e = null != s.assetId ? n[s.assetId] : null;
        null != e &&
            (l.push(s),
            e.mime_type.startsWith("video/")
                ? a.push({
                      type: "video",
                      src: (0, I.YE)(t, e, G.B, "mp4"),
                      videoThumbnailSrc: (0, I.YE)(t, e, G.B, "webp"),
                      thumbnailSrc: null != s.thumbnailAssetId ? (0, I.YE)(t, s.thumbnailAssetId, 112, "webp") : void 0,
                      backgroundSrc:
                          null != s.backgroundAssetId ? (0, I.YE)(t, s.backgroundAssetId, G.B, k.pV) : void 0,
                  })
                : a.push({
                      type: "image",
                      src: (0, I.YE)(t, e, G.B, "webp"),
                      thumbnailSrc: null != s.thumbnailAssetId ? (0, I.YE)(t, s.thumbnailAssetId, 112, "webp") : void 0,
                      backgroundSrc:
                          null != s.backgroundAssetId ? (0, I.YE)(t, s.backgroundAssetId, G.B, k.pV) : void 0,
                  }));
    }
    return [l, a];
}
function K(e) {
    let { sku: t } = e,
        {
            normalPrice: n,
            discountedPrice: a,
            discountPercent: s,
        } = (0, b.ou)({ sku: t, priceSetAssignmentPurchaseType: J.lid.DEFAULT });
    return null == n
        ? null
        : null != s && null != a
          ? (0, l.jsxs)("div", {
                className: z.TS,
                children: [
                    (0, l.jsx)(d.Heading, {
                        className: z.of,
                        variant: "heading-md/medium",
                        color: "text-muted",
                        lineClamp: 1,
                        children: n,
                    }),
                    (0, l.jsx)(d.Heading, { variant: "heading-md/bold", color: "text-strong", children: a }),
                    (0, l.jsxs)(d.Heading, {
                        variant: "heading-md/bold",
                        color: "text-feedback-positive",
                        lineClamp: 1,
                        children: ["(", s, ")"],
                    }),
                ],
            })
          : (0, l.jsx)(d.Heading, { variant: "heading-md/semibold", color: "text-strong", children: n });
}
function Q(e) {
    let {
            sku: t,
            guildId: n,
            shouldShowShopLink: s,
            giftRecipient: i,
            giftingOrigin: r,
            trackPDPClick: o,
            analyticsLocations: u,
        } = e,
        _ = t?.id,
        m = (0, R.b)({ location: "product_details_modal" }),
        x = (0, c.bG)([y.A], () => (null != _ ? y.A.getNormalizedSKUEligibility(_) : void 0), [_]),
        p = (0, L.B)(),
        g = (0, O.R)({ location: "product_details_modal" }),
        C = (0, b.JL)({ sku: t, priceSetAssignmentPurchaseType: J.lid.DEFAULT });
    (0, j.W)({ disableFetch: !g });
    let A = (0, f.h)(t?.applicationId),
        v = a.useCallback(() => {
            null != t &&
                null != n &&
                (o(q.Jq.BUY_BUTTON),
                (0, H.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...u, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: n,
                    },
                ));
        }, [t, o, n, u]),
        N = a.useCallback(() => {
            null != n && (0, P.X)({ guildId: n });
        }, [n]),
        S = a.useCallback(() => {
            null != n && (o(q.Jq.VISIT_SHOP), (0, d.s7G)(), (0, P.default)({ guildId: n }));
        }, [n, o]),
        I = a.useCallback(() => {
            null != t &&
                (o(q.Jq.GIFT_BUTTON),
                (0, H.a)(
                    t,
                    { isGift: !0, giftRecipient: i, giftingOrigin: r },
                    { analyticsLocations: [...u, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, o, i, r, u]),
        k = a.useCallback(() => {
            if (null == t || null == A || !g) return;
            o(q.Jq.BUY_WITH_ORBS_BUTTON);
            let e = [...u, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON];
            (0, T.B4)({
                skuId: t.id,
                applicationId: t.applicationId,
                onCheckoutSuccess: () => {
                    (0, w.j)(), (0, D.n)({ sku: t, application: A, analyticsLocations: e });
                },
                analyticsLocations: e,
            });
        }, [t, o, u, A, g]);
    return null == t
        ? null
        : (0, l.jsxs)("div", {
              className: z.wt,
              children: [
                  t.exclusive && (0, l.jsx)("div", { className: z.K3, children: (0, l.jsx)(F.I, {}) }),
                  (0, l.jsxs)("div", {
                      className: z.AX,
                      children: [
                          (0, l.jsx)(d.Heading, { variant: "heading-xl/bold", color: "text-strong", children: t.name }),
                          (0, l.jsx)(d.Text, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: t.description,
                          }),
                      ],
                  }),
                  (0, l.jsxs)("div", {
                      className: z.sj,
                      children: [
                          m && (0, l.jsx)(Y.V, {}),
                          (0, l.jsx)(K, { sku: t }),
                          null != t.orbsReward &&
                              t.orbsReward > 0 &&
                              (0, l.jsx)(ea, {
                                  timeRemaining: p ?? void 0,
                                  text: V.intl.format(V.t.d3njXi, { orbCount: t.orbsReward }),
                              }),
                      ],
                  }),
                  (0, l.jsxs)("div", {
                      className: z.NC,
                      children: [
                          !x &&
                              (0, l.jsx)(d.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children: V.intl.string(V.t.IqlPbQ),
                              }),
                          x &&
                              (0, l.jsx)(d.Button, {
                                  variant: "primary",
                                  onClick: v,
                                  text: V.intl.string(V.t.boqtTA),
                                  fullWidth: !0,
                              }),
                          g &&
                              x &&
                              null != C &&
                              (0, l.jsx)(d.Button, {
                                  icon: d.Cp8,
                                  variant: "secondary",
                                  onClick: k,
                                  text: V.intl.format(V.t.lOtBOI, {
                                      orbPrice: C.amount,
                                      orbIconHook: () =>
                                          (0, l.jsx)(d.Cp8, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                  }),
                                  fullWidth: !0,
                              }),
                          (0, l.jsxs)(d.ButtonGroup, {
                              wrap: !1,
                              fullWidth: !0,
                              children: [
                                  s
                                      ? (0, l.jsx)(d.Button, {
                                            icon: d.U1X,
                                            variant: "secondary",
                                            onMouseDown: N,
                                            onClick: S,
                                            text: V.intl.string(V.t["2QW9nR"]),
                                            fullWidth: !0,
                                        })
                                      : null,
                                  (0, l.jsx)(d.Button, {
                                      icon: d.okO,
                                      variant: "secondary",
                                      onClick: I,
                                      text: V.intl.string(V.t.QAZA5f),
                                      fullWidth: !0,
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
function Z(e) {
    let { sku: t, applicationId: n, assets: s, onSelectedCarouselItemChange: i, isMuted: r, trackPDPClick: o } = e,
        [c, d] = a.useState([]),
        [u, _] = a.useState([]),
        m = a.useCallback(
            (e) => {
                let t = u.findIndex((t) => t === e);
                i?.(c[t] ?? null);
            },
            [i, c, u],
        );
    return (a.useEffect(() => {
        let [e, l] = $(t?.tenantMetadata?.socialLayer?.carouselItems ?? [], n, s);
        d(e), _(l);
    }, [t, s, n]),
    0 === u.length)
        ? null
        : (0, l.jsx)(G.A, { className: z.Dk, items: u, onItemChange: m, isMuted: r, onTrackClick: o });
}
function ee(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let a = null != t.labelIconAssetId ? (0, I.YE)(n, t.labelIconAssetId) : null;
    return (0, l.jsxs)("div", {
        className: z.HI,
        children: [
            null != a && (0, l.jsx)("img", { className: z.IX, src: a, alt: t.label }, a),
            (0, l.jsx)(d.Text, { variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function et(e) {
    let { onClick: t, children: n, ariaLabel: a } = e;
    return (0, l.jsx)(d.DUT, { onClick: t, className: z.jU, "aria-label": a, role: "button", children: n });
}
function en(e) {
    return (0, U.O)({ location: "product_details_modal" }) ? (0, l.jsx)(M.A, { ...e }) : (0, l.jsx)(el, { ...e });
}
function el(e) {
    let {
            transitionState: t,
            returnRef: n,
            skuId: s,
            applicationId: r,
            isStorefront: u,
            giftRecipient: h,
            giftingOrigin: f,
            analyticsLocations: b,
            analyticsContext: j,
            onClose: T,
        } = e,
        { analyticsLocations: R } = (0, x.Ay)(b ?? []),
        { guildId: O } = (0, k.nG)(r),
        U = (0, c.bG)([v.default], () => v.default.getId());
    a.useEffect(() => {
        null != O && null != s && (0, E.iR)(O, s);
    }, [O, s]);
    let L = (0, c.bG)([y.A], () => y.A.getStorefrontMetadata(r), [r]),
        P = (0, c.bG)([y.A], () => y.A.getSkuAssets()),
        D = (0, c.bG)([N.A], () => N.A.isFetchingForSKU(s)),
        w = (0, d.Mwr)((0, m.Ay)()),
        [M, H] = a.useState(!0),
        F = (0, C.A)({ skuId: s, location: "SocialLayerStorefrontProductDetailsModal" }),
        [Y, G] = a.useState(null),
        $ = (function (e, t) {
            let n = t?.labelIconAssetId != null ? (0, I.YE)(e, t?.labelIconAssetId) : null,
                [l, s] = (0, p.rh)(n, "#000000"),
                r = a.useMemo(() => {
                    let e = i()(l).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [l]);
            return null != n && "#000000" !== l ? r : void 0;
        })(r, Y);
    (0, A.pE)(),
        (0, _.Ay)(() => {
            S.default.track(J.HAw.OPEN_MODAL, { location_stack: R, type: X.Nh, sku_id: s, application_id: r }),
                (0, E.Xw)();
        });
    let K = a.useCallback(
        (e) => {
            S.default.track(J.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                slayer_storefront_session_id: j?.sessionId,
                sku_id: s,
                guild_id: j?.guildId,
                cta_type: e,
                location_stack: R,
            });
        },
        [j, s, R],
    );
    a.useEffect(() => {
        null == O || null == s || N.A.isFetchingForSKU(s) || (0, E.qf)(O, s);
    }, [O, s]);
    let en = a.useCallback(() => {
            null != F &&
                null != O &&
                (K(q.Jq.FORWARD_BUTTON),
                (0, B.d)({
                    sku: F,
                    guildId: O,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: R,
                    analyticsContext: j,
                }));
        }, [F, O, K, R, j]),
        el = a.useCallback(() => {
            K(q.Jq.WISHLIST_BUTTON);
        }, [K]),
        ea = a.useCallback(() => {
            H(!M), K(q.Jq.MUTE_BUTTON);
        }, [M, K]);
    if (null == F?.tenantMetadata?.socialLayer) return D ? (0, l.jsx)(d.y$y, {}) : null;
    let es = L?.logoAssetId != null ? (0, I.YE)(r, L.logoAssetId, 75) : null,
        ei = L?.lightThemeLogoAssetId != null ? (0, I.YE)(r, L.lightThemeLogoAssetId, 75) : null,
        er = null;
    return (
        (er = w ? (es ?? ei) : (ei ?? es)),
        (0, l.jsx)(d.EOs, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: z.CR,
            size: d.rIJ.DYNAMIC,
            returnRef: n,
            children: (0, l.jsxs)(d.$mQ, {
                className: z.jE,
                children: [
                    (0, l.jsxs)("div", {
                        className: z.op,
                        style: { background: $ },
                        children: [
                            (0, l.jsx)("div", {
                                className: z.r$,
                                children: null != er ? (0, l.jsx)("img", { className: z.wm, src: er, alt: "" }) : null,
                            }),
                            (0, l.jsx)(ee, { applicationId: r, selectedCarouselItem: Y }),
                            (0, l.jsx)(Q, {
                                sku: F,
                                guildId: O,
                                shouldShowShopLink: !u,
                                giftRecipient: h?.id !== U ? h : void 0,
                                giftingOrigin: h?.id !== U ? f : void 0,
                                trackPDPClick: K,
                                analyticsLocations: R,
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: z.Cf,
                        children: [
                            (0, l.jsx)(Z, {
                                sku: F,
                                applicationId: r,
                                assets: P,
                                onSelectedCarouselItemChange: G,
                                isMuted: M,
                                trackPDPClick: K,
                            }),
                            (0, l.jsxs)("div", {
                                className: z.V7,
                                children: [
                                    null != F &&
                                        (0, l.jsx)(W._, {
                                            sku: F,
                                            isCardHovered: !0,
                                            className: o()(z.jU, z.ij),
                                            trackButtonClick: el,
                                            variant: "overlay-secondary",
                                            location: "social_layer_storefront_product_details_modal",
                                        }),
                                    (0, l.jsx)(et, {
                                        onClick: en,
                                        ariaLabel: V.intl.string(V.t.Ej3B3Y),
                                        children: (0, l.jsx)(g.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, l.jsx)(et, {
                                        onClick: ea,
                                        ariaLabel: M ? V.intl.string(V.t.YqAjXy) : V.intl.string(V.t.w4m945),
                                        children: M
                                            ? (0, l.jsx)(d._RO, { size: "refresh_sm", color: "currentColor" })
                                            : (0, l.jsx)(d.HKD, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, l.jsx)(et, {
                                        onClick: T,
                                        ariaLabel: V.intl.string(V.t.cpT0Cq),
                                        children: (0, l.jsx)(d.d$L, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function ea(e) {
    let { timeRemaining: t, text: n } = e;
    return (0, l.jsx)(u.A, {
        className: z.qw,
        Icon: d.Cp8,
        children: (0, l.jsxs)("div", {
            className: z.Yu,
            children: [
                (0, l.jsxs)(d.Text, {
                    variant: "text-xs/bold",
                    color: "currentColor",
                    children: [V.intl.string(V.t.yYEZGi), null != t && ` (${t})`],
                }),
                (0, l.jsx)("div", {
                    className: z.fb,
                    children: (0, l.jsx)(d.Text, { variant: "text-xs/medium", color: "currentColor", children: n }),
                }),
            ],
        }),
    });
}
