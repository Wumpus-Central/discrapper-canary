n.d(t, { default: () => Q }), n(321073);
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
    b = n(688810),
    p = n(429913),
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
    U = n(476438),
    L = n(44724),
    P = n(345938),
    w = n(510022),
    B = n(317560),
    D = n(533406),
    M = n(971146),
    F = n(953590),
    H = n(743693),
    G = n(995393),
    W = n(188275),
    Y = n(652215),
    q = n(985018),
    V = n(136242);
function X(e) {
    let { sku: t } = e,
        {
            normalPrice: n,
            discountedPrice: l,
            discountPercent: i,
        } = (0, C.ou)({ sku: t, priceSetAssignmentPurchaseType: Y.lid.DEFAULT });
    return null == n
        ? null
        : null != i && null != l
          ? (0, a.jsxs)("div", {
                className: V.TS,
                children: [
                    (0, a.jsx)(c.Heading, {
                        className: V.of,
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
function $(e) {
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
        b = (0, R.b)({ location: "product_details_modal" }),
        f = (0, d.bG)([y.A], () => (null != m ? y.A.getNormalizedSKUEligibility(m) : void 0), [m]),
        g = (0, U.B)(),
        x = (0, O.R)({ location: "product_details_modal" }),
        v = (0, C.JL)({ sku: t, priceSetAssignmentPurchaseType: Y.lid.DEFAULT });
    (0, A.W)({ disableFetch: !x });
    let E = (0, p.h)(t?.applicationId),
        I = l.useCallback(() => {
            null != t &&
                null != n &&
                (u(G.Jq.BUY_BUTTON),
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
            null != n && (u(G.Jq.VISIT_SHOP), (0, L.default)({ guildId: n }), o());
        }, [n, o, u]),
        S = l.useCallback(() => {
            null != t &&
                (u(G.Jq.GIFT_BUTTON),
                (0, D.a)(
                    t,
                    { isGift: !0, giftRecipient: s, giftingOrigin: r },
                    { analyticsLocations: [..._, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, u, s, r, _]),
        k = l.useCallback(() => {
            if (null == t || null == E || !x) return;
            u(G.Jq.BUY_WITH_ORBS_BUTTON);
            let e = [..._, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON];
            (0, T.B4)({
                skuId: t.id,
                applicationId: t.applicationId,
                onCheckoutSuccess: () => {
                    (0, B.j)(), (0, w.n)({ sku: t, application: E, analyticsLocations: e });
                },
                analyticsLocations: e,
            });
        }, [t, u, _, E, x]);
    return null == t
        ? null
        : (0, a.jsxs)("div", {
              className: V.wt,
              children: [
                  (0, a.jsxs)("div", {
                      className: V.AX,
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
                      className: V.sj,
                      children: [
                          b && (0, a.jsx)(M.V, {}),
                          (0, a.jsx)(X, { sku: t }),
                          null != t.orbsReward &&
                              t.orbsReward > 0 &&
                              (0, a.jsx)(Z, {
                                  timeRemaining: g ?? void 0,
                                  text: q.intl.format(q.t.d3njXi, { orbCount: t.orbsReward }),
                              }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: V.NC,
                      children: [
                          !f &&
                              (0, a.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children: q.intl.string(q.t.IqlPbQ),
                              }),
                          f &&
                              (0, a.jsx)(c.Button, {
                                  variant: "primary",
                                  onClick: I,
                                  text: q.intl.string(q.t.boqtTA),
                                  fullWidth: !0,
                              }),
                          x &&
                              f &&
                              null != v &&
                              (0, a.jsx)(c.Button, {
                                  icon: c.Cp8,
                                  variant: "secondary",
                                  onClick: k,
                                  text: q.intl.format(q.t.lOtBOI, {
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
                                            text: q.intl.string(q.t["2QW9nR"]),
                                            fullWidth: !0,
                                        })
                                      : null,
                                  (0, a.jsx)(c.Button, {
                                      icon: c.okO,
                                      variant: "secondary",
                                      onClick: S,
                                      text: q.intl.string(q.t.QAZA5f),
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
                              src: (0, N.YE)(t, e, F.B, "mp4"),
                              videoThumbnailSrc: (0, N.YE)(t, e, F.B, "webp"),
                              thumbnailSrc:
                                  null != i.thumbnailAssetId ? (0, N.YE)(t, i.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != i.backgroundAssetId ? (0, N.YE)(t, i.backgroundAssetId, F.B, S.pV) : void 0,
                          })
                        : l.push({
                              type: "image",
                              src: (0, N.YE)(t, e, F.B, "webp"),
                              thumbnailSrc:
                                  null != i.thumbnailAssetId ? (0, N.YE)(t, i.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != i.backgroundAssetId ? (0, N.YE)(t, i.backgroundAssetId, F.B, S.pV) : void 0,
                          }));
            }
            return [a, l];
        })(t?.tenantMetadata?.socialLayer?.carouselItems ?? [], n, i);
        c(e), _(a);
    }, [t, i, n]),
    0 === u.length)
        ? null
        : (0, a.jsx)(F.A, { className: V.Dk, items: u, onItemChange: m, isMuted: r, onTrackClick: o });
}
function z(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let l = null != t.labelIconAssetId ? (0, N.YE)(n, t.labelIconAssetId) : null;
    return (0, a.jsxs)("div", {
        className: V.HI,
        children: [
            null != l && (0, a.jsx)("img", { className: V.IX, src: l, alt: t.label }, l),
            (0, a.jsx)(c.Text, { variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function K(e) {
    let { onClick: t, children: n, ariaLabel: l } = e;
    return (0, a.jsx)(c.DUT, { onClick: t, className: V.jU, "aria-label": l, role: "button", children: n });
}
function Q(e) {
    let {
            transitionState: t,
            returnRef: n,
            skuId: i,
            applicationId: r,
            isStorefront: u,
            giftRecipient: h,
            giftingOrigin: p,
            analyticsLocations: C,
            analyticsContext: A,
            onClose: T,
        } = e,
        { analyticsLocations: R } = (0, b.Ay)(C ?? []),
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
        X = (0, x.A)({ skuId: i, location: "SocialLayerStorefrontProductDetailsModal" }),
        [Q, Z] = l.useState(null),
        ee = (function (e, t) {
            let n = t?.labelIconAssetId != null ? (0, N.YE)(e, t?.labelIconAssetId) : null,
                [a, i] = (0, f.rh)(n, "#000000"),
                r = l.useMemo(() => {
                    let e = s()(a).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [a]);
            return null != n && "#000000" !== a ? r : void 0;
        })(r, Q);
    (0, v.pE)(),
        (0, _.Ay)(() => {
            j.default.track(Y.HAw.OPEN_MODAL, { location_stack: R, type: W.Nh, sku_id: i, application_id: r }),
                (0, k.Xw)();
        });
    let et = l.useCallback(
        (e) => {
            j.default.track(Y.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
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
            null != X &&
                null != O &&
                (et(G.Jq.FORWARD_BUTTON),
                (0, P.d)({
                    sku: X,
                    guildId: O,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: R,
                    analyticsContext: A,
                }));
        }, [X, O, et, R, A]),
        ea = l.useCallback(() => {
            et(G.Jq.WISHLIST_BUTTON);
        }, [et]),
        el = l.useCallback(() => {
            F(!M), et(G.Jq.MUTE_BUTTON);
        }, [M, et]);
    if (null == X?.tenantMetadata?.socialLayer) return B ? (0, a.jsx)(c.y$y, {}) : null;
    let ei = L?.logoAssetId != null ? (0, N.YE)(r, L.logoAssetId, 75) : null,
        es = L?.lightThemeLogoAssetId != null ? (0, N.YE)(r, L.lightThemeLogoAssetId, 75) : null,
        er = null;
    return (
        (er = D ? (ei ?? es) : (es ?? ei)),
        (0, a.jsx)(c.EOs, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: V.CR,
            size: c.rIJ.DYNAMIC,
            returnRef: n,
            children: (0, a.jsxs)(c.$mQ, {
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
                            (0, a.jsx)(z, { applicationId: r, selectedCarouselItem: Q }),
                            (0, a.jsx)($, {
                                sku: X,
                                guildId: O,
                                shouldShowShopLink: !u,
                                giftRecipient: h?.id !== U ? h : void 0,
                                giftingOrigin: h?.id !== U ? p : void 0,
                                onClose: T,
                                trackPDPClick: et,
                                analyticsLocations: R,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: V.Cf,
                        children: [
                            (0, a.jsx)(J, {
                                sku: X,
                                applicationId: r,
                                assets: w,
                                onSelectedCarouselItemChange: Z,
                                isMuted: M,
                                trackPDPClick: et,
                            }),
                            (0, a.jsxs)("div", {
                                className: V.V7,
                                children: [
                                    null != X &&
                                        (0, a.jsx)(H._, {
                                            sku: X,
                                            isCardHovered: !0,
                                            className: o()(V.jU, V.ij),
                                            trackButtonClick: ea,
                                            variant: "overlay-secondary",
                                            location: "social_layer_storefront_product_details_modal",
                                        }),
                                    (0, a.jsx)(K, {
                                        onClick: en,
                                        ariaLabel: q.intl.string(q.t.Ej3B3Y),
                                        children: (0, a.jsx)(g.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(K, {
                                        onClick: el,
                                        ariaLabel: M ? q.intl.string(q.t.YqAjXy) : q.intl.string(q.t.w4m945),
                                        children: M
                                            ? (0, a.jsx)(c._RO, { size: "refresh_sm", color: "currentColor" })
                                            : (0, a.jsx)(c.HKD, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(K, {
                                        onClick: T,
                                        ariaLabel: q.intl.string(q.t.cpT0Cq),
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
function Z(e) {
    let { timeRemaining: t, text: n } = e;
    return (0, a.jsx)(u.A, {
        className: V.qw,
        Icon: c.Cp8,
        children: (0, a.jsxs)("div", {
            className: V.Yu,
            children: [
                (0, a.jsxs)(c.Text, {
                    variant: "text-xs/bold",
                    color: "currentColor",
                    children: [q.intl.string(q.t.yYEZGi), null != t && ` (${t})`],
                }),
                (0, a.jsx)("div", {
                    className: V.fb,
                    children: (0, a.jsx)(c.Text, { variant: "text-xs/medium", color: "currentColor", children: n }),
                }),
            ],
        }),
    });
}
