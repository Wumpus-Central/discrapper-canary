n.d(t, {
    A: () => J,
    s: () => Y,
}),
    n(896048);
var r,
    i = n(627968),
    l = n(64700),
    a = n(310784),
    s = n.n(a),
    o = n(503698),
    c = n.n(o),
    u = n(989349),
    d = n.n(u),
    p = n(158954),
    m = n(311907),
    f = n(230109),
    g = n(397927),
    h = n(775602),
    _ = n(793574),
    b = n(688810),
    A = n(654107),
    y = n(139146),
    v = n(713517),
    x = n(427209),
    O = n(544028),
    E = n(67480),
    j = n(954571),
    C = n(580630),
    I = n(871123),
    S = n(439303),
    T = n(832163),
    N = n(35826),
    P = n(310962),
    w = n(44724),
    R = n(486318),
    D = n(345938),
    L = n(533406),
    M = n(366523),
    k = n(300182),
    U = n(620999),
    G = n(696028),
    B = n(914887),
    F = n(995393),
    H = n(652215),
    V = n(818348),
    z = n(985018),
    W = n(610084);
let K = [
    [0, 30],
    [0, 30],
    [0, 20],
    [0, 0],
];
var Y = (((r = {})[(r.SMALL = 0)] = "SMALL"), (r[(r.MEDIUM = 1)] = "MEDIUM"), (r[(r.EMBEDDED = 2)] = "EMBEDDED"), r);

function q(e) {
    let {
            guildId: t,
            sku: n,
            isCardHovered: r,
            trackCardClick: a,
            variant: s,
            analyticsLocations: o,
            analyticsContext: u,
        } = e,
        d = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != n &&
                        null != t &&
                        (a(F.bB.FORWARD_BUTTON),
                        (0, D.d)({
                            sku: n,
                            guildId: t,
                            analyticsContext: u,
                            analyticsLocations: o,
                            source: "social-layer-storefront-embed",
                        }));
            },
            [n, t, a, u, o],
        ),
        m = l.useCallback(() => {
            a(F.bB.WISHLIST_BUTTON);
        }, [a]),
        f = l.useMemo(
            () =>
                c()(W.o, {
                    [W.H5]: r,
                }),
            [r],
        );
    return (0, i.jsxs)("div", {
        className: W.zu,
        children: [
            2 === s &&
                (0, i.jsx)(p.DUT, {
                    className: c()(f, W.gy),
                    onClick: d,
                    children: (0, i.jsx)(x.A, {
                        size: "refresh_sm",
                        color: "currentColor",
                    }),
                }),
            (0, i.jsx)(y._, {
                skuId: n.id,
                isCardHovered: r,
                nuxGraphic: (0, R.N)(n),
                onClick: m,
                className: c()(f, W.ij),
            }),
        ],
    });
}

