"use strict";
n.d(t, { default: () => V }), n(321073);
var l = n(627968),
    a = n(64700),
    r = n(310784),
    s = n.n(r),
    i = n(503698),
    o = n.n(i),
    c = n(311907),
    d = n(397927),
    u = n(262427),
    _ = n(964486),
    m = n(736653),
    h = n(793574),
    b = n(688810),
    p = n(654107),
    g = n(139146),
    f = n(427209),
    x = n(594832),
    C = n(67480),
    A = n(328968),
    I = n(954571),
    v = n(580630),
    j = n(371794),
    k = n(871123),
    N = n(733391),
    E = n(832163),
    y = n(476438),
    S = n(44724),
    T = n(486318),
    P = n(345938),
    R = n(533406),
    w = n(953590),
    U = n(995393),
    L = n(188275),
    O = n(652215),
    D = n(818348),
    B = n(985018),
    M = n(88465);
function F(e) {
    let { sku: t, guildId: n, shouldShowShopLink: r, onClose: s, trackPDPClick: i, analyticsLocations: o } = e,
        u = t?.id,
        _ = (0, c.bG)([E.A], () => (null != u ? E.A.getNormalizedSKUEligibility(u) : void 0), [u]),
        m = (0, y.B)(),
        b = a.useCallback(() => {
            null != t &&
                (i(U.Jq.BUY_BUTTON),
                (0, R.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...o, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: n,
                    },
                ));
        }, [t, i, n, o]),
        p = a.useCallback(() => {
            (0, S.X)({ guildId: n });
        }, [n]),
        g = a.useCallback(() => {
            i(U.Jq.VISIT_SHOP), (0, S.default)({ guildId: n }), s();
        }, [n, s, i]),
        f = a.useCallback(() => {
            null != t &&
                (i(U.Jq.GIFT_BUTTON),
                (0, R.a)(
                    t,
                    { isGift: !0 },
                    { analyticsLocations: [...o, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, i, o]);
    if (null == t) return null;
    let x = (0, v.$g)(t.price?.amount ?? 0, t.price?.currency ?? D.Yr.USD);
    return (0, l.jsxs)("div", {
        className: M.wt,
        children: [
            (0, l.jsxs)("div", {
                className: M.AX,
                children: [
                    (0, l.jsx)(d.Heading, { variant: "heading-xl/bold", color: "text-strong", children: t.name }),
                    (0, l.jsx)(d.Text, { variant: "text-sm/medium", color: "text-subtle", children: t.description }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: M.p6,
                children: [
                    (0, l.jsx)(d.Heading, { variant: "heading-md/semibold", color: "text-strong", children: x }),
                    null != t.orbsReward &&
                        t.orbsReward > 0 &&
                        (0, l.jsx)(q, {
                            timeRemaining: m ?? void 0,
                            text: B.intl.format(B.t.d3njXi, { orbCount: t.orbsReward }),
                        }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: M.NC,
                children: [
                    !_ &&
                        (0, l.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: B.intl.string(B.t.IqlPbQ),
                        }),
                    _ &&
                        (0, l.jsx)(d.Button, {
                            variant: "primary",
                            onClick: b,
                            text: B.intl.string(B.t.boqtTA),
                            fullWidth: !0,
                        }),
                    (0, l.jsxs)(d.ButtonGroup, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            r
                                ? (0, l.jsx)(d.Button, {
                                      icon: d.U1X,
                                      variant: "secondary",
                                      onMouseDown: p,
                                      onClick: g,
                                      text: B.intl.string(B.t["2QW9nR"]),
                                      fullWidth: !0,
                                  })
                                : null,
                            (0, l.jsx)(d.Button, {
                                icon: d.okO,
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
function G(e) {
    let { sku: t, applicationId: n, storefront: r, onSelectedCarouselItemChange: s, isMuted: i, trackPDPClick: o } = e,
        [c, d] = a.useState([]),
        [u, _] = a.useState([]),
        m = a.useCallback(
            (e) => {
                let t = u.findIndex((t) => t === e);
                s?.(c[t] ?? null);
            },
            [s, c, u],
        );
    return (a.useEffect(() => {
        let [e, l] = (function (e, t, n) {
            let l = [],
                a = [];
            if (null == e || 0 === e.length) return [l, a];
            for (let r of e) {
                let e = null != r.assetId ? n[r.assetId] : null;
                null != e &&
                    (l.push(r),
                    e.mime_type.startsWith("video/")
                        ? a.push({
                              type: "video",
                              src: (0, j.YE)(t, e, w.B, "mp4"),
                              videoThumbnailSrc: (0, j.YE)(t, e, w.B, "webp"),
                              thumbnailSrc:
                                  null != r.thumbnailAssetId ? (0, j.YE)(t, r.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != r.backgroundAssetId ? (0, j.YE)(t, r.backgroundAssetId, w.B, k.pV) : void 0,
                          })
                        : a.push({
                              type: "image",
                              src: (0, j.YE)(t, e, w.B, "webp"),
                              thumbnailSrc:
                                  null != r.thumbnailAssetId ? (0, j.YE)(t, r.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != r.backgroundAssetId ? (0, j.YE)(t, r.backgroundAssetId, w.B, k.pV) : void 0,
                          }));
            }
            return [l, a];
        })(t?.tenantMetadata?.socialLayer?.carouselItems ?? [], n, r.assets);
        d(e), _(l);
    }, [t, r.assets, n]),
    0 === u.length)
        ? null
        : (0, l.jsx)(w.A, { className: M.Dk, items: u, onItemChange: m, isMuted: i, onTrackClick: o });
}
function H(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let a = null != t.labelIconAssetId ? (0, j.YE)(n, t.labelIconAssetId) : null;
    return (0, l.jsxs)("div", {
        className: M.HI,
        children: [
            null != a && (0, l.jsx)("img", { className: M.IX, src: a, alt: t.label }, a),
            (0, l.jsx)(d.Text, { variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function Y(e) {
    let { onClick: t, children: n, ariaLabel: a } = e;
    return (0, l.jsx)(d.DUT, { onClick: t, className: M.jU, "aria-label": a, role: "button", children: n });
}
function V(e) {
    let {
            transitionState: t,
            returnRef: n,
            skuId: r,
            applicationId: i,
            guildId: u,
            isStorefront: h,
            analyticsLocations: v,
            analyticsContext: k,
            onClose: y,
        } = e,
        { analyticsLocations: S } = (0, b.Ay)(v ?? []),
        R = (0, c.bG)([E.A], () => E.A.getStorefrontData(u), [u]),
        w = (0, c.bG)([A.A], () => A.A.isFetchingForSKU(r)),
        D = (0, d.Mwr)((0, m.Ay)()),
        [V, q] = a.useState(!0),
        X = (0, c.bG)([C.A], () => C.A.get(r)),
        [W, $] = a.useState(null),
        z = (function (e, t) {
            let n = t?.labelIconAssetId != null ? (0, j.YE)(e, t?.labelIconAssetId) : null,
                [l, r] = (0, p.rh)(n, "#000000"),
                i = a.useMemo(() => {
                    let e = s()(l).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [l]);
            return null != n && "#000000" !== l ? i : void 0;
        })(i, W);
    (0, x.pE)(),
        (0, _.Ay)(() => {
            I.default.track(O.HAw.OPEN_MODAL, { location_stack: S, type: L.Nh, sku_id: r, application_id: i }),
                (0, N.Xw)();
        });
    let J = a.useCallback(
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
    a.useEffect(() => {
        null == u || null == r || A.A.isFetchingForSKU(r) || (0, N.qf)(u, r);
    }, [u, r]);
    let Q = a.useCallback(() => {
            null != X &&
                (J(U.Jq.FORWARD_BUTTON),
                (0, P.d)({
                    sku: X,
                    guildId: u,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: S,
                    analyticsContext: k,
                }));
        }, [X, u, J, S, k]),
        K = a.useCallback(() => {
            J(U.Jq.WISHLIST_BUTTON);
        }, [J]),
        Z = a.useCallback(() => {
            q(!V), J(U.Jq.MUTE_BUTTON);
        }, [V, J]);
    if (null == X?.tenantMetadata?.socialLayer || R?.storefront == null) return w ? (0, l.jsx)(d.y$y, {}) : null;
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
        (0, l.jsx)(d.EOs, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: M.CR,
            size: d.rIJ.DYNAMIC,
            returnRef: n,
            children: (0, l.jsxs)(d.$mQ, {
                className: M.jE,
                children: [
                    (0, l.jsxs)("div", {
                        className: M.op,
                        style: { background: z },
                        children: [
                            (0, l.jsx)("div", {
                                className: M.r$,
                                children: null != en ? (0, l.jsx)("img", { className: M.wm, src: en, alt: "" }) : null,
                            }),
                            (0, l.jsx)(H, { applicationId: i, selectedCarouselItem: W }),
                            (0, l.jsx)(F, {
                                sku: X,
                                guildId: u,
                                shouldShowShopLink: !h,
                                onClose: y,
                                trackPDPClick: J,
                                analyticsLocations: S,
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: M.Cf,
                        children: [
                            (0, l.jsx)(G, {
                                sku: X,
                                applicationId: i,
                                storefront: R.storefront,
                                onSelectedCarouselItemChange: $,
                                isMuted: V,
                                trackPDPClick: J,
                            }),
                            (0, l.jsxs)("div", {
                                className: M.V7,
                                children: [
                                    null != X &&
                                        (0, l.jsx)(g._, {
                                            skuId: X.id,
                                            productName: X.name,
                                            isCardHovered: !0,
                                            className: o()(M.jU, M.ij),
                                            nuxGraphic: (0, T.N)(X),
                                            onClick: K,
                                            variant: "overlay-secondary",
                                        }),
                                    (0, l.jsx)(Y, {
                                        onClick: Q,
                                        ariaLabel: B.intl.string(B.t.Ej3B3Y),
                                        children: (0, l.jsx)(f.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, l.jsx)(Y, {
                                        onClick: Z,
                                        ariaLabel: V ? B.intl.string(B.t.YqAjXy) : B.intl.string(B.t.w4m945),
                                        children: V
                                            ? (0, l.jsx)(d._RO, { size: "refresh_sm", color: "currentColor" })
                                            : (0, l.jsx)(d.HKD, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, l.jsx)(Y, {
                                        onClick: y,
                                        ariaLabel: B.intl.string(B.t.cpT0Cq),
                                        children: (0, l.jsx)(d.d$L, { size: "refresh_sm", color: "currentColor" }),
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
    return (0, l.jsx)(u.A, {
        className: M.qw,
        Icon: d.Cp8,
        children: (0, l.jsxs)("div", {
            className: M.Yu,
            children: [
                (0, l.jsxs)(d.Text, {
                    variant: "text-sm/bold",
                    color: "currentColor",
                    children: [B.intl.string(B.t.yYEZGi), null != t && ` (${t})`],
                }),
                (0, l.jsx)("div", {
                    className: M.fb,
                    children: (0, l.jsx)(d.Text, { variant: "text-sm/medium", color: "currentColor", children: n }),
                }),
            ],
        }),
    });
}
