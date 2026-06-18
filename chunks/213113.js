t.d(l, { default: () => eD });
var n = t(627968),
    s = t(64700),
    r = t(503698),
    a = t.n(r),
    i = t(17928),
    o = t(534514),
    c = t(834730),
    u = t(318254),
    d = t(821609),
    m = t(939249),
    x = t(597770),
    h = t(366010),
    b = t(192308),
    p = t(289873),
    j = t(935462),
    C = t(34188),
    g = t(358618),
    v = t(983851),
    f = t(972213),
    _ = t(964486),
    E = t(736653),
    A = t(793574),
    N = t(688810),
    I = t(429913),
    k = t(427209),
    T = t(117218),
    S = t(801228),
    O = t(652165),
    R = t(561794),
    y = t(495544),
    L = t(328968),
    D = t(174459),
    P = t(371794),
    U = t(871123),
    M = t(733391),
    Y = t(832163),
    H = t(429635),
    w = t(69236),
    B = t(44724);
t(321073);
var F = t(345938),
    G = t(510022),
    q = t(317560),
    z = t(533406),
    V = t(375708),
    $ = t(964421);
function J(e) {
    let { mediaItems: l, labels: t, selectedIndex: s, onSelectIndex: r } = e;
    return l.length <= 1
        ? null
        : (0, n.jsxs)("div", {
              className: $.kL,
              children: [
                  (0, n.jsx)(c.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: V.intl.string(V.t.U7DAV9),
                  }),
                  (0, n.jsx)("div", {
                      className: $.Vg,
                      children: l.map((e, l) =>
                          (0, n.jsx)(
                              m.D,
                              {
                                  className: a()($.xn, { [$.Y4]: l === s }),
                                  onClick: () => r(l),
                                  "aria-label": t?.[l],
                                  "aria-pressed": l === s,
                                  children: (0, n.jsx)("img", {
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
    W = t(971146),
    X = t(696292),
    Q = t(554146),
    Z = t(43105),
    ee = t(403581),
    el = t(131607),
    et = t(532794),
    en = t(617986),
    es = t(49999),
    er = t(788868),
    ea = t(530066),
    ei = t(942460);
function eo(e) {
    let { sku: l, orbsGate: t, orbPrice: r, analyticsLocations: a, onCheckout: i, variant: o = "secondary" } = e,
        c = s.useRef(null),
        [m, x] = (0, el.kn)("NEEDS_NITRO" === t ? [Q.M.SLAYER_STOREFRONT_ORBS_PURCHASE_COACHMARK] : []),
        h = m === Q.M.SLAYER_STOREFRONT_ORBS_PURCHASE_COACHMARK,
        {
            isOpen: b,
            onMouseEnter: p,
            onMouseLeave: j,
            popoverRef: C,
            close: g,
        } = (function (e) {
            let { forcedOpen: l } = e,
                [t, n] = s.useState(!1),
                [r, a] = s.useState(null),
                i = s.useRef(null),
                o = s.useRef(null),
                c = s.useCallback((e) => {
                    a(e);
                }, []),
                u = s.useCallback(() => {
                    null != o.current && (clearTimeout(o.current), (o.current = null)),
                        t ||
                            null != i.current ||
                            (i.current = setTimeout(() => {
                                (i.current = null), n(!0);
                            }, 350));
                }, [t]),
                d = s.useCallback(() => {
                    null != i.current && (clearTimeout(i.current), (i.current = null)),
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
                        null != i.current && clearTimeout(i.current), null != o.current && clearTimeout(o.current);
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
                        null != i.current && (clearTimeout(i.current), (i.current = null)),
                            null != o.current && (clearTimeout(o.current), (o.current = null)),
                            n(!1);
                    }, []),
                }
            );
        })({ forcedOpen: h }),
        v = s.useMemo(
            () =>
                "NEEDS_NITRO" === t
                    ? {
                          title: V.intl.string(ea.default["1OBZN2"]),
                          body: V.intl.string(ea.default.FDywIe),
                          ctaText: V.intl.string(ea.default["Mt/ukE"]),
                          ctaIcon: ee.t,
                          ctaVariant: "expressive",
                          onCtaClick: () => {
                              h && x(es.i.TAKE_ACTION),
                                  g(),
                                  (0, et.A)({
                                      subscriptionTier: er.pe.TIER_2,
                                      analyticsLocations: a,
                                      applicationId: l.applicationId,
                                  });
                          },
                      }
                    : "NOT_ENOUGH_ORBS" === t
                      ? {
                            title: V.intl.string(ea.default.Xo6oAV),
                            body: V.intl.string(ea.default.fkdIdV),
                            ctaText: V.intl.string(ea.default.d525FQ),
                            ctaIcon: u.C,
                            ctaVariant: "primary",
                            onCtaClick: () => {
                                g(), (0, en.navigateToQuestHome)({ fromContent: X.u.ORBS_BALANCE_MENU });
                            },
                        }
                      : null,
            [t, h, x, g, a, l.applicationId],
        ),
        f = null != v && b,
        _ = s.useCallback(() => {
            h && x(es.i.USER_DISMISS), g();
        }, [h, x, g]);
    return "HIDDEN" === t || null == r
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      ref: c,
                      onMouseEnter: p,
                      onMouseLeave: j,
                      children: (0, n.jsx)(d.$, {
                          onClick: i,
                          disabled: null != v,
                          variant: o,
                          text: (0, n.jsx)("span", {
                              className: ei.Y,
                              children: V.intl.format(V.t.lOtBOI, {
                                  orbPrice: r.amount,
                                  orbIconHook: () =>
                                      (0, n.jsx)(u.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                          fullWidth: !0,
                      }),
                  }),
                  null != v &&
                      (0, n.jsx)(Z.A, {
                          targetElementRef: c,
                          popoverRef: C,
                          shouldShow: f,
                          position: "right",
                          alignmentStrategy: "edge",
                          align: "bottom",
                          caretConfig: { align: "end" },
                          size: "md",
                          title: v.title,
                          body: v.body,
                          actions: [{ text: v.ctaText, variant: v.ctaVariant, onClick: v.onCtaClick, icon: v.ctaIcon }],
                          onRequestClose: _,
                      }),
              ],
          });
}
var ec = t(310784),
    eu = t.n(ec),
    ed = t(775602),
    em = t(654107),
    ex = t(175671),
    eh = t(619517),
    eb = t(34337),
    ep = t(172079);
let ej = (e) => (0, eb.$o)({ ...e, className: ep.tN, mediaPlayerClassName: ep.yf }),
    eC = (e) => (0, n.jsx)(eh.Ay, { ...e });
function eg(e) {
    let { item: l, isMuted: t, className: r, alt: a = "" } = e,
        o = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, em.rh)(l, "#000000");
            return s.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = eu()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        c = (0, i.bG)([ed.Ay], () => ed.Ay.useReducedMotion),
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
              className: r ?? ep.kL,
              children: (0, n.jsx)(
                  "div",
                  {
                      className: `${ep.h4} ${ep.nR}`,
                      style: b,
                      children: (0, n.jsx)(
                          ex.rr,
                          {
                              href: null,
                              thumbnail: { url: l.videoThumbnailSrc, width: 747, height: 560 },
                              video: { url: l.src, proxyURL: l.src, width: 747, height: 560 },
                              provider: void 0,
                              allowFullScreen: !0,
                              maxHeight: 560,
                              maxWidth: 747,
                              playable: !0,
                              className: ep.Ki,
                              volume: 1,
                              autoMute: t,
                              autoPlay: !0,
                              renderVideoComponent: ej,
                              renderImageComponent: eC,
                              renderLinkComponent: eb.bU,
                          },
                          `${l.src}-${t ? "muted" : "unmuted"}`,
                      ),
                  },
                  l.src,
              ),
          })
        : (0, n.jsx)("div", {
              className: r ?? ep.kL,
              children: (0, n.jsxs)("div", {
                  className: ep.h4,
                  style: b,
                  children: [
                      (0, n.jsx)("img", { src: l.src, alt: a, className: ep.Sl }, l.src),
                      null != u && !c && (0, n.jsx)("img", { src: u, alt: "", className: ep.Ve, onAnimationEnd: h }, u),
                  ],
              }),
          });
}
var ev = t(910200),
    ef = t(743693),
    e_ = t(995393),
    eE = t(188275),
    eA = t(652215),
    eN = t(199138);
function eI(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: eN.AX,
              children: [
                  (0, n.jsx)(o.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function ek(e) {
    let { amount: l } = e;
    return (0, n.jsxs)("div", {
        className: eN.aX,
        children: [
            (0, n.jsx)(u.C, { size: "xs", color: "currentColor" }),
            (0, n.jsx)(c.E, { variant: "text-md/semibold", color: "currentColor", children: l }),
        ],
    });
}
function eT(e) {
    let { normalPrice: l, discountedPrice: t, discountPercent: s } = e;
    return null != s && null != t
        ? (0, n.jsxs)("div", {
              className: eN._k,
              children: [
                  (0, n.jsx)(c.E, { variant: "text-md/medium", className: eN.Jb, children: l }),
                  (0, n.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                  (0, n.jsx)(c.E, { variant: "text-md/bold", className: eN.Fi, children: s }),
              ],
          })
        : (0, n.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: l });
}
function eS(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: s } = e,
        { normalPrice: r, discountedPrice: i, discountPercent: o } = s;
    if (null == r) return null;
    let c = "HIDDEN" !== t && null != l;
    return (0, n.jsxs)("div", {
        className: eN.sj,
        children: [
            (0, n.jsx)(W.V, { textColor: "text-subtle" }),
            (0, n.jsx)("div", {
                className: a()(eN.hO, c && eN.XE),
                children:
                    c && "CAN_CHECKOUT" === t
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(ek, { amount: l.amount }),
                                  (0, n.jsx)(eT, { normalPrice: r, discountedPrice: i, discountPercent: o }),
                              ],
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(eT, { normalPrice: r, discountedPrice: i, discountPercent: o }),
                                  c && (0, n.jsx)(ek, { amount: l.amount }),
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
            giftRecipient: r,
            giftingOrigin: a,
            trackPDPClick: o,
            analyticsLocations: u,
            orbPrice: h,
            orbsGate: b,
            formattedPrice: p,
        } = e,
        j = l.id,
        C = (0, i.bG)([Y.A], () => Y.A.getNormalizedSKUEligibility(j), [j]),
        g = C && "CAN_CHECKOUT" === b,
        v = p.discountedPrice ?? p.normalPrice,
        f = s.useCallback(() => {
            o(e_.Jq.BUY_BUTTON),
                (0, z.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...u, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                );
        }, [l, o, t, u]),
        _ = s.useCallback(() => {
            o(e_.Jq.GIFT_BUTTON),
                (0, z.a)(
                    l,
                    { isGift: !0, giftRecipient: r, giftingOrigin: a },
                    { analyticsLocations: [...u, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [l, o, r, a, u]),
        E = (0, I.h)(l.applicationId),
        N = s.useMemo(() => [...u, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [u]),
        k = s.useCallback(() => {
            null != E &&
                (o(e_.Jq.BUY_WITH_ORBS_BUTTON),
                (0, O.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    onComplete: () => {
                        (0, q.j)(), (0, G.n)({ sku: l, application: E, analyticsLocations: N });
                    },
                    analyticsLocations: N,
                }));
        }, [l, E, N, o]),
        T = C
            ? (0, n.jsx)(eo, {
                  sku: l,
                  orbsGate: b,
                  orbPrice: h,
                  analyticsLocations: N,
                  onCheckout: k,
                  variant: g ? "primary" : "secondary",
              })
            : null,
        S = (0, n.jsxs)("div", {
            className: eN.mr,
            children: [
                (0, n.jsx)(d.$, {
                    variant: g ? "secondary" : "primary",
                    onClick: f,
                    text: null != v ? V.intl.format(V.t.YkXGyY, { priceString: v }) : V.intl.string(V.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, n.jsx)(m.D, {
                    className: eN.xP,
                    onClick: _,
                    "aria-label": V.intl.string(V.t.QAZA5f),
                    role: "button",
                    children: (0, n.jsx)(x.o, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        R = (0, n.jsx)(d.$, {
            icon: x.o,
            variant: "secondary",
            onClick: _,
            text: V.intl.string(V.t.QAZA5f),
            fullWidth: !0,
        });
    return (0, n.jsxs)("div", {
        className: eN.NC,
        children: [
            !C &&
                (0, n.jsx)(c.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: V.intl.string(V.t.IqlPbQ),
                }),
            g && T,
            C ? S : R,
            !g && T,
        ],
    });
}
function eR(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let s = null != l.labelIconAssetId ? (0, P.YE)(t, l.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: eN.HI,
        children: [
            null != s && (0, n.jsx)("img", { className: eN.IX, src: s, alt: "" }, s),
            (0, n.jsx)(c.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function ey(e) {
    let { onClick: l, onMouseDown: t, children: s, ariaLabel: r, className: a = eN.jU } = e;
    return (0, n.jsx)(m.D, { onClick: l, onMouseDown: t, className: a, "aria-label": r, role: "button", children: s });
}
function eL(e) {
    let { selectedCarouselItem: l, title: t, description: s, applicationId: r, className: a } = e;
    return (0, n.jsxs)("div", {
        className: a,
        children: [
            null != t && (0, n.jsx)(o.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
            (0, n.jsx)(eR, { applicationId: r, selectedCarouselItem: l }),
            null != s && (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-subtle", children: s }),
        ],
    });
}
function eD(e) {
    var l;
    let t,
        {
            customNavigateToSocialLayerStorefront: r,
            transitionState: o,
            returnRef: d,
            skuId: m,
            applicationId: x,
            isStorefront: A,
            giftRecipient: I,
            giftingOrigin: O,
            analyticsLocations: G,
            analyticsContext: q,
            onClose: z,
        } = e,
        { analyticsLocations: $ } = (0, N.Ay)(G ?? []),
        { guildId: W } = (0, U.nG)(x),
        X = (0, i.bG)([y.default], () => y.default.getId());
    s.useEffect(() => {
        null != m && (0, M.iR)(x, m);
    }, [x, m]);
    let Q = (0, H.A)({ applicationId: x }),
        Z = (0, i.bG)([Y.A], () => Y.A.getSkuAssets()),
        ee = (0, i.bG)([L.A], () => L.A.isFetchingForSKU(m)),
        el = (0, h.M)((0, E.Ay)()),
        [et, en] = s.useState(!0),
        es = (0, S.A)({ skuId: m }),
        er = (0, T.JL)({ sku: es }),
        ea = (0, w.o)({ orbPriceAmount: er?.amount, location: "product_details_modal" }),
        ei = (0, T.CD)({ sku: es }),
        [eo, ec] = s.useState(0),
        [eu, ed] = s.useMemo(
            () =>
                (function (e, l, t, n) {
                    let { heroWidth: s } = n,
                        r = [],
                        a = [];
                    if (null == e || 0 === e.length) return [r, a];
                    for (let n of e) {
                        let e = null != n.assetId ? t[n.assetId] : null;
                        null != e &&
                            (r.push(n),
                            e.mime_type.startsWith("video/")
                                ? a.push({
                                      type: "video",
                                      src: (0, P.YE)(l, e, s, "mp4"),
                                      videoThumbnailSrc: (0, P.YE)(l, e, s, "webp"),
                                      thumbnailSrc:
                                          null != n.thumbnailAssetId
                                              ? (0, P.YE)(l, n.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != n.backgroundAssetId
                                              ? (0, P.YE)(l, n.backgroundAssetId, s, U.pV)
                                              : void 0,
                                  })
                                : a.push({
                                      type: "image",
                                      src: (0, P.YE)(l, e, s, "webp"),
                                      thumbnailSrc:
                                          null != n.thumbnailAssetId
                                              ? (0, P.YE)(l, n.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != n.backgroundAssetId
                                              ? (0, P.YE)(l, n.backgroundAssetId, s, U.pV)
                                              : void 0,
                                  }));
                    }
                    return [r, a];
                })(es?.tenantMetadata?.socialLayer?.carouselItems ?? [], x, Z, { heroWidth: 747 }),
            [es, x, Z],
        ),
        [em, ex] = s.useState(null),
        [eh, eb] = s.useState(!1);
    s.useEffect(() => {
        if (null == em) return;
        let e = new ResizeObserver(() => {
            eb(em.scrollHeight > em.clientHeight);
        });
        return e.observe(em), () => e.disconnect();
    }, [em]);
    let ep = eo < ed.length ? eo : 0,
        ej = eu[ep] ?? null,
        eC = ed.length > 1,
        ek = ed.some((e) => "video" === e.type);
    (0, R.pE)(),
        (0, _.Ay)(() => {
            D.default.track(eA.HAw.OPEN_MODAL, { location_stack: $, type: eE.Nh, sku_id: m, application_id: x }),
                (0, M.Xw)();
        });
    let eT = s.useCallback(
            (e) => {
                D.default.track(eA.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: q?.sessionId,
                    sku_id: m,
                    guild_id: q?.guildId,
                    application_id: x,
                    cta_type: e,
                    location_stack: $,
                });
            },
            [q, m, x, $],
        ),
        eR = s.useCallback(
            (e) => {
                ec(e), eT(e_.Jq.CAROUSEL_ITEM);
            },
            [eT],
        );
    s.useEffect(() => {
        null == m || L.A.isFetchingForSKU(m) || (0, M.Pp)(x, m);
    }, [x, m]);
    let eD = s.useCallback(() => {
            null != es &&
                (eT(e_.Jq.FORWARD_BUTTON),
                (0, F.d)({
                    sku: es,
                    guildId: W,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: $,
                    analyticsContext: q,
                }));
        }, [es, W, eT, $, q]),
        eP = s.useCallback(() => {
            eT(e_.Jq.WISHLIST_BUTTON);
        }, [eT]),
        eU = s.useCallback(() => {
            (0, B.G)({ applicationId: x });
        }, [x]),
        eM = s.useCallback(() => {
            eT(e_.Jq.VISIT_SHOP), (0, b.closeAllModals)(), null != r ? r() : (0, B.default)({ applicationId: x });
        }, [x, eT, r]),
        eY = s.useCallback(() => {
            en(!et), eT(e_.Jq.MUTE_BUTTON);
        }, [et, eT]),
        eH =
            ((l = es),
            (t = (0, i.bG)([Y.A], () => Y.A.getConfig()?.promotionEndDatetime, [])),
            null != l && null != l.orbsReward && l.orbsReward > 0
                ? { Icon: u.C, endDatetime: t, text: V.intl.format(V.t.d3njXi, { orbCount: l.orbsReward }) }
                : null),
        ew = es?.tenantMetadata?.socialLayer;
    if (null == es || null == ew) return ee ? (0, n.jsx)(p.y, {}) : null;
    let eB = Q?.storefront,
        eF = eB?.logoAssetId != null ? (0, P.YE)(eB.applicationId, eB.logoAssetId, 256) : null,
        eG = eB?.lightThemeLogoAssetId != null ? (0, P.YE)(eB.applicationId, eB.lightThemeLogoAssetId, 256) : null,
        eq = null;
    return (
        (eq = el ? (eF ?? eG) : (eG ?? eF)),
        (0, n.jsx)(j.EO, {
            transitionState: o,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: eN.CR,
            size: j.rI.DYNAMIC,
            returnRef: d,
            children: (0, n.jsx)(j.$m, {
                className: eN.jE,
                children: (0, n.jsxs)("div", {
                    className: eN.nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: a()(eN.op, { [eN.uk]: es.exclusive }),
                            children: [
                                (0, n.jsx)("div", {
                                    className: eN.r$,
                                    children:
                                        null != eq
                                            ? (0, n.jsx)("img", { className: eN.wm, src: eq, alt: eB?.title ?? "" })
                                            : null,
                                }),
                                (0, n.jsxs)("div", {
                                    ref: ex,
                                    className: eN.zD,
                                    children: [
                                        es.exclusive &&
                                            (0, n.jsx)("div", { className: eN.K3, children: (0, n.jsx)(K.I, {}) }),
                                        eC
                                            ? (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(eI, { sku: es }),
                                                      (0, n.jsx)("div", {
                                                          className: eN._D,
                                                          children: (0, n.jsx)(J, {
                                                              mediaItems: ed,
                                                              labels: eu.map((e) => e.label),
                                                              selectedIndex: ep,
                                                              onSelectIndex: eR,
                                                          }),
                                                      }),
                                                      (0, n.jsx)(eL, {
                                                          selectedCarouselItem: ej,
                                                          title: ej?.title,
                                                          description: ej?.description,
                                                          applicationId: x,
                                                          className: eN.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, n.jsx)(eL, {
                                                  selectedCarouselItem: ej,
                                                  title: es.name,
                                                  description: es.description,
                                                  applicationId: x,
                                                  className: eN.cP,
                                              }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: a()(eN.Td, { [eN.t7]: eh }),
                                    children: [
                                        (0, n.jsx)(eS, { orbPrice: er, orbsGate: ea, formattedPrice: ei }),
                                        null != eH &&
                                            (0, n.jsx)(ev.O, {
                                                Icon: eH.Icon,
                                                text: eH.text,
                                                endDatetime: eH.endDatetime,
                                                tooltip: eH.tooltip,
                                            }),
                                        (0, n.jsx)(eO, {
                                            sku: es,
                                            guildId: W,
                                            giftRecipient: I?.id !== X ? I : void 0,
                                            giftingOrigin: I?.id !== X ? O : void 0,
                                            trackPDPClick: eT,
                                            analyticsLocations: $,
                                            orbPrice: er,
                                            orbsGate: ea,
                                            formattedPrice: ei,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: eN.il,
                            children: [
                                (0, n.jsx)(eg, { item: ed[ep], isMuted: et, alt: ej?.label ?? es.name }),
                                !A &&
                                    (0, n.jsxs)(ey, {
                                        onClick: eM,
                                        onMouseDown: eU,
                                        ariaLabel: V.intl.string(V.t["+v/1Dk"]),
                                        className: eN.gW,
                                        children: [
                                            (0, n.jsx)(C.U, { size: "refresh_sm", color: "currentColor" }),
                                            (0, n.jsx)(c.E, {
                                                variant: "text-md/medium",
                                                color: "currentColor",
                                                children: V.intl.string(V.t["+v/1Dk"]),
                                            }),
                                        ],
                                    }),
                                (0, n.jsxs)("div", {
                                    className: eN.V7,
                                    children: [
                                        null != es &&
                                            (0, n.jsx)(ef._, {
                                                sku: es,
                                                isCardHovered: !0,
                                                className: a()(eN.jU, eN.ij),
                                                trackButtonClick: eP,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, n.jsx)(ey, {
                                            onClick: eD,
                                            ariaLabel: V.intl.string(V.t.Ej3B3Y),
                                            children: (0, n.jsx)(k.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        ek &&
                                            (0, n.jsx)(ey, {
                                                onClick: eY,
                                                ariaLabel: et ? V.intl.string(V.t.YqAjXy) : V.intl.string(V.t.w4m945),
                                                children: et
                                                    ? (0, n.jsx)(g._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, n.jsx)(v.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, n.jsx)(ey, {
                                            onClick: z,
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
