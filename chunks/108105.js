"use strict";
n.d(t, { default: () => Y }), n(321073);
var a = n(627968),
    l = n(64700),
    r = n(310784),
    s = n.n(r),
    i = n(503698),
    o = n.n(i),
    d = n(311907),
    c = n(397927),
    u = n(262427),
    _ = n(964486),
    m = n(736653),
    h = n(793574),
    b = n(688810),
    p = n(654107),
    g = n(139146),
    f = n(427209),
    C = n(594832),
    x = n(67480),
    A = n(328968),
    I = n(954571),
    v = n(580630),
    j = n(371794),
    k = n(871123),
    E = n(733391),
    y = n(832163),
    N = n(476438),
    S = n(44724),
    T = n(486318),
    P = n(345938),
    R = n(533406),
    U = n(953590),
    w = n(995393),
    L = n(188275),
    O = n(652215),
    D = n(818348),
    B = n(985018),
    M = n(550951);
function F(e) {
    let { sku: t, guildId: n, shouldShowShopLink: r, onClose: s, trackPDPClick: i, analyticsLocations: o } = e,
        _ = t?.id,
        m = (0, d.bG)([y.A], () => (null != _ ? y.A.getNormalizedSKUEligibility(_) : void 0), [_]),
        b = (0, N.A)(),
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
        g = l.useCallback(() => {
            (0, S.X)({ guildId: n });
        }, [n]),
        f = l.useCallback(() => {
            i(w.Jq.VISIT_SHOP), (0, S.default)({ guildId: n }), s();
        }, [n, s, i]),
        C = l.useCallback(() => {
            null != t &&
                (i(w.Jq.GIFT_BUTTON),
                (0, R.a)(
                    t,
                    { isGift: !0 },
                    { analyticsLocations: [...o, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, i, o]);
    if (null == t) return null;
    let x = (0, v.$g)(t.price?.amount ?? 0, t.price?.currency ?? D.Yr.USD);
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
                    (0, a.jsx)(c.Heading, { variant: "heading-md/semibold", color: "text-strong", children: x }),
                    null != t.orbsReward &&
                        t.orbsReward > 0 &&
                        (0, a.jsx)(u.A, {
                            variant: "standard",
                            timeRemaining: b ?? void 0,
                            Icon: c.Cp8,
                            text: B.intl.format(B.t.d3njXi, { orbCount: t.orbsReward }),
                        }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: M.NC,
                children: [
                    !m &&
                        (0, a.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: B.intl.string(B.t.IqlPbQ),
                        }),
                    m &&
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
                            r
                                ? (0, a.jsx)(c.Button, {
                                      icon: c.U1X,
                                      variant: "secondary",
                                      onMouseDown: g,
                                      onClick: f,
                                      text: B.intl.string(B.t["2QW9nR"]),
                                      fullWidth: !0,
                                  })
                                : null,
                            (0, a.jsx)(c.Button, {
                                icon: c.okO,
                                variant: "secondary",
                                onClick: C,
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
function G(e) {
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
                              src: (0, j.YE)(t, e, U.B, "mp4"),
                              videoThumbnailSrc: (0, j.YE)(t, e, U.B, "webp"),
                              thumbnailSrc:
                                  null != r.thumbnailAssetId ? (0, j.YE)(t, r.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != r.backgroundAssetId ? (0, j.YE)(t, r.backgroundAssetId, U.B, k.pV) : void 0,
                          })
                        : l.push({
                              type: "image",
                              src: (0, j.YE)(t, e, U.B, "webp"),
                              thumbnailSrc:
                                  null != r.thumbnailAssetId ? (0, j.YE)(t, r.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != r.backgroundAssetId ? (0, j.YE)(t, r.backgroundAssetId, U.B, k.pV) : void 0,
                          }));
            }
            return [a, l];
        })(t?.tenantMetadata?.socialLayer?.carouselItems ?? [], n, r.assets);
        c(e), _(a);
    }, [t, r.assets, n]),
    0 === u.length)
        ? null
        : (0, a.jsx)(U.A, { className: M.Dk, items: u, onItemChange: m, isMuted: i, onTrackClick: o });
}
function H(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let l = null != t.labelIconAssetId ? (0, j.YE)(n, t.labelIconAssetId) : null;
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
function Y(e) {
    let {
            transitionState: t,
            returnRef: n,
            skuId: r,
            applicationId: i,
            guildId: u,
            isStorefront: h,
            analyticsLocations: v,
            analyticsContext: k,
            onClose: N,
        } = e,
        { analyticsLocations: S } = (0, b.Ay)(v ?? []),
        R = (0, d.bG)([y.A], () => y.A.getStorefrontData(u), [u]),
        U = (0, d.bG)([A.A], () => A.A.isFetchingForSKU(r)),
        D = (0, c.Mwr)((0, m.Ay)()),
        [Y, X] = l.useState(!0),
        q = (0, d.bG)([x.A], () => x.A.get(r)),
        [W, $] = l.useState(null),
        z = (function (e, t) {
            let n = t?.labelIconAssetId != null ? (0, j.YE)(e, t?.labelIconAssetId) : null,
                [a, r] = (0, p.rh)(n, "#000000"),
                i = l.useMemo(() => {
                    let e = s()(a).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [a]);
            return null != n && "#000000" !== a ? i : void 0;
        })(i, W);
    (0, C.pE)(),
        (0, _.Ay)(() => {
            I.default.track(O.HAw.OPEN_MODAL, { location_stack: S, type: L.Nh, sku_id: r, application_id: i }),
                (0, E.Xw)();
        });
    let J = l.useCallback(
        (e) => {
            I.default.track(O.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                slayer_storefront_session_id: k?.sessionId,
                sku_id: r,
                guild_id: k?.guildId,
                cta_type: e,
                location_stack: S,
            });
        },
        [k, r, S],
    );
    l.useEffect(() => {
        null == u || null == r || A.A.isFetchingForSKU(r) || (0, E.qf)(u, r);
    }, [u, r]);
    let Q = l.useCallback(() => {
            null != q &&
                (J(w.Jq.FORWARD_BUTTON),
                (0, P.d)({
                    sku: q,
                    guildId: u,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: S,
                    analyticsContext: k,
                }));
        }, [q, u, J, S, k]),
        K = l.useCallback(() => {
            J(w.Jq.WISHLIST_BUTTON);
        }, [J]),
        Z = l.useCallback(() => {
            X(!Y), J(w.Jq.MUTE_BUTTON);
        }, [Y, J]);
    if (null == q?.tenantMetadata?.socialLayer || R?.storefront == null) return U ? (0, a.jsx)(c.y$y, {}) : null;
    let ee =
            null != R.storefront.logoAssetId
                ? (0, j.YE)(R.storefront.applicationId, R.storefront.logoAssetId, 75)
                : null,
        et =
            null != R.storefront.lightThemeLogoAssetId
                ? (0, j.YE)(R.storefront.applicationId, R.storefront.lightThemeLogoAssetId, 75)
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
                            (0, a.jsx)(H, { applicationId: i, selectedCarouselItem: W }),
                            (0, a.jsx)(F, {
                                sku: q,
                                guildId: u,
                                shouldShowShopLink: !h,
                                onClose: N,
                                trackPDPClick: J,
                                analyticsLocations: S,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: M.Cf,
                        children: [
                            (0, a.jsx)(G, {
                                sku: q,
                                applicationId: i,
                                storefront: R.storefront,
                                onSelectedCarouselItemChange: $,
                                isMuted: Y,
                                trackPDPClick: J,
                            }),
                            (0, a.jsxs)("div", {
                                className: M.V7,
                                children: [
                                    null != q &&
                                        (0, a.jsx)(g._, {
                                            skuId: q.id,
                                            productName: q.name,
                                            isCardHovered: !0,
                                            className: o()(M.jU, M.ij),
                                            nuxGraphic: (0, T.N)(q),
                                            onClick: K,
                                            variant: "overlay-secondary",
                                        }),
                                    (0, a.jsx)(V, {
                                        onClick: Q,
                                        ariaLabel: B.intl.string(B.t.Ej3B3Y),
                                        children: (0, a.jsx)(f.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(V, {
                                        onClick: Z,
                                        ariaLabel: Y ? B.intl.string(B.t.YqAjXy) : B.intl.string(B.t.w4m945),
                                        children: Y
                                            ? (0, a.jsx)(c._RO, { size: "refresh_sm", color: "currentColor" })
                                            : (0, a.jsx)(c.HKD, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(V, {
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
