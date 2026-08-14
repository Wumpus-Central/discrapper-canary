l.d(t, { s: () => ex, A: () => eg });
var r,
    n = l(477900),
    a = l(582128),
    i = l(310784),
    o = l.n(i),
    s = l(503698),
    c = l.n(s),
    u = l(989349),
    d = l.n(u),
    m = l(318254),
    p = l(939249),
    x = l(366010),
    f = l(821609),
    _ = l(259678),
    g = l(638916),
    h = l(43990),
    C = l(825484),
    b = l(17928),
    j = l(269115),
    v = l(834730),
    N = l(890856),
    y = l(812993),
    A = l(866665),
    k = l(442433),
    E = l(775602),
    T = l(793574),
    R = l(688810),
    P = l(429913),
    I = l(713517),
    M = l(427209),
    S = l(976860),
    D = l(288106),
    H = l(993046),
    L = l(363195),
    w = l(885386),
    O = l(652165),
    B = l(67480),
    G = l(174459),
    F = l(871123),
    U = l(733391),
    W = l(439303),
    z = l(353281),
    Y = l(832163),
    $ = l(69236),
    q = l(654107),
    K = l(31969),
    V = l(345938),
    J = l(510022),
    Q = l(99161),
    Z = l(263911),
    X = l(971146),
    ee = l(366523),
    et = l(300182),
    el = l(503991);
function er() {
    let [e] = a.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, n.jsx)("div", { className: c()(el.Vl, el.Yf), style: { animationDelay: `${e}s` } });
}
function en() {
    let [e] = a.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, n.jsx)("div", { className: el.RC, style: { width: `${e}%` } });
}
var ea = l(533772),
    ei = l(821707),
    eo = l(743693),
    es = l(652215),
    ec = l(995393),
    eu = l(375708);
let ed = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    em = o()("#000000").darken(1.5).alpha(0.9).hex(),
    ep = o()("#000000").alpha(0).hex();
