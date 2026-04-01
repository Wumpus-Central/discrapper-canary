n.d(t, { default: () => W }), n(321073);
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
    C = n(961350),
    x = n(67480),
    A = n(328968),
    T = n(954571),
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
    D = n(985018),
    M = n(136242);
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
        p = (0, d.bG)([N.A], () => (null != m ? N.A.getNormalizedSKUEligibility(m) : void 0), [m]),
        b = (0, S.B)(),
        f = l.useCallback(() => {
            null != t &&
                null != n &&
                (u(w.Jq.BUY_BUTTON),
                (0, R.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [..._, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: n,
                    },
                ));
        }, [t, u, n, _]),
        g = l.useCallback(() => {
            null != n && (0, k.X)({ guildId: n });
        }, [n]),
        C = l.useCallback(() => {
            null != n && (u(w.Jq.VISIT_SHOP), (0, k.default)({ guildId: n }), o());
        }, [n, o, u]),
        x = l.useCallback(() => {
            null != t &&
                (u(w.Jq.GIFT_BUTTON),
                (0, R.a)(
                    t,
                    { isGift: !0, giftRecipient: i, giftingOrigin: r },
                    { analyticsLocations: [..._, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, u, i, r, _]);
    if (null == t) return null;
    let A = (0, I.p3)(t, P.lid.DEFAULT);
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
                    (0, a.jsx)(c.Heading, { variant: "heading-md/semibold", color: "text-strong", children: A }),
                    null != t.orbsReward &&
                        t.orbsReward > 0 &&
                        (0, a.jsx)(Y, {
                            timeRemaining: b ?? void 0,
                            text: D.intl.format(D.t.d3njXi, { orbCount: t.orbsReward }),
                        }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: M.NC,
                children: [
                    !p &&
                        (0, a.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: D.intl.string(D.t.IqlPbQ),
                        }),
                    p &&
                        (0, a.jsx)(c.Button, {
                            variant: "primary",
                            onClick: f,
                            text: D.intl.string(D.t.boqtTA),
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
                                      text: D.intl.string(D.t["2QW9nR"]),
                                      fullWidth: !0,
                                  })
                                : null,
                            (0, a.jsx)(c.Button, {
                                icon: c.okO,
                                variant: "secondary",
                                onClick: x,
                                text: D.intl.string(D.t.QAZA5f),
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function F(e) {
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
        })(t?.tenantMetadata?.socialLayer?.carouselItems ?? [], n, s);
        c(e), _(a);
    }, [t, s, n]),
    0 === u.length)
        ? null
        : (0, a.jsx)(U.A, { className: M.Dk, items: u, onItemChange: m, isMuted: r, onTrackClick: o });
}
function H(e) {
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
function G(e) {
    let { onClick: t, children: n, ariaLabel: l } = e;
    return (0, a.jsx)(c.DUT, { onClick: t, className: M.jU, "aria-label": l, role: "button", children: n });
}
function W(e) {
    let {
            transitionState: t,
            returnRef: n,
            skuId: s,
            applicationId: r,
            isStorefront: u,
            giftRecipient: h,
            giftingOrigin: S,
            analyticsLocations: k,
            analyticsContext: R,
            onClose: U,
        } = e,
        { analyticsLocations: W } = (0, p.Ay)(k ?? []),
        { guildId: Y } = (0, I.nG)(r),
        q = (0, d.bG)([C.default], () => C.default.getId());
    l.useEffect(() => {
        null != Y && null != s && (0, v.iR)(Y, s, "SocialLayerStorefrontProductDetailsModal");
    }, [Y, s]);
    let X = (0, j.A)({ guildId: Y }),
        V = (0, d.bG)([N.A], () => N.A.getSkuAssets()),
        $ = (0, d.bG)([A.A], () => A.A.isFetchingForSKU(s)),
        z = (0, c.Mwr)((0, m.Ay)()),
        [J, K] = l.useState(!0),
        Q = (0, d.bG)([x.A], () => x.A.get(s)),
        [Z, ee] = l.useState(null),
        et = (function (e, t) {
            let n = t?.labelIconAssetId != null ? (0, E.YE)(e, t?.labelIconAssetId) : null,
                [a, s] = (0, b.rh)(n, "#000000"),
                r = l.useMemo(() => {
                    let e = i()(a).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [a]);
            return null != n && "#000000" !== a ? r : void 0;
        })(r, Z);
    (0, g.pE)(),
        (0, _.Ay)(() => {
            T.default.track(P.HAw.OPEN_MODAL, { location_stack: W, type: L.Nh, sku_id: s, application_id: r }),
                (0, v.Xw)();
        });
    let en = l.useCallback(
        (e) => {
            T.default.track(P.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                slayer_storefront_session_id: R?.sessionId,
                sku_id: s,
                guild_id: R?.guildId,
                cta_type: e,
                location_stack: W,
            });
        },
        [R, s, W],
    );
    l.useEffect(() => {
        null == Y || null == s || A.A.isFetchingForSKU(s) || (0, v.qf)(Y, s);
    }, [Y, s]);
    let ea = l.useCallback(() => {
            null != Q &&
                null != Y &&
                (en(w.Jq.FORWARD_BUTTON),
                (0, y.d)({
                    sku: Q,
                    guildId: Y,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: W,
                    analyticsContext: R,
                }));
        }, [Q, Y, en, W, R]),
        el = l.useCallback(() => {
            en(w.Jq.WISHLIST_BUTTON);
        }, [en]),
        es = l.useCallback(() => {
            K(!J), en(w.Jq.MUTE_BUTTON);
        }, [J, en]);
    if (null == Q?.tenantMetadata?.socialLayer) return $ ? (0, a.jsx)(c.y$y, {}) : null;
    let ei = X?.storefront,
        er = ei?.logoAssetId != null ? (0, E.YE)(ei.applicationId, ei.logoAssetId, 75) : null,
        eo = ei?.lightThemeLogoAssetId != null ? (0, E.YE)(ei.applicationId, ei.lightThemeLogoAssetId, 75) : null,
        ed = null;
    return (
        (ed = z ? (er ?? eo) : (eo ?? er)),
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
                        style: { background: et },
                        children: [
                            (0, a.jsx)("div", {
                                className: M.r$,
                                children: null != ed ? (0, a.jsx)("img", { className: M.wm, src: ed, alt: "" }) : null,
                            }),
                            (0, a.jsx)(H, { applicationId: r, selectedCarouselItem: Z }),
                            (0, a.jsx)(B, {
                                sku: Q,
                                guildId: Y,
                                shouldShowShopLink: !u,
                                giftRecipient: h?.id !== q ? h : void 0,
                                giftingOrigin: h?.id !== q ? S : void 0,
                                onClose: U,
                                trackPDPClick: en,
                                analyticsLocations: W,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: M.Cf,
                        children: [
                            (0, a.jsx)(F, {
                                sku: Q,
                                applicationId: r,
                                assets: V,
                                onSelectedCarouselItemChange: ee,
                                isMuted: J,
                                trackPDPClick: en,
                            }),
                            (0, a.jsxs)("div", {
                                className: M.V7,
                                children: [
                                    null != Q &&
                                        (0, a.jsx)(O._, {
                                            sku: Q,
                                            isCardHovered: !0,
                                            className: o()(M.jU, M.ij),
                                            trackButtonClick: el,
                                            variant: "overlay-secondary",
                                            location: "social_layer_storefront_product_details_modal",
                                        }),
                                    (0, a.jsx)(G, {
                                        onClick: ea,
                                        ariaLabel: D.intl.string(D.t.Ej3B3Y),
                                        children: (0, a.jsx)(f.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(G, {
                                        onClick: es,
                                        ariaLabel: J ? D.intl.string(D.t.YqAjXy) : D.intl.string(D.t.w4m945),
                                        children: J
                                            ? (0, a.jsx)(c._RO, { size: "refresh_sm", color: "currentColor" })
                                            : (0, a.jsx)(c.HKD, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(G, {
                                        onClick: U,
                                        ariaLabel: D.intl.string(D.t.cpT0Cq),
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
function Y(e) {
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
                    children: [D.intl.string(D.t.yYEZGi), null != t && ` (${t})`],
                }),
                (0, a.jsx)("div", {
                    className: M.fb,
                    children: (0, a.jsx)(c.Text, { variant: "text-xs/medium", color: "currentColor", children: n }),
                }),
            ],
        }),
    });
}
