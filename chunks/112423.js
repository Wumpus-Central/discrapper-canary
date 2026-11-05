t.d(l, { default: () => e$ });
var n = t(477900),
    s = t(582128),
    r = t(503698),
    a = t.n(r),
    i = t(855986),
    o = t(935462),
    c = t(534514),
    u = t(834730),
    d = t(318254),
    m = t(638495),
    x = t(821609),
    h = t(939249),
    b = t(597770),
    p = t(366010),
    j = t(192308),
    f = t(289873),
    _ = t(34188),
    N = t(358618),
    v = t(983851),
    I = t(972213),
    g = t(241524),
    k = t(964486),
    C = t(736653),
    A = t(793574),
    E = t(688810),
    T = t(429913),
    y = t(427209),
    S = t(977445),
    O = t(561573),
    R = t(288106),
    L = t(993046),
    D = t(801228),
    P = t(634110),
    U = t(46653),
    w = t(67480),
    M = t(129230),
    H = t(371794),
    Y = t(871123),
    B = t(733391),
    G = t(832163),
    q = t(429635),
    F = t(69236),
    W = t(723807),
    z = t(2157),
    $ = t(44724);
t(321073);
var J = t(898523),
    V = t(345938),
    X = t(510022),
    K = t(317560),
    Z = t(306984),
    Q = t(792996),
    ee = t(698132);
