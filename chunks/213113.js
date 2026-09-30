t.d(l, { default: () => ey });
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
    j = t(192308),
    p = t(289873),
    _ = t(34188),
    N = t(358618),
    f = t(983851),
    v = t(972213),
    g = t(964486),
    C = t(736653),
    A = t(793574),
    E = t(688810),
    I = t(429913),
    k = t(427209),
    T = t(977445),
    O = t(288106),
    S = t(993046),
    y = t(801228),
    R = t(652165),
    L = t(594832),
    D = t(280450),
    P = t(67480),
    U = t(174459),
    H = t(371794),
    M = t(871123),
    Y = t(733391),
    w = t(832163),
    B = t(429635),
    G = t(69236),
    q = t(2157),
    F = t(44724);
t(321073);
var z = t(345938),
    W = t(510022),
    $ = t(317560),
    J = t(99161),
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
            (a(), (0, el.mA)({ fromContent: ee.u.SOCIAL_LAYER_STOREFRONT }), (0, $.j)());
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
    ej = t(454491),
    ep = t(743693),
    e_ = t(15061),
    eN = t(995393),
    ef = t(188275),
    ev = t(652215),
    eg = t(338235);
function eC(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, s.jsxs)("div", {
              className: eg.AX,
              children: [
                  (0, s.jsx)(c.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, s.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function eA(e) {
    let { amount: l, orbGate: t } = e;
    return (0, s.jsxs)("div", {
        className: a()(eg.aX, { [eg.dQ]: "NEEDS_NITRO" === t || "NOT_ENOUGH_ORBS" === t }),
        children: [
            (0, s.jsx)(u.C, { size: "xs", color: "currentColor" }),
            (0, s.jsx)(d.E, { variant: "text-md/semibold", color: "currentColor", children: l }),
        ],
    });
}
function eE(e) {
    let { normalPrice: l, discountedPrice: t, discountPercent: n, hasNitroOffer: i } = e;
    return i && null != t
        ? (0, s.jsx)(eb.A, { discountedPrice: t, normalPrice: l })
        : null != n && null != t
          ? (0, s.jsxs)("div", {
                className: eg._k,
                children: [
                    (0, s.jsx)(d.E, { variant: "text-md/medium", className: eg.Jb, children: l }),
                    (0, s.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                    (0, s.jsx)(d.E, { variant: "text-md/bold", className: eg.Fi, children: n }),
                ],
            })
          : (0, s.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: l });
}
function eI(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: n, hasNitroOffer: i } = e,
        { normalPrice: r, discountedPrice: o, discountPercent: c } = n;
    if (null == r) return null;
    let d = "HIDDEN" !== t && null != l,
        u = "CAN_CHECKOUT" === t;
    return (0, s.jsxs)("div", {
        className: eg.sj,
        children: [
            (0, s.jsx)(Z.V, { textColor: "text-subtle" }),
            (0, s.jsx)("div", {
                className: a()(eg.hO, d && eg.XE),
                children:
                    d && u
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(eA, { amount: l.amount, orbGate: t }),
                                  (0, s.jsx)(eE, {
                                      normalPrice: r,
                                      discountedPrice: o,
                                      discountPercent: c,
                                      hasNitroOffer: i,
                                  }),
                              ],
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(eE, {
                                      normalPrice: r,
                                      discountedPrice: o,
                                      discountPercent: c,
                                      hasNitroOffer: i,
                                  }),
                                  d && (0, s.jsx)(eA, { amount: l.amount, orbGate: t }),
                              ],
                          }),
            }),
        ],
    });
}
function ek(e) {
    let {
            sku: l,
            guildId: t,
            giftRecipient: i,
            giftingOrigin: a,
            trackPDPClick: o,
            analyticsLocations: c,
            orbPrice: u,
            orbsGate: b,
            formattedPrice: j,
            unavailableLabel: p,
        } = e,
        _ = l.id,
        N = (0, r.bG)([w.A], () => w.A.getNormalizedSKUEligibility(_), [_]),
        f = N && "CAN_CHECKOUT" === b,
        v = j.discountedPrice ?? j.normalPrice,
        g = n.useCallback(() => {
            (o(eN.Jq.BUY_BUTTON),
                (0, J.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...c, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                ));
        }, [l, o, t, c]),
        C = n.useCallback(() => {
            (o(eN.Jq.GIFT_BUTTON),
                (0, J.a)(
                    l,
                    { isGift: !0, giftRecipient: i, giftingOrigin: a },
                    { analyticsLocations: [...c, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [l, o, i, a, c]),
        E = (0, I.h)(l.applicationId),
        k = n.useMemo(() => [...c, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [c]),
        T = n.useCallback(() => {
            null != E &&
                (o(eN.Jq.BUY_WITH_ORBS_BUTTON),
                (0, R.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    onComplete: () => {
                        ((0, $.j)(), (0, W.n)({ sku: l, application: E, analyticsLocations: k }));
                    },
                    analyticsLocations: k,
                }));
        }, [l, E, k, o]),
        O = n.useCallback(() => {
            o(eN.Jq.EARN_MORE_ORBS_BUTTON);
        }, [o]),
        S = N
            ? (0, s.jsx)(es, {
                  orbsGate: b,
                  orbPrice: u,
                  onCheckout: T,
                  onTrackEarnMoreOrbs: O,
                  variant: f ? "primary" : "secondary",
              })
            : null,
        y = (0, s.jsxs)("div", {
            className: eg.mr,
            children: [
                (0, s.jsx)(m.$, {
                    variant: f ? "secondary" : "primary",
                    onClick: g,
                    text: null != v ? V.intl.format(V.t.YkXGyY, { priceString: v }) : V.intl.string(V.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, s.jsx)(x.D, {
                    className: eg.xP,
                    onClick: C,
                    "aria-label": V.intl.string(V.t.QAZA5f),
                    role: "button",
                    children: (0, s.jsx)(h.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        L = (0, s.jsx)(m.$, {
            icon: h.GiftIcon,
            variant: "secondary",
            onClick: C,
            text: V.intl.string(V.t.QAZA5f),
            fullWidth: !0,
        });
    return null != p
        ? (0, s.jsxs)("div", {
              className: eg.NC,
              children: [
                  (0, s.jsx)(d.E, {
                      variant: "text-xxs/normal",
                      color: "text-subtle",
                      children: V.intl.string(V.t["35vxnc"]),
                  }),
                  (0, s.jsx)(m.$, { variant: "secondary", text: p, disabled: !0, fullWidth: !0 }),
              ],
          })
        : (0, s.jsxs)("div", {
              className: eg.NC,
              children: [
                  !N &&
                      (0, s.jsx)(d.E, {
                          variant: "text-xxs/normal",
                          color: "text-subtle",
                          children: V.intl.string(V.t.IqlPbQ),
                      }),
                  f && S,
                  N ? y : L,
                  !f && S,
              ],
          });
}
function eT(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let n = null != l.labelIconAssetId ? (0, H.YE)(t, l.labelIconAssetId) : null;
    return (0, s.jsxs)("div", {
        className: eg.HI,
        children: [
            null != n && (0, s.jsx)("img", { className: eg.IX, src: n, alt: "" }, n),
            (0, s.jsx)(d.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eO(e) {
    let { onClick: l, onMouseDown: t, children: n, ariaLabel: i, className: a = eg.jU } = e;
    return (0, s.jsx)(x.D, { onClick: l, onMouseDown: t, className: a, "aria-label": i, role: "button", children: n });
}
function eS(e) {
    let { selectedCarouselItem: l, title: t, description: n, applicationId: i, className: a } = e;
    return (0, s.jsxs)("div", {
        className: a,
        children: [
            null != t && (0, s.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
            (0, s.jsx)(eT, { applicationId: i, selectedCarouselItem: l }),
            null != n && (0, s.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
        ],
    });
}
function ey(e) {
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
            analyticsContext: I,
            unavailableLabel: R,
            onClose: W,
        } = e,
        { analyticsLocations: $ } = (0, E.Ay)(A ?? []),
        { guildId: J } = (0, M.nG)(u),
        X = (0, r.bG)([D.default], () => D.default.getId());
    n.useEffect(() => {
        null != c && (0, Y.iR)(u, c);
    }, [u, c]);
    let Z = (0, B.A)({ applicationId: u }),
        ee = (0, r.bG)([w.A], () => w.A.getSkuAssets()),
        el = (0, r.bG)([P.A], () => P.A.isFetching(c)),
        et = (0, b.M)((0, C.Ay)()),
        [es, en] = n.useState(!0),
        ei = (0, y.A)({ skuId: c }),
        ea = (0, T.uS)(u),
        er = null == ei || ei.available || ea ? null : (R ?? V.intl.string(V.t.RWouSQ)),
        eo = (0, S.JL)({ sku: ei }),
        { display: ec, reward: ed, offers: eu } = (0, q.b)({ surface: "pdp", applicationId: u, skuId: c }),
        em = n.useMemo(() => eu.find((e) => e.type === O.B8.ORB_REDEMPTION) ?? null, [eu]),
        { state: ex, isReady: eb } = (0, G.we)({ orbPriceAmount: eo?.amount, spendOrbsOffer: em }),
        eA = (0, S.CD)({ sku: ei }),
        [eE, eT] = n.useState(0),
        [ey, eR] = n.useMemo(
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
                                              ? (0, H.YE)(l, s.backgroundAssetId, n, M.pV)
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
                                              ? (0, H.YE)(l, s.backgroundAssetId, n, M.pV)
                                              : void 0,
                                  }));
                    }
                    return [i, a];
                })(ei?.tenantMetadata?.socialLayer?.carouselItems ?? [], u, ee, { heroWidth: 747 }),
            [ei, u, ee],
        ),
        [eL, eD] = n.useState(null),
        [eP, eU] = n.useState(!1);
    n.useEffect(() => {
        if (null == eL) return;
        let e = new ResizeObserver(() => {
            eU(eL.scrollHeight > eL.clientHeight);
        });
        return (e.observe(eL), () => e.disconnect());
    }, [eL]);
    let eH = eE < eR.length ? eE : 0,
        eM = ey[eH] ?? null,
        eY = eR.length > 1,
        ew = eR.some((e) => "video" === e.type);
    ((0, L.pE)(),
        (0, g.Ay)(() => {
            (U.default.track(ev.HAw.OPEN_MODAL, { location_stack: $, type: ef.Nh, sku_id: c, application_id: u }),
                (0, Y.Xw)());
        }));
    let eB = n.useCallback(
            (e) => {
                U.default.track(ev.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: I?.sessionId,
                    sku_id: c,
                    guild_id: I?.guildId,
                    application_id: u,
                    cta_type: e,
                    location_stack: $,
                });
            },
            [I, c, u, $],
        ),
        eG = n.useRef(!1);
    n.useEffect(() => {
        !eG.current &&
            "HIDDEN" !== ex &&
            eb &&
            ((eG.current = !0),
            U.default.track(ev.HAw.SLAYER_STOREFRONT_ORBS_PURCHASE_GATE_VIEWED, {
                slayer_storefront_session_id: I?.sessionId,
                sku_id: c,
                guild_id: I?.guildId,
                application_id: u,
                orbs_purchase_gate_state: ex,
                orb_price: eo?.amount,
                location_stack: $,
            }));
    }, [ex, eb, I, c, u, eo, $]);
    let eq = n.useCallback(
        (e) => {
            (eT(e), eB(eN.Jq.CAROUSEL_ITEM));
        },
        [eB],
    );
    n.useEffect(() => {
        null == c || P.A.isFetching(c) || (0, Y.Pp)(u, c);
    }, [u, c]);
    let eF = n.useCallback(() => {
            null != ei &&
                (eB(eN.Jq.FORWARD_BUTTON),
                (0, z.d)({
                    sku: ei,
                    guildId: J,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: $,
                    analyticsContext: I,
                }));
        }, [ei, J, eB, $, I]),
        ez = n.useCallback(() => {
            eB(eN.Jq.WISHLIST_BUTTON);
        }, [eB]),
        eW = n.useCallback(() => {
            (0, F.G)({ applicationId: u });
        }, [u]),
        e$ = n.useCallback(() => {
            (eB(eN.Jq.VISIT_SHOP), (0, j.closeAllModals)(), null != l ? l() : (0, F.default)({ applicationId: u }));
        }, [u, eB, l]),
        eJ = n.useCallback(() => {
            (en(!es), eB(eN.Jq.MUTE_BUTTON));
        }, [es, eB]),
        eV = ei?.tenantMetadata?.socialLayer;
    if (null == ei || null == eV) return el ? (0, s.jsx)(p.y, {}) : null;
    let eX = Z?.storefront,
        eK = eX?.logoAssetId != null ? (0, H.YE)(eX.applicationId, eX.logoAssetId, 256) : null,
        eQ = eX?.lightThemeLogoAssetId != null ? (0, H.YE)(eX.applicationId, eX.lightThemeLogoAssetId, 256) : null,
        eZ = null;
    eZ = et ? (eK ?? eQ) : (eQ ?? eK);
    let e0 = null;
    return (
        null != er ? (e0 = (0, s.jsx)(e_.G, { label: er })) : ei.exclusive && (e0 = (0, s.jsx)(Q.I, {})),
        (0, s.jsx)(o.EO, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: eg.CR,
            size: o.rI.DYNAMIC,
            returnRef: i,
            children: (0, s.jsx)(o.$m, {
                className: eg.jE,
                scrollbarGutter: !1,
                children: (0, s.jsxs)("div", {
                    className: eg.nr,
                    children: [
                        (0, s.jsxs)("div", {
                            className: a()(eg.op, { [eg.uk]: ei.exclusive }),
                            children: [
                                (0, s.jsx)("div", {
                                    className: eg.r$,
                                    children:
                                        null != eZ
                                            ? (0, s.jsx)("img", { className: eg.wm, src: eZ, alt: eX?.title ?? "" })
                                            : null,
                                }),
                                (0, s.jsxs)("div", {
                                    ref: eD,
                                    className: eg.zD,
                                    children: [
                                        null != e0 && (0, s.jsx)("div", { className: eg.Od, children: e0 }),
                                        eY
                                            ? (0, s.jsxs)(s.Fragment, {
                                                  children: [
                                                      (0, s.jsx)(eC, { sku: ei }),
                                                      (0, s.jsx)("div", {
                                                          className: eg._D,
                                                          children: (0, s.jsx)(K, {
                                                              mediaItems: eR,
                                                              labels: ey.map((e) => e.label),
                                                              selectedIndex: eH,
                                                              onSelectIndex: eq,
                                                          }),
                                                      }),
                                                      (0, s.jsx)(eS, {
                                                          selectedCarouselItem: eM,
                                                          title: eM?.title,
                                                          description: eM?.description,
                                                          applicationId: u,
                                                          className: eg.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, s.jsx)(eS, {
                                                  selectedCarouselItem: eM,
                                                  title: ei.name,
                                                  description: ei.description,
                                                  applicationId: u,
                                                  className: eg.cP,
                                              }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: a()(eg.Td, { [eg.t7]: eP }),
                                    children: [
                                        (0, s.jsx)(eI, {
                                            orbPrice: eo,
                                            orbsGate: ex,
                                            formattedPrice: eA,
                                            hasNitroOffer: ec?.flavor === "nitro",
                                        }),
                                        null != ec &&
                                            (0, s.jsx)(ej.e, {
                                                promotion: ec,
                                                reward: ed,
                                                applicationId: u,
                                                analyticsLocations: $,
                                                onUpsellClick: () => eB(eN.Jq.NITRO_UPSELL_BUTTON),
                                            }),
                                        (0, s.jsx)(ek, {
                                            sku: ei,
                                            guildId: J,
                                            giftRecipient: x?.id !== X ? x : void 0,
                                            giftingOrigin: x?.id !== X ? h : void 0,
                                            trackPDPClick: eB,
                                            analyticsLocations: $,
                                            orbPrice: eo,
                                            orbsGate: ex,
                                            formattedPrice: eA,
                                            unavailableLabel: er,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: eg.il,
                            children: [
                                (0, s.jsx)(eh, { item: eR[eH], isMuted: es, alt: eM?.label ?? ei.name }),
                                !m &&
                                    (0, s.jsxs)(eO, {
                                        onClick: e$,
                                        onMouseDown: eW,
                                        ariaLabel: V.intl.string(V.t["+v/1Dk"]),
                                        className: eg.gW,
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
                                    className: eg.V7,
                                    children: [
                                        null != ei &&
                                            (0, s.jsx)(ep._, {
                                                sku: ei,
                                                isCardHovered: !0,
                                                className: a()(eg.jU, eg.ij),
                                                trackButtonClick: ez,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, s.jsx)(eO, {
                                            onClick: eF,
                                            ariaLabel: V.intl.string(V.t.Ej3B3Y),
                                            children: (0, s.jsx)(k.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        ew &&
                                            (0, s.jsx)(eO, {
                                                onClick: eJ,
                                                ariaLabel: es ? V.intl.string(V.t.YqAjXy) : V.intl.string(V.t.w4m945),
                                                children: es
                                                    ? (0, s.jsx)(N._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, s.jsx)(f.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, s.jsx)(eO, {
                                            onClick: W,
                                            ariaLabel: V.intl.string(V.t.cpT0Cq),
                                            children: (0, s.jsx)(v.XLargeIcon, {
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
