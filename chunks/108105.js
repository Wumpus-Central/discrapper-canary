"use strict";
n.d(t, { default: () => Y }), n(321073);
var a = n(627968),
    l = n(64700),
    s = n(310784),
    r = n.n(s),
    i = n(503698),
    o = n.n(i),
    c = n(311907),
    d = n(397927),
    u = n(262427),
    _ = n(964486),
    m = n(736653),
    h = n(793574),
    p = n(688810),
    b = n(654107),
    f = n(139146),
    g = n(427209),
    A = n(594832),
    C = n(67480),
    x = n(328968),
    T = n(954571),
    I = n(580630),
    E = n(371794),
    v = n(871123),
    N = n(733391),
    S = n(832163),
    y = n(429635),
    k = n(476438),
    j = n(44724),
    R = n(486318),
    O = n(345938),
    P = n(533406),
    U = n(953590),
    w = n(995393),
    L = n(188275),
    D = n(652215),
    M = n(818348),
    F = n(985018),
    B = n(550951);
function H(e) {
    let { sku: t, guildId: n, shouldShowShopLink: s, onClose: r, trackPDPClick: i, analyticsLocations: o } = e,
        u = t?.id,
        _ = (0, c.bG)([S.A], () => (null != u ? S.A.getNormalizedSKUEligibility(u) : void 0), [u]),
        m = (0, k.B)(),
        p = l.useCallback(() => {
            null != t &&
                (i(w.Jq.BUY_BUTTON),
                (0, P.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...o, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: n,
                    },
                ));
        }, [t, i, n, o]),
        b = l.useCallback(() => {
            (0, j.X)({ guildId: n });
        }, [n]),
        f = l.useCallback(() => {
            i(w.Jq.VISIT_SHOP), (0, j.default)({ guildId: n }), r();
        }, [n, r, i]),
        g = l.useCallback(() => {
            null != t &&
                (i(w.Jq.GIFT_BUTTON),
                (0, P.a)(
                    t,
                    { isGift: !0 },
                    { analyticsLocations: [...o, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, i, o]);
    if (null == t) return null;
    let A = (0, I.$g)(t.price?.amount ?? 0, t.price?.currency ?? M.Yr.USD);
    return (0, a.jsxs)("div", {
        className: B.wt,
        children: [
            (0, a.jsxs)("div", {
                className: B.AX,
                children: [
                    (0, a.jsx)(d.Heading, { variant: "heading-xl/bold", color: "text-strong", children: t.name }),
                    (0, a.jsx)(d.Text, { variant: "text-sm/medium", color: "text-subtle", children: t.description }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: B.p6,
                children: [
                    (0, a.jsx)(d.Heading, { variant: "heading-md/semibold", color: "text-strong", children: A }),
                    null != t.orbsReward &&
                        t.orbsReward > 0 &&
                        (0, a.jsx)(q, {
                            timeRemaining: m ?? void 0,
                            text: F.intl.format(F.t.d3njXi, { orbCount: t.orbsReward }),
                        }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: B.NC,
                children: [
                    !_ &&
                        (0, a.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: F.intl.string(F.t.IqlPbQ),
                        }),
                    _ &&
                        (0, a.jsx)(d.Button, {
                            variant: "primary",
                            onClick: p,
                            text: F.intl.string(F.t.boqtTA),
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
                                      onMouseDown: b,
                                      onClick: f,
                                      text: F.intl.string(F.t["2QW9nR"]),
                                      fullWidth: !0,
                                  })
                                : null,
                            (0, a.jsx)(d.Button, {
                                icon: d.okO,
                                variant: "secondary",
                                onClick: g,
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
function G(e) {
    let { sku: t, applicationId: n, storefront: s, onSelectedCarouselItemChange: r, isMuted: i, trackPDPClick: o } = e,
        [c, d] = l.useState([]),
        [u, _] = l.useState([]),
        m = l.useCallback(
            (e) => {
                let t = u.findIndex((t) => t === e);
                r?.(c[t] ?? null);
            },
            [r, c, u],
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
                                  null != s.backgroundAssetId ? (0, E.YE)(t, s.backgroundAssetId, U.B, v.pV) : void 0,
                          })
                        : l.push({
                              type: "image",
                              src: (0, E.YE)(t, e, U.B, "webp"),
                              thumbnailSrc:
                                  null != s.thumbnailAssetId ? (0, E.YE)(t, s.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != s.backgroundAssetId ? (0, E.YE)(t, s.backgroundAssetId, U.B, v.pV) : void 0,
                          }));
            }
            return [a, l];
        })(t?.tenantMetadata?.socialLayer?.carouselItems ?? [], n, s.assets);
        d(e), _(a);
    }, [t, s.assets, n]),
    0 === u.length)
        ? null
        : (0, a.jsx)(U.A, { className: B.Dk, items: u, onItemChange: m, isMuted: i, onTrackClick: o });
}
function W(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let l = null != t.labelIconAssetId ? (0, E.YE)(n, t.labelIconAssetId) : null;
    return (0, a.jsxs)("div", {
        className: B.HI,
        children: [
            null != l && (0, a.jsx)("img", { className: B.IX, src: l, alt: t.label }, l),
            (0, a.jsx)(d.Text, { variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function V(e) {
    let { onClick: t, children: n, ariaLabel: l } = e;
    return (0, a.jsx)(d.DUT, { onClick: t, className: B.jU, "aria-label": l, role: "button", children: n });
}
function Y(e) {
    let {
            transitionState: t,
            returnRef: n,
            skuId: s,
            applicationId: i,
            guildId: u,
            isStorefront: h,
            analyticsLocations: I,
            analyticsContext: v,
            onClose: S,
        } = e,
        { analyticsLocations: k } = (0, p.Ay)(I ?? []),
        j = (0, y.A)({ guildId: u }),
        P = (0, c.bG)([x.A], () => x.A.isFetchingForSKU(s)),
        U = (0, d.Mwr)((0, m.Ay)()),
        [M, Y] = l.useState(!0),
        q = (0, c.bG)([C.A], () => C.A.get(s)),
        [X, $] = l.useState(null),
        z = (function (e, t) {
            let n = t?.labelIconAssetId != null ? (0, E.YE)(e, t?.labelIconAssetId) : null,
                [a, s] = (0, b.rh)(n, "#000000"),
                i = l.useMemo(() => {
                    let e = r()(a).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [a]);
            return null != n && "#000000" !== a ? i : void 0;
        })(i, X);
    (0, A.pE)(),
        (0, _.Ay)(() => {
            T.default.track(D.HAw.OPEN_MODAL, { location_stack: k, type: L.Nh, sku_id: s, application_id: i }),
                (0, N.Xw)();
        });
    let J = l.useCallback(
        (e) => {
            T.default.track(D.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                slayer_storefront_session_id: v?.sessionId,
                sku_id: s,
                guild_id: v?.guildId,
                cta_type: e,
                location_stack: k,
            });
        },
        [v, s, k],
    );
    l.useEffect(() => {
        null == u || null == s || x.A.isFetchingForSKU(s) || (0, N.qf)(u, s);
    }, [u, s]);
    let K = l.useCallback(() => {
            null != q &&
                (J(w.Jq.FORWARD_BUTTON),
                (0, O.d)({
                    sku: q,
                    guildId: u,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: k,
                    analyticsContext: v,
                }));
        }, [q, u, J, k, v]),
        Q = l.useCallback(() => {
            J(w.Jq.WISHLIST_BUTTON);
        }, [J]),
        Z = l.useCallback(() => {
            Y(!M), J(w.Jq.MUTE_BUTTON);
        }, [M, J]);
    if (null == q?.tenantMetadata?.socialLayer || j?.storefront == null) return P ? (0, a.jsx)(d.y$y, {}) : null;
    let ee =
            null != j.storefront.logoAssetId
                ? (0, E.YE)(j.storefront.applicationId, j.storefront.logoAssetId, 75)
                : null,
        et =
            null != j.storefront.lightThemeLogoAssetId
                ? (0, E.YE)(j.storefront.applicationId, j.storefront.lightThemeLogoAssetId, 75)
                : null,
        en = null;
    return (
        (en = U ? (ee ?? et) : (et ?? ee)),
        (0, a.jsx)(d.EOs, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: B.CR,
            size: d.rIJ.DYNAMIC,
            returnRef: n,
            children: (0, a.jsxs)(d.$mQ, {
                className: B.jE,
                children: [
                    (0, a.jsxs)("div", {
                        className: B.op,
                        style: { background: z },
                        children: [
                            (0, a.jsx)("div", {
                                className: B.r$,
                                children: null != en ? (0, a.jsx)("img", { className: B.wm, src: en, alt: "" }) : null,
                            }),
                            (0, a.jsx)(W, { applicationId: i, selectedCarouselItem: X }),
                            (0, a.jsx)(H, {
                                sku: q,
                                guildId: u,
                                shouldShowShopLink: !h,
                                onClose: S,
                                trackPDPClick: J,
                                analyticsLocations: k,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: B.Cf,
                        children: [
                            (0, a.jsx)(G, {
                                sku: q,
                                applicationId: i,
                                storefront: j.storefront,
                                onSelectedCarouselItemChange: $,
                                isMuted: M,
                                trackPDPClick: J,
                            }),
                            (0, a.jsxs)("div", {
                                className: B.V7,
                                children: [
                                    null != q &&
                                        (0, a.jsx)(f._, {
                                            skuId: q.id,
                                            productName: q.name,
                                            isCardHovered: !0,
                                            className: o()(B.jU, B.ij),
                                            nuxGraphic: (0, R.N)(q),
                                            onClick: Q,
                                            variant: "overlay-secondary",
                                        }),
                                    (0, a.jsx)(V, {
                                        onClick: K,
                                        ariaLabel: F.intl.string(F.t.Ej3B3Y),
                                        children: (0, a.jsx)(g.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(V, {
                                        onClick: Z,
                                        ariaLabel: M ? F.intl.string(F.t.YqAjXy) : F.intl.string(F.t.w4m945),
                                        children: M
                                            ? (0, a.jsx)(d._RO, { size: "refresh_sm", color: "currentColor" })
                                            : (0, a.jsx)(d.HKD, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(V, {
                                        onClick: S,
                                        ariaLabel: F.intl.string(F.t.cpT0Cq),
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
function q(e) {
    let { timeRemaining: t, text: n } = e;
    return (0, a.jsx)(u.A, {
        className: B.qw,
        Icon: d.Cp8,
        children: (0, a.jsxs)("div", {
            className: B.Yu,
            children: [
                (0, a.jsxs)(d.Text, {
                    variant: "text-xs/bold",
                    color: "currentColor",
                    children: [F.intl.string(F.t.yYEZGi), null != t && ` (${t})`],
                }),
                (0, a.jsx)("div", {
                    className: B.fb,
                    children: (0, a.jsx)(d.Text, { variant: "text-xs/medium", color: "currentColor", children: n }),
                }),
            ],
        }),
    });
}
