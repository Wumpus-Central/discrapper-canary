n.d(t, { L: () => z, default: () => et }), n(321073);
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
    R = n(681064),
    O = n(857875),
    U = n(476438),
    L = n(44724),
    P = n(345938),
    B = n(510022),
    D = n(317560),
    w = n(336231),
    M = n(533406),
    H = n(263911),
    F = n(971146),
    Y = n(953590),
    G = n(743693),
    W = n(995393),
    q = n(188275),
    X = n(652215),
    J = n(985018),
    V = n(199138);
function z(e, t, n) {
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
                      src: (0, I.YE)(t, e, Y.B, "mp4"),
                      videoThumbnailSrc: (0, I.YE)(t, e, Y.B, "webp"),
                      thumbnailSrc: null != s.thumbnailAssetId ? (0, I.YE)(t, s.thumbnailAssetId, 112, "webp") : void 0,
                      backgroundSrc:
                          null != s.backgroundAssetId ? (0, I.YE)(t, s.backgroundAssetId, Y.B, k.pV) : void 0,
                  })
                : a.push({
                      type: "image",
                      src: (0, I.YE)(t, e, Y.B, "webp"),
                      thumbnailSrc: null != s.thumbnailAssetId ? (0, I.YE)(t, s.thumbnailAssetId, 112, "webp") : void 0,
                      backgroundSrc:
                          null != s.backgroundAssetId ? (0, I.YE)(t, s.backgroundAssetId, Y.B, k.pV) : void 0,
                  }));
    }
    return [l, a];
}
function $(e) {
    let { sku: t } = e,
        {
            normalPrice: n,
            discountedPrice: a,
            discountPercent: s,
        } = (0, b.ou)({ sku: t, priceSetAssignmentPurchaseType: X.lid.DEFAULT });
    return null == n
        ? null
        : null != s && null != a
          ? (0, l.jsxs)("div", {
                className: V.TS,
                children: [
                    (0, l.jsx)(d.Heading, {
                        className: V.of,
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
function K(e) {
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
        m = (0, c.bG)([y.A], () => (null != _ ? y.A.getNormalizedSKUEligibility(_) : void 0), [_]),
        x = (0, U.B)(),
        p = (0, R.R)({ location: "product_details_modal" }),
        g = (0, b.JL)({ sku: t, priceSetAssignmentPurchaseType: X.lid.DEFAULT });
    (0, j.W)({ disableFetch: !p });
    let C = (0, f.h)(t?.applicationId),
        A = a.useCallback(() => {
            null != t &&
                null != n &&
                (o(W.Jq.BUY_BUTTON),
                (0, M.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...u, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: n,
                    },
                ));
        }, [t, o, n, u]),
        v = a.useCallback(() => {
            null != n && (0, L.X)({ guildId: n });
        }, [n]),
        N = a.useCallback(() => {
            null != n && (o(W.Jq.VISIT_SHOP), (0, d.s7G)(), (0, L.default)({ guildId: n }));
        }, [n, o]),
        S = a.useCallback(() => {
            null != t &&
                (o(W.Jq.GIFT_BUTTON),
                (0, M.a)(
                    t,
                    { isGift: !0, giftRecipient: i, giftingOrigin: r },
                    { analyticsLocations: [...u, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, o, i, r, u]),
        I = a.useCallback(() => {
            if (null == t || null == C || !p) return;
            o(W.Jq.BUY_WITH_ORBS_BUTTON);
            let e = [...u, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON];
            (0, T.B4)({
                skuId: t.id,
                applicationId: t.applicationId,
                onCheckoutSuccess: () => {
                    (0, D.j)(), (0, B.n)({ sku: t, application: C, analyticsLocations: e });
                },
                analyticsLocations: e,
            });
        }, [t, o, u, C, p]);
    return null == t
        ? null
        : (0, l.jsxs)("div", {
              className: V.wt,
              children: [
                  t.exclusive && (0, l.jsx)("div", { className: V.K3, children: (0, l.jsx)(H.I, {}) }),
                  (0, l.jsxs)("div", {
                      className: V.AX,
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
                      className: V.sj,
                      children: [
                          (0, l.jsx)(F.V, {}),
                          (0, l.jsx)($, { sku: t }),
                          null != t.orbsReward &&
                              t.orbsReward > 0 &&
                              (0, l.jsx)(el, {
                                  timeRemaining: x ?? void 0,
                                  text: J.intl.format(J.t.d3njXi, { orbCount: t.orbsReward }),
                              }),
                      ],
                  }),
                  (0, l.jsxs)("div", {
                      className: V.NC,
                      children: [
                          !m &&
                              (0, l.jsx)(d.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children: J.intl.string(J.t.IqlPbQ),
                              }),
                          m &&
                              (0, l.jsx)(d.Button, {
                                  variant: "primary",
                                  onClick: A,
                                  text: J.intl.string(J.t.boqtTA),
                                  fullWidth: !0,
                              }),
                          p &&
                              m &&
                              null != g &&
                              (0, l.jsx)(d.Button, {
                                  icon: d.Cp8,
                                  variant: "secondary",
                                  onClick: I,
                                  text: J.intl.format(J.t.lOtBOI, {
                                      orbPrice: g.amount,
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
                                            onMouseDown: v,
                                            onClick: N,
                                            text: J.intl.string(J.t["2QW9nR"]),
                                            fullWidth: !0,
                                        })
                                      : null,
                                  (0, l.jsx)(d.Button, {
                                      icon: d.okO,
                                      variant: "secondary",
                                      onClick: S,
                                      text: J.intl.string(J.t.QAZA5f),
                                      fullWidth: !0,
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
function Q(e) {
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
        let [e, l] = z(t?.tenantMetadata?.socialLayer?.carouselItems ?? [], n, s);
        d(e), _(l);
    }, [t, s, n]),
    0 === u.length)
        ? null
        : (0, l.jsx)(Y.A, { className: V.Dk, items: u, onItemChange: m, isMuted: r, onTrackClick: o });
}
function Z(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let a = null != t.labelIconAssetId ? (0, I.YE)(n, t.labelIconAssetId) : null;
    return (0, l.jsxs)("div", {
        className: V.HI,
        children: [
            null != a && (0, l.jsx)("img", { className: V.IX, src: a, alt: t.label }, a),
            (0, l.jsx)(d.Text, { variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function ee(e) {
    let { onClick: t, children: n, ariaLabel: a } = e;
    return (0, l.jsx)(d.DUT, { onClick: t, className: V.jU, "aria-label": a, role: "button", children: n });
}
function et(e) {
    return (0, O.O)({ location: "product_details_modal" }) ? (0, l.jsx)(w.A, { ...e }) : (0, l.jsx)(en, { ...e });
}
function en(e) {
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
        B = (0, c.bG)([y.A], () => y.A.getSkuAssets()),
        D = (0, c.bG)([N.A], () => N.A.isFetchingForSKU(s)),
        w = (0, d.Mwr)((0, m.Ay)()),
        [M, H] = a.useState(!0),
        F = (0, C.A)({ skuId: s, location: "SocialLayerStorefrontProductDetailsModal" }),
        [Y, z] = a.useState(null),
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
            S.default.track(X.HAw.OPEN_MODAL, { location_stack: R, type: q.Nh, sku_id: s, application_id: r }),
                (0, E.Xw)();
        });
    let et = a.useCallback(
        (e) => {
            S.default.track(X.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
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
                (et(W.Jq.FORWARD_BUTTON),
                (0, P.d)({
                    sku: F,
                    guildId: O,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: R,
                    analyticsContext: j,
                }));
        }, [F, O, et, R, j]),
        el = a.useCallback(() => {
            et(W.Jq.WISHLIST_BUTTON);
        }, [et]),
        ea = a.useCallback(() => {
            H(!M), et(W.Jq.MUTE_BUTTON);
        }, [M, et]);
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
            className: V.CR,
            size: d.rIJ.DYNAMIC,
            returnRef: n,
            children: (0, l.jsxs)(d.$mQ, {
                className: V.jE,
                children: [
                    (0, l.jsxs)("div", {
                        className: V.op,
                        style: { background: $ },
                        children: [
                            (0, l.jsx)("div", {
                                className: V.r$,
                                children: null != er ? (0, l.jsx)("img", { className: V.wm, src: er, alt: "" }) : null,
                            }),
                            (0, l.jsx)(Z, { applicationId: r, selectedCarouselItem: Y }),
                            (0, l.jsx)(K, {
                                sku: F,
                                guildId: O,
                                shouldShowShopLink: !u,
                                giftRecipient: h?.id !== U ? h : void 0,
                                giftingOrigin: h?.id !== U ? f : void 0,
                                trackPDPClick: et,
                                analyticsLocations: R,
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: V.Cf,
                        children: [
                            (0, l.jsx)(Q, {
                                sku: F,
                                applicationId: r,
                                assets: B,
                                onSelectedCarouselItemChange: z,
                                isMuted: M,
                                trackPDPClick: et,
                            }),
                            (0, l.jsxs)("div", {
                                className: V.V7,
                                children: [
                                    null != F &&
                                        (0, l.jsx)(G._, {
                                            sku: F,
                                            isCardHovered: !0,
                                            className: o()(V.jU, V.ij),
                                            trackButtonClick: el,
                                            variant: "overlay-secondary",
                                            location: "social_layer_storefront_product_details_modal",
                                        }),
                                    (0, l.jsx)(ee, {
                                        onClick: en,
                                        ariaLabel: J.intl.string(J.t.Ej3B3Y),
                                        children: (0, l.jsx)(g.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, l.jsx)(ee, {
                                        onClick: ea,
                                        ariaLabel: M ? J.intl.string(J.t.YqAjXy) : J.intl.string(J.t.w4m945),
                                        children: M
                                            ? (0, l.jsx)(d._RO, { size: "refresh_sm", color: "currentColor" })
                                            : (0, l.jsx)(d.HKD, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, l.jsx)(ee, {
                                        onClick: T,
                                        ariaLabel: J.intl.string(J.t.cpT0Cq),
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
function el(e) {
    let { timeRemaining: t, text: n } = e;
    return (0, l.jsx)(u.A, {
        className: V.qw,
        Icon: d.Cp8,
        children: (0, l.jsxs)("div", {
            className: V.Yu,
            children: [
                (0, l.jsxs)(d.Text, {
                    variant: "text-xs/bold",
                    color: "currentColor",
                    children: [J.intl.string(J.t.yYEZGi), null != t && ` (${t})`],
                }),
                (0, l.jsx)("div", {
                    className: V.fb,
                    children: (0, l.jsx)(d.Text, { variant: "text-xs/medium", color: "currentColor", children: n }),
                }),
            ],
        }),
    });
}
