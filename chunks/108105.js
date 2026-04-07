n.d(t, { default: () => X }), n(321073);
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
    b = n(654107),
    f = n(427209),
    g = n(993046),
    x = n(801228),
    C = n(594832),
    A = n(961350),
    T = n(328968),
    v = n(954571),
    j = n(371794),
    E = n(871123),
    I = n(733391),
    N = n(832163),
    S = n(207654),
    k = n(429635),
    y = n(476438),
    R = n(44724),
    U = n(345938),
    O = n(533406),
    P = n(971146),
    w = n(953590),
    L = n(743693),
    D = n(995393),
    M = n(188275),
    B = n(652215),
    F = n(985018),
    H = n(136242);
function G(e) {
    let { sku: t } = e,
        {
            normalPrice: n,
            discountedPrice: l,
            discountPercent: i,
        } = (0, g.o)({ sku: t, priceSetAssignmentPurchaseType: B.lid.DEFAULT });
    return null != i && null != l
        ? (0, a.jsxs)("div", {
              className: H.TS,
              children: [
                  (0, a.jsx)(c.Heading, {
                      className: H.of,
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
function W(e) {
    let {
            sku: t,
            application: n,
            guildId: i,
            shouldShowShopLink: s,
            giftRecipient: r,
            giftingOrigin: o,
            onClose: u,
            trackPDPClick: _,
            analyticsLocations: m,
        } = e,
        p = t?.id,
        b = (0, S.b)({ location: "product_details_modal" }),
        f = (0, d.bG)([N.A], () => (null != p ? N.A.getNormalizedSKUEligibility(p) : void 0), [p]),
        g = (0, y.B)(),
        x = l.useCallback(() => {
            null != t &&
                null != i &&
                (_(D.Jq.BUY_BUTTON),
                (0, O.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...m, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: i,
                    },
                ));
        }, [t, _, i, m]),
        C = l.useCallback(() => {
            null != i && (0, R.X)({ guildId: i });
        }, [i]),
        A = l.useCallback(() => {
            null != i && (_(D.Jq.VISIT_SHOP), (0, R.default)({ guildId: i }), u());
        }, [i, u, _]),
        T = l.useCallback(() => {
            null != t &&
                (_(D.Jq.GIFT_BUTTON),
                (0, O.a)(
                    t,
                    { isGift: !0, giftRecipient: r, giftingOrigin: o },
                    { analyticsLocations: [...m, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, _, r, o, m]);
    return null == t
        ? null
        : (0, a.jsxs)("div", {
              className: H.wt,
              children: [
                  (0, a.jsxs)("div", {
                      className: H.AX,
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
                      className: H.sj,
                      children: [
                          b && null != n && (0, a.jsx)(P.V, { application: n }),
                          (0, a.jsx)(G, { sku: t }),
                          null != t.orbsReward &&
                              t.orbsReward > 0 &&
                              (0, a.jsx)($, {
                                  timeRemaining: g ?? void 0,
                                  text: F.intl.format(F.t.d3njXi, { orbCount: t.orbsReward }),
                              }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: H.NC,
                      children: [
                          !f &&
                              (0, a.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children: F.intl.string(F.t.IqlPbQ),
                              }),
                          f &&
                              (0, a.jsx)(c.Button, {
                                  variant: "primary",
                                  onClick: x,
                                  text: F.intl.string(F.t.boqtTA),
                                  fullWidth: !0,
                              }),
                          (0, a.jsxs)(c.ButtonGroup, {
                              wrap: !1,
                              fullWidth: !0,
                              children: [
                                  s
                                      ? (0, a.jsx)(c.Button, {
                                            icon: c.U1X,
                                            variant: "secondary",
                                            onMouseDown: C,
                                            onClick: A,
                                            text: F.intl.string(F.t["2QW9nR"]),
                                            fullWidth: !0,
                                        })
                                      : null,
                                  (0, a.jsx)(c.Button, {
                                      icon: c.okO,
                                      variant: "secondary",
                                      onClick: T,
                                      text: F.intl.string(F.t.QAZA5f),
                                      fullWidth: !0,
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
function Y(e) {
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
                              src: (0, j.YE)(t, e, w.B, "mp4"),
                              videoThumbnailSrc: (0, j.YE)(t, e, w.B, "webp"),
                              thumbnailSrc:
                                  null != i.thumbnailAssetId ? (0, j.YE)(t, i.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != i.backgroundAssetId ? (0, j.YE)(t, i.backgroundAssetId, w.B, E.pV) : void 0,
                          })
                        : l.push({
                              type: "image",
                              src: (0, j.YE)(t, e, w.B, "webp"),
                              thumbnailSrc:
                                  null != i.thumbnailAssetId ? (0, j.YE)(t, i.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != i.backgroundAssetId ? (0, j.YE)(t, i.backgroundAssetId, w.B, E.pV) : void 0,
                          }));
            }
            return [a, l];
        })(t?.tenantMetadata?.socialLayer?.carouselItems ?? [], n, i);
        c(e), _(a);
    }, [t, i, n]),
    0 === u.length)
        ? null
        : (0, a.jsx)(w.A, { className: H.Dk, items: u, onItemChange: m, isMuted: r, onTrackClick: o });
}
function q(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let l = null != t.labelIconAssetId ? (0, j.YE)(n, t.labelIconAssetId) : null;
    return (0, a.jsxs)("div", {
        className: H.HI,
        children: [
            null != l && (0, a.jsx)("img", { className: H.IX, src: l, alt: t.label }, l),
            (0, a.jsx)(c.Text, { variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function V(e) {
    let { onClick: t, children: n, ariaLabel: l } = e;
    return (0, a.jsx)(c.DUT, { onClick: t, className: H.jU, "aria-label": l, role: "button", children: n });
}
function X(e) {
    let {
            transitionState: t,
            returnRef: n,
            skuId: i,
            applicationId: r,
            isStorefront: u,
            giftRecipient: h,
            giftingOrigin: g,
            analyticsLocations: S,
            analyticsContext: y,
            onClose: R,
        } = e,
        { analyticsLocations: O } = (0, p.Ay)(S ?? []),
        { guildId: P, application: w } = (0, E.nG)(r),
        G = (0, d.bG)([A.default], () => A.default.getId());
    l.useEffect(() => {
        null != P && null != i && (0, I.iR)(P, i, "SocialLayerStorefrontProductDetailsModal");
    }, [P, i]);
    let X = (0, k.A)({ guildId: P }),
        $ = (0, d.bG)([N.A], () => N.A.getSkuAssets()),
        z = (0, d.bG)([T.A], () => T.A.isFetchingForSKU(i)),
        J = (0, c.Mwr)((0, m.Ay)()),
        [K, Q] = l.useState(!0),
        Z = (0, x.A)({ skuId: i, location: "SocialLayerStorefrontProductDetailsModal" }),
        [ee, et] = l.useState(null),
        en = (function (e, t) {
            let n = t?.labelIconAssetId != null ? (0, j.YE)(e, t?.labelIconAssetId) : null,
                [a, i] = (0, b.rh)(n, "#000000"),
                r = l.useMemo(() => {
                    let e = s()(a).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [a]);
            return null != n && "#000000" !== a ? r : void 0;
        })(r, ee);
    (0, C.pE)(),
        (0, _.Ay)(() => {
            v.default.track(B.HAw.OPEN_MODAL, { location_stack: O, type: M.Nh, sku_id: i, application_id: r }),
                (0, I.Xw)();
        });
    let ea = l.useCallback(
        (e) => {
            v.default.track(B.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                slayer_storefront_session_id: y?.sessionId,
                sku_id: i,
                guild_id: y?.guildId,
                cta_type: e,
                location_stack: O,
            });
        },
        [y, i, O],
    );
    l.useEffect(() => {
        null == P || null == i || T.A.isFetchingForSKU(i) || (0, I.qf)(P, i);
    }, [P, i]);
    let el = l.useCallback(() => {
            null != Z &&
                null != P &&
                (ea(D.Jq.FORWARD_BUTTON),
                (0, U.d)({
                    sku: Z,
                    guildId: P,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: O,
                    analyticsContext: y,
                }));
        }, [Z, P, ea, O, y]),
        ei = l.useCallback(() => {
            ea(D.Jq.WISHLIST_BUTTON);
        }, [ea]),
        es = l.useCallback(() => {
            Q(!K), ea(D.Jq.MUTE_BUTTON);
        }, [K, ea]);
    if (null == Z?.tenantMetadata?.socialLayer) return z ? (0, a.jsx)(c.y$y, {}) : null;
    let er = X?.storefront,
        eo = er?.logoAssetId != null ? (0, j.YE)(er.applicationId, er.logoAssetId, 75) : null,
        ed = er?.lightThemeLogoAssetId != null ? (0, j.YE)(er.applicationId, er.lightThemeLogoAssetId, 75) : null,
        ec = null;
    return (
        (ec = J ? (eo ?? ed) : (ed ?? eo)),
        (0, a.jsx)(c.EOs, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: H.CR,
            size: c.rIJ.DYNAMIC,
            returnRef: n,
            children: (0, a.jsxs)(c.$mQ, {
                className: H.jE,
                children: [
                    (0, a.jsxs)("div", {
                        className: H.op,
                        style: { background: en },
                        children: [
                            (0, a.jsx)("div", {
                                className: H.r$,
                                children: null != ec ? (0, a.jsx)("img", { className: H.wm, src: ec, alt: "" }) : null,
                            }),
                            (0, a.jsx)(q, { applicationId: r, selectedCarouselItem: ee }),
                            (0, a.jsx)(W, {
                                sku: Z,
                                application: w,
                                guildId: P,
                                shouldShowShopLink: !u,
                                giftRecipient: h?.id !== G ? h : void 0,
                                giftingOrigin: h?.id !== G ? g : void 0,
                                onClose: R,
                                trackPDPClick: ea,
                                analyticsLocations: O,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: H.Cf,
                        children: [
                            (0, a.jsx)(Y, {
                                sku: Z,
                                applicationId: r,
                                assets: $,
                                onSelectedCarouselItemChange: et,
                                isMuted: K,
                                trackPDPClick: ea,
                            }),
                            (0, a.jsxs)("div", {
                                className: H.V7,
                                children: [
                                    null != Z &&
                                        (0, a.jsx)(L._, {
                                            sku: Z,
                                            isCardHovered: !0,
                                            className: o()(H.jU, H.ij),
                                            trackButtonClick: ei,
                                            variant: "overlay-secondary",
                                            location: "social_layer_storefront_product_details_modal",
                                        }),
                                    (0, a.jsx)(V, {
                                        onClick: el,
                                        ariaLabel: F.intl.string(F.t.Ej3B3Y),
                                        children: (0, a.jsx)(f.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(V, {
                                        onClick: es,
                                        ariaLabel: K ? F.intl.string(F.t.YqAjXy) : F.intl.string(F.t.w4m945),
                                        children: K
                                            ? (0, a.jsx)(c._RO, { size: "refresh_sm", color: "currentColor" })
                                            : (0, a.jsx)(c.HKD, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(V, {
                                        onClick: R,
                                        ariaLabel: F.intl.string(F.t.cpT0Cq),
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
function $(e) {
    let { timeRemaining: t, text: n } = e;
    return (0, a.jsx)(u.A, {
        className: H.qw,
        Icon: c.Cp8,
        children: (0, a.jsxs)("div", {
            className: H.Yu,
            children: [
                (0, a.jsxs)(c.Text, {
                    variant: "text-xs/bold",
                    color: "currentColor",
                    children: [F.intl.string(F.t.yYEZGi), null != t && ` (${t})`],
                }),
                (0, a.jsx)("div", {
                    className: H.fb,
                    children: (0, a.jsx)(c.Text, { variant: "text-xs/medium", color: "currentColor", children: n }),
                }),
            ],
        }),
    });
}
