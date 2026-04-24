a.d(l, { A: () => er, s: () => en });
var t,
    s = a(627968),
    n = a(64700),
    i = a(310784),
    r = a.n(i),
    o = a(503698),
    c = a.n(o),
    u = a(989349),
    d = a.n(u),
    m = a(318254),
    x = a(939249),
    p = a(366010),
    h = a(187322),
    C = a(638916),
    g = a(825484),
    j = a(821609),
    b = a(17928),
    _ = a(230109),
    f = a(990078),
    A = a(834730),
    N = a(890856),
    k = a(777666),
    v = a(442433),
    T = a(775602),
    E = a(793574),
    R = a(688810),
    M = a(713517),
    y = a(427209),
    I = a(723090),
    w = a(363195),
    L = a(253932),
    B = a(67480),
    S = a(954571),
    D = a(871123),
    O = a(733391),
    G = a(439303),
    F = a(832163),
    H = a(35826),
    U = a(310962),
    P = a(345938),
    W = a(99161),
    z = a(263911),
    $ = a(971146),
    q = a(366523),
    V = a(300182),
    Y = a(620999),
    Q = a(743693),
    K = a(696028),
    Z = a(914887),
    X = a(995393),
    J = a(652215),
    ee = a(985018),
    el = a(900719);
let ea = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    et = r()("#000000").darken(1.5).alpha(0.9).hex(),
    es = r()("#000000").alpha(0).hex();
