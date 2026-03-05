"use strict";
n.d(t, { default: () => q }), n(321073);
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
    y = n(429635),
    S = n(476438),
    T = n(44724),
    P = n(486318),
    R = n(345938),
    w = n(533406),
    U = n(953590),
    L = n(995393),
    O = n(188275),
    D = n(652215),
    B = n(818348),
    M = n(985018),
    F = n(88465);
function G(e) {
    let { sku: t, guildId: n, shouldShowShopLink: r, onClose: s, trackPDPClick: i, analyticsLocations: o } = e,
        u = t?.id,
        _ = (0, c.bG)([E.A], () => (null != u ? E.A.getNormalizedSKUEligibility(u) : void 0), [u]),
        m = (0, S.B)(),
        b = a.useCallback(() => {
            null != t &&
                (i(L.Jq.BUY_BUTTON),
                (0, w.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...o, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: n,
                    },
                ));
        }, [t, i, n, o]),
        p = a.useCallback(() => {
            (0, T.X)({ guildId: n });
        }, [n]),
        g = a.useCallback(() => {
            i(L.Jq.VISIT_SHOP), (0, T.default)({ guildId: n }), s();
        }, [n, s, i]),
        f = a.useCallback(() => {
            null != t &&
                (i(L.Jq.GIFT_BUTTON),
                (0, w.a)(
                    t,
                    { isGift: !0 },
                    { analyticsLocations: [...o, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, i, o]);
    if (null == t) return null;
    let x = (0, v.$g)(t.price?.amount ?? 0, t.price?.currency ?? B.Yr.USD);
    return (0, l.jsxs)("div", {
        className: F.wt,
        children: [
            (0, l.jsxs)("div", {
                className: F.AX,
                children: [
                    (0, l.jsx)(d.Heading, { variant: "heading-xl/bold", color: "text-strong", children: t.name }),
                    (0, l.jsx)(d.Text, { variant: "text-sm/medium", color: "text-subtle", children: t.description }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: F.p6,
                children: [
                    (0, l.jsx)(d.Heading, { variant: "heading-md/semibold", color: "text-strong", children: x }),
                    null != t.orbsReward &&
                        t.orbsReward > 0 &&
                        (0, l.jsx)(X, {
                            timeRemaining: m ?? void 0,
                            text: M.intl.format(M.t.d3njXi, { orbCount: t.orbsReward }),
                        }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: F.NC,
                children: [
                    !_ &&
                        (0, l.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: M.intl.string(M.t.IqlPbQ),
                        }),
                    _ &&
                        (0, l.jsx)(d.Button, {
                            variant: "primary",
                            onClick: b,
                            text: M.intl.string(M.t.boqtTA),
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
                                      text: M.intl.string(M.t["2QW9nR"]),
                                      fullWidth: !0,
                                  })
                                : null,
                            (0, l.jsx)(d.Button, {
                                icon: d.okO,
                                variant: "secondary",
                                onClick: f,
                                text: M.intl.string(M.t.QAZA5f),
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
                              src: (0, j.YE)(t, e, U.B, "mp4"),
                              videoThumbnailSrc: (0, j.YE)(t, e, U.B, "webp"),
                              thumbnailSrc:
                                  null != r.thumbnailAssetId ? (0, j.YE)(t, r.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != r.backgroundAssetId ? (0, j.YE)(t, r.backgroundAssetId, U.B, k.pV) : void 0,
                          })
                        : a.push({
                              type: "image",
                              src: (0, j.YE)(t, e, U.B, "webp"),
                              thumbnailSrc:
                                  null != r.thumbnailAssetId ? (0, j.YE)(t, r.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != r.backgroundAssetId ? (0, j.YE)(t, r.backgroundAssetId, U.B, k.pV) : void 0,
                          }));
            }
            return [l, a];
        })(t?.tenantMetadata?.socialLayer?.carouselItems ?? [], n, r.assets);
        d(e), _(l);
    }, [t, r.assets, n]),
    0 === u.length)
        ? null
        : (0, l.jsx)(U.A, { className: F.Dk, items: u, onItemChange: m, isMuted: i, onTrackClick: o });
}
function Y(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let a = null != t.labelIconAssetId ? (0, j.YE)(n, t.labelIconAssetId) : null;
    return (0, l.jsxs)("div", {
        className: F.HI,
        children: [
            null != a && (0, l.jsx)("img", { className: F.IX, src: a, alt: t.label }, a),
            (0, l.jsx)(d.Text, { variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function V(e) {
    let { onClick: t, children: n, ariaLabel: a } = e;
    return (0, l.jsx)(d.DUT, { onClick: t, className: F.jU, "aria-label": a, role: "button", children: n });
}
function q(e) {
    let {
            transitionState: t,
            returnRef: n,
            skuId: r,
            applicationId: i,
            guildId: u,
            isStorefront: h,
            analyticsLocations: v,
            analyticsContext: k,
            onClose: E,
        } = e,
        { analyticsLocations: S } = (0, b.Ay)(v ?? []),
        T = (0, y.A)({ guildId: u, location: "Social Layer Storefront PDP" }),
        w = (0, c.bG)([A.A], () => A.A.isFetchingForSKU(r)),
        U = (0, d.Mwr)((0, m.Ay)()),
        [B, q] = a.useState(!0),
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
            I.default.track(D.HAw.OPEN_MODAL, { location_stack: S, type: O.Nh, sku_id: r, application_id: i }),
                (0, N.Xw)();
        });
    let J = a.useCallback(
        (e) => {
            I.default.track(D.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
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
                (J(L.Jq.FORWARD_BUTTON),
                (0, R.d)({
                    sku: X,
                    guildId: u,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: S,
                    analyticsContext: k,
                }));
        }, [X, u, J, S, k]),
        K = a.useCallback(() => {
            J(L.Jq.WISHLIST_BUTTON);
        }, [J]),
        Z = a.useCallback(() => {
            q(!B), J(L.Jq.MUTE_BUTTON);
        }, [B, J]);
    if (null == X?.tenantMetadata?.socialLayer || T?.storefront == null) return w ? (0, l.jsx)(d.y$y, {}) : null;
    let ee =
            null != T.storefront.logoAssetId
                ? (0, j.YE)(T.storefront.applicationId, T.storefront.logoAssetId, 75)
                : null,
        et =
            null != T.storefront.lightThemeLogoAssetId
                ? (0, j.YE)(T.storefront.applicationId, T.storefront.lightThemeLogoAssetId, 75)
                : null,
        en = null;
    return (
        (en = U ? (ee ?? et) : (et ?? ee)),
        (0, l.jsx)(d.EOs, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: F.CR,
            size: d.rIJ.DYNAMIC,
            returnRef: n,
            children: (0, l.jsxs)(d.$mQ, {
                className: F.jE,
                children: [
                    (0, l.jsxs)("div", {
                        className: F.op,
                        style: { background: z },
                        children: [
                            (0, l.jsx)("div", {
                                className: F.r$,
                                children: null != en ? (0, l.jsx)("img", { className: F.wm, src: en, alt: "" }) : null,
                            }),
                            (0, l.jsx)(Y, { applicationId: i, selectedCarouselItem: W }),
                            (0, l.jsx)(G, {
                                sku: X,
                                guildId: u,
                                shouldShowShopLink: !h,
                                onClose: E,
                                trackPDPClick: J,
                                analyticsLocations: S,
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: F.Cf,
                        children: [
                            (0, l.jsx)(H, {
                                sku: X,
                                applicationId: i,
                                storefront: T.storefront,
                                onSelectedCarouselItemChange: $,
                                isMuted: B,
                                trackPDPClick: J,
                            }),
                            (0, l.jsxs)("div", {
                                className: F.V7,
                                children: [
                                    null != X &&
                                        (0, l.jsx)(g._, {
                                            skuId: X.id,
                                            productName: X.name,
                                            isCardHovered: !0,
                                            className: o()(F.jU, F.ij),
                                            nuxGraphic: (0, P.N)(X),
                                            onClick: K,
                                            variant: "overlay-secondary",
                                        }),
                                    (0, l.jsx)(V, {
                                        onClick: Q,
                                        ariaLabel: M.intl.string(M.t.Ej3B3Y),
                                        children: (0, l.jsx)(f.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, l.jsx)(V, {
                                        onClick: Z,
                                        ariaLabel: B ? M.intl.string(M.t.YqAjXy) : M.intl.string(M.t.w4m945),
                                        children: B
                                            ? (0, l.jsx)(d._RO, { size: "refresh_sm", color: "currentColor" })
                                            : (0, l.jsx)(d.HKD, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, l.jsx)(V, {
                                        onClick: E,
                                        ariaLabel: M.intl.string(M.t.cpT0Cq),
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
function X(e) {
    let { timeRemaining: t, text: n } = e;
    return (0, l.jsx)(u.A, {
        className: F.qw,
        Icon: d.Cp8,
        children: (0, l.jsxs)("div", {
            className: F.Yu,
            children: [
                (0, l.jsxs)(d.Text, {
                    variant: "text-xs/bold",
                    color: "currentColor",
                    children: [M.intl.string(M.t.yYEZGi), null != t && ` (${t})`],
                }),
                (0, l.jsx)("div", {
                    className: F.fb,
                    children: (0, l.jsx)(d.Text, { variant: "text-xs/medium", color: "currentColor", children: n }),
                }),
            ],
        }),
    });
}
