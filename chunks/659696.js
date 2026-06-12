t.d(l, { default: () => eH });
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
    p = t(289873),
    g = t(935462),
    C = t(34188),
    j = t(358618),
    f = t(983851),
    v = t(972213),
    E = t(964486),
    _ = t(736653),
    N = t(793574),
    A = t(688810),
    I = t(429913),
    T = t(427209),
    k = t(117218),
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
    q = t(287809),
    z = t(681064),
    V = t(44724);
t(321073);
var K = t(345938),
    $ = t(510022),
    J = t(317560),
    W = t(533406),
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
            onMouseEnter: p,
            onMouseLeave: g,
            popoverRef: C,
            close: j,
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
                          title: F.intl.string(eu.default["1OBZN2"]),
                          body: F.intl.string(eu.default.FDywIe),
                          ctaText: F.intl.string(eu.default["Mt/ukE"]),
                          ctaIcon: es.t,
                          ctaVariant: "expressive",
                          onCtaClick: () => {
                              h && x(eo.i.TAKE_ACTION),
                                  j(),
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
                                j(), (0, ea.navigateToQuestHome)({ fromContent: el.u.ORBS_BALANCE_MENU });
                            },
                        }
                      : null,
            [t, h, x, j, i, l.applicationId],
        ),
        v = null != f && b,
        E = s.useCallback(() => {
            h && x(eo.i.USER_DISMISS), j();
        }, [h, x, j]);
    return "HIDDEN" === t || null == r
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      ref: c,
                      onMouseEnter: p,
                      onMouseLeave: g,
                      children: (0, n.jsx)(d.$, {
                          onClick: a,
                          disabled: null != f,
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
                  null != f &&
                      (0, n.jsx)(en.A, {
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
var ex = t(310784),
    eh = t.n(ex),
    eb = t(775602),
    ep = t(654107),
    eg = t(175671),
    eC = t(619517),
    ej = t(34337),
    ef = t(172079);
let ev = (e) => (0, ej.$o)({ ...e, className: ef.tN, mediaPlayerClassName: ef.yf }),
    eE = (e) => (0, n.jsx)(eC.Ay, { ...e });
function e_(e) {
    let { item: l, isMuted: t, className: r, alt: i = "" } = e,
        o = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, ep.rh)(l, "#000000");
            return s.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = eh()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        c = (0, a.bG)([eb.Ay], () => eb.Ay.useReducedMotion),
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
              className: r ?? ef.kL,
              children: (0, n.jsx)(
                  "div",
                  {
                      className: `${ef.h4} ${ef.nR}`,
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
                              className: ef.Ki,
                              volume: 1,
                              autoMute: t,
                              autoPlay: !0,
                              renderVideoComponent: ev,
                              renderImageComponent: eE,
                              renderLinkComponent: ej.bU,
                          },
                          `${l.src}-${t ? "muted" : "unmuted"}`,
                      ),
                  },
                  l.src,
              ),
          })
        : (0, n.jsx)("div", {
              className: r ?? ef.kL,
              children: (0, n.jsxs)("div", {
                  className: ef.h4,
                  style: b,
                  children: [
                      (0, n.jsx)("img", { src: l.src, alt: i, className: ef.Sl }, l.src),
                      null != u && !c && (0, n.jsx)("img", { src: u, alt: "", className: ef.Ve, onAnimationEnd: h }, u),
                  ],
              }),
          });
}
var eN = t(910200),
    eA = t(743693),
    eI = t(995393),
    eT = t(188275),
    ek = t(652215),
    eS = t(199138);
