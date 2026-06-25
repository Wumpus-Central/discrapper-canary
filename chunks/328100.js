l.d(t, { s: () => ef, A: () => eh });
var a,
    r,
    n = l(627968),
    i = l(64700),
    s = l(310784),
    o = l.n(s),
    c = l(503698),
    u = l.n(c),
    d = l(989349),
    m = l.n(d),
    x = l(318254),
    p = l(939249),
    _ = l(366010),
    f = l(821609),
    C = l(187322),
    h = l(638916),
    g = l(43990),
    E = l(825484),
    b = l(17928),
    v = l(269115),
    j = l(990078),
    N = l(834730),
    k = l(890856),
    A = l(812993),
    R = l(442433),
    S = l(775602),
    y = l(793574),
    I = l(688810),
    T = l(429913),
    M = l(713517),
    H = l(427209),
    L = l(976860),
    w = l(117218),
    O = l(363195),
    D = l(885386),
    P = l(652165),
    B = l(67480),
    G = l(174459),
    F = l(871123),
    U = l(733391),
    V = l(439303),
    W = l(353281),
    Y = l(832163),
    z = l(945810),
    K =
        (((a = {}).CONTROL = "control"),
        (a.EXPRESSIVE_HOVER = "expressive_hover"),
        (a.ALWAYS_EXPRESSIVE = "always_expressive"),
        a);
let $ = (0, z.mj)({
    name: "2026-05-slayer-storefront-exclusive-expressive-flair",
    kind: "user",
    defaultConfig: { treatment: "control" },
    variations: {
        0: { treatment: "control" },
        1: { treatment: "expressive_hover" },
        2: { treatment: "always_expressive" },
    },
});
var q = l(69236),
    Q = l(654107),
    X = l(31969),
    J = l(345938),
    Z = l(510022),
    ee = l(533406),
    et = l(263911),
    el = l(971146),
    ea = l(366523),
    er = l(300182),
    en = l(809583);
function ei() {
    let [e] = i.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, n.jsx)("div", { className: u()(en.Vl, en.Yf), style: { animationDelay: `${e}s` } });
}
function es() {
    let [e] = i.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, n.jsx)("div", { className: en.RC, style: { width: `${e}%` } });
}
var eo = l(533772),
    ec = l(743693),
    eu = l(652215),
    ed = l(995393),
    em = l(375708);
let ex = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    ep = o()("#000000").darken(1.5).alpha(0.9).hex(),
    e_ = o()("#000000").alpha(0).hex();
