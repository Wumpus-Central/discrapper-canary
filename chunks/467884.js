l.d(t, { s: () => es, A: () => eo });
var n,
    a = l(627968),
    r = l(64700),
    s = l(310784),
    i = l.n(s),
    o = l(503698),
    u = l.n(o),
    c = l(989349),
    d = l.n(c),
    m = l(318254),
    x = l(939249),
    _ = l(366010),
    f = l(187322),
    p = l(638916),
    h = l(43990),
    C = l(825484),
    g = l(821609),
    b = l(17928),
    j = l(269115),
    v = l(990078),
    k = l(834730),
    R = l(890856),
    E = l(777666),
    N = l(442433),
    A = l(775602),
    y = l(793574),
    T = l(688810),
    S = l(713517),
    M = l(427209),
    L = l(976860),
    w = l(723090),
    I = l(363195),
    D = l(885386),
    O = l(67480),
    B = l(174459),
    H = l(871123),
    F = l(733391),
    G = l(439303),
    P = l(353281),
    U = l(832163),
    W = l(654107),
    z = l(345938),
    Y = l(533406),
    $ = l(263911),
    V = l(971146),
    q = l(366523),
    K = l(300182),
    J = l(900719);
function Q() {
    let [e] = r.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, a.jsx)("div", { className: u()(J.Vl, J.Yf), style: { animationDelay: `${e}s` } });
}
function Z() {
    let [e] = r.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, a.jsx)("div", { className: J.RC, style: { width: `${e}%` } });
}
var X = l(743693),
    ee = l(652215),
    et = l(995393),
    el = l(375708);
let en = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    ea = i()("#000000").darken(1.5).alpha(0.9).hex(),
    er = i()("#000000").alpha(0).hex();
