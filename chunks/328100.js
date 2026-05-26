l.d(t, { s: () => ec, A: () => em });
var n,
    a,
    r = l(627968),
    s = l(64700),
    i = l(310784),
    o = l.n(i),
    u = l(503698),
    c = l.n(u),
    d = l(989349),
    m = l.n(d),
    _ = l(318254),
    x = l(939249),
    f = l(366010),
    p = l(187322),
    h = l(638916),
    C = l(43990),
    g = l(825484),
    E = l(821609),
    v = l(17928),
    j = l(269115),
    b = l(990078),
    R = l(834730),
    S = l(890856),
    A = l(777666),
    N = l(442433),
    k = l(775602),
    y = l(793574),
    T = l(688810),
    M = l(713517),
    I = l(427209),
    L = l(976860),
    w = l(723090),
    O = l(363195),
    D = l(885386),
    H = l(67480),
    B = l(174459),
    P = l(871123),
    F = l(733391),
    G = l(439303),
    V = l(353281),
    U = l(832163),
    W = l(945810),
    Y =
        (((n = {}).CONTROL = "control"),
        (n.EXPRESSIVE_HOVER = "expressive_hover"),
        (n.ALWAYS_EXPRESSIVE = "always_expressive"),
        n);
let z = (0, W.mj)({
    name: "2026-05-slayer-storefront-exclusive-expressive-flair",
    kind: "user",
    defaultConfig: { treatment: "control" },
    variations: {
        0: { treatment: "control" },
        1: { treatment: "expressive_hover" },
        2: { treatment: "always_expressive" },
    },
});
var $ = l(654107),
    X = l(345938),
    q = l(533406),
    K = l(263911),
    J = l(971146),
    Q = l(366523),
    Z = l(300182),
    ee = l(900719);
function et() {
    let [e] = s.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, r.jsx)("div", { className: c()(ee.Vl, ee.Yf), style: { animationDelay: `${e}s` } });
}
function el() {
    let [e] = s.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, r.jsx)("div", { className: ee.RC, style: { width: `${e}%` } });
}
var en = l(743693),
    ea = l(652215),
    er = l(995393),
    es = l(375708);
let ei = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    eo = o()("#000000").darken(1.5).alpha(0.9).hex(),
    eu = o()("#000000").alpha(0).hex();
