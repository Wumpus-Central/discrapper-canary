t.d(l, { default: () => eL });
var s = t(627968),
    n = t(64700),
    i = t(503698),
    a = t.n(i),
    r = t(696292),
    o = t(17928),
    c = t(534514),
    d = t(834730),
    u = t(318254),
    m = t(821609),
    x = t(939249),
    h = t(597770),
    j = t(366010),
    b = t(192308),
    p = t(289873),
    g = t(935462),
    v = t(403581),
    C = t(34188),
    N = t(358618),
    _ = t(983851),
    I = t(972213),
    f = t(964486),
    A = t(736653),
    k = t(793574),
    E = t(688810),
    T = t(429913),
    S = t(427209),
    O = t(532794),
    y = t(617986),
    L = t(117218),
    D = t(801228),
    R = t(652165),
    P = t(561794),
    U = t(495544),
    Y = t(328968),
    H = t(174459),
    M = t(371794),
    F = t(871123),
    w = t(733391),
    B = t(832163),
    G = t(681064),
    q = t(429635),
    z = t(69236),
    $ = t(31969),
    J = t(44724);
t(321073);
var V = t(345938),
    W = t(510022),
    K = t(317560),
    X = t(533406),
    Q = t(375708),
    Z = t(964421);
function ee(e) {
    let { mediaItems: l, labels: t, selectedIndex: n, onSelectIndex: i } = e;
    return l.length <= 1
        ? null
        : (0, s.jsxs)("div", {
              className: Z.kL,
              children: [
                  (0, s.jsx)(d.E, {
                      variant: "text-xs/semibold",
                      color: "text-subtle",
                      children: Q.intl.string(Q.t.U7DAV9),
                  }),
                  (0, s.jsx)("div", {
                      className: Z.Vg,
                      children: l.map((e, l) =>
                          (0, s.jsx)(
                              x.D,
                              {
                                  className: a()(Z.xn, { [Z.Y4]: l === n }),
                                  onClick: () => i(l),
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
    es = t(942460);
function en(e) {
    let { orbsGate: l, orbPrice: t, onCheckout: i, variant: a = "secondary" } = e,
        o = n.useCallback(() => {
            (0, y.navigateToQuestHome)({ fromContent: r.u.SOCIAL_LAYER_STOREFRONT });
        }, []);
    return "HIDDEN" === l || null == t
        ? null
        : "NOT_ENOUGH_ORBS" === l
          ? (0, s.jsx)(m.$, { onClick: o, variant: a, icon: u.C, text: Q.intl.string(Q.t.H57f41), fullWidth: !0 })
          : (0, s.jsx)(m.$, {
                onClick: i,
                disabled: "NEEDS_NITRO" === l,
                variant: a,
                text: (0, s.jsx)("span", {
                    className: es.Y,
                    children: Q.intl.format(Q.t.lOtBOI, {
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
    eu = t(34337),
    em = t(172079);
function ex(e) {
    return (0, eu.$o)({ ...e, className: em.tN, mediaPlayerClassName: em.yf });
}
function eh(e) {
    return (0, s.jsx)(ed.Ay, { ...e });
}
function ej(e) {
    let { item: l, isMuted: t, className: i, alt: a = "" } = e,
        r = (function (e) {
            let l = null != e ? ("videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src) : null,
                [t] = (0, eo.rh)(l, "#000000");
            return n.useMemo(() => {
                if (null == l || "#000000" === t) return;
                let e = ea()(t).darken(1);
                return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
            }, [l, t]);
        })(l),
        c = (0, o.bG)([er.Ay], () => er.Ay.useReducedMotion),
        [d, u] = n.useState(null),
        [m, x] = n.useState(l);
    m !== l && (x(l), m?.type === "image" && l?.type === "image" && m.src !== l.src ? u(m.src) : u(null));
    let h = n.useCallback(() => u(null), []);
    if (null == l) return null;
    let j = {
        background: r,
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
                      style: j,
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
                  style: j,
                  children: [
                      (0, s.jsx)("img", { src: l.src, alt: a, className: em.Sl }, l.src),
                      null != d && !c && (0, s.jsx)("img", { src: d, alt: "", className: em.Ve, onAnimationEnd: h }, d),
                  ],
              }),
          });
}
var eb = t(910200),
    ep = t(743693),
    eg = t(995393),
    ev = t(188275),
    eC = t(652215),
    eN = t(788868),
    e_ = t(430825),
    eI = t(199138);
function ef(e) {
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
function eA(e) {
    let { amount: l } = e;
    return (0, s.jsxs)("div", {
        className: eI.aX,
        children: [
            (0, s.jsx)(u.C, { size: "xs", color: "currentColor" }),
            (0, s.jsx)(d.E, { variant: "text-md/semibold", color: "currentColor", children: l }),
        ],
    });
}
function ek(e) {
    let { normalPrice: l, discountedPrice: t, discountPercent: n } = e;
    return null != n && null != t
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
function eE(e) {
    let { orbPrice: l, orbsGate: t, formattedPrice: n } = e,
        { normalPrice: i, discountedPrice: r, discountPercent: o } = n;
    if (null == i) return null;
    let c = "HIDDEN" !== t && null != l;
    return (0, s.jsxs)("div", {
        className: eI.sj,
        children: [
            (0, s.jsx)(et.V, { textColor: "text-subtle" }),
            (0, s.jsx)("div", {
                className: a()(eI.hO, c && eI.XE),
                children:
                    c && "CAN_CHECKOUT" === t
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(eA, { amount: l.amount }),
                                  (0, s.jsx)(ek, { normalPrice: i, discountedPrice: r, discountPercent: o }),
                              ],
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(ek, { normalPrice: i, discountedPrice: r, discountPercent: o }),
                                  c && (0, s.jsx)(eA, { amount: l.amount }),
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
            trackPDPClick: r,
            analyticsLocations: c,
            orbPrice: u,
            orbsGate: j,
            formattedPrice: b,
        } = e,
        p = l.id,
        g = (0, o.bG)([B.A], () => B.A.getNormalizedSKUEligibility(p), [p]),
        v = g && "CAN_CHECKOUT" === j,
        C = b.discountedPrice ?? b.normalPrice,
        N = n.useCallback(() => {
            r(eg.Jq.BUY_BUTTON),
                (0, X.a)(
                    l,
                    { isGift: !1 },
                    {
                        analyticsLocations: [...c, k.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON],
                        guildId: t,
                    },
                );
        }, [l, r, t, c]),
        _ = n.useCallback(() => {
            r(eg.Jq.GIFT_BUTTON),
                (0, X.a)(
                    l,
                    { isGift: !0, giftRecipient: i, giftingOrigin: a },
                    { analyticsLocations: [...c, k.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON] },
                );
        }, [l, r, i, a, c]),
        I = (0, T.h)(l.applicationId),
        f = n.useMemo(() => [...c, k.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON], [c]),
        A = n.useCallback(() => {
            null != I &&
                (r(eg.Jq.BUY_WITH_ORBS_BUTTON),
                (0, R.B4)({
                    skuId: l.id,
                    applicationId: l.applicationId,
                    onComplete: () => {
                        (0, K.j)(), (0, W.n)({ sku: l, application: I, analyticsLocations: f });
                    },
                    analyticsLocations: f,
                }));
        }, [l, I, f, r]),
        E = g
            ? (0, s.jsx)(en, { orbsGate: j, orbPrice: u, onCheckout: A, variant: v ? "primary" : "secondary" })
            : null,
        S = (0, s.jsxs)("div", {
            className: eI.mr,
            children: [
                (0, s.jsx)(m.$, {
                    variant: v ? "secondary" : "primary",
                    onClick: N,
                    text: null != C ? Q.intl.format(Q.t.YkXGyY, { priceString: C }) : Q.intl.string(Q.t.boqtTA),
                    fullWidth: !0,
                }),
                (0, s.jsx)(x.D, {
                    className: eI.xP,
                    onClick: _,
                    "aria-label": Q.intl.string(Q.t.QAZA5f),
                    role: "button",
                    children: (0, s.jsx)(h.o, { size: "refresh_sm", color: "currentColor" }),
                }),
            ],
        }),
        O = (0, s.jsx)(m.$, {
            icon: h.o,
            variant: "secondary",
            onClick: _,
            text: Q.intl.string(Q.t.QAZA5f),
            fullWidth: !0,
        });
    return (0, s.jsxs)("div", {
        className: eI.NC,
        children: [
            !g &&
                (0, s.jsx)(d.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: Q.intl.string(Q.t.IqlPbQ),
                }),
            v && E,
            g ? S : O,
            !v && E,
        ],
    });
}
function eS(e) {
    let { selectedCarouselItem: l, applicationId: t } = e;
    if (null == l) return null;
    let n = null != l.labelIconAssetId ? (0, M.YE)(t, l.labelIconAssetId) : null;
    return (0, s.jsxs)("div", {
        className: eI.HI,
        children: [
            null != n && (0, s.jsx)("img", { className: eI.IX, src: n, alt: "" }, n),
            (0, s.jsx)(d.E, { variant: "text-xs/medium", color: "text-subtle", children: l.label }),
        ],
    });
}
function eO(e) {
    let { onClick: l, onMouseDown: t, children: n, ariaLabel: i, className: a = eI.jU } = e;
    return (0, s.jsx)(x.D, { onClick: l, onMouseDown: t, className: a, "aria-label": i, role: "button", children: n });
}
function ey(e) {
    let { selectedCarouselItem: l, title: t, description: n, applicationId: i, className: a } = e;
    return (0, s.jsxs)("div", {
        className: a,
        children: [
            null != t && (0, s.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
            (0, s.jsx)(eS, { applicationId: i, selectedCarouselItem: l }),
            null != n && (0, s.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
        ],
    });
}
function eL(e) {
    let {
            customNavigateToSocialLayerStorefront: l,
            transitionState: t,
            returnRef: i,
            skuId: c,
            applicationId: u,
            isStorefront: m,
            giftRecipient: h,
            giftingOrigin: k,
            analyticsLocations: T,
            analyticsContext: R,
            onClose: W,
        } = e,
        { analyticsLocations: K } = (0, E.Ay)(T ?? []),
        { guildId: X } = (0, F.nG)(u),
        Z = (0, o.bG)([U.default], () => U.default.getId());
    n.useEffect(() => {
        null != c && (0, w.iR)(u, c);
    }, [u, c]);
    let et = (0, q.A)({ applicationId: u }),
        es = (0, o.bG)([B.A], () => B.A.getSkuAssets()),
        en = (0, o.bG)([Y.A], () => Y.A.isFetchingForSKU(c)),
        ei = (0, j.M)((0, A.Ay)()),
        [ea, er] = n.useState(!0),
        eo = (0, D.A)({ skuId: c }),
        ec = (0, L.JL)({ sku: eo }),
        ed = (0, z.o)({ orbPriceAmount: ec?.amount, location: "product_details_modal" }),
        eu = (0, L.CD)({ sku: eo }),
        [em, ex] = n.useState(0),
        [eh, eA] = n.useMemo(
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
                                              ? (0, M.YE)(l, s.backgroundAssetId, n, F.pV)
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
                                              ? (0, M.YE)(l, s.backgroundAssetId, n, F.pV)
                                              : void 0,
                                  }));
                    }
                    return [i, a];
                })(eo?.tenantMetadata?.socialLayer?.carouselItems ?? [], u, es, { heroWidth: 747 }),
            [eo, u, es],
        ),
        [ek, eS] = n.useState(null),
        [eL, eD] = n.useState(!1);
    n.useEffect(() => {
        if (null == ek) return;
        let e = new ResizeObserver(() => {
            eD(ek.scrollHeight > ek.clientHeight);
        });
        return e.observe(ek), () => e.disconnect();
    }, [ek]);
    let eR = em < eA.length ? em : 0,
        eP = eh[eR] ?? null,
        eU = eA.length > 1,
        eY = eA.some((e) => "video" === e.type);
    (0, P.pE)(),
        (0, f.Ay)(() => {
            H.default.track(eC.HAw.OPEN_MODAL, { location_stack: K, type: ev.Nh, sku_id: c, application_id: u }),
                (0, w.Xw)();
        });
    let eH = n.useCallback(
            (e) => {
                H.default.track(eC.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: R?.sessionId,
                    sku_id: c,
                    guild_id: R?.guildId,
                    application_id: u,
                    cta_type: e,
                    location_stack: K,
                });
            },
            [R, c, u, K],
        ),
        eM = n.useCallback(
            (e) => {
                ex(e), eH(eg.Jq.CAROUSEL_ITEM);
            },
            [eH],
        );
    n.useEffect(() => {
        null == c || Y.A.isFetchingForSKU(c) || (0, w.Pp)(u, c);
    }, [u, c]);
    let eF = n.useCallback(() => {
            null != eo &&
                (eH(eg.Jq.FORWARD_BUTTON),
                (0, V.d)({
                    sku: eo,
                    guildId: X,
                    source: "social-layer-storefront-pdp",
                    analyticsLocations: K,
                    analyticsContext: R,
                }));
        }, [eo, X, eH, K, R]),
        ew = n.useCallback(() => {
            eH(eg.Jq.WISHLIST_BUTTON);
        }, [eH]),
        eB = n.useCallback(() => {
            (0, J.G)({ applicationId: u });
        }, [u]),
        eG = n.useCallback(() => {
            eH(eg.Jq.VISIT_SHOP), (0, b.closeAllModals)(), null != l ? l() : (0, J.default)({ applicationId: u });
        }, [u, eH, l]),
        eq = n.useCallback(() => {
            "NEEDS_NITRO" === ed
                ? (0, O.A)({ subscriptionTier: eN.pe.TIER_2, analyticsLocations: K, applicationId: eo?.applicationId })
                : (0, y.navigateToQuestHome)({ fromContent: r.u.SOCIAL_LAYER_STOREFRONT });
        }, [K, ed, eo?.applicationId]),
        ez = n.useCallback(() => {
            er(!ea), eH(eg.Jq.MUTE_BUTTON);
        }, [ea, eH]),
        e$ = (0, $.F)("pdp", { applicationId: u, skuId: c }),
        eJ = eo?.tenantMetadata?.socialLayer;
    if (null == eo || null == eJ) return en ? (0, s.jsx)(p.y, {}) : null;
    let eV = et?.storefront,
        eW = eV?.logoAssetId != null ? (0, M.YE)(eV.applicationId, eV.logoAssetId, 256) : null,
        eK = eV?.lightThemeLogoAssetId != null ? (0, M.YE)(eV.applicationId, eV.lightThemeLogoAssetId, 256) : null,
        eX = null;
    return (
        (eX = ei ? (eW ?? eK) : (eK ?? eW)),
        (0, s.jsx)(g.EO, {
            transitionState: t,
            "hide-shadow": !0,
            parentComponent: "SocialLayerStorefrontProductDetailsModal",
            className: eI.CR,
            size: g.rI.DYNAMIC,
            returnRef: i,
            children: (0, s.jsx)(g.$m, {
                className: eI.jE,
                children: (0, s.jsxs)("div", {
                    className: eI.nr,
                    children: [
                        (0, s.jsxs)("div", {
                            className: a()(eI.op, { [eI.uk]: eo.exclusive }),
                            children: [
                                (0, s.jsx)("div", {
                                    className: eI.r$,
                                    children:
                                        null != eX
                                            ? (0, s.jsx)("img", { className: eI.wm, src: eX, alt: eV?.title ?? "" })
                                            : null,
                                }),
                                (0, s.jsxs)("div", {
                                    ref: eS,
                                    className: eI.zD,
                                    children: [
                                        eo.exclusive &&
                                            (0, s.jsx)("div", { className: eI.K3, children: (0, s.jsx)(el.I, {}) }),
                                        eU
                                            ? (0, s.jsxs)(s.Fragment, {
                                                  children: [
                                                      (0, s.jsx)(ef, { sku: eo }),
                                                      (0, s.jsx)("div", {
                                                          className: eI._D,
                                                          children: (0, s.jsx)(ee, {
                                                              mediaItems: eA,
                                                              labels: eh.map((e) => e.label),
                                                              selectedIndex: eR,
                                                              onSelectIndex: eM,
                                                          }),
                                                      }),
                                                      (0, s.jsx)(ey, {
                                                          selectedCarouselItem: eP,
                                                          title: eP?.title,
                                                          description: eP?.description,
                                                          applicationId: u,
                                                          className: eI.Jv,
                                                      }),
                                                  ],
                                              })
                                            : (0, s.jsx)(ey, {
                                                  selectedCarouselItem: eP,
                                                  title: eo.name,
                                                  description: eo.description,
                                                  applicationId: u,
                                                  className: eI.cP,
                                              }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: a()(eI.Td, { [eI.t7]: eL }),
                                    children: [
                                        (0, s.jsx)(eE, { orbPrice: ec, orbsGate: ed, formattedPrice: eu }),
                                        "HIDDEN" !== ed &&
                                            (0, s.jsx)(x.D, {
                                                className: eI.Lf,
                                                onClick: eq,
                                                children: (0, s.jsx)(eb.O, {
                                                    Icon: v.t,
                                                    text: Q.intl.string(e_.default.cg95CA),
                                                    endDatetime: G.V,
                                                    gradientColor: "nitro-pink",
                                                    tooltip: Q.intl.string(e_.default["jVjr/j"]),
                                                }),
                                            }),
                                        null != e$ &&
                                            (0, s.jsx)(eb.O, {
                                                Icon: e$.Icon,
                                                text: e$.text,
                                                endDatetime: e$.endsAt,
                                                tooltip: e$.tooltip,
                                            }),
                                        (0, s.jsx)(eT, {
                                            sku: eo,
                                            guildId: X,
                                            giftRecipient: h?.id !== Z ? h : void 0,
                                            giftingOrigin: h?.id !== Z ? k : void 0,
                                            trackPDPClick: eH,
                                            analyticsLocations: K,
                                            orbPrice: ec,
                                            orbsGate: ed,
                                            formattedPrice: eu,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: eI.il,
                            children: [
                                (0, s.jsx)(ej, { item: eA[eR], isMuted: ea, alt: eP?.label ?? eo.name }),
                                !m &&
                                    (0, s.jsxs)(eO, {
                                        onClick: eG,
                                        onMouseDown: eB,
                                        ariaLabel: Q.intl.string(Q.t["+v/1Dk"]),
                                        className: eI.gW,
                                        children: [
                                            (0, s.jsx)(C.U, { size: "refresh_sm", color: "currentColor" }),
                                            (0, s.jsx)(d.E, {
                                                variant: "text-md/medium",
                                                color: "currentColor",
                                                children: Q.intl.string(Q.t["+v/1Dk"]),
                                            }),
                                        ],
                                    }),
                                (0, s.jsxs)("div", {
                                    className: eI.V7,
                                    children: [
                                        null != eo &&
                                            (0, s.jsx)(ep._, {
                                                sku: eo,
                                                isCardHovered: !0,
                                                className: a()(eI.jU, eI.ij),
                                                trackButtonClick: ew,
                                                variant: "overlay-secondary",
                                                location: "social_layer_storefront_product_details_modal",
                                            }),
                                        (0, s.jsx)(eO, {
                                            onClick: eF,
                                            ariaLabel: Q.intl.string(Q.t.Ej3B3Y),
                                            children: (0, s.jsx)(S.A, { size: "refresh_sm", color: "currentColor" }),
                                        }),
                                        eY &&
                                            (0, s.jsx)(eO, {
                                                onClick: ez,
                                                ariaLabel: ea ? Q.intl.string(Q.t.YqAjXy) : Q.intl.string(Q.t.w4m945),
                                                children: ea
                                                    ? (0, s.jsx)(N._, { size: "refresh_sm", color: "currentColor" })
                                                    : (0, s.jsx)(_.H, { size: "refresh_sm", color: "currentColor" }),
                                            }),
                                        (0, s.jsx)(eO, {
                                            onClick: W,
                                            ariaLabel: Q.intl.string(Q.t.cpT0Cq),
                                            children: (0, s.jsx)(I.d, { size: "refresh_sm", color: "currentColor" }),
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
