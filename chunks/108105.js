n.d(t, { default: () => G }), n(321073);
var a = n(627968),
    l = n(64700),
    s = n(310784),
    i = n.n(s),
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
    g = n(594832),
    C = n(67480),
    x = n(328968),
    A = n(954571),
    T = n(371794),
    E = n(871123),
    I = n(733391),
    v = n(832163),
    N = n(429635),
    j = n(476438),
    S = n(44724),
    k = n(345938),
    y = n(533406),
    R = n(953590),
    U = n(743693),
    O = n(995393),
    w = n(188275),
    L = n(652215),
    P = n(985018),
    D = n(136242);
function B(e) {
    let {
            sku: t,
            guildId: n,
            shouldShowShopLink: s,
            giftRecipient: i,
            giftingOrigin: r,
            onClose: o,
            trackPDPClick: u,
            analyticsLocations: _,
        } = e,
        m = t?.id,
        p = (0, d.bG)([v.A], () => (null != m ? v.A.getNormalizedSKUEligibility(m) : void 0), [m]),
        b = (0, j.B)(),
        f = l.useCallback(() => {
            null != t &&
                null != n &&
                (u(O.Jq.BUY_BUTTON),
                (0, y.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [..._, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: n,
                    },
                ));
        }, [t, u, n, _]),
        g = l.useCallback(() => {
            null != n && (0, S.X)({ guildId: n });
        }, [n]),
        C = l.useCallback(() => {
            null != n && (u(O.Jq.VISIT_SHOP), (0, S.default)({ guildId: n }), o());
        }, [n, o, u]),
        x = l.useCallback(() => {
            null != t &&
                (u(O.Jq.GIFT_BUTTON),
                (0, y.a)(
                    t,
                    { isGift: !0, giftRecipient: i, giftingOrigin: r },
                    { analyticsLocations: [..._, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, u, i, r, _]);
    if (null == t) return null;
    let A = (0, E.p3)(t, L.lid.DEFAULT);
    return (0, a.jsxs)("div", {
        className: D.wt,
        children: [
            (0, a.jsxs)("div", {
                className: D.AX,
                children: [
                    (0, a.jsx)(c.Heading, { variant: "heading-xl/bold", color: "text-strong", children: t.name }),
                    (0, a.jsx)(c.Text, { variant: "text-sm/medium", color: "text-subtle", children: t.description }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: D.p6,
                children: [
                    (0, a.jsx)(c.Heading, { variant: "heading-md/semibold", color: "text-strong", children: A }),
                    null != t.orbsReward &&
                        t.orbsReward > 0 &&
                        (0, a.jsx)(W, {
                            timeRemaining: b ?? void 0,
                            text: P.intl.format(P.t.d3njXi, { orbCount: t.orbsReward }),
                        }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: D.NC,
                children: [
                    !p &&
                        (0, a.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: P.intl.string(P.t.IqlPbQ),
                        }),
                    p &&
                        (0, a.jsx)(c.Button, {
                            variant: "primary",
                            onClick: f,
                            text: P.intl.string(P.t.boqtTA),
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
                                      onMouseDown: g,
                                      onClick: C,
                                      text: P.intl.string(P.t["2QW9nR"]),
                                      fullWidth: !0,
                                  })
                                : null,
                            (0, a.jsx)(c.Button, {
                                icon: c.okO,
                                variant: "secondary",
                                onClick: x,
                                text: P.intl.string(P.t.QAZA5f),
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function M(e) {
    let { sku: t, applicationId: n, assets: s, onSelectedCarouselItemChange: i, isMuted: r, trackPDPClick: o } = e,
        [d, c] = l.useState([]),
        [u, _] = l.useState([]),
        m = l.useCallback(
            (e) => {
                let t = u.findIndex((t) => t === e);
                i?.(d[t] ?? null);
            },
            [i, d, u],
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
                              src: (0, T.YE)(t, e, R.B, "mp4"),
                              videoThumbnailSrc: (0, T.YE)(t, e, R.B, "webp"),
                              thumbnailSrc:
                                  null != s.thumbnailAssetId ? (0, T.YE)(t, s.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != s.backgroundAssetId ? (0, T.YE)(t, s.backgroundAssetId, R.B, E.pV) : void 0,
                          })
                        : l.push({
                              type: "image",
                              src: (0, T.YE)(t, e, R.B, "webp"),
                              thumbnailSrc:
                                  null != s.thumbnailAssetId ? (0, T.YE)(t, s.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != s.backgroundAssetId ? (0, T.YE)(t, s.backgroundAssetId, R.B, E.pV) : void 0,
                          }));
            }
            return [a, l];
        })(t?.tenantMetadata?.socialLayer?.carouselItems ?? [], n, s);
        c(e), _(a);
    }, [t, s, n]),
    0 === u.length)
        ? null
        : (0, a.jsx)(R.A, { className: D.Dk, items: u, onItemChange: m, isMuted: r, onTrackClick: o });
}
function F(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let l = null != t.labelIconAssetId ? (0, T.YE)(n, t.labelIconAssetId) : null;
    return (0, a.jsxs)("div", {
        className: D.HI,
        children: [
            null != l && (0, a.jsx)("img", { className: D.IX, src: l, alt: t.label }, l),
            (0, a.jsx)(c.Text, { variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function H(e) {
    let { onClick: t, children: n, ariaLabel: l } = e;
    return (0, a.jsx)(c.DUT, { onClick: t, className: D.jU, "aria-label": l, role: "button", children: n });
}
function G(e) {
    let {
            transitionState: t,
            returnRef: n,
            skuId: s,
            applicationId: r,
            isStorefront: u,
            giftRecipient: h,
            giftingOrigin: j,
            analyticsLocations: S,
            analyticsContext: y,
            onClose: R,
        } = e,
        { analyticsLocations: G } = (0, p.Ay)(S ?? []),
        { guildId: W } = (0, E.nG)(r);
    l.useEffect(() => {
        null != W && null != s && (0, I.iR)(W, s, "SocialLayerStorefrontProductDetailsModal");
    }, [W, s]);
    let Y = (0, N.A)({ guildId: W }),
        q = (0, d.bG)([v.A], () => v.A.getSkuAssets()),
        X = (0, d.bG)([x.A], () => x.A.isFetchingForSKU(s)),
        V = (0, c.Mwr)((0, m.Ay)()),
        [$, z] = l.useState(!0),
        J = (0, d.bG)([C.A], () => C.A.get(s)),
        [K, Q] = l.useState(null),
        Z = (function (e, t) {
            let n = t?.labelIconAssetId != null ? (0, T.YE)(e, t?.labelIconAssetId) : null,
                [a, s] = (0, b.rh)(n, "#000000"),
                r = l.useMemo(() => {
                    let e = i()(a).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [a]);
            return null != n && "#000000" !== a ? r : void 0;
        })(r, K);
    (0, g.pE)(),
        (0, _.Ay)(() => {
            A.default.track(L.HAw.OPEN_MODAL, { location_stack: G, type: w.Nh, sku_id: s, application_id: r }),
                (0, I.Xw)();
        });
    let ee = l.useCallback(
        (e) => {
            A.default.track(L.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                slayer_storefront_session_id: y?.sessionId,
                sku_id: s,
                guild_id: y?.guildId,
                cta_type: e,
                location_stack: G,
            });
        },
        [y, s, G],
    );
    l.useEffect(() => {
        null == W || null == s || x.A.isFetchingForSKU(s) || (0, I.qf)(W, s);
    }, [W, s]);
    let et = l.useCallback(() => {
            null != J &&
                null != W &&
                (ee(O.Jq.FORWARD_BUTTON),
                (0, k.d)({
                    sku: J,
                    guildId: W,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: G,
                    analyticsContext: y,
                }));
        }, [J, W, ee, G, y]),
        en = l.useCallback(() => {
            ee(O.Jq.WISHLIST_BUTTON);
        }, [ee]),
        ea = l.useCallback(() => {
            z(!$), ee(O.Jq.MUTE_BUTTON);
        }, [$, ee]);
    if (null == J?.tenantMetadata?.socialLayer) return X ? (0, a.jsx)(c.y$y, {}) : null;
    let el = Y?.storefront,
        es = el?.logoAssetId != null ? (0, T.YE)(el.applicationId, el.logoAssetId, 75) : null,
        ei = el?.lightThemeLogoAssetId != null ? (0, T.YE)(el.applicationId, el.lightThemeLogoAssetId, 75) : null,
        er = null;
    return (
        (er = V ? (es ?? ei) : (ei ?? es)),
        (0, a.jsx)(c.EOs, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: D.CR,
            size: c.rIJ.DYNAMIC,
            returnRef: n,
            children: (0, a.jsxs)(c.$mQ, {
                className: D.jE,
                children: [
                    (0, a.jsxs)("div", {
                        className: D.op,
                        style: { background: Z },
                        children: [
                            (0, a.jsx)("div", {
                                className: D.r$,
                                children: null != er ? (0, a.jsx)("img", { className: D.wm, src: er, alt: "" }) : null,
                            }),
                            (0, a.jsx)(F, { applicationId: r, selectedCarouselItem: K }),
                            (0, a.jsx)(B, {
                                sku: J,
                                guildId: W,
                                shouldShowShopLink: !u,
                                giftRecipient: h,
                                giftingOrigin: j,
                                onClose: R,
                                trackPDPClick: ee,
                                analyticsLocations: G,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: D.Cf,
                        children: [
                            (0, a.jsx)(M, {
                                sku: J,
                                applicationId: r,
                                assets: q,
                                onSelectedCarouselItemChange: Q,
                                isMuted: $,
                                trackPDPClick: ee,
                            }),
                            (0, a.jsxs)("div", {
                                className: D.V7,
                                children: [
                                    null != J &&
                                        (0, a.jsx)(U._, {
                                            sku: J,
                                            isCardHovered: !0,
                                            className: o()(D.jU, D.ij),
                                            trackButtonClick: en,
                                            variant: "overlay-secondary",
                                            location: "social_layer_storefront_product_details_modal",
                                        }),
                                    (0, a.jsx)(H, {
                                        onClick: et,
                                        ariaLabel: P.intl.string(P.t.Ej3B3Y),
                                        children: (0, a.jsx)(f.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(H, {
                                        onClick: ea,
                                        ariaLabel: $ ? P.intl.string(P.t.YqAjXy) : P.intl.string(P.t.w4m945),
                                        children: $
                                            ? (0, a.jsx)(c._RO, { size: "refresh_sm", color: "currentColor" })
                                            : (0, a.jsx)(c.HKD, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(H, {
                                        onClick: R,
                                        ariaLabel: P.intl.string(P.t.cpT0Cq),
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
function W(e) {
    let { timeRemaining: t, text: n } = e;
    return (0, a.jsx)(u.A, {
        className: D.qw,
        Icon: c.Cp8,
        children: (0, a.jsxs)("div", {
            className: D.Yu,
            children: [
                (0, a.jsxs)(c.Text, {
                    variant: "text-xs/bold",
                    color: "currentColor",
                    children: [P.intl.string(P.t.yYEZGi), null != t && ` (${t})`],
                }),
                (0, a.jsx)("div", {
                    className: D.fb,
                    children: (0, a.jsx)(c.Text, { variant: "text-xs/medium", color: "currentColor", children: n }),
                }),
            ],
        }),
    });
}