var ec = (((a = {})[(a.SMALL = 0)] = "SMALL"), (a[(a.MEDIUM = 1)] = "MEDIUM"), (a[(a.EMBEDDED = 2)] = "EMBEDDED"), a);
function ed(e) {
    let {
            guildId: t,
            sku: l,
            isCardHovered: n,
            trackCardClick: a,
            variant: i,
            analyticsLocations: o,
            analyticsContext: u,
        } = e,
        d = s.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != l &&
                        null != t &&
                        (a(er.bB.FORWARD_BUTTON),
                        (0, X.d)({
                            sku: l,
                            guildId: t,
                            analyticsContext: u,
                            analyticsLocations: o,
                            source: "social-layer-storefront-embed",
                        }));
            },
            [l, t, a, u, o],
        ),
        m = s.useCallback(() => {
            a(er.bB.WISHLIST_BUTTON);
        }, [a]),
        _ = s.useMemo(() => c()(ee.o, { [ee.H5]: n }), [n]);
    return (0, r.jsxs)("div", {
        className: ee.zu,
        children: [
            2 === i &&
                (0, r.jsx)(x.D, {
                    className: c()(_, ee.gy),
                    onClick: d,
                    children: (0, r.jsx)(I.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, r.jsx)(en._, {
                sku: l,
                isCardHovered: n,
                trackButtonClick: m,
                className: c()(_, ee.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function em(e) {
    let t,
        n,
        a,
        i,
        o,
        u,
        d,
        x,
        { positionInSection: I, skuId: W, variant: X = 0, onClick: en, className: ec, analyticsLocations: em } = e,
        e_ = s.useRef(null),
        ex = s.useRef(null),
        ef = (0, v.bG)([H.A], () => H.A.get(W)),
        { guildId: ep } = (0, P.nG)(ef?.applicationId),
        eh = (0, v.bG)([O.A], () => (0, f.M)(O.A.theme)),
        eC = (0, v.bG)([k.A], () => k.A.useReducedMotion),
        eg = D.Q_.useSetting(),
        { isHoveringOrFocusing: eE } = (0, M.A)(e_),
        ev = (0, G.jM)(),
        { analyticsLocations: ej } = (0, T.Ay)(em ?? []),
        eb = s.useRef({ positionInSection: I, analyticsLocations: ej }),
        [eR, eS] = s.useState(!1),
        eA = (0, v.bG)([U.A], () => (null != W ? U.A.getNormalizedSKUEligibility(W) : void 0), [W]),
        eN = (function (e, t) {
            let l = (0, v.bG)([H.A], () => H.A.get(e)),
                [n, a] = s.useState(!1),
                [r, i] = s.useState(!1),
                o = s.useMemo(() => (0, P.xf)(l), [l]),
                u = s.useMemo(() => (0, P.fq)(l), [l]);
            return (
                s.useEffect(() => {
                    if (l?.id == null || n || !t) return;
                    if (null == u) return void a(!0);
                    let e = new Image();
                    return (
                        (e.src = u.toString()),
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
                }, [u, t, n, l?.id]),
                s.useEffect(() => {
                    if (l?.id == null || r || !t) return;
                    if (null == o) return void i(!0);
                    let e = !0;
                    return (
                        (0, $.l0)(o.toString()).finally(() => {
                            e && i(!0);
                        }),
                        () => {
                            e = !1;
                        }
                    );
                }, [r, o, t, l?.id]),
                s.useMemo(() => n && r, [n, r])
            );
        })(W, eR),
        ek = s.useCallback((e) => {
            eS(e);
        }, []),
        ey = s.useMemo(() => c()(ee.Nr, { [ee.ax]: 0 === X, [ee.GW]: 1 === X, [ee.jz]: 2 === X }), [X]),
        { handleCardHover: eT, handleCardUnhover: eM } =
            ((t = s.useRef(!1)),
            (n = s.useRef(ev)),
            (a = s.useRef({ positionInSection: I, analyticsLocations: ej })),
            s.useEffect(() => {
                n.current = ev;
            }, [ev]),
            {
                handleCardHover: s.useCallback(() => {
                    if (!t.current) {
                        let {
                                sessionId: e,
                                guildId: l,
                                pageIndex: r,
                                pageTitle: s,
                                pageSection: i,
                                pageSectionTitle: o,
                                isUserGuildMember: u,
                                pageHasLeaderboard: c,
                            } = n.current,
                            { positionInSection: d, analyticsLocations: m } = a.current;
                        B.default.track(ea.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                            slayer_storefront_session_id: e,
                            sku_id: W,
                            guild_id: l,
                            page_index: r,
                            page_title: s,
                            page_section: i,
                            page_section_title: o,
                            position_in_section: d,
                            is_user_guild_member: u,
                            page_has_leaderboard: c,
                            location_stack: m,
                        }),
                            (t.current = !0);
                    }
                }, [W]),
                handleCardUnhover: s.useCallback(() => {
                    t.current = !1;
                }, []),
            }),
        { handleCardVisibilityChange: eI } =
            ((i = s.useRef(null)),
            (o = s.useRef(ev)),
            (u = s.useRef({ positionInSection: I, analyticsLocations: ej })),
            s.useEffect(() => {
                o.current = ev;
            }, [ev]),
            (d = s.useCallback(() => {
                let {
                        sessionId: e,
                        guildId: t,
                        pageIndex: l,
                        pageTitle: n,
                        pageSection: a,
                        pageSectionTitle: r,
                        isUserGuildMember: s,
                        pageHasLeaderboard: i,
                    } = o.current,
                    { positionInSection: c, analyticsLocations: d } = u.current;
                B.default.track(ea.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                    slayer_storefront_session_id: e,
                    sku_id: W,
                    guild_id: t,
                    page_index: l,
                    page_title: n,
                    page_section: a,
                    page_section_title: r,
                    position_in_section: c,
                    is_user_guild_member: s,
                    page_has_leaderboard: i,
                    location_stack: d,
                });
            }, [W])),
            (x = s.useCallback(
                (e) => {
                    e
                        ? null === i.current &&
                          (i.current = window.setTimeout(() => {
                              d(), (i.current = null);
                          }, 1e3))
                        : null !== i.current && (clearTimeout(i.current), (i.current = null));
                },
                [d],
            )),
            s.useEffect(
                () => () => {
                    null !== i.current && (clearTimeout(i.current), (i.current = null));
                },
                [],
            ),
            { handleCardVisibilityChange: x });
    s.useEffect(() => {
        eI(eR);
    }, [eR]);
    let eL = s.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: l } = eb.current,
                    {
                        sessionId: n,
                        guildId: a,
                        pageIndex: r,
                        pageTitle: s,
                        pageSection: i,
                        pageSectionTitle: o,
                        isUserGuildMember: u,
                        pageHasLeaderboard: c,
                    } = ev;
                B.default.track(ea.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: n,
                    sku_id: W,
                    guild_id: a,
                    page_index: r,
                    page_title: s,
                    page_section: i,
                    page_section_title: o,
                    position_in_section: l,
                    is_user_guild_member: u,
                    page_has_leaderboard: c,
                    cta_type: e,
                    location_stack: t,
                });
            },
            [W, ev],
        ),
        { primaryIconAsset: ew, primaryIconLabel: eO } = s.useMemo(() => (0, P.Cv)(ef, ef?.applicationId), [ef]),
        eD = (0, v.bG)([U.A], () => (null != ep ? (U.A.getStorefrontState(ep)?.activePage ?? 0) : 0)),
        eH = s.useMemo(() => {
            let e = ef?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let t = m()(),
                l = Math.max(m()(e).diff(t, "days"), 1);
            return l <= 3 ? es.intl.format(es.t.PWw4Vp, { days: l }) : null;
        }, [ef?.tenantMetadata?.socialLayer?.expiresAt]),
        eB = (0, P.xf)(ef),
        eP = s.useMemo(() => {
            if (!eN) return "none";
            let [e, t] = ei[X];
            return `linear-gradient(to top, ${eo} ${30 + e}%, ${eu} ${30 + t}%)`;
        }, [X, eN]),
        eF = s.useCallback(() => {
            null != ep && (0, F.iR)(ep, W);
        }, [ep, W]),
        eG = s.useCallback(() => {
            eT(),
                null != ep &&
                    (ex.current = setTimeout(() => {
                        (0, F.iR)(ep, W);
                    }, 1e3));
        }, [ep, W, eT]),
        eV = s.useCallback(() => {
            eM(), null != ex.current && (clearTimeout(ex.current), (ex.current = null));
        }, [eM]);
    s.useEffect(
        () => () => {
            null != ex.current && clearTimeout(ex.current);
        },
        [],
    );
    let { getSocialLayerStorefrontLink: eU } = (0, V.H)(),
        eW = s.useCallback(() => {
            null != ep && null != eU && (0, L.bG)(eU(eD, W, ef?.slug));
        }, [ep, W, eD, ef?.slug, eU]),
        eY = s.useCallback(
            (e) => {
                (eL(er.bB.CARD), null != en && ef?.applicationId != null)
                    ? en(e, { skuId: W, applicationId: ef.applicationId })
                    : eW();
            },
            [eL, en, eW, W, ef?.applicationId],
        ),
        ez = s.useCallback(
            (e) => {
                eg &&
                    (0, N.L3)(e, async () => {
                        let { default: e } = await l.e("97249").then(l.bind(l, 10680));
                        return (t) => (0, r.jsx)(e, { ...t, skuId: W });
                    });
            },
            [eg, W],
        ),
        {
            priceComponent: e$,
            extendedHeight: eX,
            displayPrice: eq,
        } = (function (e) {
            let { sku: t } = e,
                { normalPrice: l, discountedPrice: n, discountPercent: a } = (0, w.CD)({ sku: t }),
                i = n ?? l,
                o = s.useMemo(
                    () =>
                        null != t && null != t.orbsReward && t.orbsReward > 0
                            ? (0, r.jsx)("div", {
                                  className: ee.pt,
                                  children: (0, r.jsx)(R.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: es.intl.format(es.t.GiVd2Q, {
                                          orbCount: t.orbsReward,
                                          orbIconHook: () =>
                                              (0, r.jsx)(_.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                      }),
                                  }),
                              })
                            : null,
                    [t],
                );
            return null != t && (0, P.mC)(t)
                ? null != a && null != n
                    ? {
                          priceComponent: (0, r.jsxs)("div", {
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: ee.p6,
                                      children: [
                                          null != l &&
                                              (0, r.jsx)(R.E, {
                                                  className: ee.of,
                                                  variant: "text-md/medium",
                                                  color: "text-muted",
                                                  lineClamp: 1,
                                                  children: l,
                                              }),
                                          (0, r.jsx)(R.E, {
                                              variant: "text-md/bold",
                                              color: "always-white",
                                              lineClamp: 1,
                                              children: n,
                                          }),
                                          (0, r.jsxs)(R.E, {
                                              variant: "text-md/bold",
                                              color: "text-feedback-positive",
                                              lineClamp: 1,
                                              children: ["(", a, ")"],
                                          }),
                                      ],
                                  }),
                                  o,
                              ],
                          }),
                          extendedHeight: null != o,
                          displayPrice: i,
                      }
                    : {
                          priceComponent: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(R.E, {
                                      variant: "text-md/bold",
                                      color: "always-white",
                                      lineClamp: 1,
                                      children: l,
                                  }),
                                  o,
                              ],
                          }),
                          extendedHeight: !1,
                          displayPrice: i,
                      }
                : { priceComponent: null, extendedHeight: !1, displayPrice: i };
        })({ sku: ef }),
        eK = (function (e) {
            let { location: t } = e;
            return z.useConfig({ location: t }).treatment;
        })({ location: "social_layer_storefront_card" }),
        eJ = ef?.exclusive === !0 && 2 !== X && (eK === Y.EXPRESSIVE_HOVER || eK === Y.ALWAYS_EXPRESSIVE);
    if (null == ef) return null;
    let eQ = (0, P.fq)(ef),
        eZ = eJ
            ? (0, r.jsx)("div", {
                  className: c()(ee.mN, { [ee.Oj]: eK === Y.ALWAYS_EXPRESSIVE, [ee.T_]: eK === Y.EXPRESSIVE_HOVER }),
                  "aria-hidden": !0,
              })
            : null,
        e0 = (0, r.jsx)(j.L, {
            innerRef: e_,
            onChange: ek,
            threshold: 0,
            children: (0, r.jsx)(p.vN, {
                children: (0, r.jsxs)(S.s, {
                    onClick: eY,
                    onContextMenu: ez,
                    onMouseEnter: eG,
                    onMouseLeave: eV,
                    className: c()(
                        ey,
                        { [ee.Zl]: !eC && 2 !== X, [ee.BN]: eh, [eh ? ee.Mn : ee.YF]: eE, [ee.Rc]: !eN },
                        ec,
                    ),
                    ref: e_,
                    "aria-label": ef.name,
                    children: [
                        ef.exclusive
                            ? (0, r.jsx)("div", { className: ee.fC, children: (0, r.jsx)(K.I, {}) })
                            : null != eH && (0, r.jsx)(A.Lp, { text: eH, disableColor: !0, className: ee.qS }),
                        (0, r.jsx)(ed, {
                            guildId: ep,
                            sku: ef,
                            isCardHovered: eE,
                            variant: X,
                            trackCardClick: eL,
                            analyticsLocations: ej,
                            analyticsContext: ev,
                        }),
                        null != eQ
                            ? eN
                                ? (0, r.jsx)(Q.A, {
                                      containerClassName: ee.Vl,
                                      foregroundImageClassName: ee.wP,
                                      cardImage: eQ,
                                      altText: ef.name,
                                      shape: "custom",
                                      backgroundImageClassName: ee.GC,
                                      cardBackgroundImage: eB,
                                      cssPosition: "absolute",
                                  })
                                : (0, r.jsx)(et, {})
                            : (0, r.jsx)("div", {
                                  className: ee.t7,
                                  children: (0, r.jsx)(h.q, {
                                      color: "white",
                                      size: "custom",
                                      height: 80,
                                      width: 80,
                                      className: ee.Cw,
                                  }),
                              }),
                        2 !== X
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("div", { className: ee.iZ, style: { background: eP } }),
                                      (0, r.jsx)(C.N, {
                                          theme: ea.NJ8.DARKER,
                                          children: (e) =>
                                              (0, r.jsxs)("div", {
                                                  className: c()(ee.zH, e),
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: c()(ee.gn, {
                                                              [ee.ov]: !(0, P.mC)(ef),
                                                              [ee.w4]: eX,
                                                          }),
                                                          children: [
                                                              eN &&
                                                                  (0, r.jsx)("div", {
                                                                      className: ee.S1,
                                                                      children: (0, r.jsx)(J.V, {
                                                                          textColor: "always-white",
                                                                      }),
                                                                  }),
                                                              eN
                                                                  ? (0, r.jsxs)(r.Fragment, {
                                                                        children: [
                                                                            null != ew &&
                                                                                (0, r.jsx)("img", {
                                                                                    src: ew.toString(),
                                                                                    alt: eO,
                                                                                    className: ee.ye,
                                                                                }),
                                                                            (0, r.jsx)(R.E, {
                                                                                color: "always-white",
                                                                                variant: "text-md/medium",
                                                                                lineClamp: 1,
                                                                                children: ef.name,
                                                                            }),
                                                                        ],
                                                                    })
                                                                  : (0, r.jsx)(el, {}),
                                                          ],
                                                      }),
                                                      (0, r.jsx)("div", {
                                                          className: ee.iQ,
                                                          children: eN ? e$ : (0, r.jsx)(el, {}),
                                                      }),
                                                  ],
                                              }),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: ee.li,
                                          children: (0, r.jsxs)(g.e, {
                                              wrap: !1,
                                              fullWidth: !0,
                                              children: [
                                                  eA
                                                      ? (0, r.jsx)(E.$, {
                                                            variant: "primary",
                                                            onMouseDown: eF,
                                                            onClick: (e) => {
                                                                e.stopPropagation(),
                                                                    eL(er.bB.BUY_BUTTON),
                                                                    (0, q.a)(
                                                                        ef,
                                                                        { isGift: !1 },
                                                                        {
                                                                            analyticsLocations: [
                                                                                ...ej,
                                                                                y.A
                                                                                    .SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                            ],
                                                                            guildId: ep,
                                                                        },
                                                                    );
                                                            },
                                                            text:
                                                                null != eq
                                                                    ? es.intl.format(es.t.Xp5WTn, { price: eq })
                                                                    : es.intl.string(es.t.boqtTA),
                                                            fullWidth: !0,
                                                        })
                                                      : (0, r.jsx)(b.m, {
                                                            text: es.intl.string(es.t.IqlPbQ),
                                                            children: (0, r.jsx)(E.$, {
                                                                variant: "primary",
                                                                onClick: (e) => {
                                                                    e.stopPropagation(),
                                                                        eL(er.bB.VIEW_DETAILS_BUTTON),
                                                                        eW();
                                                                },
                                                                text: es.intl.string(es.t.KLBTgF),
                                                                fullWidth: !0,
                                                            }),
                                                        }),
                                                  (0, r.jsx)(Z.A, {
                                                      onGift: (e) => {
                                                          e.stopPropagation(),
                                                              eL(er.bB.GIFT_BUTTON),
                                                              (0, q.a)(
                                                                  ef,
                                                                  { isGift: !0 },
                                                                  {
                                                                      analyticsLocations: [
                                                                          ...ej,
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
    return eJ ? (0, r.jsxs)("div", { className: ee.ur, children: [eZ, e0] }) : e0;
}
