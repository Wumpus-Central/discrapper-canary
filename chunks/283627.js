t.d(l, { L: () => e7, default: () => e8 }), t(321073);
var n = t(627968),
    s = t(64700),
    a = t(310784),
    r = t.n(a),
    i = t(503698),
    o = t.n(i),
    c = t(17928),
    u = t(534514),
    d = t(192308),
    m = t(834730),
    x = t(821609),
    h = t(318254),
    b = t(825484),
    C = t(34188),
    j = t(597770),
    g = t(939249),
    f = t(366010),
    p = t(289873),
    v = t(935462),
    A = t(358618),
    _ = t(983851),
    k = t(972213),
    E = t(262427),
    N = t(964486),
    S = t(736653),
    I = t(793574),
    T = t(688810),
    R = t(429913),
    y = t(654107),
    O = t(427209),
    L = t(723090),
    U = t(801228),
    D = t(309954),
    M = t(652165),
    P = t(561794),
    w = t(495544),
    B = t(328968),
    H = t(174459),
    Y = t(371794),
    F = t(871123),
    q = t(733391),
    G = t(832163),
    $ = t(945810);
let J = (0, $.mj)({
    name: "2026-04-slayer-storefront-orbs",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function z(e) {
    let { location: l } = e;
    return J.useConfig({ location: l }).enabled;
}
let W = (0, $.mj)({
    name: "2026-04-slayer-storefront-pdp-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var V = t(989349),
    X = t.n(V),
    K = t(375708);
function Q() {
    let e,
        l =
            ((e = (0, c.bG)([G.A], () => G.A.getConfig()?.promotionEndDatetime, [])),
            s.useMemo(() => {
                if (null == e) return null;
                let l = X()(),
                    t = X()(e).diff(l, "days");
                return t <= 0 ? null : t;
            }, [e]));
    return s.useMemo(() => (null == l ? null : K.intl.formatToPlainString(K.t.BXpdIg, { days: Math.max(l, 1) })), [l]);
}
var Z = t(44724),
    ee = t(345938),
    el = t(510022),
    et = t(317560),
    en = t(429635),
    es = t(533406),
    ea = t(964421);
function er(e) {
    let { mediaItems: l, labels: t, selectedIndex: s, onSelectIndex: a } = e;
    return l.length <= 1
        ? null
        : (0, n.jsxs)("div", {
              className: ea.kL,
              children: [
                  (0, n.jsx)(m.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: K.intl.string(K.t.U7DAV9),
                  }),
                  (0, n.jsx)("div", {
                      className: ea.Vg,
                      children: l.map((e, l) =>
                          (0, n.jsx)(
                              g.D,
                              {
                                  className: o()(ea.xn, { [ea.Y4]: l === s }),
                                  onClick: () => a(l),
                                  "aria-label": t?.[l],
                                  "aria-pressed": l === s,
                                  children: (0, n.jsx)("img", {
                                      className: ea.q_,
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
var ei = t(263911),
    eo = t(971146),
    ec = t(696292),
    eu = t(554146),
    ed = t(43105),
    em = t(403581),
    ex = t(131607),
    eh = t(532794),
    eb = t(617986),
    eC = t(287809),
    ej = t(49999),
    eg = t(788868),
    ef = t(530066),
    ep = t(942460);
function ev(e) {
    let { sku: l, location: t, analyticsLocations: a, onCheckout: r } = e,
        i = (0, L.JL)({ sku: l }),
        o = (function (e) {
            let { orbPriceAmount: l, location: t } = e,
                n = z({ location: t }),
                s = (0, c.bG)([eC.default], () => eC.default.getCurrentUser()?.hasPaidTier2Subscription() ?? !1),
                { balance: a } = (0, D.W)({ disableFetch: !n || null == l || !s });
            return n && null != l
                ? s
                    ? null == a || a < l
                        ? "NOT_ENOUGH_ORBS"
                        : "CAN_CHECKOUT"
                    : "NEEDS_NITRO"
                : "HIDDEN";
        })({ orbPriceAmount: i?.amount, location: t }),
        u = s.useRef(null),
        [d, m] = (0, ex.kn)("NEEDS_NITRO" === o ? [eu.M.SLAYER_STOREFRONT_ORBS_PURCHASE_COACHMARK] : []),
        b = d === eu.M.SLAYER_STOREFRONT_ORBS_PURCHASE_COACHMARK,
        {
            isOpen: C,
            onMouseEnter: j,
            onMouseLeave: g,
            popoverRef: f,
            close: p,
        } = (function (e) {
            let { forcedOpen: l } = e,
                [t, n] = s.useState(!1),
                [a, r] = s.useState(null),
                i = s.useRef(null),
                o = s.useRef(null),
                c = s.useCallback((e) => {
                    r(e);
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
                    if (null != a)
                        return (
                            a.addEventListener("mouseenter", u),
                            a.addEventListener("mouseleave", d),
                            () => {
                                a.removeEventListener("mouseenter", u), a.removeEventListener("mouseleave", d);
                            }
                        );
                }, [a, u, d]),
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
        })({ forcedOpen: b }),
        v = s.useMemo(
            () =>
                "NEEDS_NITRO" === o
                    ? {
                          title: K.intl.string(ef.default["1OBZN2"]),
                          body: K.intl.string(ef.default.FDywIe),
                          ctaText: K.intl.string(ef.default["Mt/ukE"]),
                          ctaIcon: em.t,
                          ctaVariant: "expressive",
                          onCtaClick: () => {
                              b && m(ej.i.TAKE_ACTION),
                                  p(),
                                  (0, eh.A)({
                                      subscriptionTier: eg.pe.TIER_2,
                                      analyticsLocations: a,
                                      applicationId: l.applicationId,
                                  });
                          },
                      }
                    : "NOT_ENOUGH_ORBS" === o
                      ? {
                            title: K.intl.string(ef.default.Xo6oAV),
                            body: K.intl.string(ef.default.fkdIdV),
                            ctaText: K.intl.string(ef.default.d525FQ),
                            ctaIcon: h.C,
                            ctaVariant: "primary",
                            onCtaClick: () => {
                                p(), (0, eb.navigateToQuestHome)({ fromContent: ec.u.ORBS_BALANCE_MENU });
                            },
                        }
                      : null,
            [o, b, m, p, a, l.applicationId],
        ),
        A = null != v && C,
        _ = s.useCallback(() => {
            b && m(ej.i.USER_DISMISS), p();
        }, [b, m, p]);
    return "HIDDEN" === o || null == i
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      ref: u,
                      onMouseEnter: j,
                      onMouseLeave: g,
                      children: (0, n.jsx)(x.$, {
                          onClick: r,
                          disabled: null != v,
                          variant: "secondary",
                          text: (0, n.jsx)("span", {
                              className: ep.Y,
                              children: K.intl.format(K.t.lOtBOI, {
                                  orbPrice: i.amount,
                                  orbIconHook: () =>
                                      (0, n.jsx)(h.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                          fullWidth: !0,
                      }),
                  }),
                  null != v &&
                      (0, n.jsx)(ed.A, {
                          targetElementRef: u,
                          popoverRef: f,
                          shouldShow: A,
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
var eA = t(775602),
    e_ = t(175671),
    ek = t(619517),
    eE = t(34337),
    eN = t(172079);
let eS = (e) => (0, eE.$o)({ ...e, className: eN.tN, mediaPlayerClassName: eN.yf }),
    eI = (e) => (0, n.jsx)(ek.Ay, { ...e });
function eT(e) {
    let { item: l, isMuted: t, className: a, alt: i = "" } = e,
        o = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, y.rh)(l, "#000000");
            return s.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = r()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        u = (0, c.bG)([eA.A], () => eA.A.useReducedMotion),
        [d, m] = s.useState(null),
        [x, h] = s.useState(l);
    x !== l && (h(l), x?.type === "image" && l?.type === "image" && x.src !== l.src ? m(x.src) : m(null));
    let b = s.useCallback(() => m(null), []);
    if (null == l) return null;
    let C = {
        background: o,
        backgroundImage: null != l.backgroundSrc ? `url(${l.backgroundSrc})` : void 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    return "video" === l.type
        ? (0, n.jsx)("div", {
              className: a ?? eN.kL,
              children: (0, n.jsx)(
                  "div",
                  {
                      className: `${eN.h4} ${eN.nR}`,
                      style: C,
                      children: (0, n.jsx)(
                          e_.rr,
                          {
                              href: null,
                              thumbnail: { url: l.videoThumbnailSrc, width: 747, height: 560 },
                              video: { url: l.src, proxyURL: l.src, width: 747, height: 560 },
                              provider: void 0,
                              allowFullScreen: !0,
                              maxHeight: 560,
                              maxWidth: 747,
                              playable: !0,
                              className: eN.Ki,
                              volume: 1,
                              autoMute: t,
                              autoPlay: !0,
                              renderVideoComponent: eS,
                              renderImageComponent: eI,
                              renderLinkComponent: eE.bU,
                          },
                          `${l.src}-${t ? "muted" : "unmuted"}`,
                      ),
                  },
                  l.src,
              ),
          })
        : (0, n.jsx)("div", {
              className: a ?? eN.kL,
              children: (0, n.jsxs)("div", {
                  className: eN.h4,
                  style: C,
                  children: [
                      (0, n.jsx)("img", { src: l.src, alt: i, className: eN.Sl }, l.src),
                      null != d && !u && (0, n.jsx)("img", { src: d, alt: "", className: eN.Ve, onAnimationEnd: b }, d),
                  ],
              }),
          });
}
var eR = t(743693),
    ey = t(995393),
    eO = t(188275),
    eL = t(652215),
    eU = t(334588);
function eD(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: eU.AX,
              children: [
                  (0, n.jsx)(u.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, n.jsx)(m.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function eM(e) {
    let { sku: l } = e,
        { normalPrice: t, discountedPrice: s, discountPercent: a } = (0, L.CD)({ sku: l });
    if (null == t) return null;
    let r = null != l.orbsReward && l.orbsReward > 0;
    return (0, n.jsxs)("div", {
        className: eU.sj,
        children: [
            (0, n.jsx)(eo.V, { textColor: "text-subtle" }),
            (0, n.jsxs)("div", {
                className: eU.hO,
                children: [
                    null != a && null != s
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(m.E, { variant: "text-md/medium", className: eU.Jb, children: t }),
                                  (0, n.jsx)(m.E, { variant: "text-md/semibold", color: "text-strong", children: s }),
                                  (0, n.jsx)(m.E, { variant: "text-md/bold", className: eU.Fi, children: a }),
                              ],
                          })
                        : (0, n.jsx)(m.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                    r &&
                        (0, n.jsx)("div", {
                            className: eU.pt,
                            children: (0, n.jsx)(m.E, {
                                variant: "text-sm/semibold",
                                color: "currentColor",
                                children: K.intl.format(K.t.GiVd2Q, {
                                    orbCount: l.orbsReward,
                                    orbIconHook: () =>
                                        (0, n.jsx)(h.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                }),
                            }),
                        }),
                ],
            }),
        ],
    });
}
function eP(e) {
    let {
            sku: l,
            guildId: t,
            shouldShowShopLink: a,
            giftRecipient: r,
            giftingOrigin: i,
            trackPDPClick: o,
            analyticsLocations: u,
            getSocialLayerStorefrontLink: h,
        } = e,
        b = l.id,
        f = (0, c.bG)([G.A], () => G.A.getNormalizedSKUEligibility(b), [b]),
        p = s.useCallback(() => {
            null != t &&
                (o(ey.Jq.BUY_BUTTON),
                (0, es.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...u, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                ));
        }, [l, o, t, u]),
        v = s.useCallback(() => {
            null != t && (0, Z.X)({ guildId: t });
        }, [t]),
        A = s.useCallback(() => {
            null != t &&
                (o(ey.Jq.VISIT_SHOP),
                (0, d.closeAllModals)(),
                (0, Z.default)({ getSocialLayerStorefrontLink: h, guildId: t }));
        }, [t, o, h]),
        _ = s.useCallback(() => {
            o(ey.Jq.GIFT_BUTTON),
                (0, es.a)(
                    l,
                    { isGift: !0, giftRecipient: r, giftingOrigin: i },
                    { analyticsLocations: [...u, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [l, o, r, i, u]),
        k = (0, R.h)(l.applicationId),
        E = s.useMemo(() => [...u, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [u]),
        N = s.useCallback(() => {
            null != k &&
                (o(ey.Jq.BUY_WITH_ORBS_BUTTON),
                (0, M.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    onComplete: () => {
                        (0, et.j)(), (0, el.n)({ sku: l, application: k, analyticsLocations: E });
                    },
                    analyticsLocations: E,
                }));
        }, [l, k, E, o]);
    return (0, n.jsxs)("div", {
        className: eU.NC,
        children: [
            !f &&
                (0, n.jsx)(m.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: K.intl.string(K.t.IqlPbQ),
                }),
            f
                ? (0, n.jsxs)("div", {
                      className: eU.mr,
                      children: [
                          (0, n.jsx)(x.$, {
                              variant: "primary",
                              onClick: p,
                              text: K.intl.string(K.t.boqtTA),
                              fullWidth: !0,
                          }),
                          (0, n.jsx)(g.D, {
                              className: eU.xP,
                              onClick: _,
                              "aria-label": K.intl.string(K.t.QAZA5f),
                              role: "button",
                              children: (0, n.jsx)(j.o, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  })
                : (0, n.jsx)(x.$, {
                      icon: j.o,
                      variant: "secondary",
                      onClick: _,
                      text: K.intl.string(K.t.QAZA5f),
                      fullWidth: !0,
                  }),
            a &&
                (0, n.jsx)(x.$, {
                    icon: C.U,
                    variant: "secondary",
                    onMouseDown: v,
                    onClick: A,
                    text: K.intl.string(K.t["2QW9nR"]),
                    fullWidth: !0,
                }),
            f && (0, n.jsx)(ev, { sku: l, location: "product_details_modal", analyticsLocations: E, onCheckout: N }),
        ],
    });
}
function ew(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let s = null != l.labelIconAssetId ? (0, Y.YE)(t, l.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: eU.HI,
        children: [
            null != s && (0, n.jsx)("img", { className: eU.IX, src: s, alt: "" }, s),
            (0, n.jsx)(m.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eB(e) {
    let { onClick: l, children: t, ariaLabel: s } = e;
    return (0, n.jsx)(g.D, { onClick: l, className: eU.jU, "aria-label": s, role: "button", children: t });
}
function eH(e) {
    let { selectedCarouselItem: l, title: t, description: s, applicationId: a, className: r } = e;
    return (0, n.jsxs)("div", {
        className: r,
        children: [
            null != t && (0, n.jsx)(u.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
            (0, n.jsx)(ew, { applicationId: a, selectedCarouselItem: l }),
            null != s && (0, n.jsx)(m.E, { variant: "text-sm/normal", color: "text-subtle", children: s }),
        ],
    });
}
function eY(e) {
    let {
            getSocialLayerStorefrontLink: l,
            transitionState: t,
            returnRef: a,
            skuId: r,
            applicationId: i,
            isStorefront: u,
            giftRecipient: d,
            giftingOrigin: m,
            analyticsLocations: x,
            analyticsContext: h,
            onClose: b,
        } = e,
        { analyticsLocations: C } = (0, T.Ay)(x ?? []),
        { guildId: j } = (0, F.nG)(i),
        g = (0, c.bG)([w.default], () => w.default.getId());
    s.useEffect(() => {
        null != j && null != r && (0, q.iR)(j, r);
    }, [j, r]);
    let E = (0, en.A)({ guildId: j }),
        I = (0, c.bG)([G.A], () => G.A.getSkuAssets()),
        R = (0, c.bG)([B.A], () => B.A.isFetchingForSKU(r)),
        y = (0, f.M)((0, S.Ay)()),
        [L, D] = s.useState(!0),
        M = (0, U.A)({ skuId: r, location: "SocialLayerStorefrontProductDetailsModal" }),
        [$, J] = s.useState(0),
        [z, W] = s.useMemo(() => e7(M?.tenantMetadata?.socialLayer?.carouselItems ?? [], i, I), [M, i, I]),
        [V, X] = s.useState(null),
        [Z, el] = s.useState(!1);
    s.useEffect(() => {
        if (null == V) return;
        let e = new ResizeObserver(() => {
            el(V.scrollHeight > V.clientHeight);
        });
        return e.observe(V), () => e.disconnect();
    }, [V]);
    let et = $ < W.length ? $ : 0,
        es = z[et] ?? null,
        ea = W.length > 1,
        eo = W.some((e) => "video" === e.type);
    (0, P.pE)(),
        (0, N.Ay)(() => {
            H.default.track(eL.HAw.OPEN_MODAL, { location_stack: C, type: eO.Nh, sku_id: r, application_id: i }),
                (0, q.Xw)();
        });
    let ec = s.useCallback(
            (e) => {
                H.default.track(eL.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: h?.sessionId,
                    sku_id: r,
                    guild_id: h?.guildId,
                    cta_type: e,
                    location_stack: C,
                });
            },
            [h, r, C],
        ),
        eu = s.useCallback(
            (e) => {
                J(e), ec(ey.Jq.CAROUSEL_ITEM);
            },
            [ec],
        );
    s.useEffect(() => {
        null == j || null == r || B.A.isFetchingForSKU(r) || (0, q.qf)(j, r);
    }, [j, r]);
    let ed = s.useCallback(() => {
            null != M &&
                null != j &&
                (ec(ey.Jq.FORWARD_BUTTON),
                (0, ee.d)({
                    sku: M,
                    guildId: j,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: C,
                    analyticsContext: h,
                }));
        }, [M, j, ec, C, h]),
        em = s.useCallback(() => {
            ec(ey.Jq.WISHLIST_BUTTON);
        }, [ec]),
        ex = s.useCallback(() => {
            D(!L), ec(ey.Jq.MUTE_BUTTON);
        }, [L, ec]),
        eh = Q(),
        eb = M?.tenantMetadata?.socialLayer;
    if (null == M || null == eb) return R ? (0, n.jsx)(p.y, {}) : null;
    let eC = E?.storefront,
        ej = eC?.logoAssetId != null ? (0, Y.YE)(eC.applicationId, eC.logoAssetId, 256) : null,
        eg = eC?.lightThemeLogoAssetId != null ? (0, Y.YE)(eC.applicationId, eC.lightThemeLogoAssetId, 256) : null,
        ef = null;
    ef = y ? (ej ?? eg) : (eg ?? ej);
    let ep = null != M.orbsReward && M.orbsReward > 0;
    return (0, n.jsx)(v.EO, {
        transitionState: t,
        "hide-shadow": !0,
        parentComponent: "SocialLayerStorefrontProductDetailsModal",
        className: eU.CR,
        size: v.rI.DYNAMIC,
        returnRef: a,
        children: (0, n.jsxs)(v.$m, {
            className: eU.jE,
            children: [
                ep &&
                    (0, n.jsx)(eF, {
                        timeRemaining: eh ?? void 0,
                        text: K.intl.format(K.t.d3njXi, { orbCount: M.orbsReward }),
                    }),
                (0, n.jsxs)("div", {
                    className: eU.nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: eU.op,
                            children: [
                                (0, n.jsx)("div", {
                                    className: eU.r$,
                                    children:
                                        null != ef
                                            ? (0, n.jsx)("img", { className: eU.wm, src: ef, alt: eC?.title ?? "" })
                                            : null,
                                }),
                                (0, n.jsxs)("div", {
                                    ref: X,
                                    className: eU.zD,
                                    children: [
                                        M.exclusive &&
                                            (0, n.jsx)("div", { className: eU.K3, children: (0, n.jsx)(ei.I, {}) }),
                                        ea
                                            ? (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(eD, { sku: M }),
                                                      (0, n.jsx)("div", {
                                                          className: eU._D,
                                                          children: (0, n.jsx)(er, {
                                                              mediaItems: W,
                                                              labels: z.map((e) => e.label),
                                                              selectedIndex: et,
                                                              onSelectIndex: eu,
                                                          }),
                                                      }),
                                                      (0, n.jsx)(eH, {
                                                          selectedCarouselItem: es,
                                                          title: es?.title,
                                                          description: es?.description,
                                                          applicationId: i,
                                                          className: eU.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, n.jsx)(eH, {
                                                  selectedCarouselItem: es,
                                                  title: M.name,
                                                  description: M.description,
                                                  applicationId: i,
                                                  className: eU.cP,
                                              }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: o()(eU.Td, { [eU.t7]: Z }),
                                    children: [
                                        (0, n.jsx)(eM, { sku: M }),
                                        (0, n.jsx)(eP, {
                                            sku: M,
                                            guildId: j,
                                            shouldShowShopLink: !u,
                                            giftRecipient: d?.id !== g ? d : void 0,
                                            giftingOrigin: d?.id !== g ? m : void 0,
                                            trackPDPClick: ec,
                                            analyticsLocations: C,
                                            getSocialLayerStorefrontLink: l,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: eU.il,
                            children: [
                                (0, n.jsx)(eT, { item: W[et], isMuted: L, alt: es?.label ?? M.name }),
                                (0, n.jsxs)("div", {
                                    className: eU.V7,
                                    children: [
                                        null != M &&
                                            (0, n.jsx)(eR._, {
                                                sku: M,
                                                isCardHovered: !0,
                                                className: o()(eU.jU, eU.ij),
                                                trackButtonClick: em,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, n.jsx)(eB, {
                                            onClick: ed,
                                            ariaLabel: K.intl.string(K.t.Ej3B3Y),
                                            children: (0, n.jsx)(O.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        eo &&
                                            (0, n.jsx)(eB, {
                                                onClick: ex,
                                                ariaLabel: L ? K.intl.string(K.t.YqAjXy) : K.intl.string(K.t.w4m945),
                                                children: L
                                                    ? (0, n.jsx)(A._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, n.jsx)(_.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, n.jsx)(eB, {
                                            onClick: b,
                                            ariaLabel: K.intl.string(K.t.cpT0Cq),
                                            children: (0, n.jsx)(k.d, { size: "refresh_sm", color: "currentColor" }),
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
function eF(e) {
    let { timeRemaining: l, text: t } = e;
    return (0, n.jsxs)("div", {
        className: eU.pP,
        children: [
            (0, n.jsxs)("div", {
                className: eU.Wi,
                children: [
                    (0, n.jsx)(h.C, { size: "refresh_sm", color: "currentColor" }),
                    (0, n.jsx)(m.E, { variant: "text-sm/semibold", color: "currentColor", children: t }),
                ],
            }),
            null != l && (0, n.jsx)(m.E, { variant: "text-sm/medium", color: "currentColor", children: l }),
        ],
    });
}
var eq = t(615300),
    eG = t(456412),
    e$ = t(133296),
    eJ = t(848752),
    ez = t(452282),
    eW = t(625494),
    eV = t(55607);
let eX = (e) => (0, eE.$o)({ ...e, className: eV.tN, mediaPlayerClassName: eV.yf }),
    eK = (e) => (0, n.jsx)(ek.Ay, { ...e });
function eQ(e) {
    let l = "videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src,
        [t, n] = (0, y.rh)(l, "#000000"),
        a = s.useMemo(() => {
            let e = r()(t).darken(1);
            return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
        }, [t]);
    return null != l && "#000000" !== t ? a : void 0;
}
function eZ(e) {
    let { item: l, onPlay: t, onEnded: s, onClick: a, playable: r, isMuted: i } = e,
        o = eQ(l),
        c = (0, n.jsx)(
            e_.rr,
            {
                href: null,
                thumbnail: { url: l.videoThumbnailSrc, width: 747, height: 560 },
                video: { url: l.src, proxyURL: l.src, width: 747, height: 560 },
                provider: void 0,
                allowFullScreen: !0,
                maxHeight: 560,
                maxWidth: 747,
                onPlay: t,
                onEnded: s,
                playable: r,
                className: eV.Ki,
                volume: 1,
                autoMute: i,
                autoPlay: r,
                renderVideoComponent: eX,
                renderImageComponent: eK,
                renderLinkComponent: eE.bU,
            },
            i ? "player-muted" : "player-unmuted",
        ),
        u = { background: o };
    return r
        ? (0, n.jsx)("div", { className: eV.AU, style: u, children: c })
        : (0, n.jsx)(g.D, { className: eV.AU, onClick: a, style: u, children: c });
}
function e0(e) {
    let { item: l, setHasInteracted: t, onSetItem: s, isCurrentItem: a, itemIndex: r } = e,
        i = { background: eQ(l) };
    return a
        ? (0, n.jsx)(g.D, {
              onClick: () => t(!0),
              className: eV.AU,
              style: i,
              children: (0, n.jsx)("img", { src: l.src, alt: "", className: eV.NP }),
          })
        : (0, n.jsx)(g.D, {
              onClick: () => s(r),
              className: eV.AU,
              style: i,
              children: (0, n.jsx)("img", { alt: "", className: eV.tv, src: l.src, draggable: !1 }),
          });
}
let e1 = (0, eG.A)((e) => {
    let {
            items: l,
            className: t,
            paused: a = !1,
            autoplayInterval: r = 8e3,
            onItemChange: i,
            isMuted: c = !0,
            onTrackClick: u,
        } = e,
        d = (0, s.useRef)(0),
        [m, x] = (0, s.useState)(0),
        [h, b] = (0, s.useState)(0),
        C = (0, s.useRef)(0),
        j = (0, s.useRef)(l.length),
        [g, f] = (0, s.useState)(!0),
        [p, v] = (0, s.useState)(!1),
        [A, _] = (0, s.useState)(!1),
        [k, E] = (0, s.useState)(!1),
        [N, S] = (0, s.useState)(!1),
        I = (0, s.useCallback)(
            (e, t) => {
                let n = l[e]?.backgroundSrc,
                    s = t.interpolate({ inputRange: [0, 1], outputRange: [1, 0], extrapolate: eq.A.Extrapolate.CLAMP });
                return {
                    opacity: t.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.3, 1],
                        extrapolate: eq.A.Extrapolate.CLAMP,
                    }),
                    filter: eq.A.template`grayscale(${s})`,
                    backgroundImage: null != n ? `url(${n})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                };
            },
            [l],
        ),
        T = (0, s.useCallback)(function (e) {
            let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            v(!1), _(l);
            let t = j.current,
                n = (0, ez.U3)(C.current, t),
                s = (0, ez.U3)(e, t);
            (C.current = s),
                b(s),
                d.current++,
                x(d.current),
                f(1 === Math.abs(s - n) || (s === t - 1 && 0 === n) || (0 === s && n === t - 1));
        }, []),
        R = (0, s.useCallback)(() => {
            T(C.current + 1, !1);
        }, [T]),
        y = (0, s.useCallback)(() => {
            u?.(ey.Jq.CAROUSEL_NEXT), T(C.current + 1);
        }, [T, u]),
        O = (0, s.useCallback)(() => {
            u?.(ey.Jq.CAROUSEL_PREV), T(C.current - 1);
        }, [T, u]),
        L = (0, s.useCallback)((e) => {
            v(!0), _(!e);
        }, []),
        U = (0, s.useCallback)(() => {
            A || R();
        }, [A, R]),
        D = (0, s.useCallback)((e) => {
            let l = C.current;
            e < l ? E(!0) : e > l && S(!0);
        }, []),
        M = (0, s.useCallback)(() => {
            E(!1), S(!1);
        }, []),
        P = (0, s.useCallback)(
            (e, l, t) =>
                (0, n.jsx)(e0, {
                    item: e,
                    itemIndex: l,
                    isCurrentItem: t,
                    onSetItem: (e) => {
                        u?.(ey.Jq.CAROUSEL_ITEM), T(e);
                    },
                    setHasInteracted: _,
                }),
            [T, u],
        ),
        w = (0, s.useCallback)(
            (e, t, s) => {
                let a = t === (0, ez.U3)(h, l.length);
                return (0, n.jsx)(eq.A.div, {
                    className: o()(eV.AS, { [eV.Xt]: a }),
                    style: null != s ? I(t, s) : null,
                    onMouseEnter: a ? null : () => D(t),
                    onMouseLeave: a ? null : M,
                    children:
                        "video" === e.type
                            ? (0, n.jsx)(
                                  eZ,
                                  {
                                      item: e,
                                      onPlay: L,
                                      onEnded: U,
                                      playable: a,
                                      isMuted: c,
                                      onClick: () => {
                                          u?.(ey.Jq.CAROUSEL_ITEM), T(t);
                                      },
                                  },
                                  m,
                              )
                            : P(e, t, a),
                });
            },
            [h, l.length, I, D, M, L, U, T, P, c, u, m],
        ),
        B = (0, s.useCallback)(() => {
            let e = (0, n.jsx)(ez.Ay, {
                className: eV.Dk,
                items: l,
                itemSize: { width: 747, margin: 0 },
                renderItem: w,
                currentIndex: h,
                animate: g,
                edgeItems: 2,
            });
            return l.length <= 1
                ? e
                : (0, n.jsxs)("div", {
                      className: eV.HY,
                      children: [
                          e,
                          (0, n.jsx)(eJ.Q8, { onClick: O, className: o()(eV.UE, { [eV.h_]: k }) }),
                          (0, n.jsx)(eJ.Oj, { onClick: y, className: o()(eV.UE, { [eV.h_]: N }) }),
                      ],
                  });
        }, [l, w, h, g, O, y, k, N]),
        H = (0, s.useCallback)(
            (e, l) => {
                let t = h === l;
                return (0, n.jsx)(
                    "div",
                    {
                        className: o()(eV.Yw, t ? eV.sM : eV.N7),
                        children: (0, n.jsx)("img", {
                            alt: "",
                            className: eV.Pr,
                            src:
                                null != e.thumbnailSrc
                                    ? e.thumbnailSrc
                                    : "image" === e.type
                                      ? e.src
                                      : "video" === e.type
                                        ? e.videoThumbnailSrc
                                        : void 0,
                            draggable: !1,
                        }),
                    },
                    `page-${l}`,
                );
            },
            [h],
        );
    (0, s.useEffect)(
        () => (
            eW._.subscribe(eL.jej.CAROUSEL_PREV, O),
            eW._.subscribe(eL.jej.CAROUSEL_NEXT, y),
            () => {
                eW._.unsubscribe(eL.jej.CAROUSEL_PREV, O), eW._.unsubscribe(eL.jej.CAROUSEL_NEXT, y);
            }
        ),
        [O, y],
    ),
        (0, s.useEffect)(() => {
            j.current = l.length;
        }, [l]),
        (0, s.useEffect)(() => {
            i?.(l[h], h);
        }, [h, l, i]);
    let Y = (0, s.useCallback)(
        (e) => {
            u?.(ey.Jq.CAROUSEL_ITEM), T(e);
        },
        [T, u],
    );
    return (0, n.jsxs)(e$.A, {
        pauseOnHover: !0,
        onInterval: R,
        interval: r,
        className: t,
        disable: p || A || a,
        children: [
            B(),
            (0, n.jsx)("div", {
                className: eV.X$,
                children: (0, n.jsx)(eJ.Ay, {
                    renderItem: H,
                    scrollToPadding: 40,
                    items: l,
                    selectedIndex: h,
                    onSetItem: Y,
                    paginationContainerClass: eV.XG,
                    align: eJ.Ay.Align.CENTER,
                }),
            }),
        ],
    });
});
var e4 = t(199138);
function e7(e, l, t) {
    let n = [],
        s = [];
    if (null == e || 0 === e.length) return [n, s];
    for (let a of e) {
        let e = null != a.assetId ? t[a.assetId] : null;
        null != e &&
            (n.push(a),
            e.mime_type.startsWith("video/")
                ? s.push({
                      type: "video",
                      src: (0, Y.YE)(l, e, 747, "mp4"),
                      videoThumbnailSrc: (0, Y.YE)(l, e, 747, "webp"),
                      thumbnailSrc: null != a.thumbnailAssetId ? (0, Y.YE)(l, a.thumbnailAssetId, 112, "webp") : void 0,
                      backgroundSrc:
                          null != a.backgroundAssetId ? (0, Y.YE)(l, a.backgroundAssetId, 747, F.pV) : void 0,
                  })
                : s.push({
                      type: "image",
                      src: (0, Y.YE)(l, e, 747, "webp"),
                      thumbnailSrc: null != a.thumbnailAssetId ? (0, Y.YE)(l, a.thumbnailAssetId, 112, "webp") : void 0,
                      backgroundSrc:
                          null != a.backgroundAssetId ? (0, Y.YE)(l, a.backgroundAssetId, 747, F.pV) : void 0,
                  }));
    }
    return [n, s];
}
function e3(e) {
    let { sku: l } = e,
        { normalPrice: t, discountedPrice: s, discountPercent: a } = (0, L.CD)({ sku: l });
    return null == t
        ? null
        : null != a && null != s
          ? (0, n.jsxs)("div", {
                className: e4.TS,
                children: [
                    (0, n.jsx)(u.D, {
                        className: e4.of,
                        variant: "heading-md/medium",
                        color: "text-muted",
                        lineClamp: 1,
                        children: t,
                    }),
                    (0, n.jsx)(u.D, { variant: "heading-md/bold", color: "text-strong", children: s }),
                    (0, n.jsxs)(u.D, {
                        variant: "heading-md/bold",
                        color: "text-feedback-positive",
                        lineClamp: 1,
                        children: ["(", a, ")"],
                    }),
                ],
            })
          : (0, n.jsx)(u.D, { variant: "heading-md/semibold", color: "text-strong", children: t });
}
function e2(e) {
    let {
            sku: l,
            guildId: t,
            shouldShowShopLink: a,
            giftRecipient: r,
            giftingOrigin: i,
            trackPDPClick: o,
            analyticsLocations: g,
            getSocialLayerStorefrontLink: f,
        } = e,
        p = l?.id,
        v = (0, c.bG)([G.A], () => (null != p ? G.A.getNormalizedSKUEligibility(p) : void 0), [p]),
        A = Q(),
        _ = z({ location: "product_details_modal" }),
        k = (0, L.JL)({ sku: l });
    (0, D.W)({ disableFetch: !_ });
    let E = (0, R.h)(l?.applicationId),
        N = s.useCallback(() => {
            null != l &&
                null != t &&
                (o(ey.Jq.BUY_BUTTON),
                (0, es.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...g, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                ));
        }, [l, o, t, g]),
        S = s.useCallback(() => {
            null != t && (0, Z.X)({ guildId: t });
        }, [t]),
        T = s.useCallback(() => {
            null != t &&
                (o(ey.Jq.VISIT_SHOP),
                (0, d.closeAllModals)(),
                (0, Z.default)({ getSocialLayerStorefrontLink: f, guildId: t }));
        }, [t, o, f]),
        y = s.useCallback(() => {
            null != l &&
                (o(ey.Jq.GIFT_BUTTON),
                (0, es.a)(
                    l,
                    { isGift: !0, giftRecipient: r, giftingOrigin: i },
                    { analyticsLocations: [...g, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [l, o, r, i, g]),
        O = s.useCallback(() => {
            if (null == l || null == E || !_) return;
            o(ey.Jq.BUY_WITH_ORBS_BUTTON);
            let e = [...g, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON];
            (0, M.B4)({
                skuId: l.id,
                applicationId: l.applicationId,
                onComplete: () => {
                    (0, et.j)(), (0, el.n)({ sku: l, application: E, analyticsLocations: e });
                },
                analyticsLocations: e,
            });
        }, [l, o, g, E, _]);
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: e4.wt,
              children: [
                  l.exclusive && (0, n.jsx)("div", { className: e4.K3, children: (0, n.jsx)(ei.I, {}) }),
                  (0, n.jsxs)("div", {
                      className: e4.AX,
                      children: [
                          (0, n.jsx)(u.D, { variant: "heading-xl/bold", color: "text-strong", children: l.name }),
                          (0, n.jsx)(m.E, { variant: "text-sm/medium", color: "text-subtle", children: l.description }),
                      ],
                  }),
                  (0, n.jsxs)("div", {
                      className: e4.sj,
                      children: [
                          (0, n.jsx)(eo.V, {}),
                          (0, n.jsx)(e3, { sku: l }),
                          null != l.orbsReward &&
                              l.orbsReward > 0 &&
                              (0, n.jsx)(ll, {
                                  timeRemaining: A ?? void 0,
                                  text: K.intl.format(K.t.d3njXi, { orbCount: l.orbsReward }),
                              }),
                      ],
                  }),
                  (0, n.jsxs)("div", {
                      className: e4.NC,
                      children: [
                          !v &&
                              (0, n.jsx)(m.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children: K.intl.string(K.t.IqlPbQ),
                              }),
                          v &&
                              (0, n.jsx)(x.$, {
                                  variant: "primary",
                                  onClick: N,
                                  text: K.intl.string(K.t.boqtTA),
                                  fullWidth: !0,
                              }),
                          _ &&
                              v &&
                              null != k &&
                              (0, n.jsx)(x.$, {
                                  icon: h.C,
                                  variant: "secondary",
                                  onClick: O,
                                  text: K.intl.format(K.t.lOtBOI, {
                                      orbPrice: k.amount,
                                      orbIconHook: () =>
                                          (0, n.jsx)(h.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                  }),
                                  fullWidth: !0,
                              }),
                          (0, n.jsxs)(b.e, {
                              wrap: !1,
                              fullWidth: !0,
                              children: [
                                  a
                                      ? (0, n.jsx)(x.$, {
                                            icon: C.U,
                                            variant: "secondary",
                                            onMouseDown: S,
                                            onClick: T,
                                            text: K.intl.string(K.t["2QW9nR"]),
                                            fullWidth: !0,
                                        })
                                      : null,
                                  (0, n.jsx)(x.$, {
                                      icon: j.o,
                                      variant: "secondary",
                                      onClick: y,
                                      text: K.intl.string(K.t.QAZA5f),
                                      fullWidth: !0,
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
function e5(e) {
    let { sku: l, applicationId: t, assets: a, onSelectedCarouselItemChange: r, isMuted: i, trackPDPClick: o } = e,
        [c, u] = s.useState([]),
        [d, m] = s.useState([]),
        x = s.useCallback(
            (e) => {
                let l = d.findIndex((l) => l === e);
                r?.(c[l] ?? null);
            },
            [r, c, d],
        );
    return (s.useEffect(() => {
        let [e, n] = e7(l?.tenantMetadata?.socialLayer?.carouselItems ?? [], t, a);
        u(e), m(n);
    }, [l, a, t]),
    0 === d.length)
        ? null
        : (0, n.jsx)(e1, { className: e4.Dk, items: d, onItemChange: x, isMuted: i, onTrackClick: o });
}
function e9(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let s = null != l.labelIconAssetId ? (0, Y.YE)(t, l.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: e4.HI,
        children: [
            null != s && (0, n.jsx)("img", { className: e4.IX, src: s, alt: l.label }, s),
            (0, n.jsx)(m.E, { variant: "text-xs/medium", color: "text-strong", children: l.label }),
        ],
    });
}
function e6(e) {
    let { onClick: l, children: t, ariaLabel: s } = e;
    return (0, n.jsx)(g.D, { onClick: l, className: e4.jU, "aria-label": s, role: "button", children: t });
}
function e8(e) {
    return !(function (e) {
        let { location: l } = e;
        return W.useConfig({ location: l }).enabled;
    })({ location: "product_details_modal" })
        ? (0, n.jsx)(le, { ...e })
        : (0, n.jsx)(eY, { ...e });
}
function le(e) {
    let {
            transitionState: l,
            returnRef: t,
            skuId: a,
            applicationId: i,
            isStorefront: u,
            giftRecipient: d,
            giftingOrigin: m,
            analyticsLocations: x,
            analyticsContext: h,
            onClose: b,
            getSocialLayerStorefrontLink: C,
        } = e,
        { analyticsLocations: j } = (0, T.Ay)(x ?? []),
        { guildId: g } = (0, F.nG)(i),
        E = (0, c.bG)([w.default], () => w.default.getId());
    s.useEffect(() => {
        null != g && null != a && (0, q.iR)(g, a);
    }, [g, a]);
    let I = (0, c.bG)([G.A], () => G.A.getStorefrontMetadata(i), [i]),
        R = (0, c.bG)([G.A], () => G.A.getSkuAssets()),
        L = (0, c.bG)([B.A], () => B.A.isFetchingForSKU(a)),
        D = (0, f.M)((0, S.Ay)()),
        [M, $] = s.useState(!0),
        J = (0, U.A)({ skuId: a, location: "SocialLayerStorefrontProductDetailsModal" }),
        [z, W] = s.useState(null),
        V = (function (e, l) {
            let t = l?.labelIconAssetId != null ? (0, Y.YE)(e, l?.labelIconAssetId) : null,
                [n, a] = (0, y.rh)(t, "#000000"),
                i = s.useMemo(() => {
                    let e = r()(n).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [n]);
            return null != t && "#000000" !== n ? i : void 0;
        })(i, z);
    (0, P.pE)(),
        (0, N.Ay)(() => {
            H.default.track(eL.HAw.OPEN_MODAL, { location_stack: j, type: eO.Nh, sku_id: a, application_id: i }),
                (0, q.Xw)();
        });
    let X = s.useCallback(
        (e) => {
            H.default.track(eL.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                slayer_storefront_session_id: h?.sessionId,
                sku_id: a,
                guild_id: h?.guildId,
                cta_type: e,
                location_stack: j,
            });
        },
        [h, a, j],
    );
    s.useEffect(() => {
        null == g || null == a || B.A.isFetchingForSKU(a) || (0, q.qf)(g, a);
    }, [g, a]);
    let Q = s.useCallback(() => {
            null != J &&
                null != g &&
                (X(ey.Jq.FORWARD_BUTTON),
                (0, ee.d)({
                    sku: J,
                    guildId: g,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: j,
                    analyticsContext: h,
                }));
        }, [J, g, X, j, h]),
        Z = s.useCallback(() => {
            X(ey.Jq.WISHLIST_BUTTON);
        }, [X]),
        el = s.useCallback(() => {
            $(!M), X(ey.Jq.MUTE_BUTTON);
        }, [M, X]);
    if (null == J?.tenantMetadata?.socialLayer) return L ? (0, n.jsx)(p.y, {}) : null;
    let et = I?.logoAssetId != null ? (0, Y.YE)(i, I.logoAssetId, 256) : null,
        en = I?.lightThemeLogoAssetId != null ? (0, Y.YE)(i, I.lightThemeLogoAssetId, 256) : null,
        es = null;
    return (
        (es = D ? (et ?? en) : (en ?? et)),
        (0, n.jsx)(v.EO, {
            transitionState: l,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: e4.CR,
            size: v.rI.DYNAMIC,
            returnRef: t,
            children: (0, n.jsxs)(v.$m, {
                className: e4.jE,
                children: [
                    (0, n.jsxs)("div", {
                        className: e4.op,
                        style: { background: V },
                        children: [
                            (0, n.jsx)("div", {
                                className: e4.r$,
                                children: null != es ? (0, n.jsx)("img", { className: e4.wm, src: es, alt: "" }) : null,
                            }),
                            (0, n.jsx)(e9, { applicationId: i, selectedCarouselItem: z }),
                            (0, n.jsx)(e2, {
                                sku: J,
                                guildId: g,
                                shouldShowShopLink: !u,
                                giftRecipient: d?.id !== E ? d : void 0,
                                giftingOrigin: d?.id !== E ? m : void 0,
                                trackPDPClick: X,
                                analyticsLocations: j,
                                getSocialLayerStorefrontLink: C,
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: e4.Cf,
                        children: [
                            (0, n.jsx)(e5, {
                                sku: J,
                                applicationId: i,
                                assets: R,
                                onSelectedCarouselItemChange: W,
                                isMuted: M,
                                trackPDPClick: X,
                            }),
                            (0, n.jsxs)("div", {
                                className: e4.V7,
                                children: [
                                    null != J &&
                                        (0, n.jsx)(eR._, {
                                            sku: J,
                                            isCardHovered: !0,
                                            className: o()(e4.jU, e4.ij),
                                            trackButtonClick: Z,
                                            variant: "overlay-secondary",
                                            location: "social_layer_storefront_product_details_modal",
                                        }),
                                    (0, n.jsx)(e6, {
                                        onClick: Q,
                                        ariaLabel: K.intl.string(K.t.Ej3B3Y),
                                        children: (0, n.jsx)(O.A, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, n.jsx)(e6, {
                                        onClick: el,
                                        ariaLabel: M ? K.intl.string(K.t.YqAjXy) : K.intl.string(K.t.w4m945),
                                        children: M
                                            ? (0, n.jsx)(A._, { size: "refresh_sm", color: "currentColor" })
                                            : (0, n.jsx)(_.H, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, n.jsx)(e6, {
                                        onClick: b,
                                        ariaLabel: K.intl.string(K.t.cpT0Cq),
                                        children: (0, n.jsx)(k.d, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function ll(e) {
    let { timeRemaining: l, text: t } = e;
    return (0, n.jsx)(E.A, {
        className: e4.qw,
        Icon: h.C,
        children: (0, n.jsxs)("div", {
            className: e4.Yu,
            children: [
                (0, n.jsxs)(m.E, {
                    variant: "text-xs/bold",
                    color: "currentColor",
                    children: [K.intl.string(K.t.yYEZGi), null != l && ` (${l})`],
                }),
                (0, n.jsx)("div", {
                    className: e4.fb,
                    children: (0, n.jsx)(m.E, { variant: "text-xs/medium", color: "currentColor", children: t }),
                }),
            ],
        }),
    });
}