function eO(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: eS.AX,
              children: [
                  (0, n.jsx)(o.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function eR(e) {
    let { amount: l } = e;
    return (0, n.jsxs)("div", {
        className: eS.aX,
        children: [
            (0, n.jsx)(u.C, { size: "xs", color: "currentColor" }),
            (0, n.jsx)(c.E, { variant: "text-md/semibold", color: "currentColor", children: l }),
        ],
    });
}
function ey(e) {
    let { normalPrice: l, discountedPrice: t, discountPercent: s } = e;
    return null != s && null != t
        ? (0, n.jsxs)("div", {
              className: eS._k,
              children: [
                  (0, n.jsx)(c.E, { variant: "text-md/medium", className: eS.Jb, children: l }),
                  (0, n.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                  (0, n.jsx)(c.E, { variant: "text-md/bold", className: eS.Fi, children: s }),
              ],
          })
        : (0, n.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: l });
}
function eL(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: s } = e,
        { normalPrice: r, discountedPrice: a, discountPercent: o } = s;
    if (null == r) return null;
    let c = "HIDDEN" !== t && null != l;
    return (0, n.jsxs)("div", {
        className: eS.sj,
        children: [
            (0, n.jsx)(ee.V, { textColor: "text-subtle" }),
            (0, n.jsx)("div", {
                className: i()(eS.hO, c && eS.XE),
                children:
                    c && "CAN_CHECKOUT" === t
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(eR, { amount: l.amount }),
                                  (0, n.jsx)(ey, { normalPrice: r, discountedPrice: a, discountPercent: o }),
                              ],
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(ey, { normalPrice: r, discountedPrice: a, discountPercent: o }),
                                  c && (0, n.jsx)(eR, { amount: l.amount }),
                              ],
                          }),
            }),
        ],
    });
}
function eD(e) {
    let {
            sku: l,
            guildId: t,
            giftRecipient: r,
            giftingOrigin: i,
            trackPDPClick: o,
            analyticsLocations: u,
            orbPrice: h,
            orbsGate: b,
            formattedPrice: p,
        } = e,
        g = l.id,
        C = (0, a.bG)([H.A], () => H.A.getNormalizedSKUEligibility(g), [g]),
        j = C && "CAN_CHECKOUT" === b,
        f = p.discountedPrice ?? p.normalPrice,
        v = s.useCallback(() => {
            o(eI.Jq.BUY_BUTTON),
                (0, W.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...u, N.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                );
        }, [l, o, t, u]),
        E = s.useCallback(() => {
            o(eI.Jq.GIFT_BUTTON),
                (0, W.a)(
                    l,
                    { isGift: !0, giftRecipient: r, giftingOrigin: i },
                    { analyticsLocations: [...u, N.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [l, o, r, i, u]),
        _ = (0, I.h)(l.applicationId),
        A = s.useMemo(() => [...u, N.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [u]),
        T = s.useCallback(() => {
            null != _ &&
                (o(eI.Jq.BUY_WITH_ORBS_BUTTON),
                (0, O.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    onComplete: () => {
                        (0, J.j)(), (0, $.n)({ sku: l, application: _, analyticsLocations: A });
                    },
                    analyticsLocations: A,
                }));
        }, [l, _, A, o]),
        k = C
            ? (0, n.jsx)(em, {
                  sku: l,
                  orbsGate: b,
                  orbPrice: h,
                  analyticsLocations: A,
                  onCheckout: T,
                  variant: j ? "primary" : "secondary",
              })
            : null,
        S = (0, n.jsxs)("div", {
            className: eS.mr,
            children: [
                (0, n.jsx)(d.$, {
                    variant: j ? "secondary" : "primary",
                    onClick: v,
                    text: null != f ? F.intl.format(F.t.YkXGyY, { priceString: f }) : F.intl.string(F.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, n.jsx)(m.D, {
                    className: eS.xP,
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
        className: eS.NC,
        children: [
            !C &&
                (0, n.jsx)(c.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: F.intl.string(F.t.IqlPbQ),
                }),
            j && k,
            C ? S : R,
            !j && k,
        ],
    });
}
function eP(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let s = null != l.labelIconAssetId ? (0, P.YE)(t, l.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: eS.HI,
        children: [
            null != s && (0, n.jsx)("img", { className: eS.IX, src: s, alt: "" }, s),
            (0, n.jsx)(c.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eU(e) {
    let { onClick: l, onMouseDown: t, children: s, ariaLabel: r, className: i = eS.jU } = e;
    return (0, n.jsx)(m.D, { onClick: l, onMouseDown: t, className: i, "aria-label": r, role: "button", children: s });
}
function eM(e) {
    let { selectedCarouselItem: l, title: t, description: s, applicationId: r, className: i } = e;
    return (0, n.jsxs)("div", {
        className: i,
        children: [
            null != t && (0, n.jsx)(o.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
            (0, n.jsx)(eP, { applicationId: r, selectedCarouselItem: l }),
            null != s && (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-subtle", children: s }),
        ],
    });
}
function eH(e) {
    var l;
    let t,
        r,
        o,
        {
            customNavigateToSocialLayerStorefront: d,
            transitionState: m,
            returnRef: x,
            skuId: N,
            applicationId: I,
            isStorefront: O,
            giftRecipient: B,
            giftingOrigin: $,
            analyticsLocations: J,
            analyticsContext: W,
            onClose: X,
        } = e,
        { analyticsLocations: ee } = (0, A.Ay)(J ?? []),
        { guildId: el } = (0, U.nG)(I),
        et = (0, a.bG)([y.default], () => y.default.getId());
    s.useEffect(() => {
        null != N && (0, M.iR)(I, N);
    }, [I, N]);
    let en = (0, Y.A)({ applicationId: I }),
        es = (0, a.bG)([H.A], () => H.A.getSkuAssets()),
        er = (0, a.bG)([L.A], () => L.A.isFetchingForSKU(N)),
        ei = (0, h.M)((0, _.Ay)()),
        [ea, eo] = s.useState(!0),
        ec = (0, S.A)({ skuId: N }),
        eu = (0, k.JL)({ sku: ec }),
        ed = (function (e) {
            let { orbPriceAmount: l, location: t } = e,
                n = (0, z.R)({ location: t }),
                s = (0, a.bG)([q.default], () => q.default.getCurrentUser()?.hasPaidTier2Subscription() ?? !1),
                { balance: r } = (0, G.W)({ disableFetch: !n || null == l || !s });
            return n && null != l
                ? s
                    ? null == r || r < l
                        ? "NOT_ENOUGH_ORBS"
                        : "CAN_CHECKOUT"
                    : "NEEDS_NITRO"
                : "HIDDEN";
        })({ orbPriceAmount: eu?.amount, location: "product_details_modal" }),
        em = (0, k.CD)({ sku: ec }),
        [ex, eh] = s.useState(0),
        [eb, ep] = s.useMemo(
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
                })(ec?.tenantMetadata?.socialLayer?.carouselItems ?? [], I, es, { heroWidth: 747 }),
            [ec, I, es],
        ),
        [eg, eC] = s.useState(null),
        [ej, ef] = s.useState(!1);
    s.useEffect(() => {
        if (null == eg) return;
        let e = new ResizeObserver(() => {
            ef(eg.scrollHeight > eg.clientHeight);
        });
        return e.observe(eg), () => e.disconnect();
    }, [eg]);
    let ev = ex < ep.length ? ex : 0,
        eE = eb[ev] ?? null,
        eR = ep.length > 1,
        ey = ep.some((e) => "video" === e.type);
    (0, R.pE)(),
        (0, E.Ay)(() => {
            D.default.track(ek.HAw.OPEN_MODAL, { location_stack: ee, type: eT.Nh, sku_id: N, application_id: I }),
                (0, M.Xw)();
        });
    let eP = s.useCallback(
            (e) => {
                D.default.track(ek.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: W?.sessionId,
                    sku_id: N,
                    guild_id: W?.guildId,
                    application_id: I,
                    cta_type: e,
                    location_stack: ee,
                });
            },
            [W, N, I, ee],
        ),
        eH = s.useCallback(
            (e) => {
                eh(e), eP(eI.Jq.CAROUSEL_ITEM);
            },
            [eP],
        );
    s.useEffect(() => {
        null == N || L.A.isFetchingForSKU(N) || (0, M.Pp)(I, N);
    }, [I, N]);
    let eY = s.useCallback(() => {
            null != ec &&
                (eP(eI.Jq.FORWARD_BUTTON),
                (0, K.d)({
                    sku: ec,
                    guildId: el,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: ee,
                    analyticsContext: W,
                }));
        }, [ec, el, eP, ee, W]),
        eB = s.useCallback(() => {
            eP(eI.Jq.WISHLIST_BUTTON);
        }, [eP]),
        ew = s.useCallback(() => {
            (0, V.G)({ applicationId: I });
        }, [I]),
        eF = s.useCallback(() => {
            eP(eI.Jq.VISIT_SHOP), (0, b.closeAllModals)(), null != d ? d() : (0, V.default)({ applicationId: I });
        }, [I, eP, d]),
        eG = s.useCallback(() => {
            eo(!ea), eP(eI.Jq.MUTE_BUTTON);
        }, [ea, eP]),
        eq =
            ((l = ec),
            (o =
                ((t = (0, a.bG)([H.A], () => H.A.getConfig()?.promotionEndDatetime, [])),
                (r = s.useMemo(() => {
                    if (null == t) return null;
                    let e = w()(),
                        l = w()(t).diff(e, "days");
                    return l <= 0 ? null : l;
                }, [t])),
                s.useMemo(
                    () => (null == r ? null : F.intl.formatToPlainString(F.t.BXpdIg, { days: Math.max(r, 1) })),
                    [r],
                ))),
            null != l && null != l.orbsReward && l.orbsReward > 0
                ? { Icon: u.C, timeRemaining: o, text: F.intl.format(F.t.d3njXi, { orbCount: l.orbsReward }) }
                : null),
        ez = ec?.tenantMetadata?.socialLayer;
    if (null == ec || null == ez) return er ? (0, n.jsx)(p.y, {}) : null;
    let eV = en?.storefront,
        eK = eV?.logoAssetId != null ? (0, P.YE)(eV.applicationId, eV.logoAssetId, 256) : null,
        e$ = eV?.lightThemeLogoAssetId != null ? (0, P.YE)(eV.applicationId, eV.lightThemeLogoAssetId, 256) : null,
        eJ = null;
    return (
        (eJ = ei ? (eK ?? e$) : (e$ ?? eK)),
        (0, n.jsx)(g.EO, {
            transitionState: m,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: eS.CR,
            size: g.rI.DYNAMIC,
            returnRef: x,
            children: (0, n.jsx)(g.$m, {
                className: eS.jE,
                children: (0, n.jsxs)("div", {
                    className: eS.nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: i()(eS.op, { [eS.uk]: ec.exclusive }),
                            children: [
                                (0, n.jsx)("div", {
                                    className: eS.r$,
                                    children:
                                        null != eJ
                                            ? (0, n.jsx)("img", { className: eS.wm, src: eJ, alt: eV?.title ?? "" })
                                            : null,
                                }),
                                (0, n.jsxs)("div", {
                                    ref: eC,
                                    className: eS.zD,
                                    children: [
                                        ec.exclusive &&
                                            (0, n.jsx)("div", { className: eS.K3, children: (0, n.jsx)(Z.I, {}) }),
                                        eR
                                            ? (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(eO, { sku: ec }),
                                                      (0, n.jsx)("div", {
                                                          className: eS._D,
                                                          children: (0, n.jsx)(Q, {
                                                              mediaItems: ep,
                                                              labels: eb.map((e) => e.label),
                                                              selectedIndex: ev,
                                                              onSelectIndex: eH,
                                                          }),
                                                      }),
                                                      (0, n.jsx)(eM, {
                                                          selectedCarouselItem: eE,
                                                          title: eE?.title,
                                                          description: eE?.description,
                                                          applicationId: I,
                                                          className: eS.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, n.jsx)(eM, {
                                                  selectedCarouselItem: eE,
                                                  title: ec.name,
                                                  description: ec.description,
                                                  applicationId: I,
                                                  className: eS.cP,
                                              }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: i()(eS.Td, { [eS.t7]: ej }),
                                    children: [
                                        (0, n.jsx)(eL, { orbPrice: eu, orbsGate: ed, formattedPrice: em }),
                                        null != eq &&
                                            (0, n.jsx)(eN.O, {
                                                Icon: eq.Icon,
                                                timeRemaining: eq.timeRemaining,
                                                text: eq.text,
                                                tooltip: eq.tooltip,
                                            }),
                                        (0, n.jsx)(eD, {
                                            sku: ec,
                                            guildId: el,
                                            giftRecipient: B?.id !== et ? B : void 0,
                                            giftingOrigin: B?.id !== et ? $ : void 0,
                                            trackPDPClick: eP,
                                            analyticsLocations: ee,
                                            orbPrice: eu,
                                            orbsGate: ed,
                                            formattedPrice: em,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: eS.il,
                            children: [
                                (0, n.jsx)(e_, { item: ep[ev], isMuted: ea, alt: eE?.label ?? ec.name }),
                                !O &&
                                    (0, n.jsxs)(eU, {
                                        onClick: eF,
                                        onMouseDown: ew,
                                        ariaLabel: F.intl.string(F.t["+v/1Dk"]),
                                        className: eS.gW,
                                        children: [
                                            (0, n.jsx)(C.U, { size: "refresh_sm", color: "currentColor" }),
                                            (0, n.jsx)(c.E, {
                                                variant: "text-md/medium",
                                                color: "currentColor",
                                                children: F.intl.string(F.t["+v/1Dk"]),
                                            }),
                                        ],
                                    }),
                                (0, n.jsxs)("div", {
                                    className: eS.V7,
                                    children: [
                                        null != ec &&
                                            (0, n.jsx)(eA._, {
                                                sku: ec,
                                                isCardHovered: !0,
                                                className: i()(eS.jU, eS.ij),
                                                trackButtonClick: eB,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, n.jsx)(eU, {
                                            onClick: eY,
                                            ariaLabel: F.intl.string(F.t.Ej3B3Y),
                                            children: (0, n.jsx)(T.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        ey &&
                                            (0, n.jsx)(eU, {
                                                onClick: eG,
                                                ariaLabel: ea ? F.intl.string(F.t.YqAjXy) : F.intl.string(F.t.w4m945),
                                                children: ea
                                                    ? (0, n.jsx)(j._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, n.jsx)(f.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, n.jsx)(eU, {
                                            onClick: X,
                                            ariaLabel: F.intl.string(F.t.cpT0Cq),
                                            children: (0, n.jsx)(v.d, { size: "refresh_sm", color: "currentColor" }),
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
