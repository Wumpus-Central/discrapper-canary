n.d(t, { default: () => Z }), n(321073);
var a = n(627968),
    l = n(64700),
    i = n(310784),
    s = n.n(i),
    r = n(503698),
    o = n.n(r),
    d = n(311907),
    c = n(397927),
    u = n(262427),
    _ = n(964486),
    m = n(736653),
    h = n(793574),
    p = n(688810),
    b = n(429913),
    f = n(654107),
    g = n(427209),
    x = n(993046),
    C = n(801228),
    A = n(309954),
    T = n(652165),
    v = n(594832),
    E = n(961350),
    I = n(328968),
    j = n(954571),
    N = n(371794),
    S = n(871123),
    k = n(733391),
    y = n(832163),
    R = n(207654),
    O = n(681064),
    U = n(476438),
    L = n(44724),
    P = n(345938),
    w = n(510022),
    B = n(317560),
    D = n(533406),
    M = n(263911),
    F = n(971146),
    H = n(953590),
    G = n(743693),
    W = n(995393),
    Y = n(188275),
    q = n(652215),
    V = n(985018),
    X = n(136242);
function $(e) {
    let { sku: t } = e,
        {
            normalPrice: n,
            discountedPrice: l,
            discountPercent: i,
        } = (0, x.ou)({ sku: t, priceSetAssignmentPurchaseType: q.lid.DEFAULT });
    return null == n
        ? null
        : null != i && null != l
          ? (0, a.jsxs)("div", {
                className: X.TS,
                children: [
                    (0, a.jsx)(c.Heading, {
                        className: X.of,
                        variant: "heading-md/medium",
                        color: "text-muted",
                        lineClamp: 1,
                        children: n,
                    }),
                    (0, a.jsx)(c.Heading, { variant: "heading-md/bold", color: "text-strong", children: l }),
                    (0, a.jsxs)(c.Heading, {
                        variant: "heading-md/bold",
                        color: "text-feedback-positive",
                        lineClamp: 1,
                        children: ["(", i, ")"],
                    }),
                ],
            })
          : (0, a.jsx)(c.Heading, { variant: "heading-md/semibold", color: "text-strong", children: n });
}
function z(e) {
    let {
            sku: t,
            guildId: n,
            shouldShowShopLink: i,
            giftRecipient: s,
            giftingOrigin: r,
            onClose: o,
            trackPDPClick: u,
            analyticsLocations: _,
        } = e,
        m = t?.id,
        p = (0, R.b)({ location: "product_details_modal" }),
        f = (0, d.bG)([y.A], () => (null != m ? y.A.getNormalizedSKUEligibility(m) : void 0), [m]),
        g = (0, U.B)(),
        C = (0, O.R)({ location: "product_details_modal" }),
        v = (0, x.JL)({ sku: t, priceSetAssignmentPurchaseType: q.lid.DEFAULT });
    (0, A.W)({ disableFetch: !C });
    let E = (0, b.h)(t?.applicationId),
        I = l.useCallback(() => {
            null != t &&
                null != n &&
                (u(W.Jq.BUY_BUTTON),
                (0, D.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [..._, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: n,
                    },
                ));
        }, [t, u, n, _]),
        j = l.useCallback(() => {
            null != n && (0, L.X)({ guildId: n });
        }, [n]),
        N = l.useCallback(() => {
            null != n && (u(W.Jq.VISIT_SHOP), (0, L.default)({ guildId: n }), o());
        }, [n, o, u]),
        S = l.useCallback(() => {
            null != t &&
                (u(W.Jq.GIFT_BUTTON),
                (0, D.a)(
                    t,
                    { isGift: !0, giftRecipient: s, giftingOrigin: r },
                    { analyticsLocations: [..._, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, u, s, r, _]),
        k = l.useCallback(() => {
            if (null == t || null == E || !C) return;
            u(W.Jq.BUY_WITH_ORBS_BUTTON);
            let e = [..._, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON];
            (0, T.B4)({
                skuId: t.id,
                applicationId: t.applicationId,
                onCheckoutSuccess: () => {
                    (0, B.j)(), (0, w.n)({ sku: t, application: E, analyticsLocations: e });
                },
                analyticsLocations: e,
            });
        }, [t, u, _, E, C]);
    return null == t
        ? null
        : (0, a.jsxs)("div", {
              className: X.wt,
              children: [
                  t.exclusive && (0, a.jsx)("div", { className: X.K3, children: (0, a.jsx)(M.I, {}) }),
                  (0, a.jsxs)("div", {
                      className: X.AX,
                      children: [
                          (0, a.jsx)(c.Heading, { variant: "heading-xl/bold", color: "text-strong", children: t.name }),
                          (0, a.jsx)(c.Text, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: t.description,
                          }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: X.sj,
                      children: [
                          p && (0, a.jsx)(F.V, {}),
                          (0, a.jsx)($, { sku: t }),
                          null != t.orbsReward &&
                              t.orbsReward > 0 &&
                              (0, a.jsx)(ee, {
                                  timeRemaining: g ?? void 0,
                                  text: V.intl.format(V.t.d3njXi, { orbCount: t.orbsReward }),
                              }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: X.NC,
                      children: [
                          !f &&
                              (0, a.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children: V.intl.string(V.t.IqlPbQ),
                              }),
                          f &&
                              (0, a.jsx)(c.Button, {
                                  variant: "primary",
                                  onClick: I,
                                  text: V.intl.string(V.t.boqtTA),
                                  fullWidth: !0,
                              }),
                          C &&
                              f &&
                              null != v &&
                              (0, a.jsx)(c.Button, {
                                  icon: c.Cp8,
                                  variant: "secondary",
                                  onClick: k,
                                  text: V.intl.format(V.t.lOtBOI, {
                                      orbPrice: v.amount,
                                      orbIconHook: () =>
                                          (0, a.jsx)(c.Cp8, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                  }),
                                  fullWidth: !0,
                              }),
                          (0, a.jsxs)(c.ButtonGroup, {
                              wrap: !1,
                              fullWidth: !0,
                              children: [
                                  i
                                      ? (0, a.jsx)(c.Button, {
                                            icon: c.U1X,
                                            variant: "secondary",
                                            onMouseDown: j,
                                            onClick: N,
                                            text: V.intl.string(V.t["2QW9nR"]),
                                            fullWidth: !0,
                                        })
                                      : null,
                                  (0, a.jsx)(c.Button, {
                                      icon: c.okO,
                                      variant: "secondary",
                                      onClick: S,
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
function J(e) {
    let { sku: t, applicationId: n, assets: i, onSelectedCarouselItemChange: s, isMuted: r, trackPDPClick: o } = e,
        [d, c] = l.useState([]),
        [u, _] = l.useState([]),
        m = l.useCallback(
            (e) => {
                let t = u.findIndex((t) => t === e);
                s?.(d[t] ?? null);
            },
            [s, d, u],
        );
    return (l.useEffect(() => {
        let [e, a] = (function (e, t, n) {
            let a = [],
                l = [];
            if (null == e || 0 === e.length) return [a, l];
            for (let i of e) {
                let e = null != i.assetId ? n[i.assetId] : null;
                null != e &&
                    (a.push(i),
                    e.mime_type.startsWith("video/")
                        ? l.push({
                              type: "video",
                              src: (0, N.YE)(t, e, H.B, "mp4"),
                              videoThumbnailSrc: (0, N.YE)(t, e, H.B, "webp"),
                              thumbnailSrc:
                                  null != i.thumbnailAssetId ? (0, N.YE)(t, i.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != i.backgroundAssetId ? (0, N.YE)(t, i.backgroundAssetId, H.B, S.pV) : void 0,
                          })
                        : l.push({
                              type: "image",
                              src: (0, N.YE)(t, e, H.B, "webp"),
                              thumbnailSrc:
                                  null != i.thumbnailAssetId ? (0, N.YE)(t, i.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != i.backgroundAssetId ? (0, N.YE)(t, i.backgroundAssetId, H.B, S.pV) : void 0,
                          }));
            }
            return [a, l];
        })(t?.tenantMetadata?.socialLayer?.carouselItems ?? [], n, i);
        c(e), _(a);
    }, [t, i, n]),
    0 === u.length)
        ? null
        : (0, a.jsx)(H.A, { className: X.Dk, items: u, onItemChange: m, isMuted: r, onTrackClick: o });
}
function K(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let l = null != t.labelIconAssetId ? (0, N.YE)(n, t.labelIconAssetId) : null;
    return (0, a.jsxs)("div", {
        className: X.HI,
        children: [
            null != l && (0, a.jsx)("img", { className: X.IX, src: l, alt: t.label }, l),
            (0, a.jsx)(c.Text, { variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function Q(e) {
    let { onClick: t, children: n, ariaLabel: l } = e;
    return (0, a.jsx)(c.DUT, { onClick: t, className: X.jU, "aria-label": l, role: "button", children: n });
}
function Z(e) {
    let {
            transitionState: t,
            returnRef: n,
            skuId: i,
            applicationId: r,
            isStorefront: u,
            giftRecipient: h,
            giftingOrigin: b,
            analyticsLocations: x,
            analyticsContext: A,
            onClose: T,
        } = e,
        { analyticsLocations: R } = (0, p.Ay)(x ?? []),
        { guildId: O } = (0, S.nG)(r),
        U = (0, d.bG)([E.default], () => E.default.getId());
    l.useEffect(() => {
        null != O && null != i && (0, k.iR)(O, i);
    }, [O, i]);
    let L = (0, d.bG)([y.A], () => y.A.getStorefrontMetadata(r), [r]),
        w = (0, d.bG)([y.A], () => y.A.getSkuAssets()),
        B = (0, d.bG)([I.A], () => I.A.isFetchingForSKU(i)),
        D = (0, c.Mwr)((0, m.Ay)()),
        [M, F] = l.useState(!0),
        H = (0, C.A)({ skuId: i, location: "SocialLayerStorefrontProductDetailsModal" }),
        [$, Z] = l.useState(null),
        ee = (function (e, t) {
            let n = t?.labelIconAssetId != null ? (0, N.YE)(e, t?.labelIconAssetId) : null,
                [a, i] = (0, f.rh)(n, "#000000"),
                r = l.useMemo(() => {
                    let e = s()(a).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [a]);
            return null != n && "#000000" !== a ? r : void 0;
        })(r, $);
    (0, v.pE)(),
        (0, _.Ay)(() => {
            j.default.track(q.HAw.OPEN_MODAL, { location_stack: R, type: Y.Nh, sku_id: i, application_id: r }),
                (0, k.Xw)();
        });
    let et = l.useCallback(
        (e) => {
            j.default.track(q.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                slayer_storefront_session_id: A?.sessionId,
                sku_id: i,
                guild_id: A?.guildId,
                cta_type: e,
                location_stack: R,
            });
        },
        [A, i, R],
    );
    l.useEffect(() => {
        null == O || null == i || I.A.isFetchingForSKU(i) || (0, k.qf)(O, i);
    }, [O, i]);
    let en = l.useCallback(() => {
            null != H &&
                null != O &&
                (et(W.Jq.FORWARD_BUTTON),
                (0, P.d)({
                    sku: H,
                    guildId: O,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: R,
                    analyticsContext: A,
                }));
        }, [H, O, et, R, A]),
        ea = l.useCallback(() => {
            et(W.Jq.WISHLIST_BUTTON);
        }, [et]),
        el = l.useCallback(() => {
            F(!M), et(W.Jq.MUTE_BUTTON);
        }, [M, et]);
    if (null == H?.tenantMetadata?.socialLayer) return B ? (0, a.jsx)(c.y$y, {}) : null;
    let ei = L?.logoAssetId != null ? (0, N.YE)(r, L.logoAssetId, 75) : null,
        es = L?.lightThemeLogoAssetId != null ? (0, N.YE)(r, L.lightThemeLogoAssetId, 75) : null,
        er = null;
    return (
        (er = D ? (ei ?? es) : (es ?? ei)),
        (0, a.jsx)(c.EOs, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: X.CR,
            size: c.rIJ.DYNAMIC,
            returnRef: n,
            children: (0, a.jsxs)(c.$mQ, {
                className: X.jE,
                children: [
                    (0, a.jsxs)("div", {
                        className: X.op,
                        style: { background: ee },
                        children: [
                            (0, a.jsx)("div", {
                                className: X.r$,
                                children: null != er ? (0, a.jsx)("img", { className: X.wm, src: er, alt: "" }) : null,
                            }),
                            (0, a.jsx)(K, { applicationId: r, selectedCarouselItem: $ }),
                            (0, a.jsx)(z, {
                                sku: H,
                                guildId: O,
                                shouldShowShopLink: !u,
                                giftRecipient: h?.id !== U ? h : void 0,
                                giftingOrigin: h?.id !== U ? b : void 0,
                                onClose: T,
                                trackPDPClick: et,
                                analyticsLocations: R,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: X.Cf,
                        children: [
                            (0, a.jsx)(J, {
                                sku: H,
                                applicationId: r,
                                assets: w,
                                onSelectedCarouselItemChange: Z,
                                isMuted: M,
                                trackPDPClick: et,
                            }),
                            (0, a.jsxs)("div", {
                                className: X.V7,
                                children: [
                                    null != H &&
                                        (0, a.jsx)(G._, {
                                            sku: H,
                                            isCardHovered: !0,
                                            className: o()(X.jU, X.ij),
                                            trackButtonClick: ea,
                                            variant: "overlay-secondary",
                                            location: "social_layer_storefront_product_details_modal",
                                        }),
                                    (0, a.jsx)(Q, {
                                        onClick: en,
                                        ariaLabel: V.intl.string(V.t.Ej3B3Y),
                                        children: (0, a.jsx)(g.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(Q, {
                                        onClick: el,
                                        ariaLabel: M ? V.intl.string(V.t.YqAjXy) : V.intl.string(V.t.w4m945),
                                        children: M
                                            ? (0, a.jsx)(c._RO, { size: "refresh_sm", color: "currentColor" })
                                            : (0, a.jsx)(c.HKD, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(Q, {
                                        onClick: T,
                                        ariaLabel: V.intl.string(V.t.cpT0Cq),
                                        children: (0, a.jsx)(c.d$L, { size: "refresh_sm", color: "currentColor" }),
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
        className: X.qw,
        Icon: c.Cp8,
        children: (0, a.jsxs)("div", {
            className: X.Yu,
            children: [
                (0, a.jsxs)(c.Text, {
                    variant: "text-xs/bold",
                    color: "currentColor",
                    children: [V.intl.string(V.t.yYEZGi), null != t && ` (${t})`],
                }),
                (0, a.jsx)("div", {
                    className: X.fb,
                    children: (0, a.jsx)(c.Text, { variant: "text-xs/medium", color: "currentColor", children: n }),
                }),
            ],
        }),
    });
}
