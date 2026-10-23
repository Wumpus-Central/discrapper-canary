t.d(l, { default: () => eP });
var s = t(477900),
    n = t(582128),
    r = t(503698),
    a = t.n(r),
    i = t(17928),
    o = t(935462),
    c = t(297264),
    d = t(834730),
    u = t(318254),
    m = t(638495),
    x = t(821609),
    h = t(939249),
    b = t(597770),
    p = t(366010),
    j = t(192308),
    _ = t(289873),
    N = t(34188),
    f = t(358618),
    v = t(983851),
    g = t(972213),
    k = t(241524),
    A = t(964486),
    C = t(736653),
    I = t(793574),
    E = t(688810),
    T = t(429913),
    O = t(427209),
    S = t(977445),
    y = t(561573),
    R = t(288106),
    D = t(993046),
    L = t(801228),
    P = t(652165),
    U = t(594832),
    w = t(280450),
    M = t(67480),
    H = t(174459),
    Y = t(371794),
    G = t(871123),
    B = t(733391),
    F = t(832163),
    q = t(429635),
    z = t(69236),
    W = t(2157),
    $ = t(44724);
t(321073);
var J = t(898523),
    V = t(345938),
    K = t(510022),
    X = t(317560),
    Q = t(99161),
    Z = t(105292),
    ee = t(698132);
