l.d(t, { L: () => ed, default: () => eb }), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(310784),
    s = l.n(i),
    r = l(503698),
    o = l.n(r),
    d = l(311907),
    c = l(534514),
    u = l(192308),
    _ = l(834730),
    m = l(821609),
    h = l(318254),
    b = l(825484),
    p = l(34188),
    f = l(597770),
    x = l(939249),
    g = l(366010),
    C = l(289873),
    A = l(935462),
    v = l(358618),
    j = l(983851),
    I = l(972213),
    E = l(262427),
    T = l(964486),
    N = l(736653),
    k = l(793574),
    S = l(688810),
    y = l(429913),
    R = l(654107),
    L = l(427209),
    O = l(993046),
    U = l(801228),
    w = l(309954),
    D = l(652165),
    P = l(594832),
    B = l(961350),
    M = l(328968),
    F = l(954571),
    H = l(371794),
    G = l(871123),
    W = l(733391),
    Y = l(832163),
    q = l(681064),
    V = l(857875),
    $ = l(476438),
    z = l(44724),
    X = l(345938),
    J = l(510022),
    K = l(317560),
    Q = l(336231),
    Z = l(533406),
    ee = l(263911),
    et = l(971146),
    el = l(953590),
    en = l(743693),
    ea = l(995393),
    ei = l(188275),
    es = l(652215),
    er = l(985018),
    eo = l(199138);
