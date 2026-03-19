n.d(t, { default: () => Y }), n(321073);
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
    T = n(580630),
    E = n(371794),
    I = n(871123),
    v = n(733391),
    N = n(832163),
    j = n(429635),
    S = n(476438),
    k = n(44724),
    y = n(345938),
    R = n(533406),
    U = n(953590),
    O = n(743693),
    w = n(995393),
    L = n(188275),
    P = n(652215),
    D = n(818348),
    B = n(985018),
    M = n(550951);
function F(e) {
    let { sku: t, guildId: n, shouldShowShopLink: s, onClose: r, trackPDPClick: i, analyticsLocations: o } = e,
        u = t?.id,
        _ = (0, d.bG)([N.A], () => (null != u ? N.A.getNormalizedSKUEligibility(u) : void 0), [u]),
        m = (0, S.B)(),
        p = l.useCallback(() => {
            null != t &&
                (i(w.Jq.BUY_BUTTON),
                (0, R.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...o, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: n,
                    },
                ));
        }, [t, i, n, o]),
        b = l.useCallback(() => {
            (0, k.X)({ guildId: n });
        }, [n]),
        f = l.useCallback(() => {
            i(w.Jq.VISIT_SHOP), (0, k.default)({ guildId: n }), r();
        }, [n, r, i]),
        g = l.useCallback(() => {
            null != t &&
                (i(w.Jq.GIFT_BUTTON),
                (0, R.a)(
                    t,
                    { isGift: !0 },
                    { analyticsLocations: [...o, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, i, o]);
    if (null == t) return null;
    let C = (0, T.$g)(t.price?.amount ?? 0, t.price?.currency ?? D.Yr.USD);
    return (0, a.jsxs)("div", {
        className: M.wt,
        children: [
            (0, a.jsxs)("div", {
                className: M.AX,
                children: [
                    (0, a.jsx)(c.Heading, { variant: "heading-xl/bold", color: "text-strong", children: t.name }),
                    (0, a.jsx)(c.Text, { variant: "text-sm/medium", color: "text-subtle", children: t.description }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: M.p6,
                children: [
                    (0, a.jsx)(c.Heading, { variant: "heading-md/semibold", color: "text-strong", children: C }),
                    null != t.orbsReward &&
                        t.orbsReward > 0 &&
                        (0, a.jsx)(q, {
                            timeRemaining: m ?? void 0,
                            text: B.intl.format(B.t.d3njXi, { orbCount: t.orbsReward }),
                        }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: M.NC,
                children: [
                    !_ &&
                        (0, a.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: B.intl.string(B.t.IqlPbQ),
                        }),
                    _ &&
                        (0, a.jsx)(c.Button, {
                            variant: "primary",
                            onClick: p,
                            text: B.intl.string(B.t.boqtTA),
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
                                      onMouseDown: b,
                                      onClick: f,
                                      text: B.intl.string(B.t["2QW9nR"]),
                                      fullWidth: !0,
                                  })
                                : null,
                            (0, a.jsx)(c.Button, {
                                icon: c.okO,
                                variant: "secondary",
                                onClick: g,
                                text: B.intl.string(B.t.QAZA5f),
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function H(e) {
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
                              src: (0, E.YE)(t, e, U.B, "mp4"),
                              videoThumbnailSrc: (0, E.YE)(t, e, U.B, "webp"),
                              thumbnailSrc:
                                  null != s.thumbnailAssetId ? (0, E.YE)(t, s.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != s.backgroundAssetId ? (0, E.YE)(t, s.backgroundAssetId, U.B, I.pV) : void 0,
                          })
                        : l.push({
                              type: "image",
                              src: (0, E.YE)(t, e, U.B, "webp"),
                              thumbnailSrc:
                                  null != s.thumbnailAssetId ? (0, E.YE)(t, s.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != s.backgroundAssetId ? (0, E.YE)(t, s.backgroundAssetId, U.B, I.pV) : void 0,
                          }));
            }
            return [a, l];
        })(t?.tenantMetadata?.socialLayer?.carouselItems ?? [], n, s.assets);
        c(e), _(a);
    }, [t, s.assets, n]),
    0 === u.length)
        ? null
        : (0, a.jsx)(U.A, { className: M.Dk, items: u, onItemChange: m, isMuted: i, onTrackClick: o });
}
function G(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let l = null != t.labelIconAssetId ? (0, E.YE)(n, t.labelIconAssetId) : null;
    return (0, a.jsxs)("div", {
        className: M.HI,
        children: [
            null != l && (0, a.jsx)("img", { className: M.IX, src: l, alt: t.label }, l),
            (0, a.jsx)(c.Text, { variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function W(e) {
    let { onClick: t, children: n, ariaLabel: l } = e;
    return (0, a.jsx)(c.DUT, { onClick: t, className: M.jU, "aria-label": l, role: "button", children: n });
}
function Y(e) {
    let {
            transitionState: t,
            returnRef: n,
            skuId: s,
            applicationId: i,
            guildId: u,
            isStorefront: h,
            analyticsLocations: T,
            analyticsContext: I,
            onClose: N,
        } = e,
        { analyticsLocations: S } = (0, p.Ay)(T ?? []),
        k = (0, j.A)({ guildId: u }),
        R = (0, d.bG)([x.A], () => x.A.isFetchingForSKU(s)),
        U = (0, c.Mwr)((0, m.Ay)()),
        [D, Y] = l.useState(!0),
        q = (0, d.bG)([C.A], () => C.A.get(s)),
        [X, V] = l.useState(null),
        $ = (function (e, t) {
            let n = t?.labelIconAssetId != null ? (0, E.YE)(e, t?.labelIconAssetId) : null,
                [a, s] = (0, b.rh)(n, "#000000"),
                i = l.useMemo(() => {
                    let e = r()(a).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [a]);
            return null != n && "#000000" !== a ? i : void 0;
        })(i, X);
    (0, g.pE)(),
        (0, _.Ay)(() => {
            A.default.track(P.HAw.OPEN_MODAL, { location_stack: S, type: L.Nh, sku_id: s, application_id: i }),
                (0, v.Xw)();
        });
    let z = l.useCallback(
        (e) => {
            A.default.track(P.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                slayer_storefront_session_id: I?.sessionId,
                sku_id: s,
                guild_id: I?.guildId,
                cta_type: e,
                location_stack: S,
            });
        },
        [I, s, S],
    );
    l.useEffect(() => {
        null == u || null == s || x.A.isFetchingForSKU(s) || (0, v.qf)(u, s);
    }, [u, s]);
    let J = l.useCallback(() => {
            null != q &&
                (z(w.Jq.FORWARD_BUTTON),
                (0, y.d)({
                    sku: q,
                    guildId: u,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: S,
                    analyticsContext: I,
                }));
        }, [q, u, z, S, I]),
        K = l.useCallback(() => {
            z(w.Jq.WISHLIST_BUTTON);
        }, [z]),
        Q = l.useCallback(() => {
            Y(!D), z(w.Jq.MUTE_BUTTON);
        }, [D, z]);
    if (null == q?.tenantMetadata?.socialLayer || k?.storefront == null) return R ? (0, a.jsx)(c.y$y, {}) : null;
    let Z =
            null != k.storefront.logoAssetId
                ? (0, E.YE)(k.storefront.applicationId, k.storefront.logoAssetId, 75)
                : null,
        ee =
            null != k.storefront.lightThemeLogoAssetId
                ? (0, E.YE)(k.storefront.applicationId, k.storefront.lightThemeLogoAssetId, 75)
                : null,
        et = null;
    return (
        (et = U ? (Z ?? ee) : (ee ?? Z)),
        (0, a.jsx)(c.EOs, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: M.CR,
            size: c.rIJ.DYNAMIC,
            returnRef: n,
            children: (0, a.jsxs)(c.$mQ, {
                className: M.jE,
                children: [
                    (0, a.jsxs)("div", {
                        className: M.op,
                        style: { background: $ },
                        children: [
                            (0, a.jsx)("div", {
                                className: M.r$,
                                children: null != et ? (0, a.jsx)("img", { className: M.wm, src: et, alt: "" }) : null,
                            }),
                            (0, a.jsx)(G, { applicationId: i, selectedCarouselItem: X }),
                            (0, a.jsx)(F, {
                                sku: q,
                                guildId: u,
                                shouldShowShopLink: !h,
                                onClose: N,
                                trackPDPClick: z,
                                analyticsLocations: S,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: M.Cf,
                        children: [
                            (0, a.jsx)(H, {
                                sku: q,
                                applicationId: i,
                                storefront: k.storefront,
                                onSelectedCarouselItemChange: V,
                                isMuted: D,
                                trackPDPClick: z,
                            }),
                            (0, a.jsxs)("div", {
                                className: M.V7,
                                children: [
                                    null != q &&
                                        (0, a.jsx)(O._, {
                                            sku: q,
                                            isCardHovered: !0,
                                            className: o()(M.jU, M.ij),
                                            trackButtonClick: K,
                                            variant: "overlay-secondary",
                                        }),
                                    (0, a.jsx)(W, {
                                        onClick: J,
                                        ariaLabel: B.intl.string(B.t.Ej3B3Y),
                                        children: (0, a.jsx)(f.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(W, {
                                        onClick: Q,
                                        ariaLabel: D ? B.intl.string(B.t.YqAjXy) : B.intl.string(B.t.w4m945),
                                        children: D
                                            ? (0, a.jsx)(c._RO, { size: "refresh_sm", color: "currentColor" })
                                            : (0, a.jsx)(c.HKD, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(W, {
                                        onClick: N,
                                        ariaLabel: B.intl.string(B.t.cpT0Cq),
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
function q(e) {
    let { timeRemaining: t, text: n } = e;
    return (0, a.jsx)(u.A, {
        className: M.qw,
        Icon: c.Cp8,
        children: (0, a.jsxs)("div", {
            className: M.Yu,
            children: [
                (0, a.jsxs)(c.Text, {
                    variant: "text-xs/bold",
                    color: "currentColor",
                    children: [B.intl.string(B.t.yYEZGi), null != t && ` (${t})`],
                }),
                (0, a.jsx)("div", {
                    className: M.fb,
                    children: (0, a.jsx)(c.Text, { variant: "text-xs/medium", color: "currentColor", children: n }),
                }),
            ],
        }),
    });
}