var ef = (((r = {})[(r.SMALL = 0)] = "SMALL"), (r[(r.MEDIUM = 1)] = "MEDIUM"), (r[(r.EMBEDDED = 2)] = "EMBEDDED"), r);
function eC(e) {
    let {
            guildId: t,
            sku: l,
            isCardHovered: a,
            trackCardClick: r,
            variant: s,
            analyticsLocations: o,
            analyticsContext: c,
        } = e,
        d = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != l &&
                        (r(ed.bB.FORWARD_BUTTON),
                        (0, J.d)({
                            sku: l,
                            guildId: t,
                            analyticsContext: c,
                            analyticsLocations: o,
                            source: "social-layer-storefront-embed",
                        }));
            },
            [l, t, r, c, o],
        ),
        m = i.useCallback(() => {
            r(ed.bB.WISHLIST_BUTTON);
        }, [r]),
        x = i.useMemo(() => u()(en.o, { [en.H5]: a }), [a]);
    return (0, n.jsxs)("div", {
        className: en.zu,
        children: [
            2 === s &&
                (0, n.jsx)(p.D, {
                    className: u()(x, en.gy),
                    onClick: d,
                    children: (0, n.jsx)(H.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, n.jsx)(ec._, {
                sku: l,
                isCardHovered: a,
                trackButtonClick: m,
                className: u()(x, en.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function eh(e) {
    let { positionInSection: t, skuId: a, variant: r = 0, onClick: s, className: o, analyticsLocations: c } = e,
        d = i.useRef(null),
        p = i.useRef(null),
        H = (0, b.bG)([B.A], () => B.A.get(a)),
        { guildId: z } = (0, F.nG)(H?.applicationId),
        J = H?.applicationId,
        ec = (0, b.bG)([O.A], () => (0, _.M)(O.A.theme)),
        ef = (0, b.bG)([S.Ay], () => S.Ay.useReducedMotion),
        eh = D.Q_.useSetting(),
        { isHoveringOrFocusing: eg } = (0, M.A)(d),
        eE = (0, V.jM)(),
        { analyticsLocations: eb } = (0, I.Ay)(c ?? []),
        ev = i.useRef({ positionInSection: t, analyticsLocations: eb }),
        [ej, eN] = i.useState(!1),
        ek = (0, b.bG)([Y.A], () => (null != a ? Y.A.getNormalizedSKUEligibility(a) : void 0), [a]),
        eA = (function (e, t) {
            let l = (0, b.bG)([B.A], () => B.A.get(e)),
                [a, r] = i.useState(!1),
                [n, s] = i.useState(!1),
                o = i.useMemo(() => (0, F.xf)(l), [l]),
                c = i.useMemo(() => (0, F.fq)(l), [l]);
            return (
                i.useEffect(() => {
                    if (l?.id == null || a || !t) return;
                    if (null == c) return void r(!0);
                    let e = new Image();
                    return (
                        (e.src = c.toString()),
                        (e.onload = () => {
                            r(!0);
                        }),
                        (e.onerror = () => {
                            r(!0);
                        }),
                        () => {
                            (e.onerror = null), (e.onload = null), (e.src = "");
                        }
                    );
                }, [c, t, a, l?.id]),
                i.useEffect(() => {
                    if (l?.id == null || n || !t) return;
                    if (null == o) return void s(!0);
                    let e = !0;
                    return (
                        (0, Q.l0)(o.toString()).finally(() => {
                            e && s(!0);
                        }),
                        () => {
                            e = !1;
                        }
                    );
                }, [n, o, t, l?.id]),
                i.useMemo(() => a && n, [a, n])
            );
        })(a, ej),
        eR = (0, w.JL)({ sku: H }),
        eS = eR?.amount,
        ey = (0, q.o)({ orbPriceAmount: eS, applicationId: J, location: "social_layer_storefront_card" }),
        eI = (0, T.h)(H?.applicationId),
        eT = i.useCallback((e) => {
            eN(e);
        }, []),
        eM = i.useMemo(() => u()(en.Nr, { [en.ax]: 0 === r, [en.GW]: 1 === r, [en.jz]: 2 === r }), [r]),
        { handleCardHover: eH, handleCardUnhover: eL } = (function (e) {
            let {
                    skuId: t,
                    applicationId: l,
                    guildId: a,
                    analyticsContext: r,
                    positionInSection: n,
                    analyticsLocations: s,
                } = e,
                o = i.useRef(!1),
                c = i.useRef(r),
                u = i.useRef({ positionInSection: n, analyticsLocations: s });
            return (
                i.useEffect(() => {
                    c.current = r;
                }, [r]),
                {
                    handleCardHover: i.useCallback(() => {
                        if (!o.current) {
                            let {
                                    sessionId: e,
                                    guildId: r,
                                    applicationId: n,
                                    pageIndex: i,
                                    pageTitle: s,
                                    pageSection: d,
                                    pageSectionTitle: m,
                                    isUserGuildMember: x,
                                    pageHasLeaderboard: p,
                                } = c.current,
                                { positionInSection: _, analyticsLocations: f } = u.current;
                            G.default.track(eu.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                                slayer_storefront_session_id: e,
                                sku_id: t,
                                guild_id: a ?? r,
                                application_id: l ?? n,
                                page_index: i,
                                page_title: s,
                                page_section: d,
                                page_section_title: m,
                                position_in_section: _,
                                is_user_guild_member: x,
                                page_has_leaderboard: p,
                                location_stack: f,
                            }),
                                (o.current = !0);
                        }
                    }, [t, l, a]),
                    handleCardUnhover: i.useCallback(() => {
                        o.current = !1;
                    }, []),
                }
            );
        })({
            skuId: a,
            applicationId: J,
            guildId: z,
            analyticsContext: eE,
            positionInSection: t,
            analyticsLocations: eb,
        }),
        { handleCardVisibilityChange: ew } = (function (e) {
            let {
                    skuId: t,
                    applicationId: l,
                    guildId: a,
                    analyticsContext: r,
                    positionInSection: n,
                    analyticsLocations: s,
                } = e,
                o = i.useRef(null),
                c = i.useRef(r),
                u = i.useRef({ positionInSection: n, analyticsLocations: s });
            i.useEffect(() => {
                c.current = r;
            }, [r]);
            let d = i.useCallback(() => {
                    let {
                            sessionId: e,
                            guildId: r,
                            applicationId: n,
                            pageIndex: i,
                            pageTitle: s,
                            pageSection: o,
                            pageSectionTitle: d,
                            isUserGuildMember: m,
                            pageHasLeaderboard: x,
                        } = c.current,
                        { positionInSection: p, analyticsLocations: _ } = u.current;
                    G.default.track(eu.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                        slayer_storefront_session_id: e,
                        sku_id: t,
                        guild_id: a ?? r,
                        application_id: l ?? n,
                        page_index: i,
                        page_title: s,
                        page_section: o,
                        page_section_title: d,
                        position_in_section: p,
                        is_user_guild_member: m,
                        page_has_leaderboard: x,
                        location_stack: _,
                    });
                }, [t, l, a]),
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
            skuId: a,
            applicationId: J,
            guildId: z,
            analyticsContext: eE,
            positionInSection: t,
            analyticsLocations: eb,
        });
    i.useEffect(() => {
        ew(ej);
    }, [ej]);
    let eO = i.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: l } = ev.current,
                    {
                        sessionId: r,
                        guildId: n,
                        applicationId: i,
                        pageIndex: s,
                        pageTitle: o,
                        pageSection: c,
                        pageSectionTitle: u,
                        isUserGuildMember: d,
                        pageHasLeaderboard: m,
                    } = eE;
                G.default.track(eu.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: r,
                    sku_id: a,
                    guild_id: z ?? n,
                    application_id: J ?? i,
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
            [a, J, z, eE],
        ),
        { primaryIconAsset: eD, primaryIconLabel: eP } = i.useMemo(() => (0, F.Cv)(H, J), [H, J]),
        eB = (0, b.bG)([Y.A], () => Y.A.getStorefrontState(J)?.activePage ?? 0),
        eG = i.useMemo(() => {
            let e = H?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let t = m()(),
                l = Math.max(m()(e).diff(t, "days"), 1);
            return l <= 3 ? em.intl.format(em.t.PWw4Vp, { days: l }) : null;
        }, [H?.tenantMetadata?.socialLayer?.expiresAt]),
        eF = (0, F.xf)(H),
        eU = i.useMemo(() => {
            if (!eA) return "none";
            let [e, t] = ex[r];
            return `linear-gradient(to top, ${ep} ${30 + e}%, ${e_} ${30 + t}%)`;
        }, [r, eA]),
        eV = i.useCallback(() => {
            null != J && (0, U.iR)(J, a);
        }, [J, a]),
        eW = i.useCallback(() => {
            eH(),
                null != J &&
                    (p.current = setTimeout(() => {
                        (0, U.iR)(J, a);
                    }, 1e3));
        }, [J, a, eH]),
        eY = i.useCallback(() => {
            eL(), null != p.current && (clearTimeout(p.current), (p.current = null));
        }, [eL]);
    i.useEffect(
        () => () => {
            null != p.current && clearTimeout(p.current);
        },
        [],
    );
    let { getSocialLayerStorefrontLink: ez } = (0, W.H)(),
        eK = i.useCallback(() => {
            null != J && null != ez && (0, L.bG)(ez(eB, a, H?.slug));
        }, [J, a, eB, H?.slug, ez]),
        e$ = i.useCallback(
            (e) => {
                (eO(ed.bB.CARD), null != s && H?.applicationId != null)
                    ? s(e, { skuId: a, applicationId: H.applicationId })
                    : eK();
            },
            [eO, s, eK, a, H?.applicationId],
        ),
        eq = i.useCallback(
            (e) => {
                eh &&
                    (0, R.L3)(e, async () => {
                        let { default: e } = await l.e("97249").then(l.bind(l, 10680));
                        return (t) => (0, n.jsx)(e, { ...t, skuId: a });
                    });
            },
            [eh, a],
        ),
        eQ = i.useMemo(() => [...eb, y.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [eb]),
        eX = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != eI &&
                        (eO(ed.bB.BUY_WITH_ORBS_BUTTON),
                        (0, P.B4)({
                            skuId: a,
                            applicationId: eI.id,
                            onComplete: () => {
                                null != eI &&
                                    null != H &&
                                    (0, Z.n)({ sku: H, application: eI, analyticsLocations: eQ });
                            },
                            analyticsLocations: eQ,
                        }));
            },
            [H, eI, a, eO, eQ],
        ),
        eJ = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != H &&
                        (eO(ed.bB.BUY_BUTTON), (0, ee.a)(H, { isGift: !1 }, { analyticsLocations: eQ, guildId: z }));
            },
            [H, z, eO, eQ],
        ),
        {
            priceComponent: eZ,
            extendedHeight: e0,
            displayPrice: e1,
        } = (function (e) {
            let { sku: t, orbsGate: l, orbPriceAmount: a, promotion: r } = e,
                { normalPrice: s, discountedPrice: o, discountPercent: c, userPrice: u } = (0, w.CD)({ sku: t }),
                d = i.useMemo(() => {
                    let e = r?.rewardValue;
                    return null == e || e <= 0
                        ? null
                        : (0, n.jsx)("div", {
                              className: en.pt,
                              children: (0, n.jsx)(N.E, {
                                  variant: "text-sm/semibold",
                                  color: "currentColor",
                                  children: em.intl.format(em.t.GiVd2Q, {
                                      orbCount: e,
                                      orbIconHook: () =>
                                          (0, n.jsx)(x.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                  }),
                              }),
                          });
                }, [r]);
            return null != t && (0, F.mC)(t)
                ? "HIDDEN" !== l && null != a
                    ? {
                          priceComponent: (0, n.jsx)(eo.A, {
                              orbsGate: l,
                              className: en.p6,
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
                                        className: en.p6,
                                        children: [
                                            null != s &&
                                                (0, n.jsx)(N.E, {
                                                    className: en.of,
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
        })({ sku: H, orbsGate: ey, orbPriceAmount: eS, promotion: (0, X.F)("card", { applicationId: J, skuId: a }) }),
        e3 = (function (e) {
            let { location: t } = e;
            return $.useConfig({ location: t }).treatment;
        })({ location: "social_layer_storefront_card" }),
        e2 = H?.exclusive === !0 && 2 !== r && (e3 === K.EXPRESSIVE_HOVER || e3 === K.ALWAYS_EXPRESSIVE),
        e8 = i.useMemo(
            () =>
                "CAN_CHECKOUT" === ey
                    ? (0, n.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: eV,
                          onClick: eX,
                          "aria-label": em.intl.formatToPlainString(em.t.yi41qQ, { orbPrice: eS }),
                          text: em.intl.format(em.t.JC15qj, {
                              orbPrice: eS,
                              orbIconHook: () =>
                                  (0, n.jsx)(x.C, { className: en.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                          fullWidth: !0,
                      })
                    : (0, n.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: eV,
                          onClick: eJ,
                          text: null != e1 ? em.intl.format(em.t.Xp5WTn, { price: e1 }) : em.intl.string(em.t.boqtTA),
                          fullWidth: !0,
                      }),
            [ey, eX, eJ, eV, eS, e1],
        );
    if (null == H) return null;
    let e9 = (0, F.fq)(H),
        e7 = e2
            ? (0, n.jsx)("div", {
                  className: u()(en.mN, { [en.Oj]: e3 === K.ALWAYS_EXPRESSIVE, [en.T_]: e3 === K.EXPRESSIVE_HOVER }),
                  "aria-hidden": !0,
              })
            : null,
        e6 = (0, n.jsx)(v.L, {
            innerRef: d,
            onChange: eT,
            threshold: 0,
            children: (0, n.jsx)(C.vN, {
                children: (0, n.jsxs)(k.s, {
                    onClick: e$,
                    onContextMenu: eq,
                    onMouseEnter: eW,
                    onMouseLeave: eY,
                    className: u()(
                        eM,
                        { [en.Zl]: !ef && 2 !== r, [en.BN]: ec, [ec ? en.Mn : en.YF]: eg, [en.Rc]: !eA },
                        o,
                    ),
                    ref: d,
                    "aria-label": H.name,
                    children: [
                        H.exclusive
                            ? (0, n.jsx)("div", { className: en.fC, children: (0, n.jsx)(et.I, {}) })
                            : null != eG && (0, n.jsx)(A.Lp, { text: eG, disableColor: !0, className: en.qS }),
                        (0, n.jsx)(eC, {
                            sku: H,
                            guildId: z,
                            isCardHovered: eg,
                            variant: r,
                            trackCardClick: eO,
                            analyticsLocations: eb,
                            analyticsContext: eE,
                        }),
                        null != e9
                            ? eA
                                ? (0, n.jsx)(ea.A, {
                                      containerClassName: en.Vl,
                                      foregroundImageClassName: en.wP,
                                      cardImage: e9,
                                      altText: H.name,
                                      shape: "custom",
                                      backgroundImageClassName: en.GC,
                                      cardBackgroundImage: eF,
                                      cssPosition: "absolute",
                                  })
                                : (0, n.jsx)(ei, {})
                            : (0, n.jsx)("div", {
                                  className: en.t7,
                                  children: (0, n.jsx)(h.q, {
                                      color: "white",
                                      size: "custom",
                                      height: 80,
                                      width: 80,
                                      className: en.Cw,
                                  }),
                              }),
                        2 !== r
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)("div", { className: en.iZ, style: { background: eU } }),
                                      (0, n.jsx)(g.N, {
                                          theme: eu.NJ8.DARKER,
                                          children: (e) =>
                                              (0, n.jsxs)("div", {
                                                  className: u()(en.zH, e),
                                                  children: [
                                                      (0, n.jsxs)("div", {
                                                          className: u()(en.gn, {
                                                              [en.ov]: !(0, F.mC)(H),
                                                              [en.w4]: e0,
                                                          }),
                                                          children: [
                                                              eA &&
                                                                  (0, n.jsx)("div", {
                                                                      className: en.S1,
                                                                      children: (0, n.jsx)(el.V, {
                                                                          textColor: "always-white",
                                                                      }),
                                                                  }),
                                                              eA
                                                                  ? (0, n.jsxs)(n.Fragment, {
                                                                        children: [
                                                                            null != eD &&
                                                                                (0, n.jsx)("img", {
                                                                                    src: eD.toString(),
                                                                                    alt: eP,
                                                                                    className: en.ye,
                                                                                }),
                                                                            (0, n.jsx)(N.E, {
                                                                                color: "always-white",
                                                                                variant: "text-md/medium",
                                                                                lineClamp: 1,
                                                                                children: H.name,
                                                                            }),
                                                                        ],
                                                                    })
                                                                  : (0, n.jsx)(es, {}),
                                                          ],
                                                      }),
                                                      (0, n.jsx)("div", {
                                                          className: en.iQ,
                                                          children: eA ? eZ : (0, n.jsx)(es, {}),
                                                      }),
                                                  ],
                                              }),
                                      }),
                                      (0, n.jsx)("div", {
                                          className: en.li,
                                          children: (0, n.jsxs)(E.e, {
                                              wrap: !1,
                                              fullWidth: !0,
                                              children: [
                                                  ek
                                                      ? e8
                                                      : (0, n.jsx)(j.m, {
                                                            text: em.intl.string(em.t.IqlPbQ),
                                                            children: (0, n.jsx)(f.$, {
                                                                variant: "primary",
                                                                onClick: (e) => {
                                                                    e.stopPropagation(),
                                                                        eO(ed.bB.VIEW_DETAILS_BUTTON),
                                                                        eK();
                                                                },
                                                                text: em.intl.string(em.t.KLBTgF),
                                                                fullWidth: !0,
                                                            }),
                                                        }),
                                                  (0, n.jsx)(er.A, {
                                                      onGift: (e) => {
                                                          e.stopPropagation(),
                                                              eO(ed.bB.GIFT_BUTTON),
                                                              (0, ee.a)(
                                                                  H,
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
    return e2 ? (0, n.jsxs)("div", { className: en.ur, children: [e7, e6] }) : e6;
}
