t.d(l, { default: () => eB });
var n = t(627968),
    s = t(64700),
    r = t(503698),
    i = t.n(r),
    a = t(17928),
    o = t(459192),
    c = t(990078),
    u = t(534514),
    d = t(834730),
    m = t(318254),
    x = t(821609),
    h = t(939249),
    b = t(597770),
    j = t(366010),
    p = t(192308),
    C = t(289873),
    g = t(935462),
    f = t(34188),
    v = t(358618),
    E = t(983851),
    N = t(972213),
    _ = t(964486),
    A = t(736653),
    I = t(793574),
    T = t(688810),
    k = t(429913),
    S = t(427209),
    R = t(723090),
    O = t(801228),
    y = t(652165),
    L = t(561794),
    D = t(495544),
    P = t(328968),
    U = t(174459),
    M = t(371794),
    H = t(871123),
    B = t(733391),
    Y = t(832163),
    w = t(429635),
    F = t(989349),
    G = t.n(F),
    z = t(375708),
    q = t(309954),
    V = t(287809),
    K = t(681064),
    $ = t(44724);
t(321073);
var J = t(345938),
    W = t(510022),
    X = t(317560),
    Q = t(533406),
    Z = t(964421);
function ee(e) {
    let { mediaItems: l, labels: t, selectedIndex: s, onSelectIndex: r } = e;
    return l.length <= 1
        ? null
        : (0, n.jsxs)("div", {
              className: Z.kL,
              children: [
                  (0, n.jsx)(d.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: z.intl.string(z.t.U7DAV9),
                  }),
                  (0, n.jsx)("div", {
                      className: Z.Vg,
                      children: l.map((e, l) =>
                          (0, n.jsx)(
                              h.D,
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
    en = t(696292),
    es = t(554146),
    er = t(43105),
    ei = t(403581),
    ea = t(131607),
    eo = t(532794),
    ec = t(617986),
    eu = t(49999),
    ed = t(788868),
    em = t(530066),
    ex = t(942460);
function eh(e) {
    let { sku: l, orbsGate: t, orbPrice: r, analyticsLocations: i, onCheckout: a, variant: o = "secondary" } = e,
        c = s.useRef(null),
        [u, d] = (0, ea.kn)("NEEDS_NITRO" === t ? [es.M.SLAYER_STOREFRONT_ORBS_PURCHASE_COACHMARK] : []),
        h = u === es.M.SLAYER_STOREFRONT_ORBS_PURCHASE_COACHMARK,
        {
            isOpen: b,
            onMouseEnter: j,
            onMouseLeave: p,
            popoverRef: C,
            close: g,
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
        })({ forcedOpen: h }),
        f = s.useMemo(
            () =>
                "NEEDS_NITRO" === t
                    ? {
                          title: z.intl.string(em.default["1OBZN2"]),
                          body: z.intl.string(em.default.FDywIe),
                          ctaText: z.intl.string(em.default["Mt/ukE"]),
                          ctaIcon: ei.t,
                          ctaVariant: "expressive",
                          onCtaClick: () => {
                              h && d(eu.i.TAKE_ACTION),
                                  g(),
                                  (0, eo.A)({
                                      subscriptionTier: ed.pe.TIER_2,
                                      analyticsLocations: i,
                                      applicationId: l.applicationId,
                                  });
                          },
                      }
                    : "NOT_ENOUGH_ORBS" === t
                      ? {
                            title: z.intl.string(em.default.Xo6oAV),
                            body: z.intl.string(em.default.fkdIdV),
                            ctaText: z.intl.string(em.default.d525FQ),
                            ctaIcon: m.C,
                            ctaVariant: "primary",
                            onCtaClick: () => {
                                g(), (0, ec.navigateToQuestHome)({ fromContent: en.u.ORBS_BALANCE_MENU });
                            },
                        }
                      : null,
            [t, h, d, g, i, l.applicationId],
        ),
        v = null != f && b,
        E = s.useCallback(() => {
            h && d(eu.i.USER_DISMISS), g();
        }, [h, d, g]);
    return "HIDDEN" === t || null == r
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      ref: c,
                      onMouseEnter: j,
                      onMouseLeave: p,
                      children: (0, n.jsx)(x.$, {
                          onClick: a,
                          disabled: null != f,
                          variant: o,
                          text: (0, n.jsx)("span", {
                              className: ex.Y,
                              children: z.intl.format(z.t.lOtBOI, {
                                  orbPrice: r.amount,
                                  orbIconHook: () =>
                                      (0, n.jsx)(m.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                          fullWidth: !0,
                      }),
                  }),
                  null != f &&
                      (0, n.jsx)(er.A, {
                          targetElementRef: c,
                          popoverRef: C,
                          shouldShow: v,
                          position: "right",
                          alignmentStrategy: "edge",
                          align: "bottom",
                          caretConfig: { align: "end" },
                          size: "md",
                          title: f.title,
                          body: f.body,
                          actions: [{ text: f.ctaText, variant: f.ctaVariant, onClick: f.onCtaClick, icon: f.ctaIcon }],
                          onRequestClose: E,
                      }),
              ],
          });
}
var eb = t(310784),
    ej = t.n(eb),
    ep = t(775602),
    eC = t(654107),
    eg = t(392056),
    ef = t(619517),
    ev = t(34337),
    eE = t(172079);
let eN = (e) => (0, ev.$o)({ ...e, className: eE.tN, mediaPlayerClassName: eE.yf }),
    e_ = (e) => (0, n.jsx)(ef.Ay, { ...e });
function eA(e) {
    let { item: l, isMuted: t, className: r, alt: i = "" } = e,
        o = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, eC.rh)(l, "#000000");
            return s.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = ej()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        c = (0, a.bG)([ep.Ay], () => ep.Ay.useReducedMotion),
        [u, d] = s.useState(null),
        [m, x] = s.useState(l);
    m !== l && (x(l), m?.type === "image" && l?.type === "image" && m.src !== l.src ? d(m.src) : d(null));
    let h = s.useCallback(() => d(null), []);
    if (null == l) return null;
    let b = {
        background: o,
        backgroundImage: null != l.backgroundSrc ? `url(${l.backgroundSrc})` : void 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    return "video" === l.type
        ? (0, n.jsx)("div", {
              className: r ?? eE.kL,
              children: (0, n.jsx)(
                  "div",
                  {
                      className: `${eE.h4} ${eE.nR}`,
                      style: b,
                      children: (0, n.jsx)(
                          eg.rr,
                          {
                              href: null,
                              thumbnail: { url: l.videoThumbnailSrc, width: 747, height: 560 },
                              video: { url: l.src, proxyURL: l.src, width: 747, height: 560 },
                              provider: void 0,
                              allowFullScreen: !0,
                              maxHeight: 560,
                              maxWidth: 747,
                              playable: !0,
                              className: eE.Ki,
                              volume: 1,
                              autoMute: t,
                              autoPlay: !0,
                              renderVideoComponent: eN,
                              renderImageComponent: e_,
                              renderLinkComponent: ev.bU,
                          },
                          `${l.src}-${t ? "muted" : "unmuted"}`,
                      ),
                  },
                  l.src,
              ),
          })
        : (0, n.jsx)("div", {
              className: r ?? eE.kL,
              children: (0, n.jsxs)("div", {
                  className: eE.h4,
                  style: b,
                  children: [
                      (0, n.jsx)("img", { src: l.src, alt: i, className: eE.Sl }, l.src),
                      null != u && !c && (0, n.jsx)("img", { src: u, alt: "", className: eE.Ve, onAnimationEnd: h }, u),
                  ],
              }),
          });
}
var eI = t(743693),
    eT = t(995393),
    ek = t(188275),
    eS = t(652215),
    eR = t(199138);
function eO(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: eR.AX,
              children: [
                  (0, n.jsx)(u.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, n.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function ey(e) {
    let { amount: l } = e;
    return (0, n.jsxs)("div", {
        className: eR.aX,
        children: [
            (0, n.jsx)(m.C, { size: "xs", color: "currentColor" }),
            (0, n.jsx)(d.E, { variant: "text-md/semibold", color: "currentColor", children: l }),
        ],
    });
}
function eL(e) {
    let { normalPrice: l, discountedPrice: t, discountPercent: s } = e;
    return null != s && null != t
        ? (0, n.jsxs)("div", {
              className: eR._k,
              children: [
                  (0, n.jsx)(d.E, { variant: "text-md/medium", className: eR.Jb, children: l }),
                  (0, n.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                  (0, n.jsx)(d.E, { variant: "text-md/bold", className: eR.Fi, children: s }),
              ],
          })
        : (0, n.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: l });
}
function eD(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: s } = e,
        { normalPrice: r, discountedPrice: a, discountPercent: o } = s;
    if (null == r) return null;
    let c = "HIDDEN" !== t && null != l;
    return (0, n.jsxs)("div", {
        className: eR.sj,
        children: [
            (0, n.jsx)(et.V, { textColor: "text-subtle" }),
            (0, n.jsx)("div", {
                className: i()(eR.hO, c && eR.XE),
                children:
                    c && "CAN_CHECKOUT" === t
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(ey, { amount: l.amount }),
                                  (0, n.jsx)(eL, { normalPrice: r, discountedPrice: a, discountPercent: o }),
                              ],
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(eL, { normalPrice: r, discountedPrice: a, discountPercent: o }),
                                  c && (0, n.jsx)(ey, { amount: l.amount }),
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
            giftRecipient: r,
            giftingOrigin: i,
            trackPDPClick: o,
            analyticsLocations: c,
            orbPrice: u,
            orbsGate: m,
            formattedPrice: j,
        } = e,
        p = l.id,
        C = (0, a.bG)([Y.A], () => Y.A.getNormalizedSKUEligibility(p), [p]),
        g = C && "CAN_CHECKOUT" === m,
        f = j.discountedPrice ?? j.normalPrice,
        v = s.useCallback(() => {
            o(eT.Jq.BUY_BUTTON),
                (0, Q.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...c, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                );
        }, [l, o, t, c]),
        E = s.useCallback(() => {
            o(eT.Jq.GIFT_BUTTON),
                (0, Q.a)(
                    l,
                    { isGift: !0, giftRecipient: r, giftingOrigin: i },
                    { analyticsLocations: [...c, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [l, o, r, i, c]),
        N = (0, k.h)(l.applicationId),
        _ = s.useMemo(() => [...c, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [c]),
        A = s.useCallback(() => {
            null != N &&
                (o(eT.Jq.BUY_WITH_ORBS_BUTTON),
                (0, y.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    onComplete: () => {
                        (0, X.j)(), (0, W.n)({ sku: l, application: N, analyticsLocations: _ });
                    },
                    analyticsLocations: _,
                }));
        }, [l, N, _, o]),
        T = C
            ? (0, n.jsx)(eh, {
                  sku: l,
                  orbsGate: m,
                  orbPrice: u,
                  analyticsLocations: _,
                  onCheckout: A,
                  variant: g ? "primary" : "secondary",
              })
            : null,
        S = (0, n.jsxs)("div", {
            className: eR.mr,
            children: [
                (0, n.jsx)(x.$, {
                    variant: g ? "secondary" : "primary",
                    onClick: v,
                    text: null != f ? z.intl.format(z.t.YkXGyY, { priceString: f }) : z.intl.string(z.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, n.jsx)(h.D, {
                    className: eR.xP,
                    onClick: E,
                    "aria-label": z.intl.string(z.t.QAZA5f),
                    role: "button",
                    children: (0, n.jsx)(b.o, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        R = (0, n.jsx)(x.$, {
            icon: b.o,
            variant: "secondary",
            onClick: E,
            text: z.intl.string(z.t.QAZA5f),
            fullWidth: !0,
        });
    return (0, n.jsxs)("div", {
        className: eR.NC,
        children: [
            !C &&
                (0, n.jsx)(d.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: z.intl.string(z.t.IqlPbQ),
                }),
            g && T,
            C ? S : R,
            !g && T,
        ],
    });
}
function eU(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let s = null != l.labelIconAssetId ? (0, M.YE)(t, l.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: eR.HI,
        children: [
            null != s && (0, n.jsx)("img", { className: eR.IX, src: s, alt: "" }, s),
            (0, n.jsx)(d.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eM(e) {
    let { onClick: l, onMouseDown: t, children: s, ariaLabel: r, className: i = eR.jU } = e;
    return (0, n.jsx)(h.D, { onClick: l, onMouseDown: t, className: i, "aria-label": r, role: "button", children: s });
}
function eH(e) {
    let { selectedCarouselItem: l, title: t, description: s, applicationId: r, className: i } = e;
    return (0, n.jsxs)("div", {
        className: i,
        children: [
            null != t && (0, n.jsx)(u.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
            (0, n.jsx)(eU, { applicationId: r, selectedCarouselItem: l }),
            null != s && (0, n.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: s }),
        ],
    });
}
function eB(e) {
    var l;
    let t,
        r,
        o,
        {
            customNavigateToSocialLayerStorefront: c,
            transitionState: u,
            returnRef: x,
            skuId: h,
            applicationId: b,
            isStorefront: I,
            giftRecipient: k,
            giftingOrigin: y,
            analyticsLocations: F,
            analyticsContext: W,
            onClose: X,
        } = e,
        { analyticsLocations: Q } = (0, T.Ay)(F ?? []),
        { guildId: Z } = (0, H.nG)(b),
        et = (0, a.bG)([D.default], () => D.default.getId());
    s.useEffect(() => {
        null != h && (0, B.iR)(b, h);
    }, [b, h]);
    let en = (0, w.A)({ applicationId: b }),
        es = (0, a.bG)([Y.A], () => Y.A.getSkuAssets()),
        er = (0, a.bG)([P.A], () => P.A.isFetchingForSKU(h)),
        ei = (0, j.M)((0, A.Ay)()),
        [ea, eo] = s.useState(!0),
        ec = (0, O.A)({ skuId: h }),
        eu = (0, R.JL)({ sku: ec }),
        ed = (function (e) {
            let { orbPriceAmount: l, location: t } = e,
                n = (0, K.R)({ location: t }),
                s = (0, a.bG)([V.default], () => V.default.getCurrentUser()?.hasPaidTier2Subscription() ?? !1),
                { balance: r } = (0, q.W)({ disableFetch: !n || null == l || !s });
            return n && null != l
                ? s
                    ? null == r || r < l
                        ? "NOT_ENOUGH_ORBS"
                        : "CAN_CHECKOUT"
                    : "NEEDS_NITRO"
                : "HIDDEN";
        })({ orbPriceAmount: eu?.amount, location: "product_details_modal" }),
        em = (0, R.CD)({ sku: ec }),
        [ex, eh] = s.useState(0),
        [eb, ej] = s.useMemo(
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
                                      src: (0, M.YE)(l, e, s, "mp4"),
                                      videoThumbnailSrc: (0, M.YE)(l, e, s, "webp"),
                                      thumbnailSrc:
                                          null != n.thumbnailAssetId
                                              ? (0, M.YE)(l, n.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != n.backgroundAssetId
                                              ? (0, M.YE)(l, n.backgroundAssetId, s, H.pV)
                                              : void 0,
                                  })
                                : i.push({
                                      type: "image",
                                      src: (0, M.YE)(l, e, s, "webp"),
                                      thumbnailSrc:
                                          null != n.thumbnailAssetId
                                              ? (0, M.YE)(l, n.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != n.backgroundAssetId
                                              ? (0, M.YE)(l, n.backgroundAssetId, s, H.pV)
                                              : void 0,
                                  }));
                    }
                    return [r, i];
                })(ec?.tenantMetadata?.socialLayer?.carouselItems ?? [], b, es, { heroWidth: 747 }),
            [ec, b, es],
        ),
        [ep, eC] = s.useState(null),
        [eg, ef] = s.useState(!1);
    s.useEffect(() => {
        if (null == ep) return;
        let e = new ResizeObserver(() => {
            ef(ep.scrollHeight > ep.clientHeight);
        });
        return e.observe(ep), () => e.disconnect();
    }, [ep]);
    let ev = ex < ej.length ? ex : 0,
        eE = eb[ev] ?? null,
        eN = ej.length > 1,
        e_ = ej.some((e) => "video" === e.type);
    (0, L.pE)(),
        (0, _.Ay)(() => {
            U.default.track(eS.HAw.OPEN_MODAL, { location_stack: Q, type: ek.Nh, sku_id: h, application_id: b }),
                (0, B.Xw)();
        });
    let ey = s.useCallback(
            (e) => {
                U.default.track(eS.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: W?.sessionId,
                    sku_id: h,
                    guild_id: W?.guildId,
                    application_id: b,
                    cta_type: e,
                    location_stack: Q,
                });
            },
            [W, h, b, Q],
        ),
        eL = s.useCallback(
            (e) => {
                eh(e), ey(eT.Jq.CAROUSEL_ITEM);
            },
            [ey],
        );
    s.useEffect(() => {
        null == h || P.A.isFetchingForSKU(h) || (0, B.Pp)(b, h);
    }, [b, h]);
    let eU = s.useCallback(() => {
            null != ec &&
                (ey(eT.Jq.FORWARD_BUTTON),
                (0, J.d)({
                    sku: ec,
                    guildId: Z,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: Q,
                    analyticsContext: W,
                }));
        }, [ec, Z, ey, Q, W]),
        eB = s.useCallback(() => {
            ey(eT.Jq.WISHLIST_BUTTON);
        }, [ey]),
        ew = s.useCallback(() => {
            (0, $.G)({ applicationId: b });
        }, [b]),
        eF = s.useCallback(() => {
            ey(eT.Jq.VISIT_SHOP), (0, p.closeAllModals)(), null != c ? c() : (0, $.default)({ applicationId: b });
        }, [b, ey, c]),
        eG = s.useCallback(() => {
            eo(!ea), ey(eT.Jq.MUTE_BUTTON);
        }, [ea, ey]),
        ez =
            ((l = ec),
            (o =
                ((t = (0, a.bG)([Y.A], () => Y.A.getConfig()?.promotionEndDatetime, [])),
                (r = s.useMemo(() => {
                    if (null == t) return null;
                    let e = G()(),
                        l = G()(t).diff(e, "days");
                    return l <= 0 ? null : l;
                }, [t])),
                s.useMemo(
                    () => (null == r ? null : z.intl.formatToPlainString(z.t.BXpdIg, { days: Math.max(r, 1) })),
                    [r],
                ))),
            null != l && null != l.orbsReward && l.orbsReward > 0
                ? { icon: m.C, timeRemaining: o, text: z.intl.format(z.t.d3njXi, { orbCount: l.orbsReward }) }
                : null),
        eq = ec?.tenantMetadata?.socialLayer;
    if (null == ec || null == eq) return er ? (0, n.jsx)(C.y, {}) : null;
    let eV = en?.storefront,
        eK = eV?.logoAssetId != null ? (0, M.YE)(eV.applicationId, eV.logoAssetId, 256) : null,
        e$ = eV?.lightThemeLogoAssetId != null ? (0, M.YE)(eV.applicationId, eV.lightThemeLogoAssetId, 256) : null,
        eJ = null;
    return (
        (eJ = ei ? (eK ?? e$) : (e$ ?? eK)),
        (0, n.jsx)(g.EO, {
            transitionState: u,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: eR.CR,
            size: g.rI.DYNAMIC,
            returnRef: x,
            children: (0, n.jsx)(g.$m, {
                className: eR.jE,
                children: (0, n.jsxs)("div", {
                    className: eR.nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: i()(eR.op, { [eR.uk]: ec.exclusive }),
                            children: [
                                (0, n.jsx)("div", {
                                    className: eR.r$,
                                    children:
                                        null != eJ
                                            ? (0, n.jsx)("img", { className: eR.wm, src: eJ, alt: eV?.title ?? "" })
                                            : null,
                                }),
                                (0, n.jsxs)("div", {
                                    ref: eC,
                                    className: eR.zD,
                                    children: [
                                        ec.exclusive &&
                                            (0, n.jsx)("div", { className: eR.K3, children: (0, n.jsx)(el.I, {}) }),
                                        eN
                                            ? (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(eO, { sku: ec }),
                                                      (0, n.jsx)("div", {
                                                          className: eR._D,
                                                          children: (0, n.jsx)(ee, {
                                                              mediaItems: ej,
                                                              labels: eb.map((e) => e.label),
                                                              selectedIndex: ev,
                                                              onSelectIndex: eL,
                                                          }),
                                                      }),
                                                      (0, n.jsx)(eH, {
                                                          selectedCarouselItem: eE,
                                                          title: eE?.title,
                                                          description: eE?.description,
                                                          applicationId: b,
                                                          className: eR.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, n.jsx)(eH, {
                                                  selectedCarouselItem: eE,
                                                  title: ec.name,
                                                  description: ec.description,
                                                  applicationId: b,
                                                  className: eR.cP,
                                              }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: i()(eR.Td, { [eR.t7]: eg }),
                                    children: [
                                        (0, n.jsx)(eD, { orbPrice: eu, orbsGate: ed, formattedPrice: em }),
                                        null != ez &&
                                            (0, n.jsx)(eY, {
                                                icon: ez.icon,
                                                timeRemaining: ez.timeRemaining,
                                                text: ez.text,
                                                tooltip: ez.tooltip,
                                            }),
                                        (0, n.jsx)(eP, {
                                            sku: ec,
                                            guildId: Z,
                                            giftRecipient: k?.id !== et ? k : void 0,
                                            giftingOrigin: k?.id !== et ? y : void 0,
                                            trackPDPClick: ey,
                                            analyticsLocations: Q,
                                            orbPrice: eu,
                                            orbsGate: ed,
                                            formattedPrice: em,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: eR.il,
                            children: [
                                (0, n.jsx)(eA, { item: ej[ev], isMuted: ea, alt: eE?.label ?? ec.name }),
                                !I &&
                                    (0, n.jsxs)(eM, {
                                        onClick: eF,
                                        onMouseDown: ew,
                                        ariaLabel: z.intl.string(z.t["+v/1Dk"]),
                                        className: eR.gW,
                                        children: [
                                            (0, n.jsx)(f.U, { size: "refresh_sm", color: "currentColor" }),
                                            (0, n.jsx)(d.E, {
                                                variant: "text-md/medium",
                                                color: "currentColor",
                                                children: z.intl.string(z.t["+v/1Dk"]),
                                            }),
                                        ],
                                    }),
                                (0, n.jsxs)("div", {
                                    className: eR.V7,
                                    children: [
                                        null != ec &&
                                            (0, n.jsx)(eI._, {
                                                sku: ec,
                                                isCardHovered: !0,
                                                className: i()(eR.jU, eR.ij),
                                                trackButtonClick: eB,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, n.jsx)(eM, {
                                            onClick: eU,
                                            ariaLabel: z.intl.string(z.t.Ej3B3Y),
                                            children: (0, n.jsx)(S.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        e_ &&
                                            (0, n.jsx)(eM, {
                                                onClick: eG,
                                                ariaLabel: ea ? z.intl.string(z.t.YqAjXy) : z.intl.string(z.t.w4m945),
                                                children: ea
                                                    ? (0, n.jsx)(v._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, n.jsx)(E.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, n.jsx)(eM, {
                                            onClick: X,
                                            ariaLabel: z.intl.string(z.t.cpT0Cq),
                                            children: (0, n.jsx)(N.d, { size: "refresh_sm", color: "currentColor" }),
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
function eY(e) {
    let { icon: l, timeRemaining: t, text: s, tooltip: r } = e,
        i = () => {
            let e =
                "function" == typeof l
                    ? (0, n.jsx)(l, { size: "xs", color: "currentColor" })
                    : (0, n.jsx)("div", { className: eR.Ow, children: l });
            return (0, n.jsxs)("div", {
                className: eR.UB,
                children: [
                    (0, n.jsxs)("div", {
                        className: eR.nR,
                        children: [
                            e,
                            (0, n.jsx)(d.E, { variant: "text-xs/semibold", color: "currentColor", children: s }),
                        ],
                    }),
                    null != t &&
                        (0, n.jsx)(d.E, {
                            className: eR.PI,
                            variant: "text-xs/medium",
                            color: "currentColor",
                            children: t,
                        }),
                ],
            });
        };
    return null != r && "object" == typeof r
        ? (0, n.jsx)(o.u, { assetSize: 48, ...r, children: i() })
        : null != r && "string" == typeof r
          ? (0, n.jsx)(c.m, { text: r, children: i() })
          : i();
}
