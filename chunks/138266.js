t.d(l, { L: () => e$, default: () => eV }), t(321073);
var s = t(627968),
    n = t(64700),
    a = t(310784),
    i = t.n(a),
    r = t(503698),
    o = t.n(r),
    c = t(17928),
    u = t(534514),
    d = t(192308),
    m = t(834730),
    x = t(821609),
    h = t(318254),
    b = t(825484),
    j = t(34188),
    g = t(597770),
    C = t(939249),
    f = t(366010),
    p = t(289873),
    v = t(935462),
    A = t(358618),
    k = t(983851),
    _ = t(972213),
    N = t(262427),
    I = t(964486),
    S = t(736653),
    E = t(793574),
    T = t(688810),
    y = t(429913),
    R = t(654107),
    L = t(427209),
    O = t(723090),
    U = t(801228),
    D = t(309954),
    M = t(652165),
    P = t(594832),
    w = t(495544),
    Y = t(328968),
    B = t(954571),
    q = t(371794),
    H = t(871123),
    F = t(733391),
    $ = t(832163),
    G = t(945810);
let J = (0, G.mj)({
    name: "2026-04-slayer-storefront-orbs",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function W(e) {
    let { location: l } = e;
    return J.useConfig({ location: l }).enabled;
}
let z = (0, G.mj)({
    name: "2026-04-slayer-storefront-pdp-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var X = t(989349),
    V = t.n(X),
    K = t(985018);
function Q() {
    let e,
        l =
            ((e = (0, c.bG)([$.A], () => $.A.getConfig()?.promotionEndDatetime, [])),
            n.useMemo(() => {
                if (null == e) return null;
                let l = V()(),
                    t = V()(e).diff(l, "days");
                return t <= 0 ? null : t;
            }, [e]));
    return n.useMemo(() => (null == l ? null : K.intl.formatToPlainString(K.t.BXpdIg, { days: Math.max(l, 1) })), [l]);
}
var Z = t(44724),
    ee = t(345938),
    el = t(510022),
    et = t(317560),
    es = t(429635),
    en = t(533406),
    ea = t(964421);
function ei(e) {
    let { mediaItems: l, labels: t, selectedIndex: n, onSelectIndex: a } = e;
    return l.length <= 1
        ? null
        : (0, s.jsxs)("div", {
              className: ea.kL,
              children: [
                  (0, s.jsx)(m.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: K.intl.string(K.t.U7DAV9),
                  }),
                  (0, s.jsx)("div", {
                      className: ea.Vg,
                      children: l.map((e, l) =>
                          (0, s.jsx)(
                              C.D,
                              {
                                  className: o()(ea.xn, { [ea.Y4]: l === n }),
                                  onClick: () => a(l),
                                  "aria-label": t?.[l],
                                  "aria-pressed": l === n,
                                  children: (0, s.jsx)("img", {
                                      className: ea.q_,
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
                              l,
                          ),
                      ),
                  }),
              ],
          });
}
var er = t(263911),
    eo = t(971146),
    ec = t(775602),
    eu = t(175671),
    ed = t(619517),
    em = t(34337),
    ex = t(172079);
let eh = (e) => (0, em.$o)({ ...e, className: ex.tN, mediaPlayerClassName: ex.yf }),
    eb = (e) => (0, s.jsx)(ed.Ay, { ...e });
function ej(e) {
    let { item: l, isMuted: t, className: a, alt: r = "" } = e,
        o = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, R.rh)(l, "#000000");
            return n.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = i()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        u = (0, c.bG)([ec.A], () => ec.A.useReducedMotion),
        [d, m] = n.useState(null),
        [x, h] = n.useState(l);
    x !== l && (h(l), x?.type === "image" && l?.type === "image" && x.src !== l.src ? m(x.src) : m(null));
    let b = n.useCallback(() => m(null), []);
    if (null == l) return null;
    let j = {
        background: o,
        backgroundImage: null != l.backgroundSrc ? `url(${l.backgroundSrc})` : void 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    return "video" === l.type
        ? (0, s.jsx)("div", {
              className: a ?? ex.kL,
              children: (0, s.jsx)(
                  "div",
                  {
                      className: `${ex.h4} ${ex.nR}`,
                      style: j,
                      children: (0, s.jsx)(
                          eu.rr,
                          {
                              href: null,
                              thumbnail: { url: l.videoThumbnailSrc, width: 747, height: 560 },
                              video: { url: l.src, proxyURL: l.src, width: 747, height: 560 },
                              provider: void 0,
                              allowFullScreen: !0,
                              maxHeight: 560,
                              maxWidth: 747,
                              playable: !0,
                              className: ex.Ki,
                              volume: 1,
                              autoMute: t,
                              autoPlay: !0,
                              renderVideoComponent: eh,
                              renderImageComponent: eb,
                              renderLinkComponent: em.bU,
                          },
                          `${l.src}-${t ? "muted" : "unmuted"}`,
                      ),
                  },
                  l.src,
              ),
          })
        : (0, s.jsx)("div", {
              className: a ?? ex.kL,
              children: (0, s.jsxs)("div", {
                  className: ex.h4,
                  style: j,
                  children: [
                      (0, s.jsx)("img", { src: l.src, alt: r, className: ex.Sl }, l.src),
                      null != d && !u && (0, s.jsx)("img", { src: d, alt: "", className: ex.Ve, onAnimationEnd: b }, d),
                  ],
              }),
          });
}
var eg = t(743693),
    eC = t(995393),
    ef = t(188275),
    ep = t(652215),
    ev = t(334588);
function eA(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, s.jsxs)("div", {
              className: ev.AX,
              children: [
                  (0, s.jsx)(u.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, s.jsx)(m.E, { variant: "text-sm/medium", color: "text-subtle", children: l.description }),
              ],
          });
}
function ek(e) {
    let { sku: l } = e,
        { normalPrice: t, discountedPrice: n, discountPercent: a } = (0, O.CD)({ sku: l });
    if (null == t) return null;
    let i = null != l.orbsReward && l.orbsReward > 0;
    return (0, s.jsxs)("div", {
        className: ev.sj,
        children: [
            (0, s.jsx)(eo.V, { textColor: "text-subtle" }),
            (0, s.jsxs)("div", {
                className: ev.hO,
                children: [
                    null != a && null != n
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(m.E, { variant: "text-md/medium", className: ev.Jb, children: t }),
                                  (0, s.jsx)(m.E, { variant: "text-md/semibold", color: "text-strong", children: n }),
                                  (0, s.jsx)(m.E, { variant: "text-md/bold", className: ev.Fi, children: a }),
                              ],
                          })
                        : (0, s.jsx)(m.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                    i &&
                        (0, s.jsx)("div", {
                            className: ev.pt,
                            children: (0, s.jsx)(m.E, {
                                variant: "text-sm/semibold",
                                color: "currentColor",
                                children: K.intl.format(K.t.GiVd2Q, {
                                    orbCount: l.orbsReward,
                                    orbIconHook: () =>
                                        (0, s.jsx)(h.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                }),
                            }),
                        }),
                ],
            }),
        ],
    });
}
function e_(e) {
    let {
            sku: l,
            guildId: t,
            shouldShowShopLink: a,
            giftRecipient: i,
            giftingOrigin: r,
            trackPDPClick: o,
            analyticsLocations: u,
        } = e,
        b = l.id,
        f = (0, c.bG)([$.A], () => $.A.getNormalizedSKUEligibility(b), [b]),
        p = W({ location: "product_details_modal" }),
        v = (0, O.JL)({ sku: l });
    (0, D.W)({ disableFetch: !p });
    let A = (0, y.h)(l.applicationId),
        k = n.useCallback(() => {
            null != t &&
                (o(eC.Jq.BUY_BUTTON),
                (0, en.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...u, E.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                ));
        }, [l, o, t, u]),
        _ = n.useCallback(() => {
            null != t && (0, Z.X)({ guildId: t });
        }, [t]),
        N = n.useCallback(() => {
            null != t && (o(eC.Jq.VISIT_SHOP), (0, d.closeAllModals)(), (0, Z.default)({ guildId: t }));
        }, [t, o]),
        I = n.useCallback(() => {
            o(eC.Jq.GIFT_BUTTON),
                (0, en.a)(
                    l,
                    { isGift: !0, giftRecipient: i, giftingOrigin: r },
                    { analyticsLocations: [...u, E.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [l, o, i, r, u]),
        S = n.useCallback(() => {
            if (null == A || !p) return;
            o(eC.Jq.BUY_WITH_ORBS_BUTTON);
            let e = [...u, E.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON];
            (0, M.B4)({
                skuId: l.id,
                applicationId: l.applicationId,
                onCheckoutSuccess: () => {
                    (0, et.j)(), (0, el.n)({ sku: l, application: A, analyticsLocations: e });
                },
                analyticsLocations: e,
            });
        }, [l, o, u, A, p]);
    return (0, s.jsxs)("div", {
        className: ev.NC,
        children: [
            !f &&
                (0, s.jsx)(m.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: K.intl.string(K.t.IqlPbQ),
                }),
            f
                ? (0, s.jsxs)("div", {
                      className: ev.mr,
                      children: [
                          (0, s.jsx)(x.$, {
                              variant: "primary",
                              onClick: k,
                              text: K.intl.string(K.t.boqtTA),
                              fullWidth: !0,
                          }),
                          (0, s.jsx)(C.D, {
                              className: ev.xP,
                              onClick: I,
                              "aria-label": K.intl.string(K.t.QAZA5f),
                              role: "button",
                              children: (0, s.jsx)(g.o, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  })
                : (0, s.jsx)(x.$, {
                      icon: g.o,
                      variant: "secondary",
                      onClick: I,
                      text: K.intl.string(K.t.QAZA5f),
                      fullWidth: !0,
                  }),
            a &&
                (0, s.jsx)(x.$, {
                    icon: j.U,
                    variant: "secondary",
                    onMouseDown: _,
                    onClick: N,
                    text: K.intl.string(K.t["2QW9nR"]),
                    fullWidth: !0,
                }),
            p &&
                f &&
                null != v &&
                (0, s.jsx)(x.$, {
                    icon: h.C,
                    variant: "secondary",
                    onClick: S,
                    text: K.intl.format(K.t.lOtBOI, {
                        orbPrice: v.amount,
                        orbIconHook: () => (0, s.jsx)(h.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                    }),
                    fullWidth: !0,
                }),
        ],
    });
}
function eN(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let n = null != l.labelIconAssetId ? (0, q.YE)(t, l.labelIconAssetId) : null;
    return (0, s.jsxs)("div", {
        className: ev.HI,
        children: [
            null != n && (0, s.jsx)("img", { className: ev.IX, src: n, alt: "" }, n),
            (0, s.jsx)(m.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eI(e) {
    let { onClick: l, children: t, ariaLabel: n } = e;
    return (0, s.jsx)(C.D, { onClick: l, className: ev.jU, "aria-label": n, role: "button", children: t });
}
function eS(e) {
    let { selectedCarouselItem: l, title: t, description: n, applicationId: a, className: i } = e;
    return (0, s.jsxs)("div", {
        className: i,
        children: [
            null != t && (0, s.jsx)(u.D, { variant: "heading-lg/bold", color: "text-strong", children: t }),
            (0, s.jsx)(eN, { applicationId: a, selectedCarouselItem: l }),
            null != n && (0, s.jsx)(m.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
        ],
    });
}
function eE(e) {
    let {
            transitionState: l,
            returnRef: t,
            skuId: a,
            applicationId: i,
            isStorefront: r,
            giftRecipient: u,
            giftingOrigin: d,
            analyticsLocations: m,
            analyticsContext: x,
            onClose: h,
        } = e,
        { analyticsLocations: b } = (0, T.Ay)(m ?? []),
        { guildId: j } = (0, H.nG)(i),
        g = (0, c.bG)([w.default], () => w.default.getId());
    n.useEffect(() => {
        null != j && null != a && (0, F.iR)(j, a);
    }, [j, a]);
    let C = (0, es.A)({ guildId: j }),
        N = (0, c.bG)([$.A], () => $.A.getSkuAssets()),
        E = (0, c.bG)([Y.A], () => Y.A.isFetchingForSKU(a)),
        y = (0, f.M)((0, S.Ay)()),
        [R, O] = n.useState(!0),
        D = (0, U.A)({ skuId: a, location: "SocialLayerStorefrontProductDetailsModal" }),
        [M, G] = n.useState(0),
        [J, W] = n.useMemo(() => e$(D?.tenantMetadata?.socialLayer?.carouselItems ?? [], i, N), [D, i, N]),
        [z, X] = n.useState(null),
        [V, Z] = n.useState(!1);
    n.useEffect(() => {
        if (null == z) return;
        let e = new ResizeObserver(() => {
            Z(z.scrollHeight > z.clientHeight);
        });
        return e.observe(z), () => e.disconnect();
    }, [z]);
    let el = M < W.length ? M : 0,
        et = J[el] ?? null,
        en = W.length > 1,
        ea = W.some((e) => "video" === e.type);
    (0, P.pE)(),
        (0, I.Ay)(() => {
            B.default.track(ep.HAw.OPEN_MODAL, { location_stack: b, type: ef.Nh, sku_id: a, application_id: i }),
                (0, F.Xw)();
        });
    let eo = n.useCallback(
            (e) => {
                B.default.track(ep.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: x?.sessionId,
                    sku_id: a,
                    guild_id: x?.guildId,
                    cta_type: e,
                    location_stack: b,
                });
            },
            [x, a, b],
        ),
        ec = n.useCallback(
            (e) => {
                G(e), eo(eC.Jq.CAROUSEL_ITEM);
            },
            [eo],
        );
    n.useEffect(() => {
        null == j || null == a || Y.A.isFetchingForSKU(a) || (0, F.qf)(j, a);
    }, [j, a]);
    let eu = n.useCallback(() => {
            null != D &&
                null != j &&
                (eo(eC.Jq.FORWARD_BUTTON),
                (0, ee.d)({
                    sku: D,
                    guildId: j,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: b,
                    analyticsContext: x,
                }));
        }, [D, j, eo, b, x]),
        ed = n.useCallback(() => {
            eo(eC.Jq.WISHLIST_BUTTON);
        }, [eo]),
        em = n.useCallback(() => {
            O(!R), eo(eC.Jq.MUTE_BUTTON);
        }, [R, eo]),
        ex = Q(),
        eh = D?.tenantMetadata?.socialLayer;
    if (null == D || null == eh) return E ? (0, s.jsx)(p.y, {}) : null;
    let eb = C?.storefront,
        eN = eb?.logoAssetId != null ? (0, q.YE)(eb.applicationId, eb.logoAssetId, 75) : null,
        eE = eb?.lightThemeLogoAssetId != null ? (0, q.YE)(eb.applicationId, eb.lightThemeLogoAssetId, 75) : null,
        ey = null;
    ey = y ? (eN ?? eE) : (eE ?? eN);
    let eR = null != D.orbsReward && D.orbsReward > 0;
    return (0, s.jsx)(v.EO, {
        transitionState: l,
        "hide-shadow": !0,
        parentComponent: "SocialLayerStorefrontProductDetailsModal",
        className: ev.CR,
        size: v.rI.DYNAMIC,
        returnRef: t,
        children: (0, s.jsxs)(v.$m, {
            className: ev.jE,
            children: [
                eR &&
                    (0, s.jsx)(eT, {
                        timeRemaining: ex ?? void 0,
                        text: K.intl.format(K.t.d3njXi, { orbCount: D.orbsReward }),
                    }),
                (0, s.jsxs)("div", {
                    className: ev.nr,
                    children: [
                        (0, s.jsxs)("div", {
                            className: ev.op,
                            children: [
                                (0, s.jsx)("div", {
                                    className: ev.r$,
                                    children:
                                        null != ey
                                            ? (0, s.jsx)("img", { className: ev.wm, src: ey, alt: eb?.title ?? "" })
                                            : null,
                                }),
                                (0, s.jsxs)("div", {
                                    ref: X,
                                    className: ev.zD,
                                    children: [
                                        D.exclusive &&
                                            (0, s.jsx)("div", { className: ev.K3, children: (0, s.jsx)(er.I, {}) }),
                                        en
                                            ? (0, s.jsxs)(s.Fragment, {
                                                  children: [
                                                      (0, s.jsx)(eA, { sku: D }),
                                                      (0, s.jsx)("div", {
                                                          className: ev._D,
                                                          children: (0, s.jsx)(ei, {
                                                              mediaItems: W,
                                                              labels: J.map((e) => e.label),
                                                              selectedIndex: el,
                                                              onSelectIndex: ec,
                                                          }),
                                                      }),
                                                      (0, s.jsx)(eS, {
                                                          selectedCarouselItem: et,
                                                          title: et?.title,
                                                          description: et?.description,
                                                          applicationId: i,
                                                          className: ev.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, s.jsx)(eS, {
                                                  selectedCarouselItem: et,
                                                  title: D.name,
                                                  description: D.description,
                                                  applicationId: i,
                                                  className: ev.cP,
                                              }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: o()(ev.Td, { [ev.t7]: V }),
                                    children: [
                                        (0, s.jsx)(ek, { sku: D }),
                                        (0, s.jsx)(e_, {
                                            sku: D,
                                            guildId: j,
                                            shouldShowShopLink: !r,
                                            giftRecipient: u?.id !== g ? u : void 0,
                                            giftingOrigin: u?.id !== g ? d : void 0,
                                            trackPDPClick: eo,
                                            analyticsLocations: b,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: ev.il,
                            children: [
                                (0, s.jsx)(ej, { item: W[el], isMuted: R, alt: et?.label ?? D.name }),
                                (0, s.jsxs)("div", {
                                    className: ev.V7,
                                    children: [
                                        null != D &&
                                            (0, s.jsx)(eg._, {
                                                sku: D,
                                                isCardHovered: !0,
                                                className: o()(ev.jU, ev.ij),
                                                trackButtonClick: ed,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, s.jsx)(eI, {
                                            onClick: eu,
                                            ariaLabel: K.intl.string(K.t.Ej3B3Y),
                                            children: (0, s.jsx)(L.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        ea &&
                                            (0, s.jsx)(eI, {
                                                onClick: em,
                                                ariaLabel: R ? K.intl.string(K.t.YqAjXy) : K.intl.string(K.t.w4m945),
                                                children: R
                                                    ? (0, s.jsx)(A._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, s.jsx)(k.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, s.jsx)(eI, {
                                            onClick: h,
                                            ariaLabel: K.intl.string(K.t.cpT0Cq),
                                            children: (0, s.jsx)(_.d, { size: "refresh_sm", color: "currentColor" }),
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
function eT(e) {
    let { timeRemaining: l, text: t } = e;
    return (0, s.jsxs)("div", {
        className: ev.pP,
        children: [
            (0, s.jsxs)("div", {
                className: ev.Wi,
                children: [
                    (0, s.jsx)(h.C, { size: "refresh_sm", color: "currentColor" }),
                    (0, s.jsx)(m.E, { variant: "text-sm/semibold", color: "currentColor", children: t }),
                ],
            }),
            null != l && (0, s.jsx)(m.E, { variant: "text-sm/medium", color: "currentColor", children: l }),
        ],
    });
}
var ey = t(615300),
    eR = t(456412),
    eL = t(133296),
    eO = t(848752),
    eU = t(452282),
    eD = t(625494),
    eM = t(55607);
let eP = (e) => (0, em.$o)({ ...e, className: eM.tN, mediaPlayerClassName: eM.yf }),
    ew = (e) => (0, s.jsx)(ed.Ay, { ...e });
function eY(e) {
    let l = "videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src,
        [t, s] = (0, R.rh)(l, "#000000"),
        a = n.useMemo(() => {
            let e = i()(t).darken(1);
            return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
        }, [t]);
    return null != l && "#000000" !== t ? a : void 0;
}
function eB(e) {
    let { item: l, onPlay: t, onEnded: n, onClick: a, playable: i, isMuted: r } = e,
        o = eY(l),
        c = (0, s.jsx)(
            eu.rr,
            {
                href: null,
                thumbnail: { url: l.videoThumbnailSrc, width: 747, height: 560 },
                video: { url: l.src, proxyURL: l.src, width: 747, height: 560 },
                provider: void 0,
                allowFullScreen: !0,
                maxHeight: 560,
                maxWidth: 747,
                onPlay: t,
                onEnded: n,
                playable: i,
                className: eM.Ki,
                volume: 1,
                autoMute: r,
                autoPlay: i,
                renderVideoComponent: eP,
                renderImageComponent: ew,
                renderLinkComponent: em.bU,
            },
            r ? "player-muted" : "player-unmuted",
        ),
        u = { background: o };
    return i
        ? (0, s.jsx)("div", { className: eM.AU, style: u, children: c })
        : (0, s.jsx)(C.D, { className: eM.AU, onClick: a, style: u, children: c });
}
function eq(e) {
    let { item: l, setHasInteracted: t, onSetItem: n, isCurrentItem: a, itemIndex: i } = e,
        r = { background: eY(l) };
    return a
        ? (0, s.jsx)(C.D, {
              onClick: () => t(!0),
              className: eM.AU,
              style: r,
              children: (0, s.jsx)("img", { src: l.src, alt: "", className: eM.NP }),
          })
        : (0, s.jsx)(C.D, {
              onClick: () => n(i),
              className: eM.AU,
              style: r,
              children: (0, s.jsx)("img", { alt: "", className: eM.tv, src: l.src, draggable: !1 }),
          });
}
let eH = (0, eR.A)((e) => {
    let {
            items: l,
            className: t,
            paused: a = !1,
            autoplayInterval: i = 8e3,
            onItemChange: r,
            isMuted: c = !0,
            onTrackClick: u,
        } = e,
        d = (0, n.useRef)(0),
        [m, x] = (0, n.useState)(0),
        [h, b] = (0, n.useState)(0),
        j = (0, n.useRef)(0),
        g = (0, n.useRef)(l.length),
        [C, f] = (0, n.useState)(!0),
        [p, v] = (0, n.useState)(!1),
        [A, k] = (0, n.useState)(!1),
        [_, N] = (0, n.useState)(!1),
        [I, S] = (0, n.useState)(!1),
        E = (0, n.useCallback)(
            (e, t) => {
                let s = l[e]?.backgroundSrc,
                    n = t.interpolate({ inputRange: [0, 1], outputRange: [1, 0], extrapolate: ey.A.Extrapolate.CLAMP });
                return {
                    opacity: t.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.3, 1],
                        extrapolate: ey.A.Extrapolate.CLAMP,
                    }),
                    filter: ey.A.template`grayscale(${n})`,
                    backgroundImage: null != s ? `url(${s})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                };
            },
            [l],
        ),
        T = (0, n.useCallback)(function (e) {
            let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            v(!1), k(l);
            let t = g.current,
                s = (0, eU.U3)(j.current, t),
                n = (0, eU.U3)(e, t);
            (j.current = n),
                b(n),
                d.current++,
                x(d.current),
                f(1 === Math.abs(n - s) || (n === t - 1 && 0 === s) || (0 === n && s === t - 1));
        }, []),
        y = (0, n.useCallback)(() => {
            T(j.current + 1, !1);
        }, [T]),
        R = (0, n.useCallback)(() => {
            u?.(eC.Jq.CAROUSEL_NEXT), T(j.current + 1);
        }, [T, u]),
        L = (0, n.useCallback)(() => {
            u?.(eC.Jq.CAROUSEL_PREV), T(j.current - 1);
        }, [T, u]),
        O = (0, n.useCallback)((e) => {
            v(!0), k(!e);
        }, []),
        U = (0, n.useCallback)(() => {
            A || y();
        }, [A, y]),
        D = (0, n.useCallback)((e) => {
            let l = j.current;
            e < l ? N(!0) : e > l && S(!0);
        }, []),
        M = (0, n.useCallback)(() => {
            N(!1), S(!1);
        }, []),
        P = (0, n.useCallback)(
            (e, l, t) =>
                (0, s.jsx)(eq, {
                    item: e,
                    itemIndex: l,
                    isCurrentItem: t,
                    onSetItem: (e) => {
                        u?.(eC.Jq.CAROUSEL_ITEM), T(e);
                    },
                    setHasInteracted: k,
                }),
            [T, u],
        ),
        w = (0, n.useCallback)(
            (e, t, n) => {
                let a = t === (0, eU.U3)(h, l.length);
                return (0, s.jsx)(ey.A.div, {
                    className: o()(eM.AS, { [eM.Xt]: a }),
                    style: null != n ? E(t, n) : null,
                    onMouseEnter: a ? null : () => D(t),
                    onMouseLeave: a ? null : M,
                    children:
                        "video" === e.type
                            ? (0, s.jsx)(
                                  eB,
                                  {
                                      item: e,
                                      onPlay: O,
                                      onEnded: U,
                                      playable: a,
                                      isMuted: c,
                                      onClick: () => {
                                          u?.(eC.Jq.CAROUSEL_ITEM), T(t);
                                      },
                                  },
                                  m,
                              )
                            : P(e, t, a),
                });
            },
            [h, l.length, E, D, M, O, U, T, P, c, u, m],
        ),
        Y = (0, n.useCallback)(() => {
            let e = (0, s.jsx)(eU.Ay, {
                className: eM.Dk,
                items: l,
                itemSize: { width: 747, margin: 0 },
                renderItem: w,
                currentIndex: h,
                animate: C,
                edgeItems: 2,
            });
            return l.length <= 1
                ? e
                : (0, s.jsxs)("div", {
                      className: eM.HY,
                      children: [
                          e,
                          (0, s.jsx)(eO.Q8, { onClick: L, className: o()(eM.UE, { [eM.h_]: _ }) }),
                          (0, s.jsx)(eO.Oj, { onClick: R, className: o()(eM.UE, { [eM.h_]: I }) }),
                      ],
                  });
        }, [l, w, h, C, L, R, _, I]),
        B = (0, n.useCallback)(
            (e, l) => {
                let t = h === l;
                return (0, s.jsx)(
                    "div",
                    {
                        className: o()(eM.Yw, t ? eM.sM : eM.N7),
                        children: (0, s.jsx)("img", {
                            alt: "",
                            className: eM.Pr,
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
                    `page-${l}`,
                );
            },
            [h],
        );
    (0, n.useEffect)(
        () => (
            eD._.subscribe(ep.jej.CAROUSEL_PREV, L),
            eD._.subscribe(ep.jej.CAROUSEL_NEXT, R),
            () => {
                eD._.unsubscribe(ep.jej.CAROUSEL_PREV, L), eD._.unsubscribe(ep.jej.CAROUSEL_NEXT, R);
            }
        ),
        [L, R],
    ),
        (0, n.useEffect)(() => {
            g.current = l.length;
        }, [l]),
        (0, n.useEffect)(() => {
            r?.(l[h], h);
        }, [h, l, r]);
    let q = (0, n.useCallback)(
        (e) => {
            u?.(eC.Jq.CAROUSEL_ITEM), T(e);
        },
        [T, u],
    );
    return (0, s.jsxs)(eL.A, {
        pauseOnHover: !0,
        onInterval: y,
        interval: i,
        className: t,
        disable: p || A || a,
        children: [
            Y(),
            (0, s.jsx)("div", {
                className: eM.X$,
                children: (0, s.jsx)(eO.Ay, {
                    renderItem: B,
                    scrollToPadding: 40,
                    items: l,
                    selectedIndex: h,
                    onSetItem: q,
                    paginationContainerClass: eM.XG,
                    align: eO.Ay.Align.CENTER,
                }),
            }),
        ],
    });
});
var eF = t(199138);
function e$(e, l, t) {
    let s = [],
        n = [];
    if (null == e || 0 === e.length) return [s, n];
    for (let a of e) {
        let e = null != a.assetId ? t[a.assetId] : null;
        null != e &&
            (s.push(a),
            e.mime_type.startsWith("video/")
                ? n.push({
                      type: "video",
                      src: (0, q.YE)(l, e, 747, "mp4"),
                      videoThumbnailSrc: (0, q.YE)(l, e, 747, "webp"),
                      thumbnailSrc: null != a.thumbnailAssetId ? (0, q.YE)(l, a.thumbnailAssetId, 112, "webp") : void 0,
                      backgroundSrc:
                          null != a.backgroundAssetId ? (0, q.YE)(l, a.backgroundAssetId, 747, H.pV) : void 0,
                  })
                : n.push({
                      type: "image",
                      src: (0, q.YE)(l, e, 747, "webp"),
                      thumbnailSrc: null != a.thumbnailAssetId ? (0, q.YE)(l, a.thumbnailAssetId, 112, "webp") : void 0,
                      backgroundSrc:
                          null != a.backgroundAssetId ? (0, q.YE)(l, a.backgroundAssetId, 747, H.pV) : void 0,
                  }));
    }
    return [s, n];
}
function eG(e) {
    let { sku: l } = e,
        { normalPrice: t, discountedPrice: n, discountPercent: a } = (0, O.CD)({ sku: l });
    return null == t
        ? null
        : null != a && null != n
          ? (0, s.jsxs)("div", {
                className: eF.TS,
                children: [
                    (0, s.jsx)(u.D, {
                        className: eF.of,
                        variant: "heading-md/medium",
                        color: "text-muted",
                        lineClamp: 1,
                        children: t,
                    }),
                    (0, s.jsx)(u.D, { variant: "heading-md/bold", color: "text-strong", children: n }),
                    (0, s.jsxs)(u.D, {
                        variant: "heading-md/bold",
                        color: "text-feedback-positive",
                        lineClamp: 1,
                        children: ["(", a, ")"],
                    }),
                ],
            })
          : (0, s.jsx)(u.D, { variant: "heading-md/semibold", color: "text-strong", children: t });
}
function eJ(e) {
    let {
            sku: l,
            guildId: t,
            shouldShowShopLink: a,
            giftRecipient: i,
            giftingOrigin: r,
            trackPDPClick: o,
            analyticsLocations: C,
        } = e,
        f = l?.id,
        p = (0, c.bG)([$.A], () => (null != f ? $.A.getNormalizedSKUEligibility(f) : void 0), [f]),
        v = Q(),
        A = W({ location: "product_details_modal" }),
        k = (0, O.JL)({ sku: l });
    (0, D.W)({ disableFetch: !A });
    let _ = (0, y.h)(l?.applicationId),
        N = n.useCallback(() => {
            null != l &&
                null != t &&
                (o(eC.Jq.BUY_BUTTON),
                (0, en.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...C, E.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                ));
        }, [l, o, t, C]),
        I = n.useCallback(() => {
            null != t && (0, Z.X)({ guildId: t });
        }, [t]),
        S = n.useCallback(() => {
            null != t && (o(eC.Jq.VISIT_SHOP), (0, d.closeAllModals)(), (0, Z.default)({ guildId: t }));
        }, [t, o]),
        T = n.useCallback(() => {
            null != l &&
                (o(eC.Jq.GIFT_BUTTON),
                (0, en.a)(
                    l,
                    { isGift: !0, giftRecipient: i, giftingOrigin: r },
                    { analyticsLocations: [...C, E.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [l, o, i, r, C]),
        R = n.useCallback(() => {
            if (null == l || null == _ || !A) return;
            o(eC.Jq.BUY_WITH_ORBS_BUTTON);
            let e = [...C, E.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON];
            (0, M.B4)({
                skuId: l.id,
                applicationId: l.applicationId,
                onCheckoutSuccess: () => {
                    (0, et.j)(), (0, el.n)({ sku: l, application: _, analyticsLocations: e });
                },
                analyticsLocations: e,
            });
        }, [l, o, C, _, A]);
    return null == l
        ? null
        : (0, s.jsxs)("div", {
              className: eF.wt,
              children: [
                  l.exclusive && (0, s.jsx)("div", { className: eF.K3, children: (0, s.jsx)(er.I, {}) }),
                  (0, s.jsxs)("div", {
                      className: eF.AX,
                      children: [
                          (0, s.jsx)(u.D, { variant: "heading-xl/bold", color: "text-strong", children: l.name }),
                          (0, s.jsx)(m.E, { variant: "text-sm/medium", color: "text-subtle", children: l.description }),
                      ],
                  }),
                  (0, s.jsxs)("div", {
                      className: eF.sj,
                      children: [
                          (0, s.jsx)(eo.V, {}),
                          (0, s.jsx)(eG, { sku: l }),
                          null != l.orbsReward &&
                              l.orbsReward > 0 &&
                              (0, s.jsx)(eQ, {
                                  timeRemaining: v ?? void 0,
                                  text: K.intl.format(K.t.d3njXi, { orbCount: l.orbsReward }),
                              }),
                      ],
                  }),
                  (0, s.jsxs)("div", {
                      className: eF.NC,
                      children: [
                          !p &&
                              (0, s.jsx)(m.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children: K.intl.string(K.t.IqlPbQ),
                              }),
                          p &&
                              (0, s.jsx)(x.$, {
                                  variant: "primary",
                                  onClick: N,
                                  text: K.intl.string(K.t.boqtTA),
                                  fullWidth: !0,
                              }),
                          A &&
                              p &&
                              null != k &&
                              (0, s.jsx)(x.$, {
                                  icon: h.C,
                                  variant: "secondary",
                                  onClick: R,
                                  text: K.intl.format(K.t.lOtBOI, {
                                      orbPrice: k.amount,
                                      orbIconHook: () =>
                                          (0, s.jsx)(h.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                  }),
                                  fullWidth: !0,
                              }),
                          (0, s.jsxs)(b.e, {
                              wrap: !1,
                              fullWidth: !0,
                              children: [
                                  a
                                      ? (0, s.jsx)(x.$, {
                                            icon: j.U,
                                            variant: "secondary",
                                            onMouseDown: I,
                                            onClick: S,
                                            text: K.intl.string(K.t["2QW9nR"]),
                                            fullWidth: !0,
                                        })
                                      : null,
                                  (0, s.jsx)(x.$, {
                                      icon: g.o,
                                      variant: "secondary",
                                      onClick: T,
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
function eW(e) {
    let { sku: l, applicationId: t, assets: a, onSelectedCarouselItemChange: i, isMuted: r, trackPDPClick: o } = e,
        [c, u] = n.useState([]),
        [d, m] = n.useState([]),
        x = n.useCallback(
            (e) => {
                let l = d.findIndex((l) => l === e);
                i?.(c[l] ?? null);
            },
            [i, c, d],
        );
    return (n.useEffect(() => {
        let [e, s] = e$(l?.tenantMetadata?.socialLayer?.carouselItems ?? [], t, a);
        u(e), m(s);
    }, [l, a, t]),
    0 === d.length)
        ? null
        : (0, s.jsx)(eH, { className: eF.Dk, items: d, onItemChange: x, isMuted: r, onTrackClick: o });
}
function ez(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let n = null != l.labelIconAssetId ? (0, q.YE)(t, l.labelIconAssetId) : null;
    return (0, s.jsxs)("div", {
        className: eF.HI,
        children: [
            null != n && (0, s.jsx)("img", { className: eF.IX, src: n, alt: l.label }, n),
            (0, s.jsx)(m.E, { variant: "text-xs/medium", color: "text-strong", children: l.label }),
        ],
    });
}
function eX(e) {
    let { onClick: l, children: t, ariaLabel: n } = e;
    return (0, s.jsx)(C.D, { onClick: l, className: eF.jU, "aria-label": n, role: "button", children: t });
}
function eV(e) {
    return !(function (e) {
        let { location: l } = e;
        return z.useConfig({ location: l }).enabled;
    })({ location: "product_details_modal" })
        ? (0, s.jsx)(eK, { ...e })
        : (0, s.jsx)(eE, { ...e });
}
function eK(e) {
    let {
            transitionState: l,
            returnRef: t,
            skuId: a,
            applicationId: r,
            isStorefront: u,
            giftRecipient: d,
            giftingOrigin: m,
            analyticsLocations: x,
            analyticsContext: h,
            onClose: b,
        } = e,
        { analyticsLocations: j } = (0, T.Ay)(x ?? []),
        { guildId: g } = (0, H.nG)(r),
        C = (0, c.bG)([w.default], () => w.default.getId());
    n.useEffect(() => {
        null != g && null != a && (0, F.iR)(g, a);
    }, [g, a]);
    let N = (0, c.bG)([$.A], () => $.A.getStorefrontMetadata(r), [r]),
        E = (0, c.bG)([$.A], () => $.A.getSkuAssets()),
        y = (0, c.bG)([Y.A], () => Y.A.isFetchingForSKU(a)),
        O = (0, f.M)((0, S.Ay)()),
        [D, M] = n.useState(!0),
        G = (0, U.A)({ skuId: a, location: "SocialLayerStorefrontProductDetailsModal" }),
        [J, W] = n.useState(null),
        z = (function (e, l) {
            let t = l?.labelIconAssetId != null ? (0, q.YE)(e, l?.labelIconAssetId) : null,
                [s, a] = (0, R.rh)(t, "#000000"),
                r = n.useMemo(() => {
                    let e = i()(s).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [s]);
            return null != t && "#000000" !== s ? r : void 0;
        })(r, J);
    (0, P.pE)(),
        (0, I.Ay)(() => {
            B.default.track(ep.HAw.OPEN_MODAL, { location_stack: j, type: ef.Nh, sku_id: a, application_id: r }),
                (0, F.Xw)();
        });
    let X = n.useCallback(
        (e) => {
            B.default.track(ep.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                slayer_storefront_session_id: h?.sessionId,
                sku_id: a,
                guild_id: h?.guildId,
                cta_type: e,
                location_stack: j,
            });
        },
        [h, a, j],
    );
    n.useEffect(() => {
        null == g || null == a || Y.A.isFetchingForSKU(a) || (0, F.qf)(g, a);
    }, [g, a]);
    let V = n.useCallback(() => {
            null != G &&
                null != g &&
                (X(eC.Jq.FORWARD_BUTTON),
                (0, ee.d)({
                    sku: G,
                    guildId: g,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: j,
                    analyticsContext: h,
                }));
        }, [G, g, X, j, h]),
        Q = n.useCallback(() => {
            X(eC.Jq.WISHLIST_BUTTON);
        }, [X]),
        Z = n.useCallback(() => {
            M(!D), X(eC.Jq.MUTE_BUTTON);
        }, [D, X]);
    if (null == G?.tenantMetadata?.socialLayer) return y ? (0, s.jsx)(p.y, {}) : null;
    let el = N?.logoAssetId != null ? (0, q.YE)(r, N.logoAssetId, 75) : null,
        et = N?.lightThemeLogoAssetId != null ? (0, q.YE)(r, N.lightThemeLogoAssetId, 75) : null,
        es = null;
    return (
        (es = O ? (el ?? et) : (et ?? el)),
        (0, s.jsx)(v.EO, {
            transitionState: l,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: eF.CR,
            size: v.rI.DYNAMIC,
            returnRef: t,
            children: (0, s.jsxs)(v.$m, {
                className: eF.jE,
                children: [
                    (0, s.jsxs)("div", {
                        className: eF.op,
                        style: { background: z },
                        children: [
                            (0, s.jsx)("div", {
                                className: eF.r$,
                                children: null != es ? (0, s.jsx)("img", { className: eF.wm, src: es, alt: "" }) : null,
                            }),
                            (0, s.jsx)(ez, { applicationId: r, selectedCarouselItem: J }),
                            (0, s.jsx)(eJ, {
                                sku: G,
                                guildId: g,
                                shouldShowShopLink: !u,
                                giftRecipient: d?.id !== C ? d : void 0,
                                giftingOrigin: d?.id !== C ? m : void 0,
                                trackPDPClick: X,
                                analyticsLocations: j,
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: eF.Cf,
                        children: [
                            (0, s.jsx)(eW, {
                                sku: G,
                                applicationId: r,
                                assets: E,
                                onSelectedCarouselItemChange: W,
                                isMuted: D,
                                trackPDPClick: X,
                            }),
                            (0, s.jsxs)("div", {
                                className: eF.V7,
                                children: [
                                    null != G &&
                                        (0, s.jsx)(eg._, {
                                            sku: G,
                                            isCardHovered: !0,
                                            className: o()(eF.jU, eF.ij),
                                            trackButtonClick: Q,
                                            variant: "overlay-secondary",
                                            location: "social_layer_storefront_product_details_modal",
                                        }),
                                    (0, s.jsx)(eX, {
                                        onClick: V,
                                        ariaLabel: K.intl.string(K.t.Ej3B3Y),
                                        children: (0, s.jsx)(L.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, s.jsx)(eX, {
                                        onClick: Z,
                                        ariaLabel: D ? K.intl.string(K.t.YqAjXy) : K.intl.string(K.t.w4m945),
                                        children: D
                                            ? (0, s.jsx)(A._, { size: "refresh_sm", color: "currentColor" })
                                            : (0, s.jsx)(k.H, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, s.jsx)(eX, {
                                        onClick: b,
                                        ariaLabel: K.intl.string(K.t.cpT0Cq),
                                        children: (0, s.jsx)(_.d, { size: "refresh_sm", color: "currentColor" }),
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
function eQ(e) {
    let { timeRemaining: l, text: t } = e;
    return (0, s.jsx)(N.A, {
        className: eF.qw,
        Icon: h.C,
        children: (0, s.jsxs)("div", {
            className: eF.Yu,
            children: [
                (0, s.jsxs)(m.E, {
                    variant: "text-xs/bold",
                    color: "currentColor",
                    children: [K.intl.string(K.t.yYEZGi), null != l && ` (${l})`],
                }),
                (0, s.jsx)("div", {
                    className: eF.fb,
                    children: (0, s.jsx)(m.E, { variant: "text-xs/medium", color: "currentColor", children: t }),
                }),
            ],
        }),
    });
}
