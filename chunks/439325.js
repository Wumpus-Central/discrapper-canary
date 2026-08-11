t.d(l, { default: () => eP });
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
    p = t(366010),
    b = t(192308),
    j = t(289873),
    _ = t(34188),
    N = t(358618),
    g = t(983851),
    C = t(972213),
    f = t(964486),
    A = t(736653),
    I = t(793574),
    E = t(688810),
    k = t(429913),
    v = t(427209),
    T = t(993046),
    O = t(801228),
    S = t(652165),
    y = t(561794),
    R = t(280450),
    D = t(328968),
    L = t(174459),
    U = t(371794),
    P = t(871123),
    H = t(733391),
    Y = t(832163),
    B = t(429635),
    M = t(69236),
    w = t(31969),
    G = t(44724);
t(321073);
var F = t(345938),
    q = t(510022),
    z = t(317560),
    J = t(99161),
    W = t(375708),
    $ = t(206189);
function V(e) {
    let { mediaItems: l, labels: t, selectedIndex: n, onSelectIndex: i } = e;
    return l.length <= 1
        ? null
        : (0, s.jsxs)("div", {
              className: $.kL,
              children: [
                  (0, s.jsx)(d.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: W.intl.string(W.t.U7DAV9),
                  }),
                  (0, s.jsx)("div", {
                      className: $.Vg,
                      children: l.map((e, l) =>
                          (0, s.jsx)(
                              x.D,
                              {
                                  className: r()($.xn, { [$.Y4]: l === n }),
                                  onClick: () => i(l),
                                  "aria-label": t?.[l],
                                  "aria-pressed": l === n,
                                  children: (0, s.jsx)("img", {
                                      className: $.q_,
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
    ee = t(445972);
function el(e) {
    let { orbsGate: l, orbPrice: t, onCheckout: i, onTrackEarnMoreOrbs: r, variant: a = "secondary" } = e,
        o = n.useCallback(() => {
            r(), (0, Z.mA)({ fromContent: Q.u.SOCIAL_LAYER_STOREFRONT }), (0, z.j)();
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
                    className: ee.Y,
                    children: W.intl.format(W.t.lOtBOI, {
                        orbPrice: t.amount,
                        orbIconHook: () => (0, s.jsx)(u.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                    }),
                }),
                fullWidth: !0,
            });
}
var et = t(310784),
    es = t.n(et),
    en = t(775602),
    ei = t(654107),
    er = t(175671),
    ea = t(619517),
    eo = t(966245),
    ec = t(318375);
function ed(e) {
    return (0, eo.$o)({ ...e, className: ec.tN, mediaPlayerClassName: ec.yf });
}
function eu(e) {
    return (0, s.jsx)(ea.Ay, { ...e });
}
function em(e) {
    let { item: l, isMuted: t, className: i, alt: r = "" } = e,
        o = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, ei.rh)(l, "#000000");
            return n.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = es()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        c = (0, a.bG)([en.Ay], () => en.Ay.useReducedMotion),
        [d, u] = n.useState(null),
        [m, x] = n.useState(l);
    m !== l && (x(l), m?.type === "image" && l?.type === "image" && m.src !== l.src ? u(m.src) : u(null));
    let h = n.useCallback(() => u(null), []);
    if (null == l) return null;
    let p = {
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
                      style: p,
                      children: (0, s.jsx)(
                          er.rr,
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
                  style: p,
                  children: [
                      (0, s.jsx)("img", { src: l.src, alt: r, className: ec.Sl }, l.src),
                      null != d && !c && (0, s.jsx)("img", { src: d, alt: "", className: ec.Ve, onAnimationEnd: h }, d),
                  ],
              }),
          });
}
var ex = t(821707),
    eh = t(320448),
    ep = t(403581),
    eb = t(532794),
    ej = t(910200),
    e_ = t(202541),
    eN = t(430825),
    eg = t(191145);
function eC(e) {
    let { orbsGate: l, onTrackClickNitroUpsell: t, applicationId: i, analyticsLocations: r } = e,
        o = (0, a.bG)([Y.A], () => Y.A.getConfigForApplicationId(i)),
        c = n.useCallback(() => {
            t(), (0, eb.A)({ subscriptionTier: e_.pe.TIER_2, analyticsLocations: r, applicationId: i });
        }, [r, i, t]);
    return "HIDDEN" === l
        ? null
        : "NEEDS_NITRO" === l
          ? (0, s.jsx)(x.D, {
                className: eg.L,
                onClick: c,
                children: (0, s.jsx)(ej.Ay, {
                    Icon: ep.t,
                    gradientColor: "nitro-pink",
                    tooltip: W.intl.string(eN.default.XwadDC),
                    text: W.intl.string(eN.default.cg95CA),
                    trailing: (0, s.jsx)(eh._, { size: "xs" }),
                }),
            })
          : (0, s.jsx)(ej.O0, {
                Icon: ep.t,
                text: W.intl.string(eN.default.cg95CA),
                endDatetime: o?.promotionEndDatetime,
                gradientColor: "nitro-pink",
            });
}
var ef = t(454491),
    eA = t(743693),
    eI = t(995393),
    eE = t(188275),
    ek = t(652215),
    ev = t(363434);
function eT(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, s.jsxs)("div", {
              className: ev.AX,
              children: [
                  (0, s.jsx)(c.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, s.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function eO(e) {
    let { amount: l, orbGate: t } = e;
    return (0, s.jsxs)("div", {
        className: r()(ev.aX, { [ev.dQ]: "NEEDS_NITRO" === t || "NOT_ENOUGH_ORBS" === t }),
        children: [
            (0, s.jsx)(u.C, { size: "xs", color: "currentColor" }),
            (0, s.jsx)(d.E, { variant: "text-md/semibold", color: "currentColor", children: l }),
        ],
    });
}
function eS(e) {
    let { normalPrice: l, discountedPrice: t, discountPercent: n, hasNitroOffer: i } = e;
    return i && null != t
        ? (0, s.jsx)(ex.A, { discountedPrice: t, normalPrice: l })
        : null != n && null != t
          ? (0, s.jsxs)("div", {
                className: ev._k,
                children: [
                    (0, s.jsx)(d.E, { variant: "text-md/medium", className: ev.Jb, children: l }),
                    (0, s.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                    (0, s.jsx)(d.E, { variant: "text-md/bold", className: ev.Fi, children: n }),
                ],
            })
          : (0, s.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: l });
}
function ey(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: n, hasNitroOffer: i } = e,
        { normalPrice: a, discountedPrice: o, discountPercent: c } = n;
    if (null == a) return null;
    let d = "HIDDEN" !== t && null != l,
        u = "CAN_CHECKOUT" === t;
    return (0, s.jsxs)("div", {
        className: ev.sj,
        children: [
            (0, s.jsx)(X.V, { textColor: "text-subtle" }),
            (0, s.jsx)("div", {
                className: r()(ev.hO, d && ev.XE),
                children:
                    d && u
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(eO, { amount: l.amount, orbGate: t }),
                                  (0, s.jsx)(eS, {
                                      normalPrice: a,
                                      discountedPrice: o,
                                      discountPercent: c,
                                      hasNitroOffer: i,
                                  }),
                              ],
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(eS, {
                                      normalPrice: a,
                                      discountedPrice: o,
                                      discountPercent: c,
                                      hasNitroOffer: i,
                                  }),
                                  d && (0, s.jsx)(eO, { amount: l.amount, orbGate: t }),
                              ],
                          }),
            }),
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
            analyticsLocations: c,
            orbPrice: u,
            orbsGate: p,
            formattedPrice: b,
        } = e,
        j = l.id,
        _ = (0, a.bG)([Y.A], () => Y.A.getNormalizedSKUEligibility(j), [j]),
        N = _ && "CAN_CHECKOUT" === p,
        g = b.discountedPrice ?? b.normalPrice,
        C = n.useCallback(() => {
            o(eI.Jq.BUY_BUTTON),
                (0, J.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...c, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                );
        }, [l, o, t, c]),
        f = n.useCallback(() => {
            o(eI.Jq.GIFT_BUTTON),
                (0, J.a)(
                    l,
                    { isGift: !0, giftRecipient: i, giftingOrigin: r },
                    { analyticsLocations: [...c, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [l, o, i, r, c]),
        A = (0, k.h)(l.applicationId),
        E = n.useMemo(() => [...c, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [c]),
        v = n.useCallback(() => {
            null != A &&
                (o(eI.Jq.BUY_WITH_ORBS_BUTTON),
                (0, S.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    onComplete: () => {
                        (0, z.j)(), (0, q.n)({ sku: l, application: A, analyticsLocations: E });
                    },
                    analyticsLocations: E,
                }));
        }, [l, A, E, o]),
        T = n.useCallback(() => {
            o(eI.Jq.EARN_MORE_ORBS_BUTTON);
        }, [o]),
        O = _
            ? (0, s.jsx)(el, {
                  orbsGate: p,
                  orbPrice: u,
                  onCheckout: v,
                  onTrackEarnMoreOrbs: T,
                  variant: N ? "primary" : "secondary",
              })
            : null,
        y = (0, s.jsxs)("div", {
            className: ev.mr,
            children: [
                (0, s.jsx)(m.$, {
                    variant: N ? "secondary" : "primary",
                    onClick: C,
                    text: null != g ? W.intl.format(W.t.YkXGyY, { priceString: g }) : W.intl.string(W.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, s.jsx)(x.D, {
                    className: ev.xP,
                    onClick: f,
                    "aria-label": W.intl.string(W.t.QAZA5f),
                    role: "button",
                    children: (0, s.jsx)(h.o, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        R = (0, s.jsx)(m.$, {
            icon: h.o,
            variant: "secondary",
            onClick: f,
            text: W.intl.string(W.t.QAZA5f),
            fullWidth: !0,
        });
    return (0, s.jsxs)("div", {
        className: ev.NC,
        children: [
            !_ &&
                (0, s.jsx)(d.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: W.intl.string(W.t.IqlPbQ),
                }),
            N && O,
            _ ? y : R,
            !N && O,
        ],
    });
}
function eD(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let n = null != l.labelIconAssetId ? (0, U.YE)(t, l.labelIconAssetId) : null;
    return (0, s.jsxs)("div", {
        className: ev.HI,
        children: [
            null != n && (0, s.jsx)("img", { className: ev.IX, src: n, alt: "" }, n),
            (0, s.jsx)(d.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eL(e) {
    let { onClick: l, onMouseDown: t, children: n, ariaLabel: i, className: r = ev.jU } = e;
    return (0, s.jsx)(x.D, { onClick: l, onMouseDown: t, className: r, "aria-label": i, role: "button", children: n });
}
function eU(e) {
    let { selectedCarouselItem: l, title: t, description: n, applicationId: i, className: r } = e;
    return (0, s.jsxs)("div", {
        className: r,
        children: [
            null != t && (0, s.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
            (0, s.jsx)(eD, { applicationId: i, selectedCarouselItem: l }),
            null != n && (0, s.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
        ],
    });
}
function eP(e) {
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
            analyticsContext: k,
            onClose: S,
        } = e,
        { analyticsLocations: q } = (0, E.Ay)(I ?? []),
        { guildId: z } = (0, P.nG)(u),
        J = (0, a.bG)([R.default], () => R.default.getId());
    n.useEffect(() => {
        null != c && (0, H.iR)(u, c);
    }, [u, c]);
    let $ = (0, B.A)({ applicationId: u }),
        X = (0, a.bG)([Y.A], () => Y.A.getSkuAssets()),
        Q = (0, a.bG)([D.A], () => D.A.isFetchingForSKU(c)),
        Z = (0, p.M)((0, A.Ay)()),
        [ee, el] = n.useState(!0),
        et = (0, O.A)({ skuId: c }),
        es = (0, T.JL)({ sku: et }),
        { state: en, isReady: ei } = (0, M.we)({
            orbPriceAmount: es?.amount,
            applicationId: u,
            location: "product_details_modal",
        }),
        er = (0, T.CD)({ sku: et }),
        [ea, eo] = n.useState(0),
        [ec, ed] = n.useMemo(
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
                                              ? (0, U.YE)(l, s.backgroundAssetId, n, P.pV)
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
                                              ? (0, U.YE)(l, s.backgroundAssetId, n, P.pV)
                                              : void 0,
                                  }));
                    }
                    return [i, r];
                })(et?.tenantMetadata?.socialLayer?.carouselItems ?? [], u, X, { heroWidth: 747 }),
            [et, u, X],
        ),
        [eu, ex] = n.useState(null),
        [eh, ep] = n.useState(!1);
    n.useEffect(() => {
        if (null == eu) return;
        let e = new ResizeObserver(() => {
            ep(eu.scrollHeight > eu.clientHeight);
        });
        return e.observe(eu), () => e.disconnect();
    }, [eu]);
    let eb = ea < ed.length ? ea : 0,
        ej = ec[eb] ?? null,
        e_ = ed.length > 1,
        eN = ed.some((e) => "video" === e.type);
    (0, y.pE)(),
        (0, f.Ay)(() => {
            L.default.track(ek.HAw.OPEN_MODAL, { location_stack: q, type: eE.Nh, sku_id: c, application_id: u }),
                (0, H.Xw)();
        });
    let eg = n.useCallback(
            (e) => {
                L.default.track(ek.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: k?.sessionId,
                    sku_id: c,
                    guild_id: k?.guildId,
                    application_id: u,
                    cta_type: e,
                    location_stack: q,
                });
            },
            [k, c, u, q],
        ),
        eO = n.useCallback(() => {
            eg(eI.Jq.NITRO_UPSELL_BUTTON);
        }, [eg]),
        eS = n.useRef(!1);
    n.useEffect(() => {
        !eS.current &&
            "HIDDEN" !== en &&
            ei &&
            ((eS.current = !0),
            L.default.track(ek.HAw.SLAYER_STOREFRONT_ORBS_PURCHASE_GATE_VIEWED, {
                slayer_storefront_session_id: k?.sessionId,
                sku_id: c,
                guild_id: k?.guildId,
                application_id: u,
                orbs_purchase_gate_state: en,
                orb_price: es?.amount,
                location_stack: q,
            }));
    }, [en, ei, k, c, u, es, q]);
    let eD = n.useCallback(
        (e) => {
            eo(e), eg(eI.Jq.CAROUSEL_ITEM);
        },
        [eg],
    );
    n.useEffect(() => {
        null == c || D.A.isFetchingForSKU(c) || (0, H.Pp)(u, c);
    }, [u, c]);
    let eP = n.useCallback(() => {
            null != et &&
                (eg(eI.Jq.FORWARD_BUTTON),
                (0, F.d)({
                    sku: et,
                    guildId: z,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: q,
                    analyticsContext: k,
                }));
        }, [et, z, eg, q, k]),
        eH = n.useCallback(() => {
            eg(eI.Jq.WISHLIST_BUTTON);
        }, [eg]),
        eY = n.useCallback(() => {
            (0, G.G)({ applicationId: u });
        }, [u]),
        eB = n.useCallback(() => {
            eg(eI.Jq.VISIT_SHOP), (0, b.closeAllModals)(), null != l ? l() : (0, G.default)({ applicationId: u });
        }, [u, eg, l]),
        eM = n.useCallback(() => {
            el(!ee), eg(eI.Jq.MUTE_BUTTON);
        }, [ee, eg]),
        ew = (0, w.F)("pdp", { applicationId: u, skuId: c }),
        eG = et?.tenantMetadata?.socialLayer;
    if (null == et || null == eG) return Q ? (0, s.jsx)(j.y, {}) : null;
    let eF = $?.storefront,
        eq = eF?.logoAssetId != null ? (0, U.YE)(eF.applicationId, eF.logoAssetId, 256) : null,
        ez = eF?.lightThemeLogoAssetId != null ? (0, U.YE)(eF.applicationId, eF.lightThemeLogoAssetId, 256) : null,
        eJ = null;
    return (
        (eJ = Z ? (eq ?? ez) : (ez ?? eq)),
        (0, s.jsx)(o.EO, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: ev.CR,
            size: o.rI.DYNAMIC,
            returnRef: i,
            children: (0, s.jsx)(o.$m, {
                className: ev.jE,
                children: (0, s.jsxs)("div", {
                    className: ev.nr,
                    children: [
                        (0, s.jsxs)("div", {
                            className: r()(ev.op, { [ev.uk]: et.exclusive }),
                            children: [
                                (0, s.jsx)("div", {
                                    className: ev.r$,
                                    children:
                                        null != eJ
                                            ? (0, s.jsx)("img", { className: ev.wm, src: eJ, alt: eF?.title ?? "" })
                                            : null,
                                }),
                                (0, s.jsxs)("div", {
                                    ref: ex,
                                    className: ev.zD,
                                    children: [
                                        et.exclusive &&
                                            (0, s.jsx)("div", { className: ev.K3, children: (0, s.jsx)(K.I, {}) }),
                                        e_
                                            ? (0, s.jsxs)(s.Fragment, {
                                                  children: [
                                                      (0, s.jsx)(eT, { sku: et }),
                                                      (0, s.jsx)("div", {
                                                          className: ev._D,
                                                          children: (0, s.jsx)(V, {
                                                              mediaItems: ed,
                                                              labels: ec.map((e) => e.label),
                                                              selectedIndex: eb,
                                                              onSelectIndex: eD,
                                                          }),
                                                      }),
                                                      (0, s.jsx)(eU, {
                                                          selectedCarouselItem: ej,
                                                          title: ej?.title,
                                                          description: ej?.description,
                                                          applicationId: u,
                                                          className: ev.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, s.jsx)(eU, {
                                                  selectedCarouselItem: ej,
                                                  title: et.name,
                                                  description: et.description,
                                                  applicationId: u,
                                                  className: ev.cP,
                                              }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: r()(ev.Td, { [ev.t7]: eh }),
                                    children: [
                                        (0, s.jsx)(ey, {
                                            orbPrice: es,
                                            orbsGate: en,
                                            formattedPrice: er,
                                            hasNitroOffer: ew?.flavor === "nitro",
                                        }),
                                        "HIDDEN" !== en &&
                                            (0, s.jsx)(eC, {
                                                analyticsLocations: q,
                                                applicationId: u,
                                                onTrackClickNitroUpsell: eO,
                                                orbsGate: en,
                                            }),
                                        null != ew &&
                                            (0, s.jsx)(ef.e, {
                                                promotion: ew,
                                                applicationId: u,
                                                analyticsLocations: q,
                                                onUpsellClick: () => eg(eI.Jq.NITRO_UPSELL_BUTTON),
                                            }),
                                        (0, s.jsx)(eR, {
                                            sku: et,
                                            guildId: z,
                                            giftRecipient: x?.id !== J ? x : void 0,
                                            giftingOrigin: x?.id !== J ? h : void 0,
                                            trackPDPClick: eg,
                                            analyticsLocations: q,
                                            orbPrice: es,
                                            orbsGate: en,
                                            formattedPrice: er,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: ev.il,
                            children: [
                                (0, s.jsx)(em, { item: ed[eb], isMuted: ee, alt: ej?.label ?? et.name }),
                                !m &&
                                    (0, s.jsxs)(eL, {
                                        onClick: eB,
                                        onMouseDown: eY,
                                        ariaLabel: W.intl.string(W.t["+v/1Dk"]),
                                        className: ev.gW,
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
                                    className: ev.V7,
                                    children: [
                                        null != et &&
                                            (0, s.jsx)(eA._, {
                                                sku: et,
                                                isCardHovered: !0,
                                                className: r()(ev.jU, ev.ij),
                                                trackButtonClick: eH,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, s.jsx)(eL, {
                                            onClick: eP,
                                            ariaLabel: W.intl.string(W.t.Ej3B3Y),
                                            children: (0, s.jsx)(v.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        eN &&
                                            (0, s.jsx)(eL, {
                                                onClick: eM,
                                                ariaLabel: ee ? W.intl.string(W.t.YqAjXy) : W.intl.string(W.t.w4m945),
                                                children: ee
                                                    ? (0, s.jsx)(N._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, s.jsx)(g.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, s.jsx)(eL, {
                                            onClick: S,
                                            ariaLabel: W.intl.string(W.t.cpT0Cq),
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
