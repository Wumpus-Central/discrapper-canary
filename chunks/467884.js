l.d(t, { s: () => em, A: () => ep });
var a,
    n = l(627968),
    r = l(64700),
    i = l(310784),
    s = l.n(i),
    o = l(503698),
    c = l.n(o),
    u = l(989349),
    d = l.n(u),
    m = l(318254),
    x = l(939249),
    p = l(366010),
    f = l(821609),
    _ = l(187322),
    C = l(638916),
    h = l(43990),
    g = l(825484),
    b = l(17928),
    j = l(269115),
    v = l(990078),
    N = l(834730),
    k = l(890856),
    E = l(812993),
    A = l(442433),
    y = l(775602),
    T = l(793574),
    R = l(688810),
    I = l(429913),
    M = l(713517),
    S = l(427209),
    H = l(976860),
    L = l(117218),
    w = l(363195),
    D = l(885386),
    B = l(652165),
    O = l(67480),
    P = l(174459),
    G = l(871123),
    F = l(733391),
    U = l(439303),
    W = l(353281),
    z = l(832163),
    K = l(69236),
    Y = l(654107),
    $ = l(31969),
    q = l(345938),
    V = l(510022),
    Q = l(533406),
    J = l(263911),
    Z = l(971146),
    X = l(366523),
    ee = l(300182),
    et = l(900719);
function el() {
    let [e] = r.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, n.jsx)("div", { className: c()(et.Vl, et.Yf), style: { animationDelay: `${e}s` } });
}
function ea() {
    let [e] = r.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, n.jsx)("div", { className: et.RC, style: { width: `${e}%` } });
}
var en = l(533772),
    er = l(743693),
    ei = l(652215),
    es = l(995393),
    eo = l(375708);
let ec = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    eu = s()("#000000").darken(1.5).alpha(0.9).hex(),
    ed = s()("#000000").alpha(0).hex();
