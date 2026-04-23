l.d(t, { L: () => eW, default: () => eX }), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(310784),
    r = l.n(i),
    s = l(503698),
    o = l.n(s),
    d = l(17928),
    c = l(534514),
    u = l(192308),
    _ = l(834730),
    m = l(821609),
    h = l(318254),
    p = l(825484),
    b = l(34188),
    f = l(597770),
    x = l(939249),
    g = l(366010),
    C = l(289873),
    v = l(935462),
    A = l(358618),
    j = l(983851),
    I = l(972213),
    E = l(262427),
    T = l(964486),
    N = l(736653),
    S = l(793574),
    y = l(688810),
    k = l(429913),
    R = l(654107),
    L = l(427209),
    O = l(723090),
    U = l(801228),
    w = l(309954),
    P = l(652165),
    D = l(594832),
    B = l(495544),
    M = l(328968),
    F = l(954571),
    H = l(371794),
    G = l(871123),
    W = l(733391),
    Y = l(832163),
    V = l(945810);
let q = (0, V.mj)({
    name: "2026-04-slayer-storefront-orbs",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function z(e) {
    let { location: t } = e;
    return q.useConfig({ location: t }).enabled;
}
let $ = (0, V.mj)({
    name: "2026-04-slayer-storefront-pdp-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var X = l(989349),
    J = l.n(X),
    K = l(985018);
function Q() {
    let e,
        t =
            ((e = (0, d.bG)([Y.A], () => Y.A.getConfig()?.promotionEndDatetime, [])),
            a.useMemo(() => {
                if (null == e) return null;
                let t = J()(),
                    l = J()(e).diff(t, "days");
                return l <= 0 ? null : l;
            }, [e]));
    return a.useMemo(() => (null == t ? null : K.intl.formatToPlainString(K.t.BXpdIg, { days: Math.max(t, 1) })), [t]);
}
var Z = l(44724),
    ee = l(345938),
    et = l(510022),
    el = l(317560),
    en = l(429635),
    ea = l(533406),
    ei = l(964421);
function er(e) {
    let { mediaItems: t, labels: l, selectedIndex: a, onSelectIndex: i } = e;
    return t.length <= 1
        ? null
        : (0, n.jsxs)("div", {
              className: ei.kL,
              children: [
                  (0, n.jsx)(_.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: K.intl.string(K.t.U7DAV9),
                  }),
                  (0, n.jsx)("div", {
                      className: ei.Vg,
                      children: t.map((e, t) =>
                          (0, n.jsx)(
                              x.D,
                              {
                                  className: o()(ei.xn, { [ei.Y4]: t === a }),
                                  onClick: () => i(t),
                                  "aria-label": l?.[t],
                                  "aria-pressed": t === a,
                                  children: (0, n.jsx)("img", {
                                      className: ei.q_,
                                      src:
                                          null != e.thumbnailSrc
                                              ? e.thumbnailSrc
                                              : "video" === e.type
                                                ? e.videoThumbnailSrc
                                                : e.src,
                                      alt: "",
                                      draggable: !1,
                                  }),
                              },
                              t,
                          ),
                      ),
                  }),
              ],
          });
}
var es = l(263911),
    eo = l(971146),
    ed = l(775602),
    ec = l(175671),
    eu = l(619517),
    e_ = l(34337),
    em = l(172079);
let eh = (e) => (0, e_.$o)({ ...e, className: em.tN, mediaPlayerClassName: em.yf }),
    ep = (e) => (0, n.jsx)(eu.Ay, { ...e });
function eb(e) {
    let { item: t, isMuted: l, className: i, alt: s = "" } = e,
        o = (function (e) {
            let t = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [l] = (0, R.rh)(t, "#000000");
            return a.useMemo(() => {
                if (null == t || "#000000" === l) return;
                let e = r()(l).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [t, l]);
        })(t),
        c = (0, d.bG)([ed.A], () => ed.A.useReducedMotion),
        [u, _] = a.useState(null),
        [m, h] = a.useState(t);
    m !== t && (h(t), m?.type === "image" && t?.type === "image" && m.src !== t.src ? _(m.src) : _(null));
    let p = a.useCallback(() => _(null), []);
    if (null == t) return null;
    let b = {
        background: o,
        backgroundImage: null != t.backgroundSrc ? `url(${t.backgroundSrc})` : void 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    return "video" === t.type
        ? (0, n.jsx)("div", {
              className: i ?? em.kL,
              children: (0, n.jsx)(
                  "div",
                  {
                      className: `${em.h4} ${em.nR}`,
                      style: b,
                      children: (0, n.jsx)(
                          ec.rr,
                          {
                              href: null,
                              thumbnail: { url: t.videoThumbnailSrc, width: 747, height: 560 },
                              video: { url: t.src, proxyURL: t.src, width: 747, height: 560 },
                              provider: void 0,
                              allowFullScreen: !0,
                              maxHeight: 560,
                              maxWidth: 747,
                              playable: !0,
                              className: em.Ki,
                              volume: 1,
                              autoMute: l,
                              autoPlay: !0,
                              renderVideoComponent: eh,
                              renderImageComponent: ep,
                              renderLinkComponent: e_.bU,
                          },
                          `${t.src}-${l ? "muted" : "unmuted"}`,
                      ),
                  },
                  t.src,
              ),
          })
        : (0, n.jsx)("div", {
              className: i ?? em.kL,
              children: (0, n.jsxs)("div", {
                  className: em.h4,
                  style: b,
                  children: [
                      (0, n.jsx)("img", { src: t.src, alt: s, className: em.Sl }, t.src),
                      null != u && !c && (0, n.jsx)("img", { src: u, alt: "", className: em.Ve, onAnimationEnd: p }, u),
                  ],
              }),
          });
}
var ef = l(743693),
    ex = l(995393),
    eg = l(188275),
    eC = l(652215),
    ev = l(334588);
function eA(e) {
    let { sku: t } = e;
    return null == t
        ? null
        : (0, n.jsxs)("div", {
              className: ev.AX,
              children: [
                  (0, n.jsx)(c.D, { variant: "heading-lg/bold", color: "text-strong", children: t.name }),
                  (0, n.jsx)(_.E, { variant: "text-sm/medium", color: "text-subtle", children: t.description }),
              ],
          });
}
function ej(e) {
    let { sku: t } = e,
        { normalPrice: l, discountedPrice: a, discountPercent: i } = (0, O.CD)({ sku: t });
    if (null == l) return null;
    let r = null != t.orbsReward && t.orbsReward > 0;
    return (0, n.jsxs)("div", {
        className: ev.sj,
        children: [
            (0, n.jsx)(eo.V, { textColor: "text-subtle" }),
            (0, n.jsxs)("div", {
                className: ev.hO,
                children: [
                    null != i && null != a
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(_.E, { variant: "text-md/medium", className: ev.Jb, children: l }),
                                  (0, n.jsx)(_.E, { variant: "text-md/semibold", color: "text-strong", children: a }),
                                  (0, n.jsx)(_.E, { variant: "text-md/bold", className: ev.Fi, children: i }),
                              ],
                          })
                        : (0, n.jsx)(_.E, { variant: "text-md/semibold", color: "text-strong", children: l }),
                    r &&
                        (0, n.jsx)("div", {
                            className: ev.pt,
                            children: (0, n.jsx)(_.E, {
                                variant: "text-sm/semibold",
                                color: "currentColor",
                                children: K.intl.format(K.t.GiVd2Q, {
                                    orbCount: t.orbsReward,
                                    orbIconHook: () =>
                                        (0, n.jsx)(h.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                }),
                            }),
                        }),
                ],
            }),
        ],
    });
}
function eI(e) {
    let {
            sku: t,
            guildId: l,
            shouldShowShopLink: i,
            giftRecipient: r,
            giftingOrigin: s,
            trackPDPClick: o,
            analyticsLocations: c,
        } = e,
        p = t.id,
        g = (0, d.bG)([Y.A], () => Y.A.getNormalizedSKUEligibility(p), [p]),
        C = z({ location: "product_details_modal" }),
        v = (0, O.JL)({ sku: t });
    (0, w.W)({ disableFetch: !C });
    let A = (0, k.h)(t.applicationId),
        j = a.useCallback(() => {
            null != l &&
                (o(ex.Jq.BUY_BUTTON),
                (0, ea.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...c, S.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: l,
                    },
                ));
        }, [t, o, l, c]),
        I = a.useCallback(() => {
            null != l && (0, Z.X)({ guildId: l });
        }, [l]),
        E = a.useCallback(() => {
            null != l && (o(ex.Jq.VISIT_SHOP), (0, u.closeAllModals)(), (0, Z.default)({ guildId: l }));
        }, [l, o]),
        T = a.useCallback(() => {
            o(ex.Jq.GIFT_BUTTON),
                (0, ea.a)(
                    t,
                    { isGift: !0, giftRecipient: r, giftingOrigin: s },
                    { analyticsLocations: [...c, S.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [t, o, r, s, c]),
        N = a.useCallback(() => {
            if (null == A || !C) return;
            o(ex.Jq.BUY_WITH_ORBS_BUTTON);
            let e = [...c, S.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON];
            (0, P.B4)({
                skuId: t.id,
                applicationId: t.applicationId,
                onCheckoutSuccess: () => {
                    (0, el.j)(), (0, et.n)({ sku: t, application: A, analyticsLocations: e });
                },
                analyticsLocations: e,
            });
        }, [t, o, c, A, C]);
    return (0, n.jsxs)("div", {
        className: ev.NC,
        children: [
            !g &&
                (0, n.jsx)(_.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: K.intl.string(K.t.IqlPbQ),
                }),
            g
                ? (0, n.jsxs)("div", {
                      className: ev.mr,
                      children: [
                          (0, n.jsx)(m.$, {
                              variant: "primary",
                              onClick: j,
                              text: K.intl.string(K.t.boqtTA),
                              fullWidth: !0,
                          }),
                          (0, n.jsx)(x.D, {
                              className: ev.xP,
                              onClick: T,
                              "aria-label": K.intl.string(K.t.QAZA5f),
                              role: "button",
                              children: (0, n.jsx)(f.o, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  })
                : (0, n.jsx)(m.$, {
                      icon: f.o,
                      variant: "secondary",
                      onClick: T,
                      text: K.intl.string(K.t.QAZA5f),
                      fullWidth: !0,
                  }),
            i &&
                (0, n.jsx)(m.$, {
                    icon: b.U,
                    variant: "secondary",
                    onMouseDown: I,
                    onClick: E,
                    text: K.intl.string(K.t["2QW9nR"]),
                    fullWidth: !0,
                }),
            C &&
                g &&
                null != v &&
                (0, n.jsx)(m.$, {
                    icon: h.C,
                    variant: "secondary",
                    onClick: N,
                    text: K.intl.format(K.t.lOtBOI, {
                        orbPrice: v.amount,
                        orbIconHook: () => (0, n.jsx)(h.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                    }),
                    fullWidth: !0,
                }),
        ],
    });
}
function eE(e) {
    let { selectedCarouselItem: t, applicationId: l } = e;
    if (null == t) return null;
    let a = null != t.labelIconAssetId ? (0, H.YE)(l, t.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: ev.HI,
        children: [
            null != a && (0, n.jsx)("img", { className: ev.IX, src: a, alt: "" }, a),
            (0, n.jsx)(_.E, { variant: "text-xs/medium", color: "text-subtle", children: t.label }),
        ],
    });
}
function eT(e) {
    let { onClick: t, children: l, ariaLabel: a } = e;
    return (0, n.jsx)(x.D, { onClick: t, className: ev.jU, "aria-label": a, role: "button", children: l });
}
function eN(e) {
    let {
            transitionState: t,
            returnRef: l,
            skuId: i,
            applicationId: r,
            isStorefront: s,
            giftRecipient: u,
            giftingOrigin: m,
            analyticsLocations: h,
            analyticsContext: p,
            onClose: b,
        } = e,
        { analyticsLocations: f } = (0, y.Ay)(h ?? []),
        { guildId: x } = (0, G.nG)(r),
        E = (0, d.bG)([B.default], () => B.default.getId());
    a.useEffect(() => {
        null != x && null != i && (0, W.iR)(x, i);
    }, [x, i]);
    let S = (0, en.A)({ guildId: x }),
        k = (0, d.bG)([Y.A], () => Y.A.getSkuAssets()),
        R = (0, d.bG)([M.A], () => M.A.isFetchingForSKU(i)),
        O = (0, g.M)((0, N.Ay)()),
        [w, P] = a.useState(!0),
        V = (0, U.A)({ skuId: i, location: "SocialLayerStorefrontProductDetailsModal" }),
        [q, z] = a.useState(0),
        [$, X] = a.useMemo(() => eW(V?.tenantMetadata?.socialLayer?.carouselItems ?? [], r, k), [V, r, k]),
        [J, Z] = a.useState(null),
        [et, el] = a.useState(!1);
    a.useEffect(() => {
        if (null == J) return;
        let e = new ResizeObserver(() => {
            el(J.scrollHeight > J.clientHeight);
        });
        return e.observe(J), () => e.disconnect();
    }, [J]);
    let ea = q < X.length ? q : 0,
        ei = $[ea] ?? null,
        eo = X.length > 1,
        ed = X.some((e) => "video" === e.type);
    (0, D.pE)(),
        (0, T.Ay)(() => {
            F.default.track(eC.HAw.OPEN_MODAL, { location_stack: f, type: eg.Nh, sku_id: i, application_id: r }),
                (0, W.Xw)();
        });
    let ec = a.useCallback(
            (e) => {
                F.default.track(eC.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: p?.sessionId,
                    sku_id: i,
                    guild_id: p?.guildId,
                    cta_type: e,
                    location_stack: f,
                });
            },
            [p, i, f],
        ),
        eu = a.useCallback(
            (e) => {
                z(e), ec(ex.Jq.CAROUSEL_ITEM);
            },
            [ec],
        );
    a.useEffect(() => {
        null == x || null == i || M.A.isFetchingForSKU(i) || (0, W.qf)(x, i);
    }, [x, i]);
    let e_ = a.useCallback(() => {
            null != V &&
                null != x &&
                (ec(ex.Jq.FORWARD_BUTTON),
                (0, ee.d)({
                    sku: V,
                    guildId: x,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: f,
                    analyticsContext: p,
                }));
        }, [V, x, ec, f, p]),
        em = a.useCallback(() => {
            ec(ex.Jq.WISHLIST_BUTTON);
        }, [ec]),
        eh = a.useCallback(() => {
            P(!w), ec(ex.Jq.MUTE_BUTTON);
        }, [w, ec]),
        ep = Q(),
        eN = V?.tenantMetadata?.socialLayer;
    if (null == V || null == eN) return R ? (0, n.jsx)(C.y, {}) : null;
    let ey = S?.storefront,
        ek = ey?.logoAssetId != null ? (0, H.YE)(ey.applicationId, ey.logoAssetId, 75) : null,
        eR = ey?.lightThemeLogoAssetId != null ? (0, H.YE)(ey.applicationId, ey.lightThemeLogoAssetId, 75) : null,
        eL = null;
    eL = O ? (ek ?? eR) : (eR ?? ek);
    let eO = null != V.orbsReward && V.orbsReward > 0;
    return (0, n.jsx)(v.EO, {
        transitionState: t,
        "hide-shadow": !0,
        parentComponent: "SocialLayerStorefrontProductDetailsModal",
        className: ev.CR,
        size: v.rI.DYNAMIC,
        returnRef: l,
        children: (0, n.jsxs)(v.$m, {
            className: ev.jE,
            children: [
                eO &&
                    (0, n.jsx)(eS, {
                        timeRemaining: ep ?? void 0,
                        text: K.intl.format(K.t.d3njXi, { orbCount: V.orbsReward }),
                    }),
                (0, n.jsxs)("div", {
                    className: ev.nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: ev.op,
                            children: [
                                (0, n.jsx)("div", {
                                    className: ev.r$,
                                    children:
                                        null != eL
                                            ? (0, n.jsx)("img", { className: ev.wm, src: eL, alt: ey?.title ?? "" })
                                            : null,
                                }),
                                (0, n.jsxs)("div", {
                                    ref: Z,
                                    className: ev.zD,
                                    children: [
                                        V.exclusive &&
                                            (0, n.jsx)("div", { className: ev.K3, children: (0, n.jsx)(es.I, {}) }),
                                        eo
                                            ? (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(eA, { sku: V }),
                                                      (0, n.jsx)("div", {
                                                          className: ev._D,
                                                          children: (0, n.jsx)(er, {
                                                              mediaItems: X,
                                                              labels: $.map((e) => e.label),
                                                              selectedIndex: ea,
                                                              onSelectIndex: eu,
                                                          }),
                                                      }),
                                                      (0, n.jsx)("div", {
                                                          className: ev.Jv,
                                                          children: (0, n.jsx)(eE, {
                                                              applicationId: r,
                                                              selectedCarouselItem: ei,
                                                          }),
                                                      }),
                                                  ],
                                              })
                                            : (0, n.jsxs)("div", {
                                                  className: ev.cP,
                                                  children: [
                                                      (0, n.jsx)(c.D, {
                                                          variant: "heading-lg/bold",
                                                          color: "text-strong",
                                                          children: V.name,
                                                      }),
                                                      (0, n.jsx)(eE, { applicationId: r, selectedCarouselItem: ei }),
                                                      (0, n.jsx)(_.E, {
                                                          variant: "text-sm/medium",
                                                          color: "text-subtle",
                                                          children: V.description,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: o()(ev.Td, { [ev.t7]: et }),
                                    children: [
                                        (0, n.jsx)(ej, { sku: V }),
                                        (0, n.jsx)(eI, {
                                            sku: V,
                                            guildId: x,
                                            shouldShowShopLink: !s,
                                            giftRecipient: u?.id !== E ? u : void 0,
                                            giftingOrigin: u?.id !== E ? m : void 0,
                                            trackPDPClick: ec,
                                            analyticsLocations: f,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: ev.il,
                            children: [
                                (0, n.jsx)(eb, { item: X[ea], isMuted: w, alt: ei?.label ?? V.name }),
                                (0, n.jsxs)("div", {
                                    className: ev.V7,
                                    children: [
                                        null != V &&
                                            (0, n.jsx)(ef._, {
                                                sku: V,
                                                isCardHovered: !0,
                                                className: o()(ev.jU, ev.ij),
                                                trackButtonClick: em,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, n.jsx)(eT, {
                                            onClick: e_,
                                            ariaLabel: K.intl.string(K.t.Ej3B3Y),
                                            children: (0, n.jsx)(L.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        ed &&
                                            (0, n.jsx)(eT, {
                                                onClick: eh,
                                                ariaLabel: w ? K.intl.string(K.t.YqAjXy) : K.intl.string(K.t.w4m945),
                                                children: w
                                                    ? (0, n.jsx)(A._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, n.jsx)(j.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, n.jsx)(eT, {
                                            onClick: b,
                                            ariaLabel: K.intl.string(K.t.cpT0Cq),
                                            children: (0, n.jsx)(I.d, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function eS(e) {
    let { timeRemaining: t, text: l } = e;
    return (0, n.jsxs)("div", {
        className: ev.pP,
        children: [
            (0, n.jsxs)("div", {
                className: ev.Wi,
                children: [
                    (0, n.jsx)(h.C, { size: "refresh_sm", color: "currentColor" }),
                    (0, n.jsx)(_.E, { variant: "text-sm/semibold", color: "currentColor", children: l }),
                ],
            }),
            null != t && (0, n.jsx)(_.E, { variant: "text-sm/medium", color: "currentColor", children: t }),
        ],
    });
}
var ey = l(615300),
    ek = l(456412),
    eR = l(133296),
    eL = l(848752),
    eO = l(452282),
    eU = l(625494),
    ew = l(55607);
let eP = (e) => (0, e_.$o)({ ...e, className: ew.tN, mediaPlayerClassName: ew.yf }),
    eD = (e) => (0, n.jsx)(eu.Ay, { ...e });
function eB(e) {
    let t = "videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src,
        [l, n] = (0, R.rh)(t, "#000000"),
        i = a.useMemo(() => {
            let e = r()(l).darken(1);
            return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
        }, [l]);
    return null != t && "#000000" !== l ? i : void 0;
}
function eM(e) {
    let { item: t, onPlay: l, onEnded: a, onClick: i, playable: r, isMuted: s } = e,
        o = eB(t),
        d = (0, n.jsx)(
            ec.rr,
            {
                href: null,
                thumbnail: { url: t.videoThumbnailSrc, width: 747, height: 560 },
                video: { url: t.src, proxyURL: t.src, width: 747, height: 560 },
                provider: void 0,
                allowFullScreen: !0,
                maxHeight: 560,
                maxWidth: 747,
                onPlay: l,
                onEnded: a,
                playable: r,
                className: ew.Ki,
                volume: 1,
                autoMute: s,
                autoPlay: r,
                renderVideoComponent: eP,
                renderImageComponent: eD,
                renderLinkComponent: e_.bU,
            },
            s ? "player-muted" : "player-unmuted",
        ),
        c = { background: o };
    return r
        ? (0, n.jsx)("div", { className: ew.AU, style: c, children: d })
        : (0, n.jsx)(x.D, { className: ew.AU, onClick: i, style: c, children: d });
}
function eF(e) {
    let { item: t, setHasInteracted: l, onSetItem: a, isCurrentItem: i, itemIndex: r } = e,
        s = { background: eB(t) };
    return i
        ? (0, n.jsx)(x.D, {
              onClick: () => l(!0),
              className: ew.AU,
              style: s,
              children: (0, n.jsx)("img", { src: t.src, alt: "", className: ew.NP }),
          })
        : (0, n.jsx)(x.D, {
              onClick: () => a(r),
              className: ew.AU,
              style: s,
              children: (0, n.jsx)("img", { alt: "", className: ew.tv, src: t.src, draggable: !1 }),
          });
}
let eH = (0, ek.A)((e) => {
    let {
            items: t,
            className: l,
            paused: i = !1,
            autoplayInterval: r = 8e3,
            onItemChange: s,
            isMuted: d = !0,
            onTrackClick: c,
        } = e,
        u = (0, a.useRef)(0),
        [_, m] = (0, a.useState)(0),
        [h, p] = (0, a.useState)(0),
        b = (0, a.useRef)(0),
        f = (0, a.useRef)(t.length),
        [x, g] = (0, a.useState)(!0),
        [C, v] = (0, a.useState)(!1),
        [A, j] = (0, a.useState)(!1),
        [I, E] = (0, a.useState)(!1),
        [T, N] = (0, a.useState)(!1),
        S = (0, a.useCallback)(
            (e, l) => {
                let n = t[e]?.backgroundSrc,
                    a = l.interpolate({ inputRange: [0, 1], outputRange: [1, 0], extrapolate: ey.A.Extrapolate.CLAMP });
                return {
                    opacity: l.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.3, 1],
                        extrapolate: ey.A.Extrapolate.CLAMP,
                    }),
                    filter: ey.A.template`grayscale(${a})`,
                    backgroundImage: null != n ? `url(${n})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                };
            },
            [t],
        ),
        y = (0, a.useCallback)(function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            v(!1), j(t);
            let l = f.current,
                n = (0, eO.U3)(b.current, l),
                a = (0, eO.U3)(e, l);
            (b.current = a),
                p(a),
                u.current++,
                m(u.current),
                g(1 === Math.abs(a - n) || (a === l - 1 && 0 === n) || (0 === a && n === l - 1));
        }, []),
        k = (0, a.useCallback)(() => {
            y(b.current + 1, !1);
        }, [y]),
        R = (0, a.useCallback)(() => {
            c?.(ex.Jq.CAROUSEL_NEXT), y(b.current + 1);
        }, [y, c]),
        L = (0, a.useCallback)(() => {
            c?.(ex.Jq.CAROUSEL_PREV), y(b.current - 1);
        }, [y, c]),
        O = (0, a.useCallback)((e) => {
            v(!0), j(!e);
        }, []),
        U = (0, a.useCallback)(() => {
            A || k();
        }, [A, k]),
        w = (0, a.useCallback)((e) => {
            let t = b.current;
            e < t ? E(!0) : e > t && N(!0);
        }, []),
        P = (0, a.useCallback)(() => {
            E(!1), N(!1);
        }, []),
        D = (0, a.useCallback)(
            (e, t, l) =>
                (0, n.jsx)(eF, {
                    item: e,
                    itemIndex: t,
                    isCurrentItem: l,
                    onSetItem: (e) => {
                        c?.(ex.Jq.CAROUSEL_ITEM), y(e);
                    },
                    setHasInteracted: j,
                }),
            [y, c],
        ),
        B = (0, a.useCallback)(
            (e, l, a) => {
                let i = l === (0, eO.U3)(h, t.length);
                return (0, n.jsx)(ey.A.div, {
                    className: o()(ew.AS, { [ew.Xt]: i }),
                    style: null != a ? S(l, a) : null,
                    onMouseEnter: i ? null : () => w(l),
                    onMouseLeave: i ? null : P,
                    children:
                        "video" === e.type
                            ? (0, n.jsx)(
                                  eM,
                                  {
                                      item: e,
                                      onPlay: O,
                                      onEnded: U,
                                      playable: i,
                                      isMuted: d,
                                      onClick: () => {
                                          c?.(ex.Jq.CAROUSEL_ITEM), y(l);
                                      },
                                  },
                                  _,
                              )
                            : D(e, l, i),
                });
            },
            [h, t.length, S, w, P, O, U, y, D, d, c, _],
        ),
        M = (0, a.useCallback)(() => {
            let e = (0, n.jsx)(eO.Ay, {
                className: ew.Dk,
                items: t,
                itemSize: { width: 747, margin: 0 },
                renderItem: B,
                currentIndex: h,
                animate: x,
                edgeItems: 2,
            });
            return t.length <= 1
                ? e
                : (0, n.jsxs)("div", {
                      className: ew.HY,
                      children: [
                          e,
                          (0, n.jsx)(eL.Q8, { onClick: L, className: o()(ew.UE, { [ew.h_]: I }) }),
                          (0, n.jsx)(eL.Oj, { onClick: R, className: o()(ew.UE, { [ew.h_]: T }) }),
                      ],
                  });
        }, [t, B, h, x, L, R, I, T]),
        F = (0, a.useCallback)(
            (e, t) => {
                let l = h === t;
                return (0, n.jsx)(
                    "div",
                    {
                        className: o()(ew.Yw, l ? ew.sM : ew.N7),
                        children: (0, n.jsx)("img", {
                            alt: "",
                            className: ew.Pr,
                            src:
                                null != e.thumbnailSrc
                                    ? e.thumbnailSrc
                                    : "image" === e.type
                                      ? e.src
                                      : "video" === e.type
                                        ? e.videoThumbnailSrc
                                        : void 0,
                            draggable: !1,
                        }),
                    },
                    `page-${t}`,
                );
            },
            [h],
        );
    (0, a.useEffect)(
        () => (
            eU._.subscribe(eC.jej.CAROUSEL_PREV, L),
            eU._.subscribe(eC.jej.CAROUSEL_NEXT, R),
            () => {
                eU._.unsubscribe(eC.jej.CAROUSEL_PREV, L), eU._.unsubscribe(eC.jej.CAROUSEL_NEXT, R);
            }
        ),
        [L, R],
    ),
        (0, a.useEffect)(() => {
            f.current = t.length;
        }, [t]),
        (0, a.useEffect)(() => {
            s?.(t[h], h);
        }, [h, t, s]);
    let H = (0, a.useCallback)(
        (e) => {
            c?.(ex.Jq.CAROUSEL_ITEM), y(e);
        },
        [y, c],
    );
    return (0, n.jsxs)(eR.A, {
        pauseOnHover: !0,
        onInterval: k,
        interval: r,
        className: l,
        disable: C || A || i,
        children: [
            M(),
            (0, n.jsx)("div", {
                className: ew.X$,
                children: (0, n.jsx)(eL.Ay, {
                    renderItem: F,
                    scrollToPadding: 40,
                    items: t,
                    selectedIndex: h,
                    onSetItem: H,
                    paginationContainerClass: ew.XG,
                    align: eL.Ay.Align.CENTER,
                }),
            }),
        ],
    });
});
var eG = l(199138);
function eW(e, t, l) {
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
                      src: (0, H.YE)(t, e, 747, "mp4"),
                      videoThumbnailSrc: (0, H.YE)(t, e, 747, "webp"),
                      thumbnailSrc: null != i.thumbnailAssetId ? (0, H.YE)(t, i.thumbnailAssetId, 112, "webp") : void 0,
                      backgroundSrc:
                          null != i.backgroundAssetId ? (0, H.YE)(t, i.backgroundAssetId, 747, G.pV) : void 0,
                  })
                : a.push({
                      type: "image",
                      src: (0, H.YE)(t, e, 747, "webp"),
                      thumbnailSrc: null != i.thumbnailAssetId ? (0, H.YE)(t, i.thumbnailAssetId, 112, "webp") : void 0,
                      backgroundSrc:
                          null != i.backgroundAssetId ? (0, H.YE)(t, i.backgroundAssetId, 747, G.pV) : void 0,
                  }));
    }
    return [n, a];
}
function eY(e) {
    let { sku: t } = e,
        { normalPrice: l, discountedPrice: a, discountPercent: i } = (0, O.CD)({ sku: t });
    return null == l
        ? null
        : null != i && null != a
          ? (0, n.jsxs)("div", {
                className: eG.TS,
                children: [
                    (0, n.jsx)(c.D, {
                        className: eG.of,
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
function eV(e) {
    let {
            sku: t,
            guildId: l,
            shouldShowShopLink: i,
            giftRecipient: r,
            giftingOrigin: s,
            trackPDPClick: o,
            analyticsLocations: x,
        } = e,
        g = t?.id,
        C = (0, d.bG)([Y.A], () => (null != g ? Y.A.getNormalizedSKUEligibility(g) : void 0), [g]),
        v = Q(),
        A = z({ location: "product_details_modal" }),
        j = (0, O.JL)({ sku: t });
    (0, w.W)({ disableFetch: !A });
    let I = (0, k.h)(t?.applicationId),
        E = a.useCallback(() => {
            null != t &&
                null != l &&
                (o(ex.Jq.BUY_BUTTON),
                (0, ea.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...x, S.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: l,
                    },
                ));
        }, [t, o, l, x]),
        T = a.useCallback(() => {
            null != l && (0, Z.X)({ guildId: l });
        }, [l]),
        N = a.useCallback(() => {
            null != l && (o(ex.Jq.VISIT_SHOP), (0, u.closeAllModals)(), (0, Z.default)({ guildId: l }));
        }, [l, o]),
        y = a.useCallback(() => {
            null != t &&
                (o(ex.Jq.GIFT_BUTTON),
                (0, ea.a)(
                    t,
                    { isGift: !0, giftRecipient: r, giftingOrigin: s },
                    { analyticsLocations: [...x, S.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [t, o, r, s, x]),
        R = a.useCallback(() => {
            if (null == t || null == I || !A) return;
            o(ex.Jq.BUY_WITH_ORBS_BUTTON);
            let e = [...x, S.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON];
            (0, P.B4)({
                skuId: t.id,
                applicationId: t.applicationId,
                onCheckoutSuccess: () => {
                    (0, el.j)(), (0, et.n)({ sku: t, application: I, analyticsLocations: e });
                },
                analyticsLocations: e,
            });
        }, [t, o, x, I, A]);
    return null == t
        ? null
        : (0, n.jsxs)("div", {
              className: eG.wt,
              children: [
                  t.exclusive && (0, n.jsx)("div", { className: eG.K3, children: (0, n.jsx)(es.I, {}) }),
                  (0, n.jsxs)("div", {
                      className: eG.AX,
                      children: [
                          (0, n.jsx)(c.D, { variant: "heading-xl/bold", color: "text-strong", children: t.name }),
                          (0, n.jsx)(_.E, { variant: "text-sm/medium", color: "text-subtle", children: t.description }),
                      ],
                  }),
                  (0, n.jsxs)("div", {
                      className: eG.sj,
                      children: [
                          (0, n.jsx)(eo.V, {}),
                          (0, n.jsx)(eY, { sku: t }),
                          null != t.orbsReward &&
                              t.orbsReward > 0 &&
                              (0, n.jsx)(eK, {
                                  timeRemaining: v ?? void 0,
                                  text: K.intl.format(K.t.d3njXi, { orbCount: t.orbsReward }),
                              }),
                      ],
                  }),
                  (0, n.jsxs)("div", {
                      className: eG.NC,
                      children: [
                          !C &&
                              (0, n.jsx)(_.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children: K.intl.string(K.t.IqlPbQ),
                              }),
                          C &&
                              (0, n.jsx)(m.$, {
                                  variant: "primary",
                                  onClick: E,
                                  text: K.intl.string(K.t.boqtTA),
                                  fullWidth: !0,
                              }),
                          A &&
                              C &&
                              null != j &&
                              (0, n.jsx)(m.$, {
                                  icon: h.C,
                                  variant: "secondary",
                                  onClick: R,
                                  text: K.intl.format(K.t.lOtBOI, {
                                      orbPrice: j.amount,
                                      orbIconHook: () =>
                                          (0, n.jsx)(h.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                  }),
                                  fullWidth: !0,
                              }),
                          (0, n.jsxs)(p.e, {
                              wrap: !1,
                              fullWidth: !0,
                              children: [
                                  i
                                      ? (0, n.jsx)(m.$, {
                                            icon: b.U,
                                            variant: "secondary",
                                            onMouseDown: T,
                                            onClick: N,
                                            text: K.intl.string(K.t["2QW9nR"]),
                                            fullWidth: !0,
                                        })
                                      : null,
                                  (0, n.jsx)(m.$, {
                                      icon: f.o,
                                      variant: "secondary",
                                      onClick: y,
                                      text: K.intl.string(K.t.QAZA5f),
                                      fullWidth: !0,
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
function eq(e) {
    let { sku: t, applicationId: l, assets: i, onSelectedCarouselItemChange: r, isMuted: s, trackPDPClick: o } = e,
        [d, c] = a.useState([]),
        [u, _] = a.useState([]),
        m = a.useCallback(
            (e) => {
                let t = u.findIndex((t) => t === e);
                r?.(d[t] ?? null);
            },
            [r, d, u],
        );
    return (a.useEffect(() => {
        let [e, n] = eW(t?.tenantMetadata?.socialLayer?.carouselItems ?? [], l, i);
        c(e), _(n);
    }, [t, i, l]),
    0 === u.length)
        ? null
        : (0, n.jsx)(eH, { className: eG.Dk, items: u, onItemChange: m, isMuted: s, onTrackClick: o });
}
function ez(e) {
    let { selectedCarouselItem: t, applicationId: l } = e;
    if (null == t) return null;
    let a = null != t.labelIconAssetId ? (0, H.YE)(l, t.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: eG.HI,
        children: [
            null != a && (0, n.jsx)("img", { className: eG.IX, src: a, alt: t.label }, a),
            (0, n.jsx)(_.E, { variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function e$(e) {
    let { onClick: t, children: l, ariaLabel: a } = e;
    return (0, n.jsx)(x.D, { onClick: t, className: eG.jU, "aria-label": a, role: "button", children: l });
}
function eX(e) {
    return !(function (e) {
        let { location: t } = e;
        return $.useConfig({ location: t }).enabled;
    })({ location: "product_details_modal" })
        ? (0, n.jsx)(eJ, { ...e })
        : (0, n.jsx)(eN, { ...e });
}
function eJ(e) {
    let {
            transitionState: t,
            returnRef: l,
            skuId: i,
            applicationId: s,
            isStorefront: c,
            giftRecipient: u,
            giftingOrigin: _,
            analyticsLocations: m,
            analyticsContext: h,
            onClose: p,
        } = e,
        { analyticsLocations: b } = (0, y.Ay)(m ?? []),
        { guildId: f } = (0, G.nG)(s),
        x = (0, d.bG)([B.default], () => B.default.getId());
    a.useEffect(() => {
        null != f && null != i && (0, W.iR)(f, i);
    }, [f, i]);
    let E = (0, d.bG)([Y.A], () => Y.A.getStorefrontMetadata(s), [s]),
        S = (0, d.bG)([Y.A], () => Y.A.getSkuAssets()),
        k = (0, d.bG)([M.A], () => M.A.isFetchingForSKU(i)),
        O = (0, g.M)((0, N.Ay)()),
        [w, P] = a.useState(!0),
        V = (0, U.A)({ skuId: i, location: "SocialLayerStorefrontProductDetailsModal" }),
        [q, z] = a.useState(null),
        $ = (function (e, t) {
            let l = t?.labelIconAssetId != null ? (0, H.YE)(e, t?.labelIconAssetId) : null,
                [n, i] = (0, R.rh)(l, "#000000"),
                s = a.useMemo(() => {
                    let e = r()(n).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [n]);
            return null != l && "#000000" !== n ? s : void 0;
        })(s, q);
    (0, D.pE)(),
        (0, T.Ay)(() => {
            F.default.track(eC.HAw.OPEN_MODAL, { location_stack: b, type: eg.Nh, sku_id: i, application_id: s }),
                (0, W.Xw)();
        });
    let X = a.useCallback(
        (e) => {
            F.default.track(eC.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                slayer_storefront_session_id: h?.sessionId,
                sku_id: i,
                guild_id: h?.guildId,
                cta_type: e,
                location_stack: b,
            });
        },
        [h, i, b],
    );
    a.useEffect(() => {
        null == f || null == i || M.A.isFetchingForSKU(i) || (0, W.qf)(f, i);
    }, [f, i]);
    let J = a.useCallback(() => {
            null != V &&
                null != f &&
                (X(ex.Jq.FORWARD_BUTTON),
                (0, ee.d)({
                    sku: V,
                    guildId: f,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: b,
                    analyticsContext: h,
                }));
        }, [V, f, X, b, h]),
        Q = a.useCallback(() => {
            X(ex.Jq.WISHLIST_BUTTON);
        }, [X]),
        Z = a.useCallback(() => {
            P(!w), X(ex.Jq.MUTE_BUTTON);
        }, [w, X]);
    if (null == V?.tenantMetadata?.socialLayer) return k ? (0, n.jsx)(C.y, {}) : null;
    let et = E?.logoAssetId != null ? (0, H.YE)(s, E.logoAssetId, 75) : null,
        el = E?.lightThemeLogoAssetId != null ? (0, H.YE)(s, E.lightThemeLogoAssetId, 75) : null,
        en = null;
    return (
        (en = O ? (et ?? el) : (el ?? et)),
        (0, n.jsx)(v.EO, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: eG.CR,
            size: v.rI.DYNAMIC,
            returnRef: l,
            children: (0, n.jsxs)(v.$m, {
                className: eG.jE,
                children: [
                    (0, n.jsxs)("div", {
                        className: eG.op,
                        style: { background: $ },
                        children: [
                            (0, n.jsx)("div", {
                                className: eG.r$,
                                children: null != en ? (0, n.jsx)("img", { className: eG.wm, src: en, alt: "" }) : null,
                            }),
                            (0, n.jsx)(ez, { applicationId: s, selectedCarouselItem: q }),
                            (0, n.jsx)(eV, {
                                sku: V,
                                guildId: f,
                                shouldShowShopLink: !c,
                                giftRecipient: u?.id !== x ? u : void 0,
                                giftingOrigin: u?.id !== x ? _ : void 0,
                                trackPDPClick: X,
                                analyticsLocations: b,
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: eG.Cf,
                        children: [
                            (0, n.jsx)(eq, {
                                sku: V,
                                applicationId: s,
                                assets: S,
                                onSelectedCarouselItemChange: z,
                                isMuted: w,
                                trackPDPClick: X,
                            }),
                            (0, n.jsxs)("div", {
                                className: eG.V7,
                                children: [
                                    null != V &&
                                        (0, n.jsx)(ef._, {
                                            sku: V,
                                            isCardHovered: !0,
                                            className: o()(eG.jU, eG.ij),
                                            trackButtonClick: Q,
                                            variant: "overlay-secondary",
                                            location: "social_layer_storefront_product_details_modal",
                                        }),
                                    (0, n.jsx)(e$, {
                                        onClick: J,
                                        ariaLabel: K.intl.string(K.t.Ej3B3Y),
                                        children: (0, n.jsx)(L.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, n.jsx)(e$, {
                                        onClick: Z,
                                        ariaLabel: w ? K.intl.string(K.t.YqAjXy) : K.intl.string(K.t.w4m945),
                                        children: w
                                            ? (0, n.jsx)(A._, { size: "refresh_sm", color: "currentColor" })
                                            : (0, n.jsx)(j.H, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, n.jsx)(e$, {
                                        onClick: p,
                                        ariaLabel: K.intl.string(K.t.cpT0Cq),
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
function eK(e) {
    let { timeRemaining: t, text: l } = e;
    return (0, n.jsx)(E.A, {
        className: eG.qw,
        Icon: h.C,
        children: (0, n.jsxs)("div", {
            className: eG.Yu,
            children: [
                (0, n.jsxs)(_.E, {
                    variant: "text-xs/bold",
                    color: "currentColor",
                    children: [K.intl.string(K.t.yYEZGi), null != t && ` (${t})`],
                }),
                (0, n.jsx)("div", {
                    className: eG.fb,
                    children: (0, n.jsx)(_.E, { variant: "text-xs/medium", color: "currentColor", children: l }),
                }),
            ],
        }),
    });
}