function el(e) {
    let { mediaItems: l, labels: t, selectedIndex: n, onSelectIndex: r } = e;
    return l.length <= 1
        ? null
        : (0, s.jsxs)("div", {
              className: ee.kL,
              children: [
                  (0, s.jsx)(d.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: Z.intl.string(Z.t.U7DAV9),
                  }),
                  (0, s.jsx)("div", {
                      className: ee.Vg,
                      children: l.map((e, l) =>
                          (0, s.jsx)(
                              h.D,
                              {
                                  className: a()(ee.xn, { [ee.Y4]: l === n }),
                                  onClick: () => r(l),
                                  "aria-label": t?.[l],
                                  "aria-pressed": l === n,
                                  children: (0, s.jsx)("img", {
                                      className: ee.q_,
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
var et = t(263911),
    es = t(971146),
    en = t(696292),
    er = t(617986),
    ea = t(817519);
function ei(e) {
    let { orbsGate: l, orbPrice: t, onCheckout: r, onTrackEarnMoreOrbs: a, variant: i = "secondary" } = e,
        o = (0, m.k)(),
        c = n.useCallback(() => {
            (a(), (0, er.mA)({ fromContent: en.u.SOCIAL_LAYER_STOREFRONT }), (0, X.j)(o));
        }, [a, o]);
    return "HIDDEN" === l || null == t
        ? null
        : "NOT_ENOUGH_ORBS" === l
          ? (0, s.jsx)(x.$, { onClick: c, variant: i, icon: u.C, text: Z.intl.string(Z.t.H57f41), fullWidth: !0 })
          : (0, s.jsx)(x.$, {
                onClick: r,
                disabled: "NEEDS_NITRO" === l,
                variant: i,
                text: (0, s.jsx)("span", {
                    className: ea.Y,
                    children: Z.intl.format(Z.t.lOtBOI, {
                        orbPrice: t.amount,
                        orbIconHook: () => (0, s.jsx)(u.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                    }),
                }),
                fullWidth: !0,
            });
}
var eo = t(310784),
    ec = t.n(eo),
    ed = t(775602),
    eu = t(654107),
    em = t(161573),
    ex = t(619517),
    eh = t(44788),
    eb = t(549100);
function ep(e) {
    return (0, eh.$o)({ ...e, className: eb.tN, mediaPlayerClassName: eb.yf });
}
function ej(e) {
    return (0, s.jsx)(ex.Ay, { ...e });
}
function e_(e) {
    let { item: l, isMuted: t, className: r, alt: a = "" } = e,
        o = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, eu.rh)(l, "#000000");
            return n.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = ec()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        c = (0, i.bG)([ed.Ay], () => ed.Ay.useReducedMotion),
        [d, u] = n.useState(null),
        [m, x] = n.useState(l);
    m !== l && (x(l), m?.type === "image" && l?.type === "image" && m.src !== l.src ? u(m.src) : u(null));
    let h = n.useCallback(() => u(null), []);
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
              className: r ?? eb.kL,
              children: (0, s.jsx)(
                  "div",
                  {
                      className: `${eb.h4} ${eb.nR}`,
                      style: b,
                      children: (0, s.jsx)(
                          em.rr,
                          {
                              href: null,
                              thumbnail: { url: l.videoThumbnailSrc, width: 747, height: 560 },
                              video: { url: l.src, proxyURL: l.src, width: 747, height: 560 },
                              provider: void 0,
                              allowFullScreen: !0,
                              maxHeight: 560,
                              maxWidth: 747,
                              playable: !0,
                              className: eb.Ki,
                              volume: 1,
                              autoMute: t,
                              autoPlay: !0,
                              disableClickToUnmute: !0,
                              renderVideoComponent: ep,
                              renderImageComponent: ej,
                              renderLinkComponent: eh.bU,
                          },
                          `${l.src}-${t ? "muted" : "unmuted"}`,
                      ),
                  },
                  l.src,
              ),
          })
        : (0, s.jsx)("div", {
              className: r ?? eb.kL,
              children: (0, s.jsxs)("div", {
                  className: eb.h4,
                  style: b,
                  children: [
                      (0, s.jsx)("img", { src: l.src, alt: a, className: eb.Sl }, l.src),
                      null != d && !c && (0, s.jsx)("img", { src: d, alt: "", className: eb.Ve, onAnimationEnd: h }, d),
                  ],
              }),
          });
}
var eN = t(821707),
    ef = t(454491),
    ev = t(743693),
    eg = t(15061),
    ek = t(995393),
    eA = t(188275),
    eC = t(652215),
    eI = t(338235);
function eE(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, s.jsxs)("div", {
              className: eI.AX,
              children: [
                  (0, s.jsx)(c.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, s.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function eT(e) {
    let { amount: l, orbGate: t } = e;
    return (0, s.jsxs)("div", {
        className: a()(eI.aX, { [eI.dQ]: "NEEDS_NITRO" === t || "NOT_ENOUGH_ORBS" === t }),
        children: [
            (0, s.jsx)(u.C, { size: "xs", color: "currentColor" }),
            (0, s.jsx)(d.E, { variant: "text-md/semibold", color: "currentColor", children: l }),
        ],
    });
}
function eO(e) {
    let { normalPrice: l, discountedPrice: t, discountPercent: n, hasNitroOffer: r, wrap: a } = e;
    return r && null != t
        ? (0, s.jsx)(eN.A, { discountedPrice: t, normalPrice: l, wrap: a })
        : null != n && null != t
          ? (0, s.jsxs)("div", {
                className: eI._k,
                children: [
                    (0, s.jsx)(d.E, { variant: "text-md/medium", className: eI.Jb, children: l }),
                    (0, s.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                    (0, s.jsx)(d.E, { variant: "text-md/bold", className: eI.Fi, children: n }),
                ],
            })
          : (0, s.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: l });
}
function eS(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: n, hasNitroOffer: r, wrap: i } = e,
        { normalPrice: o, discountedPrice: c, discountPercent: d } = n;
    if (null == o) return null;
    let u = "HIDDEN" !== t && null != l,
        m = "CAN_CHECKOUT" === t;
    return (0, s.jsxs)("div", {
        className: eI.sj,
        children: [
            (0, s.jsx)(es.V, { textColor: "text-subtle" }),
            (0, s.jsx)("div", {
                className: a()(eI.hO, u && eI.XE),
                children:
                    u && m
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(eT, { amount: l.amount, orbGate: t }),
                                  (0, s.jsx)(eO, {
                                      normalPrice: o,
                                      discountedPrice: c,
                                      discountPercent: d,
                                      hasNitroOffer: r,
                                      wrap: i,
                                  }),
                              ],
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(eO, {
                                      normalPrice: o,
                                      discountedPrice: c,
                                      discountPercent: d,
                                      hasNitroOffer: r,
                                      wrap: i,
                                  }),
                                  u && (0, s.jsx)(eT, { amount: l.amount, orbGate: t }),
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
            trackPDPClick: o,
            analyticsLocations: c,
            orbPrice: u,
            orbsGate: p,
            formattedPrice: j,
            unavailableLabel: _,
        } = e,
        N = (0, m.k)(),
        f = l.id,
        v = (0, i.bG)([F.A], () => F.A.getNormalizedSKUEligibility(f), [f]),
        g = v && "CAN_CHECKOUT" === p,
        k = j.discountedPrice ?? j.normalPrice,
        A = n.useCallback(() => {
            (o(ek.Jq.BUY_BUTTON),
                (0, Q.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...c, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                        contextKey: N,
                    },
                ));
        }, [l, o, t, c, N]),
        C = n.useCallback(() => {
            (o(ek.Jq.GIFT_BUTTON),
                (0, Q.a)(
                    l,
                    { isGift: !0, giftRecipient: r, giftingOrigin: a },
                    {
                        analyticsLocations: [...c, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON],
                        contextKey: N,
                    },
                ));
        }, [l, o, r, a, c, N]),
        E = (0, T.h)(l.applicationId),
        O = n.useMemo(() => [...c, I.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [c]),
        S = n.useCallback(() => {
            null != E &&
                (o(ek.Jq.BUY_WITH_ORBS_BUTTON),
                (0, P.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    contextKey: N,
                    onComplete: () => {
                        ((0, X.j)(N), (0, K.n)({ sku: l, application: E, analyticsLocations: O, contextKey: N }));
                    },
                    analyticsLocations: O,
                }));
        }, [l, E, O, o, N]),
        y = n.useCallback(() => {
            o(ek.Jq.EARN_MORE_ORBS_BUTTON);
        }, [o]),
        R = v
            ? (0, s.jsx)(ei, {
                  orbsGate: p,
                  orbPrice: u,
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
                    onClick: A,
                    text: null != k ? Z.intl.format(Z.t.YkXGyY, { priceString: k }) : Z.intl.string(Z.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, s.jsx)(h.D, {
                    className: eI.xP,
                    onClick: C,
                    "aria-label": Z.intl.string(Z.t.QAZA5f),
                    role: "button",
                    children: (0, s.jsx)(b.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        L = (0, s.jsx)(x.$, {
            icon: b.GiftIcon,
            variant: "secondary",
            onClick: C,
            text: Z.intl.string(Z.t.QAZA5f),
            fullWidth: !0,
        });
    return null != _
        ? (0, s.jsxs)("div", {
              className: eI.NC,
              children: [
                  (0, s.jsx)(d.E, {
                      variant: "text-xxs/normal",
                      color: "text-subtle",
                      children: Z.intl.string(Z.t["35vxnc"]),
                  }),
                  (0, s.jsx)(x.$, { variant: "secondary", text: _, disabled: !0, fullWidth: !0 }),
              ],
          })
        : (0, s.jsxs)("div", {
              className: eI.NC,
              children: [
                  !v &&
                      (0, s.jsx)(d.E, {
                          variant: "text-xxs/normal",
                          color: "text-subtle",
                          children: Z.intl.string(Z.t.IqlPbQ),
                      }),
                  g && R,
                  v ? D : L,
                  !g && R,
              ],
          });
}
function eR(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let n = null != l.labelIconAssetId ? (0, Y.YE)(t, l.labelIconAssetId) : null;
    return (0, s.jsxs)("div", {
        className: eI.HI,
        children: [
            null != n && (0, s.jsx)("img", { className: eI.IX, src: n, alt: "" }, n),
            (0, s.jsx)(d.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eD(e) {
    let { onClick: l, onMouseDown: t, children: n, ariaLabel: r, className: a = eI.jU } = e;
    return (0, s.jsx)(h.D, { onClick: l, onMouseDown: t, className: a, "aria-label": r, role: "button", children: n });
}
function eL(e) {
    let { selectedCarouselItem: l, title: t, description: n, applicationId: r, className: a } = e;
    return (0, s.jsxs)("div", {
        className: a,
        children: [
            null != t && (0, s.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
            (0, s.jsx)(eR, { applicationId: r, selectedCarouselItem: l }),
            null != n && (0, s.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
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
            isStorefront: m,
            giftRecipient: x,
            giftingOrigin: h,
            analyticsLocations: b,
            analyticsContext: I,
            unavailableLabel: T,
            onClose: P,
        } = e,
        K = (0, k.A)("(max-width: 485px)"),
        { analyticsLocations: X } = (0, E.Ay)(b ?? []),
        { guildId: Q } = (0, G.nG)(u),
        ee = (0, i.bG)([w.default], () => w.default.getId());
    n.useEffect(() => {
        null != c && (0, B.iR)(u, c);
    }, [u, c]);
    let es = (0, q.A)({ applicationId: u }),
        en = (0, i.bG)([F.A], () => F.A.getSkuAssets()),
        er = (0, i.bG)([M.A], () => M.A.isFetching(c)),
        ea = (0, p.M)((0, C.Ay)()),
        [ei, eo] = n.useState(!0),
        ec = (0, L.A)({ skuId: c }),
        ed = (0, i.bG)([y.A], () => y.A.getFetchStateForSkuId(c)?.type, [c]),
        eu = (0, S.uS)(u),
        em = null == ec || ec.available || eu ? null : (T ?? Z.intl.string(Z.t.RWouSQ)),
        ex = (0, D.JL)({ sku: ec }),
        { display: eh, reward: eb, offers: ep } = (0, W.b)({ surface: "pdp", applicationId: u, skuId: c }),
        ej = n.useMemo(() => ep.find((e) => e.type === R.B8.ORB_REDEMPTION) ?? null, [ep]),
        { state: eN, isReady: eT } = (0, z.we)({ orbPriceAmount: ex?.amount, spendOrbsOffer: ej }),
        eO = (0, D.CD)({ sku: ec }),
        [eR, eP] = n.useState(0),
        [eU, ew] = n.useMemo(
            () =>
                (function (e, l, t, s) {
                    let { heroWidth: n } = s,
                        r = [],
                        a = [];
                    if (null == e || 0 === e.length) return [r, a];
                    for (let s of e) {
                        let e = null != s.assetId ? t[s.assetId] : null;
                        null != e &&
                            (r.push(s),
                            e.mime_type.startsWith("video/")
                                ? a.push({
                                      type: "video",
                                      src: (0, Y.YE)(l, e, n, "mp4"),
                                      videoThumbnailSrc: (0, Y.YE)(l, e, n, "webp"),
                                      thumbnailSrc:
                                          null != s.thumbnailAssetId
                                              ? (0, Y.YE)(l, s.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != s.backgroundAssetId
                                              ? (0, Y.YE)(l, s.backgroundAssetId, n, G.pV)
                                              : void 0,
                                  })
                                : a.push({
                                      type: "image",
                                      src: (0, Y.YE)(l, e, n, "webp"),
                                      thumbnailSrc:
                                          null != s.thumbnailAssetId
                                              ? (0, Y.YE)(l, s.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != s.backgroundAssetId
                                              ? (0, Y.YE)(l, s.backgroundAssetId, n, G.pV)
                                              : void 0,
                                  }));
                    }
                    return [r, a];
                })(ec?.tenantMetadata?.socialLayer?.carouselItems ?? [], u, en, { heroWidth: 747 }),
            [ec, u, en],
        ),
        [eM, eH] = n.useState(null),
        [eY, eG] = n.useState(!1);
    n.useEffect(() => {
        if (null == eM) return;
        let e = new ResizeObserver(() => {
            eG(eM.scrollHeight > eM.clientHeight);
        });
        return (e.observe(eM), () => e.disconnect());
    }, [eM]);
    let eB = eR < ew.length ? eR : 0,
        eF = eU[eB] ?? null,
        eq = ew.length > 1,
        ez = ew.some((e) => "video" === e.type);
    ((0, U.pE)(),
        (0, A.Ay)(() => {
            (H.default.track(eC.HAw.OPEN_MODAL, { location_stack: X, type: eA.Nh, sku_id: c, application_id: u }),
                (0, B.Xw)());
        }));
    let eW = n.useCallback(
            (e) => {
                H.default.track(eC.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: I?.sessionId,
                    sku_id: c,
                    sku_storefront_promotion_id: (0, J.Z)(c),
                    guild_id: I?.guildId,
                    application_id: u,
                    cta_type: e,
                    location_stack: X,
                });
            },
            [I, c, u, X],
        ),
        e$ = n.useRef(!1),
        eJ = n.useRef(null),
        eV = "success" === ed && null != ec,
        eK = eV && eT;
    n.useEffect(() => {
        if (e$.current) return;
        function e() {
            e$.current ||
                ((e$.current = !0),
                H.default.track(eC.HAw.SLAYER_STOREFRONT_PDP_VIEWED, {
                    slayer_storefront_session_id: I?.sessionId,
                    sku_id: c,
                    sku_storefront_promotion_id: (0, J.Z)(c),
                    guild_id: I?.guildId ?? Q,
                    application_id: u,
                    placement: I?.placement,
                    orbs_purchase_gate_state: eV || "HIDDEN" !== eN ? eN : void 0,
                    orb_price: "HIDDEN" === eN ? void 0 : ex?.amount,
                    orbs_purchase_gate_settled: eK,
                    location_stack: X,
                }));
        }
        if (eK || "error" === ed) return void e();
        eJ.current ??= Date.now() + 5e3;
        let l = setTimeout(e, Math.max(0, eJ.current - Date.now()));
        return () => clearTimeout(l);
    }, [eN, eV, eK, ed, I, c, u, Q, ex?.amount, X]);
    let eX = n.useCallback(
        (e) => {
            (eP(e), eW(ek.Jq.CAROUSEL_ITEM));
        },
        [eW],
    );
    n.useEffect(() => {
        null == c || M.A.isFetching(c) || (0, B.Pp)(u, c);
    }, [u, c]);
    let eQ = n.useCallback(() => {
            null != ec &&
                (eW(ek.Jq.FORWARD_BUTTON),
                (0, V.d)({
                    sku: ec,
                    guildId: Q,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: X,
                    analyticsContext: I,
                }));
        }, [ec, Q, eW, X, I]),
        eZ = n.useCallback(() => {
            eW(ek.Jq.WISHLIST_BUTTON);
        }, [eW]),
        e0 = n.useCallback(() => {
            (0, $.G)({ applicationId: u });
        }, [u]),
        e1 = n.useCallback(() => {
            (eW(ek.Jq.VISIT_SHOP), (0, j.closeAllModals)(), null != l ? l() : (0, $.default)({ applicationId: u }));
        }, [u, eW, l]),
        e2 = n.useCallback(() => {
            (eo(!ei), eW(ek.Jq.MUTE_BUTTON));
        }, [ei, eW]),
        e4 = ec?.tenantMetadata?.socialLayer;
    if (null == ec || null == e4) return er ? (0, s.jsx)(_.y, {}) : null;
    let e3 = es?.storefront,
        e7 = e3?.logoAssetId != null ? (0, Y.YE)(e3.applicationId, e3.logoAssetId, 256) : null,
        e5 = e3?.lightThemeLogoAssetId != null ? (0, Y.YE)(e3.applicationId, e3.lightThemeLogoAssetId, 256) : null,
        e9 = null;
    e9 = ea ? (e7 ?? e5) : (e5 ?? e7);
    let e8 = null;
    null != em ? (e8 = (0, s.jsx)(eg.G, { label: em })) : ec.exclusive && (e8 = (0, s.jsx)(et.I, {}));
    let e6 = (0, s.jsxs)(s.Fragment, {
            children: [
                !m &&
                    (0, s.jsxs)(eD, {
                        onClick: e1,
                        onMouseDown: e0,
                        ariaLabel: Z.intl.string(Z.t["+v/1Dk"]),
                        className: eI.gW,
                        children: [
                            (0, s.jsx)(N.U, { size: "refresh_sm", color: "currentColor" }),
                            (0, s.jsx)(d.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: Z.intl.string(Z.t["+v/1Dk"]),
                            }),
                        ],
                    }),
                (0, s.jsxs)("div", {
                    className: eI.V7,
                    children: [
                        null != ec &&
                            (0, s.jsx)(ev._, {
                                sku: ec,
                                isCardHovered: !0,
                                className: a()(eI.jU, eI.ij),
                                trackButtonClick: eZ,
                                variant: K ? "secondary" : "overlay-secondary",
                                location: "social_layer_storefront_product_details_modal",
                            }),
                        (0, s.jsx)(eD, {
                            onClick: eQ,
                            ariaLabel: Z.intl.string(Z.t.Ej3B3Y),
                            children: (0, s.jsx)(O.A, { size: "refresh_sm", color: "currentColor" }),
                        }),
                        ez &&
                            (0, s.jsx)(eD, {
                                onClick: e2,
                                ariaLabel: ei ? Z.intl.string(Z.t.YqAjXy) : Z.intl.string(Z.t.w4m945),
                                children: ei
                                    ? (0, s.jsx)(f._, { size: "refresh_sm", color: "currentColor" })
                                    : (0, s.jsx)(v.H, { size: "refresh_sm", color: "currentColor" }),
                            }),
                        (0, s.jsx)(eD, {
                            onClick: P,
                            ariaLabel: Z.intl.string(Z.t.cpT0Cq),
                            children: (0, s.jsx)(g.XLargeIcon, { size: "refresh_sm", color: "currentColor" }),
                        }),
                    ],
                }),
            ],
        }),
        le = (0, s.jsxs)("div", {
            className: a()(eI.Td, { [eI.t7]: eY }),
            children: [
                (0, s.jsx)(eS, {
                    orbPrice: ex,
                    orbsGate: eN,
                    formattedPrice: eO,
                    hasNitroOffer: eh?.flavor === "nitro",
                    wrap: K,
                }),
                null != eh &&
                    (0, s.jsx)(ef.e, {
                        promotion: eh,
                        reward: eb,
                        applicationId: u,
                        analyticsLocations: X,
                        onUpsellClick: () => eW(ek.Jq.NITRO_UPSELL_BUTTON),
                    }),
                (0, s.jsx)(ey, {
                    sku: ec,
                    guildId: Q,
                    giftRecipient: x?.id !== ee ? x : void 0,
                    giftingOrigin: x?.id !== ee ? h : void 0,
                    trackPDPClick: eW,
                    analyticsLocations: X,
                    orbPrice: ex,
                    orbsGate: eN,
                    formattedPrice: eO,
                    unavailableLabel: em,
                }),
            ],
        }),
        ll = (0, s.jsxs)("div", {
            className: eI.il,
            children: [(0, s.jsx)(e_, { item: ew[eB], isMuted: ei, alt: eF?.label ?? ec.name }), !K && e6],
        });
    return (0, s.jsxs)(o.EO, {
        transitionState: t,
        "hide-shadow": !0,
        parentComponent: "SocialLayerStorefrontProductDetailsModal",
        className: eI.CR,
        size: o.rI.DYNAMIC,
        "aria-label": ec.name,
        returnRef: r,
        children: [
            K &&
                (0, s.jsxs)("div", {
                    className: eI.Od,
                    children: [
                        m &&
                            null != e9 &&
                            (0, s.jsx)("div", {
                                className: eI.mA,
                                children: (0, s.jsx)("img", { className: eI.wm, src: e9, alt: e3?.title ?? "" }),
                            }),
                        e6,
                    ],
                }),
            (0, s.jsxs)(o.$m, {
                className: eI.jE,
                scrollbarGutter: !1,
                children: [
                    (0, s.jsxs)("div", {
                        className: eI.nr,
                        children: [
                            K && ll,
                            (0, s.jsxs)("div", {
                                className: a()(eI.op, { [eI.uk]: ec.exclusive }),
                                children: [
                                    !K &&
                                        (0, s.jsx)("div", {
                                            className: eI.r$,
                                            children:
                                                null != e9
                                                    ? (0, s.jsx)("img", {
                                                          className: eI.wm,
                                                          src: e9,
                                                          alt: e3?.title ?? "",
                                                      })
                                                    : null,
                                        }),
                                    (0, s.jsxs)("div", {
                                        ref: eH,
                                        className: eI.zD,
                                        children: [
                                            null != e8 && (0, s.jsx)("div", { className: eI.vS, children: e8 }),
                                            eq
                                                ? (0, s.jsxs)(s.Fragment, {
                                                      children: [
                                                          (0, s.jsx)(eE, { sku: ec }),
                                                          (0, s.jsx)("div", {
                                                              className: eI._D,
                                                              children: (0, s.jsx)(el, {
                                                                  mediaItems: ew,
                                                                  labels: eU.map((e) => e.label),
                                                                  selectedIndex: eB,
                                                                  onSelectIndex: eX,
                                                              }),
                                                          }),
                                                          (0, s.jsx)(eL, {
                                                              selectedCarouselItem: eF,
                                                              title: eF?.title,
                                                              description: eF?.description,
                                                              applicationId: u,
                                                              className: eI.Jv,
                                                          }),
                                                      ],
                                                  })
                                                : (0, s.jsx)(eL, {
                                                      selectedCarouselItem: eF,
                                                      title: ec.name,
                                                      description: ec.description,
                                                      applicationId: u,
                                                      className: eI.cP,
                                                  }),
                                        ],
                                    }),
                                    !K && le,
                                ],
                            }),
                            !K && ll,
                        ],
                    }),
                    K && le,
                ],
            }),
        ],
    });
}
