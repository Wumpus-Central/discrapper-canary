l.d(t, { default: () => eH });
var s = l(627968),
    n = l(64700),
    i = l(503698),
    r = l.n(i),
    a = l(17928),
    o = l(534514),
    c = l(834730),
    d = l(318254),
    u = l(821609),
    m = l(597770),
    x = l(939249),
    h = l(331322),
    j = l(366010),
    b = l(192308),
    p = l(289873),
    g = l(935462),
    _ = l(34188),
    f = l(358618),
    N = l(983851),
    C = l(972213),
    v = l(964486),
    I = l(736653),
    A = l(793574),
    E = l(688810),
    k = l(429913),
    T = l(427209),
    S = l(117218),
    y = l(801228),
    O = l(652165),
    D = l(449410),
    R = l(561794),
    L = l(280450),
    P = l(328968),
    U = l(174459),
    H = l(371794),
    Y = l(871123),
    G = l(733391),
    F = l(832163),
    M = l(429635),
    w = l(69236),
    B = l(31969),
    $ = l(44724);
l(321073);
var q = l(345938),
    z = l(510022),
    W = l(317560),
    J = l(533406),
    V = l(375708),
    K = l(964421);
function X(e) {
    let { mediaItems: t, labels: l, selectedIndex: n, onSelectIndex: i } = e;
    return t.length <= 1
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
                      children: t.map((e, t) =>
                          (0, s.jsx)(
                              x.D,
                              {
                                  className: r()(K.xn, { [K.Y4]: t === n }),
                                  onClick: () => i(t),
                                  "aria-label": l?.[t],
                                  "aria-pressed": t === n,
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
                              t,
                          ),
                      ),
                  }),
              ],
          });
}
var Q = l(263911),
    Z = l(971146),
    ee = l(696292),
    et = l(617986),
    el = l(942460);
