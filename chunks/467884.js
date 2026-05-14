l.d(t, { s: () => es, A: () => ei });
var n,
    a = l(627968),
    s = l(64700),
    r = l(310784),
    i = l.n(r),
    o = l(503698),
    u = l.n(o),
    c = l(989349),
    d = l.n(c),
    m = l(318254),
    _ = l(939249),
    x = l(366010),
    p = l(187322),
    f = l(638916),
    h = l(43990),
    C = l(825484),
    g = l(821609),
    b = l(17928),
    j = l(269115),
    v = l(990078),
    A = l(834730),
    E = l(890856),
    N = l(777666),
    R = l(442433),
    k = l(775602),
    T = l(793574),
    y = l(688810),
    M = l(713517),
    S = l(427209),
    I = l(723090),
    w = l(363195),
    L = l(885386),
    D = l(67480),
    O = l(174459),
    B = l(871123),
    H = l(733391),
    G = l(439303),
    F = l(832163),
    P = l(35826),
    U = l(654107),
    W = l(345938),
    z = l(533406),
    V = l(263911),
    Y = l(971146),
    $ = l(366523),
    q = l(300182),
    K = l(900719);
function Q() {
    let [e] = s.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, a.jsx)("div", { className: u()(K.Vl, K.Yf), style: { animationDelay: `${e}s` } });
}
function J() {
    let [e] = s.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, a.jsx)("div", { className: K.RC, style: { width: `${e}%` } });
}
var Z = l(743693),
    X = l(652215),
    ee = l(995393),
    et = l(375708);
let el = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    en = i()("#000000").darken(1.5).alpha(0.9).hex(),
    ea = i()("#000000").alpha(0).hex();
