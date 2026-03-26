n.d(t, { default: () => G }), n(321073);
var a = n(627968),
    l = n(64700),
    s = n(310784),
    r = n.n(s),
    i = n(503698),
    o = n.n(i),
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
            giftRecipient: r,
            giftingOrigin: i,
            onClose: o,
            trackPDPClick: u,
            analyticsLocations: _,
        } = e,
        m = t?.id,
        p = (0, d.bG)([v.A], () => (null != m ? v.A.getNormalizedSKUEligibility(m) : void 0), [m]),
        b = (0, j.B)(),
        f = l.useCallback(() => {
            null != t &&
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
            (0, S.X)({ guildId: n });
        }, [n]),
        C = l.useCallback(() => {
            u(O.Jq.VISIT_SHOP), (0, S.default)({ guildId: n }), o();
        }, [n, o, u]),
        x = l.useCallback(() => {
            null != t &&
                (u(O.Jq.GIFT_BUTTON),
                (0, y.a)(
                    t,
                    { isGift: !0, giftRecipient: r, giftingOrigin: i },
                    { analyticsLocations: [..._, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, u, r, i, _]);
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
    let { sku: t, applicationId: n, storefront: s, onSelectedCarouselItemChange: r, isMuted: i, trackPDPClick: o } = e,
        [d, c] = l.useState([]),
        [u, _] = l.useState([]),
        m = l.useCallback(
            (e) => {
                let t = u.findIndex((t) => t === e);
                r?.(d[t] ?? null);
            },
            [r, d, u],
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
        })(t?.tenantMetadata?.socialLayer?.carouselItems ?? [], n, s.assets);
        c(e), _(a);
    }, [t, s.assets, n]),
    0 === u.length)
        ? null
        : (0, a.jsx)(R.A, { className: D.Dk, items: u, onItemChange: m, isMuted: i, onTrackClick: o });
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
            applicationId: i,
            guildId: u,
            isStorefront: h,
            giftRecipient: E,
            giftingOrigin: v,
            analyticsLocations: j,
            analyticsContext: S,
            onClose: y,
        } = e,
        { analyticsLocations: R } = (0, p.Ay)(j ?? []),
        G = (0, N.A)({ guildId: u }),
        W = (0, d.bG)([x.A], () => x.A.isFetchingForSKU(s)),
        Y = (0, c.Mwr)((0, m.Ay)()),
        [q, X] = l.useState(!0),
        V = (0, d.bG)([C.A], () => C.A.get(s)),
        [$, z] = l.useState(null),
        J = (function (e, t) {
            let n = t?.labelIconAssetId != null ? (0, T.YE)(e, t?.labelIconAssetId) : null,
                [a, s] = (0, b.rh)(n, "#000000"),
                i = l.useMemo(() => {
                    let e = r()(a).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [a]);
            return null != n && "#000000" !== a ? i : void 0;
        })(i, $);
    (0, g.pE)(),
        (0, _.Ay)(() => {
            A.default.track(L.HAw.OPEN_MODAL, { location_stack: R, type: w.Nh, sku_id: s, application_id: i }),
                (0, I.Xw)();
        });
    let K = l.useCallback(
        (e) => {
            A.default.track(L.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                slayer_storefront_session_id: S?.sessionId,
                sku_id: s,
                guild_id: S?.guildId,
                cta_type: e,
                location_stack: R,
            });
        },
        [S, s, R],
    );
    l.useEffect(() => {
        null == u || null == s || x.A.isFetchingForSKU(s) || (0, I.qf)(u, s);
    }, [u, s]);
    let Q = l.useCallback(() => {
            null != V &&
                (K(O.Jq.FORWARD_BUTTON),
                (0, k.d)({
                    sku: V,
                    guildId: u,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: R,
                    analyticsContext: S,
                }));
        }, [V, u, K, R, S]),
        Z = l.useCallback(() => {
            K(O.Jq.WISHLIST_BUTTON);
        }, [K]),
        ee = l.useCallback(() => {
            X(!q), K(O.Jq.MUTE_BUTTON);
        }, [q, K]);
    if (null == V?.tenantMetadata?.socialLayer || G?.storefront == null) return W ? (0, a.jsx)(c.y$y, {}) : null;
    let et =
            null != G.storefront.logoAssetId
                ? (0, T.YE)(G.storefront.applicationId, G.storefront.logoAssetId, 75)
                : null,
        en =
            null != G.storefront.lightThemeLogoAssetId
                ? (0, T.YE)(G.storefront.applicationId, G.storefront.lightThemeLogoAssetId, 75)
                : null,
        ea = null;
    return (
        (ea = Y ? (et ?? en) : (en ?? et)),
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
                        style: { background: J },
                        children: [
                            (0, a.jsx)("div", {
                                className: D.r$,
                                children: null != ea ? (0, a.jsx)("img", { className: D.wm, src: ea, alt: "" }) : null,
                            }),
                            (0, a.jsx)(F, { applicationId: i, selectedCarouselItem: $ }),
                            (0, a.jsx)(B, {
                                sku: V,
                                guildId: u,
                                shouldShowShopLink: !h,
                                giftRecipient: E,
                                giftingOrigin: v,
                                onClose: y,
                                trackPDPClick: K,
                                analyticsLocations: R,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: D.Cf,
                        children: [
                            (0, a.jsx)(M, {
                                sku: V,
                                applicationId: i,
                                storefront: G.storefront,
                                onSelectedCarouselItemChange: z,
                                isMuted: q,
                                trackPDPClick: K,
                            }),
                            (0, a.jsxs)("div", {
                                className: D.V7,
                                children: [
                                    null != V &&
                                        (0, a.jsx)(U._, {
                                            sku: V,
                                            isCardHovered: !0,
                                            className: o()(D.jU, D.ij),
                                            trackButtonClick: Z,
                                            variant: "overlay-secondary",
                                            location: "social_layer_storefront_product_details_modal",
                                        }),
                                    (0, a.jsx)(H, {
                                        onClick: Q,
                                        ariaLabel: P.intl.string(P.t.Ej3B3Y),
                                        children: (0, a.jsx)(f.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(H, {
                                        onClick: ee,
                                        ariaLabel: q ? P.intl.string(P.t.YqAjXy) : P.intl.string(P.t.w4m945),
                                        children: q
                                            ? (0, a.jsx)(c._RO, { size: "refresh_sm", color: "currentColor" })
                                            : (0, a.jsx)(c.HKD, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(H, {
                                        onClick: y,
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
