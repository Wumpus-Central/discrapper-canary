l.d(t, { s: () => ec, A: () => em });
var n,
    a,
    r = l(627968),
    i = l(64700),
    s = l(310784),
    o = l.n(s),
    u = l(503698),
    c = l.n(u),
    d = l(989349),
    m = l.n(d),
    _ = l(318254),
    x = l(939249),
    p = l(366010),
    f = l(187322),
    h = l(638916),
    C = l(43990),
    g = l(825484),
    E = l(821609),
    v = l(17928),
    j = l(269115),
    b = l(990078),
    R = l(834730),
    S = l(890856),
    A = l(812993),
    N = l(442433),
    k = l(775602),
    y = l(793574),
    T = l(688810),
    I = l(713517),
    M = l(427209),
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
    let [e] = i.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, r.jsx)("div", { className: c()(ee.Vl, ee.Yf), style: { animationDelay: `${e}s` } });
}
function el() {
    let [e] = i.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, r.jsx)("div", { className: ee.RC, style: { width: `${e}%` } });
}
var en = l(743693),
    ea = l(652215),
    er = l(995393),
    ei = l(375708);
let es = [
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
            variant: s,
            analyticsLocations: o,
            analyticsContext: u,
        } = e,
        d = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != l &&
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
        m = i.useCallback(() => {
            a(er.bB.WISHLIST_BUTTON);
        }, [a]),
        _ = i.useMemo(() => c()(ee.o, { [ee.H5]: n }), [n]);
    return (0, r.jsxs)("div", {
        className: ee.zu,
        children: [
            2 === s &&
                (0, r.jsx)(x.D, {
                    className: c()(_, ee.gy),
                    onClick: d,
                    children: (0, r.jsx)(M.A, { size: "refresh_sm", color: "currentColor" }),
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
    let { positionInSection: t, skuId: n, variant: a = 0, onClick: s, className: o, analyticsLocations: u } = e,
        d = i.useRef(null),
        x = i.useRef(null),
        M = (0, v.bG)([H.A], () => H.A.get(n)),
        { guildId: W } = (0, P.nG)(M?.applicationId),
        X = M?.applicationId,
        en = (0, v.bG)([O.A], () => (0, p.M)(O.A.theme)),
        ec = (0, v.bG)([k.Ay], () => k.Ay.useReducedMotion),
        em = D.Q_.useSetting(),
        { isHoveringOrFocusing: e_ } = (0, I.A)(d),
        ex = (0, G.jM)(),
        { analyticsLocations: ep } = (0, T.Ay)(u ?? []),
        ef = i.useRef({ positionInSection: t, analyticsLocations: ep }),
        [eh, eC] = i.useState(!1),
        eg = (0, v.bG)([U.A], () => (null != n ? U.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        eE = (function (e, t) {
            let l = (0, v.bG)([H.A], () => H.A.get(e)),
                [n, a] = i.useState(!1),
                [r, s] = i.useState(!1),
                o = i.useMemo(() => (0, P.xf)(l), [l]),
                u = i.useMemo(() => (0, P.fq)(l), [l]);
            return (
                i.useEffect(() => {
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
                i.useEffect(() => {
                    if (l?.id == null || r || !t) return;
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
                }, [r, o, t, l?.id]),
                i.useMemo(() => n && r, [n, r])
            );
        })(n, eh),
        ev = i.useCallback((e) => {
            eC(e);
        }, []),
        ej = i.useMemo(() => c()(ee.Nr, { [ee.ax]: 0 === a, [ee.GW]: 1 === a, [ee.jz]: 2 === a }), [a]),
        { handleCardHover: eb, handleCardUnhover: eR } = (function (e) {
            let {
                    skuId: t,
                    applicationId: l,
                    guildId: n,
                    analyticsContext: a,
                    positionInSection: r,
                    analyticsLocations: s,
                } = e,
                o = i.useRef(!1),
                u = i.useRef(a),
                c = i.useRef({ positionInSection: r, analyticsLocations: s });
            return (
                i.useEffect(() => {
                    u.current = a;
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
                                } = u.current,
                                { positionInSection: p, analyticsLocations: f } = c.current;
                            B.default.track(ea.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
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
            applicationId: X,
            guildId: W,
            analyticsContext: ex,
            positionInSection: t,
            analyticsLocations: ep,
        }),
        { handleCardVisibilityChange: eS } = (function (e) {
            let {
                    skuId: t,
                    applicationId: l,
                    guildId: n,
                    analyticsContext: a,
                    positionInSection: r,
                    analyticsLocations: s,
                } = e,
                o = i.useRef(null),
                u = i.useRef(a),
                c = i.useRef({ positionInSection: r, analyticsLocations: s });
            i.useEffect(() => {
                u.current = a;
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
                        } = u.current,
                        { positionInSection: x, analyticsLocations: p } = c.current;
                    B.default.track(ea.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
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
            applicationId: X,
            guildId: W,
            analyticsContext: ex,
            positionInSection: t,
            analyticsLocations: ep,
        });
    i.useEffect(() => {
        eS(eh);
    }, [eh]);
    let eA = i.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: l } = ef.current,
                    {
                        sessionId: a,
                        guildId: r,
                        applicationId: i,
                        pageIndex: s,
                        pageTitle: o,
                        pageSection: u,
                        pageSectionTitle: c,
                        isUserGuildMember: d,
                        pageHasLeaderboard: m,
                    } = ex;
                B.default.track(ea.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: a,
                    sku_id: n,
                    guild_id: W ?? r,
                    application_id: X ?? i,
                    page_index: s,
                    page_title: o,
                    page_section: u,
                    page_section_title: c,
                    position_in_section: l,
                    is_user_guild_member: d,
                    page_has_leaderboard: m,
                    cta_type: e,
                    location_stack: t,
                });
            },
            [n, X, W, ex],
        ),
        { primaryIconAsset: eN, primaryIconLabel: ek } = i.useMemo(() => (0, P.Cv)(M, X), [M, X]),
        ey = (0, v.bG)([U.A], () => U.A.getStorefrontState(X)?.activePage ?? 0),
        eT = i.useMemo(() => {
            let e = M?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let t = m()(),
                l = Math.max(m()(e).diff(t, "days"), 1);
            return l <= 3 ? ei.intl.format(ei.t.PWw4Vp, { days: l }) : null;
        }, [M?.tenantMetadata?.socialLayer?.expiresAt]),
        eI = (0, P.xf)(M),
        eM = i.useMemo(() => {
            if (!eE) return "none";
            let [e, t] = es[a];
            return `linear-gradient(to top, ${eo} ${30 + e}%, ${eu} ${30 + t}%)`;
        }, [a, eE]),
        eL = i.useCallback(() => {
            null != X && (0, F.iR)(X, n);
        }, [X, n]),
        ew = i.useCallback(() => {
            eb(),
                null != X &&
                    (x.current = setTimeout(() => {
                        (0, F.iR)(X, n);
                    }, 1e3));
        }, [X, n, eb]),
        eO = i.useCallback(() => {
            eR(), null != x.current && (clearTimeout(x.current), (x.current = null));
        }, [eR]);
    i.useEffect(
        () => () => {
            null != x.current && clearTimeout(x.current);
        },
        [],
    );
    let { getSocialLayerStorefrontLink: eD } = (0, V.H)(),
        eH = i.useCallback(() => {
            null != X && null != eD && (0, L.bG)(eD(ey, n, M?.slug));
        }, [X, n, ey, M?.slug, eD]),
        eB = i.useCallback(
            (e) => {
                (eA(er.bB.CARD), null != s && M?.applicationId != null)
                    ? s(e, { skuId: n, applicationId: M.applicationId })
                    : eH();
            },
            [eA, s, eH, n, M?.applicationId],
        ),
        eP = i.useCallback(
            (e) => {
                em &&
                    (0, N.L3)(e, async () => {
                        let { default: e } = await l.e("97249").then(l.bind(l, 10680));
                        return (t) => (0, r.jsx)(e, { ...t, skuId: n });
                    });
            },
            [em, n],
        ),
        {
            priceComponent: eF,
            extendedHeight: eG,
            displayPrice: eV,
        } = (function (e) {
            let { sku: t } = e,
                { normalPrice: l, discountedPrice: n, discountPercent: a, userPrice: s } = (0, w.CD)({ sku: t }),
                o = i.useMemo(
                    () =>
                        null != t && null != t.orbsReward && t.orbsReward > 0
                            ? (0, r.jsx)("div", {
                                  className: ee.pt,
                                  children: (0, r.jsx)(R.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: ei.intl.format(ei.t.GiVd2Q, {
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
                          displayPrice: s,
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
                          displayPrice: s,
                      }
                : { priceComponent: null, extendedHeight: !1, displayPrice: s };
        })({ sku: M }),
        eU = (function (e) {
            let { location: t } = e;
            return z.useConfig({ location: t }).treatment;
        })({ location: "social_layer_storefront_card" }),
        eW = M?.exclusive === !0 && 2 !== a && (eU === Y.EXPRESSIVE_HOVER || eU === Y.ALWAYS_EXPRESSIVE);
    if (null == M) return null;
    let eY = (0, P.fq)(M),
        ez = eW
            ? (0, r.jsx)("div", {
                  className: c()(ee.mN, { [ee.Oj]: eU === Y.ALWAYS_EXPRESSIVE, [ee.T_]: eU === Y.EXPRESSIVE_HOVER }),
                  "aria-hidden": !0,
              })
            : null,
        e$ = (0, r.jsx)(j.L, {
            innerRef: d,
            onChange: ev,
            threshold: 0,
            children: (0, r.jsx)(f.vN, {
                children: (0, r.jsxs)(S.s, {
                    onClick: eB,
                    onContextMenu: eP,
                    onMouseEnter: ew,
                    onMouseLeave: eO,
                    className: c()(
                        ej,
                        { [ee.Zl]: !ec && 2 !== a, [ee.BN]: en, [en ? ee.Mn : ee.YF]: e_, [ee.Rc]: !eE },
                        o,
                    ),
                    ref: d,
                    "aria-label": M.name,
                    children: [
                        M.exclusive
                            ? (0, r.jsx)("div", { className: ee.fC, children: (0, r.jsx)(K.I, {}) })
                            : null != eT && (0, r.jsx)(A.Lp, { text: eT, disableColor: !0, className: ee.qS }),
                        (0, r.jsx)(ed, {
                            sku: M,
                            guildId: W,
                            isCardHovered: e_,
                            variant: a,
                            trackCardClick: eA,
                            analyticsLocations: ep,
                            analyticsContext: ex,
                        }),
                        null != eY
                            ? eE
                                ? (0, r.jsx)(Q.A, {
                                      containerClassName: ee.Vl,
                                      foregroundImageClassName: ee.wP,
                                      cardImage: eY,
                                      altText: M.name,
                                      shape: "custom",
                                      backgroundImageClassName: ee.GC,
                                      cardBackgroundImage: eI,
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
                        2 !== a
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("div", { className: ee.iZ, style: { background: eM } }),
                                      (0, r.jsx)(C.N, {
                                          theme: ea.NJ8.DARKER,
                                          children: (e) =>
                                              (0, r.jsxs)("div", {
                                                  className: c()(ee.zH, e),
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: c()(ee.gn, {
                                                              [ee.ov]: !(0, P.mC)(M),
                                                              [ee.w4]: eG,
                                                          }),
                                                          children: [
                                                              eE &&
                                                                  (0, r.jsx)("div", {
                                                                      className: ee.S1,
                                                                      children: (0, r.jsx)(J.V, {
                                                                          textColor: "always-white",
                                                                      }),
                                                                  }),
                                                              eE
                                                                  ? (0, r.jsxs)(r.Fragment, {
                                                                        children: [
                                                                            null != eN &&
                                                                                (0, r.jsx)("img", {
                                                                                    src: eN.toString(),
                                                                                    alt: ek,
                                                                                    className: ee.ye,
                                                                                }),
                                                                            (0, r.jsx)(R.E, {
                                                                                color: "always-white",
                                                                                variant: "text-md/medium",
                                                                                lineClamp: 1,
                                                                                children: M.name,
                                                                            }),
                                                                        ],
                                                                    })
                                                                  : (0, r.jsx)(el, {}),
                                                          ],
                                                      }),
                                                      (0, r.jsx)("div", {
                                                          className: ee.iQ,
                                                          children: eE ? eF : (0, r.jsx)(el, {}),
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
                                                  eg
                                                      ? (0, r.jsx)(E.$, {
                                                            variant: "primary",
                                                            onMouseDown: eL,
                                                            onClick: (e) => {
                                                                e.stopPropagation(),
                                                                    eA(er.bB.BUY_BUTTON),
                                                                    (0, q.a)(
                                                                        M,
                                                                        { isGift: !1 },
                                                                        {
                                                                            analyticsLocations: [
                                                                                ...ep,
                                                                                y.A
                                                                                    .SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                            ],
                                                                            guildId: W,
                                                                        },
                                                                    );
                                                            },
                                                            text:
                                                                null != eV
                                                                    ? ei.intl.format(ei.t.Xp5WTn, { price: eV })
                                                                    : ei.intl.string(ei.t.boqtTA),
                                                            fullWidth: !0,
                                                        })
                                                      : (0, r.jsx)(b.m, {
                                                            text: ei.intl.string(ei.t.IqlPbQ),
                                                            children: (0, r.jsx)(E.$, {
                                                                variant: "primary",
                                                                onClick: (e) => {
                                                                    e.stopPropagation(),
                                                                        eA(er.bB.VIEW_DETAILS_BUTTON),
                                                                        eH();
                                                                },
                                                                text: ei.intl.string(ei.t.KLBTgF),
                                                                fullWidth: !0,
                                                            }),
                                                        }),
                                                  (0, r.jsx)(Z.A, {
                                                      onGift: (e) => {
                                                          e.stopPropagation(),
                                                              eA(er.bB.GIFT_BUTTON),
                                                              (0, q.a)(
                                                                  M,
                                                                  { isGift: !0 },
                                                                  {
                                                                      analyticsLocations: [
                                                                          ...ep,
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
    return eW ? (0, r.jsxs)("div", { className: ee.ur, children: [ez, e$] }) : e$;
}
