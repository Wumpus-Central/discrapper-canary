n.d(t, { default: () => Z }), n(321073);
var a = n(627968),
    l = n(64700),
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
    p = n(688810),
    f = n(429913),
    g = n(654107),
    x = n(427209),
    C = n(993046),
    b = n(801228),
    A = n(309954),
    T = n(652165),
    v = n(594832),
    E = n(961350),
    j = n(328968),
    N = n(954571),
    S = n(371794),
    I = n(871123),
    k = n(733391),
    y = n(832163),
    R = n(207654),
    O = n(681064),
    U = n(476438),
    w = n(44724),
    P = n(345938),
    L = n(510022),
    B = n(317560),
    D = n(533406),
    M = n(263911),
    H = n(971146),
    F = n(953590),
    G = n(743693),
    W = n(995393),
    Y = n(188275),
    q = n(652215),
    X = n(985018),
    V = n(136242);
function $(e) {
    let { sku: t } = e,
        {
            normalPrice: n,
            discountedPrice: l,
            discountPercent: s,
        } = (0, C.ou)({ sku: t, priceSetAssignmentPurchaseType: q.lid.DEFAULT });
    return null == n
        ? null
        : null != s && null != l
          ? (0, a.jsxs)("div", {
                className: V.TS,
                children: [
                    (0, a.jsx)(d.Heading, {
                        className: V.of,
                        variant: "heading-md/medium",
                        color: "text-muted",
                        lineClamp: 1,
                        children: n,
                    }),
                    (0, a.jsx)(d.Heading, { variant: "heading-md/bold", color: "text-strong", children: l }),
                    (0, a.jsxs)(d.Heading, {
                        variant: "heading-md/bold",
                        color: "text-feedback-positive",
                        lineClamp: 1,
                        children: ["(", s, ")"],
                    }),
                ],
            })
          : (0, a.jsx)(d.Heading, { variant: "heading-md/semibold", color: "text-strong", children: n });
}
function J(e) {
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
        p = (0, c.bG)([y.A], () => (null != _ ? y.A.getNormalizedSKUEligibility(_) : void 0), [_]),
        g = (0, U.B)(),
        x = (0, O.R)({ location: "product_details_modal" }),
        b = (0, C.JL)({ sku: t, priceSetAssignmentPurchaseType: q.lid.DEFAULT });
    (0, A.W)({ disableFetch: !x });
    let v = (0, f.h)(t?.applicationId),
        E = l.useCallback(() => {
            null != t &&
                null != n &&
                (o(W.Jq.BUY_BUTTON),
                (0, D.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...u, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: n,
                    },
                ));
        }, [t, o, n, u]),
        j = l.useCallback(() => {
            null != n && (0, w.X)({ guildId: n });
        }, [n]),
        N = l.useCallback(() => {
            null != n && (o(W.Jq.VISIT_SHOP), (0, d.s7G)(), (0, w.default)({ guildId: n }));
        }, [n, o]),
        S = l.useCallback(() => {
            null != t &&
                (o(W.Jq.GIFT_BUTTON),
                (0, D.a)(
                    t,
                    { isGift: !0, giftRecipient: i, giftingOrigin: r },
                    { analyticsLocations: [...u, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, o, i, r, u]),
        I = l.useCallback(() => {
            if (null == t || null == v || !x) return;
            o(W.Jq.BUY_WITH_ORBS_BUTTON);
            let e = [...u, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON];
            (0, T.B4)({
                skuId: t.id,
                applicationId: t.applicationId,
                onCheckoutSuccess: () => {
                    (0, B.j)(), (0, L.n)({ sku: t, application: v, analyticsLocations: e });
                },
                analyticsLocations: e,
            });
        }, [t, o, u, v, x]);
    return null == t
        ? null
        : (0, a.jsxs)("div", {
              className: V.wt,
              children: [
                  t.exclusive && (0, a.jsx)("div", { className: V.K3, children: (0, a.jsx)(M.I, {}) }),
                  (0, a.jsxs)("div", {
                      className: V.AX,
                      children: [
                          (0, a.jsx)(d.Heading, { variant: "heading-xl/bold", color: "text-strong", children: t.name }),
                          (0, a.jsx)(d.Text, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: t.description,
                          }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: V.sj,
                      children: [
                          m && (0, a.jsx)(H.V, {}),
                          (0, a.jsx)($, { sku: t }),
                          null != t.orbsReward &&
                              t.orbsReward > 0 &&
                              (0, a.jsx)(ee, {
                                  timeRemaining: g ?? void 0,
                                  text: X.intl.format(X.t.d3njXi, { orbCount: t.orbsReward }),
                              }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: V.NC,
                      children: [
                          !p &&
                              (0, a.jsx)(d.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children: X.intl.string(X.t.IqlPbQ),
                              }),
                          p &&
                              (0, a.jsx)(d.Button, {
                                  variant: "primary",
                                  onClick: E,
                                  text: X.intl.string(X.t.boqtTA),
                                  fullWidth: !0,
                              }),
                          x &&
                              p &&
                              null != b &&
                              (0, a.jsx)(d.Button, {
                                  icon: d.Cp8,
                                  variant: "secondary",
                                  onClick: I,
                                  text: X.intl.format(X.t.lOtBOI, {
                                      orbPrice: b.amount,
                                      orbIconHook: () =>
                                          (0, a.jsx)(d.Cp8, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                  }),
                                  fullWidth: !0,
                              }),
                          (0, a.jsxs)(d.ButtonGroup, {
                              wrap: !1,
                              fullWidth: !0,
                              children: [
                                  s
                                      ? (0, a.jsx)(d.Button, {
                                            icon: d.U1X,
                                            variant: "secondary",
                                            onMouseDown: j,
                                            onClick: N,
                                            text: X.intl.string(X.t["2QW9nR"]),
                                            fullWidth: !0,
                                        })
                                      : null,
                                  (0, a.jsx)(d.Button, {
                                      icon: d.okO,
                                      variant: "secondary",
                                      onClick: S,
                                      text: X.intl.string(X.t.QAZA5f),
                                      fullWidth: !0,
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
function z(e) {
    let { sku: t, applicationId: n, assets: s, onSelectedCarouselItemChange: i, isMuted: r, trackPDPClick: o } = e,
        [c, d] = l.useState([]),
        [u, _] = l.useState([]),
        m = l.useCallback(
            (e) => {
                let t = u.findIndex((t) => t === e);
                i?.(c[t] ?? null);
            },
            [i, c, u],
        );
    return (l.useEffect(() => {
        let [e, a] = (function (e, t, n) {
            let a = [],
                l = [];
            if (null == e || 0 === e.length) return [a, l];
            for (let s of e) {
                let e = null != s.assetId ? n[s.assetId] : null;
                null != e &&
                    (a.push(s),
                    e.mime_type.startsWith("video/")
                        ? l.push({
                              type: "video",
                              src: (0, S.YE)(t, e, F.B, "mp4"),
                              videoThumbnailSrc: (0, S.YE)(t, e, F.B, "webp"),
                              thumbnailSrc:
                                  null != s.thumbnailAssetId ? (0, S.YE)(t, s.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != s.backgroundAssetId ? (0, S.YE)(t, s.backgroundAssetId, F.B, I.pV) : void 0,
                          })
                        : l.push({
                              type: "image",
                              src: (0, S.YE)(t, e, F.B, "webp"),
                              thumbnailSrc:
                                  null != s.thumbnailAssetId ? (0, S.YE)(t, s.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != s.backgroundAssetId ? (0, S.YE)(t, s.backgroundAssetId, F.B, I.pV) : void 0,
                          }));
            }
            return [a, l];
        })(t?.tenantMetadata?.socialLayer?.carouselItems ?? [], n, s);
        d(e), _(a);
    }, [t, s, n]),
    0 === u.length)
        ? null
        : (0, a.jsx)(F.A, { className: V.Dk, items: u, onItemChange: m, isMuted: r, onTrackClick: o });
}
function K(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let l = null != t.labelIconAssetId ? (0, S.YE)(n, t.labelIconAssetId) : null;
    return (0, a.jsxs)("div", {
        className: V.HI,
        children: [
            null != l && (0, a.jsx)("img", { className: V.IX, src: l, alt: t.label }, l),
            (0, a.jsx)(d.Text, { variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function Q(e) {
    let { onClick: t, children: n, ariaLabel: l } = e;
    return (0, a.jsx)(d.DUT, { onClick: t, className: V.jU, "aria-label": l, role: "button", children: n });
}
function Z(e) {
    let {
            transitionState: t,
            returnRef: n,
            skuId: s,
            applicationId: r,
            isStorefront: u,
            giftRecipient: h,
            giftingOrigin: f,
            analyticsLocations: C,
            analyticsContext: A,
            onClose: T,
        } = e,
        { analyticsLocations: R } = (0, p.Ay)(C ?? []),
        { guildId: O } = (0, I.nG)(r),
        U = (0, c.bG)([E.default], () => E.default.getId());
    l.useEffect(() => {
        null != O && null != s && (0, k.iR)(O, s);
    }, [O, s]);
    let w = (0, c.bG)([y.A], () => y.A.getStorefrontMetadata(r), [r]),
        L = (0, c.bG)([y.A], () => y.A.getSkuAssets()),
        B = (0, c.bG)([j.A], () => j.A.isFetchingForSKU(s)),
        D = (0, d.Mwr)((0, m.Ay)()),
        [M, H] = l.useState(!0),
        F = (0, b.A)({ skuId: s, location: "SocialLayerStorefrontProductDetailsModal" }),
        [$, Z] = l.useState(null),
        ee = (function (e, t) {
            let n = t?.labelIconAssetId != null ? (0, S.YE)(e, t?.labelIconAssetId) : null,
                [a, s] = (0, g.rh)(n, "#000000"),
                r = l.useMemo(() => {
                    let e = i()(a).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [a]);
            return null != n && "#000000" !== a ? r : void 0;
        })(r, $);
    (0, v.pE)(),
        (0, _.Ay)(() => {
            N.default.track(q.HAw.OPEN_MODAL, { location_stack: R, type: Y.Nh, sku_id: s, application_id: r }),
                (0, k.Xw)();
        });
    let et = l.useCallback(
        (e) => {
            N.default.track(q.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                slayer_storefront_session_id: A?.sessionId,
                sku_id: s,
                guild_id: A?.guildId,
                cta_type: e,
                location_stack: R,
            });
        },
        [A, s, R],
    );
    l.useEffect(() => {
        null == O || null == s || j.A.isFetchingForSKU(s) || (0, k.qf)(O, s);
    }, [O, s]);
    let en = l.useCallback(() => {
            null != F &&
                null != O &&
                (et(W.Jq.FORWARD_BUTTON),
                (0, P.d)({
                    sku: F,
                    guildId: O,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: R,
                    analyticsContext: A,
                }));
        }, [F, O, et, R, A]),
        ea = l.useCallback(() => {
            et(W.Jq.WISHLIST_BUTTON);
        }, [et]),
        el = l.useCallback(() => {
            H(!M), et(W.Jq.MUTE_BUTTON);
        }, [M, et]);
    if (null == F?.tenantMetadata?.socialLayer) return B ? (0, a.jsx)(d.y$y, {}) : null;
    let es = w?.logoAssetId != null ? (0, S.YE)(r, w.logoAssetId, 75) : null,
        ei = w?.lightThemeLogoAssetId != null ? (0, S.YE)(r, w.lightThemeLogoAssetId, 75) : null,
        er = null;
    return (
        (er = D ? (es ?? ei) : (ei ?? es)),
        (0, a.jsx)(d.EOs, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: V.CR,
            size: d.rIJ.DYNAMIC,
            returnRef: n,
            children: (0, a.jsxs)(d.$mQ, {
                className: V.jE,
                children: [
                    (0, a.jsxs)("div", {
                        className: V.op,
                        style: { background: ee },
                        children: [
                            (0, a.jsx)("div", {
                                className: V.r$,
                                children: null != er ? (0, a.jsx)("img", { className: V.wm, src: er, alt: "" }) : null,
                            }),
                            (0, a.jsx)(K, { applicationId: r, selectedCarouselItem: $ }),
                            (0, a.jsx)(J, {
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
                    (0, a.jsxs)("div", {
                        className: V.Cf,
                        children: [
                            (0, a.jsx)(z, {
                                sku: F,
                                applicationId: r,
                                assets: L,
                                onSelectedCarouselItemChange: Z,
                                isMuted: M,
                                trackPDPClick: et,
                            }),
                            (0, a.jsxs)("div", {
                                className: V.V7,
                                children: [
                                    null != F &&
                                        (0, a.jsx)(G._, {
                                            sku: F,
                                            isCardHovered: !0,
                                            className: o()(V.jU, V.ij),
                                            trackButtonClick: ea,
                                            variant: "overlay-secondary",
                                            location: "social_layer_storefront_product_details_modal",
                                        }),
                                    (0, a.jsx)(Q, {
                                        onClick: en,
                                        ariaLabel: X.intl.string(X.t.Ej3B3Y),
                                        children: (0, a.jsx)(x.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(Q, {
                                        onClick: el,
                                        ariaLabel: M ? X.intl.string(X.t.YqAjXy) : X.intl.string(X.t.w4m945),
                                        children: M
                                            ? (0, a.jsx)(d._RO, { size: "refresh_sm", color: "currentColor" })
                                            : (0, a.jsx)(d.HKD, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(Q, {
                                        onClick: T,
                                        ariaLabel: X.intl.string(X.t.cpT0Cq),
                                        children: (0, a.jsx)(d.d$L, { size: "refresh_sm", color: "currentColor" }),
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
function ee(e) {
    let { timeRemaining: t, text: n } = e;
    return (0, a.jsx)(u.A, {
        className: V.qw,
        Icon: d.Cp8,
        children: (0, a.jsxs)("div", {
            className: V.Yu,
            children: [
                (0, a.jsxs)(d.Text, {
                    variant: "text-xs/bold",
                    color: "currentColor",
                    children: [X.intl.string(X.t.yYEZGi), null != t && ` (${t})`],
                }),
                (0, a.jsx)("div", {
                    className: V.fb,
                    children: (0, a.jsx)(d.Text, { variant: "text-xs/medium", color: "currentColor", children: n }),
                }),
            ],
        }),
    });
}
