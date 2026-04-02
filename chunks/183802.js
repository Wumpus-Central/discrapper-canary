n.d(e, { A: () => tt, s: () => $ });
var r,
    s = n(627968),
    i = n(64700),
    a = n(310784),
    l = n.n(a),
    u = n(503698),
    c = n.n(u),
    o = n(989349),
    d = n.n(o),
    A = n(158954),
    _ = n(311907),
    g = n(230109),
    T = n(990078),
    m = n(397927),
    E = n(442433),
    R = n(775602),
    f = n(793574),
    I = n(688810),
    S = n(713517),
    C = n(427209),
    H = n(544028),
    O = n(253932),
    N = n(67480),
    M = n(954571),
    h = n(871123),
    L = n(733391),
    x = n(439303),
    p = n(832163),
    b = n(35826),
    D = n(207654),
    k = n(310962),
    v = n(44724),
    B = n(345938),
    j = n(533406),
    y = n(971146),
    U = n(665711),
    G = n(366523),
    w = n(300182),
    F = n(620999),
    P = n(743693),
    Y = n(696028),
    V = n(914887),
    W = n(995393),
    K = n(652215),
    z = n(985018),
    q = n(359170);
let X = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    Q = l()("#000000").darken(1.5).alpha(0.9).hex(),
    J = l()("#000000").alpha(0).hex();