function es(e) {
    let { orbsGate: t, orbPrice: l, onCheckout: i, variant: r = "secondary" } = e,
        a = n.useCallback(() => {
            (0, et.mA)({ fromContent: ee.u.SOCIAL_LAYER_STOREFRONT }), (0, W.j)();
        }, []);
    return "HIDDEN" === t || null == l
        ? null
        : "NOT_ENOUGH_ORBS" === t
          ? (0, s.jsx)(u.$, { onClick: a, variant: r, icon: d.C, text: V.intl.string(V.t.H57f41), fullWidth: !0 })
          : (0, s.jsx)(u.$, {
                onClick: i,
                disabled: "NEEDS_NITRO" === t,
                variant: r,
                text: (0, s.jsx)("span", {
                    className: el.Y,
                    children: V.intl.format(V.t.lOtBOI, {
                        orbPrice: l.amount,
                        orbIconHook: () => (0, s.jsx)(d.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                    }),
                }),
                fullWidth: !0,
            });
}
var en = l(310784),
    ei = l.n(en),
    er = l(775602),
    ea = l(654107),
    eo = l(175671),
    ec = l(619517),
    ed = l(34337),
    eu = l(172079);
function em(e) {
    return (0, ed.$o)({ ...e, className: eu.tN, mediaPlayerClassName: eu.yf });
}
function ex(e) {
    return (0, s.jsx)(ec.Ay, { ...e });
}
function eh(e) {
    let { item: t, isMuted: l, className: i, alt: r = "" } = e,
        o = (function (e) {
            let t = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [l] = (0, ea.rh)(t, "#000000");
            return n.useMemo(() => {
                if (null == t || "#000000" === l) return;
                let e = ei()(l).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [t, l]);
        })(t),
        c = (0, a.bG)([er.Ay], () => er.Ay.useReducedMotion),
        [d, u] = n.useState(null),
        [m, x] = n.useState(t);
    m !== t && (x(t), m?.type === "image" && t?.type === "image" && m.src !== t.src ? u(m.src) : u(null));
    let h = n.useCallback(() => u(null), []);
    if (null == t) return null;
    let j = {
        background: o,
        backgroundImage: null != t.backgroundSrc ? `url(${t.backgroundSrc})` : void 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    return "video" === t.type
        ? (0, s.jsx)("div", {
              className: i ?? eu.kL,
              children: (0, s.jsx)(
                  "div",
                  {
                      className: `${eu.h4} ${eu.nR}`,
                      style: j,
                      children: (0, s.jsx)(
                          eo.rr,
                          {
                              href: null,
                              thumbnail: { url: t.videoThumbnailSrc, width: 747, height: 560 },
                              video: { url: t.src, proxyURL: t.src, width: 747, height: 560 },
                              provider: void 0,
                              allowFullScreen: !0,
                              maxHeight: 560,
                              maxWidth: 747,
                              playable: !0,
                              className: eu.Ki,
                              volume: 1,
                              autoMute: l,
                              autoPlay: !0,
                              renderVideoComponent: em,
                              renderImageComponent: ex,
                              renderLinkComponent: ed.bU,
                          },
                          `${t.src}-${l ? "muted" : "unmuted"}`,
                      ),
                  },
                  t.src,
              ),
          })
        : (0, s.jsx)("div", {
              className: i ?? eu.kL,
              children: (0, s.jsxs)("div", {
                  className: eu.h4,
                  style: j,
                  children: [
                      (0, s.jsx)("img", { src: t.src, alt: r, className: eu.Sl }, t.src),
                      null != d && !c && (0, s.jsx)("img", { src: d, alt: "", className: eu.Ve, onAnimationEnd: h }, d),
                  ],
              }),
          });
}
var ej = l(910200),
    eb = l(320448),
    ep = l(403581),
    eg = l(532794),
    e_ = l(202541),
    ef = l(430825),
    eN = l(563681);
function eC(e) {
    let { orbsGate: t, applicationId: l, analyticsLocations: i } = e,
        r = (0, a.bG)([F.A], () => F.A.getConfigForApplicationId(l)),
        o = n.useCallback(() => {
            (0, eg.A)({ subscriptionTier: e_.pe.TIER_2, analyticsLocations: i, applicationId: l });
        }, [i, l]);
    return "HIDDEN" === t
        ? null
        : "NEEDS_NITRO" === t
          ? (0, s.jsx)(x.D, {
                className: eN.L,
                onClick: o,
                children: (0, s.jsx)(ej.Ay, {
                    Icon: ep.t,
                    gradientColor: "nitro-pink",
                    tooltip: V.intl.string(ef.default.XwadDC),
                    text: V.intl.string(ef.default.cg95CA),
                    trailing: (0, s.jsx)(eb._, { size: "xs" }),
                }),
            })
          : (0, s.jsx)(ej.O0, {
                Icon: ep.t,
                text: V.intl.string(ef.default.cg95CA),
                endDatetime: r?.promotionEndDatetime,
                gradientColor: "nitro-pink",
            });
}
var ev = l(743693),
    eI = l(995393),
    eA = l(188275),
    eE = l(652215),
    ek = l(199138);
function eT(e) {
    let { sku: t } = e;
    return null == t
        ? null
        : (0, s.jsxs)("div", {
              className: ek.AX,
              children: [
                  (0, s.jsx)(o.D, { variant: "heading-lg/bold", color: "text-strong", children: t.name }),
                  (0, s.jsx)(c.E, { variant: "text-sm/normal", color: "text-subtle", children: t.description }),
              ],
          });
}
function eS(e) {
    let { amount: t, orbGate: l } = e;
    return (0, s.jsxs)("div", {
        className: r()(ek.aX, { [ek.dQ]: "NEEDS_NITRO" === l || "NOT_ENOUGH_ORBS" === l }),
        children: [
            (0, s.jsx)(d.C, { size: "xs", color: "currentColor" }),
            (0, s.jsx)(c.E, { variant: "text-md/semibold", color: "currentColor", children: t }),
        ],
    });
}
function ey(e) {
    let { normalPrice: t, discountedPrice: l, discountPercent: n } = e;
    return null != n && null != l
        ? (0, s.jsxs)("div", {
              className: ek._k,
              children: [
                  (0, s.jsx)(c.E, { variant: "text-md/medium", className: ek.Jb, children: t }),
                  (0, s.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: l }),
                  (0, s.jsx)(c.E, { variant: "text-md/bold", className: ek.Fi, children: n }),
              ],
          })
        : (0, s.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: t });
}
function eO(e) {
    let { orbPrice: t, orbsGate: l, formattedPrice: n, hideOrbsPrice: i } = e,
        { normalPrice: a, discountedPrice: o, discountPercent: c } = n;
    if (null == a) return null;
    let d = "HIDDEN" !== l && null != t && !i,
        u = "CAN_CHECKOUT" === l;
    return (0, s.jsxs)("div", {
        className: ek.sj,
        children: [
            (0, s.jsx)(Z.V, { textColor: "text-subtle" }),
            (0, s.jsx)("div", {
                className: r()(ek.hO, d && ek.XE),
                children:
                    d && u
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(eS, { amount: t.amount, orbGate: l }),
                                  (0, s.jsx)(ey, { normalPrice: a, discountedPrice: o, discountPercent: c }),
                              ],
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(ey, { normalPrice: a, discountedPrice: o, discountPercent: c }),
                                  d && (0, s.jsx)(eS, { amount: t.amount, orbGate: l }),
                              ],
                          }),
            }),
        ],
    });
}
function eD(e) {
    let { orbPrice: t, orbsGate: l, formattedPrice: n, analyticsLocations: i, applicationId: r } = e,
        { prioritizeGifting: a, removeOrbsClaim: o } = (0, D.q)();
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(eO, { orbPrice: t, orbsGate: l, formattedPrice: n, hideOrbsPrice: a }),
            "HIDDEN" !== l && !o && (0, s.jsx)(eC, { analyticsLocations: i, applicationId: r, orbsGate: l }),
        ],
    });
}
function eR(e) {
    let {
            sku: t,
            guildId: l,
            giftRecipient: i,
            giftingOrigin: r,
            trackPDPClick: o,
            analyticsLocations: d,
            orbPrice: j,
            orbsGate: b,
            formattedPrice: p,
        } = e,
        { prioritizeGifting: g, removeOrbsClaim: _ } = (0, D.q)(),
        f = t.id,
        N = (0, a.bG)([F.A], () => F.A.getNormalizedSKUEligibility(f), [f]),
        C = N && "CAN_CHECKOUT" === b,
        v = p.discountedPrice ?? p.normalPrice,
        I = n.useCallback(() => {
            o(eI.Jq.BUY_BUTTON),
                (0, J.a)(
                    t,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...d, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: l,
                    },
                );
        }, [t, o, l, d]),
        E = n.useCallback(() => {
            o(eI.Jq.GIFT_BUTTON),
                (0, J.a)(
                    t,
                    { isGift: !0, giftRecipient: i, giftingOrigin: r },
                    { analyticsLocations: [...d, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [t, o, i, r, d]),
        T = (0, k.h)(t.applicationId),
        S = n.useMemo(() => [...d, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [d]),
        y = n.useCallback(() => {
            null != T &&
                (o(eI.Jq.BUY_WITH_ORBS_BUTTON),
                (0, O.B4)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    onComplete: () => {
                        (0, W.j)(), (0, z.n)({ sku: t, application: T, analyticsLocations: S });
                    },
                    analyticsLocations: S,
                }));
        }, [t, T, S, o]),
        R = (e) => (N ? (0, s.jsx)(es, { orbsGate: b, orbPrice: j, onCheckout: y, variant: e }) : null),
        L = () =>
            (0, s.jsx)(u.$, {
                icon: m.o,
                variant: "primary",
                onClick: E,
                text: V.intl.string(V.t.ilhtIa),
                fullWidth: !0,
            }),
        P = function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return (0, s.jsx)(u.$, { variant: "secondary", onClick: I, text: e, fullWidth: t });
        },
        U = (0, s.jsxs)("div", {
            className: ek.mr,
            children: [
                (0, s.jsx)(u.$, {
                    variant: C ? "secondary" : "primary",
                    onClick: I,
                    text: null != v ? V.intl.format(V.t.YkXGyY, { priceString: v }) : V.intl.string(V.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, s.jsx)(x.D, {
                    className: ek.xP,
                    onClick: E,
                    "aria-label": V.intl.string(V.t.QAZA5f),
                    role: "button",
                    children: (0, s.jsx)(m.o, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        H = (0, s.jsx)(u.$, {
            icon: m.o,
            variant: "secondary",
            onClick: E,
            text: V.intl.string(V.t.QAZA5f),
            fullWidth: !0,
        }),
        Y =
            !N &&
            (0, s.jsx)(c.E, { variant: "text-xxs/normal", color: "text-subtle", children: V.intl.string(V.t.IqlPbQ) });
    if (g) {
        let e = N && !_ && "HIDDEN" !== b && null != j;
        return (0, s.jsxs)("div", {
            className: ek.NC,
            children: [
                Y,
                e
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsxs)(h.B, {
                                  direction: "horizontal",
                                  gap: 8,
                                  children: [L(), P(V.intl.string(V.t.pi7PDT), !1)],
                              }),
                              R("secondary"),
                          ],
                      })
                    : (0, s.jsxs)(s.Fragment, { children: [L(), N && P(V.intl.string(V.t.pxocaf))] }),
            ],
        });
    }
    return (0, s.jsxs)("div", { className: ek.NC, children: [Y, C && R("primary"), N ? U : H, !C && R("secondary")] });
}
function eL(e) {
    let { selectedCarouselItem: t, applicationId: l } = e;
    if (null == t) return null;
    let n = null != t.labelIconAssetId ? (0, H.YE)(l, t.labelIconAssetId) : null;
    return (0, s.jsxs)("div", {
        className: ek.HI,
        children: [
            null != n && (0, s.jsx)("img", { className: ek.IX, src: n, alt: "" }, n),
            (0, s.jsx)(c.E, { variant: "text-xs/medium", color: "text-subtle", children: t.label }),
        ],
    });
}
function eP(e) {
    let { onClick: t, onMouseDown: l, children: n, ariaLabel: i, className: r = ek.jU } = e;
    return (0, s.jsx)(x.D, { onClick: t, onMouseDown: l, className: r, "aria-label": i, role: "button", children: n });
}
function eU(e) {
    let { selectedCarouselItem: t, title: l, description: n, applicationId: i, className: r } = e;
    return (0, s.jsxs)("div", {
        className: r,
        children: [
            null != l && (0, s.jsx)(o.D, { variant: "heading-md/semibold", color: "text-strong", children: l }),
            (0, s.jsx)(eL, { applicationId: i, selectedCarouselItem: t }),
            null != n && (0, s.jsx)(c.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
        ],
    });
}
function eH(e) {
    let {
            customNavigateToSocialLayerStorefront: t,
            transitionState: l,
            returnRef: i,
            skuId: o,
            applicationId: d,
            isStorefront: u,
            giftRecipient: m,
            giftingOrigin: x,
            analyticsLocations: h,
            analyticsContext: A,
            onClose: k,
        } = e,
        { analyticsLocations: O } = (0, E.Ay)(h ?? []),
        { guildId: z } = (0, Y.nG)(d),
        W = (0, a.bG)([L.default], () => L.default.getId()),
        J = null != m && m.id !== W;
    n.useEffect(() => {
        null != o && (0, G.iR)(d, o);
    }, [d, o]);
    let K = (0, M.A)({ applicationId: d }),
        Z = (0, a.bG)([F.A], () => F.A.getSkuAssets()),
        ee = (0, a.bG)([P.A], () => P.A.isFetchingForSKU(o)),
        et = (0, j.M)((0, I.Ay)()),
        [el, es] = n.useState(!0),
        en = (0, y.A)({ skuId: o }),
        ei = (0, S.JL)({ sku: en }),
        { state: er, isReady: ea } = (0, w.we)({
            orbPriceAmount: ei?.amount,
            applicationId: d,
            location: "product_details_modal",
        }),
        eo = (0, S.CD)({ sku: en }),
        [ec, ed] = n.useState(0),
        [eu, em] = n.useMemo(
            () =>
                (function (e, t, l, s) {
                    let { heroWidth: n } = s,
                        i = [],
                        r = [];
                    if (null == e || 0 === e.length) return [i, r];
                    for (let s of e) {
                        let e = null != s.assetId ? l[s.assetId] : null;
                        null != e &&
                            (i.push(s),
                            e.mime_type.startsWith("video/")
                                ? r.push({
                                      type: "video",
                                      src: (0, H.YE)(t, e, n, "mp4"),
                                      videoThumbnailSrc: (0, H.YE)(t, e, n, "webp"),
                                      thumbnailSrc:
                                          null != s.thumbnailAssetId
                                              ? (0, H.YE)(t, s.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != s.backgroundAssetId
                                              ? (0, H.YE)(t, s.backgroundAssetId, n, Y.pV)
                                              : void 0,
                                  })
                                : r.push({
                                      type: "image",
                                      src: (0, H.YE)(t, e, n, "webp"),
                                      thumbnailSrc:
                                          null != s.thumbnailAssetId
                                              ? (0, H.YE)(t, s.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != s.backgroundAssetId
                                              ? (0, H.YE)(t, s.backgroundAssetId, n, Y.pV)
                                              : void 0,
                                  }));
                    }
                    return [i, r];
                })(en?.tenantMetadata?.socialLayer?.carouselItems ?? [], d, Z, { heroWidth: 747 }),
            [en, d, Z],
        ),
        [ex, eb] = n.useState(null),
        [ep, eg] = n.useState(!1);
    n.useEffect(() => {
        if (null == ex) return;
        let e = new ResizeObserver(() => {
            eg(ex.scrollHeight > ex.clientHeight);
        });
        return e.observe(ex), () => e.disconnect();
    }, [ex]);
    let e_ = ec < em.length ? ec : 0,
        ef = eu[e_] ?? null,
        eN = em.length > 1,
        eC = em.some((e) => "video" === e.type);
    (0, R.pE)(),
        (0, v.Ay)(() => {
            U.default.track(eE.HAw.OPEN_MODAL, { location_stack: O, type: eA.Nh, sku_id: o, application_id: d }),
                (0, G.Xw)();
        });
    let eS = n.useCallback(
            (e) => {
                U.default.track(eE.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
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
        ey = n.useRef(!1);
    n.useEffect(() => {
        !ey.current &&
            "HIDDEN" !== er &&
            ea &&
            ((ey.current = !0),
            U.default.track(eE.HAw.SLAYER_STOREFRONT_ORBS_PURCHASE_GATE_VIEWED, {
                slayer_storefront_session_id: A?.sessionId,
                sku_id: o,
                guild_id: A?.guildId,
                application_id: d,
                orbs_purchase_gate_state: er,
                orb_price: ei?.amount,
                location_stack: O,
            }));
    }, [er, ea, A, o, d, ei, O]);
    let eO = n.useCallback(
        (e) => {
            ed(e), eS(eI.Jq.CAROUSEL_ITEM);
        },
        [eS],
    );
    n.useEffect(() => {
        null == o || P.A.isFetchingForSKU(o) || (0, G.Pp)(d, o);
    }, [d, o]);
    let eL = n.useCallback(() => {
            null != en &&
                (eS(eI.Jq.FORWARD_BUTTON),
                (0, q.d)({
                    sku: en,
                    guildId: z,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: O,
                    analyticsContext: A,
                }));
        }, [en, z, eS, O, A]),
        eH = n.useCallback(() => {
            eS(eI.Jq.WISHLIST_BUTTON);
        }, [eS]),
        eY = n.useCallback(() => {
            (0, $.G)({ applicationId: d });
        }, [d]),
        eG = n.useCallback(() => {
            eS(eI.Jq.VISIT_SHOP), (0, b.closeAllModals)(), null != t ? t() : (0, $.default)({ applicationId: d });
        }, [d, eS, t]),
        eF = n.useCallback(() => {
            es(!el), eS(eI.Jq.MUTE_BUTTON);
        }, [el, eS]),
        eM = (0, B.F)("pdp", { applicationId: d, skuId: o }),
        ew = en?.tenantMetadata?.socialLayer;
    if (null == en || null == ew) return ee ? (0, s.jsx)(p.y, {}) : null;
    let eB = K?.storefront,
        e$ = eB?.logoAssetId != null ? (0, H.YE)(eB.applicationId, eB.logoAssetId, 256) : null,
        eq = eB?.lightThemeLogoAssetId != null ? (0, H.YE)(eB.applicationId, eB.lightThemeLogoAssetId, 256) : null,
        ez = null;
    return (
        (ez = et ? (e$ ?? eq) : (eq ?? e$)),
        (0, s.jsx)(g.EO, {
            transitionState: l,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: ek.CR,
            size: g.rI.DYNAMIC,
            returnRef: i,
            children: (0, s.jsx)(g.$m, {
                className: ek.jE,
                children: (0, s.jsxs)("div", {
                    className: ek.nr,
                    children: [
                        (0, s.jsxs)("div", {
                            className: r()(ek.op, { [ek.uk]: en.exclusive }),
                            children: [
                                (0, s.jsx)("div", {
                                    className: ek.r$,
                                    children:
                                        null != ez
                                            ? (0, s.jsx)("img", { className: ek.wm, src: ez, alt: eB?.title ?? "" })
                                            : null,
                                }),
                                (0, s.jsxs)("div", {
                                    ref: eb,
                                    className: ek.zD,
                                    children: [
                                        en.exclusive &&
                                            (0, s.jsx)("div", { className: ek.K3, children: (0, s.jsx)(Q.I, {}) }),
                                        eN
                                            ? (0, s.jsxs)(s.Fragment, {
                                                  children: [
                                                      (0, s.jsx)(eT, { sku: en }),
                                                      (0, s.jsx)("div", {
                                                          className: ek._D,
                                                          children: (0, s.jsx)(X, {
                                                              mediaItems: em,
                                                              labels: eu.map((e) => e.label),
                                                              selectedIndex: e_,
                                                              onSelectIndex: eO,
                                                          }),
                                                      }),
                                                      (0, s.jsx)(eU, {
                                                          selectedCarouselItem: ef,
                                                          title: ef?.title,
                                                          description: ef?.description,
                                                          applicationId: d,
                                                          className: ek.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, s.jsx)(eU, {
                                                  selectedCarouselItem: ef,
                                                  title: en.name,
                                                  description: en.description,
                                                  applicationId: d,
                                                  className: ek.cP,
                                              }),
                                    ],
                                }),
                                (0, s.jsx)("div", {
                                    className: r()(ek.Td, { [ek.t7]: ep }),
                                    children: (0, s.jsxs)(D.$, {
                                        isGifting: J,
                                        location: "SocialLayerStorefrontProductDetailsModal",
                                        children: [
                                            (0, s.jsx)(eD, {
                                                orbPrice: ei,
                                                orbsGate: er,
                                                formattedPrice: eo,
                                                analyticsLocations: O,
                                                applicationId: d,
                                            }),
                                            null != eM &&
                                                (0, s.jsx)(ej.O0, {
                                                    Icon: eM.Icon,
                                                    text: eM.text,
                                                    endDatetime: eM.endsAt,
                                                    tooltip: eM.tooltip,
                                                }),
                                            (0, s.jsx)(eR, {
                                                sku: en,
                                                guildId: z,
                                                giftRecipient: m?.id !== W ? m : void 0,
                                                giftingOrigin: m?.id !== W ? x : void 0,
                                                trackPDPClick: eS,
                                                analyticsLocations: O,
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
                            className: ek.il,
                            children: [
                                (0, s.jsx)(eh, { item: em[e_], isMuted: el, alt: ef?.label ?? en.name }),
                                !u &&
                                    (0, s.jsxs)(eP, {
                                        onClick: eG,
                                        onMouseDown: eY,
                                        ariaLabel: V.intl.string(V.t["+v/1Dk"]),
                                        className: ek.gW,
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
                                    className: ek.V7,
                                    children: [
                                        null != en &&
                                            (0, s.jsx)(ev._, {
                                                sku: en,
                                                isCardHovered: !0,
                                                className: r()(ek.jU, ek.ij),
                                                trackButtonClick: eH,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, s.jsx)(eP, {
                                            onClick: eL,
                                            ariaLabel: V.intl.string(V.t.Ej3B3Y),
                                            children: (0, s.jsx)(T.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        eC &&
                                            (0, s.jsx)(eP, {
                                                onClick: eF,
                                                ariaLabel: el ? V.intl.string(V.t.YqAjXy) : V.intl.string(V.t.w4m945),
                                                children: el
                                                    ? (0, s.jsx)(f._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, s.jsx)(N.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, s.jsx)(eP, {
                                            onClick: k,
                                            ariaLabel: V.intl.string(V.t.cpT0Cq),
                                            children: (0, s.jsx)(C.d, { size: "refresh_sm", color: "currentColor" }),
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
