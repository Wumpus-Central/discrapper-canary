t.d(l, { default: () => e8 });
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
    E = t(972213),
    k = t(262427),
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
let W = (0, $.mj)({
    name: "2026-04-slayer-storefront-orbs",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function J(e) {
    let { location: l } = e;
    return W.useConfig({ location: l }).enabled;
}
let z = (0, $.mj)({
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
var Z = t(44724);
function ee(e, l, t, n) {
    let { heroWidth: s } = n,
        a = [],
        r = [];
    if (null == e || 0 === e.length) return [a, r];
    for (let n of e) {
        let e = null != n.assetId ? t[n.assetId] : null;
        null != e &&
            (a.push(n),
            e.mime_type.startsWith("video/")
                ? r.push({
                      type: "video",
                      src: (0, Y.YE)(l, e, s, "mp4"),
                      videoThumbnailSrc: (0, Y.YE)(l, e, s, "webp"),
                      thumbnailSrc: null != n.thumbnailAssetId ? (0, Y.YE)(l, n.thumbnailAssetId, 112, "webp") : void 0,
                      backgroundSrc: null != n.backgroundAssetId ? (0, Y.YE)(l, n.backgroundAssetId, s, F.pV) : void 0,
                  })
                : r.push({
                      type: "image",
                      src: (0, Y.YE)(l, e, s, "webp"),
                      thumbnailSrc: null != n.thumbnailAssetId ? (0, Y.YE)(l, n.thumbnailAssetId, 112, "webp") : void 0,
                      backgroundSrc: null != n.backgroundAssetId ? (0, Y.YE)(l, n.backgroundAssetId, s, F.pV) : void 0,
                  }));
    }
    return [a, r];
}
t(321073);
var el = t(345938),
    et = t(510022),
    en = t(317560),
    es = t(429635),
    ea = t(533406),
    er = t(964421);
function ei(e) {
    let { mediaItems: l, labels: t, selectedIndex: s, onSelectIndex: a } = e;
    return l.length <= 1
        ? null
        : (0, n.jsxs)("div", {
              className: er.kL,
              children: [
                  (0, n.jsx)(m.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: K.intl.string(K.t.U7DAV9),
                  }),
                  (0, n.jsx)("div", {
                      className: er.Vg,
                      children: l.map((e, l) =>
                          (0, n.jsx)(
                              g.D,
                              {
                                  className: o()(er.xn, { [er.Y4]: l === s }),
                                  onClick: () => a(l),
                                  "aria-label": t?.[l],
                                  "aria-pressed": l === s,
                                  children: (0, n.jsx)("img", {
                                      className: er.q_,
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
var eo = t(263911),
    ec = t(971146),
    eu = t(696292),
    ed = t(554146),
    em = t(43105),
    ex = t(403581),
    eh = t(131607),
    eb = t(532794),
    eC = t(617986),
    ej = t(287809),
    eg = t(49999),
    ef = t(788868),
    ep = t(530066),
    ev = t(942460);
function eA(e) {
    let { sku: l, location: t, analyticsLocations: a, onCheckout: r } = e,
        i = (0, L.JL)({ sku: l }),
        o = (function (e) {
            let { orbPriceAmount: l, location: t } = e,
                n = J({ location: t }),
                s = (0, c.bG)([ej.default], () => ej.default.getCurrentUser()?.hasPaidTier2Subscription() ?? !1),
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
        [d, m] = (0, eh.kn)("NEEDS_NITRO" === o ? [ed.M.SLAYER_STOREFRONT_ORBS_PURCHASE_COACHMARK] : []),
        b = d === ed.M.SLAYER_STOREFRONT_ORBS_PURCHASE_COACHMARK,
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
                          title: K.intl.string(ep.default["1OBZN2"]),
                          body: K.intl.string(ep.default.FDywIe),
                          ctaText: K.intl.string(ep.default["Mt/ukE"]),
                          ctaIcon: ex.t,
                          ctaVariant: "expressive",
                          onCtaClick: () => {
                              b && m(eg.i.TAKE_ACTION),
                                  p(),
                                  (0, eb.A)({
                                      subscriptionTier: ef.pe.TIER_2,
                                      analyticsLocations: a,
                                      applicationId: l.applicationId,
                                  });
                          },
                      }
                    : "NOT_ENOUGH_ORBS" === o
                      ? {
                            title: K.intl.string(ep.default.Xo6oAV),
                            body: K.intl.string(ep.default.fkdIdV),
                            ctaText: K.intl.string(ep.default.d525FQ),
                            ctaIcon: h.C,
                            ctaVariant: "primary",
                            onCtaClick: () => {
                                p(), (0, eC.navigateToQuestHome)({ fromContent: eu.u.ORBS_BALANCE_MENU });
                            },
                        }
                      : null,
            [o, b, m, p, a, l.applicationId],
        ),
        A = null != v && C,
        _ = s.useCallback(() => {
            b && m(eg.i.USER_DISMISS), p();
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
                              className: ev.Y,
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
                      (0, n.jsx)(em.A, {
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
var e_ = t(775602),
    eE = t(175671),
    ek = t(619517),
    eN = t(34337),
    eS = t(172079);
let eI = (e) => (0, eN.$o)({ ...e, className: eS.tN, mediaPlayerClassName: eS.yf }),
    eT = (e) => (0, n.jsx)(ek.Ay, { ...e });
function eR(e) {
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
        u = (0, c.bG)([e_.A], () => e_.A.useReducedMotion),
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
              className: a ?? eS.kL,
              children: (0, n.jsx)(
                  "div",
                  {
                      className: `${eS.h4} ${eS.nR}`,
                      style: C,
                      children: (0, n.jsx)(
                          eE.rr,
                          {
                              href: null,
                              thumbnail: { url: l.videoThumbnailSrc, width: 747, height: 560 },
                              video: { url: l.src, proxyURL: l.src, width: 747, height: 560 },
                              provider: void 0,
                              allowFullScreen: !0,
                              maxHeight: 560,
                              maxWidth: 747,
                              playable: !0,
                              className: eS.Ki,
                              volume: 1,
                              autoMute: t,
                              autoPlay: !0,
                              renderVideoComponent: eI,
                              renderImageComponent: eT,
                              renderLinkComponent: eN.bU,
                          },
                          `${l.src}-${t ? "muted" : "unmuted"}`,
                      ),
                  },
                  l.src,
              ),
          })
        : (0, n.jsx)("div", {
              className: a ?? eS.kL,
              children: (0, n.jsxs)("div", {
                  className: eS.h4,
                  style: C,
                  children: [
                      (0, n.jsx)("img", { src: l.src, alt: i, className: eS.Sl }, l.src),
                      null != d && !u && (0, n.jsx)("img", { src: d, alt: "", className: eS.Ve, onAnimationEnd: b }, d),
                  ],
              }),
          });
}
var ey = t(743693),
    eO = t(995393),
    eL = t(188275),
    eU = t(652215),
    eD = t(334588);
function eM(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: eD.AX,
              children: [
                  (0, n.jsx)(u.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, n.jsx)(m.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function eP(e) {
    let { sku: l } = e,
        { normalPrice: t, discountedPrice: s, discountPercent: a } = (0, L.CD)({ sku: l });
    if (null == t) return null;
    let r = null != l.orbsReward && l.orbsReward > 0;
    return (0, n.jsxs)("div", {
        className: eD.sj,
        children: [
            (0, n.jsx)(ec.V, { textColor: "text-subtle" }),
            (0, n.jsxs)("div", {
                className: eD.hO,
                children: [
                    null != a && null != s
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(m.E, { variant: "text-md/medium", className: eD.Jb, children: t }),
                                  (0, n.jsx)(m.E, { variant: "text-md/semibold", color: "text-strong", children: s }),
                                  (0, n.jsx)(m.E, { variant: "text-md/bold", className: eD.Fi, children: a }),
                              ],
                          })
                        : (0, n.jsx)(m.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                    r &&
                        (0, n.jsx)("div", {
                            className: eD.pt,
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
function ew(e) {
    let {
            sku: l,
            guildId: t,
            shouldShowShopLink: a,
            giftRecipient: r,
            giftingOrigin: i,
            trackPDPClick: o,
            analyticsLocations: u,
            customNavigateToSocialLayerStorefront: h,
        } = e,
        b = l.id,
        f = (0, c.bG)([G.A], () => G.A.getNormalizedSKUEligibility(b), [b]),
        p = s.useCallback(() => {
            null != t &&
                (o(eO.Jq.BUY_BUTTON),
                (0, ea.a)(
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
                (o(eO.Jq.VISIT_SHOP), (0, d.closeAllModals)(), null != h ? h() : (0, Z.default)({ guildId: t }));
        }, [t, o, h]),
        _ = s.useCallback(() => {
            o(eO.Jq.GIFT_BUTTON),
                (0, ea.a)(
                    l,
                    { isGift: !0, giftRecipient: r, giftingOrigin: i },
                    { analyticsLocations: [...u, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [l, o, r, i, u]),
        E = (0, R.h)(l.applicationId),
        k = s.useMemo(() => [...u, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [u]),
        N = s.useCallback(() => {
            null != E &&
                (o(eO.Jq.BUY_WITH_ORBS_BUTTON),
                (0, M.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    onComplete: () => {
                        (0, en.j)(), (0, et.n)({ sku: l, application: E, analyticsLocations: k });
                    },
                    analyticsLocations: k,
                }));
        }, [l, E, k, o]);
    return (0, n.jsxs)("div", {
        className: eD.NC,
        children: [
            !f &&
                (0, n.jsx)(m.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: K.intl.string(K.t.IqlPbQ),
                }),
            f
                ? (0, n.jsxs)("div", {
                      className: eD.mr,
                      children: [
                          (0, n.jsx)(x.$, {
                              variant: "primary",
                              onClick: p,
                              text: K.intl.string(K.t.boqtTA),
                              fullWidth: !0,
                          }),
                          (0, n.jsx)(g.D, {
                              className: eD.xP,
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
            f && (0, n.jsx)(eA, { sku: l, location: "product_details_modal", analyticsLocations: k, onCheckout: N }),
        ],
    });
}
function eB(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let s = null != l.labelIconAssetId ? (0, Y.YE)(t, l.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: eD.HI,
        children: [
            null != s && (0, n.jsx)("img", { className: eD.IX, src: s, alt: "" }, s),
            (0, n.jsx)(m.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eH(e) {
    let { onClick: l, children: t, ariaLabel: s } = e;
    return (0, n.jsx)(g.D, { onClick: l, className: eD.jU, "aria-label": s, role: "button", children: t });
}
function eY(e) {
    let { selectedCarouselItem: l, title: t, description: s, applicationId: a, className: r } = e;
    return (0, n.jsxs)("div", {
        className: r,
        children: [
            null != t && (0, n.jsx)(u.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
            (0, n.jsx)(eB, { applicationId: a, selectedCarouselItem: l }),
            null != s && (0, n.jsx)(m.E, { variant: "text-sm/normal", color: "text-subtle", children: s }),
        ],
    });
}
function eF(e) {
    let {
            customNavigateToSocialLayerStorefront: l,
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
    let k = (0, es.A)({ guildId: j }),
        I = (0, c.bG)([G.A], () => G.A.getSkuAssets()),
        R = (0, c.bG)([B.A], () => B.A.isFetchingForSKU(r)),
        y = (0, f.M)((0, S.Ay)()),
        [L, D] = s.useState(!0),
        M = (0, U.A)({ skuId: r, location: "SocialLayerStorefrontProductDetailsModal" }),
        [$, W] = s.useState(0),
        [J, z] = s.useMemo(
            () => ee(M?.tenantMetadata?.socialLayer?.carouselItems ?? [], i, I, { heroWidth: 747 }),
            [M, i, I],
        ),
        [V, X] = s.useState(null),
        [Z, et] = s.useState(!1);
    s.useEffect(() => {
        if (null == V) return;
        let e = new ResizeObserver(() => {
            et(V.scrollHeight > V.clientHeight);
        });
        return e.observe(V), () => e.disconnect();
    }, [V]);
    let en = $ < z.length ? $ : 0,
        ea = J[en] ?? null,
        er = z.length > 1,
        ec = z.some((e) => "video" === e.type);
    (0, P.pE)(),
        (0, N.Ay)(() => {
            H.default.track(eU.HAw.OPEN_MODAL, { location_stack: C, type: eL.Nh, sku_id: r, application_id: i }),
                (0, q.Xw)();
        });
    let eu = s.useCallback(
            (e) => {
                H.default.track(eU.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: h?.sessionId,
                    sku_id: r,
                    guild_id: h?.guildId,
                    cta_type: e,
                    location_stack: C,
                });
            },
            [h, r, C],
        ),
        ed = s.useCallback(
            (e) => {
                W(e), eu(eO.Jq.CAROUSEL_ITEM);
            },
            [eu],
        );
    s.useEffect(() => {
        null == j || null == r || B.A.isFetchingForSKU(r) || (0, q.qf)(j, r);
    }, [j, r]);
    let em = s.useCallback(() => {
            null != M &&
                null != j &&
                (eu(eO.Jq.FORWARD_BUTTON),
                (0, el.d)({
                    sku: M,
                    guildId: j,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: C,
                    analyticsContext: h,
                }));
        }, [M, j, eu, C, h]),
        ex = s.useCallback(() => {
            eu(eO.Jq.WISHLIST_BUTTON);
        }, [eu]),
        eh = s.useCallback(() => {
            D(!L), eu(eO.Jq.MUTE_BUTTON);
        }, [L, eu]),
        eb = Q(),
        eC = M?.tenantMetadata?.socialLayer;
    if (null == M || null == eC) return R ? (0, n.jsx)(p.y, {}) : null;
    let ej = k?.storefront,
        eg = ej?.logoAssetId != null ? (0, Y.YE)(ej.applicationId, ej.logoAssetId, 256) : null,
        ef = ej?.lightThemeLogoAssetId != null ? (0, Y.YE)(ej.applicationId, ej.lightThemeLogoAssetId, 256) : null,
        ep = null;
    ep = y ? (eg ?? ef) : (ef ?? eg);
    let ev = null != M.orbsReward && M.orbsReward > 0;
    return (0, n.jsx)(v.EO, {
        transitionState: t,
        "hide-shadow": !0,
        parentComponent: "SocialLayerStorefrontProductDetailsModal",
        className: eD.CR,
        size: v.rI.DYNAMIC,
        returnRef: a,
        children: (0, n.jsxs)(v.$m, {
            className: eD.jE,
            children: [
                ev &&
                    (0, n.jsx)(eq, {
                        timeRemaining: eb ?? void 0,
                        text: K.intl.format(K.t.d3njXi, { orbCount: M.orbsReward }),
                    }),
                (0, n.jsxs)("div", {
                    className: eD.nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: o()(eD.op, { [eD.uk]: M.exclusive }),
                            children: [
                                (0, n.jsx)("div", {
                                    className: eD.r$,
                                    children:
                                        null != ep
                                            ? (0, n.jsx)("img", { className: eD.wm, src: ep, alt: ej?.title ?? "" })
                                            : null,
                                }),
                                (0, n.jsxs)("div", {
                                    ref: X,
                                    className: eD.zD,
                                    children: [
                                        M.exclusive &&
                                            (0, n.jsx)("div", { className: eD.K3, children: (0, n.jsx)(eo.I, {}) }),
                                        er
                                            ? (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(eM, { sku: M }),
                                                      (0, n.jsx)("div", {
                                                          className: eD._D,
                                                          children: (0, n.jsx)(ei, {
                                                              mediaItems: z,
                                                              labels: J.map((e) => e.label),
                                                              selectedIndex: en,
                                                              onSelectIndex: ed,
                                                          }),
                                                      }),
                                                      (0, n.jsx)(eY, {
                                                          selectedCarouselItem: ea,
                                                          title: ea?.title,
                                                          description: ea?.description,
                                                          applicationId: i,
                                                          className: eD.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, n.jsx)(eY, {
                                                  selectedCarouselItem: ea,
                                                  title: M.name,
                                                  description: M.description,
                                                  applicationId: i,
                                                  className: eD.cP,
                                              }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: o()(eD.Td, { [eD.t7]: Z }),
                                    children: [
                                        (0, n.jsx)(eP, { sku: M }),
                                        (0, n.jsx)(ew, {
                                            sku: M,
                                            guildId: j,
                                            shouldShowShopLink: !u,
                                            giftRecipient: d?.id !== g ? d : void 0,
                                            giftingOrigin: d?.id !== g ? m : void 0,
                                            trackPDPClick: eu,
                                            analyticsLocations: C,
                                            customNavigateToSocialLayerStorefront: l,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: eD.il,
                            children: [
                                (0, n.jsx)(eR, { item: z[en], isMuted: L, alt: ea?.label ?? M.name }),
                                (0, n.jsxs)("div", {
                                    className: eD.V7,
                                    children: [
                                        null != M &&
                                            (0, n.jsx)(ey._, {
                                                sku: M,
                                                isCardHovered: !0,
                                                className: o()(eD.jU, eD.ij),
                                                trackButtonClick: ex,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, n.jsx)(eH, {
                                            onClick: em,
                                            ariaLabel: K.intl.string(K.t.Ej3B3Y),
                                            children: (0, n.jsx)(O.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        ec &&
                                            (0, n.jsx)(eH, {
                                                onClick: eh,
                                                ariaLabel: L ? K.intl.string(K.t.YqAjXy) : K.intl.string(K.t.w4m945),
                                                children: L
                                                    ? (0, n.jsx)(A._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, n.jsx)(_.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, n.jsx)(eH, {
                                            onClick: b,
                                            ariaLabel: K.intl.string(K.t.cpT0Cq),
                                            children: (0, n.jsx)(E.d, { size: "refresh_sm", color: "currentColor" }),
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
function eq(e) {
    let { timeRemaining: l, text: t } = e;
    return (0, n.jsxs)("div", {
        className: eD.pP,
        children: [
            (0, n.jsxs)("div", {
                className: eD.Wi,
                children: [
                    (0, n.jsx)(h.C, { size: "refresh_sm", color: "currentColor" }),
                    (0, n.jsx)(m.E, { variant: "text-sm/semibold", color: "currentColor", children: t }),
                ],
            }),
            null != l && (0, n.jsx)(m.E, { variant: "text-sm/medium", color: "currentColor", children: l }),
        ],
    });
}
var eG = t(615300),
    e$ = t(456412),
    eW = t(133296),
    eJ = t(848752),
    ez = t(452282),
    eV = t(625494),
    eX = t(55607);
let eK = (e) => (0, eN.$o)({ ...e, className: eX.tN, mediaPlayerClassName: eX.yf }),
    eQ = (e) => (0, n.jsx)(ek.Ay, { ...e });
function eZ(e) {
    let l = "videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src,
        [t, n] = (0, y.rh)(l, "#000000"),
        a = s.useMemo(() => {
            let e = r()(t).darken(1);
            return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
        }, [t]);
    return null != l && "#000000" !== t ? a : void 0;
}
function e0(e) {
    let { item: l, onPlay: t, onEnded: s, onClick: a, playable: r, isMuted: i } = e,
        o = eZ(l),
        c = (0, n.jsx)(
            eE.rr,
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
                className: eX.Ki,
                volume: 1,
                autoMute: i,
                autoPlay: r,
                renderVideoComponent: eK,
                renderImageComponent: eQ,
                renderLinkComponent: eN.bU,
            },
            i ? "player-muted" : "player-unmuted",
        ),
        u = { background: o };
    return r
        ? (0, n.jsx)("div", { className: eX.AU, style: u, children: c })
        : (0, n.jsx)(g.D, { className: eX.AU, onClick: a, style: u, children: c });
}
function e1(e) {
    let { item: l, setHasInteracted: t, onSetItem: s, isCurrentItem: a, itemIndex: r } = e,
        i = { background: eZ(l) };
    return a
        ? (0, n.jsx)(g.D, {
              onClick: () => t(!0),
              className: eX.AU,
              style: i,
              children: (0, n.jsx)("img", { src: l.src, alt: "", className: eX.NP }),
          })
        : (0, n.jsx)(g.D, {
              onClick: () => s(r),
              className: eX.AU,
              style: i,
              children: (0, n.jsx)("img", { alt: "", className: eX.tv, src: l.src, draggable: !1 }),
          });
}
let e4 = (0, e$.A)((e) => {
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
        [E, k] = (0, s.useState)(!1),
        [N, S] = (0, s.useState)(!1),
        I = (0, s.useCallback)(
            (e, t) => {
                let n = l[e]?.backgroundSrc,
                    s = t.interpolate({ inputRange: [0, 1], outputRange: [1, 0], extrapolate: eG.A.Extrapolate.CLAMP });
                return {
                    opacity: t.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.3, 1],
                        extrapolate: eG.A.Extrapolate.CLAMP,
                    }),
                    filter: eG.A.template`grayscale(${s})`,
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
            u?.(eO.Jq.CAROUSEL_NEXT), T(C.current + 1);
        }, [T, u]),
        O = (0, s.useCallback)(() => {
            u?.(eO.Jq.CAROUSEL_PREV), T(C.current - 1);
        }, [T, u]),
        L = (0, s.useCallback)((e) => {
            v(!0), _(!e);
        }, []),
        U = (0, s.useCallback)(() => {
            A || R();
        }, [A, R]),
        D = (0, s.useCallback)((e) => {
            let l = C.current;
            e < l ? k(!0) : e > l && S(!0);
        }, []),
        M = (0, s.useCallback)(() => {
            k(!1), S(!1);
        }, []),
        P = (0, s.useCallback)(
            (e, l, t) =>
                (0, n.jsx)(e1, {
                    item: e,
                    itemIndex: l,
                    isCurrentItem: t,
                    onSetItem: (e) => {
                        u?.(eO.Jq.CAROUSEL_ITEM), T(e);
                    },
                    setHasInteracted: _,
                }),
            [T, u],
        ),
        w = (0, s.useCallback)(
            (e, t, s) => {
                let a = t === (0, ez.U3)(h, l.length);
                return (0, n.jsx)(eG.A.div, {
                    className: o()(eX.AS, { [eX.Xt]: a }),
                    style: null != s ? I(t, s) : null,
                    onMouseEnter: a ? null : () => D(t),
                    onMouseLeave: a ? null : M,
                    children:
                        "video" === e.type
                            ? (0, n.jsx)(
                                  e0,
                                  {
                                      item: e,
                                      onPlay: L,
                                      onEnded: U,
                                      playable: a,
                                      isMuted: c,
                                      onClick: () => {
                                          u?.(eO.Jq.CAROUSEL_ITEM), T(t);
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
                className: eX.Dk,
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
                      className: eX.HY,
                      children: [
                          e,
                          (0, n.jsx)(eJ.Q8, { onClick: O, className: o()(eX.UE, { [eX.h_]: E }) }),
                          (0, n.jsx)(eJ.Oj, { onClick: y, className: o()(eX.UE, { [eX.h_]: N }) }),
                      ],
                  });
        }, [l, w, h, g, O, y, E, N]),
        H = (0, s.useCallback)(
            (e, l) => {
                let t = h === l;
                return (0, n.jsx)(
                    "div",
                    {
                        className: o()(eX.Yw, t ? eX.sM : eX.N7),
                        children: (0, n.jsx)("img", {
                            alt: "",
                            className: eX.Pr,
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
            eV._.subscribe(eU.jej.CAROUSEL_PREV, O),
            eV._.subscribe(eU.jej.CAROUSEL_NEXT, y),
            () => {
                eV._.unsubscribe(eU.jej.CAROUSEL_PREV, O), eV._.unsubscribe(eU.jej.CAROUSEL_NEXT, y);
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
            u?.(eO.Jq.CAROUSEL_ITEM), T(e);
        },
        [T, u],
    );
    return (0, n.jsxs)(eW.A, {
        pauseOnHover: !0,
        onInterval: R,
        interval: r,
        className: t,
        disable: p || A || a,
        children: [
            B(),
            (0, n.jsx)("div", {
                className: eX.X$,
                children: (0, n.jsx)(eJ.Ay, {
                    renderItem: H,
                    scrollToPadding: 40,
                    items: l,
                    selectedIndex: h,
                    onSetItem: Y,
                    paginationContainerClass: eX.XG,
                    align: eJ.Ay.Align.CENTER,
                }),
            }),
        ],
    });
});
var e3 = t(199138);
function e2(e) {
    let { sku: l } = e,
        { normalPrice: t, discountedPrice: s, discountPercent: a } = (0, L.CD)({ sku: l });
    return null == t
        ? null
        : null != a && null != s
          ? (0, n.jsxs)("div", {
                className: e3.TS,
                children: [
                    (0, n.jsx)(u.D, {
                        className: e3.of,
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
function e7(e) {
    let {
            sku: l,
            guildId: t,
            shouldShowShopLink: a,
            giftRecipient: r,
            giftingOrigin: i,
            trackPDPClick: o,
            analyticsLocations: g,
            customNavigateToSocialLayerStorefront: f,
        } = e,
        p = l?.id,
        v = (0, c.bG)([G.A], () => (null != p ? G.A.getNormalizedSKUEligibility(p) : void 0), [p]),
        A = Q(),
        _ = J({ location: "product_details_modal" }),
        E = (0, L.JL)({ sku: l });
    (0, D.W)({ disableFetch: !_ });
    let k = (0, R.h)(l?.applicationId),
        N = s.useCallback(() => {
            null != l &&
                null != t &&
                (o(eO.Jq.BUY_BUTTON),
                (0, ea.a)(
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
                (o(eO.Jq.VISIT_SHOP), (0, d.closeAllModals)(), null != f ? f() : (0, Z.default)({ guildId: t }));
        }, [t, o, f]),
        y = s.useCallback(() => {
            null != l &&
                (o(eO.Jq.GIFT_BUTTON),
                (0, ea.a)(
                    l,
                    { isGift: !0, giftRecipient: r, giftingOrigin: i },
                    { analyticsLocations: [...g, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                ));
        }, [l, o, r, i, g]),
        O = s.useCallback(() => {
            if (null == l || null == k || !_) return;
            o(eO.Jq.BUY_WITH_ORBS_BUTTON);
            let e = [...g, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON];
            (0, M.B4)({
                skuId: l.id,
                applicationId: l.applicationId,
                onComplete: () => {
                    (0, en.j)(), (0, et.n)({ sku: l, application: k, analyticsLocations: e });
                },
                analyticsLocations: e,
            });
        }, [l, o, g, k, _]);
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: e3.wt,
              children: [
                  l.exclusive && (0, n.jsx)("div", { className: e3.K3, children: (0, n.jsx)(eo.I, {}) }),
                  (0, n.jsxs)("div", {
                      className: e3.AX,
                      children: [
                          (0, n.jsx)(u.D, { variant: "heading-xl/bold", color: "text-strong", children: l.name }),
                          (0, n.jsx)(m.E, { variant: "text-sm/medium", color: "text-subtle", children: l.description }),
                      ],
                  }),
                  (0, n.jsxs)("div", {
                      className: e3.sj,
                      children: [
                          (0, n.jsx)(ec.V, {}),
                          (0, n.jsx)(e2, { sku: l }),
                          null != l.orbsReward &&
                              l.orbsReward > 0 &&
                              (0, n.jsx)(ll, {
                                  timeRemaining: A ?? void 0,
                                  text: K.intl.format(K.t.d3njXi, { orbCount: l.orbsReward }),
                              }),
                      ],
                  }),
                  (0, n.jsxs)("div", {
                      className: e3.NC,
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
                              null != E &&
                              (0, n.jsx)(x.$, {
                                  icon: h.C,
                                  variant: "secondary",
                                  onClick: O,
                                  text: K.intl.format(K.t.lOtBOI, {
                                      orbPrice: E.amount,
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
        let [e, n] = ee(l?.tenantMetadata?.socialLayer?.carouselItems ?? [], t, a, { heroWidth: 747 });
        u(e), m(n);
    }, [l, a, t]),
    0 === d.length)
        ? null
        : (0, n.jsx)(e4, { className: e3.Dk, items: d, onItemChange: x, isMuted: i, onTrackClick: o });
}
function e9(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let s = null != l.labelIconAssetId ? (0, Y.YE)(t, l.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: e3.HI,
        children: [
            null != s && (0, n.jsx)("img", { className: e3.IX, src: s, alt: l.label }, s),
            (0, n.jsx)(m.E, { variant: "text-xs/medium", color: "text-strong", children: l.label }),
        ],
    });
}
function e6(e) {
    let { onClick: l, children: t, ariaLabel: s } = e;
    return (0, n.jsx)(g.D, { onClick: l, className: e3.jU, "aria-label": s, role: "button", children: t });
}
function e8(e) {
    return !(function (e) {
        let { location: l } = e;
        return z.useConfig({ location: l }).enabled;
    })({ location: "product_details_modal" })
        ? (0, n.jsx)(le, { ...e })
        : (0, n.jsx)(eF, { ...e });
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
            customNavigateToSocialLayerStorefront: C,
        } = e,
        { analyticsLocations: j } = (0, T.Ay)(x ?? []),
        { guildId: g } = (0, F.nG)(i),
        k = (0, c.bG)([w.default], () => w.default.getId());
    s.useEffect(() => {
        null != g && null != a && (0, q.iR)(g, a);
    }, [g, a]);
    let I = (0, c.bG)([G.A], () => G.A.getStorefrontMetadata(i), [i]),
        R = (0, c.bG)([G.A], () => G.A.getSkuAssets()),
        L = (0, c.bG)([B.A], () => B.A.isFetchingForSKU(a)),
        D = (0, f.M)((0, S.Ay)()),
        [M, $] = s.useState(!0),
        W = (0, U.A)({ skuId: a, location: "SocialLayerStorefrontProductDetailsModal" }),
        [J, z] = s.useState(null),
        V = (function (e, l) {
            let t = l?.labelIconAssetId != null ? (0, Y.YE)(e, l?.labelIconAssetId) : null,
                [n, a] = (0, y.rh)(t, "#000000"),
                i = s.useMemo(() => {
                    let e = r()(n).darken(1);
                    return `radial-gradient(181.07% 122.33% at -20.89% -23.8%, ${e.alpha(0.25).hex()} 0%, transparent 100%)`;
                }, [n]);
            return null != t && "#000000" !== n ? i : void 0;
        })(i, J);
    (0, P.pE)(),
        (0, N.Ay)(() => {
            H.default.track(eU.HAw.OPEN_MODAL, { location_stack: j, type: eL.Nh, sku_id: a, application_id: i }),
                (0, q.Xw)();
        });
    let X = s.useCallback(
        (e) => {
            H.default.track(eU.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
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
            null != W &&
                null != g &&
                (X(eO.Jq.FORWARD_BUTTON),
                (0, el.d)({
                    sku: W,
                    guildId: g,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: j,
                    analyticsContext: h,
                }));
        }, [W, g, X, j, h]),
        Z = s.useCallback(() => {
            X(eO.Jq.WISHLIST_BUTTON);
        }, [X]),
        ee = s.useCallback(() => {
            $(!M), X(eO.Jq.MUTE_BUTTON);
        }, [M, X]);
    if (null == W?.tenantMetadata?.socialLayer) return L ? (0, n.jsx)(p.y, {}) : null;
    let et = I?.logoAssetId != null ? (0, Y.YE)(i, I.logoAssetId, 256) : null,
        en = I?.lightThemeLogoAssetId != null ? (0, Y.YE)(i, I.lightThemeLogoAssetId, 256) : null,
        es = null;
    return (
        (es = D ? (et ?? en) : (en ?? et)),
        (0, n.jsx)(v.EO, {
            transitionState: l,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: e3.CR,
            size: v.rI.DYNAMIC,
            returnRef: t,
            children: (0, n.jsxs)(v.$m, {
                className: e3.jE,
                children: [
                    (0, n.jsxs)("div", {
                        className: e3.op,
                        style: { background: V },
                        children: [
                            (0, n.jsx)("div", {
                                className: e3.r$,
                                children: null != es ? (0, n.jsx)("img", { className: e3.wm, src: es, alt: "" }) : null,
                            }),
                            (0, n.jsx)(e9, { applicationId: i, selectedCarouselItem: J }),
                            (0, n.jsx)(e7, {
                                sku: W,
                                guildId: g,
                                shouldShowShopLink: !u,
                                giftRecipient: d?.id !== k ? d : void 0,
                                giftingOrigin: d?.id !== k ? m : void 0,
                                trackPDPClick: X,
                                analyticsLocations: j,
                                customNavigateToSocialLayerStorefront: C,
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: e3.Cf,
                        children: [
                            (0, n.jsx)(e5, {
                                sku: W,
                                applicationId: i,
                                assets: R,
                                onSelectedCarouselItemChange: z,
                                isMuted: M,
                                trackPDPClick: X,
                            }),
                            (0, n.jsxs)("div", {
                                className: e3.V7,
                                children: [
                                    null != W &&
                                        (0, n.jsx)(ey._, {
                                            sku: W,
                                            isCardHovered: !0,
                                            className: o()(e3.jU, e3.ij),
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
                                        onClick: ee,
                                        ariaLabel: M ? K.intl.string(K.t.YqAjXy) : K.intl.string(K.t.w4m945),
                                        children: M
                                            ? (0, n.jsx)(A._, { size: "refresh_sm", color: "currentColor" })
                                            : (0, n.jsx)(_.H, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, n.jsx)(e6, {
                                        onClick: b,
                                        ariaLabel: K.intl.string(K.t.cpT0Cq),
                                        children: (0, n.jsx)(E.d, { size: "refresh_sm", color: "currentColor" }),
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
    return (0, n.jsx)(k.A, {
        className: e3.qw,
        Icon: h.C,
        children: (0, n.jsxs)("div", {
            className: e3.Yu,
            children: [
                (0, n.jsxs)(m.E, {
                    variant: "text-xs/bold",
                    color: "currentColor",
                    children: [K.intl.string(K.t.yYEZGi), null != l && ` (${l})`],
                }),
                (0, n.jsx)("div", {
                    className: e3.fb,
                    children: (0, n.jsx)(m.E, { variant: "text-xs/medium", color: "currentColor", children: t }),
                }),
            ],
        }),
    });
}
