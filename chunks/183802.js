n.d(e, { A: () => ta, s: () => ti });
var r,
    s = n(627968),
    i = n(64700),
    l = n(310784),
    a = n.n(l),
    u = n(503698),
    c = n.n(u),
    o = n(989349),
    d = n.n(o),
    A = n(318254),
    _ = n(939249),
    g = n(366010),
    m = n(187322),
    T = n(638916),
    E = n(825484),
    R = n(821609),
    f = n(311907),
    I = n(230109),
    H = n(990078),
    C = n(834730),
    h = n(890856),
    N = n(777666),
    O = n(442433),
    S = n(775602),
    x = n(793574),
    M = n(688810),
    p = n(713517),
    L = n(427209),
    v = n(993046),
    b = n(544028),
    D = n(253932),
    j = n(67480),
    B = n(954571),
    k = n(871123),
    y = n(733391),
    w = n(439303),
    U = n(832163),
    G = n(35826),
    F = n(310962),
    P = n(345938),
    Y = n(533406),
    V = n(263911),
    W = n(971146),
    K = n(366523),
    z = n(300182),
    q = n(620999),
    X = n(743693),
    J = n(696028),
    Q = n(914887),
    Z = n(995393),
    $ = n(652215),
    tt = n(985018),
    te = n(900719);
let tn = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    tr = a()("#000000").darken(1.5).alpha(0.9).hex(),
    ts = a()("#000000").alpha(0).hex();
