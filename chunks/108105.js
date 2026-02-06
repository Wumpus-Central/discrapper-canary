n.d(t, { default: () => q }), n(321073);
var a = n(627968),
    l = n(64700),
    s = n(310784),
    r = n.n(s),
    i = n(503698),
    o = n.n(i),
    d = n(989349),
    c = n.n(d),
    u = n(311907),
    _ = n(397927),
    m = n(964486),
    h = n(736653),
    p = n(793574),
    b = n(688810),
    g = n(654107),
    f = n(139146),
    C = n(427209),
    x = n(594832),
    A = n(67480),
    T = n(328968),
    E = n(954571),
    I = n(580630),
    N = n(371794),
    S = n(871123),
    j = n(733391),
    v = n(832163),
    k = n(44724),
    y = n(486318),
    R = n(345938),
    U = n(533406),
    O = n(953590),
    P = n(204890),
    w = n(995393),
    L = n(188275),
    D = n(652215),
    M = n(818348),
    B = n(985018),
    F = n(88465);
function H(e) {
    let { sku: t, guildId: n, shouldShowShopLink: s, onClose: r, trackPDPClick: i } = e,
        o = t?.id,
        d = (0, u.bG)([v.A], () => (null != o ? v.A.getNormalizedSKUEligibility(o) : void 0), [o]),
        m = l.useMemo(() => {
            let e = c()(),
                t = Math.max(c()(L.Y2).diff(e, "days"), 1);
            return B.intl.formatToPlainString(B.t.PWw4Vp, { days: t });
        }, []),
        h = l.useCallback(() => {
            null != t &&
                (i(w.Jq.BUY_BUTTON),
                (0, U.a)(
                    t,
                    { isGift: !1 },
                    { analyticsLocations: [p.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], guildId: n },
                ));
        }, [t, i, n]),
        b = l.useCallback(() => {
            (0, k.X)({ guildId: n });
        }, [n]),
        g = l.useCallback(() => {
            i(w.Jq.VISIT_SHOP), (0, k.default)({ guildId: n }), r();
        }, [n, r, i]),
        f = l.useCallback(() => {
            null != t &&
                (i(w.Jq.GIFT_BUTTON),
                (0, U.a)(
                    t,
                    { isGift: !0 },
                    { analyticsLocations: [p.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, i]);
    if (null == t) return null;
    let C = (0, I.$g)(t.price?.amount ?? 0, t.price?.currency ?? M.Yr.USD);
    return (0, a.jsxs)("div", {
        className: F.wt,
        children: [
            (0, a.jsxs)("div", {
                className: F.AX,
                children: [
                    (0, a.jsx)(_.Heading, { variant: "heading-xl/bold", color: "text-strong", children: t.name }),
                    (0, a.jsx)(_.Text, { variant: "text-sm/medium", color: "text-subtle", children: t.description }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: F.p6,
                children: [
                    (0, a.jsx)(_.Heading, { variant: "heading-md/semibold", color: "text-strong", children: C }),
                    null != t.orbsReward &&
                        t.orbsReward > 0 &&
                        (0, a.jsx)(P.Ay, {
                            variant: "standard",
                            timeRemaining: m,
                            children: (0, a.jsx)(P.Lb, {
                                className: F.xN,
                                children: (0, a.jsx)(_.Text, {
                                    variant: "text-sm/medium",
                                    color: "currentColor",
                                    children: B.intl.format(B.t["MA17g/"], {
                                        orbCount: t.orbsReward,
                                        orbIconHook: () =>
                                            (0, a.jsx)(_.Cp8, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: F.NC,
                children: [
                    (0, a.jsx)(_.Button, {
                        variant: "primary",
                        onClick: h,
                        text: d ? B.intl.string(B.t.boqtTA) : B.intl.string(B.t.cg0M2H),
                        fullWidth: !0,
                        disabled: !d,
                    }),
                    (0, a.jsxs)(_.ButtonGroup, {
                        wrap: !1,
                        fullWidth: !0,
                        children: [
                            s
                                ? (0, a.jsx)(_.Button, {
                                      icon: _.U1X,
                                      variant: "secondary",
                                      onMouseDown: b,
                                      onClick: g,
                                      text: B.intl.string(B.t["2QW9nR"]),
                                      fullWidth: !0,
                                  })
                                : null,
                            (0, a.jsx)(_.Button, {
                                icon: _.okO,
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
                              src: (0, N.YE)(t, e, O.B, "mp4"),
                              videoThumbnailSrc: (0, N.YE)(t, e, O.B, "webp"),
                              thumbnailSrc:
                                  null != s.thumbnailAssetId ? (0, N.YE)(t, s.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != s.backgroundAssetId ? (0, N.YE)(t, s.backgroundAssetId, O.B, S.pV) : void 0,
                          })
                        : l.push({
                              type: "image",
                              src: (0, N.YE)(t, e, O.B, "webp"),
                              thumbnailSrc:
                                  null != s.thumbnailAssetId ? (0, N.YE)(t, s.thumbnailAssetId, 112, "webp") : void 0,
                              backgroundSrc:
                                  null != s.backgroundAssetId ? (0, N.YE)(t, s.backgroundAssetId, O.B, S.pV) : void 0,
                          }));
            }
            return [a, l];
        })(t?.tenantMetadata?.socialLayer?.carouselItems ?? [], n, s.assets);
        c(e), _(a);
    }, [t, s.assets, n]),
    0 === u.length)
        ? null
        : (0, a.jsx)(O.A, { className: F.Dk, items: u, onItemChange: m, isMuted: i, onTrackClick: o });
}
function W(e) {
    let { selectedCarouselItem: t, applicationId: n } = e;
    if (null == t) return null;
    let l = null != t.labelIconAssetId ? (0, N.YE)(n, t.labelIconAssetId) : null;
    return (0, a.jsxs)("div", {
        className: F.HI,
        children: [
            null != l && (0, a.jsx)("img", { className: F.IX, src: l, alt: t.label }, l),
            (0, a.jsx)(_.Text, { variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function Y(e) {
    let { onClick: t, children: n, ariaLabel: l } = e;
    return (0, a.jsx)(_.DUT, { onClick: t, className: F.jU, "aria-label": l, role: "button", children: n });
}
function q(e) {
    let {
            transitionState: t,
            returnRef: n,
            skuId: s,
            applicationId: i,
            guildId: d,
            isStorefront: c,
            analyticsLocations: p,
            analyticsContext: I,
            onClose: S,
        } = e,
        { analyticsLocations: k } = (0, b.Ay)(p ?? []),
        U = (0, u.bG)([v.A], () => v.A.getStorefrontData(d), [d]),
        O = (0, u.bG)([T.A], () => T.A.isFetchingForSKU(s)),
        P = (0, _.Mwr)((0, h.Ay)()),
        [M, q] = l.useState(!0),
        V = (0, u.bG)([A.A], () => A.A.get(s)),
        [X, $] = l.useState(null),
        z = (function (e, t) {
            let n = t?.labelIconAssetId != null ? (0, N.YE)(e, t?.labelIconAssetId) : null,
                [a, s] = (0, g.rh)(n, "#000000"),
                i = l.useMemo(() => {
                    let e = r()(a).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [a]);
            return null != n && "#000000" !== a ? i : void 0;
        })(i, X);
    (0, x.pE)(),
        (0, m.Ay)(() => {
            E.default.track(D.HAw.OPEN_MODAL, { location_stack: k, type: L.Nh, sku_id: s, application_id: i });
        });
    let J = l.useCallback(
        (e) => {
            E.default.track(D.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                slayer_storefront_session_id: I?.sessionId,
                sku_id: s,
                guild_id: I?.guildId,
                cta_type: e,
                location_stack: k,
            });
        },
        [I, s, k],
    );
    l.useEffect(() => {
        null == d || null == s || T.A.isFetchingForSKU(s) || (0, j.qf)(d, s);
    }, [d, s]);
    let K = l.useCallback(() => {
            null != V &&
                (J(w.Jq.FORWARD_BUTTON),
                (0, R.d)({
                    sku: V,
                    guildId: d,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: k,
                    analyticsContext: I,
                }));
        }, [V, d, J, k, I]),
        Q = l.useCallback(() => {
            J(w.Jq.WISHLIST_BUTTON);
        }, [J]),
        Z = l.useCallback(() => {
            q(!M), J(w.Jq.MUTE_BUTTON);
        }, [M, J]);
    if (null == V?.tenantMetadata?.socialLayer || U?.storefront == null) return O ? (0, a.jsx)(_.y$y, {}) : null;
    let ee =
            null != U.storefront.logoAssetId
                ? (0, N.YE)(U.storefront.applicationId, U.storefront.logoAssetId, 75)
                : null,
        et =
            null != U.storefront.lightThemeLogoAssetId
                ? (0, N.YE)(U.storefront.applicationId, U.storefront.lightThemeLogoAssetId, 75)
                : null,
        en = null;
    return (
        (en = P ? (ee ?? et) : (et ?? ee)),
        (0, a.jsx)(_.EOs, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: F.CR,
            size: _.rIJ.DYNAMIC,
            returnRef: n,
            children: (0, a.jsxs)(_.$mQ, {
                className: F.jE,
                children: [
                    (0, a.jsxs)("div", {
                        className: F.op,
                        style: { background: z },
                        children: [
                            (0, a.jsx)("div", {
                                className: F.r$,
                                children: null != en ? (0, a.jsx)("img", { className: F.wm, src: en, alt: "" }) : null,
                            }),
                            (0, a.jsx)(W, { applicationId: i, selectedCarouselItem: X }),
                            (0, a.jsx)(H, { sku: V, guildId: d, shouldShowShopLink: !c, onClose: S, trackPDPClick: J }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: F.Cf,
                        children: [
                            (0, a.jsx)(G, {
                                sku: V,
                                applicationId: i,
                                storefront: U.storefront,
                                onSelectedCarouselItemChange: $,
                                isMuted: M,
                                trackPDPClick: J,
                            }),
                            (0, a.jsxs)("div", {
                                className: F.V7,
                                children: [
                                    null != V &&
                                        (0, a.jsx)(f._, {
                                            skuId: V.id,
                                            isCardHovered: !0,
                                            className: o()(F.jU, F.ij),
                                            nuxGraphic: (0, y.N)(V),
                                            onClick: Q,
                                        }),
                                    (0, a.jsx)(Y, {
                                        onClick: K,
                                        ariaLabel: B.intl.string(B.t.Ej3B3Y),
                                        children: (0, a.jsx)(C.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(Y, {
                                        onClick: Z,
                                        ariaLabel: M ? B.intl.string(B.t.YqAjXy) : B.intl.string(B.t.w4m945),
                                        children: M
                                            ? (0, a.jsx)(_._RO, { size: "refresh_sm", color: "currentColor" })
                                            : (0, a.jsx)(_.HKD, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(Y, {
                                        onClick: S,
                                        ariaLabel: B.intl.string(B.t.cpT0Cq),
                                        children: (0, a.jsx)(_.d$L, { size: "refresh_sm", color: "currentColor" }),
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
