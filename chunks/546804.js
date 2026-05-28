t.d(l, { default: () => eM });
var n = t(627968),
    s = t(64700),
    r = t(503698),
    a = t.n(r),
    i = t(17928),
    o = t(534514),
    c = t(834730),
    u = t(318254),
    d = t(192308),
    m = t(821609),
    x = t(939249),
    h = t(597770),
    b = t(34188),
    f = t(366010),
    g = t(289873),
    p = t(935462),
    v = t(358618),
    C = t(983851),
    j = t(972213),
    E = t(964486),
    N = t(736653),
    _ = t(793574),
    A = t(688810),
    I = t(429913),
    S = t(427209),
    T = t(723090),
    k = t(801228),
    R = t(652165),
    O = t(561794),
    y = t(495544),
    L = t(328968),
    D = t(174459),
    M = t(371794),
    U = t(871123),
    w = t(733391),
    P = t(832163),
    H = t(429635),
    B = t(989349),
    Y = t.n(B),
    F = t(375708),
    q = t(44724);
t(321073);
var G = t(345938),
    V = t(510022),
    z = t(317560),
    W = t(533406),
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
                      children: F.intl.string(F.t.U7DAV9),
                  }),
                  (0, n.jsx)("div", {
                      className: $.Vg,
                      children: l.map((e, l) =>
                          (0, n.jsx)(
                              x.D,
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
    X = t(971146),
    Q = t(696292),
    Z = t(554146),
    ee = t(43105),
    el = t(403581),
    et = t(131607),
    en = t(532794),
    es = t(617986),
    er = t(309954),
    ea = t(287809);
let ei = (0, t(945810).mj)({
    name: "2026-04-slayer-storefront-orbs",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var eo = t(49999),
    ec = t(788868),
    eu = t(530066),
    ed = t(942460);
function em(e) {
    let { sku: l, location: t, analyticsLocations: r, onCheckout: a } = e,
        o = (0, T.JL)({ sku: l }),
        c = (function (e) {
            let { orbPriceAmount: l, location: t } = e,
                n = (function (e) {
                    let { location: l } = e;
                    return ei.useConfig({ location: l }).enabled;
                })({ location: t }),
                s = (0, i.bG)([ea.default], () => ea.default.getCurrentUser()?.hasPaidTier2Subscription() ?? !1),
                { balance: r } = (0, er.W)({ disableFetch: !n || null == l || !s });
            return n && null != l
                ? s
                    ? null == r || r < l
                        ? "NOT_ENOUGH_ORBS"
                        : "CAN_CHECKOUT"
                    : "NEEDS_NITRO"
                : "HIDDEN";
        })({ orbPriceAmount: o?.amount, location: t }),
        d = s.useRef(null),
        [x, h] = (0, et.kn)("NEEDS_NITRO" === c ? [Z.M.SLAYER_STOREFRONT_ORBS_PURCHASE_COACHMARK] : []),
        b = x === Z.M.SLAYER_STOREFRONT_ORBS_PURCHASE_COACHMARK,
        {
            isOpen: f,
            onMouseEnter: g,
            onMouseLeave: p,
            popoverRef: v,
            close: C,
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
        })({ forcedOpen: b }),
        j = s.useMemo(
            () =>
                "NEEDS_NITRO" === c
                    ? {
                          title: F.intl.string(eu.default["1OBZN2"]),
                          body: F.intl.string(eu.default.FDywIe),
                          ctaText: F.intl.string(eu.default["Mt/ukE"]),
                          ctaIcon: el.t,
                          ctaVariant: "expressive",
                          onCtaClick: () => {
                              b && h(eo.i.TAKE_ACTION),
                                  C(),
                                  (0, en.A)({
                                      subscriptionTier: ec.pe.TIER_2,
                                      analyticsLocations: r,
                                      applicationId: l.applicationId,
                                  });
                          },
                      }
                    : "NOT_ENOUGH_ORBS" === c
                      ? {
                            title: F.intl.string(eu.default.Xo6oAV),
                            body: F.intl.string(eu.default.fkdIdV),
                            ctaText: F.intl.string(eu.default.d525FQ),
                            ctaIcon: u.C,
                            ctaVariant: "primary",
                            onCtaClick: () => {
                                C(), (0, es.navigateToQuestHome)({ fromContent: Q.u.ORBS_BALANCE_MENU });
                            },
                        }
                      : null,
            [c, b, h, C, r, l.applicationId],
        ),
        E = null != j && f,
        N = s.useCallback(() => {
            b && h(eo.i.USER_DISMISS), C();
        }, [b, h, C]);
    return "HIDDEN" === c || null == o
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      ref: d,
                      onMouseEnter: g,
                      onMouseLeave: p,
                      children: (0, n.jsx)(m.$, {
                          onClick: a,
                          disabled: null != j,
                          variant: "secondary",
                          text: (0, n.jsx)("span", {
                              className: ed.Y,
                              children: F.intl.format(F.t.lOtBOI, {
                                  orbPrice: o.amount,
                                  orbIconHook: () =>
                                      (0, n.jsx)(u.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                          fullWidth: !0,
                      }),
                  }),
                  null != j &&
                      (0, n.jsx)(ee.A, {
                          targetElementRef: d,
                          popoverRef: v,
                          shouldShow: E,
                          position: "right",
                          alignmentStrategy: "edge",
                          align: "bottom",
                          caretConfig: { align: "end" },
                          size: "md",
                          title: j.title,
                          body: j.body,
                          actions: [{ text: j.ctaText, variant: j.ctaVariant, onClick: j.onCtaClick, icon: j.ctaIcon }],
                          onRequestClose: N,
                      }),
              ],
          });
}
var ex = t(310784),
    eh = t.n(ex),
    eb = t(775602),
    ef = t(654107),
    eg = t(392056),
    ep = t(619517),
    ev = t(34337),
    eC = t(172079);
let ej = (e) => (0, ev.$o)({ ...e, className: eC.tN, mediaPlayerClassName: eC.yf }),
    eE = (e) => (0, n.jsx)(ep.Ay, { ...e });
function eN(e) {
    let { item: l, isMuted: t, className: r, alt: a = "" } = e,
        o = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, ef.rh)(l, "#000000");
            return s.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = eh()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        c = (0, i.bG)([eb.A], () => eb.A.useReducedMotion),
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
              className: r ?? eC.kL,
              children: (0, n.jsx)(
                  "div",
                  {
                      className: `${eC.h4} ${eC.nR}`,
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
                              className: eC.Ki,
                              volume: 1,
                              autoMute: t,
                              autoPlay: !0,
                              renderVideoComponent: ej,
                              renderImageComponent: eE,
                              renderLinkComponent: ev.bU,
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
                  style: b,
                  children: [
                      (0, n.jsx)("img", { src: l.src, alt: a, className: eC.Sl }, l.src),
                      null != u && !c && (0, n.jsx)("img", { src: u, alt: "", className: eC.Ve, onAnimationEnd: h }, u),
                  ],
              }),
          });
}
var e_ = t(743693),
    eA = t(995393),
    eI = t(188275),
    eS = t(652215),
    eT = t(199138);
function ek(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: eT.AX,
              children: [
                  (0, n.jsx)(o.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function eR(e) {
    let { sku: l } = e,
        { normalPrice: t, discountedPrice: s, discountPercent: r } = (0, T.CD)({ sku: l });
    if (null == t) return null;
    let a = null != l.orbsReward && l.orbsReward > 0;
    return (0, n.jsxs)("div", {
        className: eT.sj,
        children: [
            (0, n.jsx)(X.V, { textColor: "text-subtle" }),
            (0, n.jsxs)("div", {
                className: eT.hO,
                children: [
                    null != r && null != s
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(c.E, { variant: "text-md/medium", className: eT.Jb, children: t }),
                                  (0, n.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: s }),
                                  (0, n.jsx)(c.E, { variant: "text-md/bold", className: eT.Fi, children: r }),
                              ],
                          })
                        : (0, n.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                    a &&
                        (0, n.jsx)("div", {
                            className: eT.pt,
                            children: (0, n.jsx)(c.E, {
                                variant: "text-sm/semibold",
                                color: "currentColor",
                                children: F.intl.format(F.t.GiVd2Q, {
                                    orbCount: l.orbsReward,
                                    orbIconHook: () =>
                                        (0, n.jsx)(u.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                }),
                            }),
                        }),
                ],
            }),
        ],
    });
}
function eO(e) {
    let {
            sku: l,
            guildId: t,
            shouldShowShopLink: r,
            giftRecipient: a,
            giftingOrigin: o,
            trackPDPClick: u,
            analyticsLocations: f,
            customNavigateToSocialLayerStorefront: g,
        } = e,
        p = l.id,
        v = (0, i.bG)([P.A], () => P.A.getNormalizedSKUEligibility(p), [p]),
        C = s.useCallback(() => {
            null != t &&
                (u(eA.Jq.BUY_BUTTON),
                (0, W.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...f, _.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                ));
        }, [l, u, t, f]),
        j = s.useCallback(() => {
            null != t && (0, q.X)({ guildId: t });
        }, [t]),
        E = s.useCallback(() => {
            null != t &&
                (u(eA.Jq.VISIT_SHOP), (0, d.closeAllModals)(), null != g ? g() : (0, q.default)({ guildId: t }));
        }, [t, u, g]),
        N = s.useCallback(() => {
            u(eA.Jq.GIFT_BUTTON),
                (0, W.a)(
                    l,
                    { isGift: !0, giftRecipient: a, giftingOrigin: o },
                    { analyticsLocations: [...f, _.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [l, u, a, o, f]),
        A = (0, I.h)(l.applicationId),
        S = s.useMemo(() => [...f, _.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [f]),
        T = s.useCallback(() => {
            null != A &&
                (u(eA.Jq.BUY_WITH_ORBS_BUTTON),
                (0, R.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    onComplete: () => {
                        (0, z.j)(), (0, V.n)({ sku: l, application: A, analyticsLocations: S });
                    },
                    analyticsLocations: S,
                }));
        }, [l, A, S, u]);
    return (0, n.jsxs)("div", {
        className: eT.NC,
        children: [
            !v &&
                (0, n.jsx)(c.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: F.intl.string(F.t.IqlPbQ),
                }),
            v
                ? (0, n.jsxs)("div", {
                      className: eT.mr,
                      children: [
                          (0, n.jsx)(m.$, {
                              variant: "primary",
                              onClick: C,
                              text: F.intl.string(F.t.boqtTA),
                              fullWidth: !0,
                          }),
                          (0, n.jsx)(x.D, {
                              className: eT.xP,
                              onClick: N,
                              "aria-label": F.intl.string(F.t.QAZA5f),
                              role: "button",
                              children: (0, n.jsx)(h.o, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  })
                : (0, n.jsx)(m.$, {
                      icon: h.o,
                      variant: "secondary",
                      onClick: N,
                      text: F.intl.string(F.t.QAZA5f),
                      fullWidth: !0,
                  }),
            r &&
                (0, n.jsx)(m.$, {
                    icon: b.U,
                    variant: "secondary",
                    onMouseDown: j,
                    onClick: E,
                    text: F.intl.string(F.t["2QW9nR"]),
                    fullWidth: !0,
                }),
            v && (0, n.jsx)(em, { sku: l, location: "product_details_modal", analyticsLocations: S, onCheckout: T }),
        ],
    });
}
function ey(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let s = null != l.labelIconAssetId ? (0, M.YE)(t, l.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: eT.HI,
        children: [
            null != s && (0, n.jsx)("img", { className: eT.IX, src: s, alt: "" }, s),
            (0, n.jsx)(c.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eL(e) {
    let { onClick: l, children: t, ariaLabel: s } = e;
    return (0, n.jsx)(x.D, { onClick: l, className: eT.jU, "aria-label": s, role: "button", children: t });
}
function eD(e) {
    let { selectedCarouselItem: l, title: t, description: s, applicationId: r, className: a } = e;
    return (0, n.jsxs)("div", {
        className: a,
        children: [
            null != t && (0, n.jsx)(o.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
            (0, n.jsx)(ey, { applicationId: r, selectedCarouselItem: l }),
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
            returnRef: c,
            skuId: u,
            applicationId: d,
            isStorefront: m,
            giftRecipient: x,
            giftingOrigin: h,
            analyticsLocations: b,
            analyticsContext: _,
            onClose: I,
        } = e,
        { analyticsLocations: T } = (0, A.Ay)(b ?? []),
        { guildId: R } = (0, U.nG)(d),
        B = (0, i.bG)([y.default], () => y.default.getId());
    s.useEffect(() => {
        null != R && null != u && (0, w.iR)(R, u);
    }, [R, u]);
    let q = (0, H.A)({ guildId: R }),
        V = (0, i.bG)([P.A], () => P.A.getSkuAssets()),
        z = (0, i.bG)([L.A], () => L.A.isFetchingForSKU(u)),
        W = (0, f.M)((0, N.Ay)()),
        [$, X] = s.useState(!0),
        Q = (0, k.A)({ skuId: u, location: "SocialLayerStorefrontProductDetailsModal" }),
        [Z, ee] = s.useState(0),
        [el, et] = s.useMemo(
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
                                      src: (0, M.YE)(l, e, s, "mp4"),
                                      videoThumbnailSrc: (0, M.YE)(l, e, s, "webp"),
                                      thumbnailSrc:
                                          null != n.thumbnailAssetId
                                              ? (0, M.YE)(l, n.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != n.backgroundAssetId
                                              ? (0, M.YE)(l, n.backgroundAssetId, s, U.pV)
                                              : void 0,
                                  })
                                : a.push({
                                      type: "image",
                                      src: (0, M.YE)(l, e, s, "webp"),
                                      thumbnailSrc:
                                          null != n.thumbnailAssetId
                                              ? (0, M.YE)(l, n.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != n.backgroundAssetId
                                              ? (0, M.YE)(l, n.backgroundAssetId, s, U.pV)
                                              : void 0,
                                  }));
                    }
                    return [r, a];
                })(Q?.tenantMetadata?.socialLayer?.carouselItems ?? [], d, V, { heroWidth: 747 }),
            [Q, d, V],
        ),
        [en, es] = s.useState(null),
        [er, ea] = s.useState(!1);
    s.useEffect(() => {
        if (null == en) return;
        let e = new ResizeObserver(() => {
            ea(en.scrollHeight > en.clientHeight);
        });
        return e.observe(en), () => e.disconnect();
    }, [en]);
    let ei = Z < et.length ? Z : 0,
        eo = el[ei] ?? null,
        ec = et.length > 1,
        eu = et.some((e) => "video" === e.type);
    (0, O.pE)(),
        (0, E.Ay)(() => {
            D.default.track(eS.HAw.OPEN_MODAL, { location_stack: T, type: eI.Nh, sku_id: u, application_id: d }),
                (0, w.Xw)();
        });
    let ed = s.useCallback(
            (e) => {
                D.default.track(eS.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: _?.sessionId,
                    sku_id: u,
                    guild_id: _?.guildId,
                    cta_type: e,
                    location_stack: T,
                });
            },
            [_, u, T],
        ),
        em = s.useCallback(
            (e) => {
                ee(e), ed(eA.Jq.CAROUSEL_ITEM);
            },
            [ed],
        );
    s.useEffect(() => {
        null == R || null == u || L.A.isFetchingForSKU(u) || (0, w.qf)(R, u);
    }, [R, u]);
    let ex = s.useCallback(() => {
            null != Q &&
                null != R &&
                (ed(eA.Jq.FORWARD_BUTTON),
                (0, G.d)({
                    sku: Q,
                    guildId: R,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: T,
                    analyticsContext: _,
                }));
        }, [Q, R, ed, T, _]),
        eh = s.useCallback(() => {
            ed(eA.Jq.WISHLIST_BUTTON);
        }, [ed]),
        eb = s.useCallback(() => {
            X(!$), ed(eA.Jq.MUTE_BUTTON);
        }, [$, ed]),
        ef =
            ((l = (0, i.bG)([P.A], () => P.A.getConfig()?.promotionEndDatetime, [])),
            (t = s.useMemo(() => {
                if (null == l) return null;
                let e = Y()(),
                    t = Y()(l).diff(e, "days");
                return t <= 0 ? null : t;
            }, [l])),
            s.useMemo(
                () => (null == t ? null : F.intl.formatToPlainString(F.t.BXpdIg, { days: Math.max(t, 1) })),
                [t],
            )),
        eg = Q?.tenantMetadata?.socialLayer;
    if (null == Q || null == eg) return z ? (0, n.jsx)(g.y, {}) : null;
    let ep = q?.storefront,
        ev = ep?.logoAssetId != null ? (0, M.YE)(ep.applicationId, ep.logoAssetId, 256) : null,
        eC = ep?.lightThemeLogoAssetId != null ? (0, M.YE)(ep.applicationId, ep.lightThemeLogoAssetId, 256) : null,
        ej = null;
    ej = W ? (ev ?? eC) : (eC ?? ev);
    let eE = null != Q.orbsReward && Q.orbsReward > 0;
    return (0, n.jsx)(p.EO, {
        transitionState: o,
        "hide-shadow": !0,
        parentComponent: "SocialLayerStorefrontProductDetailsModal",
        className: eT.CR,
        size: p.rI.DYNAMIC,
        returnRef: c,
        children: (0, n.jsxs)(p.$m, {
            className: eT.jE,
            children: [
                eE &&
                    (0, n.jsx)(eU, {
                        timeRemaining: ef ?? void 0,
                        text: F.intl.format(F.t.d3njXi, { orbCount: Q.orbsReward }),
                    }),
                (0, n.jsxs)("div", {
                    className: eT.nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: a()(eT.op, { [eT.uk]: Q.exclusive }),
                            children: [
                                (0, n.jsx)("div", {
                                    className: eT.r$,
                                    children:
                                        null != ej
                                            ? (0, n.jsx)("img", { className: eT.wm, src: ej, alt: ep?.title ?? "" })
                                            : null,
                                }),
                                (0, n.jsxs)("div", {
                                    ref: es,
                                    className: eT.zD,
                                    children: [
                                        Q.exclusive &&
                                            (0, n.jsx)("div", { className: eT.K3, children: (0, n.jsx)(K.I, {}) }),
                                        ec
                                            ? (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(ek, { sku: Q }),
                                                      (0, n.jsx)("div", {
                                                          className: eT._D,
                                                          children: (0, n.jsx)(J, {
                                                              mediaItems: et,
                                                              labels: el.map((e) => e.label),
                                                              selectedIndex: ei,
                                                              onSelectIndex: em,
                                                          }),
                                                      }),
                                                      (0, n.jsx)(eD, {
                                                          selectedCarouselItem: eo,
                                                          title: eo?.title,
                                                          description: eo?.description,
                                                          applicationId: d,
                                                          className: eT.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, n.jsx)(eD, {
                                                  selectedCarouselItem: eo,
                                                  title: Q.name,
                                                  description: Q.description,
                                                  applicationId: d,
                                                  className: eT.cP,
                                              }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: a()(eT.Td, { [eT.t7]: er }),
                                    children: [
                                        (0, n.jsx)(eR, { sku: Q }),
                                        (0, n.jsx)(eO, {
                                            sku: Q,
                                            guildId: R,
                                            shouldShowShopLink: !m,
                                            giftRecipient: x?.id !== B ? x : void 0,
                                            giftingOrigin: x?.id !== B ? h : void 0,
                                            trackPDPClick: ed,
                                            analyticsLocations: T,
                                            customNavigateToSocialLayerStorefront: r,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: eT.il,
                            children: [
                                (0, n.jsx)(eN, { item: et[ei], isMuted: $, alt: eo?.label ?? Q.name }),
                                (0, n.jsxs)("div", {
                                    className: eT.V7,
                                    children: [
                                        null != Q &&
                                            (0, n.jsx)(e_._, {
                                                sku: Q,
                                                isCardHovered: !0,
                                                className: a()(eT.jU, eT.ij),
                                                trackButtonClick: eh,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, n.jsx)(eL, {
                                            onClick: ex,
                                            ariaLabel: F.intl.string(F.t.Ej3B3Y),
                                            children: (0, n.jsx)(S.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        eu &&
                                            (0, n.jsx)(eL, {
                                                onClick: eb,
                                                ariaLabel: $ ? F.intl.string(F.t.YqAjXy) : F.intl.string(F.t.w4m945),
                                                children: $
                                                    ? (0, n.jsx)(v._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, n.jsx)(C.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, n.jsx)(eL, {
                                            onClick: I,
                                            ariaLabel: F.intl.string(F.t.cpT0Cq),
                                            children: (0, n.jsx)(j.d, { size: "refresh_sm", color: "currentColor" }),
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
function eU(e) {
    let { timeRemaining: l, text: t } = e;
    return (0, n.jsxs)("div", {
        className: eT.pP,
        children: [
            (0, n.jsxs)("div", {
                className: eT.Wi,
                children: [
                    (0, n.jsx)(u.C, { size: "refresh_sm", color: "currentColor" }),
                    (0, n.jsx)(c.E, { variant: "text-sm/semibold", color: "currentColor", children: t }),
                ],
            }),
            null != l && (0, n.jsx)(c.E, { variant: "text-sm/medium", color: "currentColor", children: l }),
        ],
    });
}