var ex = (((r = {})[(r.SMALL = 0)] = "SMALL"), (r[(r.MEDIUM = 1)] = "MEDIUM"), (r[(r.EMBEDDED = 2)] = "EMBEDDED"), r);
let ef = { currency: null, price: null, regularPrice: null, orbsAmount: null };
function e_(e) {
    let {
            guildId: t,
            sku: l,
            isCardHovered: r,
            trackCardClick: i,
            variant: o,
            analyticsLocations: s,
            analyticsContext: u,
        } = e,
        d = a.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != l &&
                        (i(ec.bB.FORWARD_BUTTON),
                        (0, V.d)({
                            sku: l,
                            guildId: t,
                            analyticsContext: u,
                            analyticsLocations: s,
                            source: "social-layer-storefront-embed",
                        }));
            },
            [l, t, i, u, s],
        ),
        m = a.useCallback(() => {
            i(ec.bB.WISHLIST_BUTTON);
        }, [i]),
        x = a.useMemo(() => c()(el.o, { [el.H5]: r }), [r]);
    return (0, n.jsxs)("div", {
        className: el.zu,
        children: [
            2 === o &&
                (0, n.jsx)(p.D, {
                    className: c()(x, el.gy),
                    onClick: d,
                    children: (0, n.jsx)(M.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, n.jsx)(eo._, {
                sku: l,
                isCardHovered: r,
                trackButtonClick: m,
                className: c()(x, el.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function eg(e) {
    let {
            positionInSection: t,
            skuId: r,
            variant: i = 0,
            onClick: o,
            className: s,
            showOrbsOnly: u = !1,
            analyticsLocations: p,
        } = e,
        M = a.useRef(null),
        V = a.useRef(null),
        eo = (0, b.bG)([B.A], () => B.A.get(r)),
        { guildId: ex } = (0, F.nG)(eo?.applicationId),
        eg = eo?.applicationId,
        eh = (0, b.bG)([L.A], () => (0, x.M)(L.A.theme)),
        eC = (0, b.bG)([E.Ay], () => E.Ay.useReducedMotion),
        eb = w.Q_.useSetting(),
        { isHoveringOrFocusing: ej } = (0, I.A)(M),
        ev = (0, W.jM)(),
        { analyticsLocations: eN } = (0, R.Ay)(p ?? []),
        ey = a.useRef({ positionInSection: t, analyticsLocations: eN }),
        [eA, ek] = a.useState(!1),
        eE = (0, b.bG)([Y.A], () => (null != r ? Y.A.getNormalizedSKUEligibility(r) : void 0), [r]),
        eT = (function (e, t) {
            let l = (0, b.bG)([B.A], () => B.A.get(e)),
                [r, n] = a.useState(!1),
                [i, o] = a.useState(!1),
                s = a.useMemo(() => (0, F.xf)(l), [l]),
                c = a.useMemo(() => (0, F.fq)(l), [l]);
            return (
                a.useEffect(() => {
                    if (l?.id == null || r || !t) return;
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
                }, [c, t, r, l?.id]),
                a.useEffect(() => {
                    if (l?.id == null || i || !t) return;
                    if (null == s) return void o(!0);
                    let e = !0;
                    return (
                        (0, q.l0)(s.toString()).finally(() => {
                            e && o(!0);
                        }),
                        () => {
                            e = !1;
                        }
                    );
                }, [i, s, t, l?.id]),
                a.useMemo(() => r && i, [r, i])
            );
        })(r, eA),
        eR = (0, H.JL)({ sku: eo }),
        eP = eR?.amount,
        eI = (0, $.oG)({ orbPriceAmount: eP, applicationId: eg, location: "social_layer_storefront_card" }),
        eM = (0, P.h)(eo?.applicationId),
        {
            priceComponent: eS,
            extendedHeight: eD,
            displayPrice: eH,
            shownPriceDetails: eL,
        } = (function (e) {
            let { sku: t, orbsGate: l, orbPriceAmount: r, promotion: i, showOrbsOnly: o = !1 } = e,
                s = (0, H.ou)({ sku: t }),
                { normalPrice: c, discountedPrice: u, discountPercent: d, userPrice: p } = (0, H.j9)(s),
                x = a.useMemo(() => {
                    let e = i?.reward;
                    return null == e || e.type !== D.Ns.ACTION || e.amount <= 0
                        ? null
                        : (0, n.jsx)("div", {
                              className: el.pt,
                              children: (0, n.jsx)(v.E, {
                                  variant: "text-sm/semibold",
                                  color: "currentColor",
                                  children: eu.intl.format(eu.t.GiVd2Q, {
                                      orbCount: e.amount,
                                      orbIconHook: () =>
                                          (0, n.jsx)(m.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                  }),
                              }),
                          });
                }, [i]);
            return a.useMemo(() => {
                let e = {
                    currency: s.userPrice?.currency ?? s.normalPrice?.currency ?? null,
                    price: s.userPrice?.amount ?? null,
                    regularPrice: s.normalPrice?.amount ?? null,
                };
                return null != t && (0, F.mC)(t)
                    ? i?.flavor === "nitro" && null != u
                        ? {
                              priceComponent: (0, n.jsx)(ei.A, { discountedPrice: u, normalPrice: c }),
                              extendedHeight: !1,
                              displayPrice: p,
                              shownPriceDetails: { ...e, orbsAmount: null },
                          }
                        : o && null != r && r > 0
                          ? {
                                priceComponent: (0, n.jsx)(ea.O, {
                                    variant: "text-md/bold",
                                    orbPrice: r,
                                    color: "text-overlay-light",
                                }),
                                extendedHeight: !1,
                                displayPrice: p,
                                shownPriceDetails: { currency: null, price: null, regularPrice: null, orbsAmount: r },
                            }
                          : "HIDDEN" !== l && null != r
                            ? {
                                  priceComponent: (0, n.jsx)(ea.A, {
                                      orbsGate: l,
                                      className: el.p6,
                                      orbPrice: r,
                                      fiatPrice: c,
                                      textDefaultColor: "text-overlay-light",
                                  }),
                                  extendedHeight: !1,
                                  displayPrice: p,
                                  shownPriceDetails: { ...e, orbsAmount: r },
                              }
                            : null != d && null != u
                              ? {
                                    priceComponent: (0, n.jsxs)("div", {
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: el.p6,
                                                children: [
                                                    null != c &&
                                                        (0, n.jsx)(v.E, {
                                                            className: el.of,
                                                            variant: "text-md/medium",
                                                            color: "text-muted",
                                                            lineClamp: 1,
                                                            children: c,
                                                        }),
                                                    (0, n.jsx)(v.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-overlay-light",
                                                        lineClamp: 1,
                                                        children: u,
                                                    }),
                                                    (0, n.jsxs)(v.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-positive",
                                                        lineClamp: 1,
                                                        children: ["(", d, ")"],
                                                    }),
                                                ],
                                            }),
                                            x,
                                        ],
                                    }),
                                    extendedHeight: null != x,
                                    displayPrice: p,
                                    shownPriceDetails: { ...e, orbsAmount: null },
                                }
                              : {
                                    priceComponent: (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(v.E, {
                                                variant: "text-md/bold",
                                                color: "text-overlay-light",
                                                lineClamp: 1,
                                                children: c,
                                            }),
                                            x,
                                        ],
                                    }),
                                    extendedHeight: !1,
                                    displayPrice: p,
                                    shownPriceDetails: { ...e, orbsAmount: null },
                                }
                    : {
                          priceComponent: null,
                          extendedHeight: !1,
                          displayPrice: p,
                          shownPriceDetails: { currency: null, price: null, regularPrice: null, orbsAmount: null },
                      };
            }, [t, i, u, c, d, o, r, l, x, s, p]);
        })({
            sku: eo,
            orbsGate: eI,
            orbPriceAmount: eP,
            promotion: (0, K.F)("card", { applicationId: eg, skuId: r }),
            showOrbsOnly: u,
        }),
        ew = 2 !== i && eT ? eL : ef,
        eO = a.useCallback((e) => {
            ek(e);
        }, []),
        eB = a.useMemo(() => c()(el.Nr, { [el.ax]: 0 === i, [el.GW]: 1 === i, [el.jz]: 2 === i }), [i]),
        { handleCardHover: eG, handleCardUnhover: eF } = (function (e) {
            let {
                    skuId: t,
                    applicationId: l,
                    guildId: r,
                    analyticsContext: n,
                    positionInSection: i,
                    analyticsLocations: o,
                    shownPriceDetails: s,
                } = e,
                c = a.useRef(!1),
                u = a.useRef(n),
                d = a.useRef({ positionInSection: i, analyticsLocations: o, shownPriceDetails: s });
            return (
                a.useEffect(() => {
                    u.current = n;
                }, [n]),
                a.useEffect(() => {
                    d.current = { positionInSection: i, analyticsLocations: o, shownPriceDetails: s };
                }, [i, o, s]),
                {
                    handleCardHover: a.useCallback(() => {
                        if (!c.current) {
                            let {
                                    sessionId: e,
                                    guildId: n,
                                    applicationId: a,
                                    pageIndex: i,
                                    pageTitle: o,
                                    pageSection: s,
                                    pageSectionTitle: m,
                                    isUserGuildMember: p,
                                    pageHasLeaderboard: x,
                                } = u.current,
                                { positionInSection: f, analyticsLocations: _, shownPriceDetails: g } = d.current;
                            G.default.track(es.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                                slayer_storefront_session_id: e,
                                sku_id: t,
                                guild_id: r ?? n,
                                application_id: l ?? a,
                                page_index: i,
                                page_title: o,
                                page_section: s,
                                page_section_title: m,
                                position_in_section: f,
                                is_user_guild_member: p,
                                page_has_leaderboard: x,
                                price: g.price,
                                regular_price: g.regularPrice,
                                currency: g.currency,
                                orbs_amount: g.orbsAmount,
                                location_stack: _,
                            }),
                                (c.current = !0);
                        }
                    }, [t, l, r]),
                    handleCardUnhover: a.useCallback(() => {
                        c.current = !1;
                    }, []),
                }
            );
        })({
            skuId: r,
            applicationId: eg,
            guildId: ex,
            analyticsContext: ev,
            positionInSection: t,
            analyticsLocations: eN,
            shownPriceDetails: ew,
        }),
        { handleCardVisibilityChange: eU } = (function (e) {
            let {
                    skuId: t,
                    applicationId: l,
                    guildId: r,
                    analyticsContext: n,
                    positionInSection: i,
                    analyticsLocations: o,
                    shownPriceDetails: s,
                } = e,
                c = a.useRef(null),
                u = a.useRef(n),
                d = a.useRef({ positionInSection: i, analyticsLocations: o, shownPriceDetails: s });
            a.useEffect(() => {
                u.current = n;
            }, [n]),
                a.useEffect(() => {
                    d.current = { positionInSection: i, analyticsLocations: o, shownPriceDetails: s };
                }, [i, o, s]);
            let m = a.useCallback(() => {
                    let {
                            sessionId: e,
                            guildId: n,
                            applicationId: a,
                            pageIndex: i,
                            pageTitle: o,
                            pageSection: s,
                            pageSectionTitle: c,
                            isUserGuildMember: m,
                            pageHasLeaderboard: p,
                        } = u.current,
                        { positionInSection: x, analyticsLocations: f, shownPriceDetails: _ } = d.current;
                    G.default.track(es.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                        slayer_storefront_session_id: e,
                        sku_id: t,
                        guild_id: r ?? n,
                        application_id: l ?? a,
                        page_index: i,
                        page_title: o,
                        page_section: s,
                        page_section_title: c,
                        position_in_section: x,
                        is_user_guild_member: m,
                        page_has_leaderboard: p,
                        price: _.price,
                        regular_price: _.regularPrice,
                        currency: _.currency,
                        orbs_amount: _.orbsAmount,
                        location_stack: f,
                    });
                }, [t, l, r]),
                p = a.useCallback(
                    (e) => {
                        e
                            ? null === c.current &&
                              (c.current = window.setTimeout(() => {
                                  m(), (c.current = null);
                              }, 1e3))
                            : null !== c.current && (clearTimeout(c.current), (c.current = null));
                    },
                    [m],
                );
            return (
                a.useEffect(
                    () => () => {
                        null !== c.current && (clearTimeout(c.current), (c.current = null));
                    },
                    [],
                ),
                { handleCardVisibilityChange: p }
            );
        })({
            skuId: r,
            applicationId: eg,
            guildId: ex,
            analyticsContext: ev,
            positionInSection: t,
            analyticsLocations: eN,
            shownPriceDetails: ew,
        });
    a.useEffect(() => {
        eU(eA);
    }, [eA]);
    let eW = a.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: l } = ey.current,
                    {
                        sessionId: n,
                        guildId: a,
                        applicationId: i,
                        pageIndex: o,
                        pageTitle: s,
                        pageSection: c,
                        pageSectionTitle: u,
                        isUserGuildMember: d,
                        pageHasLeaderboard: m,
                    } = ev;
                G.default.track(es.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: n,
                    sku_id: r,
                    guild_id: ex ?? a,
                    application_id: eg ?? i,
                    page_index: o,
                    page_title: s,
                    page_section: c,
                    page_section_title: u,
                    position_in_section: l,
                    is_user_guild_member: d,
                    page_has_leaderboard: m,
                    cta_type: e,
                    price: ew.price,
                    regular_price: ew.regularPrice,
                    currency: ew.currency,
                    orbs_amount: ew.orbsAmount,
                    location_stack: t,
                });
            },
            [r, eg, ex, ev, ew],
        ),
        { primaryIconAsset: ez, primaryIconLabel: eY } = a.useMemo(() => (0, F.Cv)(eo, eg), [eo, eg]),
        e$ = (0, b.bG)([Y.A], () => Y.A.getStorefrontState(eg)?.activePage ?? 0),
        eq = a.useMemo(() => {
            let e = eo?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let t = d()(),
                l = Math.max(d()(e).diff(t, "days"), 1);
            return l <= 3 ? eu.intl.format(eu.t.PWw4Vp, { days: l }) : null;
        }, [eo?.tenantMetadata?.socialLayer?.expiresAt]),
        eK = (0, F.xf)(eo),
        eV = a.useMemo(() => {
            if (!eT) return "none";
            let [e, t] = ed[i];
            return `linear-gradient(to top, ${em} ${30 + e}%, ${ep} ${30 + t}%)`;
        }, [i, eT]),
        eJ = a.useCallback(() => {
            null != eg && (0, U.iR)(eg, r);
        }, [eg, r]),
        eQ = a.useCallback(() => {
            eG(),
                null != eg &&
                    (V.current = setTimeout(() => {
                        (0, U.iR)(eg, r);
                    }, 1e3));
        }, [eg, r, eG]),
        eZ = a.useCallback(() => {
            eF(), null != V.current && (clearTimeout(V.current), (V.current = null));
        }, [eF]);
    a.useEffect(
        () => () => {
            null != V.current && clearTimeout(V.current);
        },
        [],
    );
    let { getSocialLayerStorefrontLink: eX } = (0, z.H)(),
        e0 = a.useCallback(() => {
            null != eg && null != eX && (0, S.bG)(eX(e$, r, eo?.slug));
        }, [eg, r, e$, eo?.slug, eX]),
        e1 = a.useCallback(
            (e) => {
                (eW(ec.bB.CARD), null != o && eo?.applicationId != null)
                    ? o(e, { skuId: r, applicationId: eo.applicationId })
                    : e0();
            },
            [eW, o, e0, r, eo?.applicationId],
        ),
        e3 = a.useCallback(
            (e) => {
                eb &&
                    (0, k.L3)(e, async () => {
                        let { default: e } = await l.e("897249").then(l.bind(l, 10680));
                        return (t) => (0, n.jsx)(e, { ...t, skuId: r });
                    });
            },
            [eb, r],
        ),
        e8 = a.useMemo(() => [...eN, T.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [eN]),
        e9 = a.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != eM &&
                        (eW(ec.bB.BUY_WITH_ORBS_BUTTON),
                        (0, O.B4)({
                            skuId: r,
                            applicationId: eM.id,
                            onComplete: () => {
                                null != eM &&
                                    null != eo &&
                                    (0, J.n)({ sku: eo, application: eM, analyticsLocations: e8 });
                            },
                            analyticsLocations: e8,
                        }));
            },
            [eo, eM, r, eW, e8],
        ),
        e2 = a.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != eo &&
                        (eW(ec.bB.BUY_BUTTON), (0, Q.a)(eo, { isGift: !1 }, { analyticsLocations: e8, guildId: ex }));
            },
            [eo, ex, eW, e8],
        ),
        e7 = eo?.exclusive === !0 && 2 !== i,
        e5 = a.useMemo(
            () =>
                "CAN_CHECKOUT" === eI
                    ? (0, n.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: eJ,
                          onClick: e9,
                          "aria-label": eu.intl.formatToPlainString(eu.t.yi41qQ, { orbPrice: eP }),
                          text: eu.intl.format(eu.t.JC15qj, {
                              orbPrice: eP,
                              orbIconHook: () =>
                                  (0, n.jsx)(m.C, { className: el.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                          fullWidth: !0,
                      })
                    : (0, n.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: eJ,
                          onClick: e2,
                          text: null != eH ? eu.intl.format(eu.t.Xp5WTn, { price: eH }) : eu.intl.string(eu.t.boqtTA),
                          fullWidth: !0,
                      }),
            [eI, e9, e2, eJ, eP, eH],
        );
    if (null == eo) return null;
    let e6 = (0, F.fq)(eo),
        e4 = e7 ? (0, n.jsx)("div", { className: el.mN, "aria-hidden": !0 }) : null,
        te = (0, n.jsx)(j.L, {
            innerRef: M,
            onChange: eO,
            threshold: 0,
            children: (0, n.jsx)(_.vN, {
                children: (0, n.jsxs)(N.s, {
                    onClick: e1,
                    onContextMenu: e3,
                    onMouseEnter: eQ,
                    onMouseLeave: eZ,
                    className: c()(
                        eB,
                        { [el.Zl]: !eC && 2 !== i, [el.BN]: eh, [eh ? el.Mn : el.YF]: ej, [el.Rc]: !eT },
                        s,
                    ),
                    ref: M,
                    "aria-label": eo.name,
                    children: [
                        eo.exclusive
                            ? (0, n.jsx)("div", { className: el.fC, children: (0, n.jsx)(Z.I, {}) })
                            : null != eq && (0, n.jsx)(y.Lp, { text: eq, disableColor: !0, className: el.qS }),
                        (0, n.jsx)(e_, {
                            sku: eo,
                            guildId: ex,
                            isCardHovered: ej,
                            variant: i,
                            trackCardClick: eW,
                            analyticsLocations: eN,
                            analyticsContext: ev,
                        }),
                        null != e6
                            ? eT
                                ? (0, n.jsx)(ee.A, {
                                      containerClassName: el.Vl,
                                      foregroundImageClassName: el.wP,
                                      cardImage: e6,
                                      altText: eo.name,
                                      shape: "custom",
                                      backgroundImageClassName: el.GC,
                                      cardBackgroundImage: eK,
                                      cssPosition: "absolute",
                                  })
                                : (0, n.jsx)(er, {})
                            : (0, n.jsx)("div", {
                                  className: el.t7,
                                  children: (0, n.jsx)(g.q, {
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
                                      (0, n.jsx)("div", { className: el.iZ, style: { background: eV } }),
                                      (0, n.jsx)(h.N, {
                                          theme: es.NJ8.DARKER,
                                          children: (e) =>
                                              (0, n.jsxs)("div", {
                                                  className: c()(el.zH, e),
                                                  children: [
                                                      (0, n.jsxs)("div", {
                                                          className: c()(el.gn, {
                                                              [el.ov]: !(0, F.mC)(eo),
                                                              [el.w4]: eD,
                                                          }),
                                                          children: [
                                                              eT &&
                                                                  (0, n.jsx)("div", {
                                                                      className: el.S1,
                                                                      children: (0, n.jsx)(X.V, {
                                                                          textColor: "text-overlay-light",
                                                                      }),
                                                                  }),
                                                              eT
                                                                  ? (0, n.jsxs)(n.Fragment, {
                                                                        children: [
                                                                            null != ez &&
                                                                                (0, n.jsx)("img", {
                                                                                    src: ez.toString(),
                                                                                    alt: eY,
                                                                                    className: el.ye,
                                                                                }),
                                                                            (0, n.jsx)(v.E, {
                                                                                color: "text-overlay-light",
                                                                                variant: "text-md/medium",
                                                                                lineClamp: 1,
                                                                                children: eo.name,
                                                                            }),
                                                                        ],
                                                                    })
                                                                  : (0, n.jsx)(en, {}),
                                                          ],
                                                      }),
                                                      (0, n.jsx)("div", {
                                                          className: el.iQ,
                                                          children: eT ? eS : (0, n.jsx)(en, {}),
                                                      }),
                                                  ],
                                              }),
                                      }),
                                      (0, n.jsx)("div", {
                                          className: el.li,
                                          children: (0, n.jsxs)(C.e, {
                                              wrap: !1,
                                              fullWidth: !0,
                                              children: [
                                                  eE
                                                      ? e5
                                                      : (0, n.jsx)(A.m, {
                                                            text: eu.intl.string(eu.t.IqlPbQ),
                                                            children: (0, n.jsx)(f.$, {
                                                                variant: "primary",
                                                                onClick: (e) => {
                                                                    e.stopPropagation(),
                                                                        eW(ec.bB.VIEW_DETAILS_BUTTON),
                                                                        e0();
                                                                },
                                                                text: eu.intl.string(eu.t.KLBTgF),
                                                                fullWidth: !0,
                                                            }),
                                                        }),
                                                  (0, n.jsx)(et.A, {
                                                      onGift: (e) => {
                                                          e.stopPropagation(),
                                                              eW(ec.bB.GIFT_BUTTON),
                                                              (0, Q.a)(
                                                                  eo,
                                                                  { isGift: !0 },
                                                                  {
                                                                      analyticsLocations: [
                                                                          ...eN,
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
    return e7 ? (0, n.jsxs)("div", { className: el.ur, children: [e4, te] }) : te;
}
