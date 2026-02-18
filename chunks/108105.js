"use strict";
n.d(t, { default: () => X }), n(321073);
var a = n(627968),
    l = n(64700),
    r = n(310784),
    s = n.n(r),
    i = n(503698),
    o = n.n(i),
    d = n(311907),
    c = n(397927),
    u = n(964486),
    _ = n(736653),
    m = n(793574),
    h = n(688810),
    b = n(654107),
    p = n(139146),
    g = n(427209),
    f = n(594832),
    C = n(67480),
    x = n(328968),
    A = n(954571),
    I = n(580630),
    v = n(371794),
    j = n(871123),
    k = n(733391),
    y = n(832163),
    N = n(476438),
    E = n(44724),
    S = n(486318),
    T = n(345938),
    P = n(533406),
    R = n(953590),
    U = n(204890),
    w = n(995393),
    L = n(188275),
    O = n(652215),
    D = n(818348),
    B = n(985018),
    M = n(88465);
function F(e) {
    let { sku: t, guildId: n, shouldShowShopLink: r, onClose: s, trackPDPClick: i, analyticsLocations: o } = e,
        u = t?.id,
        _ = (0, d.bG)([y.A], () => (null != u ? y.A.getNormalizedSKUEligibility(u) : void 0), [u]),
        h = (0, N.A)(),
        b = l.useCallback(() => {
            null != t &&
                (i(w.Jq.BUY_BUTTON),
                (0, P.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...o, m.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: n,
                    },
                ));
        }, [t, i, n, o]),
        p = l.useCallback(() => {
            (0, E.X)({ guildId: n });
        }, [n]),
        g = l.useCallback(() => {
            i(w.Jq.VISIT_SHOP), (0, E.default)({ guildId: n }), s();
        }, [n, s, i]),
        f = l.useCallback(() => {
            null != t &&
                (i(w.Jq.GIFT_BUTTON),
                (0, P.a)(
                    t,
                    { isGift: !0 },
                    { analyticsLocations: [...o, m.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, i, o]);
    if (null == t) return null;
    let C = (0, I.$g)(t.price?.amount ?? 0, t.price?.currency ?? D.Yr.USD);
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
                        (0, a.jsx)(U.A, {
                            variant: "standard",
                            timeRemaining: h ?? void 0,
                            Icon: c.Cp8,
                            text: B.intl.format(B.t.d3njXi, { orbCount: t.orbsReward }),
                        }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: M.NC,
                children: [
                    (0, a.jsx)(c.Button, {
                        variant: "primary",
                        onClick: b,
                        text: _ ? B.intl.string(B.t.boqtTA) : B.intl.string(B.t.cg0M2H),
                        fullWidth: !0,
                        disabled: !_,
                    }),
                    (0, a.jsxs)(c.ButtonGroup, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            r
                                ? (0, a.jsx)(c.Button, {
                                      icon: c.U1X,
                                      variant: "secondary",
                                      onMouseDown: p,
                                      onClick: g,
                                      text: B.intl.string(B.t["2QW9nR"]),
                                      fullWidth: !0,
                                  })
                                : null,
                            (0, a.jsx)(c.Button, {
                                icon: c.okO,
                                variant: "secondary",
                                onClick: f,
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
    let { sku: t, applicationId: n, storefront: r, onSelectedCarouselItemChange: s, isMuted: i, trackPDPClick: o } = e,
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
            for (let r of e) {
                let e = null != r.assetId ? n[r.assetId] : null;
                null != e &&
                    (a.push(r),
                    e.mime_type.startsWith("video/")
                        ? l.push({
                              type: "video",
                              src: (0, v.YE)(t, e, R.B, "mp4"),
                              videoThumbnailSrc: (0, v.YE)(t, e, R.B, "webp"),
                              thumbnailSrc:
                                  null != r.thumbnailAssetId ? (0, v.YE)(t, r.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != r.backgroundAssetId ? (0, v.YE)(t, r.backgroundAssetId, R.B, j.pV) : void 0,
                          })
                        : l.push({
                              type: "image",
                              src: (0, v.YE)(t, e, R.B, "webp"),
                              thumbnailSrc:
                                  null != r.thumbnailAssetId ? (0, v.YE)(t, r.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != r.backgroundAssetId ? (0, v.YE)(t, r.backgroundAssetId, R.B, j.pV) : void 0,
                          }));
            }
            return [a, l];
        })(t?.tenantMetadata?.socialLayer?.carouselItems ?? [], n, r.assets);
        c(e), _(a);
    }, [t, r.assets, n]),
    0 === u.length)
        ? null
        : (0, a.jsx)(R.A, { className: M.Dk, items: u, onItemChange: m, isMuted: i, onTrackClick: o });
}
function G(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let l = null != t.labelIconAssetId ? (0, v.YE)(n, t.labelIconAssetId) : null;
    return (0, a.jsxs)("div", {
        className: M.HI,
        children: [
            null != l && (0, a.jsx)("img", { className: M.IX, src: l, alt: t.label }, l),
            (0, a.jsx)(c.Text, { variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function V(e) {
    let { onClick: t, children: n, ariaLabel: l } = e;
    return (0, a.jsx)(c.DUT, { onClick: t, className: M.jU, "aria-label": l, role: "button", children: n });
}
function X(e) {
    let {
            transitionState: t,
            returnRef: n,
            skuId: r,
            applicationId: i,
            guildId: m,
            isStorefront: I,
            analyticsLocations: j,
            analyticsContext: N,
            onClose: E,
        } = e,
        { analyticsLocations: P } = (0, h.Ay)(j ?? []),
        R = (0, d.bG)([y.A], () => y.A.getStorefrontData(m), [m]),
        U = (0, d.bG)([x.A], () => x.A.isFetchingForSKU(r)),
        D = (0, c.Mwr)((0, _.Ay)()),
        [X, Y] = l.useState(!0),
        W = (0, d.bG)([C.A], () => C.A.get(r)),
        [$, q] = l.useState(null),
        z = (function (e, t) {
            let n = t?.labelIconAssetId != null ? (0, v.YE)(e, t?.labelIconAssetId) : null,
                [a, r] = (0, b.rh)(n, "#000000"),
                i = l.useMemo(() => {
                    let e = s()(a).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [a]);
            return null != n && "#000000" !== a ? i : void 0;
        })(i, $);
    (0, f.pE)(),
        (0, u.Ay)(() => {
            A.default.track(O.HAw.OPEN_MODAL, { location_stack: P, type: L.Nh, sku_id: r, application_id: i }),
                (0, k.Xw)();
        });
    let J = l.useCallback(
        (e) => {
            A.default.track(O.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                slayer_storefront_session_id: N?.sessionId,
                sku_id: r,
                guild_id: N?.guildId,
                cta_type: e,
                location_stack: P,
            });
        },
        [N, r, P],
    );
    l.useEffect(() => {
        null == m || null == r || x.A.isFetchingForSKU(r) || (0, k.qf)(m, r);
    }, [m, r]);
    let Q = l.useCallback(() => {
            null != W &&
                (J(w.Jq.FORWARD_BUTTON),
                (0, T.d)({
                    sku: W,
                    guildId: m,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: P,
                    analyticsContext: N,
                }));
        }, [W, m, J, P, N]),
        K = l.useCallback(() => {
            J(w.Jq.WISHLIST_BUTTON);
        }, [J]),
        Z = l.useCallback(() => {
            Y(!X), J(w.Jq.MUTE_BUTTON);
        }, [X, J]);
    if (null == W?.tenantMetadata?.socialLayer || R?.storefront == null) return U ? (0, a.jsx)(c.y$y, {}) : null;
    let ee =
            null != R.storefront.logoAssetId
                ? (0, v.YE)(R.storefront.applicationId, R.storefront.logoAssetId, 75)
                : null,
        et =
            null != R.storefront.lightThemeLogoAssetId
                ? (0, v.YE)(R.storefront.applicationId, R.storefront.lightThemeLogoAssetId, 75)
                : null,
        en = null;
    return (
        (en = D ? (ee ?? et) : (et ?? ee)),
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
                        style: { background: z },
                        children: [
                            (0, a.jsx)("div", {
                                className: M.r$,
                                children: null != en ? (0, a.jsx)("img", { className: M.wm, src: en, alt: "" }) : null,
                            }),
                            (0, a.jsx)(G, { applicationId: i, selectedCarouselItem: $ }),
                            (0, a.jsx)(F, {
                                sku: W,
                                guildId: m,
                                shouldShowShopLink: !I,
                                onClose: E,
                                trackPDPClick: J,
                                analyticsLocations: P,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: M.Cf,
                        children: [
                            (0, a.jsx)(H, {
                                sku: W,
                                applicationId: i,
                                storefront: R.storefront,
                                onSelectedCarouselItemChange: q,
                                isMuted: X,
                                trackPDPClick: J,
                            }),
                            (0, a.jsxs)("div", {
                                className: M.V7,
                                children: [
                                    null != W &&
                                        (0, a.jsx)(p._, {
                                            skuId: W.id,
                                            productName: W.name,
                                            isCardHovered: !0,
                                            className: o()(M.jU, M.ij),
                                            nuxGraphic: (0, S.N)(W),
                                            onClick: K,
                                            variant: "overlay-secondary",
                                        }),
                                    (0, a.jsx)(V, {
                                        onClick: Q,
                                        ariaLabel: B.intl.string(B.t.Ej3B3Y),
                                        children: (0, a.jsx)(g.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(V, {
                                        onClick: Z,
                                        ariaLabel: X ? B.intl.string(B.t.YqAjXy) : B.intl.string(B.t.w4m945),
                                        children: X
                                            ? (0, a.jsx)(c._RO, { size: "refresh_sm", color: "currentColor" })
                                            : (0, a.jsx)(c.HKD, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(V, {
                                        onClick: E,
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
