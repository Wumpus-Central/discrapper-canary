t.d(l, { default: () => eM });
var n = t(627968),
    s = t(64700),
    r = t(503698),
    i = t.n(r),
    a = t(696292),
    o = t(17928),
    c = t(534514),
    u = t(834730),
    d = t(318254),
    m = t(821609),
    x = t(939249),
    h = t(597770),
    p = t(366010),
    b = t(192308),
    j = t(289873),
    C = t(935462),
    g = t(403581),
    v = t(34188),
    f = t(358618),
    E = t(983851),
    _ = t(972213),
    I = t(964486),
    A = t(736653),
    N = t(793574),
    T = t(688810),
    k = t(429913),
    S = t(427209),
    O = t(532794),
    R = t(617986),
    y = t(117218),
    L = t(801228),
    D = t(652165),
    P = t(561794),
    U = t(495544),
    M = t(328968),
    Y = t(174459),
    H = t(371794),
    F = t(871123),
    w = t(733391),
    B = t(832163),
    G = t(681064),
    V = t(429635),
    q = t(69236),
    z = t(31969),
    $ = t(44724);
t(321073);
var J = t(345938),
    K = t(510022),
    W = t(317560),
    X = t(533406),
    Q = t(375708),
    Z = t(964421);
function ee(e) {
    let { mediaItems: l, labels: t, selectedIndex: s, onSelectIndex: r } = e;
    return l.length <= 1
        ? null
        : (0, n.jsxs)("div", {
              className: Z.kL,
              children: [
                  (0, n.jsx)(u.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: Q.intl.string(Q.t.U7DAV9),
                  }),
                  (0, n.jsx)("div", {
                      className: Z.Vg,
                      children: l.map((e, l) =>
                          (0, n.jsx)(
                              x.D,
                              {
                                  className: i()(Z.xn, { [Z.Y4]: l === s }),
                                  onClick: () => r(l),
                                  "aria-label": t?.[l],
                                  "aria-pressed": l === s,
                                  children: (0, n.jsx)("img", {
                                      className: Z.q_,
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
var el = t(263911),
    et = t(971146),
    en = t(554146),
    es = t(43105),
    er = t(131607),
    ei = t(49999),
    ea = t(788868),
    eo = t(530066),
    ec = t(942460);
function eu(e) {
    let { sku: l, orbsGate: t, orbPrice: r, analyticsLocations: i, onCheckout: o, variant: c = "secondary" } = e,
        u = s.useRef(null),
        [x, h] = (0, er.kn)("NEEDS_NITRO" === t ? [en.M.SLAYER_STOREFRONT_ORBS_PURCHASE_COACHMARK] : []),
        p = x === en.M.SLAYER_STOREFRONT_ORBS_PURCHASE_COACHMARK,
        {
            isOpen: b,
            onMouseEnter: j,
            onMouseLeave: C,
            popoverRef: v,
            close: f,
        } = (function (e) {
            let { forcedOpen: l } = e,
                [t, n] = s.useState(!1),
                [r, i] = s.useState(null),
                a = s.useRef(null),
                o = s.useRef(null),
                c = s.useCallback((e) => {
                    i(e);
                }, []),
                u = s.useCallback(() => {
                    null != o.current && (clearTimeout(o.current), (o.current = null)),
                        t ||
                            null != a.current ||
                            (a.current = setTimeout(() => {
                                (a.current = null), n(!0);
                            }, 350));
                }, [t]),
                d = s.useCallback(() => {
                    null != a.current && (clearTimeout(a.current), (a.current = null)),
                        t &&
                            !l &&
                            null == o.current &&
                            (o.current = setTimeout(() => {
                                (o.current = null), n(!1);
                            }, 150));
                }, [t, l]);
            return (
                s.useEffect(
                    () => () => {
                        null != a.current && clearTimeout(a.current), null != o.current && clearTimeout(o.current);
                    },
                    [],
                ),
                s.useEffect(() => {
                    if (null != r)
                        return (
                            r.addEventListener("mouseenter", u),
                            r.addEventListener("mouseleave", d),
                            () => {
                                r.removeEventListener("mouseenter", u), r.removeEventListener("mouseleave", d);
                            }
                        );
                }, [r, u, d]),
                {
                    isOpen: l || t,
                    onMouseEnter: u,
                    onMouseLeave: d,
                    popoverRef: c,
                    close: s.useCallback(() => {
                        null != a.current && (clearTimeout(a.current), (a.current = null)),
                            null != o.current && (clearTimeout(o.current), (o.current = null)),
                            n(!1);
                    }, []),
                }
            );
        })({ forcedOpen: p }),
        E = s.useMemo(
            () =>
                "NEEDS_NITRO" === t
                    ? {
                          title: Q.intl.string(eo.default["1OBZN2"]),
                          body: Q.intl.string(eo.default.FDywIe),
                          ctaText: Q.intl.string(eo.default["Mt/ukE"]),
                          ctaIcon: g.t,
                          ctaVariant: "expressive",
                          onCtaClick: () => {
                              p && h(ei.i.TAKE_ACTION),
                                  f(),
                                  (0, O.A)({
                                      subscriptionTier: ea.pe.TIER_2,
                                      analyticsLocations: i,
                                      applicationId: l.applicationId,
                                  });
                          },
                      }
                    : "NOT_ENOUGH_ORBS" === t
                      ? {
                            title: Q.intl.string(eo.default.Xo6oAV),
                            body: Q.intl.string(eo.default.fkdIdV),
                            ctaText: Q.intl.string(eo.default.d525FQ),
                            ctaIcon: d.C,
                            ctaVariant: "primary",
                            onCtaClick: () => {
                                f(), (0, R.navigateToQuestHome)({ fromContent: a.u.SOCIAL_LAYER_STOREFRONT });
                            },
                        }
                      : null,
            [t, p, h, f, i, l.applicationId],
        ),
        _ = null != E && b,
        I = s.useCallback(() => {
            p && h(ei.i.USER_DISMISS), f();
        }, [p, h, f]);
    return "HIDDEN" === t || null == r
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      ref: u,
                      onMouseEnter: j,
                      onMouseLeave: C,
                      children: (0, n.jsx)(m.$, {
                          onClick: o,
                          disabled: null != E,
                          variant: c,
                          text: (0, n.jsx)("span", {
                              className: ec.Y,
                              children: Q.intl.format(Q.t.lOtBOI, {
                                  orbPrice: r.amount,
                                  orbIconHook: () =>
                                      (0, n.jsx)(d.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                          fullWidth: !0,
                      }),
                  }),
                  null != E &&
                      (0, n.jsx)(es.A, {
                          targetElementRef: u,
                          popoverRef: v,
                          shouldShow: _,
                          position: "right",
                          alignmentStrategy: "edge",
                          align: "bottom",
                          caretConfig: { align: "end" },
                          size: "md",
                          title: E.title,
                          body: E.body,
                          actions: [{ text: E.ctaText, variant: E.ctaVariant, onClick: E.onCtaClick, icon: E.ctaIcon }],
                          onRequestClose: I,
                      }),
              ],
          });
}
var ed = t(310784),
    em = t.n(ed),
    ex = t(775602),
    eh = t(654107),
    ep = t(175671),
    eb = t(619517),
    ej = t(34337),
    eC = t(172079);
function eg(e) {
    return (0, ej.$o)({ ...e, className: eC.tN, mediaPlayerClassName: eC.yf });
}
function ev(e) {
    return (0, n.jsx)(eb.Ay, { ...e });
}
function ef(e) {
    let { item: l, isMuted: t, className: r, alt: i = "" } = e,
        a = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, eh.rh)(l, "#000000");
            return s.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = em()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        c = (0, o.bG)([ex.Ay], () => ex.Ay.useReducedMotion),
        [u, d] = s.useState(null),
        [m, x] = s.useState(l);
    m !== l && (x(l), m?.type === "image" && l?.type === "image" && m.src !== l.src ? d(m.src) : d(null));
    let h = s.useCallback(() => d(null), []);
    if (null == l) return null;
    let p = {
        background: a,
        backgroundImage: null != l.backgroundSrc ? `url(${l.backgroundSrc})` : void 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    return "video" === l.type
        ? (0, n.jsx)("div", {
              className: r ?? eC.kL,
              children: (0, n.jsx)(
                  "div",
                  {
                      className: `${eC.h4} ${eC.nR}`,
                      style: p,
                      children: (0, n.jsx)(
                          ep.rr,
                          {
                              href: null,
                              thumbnail: { url: l.videoThumbnailSrc, width: 747, height: 560 },
                              video: { url: l.src, proxyURL: l.src, width: 747, height: 560 },
                              provider: void 0,
                              allowFullScreen: !0,
                              maxHeight: 560,
                              maxWidth: 747,
                              playable: !0,
                              className: eC.Ki,
                              volume: 1,
                              autoMute: t,
                              autoPlay: !0,
                              renderVideoComponent: eg,
                              renderImageComponent: ev,
                              renderLinkComponent: ej.bU,
                          },
                          `${l.src}-${t ? "muted" : "unmuted"}`,
                      ),
                  },
                  l.src,
              ),
          })
        : (0, n.jsx)("div", {
              className: r ?? eC.kL,
              children: (0, n.jsxs)("div", {
                  className: eC.h4,
                  style: p,
                  children: [
                      (0, n.jsx)("img", { src: l.src, alt: i, className: eC.Sl }, l.src),
                      null != u && !c && (0, n.jsx)("img", { src: u, alt: "", className: eC.Ve, onAnimationEnd: h }, u),
                  ],
              }),
          });
}
var eE = t(910200),
    e_ = t(743693),
    eI = t(995393),
    eA = t(188275),
    eN = t(652215),
    eT = t(430825),
    ek = t(199138);
function eS(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: ek.AX,
              children: [
                  (0, n.jsx)(c.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, n.jsx)(u.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function eO(e) {
    let { amount: l } = e;
    return (0, n.jsxs)("div", {
        className: ek.aX,
        children: [
            (0, n.jsx)(d.C, { size: "xs", color: "currentColor" }),
            (0, n.jsx)(u.E, { variant: "text-md/semibold", color: "currentColor", children: l }),
        ],
    });
}
function eR(e) {
    let { normalPrice: l, discountedPrice: t, discountPercent: s } = e;
    return null != s && null != t
        ? (0, n.jsxs)("div", {
              className: ek._k,
              children: [
                  (0, n.jsx)(u.E, { variant: "text-md/medium", className: ek.Jb, children: l }),
                  (0, n.jsx)(u.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                  (0, n.jsx)(u.E, { variant: "text-md/bold", className: ek.Fi, children: s }),
              ],
          })
        : (0, n.jsx)(u.E, { variant: "text-md/semibold", color: "text-strong", children: l });
}
function ey(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: s } = e,
        { normalPrice: r, discountedPrice: a, discountPercent: o } = s;
    if (null == r) return null;
    let c = "HIDDEN" !== t && null != l;
    return (0, n.jsxs)("div", {
        className: ek.sj,
        children: [
            (0, n.jsx)(et.V, { textColor: "text-subtle" }),
            (0, n.jsx)("div", {
                className: i()(ek.hO, c && ek.XE),
                children:
                    c && "CAN_CHECKOUT" === t
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(eO, { amount: l.amount }),
                                  (0, n.jsx)(eR, { normalPrice: r, discountedPrice: a, discountPercent: o }),
                              ],
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(eR, { normalPrice: r, discountedPrice: a, discountPercent: o }),
                                  c && (0, n.jsx)(eO, { amount: l.amount }),
                              ],
                          }),
            }),
        ],
    });
}
function eL(e) {
    let {
            sku: l,
            guildId: t,
            giftRecipient: r,
            giftingOrigin: i,
            trackPDPClick: a,
            analyticsLocations: c,
            orbPrice: d,
            orbsGate: p,
            formattedPrice: b,
        } = e,
        j = l.id,
        C = (0, o.bG)([B.A], () => B.A.getNormalizedSKUEligibility(j), [j]),
        g = C && "CAN_CHECKOUT" === p,
        v = b.discountedPrice ?? b.normalPrice,
        f = s.useCallback(() => {
            a(eI.Jq.BUY_BUTTON),
                (0, X.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...c, N.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                );
        }, [l, a, t, c]),
        E = s.useCallback(() => {
            a(eI.Jq.GIFT_BUTTON),
                (0, X.a)(
                    l,
                    { isGift: !0, giftRecipient: r, giftingOrigin: i },
                    { analyticsLocations: [...c, N.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [l, a, r, i, c]),
        _ = (0, k.h)(l.applicationId),
        I = s.useMemo(() => [...c, N.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [c]),
        A = s.useCallback(() => {
            null != _ &&
                (a(eI.Jq.BUY_WITH_ORBS_BUTTON),
                (0, D.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    onComplete: () => {
                        (0, W.j)(), (0, K.n)({ sku: l, application: _, analyticsLocations: I });
                    },
                    analyticsLocations: I,
                }));
        }, [l, _, I, a]),
        T = C
            ? (0, n.jsx)(eu, {
                  sku: l,
                  orbsGate: p,
                  orbPrice: d,
                  analyticsLocations: I,
                  onCheckout: A,
                  variant: g ? "primary" : "secondary",
              })
            : null,
        S = (0, n.jsxs)("div", {
            className: ek.mr,
            children: [
                (0, n.jsx)(m.$, {
                    variant: g ? "secondary" : "primary",
                    onClick: f,
                    text: null != v ? Q.intl.format(Q.t.YkXGyY, { priceString: v }) : Q.intl.string(Q.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, n.jsx)(x.D, {
                    className: ek.xP,
                    onClick: E,
                    "aria-label": Q.intl.string(Q.t.QAZA5f),
                    role: "button",
                    children: (0, n.jsx)(h.o, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        O = (0, n.jsx)(m.$, {
            icon: h.o,
            variant: "secondary",
            onClick: E,
            text: Q.intl.string(Q.t.QAZA5f),
            fullWidth: !0,
        });
    return (0, n.jsxs)("div", {
        className: ek.NC,
        children: [
            !C &&
                (0, n.jsx)(u.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: Q.intl.string(Q.t.IqlPbQ),
                }),
            g && T,
            C ? S : O,
            !g && T,
        ],
    });
}
function eD(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let s = null != l.labelIconAssetId ? (0, H.YE)(t, l.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: ek.HI,
        children: [
            null != s && (0, n.jsx)("img", { className: ek.IX, src: s, alt: "" }, s),
            (0, n.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eP(e) {
    let { onClick: l, onMouseDown: t, children: s, ariaLabel: r, className: i = ek.jU } = e;
    return (0, n.jsx)(x.D, { onClick: l, onMouseDown: t, className: i, "aria-label": r, role: "button", children: s });
}
function eU(e) {
    let { selectedCarouselItem: l, title: t, description: s, applicationId: r, className: i } = e;
    return (0, n.jsxs)("div", {
        className: i,
        children: [
            null != t && (0, n.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
            (0, n.jsx)(eD, { applicationId: r, selectedCarouselItem: l }),
            null != s && (0, n.jsx)(u.E, { variant: "text-sm/normal", color: "text-subtle", children: s }),
        ],
    });
}
function eM(e) {
    let {
            customNavigateToSocialLayerStorefront: l,
            transitionState: t,
            returnRef: r,
            skuId: c,
            applicationId: d,
            isStorefront: m,
            giftRecipient: h,
            giftingOrigin: N,
            analyticsLocations: k,
            analyticsContext: D,
            onClose: K,
        } = e,
        { analyticsLocations: W } = (0, T.Ay)(k ?? []),
        { guildId: X } = (0, F.nG)(d),
        Z = (0, o.bG)([U.default], () => U.default.getId());
    s.useEffect(() => {
        null != c && (0, w.iR)(d, c);
    }, [d, c]);
    let et = (0, V.A)({ applicationId: d }),
        en = (0, o.bG)([B.A], () => B.A.getSkuAssets()),
        es = (0, o.bG)([M.A], () => M.A.isFetchingForSKU(c)),
        er = (0, p.M)((0, A.Ay)()),
        [ei, eo] = s.useState(!0),
        ec = (0, L.A)({ skuId: c }),
        eu = (0, y.JL)({ sku: ec }),
        ed = (0, q.o)({ orbPriceAmount: eu?.amount, location: "product_details_modal" }),
        em = (0, y.CD)({ sku: ec }),
        [ex, eh] = s.useState(0),
        [ep, eb] = s.useMemo(
            () =>
                (function (e, l, t, n) {
                    let { heroWidth: s } = n,
                        r = [],
                        i = [];
                    if (null == e || 0 === e.length) return [r, i];
                    for (let n of e) {
                        let e = null != n.assetId ? t[n.assetId] : null;
                        null != e &&
                            (r.push(n),
                            e.mime_type.startsWith("video/")
                                ? i.push({
                                      type: "video",
                                      src: (0, H.YE)(l, e, s, "mp4"),
                                      videoThumbnailSrc: (0, H.YE)(l, e, s, "webp"),
                                      thumbnailSrc:
                                          null != n.thumbnailAssetId
                                              ? (0, H.YE)(l, n.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != n.backgroundAssetId
                                              ? (0, H.YE)(l, n.backgroundAssetId, s, F.pV)
                                              : void 0,
                                  })
                                : i.push({
                                      type: "image",
                                      src: (0, H.YE)(l, e, s, "webp"),
                                      thumbnailSrc:
                                          null != n.thumbnailAssetId
                                              ? (0, H.YE)(l, n.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != n.backgroundAssetId
                                              ? (0, H.YE)(l, n.backgroundAssetId, s, F.pV)
                                              : void 0,
                                  }));
                    }
                    return [r, i];
                })(ec?.tenantMetadata?.socialLayer?.carouselItems ?? [], d, en, { heroWidth: 747 }),
            [ec, d, en],
        ),
        [ej, eC] = s.useState(null),
        [eg, ev] = s.useState(!1);
    s.useEffect(() => {
        if (null == ej) return;
        let e = new ResizeObserver(() => {
            ev(ej.scrollHeight > ej.clientHeight);
        });
        return e.observe(ej), () => e.disconnect();
    }, [ej]);
    let eO = ex < eb.length ? ex : 0,
        eR = ep[eO] ?? null,
        eD = eb.length > 1,
        eM = eb.some((e) => "video" === e.type);
    (0, P.pE)(),
        (0, I.Ay)(() => {
            Y.default.track(eN.HAw.OPEN_MODAL, { location_stack: W, type: eA.Nh, sku_id: c, application_id: d }),
                (0, w.Xw)();
        });
    let eY = s.useCallback(
            (e) => {
                Y.default.track(eN.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: D?.sessionId,
                    sku_id: c,
                    guild_id: D?.guildId,
                    application_id: d,
                    cta_type: e,
                    location_stack: W,
                });
            },
            [D, c, d, W],
        ),
        eH = s.useCallback(
            (e) => {
                eh(e), eY(eI.Jq.CAROUSEL_ITEM);
            },
            [eY],
        );
    s.useEffect(() => {
        null == c || M.A.isFetchingForSKU(c) || (0, w.Pp)(d, c);
    }, [d, c]);
    let eF = s.useCallback(() => {
            null != ec &&
                (eY(eI.Jq.FORWARD_BUTTON),
                (0, J.d)({
                    sku: ec,
                    guildId: X,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: W,
                    analyticsContext: D,
                }));
        }, [ec, X, eY, W, D]),
        ew = s.useCallback(() => {
            eY(eI.Jq.WISHLIST_BUTTON);
        }, [eY]),
        eB = s.useCallback(() => {
            (0, $.G)({ applicationId: d });
        }, [d]),
        eG = s.useCallback(() => {
            eY(eI.Jq.VISIT_SHOP), (0, b.closeAllModals)(), null != l ? l() : (0, $.default)({ applicationId: d });
        }, [d, eY, l]),
        eV = s.useCallback(() => {
            "NEEDS_NITRO" === ed
                ? (0, O.A)({ subscriptionTier: ea.pe.TIER_2, analyticsLocations: W, applicationId: ec?.applicationId })
                : (0, R.navigateToQuestHome)({ fromContent: a.u.SOCIAL_LAYER_STOREFRONT });
        }, [W, ed, ec?.applicationId]),
        eq = s.useCallback(() => {
            eo(!ei), eY(eI.Jq.MUTE_BUTTON);
        }, [ei, eY]),
        ez = (0, z.F)("pdp", { applicationId: d, skuId: c }),
        e$ = ec?.tenantMetadata?.socialLayer;
    if (null == ec || null == e$) return es ? (0, n.jsx)(j.y, {}) : null;
    let eJ = et?.storefront,
        eK = eJ?.logoAssetId != null ? (0, H.YE)(eJ.applicationId, eJ.logoAssetId, 256) : null,
        eW = eJ?.lightThemeLogoAssetId != null ? (0, H.YE)(eJ.applicationId, eJ.lightThemeLogoAssetId, 256) : null,
        eX = null;
    return (
        (eX = er ? (eK ?? eW) : (eW ?? eK)),
        (0, n.jsx)(C.EO, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: ek.CR,
            size: C.rI.DYNAMIC,
            returnRef: r,
            children: (0, n.jsx)(C.$m, {
                className: ek.jE,
                children: (0, n.jsxs)("div", {
                    className: ek.nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: i()(ek.op, { [ek.uk]: ec.exclusive }),
                            children: [
                                (0, n.jsx)("div", {
                                    className: ek.r$,
                                    children:
                                        null != eX
                                            ? (0, n.jsx)("img", { className: ek.wm, src: eX, alt: eJ?.title ?? "" })
                                            : null,
                                }),
                                (0, n.jsxs)("div", {
                                    ref: eC,
                                    className: ek.zD,
                                    children: [
                                        ec.exclusive &&
                                            (0, n.jsx)("div", { className: ek.K3, children: (0, n.jsx)(el.I, {}) }),
                                        eD
                                            ? (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(eS, { sku: ec }),
                                                      (0, n.jsx)("div", {
                                                          className: ek._D,
                                                          children: (0, n.jsx)(ee, {
                                                              mediaItems: eb,
                                                              labels: ep.map((e) => e.label),
                                                              selectedIndex: eO,
                                                              onSelectIndex: eH,
                                                          }),
                                                      }),
                                                      (0, n.jsx)(eU, {
                                                          selectedCarouselItem: eR,
                                                          title: eR?.title,
                                                          description: eR?.description,
                                                          applicationId: d,
                                                          className: ek.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, n.jsx)(eU, {
                                                  selectedCarouselItem: eR,
                                                  title: ec.name,
                                                  description: ec.description,
                                                  applicationId: d,
                                                  className: ek.cP,
                                              }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: i()(ek.Td, { [ek.t7]: eg }),
                                    children: [
                                        (0, n.jsx)(ey, { orbPrice: eu, orbsGate: ed, formattedPrice: em }),
                                        "HIDDEN" !== ed &&
                                            (0, n.jsx)(x.D, {
                                                className: ek.Lf,
                                                onClick: eV,
                                                children: (0, n.jsx)(eE.O, {
                                                    Icon: g.t,
                                                    text: Q.intl.string(eT.default.cg95CA),
                                                    endDatetime: G.V,
                                                    gradientColor: "nitro-pink",
                                                    tooltip: Q.intl.string(eT.default["jVjr/j"]),
                                                }),
                                            }),
                                        null != ez &&
                                            (0, n.jsx)(eE.O, {
                                                Icon: ez.Icon,
                                                text: ez.text,
                                                endDatetime: ez.endsAt,
                                                tooltip: ez.tooltip,
                                            }),
                                        (0, n.jsx)(eL, {
                                            sku: ec,
                                            guildId: X,
                                            giftRecipient: h?.id !== Z ? h : void 0,
                                            giftingOrigin: h?.id !== Z ? N : void 0,
                                            trackPDPClick: eY,
                                            analyticsLocations: W,
                                            orbPrice: eu,
                                            orbsGate: ed,
                                            formattedPrice: em,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: ek.il,
                            children: [
                                (0, n.jsx)(ef, { item: eb[eO], isMuted: ei, alt: eR?.label ?? ec.name }),
                                !m &&
                                    (0, n.jsxs)(eP, {
                                        onClick: eG,
                                        onMouseDown: eB,
                                        ariaLabel: Q.intl.string(Q.t["+v/1Dk"]),
                                        className: ek.gW,
                                        children: [
                                            (0, n.jsx)(v.U, { size: "refresh_sm", color: "currentColor" }),
                                            (0, n.jsx)(u.E, {
                                                variant: "text-md/medium",
                                                color: "currentColor",
                                                children: Q.intl.string(Q.t["+v/1Dk"]),
                                            }),
                                        ],
                                    }),
                                (0, n.jsxs)("div", {
                                    className: ek.V7,
                                    children: [
                                        null != ec &&
                                            (0, n.jsx)(e_._, {
                                                sku: ec,
                                                isCardHovered: !0,
                                                className: i()(ek.jU, ek.ij),
                                                trackButtonClick: ew,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, n.jsx)(eP, {
                                            onClick: eF,
                                            ariaLabel: Q.intl.string(Q.t.Ej3B3Y),
                                            children: (0, n.jsx)(S.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        eM &&
                                            (0, n.jsx)(eP, {
                                                onClick: eq,
                                                ariaLabel: ei ? Q.intl.string(Q.t.YqAjXy) : Q.intl.string(Q.t.w4m945),
                                                children: ei
                                                    ? (0, n.jsx)(f._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, n.jsx)(E.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, n.jsx)(eP, {
                                            onClick: K,
                                            ariaLabel: Q.intl.string(Q.t.cpT0Cq),
                                            children: (0, n.jsx)(_.d, { size: "refresh_sm", color: "currentColor" }),
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
