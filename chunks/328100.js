l.d(t, { s: () => ep, A: () => eC });
var n,
    a,
    r = l(627968),
    i = l(64700),
    s = l(310784),
    o = l.n(s),
    c = l(503698),
    u = l.n(c),
    d = l(989349),
    m = l.n(d),
    _ = l(318254),
    x = l(939249),
    p = l(366010),
    f = l(821609),
    C = l(187322),
    h = l(638916),
    g = l(43990),
    E = l(825484),
    v = l(17928),
    j = l(269115),
    b = l(990078),
    N = l(834730),
    R = l(890856),
    S = l(812993),
    k = l(442433),
    A = l(775602),
    y = l(793574),
    T = l(688810),
    I = l(429913),
    M = l(713517),
    L = l(427209),
    w = l(976860),
    O = l(117218),
    H = l(363195),
    B = l(885386),
    D = l(652165),
    P = l(67480),
    F = l(174459),
    U = l(871123),
    V = l(733391),
    G = l(439303),
    W = l(353281),
    Y = l(832163),
    z = l(945810),
    $ =
        (((n = {}).CONTROL = "control"),
        (n.EXPRESSIVE_HOVER = "expressive_hover"),
        (n.ALWAYS_EXPRESSIVE = "always_expressive"),
        n);
let q = (0, z.mj)({
    name: "2026-05-slayer-storefront-exclusive-expressive-flair",
    kind: "user",
    defaultConfig: { treatment: "control" },
    variations: {
        0: { treatment: "control" },
        1: { treatment: "expressive_hover" },
        2: { treatment: "always_expressive" },
    },
});
var K = l(69236),
    X = l(654107),
    J = l(31969),
    Q = l(345938),
    Z = l(510022),
    ee = l(533406),
    et = l(263911),
    el = l(971146),
    en = l(366523),
    ea = l(300182),
    er = l(900719);
function ei() {
    let [e] = i.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, r.jsx)("div", { className: u()(er.Vl, er.Yf), style: { animationDelay: `${e}s` } });
}
function es() {
    let [e] = i.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, r.jsx)("div", { className: er.RC, style: { width: `${e}%` } });
}
var eo = l(743693),
    ec = l(652215),
    eu = l(995393),
    ed = l(375708);
let em = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    e_ = o()("#000000").darken(1.5).alpha(0.9).hex(),
    ex = o()("#000000").alpha(0).hex();
