t.d(l, { default: () => eL });
var s = t(477900),
    n = t(582128),
    r = t(503698),
    i = t.n(r),
    a = t(17928),
    o = t(935462),
    c = t(297264),
    u = t(834730),
    d = t(318254),
    m = t(638495),
    x = t(821609),
    h = t(939249),
    b = t(597770),
    p = t(366010),
    j = t(192308),
    _ = t(289873),
    f = t(34188),
    v = t(358618),
    N = t(983851),
    g = t(972213),
    k = t(964486),
    C = t(736653),
    I = t(793574),
    A = t(688810),
    E = t(429913),
    T = t(427209),
    O = t(977445),
    S = t(561573),
    y = t(288106),
    R = t(993046),
    D = t(801228),
    L = t(652165),
    P = t(594832),
    U = t(280450),
    w = t(67480),
    M = t(174459),
    H = t(371794),
    Y = t(871123),
    G = t(733391),
    B = t(832163),
    F = t(429635),
    q = t(69236),
    z = t(2157),
    W = t(44724);
t(321073);
var $ = t(898523),
    J = t(345938),
    V = t(510022),
    K = t(317560),
    X = t(99161),
    Q = t(105292),
    Z = t(698132);
function ee(e) {
    let { mediaItems: l, labels: t, selectedIndex: n, onSelectIndex: r } = e;
    return l.length <= 1
        ? null
        : (0, s.jsxs)("div", {
              className: Z.kL,
              children: [
                  (0, s.jsx)(u.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: Q.intl.string(Q.t.U7DAV9),
                  }),
                  (0, s.jsx)("div", {
                      className: Z.Vg,
                      children: l.map((e, l) =>
                          (0, s.jsx)(
                              h.D,
                              {
                                  className: i()(Z.xn, { [Z.Y4]: l === n }),
                                  onClick: () => r(l),
                                  "aria-label": t?.[l],
                                  "aria-pressed": l === n,
                                  children: (0, s.jsx)("img", {
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
    es = t(696292),
    en = t(617986),
    er = t(817519);
function ei(e) {
    let { orbsGate: l, orbPrice: t, onCheckout: r, onTrackEarnMoreOrbs: i, variant: a = "secondary" } = e,
        o = (0, m.k)(),
        c = n.useCallback(() => {
            (i(), (0, en.mA)({ fromContent: es.u.SOCIAL_LAYER_STOREFRONT }), (0, K.j)(o));
        }, [i, o]);
    return "HIDDEN" === l || null == t
        ? null
        : "NOT_ENOUGH_ORBS" === l
          ? (0, s.jsx)(x.$, { onClick: c, variant: a, icon: d.C, text: Q.intl.string(Q.t.H57f41), fullWidth: !0 })
          : (0, s.jsx)(x.$, {
                onClick: r,
                disabled: "NEEDS_NITRO" === l,
                variant: a,
                text: (0, s.jsx)("span", {
                    className: er.Y,
                    children: Q.intl.format(Q.t.lOtBOI, {
                        orbPrice: t.amount,
                        orbIconHook: () => (0, s.jsx)(d.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                    }),
                }),
                fullWidth: !0,
            });
}
var ea = t(310784),
    eo = t.n(ea),
    ec = t(775602),
    eu = t(654107),
    ed = t(175671),
    em = t(619517),
    ex = t(44788),
    eh = t(549100);
function eb(e) {
    return (0, ex.$o)({ ...e, className: eh.tN, mediaPlayerClassName: eh.yf });
}
function ep(e) {
    return (0, s.jsx)(em.Ay, { ...e });
}
function ej(e) {
    let { item: l, isMuted: t, className: r, alt: i = "" } = e,
        o = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, eu.rh)(l, "#000000");
            return n.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = eo()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        c = (0, a.bG)([ec.Ay], () => ec.Ay.useReducedMotion),
        [u, d] = n.useState(null),
        [m, x] = n.useState(l);
    m !== l && (x(l), m?.type === "image" && l?.type === "image" && m.src !== l.src ? d(m.src) : d(null));
    let h = n.useCallback(() => d(null), []);
    if (null == l) return null;
    let b = {
        background: o,
        backgroundImage: null != l.backgroundSrc ? `url(${l.backgroundSrc})` : void 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    return "video" === l.type
        ? (0, s.jsx)("div", {
              className: r ?? eh.kL,
              children: (0, s.jsx)(
                  "div",
                  {
                      className: `${eh.h4} ${eh.nR}`,
                      style: b,
                      children: (0, s.jsx)(
                          ed.rr,
                          {
                              href: null,
                              thumbnail: { url: l.videoThumbnailSrc, width: 747, height: 560 },
                              video: { url: l.src, proxyURL: l.src, width: 747, height: 560 },
                              provider: void 0,
                              allowFullScreen: !0,
                              maxHeight: 560,
                              maxWidth: 747,
                              playable: !0,
                              className: eh.Ki,
                              volume: 1,
                              autoMute: t,
                              autoPlay: !0,
                              disableClickToUnmute: !0,
                              renderVideoComponent: eb,
                              renderImageComponent: ep,
                              renderLinkComponent: ex.bU,
                          },
                          `${l.src}-${t ? "muted" : "unmuted"}`,
                      ),
                  },
                  l.src,
              ),
          })
        : (0, s.jsx)("div", {
              className: r ?? eh.kL,
              children: (0, s.jsxs)("div", {
                  className: eh.h4,
                  style: b,
                  children: [
                      (0, s.jsx)("img", { src: l.src, alt: i, className: eh.Sl }, l.src),
                      null != u && !c && (0, s.jsx)("img", { src: u, alt: "", className: eh.Ve, onAnimationEnd: h }, u),
                  ],
              }),
          });
}
var e_ = t(821707),
    ef = t(454491),
    ev = t(743693),
    eN = t(15061),
    eg = t(995393),
    ek = t(188275),
    eC = t(652215),
    eI = t(338235);
function eA(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, s.jsxs)("div", {
              className: eI.AX,
              children: [
                  (0, s.jsx)(c.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, s.jsx)(u.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function eE(e) {
    let { amount: l, orbGate: t } = e;
    return (0, s.jsxs)("div", {
        className: i()(eI.aX, { [eI.dQ]: "NEEDS_NITRO" === t || "NOT_ENOUGH_ORBS" === t }),
        children: [
            (0, s.jsx)(d.C, { size: "xs", color: "currentColor" }),
            (0, s.jsx)(u.E, { variant: "text-md/semibold", color: "currentColor", children: l }),
        ],
    });
}
function eT(e) {
    let { normalPrice: l, discountedPrice: t, discountPercent: n, hasNitroOffer: r } = e;
    return r && null != t
        ? (0, s.jsx)(e_.A, { discountedPrice: t, normalPrice: l })
        : null != n && null != t
          ? (0, s.jsxs)("div", {
                className: eI._k,
                children: [
                    (0, s.jsx)(u.E, { variant: "text-md/medium", className: eI.Jb, children: l }),
                    (0, s.jsx)(u.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                    (0, s.jsx)(u.E, { variant: "text-md/bold", className: eI.Fi, children: n }),
                ],
            })
          : (0, s.jsx)(u.E, { variant: "text-md/semibold", color: "text-strong", children: l });
}
function eO(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: n, hasNitroOffer: r } = e,
        { normalPrice: a, discountedPrice: o, discountPercent: c } = n;
    if (null == a) return null;
    let u = "HIDDEN" !== t && null != l,
        d = "CAN_CHECKOUT" === t;
    return (0, s.jsxs)("div", {
        className: eI.sj,
        children: [
            (0, s.jsx)(et.V, { textColor: "text-subtle" }),
            (0, s.jsx)("div", {
                className: i()(eI.hO, u && eI.XE),
                children:
                    u && d
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(eE, { amount: l.amount, orbGate: t }),
                                  (0, s.jsx)(eT, {
                                      normalPrice: a,
                                      discountedPrice: o,
                                      discountPercent: c,
                                      hasNitroOffer: r,
                                  }),
                              ],
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(eT, {
                                      normalPrice: a,
                                      discountedPrice: o,
                                      discountPercent: c,
                                      hasNitroOffer: r,
                                  }),
                                  u && (0, s.jsx)(eE, { amount: l.amount, orbGate: t }),
                              ],
                          }),
            }),
        ],
    });
}
function eS(e) {
    let {
            sku: l,
            guildId: t,
            giftRecipient: r,
            giftingOrigin: i,
            trackPDPClick: o,
            analyticsLocations: c,
            orbPrice: d,
            orbsGate: p,
            formattedPrice: j,
            unavailableLabel: _,
        } = e,
        f = (0, m.k)(),
        v = l.id,
        N = (0, a.bG)([B.A], () => B.A.getNormalizedSKUEligibility(v), [v]),
        g = N && "CAN_CHECKOUT" === p,
        k = j.discountedPrice ?? j.normalPrice,
        C = n.useCallback(() => {
            (o(eg.Jq.BUY_BUTTON),
                (0, X.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...c, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                        contextKey: f,
                    },
                ));
        }, [l, o, t, c, f]),
        A = n.useCallback(() => {
            (o(eg.Jq.GIFT_BUTTON),
                (0, X.a)(
                    l,
                    { isGift: !0, giftRecipient: r, giftingOrigin: i },
                    {
                        analyticsLocations: [...c, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON],
                        contextKey: f,
                    },
                ));
        }, [l, o, r, i, c, f]),
        T = (0, E.h)(l.applicationId),
        O = n.useMemo(() => [...c, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [c]),
        S = n.useCallback(() => {
            null != T &&
                (o(eg.Jq.BUY_WITH_ORBS_BUTTON),
                (0, L.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    contextKey: f,
                    onComplete: () => {
                        ((0, K.j)(f), (0, V.n)({ sku: l, application: T, analyticsLocations: O, contextKey: f }));
                    },
                    analyticsLocations: O,
                }));
        }, [l, T, O, o, f]),
        y = n.useCallback(() => {
            o(eg.Jq.EARN_MORE_ORBS_BUTTON);
        }, [o]),
        R = N
            ? (0, s.jsx)(ei, {
                  orbsGate: p,
                  orbPrice: d,
                  onCheckout: S,
                  onTrackEarnMoreOrbs: y,
                  variant: g ? "primary" : "secondary",
              })
            : null,
        D = (0, s.jsxs)("div", {
            className: eI.mr,
            children: [
                (0, s.jsx)(x.$, {
                    variant: g ? "secondary" : "primary",
                    onClick: C,
                    text: null != k ? Q.intl.format(Q.t.YkXGyY, { priceString: k }) : Q.intl.string(Q.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, s.jsx)(h.D, {
                    className: eI.xP,
                    onClick: A,
                    "aria-label": Q.intl.string(Q.t.QAZA5f),
                    role: "button",
                    children: (0, s.jsx)(b.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        P = (0, s.jsx)(x.$, {
            icon: b.GiftIcon,
            variant: "secondary",
            onClick: A,
            text: Q.intl.string(Q.t.QAZA5f),
            fullWidth: !0,
        });
    return null != _
        ? (0, s.jsxs)("div", {
              className: eI.NC,
              children: [
                  (0, s.jsx)(u.E, {
                      variant: "text-xxs/normal",
                      color: "text-subtle",
                      children: Q.intl.string(Q.t["35vxnc"]),
                  }),
                  (0, s.jsx)(x.$, { variant: "secondary", text: _, disabled: !0, fullWidth: !0 }),
              ],
          })
        : (0, s.jsxs)("div", {
              className: eI.NC,
              children: [
                  !N &&
                      (0, s.jsx)(u.E, {
                          variant: "text-xxs/normal",
                          color: "text-subtle",
                          children: Q.intl.string(Q.t.IqlPbQ),
                      }),
                  g && R,
                  N ? D : P,
                  !g && R,
              ],
          });
}
function ey(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let n = null != l.labelIconAssetId ? (0, H.YE)(t, l.labelIconAssetId) : null;
    return (0, s.jsxs)("div", {
        className: eI.HI,
        children: [
            null != n && (0, s.jsx)("img", { className: eI.IX, src: n, alt: "" }, n),
            (0, s.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eR(e) {
    let { onClick: l, onMouseDown: t, children: n, ariaLabel: r, className: i = eI.jU } = e;
    return (0, s.jsx)(h.D, { onClick: l, onMouseDown: t, className: i, "aria-label": r, role: "button", children: n });
}
function eD(e) {
    let { selectedCarouselItem: l, title: t, description: n, applicationId: r, className: i } = e;
    return (0, s.jsxs)("div", {
        className: i,
        children: [
            null != t && (0, s.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
            (0, s.jsx)(ey, { applicationId: r, selectedCarouselItem: l }),
            null != n && (0, s.jsx)(u.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
        ],
    });
}
function eL(e) {
    let {
            customNavigateToSocialLayerStorefront: l,
            transitionState: t,
            returnRef: r,
            skuId: c,
            applicationId: d,
            isStorefront: m,
            giftRecipient: x,
            giftingOrigin: h,
            analyticsLocations: b,
            analyticsContext: I,
            unavailableLabel: E,
            onClose: L,
        } = e,
        { analyticsLocations: V } = (0, A.Ay)(b ?? []),
        { guildId: K } = (0, Y.nG)(d),
        X = (0, a.bG)([U.default], () => U.default.getId());
    n.useEffect(() => {
        null != c && (0, G.iR)(d, c);
    }, [d, c]);
    let Z = (0, F.A)({ applicationId: d }),
        et = (0, a.bG)([B.A], () => B.A.getSkuAssets()),
        es = (0, a.bG)([w.A], () => w.A.isFetching(c)),
        en = (0, p.M)((0, C.Ay)()),
        [er, ei] = n.useState(!0),
        ea = (0, D.A)({ skuId: c }),
        eo = (0, a.bG)([S.A], () => S.A.getFetchStateForSkuId(c)?.type, [c]),
        ec = (0, O.uS)(d),
        eu = null == ea || ea.available || ec ? null : (E ?? Q.intl.string(Q.t.RWouSQ)),
        ed = (0, R.JL)({ sku: ea }),
        { display: em, reward: ex, offers: eh } = (0, z.b)({ surface: "pdp", applicationId: d, skuId: c }),
        eb = n.useMemo(() => eh.find((e) => e.type === y.B8.ORB_REDEMPTION) ?? null, [eh]),
        { state: ep, isReady: e_ } = (0, q.we)({ orbPriceAmount: ed?.amount, spendOrbsOffer: eb }),
        eE = (0, R.CD)({ sku: ea }),
        [eT, ey] = n.useState(0),
        [eL, eP] = n.useMemo(
            () =>
                (function (e, l, t, s) {
                    let { heroWidth: n } = s,
                        r = [],
                        i = [];
                    if (null == e || 0 === e.length) return [r, i];
                    for (let s of e) {
                        let e = null != s.assetId ? t[s.assetId] : null;
                        null != e &&
                            (r.push(s),
                            e.mime_type.startsWith("video/")
                                ? i.push({
                                      type: "video",
                                      src: (0, H.YE)(l, e, n, "mp4"),
                                      videoThumbnailSrc: (0, H.YE)(l, e, n, "webp"),
                                      thumbnailSrc:
                                          null != s.thumbnailAssetId
                                              ? (0, H.YE)(l, s.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != s.backgroundAssetId
                                              ? (0, H.YE)(l, s.backgroundAssetId, n, Y.pV)
                                              : void 0,
                                  })
                                : i.push({
                                      type: "image",
                                      src: (0, H.YE)(l, e, n, "webp"),
                                      thumbnailSrc:
                                          null != s.thumbnailAssetId
                                              ? (0, H.YE)(l, s.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != s.backgroundAssetId
                                              ? (0, H.YE)(l, s.backgroundAssetId, n, Y.pV)
                                              : void 0,
                                  }));
                    }
                    return [r, i];
                })(ea?.tenantMetadata?.socialLayer?.carouselItems ?? [], d, et, { heroWidth: 747 }),
            [ea, d, et],
        ),
        [eU, ew] = n.useState(null),
        [eM, eH] = n.useState(!1);
    n.useEffect(() => {
        if (null == eU) return;
        let e = new ResizeObserver(() => {
            eH(eU.scrollHeight > eU.clientHeight);
        });
        return (e.observe(eU), () => e.disconnect());
    }, [eU]);
    let eY = eT < eP.length ? eT : 0,
        eG = eL[eY] ?? null,
        eB = eP.length > 1,
        eF = eP.some((e) => "video" === e.type);
    ((0, P.pE)(),
        (0, k.Ay)(() => {
            (M.default.track(eC.HAw.OPEN_MODAL, { location_stack: V, type: ek.Nh, sku_id: c, application_id: d }),
                (0, G.Xw)());
        }));
    let eq = n.useCallback(
            (e) => {
                M.default.track(eC.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: I?.sessionId,
                    sku_id: c,
                    sku_storefront_promotion_id: (0, $.Z)(c),
                    guild_id: I?.guildId,
                    application_id: d,
                    cta_type: e,
                    location_stack: V,
                });
            },
            [I, c, d, V],
        ),
        ez = n.useRef(!1),
        eW = n.useRef(null),
        e$ = "success" === eo && null != ea,
        eJ = e$ && e_;
    n.useEffect(() => {
        if (ez.current) return;
        function e() {
            ez.current ||
                ((ez.current = !0),
                M.default.track(eC.HAw.SLAYER_STOREFRONT_PDP_VIEWED, {
                    slayer_storefront_session_id: I?.sessionId,
                    sku_id: c,
                    sku_storefront_promotion_id: (0, $.Z)(c),
                    guild_id: I?.guildId ?? K,
                    application_id: d,
                    placement: I?.placement,
                    orbs_purchase_gate_state: e$ || "HIDDEN" !== ep ? ep : void 0,
                    orb_price: "HIDDEN" === ep ? void 0 : ed?.amount,
                    orbs_purchase_gate_settled: eJ,
                    location_stack: V,
                }));
        }
        if (eJ || "error" === eo) return void e();
        eW.current ??= Date.now() + 5e3;
        let l = setTimeout(e, Math.max(0, eW.current - Date.now()));
        return () => clearTimeout(l);
    }, [ep, e$, eJ, eo, I, c, d, K, ed?.amount, V]);
    let eV = n.useCallback(
        (e) => {
            (ey(e), eq(eg.Jq.CAROUSEL_ITEM));
        },
        [eq],
    );
    n.useEffect(() => {
        null == c || w.A.isFetching(c) || (0, G.Pp)(d, c);
    }, [d, c]);
    let eK = n.useCallback(() => {
            null != ea &&
                (eq(eg.Jq.FORWARD_BUTTON),
                (0, J.d)({
                    sku: ea,
                    guildId: K,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: V,
                    analyticsContext: I,
                }));
        }, [ea, K, eq, V, I]),
        eX = n.useCallback(() => {
            eq(eg.Jq.WISHLIST_BUTTON);
        }, [eq]),
        eQ = n.useCallback(() => {
            (0, W.G)({ applicationId: d });
        }, [d]),
        eZ = n.useCallback(() => {
            (eq(eg.Jq.VISIT_SHOP), (0, j.closeAllModals)(), null != l ? l() : (0, W.default)({ applicationId: d }));
        }, [d, eq, l]),
        e0 = n.useCallback(() => {
            (ei(!er), eq(eg.Jq.MUTE_BUTTON));
        }, [er, eq]),
        e1 = ea?.tenantMetadata?.socialLayer;
    if (null == ea || null == e1) return es ? (0, s.jsx)(_.y, {}) : null;
    let e2 = Z?.storefront,
        e7 = e2?.logoAssetId != null ? (0, H.YE)(e2.applicationId, e2.logoAssetId, 256) : null,
        e3 = e2?.lightThemeLogoAssetId != null ? (0, H.YE)(e2.applicationId, e2.lightThemeLogoAssetId, 256) : null,
        e4 = null;
    e4 = en ? (e7 ?? e3) : (e3 ?? e7);
    let e9 = null;
    return (
        null != eu ? (e9 = (0, s.jsx)(eN.G, { label: eu })) : ea.exclusive && (e9 = (0, s.jsx)(el.I, {})),
        (0, s.jsx)(o.EO, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: eI.CR,
            size: o.rI.DYNAMIC,
            returnRef: r,
            children: (0, s.jsx)(o.$m, {
                className: eI.jE,
                scrollbarGutter: !1,
                children: (0, s.jsxs)("div", {
                    className: eI.nr,
                    children: [
                        (0, s.jsxs)("div", {
                            className: i()(eI.op, { [eI.uk]: ea.exclusive }),
                            children: [
                                (0, s.jsx)("div", {
                                    className: eI.r$,
                                    children:
                                        null != e4
                                            ? (0, s.jsx)("img", { className: eI.wm, src: e4, alt: e2?.title ?? "" })
                                            : null,
                                }),
                                (0, s.jsxs)("div", {
                                    ref: ew,
                                    className: eI.zD,
                                    children: [
                                        null != e9 && (0, s.jsx)("div", { className: eI.Od, children: e9 }),
                                        eB
                                            ? (0, s.jsxs)(s.Fragment, {
                                                  children: [
                                                      (0, s.jsx)(eA, { sku: ea }),
                                                      (0, s.jsx)("div", {
                                                          className: eI._D,
                                                          children: (0, s.jsx)(ee, {
                                                              mediaItems: eP,
                                                              labels: eL.map((e) => e.label),
                                                              selectedIndex: eY,
                                                              onSelectIndex: eV,
                                                          }),
                                                      }),
                                                      (0, s.jsx)(eD, {
                                                          selectedCarouselItem: eG,
                                                          title: eG?.title,
                                                          description: eG?.description,
                                                          applicationId: d,
                                                          className: eI.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, s.jsx)(eD, {
                                                  selectedCarouselItem: eG,
                                                  title: ea.name,
                                                  description: ea.description,
                                                  applicationId: d,
                                                  className: eI.cP,
                                              }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: i()(eI.Td, { [eI.t7]: eM }),
                                    children: [
                                        (0, s.jsx)(eO, {
                                            orbPrice: ed,
                                            orbsGate: ep,
                                            formattedPrice: eE,
                                            hasNitroOffer: em?.flavor === "nitro",
                                        }),
                                        null != em &&
                                            (0, s.jsx)(ef.e, {
                                                promotion: em,
                                                reward: ex,
                                                applicationId: d,
                                                analyticsLocations: V,
                                                onUpsellClick: () => eq(eg.Jq.NITRO_UPSELL_BUTTON),
                                            }),
                                        (0, s.jsx)(eS, {
                                            sku: ea,
                                            guildId: K,
                                            giftRecipient: x?.id !== X ? x : void 0,
                                            giftingOrigin: x?.id !== X ? h : void 0,
                                            trackPDPClick: eq,
                                            analyticsLocations: V,
                                            orbPrice: ed,
                                            orbsGate: ep,
                                            formattedPrice: eE,
                                            unavailableLabel: eu,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: eI.il,
                            children: [
                                (0, s.jsx)(ej, { item: eP[eY], isMuted: er, alt: eG?.label ?? ea.name }),
                                !m &&
                                    (0, s.jsxs)(eR, {
                                        onClick: eZ,
                                        onMouseDown: eQ,
                                        ariaLabel: Q.intl.string(Q.t["+v/1Dk"]),
                                        className: eI.gW,
                                        children: [
                                            (0, s.jsx)(f.U, { size: "refresh_sm", color: "currentColor" }),
                                            (0, s.jsx)(u.E, {
                                                variant: "text-md/medium",
                                                color: "currentColor",
                                                children: Q.intl.string(Q.t["+v/1Dk"]),
                                            }),
                                        ],
                                    }),
                                (0, s.jsxs)("div", {
                                    className: eI.V7,
                                    children: [
                                        null != ea &&
                                            (0, s.jsx)(ev._, {
                                                sku: ea,
                                                isCardHovered: !0,
                                                className: i()(eI.jU, eI.ij),
                                                trackButtonClick: eX,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, s.jsx)(eR, {
                                            onClick: eK,
                                            ariaLabel: Q.intl.string(Q.t.Ej3B3Y),
                                            children: (0, s.jsx)(T.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        eF &&
                                            (0, s.jsx)(eR, {
                                                onClick: e0,
                                                ariaLabel: er ? Q.intl.string(Q.t.YqAjXy) : Q.intl.string(Q.t.w4m945),
                                                children: er
                                                    ? (0, s.jsx)(v._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, s.jsx)(N.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, s.jsx)(eR, {
                                            onClick: L,
                                            ariaLabel: Q.intl.string(Q.t.cpT0Cq),
                                            children: (0, s.jsx)(g.XLargeIcon, {
                                                size: "refresh_sm",
                                                color: "currentColor",
                                            }),
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