function ed(e, t, l) {
    let n = [],
        a = [];
    if (null == e || 0 === e.length) return [n, a];
    for (let i of e) {
        let e = null != i.assetId ? l[i.assetId] : null;
        null != e &&
            (n.push(i),
            e.mime_type.startsWith("video/")
                ? a.push({
                      type: "video",
                      src: (0, H.YE)(t, e, el.B, "mp4"),
                      videoThumbnailSrc: (0, H.YE)(t, e, el.B, "webp"),
                      thumbnailSrc: null != i.thumbnailAssetId ? (0, H.YE)(t, i.thumbnailAssetId, 112, "webp") : void 0,
                      backgroundSrc:
                          null != i.backgroundAssetId ? (0, H.YE)(t, i.backgroundAssetId, el.B, G.pV) : void 0,
                  })
                : a.push({
                      type: "image",
                      src: (0, H.YE)(t, e, el.B, "webp"),
                      thumbnailSrc: null != i.thumbnailAssetId ? (0, H.YE)(t, i.thumbnailAssetId, 112, "webp") : void 0,
                      backgroundSrc:
                          null != i.backgroundAssetId ? (0, H.YE)(t, i.backgroundAssetId, el.B, G.pV) : void 0,
                  }));
    }
    return [n, a];
}
function ec(e) {
    let { sku: t } = e,
        { normalPrice: l, discountedPrice: a, discountPercent: i } = (0, O.CD)({ sku: t });
    return null == l
        ? null
        : null != i && null != a
          ? (0, n.jsxs)("div", {
                className: eo.TS,
                children: [
                    (0, n.jsx)(c.D, {
                        className: eo.of,
                        variant: "heading-md/medium",
                        color: "text-muted",
                        lineClamp: 1,
                        children: l,
                    }),
                    (0, n.jsx)(c.D, { variant: "heading-md/bold", color: "text-strong", children: a }),
                    (0, n.jsxs)(c.D, {
                        variant: "heading-md/bold",
                        color: "text-feedback-positive",
                        lineClamp: 1,
                        children: ["(", i, ")"],
                    }),
                ],
            })
          : (0, n.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: l });
}
function eu(e) {
    let {
            sku: t,
            guildId: l,
            shouldShowShopLink: i,
            giftRecipient: s,
            giftingOrigin: r,
            trackPDPClick: o,
            analyticsLocations: x,
        } = e,
        g = t?.id,
        C = (0, d.bG)([Y.A], () => (null != g ? Y.A.getNormalizedSKUEligibility(g) : void 0), [g]),
        A = (0, $.B)(),
        v = (0, q.R)({ location: "product_details_modal" }),
        j = (0, O.JL)({ sku: t });
    (0, w.W)({ disableFetch: !v });
    let I = (0, y.h)(t?.applicationId),
        E = a.useCallback(() => {
            null != t &&
                null != l &&
                (o(ea.Jq.BUY_BUTTON),
                (0, Z.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...x, k.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: l,
                    },
                ));
        }, [t, o, l, x]),
        T = a.useCallback(() => {
            null != l && (0, z.X)({ guildId: l });
        }, [l]),
        N = a.useCallback(() => {
            null != l && (o(ea.Jq.VISIT_SHOP), (0, u.closeAllModals)(), (0, z.default)({ guildId: l }));
        }, [l, o]),
        S = a.useCallback(() => {
            null != t &&
                (o(ea.Jq.GIFT_BUTTON),
                (0, Z.a)(
                    t,
                    { isGift: !0, giftRecipient: s, giftingOrigin: r },
                    { analyticsLocations: [...x, k.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, o, s, r, x]),
        R = a.useCallback(() => {
            if (null == t || null == I || !v) return;
            o(ea.Jq.BUY_WITH_ORBS_BUTTON);
            let e = [...x, k.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON];
            (0, D.B4)({
                skuId: t.id,
                applicationId: t.applicationId,
                onCheckoutSuccess: () => {
                    (0, K.j)(), (0, J.n)({ sku: t, application: I, analyticsLocations: e });
                },
                analyticsLocations: e,
            });
        }, [t, o, x, I, v]);
    return null == t
        ? null
        : (0, n.jsxs)("div", {
              className: eo.wt,
              children: [
                  t.exclusive && (0, n.jsx)("div", { className: eo.K3, children: (0, n.jsx)(ee.I, {}) }),
                  (0, n.jsxs)("div", {
                      className: eo.AX,
                      children: [
                          (0, n.jsx)(c.D, { variant: "heading-xl/bold", color: "text-strong", children: t.name }),
                          (0, n.jsx)(_.E, { variant: "text-sm/medium", color: "text-subtle", children: t.description }),
                      ],
                  }),
                  (0, n.jsxs)("div", {
                      className: eo.sj,
                      children: [
                          (0, n.jsx)(et.V, {}),
                          (0, n.jsx)(ec, { sku: t }),
                          null != t.orbsReward &&
                              t.orbsReward > 0 &&
                              (0, n.jsx)(ef, {
                                  timeRemaining: A ?? void 0,
                                  text: er.intl.format(er.t.d3njXi, { orbCount: t.orbsReward }),
                              }),
                      ],
                  }),
                  (0, n.jsxs)("div", {
                      className: eo.NC,
                      children: [
                          !C &&
                              (0, n.jsx)(_.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children: er.intl.string(er.t.IqlPbQ),
                              }),
                          C &&
                              (0, n.jsx)(m.$, {
                                  variant: "primary",
                                  onClick: E,
                                  text: er.intl.string(er.t.boqtTA),
                                  fullWidth: !0,
                              }),
                          v &&
                              C &&
                              null != j &&
                              (0, n.jsx)(m.$, {
                                  icon: h.C,
                                  variant: "secondary",
                                  onClick: R,
                                  text: er.intl.format(er.t.lOtBOI, {
                                      orbPrice: j.amount,
                                      orbIconHook: () =>
                                          (0, n.jsx)(h.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                  }),
                                  fullWidth: !0,
                              }),
                          (0, n.jsxs)(b.e, {
                              wrap: !1,
                              fullWidth: !0,
                              children: [
                                  i
                                      ? (0, n.jsx)(m.$, {
                                            icon: p.U,
                                            variant: "secondary",
                                            onMouseDown: T,
                                            onClick: N,
                                            text: er.intl.string(er.t["2QW9nR"]),
                                            fullWidth: !0,
                                        })
                                      : null,
                                  (0, n.jsx)(m.$, {
                                      icon: f.o,
                                      variant: "secondary",
                                      onClick: S,
                                      text: er.intl.string(er.t.QAZA5f),
                                      fullWidth: !0,
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
function e_(e) {
    let { sku: t, applicationId: l, assets: i, onSelectedCarouselItemChange: s, isMuted: r, trackPDPClick: o } = e,
        [d, c] = a.useState([]),
        [u, _] = a.useState([]),
        m = a.useCallback(
            (e) => {
                let t = u.findIndex((t) => t === e);
                s?.(d[t] ?? null);
            },
            [s, d, u],
        );
    return (a.useEffect(() => {
        let [e, n] = ed(t?.tenantMetadata?.socialLayer?.carouselItems ?? [], l, i);
        c(e), _(n);
    }, [t, i, l]),
    0 === u.length)
        ? null
        : (0, n.jsx)(el.A, { className: eo.Dk, items: u, onItemChange: m, isMuted: r, onTrackClick: o });
}
function em(e) {
    let { selectedCarouselItem: t, applicationId: l } = e;
    if (null == t) return null;
    let a = null != t.labelIconAssetId ? (0, H.YE)(l, t.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: eo.HI,
        children: [
            null != a && (0, n.jsx)("img", { className: eo.IX, src: a, alt: t.label }, a),
            (0, n.jsx)(_.E, { variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function eh(e) {
    let { onClick: t, children: l, ariaLabel: a } = e;
    return (0, n.jsx)(x.D, { onClick: t, className: eo.jU, "aria-label": a, role: "button", children: l });
}
function eb(e) {
    return (0, V.O)({ location: "product_details_modal" }) ? (0, n.jsx)(Q.A, { ...e }) : (0, n.jsx)(ep, { ...e });
}
function ep(e) {
    let {
            transitionState: t,
            returnRef: l,
            skuId: i,
            applicationId: r,
            isStorefront: c,
            giftRecipient: u,
            giftingOrigin: _,
            analyticsLocations: m,
            analyticsContext: h,
            onClose: b,
        } = e,
        { analyticsLocations: p } = (0, S.Ay)(m ?? []),
        { guildId: f } = (0, G.nG)(r),
        x = (0, d.bG)([B.default], () => B.default.getId());
    a.useEffect(() => {
        null != f && null != i && (0, W.iR)(f, i);
    }, [f, i]);
    let E = (0, d.bG)([Y.A], () => Y.A.getStorefrontMetadata(r), [r]),
        k = (0, d.bG)([Y.A], () => Y.A.getSkuAssets()),
        y = (0, d.bG)([M.A], () => M.A.isFetchingForSKU(i)),
        O = (0, g.M)((0, N.Ay)()),
        [w, D] = a.useState(!0),
        q = (0, U.A)({ skuId: i, location: "SocialLayerStorefrontProductDetailsModal" }),
        [V, $] = a.useState(null),
        z = (function (e, t) {
            let l = t?.labelIconAssetId != null ? (0, H.YE)(e, t?.labelIconAssetId) : null,
                [n, i] = (0, R.rh)(l, "#000000"),
                r = a.useMemo(() => {
                    let e = s()(n).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [n]);
            return null != l && "#000000" !== n ? r : void 0;
        })(r, V);
    (0, P.pE)(),
        (0, T.Ay)(() => {
            F.default.track(es.HAw.OPEN_MODAL, { location_stack: p, type: ei.Nh, sku_id: i, application_id: r }),
                (0, W.Xw)();
        });
    let J = a.useCallback(
        (e) => {
            F.default.track(es.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                slayer_storefront_session_id: h?.sessionId,
                sku_id: i,
                guild_id: h?.guildId,
                cta_type: e,
                location_stack: p,
            });
        },
        [h, i, p],
    );
    a.useEffect(() => {
        null == f || null == i || M.A.isFetchingForSKU(i) || (0, W.qf)(f, i);
    }, [f, i]);
    let K = a.useCallback(() => {
            null != q &&
                null != f &&
                (J(ea.Jq.FORWARD_BUTTON),
                (0, X.d)({
                    sku: q,
                    guildId: f,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: p,
                    analyticsContext: h,
                }));
        }, [q, f, J, p, h]),
        Q = a.useCallback(() => {
            J(ea.Jq.WISHLIST_BUTTON);
        }, [J]),
        Z = a.useCallback(() => {
            D(!w), J(ea.Jq.MUTE_BUTTON);
        }, [w, J]);
    if (null == q?.tenantMetadata?.socialLayer) return y ? (0, n.jsx)(C.y, {}) : null;
    let ee = E?.logoAssetId != null ? (0, H.YE)(r, E.logoAssetId, 75) : null,
        et = E?.lightThemeLogoAssetId != null ? (0, H.YE)(r, E.lightThemeLogoAssetId, 75) : null,
        el = null;
    return (
        (el = O ? (ee ?? et) : (et ?? ee)),
        (0, n.jsx)(A.EO, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: eo.CR,
            size: A.rI.DYNAMIC,
            returnRef: l,
            children: (0, n.jsxs)(A.$m, {
                className: eo.jE,
                children: [
                    (0, n.jsxs)("div", {
                        className: eo.op,
                        style: { background: z },
                        children: [
                            (0, n.jsx)("div", {
                                className: eo.r$,
                                children: null != el ? (0, n.jsx)("img", { className: eo.wm, src: el, alt: "" }) : null,
                            }),
                            (0, n.jsx)(em, { applicationId: r, selectedCarouselItem: V }),
                            (0, n.jsx)(eu, {
                                sku: q,
                                guildId: f,
                                shouldShowShopLink: !c,
                                giftRecipient: u?.id !== x ? u : void 0,
                                giftingOrigin: u?.id !== x ? _ : void 0,
                                trackPDPClick: J,
                                analyticsLocations: p,
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: eo.Cf,
                        children: [
                            (0, n.jsx)(e_, {
                                sku: q,
                                applicationId: r,
                                assets: k,
                                onSelectedCarouselItemChange: $,
                                isMuted: w,
                                trackPDPClick: J,
                            }),
                            (0, n.jsxs)("div", {
                                className: eo.V7,
                                children: [
                                    null != q &&
                                        (0, n.jsx)(en._, {
                                            sku: q,
                                            isCardHovered: !0,
                                            className: o()(eo.jU, eo.ij),
                                            trackButtonClick: Q,
                                            variant: "overlay-secondary",
                                            location: "social_layer_storefront_product_details_modal",
                                        }),
                                    (0, n.jsx)(eh, {
                                        onClick: K,
                                        ariaLabel: er.intl.string(er.t.Ej3B3Y),
                                        children: (0, n.jsx)(L.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, n.jsx)(eh, {
                                        onClick: Z,
                                        ariaLabel: w ? er.intl.string(er.t.YqAjXy) : er.intl.string(er.t.w4m945),
                                        children: w
                                            ? (0, n.jsx)(v._, { size: "refresh_sm", color: "currentColor" })
                                            : (0, n.jsx)(j.H, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, n.jsx)(eh, {
                                        onClick: b,
                                        ariaLabel: er.intl.string(er.t.cpT0Cq),
                                        children: (0, n.jsx)(I.d, { size: "refresh_sm", color: "currentColor" }),
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
function ef(e) {
    let { timeRemaining: t, text: l } = e;
    return (0, n.jsx)(E.A, {
        className: eo.qw,
        Icon: h.C,
        children: (0, n.jsxs)("div", {
            className: eo.Yu,
            children: [
                (0, n.jsxs)(_.E, {
                    variant: "text-xs/bold",
                    color: "currentColor",
                    children: [er.intl.string(er.t.yYEZGi), null != t && ` (${t})`],
                }),
                (0, n.jsx)("div", {
                    className: eo.fb,
                    children: (0, n.jsx)(_.E, { variant: "text-xs/medium", color: "currentColor", children: l }),
                }),
            ],
        }),
    });
}