var ep = (((a = {})[(a.SMALL = 0)] = "SMALL"), (a[(a.MEDIUM = 1)] = "MEDIUM"), (a[(a.EMBEDDED = 2)] = "EMBEDDED"), a);
function ef(e) {
    let {
            guildId: t,
            sku: l,
            isCardHovered: n,
            trackCardClick: a,
            variant: s,
            analyticsLocations: o,
            analyticsContext: c,
        } = e,
        d = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != l &&
                        (a(eu.bB.FORWARD_BUTTON),
                        (0, Q.d)({
                            sku: l,
                            guildId: t,
                            analyticsContext: c,
                            analyticsLocations: o,
                            source: "social-layer-storefront-embed",
                        }));
            },
            [l, t, a, c, o],
        ),
        m = i.useCallback(() => {
            a(eu.bB.WISHLIST_BUTTON);
        }, [a]),
        _ = i.useMemo(() => u()(er.o, { [er.H5]: n }), [n]);
    return (0, r.jsxs)("div", {
        className: er.zu,
        children: [
            2 === s &&
                (0, r.jsx)(x.D, {
                    className: u()(_, er.gy),
                    onClick: d,
                    children: (0, r.jsx)(L.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, r.jsx)(eo._, {
                sku: l,
                isCardHovered: n,
                trackButtonClick: m,
                className: u()(_, er.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function eC(e) {
    let { positionInSection: t, skuId: n, variant: a = 0, onClick: s, className: o, analyticsLocations: c } = e,
        d = i.useRef(null),
        x = i.useRef(null),
        L = (0, v.bG)([P.A], () => P.A.get(n)),
        { guildId: z } = (0, U.nG)(L?.applicationId),
        Q = L?.applicationId,
        eo = (0, v.bG)([H.A], () => (0, p.M)(H.A.theme)),
        ep = (0, v.bG)([A.Ay], () => A.Ay.useReducedMotion),
        eC = B.Q_.useSetting(),
        { isHoveringOrFocusing: eh } = (0, M.A)(d),
        eg = (0, G.jM)(),
        { analyticsLocations: eE } = (0, T.Ay)(c ?? []),
        ev = i.useRef({ positionInSection: t, analyticsLocations: eE }),
        [ej, eb] = i.useState(!1),
        eN = (0, v.bG)([Y.A], () => (null != n ? Y.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        eR = (function (e, t) {
            let l = (0, v.bG)([P.A], () => P.A.get(e)),
                [n, a] = i.useState(!1),
                [r, s] = i.useState(!1),
                o = i.useMemo(() => (0, U.xf)(l), [l]),
                c = i.useMemo(() => (0, U.fq)(l), [l]);
            return (
                i.useEffect(() => {
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
                i.useEffect(() => {
                    if (l?.id == null || r || !t) return;
                    if (null == o) return void s(!0);
                    let e = !0;
                    return (
                        (0, X.l0)(o.toString()).finally(() => {
                            e && s(!0);
                        }),
                        () => {
                            e = !1;
                        }
                    );
                }, [r, o, t, l?.id]),
                i.useMemo(() => n && r, [n, r])
            );
        })(n, ej),
        eS = (0, O.JL)({ sku: L }),
        ek = eS?.amount,
        eA = (0, K.o)({ orbPriceAmount: ek, location: "social_layer_storefront_card" }),
        ey = (0, I.h)(L?.applicationId),
        eT = i.useCallback((e) => {
            eb(e);
        }, []),
        eI = i.useMemo(() => u()(er.Nr, { [er.ax]: 0 === a, [er.GW]: 1 === a, [er.jz]: 2 === a }), [a]),
        { handleCardHover: eM, handleCardUnhover: eL } = (function (e) {
            let {
                    skuId: t,
                    applicationId: l,
                    guildId: n,
                    analyticsContext: a,
                    positionInSection: r,
                    analyticsLocations: s,
                } = e,
                o = i.useRef(!1),
                c = i.useRef(a),
                u = i.useRef({ positionInSection: r, analyticsLocations: s });
            return (
                i.useEffect(() => {
                    c.current = a;
                }, [a]),
                {
                    handleCardHover: i.useCallback(() => {
                        if (!o.current) {
                            let {
                                    sessionId: e,
                                    guildId: a,
                                    applicationId: r,
                                    pageIndex: i,
                                    pageTitle: s,
                                    pageSection: d,
                                    pageSectionTitle: m,
                                    isUserGuildMember: _,
                                    pageHasLeaderboard: x,
                                } = c.current,
                                { positionInSection: p, analyticsLocations: f } = u.current;
                            F.default.track(ec.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                                slayer_storefront_session_id: e,
                                sku_id: t,
                                guild_id: n ?? a,
                                application_id: l ?? r,
                                page_index: i,
                                page_title: s,
                                page_section: d,
                                page_section_title: m,
                                position_in_section: p,
                                is_user_guild_member: _,
                                page_has_leaderboard: x,
                                location_stack: f,
                            }),
                                (o.current = !0);
                        }
                    }, [t, l, n]),
                    handleCardUnhover: i.useCallback(() => {
                        o.current = !1;
                    }, []),
                }
            );
        })({
            skuId: n,
            applicationId: Q,
            guildId: z,
            analyticsContext: eg,
            positionInSection: t,
            analyticsLocations: eE,
        }),
        { handleCardVisibilityChange: ew } = (function (e) {
            let {
                    skuId: t,
                    applicationId: l,
                    guildId: n,
                    analyticsContext: a,
                    positionInSection: r,
                    analyticsLocations: s,
                } = e,
                o = i.useRef(null),
                c = i.useRef(a),
                u = i.useRef({ positionInSection: r, analyticsLocations: s });
            i.useEffect(() => {
                c.current = a;
            }, [a]);
            let d = i.useCallback(() => {
                    let {
                            sessionId: e,
                            guildId: a,
                            applicationId: r,
                            pageIndex: i,
                            pageTitle: s,
                            pageSection: o,
                            pageSectionTitle: d,
                            isUserGuildMember: m,
                            pageHasLeaderboard: _,
                        } = c.current,
                        { positionInSection: x, analyticsLocations: p } = u.current;
                    F.default.track(ec.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                        slayer_storefront_session_id: e,
                        sku_id: t,
                        guild_id: n ?? a,
                        application_id: l ?? r,
                        page_index: i,
                        page_title: s,
                        page_section: o,
                        page_section_title: d,
                        position_in_section: x,
                        is_user_guild_member: m,
                        page_has_leaderboard: _,
                        location_stack: p,
                    });
                }, [t, l, n]),
                m = i.useCallback(
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
                i.useEffect(
                    () => () => {
                        null !== o.current && (clearTimeout(o.current), (o.current = null));
                    },
                    [],
                ),
                { handleCardVisibilityChange: m }
            );
        })({
            skuId: n,
            applicationId: Q,
            guildId: z,
            analyticsContext: eg,
            positionInSection: t,
            analyticsLocations: eE,
        });
    i.useEffect(() => {
        ew(ej);
    }, [ej]);
    let eO = i.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: l } = ev.current,
                    {
                        sessionId: a,
                        guildId: r,
                        applicationId: i,
                        pageIndex: s,
                        pageTitle: o,
                        pageSection: c,
                        pageSectionTitle: u,
                        isUserGuildMember: d,
                        pageHasLeaderboard: m,
                    } = eg;
                F.default.track(ec.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: a,
                    sku_id: n,
                    guild_id: z ?? r,
                    application_id: Q ?? i,
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
            [n, Q, z, eg],
        ),
        { primaryIconAsset: eH, primaryIconLabel: eB } = i.useMemo(() => (0, U.Cv)(L, Q), [L, Q]),
        eD = (0, v.bG)([Y.A], () => Y.A.getStorefrontState(Q)?.activePage ?? 0),
        eP = i.useMemo(() => {
            let e = L?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let t = m()(),
                l = Math.max(m()(e).diff(t, "days"), 1);
            return l <= 3 ? ed.intl.format(ed.t.PWw4Vp, { days: l }) : null;
        }, [L?.tenantMetadata?.socialLayer?.expiresAt]),
        eF = (0, U.xf)(L),
        eU = i.useMemo(() => {
            if (!eR) return "none";
            let [e, t] = em[a];
            return `linear-gradient(to top, ${e_} ${30 + e}%, ${ex} ${30 + t}%)`;
        }, [a, eR]),
        eV = i.useCallback(() => {
            null != Q && (0, V.iR)(Q, n);
        }, [Q, n]),
        eG = i.useCallback(() => {
            eM(),
                null != Q &&
                    (x.current = setTimeout(() => {
                        (0, V.iR)(Q, n);
                    }, 1e3));
        }, [Q, n, eM]),
        eW = i.useCallback(() => {
            eL(), null != x.current && (clearTimeout(x.current), (x.current = null));
        }, [eL]);
    i.useEffect(
        () => () => {
            null != x.current && clearTimeout(x.current);
        },
        [],
    );
    let { getSocialLayerStorefrontLink: eY } = (0, W.H)(),
        ez = i.useCallback(() => {
            null != Q && null != eY && (0, w.bG)(eY(eD, n, L?.slug));
        }, [Q, n, eD, L?.slug, eY]),
        e$ = i.useCallback(
            (e) => {
                (eO(eu.bB.CARD), null != s && L?.applicationId != null)
                    ? s(e, { skuId: n, applicationId: L.applicationId })
                    : ez();
            },
            [eO, s, ez, n, L?.applicationId],
        ),
        eq = i.useCallback(
            (e) => {
                eC &&
                    (0, k.L3)(e, async () => {
                        let { default: e } = await l.e("97249").then(l.bind(l, 10680));
                        return (t) => (0, r.jsx)(e, { ...t, skuId: n });
                    });
            },
            [eC, n],
        ),
        eK = i.useMemo(() => [...eE, y.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [eE]),
        eX = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != ey &&
                        (eO(eu.bB.BUY_WITH_ORBS_BUTTON),
                        (0, D.B4)({
                            skuId: n,
                            applicationId: ey.id,
                            onComplete: () => {
                                null != ey &&
                                    null != L &&
                                    (0, Z.n)({ sku: L, application: ey, analyticsLocations: eK });
                            },
                            analyticsLocations: eK,
                        }));
            },
            [L, ey, n, eO, eK],
        ),
        eJ = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != L &&
                        (eO(eu.bB.BUY_BUTTON), (0, ee.a)(L, { isGift: !1 }, { analyticsLocations: eK, guildId: z }));
            },
            [L, z, eO, eK],
        ),
        {
            priceComponent: eQ,
            extendedHeight: eZ,
            displayPrice: e0,
        } = (function (e) {
            let { sku: t, orbsGate: l, orbPriceAmount: n, promotion: a } = e,
                { normalPrice: s, discountedPrice: o, discountPercent: c, userPrice: u } = (0, O.CD)({ sku: t }),
                d = i.useMemo(() => {
                    let e = a?.rewardValue;
                    return null == e || e <= 0
                        ? null
                        : (0, r.jsx)("div", {
                              className: er.pt,
                              children: (0, r.jsx)(N.E, {
                                  variant: "text-sm/semibold",
                                  color: "currentColor",
                                  children: ed.intl.format(ed.t.GiVd2Q, {
                                      orbCount: e,
                                      orbIconHook: () =>
                                          (0, r.jsx)(_.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                  }),
                              }),
                          });
                }, [a]);
            return null != t && (0, U.mC)(t)
                ? "CAN_CHECKOUT" === l
                    ? {
                          priceComponent: (0, r.jsxs)("div", {
                              className: er.p6,
                              children: [
                                  (0, r.jsx)(_.C, { size: "xs", color: "white" }),
                                  (0, r.jsx)(N.E, {
                                      variant: "text-md/bold",
                                      color: "always-white",
                                      lineClamp: 1,
                                      children: n,
                                  }),
                              ],
                          }),
                          extendedHeight: !1,
                          displayPrice: u,
                      }
                    : null != c && null != o
                      ? {
                            priceComponent: (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: er.p6,
                                        children: [
                                            null != s &&
                                                (0, r.jsx)(N.E, {
                                                    className: er.of,
                                                    variant: "text-md/medium",
                                                    color: "text-muted",
                                                    lineClamp: 1,
                                                    children: s,
                                                }),
                                            (0, r.jsx)(N.E, {
                                                variant: "text-md/bold",
                                                color: "always-white",
                                                lineClamp: 1,
                                                children: o,
                                            }),
                                            (0, r.jsxs)(N.E, {
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
                            priceComponent: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(N.E, {
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
        })({ sku: L, orbsGate: eA, orbPriceAmount: ek, promotion: (0, J.F)("card", { applicationId: Q, skuId: n }) }),
        e1 = (function (e) {
            let { location: t } = e;
            return q.useConfig({ location: t }).treatment;
        })({ location: "social_layer_storefront_card" }),
        e3 = L?.exclusive === !0 && 2 !== a && (e1 === $.EXPRESSIVE_HOVER || e1 === $.ALWAYS_EXPRESSIVE),
        e9 = i.useMemo(
            () =>
                "CAN_CHECKOUT" === eA
                    ? (0, r.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: eV,
                          onClick: eX,
                          "aria-label": ed.intl.formatToPlainString(ed.t.yi41qQ, { orbPrice: ek }),
                          text: ed.intl.format(ed.t.JC15qj, {
                              orbPrice: ek,
                              orbIconHook: () =>
                                  (0, r.jsx)(_.C, { className: er.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                          fullWidth: !0,
                      })
                    : (0, r.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: eV,
                          onClick: eJ,
                          text: null != e0 ? ed.intl.format(ed.t.Xp5WTn, { price: e0 }) : ed.intl.string(ed.t.boqtTA),
                          fullWidth: !0,
                      }),
            [eA, eX, eJ, eV, ek, e0],
        );
    if (null == L) return null;
    let e2 = (0, U.fq)(L),
        e6 = e3
            ? (0, r.jsx)("div", {
                  className: u()(er.mN, { [er.Oj]: e1 === $.ALWAYS_EXPRESSIVE, [er.T_]: e1 === $.EXPRESSIVE_HOVER }),
                  "aria-hidden": !0,
              })
            : null,
        e8 = (0, r.jsx)(j.L, {
            innerRef: d,
            onChange: eT,
            threshold: 0,
            children: (0, r.jsx)(C.vN, {
                children: (0, r.jsxs)(R.s, {
                    onClick: e$,
                    onContextMenu: eq,
                    onMouseEnter: eG,
                    onMouseLeave: eW,
                    className: u()(
                        eI,
                        { [er.Zl]: !ep && 2 !== a, [er.BN]: eo, [eo ? er.Mn : er.YF]: eh, [er.Rc]: !eR },
                        o,
                    ),
                    ref: d,
                    "aria-label": L.name,
                    children: [
                        L.exclusive
                            ? (0, r.jsx)("div", { className: er.fC, children: (0, r.jsx)(et.I, {}) })
                            : null != eP && (0, r.jsx)(S.Lp, { text: eP, disableColor: !0, className: er.qS }),
                        (0, r.jsx)(ef, {
                            sku: L,
                            guildId: z,
                            isCardHovered: eh,
                            variant: a,
                            trackCardClick: eO,
                            analyticsLocations: eE,
                            analyticsContext: eg,
                        }),
                        null != e2
                            ? eR
                                ? (0, r.jsx)(en.A, {
                                      containerClassName: er.Vl,
                                      foregroundImageClassName: er.wP,
                                      cardImage: e2,
                                      altText: L.name,
                                      shape: "custom",
                                      backgroundImageClassName: er.GC,
                                      cardBackgroundImage: eF,
                                      cssPosition: "absolute",
                                  })
                                : (0, r.jsx)(ei, {})
                            : (0, r.jsx)("div", {
                                  className: er.t7,
                                  children: (0, r.jsx)(h.q, {
                                      color: "white",
                                      size: "custom",
                                      height: 80,
                                      width: 80,
                                      className: er.Cw,
                                  }),
                              }),
                        2 !== a
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("div", { className: er.iZ, style: { background: eU } }),
                                      (0, r.jsx)(g.N, {
                                          theme: ec.NJ8.DARKER,
                                          children: (e) =>
                                              (0, r.jsxs)("div", {
                                                  className: u()(er.zH, e),
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: u()(er.gn, {
                                                              [er.ov]: !(0, U.mC)(L),
                                                              [er.w4]: eZ,
                                                          }),
                                                          children: [
                                                              eR &&
                                                                  (0, r.jsx)("div", {
                                                                      className: er.S1,
                                                                      children: (0, r.jsx)(el.V, {
                                                                          textColor: "always-white",
                                                                      }),
                                                                  }),
                                                              eR
                                                                  ? (0, r.jsxs)(r.Fragment, {
                                                                        children: [
                                                                            null != eH &&
                                                                                (0, r.jsx)("img", {
                                                                                    src: eH.toString(),
                                                                                    alt: eB,
                                                                                    className: er.ye,
                                                                                }),
                                                                            (0, r.jsx)(N.E, {
                                                                                color: "always-white",
                                                                                variant: "text-md/medium",
                                                                                lineClamp: 1,
                                                                                children: L.name,
                                                                            }),
                                                                        ],
                                                                    })
                                                                  : (0, r.jsx)(es, {}),
                                                          ],
                                                      }),
                                                      (0, r.jsx)("div", {
                                                          className: er.iQ,
                                                          children: eR ? eQ : (0, r.jsx)(es, {}),
                                                      }),
                                                  ],
                                              }),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: er.li,
                                          children: (0, r.jsxs)(E.e, {
                                              wrap: !1,
                                              fullWidth: !0,
                                              children: [
                                                  eN
                                                      ? e9
                                                      : (0, r.jsx)(b.m, {
                                                            text: ed.intl.string(ed.t.IqlPbQ),
                                                            children: (0, r.jsx)(f.$, {
                                                                variant: "primary",
                                                                onClick: (e) => {
                                                                    e.stopPropagation(),
                                                                        eO(eu.bB.VIEW_DETAILS_BUTTON),
                                                                        ez();
                                                                },
                                                                text: ed.intl.string(ed.t.KLBTgF),
                                                                fullWidth: !0,
                                                            }),
                                                        }),
                                                  (0, r.jsx)(ea.A, {
                                                      onGift: (e) => {
                                                          e.stopPropagation(),
                                                              eO(eu.bB.GIFT_BUTTON),
                                                              (0, ee.a)(
                                                                  L,
                                                                  { isGift: !0 },
                                                                  {
                                                                      analyticsLocations: [
                                                                          ...eE,
                                                                          y.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
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
    return e3 ? (0, r.jsxs)("div", { className: er.ur, children: [e6, e8] }) : e8;
}
