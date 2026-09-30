t.d(l, { default: () => ew });
var s = t(477900),
    n = t(582128),
    i = t(503698),
    a = t.n(i),
    r = t(17928),
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
    v = t(736653),
    I = t(793574),
    A = t(688810),
    E = t(429913),
    k = t(427209),
    T = t(977445),
    O = t(288106),
    S = t(993046),
    y = t(801228),
    R = t(652165),
    D = t(594832),
    L = t(280450),
    P = t(67480),
    U = t(174459),
    H = t(371794),
    G = t(871123),
    w = t(733391),
    B = t(832163),
    M = t(429635),
    Y = t(69236),
    q = t(2157),
    F = t(44724);
t(321073);
var z = t(345938),
    J = t(510022),
    W = t(317560),
    $ = t(99161),
    V = t(375708),
    X = t(698132);
function K(e) {
    let { mediaItems: l, labels: t, selectedIndex: n, onSelectIndex: i } = e;
    return l.length <= 1
        ? null
        : (0, s.jsxs)("div", {
              className: X.kL,
              children: [
                  (0, s.jsx)(d.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: V.intl.string(V.t.U7DAV9),
                  }),
                  (0, s.jsx)("div", {
                      className: X.Vg,
                      children: l.map((e, l) =>
                          (0, s.jsx)(
                              x.D,
                              {
                                  className: a()(X.xn, { [X.Y4]: l === n }),
                                  onClick: () => i(l),
                                  "aria-label": t?.[l],
                                  "aria-pressed": l === n,
                                  children: (0, s.jsx)("img", {
                                      className: X.q_,
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
var Q = t(263911),
    Z = t(971146),
    ee = t(696292),
    el = t(617986),
    et = t(817519);
function es(e) {
    let { orbsGate: l, orbPrice: t, onCheckout: i, onTrackEarnMoreOrbs: a, variant: r = "secondary" } = e,
        o = n.useCallback(() => {
            (a(), (0, el.mA)({ fromContent: ee.u.SOCIAL_LAYER_STOREFRONT }), (0, W.j)());
        }, [a]);
    return "HIDDEN" === l || null == t
        ? null
        : "NOT_ENOUGH_ORBS" === l
          ? (0, s.jsx)(m.$, { onClick: o, variant: r, icon: u.C, text: V.intl.string(V.t.H57f41), fullWidth: !0 })
          : (0, s.jsx)(m.$, {
                onClick: i,
                disabled: "NEEDS_NITRO" === l,
                variant: r,
                text: (0, s.jsx)("span", {
                    className: et.Y,
                    children: V.intl.format(V.t.lOtBOI, {
                        orbPrice: t.amount,
                        orbIconHook: () => (0, s.jsx)(u.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                    }),
                }),
                fullWidth: !0,
            });
}
var en = t(310784),
    ei = t.n(en),
    ea = t(775602),
    er = t(654107),
    eo = t(175671),
    ec = t(619517),
    ed = t(684519),
    eu = t(549100);
function em(e) {
    return (0, ed.$o)({ ...e, className: eu.tN, mediaPlayerClassName: eu.yf });
}
function ex(e) {
    return (0, s.jsx)(ec.Ay, { ...e });
}
function eh(e) {
    let { item: l, isMuted: t, className: i, alt: a = "" } = e,
        o = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, er.rh)(l, "#000000");
            return n.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = ei()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        c = (0, r.bG)([ea.Ay], () => ea.Ay.useReducedMotion),
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
              className: i ?? eu.kL,
              children: (0, s.jsx)(
                  "div",
                  {
                      className: `${eu.h4} ${eu.nR}`,
                      style: b,
                      children: (0, s.jsx)(
                          eo.rr,
                          {
                              href: null,
                              thumbnail: { url: l.videoThumbnailSrc, width: 747, height: 560 },
                              video: { url: l.src, proxyURL: l.src, width: 747, height: 560 },
                              provider: void 0,
                              allowFullScreen: !0,
                              maxHeight: 560,
                              maxWidth: 747,
                              playable: !0,
                              className: eu.Ki,
                              volume: 1,
                              autoMute: t,
                              autoPlay: !0,
                              disableClickToUnmute: !0,
                              renderVideoComponent: em,
                              renderImageComponent: ex,
                              renderLinkComponent: ed.bU,
                          },
                          `${l.src}-${t ? "muted" : "unmuted"}`,
                      ),
                  },
                  l.src,
              ),
          })
        : (0, s.jsx)("div", {
              className: i ?? eu.kL,
              children: (0, s.jsxs)("div", {
                  className: eu.h4,
                  style: b,
                  children: [
                      (0, s.jsx)("img", { src: l.src, alt: a, className: eu.Sl }, l.src),
                      null != d && !c && (0, s.jsx)("img", { src: d, alt: "", className: eu.Ve, onAnimationEnd: h }, d),
                  ],
              }),
          });
}
var eb = t(821707),
    ep = t(403581),
    ej = t(320448),
    e_ = t(75678),
    eN = t(910200),
    eg = t(202541),
    ef = t(621547),
    eC = t(456902);
function ev(e) {
    let { orbsGate: l, onTrackClickNitroUpsell: t, applicationId: i, analyticsLocations: a } = e,
        o = (0, r.bG)([B.A], () => B.A.getConfigForApplicationId(i)),
        c = n.useCallback(() => {
            (t(), (0, e_.A)({ subscriptionTier: eg.pe.TIER_2, analyticsLocations: a, applicationId: i }));
        }, [a, i, t]);
    return "HIDDEN" === l
        ? null
        : "NEEDS_NITRO" === l
          ? (0, s.jsx)(x.D, {
                className: eC.L,
                onClick: c,
                children: (0, s.jsx)(eN.Ay, {
                    Icon: ep.t,
                    gradientColor: "nitro-pink",
                    tooltip: V.intl.string(ef.default.XwadDC),
                    text: V.intl.string(ef.default.cg95CA),
                    trailing: (0, s.jsx)(ej._, { size: "xs" }),
                }),
            })
          : (0, s.jsx)(eN.O0, {
                Icon: ep.t,
                text: V.intl.string(ef.default.cg95CA),
                endDatetime: o?.promotionEndDatetime,
                gradientColor: "nitro-pink",
            });
}
var eI = t(454491),
    eA = t(743693),
    eE = t(15061),
    ek = t(995393),
    eT = t(188275),
    eO = t(652215),
    eS = t(338235);
function ey(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, s.jsxs)("div", {
              className: eS.AX,
              children: [
                  (0, s.jsx)(c.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, s.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function eR(e) {
    let { amount: l, orbGate: t } = e;
    return (0, s.jsxs)("div", {
        className: a()(eS.aX, { [eS.dQ]: "NEEDS_NITRO" === t || "NOT_ENOUGH_ORBS" === t }),
        children: [
            (0, s.jsx)(u.C, { size: "xs", color: "currentColor" }),
            (0, s.jsx)(d.E, { variant: "text-md/semibold", color: "currentColor", children: l }),
        ],
    });
}
function eD(e) {
    let { normalPrice: l, discountedPrice: t, discountPercent: n, hasNitroOffer: i } = e;
    return i && null != t
        ? (0, s.jsx)(eb.A, { discountedPrice: t, normalPrice: l })
        : null != n && null != t
          ? (0, s.jsxs)("div", {
                className: eS._k,
                children: [
                    (0, s.jsx)(d.E, { variant: "text-md/medium", className: eS.Jb, children: l }),
                    (0, s.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                    (0, s.jsx)(d.E, { variant: "text-md/bold", className: eS.Fi, children: n }),
                ],
            })
          : (0, s.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: l });
}
function eL(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: n, hasNitroOffer: i } = e,
        { normalPrice: r, discountedPrice: o, discountPercent: c } = n;
    if (null == r) return null;
    let d = "HIDDEN" !== t && null != l,
        u = "CAN_CHECKOUT" === t;
    return (0, s.jsxs)("div", {
        className: eS.sj,
        children: [
            (0, s.jsx)(Z.V, { textColor: "text-subtle" }),
            (0, s.jsx)("div", {
                className: a()(eS.hO, d && eS.XE),
                children:
                    d && u
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(eR, { amount: l.amount, orbGate: t }),
                                  (0, s.jsx)(eD, {
                                      normalPrice: r,
                                      discountedPrice: o,
                                      discountPercent: c,
                                      hasNitroOffer: i,
                                  }),
                              ],
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(eD, {
                                      normalPrice: r,
                                      discountedPrice: o,
                                      discountPercent: c,
                                      hasNitroOffer: i,
                                  }),
                                  d && (0, s.jsx)(eR, { amount: l.amount, orbGate: t }),
                              ],
                          }),
            }),
        ],
    });
}
function eP(e) {
    let {
            sku: l,
            guildId: t,
            giftRecipient: i,
            giftingOrigin: a,
            trackPDPClick: o,
            analyticsLocations: c,
            orbPrice: u,
            orbsGate: b,
            formattedPrice: p,
            unavailableLabel: j,
        } = e,
        _ = l.id,
        N = (0, r.bG)([B.A], () => B.A.getNormalizedSKUEligibility(_), [_]),
        g = N && "CAN_CHECKOUT" === b,
        f = p.discountedPrice ?? p.normalPrice,
        C = n.useCallback(() => {
            (o(ek.Jq.BUY_BUTTON),
                (0, $.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...c, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                ));
        }, [l, o, t, c]),
        v = n.useCallback(() => {
            (o(ek.Jq.GIFT_BUTTON),
                (0, $.a)(
                    l,
                    { isGift: !0, giftRecipient: i, giftingOrigin: a },
                    { analyticsLocations: [...c, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [l, o, i, a, c]),
        A = (0, E.h)(l.applicationId),
        k = n.useMemo(() => [...c, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [c]),
        T = n.useCallback(() => {
            null != A &&
                (o(ek.Jq.BUY_WITH_ORBS_BUTTON),
                (0, R.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    onComplete: () => {
                        ((0, W.j)(), (0, J.n)({ sku: l, application: A, analyticsLocations: k }));
                    },
                    analyticsLocations: k,
                }));
        }, [l, A, k, o]),
        O = n.useCallback(() => {
            o(ek.Jq.EARN_MORE_ORBS_BUTTON);
        }, [o]),
        S = N
            ? (0, s.jsx)(es, {
                  orbsGate: b,
                  orbPrice: u,
                  onCheckout: T,
                  onTrackEarnMoreOrbs: O,
                  variant: g ? "primary" : "secondary",
              })
            : null,
        y = (0, s.jsxs)("div", {
            className: eS.mr,
            children: [
                (0, s.jsx)(m.$, {
                    variant: g ? "secondary" : "primary",
                    onClick: C,
                    text: null != f ? V.intl.format(V.t.YkXGyY, { priceString: f }) : V.intl.string(V.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, s.jsx)(x.D, {
                    className: eS.xP,
                    onClick: v,
                    "aria-label": V.intl.string(V.t.QAZA5f),
                    role: "button",
                    children: (0, s.jsx)(h.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        D = (0, s.jsx)(m.$, {
            icon: h.GiftIcon,
            variant: "secondary",
            onClick: v,
            text: V.intl.string(V.t.QAZA5f),
            fullWidth: !0,
        });
    return null != j
        ? (0, s.jsxs)("div", {
              className: eS.NC,
              children: [
                  (0, s.jsx)(d.E, {
                      variant: "text-xxs/normal",
                      color: "text-subtle",
                      children: V.intl.string(V.t["35vxnc"]),
                  }),
                  (0, s.jsx)(m.$, { variant: "secondary", text: j, disabled: !0, fullWidth: !0 }),
              ],
          })
        : (0, s.jsxs)("div", {
              className: eS.NC,
              children: [
                  !N &&
                      (0, s.jsx)(d.E, {
                          variant: "text-xxs/normal",
                          color: "text-subtle",
                          children: V.intl.string(V.t.IqlPbQ),
                      }),
                  g && S,
                  N ? y : D,
                  !g && S,
              ],
          });
}
function eU(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let n = null != l.labelIconAssetId ? (0, H.YE)(t, l.labelIconAssetId) : null;
    return (0, s.jsxs)("div", {
        className: eS.HI,
        children: [
            null != n && (0, s.jsx)("img", { className: eS.IX, src: n, alt: "" }, n),
            (0, s.jsx)(d.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eH(e) {
    let { onClick: l, onMouseDown: t, children: n, ariaLabel: i, className: a = eS.jU } = e;
    return (0, s.jsx)(x.D, { onClick: l, onMouseDown: t, className: a, "aria-label": i, role: "button", children: n });
}
function eG(e) {
    let { selectedCarouselItem: l, title: t, description: n, applicationId: i, className: a } = e;
    return (0, s.jsxs)("div", {
        className: a,
        children: [
            null != t && (0, s.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
            (0, s.jsx)(eU, { applicationId: i, selectedCarouselItem: l }),
            null != n && (0, s.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
        ],
    });
}
function ew(e) {
    let {
            customNavigateToSocialLayerStorefront: l,
            transitionState: t,
            returnRef: i,
            skuId: c,
            applicationId: u,
            isStorefront: m,
            giftRecipient: x,
            giftingOrigin: h,
            analyticsLocations: I,
            analyticsContext: E,
            unavailableLabel: R,
            onClose: J,
        } = e,
        { analyticsLocations: W } = (0, A.Ay)(I ?? []),
        { guildId: $ } = (0, G.nG)(u),
        X = (0, r.bG)([L.default], () => L.default.getId());
    n.useEffect(() => {
        null != c && (0, w.iR)(u, c);
    }, [u, c]);
    let Z = (0, M.A)({ applicationId: u }),
        ee = (0, r.bG)([B.A], () => B.A.getSkuAssets()),
        el = (0, r.bG)([P.A], () => P.A.isFetching(c)),
        et = (0, b.M)((0, v.Ay)()),
        [es, en] = n.useState(!0),
        ei = (0, y.A)({ skuId: c }),
        ea = (0, T.uS)(u),
        er = null == ei || ei.available || ea ? null : (R ?? V.intl.string(V.t.RWouSQ)),
        eo = (0, S.JL)({ sku: ei }),
        { display: ec, reward: ed, offers: eu } = (0, q.b)({ surface: "pdp", applicationId: u, skuId: c }),
        em = n.useMemo(() => eu.find((e) => e.type === O.B8.ORB_REDEMPTION) ?? null, [eu]),
        { state: ex, isReady: eb } = (0, Y.we)({ orbPriceAmount: eo?.amount, spendOrbsOffer: em }),
        ep = (0, S.CD)({ sku: ei }),
        [ej, e_] = n.useState(0),
        [eN, eg] = n.useMemo(
            () =>
                (function (e, l, t, s) {
                    let { heroWidth: n } = s,
                        i = [],
                        a = [];
                    if (null == e || 0 === e.length) return [i, a];
                    for (let s of e) {
                        let e = null != s.assetId ? t[s.assetId] : null;
                        null != e &&
                            (i.push(s),
                            e.mime_type.startsWith("video/")
                                ? a.push({
                                      type: "video",
                                      src: (0, H.YE)(l, e, n, "mp4"),
                                      videoThumbnailSrc: (0, H.YE)(l, e, n, "webp"),
                                      thumbnailSrc:
                                          null != s.thumbnailAssetId
                                              ? (0, H.YE)(l, s.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != s.backgroundAssetId
                                              ? (0, H.YE)(l, s.backgroundAssetId, n, G.pV)
                                              : void 0,
                                  })
                                : a.push({
                                      type: "image",
                                      src: (0, H.YE)(l, e, n, "webp"),
                                      thumbnailSrc:
                                          null != s.thumbnailAssetId
                                              ? (0, H.YE)(l, s.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != s.backgroundAssetId
                                              ? (0, H.YE)(l, s.backgroundAssetId, n, G.pV)
                                              : void 0,
                                  }));
                    }
                    return [i, a];
                })(ei?.tenantMetadata?.socialLayer?.carouselItems ?? [], u, ee, { heroWidth: 747 }),
            [ei, u, ee],
        ),
        [ef, eC] = n.useState(null),
        [eR, eD] = n.useState(!1);
    n.useEffect(() => {
        if (null == ef) return;
        let e = new ResizeObserver(() => {
            eD(ef.scrollHeight > ef.clientHeight);
        });
        return (e.observe(ef), () => e.disconnect());
    }, [ef]);
    let eU = ej < eg.length ? ej : 0,
        ew = eN[eU] ?? null,
        eB = eg.length > 1,
        eM = eg.some((e) => "video" === e.type);
    ((0, D.pE)(),
        (0, C.Ay)(() => {
            (U.default.track(eO.HAw.OPEN_MODAL, { location_stack: W, type: eT.Nh, sku_id: c, application_id: u }),
                (0, w.Xw)());
        }));
    let eY = n.useCallback(
            (e) => {
                U.default.track(eO.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: E?.sessionId,
                    sku_id: c,
                    guild_id: E?.guildId,
                    application_id: u,
                    cta_type: e,
                    location_stack: W,
                });
            },
            [E, c, u, W],
        ),
        eq = n.useCallback(() => {
            eY(ek.Jq.NITRO_UPSELL_BUTTON);
        }, [eY]),
        eF = n.useRef(!1);
    n.useEffect(() => {
        !eF.current &&
            "HIDDEN" !== ex &&
            eb &&
            ((eF.current = !0),
            U.default.track(eO.HAw.SLAYER_STOREFRONT_ORBS_PURCHASE_GATE_VIEWED, {
                slayer_storefront_session_id: E?.sessionId,
                sku_id: c,
                guild_id: E?.guildId,
                application_id: u,
                orbs_purchase_gate_state: ex,
                orb_price: eo?.amount,
                location_stack: W,
            }));
    }, [ex, eb, E, c, u, eo, W]);
    let ez = n.useCallback(
        (e) => {
            (e_(e), eY(ek.Jq.CAROUSEL_ITEM));
        },
        [eY],
    );
    n.useEffect(() => {
        null == c || P.A.isFetching(c) || (0, w.Pp)(u, c);
    }, [u, c]);
    let eJ = n.useCallback(() => {
            null != ei &&
                (eY(ek.Jq.FORWARD_BUTTON),
                (0, z.d)({
                    sku: ei,
                    guildId: $,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: W,
                    analyticsContext: E,
                }));
        }, [ei, $, eY, W, E]),
        eW = n.useCallback(() => {
            eY(ek.Jq.WISHLIST_BUTTON);
        }, [eY]),
        e$ = n.useCallback(() => {
            (0, F.G)({ applicationId: u });
        }, [u]),
        eV = n.useCallback(() => {
            (eY(ek.Jq.VISIT_SHOP), (0, p.closeAllModals)(), null != l ? l() : (0, F.default)({ applicationId: u }));
        }, [u, eY, l]),
        eX = n.useCallback(() => {
            (en(!es), eY(ek.Jq.MUTE_BUTTON));
        }, [es, eY]),
        eK = ei?.tenantMetadata?.socialLayer;
    if (null == ei || null == eK) return el ? (0, s.jsx)(j.y, {}) : null;
    let eQ = Z?.storefront,
        eZ = eQ?.logoAssetId != null ? (0, H.YE)(eQ.applicationId, eQ.logoAssetId, 256) : null,
        e0 = eQ?.lightThemeLogoAssetId != null ? (0, H.YE)(eQ.applicationId, eQ.lightThemeLogoAssetId, 256) : null,
        e1 = null;
    e1 = et ? (eZ ?? e0) : (e0 ?? eZ);
    let e4 = null;
    return (
        null != er ? (e4 = (0, s.jsx)(eE.G, { label: er })) : ei.exclusive && (e4 = (0, s.jsx)(Q.I, {})),
        (0, s.jsx)(o.EO, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: eS.CR,
            size: o.rI.DYNAMIC,
            returnRef: i,
            children: (0, s.jsx)(o.$m, {
                className: eS.jE,
                scrollbarGutter: !1,
                children: (0, s.jsxs)("div", {
                    className: eS.nr,
                    children: [
                        (0, s.jsxs)("div", {
                            className: a()(eS.op, { [eS.uk]: ei.exclusive }),
                            children: [
                                (0, s.jsx)("div", {
                                    className: eS.r$,
                                    children:
                                        null != e1
                                            ? (0, s.jsx)("img", { className: eS.wm, src: e1, alt: eQ?.title ?? "" })
                                            : null,
                                }),
                                (0, s.jsxs)("div", {
                                    ref: eC,
                                    className: eS.zD,
                                    children: [
                                        null != e4 && (0, s.jsx)("div", { className: eS.Od, children: e4 }),
                                        eB
                                            ? (0, s.jsxs)(s.Fragment, {
                                                  children: [
                                                      (0, s.jsx)(ey, { sku: ei }),
                                                      (0, s.jsx)("div", {
                                                          className: eS._D,
                                                          children: (0, s.jsx)(K, {
                                                              mediaItems: eg,
                                                              labels: eN.map((e) => e.label),
                                                              selectedIndex: eU,
                                                              onSelectIndex: ez,
                                                          }),
                                                      }),
                                                      (0, s.jsx)(eG, {
                                                          selectedCarouselItem: ew,
                                                          title: ew?.title,
                                                          description: ew?.description,
                                                          applicationId: u,
                                                          className: eS.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, s.jsx)(eG, {
                                                  selectedCarouselItem: ew,
                                                  title: ei.name,
                                                  description: ei.description,
                                                  applicationId: u,
                                                  className: eS.cP,
                                              }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: a()(eS.Td, { [eS.t7]: eR }),
                                    children: [
                                        (0, s.jsx)(eL, {
                                            orbPrice: eo,
                                            orbsGate: ex,
                                            formattedPrice: ep,
                                            hasNitroOffer: ec?.flavor === "nitro",
                                        }),
                                        "HIDDEN" !== ex &&
                                            (0, s.jsx)(ev, {
                                                analyticsLocations: W,
                                                applicationId: u,
                                                onTrackClickNitroUpsell: eq,
                                                orbsGate: ex,
                                            }),
                                        null != ec &&
                                            (0, s.jsx)(eI.e, {
                                                promotion: ec,
                                                reward: ed,
                                                applicationId: u,
                                                analyticsLocations: W,
                                                onUpsellClick: () => eY(ek.Jq.NITRO_UPSELL_BUTTON),
                                            }),
                                        (0, s.jsx)(eP, {
                                            sku: ei,
                                            guildId: $,
                                            giftRecipient: x?.id !== X ? x : void 0,
                                            giftingOrigin: x?.id !== X ? h : void 0,
                                            trackPDPClick: eY,
                                            analyticsLocations: W,
                                            orbPrice: eo,
                                            orbsGate: ex,
                                            formattedPrice: ep,
                                            unavailableLabel: er,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: eS.il,
                            children: [
                                (0, s.jsx)(eh, { item: eg[eU], isMuted: es, alt: ew?.label ?? ei.name }),
                                !m &&
                                    (0, s.jsxs)(eH, {
                                        onClick: eV,
                                        onMouseDown: e$,
                                        ariaLabel: V.intl.string(V.t["+v/1Dk"]),
                                        className: eS.gW,
                                        children: [
                                            (0, s.jsx)(_.U, { size: "refresh_sm", color: "currentColor" }),
                                            (0, s.jsx)(d.E, {
                                                variant: "text-md/medium",
                                                color: "currentColor",
                                                children: V.intl.string(V.t["+v/1Dk"]),
                                            }),
                                        ],
                                    }),
                                (0, s.jsxs)("div", {
                                    className: eS.V7,
                                    children: [
                                        null != ei &&
                                            (0, s.jsx)(eA._, {
                                                sku: ei,
                                                isCardHovered: !0,
                                                className: a()(eS.jU, eS.ij),
                                                trackButtonClick: eW,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, s.jsx)(eH, {
                                            onClick: eJ,
                                            ariaLabel: V.intl.string(V.t.Ej3B3Y),
                                            children: (0, s.jsx)(k.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        eM &&
                                            (0, s.jsx)(eH, {
                                                onClick: eX,
                                                ariaLabel: es ? V.intl.string(V.t.YqAjXy) : V.intl.string(V.t.w4m945),
                                                children: es
                                                    ? (0, s.jsx)(N._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, s.jsx)(g.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, s.jsx)(eH, {
                                            onClick: J,
                                            ariaLabel: V.intl.string(V.t.cpT0Cq),
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