var es = (((n = {})[(n.SMALL = 0)] = "SMALL"), (n[(n.MEDIUM = 1)] = "MEDIUM"), (n[(n.EMBEDDED = 2)] = "EMBEDDED"), n);
function ei(e) {
    let {
            guildId: t,
            sku: l,
            isCardHovered: n,
            trackCardClick: s,
            variant: i,
            analyticsLocations: o,
            analyticsContext: c,
        } = e,
        d = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != l &&
                        null != t &&
                        (s(et.bB.FORWARD_BUTTON),
                        (0, z.d)({
                            sku: l,
                            guildId: t,
                            analyticsContext: c,
                            analyticsLocations: o,
                            source: "social-layer-storefront-embed",
                        }));
            },
            [l, t, s, c, o],
        ),
        m = r.useCallback(() => {
            s(et.bB.WISHLIST_BUTTON);
        }, [s]),
        _ = r.useMemo(() => u()(J.o, { [J.H5]: n }), [n]);
    return (0, a.jsxs)("div", {
        className: J.zu,
        children: [
            2 === i &&
                (0, a.jsx)(x.D, {
                    className: u()(_, J.gy),
                    onClick: d,
                    children: (0, a.jsx)(M.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, a.jsx)(X._, {
                sku: l,
                isCardHovered: n,
                trackButtonClick: m,
                className: u()(_, J.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function eo(e) {
    let t,
        n,
        s,
        i,
        o,
        c,
        x,
        M,
        { positionInSection: z, skuId: X, variant: es = 0, onClick: eo, className: eu, analyticsLocations: ec } = e,
        ed = r.useRef(null),
        em = r.useRef(null),
        ex = (0, b.bG)([O.A], () => O.A.get(X)),
        { guildId: e_ } = (0, H.nG)(ex?.applicationId),
        ef = (0, b.bG)([I.A], () => (0, _.M)(I.A.theme)),
        ep = (0, b.bG)([A.A], () => A.A.useReducedMotion),
        eh = D.Q_.useSetting(),
        { isHoveringOrFocusing: eC } = (0, S.A)(ed),
        eg = (0, G.jM)(),
        { analyticsLocations: eb } = (0, T.Ay)(ec ?? []),
        ej = r.useRef({ positionInSection: z, analyticsLocations: eb }),
        [ev, ek] = r.useState(!1),
        eR = (0, b.bG)([U.A], () => (null != X ? U.A.getNormalizedSKUEligibility(X) : void 0), [X]),
        eE = (function (e, t) {
            let l = (0, b.bG)([O.A], () => O.A.get(e)),
                [n, a] = r.useState(!1),
                [s, i] = r.useState(!1),
                o = r.useMemo(() => (0, H.xf)(l), [l]),
                u = r.useMemo(() => (0, H.fq)(l), [l]);
            return (
                r.useEffect(() => {
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
                r.useEffect(() => {
                    if (l?.id == null || s || !t) return;
                    if (null == o) return void i(!0);
                    let e = !0;
                    return (
                        (0, W.l0)(o.toString()).finally(() => {
                            e && i(!0);
                        }),
                        () => {
                            e = !1;
                        }
                    );
                }, [s, o, t, l?.id]),
                r.useMemo(() => n && s, [n, s])
            );
        })(X, ev),
        eN = r.useCallback((e) => {
            ek(e);
        }, []),
        eA = r.useMemo(() => u()(J.Nr, { [J.ax]: 0 === es, [J.GW]: 1 === es, [J.jz]: 2 === es }), [es]),
        { handleCardHover: ey, handleCardUnhover: eT } =
            ((t = r.useRef(!1)),
            (n = r.useRef(eg)),
            (s = r.useRef({ positionInSection: z, analyticsLocations: eb })),
            r.useEffect(() => {
                n.current = eg;
            }, [eg]),
            {
                handleCardHover: r.useCallback(() => {
                    if (!t.current) {
                        let {
                                sessionId: e,
                                guildId: l,
                                pageIndex: a,
                                pageTitle: r,
                                pageSection: i,
                                pageSectionTitle: o,
                                isUserGuildMember: u,
                                pageHasLeaderboard: c,
                            } = n.current,
                            { positionInSection: d, analyticsLocations: m } = s.current;
                        B.default.track(ee.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                            slayer_storefront_session_id: e,
                            sku_id: X,
                            guild_id: l,
                            page_index: a,
                            page_title: r,
                            page_section: i,
                            page_section_title: o,
                            position_in_section: d,
                            is_user_guild_member: u,
                            page_has_leaderboard: c,
                            location_stack: m,
                        }),
                            (t.current = !0);
                    }
                }, [X]),
                handleCardUnhover: r.useCallback(() => {
                    t.current = !1;
                }, []),
            }),
        { handleCardVisibilityChange: eS } =
            ((i = r.useRef(null)),
            (o = r.useRef(eg)),
            (c = r.useRef({ positionInSection: z, analyticsLocations: eb })),
            r.useEffect(() => {
                o.current = eg;
            }, [eg]),
            (x = r.useCallback(() => {
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
                    { positionInSection: u, analyticsLocations: d } = c.current;
                B.default.track(ee.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                    slayer_storefront_session_id: e,
                    sku_id: X,
                    guild_id: t,
                    page_index: l,
                    page_title: n,
                    page_section: a,
                    page_section_title: r,
                    position_in_section: u,
                    is_user_guild_member: s,
                    page_has_leaderboard: i,
                    location_stack: d,
                });
            }, [X])),
            (M = r.useCallback(
                (e) => {
                    e
                        ? null === i.current &&
                          (i.current = window.setTimeout(() => {
                              x(), (i.current = null);
                          }, 1e3))
                        : null !== i.current && (clearTimeout(i.current), (i.current = null));
                },
                [x],
            )),
            r.useEffect(
                () => () => {
                    null !== i.current && (clearTimeout(i.current), (i.current = null));
                },
                [],
            ),
            { handleCardVisibilityChange: M });
    r.useEffect(() => {
        eS(ev);
    }, [ev]);
    let eM = r.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: l } = ej.current,
                    {
                        sessionId: n,
                        guildId: a,
                        pageIndex: r,
                        pageTitle: s,
                        pageSection: i,
                        pageSectionTitle: o,
                        isUserGuildMember: u,
                        pageHasLeaderboard: c,
                    } = eg;
                B.default.track(ee.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: n,
                    sku_id: X,
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
            [X, eg],
        ),
        { primaryIconAsset: eL, primaryIconLabel: ew } = r.useMemo(() => (0, H.Cv)(ex, ex?.applicationId), [ex]),
        eI = (0, b.bG)([U.A], () => (null != e_ ? (U.A.getStorefrontState(e_)?.activePage ?? 0) : 0)),
        eD = r.useMemo(() => {
            let e = ex?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let t = d()(),
                l = Math.max(d()(e).diff(t, "days"), 1);
            return l <= 3 ? el.intl.format(el.t.PWw4Vp, { days: l }) : null;
        }, [ex?.tenantMetadata?.socialLayer?.expiresAt]),
        eO = (0, H.xf)(ex),
        eB = r.useMemo(() => {
            if (!eE) return "none";
            let [e, t] = en[es];
            return `linear-gradient(to top, ${ea} ${30 + e}%, ${er} ${30 + t}%)`;
        }, [es, eE]),
        eH = r.useCallback(() => {
            null != e_ && (0, F.iR)(e_, X);
        }, [e_, X]),
        eF = r.useCallback(() => {
            ey(),
                null != e_ &&
                    (em.current = setTimeout(() => {
                        (0, F.iR)(e_, X);
                    }, 1e3));
        }, [e_, X, ey]),
        eG = r.useCallback(() => {
            eT(), null != em.current && (clearTimeout(em.current), (em.current = null));
        }, [eT]);
    r.useEffect(
        () => () => {
            null != em.current && clearTimeout(em.current);
        },
        [],
    );
    let { getSocialLayerStorefrontLink: eP } = (0, P.H)(),
        eU = r.useCallback(() => {
            null != e_ && null != eP && (0, L.bG)(eP(eI, X, ex?.slug));
        }, [e_, X, eI, ex?.slug, eP]),
        eW = r.useCallback(
            (e) => {
                (eM(et.bB.CARD), null != eo && ex?.applicationId != null)
                    ? eo(e, { skuId: X, applicationId: ex.applicationId })
                    : eU();
            },
            [eM, eo, eU, X, ex?.applicationId],
        ),
        ez = r.useCallback(
            (e) => {
                eh &&
                    (0, N.L3)(e, async () => {
                        let { default: e } = await l.e("97249").then(l.bind(l, 10680));
                        return (t) => (0, a.jsx)(e, { ...t, skuId: X });
                    });
            },
            [eh, X],
        ),
        {
            priceComponent: eY,
            extendedHeight: e$,
            displayPrice: eV,
        } = (function (e) {
            let { sku: t } = e,
                { normalPrice: l, discountedPrice: n, discountPercent: s } = (0, w.CD)({ sku: t }),
                i = n ?? l,
                o = r.useMemo(
                    () =>
                        null != t && null != t.orbsReward && t.orbsReward > 0
                            ? (0, a.jsx)("div", {
                                  className: J.pt,
                                  children: (0, a.jsx)(k.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: el.intl.format(el.t.GiVd2Q, {
                                          orbCount: t.orbsReward,
                                          orbIconHook: () =>
                                              (0, a.jsx)(m.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                      }),
                                  }),
                              })
                            : null,
                    [t],
                );
            return null != t && (0, H.mC)(t)
                ? null != s && null != n
                    ? {
                          priceComponent: (0, a.jsxs)("div", {
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: J.p6,
                                      children: [
                                          null != l &&
                                              (0, a.jsx)(k.E, {
                                                  className: J.of,
                                                  variant: "text-md/medium",
                                                  color: "text-muted",
                                                  lineClamp: 1,
                                                  children: l,
                                              }),
                                          (0, a.jsx)(k.E, {
                                              variant: "text-md/bold",
                                              color: "always-white",
                                              lineClamp: 1,
                                              children: n,
                                          }),
                                          (0, a.jsxs)(k.E, {
                                              variant: "text-md/bold",
                                              color: "text-feedback-positive",
                                              lineClamp: 1,
                                              children: ["(", s, ")"],
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
                          priceComponent: (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(k.E, {
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
        })({ sku: ex });
    if (null == ex) return null;
    let eq = (0, H.fq)(ex);
    return (0, a.jsx)(j.L, {
        innerRef: ed,
        onChange: eN,
        threshold: 0,
        children: (0, a.jsx)(f.vN, {
            children: (0, a.jsxs)(R.s, {
                onClick: eW,
                onContextMenu: ez,
                onMouseEnter: eF,
                onMouseLeave: eG,
                className: u()(eA, { [J.Zl]: !ep && 2 !== es, [J.BN]: ef, [ef ? J.Mn : J.YF]: eC, [J.Rc]: !eE }, eu),
                ref: ed,
                "aria-label": ex.name,
                children: [
                    ex.exclusive
                        ? (0, a.jsx)("div", { className: J.fC, children: (0, a.jsx)($.I, {}) })
                        : null != eD && (0, a.jsx)(E.Lp, { text: eD, disableColor: !0, className: J.qS }),
                    (0, a.jsx)(ei, {
                        guildId: e_,
                        sku: ex,
                        isCardHovered: eC,
                        variant: es,
                        trackCardClick: eM,
                        analyticsLocations: eb,
                        analyticsContext: eg,
                    }),
                    null != eq
                        ? eE
                            ? (0, a.jsx)(q.A, {
                                  containerClassName: J.Vl,
                                  foregroundImageClassName: J.wP,
                                  cardImage: eq,
                                  altText: ex.name,
                                  shape: "custom",
                                  backgroundImageClassName: J.GC,
                                  cardBackgroundImage: eO,
                                  cssPosition: "absolute",
                              })
                            : (0, a.jsx)(Q, {})
                        : (0, a.jsx)("div", {
                              className: J.t7,
                              children: (0, a.jsx)(p.q, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: J.Cw,
                              }),
                          }),
                    2 !== es
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", { className: J.iZ, style: { background: eB } }),
                                  (0, a.jsx)(h.N, {
                                      theme: ee.NJ8.DARKER,
                                      children: (e) =>
                                          (0, a.jsxs)("div", {
                                              className: u()(J.zH, e),
                                              children: [
                                                  (0, a.jsxs)("div", {
                                                      className: u()(J.gn, { [J.ov]: !(0, H.mC)(ex), [J.w4]: e$ }),
                                                      children: [
                                                          eE &&
                                                              (0, a.jsx)("div", {
                                                                  className: J.S1,
                                                                  children: (0, a.jsx)(V.V, {
                                                                      textColor: "always-white",
                                                                  }),
                                                              }),
                                                          eE
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        null != eL &&
                                                                            (0, a.jsx)("img", {
                                                                                src: eL.toString(),
                                                                                alt: ew,
                                                                                className: J.ye,
                                                                            }),
                                                                        (0, a.jsx)(k.E, {
                                                                            color: "always-white",
                                                                            variant: "text-md/medium",
                                                                            lineClamp: 1,
                                                                            children: ex.name,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsx)(Z, {}),
                                                      ],
                                                  }),
                                                  (0, a.jsx)("div", {
                                                      className: J.iQ,
                                                      children: eE ? eY : (0, a.jsx)(Z, {}),
                                                  }),
                                              ],
                                          }),
                                  }),
                                  (0, a.jsx)("div", {
                                      className: J.li,
                                      children: (0, a.jsxs)(C.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              eR
                                                  ? (0, a.jsx)(g.$, {
                                                        variant: "primary",
                                                        onMouseDown: eH,
                                                        onClick: (e) => {
                                                            e.stopPropagation(),
                                                                eM(et.bB.BUY_BUTTON),
                                                                (0, Y.a)(
                                                                    ex,
                                                                    { isGift: !1 },
                                                                    {
                                                                        analyticsLocations: [
                                                                            ...eb,
                                                                            y.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                        ],
                                                                        guildId: e_,
                                                                    },
                                                                );
                                                        },
                                                        text:
                                                            null != eV
                                                                ? el.intl.format(el.t.Xp5WTn, { price: eV })
                                                                : el.intl.string(el.t.boqtTA),
                                                        fullWidth: !0,
                                                    })
                                                  : (0, a.jsx)(v.m, {
                                                        text: el.intl.string(el.t.IqlPbQ),
                                                        children: (0, a.jsx)(g.$, {
                                                            variant: "primary",
                                                            onClick: (e) => {
                                                                e.stopPropagation(),
                                                                    eM(et.bB.VIEW_DETAILS_BUTTON),
                                                                    eU();
                                                            },
                                                            text: el.intl.string(el.t.KLBTgF),
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                              (0, a.jsx)(K.A, {
                                                  onGift: (e) => {
                                                      e.stopPropagation(),
                                                          eM(et.bB.GIFT_BUTTON),
                                                          (0, Y.a)(
                                                              ex,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...eb,
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
}