var $ = (((r = {})[(r.SMALL = 0)] = "SMALL"), (r[(r.MEDIUM = 1)] = "MEDIUM"), (r[(r.EMBEDDED = 2)] = "EMBEDDED"), r);
function Z(t) {
    let {
            guildId: e,
            sku: n,
            isCardHovered: r,
            trackCardClick: a,
            variant: l,
            analyticsLocations: u,
            analyticsContext: o,
        } = t,
        d = i.useCallback(
            (t) => {
                t.stopPropagation(),
                    null != n &&
                        null != e &&
                        (a(W.bB.FORWARD_BUTTON),
                        (0, B.d)({
                            sku: n,
                            guildId: e,
                            analyticsContext: o,
                            analyticsLocations: u,
                            source: "social-layer-storefront-embed",
                        }));
            },
            [n, e, a, o, u],
        ),
        _ = i.useCallback(() => {
            a(W.bB.WISHLIST_BUTTON);
        }, [a]),
        g = i.useMemo(() => c()(q.o, { [q.H5]: r }), [r]);
    return (0, s.jsxs)("div", {
        className: q.zu,
        children: [
            2 === l &&
                (0, s.jsx)(A.DUT, {
                    className: c()(g, q.gy),
                    onClick: d,
                    children: (0, s.jsx)(C.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, s.jsx)(P._, {
                sku: n,
                isCardHovered: r,
                trackButtonClick: _,
                className: c()(g, q.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function tt(t) {
    let { positionInSection: e, skuId: r, variant: a = 0, onClick: l, className: u, analyticsLocations: o } = t,
        C = i.useRef(null),
        B = i.useRef(null),
        P = (0, _.bG)([N.A], () => N.A.get(r)),
        { guildId: $, application: tt } = (0, h.nG)(P?.applicationId),
        te = (0, D.b)({ location: "storefront_card" }),
        tn = (0, _.bG)([H.A], () => (0, A.Mwr)(H.A.theme)),
        tr = (0, _.bG)([R.A], () => R.A.useReducedMotion),
        ts = O.Q_.useSetting(),
        { isHoveringOrFocusing: ti } = (0, S.A)(C),
        ta = (0, x.jM)(),
        { analyticsLocations: tl } = (0, I.Ay)(o ?? []),
        tu = i.useRef({ positionInSection: e, analyticsLocations: tl }),
        [tc, to] = i.useState(!1),
        td = (0, _.bG)([p.A], () => (null != r ? p.A.getNormalizedSKUEligibility(r) : void 0), [r]),
        tA = (0, k.A)(r, tc),
        t_ = i.useCallback((t) => {
            to(t);
        }, []),
        tg = i.useMemo(() => c()(q.Nr, { [q.ax]: 0 === a, [q.GW]: 1 === a, [q.jz]: 2 === a }), [a]),
        { handleCardHover: tT, handleCardUnhover: tm } = (0, Y.Z)(r, ta, e, tl),
        { handleCardVisibilityChange: tE } = (0, V.a)(r, ta, e, tl);
    i.useEffect(() => {
        tE(tc);
    }, [tc]);
    let tR = i.useCallback(
            (t) => {
                let { analyticsLocations: e, positionInSection: n } = tu.current,
                    {
                        sessionId: s,
                        guildId: i,
                        pageIndex: a,
                        pageTitle: l,
                        pageSection: u,
                        pageSectionTitle: c,
                        isUserGuildMember: o,
                        pageHasLeaderboard: d,
                    } = ta;
                M.default.track(K.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: s,
                    sku_id: r,
                    guild_id: i,
                    page_index: a,
                    page_title: l,
                    page_section: u,
                    page_section_title: c,
                    position_in_section: n,
                    is_user_guild_member: o,
                    page_has_leaderboard: d,
                    cta_type: t,
                    location_stack: e,
                });
            },
            [r, ta],
        ),
        { primaryIconAsset: tf, primaryIconLabel: tI } = i.useMemo(() => (0, h.Cv)(P, P?.applicationId), [P]),
        tS = (0, _.bG)([p.A], () => (null != $ ? (p.A.getStorefrontState($)?.activePage ?? 0) : 0)),
        tC = i.useMemo(() => {
            let t = P?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == t) return null;
            let e = d()(),
                n = Math.max(d()(t).diff(e, "days"), 1);
            return n <= 3 ? z.intl.format(z.t.PWw4Vp, { days: n }) : null;
        }, [P?.tenantMetadata?.socialLayer?.expiresAt]),
        tH = (0, h.xf)(P),
        tO = i.useMemo(() => {
            if (!tA) return "none";
            let [t, e] = X[a];
            return `linear-gradient(to top, ${Q} ${30 + t}%, ${J} ${30 + e}%)`;
        }, [a, tA]),
        tN = i.useCallback(() => {
            (0, v.X)({ guildId: $ });
        }, [$]),
        tM = i.useCallback(() => {
            null != $ && (0, L.iR)($, r, "SocialLayerStorefrontCard");
        }, [$, r]),
        th = i.useCallback(() => {
            tT(),
                null != $ &&
                    (B.current = setTimeout(() => {
                        (0, L.iR)($, r, "SocialLayerStorefrontCard");
                    }, 1e3));
        }, [$, r, tT]),
        tL = i.useCallback(() => {
            tm(), null != B.current && (clearTimeout(B.current), (B.current = null));
        }, [tm]);
    i.useEffect(
        () => () => {
            null != B.current && clearTimeout(B.current);
        },
        [],
    );
    let tx = i.useCallback(() => {
            null != $ && (0, b.A)({ guildId: $, pageIndex: tS, skuId: r, slug: P?.slug });
        }, [$, r, tS, P?.slug]),
        tp = i.useCallback(
            (t) => {
                (tR(W.bB.CARD), null != l && P?.applicationId != null)
                    ? l(t, { skuId: r, applicationId: P.applicationId })
                    : tx();
            },
            [tR, l, tx, r, P?.applicationId],
        ),
        tb = i.useCallback(
            (t) => {
                ts &&
                    (0, E.L3)(t, async () => {
                        let { default: t } = await n.e("97249").then(n.bind(n, 10680));
                        return (e) => (0, s.jsx)(t, { ...e, skuId: r });
                    });
            },
            [ts, r],
        );
    if (null == P) return null;
    let tD = (0, h.fq)(P),
        tk = te && tA && null != tt;
    return (0, s.jsx)(g.L, {
        innerRef: C,
        onChange: t_,
        threshold: 0,
        children: (0, s.jsx)(A.vN3, {
            children: (0, s.jsxs)(m.sqX, {
                onClick: tp,
                onContextMenu: tb,
                onMouseDown: tN,
                onMouseEnter: th,
                onMouseLeave: tL,
                className: c()(tg, { [q.Zl]: !tr && 2 !== a, [q.BN]: tn, [tn ? q.Mn : q.YF]: ti, [q.Rc]: !tA }, u),
                ref: C,
                "aria-label": P.name,
                children: [
                    tk &&
                        2 !== a &&
                        (0, s.jsx)("div", {
                            className: q.Zv,
                            children: (0, s.jsx)(U.W, { application: tt, iconSize: 16 }),
                        }),
                    null != tC && (0, s.jsx)(m.LpS, { text: tC, disableColor: !0, className: q.qS }),
                    (0, s.jsx)(Z, {
                        guildId: $,
                        sku: P,
                        isCardHovered: ti,
                        variant: a,
                        trackCardClick: tR,
                        analyticsLocations: tl,
                        analyticsContext: ta,
                    }),
                    null != tD
                        ? tA
                            ? (0, s.jsx)(G.A, {
                                  containerClassName: q.Vl,
                                  foregroundImageClassName: q.wP,
                                  cardImage: tD,
                                  altText: P.name,
                                  shape: "custom",
                                  backgroundImageClassName: q.GC,
                                  cardBackgroundImage: tH,
                              })
                            : (0, s.jsx)(F.t, {})
                        : (0, s.jsx)("div", {
                              className: q.t7,
                              children: (0, s.jsx)(A.qyI, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: q.Cw,
                              }),
                          }),
                    2 !== a
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)("div", { className: q.iZ, style: { background: tO } }),
                                  (0, s.jsxs)("div", {
                                      className: q.zH,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: c()(q.gn, { [q.ov]: !(0, h.mC)(P) }),
                                              children: [
                                                  tk &&
                                                      (0, s.jsx)("div", {
                                                          className: q.S1,
                                                          children: (0, s.jsx)(y.V, {
                                                              application: tt,
                                                              textColor: "always-white",
                                                          }),
                                                      }),
                                                  tA
                                                      ? (0, s.jsxs)(s.Fragment, {
                                                            children: [
                                                                null != tf &&
                                                                    (0, s.jsx)("img", {
                                                                        src: tf.toString(),
                                                                        alt: tI,
                                                                        className: q.ye,
                                                                    }),
                                                                (0, s.jsx)(m.Text, {
                                                                    color: "always-white",
                                                                    variant: "text-md/medium",
                                                                    lineClamp: 1,
                                                                    children: P.name,
                                                                }),
                                                            ],
                                                        })
                                                      : (0, s.jsx)(F.r, {}),
                                              ],
                                          }),
                                          (0, s.jsx)("div", {
                                              className: q.iQ,
                                              children: tA
                                                  ? (0, s.jsxs)(s.Fragment, {
                                                        children: [
                                                            (0, h.mC)(P) &&
                                                                (0, s.jsx)(m.Text, {
                                                                    variant: "text-md/bold",
                                                                    color: "always-white",
                                                                    lineClamp: 1,
                                                                    children: (0, h.p3)(P, K.lid.DEFAULT),
                                                                }),
                                                            null != P.orbsReward &&
                                                                P.orbsReward > 0 &&
                                                                (0, s.jsx)("div", {
                                                                    className: q.pt,
                                                                    children: (0, s.jsx)(m.Text, {
                                                                        variant: "text-sm/semibold",
                                                                        color: "currentColor",
                                                                        children: z.intl.format(z.t.GiVd2Q, {
                                                                            orbCount: P.orbsReward,
                                                                            orbIconHook: () =>
                                                                                (0, s.jsx)(
                                                                                    A.Cp8,
                                                                                    {
                                                                                        size: "xs",
                                                                                        color: "currentColor",
                                                                                    },
                                                                                    "orbs-icon",
                                                                                ),
                                                                        }),
                                                                    }),
                                                                }),
                                                        ],
                                                    })
                                                  : (0, s.jsx)(F.r, {}),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)("div", {
                                      className: q.li,
                                      children: (0, s.jsxs)(A.e2v, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              td
                                                  ? (0, s.jsx)(A.$nd, {
                                                        variant: "primary",
                                                        onMouseDown: tM,
                                                        onClick: (t) => {
                                                            t.stopPropagation(),
                                                                tR(W.bB.BUY_BUTTON),
                                                                (0, j.a)(
                                                                    P,
                                                                    { isGift: !1 },
                                                                    {
                                                                        analyticsLocations: [
                                                                            ...tl,
                                                                            f.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                        ],
                                                                        guildId: $,
                                                                    },
                                                                );
                                                        },
                                                        text: (0, h.mC)(P)
                                                            ? z.intl.format(z.t.Xp5WTn, {
                                                                  price: (0, h.p3)(P, K.lid.DEFAULT),
                                                              })
                                                            : z.intl.string(z.t.boqtTA),
                                                        fullWidth: !0,
                                                    })
                                                  : (0, s.jsx)(T.m, {
                                                        text: z.intl.string(z.t.IqlPbQ),
                                                        children: (0, s.jsx)(A.$nd, {
                                                            variant: "primary",
                                                            onClick: (t) => {
                                                                t.stopPropagation(), tR(W.bB.VIEW_DETAILS_BUTTON), tx();
                                                            },
                                                            text: z.intl.string(z.t.KLBTgF),
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                              (0, s.jsx)(w.A, {
                                                  onGift: (t) => {
                                                      t.stopPropagation(),
                                                          tR(W.bB.GIFT_BUTTON),
                                                          (0, j.a)(
                                                              P,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...tl,
                                                                      f.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
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
