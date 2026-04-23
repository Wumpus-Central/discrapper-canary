n.d(e, { A: () => ta, s: () => tl });
var r,
    s = n(627968),
    l = n(64700),
    i = n(310784),
    a = n.n(i),
    u = n(503698),
    c = n.n(u),
    o = n(989349),
    d = n.n(o),
    A = n(318254),
    _ = n(939249),
    g = n(366010),
    T = n(187322),
    m = n(638916),
    I = n(825484),
    E = n(821609),
    R = n(311907),
    C = n(230109),
    N = n(990078),
    H = n(834730),
    f = n(890856),
    x = n(777666),
    O = n(442433),
    h = n(775602),
    S = n(793574),
    p = n(688810),
    L = n(713517),
    M = n(427209),
    v = n(993046),
    b = n(544028),
    B = n(253932),
    j = n(67480),
    D = n(954571),
    k = n(871123),
    U = n(733391),
    y = n(439303),
    G = n(832163),
    w = n(35826),
    P = n(310962),
    Y = n(345938),
    F = n(533406),
    V = n(263911),
    W = n(971146),
    K = n(366523),
    z = n(300182),
    q = n(620999),
    X = n(743693),
    Q = n(696028),
    J = n(914887),
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
var tl = (((r = {})[(r.SMALL = 0)] = "SMALL"), (r[(r.MEDIUM = 1)] = "MEDIUM"), (r[(r.EMBEDDED = 2)] = "EMBEDDED"), r);
function ti(t) {
    let {
            guildId: e,
            sku: n,
            isCardHovered: r,
            trackCardClick: i,
            variant: a,
            analyticsLocations: u,
            analyticsContext: o,
        } = t,
        d = l.useCallback(
            (t) => {
                t.stopPropagation(),
                    null != n &&
                        null != e &&
                        (i(Z.bB.FORWARD_BUTTON),
                        (0, Y.d)({
                            sku: n,
                            guildId: e,
                            analyticsContext: o,
                            analyticsLocations: u,
                            source: "social-layer-storefront-embed",
                        }));
            },
            [n, e, i, o, u],
        ),
        A = l.useCallback(() => {
            i(Z.bB.WISHLIST_BUTTON);
        }, [i]),
        g = l.useMemo(() => c()(te.o, { [te.H5]: r }), [r]);
    return (0, s.jsxs)("div", {
        className: te.zu,
        children: [
            2 === a &&
                (0, s.jsx)(_.D, {
                    className: c()(g, te.gy),
                    onClick: d,
                    children: (0, s.jsx)(M.A, { size: "refresh_sm", color: "currentColor" }),
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
    let { positionInSection: e, skuId: r, variant: i = 0, onClick: a, className: u, analyticsLocations: o } = t,
        _ = l.useRef(null),
        M = l.useRef(null),
        Y = (0, R.bG)([j.A], () => j.A.get(r)),
        { guildId: X } = (0, k.nG)(Y?.applicationId),
        tl = (0, R.bG)([b.A], () => (0, g.M)(b.A.theme)),
        ta = (0, R.bG)([h.A], () => h.A.useReducedMotion),
        tu = B.Q_.useSetting(),
        { isHoveringOrFocusing: tc } = (0, L.A)(_),
        to = (0, y.jM)(),
        { analyticsLocations: td } = (0, p.Ay)(o ?? []),
        tA = l.useRef({ positionInSection: e, analyticsLocations: td }),
        [t_, tg] = l.useState(!1),
        tT = (0, R.bG)([G.A], () => (null != r ? G.A.getNormalizedSKUEligibility(r) : void 0), [r]),
        tm = (0, P.A)(r, t_),
        tI = l.useCallback((t) => {
            tg(t);
        }, []),
        tE = l.useMemo(() => c()(te.Nr, { [te.ax]: 0 === i, [te.GW]: 1 === i, [te.jz]: 2 === i }), [i]),
        { handleCardHover: tR, handleCardUnhover: tC } = (0, Q.Z)(r, to, e, td),
        { handleCardVisibilityChange: tN } = (0, J.a)(r, to, e, td);
    l.useEffect(() => {
        tN(t_);
    }, [t_]);
    let tH = l.useCallback(
            (t) => {
                let { analyticsLocations: e, positionInSection: n } = tA.current,
                    {
                        sessionId: s,
                        guildId: l,
                        pageIndex: i,
                        pageTitle: a,
                        pageSection: u,
                        pageSectionTitle: c,
                        isUserGuildMember: o,
                        pageHasLeaderboard: d,
                    } = to;
                D.default.track($.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: s,
                    sku_id: r,
                    guild_id: l,
                    page_index: i,
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
        { primaryIconAsset: tf, primaryIconLabel: tx } = l.useMemo(() => (0, k.Cv)(Y, Y?.applicationId), [Y]),
        tO = (0, R.bG)([G.A], () => (null != X ? (G.A.getStorefrontState(X)?.activePage ?? 0) : 0)),
        th = l.useMemo(() => {
            let t = Y?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == t) return null;
            let e = d()(),
                n = Math.max(d()(t).diff(e, "days"), 1);
            return n <= 3 ? tt.intl.format(tt.t.PWw4Vp, { days: n }) : null;
        }, [Y?.tenantMetadata?.socialLayer?.expiresAt]),
        tS = (0, k.xf)(Y),
        tp = l.useMemo(() => {
            if (!tm) return "none";
            let [t, e] = tn[i];
            return `linear-gradient(to top, ${tr} ${30 + t}%, ${ts} ${30 + e}%)`;
        }, [i, tm]),
        tL = l.useCallback(() => {
            null != X && (0, U.iR)(X, r);
        }, [X, r]),
        tM = l.useCallback(() => {
            tR(),
                null != X &&
                    (M.current = setTimeout(() => {
                        (0, U.iR)(X, r);
                    }, 1e3));
        }, [X, r, tR]),
        tv = l.useCallback(() => {
            tC(), null != M.current && (clearTimeout(M.current), (M.current = null));
        }, [tC]);
    l.useEffect(
        () => () => {
            null != M.current && clearTimeout(M.current);
        },
        [],
    );
    let tb = l.useCallback(() => {
            null != X && (0, w.A)({ guildId: X, pageIndex: tO, skuId: r, slug: Y?.slug });
        }, [X, r, tO, Y?.slug]),
        tB = l.useCallback(
            (t) => {
                (tH(Z.bB.CARD), null != a && Y?.applicationId != null)
                    ? a(t, { skuId: r, applicationId: Y.applicationId })
                    : tb();
            },
            [tH, a, tb, r, Y?.applicationId],
        ),
        tj = l.useCallback(
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
            priceComponent: tD,
            extendedHeight: tk,
            displayPrice: tU,
        } = (function (t) {
            let { sku: e } = t,
                { normalPrice: n, discountedPrice: r, discountPercent: i } = (0, v.CD)({ sku: e }),
                a = r ?? n,
                u = l.useMemo(
                    () =>
                        null != e && null != e.orbsReward && e.orbsReward > 0
                            ? (0, s.jsx)("div", {
                                  className: te.pt,
                                  children: (0, s.jsx)(H.E, {
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
                ? null != i && null != r
                    ? {
                          priceComponent: (0, s.jsxs)("div", {
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: te.p6,
                                      children: [
                                          null != n &&
                                              (0, s.jsx)(H.E, {
                                                  className: te.of,
                                                  variant: "text-md/medium",
                                                  color: "text-muted",
                                                  lineClamp: 1,
                                                  children: n,
                                              }),
                                          (0, s.jsx)(H.E, {
                                              variant: "text-md/bold",
                                              color: "always-white",
                                              lineClamp: 1,
                                              children: r,
                                          }),
                                          (0, s.jsxs)(H.E, {
                                              variant: "text-md/bold",
                                              color: "text-feedback-positive",
                                              lineClamp: 1,
                                              children: ["(", i, ")"],
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
                                  (0, s.jsx)(H.E, {
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
        })({ sku: Y });
    if (null == Y) return null;
    let ty = (0, k.fq)(Y);
    return (0, s.jsx)(C.L, {
        innerRef: _,
        onChange: tI,
        threshold: 0,
        children: (0, s.jsx)(T.vN, {
            children: (0, s.jsxs)(f.s, {
                onClick: tB,
                onContextMenu: tj,
                onMouseEnter: tM,
                onMouseLeave: tv,
                className: c()(tE, { [te.Zl]: !ta && 2 !== i, [te.BN]: tl, [tl ? te.Mn : te.YF]: tc, [te.Rc]: !tm }, u),
                ref: _,
                "aria-label": Y.name,
                children: [
                    Y.exclusive
                        ? (0, s.jsx)("div", { className: te.fC, children: (0, s.jsx)(V.I, {}) })
                        : null != th && (0, s.jsx)(x.Lp, { text: th, disableColor: !0, className: te.qS }),
                    (0, s.jsx)(ti, {
                        guildId: X,
                        sku: Y,
                        isCardHovered: tc,
                        variant: i,
                        trackCardClick: tH,
                        analyticsLocations: td,
                        analyticsContext: to,
                    }),
                    null != ty
                        ? tm
                            ? (0, s.jsx)(K.A, {
                                  containerClassName: te.Vl,
                                  foregroundImageClassName: te.wP,
                                  cardImage: ty,
                                  altText: Y.name,
                                  shape: "custom",
                                  backgroundImageClassName: te.GC,
                                  cardBackgroundImage: tS,
                              })
                            : (0, s.jsx)(q.t, {})
                        : (0, s.jsx)("div", {
                              className: te.t7,
                              children: (0, s.jsx)(m.q, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: te.Cw,
                              }),
                          }),
                    2 !== i
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)("div", { className: te.iZ, style: { background: tp } }),
                                  (0, s.jsxs)("div", {
                                      className: te.zH,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: c()(te.gn, { [te.ov]: !(0, k.mC)(Y), [te.w4]: tk }),
                                              children: [
                                                  tm &&
                                                      (0, s.jsx)("div", {
                                                          className: te.S1,
                                                          children: (0, s.jsx)(W.V, { textColor: "always-white" }),
                                                      }),
                                                  tm
                                                      ? (0, s.jsxs)(s.Fragment, {
                                                            children: [
                                                                null != tf &&
                                                                    (0, s.jsx)("img", {
                                                                        src: tf.toString(),
                                                                        alt: tx,
                                                                        className: te.ye,
                                                                    }),
                                                                (0, s.jsx)(H.E, {
                                                                    color: "always-white",
                                                                    variant: "text-md/medium",
                                                                    lineClamp: 1,
                                                                    children: Y.name,
                                                                }),
                                                            ],
                                                        })
                                                      : (0, s.jsx)(q.r, {}),
                                              ],
                                          }),
                                          (0, s.jsx)("div", {
                                              className: te.iQ,
                                              children: tm ? tD : (0, s.jsx)(q.r, {}),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)("div", {
                                      className: te.li,
                                      children: (0, s.jsxs)(I.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              tT
                                                  ? (0, s.jsx)(E.$, {
                                                        variant: "primary",
                                                        onMouseDown: tL,
                                                        onClick: (t) => {
                                                            t.stopPropagation(),
                                                                tH(Z.bB.BUY_BUTTON),
                                                                (0, F.a)(
                                                                    Y,
                                                                    { isGift: !1 },
                                                                    {
                                                                        analyticsLocations: [
                                                                            ...td,
                                                                            S.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                        ],
                                                                        guildId: X,
                                                                    },
                                                                );
                                                        },
                                                        text:
                                                            null != tU
                                                                ? tt.intl.format(tt.t.Xp5WTn, { price: tU })
                                                                : tt.intl.string(tt.t.boqtTA),
                                                        fullWidth: !0,
                                                    })
                                                  : (0, s.jsx)(N.m, {
                                                        text: tt.intl.string(tt.t.IqlPbQ),
                                                        children: (0, s.jsx)(E.$, {
                                                            variant: "primary",
                                                            onClick: (t) => {
                                                                t.stopPropagation(), tH(Z.bB.VIEW_DETAILS_BUTTON), tb();
                                                            },
                                                            text: tt.intl.string(tt.t.KLBTgF),
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                              (0, s.jsx)(z.A, {
                                                  onGift: (t) => {
                                                      t.stopPropagation(),
                                                          tH(Z.bB.GIFT_BUTTON),
                                                          (0, F.a)(
                                                              Y,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...td,
                                                                      S.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
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
