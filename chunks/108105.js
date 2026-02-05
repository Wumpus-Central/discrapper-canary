n.d(t, { default: () => G }), n(321073);
var a = n(627968),
    l = n(64700),
    s = n(310784),
    r = n.n(s),
    i = n(503698),
    o = n.n(i),
    d = n(311907),
    c = n(397927),
    _ = n(964486),
    u = n(736653),
    m = n(793574),
    h = n(688810),
    p = n(654107),
    b = n(139146),
    g = n(427209),
    f = n(594832),
    C = n(67480),
    A = n(328968),
    x = n(954571),
    T = n(580630),
    E = n(371794),
    I = n(871123),
    N = n(733391),
    S = n(832163),
    v = n(44724),
    k = n(486318),
    j = n(345938),
    y = n(533406),
    R = n(953590),
    U = n(995393),
    O = n(188275),
    P = n(652215),
    L = n(818348),
    w = n(985018),
    D = n(88465);
function M(e) {
    let { sku: t, guildId: n, shouldShowShopLink: s, onClose: r, trackPDPClick: i } = e,
        o = t?.id,
        _ = (0, d.bG)([S.A], () => (null != o ? S.A.getNormalizedSKUEligibility(o) : void 0), [o]),
        u = l.useCallback(() => {
            null != t &&
                (i(U.Jq.BUY_BUTTON),
                (0, y.a)(
                    t,
                    { isGift: !1 },
                    { analyticsLocations: [m.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], guildId: n },
                ));
        }, [t, i, n]),
        h = l.useCallback(() => {
            (0, v.X)({ guildId: n });
        }, [n]),
        p = l.useCallback(() => {
            i(U.Jq.VISIT_SHOP), (0, v.default)({ guildId: n }), r();
        }, [n, r, i]),
        b = l.useCallback(() => {
            null != t &&
                (i(U.Jq.GIFT_BUTTON),
                (0, y.a)(
                    t,
                    { isGift: !0 },
                    { analyticsLocations: [m.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, i]);
    if (null == t) return null;
    let g = (0, T.$g)(t.price?.amount ?? 0, t.price?.currency ?? L.Yr.USD);
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
            (0, a.jsx)(c.Heading, { variant: "heading-md/semibold", color: "text-strong", children: g }),
            (0, a.jsxs)("div", {
                className: D.NC,
                children: [
                    (0, a.jsx)(c.Button, {
                        variant: "primary",
                        onClick: u,
                        text: _ ? w.intl.string(w.t.boqtTA) : w.intl.string(w.t.cg0M2H),
                        fullWidth: !0,
                        disabled: !_,
                    }),
                    (0, a.jsxs)(c.ButtonGroup, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            s
                                ? (0, a.jsx)(c.Button, {
                                      icon: c.U1X,
                                      variant: "secondary",
                                      onMouseDown: h,
                                      onClick: p,
                                      text: w.intl.string(w.t["2QW9nR"]),
                                      fullWidth: !0,
                                  })
                                : null,
                            (0, a.jsx)(c.Button, {
                                icon: c.okO,
                                variant: "secondary",
                                onClick: b,
                                text: w.intl.string(w.t.QAZA5f),
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function B(e) {
    let { sku: t, applicationId: n, storefront: s, onSelectedCarouselItemChange: r, isMuted: i, trackPDPClick: o } = e,
        [d, c] = l.useState([]),
        [_, u] = l.useState([]),
        m = l.useCallback(
            (e) => {
                let t = _.findIndex((t) => t === e);
                r?.(d[t] ?? null);
            },
            [r, d, _],
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
                              src: (0, E.YE)(t, e, R.B, "mp4"),
                              videoThumbnailSrc: (0, E.YE)(t, e, R.B, "webp"),
                              thumbnailSrc:
                                  null != s.thumbnailAssetId ? (0, E.YE)(t, s.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != s.backgroundAssetId ? (0, E.YE)(t, s.backgroundAssetId, R.B, I.pV) : void 0,
                          })
                        : l.push({
                              type: "image",
                              src: (0, E.YE)(t, e, R.B, "webp"),
                              thumbnailSrc:
                                  null != s.thumbnailAssetId ? (0, E.YE)(t, s.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != s.backgroundAssetId ? (0, E.YE)(t, s.backgroundAssetId, R.B, I.pV) : void 0,
                          }));
            }
            return [a, l];
        })(t?.tenantMetadata?.socialLayer?.carouselItems ?? [], n, s.assets);
        c(e), u(a);
    }, [t, s.assets, n]),
    0 === _.length)
        ? null
        : (0, a.jsx)(R.A, { className: D.Dk, items: _, onItemChange: m, isMuted: i, onTrackClick: o });
}
function F(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let l = null != t.labelIconAssetId ? (0, E.YE)(n, t.labelIconAssetId) : null;
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
            guildId: m,
            isStorefront: T,
            analyticsLocations: I,
            analyticsContext: v,
            onClose: y,
        } = e,
        { analyticsLocations: R } = (0, h.Ay)(I ?? []),
        L = (0, d.bG)([S.A], () => S.A.getStorefrontData(m), [m]),
        G = (0, d.bG)([A.A], () => A.A.isFetchingForSKU(s)),
        W = (0, c.Mwr)((0, u.Ay)()),
        [Y, q] = l.useState(!0),
        V = (0, d.bG)([C.A], () => C.A.get(s)),
        [X, $] = l.useState(null),
        z = (function (e, t) {
            let n = t?.labelIconAssetId != null ? (0, E.YE)(e, t?.labelIconAssetId) : null,
                [a, s] = (0, p.rh)(n, "#000000"),
                i = l.useMemo(() => {
                    let e = r()(a).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [a]);
            return null != n && "#000000" !== a ? i : void 0;
        })(i, X);
    (0, f.pE)(),
        (0, _.Ay)(() => {
            x.default.track(P.HAw.OPEN_MODAL, { location_stack: R, type: O.Nh, sku_id: s, application_id: i });
        });
    let J = l.useCallback(
        (e) => {
            x.default.track(P.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                slayer_storefront_session_id: v?.sessionId,
                sku_id: s,
                guild_id: v?.guildId,
                cta_type: e,
                location_stack: R,
            });
        },
        [v, s, R],
    );
    l.useEffect(() => {
        null == m || null == s || A.A.isFetchingForSKU(s) || (0, N.qf)(m, s);
    }, [m, s]);
    let K = l.useCallback(() => {
            null != V &&
                (J(U.Jq.FORWARD_BUTTON),
                (0, j.d)({
                    sku: V,
                    guildId: m,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: R,
                    analyticsContext: v,
                }));
        }, [V, m, J, R, v]),
        Q = l.useCallback(() => {
            J(U.Jq.WISHLIST_BUTTON);
        }, [J]),
        Z = l.useCallback(() => {
            q(!Y), J(U.Jq.MUTE_BUTTON);
        }, [Y, J]);
    if (null == V?.tenantMetadata?.socialLayer || L?.storefront == null) return G ? (0, a.jsx)(c.y$y, {}) : null;
    let ee =
            null != L.storefront.logoAssetId
                ? (0, E.YE)(L.storefront.applicationId, L.storefront.logoAssetId, 75)
                : null,
        et =
            null != L.storefront.lightThemeLogoAssetId
                ? (0, E.YE)(L.storefront.applicationId, L.storefront.lightThemeLogoAssetId, 75)
                : null,
        en = null;
    return (
        (en = W ? (ee ?? et) : (et ?? ee)),
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
                        style: { background: z },
                        children: [
                            (0, a.jsx)("div", {
                                className: D.r$,
                                children: null != en ? (0, a.jsx)("img", { className: D.wm, src: en, alt: "" }) : null,
                            }),
                            (0, a.jsx)(F, { applicationId: i, selectedCarouselItem: X }),
                            (0, a.jsx)(M, { sku: V, guildId: m, shouldShowShopLink: !T, onClose: y, trackPDPClick: J }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: D.Cf,
                        children: [
                            (0, a.jsx)(B, {
                                sku: V,
                                applicationId: i,
                                storefront: L.storefront,
                                onSelectedCarouselItemChange: $,
                                isMuted: Y,
                                trackPDPClick: J,
                            }),
                            (0, a.jsxs)("div", {
                                className: D.V7,
                                children: [
                                    null != V &&
                                        (0, a.jsx)(b._, {
                                            skuId: V.id,
                                            isCardHovered: !0,
                                            className: o()(D.jU, D.ij),
                                            nuxGraphic: (0, k.N)(V),
                                            onClick: Q,
                                        }),
                                    (0, a.jsx)(H, {
                                        onClick: K,
                                        ariaLabel: w.intl.string(w.t.Ej3B3Y),
                                        children: (0, a.jsx)(g.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(H, {
                                        onClick: Z,
                                        ariaLabel: Y ? w.intl.string(w.t.YqAjXy) : w.intl.string(w.t.w4m945),
                                        children: Y
                                            ? (0, a.jsx)(c._RO, { size: "refresh_sm", color: "currentColor" })
                                            : (0, a.jsx)(c.HKD, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(H, {
                                        onClick: y,
                                        ariaLabel: w.intl.string(w.t.cpT0Cq),
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
