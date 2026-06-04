t.d(l, { default: () => eM });
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
    C = t(289873),
    g = t(935462),
    v = t(34188),
    f = t(358618),
    j = t(983851),
    p = t(972213),
    E = t(964486),
    _ = t(736653),
    N = t(793574),
    A = t(688810),
    I = t(429913),
    T = t(427209),
    k = t(723090),
    S = t(801228),
    R = t(652165),
    O = t(561794),
    y = t(495544),
    L = t(328968),
    D = t(174459),
    M = t(371794),
    U = t(871123),
    w = t(733391),
    H = t(832163),
    P = t(429635),
    B = t(989349),
    Y = t.n(B),
    F = t(375708),
    G = t(309954),
    q = t(287809);
let z = (0, t(945810).mj)({
    name: "2026-04-slayer-storefront-orbs",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 }, 3: { enabled: !0 } },
});
var V = t(44724);
t(321073);
var W = t(345938),
    $ = t(510022),
    J = t(317560),
    K = t(533406),
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
                                  className: a()(X.xn, { [X.Y4]: l === s }),
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
    ea = t(532794),
    ei = t(617986),
    eo = t(49999),
    ec = t(788868),
    eu = t(530066),
    ed = t(942460);
function em(e) {
    let { sku: l, orbsGate: t, orbPrice: r, analyticsLocations: a, onCheckout: i, variant: o = "secondary" } = e,
        c = s.useRef(null),
        [m, x] = (0, er.kn)("NEEDS_NITRO" === t ? [et.M.SLAYER_STOREFRONT_ORBS_PURCHASE_COACHMARK] : []),
        h = m === et.M.SLAYER_STOREFRONT_ORBS_PURCHASE_COACHMARK,
        {
            isOpen: b,
            onMouseEnter: C,
            onMouseLeave: g,
            popoverRef: v,
            close: f,
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
        j = s.useMemo(
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
                                  f(),
                                  (0, ea.A)({
                                      subscriptionTier: ec.pe.TIER_2,
                                      analyticsLocations: a,
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
                                f(), (0, ei.navigateToQuestHome)({ fromContent: el.u.ORBS_BALANCE_MENU });
                            },
                        }
                      : null,
            [t, h, x, f, a, l.applicationId],
        ),
        p = null != j && b,
        E = s.useCallback(() => {
            h && x(eo.i.USER_DISMISS), f();
        }, [h, x, f]);
    return "HIDDEN" === t || null == r
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      ref: c,
                      onMouseEnter: C,
                      onMouseLeave: g,
                      children: (0, n.jsx)(d.$, {
                          onClick: i,
                          disabled: null != j,
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
                  null != j &&
                      (0, n.jsx)(en.A, {
                          targetElementRef: c,
                          popoverRef: v,
                          shouldShow: p,
                          position: "right",
                          alignmentStrategy: "edge",
                          align: "bottom",
                          caretConfig: { align: "end" },
                          size: "md",
                          title: j.title,
                          body: j.body,
                          actions: [{ text: j.ctaText, variant: j.ctaVariant, onClick: j.onCtaClick, icon: j.ctaIcon }],
                          onRequestClose: E,
                      }),
              ],
          });
}
var ex = t(310784),
    eh = t.n(ex),
    eb = t(775602),
    eC = t(654107),
    eg = t(392056),
    ev = t(619517),
    ef = t(34337),
    ej = t(172079);
let ep = (e) => (0, ef.$o)({ ...e, className: ej.tN, mediaPlayerClassName: ej.yf }),
    eE = (e) => (0, n.jsx)(ev.Ay, { ...e });
