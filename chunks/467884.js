l.d(t, { s: () => ep, A: () => e_ });
var n,
    a = l(627968),
    r = l(64700),
    i = l(310784),
    o = l.n(i),
    s = l(503698),
    c = l.n(s),
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
    v = l(834730),
    N = l(890856),
    k = l(812993),
    E = l(866665),
    A = l(442433),
    y = l(775602),
    T = l(793574),
    R = l(688810),
    I = l(429913),
    M = l(713517),
    S = l(427209),
    H = l(976860),
    L = l(288106),
    D = l(993046),
    O = l(363195),
    B = l(885386),
    P = l(652165),
    w = l(67480),
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
    el = l(900719);
function en() {
    let [e] = r.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, a.jsx)("div", { className: c()(el.Vl, el.Yf), style: { animationDelay: `${e}s` } });
}
function ea() {
    let [e] = r.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, a.jsx)("div", { className: el.RC, style: { width: `${e}%` } });
}
var er = l(533772),
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
    ex = o()("#000000").alpha(0).hex();
var ep = (((n = {})[(n.SMALL = 0)] = "SMALL"), (n[(n.MEDIUM = 1)] = "MEDIUM"), (n[(n.EMBEDDED = 2)] = "EMBEDDED"), n);
function ef(e) {
    let {
            guildId: t,
            sku: l,
            isCardHovered: n,
            trackCardClick: i,
            variant: o,
            analyticsLocations: s,
            analyticsContext: u,
        } = e,
        d = r.useCallback(
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
        m = r.useCallback(() => {
            i(ec.bB.WISHLIST_BUTTON);
        }, [i]),
        p = r.useMemo(() => c()(el.o, { [el.H5]: n }), [n]);
    return (0, a.jsxs)("div", {
        className: el.zu,
        children: [
            2 === o &&
                (0, a.jsx)(x.D, {
                    className: c()(p, el.gy),
                    onClick: d,
                    children: (0, a.jsx)(S.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, a.jsx)(eo._, {
                sku: l,
                isCardHovered: n,
                trackButtonClick: m,
                className: c()(p, el.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function e_(e) {
    let {
            positionInSection: t,
            skuId: n,
            variant: i = 0,
            onClick: o,
            className: s,
            showOrbsOnly: u = !1,
            analyticsLocations: x,
        } = e,
        S = r.useRef(null),
        V = r.useRef(null),
        eo = (0, b.bG)([w.A], () => w.A.get(n)),
        { guildId: ep } = (0, F.nG)(eo?.applicationId),
        e_ = eo?.applicationId,
        eC = (0, b.bG)([O.A], () => (0, p.M)(O.A.theme)),
        eh = (0, b.bG)([y.Ay], () => y.Ay.useReducedMotion),
        eg = B.Q_.useSetting(),
        { isHoveringOrFocusing: eb } = (0, M.A)(S),
        ej = (0, W.jM)(),
        { analyticsLocations: ev } = (0, R.Ay)(x ?? []),
        eN = r.useRef({ positionInSection: t, analyticsLocations: ev }),
        [ek, eE] = r.useState(!1),
        eA = (0, b.bG)([Y.A], () => (null != n ? Y.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        ey = (function (e, t) {
            let l = (0, b.bG)([w.A], () => w.A.get(e)),
                [n, a] = r.useState(!1),
                [i, o] = r.useState(!1),
                s = r.useMemo(() => (0, F.xf)(l), [l]),
                c = r.useMemo(() => (0, F.fq)(l), [l]);
            return (
                r.useEffect(() => {
                    if (l?.id == null || n || !t) return;
                    if (null == c) return void a(!0);
                    let e = new Image();
                    return (
                        (e.src = c.toString()),
                        (e.onload = () => {
                            a(!0);
                        }),
                        (e.onerror = () => {
                            a(!0);
                        }),
                        () => {
                            (e.onerror = null), (e.onload = null), (e.src = "");
                        }
                    );
                }, [c, t, n, l?.id]),
                r.useEffect(() => {
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
                r.useMemo(() => n && i, [n, i])
            );
        })(n, ek),
        eT = (0, D.JL)({ sku: eo }),
        eR = eT?.amount,
        eI = (0, $.oG)({ orbPriceAmount: eR, applicationId: e_, location: "social_layer_storefront_card" }),
        eM = (0, I.h)(eo?.applicationId),
        eS = r.useCallback((e) => {
            eE(e);
        }, []),
        eH = r.useMemo(() => c()(el.Nr, { [el.ax]: 0 === i, [el.GW]: 1 === i, [el.jz]: 2 === i }), [i]),
        { handleCardHover: eL, handleCardUnhover: eD } = (function (e) {
            let {
                    skuId: t,
                    applicationId: l,
                    guildId: n,
                    analyticsContext: a,
                    positionInSection: i,
                    analyticsLocations: o,
                } = e,
                s = r.useRef(!1),
                c = r.useRef(a),
                u = r.useRef({ positionInSection: i, analyticsLocations: o });
            return (
                r.useEffect(() => {
                    c.current = a;
                }, [a]),
                {
                    handleCardHover: r.useCallback(() => {
                        if (!s.current) {
                            let {
                                    sessionId: e,
                                    guildId: a,
                                    applicationId: r,
                                    pageIndex: i,
                                    pageTitle: o,
                                    pageSection: d,
                                    pageSectionTitle: m,
                                    isUserGuildMember: x,
                                    pageHasLeaderboard: p,
                                } = c.current,
                                { positionInSection: f, analyticsLocations: _ } = u.current;
                            G.default.track(es.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                                slayer_storefront_session_id: e,
                                sku_id: t,
                                guild_id: n ?? a,
                                application_id: l ?? r,
                                page_index: i,
                                page_title: o,
                                page_section: d,
                                page_section_title: m,
                                position_in_section: f,
                                is_user_guild_member: x,
                                page_has_leaderboard: p,
                                location_stack: _,
                            }),
                                (s.current = !0);
                        }
                    }, [t, l, n]),
                    handleCardUnhover: r.useCallback(() => {
                        s.current = !1;
                    }, []),
                }
            );
        })({
            skuId: n,
            applicationId: e_,
            guildId: ep,
            analyticsContext: ej,
            positionInSection: t,
            analyticsLocations: ev,
        }),
        { handleCardVisibilityChange: eO } = (function (e) {
            let {
                    skuId: t,
                    applicationId: l,
                    guildId: n,
                    analyticsContext: a,
                    positionInSection: i,
                    analyticsLocations: o,
                } = e,
                s = r.useRef(null),
                c = r.useRef(a),
                u = r.useRef({ positionInSection: i, analyticsLocations: o });
            r.useEffect(() => {
                c.current = a;
            }, [a]);
            let d = r.useCallback(() => {
                    let {
                            sessionId: e,
                            guildId: a,
                            applicationId: r,
                            pageIndex: i,
                            pageTitle: o,
                            pageSection: s,
                            pageSectionTitle: d,
                            isUserGuildMember: m,
                            pageHasLeaderboard: x,
                        } = c.current,
                        { positionInSection: p, analyticsLocations: f } = u.current;
                    G.default.track(es.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                        slayer_storefront_session_id: e,
                        sku_id: t,
                        guild_id: n ?? a,
                        application_id: l ?? r,
                        page_index: i,
                        page_title: o,
                        page_section: s,
                        page_section_title: d,
                        position_in_section: p,
                        is_user_guild_member: m,
                        page_has_leaderboard: x,
                        location_stack: f,
                    });
                }, [t, l, n]),
                m = r.useCallback(
                    (e) => {
                        e
                            ? null === s.current &&
                              (s.current = window.setTimeout(() => {
                                  d(), (s.current = null);
                              }, 1e3))
                            : null !== s.current && (clearTimeout(s.current), (s.current = null));
                    },
                    [d],
                );
            return (
                r.useEffect(
                    () => () => {
                        null !== s.current && (clearTimeout(s.current), (s.current = null));
                    },
                    [],
                ),
                { handleCardVisibilityChange: m }
            );
        })({
            skuId: n,
            applicationId: e_,
            guildId: ep,
            analyticsContext: ej,
            positionInSection: t,
            analyticsLocations: ev,
        });
    r.useEffect(() => {
        eO(ek);
    }, [ek]);
    let eB = r.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: l } = eN.current,
                    {
                        sessionId: a,
                        guildId: r,
                        applicationId: i,
                        pageIndex: o,
                        pageTitle: s,
                        pageSection: c,
                        pageSectionTitle: u,
                        isUserGuildMember: d,
                        pageHasLeaderboard: m,
                    } = ej;
                G.default.track(es.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: a,
                    sku_id: n,
                    guild_id: ep ?? r,
                    application_id: e_ ?? i,
                    page_index: o,
                    page_title: s,
                    page_section: c,
                    page_section_title: u,
                    position_in_section: l,
                    is_user_guild_member: d,
                    page_has_leaderboard: m,
                    cta_type: e,
                    location_stack: t,
                });
            },
            [n, e_, ep, ej],
        ),
        { primaryIconAsset: eP, primaryIconLabel: ew } = r.useMemo(() => (0, F.Cv)(eo, e_), [eo, e_]),
        eG = (0, b.bG)([Y.A], () => Y.A.getStorefrontState(e_)?.activePage ?? 0),
        eF = r.useMemo(() => {
            let e = eo?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let t = d()(),
                l = Math.max(d()(e).diff(t, "days"), 1);
            return l <= 3 ? eu.intl.format(eu.t.PWw4Vp, { days: l }) : null;
        }, [eo?.tenantMetadata?.socialLayer?.expiresAt]),
        eU = (0, F.xf)(eo),
        eW = r.useMemo(() => {
            if (!ey) return "none";
            let [e, t] = ed[i];
            return `linear-gradient(to top, ${em} ${30 + e}%, ${ex} ${30 + t}%)`;
        }, [i, ey]),
        ez = r.useCallback(() => {
            null != e_ && (0, U.iR)(e_, n);
        }, [e_, n]),
        eY = r.useCallback(() => {
            eL(),
                null != e_ &&
                    (V.current = setTimeout(() => {
                        (0, U.iR)(e_, n);
                    }, 1e3));
        }, [e_, n, eL]),
        e$ = r.useCallback(() => {
            eD(), null != V.current && (clearTimeout(V.current), (V.current = null));
        }, [eD]);
    r.useEffect(
        () => () => {
            null != V.current && clearTimeout(V.current);
        },
        [],
    );
    let { getSocialLayerStorefrontLink: eq } = (0, z.H)(),
        eK = r.useCallback(() => {
            null != e_ && null != eq && (0, H.bG)(eq(eG, n, eo?.slug));
        }, [e_, n, eG, eo?.slug, eq]),
        eV = r.useCallback(
            (e) => {
                (eB(ec.bB.CARD), null != o && eo?.applicationId != null)
                    ? o(e, { skuId: n, applicationId: eo.applicationId })
                    : eK();
            },
            [eB, o, eK, n, eo?.applicationId],
        ),
        eJ = r.useCallback(
            (e) => {
                eg &&
                    (0, A.L3)(e, async () => {
                        let { default: e } = await l.e("97249").then(l.bind(l, 10680));
                        return (t) => (0, a.jsx)(e, { ...t, skuId: n });
                    });
            },
            [eg, n],
        ),
        eQ = r.useMemo(() => [...ev, T.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [ev]),
        eZ = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != eM &&
                        (eB(ec.bB.BUY_WITH_ORBS_BUTTON),
                        (0, P.B4)({
                            skuId: n,
                            applicationId: eM.id,
                            onComplete: () => {
                                null != eM &&
                                    null != eo &&
                                    (0, J.n)({ sku: eo, application: eM, analyticsLocations: eQ });
                            },
                            analyticsLocations: eQ,
                        }));
            },
            [eo, eM, n, eB, eQ],
        ),
        eX = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != eo &&
                        (eB(ec.bB.BUY_BUTTON), (0, Q.a)(eo, { isGift: !1 }, { analyticsLocations: eQ, guildId: ep }));
            },
            [eo, ep, eB, eQ],
        ),
        {
            priceComponent: e0,
            extendedHeight: e1,
            displayPrice: e3,
        } = (function (e) {
            let { sku: t, orbsGate: l, orbPriceAmount: n, promotion: i, showOrbsOnly: o = !1 } = e,
                { normalPrice: s, discountedPrice: c, discountPercent: u, userPrice: d } = (0, D.CD)({ sku: t }),
                x = r.useMemo(() => {
                    let e = i?.reward;
                    return null == e || e.type !== L.Ns.ACTION || e.amount <= 0
                        ? null
                        : (0, a.jsx)("div", {
                              className: el.pt,
                              children: (0, a.jsx)(v.E, {
                                  variant: "text-sm/semibold",
                                  color: "currentColor",
                                  children: eu.intl.format(eu.t.GiVd2Q, {
                                      orbCount: e.amount,
                                      orbIconHook: () =>
                                          (0, a.jsx)(m.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                  }),
                              }),
                          });
                }, [i]);
            return null != t && (0, F.mC)(t)
                ? i?.flavor === "nitro" && null != c
                    ? {
                          priceComponent: (0, a.jsx)(ei.A, { discountedPrice: c, normalPrice: s }),
                          extendedHeight: !1,
                          displayPrice: d,
                      }
                    : o && null != n && n > 0
                      ? {
                            priceComponent: (0, a.jsx)(er.O, {
                                variant: "text-md/bold",
                                orbPrice: n,
                                color: "text-overlay-light",
                            }),
                            extendedHeight: !1,
                            displayPrice: d,
                        }
                      : "HIDDEN" !== l && null != n
                        ? {
                              priceComponent: (0, a.jsx)(er.A, {
                                  orbsGate: l,
                                  className: el.p6,
                                  orbPrice: n,
                                  fiatPrice: s,
                                  textDefaultColor: "text-overlay-light",
                              }),
                              extendedHeight: !1,
                              displayPrice: d,
                          }
                        : null != u && null != c
                          ? {
                                priceComponent: (0, a.jsxs)("div", {
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: el.p6,
                                            children: [
                                                null != s &&
                                                    (0, a.jsx)(v.E, {
                                                        className: el.of,
                                                        variant: "text-md/medium",
                                                        color: "text-muted",
                                                        lineClamp: 1,
                                                        children: s,
                                                    }),
                                                (0, a.jsx)(v.E, {
                                                    variant: "text-md/bold",
                                                    color: "text-overlay-light",
                                                    lineClamp: 1,
                                                    children: c,
                                                }),
                                                (0, a.jsxs)(v.E, {
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
                                priceComponent: (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            variant: "text-md/bold",
                                            color: "text-overlay-light",
                                            lineClamp: 1,
                                            children: s,
                                        }),
                                        x,
                                    ],
                                }),
                                extendedHeight: !1,
                                displayPrice: d,
                            }
                : { priceComponent: null, extendedHeight: !1, displayPrice: d };
        })({
            sku: eo,
            orbsGate: eI,
            orbPriceAmount: eR,
            promotion: (0, K.F)("card", { applicationId: e_, skuId: n }),
            showOrbsOnly: u,
        }),
        e6 = eo?.exclusive === !0 && 2 !== i,
        e9 = r.useMemo(
            () =>
                "CAN_CHECKOUT" === eI
                    ? (0, a.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: ez,
                          onClick: eZ,
                          "aria-label": eu.intl.formatToPlainString(eu.t.yi41qQ, { orbPrice: eR }),
                          text: eu.intl.format(eu.t.JC15qj, {
                              orbPrice: eR,
                              orbIconHook: () =>
                                  (0, a.jsx)(m.C, { className: el.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                          fullWidth: !0,
                      })
                    : (0, a.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: ez,
                          onClick: eX,
                          text: null != e3 ? eu.intl.format(eu.t.Xp5WTn, { price: e3 }) : eu.intl.string(eu.t.boqtTA),
                          fullWidth: !0,
                      }),
            [eI, eZ, eX, ez, eR, e3],
        );
    if (null == eo) return null;
    let e8 = (0, F.fq)(eo),
        e2 = e6 ? (0, a.jsx)("div", { className: el.mN, "aria-hidden": !0 }) : null,
        e7 = (0, a.jsx)(j.L, {
            innerRef: S,
            onChange: eS,
            threshold: 0,
            children: (0, a.jsx)(_.vN, {
                children: (0, a.jsxs)(N.s, {
                    onClick: eV,
                    onContextMenu: eJ,
                    onMouseEnter: eY,
                    onMouseLeave: e$,
                    className: c()(
                        eH,
                        { [el.Zl]: !eh && 2 !== i, [el.BN]: eC, [eC ? el.Mn : el.YF]: eb, [el.Rc]: !ey },
                        s,
                    ),
                    ref: S,
                    "aria-label": eo.name,
                    children: [
                        eo.exclusive
                            ? (0, a.jsx)("div", { className: el.fC, children: (0, a.jsx)(Z.I, {}) })
                            : null != eF && (0, a.jsx)(k.Lp, { text: eF, disableColor: !0, className: el.qS }),
                        (0, a.jsx)(ef, {
                            sku: eo,
                            guildId: ep,
                            isCardHovered: eb,
                            variant: i,
                            trackCardClick: eB,
                            analyticsLocations: ev,
                            analyticsContext: ej,
                        }),
                        null != e8
                            ? ey
                                ? (0, a.jsx)(ee.A, {
                                      containerClassName: el.Vl,
                                      foregroundImageClassName: el.wP,
                                      cardImage: e8,
                                      altText: eo.name,
                                      shape: "custom",
                                      backgroundImageClassName: el.GC,
                                      cardBackgroundImage: eU,
                                      cssPosition: "absolute",
                                  })
                                : (0, a.jsx)(en, {})
                            : (0, a.jsx)("div", {
                                  className: el.t7,
                                  children: (0, a.jsx)(C.q, {
                                      color: "white",
                                      size: "custom",
                                      height: 80,
                                      width: 80,
                                      className: el.Cw,
                                  }),
                              }),
                        2 !== i
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)("div", { className: el.iZ, style: { background: eW } }),
                                      (0, a.jsx)(h.N, {
                                          theme: es.NJ8.DARKER,
                                          children: (e) =>
                                              (0, a.jsxs)("div", {
                                                  className: c()(el.zH, e),
                                                  children: [
                                                      (0, a.jsxs)("div", {
                                                          className: c()(el.gn, {
                                                              [el.ov]: !(0, F.mC)(eo),
                                                              [el.w4]: e1,
                                                          }),
                                                          children: [
                                                              ey &&
                                                                  (0, a.jsx)("div", {
                                                                      className: el.S1,
                                                                      children: (0, a.jsx)(X.V, {
                                                                          textColor: "text-overlay-light",
                                                                      }),
                                                                  }),
                                                              ey
                                                                  ? (0, a.jsxs)(a.Fragment, {
                                                                        children: [
                                                                            null != eP &&
                                                                                (0, a.jsx)("img", {
                                                                                    src: eP.toString(),
                                                                                    alt: ew,
                                                                                    className: el.ye,
                                                                                }),
                                                                            (0, a.jsx)(v.E, {
                                                                                color: "text-overlay-light",
                                                                                variant: "text-md/medium",
                                                                                lineClamp: 1,
                                                                                children: eo.name,
                                                                            }),
                                                                        ],
                                                                    })
                                                                  : (0, a.jsx)(ea, {}),
                                                          ],
                                                      }),
                                                      (0, a.jsx)("div", {
                                                          className: el.iQ,
                                                          children: ey ? e0 : (0, a.jsx)(ea, {}),
                                                      }),
                                                  ],
                                              }),
                                      }),
                                      (0, a.jsx)("div", {
                                          className: el.li,
                                          children: (0, a.jsxs)(g.e, {
                                              wrap: !1,
                                              fullWidth: !0,
                                              children: [
                                                  eA
                                                      ? e9
                                                      : (0, a.jsx)(E.m, {
                                                            text: eu.intl.string(eu.t.IqlPbQ),
                                                            children: (0, a.jsx)(f.$, {
                                                                variant: "primary",
                                                                onClick: (e) => {
                                                                    e.stopPropagation(),
                                                                        eB(ec.bB.VIEW_DETAILS_BUTTON),
                                                                        eK();
                                                                },
                                                                text: eu.intl.string(eu.t.KLBTgF),
                                                                fullWidth: !0,
                                                            }),
                                                        }),
                                                  (0, a.jsx)(et.A, {
                                                      onGift: (e) => {
                                                          e.stopPropagation(),
                                                              eB(ec.bB.GIFT_BUTTON),
                                                              (0, Q.a)(
                                                                  eo,
                                                                  { isGift: !0 },
                                                                  {
                                                                      analyticsLocations: [
                                                                          ...ev,
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
    return e6 ? (0, a.jsxs)("div", { className: el.ur, children: [e2, e7] }) : e7;
}
