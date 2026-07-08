l.d(t, { s: () => ex, A: () => ef });
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
    L = l(976860),
    H = l(288106),
    D = l(117218),
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
    Q = l(533406),
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
    ei = l(743693),
    eo = l(652215),
    es = l(995393),
    ec = l(375708);
let eu = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    ed = o()("#000000").darken(1.5).alpha(0.9).hex(),
    em = o()("#000000").alpha(0).hex();
var ex = (((n = {})[(n.SMALL = 0)] = "SMALL"), (n[(n.MEDIUM = 1)] = "MEDIUM"), (n[(n.EMBEDDED = 2)] = "EMBEDDED"), n);
function ep(e) {
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
                        (i(es.bB.FORWARD_BUTTON),
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
            i(es.bB.WISHLIST_BUTTON);
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
            (0, a.jsx)(ei._, {
                sku: l,
                isCardHovered: n,
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
            skuId: n,
            variant: i = 0,
            onClick: o,
            className: s,
            showOrbsOnly: u = !1,
            analyticsLocations: x,
        } = e,
        S = r.useRef(null),
        V = r.useRef(null),
        ei = (0, b.bG)([w.A], () => w.A.get(n)),
        { guildId: ex } = (0, F.nG)(ei?.applicationId),
        ef = ei?.applicationId,
        e_ = (0, b.bG)([O.A], () => (0, p.M)(O.A.theme)),
        eC = (0, b.bG)([y.Ay], () => y.Ay.useReducedMotion),
        eh = B.Q_.useSetting(),
        { isHoveringOrFocusing: eg } = (0, M.A)(S),
        eb = (0, W.jM)(),
        { analyticsLocations: ej } = (0, R.Ay)(x ?? []),
        ev = r.useRef({ positionInSection: t, analyticsLocations: ej }),
        [eN, ek] = r.useState(!1),
        eE = (0, b.bG)([Y.A], () => (null != n ? Y.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        eA = (function (e, t) {
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
        })(n, eN),
        ey = (0, D.JL)({ sku: ei }),
        eT = ey?.amount,
        eR = (0, $.oG)({ orbPriceAmount: eT, applicationId: ef, location: "social_layer_storefront_card" }),
        eI = (0, I.h)(ei?.applicationId),
        eM = r.useCallback((e) => {
            ek(e);
        }, []),
        eS = r.useMemo(() => c()(el.Nr, { [el.ax]: 0 === i, [el.GW]: 1 === i, [el.jz]: 2 === i }), [i]),
        { handleCardHover: eL, handleCardUnhover: eH } = (function (e) {
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
                            G.default.track(eo.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
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
            applicationId: ef,
            guildId: ex,
            analyticsContext: eb,
            positionInSection: t,
            analyticsLocations: ej,
        }),
        { handleCardVisibilityChange: eD } = (function (e) {
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
                    G.default.track(eo.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
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
            applicationId: ef,
            guildId: ex,
            analyticsContext: eb,
            positionInSection: t,
            analyticsLocations: ej,
        });
    r.useEffect(() => {
        eD(eN);
    }, [eN]);
    let eO = r.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: l } = ev.current,
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
                    } = eb;
                G.default.track(eo.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: a,
                    sku_id: n,
                    guild_id: ex ?? r,
                    application_id: ef ?? i,
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
            [n, ef, ex, eb],
        ),
        { primaryIconAsset: eB, primaryIconLabel: eP } = r.useMemo(() => (0, F.Cv)(ei, ef), [ei, ef]),
        ew = (0, b.bG)([Y.A], () => Y.A.getStorefrontState(ef)?.activePage ?? 0),
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
            null != ef && (0, U.iR)(ef, n);
        }, [ef, n]),
        ez = r.useCallback(() => {
            eL(),
                null != ef &&
                    (V.current = setTimeout(() => {
                        (0, U.iR)(ef, n);
                    }, 1e3));
        }, [ef, n, eL]),
        eY = r.useCallback(() => {
            eH(), null != V.current && (clearTimeout(V.current), (V.current = null));
        }, [eH]);
    r.useEffect(
        () => () => {
            null != V.current && clearTimeout(V.current);
        },
        [],
    );
    let { getSocialLayerStorefrontLink: e$ } = (0, z.H)(),
        eq = r.useCallback(() => {
            null != ef && null != e$ && (0, L.bG)(e$(ew, n, ei?.slug));
        }, [ef, n, ew, ei?.slug, e$]),
        eK = r.useCallback(
            (e) => {
                (eO(es.bB.CARD), null != o && ei?.applicationId != null)
                    ? o(e, { skuId: n, applicationId: ei.applicationId })
                    : eq();
            },
            [eO, o, eq, n, ei?.applicationId],
        ),
        eV = r.useCallback(
            (e) => {
                eh &&
                    (0, A.L3)(e, async () => {
                        let { default: e } = await l.e("97249").then(l.bind(l, 10680));
                        return (t) => (0, a.jsx)(e, { ...t, skuId: n });
                    });
            },
            [eh, n],
        ),
        eJ = r.useMemo(() => [...ej, T.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [ej]),
        eQ = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != eI &&
                        (eO(es.bB.BUY_WITH_ORBS_BUTTON),
                        (0, P.B4)({
                            skuId: n,
                            applicationId: eI.id,
                            onComplete: () => {
                                null != eI &&
                                    null != ei &&
                                    (0, J.n)({ sku: ei, application: eI, analyticsLocations: eJ });
                            },
                            analyticsLocations: eJ,
                        }));
            },
            [ei, eI, n, eO, eJ],
        ),
        eZ = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != ei &&
                        (eO(es.bB.BUY_BUTTON), (0, Q.a)(ei, { isGift: !1 }, { analyticsLocations: eJ, guildId: ex }));
            },
            [ei, ex, eO, eJ],
        ),
        {
            priceComponent: eX,
            extendedHeight: e0,
            displayPrice: e1,
        } = (function (e) {
            let { sku: t, orbsGate: l, orbPriceAmount: n, promotion: i, showOrbsOnly: o = !1 } = e,
                { normalPrice: s, discountedPrice: c, discountPercent: u, userPrice: d } = (0, D.CD)({ sku: t }),
                x = r.useMemo(() => {
                    let e = i?.reward;
                    return null == e || e.type !== H.Ns.ACTION || e.amount <= 0
                        ? null
                        : (0, a.jsx)("div", {
                              className: el.pt,
                              children: (0, a.jsx)(N.E, {
                                  variant: "text-sm/semibold",
                                  color: "currentColor",
                                  children: ec.intl.format(ec.t.GiVd2Q, {
                                      orbCount: e.amount,
                                      orbIconHook: () =>
                                          (0, a.jsx)(m.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                  }),
                              }),
                          });
                }, [i]);
            return null != t && (0, F.mC)(t)
                ? o && null != n && n > 0
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
                                                  (0, a.jsx)(N.E, {
                                                      className: el.of,
                                                      variant: "text-md/medium",
                                                      color: "text-muted",
                                                      lineClamp: 1,
                                                      children: s,
                                                  }),
                                              (0, a.jsx)(N.E, {
                                                  variant: "text-md/bold",
                                                  color: "text-overlay-light",
                                                  lineClamp: 1,
                                                  children: c,
                                              }),
                                              (0, a.jsxs)(N.E, {
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
                                      (0, a.jsx)(N.E, {
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
            sku: ei,
            orbsGate: eR,
            orbPriceAmount: eT,
            promotion: (0, K.F)("card", { applicationId: ef, skuId: n }),
            showOrbsOnly: u,
        }),
        e3 = ei?.exclusive === !0 && 2 !== i,
        e9 = r.useMemo(
            () =>
                "CAN_CHECKOUT" === eR
                    ? (0, a.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: eW,
                          onClick: eQ,
                          "aria-label": ec.intl.formatToPlainString(ec.t.yi41qQ, { orbPrice: eT }),
                          text: ec.intl.format(ec.t.JC15qj, {
                              orbPrice: eT,
                              orbIconHook: () =>
                                  (0, a.jsx)(m.C, { className: el.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                          fullWidth: !0,
                      })
                    : (0, a.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: eW,
                          onClick: eZ,
                          text: null != e1 ? ec.intl.format(ec.t.Xp5WTn, { price: e1 }) : ec.intl.string(ec.t.boqtTA),
                          fullWidth: !0,
                      }),
            [eR, eQ, eZ, eW, eT, e1],
        );
    if (null == ei) return null;
    let e8 = (0, F.fq)(ei),
        e2 = e3 ? (0, a.jsx)("div", { className: el.mN, "aria-hidden": !0 }) : null,
        e7 = (0, a.jsx)(j.L, {
            innerRef: S,
            onChange: eM,
            threshold: 0,
            children: (0, a.jsx)(_.vN, {
                children: (0, a.jsxs)(k.s, {
                    onClick: eK,
                    onContextMenu: eV,
                    onMouseEnter: ez,
                    onMouseLeave: eY,
                    className: c()(
                        eS,
                        { [el.Zl]: !eC && 2 !== i, [el.BN]: e_, [e_ ? el.Mn : el.YF]: eg, [el.Rc]: !eA },
                        s,
                    ),
                    ref: S,
                    "aria-label": ei.name,
                    children: [
                        ei.exclusive
                            ? (0, a.jsx)("div", { className: el.fC, children: (0, a.jsx)(Z.I, {}) })
                            : null != eG && (0, a.jsx)(E.Lp, { text: eG, disableColor: !0, className: el.qS }),
                        (0, a.jsx)(ep, {
                            sku: ei,
                            guildId: ex,
                            isCardHovered: eg,
                            variant: i,
                            trackCardClick: eO,
                            analyticsLocations: ej,
                            analyticsContext: eb,
                        }),
                        null != e8
                            ? eA
                                ? (0, a.jsx)(ee.A, {
                                      containerClassName: el.Vl,
                                      foregroundImageClassName: el.wP,
                                      cardImage: e8,
                                      altText: ei.name,
                                      shape: "custom",
                                      backgroundImageClassName: el.GC,
                                      cardBackgroundImage: eF,
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
                                      (0, a.jsx)("div", { className: el.iZ, style: { background: eU } }),
                                      (0, a.jsx)(h.N, {
                                          theme: eo.NJ8.DARKER,
                                          children: (e) =>
                                              (0, a.jsxs)("div", {
                                                  className: c()(el.zH, e),
                                                  children: [
                                                      (0, a.jsxs)("div", {
                                                          className: c()(el.gn, {
                                                              [el.ov]: !(0, F.mC)(ei),
                                                              [el.w4]: e0,
                                                          }),
                                                          children: [
                                                              eA &&
                                                                  (0, a.jsx)("div", {
                                                                      className: el.S1,
                                                                      children: (0, a.jsx)(X.V, {
                                                                          textColor: "text-overlay-light",
                                                                      }),
                                                                  }),
                                                              eA
                                                                  ? (0, a.jsxs)(a.Fragment, {
                                                                        children: [
                                                                            null != eB &&
                                                                                (0, a.jsx)("img", {
                                                                                    src: eB.toString(),
                                                                                    alt: eP,
                                                                                    className: el.ye,
                                                                                }),
                                                                            (0, a.jsx)(N.E, {
                                                                                color: "text-overlay-light",
                                                                                variant: "text-md/medium",
                                                                                lineClamp: 1,
                                                                                children: ei.name,
                                                                            }),
                                                                        ],
                                                                    })
                                                                  : (0, a.jsx)(ea, {}),
                                                          ],
                                                      }),
                                                      (0, a.jsx)("div", {
                                                          className: el.iQ,
                                                          children: eA ? eX : (0, a.jsx)(ea, {}),
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
                                                  eE
                                                      ? e9
                                                      : (0, a.jsx)(v.m, {
                                                            text: ec.intl.string(ec.t.IqlPbQ),
                                                            children: (0, a.jsx)(f.$, {
                                                                variant: "primary",
                                                                onClick: (e) => {
                                                                    e.stopPropagation(),
                                                                        eO(es.bB.VIEW_DETAILS_BUTTON),
                                                                        eq();
                                                                },
                                                                text: ec.intl.string(ec.t.KLBTgF),
                                                                fullWidth: !0,
                                                            }),
                                                        }),
                                                  (0, a.jsx)(et.A, {
                                                      onGift: (e) => {
                                                          e.stopPropagation(),
                                                              eO(es.bB.GIFT_BUTTON),
                                                              (0, Q.a)(
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
    return e3 ? (0, a.jsxs)("div", { className: el.ur, children: [e2, e7] }) : e7;
}