var ti = (((r = {})[(r.SMALL = 0)] = "SMALL"), (r[(r.MEDIUM = 1)] = "MEDIUM"), (r[(r.EMBEDDED = 2)] = "EMBEDDED"), r);
function tl(t) {
    let {
            guildId: e,
            sku: n,
            isCardHovered: r,
            trackCardClick: l,
            variant: a,
            analyticsLocations: u,
            analyticsContext: o,
        } = t,
        d = i.useCallback(
            (t) => {
                t.stopPropagation(),
                    null != n &&
                        null != e &&
                        (l(Z.bB.FORWARD_BUTTON),
                        (0, P.d)({
                            sku: n,
                            guildId: e,
                            analyticsContext: o,
                            analyticsLocations: u,
                            source: "social-layer-storefront-embed",
                        }));
            },
            [n, e, l, o, u],
        ),
        A = i.useCallback(() => {
            l(Z.bB.WISHLIST_BUTTON);
        }, [l]),
        g = i.useMemo(() => c()(te.o, { [te.H5]: r }), [r]);
    return (0, s.jsxs)("div", {
        className: te.zu,
        children: [
            2 === a &&
                (0, s.jsx)(_.D, {
                    className: c()(g, te.gy),
                    onClick: d,
                    children: (0, s.jsx)(L.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, s.jsx)(X._, {
                sku: n,
                isCardHovered: r,
                trackButtonClick: A,
                className: c()(g, te.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function ta(t) {
    let { positionInSection: e, skuId: r, variant: l = 0, onClick: a, className: u, analyticsLocations: o } = t,
        _ = i.useRef(null),
        L = i.useRef(null),
        P = (0, f.bG)([j.A], () => j.A.get(r)),
        { guildId: X } = (0, k.nG)(P?.applicationId),
        ti = (0, f.bG)([b.A], () => (0, g.M)(b.A.theme)),
        ta = (0, f.bG)([S.A], () => S.A.useReducedMotion),
        tu = D.Q_.useSetting(),
        { isHoveringOrFocusing: tc } = (0, p.A)(_),
        to = (0, w.jM)(),
        { analyticsLocations: td } = (0, M.Ay)(o ?? []),
        tA = i.useRef({ positionInSection: e, analyticsLocations: td }),
        [t_, tg] = i.useState(!1),
        tm = (0, f.bG)([U.A], () => (null != r ? U.A.getNormalizedSKUEligibility(r) : void 0), [r]),
        tT = (0, F.A)(r, t_),
        tE = i.useCallback((t) => {
            tg(t);
        }, []),
        tR = i.useMemo(() => c()(te.Nr, { [te.ax]: 0 === l, [te.GW]: 1 === l, [te.jz]: 2 === l }), [l]),
        { handleCardHover: tf, handleCardUnhover: tI } = (0, J.Z)(r, to, e, td),
        { handleCardVisibilityChange: tH } = (0, Q.a)(r, to, e, td);
    i.useEffect(() => {
        tH(t_);
    }, [t_]);
    let tC = i.useCallback(
            (t) => {
                let { analyticsLocations: e, positionInSection: n } = tA.current,
                    {
                        sessionId: s,
                        guildId: i,
                        pageIndex: l,
                        pageTitle: a,
                        pageSection: u,
                        pageSectionTitle: c,
                        isUserGuildMember: o,
                        pageHasLeaderboard: d,
                    } = to;
                B.default.track($.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: s,
                    sku_id: r,
                    guild_id: i,
                    page_index: l,
                    page_title: a,
                    page_section: u,
                    page_section_title: c,
                    position_in_section: n,
                    is_user_guild_member: o,
                    page_has_leaderboard: d,
                    cta_type: t,
                    location_stack: e,
                });
            },
            [r, to],
        ),
        { primaryIconAsset: th, primaryIconLabel: tN } = i.useMemo(() => (0, k.Cv)(P, P?.applicationId), [P]),
        tO = (0, f.bG)([U.A], () => (null != X ? (U.A.getStorefrontState(X)?.activePage ?? 0) : 0)),
        tS = i.useMemo(() => {
            let t = P?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == t) return null;
            let e = d()(),
                n = Math.max(d()(t).diff(e, "days"), 1);
            return n <= 3 ? tt.intl.format(tt.t.PWw4Vp, { days: n }) : null;
        }, [P?.tenantMetadata?.socialLayer?.expiresAt]),
        tx = (0, k.xf)(P),
        tM = i.useMemo(() => {
            if (!tT) return "none";
            let [t, e] = tn[l];
            return `linear-gradient(to top, ${tr} ${30 + t}%, ${ts} ${30 + e}%)`;
        }, [l, tT]),
        tp = i.useCallback(() => {
            null != X && (0, y.iR)(X, r);
        }, [X, r]),
        tL = i.useCallback(() => {
            tf(),
                null != X &&
                    (L.current = setTimeout(() => {
                        (0, y.iR)(X, r);
                    }, 1e3));
        }, [X, r, tf]),
        tv = i.useCallback(() => {
            tI(), null != L.current && (clearTimeout(L.current), (L.current = null));
        }, [tI]);
    i.useEffect(
        () => () => {
            null != L.current && clearTimeout(L.current);
        },
        [],
    );
    let tb = i.useCallback(() => {
            null != X && (0, G.A)({ guildId: X, pageIndex: tO, skuId: r, slug: P?.slug });
        }, [X, r, tO, P?.slug]),
        tD = i.useCallback(
            (t) => {
                (tC(Z.bB.CARD), null != a && P?.applicationId != null)
                    ? a(t, { skuId: r, applicationId: P.applicationId })
                    : tb();
            },
            [tC, a, tb, r, P?.applicationId],
        ),
        tj = i.useCallback(
            (t) => {
                tu &&
                    (0, O.L3)(t, async () => {
                        let { default: t } = await n.e("97249").then(n.bind(n, 10680));
                        return (e) => (0, s.jsx)(t, { ...e, skuId: r });
                    });
            },
            [tu, r],
        ),
        {
            priceComponent: tB,
            extendedHeight: tk,
            displayPrice: ty,
        } = (function (t) {
            let { sku: e } = t,
                { normalPrice: n, discountedPrice: r, discountPercent: l } = (0, v.CD)({ sku: e }),
                a = r ?? n,
                u = i.useMemo(
                    () =>
                        null != e && null != e.orbsReward && e.orbsReward > 0
                            ? (0, s.jsx)("div", {
                                  className: te.pt,
                                  children: (0, s.jsx)(C.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: tt.intl.format(tt.t.GiVd2Q, {
                                          orbCount: e.orbsReward,
                                          orbIconHook: () =>
                                              (0, s.jsx)(A.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                      }),
                                  }),
                              })
                            : null,
                    [e],
                );
            return null != e && (0, k.mC)(e)
                ? null != l && null != r
                    ? {
                          priceComponent: (0, s.jsxs)("div", {
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: te.p6,
                                      children: [
                                          null != n &&
                                              (0, s.jsx)(C.E, {
                                                  className: te.of,
                                                  variant: "text-md/medium",
                                                  color: "text-muted",
                                                  lineClamp: 1,
                                                  children: n,
                                              }),
                                          (0, s.jsx)(C.E, {
                                              variant: "text-md/bold",
                                              color: "always-white",
                                              lineClamp: 1,
                                              children: r,
                                          }),
                                          (0, s.jsxs)(C.E, {
                                              variant: "text-md/bold",
                                              color: "text-feedback-positive",
                                              lineClamp: 1,
                                              children: ["(", l, ")"],
                                          }),
                                      ],
                                  }),
                                  u,
                              ],
                          }),
                          extendedHeight: null != u,
                          displayPrice: a,
                      }
                    : {
                          priceComponent: (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(C.E, {
                                      variant: "text-md/bold",
                                      color: "always-white",
                                      lineClamp: 1,
                                      children: n,
                                  }),
                                  u,
                              ],
                          }),
                          extendedHeight: !1,
                          displayPrice: a,
                      }
                : { priceComponent: null, extendedHeight: !1, displayPrice: a };
        })({ sku: P });
    if (null == P) return null;
    let tw = (0, k.fq)(P);
    return (0, s.jsx)(I.L, {
        innerRef: _,
        onChange: tE,
        threshold: 0,
        children: (0, s.jsx)(m.vN, {
            children: (0, s.jsxs)(h.s, {
                onClick: tD,
                onContextMenu: tj,
                onMouseEnter: tL,
                onMouseLeave: tv,
                className: c()(tR, { [te.Zl]: !ta && 2 !== l, [te.BN]: ti, [ti ? te.Mn : te.YF]: tc, [te.Rc]: !tT }, u),
                ref: _,
                "aria-label": P.name,
                children: [
                    P.exclusive
                        ? (0, s.jsx)("div", { className: te.fC, children: (0, s.jsx)(V.I, {}) })
                        : null != tS && (0, s.jsx)(N.Lp, { text: tS, disableColor: !0, className: te.qS }),
                    (0, s.jsx)(tl, {
                        guildId: X,
                        sku: P,
                        isCardHovered: tc,
                        variant: l,
                        trackCardClick: tC,
                        analyticsLocations: td,
                        analyticsContext: to,
                    }),
                    null != tw
                        ? tT
                            ? (0, s.jsx)(K.A, {
                                  containerClassName: te.Vl,
                                  foregroundImageClassName: te.wP,
                                  cardImage: tw,
                                  altText: P.name,
                                  shape: "custom",
                                  backgroundImageClassName: te.GC,
                                  cardBackgroundImage: tx,
                              })
                            : (0, s.jsx)(q.t, {})
                        : (0, s.jsx)("div", {
                              className: te.t7,
                              children: (0, s.jsx)(T.q, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: te.Cw,
                              }),
                          }),
                    2 !== l
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)("div", { className: te.iZ, style: { background: tM } }),
                                  (0, s.jsxs)("div", {
                                      className: te.zH,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: c()(te.gn, { [te.ov]: !(0, k.mC)(P), [te.w4]: tk }),
                                              children: [
                                                  tT &&
                                                      (0, s.jsx)("div", {
                                                          className: te.S1,
                                                          children: (0, s.jsx)(W.V, { textColor: "always-white" }),
                                                      }),
                                                  tT
                                                      ? (0, s.jsxs)(s.Fragment, {
                                                            children: [
                                                                null != th &&
                                                                    (0, s.jsx)("img", {
                                                                        src: th.toString(),
                                                                        alt: tN,
                                                                        className: te.ye,
                                                                    }),
                                                                (0, s.jsx)(C.E, {
                                                                    color: "always-white",
                                                                    variant: "text-md/medium",
                                                                    lineClamp: 1,
                                                                    children: P.name,
                                                                }),
                                                            ],
                                                        })
                                                      : (0, s.jsx)(q.r, {}),
                                              ],
                                          }),
                                          (0, s.jsx)("div", {
                                              className: te.iQ,
                                              children: tT ? tB : (0, s.jsx)(q.r, {}),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)("div", {
                                      className: te.li,
                                      children: (0, s.jsxs)(E.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              tm
                                                  ? (0, s.jsx)(R.$, {
                                                        variant: "primary",
                                                        onMouseDown: tp,
                                                        onClick: (t) => {
                                                            t.stopPropagation(),
                                                                tC(Z.bB.BUY_BUTTON),
                                                                (0, Y.a)(
                                                                    P,
                                                                    { isGift: !1 },
                                                                    {
                                                                        analyticsLocations: [
                                                                            ...td,
                                                                            x.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                        ],
                                                                        guildId: X,
                                                                    },
                                                                );
                                                        },
                                                        text:
                                                            null != ty
                                                                ? tt.intl.format(tt.t.Xp5WTn, { price: ty })
                                                                : tt.intl.string(tt.t.boqtTA),
                                                        fullWidth: !0,
                                                    })
                                                  : (0, s.jsx)(H.m, {
                                                        text: tt.intl.string(tt.t.IqlPbQ),
                                                        children: (0, s.jsx)(R.$, {
                                                            variant: "primary",
                                                            onClick: (t) => {
                                                                t.stopPropagation(), tC(Z.bB.VIEW_DETAILS_BUTTON), tb();
                                                            },
                                                            text: tt.intl.string(tt.t.KLBTgF),
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                              (0, s.jsx)(z.A, {
                                                  onGift: (t) => {
                                                      t.stopPropagation(),
                                                          tC(Z.bB.GIFT_BUTTON),
                                                          (0, Y.a)(
                                                              P,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...td,
                                                                      x.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
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
