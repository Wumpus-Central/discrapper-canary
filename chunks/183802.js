a.d(l, { A: () => eo, s: () => ei });
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
    g = a(43990),
    j = a(825484),
    b = a(821609),
    _ = a(17928),
    f = a(230109),
    N = a(990078),
    A = a(834730),
    k = a(890856),
    v = a(777666),
    E = a(442433),
    T = a(775602),
    R = a(793574),
    M = a(688810),
    y = a(713517),
    I = a(427209),
    w = a(723090),
    L = a(363195),
    B = a(253932),
    S = a(67480),
    D = a(954571),
    O = a(871123),
    G = a(733391),
    F = a(439303),
    H = a(832163),
    U = a(35826),
    P = a(310962),
    W = a(345938),
    z = a(533406),
    $ = a(263911),
    q = a(971146),
    V = a(366523),
    Y = a(300182),
    K = a(620999),
    Q = a(743693),
    Z = a(696028),
    J = a(914887),
    X = a(995393),
    ee = a(652215),
    el = a(985018),
    ea = a(900719);
let et = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    es = r()("#000000").darken(1.5).alpha(0.9).hex(),
    en = r()("#000000").alpha(0).hex();
var ei = (((t = {})[(t.SMALL = 0)] = "SMALL"), (t[(t.MEDIUM = 1)] = "MEDIUM"), (t[(t.EMBEDDED = 2)] = "EMBEDDED"), t);
function er(e) {
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
                        (0, W.d)({
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
        p = n.useMemo(() => c()(ea.o, { [ea.H5]: t }), [t]);
    return (0, s.jsxs)("div", {
        className: ea.zu,
        children: [
            2 === r &&
                (0, s.jsx)(x.D, {
                    className: c()(p, ea.gy),
                    onClick: d,
                    children: (0, s.jsx)(I.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, s.jsx)(Q._, {
                sku: a,
                isCardHovered: t,
                trackButtonClick: m,
                className: c()(p, ea.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function eo(e) {
    let { positionInSection: l, skuId: t, variant: i = 0, onClick: r, className: o, analyticsLocations: u } = e,
        x = n.useRef(null),
        I = n.useRef(null),
        W = (0, _.bG)([S.A], () => S.A.get(t)),
        { guildId: Q } = (0, O.nG)(W?.applicationId),
        ei = (0, _.bG)([L.A], () => (0, p.M)(L.A.theme)),
        eo = (0, _.bG)([T.A], () => T.A.useReducedMotion),
        ec = B.Q_.useSetting(),
        { isHoveringOrFocusing: eu } = (0, y.A)(x),
        ed = (0, F.jM)(),
        { analyticsLocations: em } = (0, M.Ay)(u ?? []),
        ex = n.useRef({ positionInSection: l, analyticsLocations: em }),
        [ep, eh] = n.useState(!1),
        eC = (0, _.bG)([H.A], () => (null != t ? H.A.getNormalizedSKUEligibility(t) : void 0), [t]),
        eg = (0, P.A)(t, ep),
        ej = n.useCallback((e) => {
            eh(e);
        }, []),
        eb = n.useMemo(() => c()(ea.Nr, { [ea.ax]: 0 === i, [ea.GW]: 1 === i, [ea.jz]: 2 === i }), [i]),
        { handleCardHover: e_, handleCardUnhover: ef } = (0, Z.Z)(t, ed, l, em),
        { handleCardVisibilityChange: eN } = (0, J.a)(t, ed, l, em);
    n.useEffect(() => {
        eN(ep);
    }, [ep]);
    let eA = n.useCallback(
            (e) => {
                let { analyticsLocations: l, positionInSection: a } = ex.current,
                    {
                        sessionId: s,
                        guildId: n,
                        pageIndex: i,
                        pageTitle: r,
                        pageSection: o,
                        pageSectionTitle: c,
                        isUserGuildMember: u,
                        pageHasLeaderboard: d,
                    } = ed;
                D.default.track(ee.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
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
            [t, ed],
        ),
        { primaryIconAsset: ek, primaryIconLabel: ev } = n.useMemo(() => (0, O.Cv)(W, W?.applicationId), [W]),
        eE = (0, _.bG)([H.A], () => (null != Q ? (H.A.getStorefrontState(Q)?.activePage ?? 0) : 0)),
        eT = n.useMemo(() => {
            let e = W?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let l = d()(),
                a = Math.max(d()(e).diff(l, "days"), 1);
            return a <= 3 ? el.intl.format(el.t.PWw4Vp, { days: a }) : null;
        }, [W?.tenantMetadata?.socialLayer?.expiresAt]),
        eR = (0, O.xf)(W),
        eM = n.useMemo(() => {
            if (!eg) return "none";
            let [e, l] = et[i];
            return `linear-gradient(to top, ${es} ${30 + e}%, ${en} ${30 + l}%)`;
        }, [i, eg]),
        ey = n.useCallback(() => {
            null != Q && (0, G.iR)(Q, t);
        }, [Q, t]),
        eI = n.useCallback(() => {
            e_(),
                null != Q &&
                    (I.current = setTimeout(() => {
                        (0, G.iR)(Q, t);
                    }, 1e3));
        }, [Q, t, e_]),
        ew = n.useCallback(() => {
            ef(), null != I.current && (clearTimeout(I.current), (I.current = null));
        }, [ef]);
    n.useEffect(
        () => () => {
            null != I.current && clearTimeout(I.current);
        },
        [],
    );
    let eL = n.useCallback(() => {
            null != Q && (0, U.A)({ guildId: Q, pageIndex: eE, skuId: t, slug: W?.slug });
        }, [Q, t, eE, W?.slug]),
        eB = n.useCallback(
            (e) => {
                (eA(X.bB.CARD), null != r && W?.applicationId != null)
                    ? r(e, { skuId: t, applicationId: W.applicationId })
                    : eL();
            },
            [eA, r, eL, t, W?.applicationId],
        ),
        eS = n.useCallback(
            (e) => {
                ec &&
                    (0, E.L3)(e, async () => {
                        let { default: e } = await a.e("97249").then(a.bind(a, 10680));
                        return (l) => (0, s.jsx)(e, { ...l, skuId: t });
                    });
            },
            [ec, t],
        ),
        {
            priceComponent: eD,
            extendedHeight: eO,
            displayPrice: eG,
        } = (function (e) {
            let { sku: l } = e,
                { normalPrice: a, discountedPrice: t, discountPercent: i } = (0, w.CD)({ sku: l }),
                r = t ?? a,
                o = n.useMemo(
                    () =>
                        null != l && null != l.orbsReward && l.orbsReward > 0
                            ? (0, s.jsx)("div", {
                                  className: ea.pt,
                                  children: (0, s.jsx)(A.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: el.intl.format(el.t.GiVd2Q, {
                                          orbCount: l.orbsReward,
                                          orbIconHook: () =>
                                              (0, s.jsx)(m.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                      }),
                                  }),
                              })
                            : null,
                    [l],
                );
            return null != l && (0, O.mC)(l)
                ? null != i && null != t
                    ? {
                          priceComponent: (0, s.jsxs)("div", {
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: ea.p6,
                                      children: [
                                          null != a &&
                                              (0, s.jsx)(A.E, {
                                                  className: ea.of,
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
        })({ sku: W });
    if (null == W) return null;
    let eF = (0, O.fq)(W);
    return (0, s.jsx)(f.L, {
        innerRef: x,
        onChange: ej,
        threshold: 0,
        children: (0, s.jsx)(h.vN, {
            children: (0, s.jsxs)(k.s, {
                onClick: eB,
                onContextMenu: eS,
                onMouseEnter: eI,
                onMouseLeave: ew,
                className: c()(eb, { [ea.Zl]: !eo && 2 !== i, [ea.BN]: ei, [ei ? ea.Mn : ea.YF]: eu, [ea.Rc]: !eg }, o),
                ref: x,
                "aria-label": W.name,
                children: [
                    W.exclusive
                        ? (0, s.jsx)("div", { className: ea.fC, children: (0, s.jsx)($.I, {}) })
                        : null != eT && (0, s.jsx)(v.Lp, { text: eT, disableColor: !0, className: ea.qS }),
                    (0, s.jsx)(er, {
                        guildId: Q,
                        sku: W,
                        isCardHovered: eu,
                        variant: i,
                        trackCardClick: eA,
                        analyticsLocations: em,
                        analyticsContext: ed,
                    }),
                    null != eF
                        ? eg
                            ? (0, s.jsx)(V.A, {
                                  containerClassName: ea.Vl,
                                  foregroundImageClassName: ea.wP,
                                  cardImage: eF,
                                  altText: W.name,
                                  shape: "custom",
                                  backgroundImageClassName: ea.GC,
                                  cardBackgroundImage: eR,
                                  cssPosition: "absolute",
                              })
                            : (0, s.jsx)(K.t, {})
                        : (0, s.jsx)("div", {
                              className: ea.t7,
                              children: (0, s.jsx)(C.q, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: ea.Cw,
                              }),
                          }),
                    2 !== i
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)("div", { className: ea.iZ, style: { background: eM } }),
                                  (0, s.jsx)(g.N, {
                                      theme: ee.NJ8.DARKER,
                                      children: (e) =>
                                          (0, s.jsxs)("div", {
                                              className: c()(ea.zH, e),
                                              children: [
                                                  (0, s.jsxs)("div", {
                                                      className: c()(ea.gn, { [ea.ov]: !(0, O.mC)(W), [ea.w4]: eO }),
                                                      children: [
                                                          eg &&
                                                              (0, s.jsx)("div", {
                                                                  className: ea.S1,
                                                                  children: (0, s.jsx)(q.V, {
                                                                      textColor: "always-white",
                                                                  }),
                                                              }),
                                                          eg
                                                              ? (0, s.jsxs)(s.Fragment, {
                                                                    children: [
                                                                        null != ek &&
                                                                            (0, s.jsx)("img", {
                                                                                src: ek.toString(),
                                                                                alt: ev,
                                                                                className: ea.ye,
                                                                            }),
                                                                        (0, s.jsx)(A.E, {
                                                                            color: "always-white",
                                                                            variant: "text-md/medium",
                                                                            lineClamp: 1,
                                                                            children: W.name,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, s.jsx)(K.r, {}),
                                                      ],
                                                  }),
                                                  (0, s.jsx)("div", {
                                                      className: ea.iQ,
                                                      children: eg ? eD : (0, s.jsx)(K.r, {}),
                                                  }),
                                              ],
                                          }),
                                  }),
                                  (0, s.jsx)("div", {
                                      className: ea.li,
                                      children: (0, s.jsxs)(j.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              eC
                                                  ? (0, s.jsx)(b.$, {
                                                        variant: "primary",
                                                        onMouseDown: ey,
                                                        onClick: (e) => {
                                                            e.stopPropagation(),
                                                                eA(X.bB.BUY_BUTTON),
                                                                (0, z.a)(
                                                                    W,
                                                                    { isGift: !1 },
                                                                    {
                                                                        analyticsLocations: [
                                                                            ...em,
                                                                            R.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                        ],
                                                                        guildId: Q,
                                                                    },
                                                                );
                                                        },
                                                        text:
                                                            null != eG
                                                                ? el.intl.format(el.t.Xp5WTn, { price: eG })
                                                                : el.intl.string(el.t.boqtTA),
                                                        fullWidth: !0,
                                                    })
                                                  : (0, s.jsx)(N.m, {
                                                        text: el.intl.string(el.t.IqlPbQ),
                                                        children: (0, s.jsx)(b.$, {
                                                            variant: "primary",
                                                            onClick: (e) => {
                                                                e.stopPropagation(), eA(X.bB.VIEW_DETAILS_BUTTON), eL();
                                                            },
                                                            text: el.intl.string(el.t.KLBTgF),
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                              (0, s.jsx)(Y.A, {
                                                  onGift: (e) => {
                                                      e.stopPropagation(),
                                                          eA(X.bB.GIFT_BUTTON),
                                                          (0, z.a)(
                                                              W,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...em,
                                                                      R.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
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
