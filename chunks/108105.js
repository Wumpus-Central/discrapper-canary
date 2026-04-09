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
    C = n(993046),
    x = n(801228),
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
    U = n(429635),
    L = n(476438),
    P = n(44724),
    w = n(345938),
    B = n(510022),
    D = n(317560),
    M = n(533406),
    F = n(971146),
    H = n(953590),
    G = n(743693),
    W = n(995393),
    Y = n(188275),
    q = n(652215),
    V = n(985018),
    X = n(564343);
function $(e) {
    let { sku: t } = e,
        {
            normalPrice: n,
            discountedPrice: l,
            discountPercent: i,
        } = (0, C.ou)({ sku: t, priceSetAssignmentPurchaseType: q.lid.DEFAULT });
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
function J(e) {
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
        g = (0, L.B)(),
        x = (0, O.R)({ location: "product_details_modal" }),
        v = (0, C.JL)({ sku: t, priceSetAssignmentPurchaseType: q.lid.DEFAULT });
    (0, A.W)({ disableFetch: !x });
    let E = (0, b.h)(t?.applicationId),
        I = l.useCallback(() => {
            null != t &&
                null != n &&
                (u(W.Jq.BUY_BUTTON),
                (0, M.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [..._, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: n,
                    },
                ));
        }, [t, u, n, _]),
        j = l.useCallback(() => {
            null != n && (0, P.X)({ guildId: n });
        }, [n]),
        N = l.useCallback(() => {
            null != n && (u(W.Jq.VISIT_SHOP), (0, P.default)({ guildId: n }), o());
        }, [n, o, u]),
        S = l.useCallback(() => {
            null != t &&
                (u(W.Jq.GIFT_BUTTON),
                (0, M.a)(
                    t,
                    { isGift: !0, giftRecipient: s, giftingOrigin: r },
                    { analyticsLocations: [..._, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, u, s, r, _]),
        k = l.useCallback(() => {
            if (null == t || null == E || !x) return;
            u(W.Jq.BUY_WITH_ORBS_BUTTON);
            let e = [..._, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON];
            (0, T.B4)({
                skuId: t.id,
                applicationId: t.applicationId,
                onCheckoutSuccess: () => {
                    (0, D.j)(), (0, B.n)({ sku: t, application: E, analyticsLocations: e });
                },
                analyticsLocations: e,
            });
        }, [t, u, _, E, x]);
    return null == t
        ? null
        : (0, a.jsxs)("div", {
              className: X.wt,
              children: [
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
                          x &&
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
function z(e) {
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
            analyticsLocations: C,
            analyticsContext: A,
            onClose: T,
        } = e,
        { analyticsLocations: R } = (0, p.Ay)(C ?? []),
        { guildId: O } = (0, S.nG)(r),
        L = (0, d.bG)([E.default], () => E.default.getId());
    l.useEffect(() => {
        null != O && null != i && (0, k.iR)(O, i);
    }, [O, i]);
    let P = (0, U.A)({ guildId: O }),
        B = (0, d.bG)([y.A], () => y.A.getSkuAssets()),
        D = (0, d.bG)([I.A], () => I.A.isFetchingForSKU(i)),
        M = (0, c.Mwr)((0, m.Ay)()),
        [F, H] = l.useState(!0),
        $ = (0, x.A)({ skuId: i, location: "SocialLayerStorefrontProductDetailsModal" }),
        [Z, ee] = l.useState(null),
        et = (function (e, t) {
            let n = t?.labelIconAssetId != null ? (0, N.YE)(e, t?.labelIconAssetId) : null,
                [a, i] = (0, f.rh)(n, "#000000"),
                r = l.useMemo(() => {
                    let e = s()(a).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [a]);
            return null != n && "#000000" !== a ? r : void 0;
        })(r, Z);
    (0, v.pE)(),
        (0, _.Ay)(() => {
            j.default.track(q.HAw.OPEN_MODAL, { location_stack: R, type: Y.Nh, sku_id: i, application_id: r }),
                (0, k.Xw)();
        });
    let en = l.useCallback(
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
    let ea = l.useCallback(() => {
            null != $ &&
                null != O &&
                (en(W.Jq.FORWARD_BUTTON),
                (0, w.d)({
                    sku: $,
                    guildId: O,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: R,
                    analyticsContext: A,
                }));
        }, [$, O, en, R, A]),
        el = l.useCallback(() => {
            en(W.Jq.WISHLIST_BUTTON);
        }, [en]),
        ei = l.useCallback(() => {
            H(!F), en(W.Jq.MUTE_BUTTON);
        }, [F, en]);
    if (null == $?.tenantMetadata?.socialLayer) return D ? (0, a.jsx)(c.y$y, {}) : null;
    let es = P?.storefront,
        er = es?.logoAssetId != null ? (0, N.YE)(es.applicationId, es.logoAssetId, 75) : null,
        eo = es?.lightThemeLogoAssetId != null ? (0, N.YE)(es.applicationId, es.lightThemeLogoAssetId, 75) : null,
        ed = null;
    return (
        (ed = M ? (er ?? eo) : (eo ?? er)),
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
                        style: { background: et },
                        children: [
                            (0, a.jsx)("div", {
                                className: X.r$,
                                children: null != ed ? (0, a.jsx)("img", { className: X.wm, src: ed, alt: "" }) : null,
                            }),
                            (0, a.jsx)(K, { applicationId: r, selectedCarouselItem: Z }),
                            (0, a.jsx)(J, {
                                sku: $,
                                guildId: O,
                                shouldShowShopLink: !u,
                                giftRecipient: h?.id !== L ? h : void 0,
                                giftingOrigin: h?.id !== L ? b : void 0,
                                onClose: T,
                                trackPDPClick: en,
                                analyticsLocations: R,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: X.Cf,
                        children: [
                            (0, a.jsx)(z, {
                                sku: $,
                                applicationId: r,
                                assets: B,
                                onSelectedCarouselItemChange: ee,
                                isMuted: F,
                                trackPDPClick: en,
                            }),
                            (0, a.jsxs)("div", {
                                className: X.V7,
                                children: [
                                    null != $ &&
                                        (0, a.jsx)(G._, {
                                            sku: $,
                                            isCardHovered: !0,
                                            className: o()(X.jU, X.ij),
                                            trackButtonClick: el,
                                            variant: "overlay-secondary",
                                            location: "social_layer_storefront_product_details_modal",
                                        }),
                                    (0, a.jsx)(Q, {
                                        onClick: ea,
                                        ariaLabel: V.intl.string(V.t.Ej3B3Y),
                                        children: (0, a.jsx)(g.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(Q, {
                                        onClick: ei,
                                        ariaLabel: F ? V.intl.string(V.t.YqAjXy) : V.intl.string(V.t.w4m945),
                                        children: F
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
