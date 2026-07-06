l.d(t, { s: () => ex, A: () => ef });
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
    b = l(825484),
    g = l(17928),
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
    w = l(288106),
    L = l(117218),
    D = l(363195),
    O = l(885386),
    B = l(652165),
    P = l(67480),
    G = l(174459),
    F = l(871123),
    U = l(733391),
    W = l(439303),
    z = l(353281),
    K = l(832163),
    Y = l(69236),
    $ = l(654107),
    q = l(31969),
    Q = l(345938),
    V = l(510022),
    J = l(533406),
    Z = l(263911),
    X = l(971146),
    ee = l(366523),
    et = l(300182),
    el = l(900719);
function ea() {
    let [e] = r.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, n.jsx)("div", { className: c()(el.Vl, el.Yf), style: { animationDelay: `${e}s` } });
}
function en() {
    let [e] = r.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, n.jsx)("div", { className: el.RC, style: { width: `${e}%` } });
}
var er = l(533772),
    ei = l(743693),
    es = l(652215),
    eo = l(995393),
    ec = l(375708);
let eu = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    ed = s()("#000000").darken(1.5).alpha(0.9).hex(),
    em = s()("#000000").alpha(0).hex();
var ex = (((a = {})[(a.SMALL = 0)] = "SMALL"), (a[(a.MEDIUM = 1)] = "MEDIUM"), (a[(a.EMBEDDED = 2)] = "EMBEDDED"), a);
function ep(e) {
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
                        (i(eo.bB.FORWARD_BUTTON),
                        (0, Q.d)({
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
            i(eo.bB.WISHLIST_BUTTON);
        }, [i]),
        p = r.useMemo(() => c()(el.o, { [el.H5]: a }), [a]);
    return (0, n.jsxs)("div", {
        className: el.zu,
        children: [
            2 === s &&
                (0, n.jsx)(x.D, {
                    className: c()(p, el.gy),
                    onClick: d,
                    children: (0, n.jsx)(S.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, n.jsx)(ei._, {
                sku: l,
                isCardHovered: a,
                trackButtonClick: m,
                className: c()(p, el.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function ef(e) {
    let {
            positionInSection: t,
            skuId: a,
            variant: i = 0,
            onClick: s,
            className: o,
            showOrbsOnly: u = !1,
            analyticsLocations: x,
        } = e,
        S = r.useRef(null),
        Q = r.useRef(null),
        ei = (0, g.bG)([P.A], () => P.A.get(a)),
        { guildId: ex } = (0, F.nG)(ei?.applicationId),
        ef = ei?.applicationId,
        e_ = (0, g.bG)([D.A], () => (0, p.M)(D.A.theme)),
        eC = (0, g.bG)([y.Ay], () => y.Ay.useReducedMotion),
        eh = O.Q_.useSetting(),
        { isHoveringOrFocusing: eb } = (0, M.A)(S),
        eg = (0, W.jM)(),
        { analyticsLocations: ej } = (0, R.Ay)(x ?? []),
        ev = r.useRef({ positionInSection: t, analyticsLocations: ej }),
        [eN, ek] = r.useState(!1),
        eE = (0, g.bG)([K.A], () => (null != a ? K.A.getNormalizedSKUEligibility(a) : void 0), [a]),
        eA = (function (e, t) {
            let l = (0, g.bG)([P.A], () => P.A.get(e)),
                [a, n] = r.useState(!1),
                [i, s] = r.useState(!1),
                o = r.useMemo(() => (0, F.xf)(l), [l]),
                c = r.useMemo(() => (0, F.fq)(l), [l]);
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
                        (0, $.l0)(o.toString()).finally(() => {
                            e && s(!0);
                        }),
                        () => {
                            e = !1;
                        }
                    );
                }, [i, o, t, l?.id]),
                r.useMemo(() => a && i, [a, i])
            );
        })(a, eN),
        ey = (0, L.JL)({ sku: ei }),
        eT = ey?.amount,
        eR = (0, Y.o)({ orbPriceAmount: eT, applicationId: ef, location: "social_layer_storefront_card" }),
        eI = (0, I.h)(ei?.applicationId),
        eM = r.useCallback((e) => {
            ek(e);
        }, []),
        eS = r.useMemo(() => c()(el.Nr, { [el.ax]: 0 === i, [el.GW]: 1 === i, [el.jz]: 2 === i }), [i]),
        { handleCardHover: eH, handleCardUnhover: ew } = (function (e) {
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
                            G.default.track(es.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
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
            applicationId: ef,
            guildId: ex,
            analyticsContext: eg,
            positionInSection: t,
            analyticsLocations: ej,
        }),
        { handleCardVisibilityChange: eL } = (function (e) {
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
                    G.default.track(es.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
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
            applicationId: ef,
            guildId: ex,
            analyticsContext: eg,
            positionInSection: t,
            analyticsLocations: ej,
        });
    r.useEffect(() => {
        eL(eN);
    }, [eN]);
    let eD = r.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: l } = ev.current,
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
                    } = eg;
                G.default.track(es.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: n,
                    sku_id: a,
                    guild_id: ex ?? r,
                    application_id: ef ?? i,
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
            [a, ef, ex, eg],
        ),
        { primaryIconAsset: eO, primaryIconLabel: eB } = r.useMemo(() => (0, F.Cv)(ei, ef), [ei, ef]),
        eP = (0, g.bG)([K.A], () => K.A.getStorefrontState(ef)?.activePage ?? 0),
        eG = r.useMemo(() => {
            let e = ei?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let t = d()(),
                l = Math.max(d()(e).diff(t, "days"), 1);
            return l <= 3 ? ec.intl.format(ec.t.PWw4Vp, { days: l }) : null;
        }, [ei?.tenantMetadata?.socialLayer?.expiresAt]),
        eF = (0, F.xf)(ei),
        eU = r.useMemo(() => {
            if (!eA) return "none";
            let [e, t] = eu[i];
            return `linear-gradient(to top, ${ed} ${30 + e}%, ${em} ${30 + t}%)`;
        }, [i, eA]),
        eW = r.useCallback(() => {
            null != ef && (0, U.iR)(ef, a);
        }, [ef, a]),
        ez = r.useCallback(() => {
            eH(),
                null != ef &&
                    (Q.current = setTimeout(() => {
                        (0, U.iR)(ef, a);
                    }, 1e3));
        }, [ef, a, eH]),
        eK = r.useCallback(() => {
            ew(), null != Q.current && (clearTimeout(Q.current), (Q.current = null));
        }, [ew]);
    r.useEffect(
        () => () => {
            null != Q.current && clearTimeout(Q.current);
        },
        [],
    );
    let { getSocialLayerStorefrontLink: eY } = (0, z.H)(),
        e$ = r.useCallback(() => {
            null != ef && null != eY && (0, H.bG)(eY(eP, a, ei?.slug));
        }, [ef, a, eP, ei?.slug, eY]),
        eq = r.useCallback(
            (e) => {
                (eD(eo.bB.CARD), null != s && ei?.applicationId != null)
                    ? s(e, { skuId: a, applicationId: ei.applicationId })
                    : e$();
            },
            [eD, s, e$, a, ei?.applicationId],
        ),
        eQ = r.useCallback(
            (e) => {
                eh &&
                    (0, A.L3)(e, async () => {
                        let { default: e } = await l.e("97249").then(l.bind(l, 10680));
                        return (t) => (0, n.jsx)(e, { ...t, skuId: a });
                    });
            },
            [eh, a],
        ),
        eV = r.useMemo(() => [...ej, T.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [ej]),
        eJ = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != eI &&
                        (eD(eo.bB.BUY_WITH_ORBS_BUTTON),
                        (0, B.B4)({
                            skuId: a,
                            applicationId: eI.id,
                            onComplete: () => {
                                null != eI &&
                                    null != ei &&
                                    (0, V.n)({ sku: ei, application: eI, analyticsLocations: eV });
                            },
                            analyticsLocations: eV,
                        }));
            },
            [ei, eI, a, eD, eV],
        ),
        eZ = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != ei &&
                        (eD(eo.bB.BUY_BUTTON), (0, J.a)(ei, { isGift: !1 }, { analyticsLocations: eV, guildId: ex }));
            },
            [ei, ex, eD, eV],
        ),
        {
            priceComponent: eX,
            extendedHeight: e0,
            displayPrice: e1,
        } = (function (e) {
            let { sku: t, orbsGate: l, orbPriceAmount: a, promotion: i, showOrbsOnly: s = !1 } = e,
                { normalPrice: o, discountedPrice: c, discountPercent: u, userPrice: d } = (0, L.CD)({ sku: t }),
                x = r.useMemo(() => {
                    let e = i?.reward;
                    return null == e || e.type !== w.Ns.ACTION || e.amount <= 0
                        ? null
                        : (0, n.jsx)("div", {
                              className: el.pt,
                              children: (0, n.jsx)(N.E, {
                                  variant: "text-sm/semibold",
                                  color: "currentColor",
                                  children: ec.intl.format(ec.t.GiVd2Q, {
                                      orbCount: e.amount,
                                      orbIconHook: () =>
                                          (0, n.jsx)(m.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                  }),
                              }),
                          });
                }, [i]);
            return null != t && (0, F.mC)(t)
                ? s && null != a && a > 0
                    ? {
                          priceComponent: (0, n.jsx)(er.O, {
                              variant: "text-md/bold",
                              orbPrice: a,
                              color: "always-white",
                          }),
                          extendedHeight: !1,
                          displayPrice: d,
                      }
                    : "HIDDEN" !== l && null != a
                      ? {
                            priceComponent: (0, n.jsx)(er.A, {
                                orbsGate: l,
                                className: el.p6,
                                orbPrice: a,
                                fiatPrice: o,
                                textDefaultColor: "always-white",
                            }),
                            extendedHeight: !1,
                            displayPrice: d,
                        }
                      : null != u && null != c
                        ? {
                              priceComponent: (0, n.jsxs)("div", {
                                  children: [
                                      (0, n.jsxs)("div", {
                                          className: el.p6,
                                          children: [
                                              null != o &&
                                                  (0, n.jsx)(N.E, {
                                                      className: el.of,
                                                      variant: "text-md/medium",
                                                      color: "text-muted",
                                                      lineClamp: 1,
                                                      children: o,
                                                  }),
                                              (0, n.jsx)(N.E, {
                                                  variant: "text-md/bold",
                                                  color: "always-white",
                                                  lineClamp: 1,
                                                  children: c,
                                              }),
                                              (0, n.jsxs)(N.E, {
                                                  variant: "text-md/bold",
                                                  color: "text-feedback-positive",
                                                  lineClamp: 1,
                                                  children: ["(", u, ")"],
                                              }),
                                          ],
                                      }),
                                      x,
                                  ],
                              }),
                              extendedHeight: null != x,
                              displayPrice: d,
                          }
                        : {
                              priceComponent: (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(N.E, {
                                          variant: "text-md/bold",
                                          color: "always-white",
                                          lineClamp: 1,
                                          children: o,
                                      }),
                                      x,
                                  ],
                              }),
                              extendedHeight: !1,
                              displayPrice: d,
                          }
                : { priceComponent: null, extendedHeight: !1, displayPrice: d };
        })({
            sku: ei,
            orbsGate: eR,
            orbPriceAmount: eT,
            promotion: (0, q.F)("card", { applicationId: ef, skuId: a }),
            showOrbsOnly: u,
        }),
        e3 = ei?.exclusive === !0 && 2 !== i,
        e9 = r.useMemo(
            () =>
                "CAN_CHECKOUT" === eR
                    ? (0, n.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: eW,
                          onClick: eJ,
                          "aria-label": ec.intl.formatToPlainString(ec.t.yi41qQ, { orbPrice: eT }),
                          text: ec.intl.format(ec.t.JC15qj, {
                              orbPrice: eT,
                              orbIconHook: () =>
                                  (0, n.jsx)(m.C, { className: el.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                          fullWidth: !0,
                      })
                    : (0, n.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: eW,
                          onClick: eZ,
                          text: null != e1 ? ec.intl.format(ec.t.Xp5WTn, { price: e1 }) : ec.intl.string(ec.t.boqtTA),
                          fullWidth: !0,
                      }),
            [eR, eJ, eZ, eW, eT, e1],
        );
    if (null == ei) return null;
    let e2 = (0, F.fq)(ei),
        e8 = e3 ? (0, n.jsx)("div", { className: el.mN, "aria-hidden": !0 }) : null,
        e7 = (0, n.jsx)(j.L, {
            innerRef: S,
            onChange: eM,
            threshold: 0,
            children: (0, n.jsx)(_.vN, {
                children: (0, n.jsxs)(k.s, {
                    onClick: eq,
                    onContextMenu: eQ,
                    onMouseEnter: ez,
                    onMouseLeave: eK,
                    className: c()(
                        eS,
                        { [el.Zl]: !eC && 2 !== i, [el.BN]: e_, [e_ ? el.Mn : el.YF]: eb, [el.Rc]: !eA },
                        o,
                    ),
                    ref: S,
                    "aria-label": ei.name,
                    children: [
                        ei.exclusive
                            ? (0, n.jsx)("div", { className: el.fC, children: (0, n.jsx)(Z.I, {}) })
                            : null != eG && (0, n.jsx)(E.Lp, { text: eG, disableColor: !0, className: el.qS }),
                        (0, n.jsx)(ep, {
                            sku: ei,
                            guildId: ex,
                            isCardHovered: eb,
                            variant: i,
                            trackCardClick: eD,
                            analyticsLocations: ej,
                            analyticsContext: eg,
                        }),
                        null != e2
                            ? eA
                                ? (0, n.jsx)(ee.A, {
                                      containerClassName: el.Vl,
                                      foregroundImageClassName: el.wP,
                                      cardImage: e2,
                                      altText: ei.name,
                                      shape: "custom",
                                      backgroundImageClassName: el.GC,
                                      cardBackgroundImage: eF,
                                      cssPosition: "absolute",
                                  })
                                : (0, n.jsx)(ea, {})
                            : (0, n.jsx)("div", {
                                  className: el.t7,
                                  children: (0, n.jsx)(C.q, {
                                      color: "white",
                                      size: "custom",
                                      height: 80,
                                      width: 80,
                                      className: el.Cw,
                                  }),
                              }),
                        2 !== i
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)("div", { className: el.iZ, style: { background: eU } }),
                                      (0, n.jsx)(h.N, {
                                          theme: es.NJ8.DARKER,
                                          children: (e) =>
                                              (0, n.jsxs)("div", {
                                                  className: c()(el.zH, e),
                                                  children: [
                                                      (0, n.jsxs)("div", {
                                                          className: c()(el.gn, {
                                                              [el.ov]: !(0, F.mC)(ei),
                                                              [el.w4]: e0,
                                                          }),
                                                          children: [
                                                              eA &&
                                                                  (0, n.jsx)("div", {
                                                                      className: el.S1,
                                                                      children: (0, n.jsx)(X.V, {
                                                                          textColor: "always-white",
                                                                      }),
                                                                  }),
                                                              eA
                                                                  ? (0, n.jsxs)(n.Fragment, {
                                                                        children: [
                                                                            null != eO &&
                                                                                (0, n.jsx)("img", {
                                                                                    src: eO.toString(),
                                                                                    alt: eB,
                                                                                    className: el.ye,
                                                                                }),
                                                                            (0, n.jsx)(N.E, {
                                                                                color: "always-white",
                                                                                variant: "text-md/medium",
                                                                                lineClamp: 1,
                                                                                children: ei.name,
                                                                            }),
                                                                        ],
                                                                    })
                                                                  : (0, n.jsx)(en, {}),
                                                          ],
                                                      }),
                                                      (0, n.jsx)("div", {
                                                          className: el.iQ,
                                                          children: eA ? eX : (0, n.jsx)(en, {}),
                                                      }),
                                                  ],
                                              }),
                                      }),
                                      (0, n.jsx)("div", {
                                          className: el.li,
                                          children: (0, n.jsxs)(b.e, {
                                              wrap: !1,
                                              fullWidth: !0,
                                              children: [
                                                  eE
                                                      ? e9
                                                      : (0, n.jsx)(v.m, {
                                                            text: ec.intl.string(ec.t.IqlPbQ),
                                                            children: (0, n.jsx)(f.$, {
                                                                variant: "primary",
                                                                onClick: (e) => {
                                                                    e.stopPropagation(),
                                                                        eD(eo.bB.VIEW_DETAILS_BUTTON),
                                                                        e$();
                                                                },
                                                                text: ec.intl.string(ec.t.KLBTgF),
                                                                fullWidth: !0,
                                                            }),
                                                        }),
                                                  (0, n.jsx)(et.A, {
                                                      onGift: (e) => {
                                                          e.stopPropagation(),
                                                              eD(eo.bB.GIFT_BUTTON),
                                                              (0, J.a)(
                                                                  ei,
                                                                  { isGift: !0 },
                                                                  {
                                                                      analyticsLocations: [
                                                                          ...ej,
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
    return e3 ? (0, n.jsxs)("div", { className: el.ur, children: [e8, e7] }) : e7;
}
