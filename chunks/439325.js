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
    j = t(192308),
    b = t(289873),
    p = t(935462),
    g = t(34188),
    N = t(358618),
    v = t(983851),
    C = t(972213),
    _ = t(964486),
    I = t(736653),
    f = t(793574),
    A = t(688810),
    E = t(429913),
    k = t(427209),
    T = t(117218),
    S = t(801228),
    O = t(652165),
    y = t(561794),
    D = t(495544),
    L = t(328968),
    R = t(174459),
    P = t(371794),
    U = t(871123),
    Y = t(733391),
    H = t(832163),
    M = t(429635),
    w = t(69236),
    F = t(31969),
    G = t(44724);
t(321073);
var B = t(345938),
    q = t(510022),
    z = t(317560),
    $ = t(533406),
    J = t(375708),
    V = t(106757);
function W(e) {
    let { mediaItems: l, labels: t, selectedIndex: n, onSelectIndex: i } = e;
    return l.length <= 1
        ? null
        : (0, s.jsxs)("div", {
              className: V.kL,
              children: [
                  (0, s.jsx)(c.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: J.intl.string(J.t.U7DAV9),
                  }),
                  (0, s.jsx)("div", {
                      className: V.Vg,
                      children: l.map((e, l) =>
                          (0, s.jsx)(
                              m.D,
                              {
                                  className: a()(V.xn, { [V.Y4]: l === n }),
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
var X = t(263911),
    K = t(971146),
    Q = t(696292),
    Z = t(617986),
    ee = t(999932);
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
    ec = t(745903);
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
    let j = {
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
                      style: j,
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
                  style: j,
                  children: [
                      (0, s.jsx)("img", { src: l.src, alt: a, className: ec.Sl }, l.src),
                      null != d && !c && (0, s.jsx)("img", { src: d, alt: "", className: ec.Ve, onAnimationEnd: h }, d),
                  ],
              }),
          });
}
var ex = t(910200),
    eh = t(403581),
    ej = t(532794),
    eb = t(681064),
    ep = t(788868),
    eg = t(580350),
    eN = t(518433);
function ev(e) {
    let { orbsGate: l, applicationId: t, analyticsLocations: i } = e,
        a = n.useCallback(() => {
            "NEEDS_NITRO" === l
                ? (0, ej.A)({ subscriptionTier: ep.pe.TIER_2, analyticsLocations: i, applicationId: t })
                : (0, Z.navigateToQuestHome)({ fromContent: Q.u.SOCIAL_LAYER_STOREFRONT });
        }, [i, l, t]);
    return "HIDDEN" === l
        ? null
        : (0, s.jsx)(m.D, {
              className: eN.L,
              onClick: a,
              children:
                  "NEEDS_NITRO" === l
                      ? (0, s.jsx)(ex.A, {
                            Icon: eh.t,
                            gradientColor: "nitro-pink",
                            tooltip: J.intl.string(eg.default.XwadDC),
                            text: J.intl.string(eg.default.cg95CA),
                            trailingText: J.intl.string(J.t.pj0XBN),
                        })
                      : (0, s.jsx)(ex.O, {
                            Icon: eh.t,
                            text: J.intl.string(eg.default.cg95CA),
                            endDatetime: eb.V,
                            gradientColor: "nitro-pink",
                            tooltip: J.intl.string(eg.default["jVjr/j"]),
                        }),
          });
}
var eC = t(743693),
    e_ = t(995393),
    eI = t(188275),
    ef = t(652215),
    eA = t(894562);
function eE(e) {
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
function ek(e) {
    let { amount: l, orbGate: t } = e;
    return (0, s.jsxs)("div", {
        className: a()(eA.aX, { [eA.dQ]: "NEEDS_NITRO" === t }),
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
              className: eA._k,
              children: [
                  (0, s.jsx)(c.E, { variant: "text-md/medium", className: eA.Jb, children: l }),
                  (0, s.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                  (0, s.jsx)(c.E, { variant: "text-md/bold", className: eA.Fi, children: n }),
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
        className: eA.sj,
        children: [
            (0, s.jsx)(K.V, { textColor: "text-subtle" }),
            (0, s.jsx)("div", {
                className: a()(eA.hO, c && eA.XE),
                children:
                    c && d
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(ek, { amount: l.amount, orbGate: t }),
                                  (0, s.jsx)(eT, { normalPrice: i, discountedPrice: r, discountPercent: o }),
                              ],
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(eT, { normalPrice: i, discountedPrice: r, discountPercent: o }),
                                  c && (0, s.jsx)(ek, { amount: l.amount, orbGate: t }),
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
            orbsGate: j,
            formattedPrice: b,
        } = e,
        p = l.id,
        g = (0, r.bG)([H.A], () => H.A.getNormalizedSKUEligibility(p), [p]),
        N = g && "CAN_CHECKOUT" === j,
        v = b.discountedPrice ?? b.normalPrice,
        C = n.useCallback(() => {
            o(e_.Jq.BUY_BUTTON),
                (0, $.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...d, f.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                );
        }, [l, o, t, d]),
        _ = n.useCallback(() => {
            o(e_.Jq.GIFT_BUTTON),
                (0, $.a)(
                    l,
                    { isGift: !0, giftRecipient: i, giftingOrigin: a },
                    { analyticsLocations: [...d, f.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [l, o, i, a, d]),
        I = (0, E.h)(l.applicationId),
        A = n.useMemo(() => [...d, f.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [d]),
        k = n.useCallback(() => {
            null != I &&
                (o(e_.Jq.BUY_WITH_ORBS_BUTTON),
                (0, O.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    onComplete: () => {
                        (0, z.j)(), (0, q.n)({ sku: l, application: I, analyticsLocations: A });
                    },
                    analyticsLocations: A,
                }));
        }, [l, I, A, o]),
        T = g
            ? (0, s.jsx)(el, { orbsGate: j, orbPrice: h, onCheckout: k, variant: N ? "primary" : "secondary" })
            : null,
        S = (0, s.jsxs)("div", {
            className: eA.mr,
            children: [
                (0, s.jsx)(u.$, {
                    variant: N ? "secondary" : "primary",
                    onClick: C,
                    text: null != v ? J.intl.format(J.t.YkXGyY, { priceString: v }) : J.intl.string(J.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, s.jsx)(m.D, {
                    className: eA.xP,
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
        className: eA.NC,
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
        className: eA.HI,
        children: [
            null != n && (0, s.jsx)("img", { className: eA.IX, src: n, alt: "" }, n),
            (0, s.jsx)(c.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eD(e) {
    let { onClick: l, onMouseDown: t, children: n, ariaLabel: i, className: a = eA.jU } = e;
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
            analyticsLocations: f,
            analyticsContext: E,
            onClose: O,
        } = e,
        { analyticsLocations: q } = (0, A.Ay)(f ?? []),
        { guildId: z } = (0, U.nG)(d),
        $ = (0, r.bG)([D.default], () => D.default.getId());
    n.useEffect(() => {
        null != o && (0, Y.iR)(d, o);
    }, [d, o]);
    let V = (0, M.A)({ applicationId: d }),
        K = (0, r.bG)([H.A], () => H.A.getSkuAssets()),
        Q = (0, r.bG)([L.A], () => L.A.isFetchingForSKU(o)),
        Z = (0, h.M)((0, I.Ay)()),
        [ee, el] = n.useState(!0),
        et = (0, S.A)({ skuId: o }),
        es = (0, T.JL)({ sku: et }),
        en = (0, w.o)({ orbPriceAmount: es?.amount, applicationId: d, location: "product_details_modal" }),
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
                })(et?.tenantMetadata?.socialLayer?.carouselItems ?? [], d, K, { heroWidth: 747 }),
            [et, d, K],
        ),
        [ed, eu] = n.useState(null),
        [eh, ej] = n.useState(!1);
    n.useEffect(() => {
        if (null == ed) return;
        let e = new ResizeObserver(() => {
            ej(ed.scrollHeight > ed.clientHeight);
        });
        return e.observe(ed), () => e.disconnect();
    }, [ed]);
    let eb = ea < ec.length ? ea : 0,
        ep = eo[eb] ?? null,
        eg = ec.length > 1,
        eN = ec.some((e) => "video" === e.type);
    (0, y.pE)(),
        (0, _.Ay)(() => {
            R.default.track(ef.HAw.OPEN_MODAL, { location_stack: q, type: eI.Nh, sku_id: o, application_id: d }),
                (0, Y.Xw)();
        });
    let ek = n.useCallback(
            (e) => {
                R.default.track(ef.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: E?.sessionId,
                    sku_id: o,
                    guild_id: E?.guildId,
                    application_id: d,
                    cta_type: e,
                    location_stack: q,
                });
            },
            [E, o, d, q],
        ),
        eT = n.useCallback(
            (e) => {
                er(e), ek(e_.Jq.CAROUSEL_ITEM);
            },
            [ek],
        );
    n.useEffect(() => {
        null == o || L.A.isFetchingForSKU(o) || (0, Y.Pp)(d, o);
    }, [d, o]);
    let ey = n.useCallback(() => {
            null != et &&
                (ek(e_.Jq.FORWARD_BUTTON),
                (0, B.d)({
                    sku: et,
                    guildId: z,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: q,
                    analyticsContext: E,
                }));
        }, [et, z, ek, q, E]),
        eR = n.useCallback(() => {
            ek(e_.Jq.WISHLIST_BUTTON);
        }, [ek]),
        eP = n.useCallback(() => {
            (0, G.G)({ applicationId: d });
        }, [d]),
        eU = n.useCallback(() => {
            ek(e_.Jq.VISIT_SHOP), (0, j.closeAllModals)(), null != l ? l() : (0, G.default)({ applicationId: d });
        }, [d, ek, l]),
        eY = n.useCallback(() => {
            el(!ee), ek(e_.Jq.MUTE_BUTTON);
        }, [ee, ek]),
        eH = (0, F.F)("pdp", { applicationId: d, skuId: o }),
        eM = et?.tenantMetadata?.socialLayer;
    if (null == et || null == eM) return Q ? (0, s.jsx)(b.y, {}) : null;
    let ew = V?.storefront,
        eF = ew?.logoAssetId != null ? (0, P.YE)(ew.applicationId, ew.logoAssetId, 256) : null,
        eG = ew?.lightThemeLogoAssetId != null ? (0, P.YE)(ew.applicationId, ew.lightThemeLogoAssetId, 256) : null,
        eB = null;
    return (
        (eB = Z ? (eF ?? eG) : (eG ?? eF)),
        (0, s.jsx)(p.EO, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: eA.CR,
            size: p.rI.DYNAMIC,
            returnRef: i,
            children: (0, s.jsx)(p.$m, {
                className: eA.jE,
                children: (0, s.jsxs)("div", {
                    className: eA.nr,
                    children: [
                        (0, s.jsxs)("div", {
                            className: a()(eA.op, { [eA.uk]: et.exclusive }),
                            children: [
                                (0, s.jsx)("div", {
                                    className: eA.r$,
                                    children:
                                        null != eB
                                            ? (0, s.jsx)("img", { className: eA.wm, src: eB, alt: ew?.title ?? "" })
                                            : null,
                                }),
                                (0, s.jsxs)("div", {
                                    ref: eu,
                                    className: eA.zD,
                                    children: [
                                        et.exclusive &&
                                            (0, s.jsx)("div", { className: eA.K3, children: (0, s.jsx)(X.I, {}) }),
                                        eg
                                            ? (0, s.jsxs)(s.Fragment, {
                                                  children: [
                                                      (0, s.jsx)(eE, { sku: et }),
                                                      (0, s.jsx)("div", {
                                                          className: eA._D,
                                                          children: (0, s.jsx)(W, {
                                                              mediaItems: ec,
                                                              labels: eo.map((e) => e.label),
                                                              selectedIndex: eb,
                                                              onSelectIndex: eT,
                                                          }),
                                                      }),
                                                      (0, s.jsx)(eL, {
                                                          selectedCarouselItem: ep,
                                                          title: ep?.title,
                                                          description: ep?.description,
                                                          applicationId: d,
                                                          className: eA.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, s.jsx)(eL, {
                                                  selectedCarouselItem: ep,
                                                  title: et.name,
                                                  description: et.description,
                                                  applicationId: d,
                                                  className: eA.cP,
                                              }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: a()(eA.Td, { [eA.t7]: eh }),
                                    children: [
                                        (0, s.jsx)(eS, { orbPrice: es, orbsGate: en, formattedPrice: ei }),
                                        "HIDDEN" !== en &&
                                            (0, s.jsx)(ev, { analyticsLocations: q, applicationId: d, orbsGate: en }),
                                        null != eH &&
                                            (0, s.jsx)(ex.O, {
                                                Icon: eH.Icon,
                                                text: eH.text,
                                                endDatetime: eH.endsAt,
                                                tooltip: eH.tooltip,
                                            }),
                                        (0, s.jsx)(eO, {
                                            sku: et,
                                            guildId: z,
                                            giftRecipient: m?.id !== $ ? m : void 0,
                                            giftingOrigin: m?.id !== $ ? x : void 0,
                                            trackPDPClick: ek,
                                            analyticsLocations: q,
                                            orbPrice: es,
                                            orbsGate: en,
                                            formattedPrice: ei,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: eA.il,
                            children: [
                                (0, s.jsx)(em, { item: ec[eb], isMuted: ee, alt: ep?.label ?? et.name }),
                                !u &&
                                    (0, s.jsxs)(eD, {
                                        onClick: eU,
                                        onMouseDown: eP,
                                        ariaLabel: J.intl.string(J.t["+v/1Dk"]),
                                        className: eA.gW,
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
                                    className: eA.V7,
                                    children: [
                                        null != et &&
                                            (0, s.jsx)(eC._, {
                                                sku: et,
                                                isCardHovered: !0,
                                                className: a()(eA.jU, eA.ij),
                                                trackButtonClick: eR,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, s.jsx)(eD, {
                                            onClick: ey,
                                            ariaLabel: J.intl.string(J.t.Ej3B3Y),
                                            children: (0, s.jsx)(k.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        eN &&
                                            (0, s.jsx)(eD, {
                                                onClick: eY,
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