var en = (((t = {})[(t.SMALL = 0)] = "SMALL"), (t[(t.MEDIUM = 1)] = "MEDIUM"), (t[(t.EMBEDDED = 2)] = "EMBEDDED"), t);
function ei(e) {
    let {
            guildId: l,
            sku: a,
            isCardHovered: t,
            trackCardClick: i,
            variant: r,
            analyticsLocations: o,
            analyticsContext: u,
        } = e,
        d = n.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != a &&
                        null != l &&
                        (i(X.bB.FORWARD_BUTTON),
                        (0, P.d)({
                            sku: a,
                            guildId: l,
                            analyticsContext: u,
                            analyticsLocations: o,
                            source: "social-layer-storefront-embed",
                        }));
            },
            [a, l, i, u, o],
        ),
        m = n.useCallback(() => {
            i(X.bB.WISHLIST_BUTTON);
        }, [i]),
        p = n.useMemo(() => c()(el.o, { [el.H5]: t }), [t]);
    return (0, s.jsxs)("div", {
        className: el.zu,
        children: [
            2 === r &&
                (0, s.jsx)(x.D, {
                    className: c()(p, el.gy),
                    onClick: d,
                    children: (0, s.jsx)(y.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, s.jsx)(Q._, {
                sku: a,
                isCardHovered: t,
                trackButtonClick: m,
                className: c()(p, el.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function er(e) {
    let { positionInSection: l, skuId: t, variant: i = 0, onClick: r, className: o, analyticsLocations: u } = e,
        x = n.useRef(null),
        y = n.useRef(null),
        P = (0, b.bG)([B.A], () => B.A.get(t)),
        { guildId: Q } = (0, D.nG)(P?.applicationId),
        en = (0, b.bG)([w.A], () => (0, p.M)(w.A.theme)),
        er = (0, b.bG)([T.A], () => T.A.useReducedMotion),
        eo = L.Q_.useSetting(),
        { isHoveringOrFocusing: ec } = (0, M.A)(x),
        eu = (0, G.jM)(),
        { analyticsLocations: ed } = (0, R.Ay)(u ?? []),
        em = n.useRef({ positionInSection: l, analyticsLocations: ed }),
        [ex, ep] = n.useState(!1),
        eh = (0, b.bG)([F.A], () => (null != t ? F.A.getNormalizedSKUEligibility(t) : void 0), [t]),
        eC = (0, U.A)(t, ex),
        eg = n.useCallback((e) => {
            ep(e);
        }, []),
        ej = n.useMemo(() => c()(el.Nr, { [el.ax]: 0 === i, [el.GW]: 1 === i, [el.jz]: 2 === i }), [i]),
        { handleCardHover: eb, handleCardUnhover: e_ } = (0, K.Z)(t, eu, l, ed),
        { handleCardVisibilityChange: ef } = (0, Z.a)(t, eu, l, ed);
    n.useEffect(() => {
        ef(ex);
    }, [ex]);
    let eA = n.useCallback(
            (e) => {
                let { analyticsLocations: l, positionInSection: a } = em.current,
                    {
                        sessionId: s,
                        guildId: n,
                        pageIndex: i,
                        pageTitle: r,
                        pageSection: o,
                        pageSectionTitle: c,
                        isUserGuildMember: u,
                        pageHasLeaderboard: d,
                    } = eu;
                S.default.track(J.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: s,
                    sku_id: t,
                    guild_id: n,
                    page_index: i,
                    page_title: r,
                    page_section: o,
                    page_section_title: c,
                    position_in_section: a,
                    is_user_guild_member: u,
                    page_has_leaderboard: d,
                    cta_type: e,
                    location_stack: l,
                });
            },
            [t, eu],
        ),
        { primaryIconAsset: eN, primaryIconLabel: ek } = n.useMemo(() => (0, D.Cv)(P, P?.applicationId), [P]),
        ev = (0, b.bG)([F.A], () => (null != Q ? (F.A.getStorefrontState(Q)?.activePage ?? 0) : 0)),
        eT = n.useMemo(() => {
            let e = P?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let l = d()(),
                a = Math.max(d()(e).diff(l, "days"), 1);
            return a <= 3 ? ee.intl.format(ee.t.PWw4Vp, { days: a }) : null;
        }, [P?.tenantMetadata?.socialLayer?.expiresAt]),
        eE = (0, D.xf)(P),
        eR = n.useMemo(() => {
            if (!eC) return "none";
            let [e, l] = ea[i];
            return `linear-gradient(to top, ${et} ${30 + e}%, ${es} ${30 + l}%)`;
        }, [i, eC]),
        eM = n.useCallback(() => {
            null != Q && (0, O.iR)(Q, t);
        }, [Q, t]),
        ey = n.useCallback(() => {
            eb(),
                null != Q &&
                    (y.current = setTimeout(() => {
                        (0, O.iR)(Q, t);
                    }, 1e3));
        }, [Q, t, eb]),
        eI = n.useCallback(() => {
            e_(), null != y.current && (clearTimeout(y.current), (y.current = null));
        }, [e_]);
    n.useEffect(
        () => () => {
            null != y.current && clearTimeout(y.current);
        },
        [],
    );
    let ew = n.useCallback(() => {
            null != Q && (0, H.A)({ guildId: Q, pageIndex: ev, skuId: t, slug: P?.slug });
        }, [Q, t, ev, P?.slug]),
        eL = n.useCallback(
            (e) => {
                (eA(X.bB.CARD), null != r && P?.applicationId != null)
                    ? r(e, { skuId: t, applicationId: P.applicationId })
                    : ew();
            },
            [eA, r, ew, t, P?.applicationId],
        ),
        eB = n.useCallback(
            (e) => {
                eo &&
                    (0, v.L3)(e, async () => {
                        let { default: e } = await a.e("97249").then(a.bind(a, 10680));
                        return (l) => (0, s.jsx)(e, { ...l, skuId: t });
                    });
            },
            [eo, t],
        ),
        {
            priceComponent: eS,
            extendedHeight: eD,
            displayPrice: eO,
        } = (function (e) {
            let { sku: l } = e,
                { normalPrice: a, discountedPrice: t, discountPercent: i } = (0, I.CD)({ sku: l }),
                r = t ?? a,
                o = n.useMemo(
                    () =>
                        null != l && null != l.orbsReward && l.orbsReward > 0
                            ? (0, s.jsx)("div", {
                                  className: el.pt,
                                  children: (0, s.jsx)(A.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: ee.intl.format(ee.t.GiVd2Q, {
                                          orbCount: l.orbsReward,
                                          orbIconHook: () =>
                                              (0, s.jsx)(m.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                      }),
                                  }),
                              })
                            : null,
                    [l],
                );
            return null != l && (0, D.mC)(l)
                ? null != i && null != t
                    ? {
                          priceComponent: (0, s.jsxs)("div", {
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: el.p6,
                                      children: [
                                          null != a &&
                                              (0, s.jsx)(A.E, {
                                                  className: el.of,
                                                  variant: "text-md/medium",
                                                  color: "text-muted",
                                                  lineClamp: 1,
                                                  children: a,
                                              }),
                                          (0, s.jsx)(A.E, {
                                              variant: "text-md/bold",
                                              color: "always-white",
                                              lineClamp: 1,
                                              children: t,
                                          }),
                                          (0, s.jsxs)(A.E, {
                                              variant: "text-md/bold",
                                              color: "text-feedback-positive",
                                              lineClamp: 1,
                                              children: ["(", i, ")"],
                                          }),
                                      ],
                                  }),
                                  o,
                              ],
                          }),
                          extendedHeight: null != o,
                          displayPrice: r,
                      }
                    : {
                          priceComponent: (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(A.E, {
                                      variant: "text-md/bold",
                                      color: "always-white",
                                      lineClamp: 1,
                                      children: a,
                                  }),
                                  o,
                              ],
                          }),
                          extendedHeight: !1,
                          displayPrice: r,
                      }
                : { priceComponent: null, extendedHeight: !1, displayPrice: r };
        })({ sku: P });
    if (null == P) return null;
    let eG = (0, D.fq)(P);
    return (0, s.jsx)(_.L, {
        innerRef: x,
        onChange: eg,
        threshold: 0,
        children: (0, s.jsx)(h.vN, {
            children: (0, s.jsxs)(N.s, {
                onClick: eL,
                onContextMenu: eB,
                onMouseEnter: ey,
                onMouseLeave: eI,
                className: c()(ej, { [el.Zl]: !er && 2 !== i, [el.BN]: en, [en ? el.Mn : el.YF]: ec, [el.Rc]: !eC }, o),
                ref: x,
                "aria-label": P.name,
                children: [
                    P.exclusive
                        ? (0, s.jsx)("div", { className: el.fC, children: (0, s.jsx)(z.I, {}) })
                        : null != eT && (0, s.jsx)(k.Lp, { text: eT, disableColor: !0, className: el.qS }),
                    (0, s.jsx)(ei, {
                        guildId: Q,
                        sku: P,
                        isCardHovered: ec,
                        variant: i,
                        trackCardClick: eA,
                        analyticsLocations: ed,
                        analyticsContext: eu,
                    }),
                    null != eG
                        ? eC
                            ? (0, s.jsx)(q.A, {
                                  containerClassName: el.Vl,
                                  foregroundImageClassName: el.wP,
                                  cardImage: eG,
                                  altText: P.name,
                                  shape: "custom",
                                  backgroundImageClassName: el.GC,
                                  cardBackgroundImage: eE,
                              })
                            : (0, s.jsx)(Y.t, {})
                        : (0, s.jsx)("div", {
                              className: el.t7,
                              children: (0, s.jsx)(C.q, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: el.Cw,
                              }),
                          }),
                    2 !== i
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)("div", { className: el.iZ, style: { background: eR } }),
                                  (0, s.jsxs)("div", {
                                      className: el.zH,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: c()(el.gn, { [el.ov]: !(0, D.mC)(P), [el.w4]: eD }),
                                              children: [
                                                  eC &&
                                                      (0, s.jsx)("div", {
                                                          className: el.S1,
                                                          children: (0, s.jsx)($.V, { textColor: "always-white" }),
                                                      }),
                                                  eC
                                                      ? (0, s.jsxs)(s.Fragment, {
                                                            children: [
                                                                null != eN &&
                                                                    (0, s.jsx)("img", {
                                                                        src: eN.toString(),
                                                                        alt: ek,
                                                                        className: el.ye,
                                                                    }),
                                                                (0, s.jsx)(A.E, {
                                                                    color: "always-white",
                                                                    variant: "text-md/medium",
                                                                    lineClamp: 1,
                                                                    children: P.name,
                                                                }),
                                                            ],
                                                        })
                                                      : (0, s.jsx)(Y.r, {}),
                                              ],
                                          }),
                                          (0, s.jsx)("div", {
                                              className: el.iQ,
                                              children: eC ? eS : (0, s.jsx)(Y.r, {}),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)("div", {
                                      className: el.li,
                                      children: (0, s.jsxs)(g.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              eh
                                                  ? (0, s.jsx)(j.$, {
                                                        variant: "primary",
                                                        onMouseDown: eM,
                                                        onClick: (e) => {
                                                            e.stopPropagation(),
                                                                eA(X.bB.BUY_BUTTON),
                                                                (0, W.a)(
                                                                    P,
                                                                    { isGift: !1 },
                                                                    {
                                                                        analyticsLocations: [
                                                                            ...ed,
                                                                            E.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                        ],
                                                                        guildId: Q,
                                                                    },
                                                                );
                                                        },
                                                        text:
                                                            null != eO
                                                                ? ee.intl.format(ee.t.Xp5WTn, { price: eO })
                                                                : ee.intl.string(ee.t.boqtTA),
                                                        fullWidth: !0,
                                                    })
                                                  : (0, s.jsx)(f.m, {
                                                        text: ee.intl.string(ee.t.IqlPbQ),
                                                        children: (0, s.jsx)(j.$, {
                                                            variant: "primary",
                                                            onClick: (e) => {
                                                                e.stopPropagation(), eA(X.bB.VIEW_DETAILS_BUTTON), ew();
                                                            },
                                                            text: ee.intl.string(ee.t.KLBTgF),
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                              (0, s.jsx)(V.A, {
                                                  onGift: (e) => {
                                                      e.stopPropagation(),
                                                          eA(X.bB.GIFT_BUTTON),
                                                          (0, W.a)(
                                                              P,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...ed,
                                                                      E.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
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
