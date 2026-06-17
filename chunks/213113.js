t.d(l, { default: () => eP });
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
    j = t(289873),
    p = t(935462),
    g = t(34188),
    v = t(358618),
    C = t(983851),
    f = t(972213),
    _ = t(964486),
    E = t(736653),
    A = t(793574),
    N = t(688810),
    I = t(429913),
    k = t(427209),
    T = t(117218),
    S = t(801228),
    R = t(652165),
    O = t(561794),
    y = t(495544),
    L = t(328968),
    D = t(174459),
    P = t(371794),
    M = t(871123),
    U = t(733391),
    Y = t(832163),
    H = t(429635),
    w = t(476438),
    B = t(69236),
    F = t(44724);
t(321073);
var G = t(345938),
    q = t(510022),
    z = t(317560),
    V = t(533406),
    $ = t(375708),
    J = t(964421);
function K(e) {
    let { mediaItems: l, labels: t, selectedIndex: s, onSelectIndex: r } = e;
    return l.length <= 1
        ? null
        : (0, n.jsxs)("div", {
              className: J.kL,
              children: [
                  (0, n.jsx)(c.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: $.intl.string($.t.U7DAV9),
                  }),
                  (0, n.jsx)("div", {
                      className: J.Vg,
                      children: l.map((e, l) =>
                          (0, n.jsx)(
                              m.D,
                              {
                                  className: a()(J.xn, { [J.Y4]: l === s }),
                                  onClick: () => r(l),
                                  "aria-label": t?.[l],
                                  "aria-pressed": l === s,
                                  children: (0, n.jsx)("img", {
                                      className: J.q_,
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
var W = t(263911),
    X = t(971146),
    Q = t(696292),
    Z = t(554146),
    ee = t(43105),
    el = t(403581),
    et = t(131607),
    en = t(532794),
    es = t(617986),
    er = t(49999),
    ea = t(788868),
    ei = t(530066),
    eo = t(942460);
function ec(e) {
    let { sku: l, orbsGate: t, orbPrice: r, analyticsLocations: a, onCheckout: i, variant: o = "secondary" } = e,
        c = s.useRef(null),
        [m, x] = (0, et.kn)("NEEDS_NITRO" === t ? [Z.M.SLAYER_STOREFRONT_ORBS_PURCHASE_COACHMARK] : []),
        h = m === Z.M.SLAYER_STOREFRONT_ORBS_PURCHASE_COACHMARK,
        {
            isOpen: b,
            onMouseEnter: j,
            onMouseLeave: p,
            popoverRef: g,
            close: v,
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
        C = s.useMemo(
            () =>
                "NEEDS_NITRO" === t
                    ? {
                          title: $.intl.string(ei.default["1OBZN2"]),
                          body: $.intl.string(ei.default.FDywIe),
                          ctaText: $.intl.string(ei.default["Mt/ukE"]),
                          ctaIcon: el.t,
                          ctaVariant: "expressive",
                          onCtaClick: () => {
                              h && x(er.i.TAKE_ACTION),
                                  v(),
                                  (0, en.A)({
                                      subscriptionTier: ea.pe.TIER_2,
                                      analyticsLocations: a,
                                      applicationId: l.applicationId,
                                  });
                          },
                      }
                    : "NOT_ENOUGH_ORBS" === t
                      ? {
                            title: $.intl.string(ei.default.Xo6oAV),
                            body: $.intl.string(ei.default.fkdIdV),
                            ctaText: $.intl.string(ei.default.d525FQ),
                            ctaIcon: u.C,
                            ctaVariant: "primary",
                            onCtaClick: () => {
                                v(), (0, es.navigateToQuestHome)({ fromContent: Q.u.ORBS_BALANCE_MENU });
                            },
                        }
                      : null,
            [t, h, x, v, a, l.applicationId],
        ),
        f = null != C && b,
        _ = s.useCallback(() => {
            h && x(er.i.USER_DISMISS), v();
        }, [h, x, v]);
    return "HIDDEN" === t || null == r
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      ref: c,
                      onMouseEnter: j,
                      onMouseLeave: p,
                      children: (0, n.jsx)(d.$, {
                          onClick: i,
                          disabled: null != C,
                          variant: o,
                          text: (0, n.jsx)("span", {
                              className: eo.Y,
                              children: $.intl.format($.t.lOtBOI, {
                                  orbPrice: r.amount,
                                  orbIconHook: () =>
                                      (0, n.jsx)(u.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                              }),
                          }),
                          fullWidth: !0,
                      }),
                  }),
                  null != C &&
                      (0, n.jsx)(ee.A, {
                          targetElementRef: c,
                          popoverRef: g,
                          shouldShow: f,
                          position: "right",
                          alignmentStrategy: "edge",
                          align: "bottom",
                          caretConfig: { align: "end" },
                          size: "md",
                          title: C.title,
                          body: C.body,
                          actions: [{ text: C.ctaText, variant: C.ctaVariant, onClick: C.onCtaClick, icon: C.ctaIcon }],
                          onRequestClose: _,
                      }),
              ],
          });
}
var eu = t(310784),
    ed = t.n(eu),
    em = t(775602),
    ex = t(654107),
    eh = t(175671),
    eb = t(619517),
    ej = t(34337),
    ep = t(172079);
let eg = (e) => (0, ej.$o)({ ...e, className: ep.tN, mediaPlayerClassName: ep.yf }),
    ev = (e) => (0, n.jsx)(eb.Ay, { ...e });
function eC(e) {
    let { item: l, isMuted: t, className: r, alt: a = "" } = e,
        o = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, ex.rh)(l, "#000000");
            return s.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = ed()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        c = (0, i.bG)([em.Ay], () => em.Ay.useReducedMotion),
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
                          eh.rr,
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
var ef = t(910200),
    e_ = t(743693),
    eE = t(995393),
    eA = t(188275),
    eN = t(652215),
    eI = t(199138);
function ek(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: eI.AX,
              children: [
                  (0, n.jsx)(o.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function eT(e) {
    let { amount: l } = e;
    return (0, n.jsxs)("div", {
        className: eI.aX,
        children: [
            (0, n.jsx)(u.C, { size: "xs", color: "currentColor" }),
            (0, n.jsx)(c.E, { variant: "text-md/semibold", color: "currentColor", children: l }),
        ],
    });
}
function eS(e) {
    let { normalPrice: l, discountedPrice: t, discountPercent: s } = e;
    return null != s && null != t
        ? (0, n.jsxs)("div", {
              className: eI._k,
              children: [
                  (0, n.jsx)(c.E, { variant: "text-md/medium", className: eI.Jb, children: l }),
                  (0, n.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                  (0, n.jsx)(c.E, { variant: "text-md/bold", className: eI.Fi, children: s }),
              ],
          })
        : (0, n.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: l });
}
function eR(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: s } = e,
        { normalPrice: r, discountedPrice: i, discountPercent: o } = s;
    if (null == r) return null;
    let c = "HIDDEN" !== t && null != l;
    return (0, n.jsxs)("div", {
        className: eI.sj,
        children: [
            (0, n.jsx)(X.V, { textColor: "text-subtle" }),
            (0, n.jsx)("div", {
                className: a()(eI.hO, c && eI.XE),
                children:
                    c && "CAN_CHECKOUT" === t
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(eT, { amount: l.amount }),
                                  (0, n.jsx)(eS, { normalPrice: r, discountedPrice: i, discountPercent: o }),
                              ],
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(eS, { normalPrice: r, discountedPrice: i, discountPercent: o }),
                                  c && (0, n.jsx)(eT, { amount: l.amount }),
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
            formattedPrice: j,
        } = e,
        p = l.id,
        g = (0, i.bG)([Y.A], () => Y.A.getNormalizedSKUEligibility(p), [p]),
        v = g && "CAN_CHECKOUT" === b,
        C = j.discountedPrice ?? j.normalPrice,
        f = s.useCallback(() => {
            o(eE.Jq.BUY_BUTTON),
                (0, V.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...u, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                );
        }, [l, o, t, u]),
        _ = s.useCallback(() => {
            o(eE.Jq.GIFT_BUTTON),
                (0, V.a)(
                    l,
                    { isGift: !0, giftRecipient: r, giftingOrigin: a },
                    { analyticsLocations: [...u, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [l, o, r, a, u]),
        E = (0, I.h)(l.applicationId),
        N = s.useMemo(() => [...u, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [u]),
        k = s.useCallback(() => {
            null != E &&
                (o(eE.Jq.BUY_WITH_ORBS_BUTTON),
                (0, R.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    onComplete: () => {
                        (0, z.j)(), (0, q.n)({ sku: l, application: E, analyticsLocations: N });
                    },
                    analyticsLocations: N,
                }));
        }, [l, E, N, o]),
        T = g
            ? (0, n.jsx)(ec, {
                  sku: l,
                  orbsGate: b,
                  orbPrice: h,
                  analyticsLocations: N,
                  onCheckout: k,
                  variant: v ? "primary" : "secondary",
              })
            : null,
        S = (0, n.jsxs)("div", {
            className: eI.mr,
            children: [
                (0, n.jsx)(d.$, {
                    variant: v ? "secondary" : "primary",
                    onClick: f,
                    text: null != C ? $.intl.format($.t.YkXGyY, { priceString: C }) : $.intl.string($.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, n.jsx)(m.D, {
                    className: eI.xP,
                    onClick: _,
                    "aria-label": $.intl.string($.t.QAZA5f),
                    role: "button",
                    children: (0, n.jsx)(x.o, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        O = (0, n.jsx)(d.$, {
            icon: x.o,
            variant: "secondary",
            onClick: _,
            text: $.intl.string($.t.QAZA5f),
            fullWidth: !0,
        });
    return (0, n.jsxs)("div", {
        className: eI.NC,
        children: [
            !g &&
                (0, n.jsx)(c.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: $.intl.string($.t.IqlPbQ),
                }),
            v && T,
            g ? S : O,
            !v && T,
        ],
    });
}
function ey(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let s = null != l.labelIconAssetId ? (0, P.YE)(t, l.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: eI.HI,
        children: [
            null != s && (0, n.jsx)("img", { className: eI.IX, src: s, alt: "" }, s),
            (0, n.jsx)(c.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eL(e) {
    let { onClick: l, onMouseDown: t, children: s, ariaLabel: r, className: a = eI.jU } = e;
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
function eP(e) {
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
            giftingOrigin: R,
            analyticsLocations: q,
            analyticsContext: z,
            onClose: V,
        } = e,
        { analyticsLocations: J } = (0, N.Ay)(q ?? []),
        { guildId: X } = (0, M.nG)(x),
        Q = (0, i.bG)([y.default], () => y.default.getId());
    s.useEffect(() => {
        null != m && (0, U.iR)(x, m);
    }, [x, m]);
    let Z = (0, H.A)({ applicationId: x }),
        ee = (0, i.bG)([Y.A], () => Y.A.getSkuAssets()),
        el = (0, i.bG)([L.A], () => L.A.isFetchingForSKU(m)),
        et = (0, h.M)((0, E.Ay)()),
        [en, es] = s.useState(!0),
        er = (0, S.A)({ skuId: m }),
        ea = (0, T.JL)({ sku: er }),
        ei = (0, B.o)({ orbPriceAmount: ea?.amount, location: "product_details_modal" }),
        eo = (0, T.CD)({ sku: er }),
        [ec, eu] = s.useState(0),
        [ed, em] = s.useMemo(
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
                                              ? (0, P.YE)(l, n.backgroundAssetId, s, M.pV)
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
                                              ? (0, P.YE)(l, n.backgroundAssetId, s, M.pV)
                                              : void 0,
                                  }));
                    }
                    return [r, a];
                })(er?.tenantMetadata?.socialLayer?.carouselItems ?? [], x, ee, { heroWidth: 747 }),
            [er, x, ee],
        ),
        [ex, eh] = s.useState(null),
        [eb, ej] = s.useState(!1);
    s.useEffect(() => {
        if (null == ex) return;
        let e = new ResizeObserver(() => {
            ej(ex.scrollHeight > ex.clientHeight);
        });
        return e.observe(ex), () => e.disconnect();
    }, [ex]);
    let ep = ec < em.length ? ec : 0,
        eg = ed[ep] ?? null,
        ev = em.length > 1,
        eT = em.some((e) => "video" === e.type);
    (0, O.pE)(),
        (0, _.Ay)(() => {
            D.default.track(eN.HAw.OPEN_MODAL, { location_stack: J, type: eA.Nh, sku_id: m, application_id: x }),
                (0, U.Xw)();
        });
    let eS = s.useCallback(
            (e) => {
                D.default.track(eN.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: z?.sessionId,
                    sku_id: m,
                    guild_id: z?.guildId,
                    application_id: x,
                    cta_type: e,
                    location_stack: J,
                });
            },
            [z, m, x, J],
        ),
        ey = s.useCallback(
            (e) => {
                eu(e), eS(eE.Jq.CAROUSEL_ITEM);
            },
            [eS],
        );
    s.useEffect(() => {
        null == m || L.A.isFetchingForSKU(m) || (0, U.Pp)(x, m);
    }, [x, m]);
    let eP = s.useCallback(() => {
            null != er &&
                (eS(eE.Jq.FORWARD_BUTTON),
                (0, G.d)({
                    sku: er,
                    guildId: X,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: J,
                    analyticsContext: z,
                }));
        }, [er, X, eS, J, z]),
        eM = s.useCallback(() => {
            eS(eE.Jq.WISHLIST_BUTTON);
        }, [eS]),
        eU = s.useCallback(() => {
            (0, F.G)({ applicationId: x });
        }, [x]),
        eY = s.useCallback(() => {
            eS(eE.Jq.VISIT_SHOP), (0, b.closeAllModals)(), null != r ? r() : (0, F.default)({ applicationId: x });
        }, [x, eS, r]),
        eH = s.useCallback(() => {
            es(!en), eS(eE.Jq.MUTE_BUTTON);
        }, [en, eS]),
        ew =
            ((l = er),
            (t = (0, w.BM)()),
            null != l && null != l.orbsReward && l.orbsReward > 0
                ? { Icon: u.C, timeRemaining: t, text: $.intl.format($.t.d3njXi, { orbCount: l.orbsReward }) }
                : null),
        eB = er?.tenantMetadata?.socialLayer;
    if (null == er || null == eB) return el ? (0, n.jsx)(j.y, {}) : null;
    let eF = Z?.storefront,
        eG = eF?.logoAssetId != null ? (0, P.YE)(eF.applicationId, eF.logoAssetId, 256) : null,
        eq = eF?.lightThemeLogoAssetId != null ? (0, P.YE)(eF.applicationId, eF.lightThemeLogoAssetId, 256) : null,
        ez = null;
    return (
        (ez = et ? (eG ?? eq) : (eq ?? eG)),
        (0, n.jsx)(p.EO, {
            transitionState: o,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: eI.CR,
            size: p.rI.DYNAMIC,
            returnRef: d,
            children: (0, n.jsx)(p.$m, {
                className: eI.jE,
                children: (0, n.jsxs)("div", {
                    className: eI.nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: a()(eI.op, { [eI.uk]: er.exclusive }),
                            children: [
                                (0, n.jsx)("div", {
                                    className: eI.r$,
                                    children:
                                        null != ez
                                            ? (0, n.jsx)("img", { className: eI.wm, src: ez, alt: eF?.title ?? "" })
                                            : null,
                                }),
                                (0, n.jsxs)("div", {
                                    ref: eh,
                                    className: eI.zD,
                                    children: [
                                        er.exclusive &&
                                            (0, n.jsx)("div", { className: eI.K3, children: (0, n.jsx)(W.I, {}) }),
                                        ev
                                            ? (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(ek, { sku: er }),
                                                      (0, n.jsx)("div", {
                                                          className: eI._D,
                                                          children: (0, n.jsx)(K, {
                                                              mediaItems: em,
                                                              labels: ed.map((e) => e.label),
                                                              selectedIndex: ep,
                                                              onSelectIndex: ey,
                                                          }),
                                                      }),
                                                      (0, n.jsx)(eD, {
                                                          selectedCarouselItem: eg,
                                                          title: eg?.title,
                                                          description: eg?.description,
                                                          applicationId: x,
                                                          className: eI.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, n.jsx)(eD, {
                                                  selectedCarouselItem: eg,
                                                  title: er.name,
                                                  description: er.description,
                                                  applicationId: x,
                                                  className: eI.cP,
                                              }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: a()(eI.Td, { [eI.t7]: eb }),
                                    children: [
                                        (0, n.jsx)(eR, { orbPrice: ea, orbsGate: ei, formattedPrice: eo }),
                                        null != ew &&
                                            (0, n.jsx)(ef.O, {
                                                Icon: ew.Icon,
                                                timeRemaining: ew.timeRemaining,
                                                text: ew.text,
                                                tooltip: ew.tooltip,
                                            }),
                                        (0, n.jsx)(eO, {
                                            sku: er,
                                            guildId: X,
                                            giftRecipient: I?.id !== Q ? I : void 0,
                                            giftingOrigin: I?.id !== Q ? R : void 0,
                                            trackPDPClick: eS,
                                            analyticsLocations: J,
                                            orbPrice: ea,
                                            orbsGate: ei,
                                            formattedPrice: eo,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: eI.il,
                            children: [
                                (0, n.jsx)(eC, { item: em[ep], isMuted: en, alt: eg?.label ?? er.name }),
                                !A &&
                                    (0, n.jsxs)(eL, {
                                        onClick: eY,
                                        onMouseDown: eU,
                                        ariaLabel: $.intl.string($.t["+v/1Dk"]),
                                        className: eI.gW,
                                        children: [
                                            (0, n.jsx)(g.U, { size: "refresh_sm", color: "currentColor" }),
                                            (0, n.jsx)(c.E, {
                                                variant: "text-md/medium",
                                                color: "currentColor",
                                                children: $.intl.string($.t["+v/1Dk"]),
                                            }),
                                        ],
                                    }),
                                (0, n.jsxs)("div", {
                                    className: eI.V7,
                                    children: [
                                        null != er &&
                                            (0, n.jsx)(e_._, {
                                                sku: er,
                                                isCardHovered: !0,
                                                className: a()(eI.jU, eI.ij),
                                                trackButtonClick: eM,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, n.jsx)(eL, {
                                            onClick: eP,
                                            ariaLabel: $.intl.string($.t.Ej3B3Y),
                                            children: (0, n.jsx)(k.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        eT &&
                                            (0, n.jsx)(eL, {
                                                onClick: eH,
                                                ariaLabel: en ? $.intl.string($.t.YqAjXy) : $.intl.string($.t.w4m945),
                                                children: en
                                                    ? (0, n.jsx)(v._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, n.jsx)(C.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, n.jsx)(eL, {
                                            onClick: V,
                                            ariaLabel: $.intl.string($.t.cpT0Cq),
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
