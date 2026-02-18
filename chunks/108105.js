n.d(t, { default: () => Y }), n(321073);
var a = n(627968),
    l = n(64700),
    s = n(310784),
    r = n.n(s),
    i = n(503698),
    o = n.n(i),
    d = n(311907),
    c = n(397927),
    u = n(964486),
    _ = n(736653),
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
    v = n(832163),
    S = n(476438),
    j = n(44724),
    k = n(486318),
    y = n(345938),
    R = n(533406),
    U = n(953590),
    O = n(204890),
    L = n(995393),
    P = n(188275),
    w = n(652215),
    D = n(818348),
    M = n(985018),
    B = n(88465);
function F(e) {
    let { sku: t, guildId: n, shouldShowShopLink: s, onClose: r, trackPDPClick: i, analyticsLocations: o } = e,
        u = t?.id,
        _ = (0, d.bG)([v.A], () => (null != u ? v.A.getNormalizedSKUEligibility(u) : void 0), [u]),
        h = (0, S.A)(),
        p = l.useCallback(() => {
            null != t &&
                (i(L.Jq.BUY_BUTTON),
                (0, R.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...o, m.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: n,
                    },
                ));
        }, [t, i, n, o]),
        b = l.useCallback(() => {
            (0, j.X)({ guildId: n });
        }, [n]),
        g = l.useCallback(() => {
            i(L.Jq.VISIT_SHOP), (0, j.default)({ guildId: n }), r();
        }, [n, r, i]),
        f = l.useCallback(() => {
            null != t &&
                (i(L.Jq.GIFT_BUTTON),
                (0, R.a)(
                    t,
                    { isGift: !0 },
                    { analyticsLocations: [...o, m.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, i, o]);
    if (null == t) return null;
    let C = (0, T.$g)(t.price?.amount ?? 0, t.price?.currency ?? D.Yr.USD);
    return (0, a.jsxs)("div", {
        className: B.wt,
        children: [
            (0, a.jsxs)("div", {
                className: B.AX,
                children: [
                    (0, a.jsx)(c.Heading, { variant: "heading-xl/bold", color: "text-strong", children: t.name }),
                    (0, a.jsx)(c.Text, { variant: "text-sm/medium", color: "text-subtle", children: t.description }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: B.p6,
                children: [
                    (0, a.jsx)(c.Heading, { variant: "heading-md/semibold", color: "text-strong", children: C }),
                    null != t.orbsReward &&
                        t.orbsReward > 0 &&
                        (0, a.jsx)(O.A, {
                            variant: "standard",
                            timeRemaining: h ?? void 0,
                            Icon: c.Cp8,
                            text: M.intl.format(M.t.d3njXi, { orbCount: t.orbsReward }),
                        }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: B.NC,
                children: [
                    (0, a.jsx)(c.Button, {
                        variant: "primary",
                        onClick: p,
                        text: _ ? M.intl.string(M.t.boqtTA) : M.intl.string(M.t.cg0M2H),
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
                                      onMouseDown: b,
                                      onClick: g,
                                      text: M.intl.string(M.t["2QW9nR"]),
                                      fullWidth: !0,
                                  })
                                : null,
                            (0, a.jsx)(c.Button, {
                                icon: c.okO,
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
        : (0, a.jsx)(U.A, { className: B.Dk, items: u, onItemChange: m, isMuted: i, onTrackClick: o });
}
function G(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let l = null != t.labelIconAssetId ? (0, E.YE)(n, t.labelIconAssetId) : null;
    return (0, a.jsxs)("div", {
        className: B.HI,
        children: [
            null != l && (0, a.jsx)("img", { className: B.IX, src: l, alt: t.label }, l),
            (0, a.jsx)(c.Text, { variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function W(e) {
    let { onClick: t, children: n, ariaLabel: l } = e;
    return (0, a.jsx)(c.DUT, { onClick: t, className: B.jU, "aria-label": l, role: "button", children: n });
}
function Y(e) {
    let {
            transitionState: t,
            returnRef: n,
            skuId: s,
            applicationId: i,
            guildId: m,
            isStorefront: T,
            analyticsLocations: I,
            analyticsContext: S,
            onClose: j,
        } = e,
        { analyticsLocations: R } = (0, h.Ay)(I ?? []),
        U = (0, d.bG)([v.A], () => v.A.getStorefrontData(m), [m]),
        O = (0, d.bG)([A.A], () => A.A.isFetchingForSKU(s)),
        D = (0, c.Mwr)((0, _.Ay)()),
        [Y, X] = l.useState(!0),
        q = (0, d.bG)([C.A], () => C.A.get(s)),
        [V, $] = l.useState(null),
        z = (function (e, t) {
            let n = t?.labelIconAssetId != null ? (0, E.YE)(e, t?.labelIconAssetId) : null,
                [a, s] = (0, p.rh)(n, "#000000"),
                i = l.useMemo(() => {
                    let e = r()(a).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [a]);
            return null != n && "#000000" !== a ? i : void 0;
        })(i, V);
    (0, f.pE)(),
        (0, u.Ay)(() => {
            x.default.track(w.HAw.OPEN_MODAL, { location_stack: R, type: P.Nh, sku_id: s, application_id: i }),
                (0, N.Xw)();
        });
    let J = l.useCallback(
        (e) => {
            x.default.track(w.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
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
        null == m || null == s || A.A.isFetchingForSKU(s) || (0, N.qf)(m, s);
    }, [m, s]);
    let K = l.useCallback(() => {
            null != q &&
                (J(L.Jq.FORWARD_BUTTON),
                (0, y.d)({
                    sku: q,
                    guildId: m,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: R,
                    analyticsContext: S,
                }));
        }, [q, m, J, R, S]),
        Q = l.useCallback(() => {
            J(L.Jq.WISHLIST_BUTTON);
        }, [J]),
        Z = l.useCallback(() => {
            X(!Y), J(L.Jq.MUTE_BUTTON);
        }, [Y, J]);
    if (null == q?.tenantMetadata?.socialLayer || U?.storefront == null) return O ? (0, a.jsx)(c.y$y, {}) : null;
    let ee =
            null != U.storefront.logoAssetId
                ? (0, E.YE)(U.storefront.applicationId, U.storefront.logoAssetId, 75)
                : null,
        et =
            null != U.storefront.lightThemeLogoAssetId
                ? (0, E.YE)(U.storefront.applicationId, U.storefront.lightThemeLogoAssetId, 75)
                : null,
        en = null;
    return (
        (en = D ? (ee ?? et) : (et ?? ee)),
        (0, a.jsx)(c.EOs, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: B.CR,
            size: c.rIJ.DYNAMIC,
            returnRef: n,
            children: (0, a.jsxs)(c.$mQ, {
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
                            (0, a.jsx)(G, { applicationId: i, selectedCarouselItem: V }),
                            (0, a.jsx)(F, {
                                sku: q,
                                guildId: m,
                                shouldShowShopLink: !T,
                                onClose: j,
                                trackPDPClick: J,
                                analyticsLocations: R,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: B.Cf,
                        children: [
                            (0, a.jsx)(H, {
                                sku: q,
                                applicationId: i,
                                storefront: U.storefront,
                                onSelectedCarouselItemChange: $,
                                isMuted: Y,
                                trackPDPClick: J,
                            }),
                            (0, a.jsxs)("div", {
                                className: B.V7,
                                children: [
                                    null != q &&
                                        (0, a.jsx)(b._, {
                                            skuId: q.id,
                                            productName: q.name,
                                            isCardHovered: !0,
                                            className: o()(B.jU, B.ij),
                                            nuxGraphic: (0, k.N)(q),
                                            onClick: Q,
                                            variant: "overlay-secondary",
                                        }),
                                    (0, a.jsx)(W, {
                                        onClick: K,
                                        ariaLabel: M.intl.string(M.t.Ej3B3Y),
                                        children: (0, a.jsx)(g.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(W, {
                                        onClick: Z,
                                        ariaLabel: Y ? M.intl.string(M.t.YqAjXy) : M.intl.string(M.t.w4m945),
                                        children: Y
                                            ? (0, a.jsx)(c._RO, { size: "refresh_sm", color: "currentColor" })
                                            : (0, a.jsx)(c.HKD, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(W, {
                                        onClick: j,
                                        ariaLabel: M.intl.string(M.t.cpT0Cq),
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