function el(e) {
    let { mediaItems: l, labels: t, selectedIndex: s, onSelectIndex: r } = e;
    return l.length <= 1
        ? null
        : (0, n.jsxs)("div", {
              className: ee.kL,
              children: [
                  (0, n.jsx)(u.E, {
                      variant: "body-xs/semibold",
                      color: "text-subtle",
                      children: Q.intl.string(Q.t.U7DAV9),
                  }),
                  (0, n.jsx)("div", {
                      className: ee.Vg,
                      children: l.map((e, l) =>
                          (0, n.jsx)(
                              h.D,
                              {
                                  className: a()(ee.xn, { [ee.Y4]: l === s }),
                                  onClick: () => r(l),
                                  "aria-label": t?.[l],
                                  "aria-pressed": l === s,
                                  children: (0, n.jsx)("img", {
                                      className: ee.q_,
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
var et = t(263911),
    en = t(971146),
    es = t(696292),
    er = t(321538),
    ea = t(817519);
function ei(e) {
    let { orbsGate: l, orbPrice: t, onCheckout: r, onTrackEarnMoreOrbs: a, variant: i = "secondary" } = e,
        o = (0, m.k)(),
        c = s.useCallback(() => {
            (a(), (0, er.mA)({ fromContent: es.u.SOCIAL_LAYER_STOREFRONT }), (0, K.j)(o));
        }, [a, o]);
    return "HIDDEN" === l || null == t
        ? null
        : "NOT_ENOUGH_ORBS" === l
          ? (0, n.jsx)(x.$, {
                onClick: c,
                variant: i,
                icon: d.OrbsIcon,
                text: Q.intl.string(Q.t.H57f41),
                fullWidth: !0,
            })
          : (0, n.jsx)(x.$, {
                onClick: r,
                disabled: "NEEDS_NITRO" === l,
                variant: i,
                text: (0, n.jsx)("span", {
                    className: ea.Y,
                    children: Q.intl.format(Q.t.lOtBOI, {
                        orbPrice: t.amount,
                        orbIconHook: () => (0, n.jsx)(d.OrbsIcon, { size: "xs", color: "currentColor" }, "orbs-icon"),
                    }),
                }),
                fullWidth: !0,
            });
}
var eo = t(310784),
    ec = t.n(eo),
    eu = t(775602),
    ed = t(654107),
    em = t(265705),
    ex = t(619517),
    eh = t(383055),
    eb = t(549100);
function ep(e) {
    return (0, eh.$o)({ ...e, className: eb.tN, mediaPlayerClassName: eb.yf });
}
function ej(e) {
    return (0, n.jsx)(ex.Ay, { ...e });
}
function ef(e) {
    let { item: l, isMuted: t, className: r, alt: a = "" } = e,
        o = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, ed.rh)(l, "#000000");
            return s.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = ec()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        c = (0, i.bG)([eu.Ay], () => eu.Ay.useReducedMotion),
        [u, d] = s.useState(null),
        [m, x] = s.useState(l);
    m !== l && (x(l), m?.type === "image" && l?.type === "image" && m.src !== l.src ? d(m.src) : d(null));
    let h = s.useCallback(() => d(null), []);
    if (null == l) return null;
    let b = {
        background: o,
        backgroundImage: null != l.backgroundSrc ? `url(${l.backgroundSrc})` : void 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    return "video" === l.type
        ? (0, n.jsx)("div", {
              className: r ?? eb.kL,
              children: (0, n.jsx)(
                  "div",
                  {
                      className: `${eb.h4} ${eb.nR}`,
                      style: b,
                      children: (0, n.jsx)(
                          em.rr,
                          {
                              href: null,
                              thumbnail: { url: l.videoThumbnailSrc, width: 747, height: 560 },
                              video: { url: l.src, proxyURL: l.src, width: 747, height: 560 },
                              provider: void 0,
                              allowFullScreen: !0,
                              maxHeight: 560,
                              maxWidth: 747,
                              playable: !0,
                              className: eb.Ki,
                              volume: 1,
                              autoMute: t,
                              autoPlay: !0,
                              disableClickToUnmute: !0,
                              renderVideoComponent: ep,
                              renderImageComponent: ej,
                              renderLinkComponent: eh.bU,
                          },
                          `${l.src}-${t ? "muted" : "unmuted"}`,
                      ),
                  },
                  l.src,
              ),
          })
        : (0, n.jsx)("div", {
              className: r ?? eb.kL,
              children: (0, n.jsxs)("div", {
                  className: eb.h4,
                  style: b,
                  children: [
                      (0, n.jsx)("img", { src: l.src, alt: a, className: eb.Sl }, l.src),
                      null != u && !c && (0, n.jsx)("img", { src: u, alt: "", className: eb.Ve, onAnimationEnd: h }, u),
                  ],
              }),
          });
}
var e_ = t(581487),
    eN = t(454491),
    ev = t(403581),
    eI = t(778705),
    eg = t(936785),
    ek = t(741899),
    eC = t(906383),
    eA = t(556766),
    eE = t(421108),
    eT = t(787844),
    ey = t(910200),
    eS = t(682901),
    eO = t(25082),
    eR = t(996712);
function eL(e) {
    let { offer: l, applicationId: t, analyticsLocations: r, onUpsellClick: a } = e,
        i = (0, eA.m)(t),
        o = s.useMemo(() => {
            let e = i?.[l.promotionId];
            return null == e
                ? null
                : {
                      Icon: (0, eg.LZ)(e.pdp?.icon ?? null),
                      text: "",
                      tooltip: null,
                      endsAt: (0, eg.RD)(e.endsAt),
                      flavor: e.flavor,
                      rewardRequirements: e.rewardRequirements,
                      rewardStatus: e.rewardStatus,
                  };
        }, [i, l.promotionId]),
        c = (0, eC.Pc)(o),
        u = (0, eE.tm)(o?.endsAt ?? null),
        d = (0, W.h)(o),
        m = (0, ek.N)("social_layer_storefront_product_details_modal"),
        h = s.useCallback(() => {
            (a(),
                (0, eI.A)({
                    subscriptionTier: eS.pe.TIER_2,
                    applicationId: t,
                    analyticsLocations: r,
                    ...(0, Y.zl)(o?.rewardRequirements ?? []),
                }));
        }, [a, t, r, o]);
    if (null == o || u || null == d || o.rewardStatus === R.GM.CONSUMED || null == m) return null;
    let { discountPercent: b } = m;
    return (0, eC.ad)(c)
        ? (0, n.jsx)(ey.Ay, {
              className: eR.l,
              gradientColor: "nitro-pink",
              text: Q.intl.format(eO.default.dWuM4X, { discountPercent: b }),
              trailing: (0, n.jsx)("div", {
                  className: eR.b,
                  children: (0, n.jsx)(x.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      icon: ev.NitroWheelIcon,
                      text: Q.intl.string(Q.t.pj0XBN),
                      onClick: h,
                  }),
              }),
          })
        : (0, n.jsx)(ey.Ay, {
              className: eR.l,
              gradientColor: "nitro-pink",
              Icon: ev.NitroWheelIcon,
              text: Q.intl.format(eO.default["1HXutk"], { discountPercent: b }),
              trailing: (0, n.jsx)("div", {
                  className: eR.b,
                  children: (0, n.jsx)(eT.d, {
                      applicationId: t,
                      coupon: d,
                      discountPercent: m.offerSkuId === d.skuId ? b : void 0,
                      analyticsLocations: r,
                      surface: "pdp",
                  }),
              }),
          });
}
var eD = t(743693),
    eP = t(249434),
    eU = t(995393),
    ew = t(188275),
    eM = t(652215),
    eH = t(338235);
function eY(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: eH.AX,
              children: [
                  (0, n.jsx)(c.D, { variant: "heading-lg/semibold", color: "text-strong", children: l.name }),
                  (0, n.jsx)(u.E, { variant: "body-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function eB(e) {
    let { amount: l, orbGate: t } = e;
    return (0, n.jsxs)("div", {
        className: a()(eH.aX, { [eH.dQ]: "NEEDS_NITRO" === t || "NOT_ENOUGH_ORBS" === t }),
        children: [
            (0, n.jsx)(d.OrbsIcon, { size: "xs", color: "currentColor" }),
            (0, n.jsx)(u.E, { variant: "body-md/semibold", color: "currentColor", children: l }),
        ],
    });
}
function eG(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: s, hasNitroOffer: r, wrap: i, unavailableLabel: o } = e,
        { normalPrice: c, discountedPrice: u, discountPercent: d } = s,
        m = null != l && ("HIDDEN" !== t || null != o);
    if (null == c && !m)
        return null != o
            ? (0, n.jsxs)("div", {
                  className: eH.sj,
                  children: [(0, n.jsx)(en.V, { textColor: "text-subtle" }), (0, n.jsx)(eP.l, { label: o })],
              })
            : null;
    let x = "CAN_CHECKOUT" === t,
        h =
            null != c
                ? (0, n.jsx)(e_.k, {
                      normalPrice: c,
                      discountedPrice: u,
                      discountPercent: d,
                      hasNitroOffer: r,
                      wrap: i,
                  })
                : null;
    return (0, n.jsxs)("div", {
        className: eH.sj,
        children: [
            (0, n.jsx)(en.V, { textColor: "text-subtle" }),
            (0, n.jsx)("div", {
                className: a()(eH.hO, m && eH.XE),
                children:
                    m && x
                        ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eB, { amount: l.amount, orbGate: t }), h] })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [h, m && (0, n.jsx)(eB, { amount: l.amount, orbGate: t })],
                          }),
            }),
        ],
    });
}
function eq(e) {
    let {
            sku: l,
            guildId: t,
            giftRecipient: r,
            giftingOrigin: a,
            trackPDPClick: o,
            analyticsLocations: c,
            orbPrice: d,
            orbsGate: p,
            formattedPrice: j,
            unavailableLabel: f,
        } = e,
        _ = (0, m.k)(),
        N = l.id,
        v = (0, i.bG)([G.A], () => G.A.getNormalizedSKUEligibility(N), [N]),
        I = v && "CAN_CHECKOUT" === p,
        g = j.discountedPrice ?? j.normalPrice,
        k = s.useCallback(() => {
            (o(eU.Jq.BUY_BUTTON),
                (0, Z.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...c, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                        contextKey: _,
                    },
                ));
        }, [l, o, t, c, _]),
        C = s.useCallback(() => {
            (o(eU.Jq.GIFT_BUTTON),
                (0, Z.a)(
                    l,
                    { isGift: !0, giftRecipient: r, giftingOrigin: a },
                    {
                        analyticsLocations: [...c, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON],
                        contextKey: _,
                    },
                ));
        }, [l, o, r, a, c, _]),
        E = (0, T.h)(l.applicationId),
        y = s.useMemo(() => [...c, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [c]),
        S = s.useCallback(() => {
            null != E &&
                (o(eU.Jq.BUY_WITH_ORBS_BUTTON),
                (0, Z.n)(l, {
                    guildId: t,
                    contextKey: _,
                    onComplete: () => {
                        ((0, K.j)(_), (0, X.n)({ sku: l, application: E, analyticsLocations: y, contextKey: _ }));
                    },
                    analyticsLocations: y,
                }));
        }, [l, E, t, y, o, _]),
        O = s.useCallback(() => {
            o(eU.Jq.EARN_MORE_ORBS_BUTTON);
        }, [o]),
        R = v
            ? (0, n.jsx)(ei, {
                  orbsGate: p,
                  orbPrice: d,
                  onCheckout: S,
                  onTrackEarnMoreOrbs: O,
                  variant: I ? "primary" : "secondary",
              })
            : null,
        L = (0, n.jsxs)("div", {
            className: eH.mr,
            children: [
                (0, n.jsx)(x.$, {
                    variant: I ? "secondary" : "primary",
                    onClick: k,
                    text: null != g ? Q.intl.format(Q.t.YkXGyY, { priceString: g }) : Q.intl.string(Q.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, n.jsx)(h.D, {
                    className: eH.xP,
                    onClick: C,
                    "aria-label": Q.intl.string(Q.t.QAZA5f),
                    role: "button",
                    children: (0, n.jsx)(b.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        D = (0, n.jsx)(x.$, {
            icon: b.GiftIcon,
            variant: "secondary",
            onClick: C,
            text: Q.intl.string(Q.t.QAZA5f),
            fullWidth: !0,
        });
    return null != f
        ? (0, n.jsxs)("div", {
              className: eH.NC,
              children: [
                  (0, n.jsx)(u.E, {
                      variant: "footnote/normal",
                      color: "text-subtle",
                      children: Q.intl.string(Q.t["35vxnc"]),
                  }),
                  (0, n.jsx)(x.$, { variant: "secondary", text: f, disabled: !0, fullWidth: !0 }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: eH.NC,
              children: [
                  !v &&
                      (0, n.jsx)(u.E, {
                          variant: "footnote/normal",
                          color: "text-subtle",
                          children: Q.intl.string(Q.t.IqlPbQ),
                      }),
                  I && R,
                  v ? L : D,
                  !I && R,
              ],
          });
}
function eF(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let s = null != l.labelIconAssetId ? (0, H.YE)(t, l.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: eH.HI,
        children: [
            null != s && (0, n.jsx)("img", { className: eH.IX, src: s, alt: "" }, s),
            (0, n.jsx)(u.E, { variant: "body-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eW(e) {
    let { onClick: l, onMouseDown: t, children: s, ariaLabel: r, className: a = eH.jU } = e;
    return (0, n.jsx)(h.D, { onClick: l, onMouseDown: t, className: a, "aria-label": r, role: "button", children: s });
}
function ez(e) {
    let { selectedCarouselItem: l, title: t, description: s, applicationId: r, className: a } = e;
    return (0, n.jsxs)("div", {
        className: a,
        children: [
            null != t && (0, n.jsx)(c.D, { variant: "heading-sm/semibold", color: "text-strong", children: t }),
            (0, n.jsx)(eF, { applicationId: r, selectedCarouselItem: l }),
            null != s && (0, n.jsx)(u.E, { variant: "body-sm/normal", color: "text-subtle", children: s }),
        ],
    });
}
function e$(e) {
    let {
            customNavigateToSocialLayerStorefront: l,
            transitionState: t,
            returnRef: r,
            skuId: c,
            applicationId: d,
            isStorefront: m,
            giftRecipient: x,
            giftingOrigin: h,
            analyticsLocations: b,
            analyticsContext: A,
            unavailableLabel: T,
            onClose: X,
        } = e,
        K = (0, g.A)("(max-width: 485px)"),
        { analyticsLocations: Z } = (0, E.Ay)(b ?? []),
        { guildId: ee } = (0, Y.nG)(d),
        en = (0, i.bG)([U.default], () => U.default.getId());
    s.useEffect(() => {
        null != c && (0, B.iR)(d, c);
    }, [d, c]);
    let es = (0, q.A)({ applicationId: d }),
        er = (0, i.bG)([G.A], () => G.A.getSkuAssets()),
        ea = (0, i.bG)([w.A], () => w.A.isFetching(c)),
        ei = (0, p.M)((0, C.Ay)()),
        [eo, ec] = s.useState(!0),
        eu = (0, D.A)({ skuId: c }),
        ed = (0, i.bG)([O.A], () => O.A.getFetchStateForSkuId(c)?.type, [c]),
        em = (0, S.uS)(d),
        ex = null == eu || eu.available || em ? null : (T ?? Q.intl.string(Q.t.RWouSQ)),
        eh = (0, L.JL)({ sku: eu }),
        { display: eb, reward: ep, offers: ej } = (0, z.b)({ surface: "pdp", applicationId: d, skuId: c }),
        e_ = s.useMemo(() => ej.find((e) => e.type === R.B8.ORB_REDEMPTION) ?? null, [ej]),
        ev = s.useMemo(() => ej.find((e) => e.promotionId === ew.ZX), [ej]),
        eI = null != ev ? (es?.storefront?.promotions?.[ev.promotionId] ?? null) : null,
        eg = (0, W.h)(eI),
        { state: ek, isReady: eC } = (0, F.we)({ orbPriceAmount: eh?.amount, spendOrbsOffer: e_ }),
        eA = (0, L.CD)({ sku: eu }),
        [eE, eT] = s.useState(0),
        [ey, eS] = s.useMemo(
            () =>
                (function (e, l, t, n) {
                    let { heroWidth: s } = n,
                        r = [],
                        a = [];
                    if (null == e || 0 === e.length) return [r, a];
                    for (let n of e) {
                        let e = null != n.assetId ? t[n.assetId] : null;
                        null != e &&
                            (r.push(n),
                            e.mime_type.startsWith("video/")
                                ? a.push({
                                      type: "video",
                                      src: (0, H.YE)(l, e, s, "mp4"),
                                      videoThumbnailSrc: (0, H.YE)(l, e, s, "webp"),
                                      thumbnailSrc:
                                          null != n.thumbnailAssetId
                                              ? (0, H.YE)(l, n.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != n.backgroundAssetId
                                              ? (0, H.YE)(l, n.backgroundAssetId, s, Y.pV)
                                              : void 0,
                                  })
                                : a.push({
                                      type: "image",
                                      src: (0, H.YE)(l, e, s, "webp"),
                                      thumbnailSrc:
                                          null != n.thumbnailAssetId
                                              ? (0, H.YE)(l, n.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != n.backgroundAssetId
                                              ? (0, H.YE)(l, n.backgroundAssetId, s, Y.pV)
                                              : void 0,
                                  }));
                    }
                    return [r, a];
                })(eu?.tenantMetadata?.socialLayer?.carouselItems ?? [], d, er, { heroWidth: 747 }),
            [eu, d, er],
        ),
        [eO, eR] = s.useState(null),
        [eP, eB] = s.useState(!1);
    s.useEffect(() => {
        if (null == eO) return;
        let e = new ResizeObserver(() => {
            eB(eO.scrollHeight > eO.clientHeight);
        });
        return (e.observe(eO), () => e.disconnect());
    }, [eO]);
    let eF = eE < eS.length ? eE : 0,
        e$ = ey[eF] ?? null,
        eJ = eS.length > 1,
        eV = eS.some((e) => "video" === e.type);
    ((0, P.pE)(),
        (0, k.Ay)(() => {
            (M.default.track(eM.HAw.OPEN_MODAL, { location_stack: Z, type: ew.Nh, sku_id: c, application_id: d }),
                (0, B.Xw)());
        }));
    let eX = s.useCallback(
            (e) => {
                M.default.track(eM.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: A?.sessionId,
                    sku_id: c,
                    sku_storefront_promotion_id: (0, J.Z)(c),
                    guild_id: A?.guildId,
                    application_id: d,
                    cta_type: e,
                    location_stack: Z,
                });
            },
            [A, c, d, Z],
        ),
        eK = s.useRef(!1),
        eZ = s.useRef(null),
        eQ = "success" === ed && null != eu,
        e0 = eQ && eC;
    s.useEffect(() => {
        if (eK.current) return;
        function e() {
            eK.current ||
                ((eK.current = !0),
                M.default.track(eM.HAw.SLAYER_STOREFRONT_PDP_VIEWED, {
                    slayer_storefront_session_id: A?.sessionId,
                    sku_id: c,
                    sku_storefront_promotion_id: (0, J.Z)(c),
                    guild_id: A?.guildId ?? ee,
                    application_id: d,
                    placement: A?.placement,
                    orbs_purchase_gate_state: eQ || "HIDDEN" !== ek ? ek : void 0,
                    orb_price: "HIDDEN" === ek ? void 0 : eh?.amount,
                    orbs_purchase_gate_settled: e0,
                    location_stack: Z,
                }));
        }
        if (e0 || "error" === ed) return void e();
        eZ.current ??= Date.now() + 5e3;
        let l = setTimeout(e, Math.max(0, eZ.current - Date.now()));
        return () => clearTimeout(l);
    }, [ek, eQ, e0, ed, A, c, d, ee, eh?.amount, Z]);
    let e1 = s.useCallback(
        (e) => {
            (eT(e), eX(eU.Jq.CAROUSEL_ITEM));
        },
        [eX],
    );
    s.useEffect(() => {
        null == c || w.A.isFetching(c) || (0, B.Pp)(d, c);
    }, [d, c]);
    let e3 = s.useCallback(() => {
            null != eu &&
                (eX(eU.Jq.FORWARD_BUTTON),
                (0, V.d)({
                    sku: eu,
                    guildId: ee,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: Z,
                    analyticsContext: A,
                }));
        }, [eu, ee, eX, Z, A]),
        e4 = s.useCallback(() => {
            eX(eU.Jq.WISHLIST_BUTTON);
        }, [eX]),
        e2 = s.useCallback(() => {
            (0, $.G)({ applicationId: d });
        }, [d]),
        e7 = s.useCallback(() => {
            (eX(eU.Jq.VISIT_SHOP), (0, j.s7)(), null != l ? l() : (0, $.default)({ applicationId: d }));
        }, [d, eX, l]),
        e8 = s.useCallback(() => {
            (ec(!eo), eX(eU.Jq.MUTE_BUTTON));
        }, [eo, eX]),
        e5 = eu?.tenantMetadata?.socialLayer;
    if (null == eu || null == e5) return ea ? (0, n.jsx)(f.y, {}) : null;
    let e9 = es?.storefront,
        e6 = e9?.logoAssetId != null ? (0, H.YE)(e9.applicationId, e9.logoAssetId, 256) : null,
        le = e9?.lightThemeLogoAssetId != null ? (0, H.YE)(e9.applicationId, e9.lightThemeLogoAssetId, 256) : null,
        ll = null;
    ll = ei ? (e6 ?? le) : (le ?? e6);
    let lt = null;
    null == ex && eu.exclusive && (lt = (0, n.jsx)(et.I, {}));
    let ln = (0, n.jsxs)(n.Fragment, {
            children: [
                !m &&
                    (0, n.jsxs)(eW, {
                        onClick: e7,
                        onMouseDown: e2,
                        ariaLabel: Q.intl.string(Q.t["+v/1Dk"]),
                        className: eH.gW,
                        children: [
                            (0, n.jsx)(_.ShopIcon, { size: "refresh_sm", color: "currentColor" }),
                            (0, n.jsx)(u.E, {
                                variant: "body-md/medium",
                                color: "currentColor",
                                children: Q.intl.string(Q.t["+v/1Dk"]),
                            }),
                        ],
                    }),
                (0, n.jsxs)("div", {
                    className: eH.V7,
                    children: [
                        null != eu &&
                            (0, n.jsx)(eD._, {
                                sku: eu,
                                isCardHovered: !0,
                                className: a()(eH.jU, eH.ij),
                                trackButtonClick: e4,
                                variant: K ? "secondary" : "overlay-secondary",
                                location: "social_layer_storefront_product_details_modal",
                            }),
                        (0, n.jsx)(eW, {
                            onClick: e3,
                            ariaLabel: Q.intl.string(Q.t.Ej3B3Y),
                            children: (0, n.jsx)(y.A, { size: "refresh_sm", color: "currentColor" }),
                        }),
                        eV &&
                            (0, n.jsx)(eW, {
                                onClick: e8,
                                ariaLabel: eo ? Q.intl.string(Q.t.YqAjXy) : Q.intl.string(Q.t.w4m945),
                                children: eo
                                    ? (0, n.jsx)(N.VoiceXIcon, { size: "refresh_sm", color: "currentColor" })
                                    : (0, n.jsx)(v.VoiceNormalIcon, { size: "refresh_sm", color: "currentColor" }),
                            }),
                        (0, n.jsx)(eW, {
                            onClick: X,
                            ariaLabel: Q.intl.string(Q.t.cpT0Cq),
                            children: (0, n.jsx)(I.XLargeIcon, { size: "refresh_sm", color: "currentColor" }),
                        }),
                    ],
                }),
            ],
        }),
        ls =
            null != ev && null != eg
                ? (0, n.jsx)(eL, {
                      offer: ev,
                      applicationId: d,
                      analyticsLocations: Z,
                      onUpsellClick: () => eX(eU.Jq.NITRO_UPSELL_BUTTON),
                  })
                : null != eb
                  ? (0, n.jsx)(eN.e, {
                        promotion: eb,
                        reward: ep,
                        applicationId: d,
                        analyticsLocations: Z,
                        onUpsellClick: () => eX(eU.Jq.NITRO_UPSELL_BUTTON),
                    })
                  : null,
        lr = (0, n.jsxs)("div", {
            className: a()(eH.Td, { [eH.t7]: eP }),
            children: [
                (0, n.jsx)(eG, {
                    orbPrice: eh,
                    orbsGate: ek,
                    formattedPrice: eA,
                    hasNitroOffer: eb?.flavor === "nitro",
                    wrap: K,
                    unavailableLabel: ex,
                }),
                ls,
                (0, n.jsx)(eq, {
                    sku: eu,
                    guildId: ee,
                    giftRecipient: x?.id !== en ? x : void 0,
                    giftingOrigin: x?.id !== en ? h : void 0,
                    trackPDPClick: eX,
                    analyticsLocations: Z,
                    orbPrice: eh,
                    orbsGate: ek,
                    formattedPrice: eA,
                    unavailableLabel: ex,
                }),
            ],
        }),
        la = (0, n.jsxs)("div", {
            className: eH.il,
            children: [(0, n.jsx)(ef, { item: eS[eF], isMuted: eo, alt: e$?.label ?? eu.name }), !K && ln],
        });
    return (0, n.jsxs)(o.EO, {
        transitionState: t,
        "hide-shadow": !0,
        parentComponent: "SocialLayerStorefrontProductDetailsModal",
        className: eH.CR,
        size: o.rI.DYNAMIC,
        "aria-label": eu.name,
        returnRef: r,
        children: [
            K &&
                (0, n.jsxs)("div", {
                    className: eH.Od,
                    children: [
                        m &&
                            null != ll &&
                            (0, n.jsx)("div", {
                                className: eH.mA,
                                children: (0, n.jsx)("img", { className: eH.wm, src: ll, alt: e9?.title ?? "" }),
                            }),
                        ln,
                    ],
                }),
            (0, n.jsxs)(o.$m, {
                className: eH.jE,
                scrollbarGutter: !1,
                children: [
                    (0, n.jsxs)("div", {
                        className: eH.nr,
                        children: [
                            K && la,
                            (0, n.jsxs)("div", {
                                className: a()(eH.op, { [eH.uk]: eu.exclusive }),
                                children: [
                                    !K &&
                                        (0, n.jsx)("div", {
                                            className: eH.r$,
                                            children:
                                                null != ll
                                                    ? (0, n.jsx)("img", {
                                                          className: eH.wm,
                                                          src: ll,
                                                          alt: e9?.title ?? "",
                                                      })
                                                    : null,
                                        }),
                                    (0, n.jsxs)("div", {
                                        ref: eR,
                                        className: eH.zD,
                                        children: [
                                            null != lt && (0, n.jsx)("div", { className: eH.vS, children: lt }),
                                            eJ
                                                ? (0, n.jsxs)(n.Fragment, {
                                                      children: [
                                                          (0, n.jsx)(eY, { sku: eu }),
                                                          (0, n.jsx)("div", {
                                                              className: eH._D,
                                                              children: (0, n.jsx)(el, {
                                                                  mediaItems: eS,
                                                                  labels: ey.map((e) => e.label),
                                                                  selectedIndex: eF,
                                                                  onSelectIndex: e1,
                                                              }),
                                                          }),
                                                          (0, n.jsx)(ez, {
                                                              selectedCarouselItem: e$,
                                                              title: e$?.title,
                                                              description: e$?.description,
                                                              applicationId: d,
                                                              className: eH.Jv,
                                                          }),
                                                      ],
                                                  })
                                                : (0, n.jsx)(ez, {
                                                      selectedCarouselItem: e$,
                                                      title: eu.name,
                                                      description: eu.description,
                                                      applicationId: d,
                                                      className: eH.cP,
                                                  }),
                                        ],
                                    }),
                                    !K && lr,
                                ],
                            }),
                            !K && la,
                        ],
                    }),
                    K && lr,
                ],
            }),
        ],
    });
}