function J(e) {
    var t, n, r, a, o, u, y, x, R, D;
    let {
            positionInSection: Y,
            applicationId: J,
            skuId: Q,
            variant: Z = 0,
            guildId: X,
            onClick: $,
            className: ee,
            analyticsLocations: et,
        } = e,
        en = l.useRef(null),
        er = (0, m.bG)([E.A], () => E.A.get(Q)),
        ei = (0, m.bG)([O.A], () => (0, p.Mwr)(O.A.theme)),
        el = (0, m.bG)([h.A], () => h.A.useReducedMotion),
        { isHoveringOrFocusing: ea } = (0, v.A)(en),
        es = (0, S.jM)(),
        { analyticsLocations: eo } = (0, b.Ay)(null != et ? et : []),
        ec = l.useRef({
            positionInSection: Y,
            analyticsLocations: eo,
        }),
        [eu, ed] = l.useState(!1),
        ep = (0, m.bG)([T.A], () => (null != Q ? T.A.getNormalizedSKUEligibility(Q) : void 0), [Q]),
        em = (0, P.A)(Q, eu),
        ef = l.useCallback((e) => {
            ed(e);
        }, []),
        eg = l.useMemo(
            () =>
                c()(W.Nr, {
                    [W.ax]: 0 === Z,
                    [W.GW]: 1 === Z,
                    [W.jz]: 2 === Z,
                }),
            [Z],
        ),
        { handleCardHover: eh, handleCardUnhover: e_ } = (0, G.Z)(Q, es, Y, eo),
        { handleCardVisibilityChange: eb } = (0, B.a)(Q, es, Y, eo);
    l.useEffect(() => {
        eb(eu);
    }, [eu]);
    let eA = l.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: n } = ec.current,
                    {
                        sessionId: r,
                        guildId: i,
                        pageIndex: l,
                        pageTitle: a,
                        pageSection: s,
                        pageSectionTitle: o,
                        isUserGuildMember: c,
                        pageHasLeaderboard: u,
                    } = es;
                j.default.track(H.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: r,
                    sku_id: Q,
                    guild_id: i,
                    page_index: l,
                    page_title: a,
                    page_section: s,
                    page_section_title: o,
                    position_in_section: n,
                    is_user_guild_member: c,
                    page_has_leaderboard: u,
                    cta_type: e,
                    location_stack: t,
                });
            },
            [Q, es],
        ),
        { primaryIconAsset: ey, primaryIconLabel: ev } = l.useMemo(() => (0, I.Cv)(er, J), [er, J]),
        ex = (0, m.bG)([T.A], () => {
            var e, t;
            return null != X && null != (e = null == (t = T.A.getStorefrontState(X)) ? void 0 : t.activePage) ? e : 0;
        }),
        eO = l.useMemo(() => {
            var e, t;
            if (
                (null == er || null == (t = er.tenantMetadata) || null == (e = t.socialLayer) ? void 0 : e.expiresAt) ==
                null
            )
                return null;
            let n = d()(),
                r = Math.max(d()(er.tenantMetadata.socialLayer.expiresAt).diff(n, "days"), 1);
            return r <= 3
                ? z.intl.format(z.t.PWw4Vp, {
                      days: r,
                  })
                : null;
        }, [null == er || null == (u = er.tenantMetadata) || null == (o = u.socialLayer) ? void 0 : o.expiresAt]),
        eE = (0, I.xf)(er),
        [ej, eC] = (0, A.rh)(null == eE ? void 0 : eE.toString(), "#000000"),
        eI = l.useMemo(() => {
            let e = s()(ej).darken(1.5).alpha(0.9).hex(),
                t = s()(ej).alpha(0).hex(),
                [n, r] = K[Z];
            return (0 !== n || 0 !== r) && em
                ? "linear-gradient(to top, "
                      .concat(e, " ")
                      .concat(30 + n, "%, ")
                      .concat(t, " ")
                      .concat(30 + r, "%)")
                : "none";
        }, [ej, Z, em]),
        eS = l.useCallback(() => {
            (0, w.X)({
                guildId: X,
            });
        }, [X]),
        eT = l.useCallback(
            (e) => {
                (eA(F.bB.CARD), null != $)
                    ? $(e)
                    : null != X &&
                      (0, N.A)({
                          guildId: X,
                          pageIndex: ex,
                          skuId: Q,
                          slug: null == er ? void 0 : er.slug,
                      });
            },
            [eA, X, Q, $, ex, null == er ? void 0 : er.slug],
        );
    if (null == er) return null;
    let eN = (0, I.fq)(er);
    return (0, i.jsx)(f.L, {
        innerRef: en,
        onChange: ef,
        threshold: 0,
        children: (0, i.jsx)(p.vN3, {
            children: (0, i.jsxs)(g.sqX, {
                onClick: eT,
                onMouseDown: eS,
                onMouseEnter: eh,
                onMouseLeave: e_,
                className: c()(
                    eg,
                    {
                        [W.Zl]: !el && 2 !== Z,
                        [W.BN]: ei,
                        [ei ? W.Mn : W.YF]: ea,
                        [W.Rc]: !em,
                    },
                    ee,
                ),
                ref: en,
                "aria-label": er.name,
                children: [
                    null != eO &&
                        (0, i.jsx)(g.LpS, {
                            text: eO,
                            disableColor: !0,
                            className: W.qS,
                        }),
                    (0, i.jsx)(q, {
                        guildId: X,
                        sku: er,
                        isCardHovered: ea,
                        variant: Z,
                        trackCardClick: eA,
                        analyticsLocations: eo,
                        analyticsContext: es,
                    }),
                    null != eN
                        ? em
                            ? (0, i.jsx)(M.A, {
                                  containerClassName: W.Vl,
                                  foregroundImageClassName: W.wP,
                                  cardImage: eN,
                                  altText: er.name,
                                  shape: "custom",
                                  backgroundImageClassName: W.GC,
                                  cardBackgroundImage: eE,
                              })
                            : (0, i.jsx)(U.t, {})
                        : (0, i.jsx)("div", {
                              className: W.t7,
                              children: (0, i.jsx)(p.qyI, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: W.Cw,
                              }),
                          }),
                    2 !== Z
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("div", {
                                      className: W.iZ,
                                      style: {
                                          background: eI,
                                      },
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: W.zH,
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: W.gn,
                                              children: em
                                                  ? (0, i.jsx)(g.Text, {
                                                        color: "always-white",
                                                        variant: "text-md/medium",
                                                        lineClamp: 1,
                                                        children: er.name,
                                                    })
                                                  : (0, i.jsx)(U.r, {}),
                                          }),
                                          (0, i.jsx)("div", {
                                              className: W.iQ,
                                              children: em
                                                  ? (0, i.jsxs)(i.Fragment, {
                                                        children: [
                                                            null != ey &&
                                                                (0, i.jsx)("img", {
                                                                    src: ey.toString(),
                                                                    alt: ev,
                                                                    className: W.ye,
                                                                }),
                                                            (0, i.jsx)(g.Text, {
                                                                variant: "text-md/bold",
                                                                color: "always-white",
                                                                lineClamp: 1,
                                                                children: (0, C.$g)(
                                                                    null !=
                                                                        (t = null == (y = er.price) ? void 0 : y.amount)
                                                                        ? t
                                                                        : 0,
                                                                    null !=
                                                                        (n =
                                                                            null == (x = er.price)
                                                                                ? void 0
                                                                                : x.currency)
                                                                        ? n
                                                                        : V.Yr.USD,
                                                                ),
                                                            }),
                                                        ],
                                                    })
                                                  : (0, i.jsx)(U.r, {}),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)("div", {
                                      className: W.li,
                                      children: (0, i.jsxs)(p.e2v, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, i.jsx)(p.$nd, {
                                                  variant: "primary",
                                                  onClick: (e) => {
                                                      e.stopPropagation(),
                                                          eA(F.bB.BUY_BUTTON),
                                                          (0, L.a)(
                                                              er,
                                                              {
                                                                  isGift: !1,
                                                              },
                                                              {
                                                                  analyticsLocations: [
                                                                      _.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                  ],
                                                                  guildId: X,
                                                              },
                                                          );
                                                  },
                                                  text: ep
                                                      ? z.intl.format(z.t.Xp5WTn, {
                                                            price: (0, C.$g)(
                                                                null != (r = null == (R = er.price) ? void 0 : R.amount)
                                                                    ? r
                                                                    : 0,
                                                                null !=
                                                                    (a = null == (D = er.price) ? void 0 : D.currency)
                                                                    ? a
                                                                    : V.Yr.USD,
                                                            ),
                                                        })
                                                      : z.intl.string(z.t.cg0M2H),
                                                  fullWidth: !0,
                                                  disabled: !ep,
                                              }),
                                              (0, i.jsx)(k.A, {
                                                  onGift: (e) => {
                                                      e.stopPropagation(),
                                                          eA(F.bB.GIFT_BUTTON),
                                                          (0, L.a)(
                                                              er,
                                                              {
                                                                  isGift: !0,
                                                              },
                                                              {
                                                                  analyticsLocations: [
                                                                      _.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
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
