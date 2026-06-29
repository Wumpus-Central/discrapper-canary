t.d(l, { default: () => eR });
var s = t(627968),
    n = t(64700),
    i = t(503698),
    a = t.n(i),
    r = t(17928),
    o = t(534514),
    c = t(834730),
    d = t(318254),
    u = t(821609),
    m = t(939249),
    x = t(597770),
    h = t(366010),
    b = t(192308),
    j = t(289873),
    p = t(935462),
    g = t(34188),
    N = t(358618),
    v = t(983851),
    C = t(972213),
    _ = t(964486),
    A = t(736653),
    I = t(793574),
    f = t(688810),
    k = t(429913),
    E = t(427209),
    T = t(117218),
    S = t(801228),
    O = t(652165),
    y = t(561794),
    D = t(495544),
    L = t(328968),
    R = t(174459),
    P = t(371794),
    U = t(871123),
    H = t(733391),
    Y = t(832163),
    G = t(429635),
    M = t(69236),
    w = t(31969),
    F = t(44724);
t(321073);
var B = t(345938),
    z = t(510022),
    q = t(317560),
    $ = t(533406),
    J = t(375708),
    W = t(964421);
function V(e) {
    let { mediaItems: l, labels: t, selectedIndex: n, onSelectIndex: i } = e;
    return l.length <= 1
        ? null
        : (0, s.jsxs)("div", {
              className: W.kL,
              children: [
                  (0, s.jsx)(c.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: J.intl.string(J.t.U7DAV9),
                  }),
                  (0, s.jsx)("div", {
                      className: W.Vg,
                      children: l.map((e, l) =>
                          (0, s.jsx)(
                              m.D,
                              {
                                  className: a()(W.xn, { [W.Y4]: l === n }),
                                  onClick: () => i(l),
                                  "aria-label": t?.[l],
                                  "aria-pressed": l === n,
                                  children: (0, s.jsx)("img", {
                                      className: W.q_,
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
    X = t(971146),
    Q = t(696292),
    Z = t(617986),
    ee = t(942460);
function el(e) {
    let { orbsGate: l, orbPrice: t, onCheckout: i, variant: a = "secondary" } = e,
        r = n.useCallback(() => {
            (0, Z.navigateToQuestHome)({ fromContent: Q.u.SOCIAL_LAYER_STOREFRONT });
        }, []);
    return "HIDDEN" === l || null == t
        ? null
        : "NOT_ENOUGH_ORBS" === l
          ? (0, s.jsx)(u.$, { onClick: r, variant: a, icon: d.C, text: J.intl.string(J.t.H57f41), fullWidth: !0 })
          : (0, s.jsx)(u.$, {
                onClick: i,
                disabled: "NEEDS_NITRO" === l,
                variant: a,
                text: (0, s.jsx)("span", {
                    className: ee.Y,
                    children: J.intl.format(J.t.lOtBOI, {
                        orbPrice: t.amount,
                        orbIconHook: () => (0, s.jsx)(d.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                    }),
                }),
                fullWidth: !0,
            });
}
var et = t(310784),
    es = t.n(et),
    en = t(775602),
    ei = t(654107),
    ea = t(175671),
    er = t(619517),
    eo = t(34337),
    ec = t(172079);
function ed(e) {
    return (0, eo.$o)({ ...e, className: ec.tN, mediaPlayerClassName: ec.yf });
}
function eu(e) {
    return (0, s.jsx)(er.Ay, { ...e });
}
function em(e) {
    let { item: l, isMuted: t, className: i, alt: a = "" } = e,
        o = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, ei.rh)(l, "#000000");
            return n.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = es()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        c = (0, r.bG)([en.Ay], () => en.Ay.useReducedMotion),
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
              className: i ?? ec.kL,
              children: (0, s.jsx)(
                  "div",
                  {
                      className: `${ec.h4} ${ec.nR}`,
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
                              className: ec.Ki,
                              volume: 1,
                              autoMute: t,
                              autoPlay: !0,
                              renderVideoComponent: ed,
                              renderImageComponent: eu,
                              renderLinkComponent: eo.bU,
                          },
                          `${l.src}-${t ? "muted" : "unmuted"}`,
                      ),
                  },
                  l.src,
              ),
          })
        : (0, s.jsx)("div", {
              className: i ?? ec.kL,
              children: (0, s.jsxs)("div", {
                  className: ec.h4,
                  style: b,
                  children: [
                      (0, s.jsx)("img", { src: l.src, alt: a, className: ec.Sl }, l.src),
                      null != d && !c && (0, s.jsx)("img", { src: d, alt: "", className: ec.Ve, onAnimationEnd: h }, d),
                  ],
              }),
          });
}
var ex = t(910200),
    eh = t(320448),
    eb = t(403581),
    ej = t(532794),
    ep = t(788868),
    eg = t(430825),
    eN = t(563681);
function ev(e) {
    let { orbsGate: l, applicationId: t, analyticsLocations: i } = e,
        a = (0, r.bG)([Y.A], () => Y.A.getConfigForApplicationId(t)),
        o = n.useCallback(() => {
            (0, ej.A)({ subscriptionTier: ep.pe.TIER_2, analyticsLocations: i, applicationId: t });
        }, [i, t]);
    return "HIDDEN" === l
        ? null
        : "NEEDS_NITRO" === l
          ? (0, s.jsx)(m.D, {
                className: eN.L,
                onClick: o,
                children: (0, s.jsx)(ex.Ay, {
                    Icon: eb.t,
                    gradientColor: "nitro-pink",
                    tooltip: J.intl.string(eg.default.XwadDC),
                    text: J.intl.string(eg.default.cg95CA),
                    trailing: (0, s.jsx)(eh._, { size: "xs" }),
                }),
            })
          : (0, s.jsx)(ex.O0, {
                Icon: eb.t,
                text: J.intl.string(eg.default.cg95CA),
                endDatetime: a?.promotionEndDatetime,
                gradientColor: "nitro-pink",
            });
}
var eC = t(743693),
    e_ = t(995393),
    eA = t(188275),
    eI = t(652215),
    ef = t(199138);
function ek(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, s.jsxs)("div", {
              className: ef.AX,
              children: [
                  (0, s.jsx)(o.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, s.jsx)(c.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function eE(e) {
    let { amount: l, orbGate: t } = e;
    return (0, s.jsxs)("div", {
        className: a()(ef.aX, { [ef.dQ]: "NEEDS_NITRO" === t || "NOT_ENOUGH_ORBS" === t }),
        children: [
            (0, s.jsx)(d.C, { size: "xs", color: "currentColor" }),
            (0, s.jsx)(c.E, { variant: "text-md/semibold", color: "currentColor", children: l }),
        ],
    });
}
function eT(e) {
    let { normalPrice: l, discountedPrice: t, discountPercent: n } = e;
    return null != n && null != t
        ? (0, s.jsxs)("div", {
              className: ef._k,
              children: [
                  (0, s.jsx)(c.E, { variant: "text-md/medium", className: ef.Jb, children: l }),
                  (0, s.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                  (0, s.jsx)(c.E, { variant: "text-md/bold", className: ef.Fi, children: n }),
              ],
          })
        : (0, s.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: l });
}
function eS(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: n } = e,
        { normalPrice: i, discountedPrice: r, discountPercent: o } = n;
    if (null == i) return null;
    let c = "HIDDEN" !== t && null != l,
        d = "CAN_CHECKOUT" === t;
    return (0, s.jsxs)("div", {
        className: ef.sj,
        children: [
            (0, s.jsx)(X.V, { textColor: "text-subtle" }),
            (0, s.jsx)("div", {
                className: a()(ef.hO, c && ef.XE),
                children:
                    c && d
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(eE, { amount: l.amount, orbGate: t }),
                                  (0, s.jsx)(eT, { normalPrice: i, discountedPrice: r, discountPercent: o }),
                              ],
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(eT, { normalPrice: i, discountedPrice: r, discountPercent: o }),
                                  c && (0, s.jsx)(eE, { amount: l.amount, orbGate: t }),
                              ],
                          }),
            }),
        ],
    });
}
function eO(e) {
    let {
            sku: l,
            guildId: t,
            giftRecipient: i,
            giftingOrigin: a,
            trackPDPClick: o,
            analyticsLocations: d,
            orbPrice: h,
            orbsGate: b,
            formattedPrice: j,
        } = e,
        p = l.id,
        g = (0, r.bG)([Y.A], () => Y.A.getNormalizedSKUEligibility(p), [p]),
        N = g && "CAN_CHECKOUT" === b,
        v = j.discountedPrice ?? j.normalPrice,
        C = n.useCallback(() => {
            o(e_.Jq.BUY_BUTTON),
                (0, $.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...d, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                );
        }, [l, o, t, d]),
        _ = n.useCallback(() => {
            o(e_.Jq.GIFT_BUTTON),
                (0, $.a)(
                    l,
                    { isGift: !0, giftRecipient: i, giftingOrigin: a },
                    { analyticsLocations: [...d, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [l, o, i, a, d]),
        A = (0, k.h)(l.applicationId),
        f = n.useMemo(() => [...d, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [d]),
        E = n.useCallback(() => {
            null != A &&
                (o(e_.Jq.BUY_WITH_ORBS_BUTTON),
                (0, O.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    onComplete: () => {
                        (0, q.j)(), (0, z.n)({ sku: l, application: A, analyticsLocations: f });
                    },
                    analyticsLocations: f,
                }));
        }, [l, A, f, o]),
        T = g
            ? (0, s.jsx)(el, { orbsGate: b, orbPrice: h, onCheckout: E, variant: N ? "primary" : "secondary" })
            : null,
        S = (0, s.jsxs)("div", {
            className: ef.mr,
            children: [
                (0, s.jsx)(u.$, {
                    variant: N ? "secondary" : "primary",
                    onClick: C,
                    text: null != v ? J.intl.format(J.t.YkXGyY, { priceString: v }) : J.intl.string(J.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, s.jsx)(m.D, {
                    className: ef.xP,
                    onClick: _,
                    "aria-label": J.intl.string(J.t.QAZA5f),
                    role: "button",
                    children: (0, s.jsx)(x.o, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        y = (0, s.jsx)(u.$, {
            icon: x.o,
            variant: "secondary",
            onClick: _,
            text: J.intl.string(J.t.QAZA5f),
            fullWidth: !0,
        });
    return (0, s.jsxs)("div", {
        className: ef.NC,
        children: [
            !g &&
                (0, s.jsx)(c.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: J.intl.string(J.t.IqlPbQ),
                }),
            N && T,
            g ? S : y,
            !N && T,
        ],
    });
}
function ey(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let n = null != l.labelIconAssetId ? (0, P.YE)(t, l.labelIconAssetId) : null;
    return (0, s.jsxs)("div", {
        className: ef.HI,
        children: [
            null != n && (0, s.jsx)("img", { className: ef.IX, src: n, alt: "" }, n),
            (0, s.jsx)(c.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eD(e) {
    let { onClick: l, onMouseDown: t, children: n, ariaLabel: i, className: a = ef.jU } = e;
    return (0, s.jsx)(m.D, { onClick: l, onMouseDown: t, className: a, "aria-label": i, role: "button", children: n });
}
function eL(e) {
    let { selectedCarouselItem: l, title: t, description: n, applicationId: i, className: a } = e;
    return (0, s.jsxs)("div", {
        className: a,
        children: [
            null != t && (0, s.jsx)(o.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
            (0, s.jsx)(ey, { applicationId: i, selectedCarouselItem: l }),
            null != n && (0, s.jsx)(c.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
        ],
    });
}
function eR(e) {
    let {
            customNavigateToSocialLayerStorefront: l,
            transitionState: t,
            returnRef: i,
            skuId: o,
            applicationId: d,
            isStorefront: u,
            giftRecipient: m,
            giftingOrigin: x,
            analyticsLocations: I,
            analyticsContext: k,
            onClose: O,
        } = e,
        { analyticsLocations: z } = (0, f.Ay)(I ?? []),
        { guildId: q } = (0, U.nG)(d),
        $ = (0, r.bG)([D.default], () => D.default.getId());
    n.useEffect(() => {
        null != o && (0, H.iR)(d, o);
    }, [d, o]);
    let W = (0, G.A)({ applicationId: d }),
        X = (0, r.bG)([Y.A], () => Y.A.getSkuAssets()),
        Q = (0, r.bG)([L.A], () => L.A.isFetchingForSKU(o)),
        Z = (0, h.M)((0, A.Ay)()),
        [ee, el] = n.useState(!0),
        et = (0, S.A)({ skuId: o }),
        es = (0, T.JL)({ sku: et }),
        en = (0, M.o)({ orbPriceAmount: es?.amount, applicationId: d, location: "product_details_modal" }),
        ei = (0, T.CD)({ sku: et }),
        [ea, er] = n.useState(0),
        [eo, ec] = n.useMemo(
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
                                      src: (0, P.YE)(l, e, n, "mp4"),
                                      videoThumbnailSrc: (0, P.YE)(l, e, n, "webp"),
                                      thumbnailSrc:
                                          null != s.thumbnailAssetId
                                              ? (0, P.YE)(l, s.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != s.backgroundAssetId
                                              ? (0, P.YE)(l, s.backgroundAssetId, n, U.pV)
                                              : void 0,
                                  })
                                : a.push({
                                      type: "image",
                                      src: (0, P.YE)(l, e, n, "webp"),
                                      thumbnailSrc:
                                          null != s.thumbnailAssetId
                                              ? (0, P.YE)(l, s.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != s.backgroundAssetId
                                              ? (0, P.YE)(l, s.backgroundAssetId, n, U.pV)
                                              : void 0,
                                  }));
                    }
                    return [i, a];
                })(et?.tenantMetadata?.socialLayer?.carouselItems ?? [], d, X, { heroWidth: 747 }),
            [et, d, X],
        ),
        [ed, eu] = n.useState(null),
        [eh, eb] = n.useState(!1);
    n.useEffect(() => {
        if (null == ed) return;
        let e = new ResizeObserver(() => {
            eb(ed.scrollHeight > ed.clientHeight);
        });
        return e.observe(ed), () => e.disconnect();
    }, [ed]);
    let ej = ea < ec.length ? ea : 0,
        ep = eo[ej] ?? null,
        eg = ec.length > 1,
        eN = ec.some((e) => "video" === e.type);
    (0, y.pE)(),
        (0, _.Ay)(() => {
            R.default.track(eI.HAw.OPEN_MODAL, { location_stack: z, type: eA.Nh, sku_id: o, application_id: d }),
                (0, H.Xw)();
        });
    let eE = n.useCallback(
            (e) => {
                R.default.track(eI.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: k?.sessionId,
                    sku_id: o,
                    guild_id: k?.guildId,
                    application_id: d,
                    cta_type: e,
                    location_stack: z,
                });
            },
            [k, o, d, z],
        ),
        eT = n.useCallback(
            (e) => {
                er(e), eE(e_.Jq.CAROUSEL_ITEM);
            },
            [eE],
        );
    n.useEffect(() => {
        null == o || L.A.isFetchingForSKU(o) || (0, H.Pp)(d, o);
    }, [d, o]);
    let ey = n.useCallback(() => {
            null != et &&
                (eE(e_.Jq.FORWARD_BUTTON),
                (0, B.d)({
                    sku: et,
                    guildId: q,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: z,
                    analyticsContext: k,
                }));
        }, [et, q, eE, z, k]),
        eR = n.useCallback(() => {
            eE(e_.Jq.WISHLIST_BUTTON);
        }, [eE]),
        eP = n.useCallback(() => {
            (0, F.G)({ applicationId: d });
        }, [d]),
        eU = n.useCallback(() => {
            eE(e_.Jq.VISIT_SHOP), (0, b.closeAllModals)(), null != l ? l() : (0, F.default)({ applicationId: d });
        }, [d, eE, l]),
        eH = n.useCallback(() => {
            el(!ee), eE(e_.Jq.MUTE_BUTTON);
        }, [ee, eE]),
        eY = (0, w.F)("pdp", { applicationId: d, skuId: o }),
        eG = et?.tenantMetadata?.socialLayer;
    if (null == et || null == eG) return Q ? (0, s.jsx)(j.y, {}) : null;
    let eM = W?.storefront,
        ew = eM?.logoAssetId != null ? (0, P.YE)(eM.applicationId, eM.logoAssetId, 256) : null,
        eF = eM?.lightThemeLogoAssetId != null ? (0, P.YE)(eM.applicationId, eM.lightThemeLogoAssetId, 256) : null,
        eB = null;
    return (
        (eB = Z ? (ew ?? eF) : (eF ?? ew)),
        (0, s.jsx)(p.EO, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: ef.CR,
            size: p.rI.DYNAMIC,
            returnRef: i,
            children: (0, s.jsx)(p.$m, {
                className: ef.jE,
                children: (0, s.jsxs)("div", {
                    className: ef.nr,
                    children: [
                        (0, s.jsxs)("div", {
                            className: a()(ef.op, { [ef.uk]: et.exclusive }),
                            children: [
                                (0, s.jsx)("div", {
                                    className: ef.r$,
                                    children:
                                        null != eB
                                            ? (0, s.jsx)("img", { className: ef.wm, src: eB, alt: eM?.title ?? "" })
                                            : null,
                                }),
                                (0, s.jsxs)("div", {
                                    ref: eu,
                                    className: ef.zD,
                                    children: [
                                        et.exclusive &&
                                            (0, s.jsx)("div", { className: ef.K3, children: (0, s.jsx)(K.I, {}) }),
                                        eg
                                            ? (0, s.jsxs)(s.Fragment, {
                                                  children: [
                                                      (0, s.jsx)(ek, { sku: et }),
                                                      (0, s.jsx)("div", {
                                                          className: ef._D,
                                                          children: (0, s.jsx)(V, {
                                                              mediaItems: ec,
                                                              labels: eo.map((e) => e.label),
                                                              selectedIndex: ej,
                                                              onSelectIndex: eT,
                                                          }),
                                                      }),
                                                      (0, s.jsx)(eL, {
                                                          selectedCarouselItem: ep,
                                                          title: ep?.title,
                                                          description: ep?.description,
                                                          applicationId: d,
                                                          className: ef.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, s.jsx)(eL, {
                                                  selectedCarouselItem: ep,
                                                  title: et.name,
                                                  description: et.description,
                                                  applicationId: d,
                                                  className: ef.cP,
                                              }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: a()(ef.Td, { [ef.t7]: eh }),
                                    children: [
                                        (0, s.jsx)(eS, { orbPrice: es, orbsGate: en, formattedPrice: ei }),
                                        "HIDDEN" !== en &&
                                            (0, s.jsx)(ev, { analyticsLocations: z, applicationId: d, orbsGate: en }),
                                        null != eY &&
                                            (0, s.jsx)(ex.O0, {
                                                Icon: eY.Icon,
                                                text: eY.text,
                                                endDatetime: eY.endsAt,
                                                tooltip: eY.tooltip,
                                            }),
                                        (0, s.jsx)(eO, {
                                            sku: et,
                                            guildId: q,
                                            giftRecipient: m?.id !== $ ? m : void 0,
                                            giftingOrigin: m?.id !== $ ? x : void 0,
                                            trackPDPClick: eE,
                                            analyticsLocations: z,
                                            orbPrice: es,
                                            orbsGate: en,
                                            formattedPrice: ei,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: ef.il,
                            children: [
                                (0, s.jsx)(em, { item: ec[ej], isMuted: ee, alt: ep?.label ?? et.name }),
                                !u &&
                                    (0, s.jsxs)(eD, {
                                        onClick: eU,
                                        onMouseDown: eP,
                                        ariaLabel: J.intl.string(J.t["+v/1Dk"]),
                                        className: ef.gW,
                                        children: [
                                            (0, s.jsx)(g.U, { size: "refresh_sm", color: "currentColor" }),
                                            (0, s.jsx)(c.E, {
                                                variant: "text-md/medium",
                                                color: "currentColor",
                                                children: J.intl.string(J.t["+v/1Dk"]),
                                            }),
                                        ],
                                    }),
                                (0, s.jsxs)("div", {
                                    className: ef.V7,
                                    children: [
                                        null != et &&
                                            (0, s.jsx)(eC._, {
                                                sku: et,
                                                isCardHovered: !0,
                                                className: a()(ef.jU, ef.ij),
                                                trackButtonClick: eR,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, s.jsx)(eD, {
                                            onClick: ey,
                                            ariaLabel: J.intl.string(J.t.Ej3B3Y),
                                            children: (0, s.jsx)(E.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        eN &&
                                            (0, s.jsx)(eD, {
                                                onClick: eH,
                                                ariaLabel: ee ? J.intl.string(J.t.YqAjXy) : J.intl.string(J.t.w4m945),
                                                children: ee
                                                    ? (0, s.jsx)(N._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, s.jsx)(v.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, s.jsx)(eD, {
                                            onClick: O,
                                            ariaLabel: J.intl.string(J.t.cpT0Cq),
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
