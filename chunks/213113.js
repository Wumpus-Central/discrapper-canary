t.d(l, { default: () => eR });
var s = t(477900),
    n = t(582128),
    i = t(503698),
    a = t.n(i),
    r = t(17928),
    o = t(935462),
    c = t(297264),
    d = t(834730),
    u = t(318254),
    m = t(638495),
    x = t(821609),
    h = t(939249),
    b = t(597770),
    j = t(366010),
    p = t(192308),
    _ = t(289873),
    N = t(34188),
    f = t(358618),
    v = t(983851),
    g = t(972213),
    C = t(964486),
    A = t(736653),
    E = t(793574),
    I = t(688810),
    k = t(429913),
    T = t(427209),
    O = t(977445),
    S = t(288106),
    y = t(993046),
    R = t(801228),
    L = t(652165),
    D = t(594832),
    P = t(280450),
    U = t(67480),
    H = t(174459),
    M = t(371794),
    Y = t(871123),
    w = t(733391),
    B = t(832163),
    G = t(429635),
    q = t(69236),
    F = t(2157),
    z = t(44724);
t(321073);
var W = t(345938),
    $ = t(510022),
    J = t(317560),
    V = t(99161),
    K = t(375708),
    X = t(698132);
function Q(e) {
    let { mediaItems: l, labels: t, selectedIndex: n, onSelectIndex: i } = e;
    return l.length <= 1
        ? null
        : (0, s.jsxs)("div", {
              className: X.kL,
              children: [
                  (0, s.jsx)(d.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: K.intl.string(K.t.U7DAV9),
                  }),
                  (0, s.jsx)("div", {
                      className: X.Vg,
                      children: l.map((e, l) =>
                          (0, s.jsx)(
                              h.D,
                              {
                                  className: a()(X.xn, { [X.Y4]: l === n }),
                                  onClick: () => i(l),
                                  "aria-label": t?.[l],
                                  "aria-pressed": l === n,
                                  children: (0, s.jsx)("img", {
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
    et = t(617986),
    es = t(817519);
function en(e) {
    let { orbsGate: l, orbPrice: t, onCheckout: i, onTrackEarnMoreOrbs: a, variant: r = "secondary" } = e,
        o = (0, m.k)(),
        c = n.useCallback(() => {
            (a(), (0, et.mA)({ fromContent: el.u.SOCIAL_LAYER_STOREFRONT }), (0, J.j)(o));
        }, [a, o]);
    return "HIDDEN" === l || null == t
        ? null
        : "NOT_ENOUGH_ORBS" === l
          ? (0, s.jsx)(x.$, { onClick: c, variant: r, icon: u.C, text: K.intl.string(K.t.H57f41), fullWidth: !0 })
          : (0, s.jsx)(x.$, {
                onClick: i,
                disabled: "NEEDS_NITRO" === l,
                variant: r,
                text: (0, s.jsx)("span", {
                    className: es.Y,
                    children: K.intl.format(K.t.lOtBOI, {
                        orbPrice: t.amount,
                        orbIconHook: () => (0, s.jsx)(u.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                    }),
                }),
                fullWidth: !0,
            });
}
var ei = t(310784),
    ea = t.n(ei),
    er = t(775602),
    eo = t(654107),
    ec = t(175671),
    ed = t(619517),
    eu = t(684519),
    em = t(549100);
function ex(e) {
    return (0, eu.$o)({ ...e, className: em.tN, mediaPlayerClassName: em.yf });
}
function eh(e) {
    return (0, s.jsx)(ed.Ay, { ...e });
}
function eb(e) {
    let { item: l, isMuted: t, className: i, alt: a = "" } = e,
        o = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, eo.rh)(l, "#000000");
            return n.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = ea()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        c = (0, r.bG)([er.Ay], () => er.Ay.useReducedMotion),
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
              className: i ?? em.kL,
              children: (0, s.jsx)(
                  "div",
                  {
                      className: `${em.h4} ${em.nR}`,
                      style: b,
                      children: (0, s.jsx)(
                          ec.rr,
                          {
                              href: null,
                              thumbnail: { url: l.videoThumbnailSrc, width: 747, height: 560 },
                              video: { url: l.src, proxyURL: l.src, width: 747, height: 560 },
                              provider: void 0,
                              allowFullScreen: !0,
                              maxHeight: 560,
                              maxWidth: 747,
                              playable: !0,
                              className: em.Ki,
                              volume: 1,
                              autoMute: t,
                              autoPlay: !0,
                              disableClickToUnmute: !0,
                              renderVideoComponent: ex,
                              renderImageComponent: eh,
                              renderLinkComponent: eu.bU,
                          },
                          `${l.src}-${t ? "muted" : "unmuted"}`,
                      ),
                  },
                  l.src,
              ),
          })
        : (0, s.jsx)("div", {
              className: i ?? em.kL,
              children: (0, s.jsxs)("div", {
                  className: em.h4,
                  style: b,
                  children: [
                      (0, s.jsx)("img", { src: l.src, alt: a, className: em.Sl }, l.src),
                      null != d && !c && (0, s.jsx)("img", { src: d, alt: "", className: em.Ve, onAnimationEnd: h }, d),
                  ],
              }),
          });
}
var ej = t(821707),
    ep = t(454491),
    e_ = t(743693),
    eN = t(15061),
    ef = t(995393),
    ev = t(188275),
    eg = t(652215),
    eC = t(338235);
function eA(e) {
    let { sku: l } = e;
    return null == l
        ? null
        : (0, s.jsxs)("div", {
              className: eC.AX,
              children: [
                  (0, s.jsx)(c.D, { variant: "heading-lg/bold", color: "text-strong", children: l.name }),
                  (0, s.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description }),
              ],
          });
}
function eE(e) {
    let { amount: l, orbGate: t } = e;
    return (0, s.jsxs)("div", {
        className: a()(eC.aX, { [eC.dQ]: "NEEDS_NITRO" === t || "NOT_ENOUGH_ORBS" === t }),
        children: [
            (0, s.jsx)(u.C, { size: "xs", color: "currentColor" }),
            (0, s.jsx)(d.E, { variant: "text-md/semibold", color: "currentColor", children: l }),
        ],
    });
}
function eI(e) {
    let { normalPrice: l, discountedPrice: t, discountPercent: n, hasNitroOffer: i } = e;
    return i && null != t
        ? (0, s.jsx)(ej.A, { discountedPrice: t, normalPrice: l })
        : null != n && null != t
          ? (0, s.jsxs)("div", {
                className: eC._k,
                children: [
                    (0, s.jsx)(d.E, { variant: "text-md/medium", className: eC.Jb, children: l }),
                    (0, s.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                    (0, s.jsx)(d.E, { variant: "text-md/bold", className: eC.Fi, children: n }),
                ],
            })
          : (0, s.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: l });
}
function ek(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: n, hasNitroOffer: i } = e,
        { normalPrice: r, discountedPrice: o, discountPercent: c } = n;
    if (null == r) return null;
    let d = "HIDDEN" !== t && null != l,
        u = "CAN_CHECKOUT" === t;
    return (0, s.jsxs)("div", {
        className: eC.sj,
        children: [
            (0, s.jsx)(ee.V, { textColor: "text-subtle" }),
            (0, s.jsx)("div", {
                className: a()(eC.hO, d && eC.XE),
                children:
                    d && u
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(eE, { amount: l.amount, orbGate: t }),
                                  (0, s.jsx)(eI, {
                                      normalPrice: r,
                                      discountedPrice: o,
                                      discountPercent: c,
                                      hasNitroOffer: i,
                                  }),
                              ],
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(eI, {
                                      normalPrice: r,
                                      discountedPrice: o,
                                      discountPercent: c,
                                      hasNitroOffer: i,
                                  }),
                                  d && (0, s.jsx)(eE, { amount: l.amount, orbGate: t }),
                              ],
                          }),
            }),
        ],
    });
}
function eT(e) {
    let {
            sku: l,
            guildId: t,
            giftRecipient: i,
            giftingOrigin: a,
            trackPDPClick: o,
            analyticsLocations: c,
            orbPrice: u,
            orbsGate: j,
            formattedPrice: p,
            unavailableLabel: _,
        } = e,
        N = (0, m.k)(),
        f = l.id,
        v = (0, r.bG)([B.A], () => B.A.getNormalizedSKUEligibility(f), [f]),
        g = v && "CAN_CHECKOUT" === j,
        C = p.discountedPrice ?? p.normalPrice,
        A = n.useCallback(() => {
            (o(ef.Jq.BUY_BUTTON),
                (0, V.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...c, E.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                        contextKey: N,
                    },
                ));
        }, [l, o, t, c, N]),
        I = n.useCallback(() => {
            (o(ef.Jq.GIFT_BUTTON),
                (0, V.a)(
                    l,
                    { isGift: !0, giftRecipient: i, giftingOrigin: a },
                    {
                        analyticsLocations: [...c, E.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON],
                        contextKey: N,
                    },
                ));
        }, [l, o, i, a, c, N]),
        T = (0, k.h)(l.applicationId),
        O = n.useMemo(() => [...c, E.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [c]),
        S = n.useCallback(() => {
            null != T &&
                (o(ef.Jq.BUY_WITH_ORBS_BUTTON),
                (0, L.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    contextKey: N,
                    onComplete: () => {
                        ((0, J.j)(N), (0, $.n)({ sku: l, application: T, analyticsLocations: O, contextKey: N }));
                    },
                    analyticsLocations: O,
                }));
        }, [l, T, O, o, N]),
        y = n.useCallback(() => {
            o(ef.Jq.EARN_MORE_ORBS_BUTTON);
        }, [o]),
        R = v
            ? (0, s.jsx)(en, {
                  orbsGate: j,
                  orbPrice: u,
                  onCheckout: S,
                  onTrackEarnMoreOrbs: y,
                  variant: g ? "primary" : "secondary",
              })
            : null,
        D = (0, s.jsxs)("div", {
            className: eC.mr,
            children: [
                (0, s.jsx)(x.$, {
                    variant: g ? "secondary" : "primary",
                    onClick: A,
                    text: null != C ? K.intl.format(K.t.YkXGyY, { priceString: C }) : K.intl.string(K.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, s.jsx)(h.D, {
                    className: eC.xP,
                    onClick: I,
                    "aria-label": K.intl.string(K.t.QAZA5f),
                    role: "button",
                    children: (0, s.jsx)(b.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        P = (0, s.jsx)(x.$, {
            icon: b.GiftIcon,
            variant: "secondary",
            onClick: I,
            text: K.intl.string(K.t.QAZA5f),
            fullWidth: !0,
        });
    return null != _
        ? (0, s.jsxs)("div", {
              className: eC.NC,
              children: [
                  (0, s.jsx)(d.E, {
                      variant: "text-xxs/normal",
                      color: "text-subtle",
                      children: K.intl.string(K.t["35vxnc"]),
                  }),
                  (0, s.jsx)(x.$, { variant: "secondary", text: _, disabled: !0, fullWidth: !0 }),
              ],
          })
        : (0, s.jsxs)("div", {
              className: eC.NC,
              children: [
                  !v &&
                      (0, s.jsx)(d.E, {
                          variant: "text-xxs/normal",
                          color: "text-subtle",
                          children: K.intl.string(K.t.IqlPbQ),
                      }),
                  g && R,
                  v ? D : P,
                  !g && R,
              ],
          });
}
function eO(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let n = null != l.labelIconAssetId ? (0, M.YE)(t, l.labelIconAssetId) : null;
    return (0, s.jsxs)("div", {
        className: eC.HI,
        children: [
            null != n && (0, s.jsx)("img", { className: eC.IX, src: n, alt: "" }, n),
            (0, s.jsx)(d.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eS(e) {
    let { onClick: l, onMouseDown: t, children: n, ariaLabel: i, className: a = eC.jU } = e;
    return (0, s.jsx)(h.D, { onClick: l, onMouseDown: t, className: a, "aria-label": i, role: "button", children: n });
}
function ey(e) {
    let { selectedCarouselItem: l, title: t, description: n, applicationId: i, className: a } = e;
    return (0, s.jsxs)("div", {
        className: a,
        children: [
            null != t && (0, s.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
            (0, s.jsx)(eO, { applicationId: i, selectedCarouselItem: l }),
            null != n && (0, s.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
        ],
    });
}
function eR(e) {
    let {
            customNavigateToSocialLayerStorefront: l,
            transitionState: t,
            returnRef: i,
            skuId: c,
            applicationId: u,
            isStorefront: m,
            giftRecipient: x,
            giftingOrigin: h,
            analyticsLocations: b,
            analyticsContext: E,
            unavailableLabel: k,
            onClose: L,
        } = e,
        { analyticsLocations: $ } = (0, I.Ay)(b ?? []),
        { guildId: J } = (0, Y.nG)(u),
        V = (0, r.bG)([P.default], () => P.default.getId());
    n.useEffect(() => {
        null != c && (0, w.iR)(u, c);
    }, [u, c]);
    let X = (0, G.A)({ applicationId: u }),
        ee = (0, r.bG)([B.A], () => B.A.getSkuAssets()),
        el = (0, r.bG)([U.A], () => U.A.isFetching(c)),
        et = (0, j.M)((0, A.Ay)()),
        [es, en] = n.useState(!0),
        ei = (0, R.A)({ skuId: c }),
        ea = (0, O.uS)(u),
        er = null == ei || ei.available || ea ? null : (k ?? K.intl.string(K.t.RWouSQ)),
        eo = (0, y.JL)({ sku: ei }),
        { display: ec, reward: ed, offers: eu } = (0, F.b)({ surface: "pdp", applicationId: u, skuId: c }),
        em = n.useMemo(() => eu.find((e) => e.type === S.B8.ORB_REDEMPTION) ?? null, [eu]),
        { state: ex, isReady: eh } = (0, q.we)({ orbPriceAmount: eo?.amount, spendOrbsOffer: em }),
        ej = (0, y.CD)({ sku: ei }),
        [eE, eI] = n.useState(0),
        [eO, eR] = n.useMemo(
            () =>
                (function (e, l, t, s) {
                    let { heroWidth: n } = s,
                        i = [],
                        a = [];
                    if (null == e || 0 === e.length) return [i, a];
                    for (let s of e) {
                        let e = null != s.assetId ? t[s.assetId] : null;
                        null != e &&
                            (i.push(s),
                            e.mime_type.startsWith("video/")
                                ? a.push({
                                      type: "video",
                                      src: (0, M.YE)(l, e, n, "mp4"),
                                      videoThumbnailSrc: (0, M.YE)(l, e, n, "webp"),
                                      thumbnailSrc:
                                          null != s.thumbnailAssetId
                                              ? (0, M.YE)(l, s.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != s.backgroundAssetId
                                              ? (0, M.YE)(l, s.backgroundAssetId, n, Y.pV)
                                              : void 0,
                                  })
                                : a.push({
                                      type: "image",
                                      src: (0, M.YE)(l, e, n, "webp"),
                                      thumbnailSrc:
                                          null != s.thumbnailAssetId
                                              ? (0, M.YE)(l, s.thumbnailAssetId, 112, "webp")
                                              : void 0,
                                      backgroundSrc:
                                          null != s.backgroundAssetId
                                              ? (0, M.YE)(l, s.backgroundAssetId, n, Y.pV)
                                              : void 0,
                                  }));
                    }
                    return [i, a];
                })(ei?.tenantMetadata?.socialLayer?.carouselItems ?? [], u, ee, { heroWidth: 747 }),
            [ei, u, ee],
        ),
        [eL, eD] = n.useState(null),
        [eP, eU] = n.useState(!1);
    n.useEffect(() => {
        if (null == eL) return;
        let e = new ResizeObserver(() => {
            eU(eL.scrollHeight > eL.clientHeight);
        });
        return (e.observe(eL), () => e.disconnect());
    }, [eL]);
    let eH = eE < eR.length ? eE : 0,
        eM = eO[eH] ?? null,
        eY = eR.length > 1,
        ew = eR.some((e) => "video" === e.type);
    ((0, D.pE)(),
        (0, C.Ay)(() => {
            (H.default.track(eg.HAw.OPEN_MODAL, { location_stack: $, type: ev.Nh, sku_id: c, application_id: u }),
                (0, w.Xw)());
        }));
    let eB = n.useCallback(
            (e) => {
                H.default.track(eg.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: E?.sessionId,
                    sku_id: c,
                    guild_id: E?.guildId,
                    application_id: u,
                    cta_type: e,
                    location_stack: $,
                });
            },
            [E, c, u, $],
        ),
        eG = n.useRef(!1);
    n.useEffect(() => {
        !eG.current &&
            "HIDDEN" !== ex &&
            eh &&
            ((eG.current = !0),
            H.default.track(eg.HAw.SLAYER_STOREFRONT_ORBS_PURCHASE_GATE_VIEWED, {
                slayer_storefront_session_id: E?.sessionId,
                sku_id: c,
                guild_id: E?.guildId,
                application_id: u,
                orbs_purchase_gate_state: ex,
                orb_price: eo?.amount,
                location_stack: $,
            }));
    }, [ex, eh, E, c, u, eo, $]);
    let eq = n.useCallback(
        (e) => {
            (eI(e), eB(ef.Jq.CAROUSEL_ITEM));
        },
        [eB],
    );
    n.useEffect(() => {
        null == c || U.A.isFetching(c) || (0, w.Pp)(u, c);
    }, [u, c]);
    let eF = n.useCallback(() => {
            null != ei &&
                (eB(ef.Jq.FORWARD_BUTTON),
                (0, W.d)({
                    sku: ei,
                    guildId: J,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: $,
                    analyticsContext: E,
                }));
        }, [ei, J, eB, $, E]),
        ez = n.useCallback(() => {
            eB(ef.Jq.WISHLIST_BUTTON);
        }, [eB]),
        eW = n.useCallback(() => {
            (0, z.G)({ applicationId: u });
        }, [u]),
        e$ = n.useCallback(() => {
            (eB(ef.Jq.VISIT_SHOP), (0, p.closeAllModals)(), null != l ? l() : (0, z.default)({ applicationId: u }));
        }, [u, eB, l]),
        eJ = n.useCallback(() => {
            (en(!es), eB(ef.Jq.MUTE_BUTTON));
        }, [es, eB]),
        eV = ei?.tenantMetadata?.socialLayer;
    if (null == ei || null == eV) return el ? (0, s.jsx)(_.y, {}) : null;
    let eK = X?.storefront,
        eX = eK?.logoAssetId != null ? (0, M.YE)(eK.applicationId, eK.logoAssetId, 256) : null,
        eQ = eK?.lightThemeLogoAssetId != null ? (0, M.YE)(eK.applicationId, eK.lightThemeLogoAssetId, 256) : null,
        eZ = null;
    eZ = et ? (eX ?? eQ) : (eQ ?? eX);
    let e0 = null;
    return (
        null != er ? (e0 = (0, s.jsx)(eN.G, { label: er })) : ei.exclusive && (e0 = (0, s.jsx)(Z.I, {})),
        (0, s.jsx)(o.EO, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: eC.CR,
            size: o.rI.DYNAMIC,
            returnRef: i,
            children: (0, s.jsx)(o.$m, {
                className: eC.jE,
                scrollbarGutter: !1,
                children: (0, s.jsxs)("div", {
                    className: eC.nr,
                    children: [
                        (0, s.jsxs)("div", {
                            className: a()(eC.op, { [eC.uk]: ei.exclusive }),
                            children: [
                                (0, s.jsx)("div", {
                                    className: eC.r$,
                                    children:
                                        null != eZ
                                            ? (0, s.jsx)("img", { className: eC.wm, src: eZ, alt: eK?.title ?? "" })
                                            : null,
                                }),
                                (0, s.jsxs)("div", {
                                    ref: eD,
                                    className: eC.zD,
                                    children: [
                                        null != e0 && (0, s.jsx)("div", { className: eC.Od, children: e0 }),
                                        eY
                                            ? (0, s.jsxs)(s.Fragment, {
                                                  children: [
                                                      (0, s.jsx)(eA, { sku: ei }),
                                                      (0, s.jsx)("div", {
                                                          className: eC._D,
                                                          children: (0, s.jsx)(Q, {
                                                              mediaItems: eR,
                                                              labels: eO.map((e) => e.label),
                                                              selectedIndex: eH,
                                                              onSelectIndex: eq,
                                                          }),
                                                      }),
                                                      (0, s.jsx)(ey, {
                                                          selectedCarouselItem: eM,
                                                          title: eM?.title,
                                                          description: eM?.description,
                                                          applicationId: u,
                                                          className: eC.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, s.jsx)(ey, {
                                                  selectedCarouselItem: eM,
                                                  title: ei.name,
                                                  description: ei.description,
                                                  applicationId: u,
                                                  className: eC.cP,
                                              }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: a()(eC.Td, { [eC.t7]: eP }),
                                    children: [
                                        (0, s.jsx)(ek, {
                                            orbPrice: eo,
                                            orbsGate: ex,
                                            formattedPrice: ej,
                                            hasNitroOffer: ec?.flavor === "nitro",
                                        }),
                                        null != ec &&
                                            (0, s.jsx)(ep.e, {
                                                promotion: ec,
                                                reward: ed,
                                                applicationId: u,
                                                analyticsLocations: $,
                                                onUpsellClick: () => eB(ef.Jq.NITRO_UPSELL_BUTTON),
                                            }),
                                        (0, s.jsx)(eT, {
                                            sku: ei,
                                            guildId: J,
                                            giftRecipient: x?.id !== V ? x : void 0,
                                            giftingOrigin: x?.id !== V ? h : void 0,
                                            trackPDPClick: eB,
                                            analyticsLocations: $,
                                            orbPrice: eo,
                                            orbsGate: ex,
                                            formattedPrice: ej,
                                            unavailableLabel: er,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: eC.il,
                            children: [
                                (0, s.jsx)(eb, { item: eR[eH], isMuted: es, alt: eM?.label ?? ei.name }),
                                !m &&
                                    (0, s.jsxs)(eS, {
                                        onClick: e$,
                                        onMouseDown: eW,
                                        ariaLabel: K.intl.string(K.t["+v/1Dk"]),
                                        className: eC.gW,
                                        children: [
                                            (0, s.jsx)(N.U, { size: "refresh_sm", color: "currentColor" }),
                                            (0, s.jsx)(d.E, {
                                                variant: "text-md/medium",
                                                color: "currentColor",
                                                children: K.intl.string(K.t["+v/1Dk"]),
                                            }),
                                        ],
                                    }),
                                (0, s.jsxs)("div", {
                                    className: eC.V7,
                                    children: [
                                        null != ei &&
                                            (0, s.jsx)(e_._, {
                                                sku: ei,
                                                isCardHovered: !0,
                                                className: a()(eC.jU, eC.ij),
                                                trackButtonClick: ez,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, s.jsx)(eS, {
                                            onClick: eF,
                                            ariaLabel: K.intl.string(K.t.Ej3B3Y),
                                            children: (0, s.jsx)(T.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        ew &&
                                            (0, s.jsx)(eS, {
                                                onClick: eJ,
                                                ariaLabel: es ? K.intl.string(K.t.YqAjXy) : K.intl.string(K.t.w4m945),
                                                children: es
                                                    ? (0, s.jsx)(f._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, s.jsx)(v.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, s.jsx)(eS, {
                                            onClick: L,
                                            ariaLabel: K.intl.string(K.t.cpT0Cq),
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
