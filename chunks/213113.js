t.d(l, { default: () => eP });
var n = t(627968),
    s = t(64700),
    r = t(503698),
    a = t.n(r),
    i = t(17928),
    c = t(534514),
    o = t(834730),
    u = t(318254),
    d = t(821609),
    m = t(939249),
    x = t(597770),
    h = t(366010),
    b = t(192308),
    p = t(289873),
    j = t(935462),
    v = t(34188),
    g = t(358618),
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
    O = t(652165),
    y = t(561794),
    R = t(495544),
    L = t(328968),
    D = t(174459),
    P = t(371794),
    U = t(871123),
    M = t(733391),
    Y = t(832163),
    H = t(429635),
    B = t(69236),
    F = t(31969),
    w = t(44724);
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
                  (0, n.jsx)(o.E, {
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
    ec = t(942460);
function eo(e) {
    let { sku: l, orbsGate: t, orbPrice: r, analyticsLocations: a, onCheckout: i, variant: c = "secondary" } = e,
        o = s.useRef(null),
        [m, x] = (0, et.kn)("NEEDS_NITRO" === t ? [Z.M.SLAYER_STOREFRONT_ORBS_PURCHASE_COACHMARK] : []),
        h = m === Z.M.SLAYER_STOREFRONT_ORBS_PURCHASE_COACHMARK,
        {
            isOpen: b,
            onMouseEnter: p,
            onMouseLeave: j,
            popoverRef: v,
            close: g,
        } = (function (e) {
            let { forcedOpen: l } = e,
                [t, n] = s.useState(!1),
                [r, a] = s.useState(null),
                i = s.useRef(null),
                c = s.useRef(null),
                o = s.useCallback((e) => {
                    a(e);
                }, []),
                u = s.useCallback(() => {
                    null != c.current && (clearTimeout(c.current), (c.current = null)),
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
                            null == c.current &&
                            (c.current = setTimeout(() => {
                                (c.current = null), n(!1);
                            }, 150));
                }, [t, l]);
            return (
                s.useEffect(
                    () => () => {
                        null != i.current && clearTimeout(i.current), null != c.current && clearTimeout(c.current);
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
                    popoverRef: o,
                    close: s.useCallback(() => {
                        null != i.current && (clearTimeout(i.current), (i.current = null)),
                            null != c.current && (clearTimeout(c.current), (c.current = null)),
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
                                  g(),
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
                                g(), (0, es.navigateToQuestHome)({ fromContent: Q.u.ORBS_BALANCE_MENU });
                            },
                        }
                      : null,
            [t, h, x, g, a, l.applicationId],
        ),
        f = null != C && b,
        _ = s.useCallback(() => {
            h && x(er.i.USER_DISMISS), g();
        }, [h, x, g]);
    return "HIDDEN" === t || null == r
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      ref: o,
                      onMouseEnter: p,
                      onMouseLeave: j,
                      children: (0, n.jsx)(d.$, {
                          onClick: i,
                          disabled: null != C,
                          variant: c,
                          text: (0, n.jsx)("span", {
                              className: ec.Y,
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
                          targetElementRef: o,
                          popoverRef: v,
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
    ep = t(34337),
    ej = t(172079);
let ev = (e) => (0, ep.$o)({ ...e, className: ej.tN, mediaPlayerClassName: ej.yf }),
    eg = (e) => (0, n.jsx)(eb.Ay, { ...e });
function eC(e) {
    let { item: l, isMuted: t, className: r, alt: a = "" } = e,
        c = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, ex.rh)(l, "#000000");
            return s.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = ed()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        o = (0, i.bG)([em.Ay], () => em.Ay.useReducedMotion),
        [u, d] = s.useState(null),
        [m, x] = s.useState(l);
    m !== l && (x(l), m?.type === "image" && l?.type === "image" && m.src !== l.src ? d(m.src) : d(null));
    let h = s.useCallback(() => d(null), []);
    if (null == l) return null;
    let b = {
        background: c,
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
                              className: ej.Ki,
                              volume: 1,
                              autoMute: t,
                              autoPlay: !0,
                              renderVideoComponent: ev,
                              renderImageComponent: eg,
                              renderLinkComponent: ep.bU,
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
                      null != u && !o && (0, n.jsx)("img", { src: u, alt: "", className: ej.Ve, onAnimationEnd: h }, u),
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
                  (0, n.jsx)(c.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, n.jsx)(o.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function eT(e) {
    let { amount: l } = e;
    return (0, n.jsxs)("div", {
        className: eI.aX,
        children: [
            (0, n.jsx)(u.C, { size: "xs", color: "currentColor" }),
            (0, n.jsx)(o.E, { variant: "text-md/semibold", color: "currentColor", children: l }),
        ],
    });
}
function eS(e) {
    let { normalPrice: l, discountedPrice: t, discountPercent: s } = e;
    return null != s && null != t
        ? (0, n.jsxs)("div", {
              className: eI._k,
              children: [
                  (0, n.jsx)(o.E, { variant: "text-md/medium", className: eI.Jb, children: l }),
                  (0, n.jsx)(o.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                  (0, n.jsx)(o.E, { variant: "text-md/bold", className: eI.Fi, children: s }),
              ],
          })
        : (0, n.jsx)(o.E, { variant: "text-md/semibold", color: "text-strong", children: l });
}
function eO(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: s } = e,
        { normalPrice: r, discountedPrice: i, discountPercent: c } = s;
    if (null == r) return null;
    let o = "HIDDEN" !== t && null != l;
    return (0, n.jsxs)("div", {
        className: eI.sj,
        children: [
            (0, n.jsx)(X.V, { textColor: "text-subtle" }),
            (0, n.jsx)("div", {
                className: a()(eI.hO, o && eI.XE),
                children:
                    o && "CAN_CHECKOUT" === t
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(eT, { amount: l.amount }),
                                  (0, n.jsx)(eS, { normalPrice: r, discountedPrice: i, discountPercent: c }),
                              ],
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(eS, { normalPrice: r, discountedPrice: i, discountPercent: c }),
                                  o && (0, n.jsx)(eT, { amount: l.amount }),
                              ],
                          }),
            }),
        ],
    });
}
function ey(e) {
    let {
            sku: l,
            guildId: t,
            giftRecipient: r,
            giftingOrigin: a,
            trackPDPClick: c,
            analyticsLocations: u,
            orbPrice: h,
            orbsGate: b,
            formattedPrice: p,
        } = e,
        j = l.id,
        v = (0, i.bG)([Y.A], () => Y.A.getNormalizedSKUEligibility(j), [j]),
        g = v && "CAN_CHECKOUT" === b,
        C = p.discountedPrice ?? p.normalPrice,
        f = s.useCallback(() => {
            c(eE.Jq.BUY_BUTTON),
                (0, V.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...u, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                );
        }, [l, c, t, u]),
        _ = s.useCallback(() => {
            c(eE.Jq.GIFT_BUTTON),
                (0, V.a)(
                    l,
                    { isGift: !0, giftRecipient: r, giftingOrigin: a },
                    { analyticsLocations: [...u, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [l, c, r, a, u]),
        E = (0, I.h)(l.applicationId),
        N = s.useMemo(() => [...u, A.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [u]),
        k = s.useCallback(() => {
            null != E &&
                (c(eE.Jq.BUY_WITH_ORBS_BUTTON),
                (0, O.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    onComplete: () => {
                        (0, z.j)(), (0, q.n)({ sku: l, application: E, analyticsLocations: N });
                    },
                    analyticsLocations: N,
                }));
        }, [l, E, N, c]),
        T = v
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
            className: eI.mr,
            children: [
                (0, n.jsx)(d.$, {
                    variant: g ? "secondary" : "primary",
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
        y = (0, n.jsx)(d.$, {
            icon: x.o,
            variant: "secondary",
            onClick: _,
            text: $.intl.string($.t.QAZA5f),
            fullWidth: !0,
        });
    return (0, n.jsxs)("div", {
        className: eI.NC,
        children: [
            !v &&
                (0, n.jsx)(o.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: $.intl.string($.t.IqlPbQ),
                }),
            g && T,
            v ? S : y,
            !g && T,
        ],
    });
}
function eR(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let s = null != l.labelIconAssetId ? (0, P.YE)(t, l.labelIconAssetId) : null;
    return (0, n.jsxs)("div", {
        className: eI.HI,
        children: [
            null != s && (0, n.jsx)("img", { className: eI.IX, src: s, alt: "" }, s),
            (0, n.jsx)(o.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
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
            null != t && (0, n.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
            (0, n.jsx)(eR, { applicationId: r, selectedCarouselItem: l }),
            null != s && (0, n.jsx)(o.E, { variant: "text-sm/normal", color: "text-subtle", children: s }),
        ],
    });
}
function eP(e) {
    let {
            customNavigateToSocialLayerStorefront: l,
            transitionState: t,
            returnRef: r,
            skuId: c,
            applicationId: u,
            isStorefront: d,
            giftRecipient: m,
            giftingOrigin: x,
            analyticsLocations: A,
            analyticsContext: I,
            onClose: O,
        } = e,
        { analyticsLocations: q } = (0, N.Ay)(A ?? []),
        { guildId: z } = (0, U.nG)(u),
        V = (0, i.bG)([R.default], () => R.default.getId());
    s.useEffect(() => {
        null != c && (0, M.iR)(u, c);
    }, [u, c]);
    let J = (0, H.A)({ applicationId: u }),
        X = (0, i.bG)([Y.A], () => Y.A.getSkuAssets()),
        Q = (0, i.bG)([L.A], () => L.A.isFetchingForSKU(c)),
        Z = (0, h.M)((0, E.Ay)()),
        [ee, el] = s.useState(!0),
        et = (0, S.A)({ skuId: c }),
        en = (0, T.JL)({ sku: et }),
        es = (0, B.o)({ orbPriceAmount: en?.amount, location: "product_details_modal" }),
        er = (0, T.CD)({ sku: et }),
        [ea, ei] = s.useState(0),
        [ec, eo] = s.useMemo(
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
                })(et?.tenantMetadata?.socialLayer?.carouselItems ?? [], u, X, { heroWidth: 747 }),
            [et, u, X],
        ),
        [eu, ed] = s.useState(null),
        [em, ex] = s.useState(!1);
    s.useEffect(() => {
        if (null == eu) return;
        let e = new ResizeObserver(() => {
            ex(eu.scrollHeight > eu.clientHeight);
        });
        return e.observe(eu), () => e.disconnect();
    }, [eu]);
    let eh = ea < eo.length ? ea : 0,
        eb = ec[eh] ?? null,
        ep = eo.length > 1,
        ej = eo.some((e) => "video" === e.type);
    (0, y.pE)(),
        (0, _.Ay)(() => {
            D.default.track(eN.HAw.OPEN_MODAL, { location_stack: q, type: eA.Nh, sku_id: c, application_id: u }),
                (0, M.Xw)();
        });
    let ev = s.useCallback(
            (e) => {
                D.default.track(eN.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: I?.sessionId,
                    sku_id: c,
                    guild_id: I?.guildId,
                    application_id: u,
                    cta_type: e,
                    location_stack: q,
                });
            },
            [I, c, u, q],
        ),
        eg = s.useCallback(
            (e) => {
                ei(e), ev(eE.Jq.CAROUSEL_ITEM);
            },
            [ev],
        );
    s.useEffect(() => {
        null == c || L.A.isFetchingForSKU(c) || (0, M.Pp)(u, c);
    }, [u, c]);
    let eT = s.useCallback(() => {
            null != et &&
                (ev(eE.Jq.FORWARD_BUTTON),
                (0, G.d)({
                    sku: et,
                    guildId: z,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: q,
                    analyticsContext: I,
                }));
        }, [et, z, ev, q, I]),
        eS = s.useCallback(() => {
            ev(eE.Jq.WISHLIST_BUTTON);
        }, [ev]),
        eR = s.useCallback(() => {
            (0, w.G)({ applicationId: u });
        }, [u]),
        eP = s.useCallback(() => {
            ev(eE.Jq.VISIT_SHOP), (0, b.closeAllModals)(), null != l ? l() : (0, w.default)({ applicationId: u });
        }, [u, ev, l]),
        eU = s.useCallback(() => {
            el(!ee), ev(eE.Jq.MUTE_BUTTON);
        }, [ee, ev]),
        eM = (0, F.F)("pdp", { applicationId: u, skuId: c }),
        eY = et?.tenantMetadata?.socialLayer;
    if (null == et || null == eY) return Q ? (0, n.jsx)(p.y, {}) : null;
    let eH = J?.storefront,
        eB = eH?.logoAssetId != null ? (0, P.YE)(eH.applicationId, eH.logoAssetId, 256) : null,
        eF = eH?.lightThemeLogoAssetId != null ? (0, P.YE)(eH.applicationId, eH.lightThemeLogoAssetId, 256) : null,
        ew = null;
    return (
        (ew = Z ? (eB ?? eF) : (eF ?? eB)),
        (0, n.jsx)(j.EO, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: eI.CR,
            size: j.rI.DYNAMIC,
            returnRef: r,
            children: (0, n.jsx)(j.$m, {
                className: eI.jE,
                children: (0, n.jsxs)("div", {
                    className: eI.nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: a()(eI.op, { [eI.uk]: et.exclusive }),
                            children: [
                                (0, n.jsx)("div", {
                                    className: eI.r$,
                                    children:
                                        null != ew
                                            ? (0, n.jsx)("img", { className: eI.wm, src: ew, alt: eH?.title ?? "" })
                                            : null,
                                }),
                                (0, n.jsxs)("div", {
                                    ref: ed,
                                    className: eI.zD,
                                    children: [
                                        et.exclusive &&
                                            (0, n.jsx)("div", { className: eI.K3, children: (0, n.jsx)(W.I, {}) }),
                                        ep
                                            ? (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(ek, { sku: et }),
                                                      (0, n.jsx)("div", {
                                                          className: eI._D,
                                                          children: (0, n.jsx)(K, {
                                                              mediaItems: eo,
                                                              labels: ec.map((e) => e.label),
                                                              selectedIndex: eh,
                                                              onSelectIndex: eg,
                                                          }),
                                                      }),
                                                      (0, n.jsx)(eD, {
                                                          selectedCarouselItem: eb,
                                                          title: eb?.title,
                                                          description: eb?.description,
                                                          applicationId: u,
                                                          className: eI.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, n.jsx)(eD, {
                                                  selectedCarouselItem: eb,
                                                  title: et.name,
                                                  description: et.description,
                                                  applicationId: u,
                                                  className: eI.cP,
                                              }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: a()(eI.Td, { [eI.t7]: em }),
                                    children: [
                                        (0, n.jsx)(eO, { orbPrice: en, orbsGate: es, formattedPrice: er }),
                                        null != eM &&
                                            (0, n.jsx)(ef.O, {
                                                Icon: eM.Icon,
                                                text: eM.text,
                                                endDatetime: eM.endsAt,
                                                tooltip: eM.tooltip,
                                            }),
                                        (0, n.jsx)(ey, {
                                            sku: et,
                                            guildId: z,
                                            giftRecipient: m?.id !== V ? m : void 0,
                                            giftingOrigin: m?.id !== V ? x : void 0,
                                            trackPDPClick: ev,
                                            analyticsLocations: q,
                                            orbPrice: en,
                                            orbsGate: es,
                                            formattedPrice: er,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: eI.il,
                            children: [
                                (0, n.jsx)(eC, { item: eo[eh], isMuted: ee, alt: eb?.label ?? et.name }),
                                !d &&
                                    (0, n.jsxs)(eL, {
                                        onClick: eP,
                                        onMouseDown: eR,
                                        ariaLabel: $.intl.string($.t["+v/1Dk"]),
                                        className: eI.gW,
                                        children: [
                                            (0, n.jsx)(v.U, { size: "refresh_sm", color: "currentColor" }),
                                            (0, n.jsx)(o.E, {
                                                variant: "text-md/medium",
                                                color: "currentColor",
                                                children: $.intl.string($.t["+v/1Dk"]),
                                            }),
                                        ],
                                    }),
                                (0, n.jsxs)("div", {
                                    className: eI.V7,
                                    children: [
                                        null != et &&
                                            (0, n.jsx)(e_._, {
                                                sku: et,
                                                isCardHovered: !0,
                                                className: a()(eI.jU, eI.ij),
                                                trackButtonClick: eS,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, n.jsx)(eL, {
                                            onClick: eT,
                                            ariaLabel: $.intl.string($.t.Ej3B3Y),
                                            children: (0, n.jsx)(k.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        ej &&
                                            (0, n.jsx)(eL, {
                                                onClick: eU,
                                                ariaLabel: ee ? $.intl.string($.t.YqAjXy) : $.intl.string($.t.w4m945),
                                                children: ee
                                                    ? (0, n.jsx)(g._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, n.jsx)(C.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, n.jsx)(eL, {
                                            onClick: O,
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
