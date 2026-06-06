t.d(l, { default: () => eM });
var n = t(627968),
    s = t(64700),
    r = t(503698),
    i = t.n(r),
    a = t(17928),
    o = t(534514),
    c = t(834730),
    u = t(318254),
    d = t(821609),
    m = t(939249),
    x = t(597770),
    h = t(366010),
    b = t(192308),
    j = t(289873),
    C = t(935462),
    p = t(34188),
    g = t(358618),
    v = t(983851),
    f = t(972213),
    E = t(964486),
    _ = t(736653),
    N = t(793574),
    A = t(688810),
    T = t(429913),
    I = t(427209),
    k = t(723090),
    S = t(801228),
    O = t(652165),
    R = t(561794),
    y = t(495544),
    L = t(328968),
    D = t(174459),
    P = t(371794),
    U = t(871123),
    M = t(733391),
    H = t(832163),
    Y = t(429635),
    B = t(989349),
    w = t.n(B),
    F = t(375708),
    G = t(309954),
    z = t(287809),
    q = t(681064),
    V = t(44724);
t(321073);
var K = t(345938),
    W = t(510022),
    $ = t(317560),
    J = t(533406),
    X = t(964421);
function Q(e) {
    let { mediaItems: l, labels: t, selectedIndex: s, onSelectIndex: r } = e;
    return l.length <= 1
        ? null
        : (0, n.jsxs)("div", {
              className: X.kL,
              children: [
                  (0, n.jsx)(c.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: F.intl.string(F.t.U7DAV9),
                  }),
                  (0, n.jsx)("div", {
                      className: X.Vg,
                      children: l.map((e, l) =>
                          (0, n.jsx)(
                              m.D,
                              {
                                  className: i()(X.xn, { [X.Y4]: l === s }),
                                  onClick: () => r(l),
                                  "aria-label": t?.[l],
                                  "aria-pressed": l === s,
                                  children: (0, n.jsx)("img", {
                                      className: X.q_,
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
var Z = t(263911),
    ee = t(971146),
    el = t(696292),
    et = t(554146),
    en = t(43105),
    es = t(403581),
    er = t(131607),
    ei = t(532794),
    ea = t(617986),
    eo = t(49999),
    ec = t(788868),
    eu = t(530066),
    ed = t(942460);
function em(e) {
    let { sku: l, orbsGate: t, orbPrice: r, analyticsLocations: i, onCheckout: a, variant: o = "secondary" } = e,
        c = s.useRef(null),
        [m, x] = (0, er.kn)("NEEDS_NITRO" === t ? [et.M.SLAYER_STOREFRONT_ORBS_PURCHASE_COACHMARK] : []),
        h = m === et.M.SLAYER_STOREFRONT_ORBS_PURCHASE_COACHMARK,
        {
            isOpen: b,
            onMouseEnter: j,
            onMouseLeave: C,
            popoverRef: p,
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
        v = s.useMemo(
            () =>
                "NEEDS_NITRO" === t
                    ? {
                          title: F.intl.string(eu.default["1OBZN2"]),
                          body: F.intl.string(eu.default.FDywIe),
                          ctaText: F.intl.string(eu.default["Mt/ukE"]),
                          ctaIcon: es.t,
                          ctaVariant: "expressive",
                          onCtaClick: () => {
                              h && x(eo.i.TAKE_ACTION),
                                  g(),
                                  (0, ei.A)({
                                      subscriptionTier: ec.pe.TIER_2,
                                      analyticsLocations: i,
                                      applicationId: l.applicationId,
                                  });
                          },
                      }
                    : "NOT_ENOUGH_ORBS" === t
                      ? {
                            title: F.intl.string(eu.default.Xo6oAV),
                            body: F.intl.string(eu.default.fkdIdV),
                            ctaText: F.intl.string(eu.default.d525FQ),
                            ctaIcon: u.C,
                            ctaVariant: "primary",
                            onCtaClick: () => {
                                g(), (0, ea.navigateToQuestHome)({ fromContent: el.u.ORBS_BALANCE_MENU });
                            },
                        }
                      : null,
            [t, h, x, g, i, l.applicationId],
        ),
        f = null != v && b,
        E = s.useCallback(() => {
            h && x(eo.i.USER_DISMISS), g();
        }, [h, x, g]);
    return "HIDDEN" === t || null == r
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      ref: c,
                      onMouseEnter: j,
                      onMouseLeave: C,
                      children: (0, n.jsx)(d.$, {
                          onClick: a,
                          disabled: null != v,
                          variant: o,
                          text: (0, n.jsx)("span", {
                              className: ed.Y,
                              children: F.intl.format(F.t.lOtBOI, {
                                  orbPrice: r.amount,
                                  orbIconHook: () =>
                                      (0, n.jsx)(u.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                          fullWidth: !0,
                      }),
                  }),
                  null != v &&
                      (0, n.jsx)(en.A, {
                          targetElementRef: c,
                          popoverRef: p,
                          shouldShow: f,
                          position: "right",
                          alignmentStrategy: "edge",
                          align: "bottom",
                          caretConfig: { align: "end" },
                          size: "md",
                          title: v.title,
                          body: v.body,
                          actions: [{ text: v.ctaText, variant: v.ctaVariant, onClick: v.onCtaClick, icon: v.ctaIcon }],
                          onRequestClose: E,
                      }),
              ],
          });
}
var ex = t(310784),
    eh = t.n(ex),
    eb = t(775602),
    ej = t(654107),
    eC = t(392056),
    ep = t(619517),
    eg = t(34337),
    ev = t(172079);
let ef = (e) => (0, eg.$o)({ ...e, className: ev.tN, mediaPlayerClassName: ev.yf }),
    eE = (e) => (0, n.jsx)(ep.Ay, { ...e });
function e_(e) {
    let { item: l, isMuted: t, className: r, alt: i = "" } = e,
        o = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, ej.rh)(l, "#000000");
            return s.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = eh()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        c = (0, a.bG)([eb.A], () => eb.A.useReducedMotion),
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
              className: r ?? ev.kL,
              children: (0, n.jsx)(
                  "div",
                  {
                      className: `${ev.h4} ${ev.nR}`,
                      style: b,
                      children: (0, n.jsx)(
                          eC.rr,
                          {
                              href: null,
                              thumbnail: { url: l.videoThumbnailSrc, width: 747, height: 560 },
                              video: { url: l.src, proxyURL: l.src, width: 747, height: 560 },
                              provider: void 0,
                              allowFullScreen: !0,
                              maxHeight: 560,
                              maxWidth: 747,
                              playable: !0,
                              className: ev.Ki,
                              volume: 1,
                              autoMute: t,
                              autoPlay: !0,
                              renderVideoComponent: ef,
                              renderImageComponent: eE,
                              renderLinkComponent: eg.bU,
                          },
                          `${l.src}-${t ? "muted" : "unmuted"}`,
                      ),
                  },
                  l.src,
              ),
          })
        : (0, n.jsx)("div", {
              className: r ?? ev.kL,
              children: (0, n.jsxs)("div", {
                  className: ev.h4,
                  style: b,
                  children: [
                      (0, n.jsx)("img", { src: l.src, alt: i, className: ev.Sl }, l.src),
                      null != u && !c && (0, n.jsx)("img", { src: u, alt: "", className: ev.Ve, onAnimationEnd: h }, u),
                  ],
              }),
          });
}
var eN = t(743693),
    eA = t(995393),
    eT = t(188275),
    eI = t(652215),
    ek = t(199138);
function eS(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: ek.AX,
              children: [
                  (0, n.jsx)(o.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function eO(e) {
    let { amount: l } = e;
    return (0, n.jsxs)("div", {
        className: ek.aX,
        children: [
            (0, n.jsx)(u.C, { size: "xs", color: "currentColor" }),
            (0, n.jsx)(c.E, { variant: "text-md/semibold", color: "currentColor", children: l }),
        ],
    });
}
function eR(e) {
    let { normalPrice: l, discountedPrice: t, discountPercent: s } = e;
    return null != s && null != t
        ? (0, n.jsxs)("div", {
              className: ek._k,
              children: [
                  (0, n.jsx)(c.E, { variant: "text-md/medium", className: ek.Jb, children: l }),
                  (0, n.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                  (0, n.jsx)(c.E, { variant: "text-md/bold", className: ek.Fi, children: s }),
              ],
          })
        : (0, n.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: l });
}
function ey(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: s } = e,
        { normalPrice: r, discountedPrice: a, discountPercent: o } = s;
    if (null == r) return null;
    let c = "HIDDEN" !== t && null != l;
    return (0, n.jsxs)("div", {
        className: ek.sj,
        children: [
            (0, n.jsx)(ee.V, { textColor: "text-subtle" }),
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
            trackPDPClick: o,
            analyticsLocations: u,
            orbPrice: h,
            orbsGate: b,
            formattedPrice: j,
        } = e,
        C = l.id,
        p = (0, a.bG)([H.A], () => H.A.getNormalizedSKUEligibility(C), [C]),
        g = p && "CAN_CHECKOUT" === b,
        v = j.discountedPrice ?? j.normalPrice,
        f = s.useCallback(() => {
            o(eA.Jq.BUY_BUTTON),
                (0, J.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...u, N.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                );
        }, [l, o, t, u]),
        E = s.useCallback(() => {
            o(eA.Jq.GIFT_BUTTON),
                (0, J.a)(
                    l,
                    { isGift: !0, giftRecipient: r, giftingOrigin: i },
                    { analyticsLocations: [...u, N.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [l, o, r, i, u]),
        _ = (0, T.h)(l.applicationId),
        A = s.useMemo(() => [...u, N.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [u]),
        I = s.useCallback(() => {
            null != _ &&
                (o(eA.Jq.BUY_WITH_ORBS_BUTTON),
                (0, O.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    onComplete: () => {
                        (0, $.j)(), (0, W.n)({ sku: l, application: _, analyticsLocations: A });
                    },
                    analyticsLocations: A,
                }));
        }, [l, _, A, o]),
        k = p
            ? (0, n.jsx)(em, {
                  sku: l,
                  orbsGate: b,
                  orbPrice: h,
                  analyticsLocations: A,
                  onCheckout: I,
                  variant: g ? "primary" : "secondary",
              })
            : null,
        S = (0, n.jsxs)("div", {
            className: ek.mr,
            children: [
                (0, n.jsx)(d.$, {
                    variant: g ? "secondary" : "primary",
                    onClick: f,
                    text: null != v ? F.intl.format(F.t.YkXGyY, { priceString: v }) : F.intl.string(F.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, n.jsx)(m.D, {
                    className: ek.xP,
                    onClick: E,
                    "aria-label": F.intl.string(F.t.QAZA5f),
                    role: "button",
                    children: (0, n.jsx)(x.o, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        R = (0, n.jsx)(d.$, {
            icon: x.o,
            variant: "secondary",
            onClick: E,
            text: F.intl.string(F.t.QAZA5f),
            fullWidth: !0,
        });
    return (0, n.jsxs)("div", {
        className: ek.NC,
        children: [
            !p &&
                (0, n.jsx)(c.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: F.intl.string(F.t.IqlPbQ),
                }),
            g && k,
            p ? S : R,
            !g && k,
        ],
    });
}
function eD(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let s = null != l.labelIconAssetId ? (0, P.YE)(t, l.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: ek.HI,
        children: [
            null != s && (0, n.jsx)("img", { className: ek.IX, src: s, alt: "" }, s),
            (0, n.jsx)(c.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eP(e) {
    let { onClick: l, onMouseDown: t, children: s, ariaLabel: r, className: i = ek.jU } = e;
    return (0, n.jsx)(m.D, { onClick: l, onMouseDown: t, className: i, "aria-label": r, role: "button", children: s });
}
function eU(e) {
    let { selectedCarouselItem: l, title: t, description: s, applicationId: r, className: i } = e;
    return (0, n.jsxs)("div", {
        className: i,
        children: [
            null != t && (0, n.jsx)(o.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
            (0, n.jsx)(eD, { applicationId: r, selectedCarouselItem: l }),
            null != s && (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-subtle", children: s }),
        ],
    });
}
function eM(e) {
    let l,
        t,
        {
            customNavigateToSocialLayerStorefront: r,
            transitionState: o,
            returnRef: u,
            skuId: d,
            applicationId: m,
            isStorefront: x,
            giftRecipient: N,
            giftingOrigin: T,
            analyticsLocations: O,
            analyticsContext: B,
            onClose: W,
        } = e,
        { analyticsLocations: $ } = (0, A.Ay)(O ?? []),
        { guildId: J } = (0, U.nG)(m),
        X = (0, a.bG)([y.default], () => y.default.getId());
    s.useEffect(() => {
        null != d && (0, M.iR)(m, d);
    }, [m, d]);
    let ee = (0, Y.A)({ applicationId: m }),
        el = (0, a.bG)([H.A], () => H.A.getSkuAssets()),
        et = (0, a.bG)([L.A], () => L.A.isFetchingForSKU(d)),
        en = (0, h.M)((0, _.Ay)()),
        [es, er] = s.useState(!0),
        ei = (0, S.A)({ skuId: d }),
        ea = (0, k.JL)({ sku: ei }),
        eo = (function (e) {
            let { orbPriceAmount: l, location: t } = e,
                n = (0, q.R)({ location: t }),
                s = (0, a.bG)([z.default], () => z.default.getCurrentUser()?.hasPaidTier2Subscription() ?? !1),
                { balance: r } = (0, G.W)({ disableFetch: !n || null == l || !s });
            return n && null != l
                ? s
                    ? null == r || r < l
                        ? "NOT_ENOUGH_ORBS"
                        : "CAN_CHECKOUT"
                    : "NEEDS_NITRO"
                : "HIDDEN";
        })({ orbPriceAmount: ea?.amount, location: "product_details_modal" }),
        ec = (0, k.CD)({ sku: ei }),
        [eu, ed] = s.useState(0),
        [em, ex] = s.useMemo(
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
                                : i.push({
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
                    return [r, i];
                })(ei?.tenantMetadata?.socialLayer?.carouselItems ?? [], m, el, { heroWidth: 747 }),
            [ei, m, el],
        ),
        [eh, eb] = s.useState(null),
        [ej, eC] = s.useState(!1);
    s.useEffect(() => {
        if (null == eh) return;
        let e = new ResizeObserver(() => {
            eC(eh.scrollHeight > eh.clientHeight);
        });
        return e.observe(eh), () => e.disconnect();
    }, [eh]);
    let ep = eu < ex.length ? eu : 0,
        eg = em[ep] ?? null,
        ev = ex.length > 1,
        ef = ex.some((e) => "video" === e.type);
    (0, R.pE)(),
        (0, E.Ay)(() => {
            D.default.track(eI.HAw.OPEN_MODAL, { location_stack: $, type: eT.Nh, sku_id: d, application_id: m }),
                (0, M.Xw)();
        });
    let eE = s.useCallback(
            (e) => {
                D.default.track(eI.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: B?.sessionId,
                    sku_id: d,
                    guild_id: B?.guildId,
                    application_id: m,
                    cta_type: e,
                    location_stack: $,
                });
            },
            [B, d, m, $],
        ),
        eO = s.useCallback(
            (e) => {
                ed(e), eE(eA.Jq.CAROUSEL_ITEM);
            },
            [eE],
        );
    s.useEffect(() => {
        null == d || L.A.isFetchingForSKU(d) || (0, M.Pp)(m, d);
    }, [m, d]);
    let eR = s.useCallback(() => {
            null != ei &&
                (eE(eA.Jq.FORWARD_BUTTON),
                (0, K.d)({
                    sku: ei,
                    guildId: J,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: $,
                    analyticsContext: B,
                }));
        }, [ei, J, eE, $, B]),
        eD = s.useCallback(() => {
            eE(eA.Jq.WISHLIST_BUTTON);
        }, [eE]),
        eM = s.useCallback(() => {
            (0, V.G)({ applicationId: m });
        }, [m]),
        eY = s.useCallback(() => {
            eE(eA.Jq.VISIT_SHOP), (0, b.closeAllModals)(), null != r ? r() : (0, V.default)({ applicationId: m });
        }, [m, eE, r]),
        eB = s.useCallback(() => {
            er(!es), eE(eA.Jq.MUTE_BUTTON);
        }, [es, eE]),
        ew =
            ((l = (0, a.bG)([H.A], () => H.A.getConfig()?.promotionEndDatetime, [])),
            (t = s.useMemo(() => {
                if (null == l) return null;
                let e = w()(),
                    t = w()(l).diff(e, "days");
                return t <= 0 ? null : t;
            }, [l])),
            s.useMemo(
                () => (null == t ? null : F.intl.formatToPlainString(F.t.BXpdIg, { days: Math.max(t, 1) })),
                [t],
            )),
        eF = ei?.tenantMetadata?.socialLayer;
    if (null == ei || null == eF) return et ? (0, n.jsx)(j.y, {}) : null;
    let eG = ee?.storefront,
        ez = eG?.logoAssetId != null ? (0, P.YE)(eG.applicationId, eG.logoAssetId, 256) : null,
        eq = eG?.lightThemeLogoAssetId != null ? (0, P.YE)(eG.applicationId, eG.lightThemeLogoAssetId, 256) : null,
        eV = null;
    eV = en ? (ez ?? eq) : (eq ?? ez);
    let eK = null != ei.orbsReward && ei.orbsReward > 0;
    return (0, n.jsx)(C.EO, {
        transitionState: o,
        "hide-shadow": !0,
        parentComponent: "SocialLayerStorefrontProductDetailsModal",
        className: ek.CR,
        size: C.rI.DYNAMIC,
        returnRef: u,
        children: (0, n.jsxs)(C.$m, {
            className: ek.jE,
            children: [
                eK &&
                    (0, n.jsx)(eH, {
                        timeRemaining: ew ?? void 0,
                        text: F.intl.format(F.t.d3njXi, { orbCount: ei.orbsReward }),
                    }),
                (0, n.jsxs)("div", {
                    className: ek.nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: i()(ek.op, { [ek.uk]: ei.exclusive }),
                            children: [
                                (0, n.jsx)("div", {
                                    className: ek.r$,
                                    children:
                                        null != eV
                                            ? (0, n.jsx)("img", { className: ek.wm, src: eV, alt: eG?.title ?? "" })
                                            : null,
                                }),
                                (0, n.jsxs)("div", {
                                    ref: eb,
                                    className: ek.zD,
                                    children: [
                                        ei.exclusive &&
                                            (0, n.jsx)("div", { className: ek.K3, children: (0, n.jsx)(Z.I, {}) }),
                                        ev
                                            ? (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(eS, { sku: ei }),
                                                      (0, n.jsx)("div", {
                                                          className: ek._D,
                                                          children: (0, n.jsx)(Q, {
                                                              mediaItems: ex,
                                                              labels: em.map((e) => e.label),
                                                              selectedIndex: ep,
                                                              onSelectIndex: eO,
                                                          }),
                                                      }),
                                                      (0, n.jsx)(eU, {
                                                          selectedCarouselItem: eg,
                                                          title: eg?.title,
                                                          description: eg?.description,
                                                          applicationId: m,
                                                          className: ek.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, n.jsx)(eU, {
                                                  selectedCarouselItem: eg,
                                                  title: ei.name,
                                                  description: ei.description,
                                                  applicationId: m,
                                                  className: ek.cP,
                                              }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: i()(ek.Td, { [ek.t7]: ej }),
                                    children: [
                                        (0, n.jsx)(ey, { orbPrice: ea, orbsGate: eo, formattedPrice: ec }),
                                        (0, n.jsx)(eL, {
                                            sku: ei,
                                            guildId: J,
                                            giftRecipient: N?.id !== X ? N : void 0,
                                            giftingOrigin: N?.id !== X ? T : void 0,
                                            trackPDPClick: eE,
                                            analyticsLocations: $,
                                            orbPrice: ea,
                                            orbsGate: eo,
                                            formattedPrice: ec,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: ek.il,
                            children: [
                                (0, n.jsx)(e_, { item: ex[ep], isMuted: es, alt: eg?.label ?? ei.name }),
                                !x &&
                                    (0, n.jsxs)(eP, {
                                        onClick: eY,
                                        onMouseDown: eM,
                                        ariaLabel: F.intl.string(F.t["+v/1Dk"]),
                                        className: ek.gW,
                                        children: [
                                            (0, n.jsx)(p.U, { size: "refresh_sm", color: "currentColor" }),
                                            (0, n.jsx)(c.E, {
                                                variant: "text-md/medium",
                                                color: "currentColor",
                                                children: F.intl.string(F.t["+v/1Dk"]),
                                            }),
                                        ],
                                    }),
                                (0, n.jsxs)("div", {
                                    className: ek.V7,
                                    children: [
                                        null != ei &&
                                            (0, n.jsx)(eN._, {
                                                sku: ei,
                                                isCardHovered: !0,
                                                className: i()(ek.jU, ek.ij),
                                                trackButtonClick: eD,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, n.jsx)(eP, {
                                            onClick: eR,
                                            ariaLabel: F.intl.string(F.t.Ej3B3Y),
                                            children: (0, n.jsx)(I.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        ef &&
                                            (0, n.jsx)(eP, {
                                                onClick: eB,
                                                ariaLabel: es ? F.intl.string(F.t.YqAjXy) : F.intl.string(F.t.w4m945),
                                                children: es
                                                    ? (0, n.jsx)(g._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, n.jsx)(v.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, n.jsx)(eP, {
                                            onClick: W,
                                            ariaLabel: F.intl.string(F.t.cpT0Cq),
                                            children: (0, n.jsx)(f.d, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function eH(e) {
    let { timeRemaining: l, text: t } = e;
    return (0, n.jsxs)("div", {
        className: ek.pP,
        children: [
            (0, n.jsxs)("div", {
                className: ek.Wi,
                children: [
                    (0, n.jsx)(u.C, { size: "refresh_sm", color: "currentColor" }),
                    (0, n.jsx)(c.E, { variant: "text-sm/semibold", color: "currentColor", children: t }),
                ],
            }),
            null != l && (0, n.jsx)(c.E, { variant: "text-sm/medium", color: "currentColor", children: l }),
        ],
    });
}