function e_(e) {
    let { item: l, isMuted: t, className: r, alt: a = "" } = e,
        o = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, eC.rh)(l, "#000000");
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
              className: r ?? ej.kL,
              children: (0, n.jsx)(
                  "div",
                  {
                      className: `${ej.h4} ${ej.nR}`,
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
                              className: ej.Ki,
                              volume: 1,
                              autoMute: t,
                              autoPlay: !0,
                              renderVideoComponent: ep,
                              renderImageComponent: eE,
                              renderLinkComponent: ef.bU,
                          },
                          `${l.src}-${t ? "muted" : "unmuted"}`,
                      ),
                  },
                  l.src,
              ),
          })
        : (0, n.jsx)("div", {
              className: r ?? ej.kL,
              children: (0, n.jsxs)("div", {
                  className: ej.h4,
                  style: b,
                  children: [
                      (0, n.jsx)("img", { src: l.src, alt: a, className: ej.Sl }, l.src),
                      null != u && !c && (0, n.jsx)("img", { src: u, alt: "", className: ej.Ve, onAnimationEnd: h }, u),
                  ],
              }),
          });
}
var eN = t(743693),
    eA = t(995393),
    eI = t(188275),
    eT = t(652215),
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
function eR(e) {
    let { sku: l } = e,
        { normalPrice: t, discountedPrice: s, discountPercent: r } = (0, k.CD)({ sku: l });
    if (null == t) return null;
    let a = null != l.orbsReward && l.orbsReward > 0;
    return (0, n.jsxs)("div", {
        className: ek.sj,
        children: [
            (0, n.jsx)(ee.V, { textColor: "text-subtle" }),
            (0, n.jsxs)("div", {
                className: ek.hO,
                children: [
                    null != r && null != s
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(c.E, { variant: "text-md/medium", className: ek.Jb, children: t }),
                                  (0, n.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: s }),
                                  (0, n.jsx)(c.E, { variant: "text-md/bold", className: ek.Fi, children: r }),
                              ],
                          })
                        : (0, n.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                    a &&
                        (0, n.jsx)("div", {
                            className: ek.pt,
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
    let { sku: l, guildId: t, giftRecipient: r, giftingOrigin: a, trackPDPClick: o, analyticsLocations: u } = e,
        h = l.id,
        b = (0, i.bG)([H.A], () => H.A.getNormalizedSKUEligibility(h), [h]),
        C = (0, k.JL)({ sku: l }),
        g = (function (e) {
            let { orbPriceAmount: l, location: t } = e,
                n = (function (e) {
                    let { location: l } = e;
                    return z.useConfig({ location: l }).enabled;
                })({ location: t }),
                s = (0, i.bG)([q.default], () => q.default.getCurrentUser()?.hasPaidTier2Subscription() ?? !1),
                { balance: r } = (0, G.W)({ disableFetch: !n || null == l || !s });
            return n && null != l
                ? s
                    ? null == r || r < l
                        ? "NOT_ENOUGH_ORBS"
                        : "CAN_CHECKOUT"
                    : "NEEDS_NITRO"
                : "HIDDEN";
        })({ orbPriceAmount: C?.amount, location: "product_details_modal" }),
        v = b && "CAN_CHECKOUT" === g,
        f = s.useCallback(() => {
            null != t &&
                (o(eA.Jq.BUY_BUTTON),
                (0, K.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...u, N.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                ));
        }, [l, o, t, u]),
        j = s.useCallback(() => {
            o(eA.Jq.GIFT_BUTTON),
                (0, K.a)(
                    l,
                    { isGift: !0, giftRecipient: r, giftingOrigin: a },
                    { analyticsLocations: [...u, N.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [l, o, r, a, u]),
        p = (0, I.h)(l.applicationId),
        E = s.useMemo(() => [...u, N.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [u]),
        _ = s.useCallback(() => {
            null != p &&
                (o(eA.Jq.BUY_WITH_ORBS_BUTTON),
                (0, R.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    onComplete: () => {
                        (0, J.j)(), (0, $.n)({ sku: l, application: p, analyticsLocations: E });
                    },
                    analyticsLocations: E,
                }));
        }, [l, p, E, o]),
        A = b
            ? (0, n.jsx)(em, {
                  sku: l,
                  orbsGate: g,
                  orbPrice: C,
                  analyticsLocations: E,
                  onCheckout: _,
                  variant: v ? "primary" : "secondary",
              })
            : null,
        T = (0, n.jsxs)("div", {
            className: ek.mr,
            children: [
                (0, n.jsx)(d.$, {
                    variant: v ? "secondary" : "primary",
                    onClick: f,
                    text: F.intl.string(F.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, n.jsx)(m.D, {
                    className: ek.xP,
                    onClick: j,
                    "aria-label": F.intl.string(F.t.QAZA5f),
                    role: "button",
                    children: (0, n.jsx)(x.o, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        S = (0, n.jsx)(d.$, {
            icon: x.o,
            variant: "secondary",
            onClick: j,
            text: F.intl.string(F.t.QAZA5f),
            fullWidth: !0,
        });
    return (0, n.jsxs)("div", {
        className: ek.NC,
        children: [
            !b &&
                (0, n.jsx)(c.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: F.intl.string(F.t.IqlPbQ),
                }),
            v && A,
            b ? T : S,
            !v && A,
        ],
    });
}
function ey(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let s = null != l.labelIconAssetId ? (0, M.YE)(t, l.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: ek.HI,
        children: [
            null != s && (0, n.jsx)("img", { className: ek.IX, src: s, alt: "" }, s),
            (0, n.jsx)(c.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eL(e) {
    let { onClick: l, onMouseDown: t, children: s, ariaLabel: r, className: a = ek.jU } = e;
    return (0, n.jsx)(m.D, { onClick: l, onMouseDown: t, className: a, "aria-label": r, role: "button", children: s });
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
            returnRef: u,
            skuId: d,
            applicationId: m,
            isStorefront: x,
            giftRecipient: N,
            giftingOrigin: I,
            analyticsLocations: k,
            analyticsContext: R,
            onClose: B,
        } = e,
        { analyticsLocations: G } = (0, A.Ay)(k ?? []),
        { guildId: q } = (0, U.nG)(m),
        z = (0, i.bG)([y.default], () => y.default.getId());
    s.useEffect(() => {
        null != q && null != d && (0, w.iR)(q, d);
    }, [q, d]);
    let $ = (0, P.A)({ guildId: q }),
        J = (0, i.bG)([H.A], () => H.A.getSkuAssets()),
        K = (0, i.bG)([L.A], () => L.A.isFetchingForSKU(d)),
        X = (0, h.M)((0, _.Ay)()),
        [ee, el] = s.useState(!0),
        et = (0, S.A)({ skuId: d }),
        [en, es] = s.useState(0),
        [er, ea] = s.useMemo(
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
                })(et?.tenantMetadata?.socialLayer?.carouselItems ?? [], m, J, { heroWidth: 747 }),
            [et, m, J],
        ),
        [ei, eo] = s.useState(null),
        [ec, eu] = s.useState(!1);
    s.useEffect(() => {
        if (null == ei) return;
        let e = new ResizeObserver(() => {
            eu(ei.scrollHeight > ei.clientHeight);
        });
        return e.observe(ei), () => e.disconnect();
    }, [ei]);
    let ed = en < ea.length ? en : 0,
        em = er[ed] ?? null,
        ex = ea.length > 1,
        eh = ea.some((e) => "video" === e.type);
    (0, O.pE)(),
        (0, E.Ay)(() => {
            D.default.track(eT.HAw.OPEN_MODAL, { location_stack: G, type: eI.Nh, sku_id: d, application_id: m }),
                (0, w.Xw)();
        });
    let eb = s.useCallback(
            (e) => {
                D.default.track(eT.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: R?.sessionId,
                    sku_id: d,
                    guild_id: R?.guildId,
                    cta_type: e,
                    location_stack: G,
                });
            },
            [R, d, G],
        ),
        eC = s.useCallback(
            (e) => {
                es(e), eb(eA.Jq.CAROUSEL_ITEM);
            },
            [eb],
        );
    s.useEffect(() => {
        null == q || null == d || L.A.isFetchingForSKU(d) || (0, w.qf)(q, d);
    }, [q, d]);
    let eg = s.useCallback(() => {
            null != et &&
                null != q &&
                (eb(eA.Jq.FORWARD_BUTTON),
                (0, W.d)({
                    sku: et,
                    guildId: q,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: G,
                    analyticsContext: R,
                }));
        }, [et, q, eb, G, R]),
        ev = s.useCallback(() => {
            eb(eA.Jq.WISHLIST_BUTTON);
        }, [eb]),
        ef = s.useCallback(() => {
            null != q && (0, V.X)({ guildId: q });
        }, [q]),
        ej = s.useCallback(() => {
            null != q &&
                (eb(eA.Jq.VISIT_SHOP), (0, b.closeAllModals)(), null != r ? r() : (0, V.default)({ guildId: q }));
        }, [q, eb, r]),
        ep = s.useCallback(() => {
            el(!ee), eb(eA.Jq.MUTE_BUTTON);
        }, [ee, eb]),
        eE =
            ((l = (0, i.bG)([H.A], () => H.A.getConfig()?.promotionEndDatetime, [])),
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
        ey = et?.tenantMetadata?.socialLayer;
    if (null == et || null == ey) return K ? (0, n.jsx)(C.y, {}) : null;
    let eM = $?.storefront,
        ew = eM?.logoAssetId != null ? (0, M.YE)(eM.applicationId, eM.logoAssetId, 256) : null,
        eH = eM?.lightThemeLogoAssetId != null ? (0, M.YE)(eM.applicationId, eM.lightThemeLogoAssetId, 256) : null,
        eP = null;
    eP = X ? (ew ?? eH) : (eH ?? ew);
    let eB = null != et.orbsReward && et.orbsReward > 0;
    return (0, n.jsx)(g.EO, {
        transitionState: o,
        "hide-shadow": !0,
        parentComponent: "SocialLayerStorefrontProductDetailsModal",
        className: ek.CR,
        size: g.rI.DYNAMIC,
        returnRef: u,
        children: (0, n.jsxs)(g.$m, {
            className: ek.jE,
            children: [
                eB &&
                    (0, n.jsx)(eU, {
                        timeRemaining: eE ?? void 0,
                        text: F.intl.format(F.t.d3njXi, { orbCount: et.orbsReward }),
                    }),
                (0, n.jsxs)("div", {
                    className: ek.nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: a()(ek.op, { [ek.uk]: et.exclusive }),
                            children: [
                                (0, n.jsx)("div", {
                                    className: ek.r$,
                                    children:
                                        null != eP
                                            ? (0, n.jsx)("img", { className: ek.wm, src: eP, alt: eM?.title ?? "" })
                                            : null,
                                }),
                                (0, n.jsxs)("div", {
                                    ref: eo,
                                    className: ek.zD,
                                    children: [
                                        et.exclusive &&
                                            (0, n.jsx)("div", { className: ek.K3, children: (0, n.jsx)(Z.I, {}) }),
                                        ex
                                            ? (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(eS, { sku: et }),
                                                      (0, n.jsx)("div", {
                                                          className: ek._D,
                                                          children: (0, n.jsx)(Q, {
                                                              mediaItems: ea,
                                                              labels: er.map((e) => e.label),
                                                              selectedIndex: ed,
                                                              onSelectIndex: eC,
                                                          }),
                                                      }),
                                                      (0, n.jsx)(eD, {
                                                          selectedCarouselItem: em,
                                                          title: em?.title,
                                                          description: em?.description,
                                                          applicationId: m,
                                                          className: ek.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, n.jsx)(eD, {
                                                  selectedCarouselItem: em,
                                                  title: et.name,
                                                  description: et.description,
                                                  applicationId: m,
                                                  className: ek.cP,
                                              }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: a()(ek.Td, { [ek.t7]: ec }),
                                    children: [
                                        (0, n.jsx)(eR, { sku: et }),
                                        (0, n.jsx)(eO, {
                                            sku: et,
                                            guildId: q,
                                            giftRecipient: N?.id !== z ? N : void 0,
                                            giftingOrigin: N?.id !== z ? I : void 0,
                                            trackPDPClick: eb,
                                            analyticsLocations: G,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: ek.il,
                            children: [
                                (0, n.jsx)(e_, { item: ea[ed], isMuted: ee, alt: em?.label ?? et.name }),
                                !x &&
                                    (0, n.jsxs)(eL, {
                                        onClick: ej,
                                        onMouseDown: ef,
                                        ariaLabel: F.intl.string(F.t["+v/1Dk"]),
                                        className: ek.gW,
                                        children: [
                                            (0, n.jsx)(v.U, { size: "refresh_sm", color: "currentColor" }),
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
                                        null != et &&
                                            (0, n.jsx)(eN._, {
                                                sku: et,
                                                isCardHovered: !0,
                                                className: a()(ek.jU, ek.ij),
                                                trackButtonClick: ev,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, n.jsx)(eL, {
                                            onClick: eg,
                                            ariaLabel: F.intl.string(F.t.Ej3B3Y),
                                            children: (0, n.jsx)(T.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        eh &&
                                            (0, n.jsx)(eL, {
                                                onClick: ep,
                                                ariaLabel: ee ? F.intl.string(F.t.YqAjXy) : F.intl.string(F.t.w4m945),
                                                children: ee
                                                    ? (0, n.jsx)(f._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, n.jsx)(j.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, n.jsx)(eL, {
                                            onClick: B,
                                            ariaLabel: F.intl.string(F.t.cpT0Cq),
                                            children: (0, n.jsx)(p.d, { size: "refresh_sm", color: "currentColor" }),
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
