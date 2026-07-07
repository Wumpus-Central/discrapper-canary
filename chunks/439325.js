t.d(l, { default: () => eH });
var n = t(627968),
    s = t(64700),
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
    j = t(366010),
    b = t(192308),
    p = t(289873),
    g = t(935462),
    N = t(34188),
    v = t(358618),
    C = t(983851),
    f = t(972213),
    I = t(964486),
    _ = t(736653),
    A = t(793574),
    k = t(688810),
    E = t(429913),
    T = t(427209),
    S = t(117218),
    y = t(801228),
    O = t(652165),
    D = t(449410),
    L = t(561794),
    P = t(280450),
    R = t(328968),
    U = t(174459),
    H = t(371794),
    Y = t(871123),
    G = t(733391),
    F = t(832163),
    M = t(429635),
    w = t(69236),
    B = t(31969),
    $ = t(44724);
t(321073);
var q = t(345938),
    z = t(510022),
    W = t(317560),
    J = t(533406),
    V = t(375708),
    K = t(964421);
function X(e) {
    let { mediaItems: l, labels: t, selectedIndex: s, onSelectIndex: i } = e;
    return l.length <= 1
        ? null
        : (0, n.jsxs)("div", {
              className: K.kL,
              children: [
                  (0, n.jsx)(c.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: V.intl.string(V.t.U7DAV9),
                  }),
                  (0, n.jsx)("div", {
                      className: K.Vg,
                      children: l.map((e, l) =>
                          (0, n.jsx)(
                              x.D,
                              {
                                  className: r()(K.xn, { [K.Y4]: l === s }),
                                  onClick: () => i(l),
                                  "aria-label": t?.[l],
                                  "aria-pressed": l === s,
                                  children: (0, n.jsx)("img", {
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
function en(e) {
    let { orbsGate: l, orbPrice: t, onCheckout: i, variant: r = "secondary" } = e,
        a = s.useCallback(() => {
            (0, el.mA)({ fromContent: ee.u.SOCIAL_LAYER_STOREFRONT }), (0, W.j)();
        }, []);
    return "HIDDEN" === l || null == t
        ? null
        : "NOT_ENOUGH_ORBS" === l
          ? (0, n.jsx)(u.$, { onClick: a, variant: r, icon: d.C, text: V.intl.string(V.t.H57f41), fullWidth: !0 })
          : (0, n.jsx)(u.$, {
                onClick: i,
                disabled: "NEEDS_NITRO" === l,
                variant: r,
                text: (0, n.jsx)("span", {
                    className: et.Y,
                    children: V.intl.format(V.t.lOtBOI, {
                        orbPrice: t.amount,
                        orbIconHook: () => (0, n.jsx)(d.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                    }),
                }),
                fullWidth: !0,
            });
}
var es = t(310784),
    ei = t.n(es),
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
    return (0, n.jsx)(ec.Ay, { ...e });
}
function eh(e) {
    let { item: l, isMuted: t, className: i, alt: r = "" } = e,
        o = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, ea.rh)(l, "#000000");
            return s.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = ei()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        c = (0, a.bG)([er.Ay], () => er.Ay.useReducedMotion),
        [d, u] = s.useState(null),
        [m, x] = s.useState(l);
    m !== l && (x(l), m?.type === "image" && l?.type === "image" && m.src !== l.src ? u(m.src) : u(null));
    let h = s.useCallback(() => u(null), []);
    if (null == l) return null;
    let j = {
        background: o,
        backgroundImage: null != l.backgroundSrc ? `url(${l.backgroundSrc})` : void 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    return "video" === l.type
        ? (0, n.jsx)("div", {
              className: i ?? eu.kL,
              children: (0, n.jsx)(
                  "div",
                  {
                      className: `${eu.h4} ${eu.nR}`,
                      style: j,
                      children: (0, n.jsx)(
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
        : (0, n.jsx)("div", {
              className: i ?? eu.kL,
              children: (0, n.jsxs)("div", {
                  className: eu.h4,
                  style: j,
                  children: [
                      (0, n.jsx)("img", { src: l.src, alt: r, className: eu.Sl }, l.src),
                      null != d && !c && (0, n.jsx)("img", { src: d, alt: "", className: eu.Ve, onAnimationEnd: h }, d),
                  ],
              }),
          });
}
var ej = t(910200),
    eb = t(320448),
    ep = t(403581),
    eg = t(532794),
    eN = t(202541),
    ev = t(430825),
    eC = t(563681);
function ef(e) {
    let { orbsGate: l, applicationId: t, analyticsLocations: i } = e,
        r = (0, a.bG)([F.A], () => F.A.getConfigForApplicationId(t)),
        o = s.useCallback(() => {
            (0, eg.A)({ subscriptionTier: eN.pe.TIER_2, analyticsLocations: i, applicationId: t });
        }, [i, t]);
    return "HIDDEN" === l
        ? null
        : "NEEDS_NITRO" === l
          ? (0, n.jsx)(x.D, {
                className: eC.L,
                onClick: o,
                children: (0, n.jsx)(ej.Ay, {
                    Icon: ep.t,
                    gradientColor: "nitro-pink",
                    tooltip: V.intl.string(ev.default.XwadDC),
                    text: V.intl.string(ev.default.cg95CA),
                    trailing: (0, n.jsx)(eb._, { size: "xs" }),
                }),
            })
          : (0, n.jsx)(ej.O0, {
                Icon: ep.t,
                text: V.intl.string(ev.default.cg95CA),
                endDatetime: r?.promotionEndDatetime,
                gradientColor: "nitro-pink",
            });
}
var eI = t(743693),
    e_ = t(995393),
    eA = t(188275),
    ek = t(652215),
    eE = t(199138);
function eT(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: eE.AX,
              children: [
                  (0, n.jsx)(o.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function eS(e) {
    let { amount: l, orbGate: t } = e;
    return (0, n.jsxs)("div", {
        className: r()(eE.aX, { [eE.dQ]: "NEEDS_NITRO" === t || "NOT_ENOUGH_ORBS" === t }),
        children: [
            (0, n.jsx)(d.C, { size: "xs", color: "currentColor" }),
            (0, n.jsx)(c.E, { variant: "text-md/semibold", color: "currentColor", children: l }),
        ],
    });
}
function ey(e) {
    let { normalPrice: l, discountedPrice: t, discountPercent: s } = e;
    return null != s && null != t
        ? (0, n.jsxs)("div", {
              className: eE._k,
              children: [
                  (0, n.jsx)(c.E, { variant: "text-md/medium", className: eE.Jb, children: l }),
                  (0, n.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                  (0, n.jsx)(c.E, { variant: "text-md/bold", className: eE.Fi, children: s }),
              ],
          })
        : (0, n.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: l });
}
function eO(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: s, hideOrbsPrice: i } = e,
        { normalPrice: a, discountedPrice: o, discountPercent: c } = s;
    if (null == a) return null;
    let d = "HIDDEN" !== t && null != l && !i,
        u = "CAN_CHECKOUT" === t;
    return (0, n.jsxs)("div", {
        className: eE.sj,
        children: [
            (0, n.jsx)(Z.V, { textColor: "text-subtle" }),
            (0, n.jsx)("div", {
                className: r()(eE.hO, d && eE.XE),
                children:
                    d && u
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(eS, { amount: l.amount, orbGate: t }),
                                  (0, n.jsx)(ey, { normalPrice: a, discountedPrice: o, discountPercent: c }),
                              ],
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(ey, { normalPrice: a, discountedPrice: o, discountPercent: c }),
                                  d && (0, n.jsx)(eS, { amount: l.amount, orbGate: t }),
                              ],
                          }),
            }),
        ],
    });
}
function eD(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: s, analyticsLocations: i, applicationId: r } = e,
        { prioritizeGifting: a, removeOrbsClaim: o } = (0, D.q)();
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(eO, { orbPrice: l, orbsGate: t, formattedPrice: s, hideOrbsPrice: a }),
            "HIDDEN" !== t && !o && (0, n.jsx)(ef, { analyticsLocations: i, applicationId: r, orbsGate: t }),
        ],
    });
}
function eL(e) {
    let {
            sku: l,
            guildId: t,
            giftRecipient: i,
            giftingOrigin: r,
            trackPDPClick: o,
            analyticsLocations: d,
            orbPrice: j,
            orbsGate: b,
            formattedPrice: p,
        } = e,
        { prioritizeGifting: g, removeOrbsClaim: N } = (0, D.q)(),
        v = l.id,
        C = (0, a.bG)([F.A], () => F.A.getNormalizedSKUEligibility(v), [v]),
        f = C && "CAN_CHECKOUT" === b,
        I = p.discountedPrice ?? p.normalPrice,
        _ = s.useCallback(() => {
            o(e_.Jq.BUY_BUTTON),
                (0, J.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...d, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                );
        }, [l, o, t, d]),
        k = s.useCallback(() => {
            o(e_.Jq.GIFT_BUTTON),
                (0, J.a)(
                    l,
                    { isGift: !0, giftRecipient: i, giftingOrigin: r },
                    { analyticsLocations: [...d, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [l, o, i, r, d]),
        T = (0, E.h)(l.applicationId),
        S = s.useMemo(() => [...d, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [d]),
        y = s.useCallback(() => {
            null != T &&
                (o(e_.Jq.BUY_WITH_ORBS_BUTTON),
                (0, O.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    onComplete: () => {
                        (0, W.j)(), (0, z.n)({ sku: l, application: T, analyticsLocations: S });
                    },
                    analyticsLocations: S,
                }));
        }, [l, T, S, o]),
        L = (e) => (C ? (0, n.jsx)(en, { orbsGate: b, orbPrice: j, onCheckout: y, variant: e }) : null),
        P = () =>
            (0, n.jsx)(u.$, {
                icon: m.o,
                variant: "primary",
                onClick: k,
                text: V.intl.string(V.t.ilhtIa),
                fullWidth: !0,
            }),
        R = function (e) {
            let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return (0, n.jsx)(u.$, { variant: "secondary", onClick: _, text: e, fullWidth: l });
        },
        U = (0, n.jsxs)("div", {
            className: eE.mr,
            children: [
                (0, n.jsx)(u.$, {
                    variant: f ? "secondary" : "primary",
                    onClick: _,
                    text: null != I ? V.intl.format(V.t.YkXGyY, { priceString: I }) : V.intl.string(V.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, n.jsx)(x.D, {
                    className: eE.xP,
                    onClick: k,
                    "aria-label": V.intl.string(V.t.QAZA5f),
                    role: "button",
                    children: (0, n.jsx)(m.o, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        H = (0, n.jsx)(u.$, {
            icon: m.o,
            variant: "secondary",
            onClick: k,
            text: V.intl.string(V.t.QAZA5f),
            fullWidth: !0,
        }),
        Y =
            !C &&
            (0, n.jsx)(c.E, { variant: "text-xxs/normal", color: "text-subtle", children: V.intl.string(V.t.IqlPbQ) });
    if (g) {
        let e = C && !N && "HIDDEN" !== b && null != j;
        return (0, n.jsxs)("div", {
            className: eE.NC,
            children: [
                Y,
                e
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsxs)(h.B, {
                                  direction: "horizontal",
                                  gap: 8,
                                  children: [P(), R(V.intl.string(V.t.pi7PDT), !1)],
                              }),
                              L("secondary"),
                          ],
                      })
                    : (0, n.jsxs)(n.Fragment, { children: [P(), C && R(V.intl.string(V.t.pxocaf))] }),
            ],
        });
    }
    return (0, n.jsxs)("div", { className: eE.NC, children: [Y, f && L("primary"), C ? U : H, !f && L("secondary")] });
}
function eP(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let s = null != l.labelIconAssetId ? (0, H.YE)(t, l.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: eE.HI,
        children: [
            null != s && (0, n.jsx)("img", { className: eE.IX, src: s, alt: "" }, s),
            (0, n.jsx)(c.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eR(e) {
    let { onClick: l, onMouseDown: t, children: s, ariaLabel: i, className: r = eE.jU } = e;
    return (0, n.jsx)(x.D, { onClick: l, onMouseDown: t, className: r, "aria-label": i, role: "button", children: s });
}
function eU(e) {
    let { selectedCarouselItem: l, title: t, description: s, applicationId: i, className: r } = e;
    return (0, n.jsxs)("div", {
        className: r,
        children: [
            null != t && (0, n.jsx)(o.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
            (0, n.jsx)(eP, { applicationId: i, selectedCarouselItem: l }),
            null != s && (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-subtle", children: s }),
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
            analyticsContext: A,
            onClose: E,
        } = e,
        { analyticsLocations: O } = (0, k.Ay)(h ?? []),
        { guildId: z } = (0, Y.nG)(d),
        W = (0, a.bG)([P.default], () => P.default.getId()),
        J = null != m && m.id !== W;
    s.useEffect(() => {
        null != o && (0, G.iR)(d, o);
    }, [d, o]);
    let K = (0, M.A)({ applicationId: d }),
        Z = (0, a.bG)([F.A], () => F.A.getSkuAssets()),
        ee = (0, a.bG)([R.A], () => R.A.isFetchingForSKU(o)),
        el = (0, j.M)((0, _.Ay)()),
        [et, en] = s.useState(!0),
        es = (0, y.A)({ skuId: o }),
        ei = (0, S.JL)({ sku: es }),
        er = (0, w.o)({ orbPriceAmount: ei?.amount, applicationId: d, location: "product_details_modal" }),
        ea = (0, S.CD)({ sku: es }),
        [eo, ec] = s.useState(0),
        [ed, eu] = s.useMemo(
            () =>
                (function (e, l, t, n) {
                    let { heroWidth: s } = n,
                        i = [],
                        r = [];
                    if (null == e || 0 === e.length) return [i, r];
                    for (let n of e) {
                        let e = null != n.assetId ? t[n.assetId] : null;
                        null != e &&
                            (i.push(n),
                            e.mime_type.startsWith("video/")
                                ? r.push({
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
                                : r.push({
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
                    return [i, r];
                })(es?.tenantMetadata?.socialLayer?.carouselItems ?? [], d, Z, { heroWidth: 747 }),
            [es, d, Z],
        ),
        [em, ex] = s.useState(null),
        [eb, ep] = s.useState(!1);
    s.useEffect(() => {
        if (null == em) return;
        let e = new ResizeObserver(() => {
            ep(em.scrollHeight > em.clientHeight);
        });
        return e.observe(em), () => e.disconnect();
    }, [em]);
    let eg = eo < eu.length ? eo : 0,
        eN = ed[eg] ?? null,
        ev = eu.length > 1,
        eC = eu.some((e) => "video" === e.type);
    (0, L.pE)(),
        (0, I.Ay)(() => {
            U.default.track(ek.HAw.OPEN_MODAL, { location_stack: O, type: eA.Nh, sku_id: o, application_id: d }),
                (0, G.Xw)();
        });
    let ef = s.useCallback(
            (e) => {
                U.default.track(ek.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: A?.sessionId,
                    sku_id: o,
                    guild_id: A?.guildId,
                    application_id: d,
                    cta_type: e,
                    location_stack: O,
                });
            },
            [A, o, d, O],
        ),
        eS = s.useCallback(
            (e) => {
                ec(e), ef(e_.Jq.CAROUSEL_ITEM);
            },
            [ef],
        );
    s.useEffect(() => {
        null == o || R.A.isFetchingForSKU(o) || (0, G.Pp)(d, o);
    }, [d, o]);
    let ey = s.useCallback(() => {
            null != es &&
                (ef(e_.Jq.FORWARD_BUTTON),
                (0, q.d)({
                    sku: es,
                    guildId: z,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: O,
                    analyticsContext: A,
                }));
        }, [es, z, ef, O, A]),
        eO = s.useCallback(() => {
            ef(e_.Jq.WISHLIST_BUTTON);
        }, [ef]),
        eP = s.useCallback(() => {
            (0, $.G)({ applicationId: d });
        }, [d]),
        eH = s.useCallback(() => {
            ef(e_.Jq.VISIT_SHOP), (0, b.closeAllModals)(), null != l ? l() : (0, $.default)({ applicationId: d });
        }, [d, ef, l]),
        eY = s.useCallback(() => {
            en(!et), ef(e_.Jq.MUTE_BUTTON);
        }, [et, ef]),
        eG = (0, B.F)("pdp", { applicationId: d, skuId: o }),
        eF = es?.tenantMetadata?.socialLayer;
    if (null == es || null == eF) return ee ? (0, n.jsx)(p.y, {}) : null;
    let eM = K?.storefront,
        ew = eM?.logoAssetId != null ? (0, H.YE)(eM.applicationId, eM.logoAssetId, 256) : null,
        eB = eM?.lightThemeLogoAssetId != null ? (0, H.YE)(eM.applicationId, eM.lightThemeLogoAssetId, 256) : null,
        e$ = null;
    return (
        (e$ = el ? (ew ?? eB) : (eB ?? ew)),
        (0, n.jsx)(g.EO, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: eE.CR,
            size: g.rI.DYNAMIC,
            returnRef: i,
            children: (0, n.jsx)(g.$m, {
                className: eE.jE,
                children: (0, n.jsxs)("div", {
                    className: eE.nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: r()(eE.op, { [eE.uk]: es.exclusive }),
                            children: [
                                (0, n.jsx)("div", {
                                    className: eE.r$,
                                    children:
                                        null != e$
                                            ? (0, n.jsx)("img", { className: eE.wm, src: e$, alt: eM?.title ?? "" })
                                            : null,
                                }),
                                (0, n.jsxs)("div", {
                                    ref: ex,
                                    className: eE.zD,
                                    children: [
                                        es.exclusive &&
                                            (0, n.jsx)("div", { className: eE.K3, children: (0, n.jsx)(Q.I, {}) }),
                                        ev
                                            ? (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(eT, { sku: es }),
                                                      (0, n.jsx)("div", {
                                                          className: eE._D,
                                                          children: (0, n.jsx)(X, {
                                                              mediaItems: eu,
                                                              labels: ed.map((e) => e.label),
                                                              selectedIndex: eg,
                                                              onSelectIndex: eS,
                                                          }),
                                                      }),
                                                      (0, n.jsx)(eU, {
                                                          selectedCarouselItem: eN,
                                                          title: eN?.title,
                                                          description: eN?.description,
                                                          applicationId: d,
                                                          className: eE.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, n.jsx)(eU, {
                                                  selectedCarouselItem: eN,
                                                  title: es.name,
                                                  description: es.description,
                                                  applicationId: d,
                                                  className: eE.cP,
                                              }),
                                    ],
                                }),
                                (0, n.jsx)("div", {
                                    className: r()(eE.Td, { [eE.t7]: eb }),
                                    children: (0, n.jsxs)(D.$, {
                                        isGifting: J,
                                        location: "SocialLayerStorefrontProductDetailsModal",
                                        children: [
                                            (0, n.jsx)(eD, {
                                                orbPrice: ei,
                                                orbsGate: er,
                                                formattedPrice: ea,
                                                analyticsLocations: O,
                                                applicationId: d,
                                            }),
                                            null != eG &&
                                                (0, n.jsx)(ej.O0, {
                                                    Icon: eG.Icon,
                                                    text: eG.text,
                                                    endDatetime: eG.endsAt,
                                                    tooltip: eG.tooltip,
                                                }),
                                            (0, n.jsx)(eL, {
                                                sku: es,
                                                guildId: z,
                                                giftRecipient: m?.id !== W ? m : void 0,
                                                giftingOrigin: m?.id !== W ? x : void 0,
                                                trackPDPClick: ef,
                                                analyticsLocations: O,
                                                orbPrice: ei,
                                                orbsGate: er,
                                                formattedPrice: ea,
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: eE.il,
                            children: [
                                (0, n.jsx)(eh, { item: eu[eg], isMuted: et, alt: eN?.label ?? es.name }),
                                !u &&
                                    (0, n.jsxs)(eR, {
                                        onClick: eH,
                                        onMouseDown: eP,
                                        ariaLabel: V.intl.string(V.t["+v/1Dk"]),
                                        className: eE.gW,
                                        children: [
                                            (0, n.jsx)(N.U, { size: "refresh_sm", color: "currentColor" }),
                                            (0, n.jsx)(c.E, {
                                                variant: "text-md/medium",
                                                color: "currentColor",
                                                children: V.intl.string(V.t["+v/1Dk"]),
                                            }),
                                        ],
                                    }),
                                (0, n.jsxs)("div", {
                                    className: eE.V7,
                                    children: [
                                        null != es &&
                                            (0, n.jsx)(eI._, {
                                                sku: es,
                                                isCardHovered: !0,
                                                className: r()(eE.jU, eE.ij),
                                                trackButtonClick: eO,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, n.jsx)(eR, {
                                            onClick: ey,
                                            ariaLabel: V.intl.string(V.t.Ej3B3Y),
                                            children: (0, n.jsx)(T.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        eC &&
                                            (0, n.jsx)(eR, {
                                                onClick: eY,
                                                ariaLabel: et ? V.intl.string(V.t.YqAjXy) : V.intl.string(V.t.w4m945),
                                                children: et
                                                    ? (0, n.jsx)(v._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, n.jsx)(C.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, n.jsx)(eR, {
                                            onClick: E,
                                            ariaLabel: V.intl.string(V.t.cpT0Cq),
                                            children: (0, n.jsx)(f.d, { size: "refresh_sm", color: "currentColor" }),
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
