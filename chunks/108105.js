n.d(t, { default: () => q }), n(321073);
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
    x = n(961350),
    C = n(67480),
    A = n(328968),
    T = n(954571),
    v = n(371794),
    E = n(871123),
    I = n(733391),
    j = n(832163),
    N = n(207654),
    S = n(429635),
    k = n(476438),
    y = n(44724),
    R = n(345938),
    U = n(533406),
    O = n(971146),
    w = n(953590),
    L = n(743693),
    P = n(995393),
    D = n(188275),
    M = n(652215),
    B = n(985018),
    F = n(136242);
function H(e) {
    let {
            sku: t,
            application: n,
            guildId: s,
            shouldShowShopLink: i,
            giftRecipient: r,
            giftingOrigin: o,
            onClose: u,
            trackPDPClick: _,
            analyticsLocations: m,
        } = e,
        p = t?.id,
        b = (0, N.b)({ location: "product_details_modal" }),
        f = (0, d.bG)([j.A], () => (null != p ? j.A.getNormalizedSKUEligibility(p) : void 0), [p]),
        g = (0, k.B)(),
        x = l.useCallback(() => {
            null != t &&
                null != s &&
                (_(P.Jq.BUY_BUTTON),
                (0, U.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...m, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: s,
                    },
                ));
        }, [t, _, s, m]),
        C = l.useCallback(() => {
            null != s && (0, y.X)({ guildId: s });
        }, [s]),
        A = l.useCallback(() => {
            null != s && (_(P.Jq.VISIT_SHOP), (0, y.default)({ guildId: s }), u());
        }, [s, u, _]),
        T = l.useCallback(() => {
            null != t &&
                (_(P.Jq.GIFT_BUTTON),
                (0, U.a)(
                    t,
                    { isGift: !0, giftRecipient: r, giftingOrigin: o },
                    { analyticsLocations: [...m, h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, _, r, o, m]);
    if (null == t) return null;
    let v = (0, E.p3)(t, M.lid.DEFAULT);
    return (0, a.jsxs)("div", {
        className: F.wt,
        children: [
            (0, a.jsxs)("div", {
                className: F.AX,
                children: [
                    (0, a.jsx)(c.Heading, { variant: "heading-xl/bold", color: "text-strong", children: t.name }),
                    (0, a.jsx)(c.Text, { variant: "text-sm/medium", color: "text-subtle", children: t.description }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: F.sj,
                children: [
                    b && null != n && (0, a.jsx)(O.V, { application: n }),
                    (0, a.jsx)(c.Heading, { variant: "heading-md/semibold", color: "text-strong", children: v }),
                    null != t.orbsReward &&
                        t.orbsReward > 0 &&
                        (0, a.jsx)(V, {
                            timeRemaining: g ?? void 0,
                            text: B.intl.format(B.t.d3njXi, { orbCount: t.orbsReward }),
                        }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: F.NC,
                children: [
                    !f &&
                        (0, a.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: B.intl.string(B.t.IqlPbQ),
                        }),
                    f &&
                        (0, a.jsx)(c.Button, {
                            variant: "primary",
                            onClick: x,
                            text: B.intl.string(B.t.boqtTA),
                            fullWidth: !0,
                        }),
                    (0, a.jsxs)(c.ButtonGroup, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            i
                                ? (0, a.jsx)(c.Button, {
                                      icon: c.U1X,
                                      variant: "secondary",
                                      onMouseDown: C,
                                      onClick: A,
                                      text: B.intl.string(B.t["2QW9nR"]),
                                      fullWidth: !0,
                                  })
                                : null,
                            (0, a.jsx)(c.Button, {
                                icon: c.okO,
                                variant: "secondary",
                                onClick: T,
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
                              src: (0, v.YE)(t, e, w.B, "mp4"),
                              videoThumbnailSrc: (0, v.YE)(t, e, w.B, "webp"),
                              thumbnailSrc:
                                  null != s.thumbnailAssetId ? (0, v.YE)(t, s.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != s.backgroundAssetId ? (0, v.YE)(t, s.backgroundAssetId, w.B, E.pV) : void 0,
                          })
                        : l.push({
                              type: "image",
                              src: (0, v.YE)(t, e, w.B, "webp"),
                              thumbnailSrc:
                                  null != s.thumbnailAssetId ? (0, v.YE)(t, s.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != s.backgroundAssetId ? (0, v.YE)(t, s.backgroundAssetId, w.B, E.pV) : void 0,
                          }));
            }
            return [a, l];
        })(t?.tenantMetadata?.socialLayer?.carouselItems ?? [], n, s);
        c(e), _(a);
    }, [t, s, n]),
    0 === u.length)
        ? null
        : (0, a.jsx)(w.A, { className: F.Dk, items: u, onItemChange: m, isMuted: r, onTrackClick: o });
}
function W(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let l = null != t.labelIconAssetId ? (0, v.YE)(n, t.labelIconAssetId) : null;
    return (0, a.jsxs)("div", {
        className: F.HI,
        children: [
            null != l && (0, a.jsx)("img", { className: F.IX, src: l, alt: t.label }, l),
            (0, a.jsx)(c.Text, { variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function Y(e) {
    let { onClick: t, children: n, ariaLabel: l } = e;
    return (0, a.jsx)(c.DUT, { onClick: t, className: F.jU, "aria-label": l, role: "button", children: n });
}
function q(e) {
    let {
            transitionState: t,
            returnRef: n,
            skuId: s,
            applicationId: r,
            isStorefront: u,
            giftRecipient: h,
            giftingOrigin: N,
            analyticsLocations: k,
            analyticsContext: y,
            onClose: U,
        } = e,
        { analyticsLocations: O } = (0, p.Ay)(k ?? []),
        { guildId: w, application: q } = (0, E.nG)(r),
        V = (0, d.bG)([x.default], () => x.default.getId());
    l.useEffect(() => {
        null != w && null != s && (0, I.iR)(w, s, "SocialLayerStorefrontProductDetailsModal");
    }, [w, s]);
    let X = (0, S.A)({ guildId: w }),
        $ = (0, d.bG)([j.A], () => j.A.getSkuAssets()),
        z = (0, d.bG)([A.A], () => A.A.isFetchingForSKU(s)),
        J = (0, c.Mwr)((0, m.Ay)()),
        [K, Q] = l.useState(!0),
        Z = (0, d.bG)([C.A], () => C.A.get(s)),
        [ee, et] = l.useState(null),
        en = (function (e, t) {
            let n = t?.labelIconAssetId != null ? (0, v.YE)(e, t?.labelIconAssetId) : null,
                [a, s] = (0, b.rh)(n, "#000000"),
                r = l.useMemo(() => {
                    let e = i()(a).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [a]);
            return null != n && "#000000" !== a ? r : void 0;
        })(r, ee);
    (0, g.pE)(),
        (0, _.Ay)(() => {
            T.default.track(M.HAw.OPEN_MODAL, { location_stack: O, type: D.Nh, sku_id: s, application_id: r }),
                (0, I.Xw)();
        });
    let ea = l.useCallback(
        (e) => {
            T.default.track(M.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                slayer_storefront_session_id: y?.sessionId,
                sku_id: s,
                guild_id: y?.guildId,
                cta_type: e,
                location_stack: O,
            });
        },
        [y, s, O],
    );
    l.useEffect(() => {
        null == w || null == s || A.A.isFetchingForSKU(s) || (0, I.qf)(w, s);
    }, [w, s]);
    let el = l.useCallback(() => {
            null != Z &&
                null != w &&
                (ea(P.Jq.FORWARD_BUTTON),
                (0, R.d)({
                    sku: Z,
                    guildId: w,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: O,
                    analyticsContext: y,
                }));
        }, [Z, w, ea, O, y]),
        es = l.useCallback(() => {
            ea(P.Jq.WISHLIST_BUTTON);
        }, [ea]),
        ei = l.useCallback(() => {
            Q(!K), ea(P.Jq.MUTE_BUTTON);
        }, [K, ea]);
    if (null == Z?.tenantMetadata?.socialLayer) return z ? (0, a.jsx)(c.y$y, {}) : null;
    let er = X?.storefront,
        eo = er?.logoAssetId != null ? (0, v.YE)(er.applicationId, er.logoAssetId, 75) : null,
        ed = er?.lightThemeLogoAssetId != null ? (0, v.YE)(er.applicationId, er.lightThemeLogoAssetId, 75) : null,
        ec = null;
    return (
        (ec = J ? (eo ?? ed) : (ed ?? eo)),
        (0, a.jsx)(c.EOs, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: F.CR,
            size: c.rIJ.DYNAMIC,
            returnRef: n,
            children: (0, a.jsxs)(c.$mQ, {
                className: F.jE,
                children: [
                    (0, a.jsxs)("div", {
                        className: F.op,
                        style: { background: en },
                        children: [
                            (0, a.jsx)("div", {
                                className: F.r$,
                                children: null != ec ? (0, a.jsx)("img", { className: F.wm, src: ec, alt: "" }) : null,
                            }),
                            (0, a.jsx)(W, { applicationId: r, selectedCarouselItem: ee }),
                            (0, a.jsx)(H, {
                                sku: Z,
                                application: q,
                                guildId: w,
                                shouldShowShopLink: !u,
                                giftRecipient: h?.id !== V ? h : void 0,
                                giftingOrigin: h?.id !== V ? N : void 0,
                                onClose: U,
                                trackPDPClick: ea,
                                analyticsLocations: O,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: F.Cf,
                        children: [
                            (0, a.jsx)(G, {
                                sku: Z,
                                applicationId: r,
                                assets: $,
                                onSelectedCarouselItemChange: et,
                                isMuted: K,
                                trackPDPClick: ea,
                            }),
                            (0, a.jsxs)("div", {
                                className: F.V7,
                                children: [
                                    null != Z &&
                                        (0, a.jsx)(L._, {
                                            sku: Z,
                                            isCardHovered: !0,
                                            className: o()(F.jU, F.ij),
                                            trackButtonClick: es,
                                            variant: "overlay-secondary",
                                            location: "social_layer_storefront_product_details_modal",
                                        }),
                                    (0, a.jsx)(Y, {
                                        onClick: el,
                                        ariaLabel: B.intl.string(B.t.Ej3B3Y),
                                        children: (0, a.jsx)(f.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(Y, {
                                        onClick: ei,
                                        ariaLabel: K ? B.intl.string(B.t.YqAjXy) : B.intl.string(B.t.w4m945),
                                        children: K
                                            ? (0, a.jsx)(c._RO, { size: "refresh_sm", color: "currentColor" })
                                            : (0, a.jsx)(c.HKD, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(Y, {
                                        onClick: U,
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
function V(e) {
    let { timeRemaining: t, text: n } = e;
    return (0, a.jsx)(u.A, {
        className: F.qw,
        Icon: c.Cp8,
        children: (0, a.jsxs)("div", {
            className: F.Yu,
            children: [
                (0, a.jsxs)(c.Text, {
                    variant: "text-xs/bold",
                    color: "currentColor",
                    children: [B.intl.string(B.t.yYEZGi), null != t && ` (${t})`],
                }),
                (0, a.jsx)("div", {
                    className: F.fb,
                    children: (0, a.jsx)(c.Text, { variant: "text-xs/medium", color: "currentColor", children: n }),
                }),
            ],
        }),
    });
}
