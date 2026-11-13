t.d(l, { default: () => eJ });
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
    B = t(371794),
    G = t(205177),
    H = t(871123),
    Y = t(733391),
    q = t(832163),
    F = t(429635),
    W = t(69236),
    z = t(723807),
    $ = t(2157),
    J = t(44724);
t(321073);
var V = t(898523),
    X = t(345938),
    K = t(510022),
    Z = t(317560),
    Q = t(306984),
    ee = t(792996),
    el = t(698132);
function et(e) {
    let { mediaItems: l, labels: t, selectedIndex: s, onSelectIndex: r } = e;
    return l.length <= 1
        ? null
        : (0, n.jsxs)("div", {
              className: el.kL,
              children: [
                  (0, n.jsx)(u.E, {
                      variant: "body-xs/semibold",
                      color: "text-subtle",
                      children: ee.intl.string(ee.t.U7DAV9),
                  }),
                  (0, n.jsx)("div", {
                      className: el.Vg,
                      children: l.map((e, l) =>
                          (0, n.jsx)(
                              h.D,
                              {
                                  className: a()(el.xn, { [el.Y4]: l === s }),
                                  onClick: () => r(l),
                                  "aria-label": t?.[l],
                                  "aria-pressed": l === s,
                                  children: (0, n.jsx)("img", {
                                      className: el.q_,
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
var en = t(263911),
    es = t(971146),
    er = t(696292),
    ea = t(321538),
    ei = t(817519);
function eo(e) {
    let { orbsGate: l, orbPrice: t, onCheckout: r, onTrackEarnMoreOrbs: a, variant: i = "secondary" } = e,
        o = (0, m.k)(),
        c = s.useCallback(() => {
            (a(), (0, ea.mA)({ fromContent: er.u.SOCIAL_LAYER_STOREFRONT }), (0, Z.j)(o));
        }, [a, o]);
    return "HIDDEN" === l || null == t
        ? null
        : "NOT_ENOUGH_ORBS" === l
          ? (0, n.jsx)(x.$, {
                onClick: c,
                variant: i,
                icon: d.OrbsIcon,
                text: ee.intl.string(ee.t.H57f41),
                fullWidth: !0,
            })
          : (0, n.jsx)(x.$, {
                onClick: r,
                disabled: "NEEDS_NITRO" === l,
                variant: i,
                text: (0, n.jsx)("span", {
                    className: ei.Y,
                    children: ee.intl.format(ee.t.lOtBOI, {
                        orbPrice: t.amount,
                        orbIconHook: () => (0, n.jsx)(d.OrbsIcon, { size: "xs", color: "currentColor" }, "orbs-icon"),
                    }),
                }),
                fullWidth: !0,
            });
}
var ec = t(310784),
    eu = t.n(ec),
    ed = t(775602),
    em = t(654107),
    ex = t(265705),
    eh = t(619517),
    eb = t(383055),
    ep = t(549100);
function ej(e) {
    return (0, eb.$o)({ ...e, className: ep.tN, mediaPlayerClassName: ep.yf });
}
function ef(e) {
    return (0, n.jsx)(eh.Ay, { ...e });
}
function e_(e) {
    let { item: l, isMuted: t, className: r, alt: a = "" } = e,
        o = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, em.rh)(l, "#000000");
            return s.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = eu()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        c = (0, i.bG)([ed.Ay], () => ed.Ay.useReducedMotion),
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
              className: r ?? ep.kL,
              children: (0, n.jsx)(
                  "div",
                  {
                      className: `${ep.h4} ${ep.nR}`,
                      style: b,
                      children: (0, n.jsx)(
                          ex.rr,
                          {
                              href: null,
                              thumbnail: { url: l.videoThumbnailSrc, width: 747, height: 560 },
                              video: { url: l.src, proxyURL: l.src, width: 747, height: 560 },
                              provider: void 0,
                              allowFullScreen: !0,
                              maxHeight: 560,
                              maxWidth: 747,
                              playable: !0,
                              className: ep.Ki,
                              volume: 1,
                              autoMute: t,
                              autoPlay: !0,
                              disableClickToUnmute: !0,
                              renderVideoComponent: ej,
                              renderImageComponent: ef,
                              renderLinkComponent: eb.bU,
                          },
                          `${l.src}-${t ? "muted" : "unmuted"}`,
                      ),
                  },
                  l.src,
              ),
          })
        : (0, n.jsx)("div", {
              className: r ?? ep.kL,
              children: (0, n.jsxs)("div", {
                  className: ep.h4,
                  style: b,
                  children: [
                      (0, n.jsx)("img", { src: l.src, alt: a, className: ep.Sl }, l.src),
                      null != u && !c && (0, n.jsx)("img", { src: u, alt: "", className: ep.Ve, onAnimationEnd: h }, u),
                  ],
              }),
          });
}
var eN = t(581487),
    ev = t(454491),
    eI = t(403581),
    eg = t(778705),
    ek = t(936785),
    eC = t(741899),
    eA = t(906383),
    eE = t(556766),
    eT = t(421108),
    ey = t(787844),
    eS = t(910200),
    eO = t(682901),
    eR = t(25082),
    eL = t(996712);
function eD(e) {
    let { offer: l, applicationId: t, analyticsLocations: r, onUpsellClick: a } = e,
        i = (0, eE.m)(t),
        o = s.useMemo(() => {
            let e = i?.[l.promotionId];
            return null == e
                ? null
                : {
                      id: e.id,
                      Icon: (0, ek.LZ)(e.pdp?.icon ?? null),
                      text: "",
                      tooltip: null,
                      endsAt: (0, ek.RD)(e.endsAt),
                      flavor: e.flavor,
                      rewardRequirements: e.rewardRequirements,
                      rewardStatus: e.rewardStatus,
                  };
        }, [i, l.promotionId]),
        c = (0, eA.Pc)(o),
        u = (0, eT.tm)(o?.endsAt ?? null),
        d = (0, z.h)(o),
        m = (0, eC.N)("social_layer_storefront_product_details_modal"),
        h = s.useCallback(() => {
            (a(),
                (0, eg.A)({
                    subscriptionTier: eO.pe.TIER_2,
                    applicationId: t,
                    analyticsLocations: r,
                    ...(0, H.zl)(o?.rewardRequirements ?? []),
                }));
        }, [a, t, r, o]);
    if (null == o || u || null == d || o.rewardStatus === R.GM.CONSUMED || null == m) return null;
    let { discountPercent: b } = m;
    return (0, eA.ad)(c)
        ? (0, n.jsx)(eS.Ay, {
              className: eL.l,
              gradientColor: "nitro-pink",
              text: ee.intl.format(eR.default.dWuM4X, { discountPercent: b }),
              trailing: (0, n.jsx)("div", {
                  className: eL.b,
                  children: (0, n.jsx)(x.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      icon: eI.NitroWheelIcon,
                      text: ee.intl.string(ee.t.pj0XBN),
                      onClick: h,
                  }),
              }),
          })
        : (0, n.jsx)(eS.Ay, {
              className: eL.l,
              gradientColor: "nitro-pink",
              Icon: eI.NitroWheelIcon,
              text: ee.intl.format(eR.default["1HXutk"], { discountPercent: b }),
              trailing: (0, n.jsx)("div", {
                  className: eL.b,
                  children: (0, n.jsx)(ey.d, {
                      applicationId: t,
                      coupon: d,
                      discountPercent: m.offerSkuId === d.skuId ? b : void 0,
                      analyticsLocations: r,
                      surface: "pdp",
                  }),
              }),
          });
}
var eP = t(743693),
    eU = t(249434),
    ew = t(995393),
    eM = t(188275),
    eB = t(652215),
    eG = t(338235);
function eH(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: eG.AX,
              children: [
                  (0, n.jsx)(c.D, { variant: "heading-lg/semibold", color: "text-strong", children: l.name }),
                  (0, n.jsx)(u.E, { variant: "body-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function eY(e) {
    let { amount: l, orbGate: t } = e;
    return (0, n.jsxs)("div", {
        className: a()(eG.aX, { [eG.dQ]: "NEEDS_NITRO" === t || "NOT_ENOUGH_ORBS" === t }),
        children: [
            (0, n.jsx)(d.OrbsIcon, { size: "xs", color: "currentColor" }),
            (0, n.jsx)(u.E, { variant: "body-md/semibold", color: "currentColor", children: l }),
        ],
    });
}
function eq(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: s, hasNitroOffer: r, wrap: i, unavailableLabel: o } = e,
        { normalPrice: c, discountedPrice: u, discountPercent: d } = s,
        m = null != l && ("HIDDEN" !== t || null != o);
    if (null == c && !m)
        return null != o
            ? (0, n.jsxs)("div", {
                  className: eG.sj,
                  children: [(0, n.jsx)(es.V, { textColor: "text-subtle" }), (0, n.jsx)(eU.l, { label: o })],
              })
            : null;
    let x = "CAN_CHECKOUT" === t,
        h =
            null != c
                ? (0, n.jsx)(eN.k, {
                      normalPrice: c,
                      discountedPrice: u,
                      discountPercent: d,
                      hasNitroOffer: r,
                      wrap: i,
                  })
                : null;
    return (0, n.jsxs)("div", {
        className: eG.sj,
        children: [
            (0, n.jsx)(es.V, { textColor: "text-subtle" }),
            (0, n.jsx)("div", {
                className: a()(eG.hO, m && eG.XE),
                children:
                    m && x
                        ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eY, { amount: l.amount, orbGate: t }), h] })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [h, m && (0, n.jsx)(eY, { amount: l.amount, orbGate: t })],
                          }),
            }),
        ],
    });
}
function eF(e) {
    let {
            sku: l,
            guildId: t,
            giftRecipient: r,
            giftingOrigin: a,
            trackPDPClick: o,
            analyticsLocations: c,
            orbPrice: d,
            orbsGate: p,
            skuPrice: j,
            formattedPrice: f,
            unavailableLabel: _,
        } = e,
        N = (0, m.k)(),
        v = l.id,
        I = (0, i.bG)([q.A], () => q.A.getNormalizedSKUEligibility(v), [v]),
        g = I && "CAN_CHECKOUT" === p,
        k = f.discountedPrice ?? f.normalPrice,
        C = s.useCallback(() => {
            (o(ew.Jq.BUY_BUTTON),
                (0, Q.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...c, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                        contextKey: N,
                    },
                ));
        }, [l, o, t, c, N]),
        E = s.useCallback(() => {
            (o(ew.Jq.GIFT_BUTTON),
                (0, Q.a)(
                    l,
                    { isGift: !0, giftRecipient: r, giftingOrigin: a },
                    {
                        analyticsLocations: [...c, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON],
                        contextKey: N,
                    },
                ));
        }, [l, o, r, a, c, N]),
        y = (0, T.h)(l.applicationId),
        S = s.useMemo(() => [...c, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [c]),
        O = s.useCallback(() => {
            null != y &&
                (o(ew.Jq.BUY_WITH_ORBS_BUTTON),
                (0, Q.n)(l, {
                    guildId: t,
                    contextKey: N,
                    onComplete: () => {
                        ((0, Z.j)(N), (0, K.n)({ sku: l, application: y, analyticsLocations: S, contextKey: N }));
                    },
                    analyticsLocations: S,
                }));
        }, [l, y, t, S, o, N]),
        R = s.useCallback(() => {
            o(ew.Jq.EARN_MORE_ORBS_BUTTON);
        }, [o]),
        L = I
            ? (0, n.jsx)(eo, {
                  orbsGate: p,
                  orbPrice: d,
                  onCheckout: O,
                  onTrackEarnMoreOrbs: R,
                  variant: g ? "primary" : "secondary",
              })
            : null,
        D = (0, n.jsxs)("div", {
            className: eG.mr,
            children: [
                (0, n.jsx)(x.$, {
                    variant: g ? "secondary" : "primary",
                    onClick: C,
                    text: (0, G.$)(j, k),
                    fullWidth: !0,
                }),
                (0, n.jsx)(h.D, {
                    className: eG.xP,
                    onClick: E,
                    "aria-label": ee.intl.string(ee.t.QAZA5f),
                    role: "button",
                    children: (0, n.jsx)(b.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        P = (0, n.jsx)(x.$, {
            icon: b.GiftIcon,
            variant: "secondary",
            onClick: E,
            text: ee.intl.string(ee.t.QAZA5f),
            fullWidth: !0,
        });
    return null != _
        ? (0, n.jsxs)("div", {
              className: eG.NC,
              children: [
                  (0, n.jsx)(u.E, {
                      variant: "footnote/normal",
                      color: "text-subtle",
                      children: ee.intl.string(ee.t["35vxnc"]),
                  }),
                  (0, n.jsx)(x.$, { variant: "secondary", text: _, disabled: !0, fullWidth: !0 }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: eG.NC,
              children: [
                  !I &&
                      (0, n.jsx)(u.E, {
                          variant: "footnote/normal",
                          color: "text-subtle",
                          children: ee.intl.string(ee.t.IqlPbQ),
                      }),
                  g && L,
                  I ? D : P,
                  !g && L,
              ],
          });
}
function eW(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let s = null != l.labelIconAssetId ? (0, B.YE)(t, l.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: eG.HI,
        children: [
            null != s && (0, n.jsx)("img", { className: eG.IX, src: s, alt: "" }, s),
            (0, n.jsx)(u.E, { variant: "body-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function ez(e) {
    let { onClick: l, onMouseDown: t, children: s, ariaLabel: r, className: a = eG.jU } = e;
    return (0, n.jsx)(h.D, { onClick: l, onMouseDown: t, className: a, "aria-label": r, role: "button", children: s });
}
function e$(e) {
    let { selectedCarouselItem: l, title: t, description: s, applicationId: r, className: a } = e;
    return (0, n.jsxs)("div", {
        className: a,
        children: [
            null != t && (0, n.jsx)(c.D, { variant: "heading-sm/semibold", color: "text-strong", children: t }),
            (0, n.jsx)(eW, { applicationId: r, selectedCarouselItem: l }),
            null != s && (0, n.jsx)(u.E, { variant: "body-sm/normal", color: "text-subtle", children: s }),
        ],
    });
}
function eJ(e) {
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
            onClose: G,
        } = e,
        K = (0, g.A)("(max-width: 485px)"),
        { analyticsLocations: Z } = (0, E.Ay)(b ?? []),
        { guildId: Q } = (0, H.nG)(d),
        el = (0, i.bG)([U.default], () => U.default.getId());
    s.useEffect(() => {
        null != c && (0, Y.iR)(d, c);
    }, [d, c]);
    let es = (0, F.A)({ applicationId: d }),
        er = (0, i.bG)([q.A], () => q.A.getSkuAssets()),
        ea = (0, i.bG)([w.A], () => w.A.isFetching(c)),
        ei = (0, p.M)((0, C.Ay)()),
        [eo, ec] = s.useState(!0),
        eu = (0, D.A)({ skuId: c }),
        ed = (0, i.bG)([O.A], () => O.A.getFetchStateForSkuId(c)?.type, [c]),
        em = (0, S.uS)(d),
        ex = null == eu || eu.available || em ? null : (T ?? ee.intl.string(ee.t.RWouSQ)),
        eh = (0, L.JL)({ sku: eu }),
        { display: eb, reward: ep, offers: ej } = (0, $.b)({ surface: "pdp", applicationId: d, skuId: c }),
        ef = s.useMemo(() => ej.find((e) => e.type === R.B8.ORB_REDEMPTION) ?? null, [ej]),
        eN = s.useMemo(() => ej.find((e) => e.promotionId === eM.ZX), [ej]),
        eI = null != eN ? (es?.storefront?.promotions?.[eN.promotionId] ?? null) : null,
        eg = (0, z.h)(eI),
        { state: ek, isReady: eC } = (0, W.we)({ orbPriceAmount: eh?.amount, spendOrbsOffer: ef }),
        eA = (0, L.ou)({ sku: eu }),
        eE = (0, L.j9)(eA),
        [eT, ey] = s.useState(0),
        [eS, eO] = s.useMemo(
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
                                      src: (0, B.YE)(l, e, s, "mp4"),
                                      videoThumbnailSrc: (0, B.YE)(l, e, s, "webp"),
                                      thumbnailSrc:
                                          null != n.thumbnailAssetId
                                              ? (0, B.YE)(l, n.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != n.backgroundAssetId
                                              ? (0, B.YE)(l, n.backgroundAssetId, s, H.pV)
                                              : void 0,
                                  })
                                : a.push({
                                      type: "image",
                                      src: (0, B.YE)(l, e, s, "webp"),
                                      thumbnailSrc:
                                          null != n.thumbnailAssetId
                                              ? (0, B.YE)(l, n.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != n.backgroundAssetId
                                              ? (0, B.YE)(l, n.backgroundAssetId, s, H.pV)
                                              : void 0,
                                  }));
                    }
                    return [r, a];
                })(eu?.tenantMetadata?.socialLayer?.carouselItems ?? [], d, er, { heroWidth: 747 }),
            [eu, d, er],
        ),
        [eR, eL] = s.useState(null),
        [eU, eY] = s.useState(!1);
    s.useEffect(() => {
        if (null == eR) return;
        let e = new ResizeObserver(() => {
            eY(eR.scrollHeight > eR.clientHeight);
        });
        return (e.observe(eR), () => e.disconnect());
    }, [eR]);
    let eW = eT < eO.length ? eT : 0,
        eJ = eS[eW] ?? null,
        eV = eO.length > 1,
        eX = eO.some((e) => "video" === e.type);
    ((0, P.pE)(),
        (0, k.Ay)(() => {
            (M.default.track(eB.HAw.OPEN_MODAL, { location_stack: Z, type: eM.Nh, sku_id: c, application_id: d }),
                (0, Y.Xw)());
        }));
    let eK = s.useCallback(
            (e) => {
                M.default.track(eB.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: A?.sessionId,
                    sku_id: c,
                    sku_storefront_promotion_id: (0, V.Z)(c),
                    guild_id: A?.guildId,
                    application_id: d,
                    cta_type: e,
                    location_stack: Z,
                });
            },
            [A, c, d, Z],
        ),
        eZ = s.useRef(!1),
        eQ = s.useRef(null),
        e0 = "success" === ed && null != eu,
        e1 = e0 && eC;
    s.useEffect(() => {
        if (eZ.current) return;
        function e() {
            eZ.current ||
                ((eZ.current = !0),
                M.default.track(eB.HAw.SLAYER_STOREFRONT_PDP_VIEWED, {
                    slayer_storefront_session_id: A?.sessionId,
                    sku_id: c,
                    sku_storefront_promotion_id: (0, V.Z)(c),
                    guild_id: A?.guildId ?? Q,
                    application_id: d,
                    placement: A?.placement,
                    orbs_purchase_gate_state: e0 || "HIDDEN" !== ek ? ek : void 0,
                    orb_price: "HIDDEN" === ek ? void 0 : eh?.amount,
                    orbs_purchase_gate_settled: e1,
                    location_stack: Z,
                }));
        }
        if (e1 || "error" === ed) return void e();
        eQ.current ??= Date.now() + 5e3;
        let l = setTimeout(e, Math.max(0, eQ.current - Date.now()));
        return () => clearTimeout(l);
    }, [ek, e0, e1, ed, A, c, d, Q, eh?.amount, Z]);
    let e3 = s.useCallback(
        (e) => {
            (ey(e), eK(ew.Jq.CAROUSEL_ITEM));
        },
        [eK],
    );
    s.useEffect(() => {
        null == c || w.A.isFetching(c) || (0, Y.Pp)(d, c);
    }, [d, c]);
    let e2 = s.useCallback(() => {
            null != eu &&
                (eK(ew.Jq.FORWARD_BUTTON),
                (0, X.d)({
                    sku: eu,
                    guildId: Q,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: Z,
                    analyticsContext: A,
                }));
        }, [eu, Q, eK, Z, A]),
        e4 = s.useCallback(() => {
            eK(ew.Jq.WISHLIST_BUTTON);
        }, [eK]),
        e7 = s.useCallback(() => {
            (0, J.G)({ applicationId: d });
        }, [d]),
        e8 = s.useCallback(() => {
            (eK(ew.Jq.VISIT_SHOP), (0, j.s7)(), null != l ? l() : (0, J.default)({ applicationId: d }));
        }, [d, eK, l]),
        e5 = s.useCallback(() => {
            (ec(!eo), eK(ew.Jq.MUTE_BUTTON));
        }, [eo, eK]),
        e9 = eu?.tenantMetadata?.socialLayer;
    if (null == eu || null == e9) return ea ? (0, n.jsx)(f.y, {}) : null;
    let e6 = es?.storefront,
        le = e6?.logoAssetId != null ? (0, B.YE)(e6.applicationId, e6.logoAssetId, 256) : null,
        ll = e6?.lightThemeLogoAssetId != null ? (0, B.YE)(e6.applicationId, e6.lightThemeLogoAssetId, 256) : null,
        lt = null;
    lt = ei ? (le ?? ll) : (ll ?? le);
    let ln = null;
    null == ex && eu.exclusive && (ln = (0, n.jsx)(en.I, {}));
    let ls = (0, n.jsxs)(n.Fragment, {
            children: [
                !m &&
                    (0, n.jsxs)(ez, {
                        onClick: e8,
                        onMouseDown: e7,
                        ariaLabel: ee.intl.string(ee.t["+v/1Dk"]),
                        className: eG.gW,
                        children: [
                            (0, n.jsx)(_.ShopIcon, { size: "refresh_sm", color: "currentColor" }),
                            (0, n.jsx)(u.E, {
                                variant: "body-md/medium",
                                color: "currentColor",
                                children: ee.intl.string(ee.t["+v/1Dk"]),
                            }),
                        ],
                    }),
                (0, n.jsxs)("div", {
                    className: eG.V7,
                    children: [
                        null != eu &&
                            (0, n.jsx)(eP._, {
                                sku: eu,
                                isCardHovered: !0,
                                className: a()(eG.jU, eG.ij),
                                trackButtonClick: e4,
                                variant: K ? "secondary" : "overlay-secondary",
                                location: "social_layer_storefront_product_details_modal",
                            }),
                        (0, n.jsx)(ez, {
                            onClick: e2,
                            ariaLabel: ee.intl.string(ee.t.Ej3B3Y),
                            children: (0, n.jsx)(y.A, { size: "refresh_sm", color: "currentColor" }),
                        }),
                        eX &&
                            (0, n.jsx)(ez, {
                                onClick: e5,
                                ariaLabel: eo ? ee.intl.string(ee.t.YqAjXy) : ee.intl.string(ee.t.w4m945),
                                children: eo
                                    ? (0, n.jsx)(N.VoiceXIcon, { size: "refresh_sm", color: "currentColor" })
                                    : (0, n.jsx)(v.VoiceNormalIcon, { size: "refresh_sm", color: "currentColor" }),
                            }),
                        (0, n.jsx)(ez, {
                            onClick: G,
                            ariaLabel: ee.intl.string(ee.t.cpT0Cq),
                            children: (0, n.jsx)(I.XLargeIcon, { size: "refresh_sm", color: "currentColor" }),
                        }),
                    ],
                }),
            ],
        }),
        lr =
            null != eN && null != eg
                ? (0, n.jsx)(eD, {
                      offer: eN,
                      applicationId: d,
                      analyticsLocations: Z,
                      onUpsellClick: () => eK(ew.Jq.NITRO_UPSELL_BUTTON),
                  })
                : null != eb
                  ? (0, n.jsx)(ev.e, {
                        promotion: eb,
                        reward: ep,
                        applicationId: d,
                        analyticsLocations: Z,
                        onUpsellClick: () => eK(ew.Jq.NITRO_UPSELL_BUTTON),
                    })
                  : null,
        la = (0, n.jsxs)("div", {
            className: a()(eG.Td, { [eG.t7]: eU }),
            children: [
                (0, n.jsx)(eq, {
                    orbPrice: eh,
                    orbsGate: ek,
                    formattedPrice: eE,
                    hasNitroOffer: eb?.flavor === "nitro",
                    wrap: K,
                    unavailableLabel: ex,
                }),
                lr,
                (0, n.jsx)(eF, {
                    sku: eu,
                    guildId: Q,
                    giftRecipient: x?.id !== el ? x : void 0,
                    giftingOrigin: x?.id !== el ? h : void 0,
                    trackPDPClick: eK,
                    analyticsLocations: Z,
                    orbPrice: eh,
                    orbsGate: ek,
                    skuPrice: eA,
                    formattedPrice: eE,
                    unavailableLabel: ex,
                }),
            ],
        }),
        li = (0, n.jsxs)("div", {
            className: eG.il,
            children: [(0, n.jsx)(e_, { item: eO[eW], isMuted: eo, alt: eJ?.label ?? eu.name }), !K && ls],
        });
    return (0, n.jsxs)(o.EO, {
        transitionState: t,
        "hide-shadow": !0,
        parentComponent: "SocialLayerStorefrontProductDetailsModal",
        className: eG.CR,
        size: o.rI.DYNAMIC,
        "aria-label": eu.name,
        returnRef: r,
        children: [
            K &&
                (0, n.jsxs)("div", {
                    className: eG.Od,
                    children: [
                        m &&
                            null != lt &&
                            (0, n.jsx)("div", {
                                className: eG.mA,
                                children: (0, n.jsx)("img", { className: eG.wm, src: lt, alt: e6?.title ?? "" }),
                            }),
                        ls,
                    ],
                }),
            (0, n.jsxs)(o.$m, {
                className: eG.jE,
                scrollbarGutter: !1,
                children: [
                    (0, n.jsxs)("div", {
                        className: eG.nr,
                        children: [
                            K && li,
                            (0, n.jsxs)("div", {
                                className: a()(eG.op, { [eG.uk]: eu.exclusive }),
                                children: [
                                    !K &&
                                        (0, n.jsx)("div", {
                                            className: eG.r$,
                                            children:
                                                null != lt
                                                    ? (0, n.jsx)("img", {
                                                          className: eG.wm,
                                                          src: lt,
                                                          alt: e6?.title ?? "",
                                                      })
                                                    : null,
                                        }),
                                    (0, n.jsxs)("div", {
                                        ref: eL,
                                        className: eG.zD,
                                        children: [
                                            null != ln && (0, n.jsx)("div", { className: eG.vS, children: ln }),
                                            eV
                                                ? (0, n.jsxs)(n.Fragment, {
                                                      children: [
                                                          (0, n.jsx)(eH, { sku: eu }),
                                                          (0, n.jsx)("div", {
                                                              className: eG._D,
                                                              children: (0, n.jsx)(et, {
                                                                  mediaItems: eO,
                                                                  labels: eS.map((e) => e.label),
                                                                  selectedIndex: eW,
                                                                  onSelectIndex: e3,
                                                              }),
                                                          }),
                                                          (0, n.jsx)(e$, {
                                                              selectedCarouselItem: eJ,
                                                              title: eJ?.title,
                                                              description: eJ?.description,
                                                              applicationId: d,
                                                              className: eG.Jv,
                                                          }),
                                                      ],
                                                  })
                                                : (0, n.jsx)(e$, {
                                                      selectedCarouselItem: eJ,
                                                      title: eu.name,
                                                      description: eu.description,
                                                      applicationId: d,
                                                      className: eG.cP,
                                                  }),
                                        ],
                                    }),
                                    !K && la,
                                ],
                            }),
                            !K && li,
                        ],
                    }),
                    K && la,
                ],
            }),
        ],
    });
}