var em = (((a = {})[(a.SMALL = 0)] = "SMALL"), (a[(a.MEDIUM = 1)] = "MEDIUM"), (a[(a.EMBEDDED = 2)] = "EMBEDDED"), a);
function ex(e) {
    let {
            guildId: t,
            sku: l,
            isCardHovered: a,
            trackCardClick: i,
            variant: s,
            analyticsLocations: o,
            analyticsContext: u,
        } = e,
        d = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != l &&
                        (i(es.bB.FORWARD_BUTTON),
                        (0, q.d)({
                            sku: l,
                            guildId: t,
                            analyticsContext: u,
                            analyticsLocations: o,
                            source: "social-layer-storefront-embed",
                        }));
            },
            [l, t, i, u, o],
        ),
        m = r.useCallback(() => {
            i(es.bB.WISHLIST_BUTTON);
        }, [i]),
        p = r.useMemo(() => c()(et.o, { [et.H5]: a }), [a]);
    return (0, n.jsxs)("div", {
        className: et.zu,
        children: [
            2 === s &&
                (0, n.jsx)(x.D, {
                    className: c()(p, et.gy),
                    onClick: d,
                    children: (0, n.jsx)(S.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, n.jsx)(er._, {
                sku: l,
                isCardHovered: a,
                trackButtonClick: m,
                className: c()(p, et.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function ep(e) {
    let { positionInSection: t, skuId: a, variant: i = 0, onClick: s, className: o, analyticsLocations: u } = e,
        x = r.useRef(null),
        S = r.useRef(null),
        q = (0, b.bG)([O.A], () => O.A.get(a)),
        { guildId: er } = (0, G.nG)(q?.applicationId),
        em = q?.applicationId,
        ep = (0, b.bG)([w.A], () => (0, p.M)(w.A.theme)),
        ef = (0, b.bG)([y.Ay], () => y.Ay.useReducedMotion),
        e_ = D.Q_.useSetting(),
        { isHoveringOrFocusing: eC } = (0, M.A)(x),
        eh = (0, U.jM)(),
        { analyticsLocations: eg } = (0, R.Ay)(u ?? []),
        eb = r.useRef({ positionInSection: t, analyticsLocations: eg }),
        [ej, ev] = r.useState(!1),
        eN = (0, b.bG)([z.A], () => (null != a ? z.A.getNormalizedSKUEligibility(a) : void 0), [a]),
        ek = (function (e, t) {
            let l = (0, b.bG)([O.A], () => O.A.get(e)),
                [a, n] = r.useState(!1),
                [i, s] = r.useState(!1),
                o = r.useMemo(() => (0, G.xf)(l), [l]),
                c = r.useMemo(() => (0, G.fq)(l), [l]);
            return (
                r.useEffect(() => {
                    if (l?.id == null || a || !t) return;
                    if (null == c) return void n(!0);
                    let e = new Image();
                    return (
                        (e.src = c.toString()),
                        (e.onload = () => {
                            n(!0);
                        }),
                        (e.onerror = () => {
                            n(!0);
                        }),
                        () => {
                            (e.onerror = null), (e.onload = null), (e.src = "");
                        }
                    );
                }, [c, t, a, l?.id]),
                r.useEffect(() => {
                    if (l?.id == null || i || !t) return;
                    if (null == o) return void s(!0);
                    let e = !0;
                    return (
                        (0, Y.l0)(o.toString()).finally(() => {
                            e && s(!0);
                        }),
                        () => {
                            e = !1;
                        }
                    );
                }, [i, o, t, l?.id]),
                r.useMemo(() => a && i, [a, i])
            );
        })(a, ej),
        eE = (0, L.JL)({ sku: q }),
        eA = eE?.amount,
        ey = (0, K.o)({ orbPriceAmount: eA, applicationId: em, location: "social_layer_storefront_card" }),
        eT = (0, I.h)(q?.applicationId),
        eR = r.useCallback((e) => {
            ev(e);
        }, []),
        eI = r.useMemo(() => c()(et.Nr, { [et.ax]: 0 === i, [et.GW]: 1 === i, [et.jz]: 2 === i }), [i]),
        { handleCardHover: eM, handleCardUnhover: eS } = (function (e) {
            let {
                    skuId: t,
                    applicationId: l,
                    guildId: a,
                    analyticsContext: n,
                    positionInSection: i,
                    analyticsLocations: s,
                } = e,
                o = r.useRef(!1),
                c = r.useRef(n),
                u = r.useRef({ positionInSection: i, analyticsLocations: s });
            return (
                r.useEffect(() => {
                    c.current = n;
                }, [n]),
                {
                    handleCardHover: r.useCallback(() => {
                        if (!o.current) {
                            let {
                                    sessionId: e,
                                    guildId: n,
                                    applicationId: r,
                                    pageIndex: i,
                                    pageTitle: s,
                                    pageSection: d,
                                    pageSectionTitle: m,
                                    isUserGuildMember: x,
                                    pageHasLeaderboard: p,
                                } = c.current,
                                { positionInSection: f, analyticsLocations: _ } = u.current;
                            P.default.track(ei.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                                slayer_storefront_session_id: e,
                                sku_id: t,
                                guild_id: a ?? n,
                                application_id: l ?? r,
                                page_index: i,
                                page_title: s,
                                page_section: d,
                                page_section_title: m,
                                position_in_section: f,
                                is_user_guild_member: x,
                                page_has_leaderboard: p,
                                location_stack: _,
                            }),
                                (o.current = !0);
                        }
                    }, [t, l, a]),
                    handleCardUnhover: r.useCallback(() => {
                        o.current = !1;
                    }, []),
                }
            );
        })({
            skuId: a,
            applicationId: em,
            guildId: er,
            analyticsContext: eh,
            positionInSection: t,
            analyticsLocations: eg,
        }),
        { handleCardVisibilityChange: eH } = (function (e) {
            let {
                    skuId: t,
                    applicationId: l,
                    guildId: a,
                    analyticsContext: n,
                    positionInSection: i,
                    analyticsLocations: s,
                } = e,
                o = r.useRef(null),
                c = r.useRef(n),
                u = r.useRef({ positionInSection: i, analyticsLocations: s });
            r.useEffect(() => {
                c.current = n;
            }, [n]);
            let d = r.useCallback(() => {
                    let {
                            sessionId: e,
                            guildId: n,
                            applicationId: r,
                            pageIndex: i,
                            pageTitle: s,
                            pageSection: o,
                            pageSectionTitle: d,
                            isUserGuildMember: m,
                            pageHasLeaderboard: x,
                        } = c.current,
                        { positionInSection: p, analyticsLocations: f } = u.current;
                    P.default.track(ei.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                        slayer_storefront_session_id: e,
                        sku_id: t,
                        guild_id: a ?? n,
                        application_id: l ?? r,
                        page_index: i,
                        page_title: s,
                        page_section: o,
                        page_section_title: d,
                        position_in_section: p,
                        is_user_guild_member: m,
                        page_has_leaderboard: x,
                        location_stack: f,
                    });
                }, [t, l, a]),
                m = r.useCallback(
                    (e) => {
                        e
                            ? null === o.current &&
                              (o.current = window.setTimeout(() => {
                                  d(), (o.current = null);
                              }, 1e3))
                            : null !== o.current && (clearTimeout(o.current), (o.current = null));
                    },
                    [d],
                );
            return (
                r.useEffect(
                    () => () => {
                        null !== o.current && (clearTimeout(o.current), (o.current = null));
                    },
                    [],
                ),
                { handleCardVisibilityChange: m }
            );
        })({
            skuId: a,
            applicationId: em,
            guildId: er,
            analyticsContext: eh,
            positionInSection: t,
            analyticsLocations: eg,
        });
    r.useEffect(() => {
        eH(ej);
    }, [ej]);
    let eL = r.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: l } = eb.current,
                    {
                        sessionId: n,
                        guildId: r,
                        applicationId: i,
                        pageIndex: s,
                        pageTitle: o,
                        pageSection: c,
                        pageSectionTitle: u,
                        isUserGuildMember: d,
                        pageHasLeaderboard: m,
                    } = eh;
                P.default.track(ei.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: n,
                    sku_id: a,
                    guild_id: er ?? r,
                    application_id: em ?? i,
                    page_index: s,
                    page_title: o,
                    page_section: c,
                    page_section_title: u,
                    position_in_section: l,
                    is_user_guild_member: d,
                    page_has_leaderboard: m,
                    cta_type: e,
                    location_stack: t,
                });
            },
            [a, em, er, eh],
        ),
        { primaryIconAsset: ew, primaryIconLabel: eD } = r.useMemo(() => (0, G.Cv)(q, em), [q, em]),
        eB = (0, b.bG)([z.A], () => z.A.getStorefrontState(em)?.activePage ?? 0),
        eO = r.useMemo(() => {
            let e = q?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let t = d()(),
                l = Math.max(d()(e).diff(t, "days"), 1);
            return l <= 3 ? eo.intl.format(eo.t.PWw4Vp, { days: l }) : null;
        }, [q?.tenantMetadata?.socialLayer?.expiresAt]),
        eP = (0, G.xf)(q),
        eG = r.useMemo(() => {
            if (!ek) return "none";
            let [e, t] = ec[i];
            return `linear-gradient(to top, ${eu} ${30 + e}%, ${ed} ${30 + t}%)`;
        }, [i, ek]),
        eF = r.useCallback(() => {
            null != em && (0, F.iR)(em, a);
        }, [em, a]),
        eU = r.useCallback(() => {
            eM(),
                null != em &&
                    (S.current = setTimeout(() => {
                        (0, F.iR)(em, a);
                    }, 1e3));
        }, [em, a, eM]),
        eW = r.useCallback(() => {
            eS(), null != S.current && (clearTimeout(S.current), (S.current = null));
        }, [eS]);
    r.useEffect(
        () => () => {
            null != S.current && clearTimeout(S.current);
        },
        [],
    );
    let { getSocialLayerStorefrontLink: ez } = (0, W.H)(),
        eK = r.useCallback(() => {
            null != em && null != ez && (0, H.bG)(ez(eB, a, q?.slug));
        }, [em, a, eB, q?.slug, ez]),
        eY = r.useCallback(
            (e) => {
                (eL(es.bB.CARD), null != s && q?.applicationId != null)
                    ? s(e, { skuId: a, applicationId: q.applicationId })
                    : eK();
            },
            [eL, s, eK, a, q?.applicationId],
        ),
        e$ = r.useCallback(
            (e) => {
                e_ &&
                    (0, A.L3)(e, async () => {
                        let { default: e } = await l.e("97249").then(l.bind(l, 10680));
                        return (t) => (0, n.jsx)(e, { ...t, skuId: a });
                    });
            },
            [e_, a],
        ),
        eq = r.useMemo(() => [...eg, T.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [eg]),
        eV = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != eT &&
                        (eL(es.bB.BUY_WITH_ORBS_BUTTON),
                        (0, B.B4)({
                            skuId: a,
                            applicationId: eT.id,
                            onComplete: () => {
                                null != eT &&
                                    null != q &&
                                    (0, V.n)({ sku: q, application: eT, analyticsLocations: eq });
                            },
                            analyticsLocations: eq,
                        }));
            },
            [q, eT, a, eL, eq],
        ),
        eQ = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != q &&
                        (eL(es.bB.BUY_BUTTON), (0, Q.a)(q, { isGift: !1 }, { analyticsLocations: eq, guildId: er }));
            },
            [q, er, eL, eq],
        ),
        {
            priceComponent: eJ,
            extendedHeight: eZ,
            displayPrice: eX,
        } = (function (e) {
            let { sku: t, orbsGate: l, orbPriceAmount: a, promotion: i } = e,
                { normalPrice: s, discountedPrice: o, discountPercent: c, userPrice: u } = (0, L.CD)({ sku: t }),
                d = r.useMemo(() => {
                    let e = i?.rewardValue;
                    return null == e || e <= 0
                        ? null
                        : (0, n.jsx)("div", {
                              className: et.pt,
                              children: (0, n.jsx)(N.E, {
                                  variant: "text-sm/semibold",
                                  color: "currentColor",
                                  children: eo.intl.format(eo.t.GiVd2Q, {
                                      orbCount: e,
                                      orbIconHook: () =>
                                          (0, n.jsx)(m.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                  }),
                              }),
                          });
                }, [i]);
            return null != t && (0, G.mC)(t)
                ? "HIDDEN" !== l && null != a
                    ? {
                          priceComponent: (0, n.jsx)(en.A, {
                              orbsGate: l,
                              className: et.p6,
                              orbPrice: a,
                              fiatPrice: s,
                              textDefaultColor: "always-white",
                          }),
                          extendedHeight: !1,
                          displayPrice: u,
                      }
                    : null != c && null != o
                      ? {
                            priceComponent: (0, n.jsxs)("div", {
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: et.p6,
                                        children: [
                                            null != s &&
                                                (0, n.jsx)(N.E, {
                                                    className: et.of,
                                                    variant: "text-md/medium",
                                                    color: "text-muted",
                                                    lineClamp: 1,
                                                    children: s,
                                                }),
                                            (0, n.jsx)(N.E, {
                                                variant: "text-md/bold",
                                                color: "always-white",
                                                lineClamp: 1,
                                                children: o,
                                            }),
                                            (0, n.jsxs)(N.E, {
                                                variant: "text-md/bold",
                                                color: "text-feedback-positive",
                                                lineClamp: 1,
                                                children: ["(", c, ")"],
                                            }),
                                        ],
                                    }),
                                    d,
                                ],
                            }),
                            extendedHeight: null != d,
                            displayPrice: u,
                        }
                      : {
                            priceComponent: (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(N.E, {
                                        variant: "text-md/bold",
                                        color: "always-white",
                                        lineClamp: 1,
                                        children: s,
                                    }),
                                    d,
                                ],
                            }),
                            extendedHeight: !1,
                            displayPrice: u,
                        }
                : { priceComponent: null, extendedHeight: !1, displayPrice: u };
        })({ sku: q, orbsGate: ey, orbPriceAmount: eA, promotion: (0, $.F)("card", { applicationId: em, skuId: a }) }),
        e0 = q?.exclusive === !0 && 2 !== i,
        e1 = r.useMemo(
            () =>
                "CAN_CHECKOUT" === ey
                    ? (0, n.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: eF,
                          onClick: eV,
                          "aria-label": eo.intl.formatToPlainString(eo.t.yi41qQ, { orbPrice: eA }),
                          text: eo.intl.format(eo.t.JC15qj, {
                              orbPrice: eA,
                              orbIconHook: () =>
                                  (0, n.jsx)(m.C, { className: et.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                          fullWidth: !0,
                      })
                    : (0, n.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: eF,
                          onClick: eQ,
                          text: null != eX ? eo.intl.format(eo.t.Xp5WTn, { price: eX }) : eo.intl.string(eo.t.boqtTA),
                          fullWidth: !0,
                      }),
            [ey, eV, eQ, eF, eA, eX],
        );
    if (null == q) return null;
    let e3 = (0, G.fq)(q),
        e9 = e0 ? (0, n.jsx)("div", { className: et.mN, "aria-hidden": !0 }) : null,
        e2 = (0, n.jsx)(j.L, {
            innerRef: x,
            onChange: eR,
            threshold: 0,
            children: (0, n.jsx)(_.vN, {
                children: (0, n.jsxs)(k.s, {
                    onClick: eY,
                    onContextMenu: e$,
                    onMouseEnter: eU,
                    onMouseLeave: eW,
                    className: c()(
                        eI,
                        { [et.Zl]: !ef && 2 !== i, [et.BN]: ep, [ep ? et.Mn : et.YF]: eC, [et.Rc]: !ek },
                        o,
                    ),
                    ref: x,
                    "aria-label": q.name,
                    children: [
                        q.exclusive
                            ? (0, n.jsx)("div", { className: et.fC, children: (0, n.jsx)(J.I, {}) })
                            : null != eO && (0, n.jsx)(E.Lp, { text: eO, disableColor: !0, className: et.qS }),
                        (0, n.jsx)(ex, {
                            sku: q,
                            guildId: er,
                            isCardHovered: eC,
                            variant: i,
                            trackCardClick: eL,
                            analyticsLocations: eg,
                            analyticsContext: eh,
                        }),
                        null != e3
                            ? ek
                                ? (0, n.jsx)(X.A, {
                                      containerClassName: et.Vl,
                                      foregroundImageClassName: et.wP,
                                      cardImage: e3,
                                      altText: q.name,
                                      shape: "custom",
                                      backgroundImageClassName: et.GC,
                                      cardBackgroundImage: eP,
                                      cssPosition: "absolute",
                                  })
                                : (0, n.jsx)(el, {})
                            : (0, n.jsx)("div", {
                                  className: et.t7,
                                  children: (0, n.jsx)(C.q, {
                                      color: "white",
                                      size: "custom",
                                      height: 80,
                                      width: 80,
                                      className: et.Cw,
                                  }),
                              }),
                        2 !== i
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)("div", { className: et.iZ, style: { background: eG } }),
                                      (0, n.jsx)(h.N, {
                                          theme: ei.NJ8.DARKER,
                                          children: (e) =>
                                              (0, n.jsxs)("div", {
                                                  className: c()(et.zH, e),
                                                  children: [
                                                      (0, n.jsxs)("div", {
                                                          className: c()(et.gn, {
                                                              [et.ov]: !(0, G.mC)(q),
                                                              [et.w4]: eZ,
                                                          }),
                                                          children: [
                                                              ek &&
                                                                  (0, n.jsx)("div", {
                                                                      className: et.S1,
                                                                      children: (0, n.jsx)(Z.V, {
                                                                          textColor: "always-white",
                                                                      }),
                                                                  }),
                                                              ek
                                                                  ? (0, n.jsxs)(n.Fragment, {
                                                                        children: [
                                                                            null != ew &&
                                                                                (0, n.jsx)("img", {
                                                                                    src: ew.toString(),
                                                                                    alt: eD,
                                                                                    className: et.ye,
                                                                                }),
                                                                            (0, n.jsx)(N.E, {
                                                                                color: "always-white",
                                                                                variant: "text-md/medium",
                                                                                lineClamp: 1,
                                                                                children: q.name,
                                                                            }),
                                                                        ],
                                                                    })
                                                                  : (0, n.jsx)(ea, {}),
                                                          ],
                                                      }),
                                                      (0, n.jsx)("div", {
                                                          className: et.iQ,
                                                          children: ek ? eJ : (0, n.jsx)(ea, {}),
                                                      }),
                                                  ],
                                              }),
                                      }),
                                      (0, n.jsx)("div", {
                                          className: et.li,
                                          children: (0, n.jsxs)(g.e, {
                                              wrap: !1,
                                              fullWidth: !0,
                                              children: [
                                                  eN
                                                      ? e1
                                                      : (0, n.jsx)(v.m, {
                                                            text: eo.intl.string(eo.t.IqlPbQ),
                                                            children: (0, n.jsx)(f.$, {
                                                                variant: "primary",
                                                                onClick: (e) => {
                                                                    e.stopPropagation(),
                                                                        eL(es.bB.VIEW_DETAILS_BUTTON),
                                                                        eK();
                                                                },
                                                                text: eo.intl.string(eo.t.KLBTgF),
                                                                fullWidth: !0,
                                                            }),
                                                        }),
                                                  (0, n.jsx)(ee.A, {
                                                      onGift: (e) => {
                                                          e.stopPropagation(),
                                                              eL(es.bB.GIFT_BUTTON),
                                                              (0, Q.a)(
                                                                  q,
                                                                  { isGift: !0 },
                                                                  {
                                                                      analyticsLocations: [
                                                                          ...eg,
                                                                          T.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
                                                                      ],
                                                                  },
                                                              );
                                                      },
                                                  }),
                                              ],
                                          }),
                                      }),
                                  ],
                              })
                            : null,
                    ],
                }),
            }),
        });
    return e0 ? (0, n.jsxs)("div", { className: et.ur, children: [e9, e2] }) : e2;
}
