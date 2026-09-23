t.d(l, { default: () => eH });
var s = t(477900),
    n = t(582128),
    i = t(503698),
    r = t.n(i),
    a = t(17928),
    o = t(935462),
    c = t(297264),
    d = t(834730),
    u = t(318254),
    m = t(821609),
    x = t(939249),
    h = t(597770),
    b = t(366010),
    p = t(192308),
    j = t(289873),
    _ = t(34188),
    N = t(358618),
    g = t(983851),
    f = t(972213),
    C = t(964486),
    I = t(736653),
    A = t(793574),
    E = t(688810),
    k = t(429913),
    v = t(427209),
    T = t(288106),
    O = t(993046),
    S = t(801228),
    y = t(652165),
    R = t(594832),
    D = t(280450),
    L = t(67480),
    P = t(174459),
    U = t(371794),
    H = t(871123),
    w = t(733391),
    B = t(832163),
    G = t(429635),
    M = t(69236),
    Y = t(2157),
    q = t(44724);
t(321073);
var F = t(345938),
    z = t(510022),
    J = t(317560),
    $ = t(99161),
    W = t(375708),
    V = t(698132);
function X(e) {
    let { mediaItems: l, labels: t, selectedIndex: n, onSelectIndex: i } = e;
    return l.length <= 1
        ? null
        : (0, s.jsxs)("div", {
              className: V.kL,
              children: [
                  (0, s.jsx)(d.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: W.intl.string(W.t.U7DAV9),
                  }),
                  (0, s.jsx)("div", {
                      className: V.Vg,
                      children: l.map((e, l) =>
                          (0, s.jsx)(
                              x.D,
                              {
                                  className: r()(V.xn, { [V.Y4]: l === n }),
                                  onClick: () => i(l),
                                  "aria-label": t?.[l],
                                  "aria-pressed": l === n,
                                  children: (0, s.jsx)("img", {
                                      className: V.q_,
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
var K = t(263911),
    Q = t(971146),
    Z = t(696292),
    ee = t(617986),
    el = t(817519);
function et(e) {
    let { orbsGate: l, orbPrice: t, onCheckout: i, onTrackEarnMoreOrbs: r, variant: a = "secondary" } = e,
        o = n.useCallback(() => {
            (r(), (0, ee.mA)({ fromContent: Z.u.SOCIAL_LAYER_STOREFRONT }), (0, J.j)());
        }, [r]);
    return "HIDDEN" === l || null == t
        ? null
        : "NOT_ENOUGH_ORBS" === l
          ? (0, s.jsx)(m.$, { onClick: o, variant: a, icon: u.C, text: W.intl.string(W.t.H57f41), fullWidth: !0 })
          : (0, s.jsx)(m.$, {
                onClick: i,
                disabled: "NEEDS_NITRO" === l,
                variant: a,
                text: (0, s.jsx)("span", {
                    className: el.Y,
                    children: W.intl.format(W.t.lOtBOI, {
                        orbPrice: t.amount,
                        orbIconHook: () => (0, s.jsx)(u.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                    }),
                }),
                fullWidth: !0,
            });
}
var es = t(310784),
    en = t.n(es),
    ei = t(775602),
    er = t(654107),
    ea = t(175671),
    eo = t(619517),
    ec = t(85935),
    ed = t(549100);
function eu(e) {
    return (0, ec.$o)({ ...e, className: ed.tN, mediaPlayerClassName: ed.yf });
}
function em(e) {
    return (0, s.jsx)(eo.Ay, { ...e });
}
function ex(e) {
    let { item: l, isMuted: t, className: i, alt: r = "" } = e,
        o = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, er.rh)(l, "#000000");
            return n.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = en()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        c = (0, a.bG)([ei.Ay], () => ei.Ay.useReducedMotion),
        [d, u] = n.useState(null),
        [m, x] = n.useState(l);
    m !== l && (x(l), m?.type === "image" && l?.type === "image" && m.src !== l.src ? u(m.src) : u(null));
    let h = n.useCallback(() => u(null), []);
    if (null == l) return null;
    let b = {
        background: o,
        backgroundImage: null != l.backgroundSrc ? `url(${l.backgroundSrc})` : void 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    return "video" === l.type
        ? (0, s.jsx)("div", {
              className: i ?? ed.kL,
              children: (0, s.jsx)(
                  "div",
                  {
                      className: `${ed.h4} ${ed.nR}`,
                      style: b,
                      children: (0, s.jsx)(
                          ea.rr,
                          {
                              href: null,
                              thumbnail: { url: l.videoThumbnailSrc, width: 747, height: 560 },
                              video: { url: l.src, proxyURL: l.src, width: 747, height: 560 },
                              provider: void 0,
                              allowFullScreen: !0,
                              maxHeight: 560,
                              maxWidth: 747,
                              playable: !0,
                              className: ed.Ki,
                              volume: 1,
                              autoMute: t,
                              autoPlay: !0,
                              renderVideoComponent: eu,
                              renderImageComponent: em,
                              renderLinkComponent: ec.bU,
                          },
                          `${l.src}-${t ? "muted" : "unmuted"}`,
                      ),
                  },
                  l.src,
              ),
          })
        : (0, s.jsx)("div", {
              className: i ?? ed.kL,
              children: (0, s.jsxs)("div", {
                  className: ed.h4,
                  style: b,
                  children: [
                      (0, s.jsx)("img", { src: l.src, alt: r, className: ed.Sl }, l.src),
                      null != d && !c && (0, s.jsx)("img", { src: d, alt: "", className: ed.Ve, onAnimationEnd: h }, d),
                  ],
              }),
          });
}
var eh = t(821707),
    eb = t(320448),
    ep = t(403581),
    ej = t(75678),
    e_ = t(910200),
    eN = t(202541),
    eg = t(206285),
    ef = t(456902);
function eC(e) {
    let { orbsGate: l, onTrackClickNitroUpsell: t, applicationId: i, analyticsLocations: r } = e,
        o = (0, a.bG)([B.A], () => B.A.getConfigForApplicationId(i)),
        c = n.useCallback(() => {
            (t(), (0, ej.A)({ subscriptionTier: eN.pe.TIER_2, analyticsLocations: r, applicationId: i }));
        }, [r, i, t]);
    return "HIDDEN" === l
        ? null
        : "NEEDS_NITRO" === l
          ? (0, s.jsx)(x.D, {
                className: ef.L,
                onClick: c,
                children: (0, s.jsx)(e_.Ay, {
                    Icon: ep.t,
                    gradientColor: "nitro-pink",
                    tooltip: W.intl.string(eg.default.XwadDC),
                    text: W.intl.string(eg.default.cg95CA),
                    trailing: (0, s.jsx)(eb._, { size: "xs" }),
                }),
            })
          : (0, s.jsx)(e_.O0, {
                Icon: ep.t,
                text: W.intl.string(eg.default.cg95CA),
                endDatetime: o?.promotionEndDatetime,
                gradientColor: "nitro-pink",
            });
}
var eI = t(454491),
    eA = t(743693),
    eE = t(995393),
    ek = t(188275),
    ev = t(652215),
    eT = t(338235);
function eO(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, s.jsxs)("div", {
              className: eT.AX,
              children: [
                  (0, s.jsx)(c.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, s.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function eS(e) {
    let { amount: l, orbGate: t } = e;
    return (0, s.jsxs)("div", {
        className: r()(eT.aX, { [eT.dQ]: "NEEDS_NITRO" === t || "NOT_ENOUGH_ORBS" === t }),
        children: [
            (0, s.jsx)(u.C, { size: "xs", color: "currentColor" }),
            (0, s.jsx)(d.E, { variant: "text-md/semibold", color: "currentColor", children: l }),
        ],
    });
}
function ey(e) {
    let { normalPrice: l, discountedPrice: t, discountPercent: n, hasNitroOffer: i } = e;
    return i && null != t
        ? (0, s.jsx)(eh.A, { discountedPrice: t, normalPrice: l })
        : null != n && null != t
          ? (0, s.jsxs)("div", {
                className: eT._k,
                children: [
                    (0, s.jsx)(d.E, { variant: "text-md/medium", className: eT.Jb, children: l }),
                    (0, s.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                    (0, s.jsx)(d.E, { variant: "text-md/bold", className: eT.Fi, children: n }),
                ],
            })
          : (0, s.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: l });
}
function eR(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: n, hasNitroOffer: i } = e,
        { normalPrice: a, discountedPrice: o, discountPercent: c } = n;
    if (null == a) return null;
    let d = "HIDDEN" !== t && null != l,
        u = "CAN_CHECKOUT" === t;
    return (0, s.jsxs)("div", {
        className: eT.sj,
        children: [
            (0, s.jsx)(Q.V, { textColor: "text-subtle" }),
            (0, s.jsx)("div", {
                className: r()(eT.hO, d && eT.XE),
                children:
                    d && u
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(eS, { amount: l.amount, orbGate: t }),
                                  (0, s.jsx)(ey, {
                                      normalPrice: a,
                                      discountedPrice: o,
                                      discountPercent: c,
                                      hasNitroOffer: i,
                                  }),
                              ],
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(ey, {
                                      normalPrice: a,
                                      discountedPrice: o,
                                      discountPercent: c,
                                      hasNitroOffer: i,
                                  }),
                                  d && (0, s.jsx)(eS, { amount: l.amount, orbGate: t }),
                              ],
                          }),
            }),
        ],
    });
}
function eD(e) {
    let {
            sku: l,
            guildId: t,
            giftRecipient: i,
            giftingOrigin: r,
            trackPDPClick: o,
            analyticsLocations: c,
            orbPrice: u,
            orbsGate: b,
            formattedPrice: p,
        } = e,
        j = l.id,
        _ = (0, a.bG)([B.A], () => B.A.getNormalizedSKUEligibility(j), [j]),
        N = _ && "CAN_CHECKOUT" === b,
        g = p.discountedPrice ?? p.normalPrice,
        f = n.useCallback(() => {
            (o(eE.Jq.BUY_BUTTON),
                (0, $.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...c, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                ));
        }, [l, o, t, c]),
        C = n.useCallback(() => {
            (o(eE.Jq.GIFT_BUTTON),
                (0, $.a)(
                    l,
                    { isGift: !0, giftRecipient: i, giftingOrigin: r },
                    { analyticsLocations: [...c, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [l, o, i, r, c]),
        I = (0, k.h)(l.applicationId),
        E = n.useMemo(() => [...c, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [c]),
        v = n.useCallback(() => {
            null != I &&
                (o(eE.Jq.BUY_WITH_ORBS_BUTTON),
                (0, y.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    onComplete: () => {
                        ((0, J.j)(), (0, z.n)({ sku: l, application: I, analyticsLocations: E }));
                    },
                    analyticsLocations: E,
                }));
        }, [l, I, E, o]),
        T = n.useCallback(() => {
            o(eE.Jq.EARN_MORE_ORBS_BUTTON);
        }, [o]),
        O = _
            ? (0, s.jsx)(et, {
                  orbsGate: b,
                  orbPrice: u,
                  onCheckout: v,
                  onTrackEarnMoreOrbs: T,
                  variant: N ? "primary" : "secondary",
              })
            : null,
        S = (0, s.jsxs)("div", {
            className: eT.mr,
            children: [
                (0, s.jsx)(m.$, {
                    variant: N ? "secondary" : "primary",
                    onClick: f,
                    text: null != g ? W.intl.format(W.t.YkXGyY, { priceString: g }) : W.intl.string(W.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, s.jsx)(x.D, {
                    className: eT.xP,
                    onClick: C,
                    "aria-label": W.intl.string(W.t.QAZA5f),
                    role: "button",
                    children: (0, s.jsx)(h.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        R = (0, s.jsx)(m.$, {
            icon: h.GiftIcon,
            variant: "secondary",
            onClick: C,
            text: W.intl.string(W.t.QAZA5f),
            fullWidth: !0,
        });
    return (0, s.jsxs)("div", {
        className: eT.NC,
        children: [
            !_ &&
                (0, s.jsx)(d.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: W.intl.string(W.t.IqlPbQ),
                }),
            N && O,
            _ ? S : R,
            !N && O,
        ],
    });
}
function eL(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let n = null != l.labelIconAssetId ? (0, U.YE)(t, l.labelIconAssetId) : null;
    return (0, s.jsxs)("div", {
        className: eT.HI,
        children: [
            null != n && (0, s.jsx)("img", { className: eT.IX, src: n, alt: "" }, n),
            (0, s.jsx)(d.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eP(e) {
    let { onClick: l, onMouseDown: t, children: n, ariaLabel: i, className: r = eT.jU } = e;
    return (0, s.jsx)(x.D, { onClick: l, onMouseDown: t, className: r, "aria-label": i, role: "button", children: n });
}
function eU(e) {
    let { selectedCarouselItem: l, title: t, description: n, applicationId: i, className: r } = e;
    return (0, s.jsxs)("div", {
        className: r,
        children: [
            null != t && (0, s.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
            (0, s.jsx)(eL, { applicationId: i, selectedCarouselItem: l }),
            null != n && (0, s.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
        ],
    });
}
function eH(e) {
    let {
            customNavigateToSocialLayerStorefront: l,
            transitionState: t,
            returnRef: i,
            skuId: c,
            applicationId: u,
            isStorefront: m,
            giftRecipient: x,
            giftingOrigin: h,
            analyticsLocations: A,
            analyticsContext: k,
            onClose: y,
        } = e,
        { analyticsLocations: z } = (0, E.Ay)(A ?? []),
        { guildId: J } = (0, H.nG)(u),
        $ = (0, a.bG)([D.default], () => D.default.getId());
    n.useEffect(() => {
        null != c && (0, w.iR)(u, c);
    }, [u, c]);
    let V = (0, G.A)({ applicationId: u }),
        Q = (0, a.bG)([B.A], () => B.A.getSkuAssets()),
        Z = (0, a.bG)([L.A], () => L.A.isFetching(c)),
        ee = (0, b.M)((0, I.Ay)()),
        [el, et] = n.useState(!0),
        es = (0, S.A)({ skuId: c }),
        en = (0, O.JL)({ sku: es }),
        { display: ei, reward: er, offers: ea } = (0, Y.b)({ surface: "pdp", applicationId: u, skuId: c }),
        eo = n.useMemo(() => ea.find((e) => e.type === T.B8.ORB_REDEMPTION) ?? null, [ea]),
        { state: ec, isReady: ed } = (0, M.we)({ orbPriceAmount: en?.amount, spendOrbsOffer: eo }),
        eu = (0, O.CD)({ sku: es }),
        [em, eh] = n.useState(0),
        [eb, ep] = n.useMemo(
            () =>
                (function (e, l, t, s) {
                    let { heroWidth: n } = s,
                        i = [],
                        r = [];
                    if (null == e || 0 === e.length) return [i, r];
                    for (let s of e) {
                        let e = null != s.assetId ? t[s.assetId] : null;
                        null != e &&
                            (i.push(s),
                            e.mime_type.startsWith("video/")
                                ? r.push({
                                      type: "video",
                                      src: (0, U.YE)(l, e, n, "mp4"),
                                      videoThumbnailSrc: (0, U.YE)(l, e, n, "webp"),
                                      thumbnailSrc:
                                          null != s.thumbnailAssetId
                                              ? (0, U.YE)(l, s.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != s.backgroundAssetId
                                              ? (0, U.YE)(l, s.backgroundAssetId, n, H.pV)
                                              : void 0,
                                  })
                                : r.push({
                                      type: "image",
                                      src: (0, U.YE)(l, e, n, "webp"),
                                      thumbnailSrc:
                                          null != s.thumbnailAssetId
                                              ? (0, U.YE)(l, s.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != s.backgroundAssetId
                                              ? (0, U.YE)(l, s.backgroundAssetId, n, H.pV)
                                              : void 0,
                                  }));
                    }
                    return [i, r];
                })(es?.tenantMetadata?.socialLayer?.carouselItems ?? [], u, Q, { heroWidth: 747 }),
            [es, u, Q],
        ),
        [ej, e_] = n.useState(null),
        [eN, eg] = n.useState(!1);
    n.useEffect(() => {
        if (null == ej) return;
        let e = new ResizeObserver(() => {
            eg(ej.scrollHeight > ej.clientHeight);
        });
        return (e.observe(ej), () => e.disconnect());
    }, [ej]);
    let ef = em < ep.length ? em : 0,
        eS = eb[ef] ?? null,
        ey = ep.length > 1,
        eL = ep.some((e) => "video" === e.type);
    ((0, R.pE)(),
        (0, C.Ay)(() => {
            (P.default.track(ev.HAw.OPEN_MODAL, { location_stack: z, type: ek.Nh, sku_id: c, application_id: u }),
                (0, w.Xw)());
        }));
    let eH = n.useCallback(
            (e) => {
                P.default.track(ev.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: k?.sessionId,
                    sku_id: c,
                    guild_id: k?.guildId,
                    application_id: u,
                    cta_type: e,
                    location_stack: z,
                });
            },
            [k, c, u, z],
        ),
        ew = n.useCallback(() => {
            eH(eE.Jq.NITRO_UPSELL_BUTTON);
        }, [eH]),
        eB = n.useRef(!1);
    n.useEffect(() => {
        !eB.current &&
            "HIDDEN" !== ec &&
            ed &&
            ((eB.current = !0),
            P.default.track(ev.HAw.SLAYER_STOREFRONT_ORBS_PURCHASE_GATE_VIEWED, {
                slayer_storefront_session_id: k?.sessionId,
                sku_id: c,
                guild_id: k?.guildId,
                application_id: u,
                orbs_purchase_gate_state: ec,
                orb_price: en?.amount,
                location_stack: z,
            }));
    }, [ec, ed, k, c, u, en, z]);
    let eG = n.useCallback(
        (e) => {
            (eh(e), eH(eE.Jq.CAROUSEL_ITEM));
        },
        [eH],
    );
    n.useEffect(() => {
        null == c || L.A.isFetching(c) || (0, w.Pp)(u, c);
    }, [u, c]);
    let eM = n.useCallback(() => {
            null != es &&
                (eH(eE.Jq.FORWARD_BUTTON),
                (0, F.d)({
                    sku: es,
                    guildId: J,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: z,
                    analyticsContext: k,
                }));
        }, [es, J, eH, z, k]),
        eY = n.useCallback(() => {
            eH(eE.Jq.WISHLIST_BUTTON);
        }, [eH]),
        eq = n.useCallback(() => {
            (0, q.G)({ applicationId: u });
        }, [u]),
        eF = n.useCallback(() => {
            (eH(eE.Jq.VISIT_SHOP), (0, p.closeAllModals)(), null != l ? l() : (0, q.default)({ applicationId: u }));
        }, [u, eH, l]),
        ez = n.useCallback(() => {
            (et(!el), eH(eE.Jq.MUTE_BUTTON));
        }, [el, eH]),
        eJ = es?.tenantMetadata?.socialLayer;
    if (null == es || null == eJ) return Z ? (0, s.jsx)(j.y, {}) : null;
    let e$ = V?.storefront,
        eW = e$?.logoAssetId != null ? (0, U.YE)(e$.applicationId, e$.logoAssetId, 256) : null,
        eV = e$?.lightThemeLogoAssetId != null ? (0, U.YE)(e$.applicationId, e$.lightThemeLogoAssetId, 256) : null,
        eX = null;
    return (
        (eX = ee ? (eW ?? eV) : (eV ?? eW)),
        (0, s.jsx)(o.EO, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: eT.CR,
            size: o.rI.DYNAMIC,
            returnRef: i,
            children: (0, s.jsx)(o.$m, {
                className: eT.jE,
                scrollbarGutter: !1,
                children: (0, s.jsxs)("div", {
                    className: eT.nr,
                    children: [
                        (0, s.jsxs)("div", {
                            className: r()(eT.op, { [eT.uk]: es.exclusive }),
                            children: [
                                (0, s.jsx)("div", {
                                    className: eT.r$,
                                    children:
                                        null != eX
                                            ? (0, s.jsx)("img", { className: eT.wm, src: eX, alt: e$?.title ?? "" })
                                            : null,
                                }),
                                (0, s.jsxs)("div", {
                                    ref: e_,
                                    className: eT.zD,
                                    children: [
                                        es.exclusive &&
                                            (0, s.jsx)("div", { className: eT.K3, children: (0, s.jsx)(K.I, {}) }),
                                        ey
                                            ? (0, s.jsxs)(s.Fragment, {
                                                  children: [
                                                      (0, s.jsx)(eO, { sku: es }),
                                                      (0, s.jsx)("div", {
                                                          className: eT._D,
                                                          children: (0, s.jsx)(X, {
                                                              mediaItems: ep,
                                                              labels: eb.map((e) => e.label),
                                                              selectedIndex: ef,
                                                              onSelectIndex: eG,
                                                          }),
                                                      }),
                                                      (0, s.jsx)(eU, {
                                                          selectedCarouselItem: eS,
                                                          title: eS?.title,
                                                          description: eS?.description,
                                                          applicationId: u,
                                                          className: eT.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, s.jsx)(eU, {
                                                  selectedCarouselItem: eS,
                                                  title: es.name,
                                                  description: es.description,
                                                  applicationId: u,
                                                  className: eT.cP,
                                              }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: r()(eT.Td, { [eT.t7]: eN }),
                                    children: [
                                        (0, s.jsx)(eR, {
                                            orbPrice: en,
                                            orbsGate: ec,
                                            formattedPrice: eu,
                                            hasNitroOffer: ei?.flavor === "nitro",
                                        }),
                                        "HIDDEN" !== ec &&
                                            (0, s.jsx)(eC, {
                                                analyticsLocations: z,
                                                applicationId: u,
                                                onTrackClickNitroUpsell: ew,
                                                orbsGate: ec,
                                            }),
                                        null != ei &&
                                            (0, s.jsx)(eI.e, {
                                                promotion: ei,
                                                reward: er,
                                                applicationId: u,
                                                analyticsLocations: z,
                                                onUpsellClick: () => eH(eE.Jq.NITRO_UPSELL_BUTTON),
                                            }),
                                        (0, s.jsx)(eD, {
                                            sku: es,
                                            guildId: J,
                                            giftRecipient: x?.id !== $ ? x : void 0,
                                            giftingOrigin: x?.id !== $ ? h : void 0,
                                            trackPDPClick: eH,
                                            analyticsLocations: z,
                                            orbPrice: en,
                                            orbsGate: ec,
                                            formattedPrice: eu,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: eT.il,
                            children: [
                                (0, s.jsx)(ex, { item: ep[ef], isMuted: el, alt: eS?.label ?? es.name }),
                                !m &&
                                    (0, s.jsxs)(eP, {
                                        onClick: eF,
                                        onMouseDown: eq,
                                        ariaLabel: W.intl.string(W.t["+v/1Dk"]),
                                        className: eT.gW,
                                        children: [
                                            (0, s.jsx)(_.U, { size: "refresh_sm", color: "currentColor" }),
                                            (0, s.jsx)(d.E, {
                                                variant: "text-md/medium",
                                                color: "currentColor",
                                                children: W.intl.string(W.t["+v/1Dk"]),
                                            }),
                                        ],
                                    }),
                                (0, s.jsxs)("div", {
                                    className: eT.V7,
                                    children: [
                                        null != es &&
                                            (0, s.jsx)(eA._, {
                                                sku: es,
                                                isCardHovered: !0,
                                                className: r()(eT.jU, eT.ij),
                                                trackButtonClick: eY,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, s.jsx)(eP, {
                                            onClick: eM,
                                            ariaLabel: W.intl.string(W.t.Ej3B3Y),
                                            children: (0, s.jsx)(v.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        eL &&
                                            (0, s.jsx)(eP, {
                                                onClick: ez,
                                                ariaLabel: el ? W.intl.string(W.t.YqAjXy) : W.intl.string(W.t.w4m945),
                                                children: el
                                                    ? (0, s.jsx)(N._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, s.jsx)(g.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, s.jsx)(eP, {
                                            onClick: y,
                                            ariaLabel: W.intl.string(W.t.cpT0Cq),
                                            children: (0, s.jsx)(f.XLargeIcon, {
                                                size: "refresh_sm",
                                                color: "currentColor",
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        })
    );
}
