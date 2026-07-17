t.d(l, { default: () => eL });
var s = t(627968),
    n = t(64700),
    i = t(503698),
    a = t.n(i),
    r = t(17928),
    o = t(297264),
    c = t(834730),
    d = t(318254),
    u = t(821609),
    m = t(939249),
    x = t(597770),
    h = t(366010),
    b = t(192308),
    j = t(289873),
    p = t(935462),
    _ = t(34188),
    g = t(358618),
    N = t(983851),
    C = t(972213),
    E = t(964486),
    A = t(736653),
    v = t(793574),
    I = t(688810),
    f = t(429913),
    k = t(427209),
    T = t(993046),
    S = t(801228),
    O = t(652165),
    y = t(561794),
    R = t(280450),
    D = t(328968),
    L = t(174459),
    P = t(371794),
    U = t(871123),
    H = t(733391),
    Y = t(832163),
    M = t(429635),
    B = t(69236),
    G = t(31969),
    w = t(44724);
t(321073);
var F = t(345938),
    q = t(510022),
    z = t(317560),
    J = t(99161),
    $ = t(375708),
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
                      children: $.intl.string($.t.U7DAV9),
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
    let { orbsGate: l, orbPrice: t, onCheckout: i, onTrackEarnMoreOrbs: a, variant: r = "secondary" } = e,
        o = n.useCallback(() => {
            a(), (0, Z.mA)({ fromContent: Q.u.SOCIAL_LAYER_STOREFRONT }), (0, z.j)();
        }, [a]);
    return "HIDDEN" === l || null == t
        ? null
        : "NOT_ENOUGH_ORBS" === l
          ? (0, s.jsx)(u.$, { onClick: o, variant: r, icon: d.C, text: $.intl.string($.t.H57f41), fullWidth: !0 })
          : (0, s.jsx)(u.$, {
                onClick: i,
                disabled: "NEEDS_NITRO" === l,
                variant: r,
                text: (0, s.jsx)("span", {
                    className: ee.Y,
                    children: $.intl.format($.t.lOtBOI, {
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
    ep = t(202541),
    e_ = t(430825),
    eg = t(563681);
function eN(e) {
    let { orbsGate: l, onTrackClickNitroUpsell: t, applicationId: i, analyticsLocations: a } = e,
        o = (0, r.bG)([Y.A], () => Y.A.getConfigForApplicationId(i)),
        c = n.useCallback(() => {
            t(), (0, ej.A)({ subscriptionTier: ep.pe.TIER_2, analyticsLocations: a, applicationId: i });
        }, [a, i, t]);
    return "HIDDEN" === l
        ? null
        : "NEEDS_NITRO" === l
          ? (0, s.jsx)(m.D, {
                className: eg.L,
                onClick: c,
                children: (0, s.jsx)(ex.Ay, {
                    Icon: eb.t,
                    gradientColor: "nitro-pink",
                    tooltip: $.intl.string(e_.default.XwadDC),
                    text: $.intl.string(e_.default.cg95CA),
                    trailing: (0, s.jsx)(eh._, { size: "xs" }),
                }),
            })
          : (0, s.jsx)(ex.O0, {
                Icon: eb.t,
                text: $.intl.string(e_.default.cg95CA),
                endDatetime: o?.promotionEndDatetime,
                gradientColor: "nitro-pink",
            });
}
var eC = t(743693),
    eE = t(995393),
    eA = t(188275),
    ev = t(652215),
    eI = t(199138);
function ef(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, s.jsxs)("div", {
              className: eI.AX,
              children: [
                  (0, s.jsx)(o.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, s.jsx)(c.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function ek(e) {
    let { amount: l, orbGate: t } = e;
    return (0, s.jsxs)("div", {
        className: a()(eI.aX, { [eI.dQ]: "NEEDS_NITRO" === t || "NOT_ENOUGH_ORBS" === t }),
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
              className: eI._k,
              children: [
                  (0, s.jsx)(c.E, { variant: "text-md/medium", className: eI.Jb, children: l }),
                  (0, s.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                  (0, s.jsx)(c.E, { variant: "text-md/bold", className: eI.Fi, children: n }),
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
        className: eI.sj,
        children: [
            (0, s.jsx)(X.V, { textColor: "text-subtle" }),
            (0, s.jsx)("div", {
                className: a()(eI.hO, c && eI.XE),
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
            orbsGate: b,
            formattedPrice: j,
        } = e,
        p = l.id,
        _ = (0, r.bG)([Y.A], () => Y.A.getNormalizedSKUEligibility(p), [p]),
        g = _ && "CAN_CHECKOUT" === b,
        N = j.discountedPrice ?? j.normalPrice,
        C = n.useCallback(() => {
            o(eE.Jq.BUY_BUTTON),
                (0, J.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...d, v.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                );
        }, [l, o, t, d]),
        E = n.useCallback(() => {
            o(eE.Jq.GIFT_BUTTON),
                (0, J.a)(
                    l,
                    { isGift: !0, giftRecipient: i, giftingOrigin: a },
                    { analyticsLocations: [...d, v.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [l, o, i, a, d]),
        A = (0, f.h)(l.applicationId),
        I = n.useMemo(() => [...d, v.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [d]),
        k = n.useCallback(() => {
            null != A &&
                (o(eE.Jq.BUY_WITH_ORBS_BUTTON),
                (0, O.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    onComplete: () => {
                        (0, z.j)(), (0, q.n)({ sku: l, application: A, analyticsLocations: I });
                    },
                    analyticsLocations: I,
                }));
        }, [l, A, I, o]),
        T = n.useCallback(() => {
            o(eE.Jq.EARN_MORE_ORBS_BUTTON);
        }, [o]),
        S = _
            ? (0, s.jsx)(el, {
                  orbsGate: b,
                  orbPrice: h,
                  onCheckout: k,
                  onTrackEarnMoreOrbs: T,
                  variant: g ? "primary" : "secondary",
              })
            : null,
        y = (0, s.jsxs)("div", {
            className: eI.mr,
            children: [
                (0, s.jsx)(u.$, {
                    variant: g ? "secondary" : "primary",
                    onClick: C,
                    text: null != N ? $.intl.format($.t.YkXGyY, { priceString: N }) : $.intl.string($.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, s.jsx)(m.D, {
                    className: eI.xP,
                    onClick: E,
                    "aria-label": $.intl.string($.t.QAZA5f),
                    role: "button",
                    children: (0, s.jsx)(x.o, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        R = (0, s.jsx)(u.$, {
            icon: x.o,
            variant: "secondary",
            onClick: E,
            text: $.intl.string($.t.QAZA5f),
            fullWidth: !0,
        });
    return (0, s.jsxs)("div", {
        className: eI.NC,
        children: [
            !_ &&
                (0, s.jsx)(c.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: $.intl.string($.t.IqlPbQ),
                }),
            g && S,
            _ ? y : R,
            !g && S,
        ],
    });
}
function ey(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let n = null != l.labelIconAssetId ? (0, P.YE)(t, l.labelIconAssetId) : null;
    return (0, s.jsxs)("div", {
        className: eI.HI,
        children: [
            null != n && (0, s.jsx)("img", { className: eI.IX, src: n, alt: "" }, n),
            (0, s.jsx)(c.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eR(e) {
    let { onClick: l, onMouseDown: t, children: n, ariaLabel: i, className: a = eI.jU } = e;
    return (0, s.jsx)(m.D, { onClick: l, onMouseDown: t, className: a, "aria-label": i, role: "button", children: n });
}
function eD(e) {
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
function eL(e) {
    let {
            customNavigateToSocialLayerStorefront: l,
            transitionState: t,
            returnRef: i,
            skuId: o,
            applicationId: d,
            isStorefront: u,
            giftRecipient: m,
            giftingOrigin: x,
            analyticsLocations: v,
            analyticsContext: f,
            onClose: O,
        } = e,
        { analyticsLocations: q } = (0, I.Ay)(v ?? []),
        { guildId: z } = (0, U.nG)(d),
        J = (0, r.bG)([R.default], () => R.default.getId());
    n.useEffect(() => {
        null != o && (0, H.iR)(d, o);
    }, [d, o]);
    let W = (0, M.A)({ applicationId: d }),
        X = (0, r.bG)([Y.A], () => Y.A.getSkuAssets()),
        Q = (0, r.bG)([D.A], () => D.A.isFetchingForSKU(o)),
        Z = (0, h.M)((0, A.Ay)()),
        [ee, el] = n.useState(!0),
        et = (0, S.A)({ skuId: o }),
        es = (0, T.JL)({ sku: et }),
        { state: en, isReady: ei } = (0, B.we)({
            orbPriceAmount: es?.amount,
            applicationId: d,
            location: "product_details_modal",
        }),
        ea = (0, T.CD)({ sku: et }),
        [er, eo] = n.useState(0),
        [ec, ed] = n.useMemo(
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
        [eu, eh] = n.useState(null),
        [eb, ej] = n.useState(!1);
    n.useEffect(() => {
        if (null == eu) return;
        let e = new ResizeObserver(() => {
            ej(eu.scrollHeight > eu.clientHeight);
        });
        return e.observe(eu), () => e.disconnect();
    }, [eu]);
    let ep = er < ed.length ? er : 0,
        e_ = ec[ep] ?? null,
        eg = ed.length > 1,
        ek = ed.some((e) => "video" === e.type);
    (0, y.pE)(),
        (0, E.Ay)(() => {
            L.default.track(ev.HAw.OPEN_MODAL, { location_stack: q, type: eA.Nh, sku_id: o, application_id: d }),
                (0, H.Xw)();
        });
    let eT = n.useCallback(
            (e) => {
                L.default.track(ev.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: f?.sessionId,
                    sku_id: o,
                    guild_id: f?.guildId,
                    application_id: d,
                    cta_type: e,
                    location_stack: q,
                });
            },
            [f, o, d, q],
        ),
        ey = n.useCallback(() => {
            eT(eE.Jq.NITRO_UPSELL_BUTTON);
        }, [eT]),
        eL = n.useRef(!1);
    n.useEffect(() => {
        !eL.current &&
            "HIDDEN" !== en &&
            ei &&
            ((eL.current = !0),
            L.default.track(ev.HAw.SLAYER_STOREFRONT_ORBS_PURCHASE_GATE_VIEWED, {
                slayer_storefront_session_id: f?.sessionId,
                sku_id: o,
                guild_id: f?.guildId,
                application_id: d,
                orbs_purchase_gate_state: en,
                orb_price: es?.amount,
                location_stack: q,
            }));
    }, [en, ei, f, o, d, es, q]);
    let eP = n.useCallback(
        (e) => {
            eo(e), eT(eE.Jq.CAROUSEL_ITEM);
        },
        [eT],
    );
    n.useEffect(() => {
        null == o || D.A.isFetchingForSKU(o) || (0, H.Pp)(d, o);
    }, [d, o]);
    let eU = n.useCallback(() => {
            null != et &&
                (eT(eE.Jq.FORWARD_BUTTON),
                (0, F.d)({
                    sku: et,
                    guildId: z,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: q,
                    analyticsContext: f,
                }));
        }, [et, z, eT, q, f]),
        eH = n.useCallback(() => {
            eT(eE.Jq.WISHLIST_BUTTON);
        }, [eT]),
        eY = n.useCallback(() => {
            (0, w.G)({ applicationId: d });
        }, [d]),
        eM = n.useCallback(() => {
            eT(eE.Jq.VISIT_SHOP), (0, b.closeAllModals)(), null != l ? l() : (0, w.default)({ applicationId: d });
        }, [d, eT, l]),
        eB = n.useCallback(() => {
            el(!ee), eT(eE.Jq.MUTE_BUTTON);
        }, [ee, eT]),
        eG = (0, G.F)("pdp", { applicationId: d, skuId: o }),
        ew = et?.tenantMetadata?.socialLayer;
    if (null == et || null == ew) return Q ? (0, s.jsx)(j.y, {}) : null;
    let eF = W?.storefront,
        eq = eF?.logoAssetId != null ? (0, P.YE)(eF.applicationId, eF.logoAssetId, 256) : null,
        ez = eF?.lightThemeLogoAssetId != null ? (0, P.YE)(eF.applicationId, eF.lightThemeLogoAssetId, 256) : null,
        eJ = null;
    return (
        (eJ = Z ? (eq ?? ez) : (ez ?? eq)),
        (0, s.jsx)(p.EO, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: eI.CR,
            size: p.rI.DYNAMIC,
            returnRef: i,
            children: (0, s.jsx)(p.$m, {
                className: eI.jE,
                children: (0, s.jsxs)("div", {
                    className: eI.nr,
                    children: [
                        (0, s.jsxs)("div", {
                            className: a()(eI.op, { [eI.uk]: et.exclusive }),
                            children: [
                                (0, s.jsx)("div", {
                                    className: eI.r$,
                                    children:
                                        null != eJ
                                            ? (0, s.jsx)("img", { className: eI.wm, src: eJ, alt: eF?.title ?? "" })
                                            : null,
                                }),
                                (0, s.jsxs)("div", {
                                    ref: eh,
                                    className: eI.zD,
                                    children: [
                                        et.exclusive &&
                                            (0, s.jsx)("div", { className: eI.K3, children: (0, s.jsx)(K.I, {}) }),
                                        eg
                                            ? (0, s.jsxs)(s.Fragment, {
                                                  children: [
                                                      (0, s.jsx)(ef, { sku: et }),
                                                      (0, s.jsx)("div", {
                                                          className: eI._D,
                                                          children: (0, s.jsx)(V, {
                                                              mediaItems: ed,
                                                              labels: ec.map((e) => e.label),
                                                              selectedIndex: ep,
                                                              onSelectIndex: eP,
                                                          }),
                                                      }),
                                                      (0, s.jsx)(eD, {
                                                          selectedCarouselItem: e_,
                                                          title: e_?.title,
                                                          description: e_?.description,
                                                          applicationId: d,
                                                          className: eI.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, s.jsx)(eD, {
                                                  selectedCarouselItem: e_,
                                                  title: et.name,
                                                  description: et.description,
                                                  applicationId: d,
                                                  className: eI.cP,
                                              }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: a()(eI.Td, { [eI.t7]: eb }),
                                    children: [
                                        (0, s.jsx)(eS, { orbPrice: es, orbsGate: en, formattedPrice: ea }),
                                        "HIDDEN" !== en &&
                                            (0, s.jsx)(eN, {
                                                analyticsLocations: q,
                                                applicationId: d,
                                                onTrackClickNitroUpsell: ey,
                                                orbsGate: en,
                                            }),
                                        null != eG &&
                                            (0, s.jsx)(ex.O0, {
                                                Icon: eG.Icon,
                                                text: eG.text,
                                                endDatetime: eG.endsAt,
                                                tooltip: eG.tooltip,
                                            }),
                                        (0, s.jsx)(eO, {
                                            sku: et,
                                            guildId: z,
                                            giftRecipient: m?.id !== J ? m : void 0,
                                            giftingOrigin: m?.id !== J ? x : void 0,
                                            trackPDPClick: eT,
                                            analyticsLocations: q,
                                            orbPrice: es,
                                            orbsGate: en,
                                            formattedPrice: ea,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: eI.il,
                            children: [
                                (0, s.jsx)(em, { item: ed[ep], isMuted: ee, alt: e_?.label ?? et.name }),
                                !u &&
                                    (0, s.jsxs)(eR, {
                                        onClick: eM,
                                        onMouseDown: eY,
                                        ariaLabel: $.intl.string($.t["+v/1Dk"]),
                                        className: eI.gW,
                                        children: [
                                            (0, s.jsx)(_.U, { size: "refresh_sm", color: "currentColor" }),
                                            (0, s.jsx)(c.E, {
                                                variant: "text-md/medium",
                                                color: "currentColor",
                                                children: $.intl.string($.t["+v/1Dk"]),
                                            }),
                                        ],
                                    }),
                                (0, s.jsxs)("div", {
                                    className: eI.V7,
                                    children: [
                                        null != et &&
                                            (0, s.jsx)(eC._, {
                                                sku: et,
                                                isCardHovered: !0,
                                                className: a()(eI.jU, eI.ij),
                                                trackButtonClick: eH,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, s.jsx)(eR, {
                                            onClick: eU,
                                            ariaLabel: $.intl.string($.t.Ej3B3Y),
                                            children: (0, s.jsx)(k.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        ek &&
                                            (0, s.jsx)(eR, {
                                                onClick: eB,
                                                ariaLabel: ee ? $.intl.string($.t.YqAjXy) : $.intl.string($.t.w4m945),
                                                children: ee
                                                    ? (0, s.jsx)(g._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, s.jsx)(N.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, s.jsx)(eR, {
                                            onClick: O,
                                            ariaLabel: $.intl.string($.t.cpT0Cq),
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