var es = (((n = {})[(n.SMALL = 0)] = "SMALL"), (n[(n.MEDIUM = 1)] = "MEDIUM"), (n[(n.EMBEDDED = 2)] = "EMBEDDED"), n);
function er(e) {
    let {
            guildId: t,
            sku: l,
            isCardHovered: n,
            trackCardClick: r,
            variant: i,
            analyticsLocations: o,
            analyticsContext: c,
        } = e,
        d = s.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != l &&
                        null != t &&
                        (r(ee.bB.FORWARD_BUTTON),
                        (0, W.d)({
                            sku: l,
                            guildId: t,
                            analyticsContext: c,
                            analyticsLocations: o,
                            source: "social-layer-storefront-embed",
                        }));
            },
            [l, t, r, c, o],
        ),
        m = s.useCallback(() => {
            r(ee.bB.WISHLIST_BUTTON);
        }, [r]),
        x = s.useMemo(() => u()(K.o, { [K.H5]: n }), [n]);
    return (0, a.jsxs)("div", {
        className: K.zu,
        children: [
            2 === i &&
                (0, a.jsx)(_.D, {
                    className: u()(x, K.gy),
                    onClick: d,
                    children: (0, a.jsx)(S.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, a.jsx)(Z._, {
                sku: l,
                isCardHovered: n,
                trackButtonClick: m,
                className: u()(x, K.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function ei(e) {
    let t,
        n,
        r,
        i,
        o,
        c,
        _,
        S,
        { positionInSection: W, skuId: Z, variant: es = 0, onClick: ei, className: eo, analyticsLocations: eu } = e,
        ec = s.useRef(null),
        ed = s.useRef(null),
        em = (0, b.bG)([D.A], () => D.A.get(Z)),
        { guildId: e_ } = (0, B.nG)(em?.applicationId),
        ex = (0, b.bG)([w.A], () => (0, x.M)(w.A.theme)),
        ep = (0, b.bG)([k.A], () => k.A.useReducedMotion),
        ef = L.Q_.useSetting(),
        { isHoveringOrFocusing: eh } = (0, M.A)(ec),
        eC = (0, G.jM)(),
        { analyticsLocations: eg } = (0, y.Ay)(eu ?? []),
        eb = s.useRef({ positionInSection: W, analyticsLocations: eg }),
        [ej, ev] = s.useState(!1),
        eA = (0, b.bG)([F.A], () => (null != Z ? F.A.getNormalizedSKUEligibility(Z) : void 0), [Z]),
        eE = (function (e, t) {
            let l = (0, b.bG)([D.A], () => D.A.get(e)),
                [n, a] = s.useState(!1),
                [r, i] = s.useState(!1),
                o = s.useMemo(() => (0, B.xf)(l), [l]),
                u = s.useMemo(() => (0, B.fq)(l), [l]);
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
                        (0, U.l0)(o.toString()).finally(() => {
                            e && i(!0);
                        }),
                        () => {
                            e = !1;
                        }
                    );
                }, [r, o, t, l?.id]),
                s.useMemo(() => n && r, [n, r])
            );
        })(Z, ej),
        eN = s.useCallback((e) => {
            ev(e);
        }, []),
        eR = s.useMemo(() => u()(K.Nr, { [K.ax]: 0 === es, [K.GW]: 1 === es, [K.jz]: 2 === es }), [es]),
        { handleCardHover: ek, handleCardUnhover: eT } =
            ((t = s.useRef(!1)),
            (n = s.useRef(eC)),
            (r = s.useRef({ positionInSection: W, analyticsLocations: eg })),
            s.useEffect(() => {
                n.current = eC;
            }, [eC]),
            {
                handleCardHover: s.useCallback(() => {
                    if (!t.current) {
                        let {
                                sessionId: e,
                                guildId: l,
                                pageIndex: a,
                                pageTitle: s,
                                pageSection: i,
                                pageSectionTitle: o,
                                isUserGuildMember: u,
                                pageHasLeaderboard: c,
                            } = n.current,
                            { positionInSection: d, analyticsLocations: m } = r.current;
                        O.default.track(X.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                            slayer_storefront_session_id: e,
                            sku_id: Z,
                            guild_id: l,
                            page_index: a,
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
                }, [Z]),
                handleCardUnhover: s.useCallback(() => {
                    t.current = !1;
                }, []),
            }),
        { handleCardVisibilityChange: ey } =
            ((i = s.useRef(null)),
            (o = s.useRef(eC)),
            (c = s.useRef({ positionInSection: W, analyticsLocations: eg })),
            s.useEffect(() => {
                o.current = eC;
            }, [eC]),
            (_ = s.useCallback(() => {
                let {
                        sessionId: e,
                        guildId: t,
                        pageIndex: l,
                        pageTitle: n,
                        pageSection: a,
                        pageSectionTitle: s,
                        isUserGuildMember: r,
                        pageHasLeaderboard: i,
                    } = o.current,
                    { positionInSection: u, analyticsLocations: d } = c.current;
                O.default.track(X.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                    slayer_storefront_session_id: e,
                    sku_id: Z,
                    guild_id: t,
                    page_index: l,
                    page_title: n,
                    page_section: a,
                    page_section_title: s,
                    position_in_section: u,
                    is_user_guild_member: r,
                    page_has_leaderboard: i,
                    location_stack: d,
                });
            }, [Z])),
            (S = s.useCallback(
                (e) => {
                    e
                        ? null === i.current &&
                          (i.current = window.setTimeout(() => {
                              _(), (i.current = null);
                          }, 1e3))
                        : null !== i.current && (clearTimeout(i.current), (i.current = null));
                },
                [_],
            )),
            s.useEffect(
                () => () => {
                    null !== i.current && (clearTimeout(i.current), (i.current = null));
                },
                [],
            ),
            { handleCardVisibilityChange: S });
    s.useEffect(() => {
        ey(ej);
    }, [ej]);
    let eM = s.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: l } = eb.current,
                    {
                        sessionId: n,
                        guildId: a,
                        pageIndex: s,
                        pageTitle: r,
                        pageSection: i,
                        pageSectionTitle: o,
                        isUserGuildMember: u,
                        pageHasLeaderboard: c,
                    } = eC;
                O.default.track(X.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: n,
                    sku_id: Z,
                    guild_id: a,
                    page_index: s,
                    page_title: r,
                    page_section: i,
                    page_section_title: o,
                    position_in_section: l,
                    is_user_guild_member: u,
                    page_has_leaderboard: c,
                    cta_type: e,
                    location_stack: t,
                });
            },
            [Z, eC],
        ),
        { primaryIconAsset: eS, primaryIconLabel: eI } = s.useMemo(() => (0, B.Cv)(em, em?.applicationId), [em]),
        ew = (0, b.bG)([F.A], () => (null != e_ ? (F.A.getStorefrontState(e_)?.activePage ?? 0) : 0)),
        eL = s.useMemo(() => {
            let e = em?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let t = d()(),
                l = Math.max(d()(e).diff(t, "days"), 1);
            return l <= 3 ? et.intl.format(et.t.PWw4Vp, { days: l }) : null;
        }, [em?.tenantMetadata?.socialLayer?.expiresAt]),
        eD = (0, B.xf)(em),
        eO = s.useMemo(() => {
            if (!eE) return "none";
            let [e, t] = el[es];
            return `linear-gradient(to top, ${en} ${30 + e}%, ${ea} ${30 + t}%)`;
        }, [es, eE]),
        eB = s.useCallback(() => {
            null != e_ && (0, H.iR)(e_, Z);
        }, [e_, Z]),
        eH = s.useCallback(() => {
            ek(),
                null != e_ &&
                    (ed.current = setTimeout(() => {
                        (0, H.iR)(e_, Z);
                    }, 1e3));
        }, [e_, Z, ek]),
        eG = s.useCallback(() => {
            eT(), null != ed.current && (clearTimeout(ed.current), (ed.current = null));
        }, [eT]);
    s.useEffect(
        () => () => {
            null != ed.current && clearTimeout(ed.current);
        },
        [],
    );
    let eF = s.useCallback(() => {
            null != e_ && (0, P.A)({ guildId: e_, pageIndex: ew, skuId: Z, slug: em?.slug });
        }, [e_, Z, ew, em?.slug]),
        eP = s.useCallback(
            (e) => {
                (eM(ee.bB.CARD), null != ei && em?.applicationId != null)
                    ? ei(e, { skuId: Z, applicationId: em.applicationId })
                    : eF();
            },
            [eM, ei, eF, Z, em?.applicationId],
        ),
        eU = s.useCallback(
            (e) => {
                ef &&
                    (0, R.L3)(e, async () => {
                        let { default: e } = await l.e("97249").then(l.bind(l, 10680));
                        return (t) => (0, a.jsx)(e, { ...t, skuId: Z });
                    });
            },
            [ef, Z],
        ),
        {
            priceComponent: eW,
            extendedHeight: ez,
            displayPrice: eV,
        } = (function (e) {
            let { sku: t } = e,
                { normalPrice: l, discountedPrice: n, discountPercent: r } = (0, I.CD)({ sku: t }),
                i = n ?? l,
                o = s.useMemo(
                    () =>
                        null != t && null != t.orbsReward && t.orbsReward > 0
                            ? (0, a.jsx)("div", {
                                  className: K.pt,
                                  children: (0, a.jsx)(A.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: et.intl.format(et.t.GiVd2Q, {
                                          orbCount: t.orbsReward,
                                          orbIconHook: () =>
                                              (0, a.jsx)(m.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                      }),
                                  }),
                              })
                            : null,
                    [t],
                );
            return null != t && (0, B.mC)(t)
                ? null != r && null != n
                    ? {
                          priceComponent: (0, a.jsxs)("div", {
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: K.p6,
                                      children: [
                                          null != l &&
                                              (0, a.jsx)(A.E, {
                                                  className: K.of,
                                                  variant: "text-md/medium",
                                                  color: "text-muted",
                                                  lineClamp: 1,
                                                  children: l,
                                              }),
                                          (0, a.jsx)(A.E, {
                                              variant: "text-md/bold",
                                              color: "always-white",
                                              lineClamp: 1,
                                              children: n,
                                          }),
                                          (0, a.jsxs)(A.E, {
                                              variant: "text-md/bold",
                                              color: "text-feedback-positive",
                                              lineClamp: 1,
                                              children: ["(", r, ")"],
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
                                  (0, a.jsx)(A.E, {
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
        })({ sku: em });
    if (null == em) return null;
    let eY = (0, B.fq)(em);
    return (0, a.jsx)(j.L, {
        innerRef: ec,
        onChange: eN,
        threshold: 0,
        children: (0, a.jsx)(p.vN, {
            children: (0, a.jsxs)(E.s, {
                onClick: eP,
                onContextMenu: eU,
                onMouseEnter: eH,
                onMouseLeave: eG,
                className: u()(eR, { [K.Zl]: !ep && 2 !== es, [K.BN]: ex, [ex ? K.Mn : K.YF]: eh, [K.Rc]: !eE }, eo),
                ref: ec,
                "aria-label": em.name,
                children: [
                    em.exclusive
                        ? (0, a.jsx)("div", { className: K.fC, children: (0, a.jsx)(V.I, {}) })
                        : null != eL && (0, a.jsx)(N.Lp, { text: eL, disableColor: !0, className: K.qS }),
                    (0, a.jsx)(er, {
                        guildId: e_,
                        sku: em,
                        isCardHovered: eh,
                        variant: es,
                        trackCardClick: eM,
                        analyticsLocations: eg,
                        analyticsContext: eC,
                    }),
                    null != eY
                        ? eE
                            ? (0, a.jsx)($.A, {
                                  containerClassName: K.Vl,
                                  foregroundImageClassName: K.wP,
                                  cardImage: eY,
                                  altText: em.name,
                                  shape: "custom",
                                  backgroundImageClassName: K.GC,
                                  cardBackgroundImage: eD,
                                  cssPosition: "absolute",
                              })
                            : (0, a.jsx)(Q, {})
                        : (0, a.jsx)("div", {
                              className: K.t7,
                              children: (0, a.jsx)(f.q, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: K.Cw,
                              }),
                          }),
                    2 !== es
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", { className: K.iZ, style: { background: eO } }),
                                  (0, a.jsx)(h.N, {
                                      theme: X.NJ8.DARKER,
                                      children: (e) =>
                                          (0, a.jsxs)("div", {
                                              className: u()(K.zH, e),
                                              children: [
                                                  (0, a.jsxs)("div", {
                                                      className: u()(K.gn, { [K.ov]: !(0, B.mC)(em), [K.w4]: ez }),
                                                      children: [
                                                          eE &&
                                                              (0, a.jsx)("div", {
                                                                  className: K.S1,
                                                                  children: (0, a.jsx)(Y.V, {
                                                                      textColor: "always-white",
                                                                  }),
                                                              }),
                                                          eE
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        null != eS &&
                                                                            (0, a.jsx)("img", {
                                                                                src: eS.toString(),
                                                                                alt: eI,
                                                                                className: K.ye,
                                                                            }),
                                                                        (0, a.jsx)(A.E, {
                                                                            color: "always-white",
                                                                            variant: "text-md/medium",
                                                                            lineClamp: 1,
                                                                            children: em.name,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsx)(J, {}),
                                                      ],
                                                  }),
                                                  (0, a.jsx)("div", {
                                                      className: K.iQ,
                                                      children: eE ? eW : (0, a.jsx)(J, {}),
                                                  }),
                                              ],
                                          }),
                                  }),
                                  (0, a.jsx)("div", {
                                      className: K.li,
                                      children: (0, a.jsxs)(C.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              eA
                                                  ? (0, a.jsx)(g.$, {
                                                        variant: "primary",
                                                        onMouseDown: eB,
                                                        onClick: (e) => {
                                                            e.stopPropagation(),
                                                                eM(ee.bB.BUY_BUTTON),
                                                                (0, z.a)(
                                                                    em,
                                                                    { isGift: !1 },
                                                                    {
                                                                        analyticsLocations: [
                                                                            ...eg,
                                                                            T.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                        ],
                                                                        guildId: e_,
                                                                    },
                                                                );
                                                        },
                                                        text:
                                                            null != eV
                                                                ? et.intl.format(et.t.Xp5WTn, { price: eV })
                                                                : et.intl.string(et.t.boqtTA),
                                                        fullWidth: !0,
                                                    })
                                                  : (0, a.jsx)(v.m, {
                                                        text: et.intl.string(et.t.IqlPbQ),
                                                        children: (0, a.jsx)(g.$, {
                                                            variant: "primary",
                                                            onClick: (e) => {
                                                                e.stopPropagation(),
                                                                    eM(ee.bB.VIEW_DETAILS_BUTTON),
                                                                    eF();
                                                            },
                                                            text: et.intl.string(et.t.KLBTgF),
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                              (0, a.jsx)(q.A, {
                                                  onGift: (e) => {
                                                      e.stopPropagation(),
                                                          eM(ee.bB.GIFT_BUTTON),
                                                          (0, z.a)(
                                                              em,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...eg,
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
}
