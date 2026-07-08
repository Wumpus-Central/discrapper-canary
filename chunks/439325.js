t.d(l, { default: () => eH });
var s = t(627968),
    n = t(64700),
    i = t(503698),
    r = t.n(i),
    a = t(17928),
    o = t(534514),
    c = t(834730),
    d = t(318254),
    u = t(821609),
    m = t(597770),
    x = t(939249),
    h = t(331322),
    b = t(366010),
    j = t(192308),
    p = t(289873),
    g = t(935462),
    _ = t(34188),
    N = t(358618),
    C = t(983851),
    f = t(972213),
    v = t(964486),
    E = t(736653),
    I = t(793574),
    k = t(688810),
    A = t(429913),
    T = t(427209),
    S = t(117218),
    O = t(801228),
    y = t(652165),
    D = t(449410),
    R = t(561794),
    L = t(280450),
    P = t(328968),
    U = t(174459),
    H = t(371794),
    Y = t(871123),
    G = t(733391),
    M = t(832163),
    B = t(429635),
    F = t(69236),
    w = t(31969),
    q = t(44724);
t(321073);
var $ = t(345938),
    z = t(510022),
    W = t(317560),
    J = t(533406),
    V = t(375708),
    K = t(964421);
function X(e) {
    let { mediaItems: l, labels: t, selectedIndex: n, onSelectIndex: i } = e;
    return l.length <= 1
        ? null
        : (0, s.jsxs)("div", {
              className: K.kL,
              children: [
                  (0, s.jsx)(c.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: V.intl.string(V.t.U7DAV9),
                  }),
                  (0, s.jsx)("div", {
                      className: K.Vg,
                      children: l.map((e, l) =>
                          (0, s.jsx)(
                              x.D,
                              {
                                  className: r()(K.xn, { [K.Y4]: l === n }),
                                  onClick: () => i(l),
                                  "aria-label": t?.[l],
                                  "aria-pressed": l === n,
                                  children: (0, s.jsx)("img", {
                                      className: K.q_,
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
    et = t(942460);
function es(e) {
    let { orbsGate: l, orbPrice: t, onCheckout: i, onTrackEarnMoreOrbs: r, variant: a = "secondary" } = e,
        o = n.useCallback(() => {
            r(), (0, el.mA)({ fromContent: ee.u.SOCIAL_LAYER_STOREFRONT }), (0, W.j)();
        }, [r]);
    return "HIDDEN" === l || null == t
        ? null
        : "NOT_ENOUGH_ORBS" === l
          ? (0, s.jsx)(u.$, { onClick: o, variant: a, icon: d.C, text: V.intl.string(V.t.H57f41), fullWidth: !0 })
          : (0, s.jsx)(u.$, {
                onClick: i,
                disabled: "NEEDS_NITRO" === l,
                variant: a,
                text: (0, s.jsx)("span", {
                    className: et.Y,
                    children: V.intl.format(V.t.lOtBOI, {
                        orbPrice: t.amount,
                        orbIconHook: () => (0, s.jsx)(d.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                    }),
                }),
                fullWidth: !0,
            });
}
var en = t(310784),
    ei = t.n(en),
    er = t(775602),
    ea = t(654107),
    eo = t(175671),
    ec = t(619517),
    ed = t(34337),
    eu = t(172079);
function em(e) {
    return (0, ed.$o)({ ...e, className: eu.tN, mediaPlayerClassName: eu.yf });
}
function ex(e) {
    return (0, s.jsx)(ec.Ay, { ...e });
}
function eh(e) {
    let { item: l, isMuted: t, className: i, alt: r = "" } = e,
        o = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, ea.rh)(l, "#000000");
            return n.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = ei()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        c = (0, a.bG)([er.Ay], () => er.Ay.useReducedMotion),
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
                      (0, s.jsx)("img", { src: l.src, alt: r, className: eu.Sl }, l.src),
                      null != d && !c && (0, s.jsx)("img", { src: d, alt: "", className: eu.Ve, onAnimationEnd: h }, d),
                  ],
              }),
          });
}
var eb = t(910200),
    ej = t(320448),
    ep = t(403581),
    eg = t(532794),
    e_ = t(202541),
    eN = t(430825),
    eC = t(563681);
function ef(e) {
    let { orbsGate: l, onTrackClickNitroUpsell: t, applicationId: i, analyticsLocations: r } = e,
        o = (0, a.bG)([M.A], () => M.A.getConfigForApplicationId(i)),
        c = n.useCallback(() => {
            t(), (0, eg.A)({ subscriptionTier: e_.pe.TIER_2, analyticsLocations: r, applicationId: i });
        }, [r, i, t]);
    return "HIDDEN" === l
        ? null
        : "NEEDS_NITRO" === l
          ? (0, s.jsx)(x.D, {
                className: eC.L,
                onClick: c,
                children: (0, s.jsx)(eb.Ay, {
                    Icon: ep.t,
                    gradientColor: "nitro-pink",
                    tooltip: V.intl.string(eN.default.XwadDC),
                    text: V.intl.string(eN.default.cg95CA),
                    trailing: (0, s.jsx)(ej._, { size: "xs" }),
                }),
            })
          : (0, s.jsx)(eb.O0, {
                Icon: ep.t,
                text: V.intl.string(eN.default.cg95CA),
                endDatetime: o?.promotionEndDatetime,
                gradientColor: "nitro-pink",
            });
}
var ev = t(743693),
    eE = t(995393),
    eI = t(188275),
    ek = t(652215),
    eA = t(199138);
function eT(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, s.jsxs)("div", {
              className: eA.AX,
              children: [
                  (0, s.jsx)(o.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, s.jsx)(c.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function eS(e) {
    let { amount: l, orbGate: t } = e;
    return (0, s.jsxs)("div", {
        className: r()(eA.aX, { [eA.dQ]: "NEEDS_NITRO" === t || "NOT_ENOUGH_ORBS" === t }),
        children: [
            (0, s.jsx)(d.C, { size: "xs", color: "currentColor" }),
            (0, s.jsx)(c.E, { variant: "text-md/semibold", color: "currentColor", children: l }),
        ],
    });
}
function eO(e) {
    let { normalPrice: l, discountedPrice: t, discountPercent: n } = e;
    return null != n && null != t
        ? (0, s.jsxs)("div", {
              className: eA._k,
              children: [
                  (0, s.jsx)(c.E, { variant: "text-md/medium", className: eA.Jb, children: l }),
                  (0, s.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                  (0, s.jsx)(c.E, { variant: "text-md/bold", className: eA.Fi, children: n }),
              ],
          })
        : (0, s.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: l });
}
function ey(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: n, hideOrbsPrice: i } = e,
        { normalPrice: a, discountedPrice: o, discountPercent: c } = n;
    if (null == a) return null;
    let d = "HIDDEN" !== t && null != l && !i,
        u = "CAN_CHECKOUT" === t;
    return (0, s.jsxs)("div", {
        className: eA.sj,
        children: [
            (0, s.jsx)(Z.V, { textColor: "text-subtle" }),
            (0, s.jsx)("div", {
                className: r()(eA.hO, d && eA.XE),
                children:
                    d && u
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(eS, { amount: l.amount, orbGate: t }),
                                  (0, s.jsx)(eO, { normalPrice: a, discountedPrice: o, discountPercent: c }),
                              ],
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(eO, { normalPrice: a, discountedPrice: o, discountPercent: c }),
                                  d && (0, s.jsx)(eS, { amount: l.amount, orbGate: t }),
                              ],
                          }),
            }),
        ],
    });
}
function eD(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: i, analyticsLocations: r, applicationId: a, trackPDPClick: o } = e,
        { prioritizeGifting: c, removeOrbsClaim: d } = (0, D.q)(),
        u = n.useCallback(() => {
            o(eE.Jq.NITRO_UPSELL_BUTTON);
        }, [o]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(ey, { orbPrice: l, orbsGate: t, formattedPrice: i, hideOrbsPrice: c }),
            "HIDDEN" !== t &&
                !d &&
                (0, s.jsx)(ef, { onTrackClickNitroUpsell: u, analyticsLocations: r, applicationId: a, orbsGate: t }),
        ],
    });
}
function eR(e) {
    let {
            sku: l,
            guildId: t,
            giftRecipient: i,
            giftingOrigin: r,
            trackPDPClick: o,
            analyticsLocations: d,
            orbPrice: b,
            orbsGate: j,
            formattedPrice: p,
        } = e,
        { prioritizeGifting: g, removeOrbsClaim: _ } = (0, D.q)(),
        N = l.id,
        C = (0, a.bG)([M.A], () => M.A.getNormalizedSKUEligibility(N), [N]),
        f = C && "CAN_CHECKOUT" === j,
        v = p.discountedPrice ?? p.normalPrice,
        E = n.useCallback(() => {
            o(eE.Jq.BUY_BUTTON),
                (0, J.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...d, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                );
        }, [l, o, t, d]),
        k = n.useCallback(() => {
            o(eE.Jq.GIFT_BUTTON),
                (0, J.a)(
                    l,
                    { isGift: !0, giftRecipient: i, giftingOrigin: r },
                    { analyticsLocations: [...d, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [l, o, i, r, d]),
        T = (0, A.h)(l.applicationId),
        S = n.useMemo(() => [...d, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [d]),
        O = n.useCallback(() => {
            null != T &&
                (o(eE.Jq.BUY_WITH_ORBS_BUTTON),
                (0, y.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    onComplete: () => {
                        (0, W.j)(), (0, z.n)({ sku: l, application: T, analyticsLocations: S });
                    },
                    analyticsLocations: S,
                }));
        }, [l, T, S, o]),
        R = n.useCallback(() => {
            o(eE.Jq.EARN_MORE_ORBS_BUTTON);
        }, [o]),
        L = (e) =>
            C ? (0, s.jsx)(es, { orbsGate: j, orbPrice: b, onCheckout: O, onTrackEarnMoreOrbs: R, variant: e }) : null,
        P = () =>
            (0, s.jsx)(u.$, {
                icon: m.o,
                variant: "primary",
                onClick: k,
                text: V.intl.string(V.t.ilhtIa),
                fullWidth: !0,
            }),
        U = function (e) {
            let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return (0, s.jsx)(u.$, { variant: "secondary", onClick: E, text: e, fullWidth: l });
        },
        H = (0, s.jsxs)("div", {
            className: eA.mr,
            children: [
                (0, s.jsx)(u.$, {
                    variant: f ? "secondary" : "primary",
                    onClick: E,
                    text: null != v ? V.intl.format(V.t.YkXGyY, { priceString: v }) : V.intl.string(V.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, s.jsx)(x.D, {
                    className: eA.xP,
                    onClick: k,
                    "aria-label": V.intl.string(V.t.QAZA5f),
                    role: "button",
                    children: (0, s.jsx)(m.o, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        Y = (0, s.jsx)(u.$, {
            icon: m.o,
            variant: "secondary",
            onClick: k,
            text: V.intl.string(V.t.QAZA5f),
            fullWidth: !0,
        }),
        G =
            !C &&
            (0, s.jsx)(c.E, { variant: "text-xxs/normal", color: "text-subtle", children: V.intl.string(V.t.IqlPbQ) });
    if (g) {
        let e = C && !_ && "HIDDEN" !== j && null != b;
        return (0, s.jsxs)("div", {
            className: eA.NC,
            children: [
                G,
                e
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsxs)(h.B, {
                                  direction: "horizontal",
                                  gap: 8,
                                  children: [P(), U(V.intl.string(V.t.pi7PDT), !1)],
                              }),
                              L("secondary"),
                          ],
                      })
                    : (0, s.jsxs)(s.Fragment, { children: [P(), C && U(V.intl.string(V.t.pxocaf))] }),
            ],
        });
    }
    return (0, s.jsxs)("div", { className: eA.NC, children: [G, f && L("primary"), C ? H : Y, !f && L("secondary")] });
}
function eL(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let n = null != l.labelIconAssetId ? (0, H.YE)(t, l.labelIconAssetId) : null;
    return (0, s.jsxs)("div", {
        className: eA.HI,
        children: [
            null != n && (0, s.jsx)("img", { className: eA.IX, src: n, alt: "" }, n),
            (0, s.jsx)(c.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eP(e) {
    let { onClick: l, onMouseDown: t, children: n, ariaLabel: i, className: r = eA.jU } = e;
    return (0, s.jsx)(x.D, { onClick: l, onMouseDown: t, className: r, "aria-label": i, role: "button", children: n });
}
function eU(e) {
    let { selectedCarouselItem: l, title: t, description: n, applicationId: i, className: r } = e;
    return (0, s.jsxs)("div", {
        className: r,
        children: [
            null != t && (0, s.jsx)(o.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
            (0, s.jsx)(eL, { applicationId: i, selectedCarouselItem: l }),
            null != n && (0, s.jsx)(c.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
        ],
    });
}
function eH(e) {
    let {
            customNavigateToSocialLayerStorefront: l,
            transitionState: t,
            returnRef: i,
            skuId: o,
            applicationId: d,
            isStorefront: u,
            giftRecipient: m,
            giftingOrigin: x,
            analyticsLocations: h,
            analyticsContext: I,
            onClose: A,
        } = e,
        { analyticsLocations: y } = (0, k.Ay)(h ?? []),
        { guildId: z } = (0, Y.nG)(d),
        W = (0, a.bG)([L.default], () => L.default.getId()),
        J = null != m && m.id !== W;
    n.useEffect(() => {
        null != o && (0, G.iR)(d, o);
    }, [d, o]);
    let K = (0, B.A)({ applicationId: d }),
        Z = (0, a.bG)([M.A], () => M.A.getSkuAssets()),
        ee = (0, a.bG)([P.A], () => P.A.isFetchingForSKU(o)),
        el = (0, b.M)((0, E.Ay)()),
        [et, es] = n.useState(!0),
        en = (0, O.A)({ skuId: o }),
        ei = (0, S.JL)({ sku: en }),
        { state: er, isReady: ea } = (0, F.we)({
            orbPriceAmount: ei?.amount,
            applicationId: d,
            location: "product_details_modal",
        }),
        eo = (0, S.CD)({ sku: en }),
        [ec, ed] = n.useState(0),
        [eu, em] = n.useMemo(
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
                                      src: (0, H.YE)(l, e, n, "mp4"),
                                      videoThumbnailSrc: (0, H.YE)(l, e, n, "webp"),
                                      thumbnailSrc:
                                          null != s.thumbnailAssetId
                                              ? (0, H.YE)(l, s.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != s.backgroundAssetId
                                              ? (0, H.YE)(l, s.backgroundAssetId, n, Y.pV)
                                              : void 0,
                                  })
                                : r.push({
                                      type: "image",
                                      src: (0, H.YE)(l, e, n, "webp"),
                                      thumbnailSrc:
                                          null != s.thumbnailAssetId
                                              ? (0, H.YE)(l, s.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != s.backgroundAssetId
                                              ? (0, H.YE)(l, s.backgroundAssetId, n, Y.pV)
                                              : void 0,
                                  }));
                    }
                    return [i, r];
                })(en?.tenantMetadata?.socialLayer?.carouselItems ?? [], d, Z, { heroWidth: 747 }),
            [en, d, Z],
        ),
        [ex, ej] = n.useState(null),
        [ep, eg] = n.useState(!1);
    n.useEffect(() => {
        if (null == ex) return;
        let e = new ResizeObserver(() => {
            eg(ex.scrollHeight > ex.clientHeight);
        });
        return e.observe(ex), () => e.disconnect();
    }, [ex]);
    let e_ = ec < em.length ? ec : 0,
        eN = eu[e_] ?? null,
        eC = em.length > 1,
        ef = em.some((e) => "video" === e.type);
    (0, R.pE)(),
        (0, v.Ay)(() => {
            U.default.track(ek.HAw.OPEN_MODAL, { location_stack: y, type: eI.Nh, sku_id: o, application_id: d }),
                (0, G.Xw)();
        });
    let eS = n.useCallback(
            (e) => {
                U.default.track(ek.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: I?.sessionId,
                    sku_id: o,
                    guild_id: I?.guildId,
                    application_id: d,
                    cta_type: e,
                    location_stack: y,
                });
            },
            [I, o, d, y],
        ),
        eO = n.useRef(!1);
    n.useEffect(() => {
        !eO.current &&
            "HIDDEN" !== er &&
            ea &&
            ((eO.current = !0),
            U.default.track(ek.HAw.SLAYER_STOREFRONT_ORBS_PURCHASE_GATE_VIEWED, {
                slayer_storefront_session_id: I?.sessionId,
                sku_id: o,
                guild_id: I?.guildId,
                application_id: d,
                orbs_purchase_gate_state: er,
                orb_price: ei?.amount,
                location_stack: y,
            }));
    }, [er, ea, I, o, d, ei, y]);
    let ey = n.useCallback(
        (e) => {
            ed(e), eS(eE.Jq.CAROUSEL_ITEM);
        },
        [eS],
    );
    n.useEffect(() => {
        null == o || P.A.isFetchingForSKU(o) || (0, G.Pp)(d, o);
    }, [d, o]);
    let eL = n.useCallback(() => {
            null != en &&
                (eS(eE.Jq.FORWARD_BUTTON),
                (0, $.d)({
                    sku: en,
                    guildId: z,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: y,
                    analyticsContext: I,
                }));
        }, [en, z, eS, y, I]),
        eH = n.useCallback(() => {
            eS(eE.Jq.WISHLIST_BUTTON);
        }, [eS]),
        eY = n.useCallback(() => {
            (0, q.G)({ applicationId: d });
        }, [d]),
        eG = n.useCallback(() => {
            eS(eE.Jq.VISIT_SHOP), (0, j.closeAllModals)(), null != l ? l() : (0, q.default)({ applicationId: d });
        }, [d, eS, l]),
        eM = n.useCallback(() => {
            es(!et), eS(eE.Jq.MUTE_BUTTON);
        }, [et, eS]),
        eB = (0, w.F)("pdp", { applicationId: d, skuId: o }),
        eF = en?.tenantMetadata?.socialLayer;
    if (null == en || null == eF) return ee ? (0, s.jsx)(p.y, {}) : null;
    let ew = K?.storefront,
        eq = ew?.logoAssetId != null ? (0, H.YE)(ew.applicationId, ew.logoAssetId, 256) : null,
        e$ = ew?.lightThemeLogoAssetId != null ? (0, H.YE)(ew.applicationId, ew.lightThemeLogoAssetId, 256) : null,
        ez = null;
    return (
        (ez = el ? (eq ?? e$) : (e$ ?? eq)),
        (0, s.jsx)(g.EO, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: eA.CR,
            size: g.rI.DYNAMIC,
            returnRef: i,
            children: (0, s.jsx)(g.$m, {
                className: eA.jE,
                children: (0, s.jsxs)("div", {
                    className: eA.nr,
                    children: [
                        (0, s.jsxs)("div", {
                            className: r()(eA.op, { [eA.uk]: en.exclusive }),
                            children: [
                                (0, s.jsx)("div", {
                                    className: eA.r$,
                                    children:
                                        null != ez
                                            ? (0, s.jsx)("img", { className: eA.wm, src: ez, alt: ew?.title ?? "" })
                                            : null,
                                }),
                                (0, s.jsxs)("div", {
                                    ref: ej,
                                    className: eA.zD,
                                    children: [
                                        en.exclusive &&
                                            (0, s.jsx)("div", { className: eA.K3, children: (0, s.jsx)(Q.I, {}) }),
                                        eC
                                            ? (0, s.jsxs)(s.Fragment, {
                                                  children: [
                                                      (0, s.jsx)(eT, { sku: en }),
                                                      (0, s.jsx)("div", {
                                                          className: eA._D,
                                                          children: (0, s.jsx)(X, {
                                                              mediaItems: em,
                                                              labels: eu.map((e) => e.label),
                                                              selectedIndex: e_,
                                                              onSelectIndex: ey,
                                                          }),
                                                      }),
                                                      (0, s.jsx)(eU, {
                                                          selectedCarouselItem: eN,
                                                          title: eN?.title,
                                                          description: eN?.description,
                                                          applicationId: d,
                                                          className: eA.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, s.jsx)(eU, {
                                                  selectedCarouselItem: eN,
                                                  title: en.name,
                                                  description: en.description,
                                                  applicationId: d,
                                                  className: eA.cP,
                                              }),
                                    ],
                                }),
                                (0, s.jsx)("div", {
                                    className: r()(eA.Td, { [eA.t7]: ep }),
                                    children: (0, s.jsxs)(D.$, {
                                        isGifting: J,
                                        location: "SocialLayerStorefrontProductDetailsModal",
                                        children: [
                                            (0, s.jsx)(eD, {
                                                orbPrice: ei,
                                                orbsGate: er,
                                                formattedPrice: eo,
                                                analyticsLocations: y,
                                                applicationId: d,
                                                trackPDPClick: eS,
                                            }),
                                            null != eB &&
                                                (0, s.jsx)(eb.O0, {
                                                    Icon: eB.Icon,
                                                    text: eB.text,
                                                    endDatetime: eB.endsAt,
                                                    tooltip: eB.tooltip,
                                                }),
                                            (0, s.jsx)(eR, {
                                                sku: en,
                                                guildId: z,
                                                giftRecipient: m?.id !== W ? m : void 0,
                                                giftingOrigin: m?.id !== W ? x : void 0,
                                                trackPDPClick: eS,
                                                analyticsLocations: y,
                                                orbPrice: ei,
                                                orbsGate: er,
                                                formattedPrice: eo,
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: eA.il,
                            children: [
                                (0, s.jsx)(eh, { item: em[e_], isMuted: et, alt: eN?.label ?? en.name }),
                                !u &&
                                    (0, s.jsxs)(eP, {
                                        onClick: eG,
                                        onMouseDown: eY,
                                        ariaLabel: V.intl.string(V.t["+v/1Dk"]),
                                        className: eA.gW,
                                        children: [
                                            (0, s.jsx)(_.U, { size: "refresh_sm", color: "currentColor" }),
                                            (0, s.jsx)(c.E, {
                                                variant: "text-md/medium",
                                                color: "currentColor",
                                                children: V.intl.string(V.t["+v/1Dk"]),
                                            }),
                                        ],
                                    }),
                                (0, s.jsxs)("div", {
                                    className: eA.V7,
                                    children: [
                                        null != en &&
                                            (0, s.jsx)(ev._, {
                                                sku: en,
                                                isCardHovered: !0,
                                                className: r()(eA.jU, eA.ij),
                                                trackButtonClick: eH,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, s.jsx)(eP, {
                                            onClick: eL,
                                            ariaLabel: V.intl.string(V.t.Ej3B3Y),
                                            children: (0, s.jsx)(T.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        ef &&
                                            (0, s.jsx)(eP, {
                                                onClick: eM,
                                                ariaLabel: et ? V.intl.string(V.t.YqAjXy) : V.intl.string(V.t.w4m945),
                                                children: et
                                                    ? (0, s.jsx)(N._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, s.jsx)(C.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, s.jsx)(eP, {
                                            onClick: A,
                                            ariaLabel: V.intl.string(V.t.cpT0Cq),
                                            children: (0, s.jsx)(f.d, { size: "refresh_sm", color: "currentColor" }),
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
