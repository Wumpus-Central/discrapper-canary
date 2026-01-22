n.d(t, {
    A: () => Q,
    s: () => X,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(310784),
    s = n.n(a),
    o = n(503698),
    l = n.n(o),
    c = n(989349),
    u = n.n(c),
    d = n(158954),
    f = n(311907),
    p = n(230109),
    _ = n(397927),
    h = n(775602),
    m = n(793574),
    g = n(688810),
    E = n(654107),
    b = n(139146),
    y = n(713517),
    O = n(427209),
    A = n(544028),
    v = n(67480),
    S = n(954571),
    I = n(580630),
    T = n(871123),
    C = n(439303),
    N = n(832163),
    R = n(35826),
    w = n(310962),
    P = n(44724),
    D = n(486318),
    x = n(345938),
    L = n(533406),
    j = n(366523),
    M = n(300182),
    k = n(620999),
    U = n(696028),
    G = n(914887),
    V = n(995393),
    F = n(652215),
    B = n(818348),
    H = n(985018),
    Y = n(610084);
let W = 80,
    K = [
        [0, 30],
        [0, 30],
        [0, 20],
        [0, 0],
    ],
    z = 30,
    q = 3;
var X = (function (e) {
    return (e[(e.SMALL = 0)] = "SMALL"), (e[(e.MEDIUM = 1)] = "MEDIUM"), (e[(e.EMBEDDED = 2)] = "EMBEDDED"), e;
})({});
function Z(e) {
    let {
            guildId: t,
            sku: n,
            isCardHovered: a,
            trackCardClick: s,
            variant: o,
            analyticsLocations: c,
            analyticsContext: u,
        } = e,
        f = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != n &&
                        null != t &&
                        (s(V.bB.FORWARD_BUTTON),
                        (0, x.d)({
                            sku: n,
                            guildId: t,
                            analyticsContext: u,
                            analyticsLocations: c,
                            source: "social-layer-storefront-embed",
                        }));
            },
            [n, t, s, u, c],
        ),
        p = i.useCallback(() => {
            s(V.bB.WISHLIST_BUTTON);
        }, [s]),
        _ = i.useMemo(() => l()(Y.o, { [Y.H5]: a }), [a]);
    return (0, r.jsxs)("div", {
        className: Y.zu,
        children: [
            2 === o &&
                (0, r.jsx)(d.DUT, {
                    className: l()(_, Y.gy),
                    onClick: f,
                    children: (0, r.jsx)(O.A, {
                        size: "refresh_sm",
                        color: "currentColor",
                    }),
                }),
            (0, r.jsx)(b._, {
                skuId: n.id,
                isCardHovered: a,
                nuxGraphic: (0, D.N)(n),
                onClick: p,
                className: l()(_, Y.ij),
            }),
        ],
    });
}
function Q(e) {
    var t, n, a, o, c, b, O, D, x, X;
    let {
            positionInSection: Q,
            applicationId: $,
            skuId: J,
            variant: ee = 0,
            guildId: et,
            onClick: en,
            className: er,
            analyticsLocations: ei,
        } = e,
        ea = i.useRef(null),
        es = (0, f.bG)([v.A], () => v.A.get(J)),
        eo = (0, f.bG)([A.A], () => (0, d.Mwr)(A.A.theme)),
        el = (0, f.bG)([h.A], () => h.A.useReducedMotion),
        { isHoveringOrFocusing: ec } = (0, y.A)(ea),
        eu = (0, C.jM)(),
        { analyticsLocations: ed } = (0, g.Ay)(null != ei ? ei : []),
        ef = i.useRef({
            positionInSection: Q,
            analyticsLocations: ed,
        }),
        [ep, e_] = i.useState(!1),
        eh = (0, w.A)(J, ep),
        em = i.useCallback((e) => {
            e_(e);
        }, []),
        eg = i.useMemo(
            () =>
                l()(Y.Nr, {
                    [Y.ax]: 0 === ee,
                    [Y.GW]: 1 === ee,
                    [Y.jz]: 2 === ee,
                }),
            [ee],
        ),
        { handleCardHover: eE, handleCardUnhover: eb } = (0, U.Z)(J, eu, Q, ed),
        { handleCardVisibilityChange: ey } = (0, G.a)(J, eu, Q, ed);
    i.useEffect(() => {
        ey(ep);
    }, [ep]);
    let eO = i.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: n } = ef.current,
                    {
                        sessionId: r,
                        guildId: i,
                        pageIndex: a,
                        pageTitle: s,
                        pageSection: o,
                        pageSectionTitle: l,
                        isUserGuildMember: c,
                        pageHasLeaderboard: u,
                    } = eu;
                S.default.track(F.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: r,
                    sku_id: J,
                    guild_id: i,
                    page_index: a,
                    page_title: s,
                    page_section: o,
                    page_section_title: l,
                    position_in_section: n,
                    is_user_guild_member: c,
                    page_has_leaderboard: u,
                    cta_type: e,
                    location_stack: t,
                });
            },
            [J, eu],
        ),
        { primaryIconAsset: eA, primaryIconLabel: ev } = i.useMemo(() => (0, T.Cv)(es, $), [es, $]),
        eS = (0, f.bG)([N.A], () => {
            var e, t;
            return null != et && null != (e = null == (t = N.A.getStorefrontState(et)) ? void 0 : t.activePage) ? e : 0;
        }),
        eI = i.useMemo(() => {
            var e, t;
            if (
                (null == es || null == (t = es.tenantMetadata) || null == (e = t.socialLayer) ? void 0 : e.expiresAt) ==
                null
            )
                return null;
            let n = u()(),
                r = Math.max(u()(es.tenantMetadata.socialLayer.expiresAt).diff(n, "days"), 1);
            return r <= q ? H.intl.format(H.t.PWw4Vp, { days: r }) : null;
        }, [null == es || null == (b = es.tenantMetadata) || null == (c = b.socialLayer) ? void 0 : c.expiresAt]),
        eT = (0, T.xf)(es),
        [eC, eN] = (0, E.rh)(null == eT ? void 0 : eT.toString(), "#000000"),
        eR = i.useMemo(() => {
            let e = s()(eC).darken(1.5).alpha(0.9).hex(),
                t = s()(eC).alpha(0).hex(),
                [n, r] = K[ee];
            return (0 !== n || 0 !== r) && eh
                ? "linear-gradient(to top, "
                      .concat(e, " ")
                      .concat(z + n, "%, ")
                      .concat(t, " ")
                      .concat(z + r, "%)")
                : "none";
        }, [eC, ee, eh]),
        ew = i.useCallback(() => {
            (0, P.X)({ guildId: et });
        }, [et]),
        eP = i.useCallback(
            (e) => {
                (eO(V.bB.CARD), null != en)
                    ? en(e)
                    : null != et &&
                      (0, R.A)({
                          guildId: et,
                          pageIndex: eS,
                          skuId: J,
                          slug: null == es ? void 0 : es.slug,
                      });
            },
            [eO, et, J, en, eS, null == es ? void 0 : es.slug],
        );
    if (null == es) return null;
    let eD = (0, T.fq)(es);
    return (0, r.jsx)(p.L, {
        innerRef: ea,
        onChange: em,
        threshold: 0,
        children: (0, r.jsx)(d.vN3, {
            children: (0, r.jsxs)(_.sqX, {
                onClick: eP,
                onMouseDown: ew,
                onMouseEnter: eE,
                onMouseLeave: eb,
                className: l()(
                    eg,
                    {
                        [Y.Zl]: !el && 2 !== ee,
                        [Y.BN]: eo,
                        [eo ? Y.Mn : Y.YF]: ec,
                        [Y.Rc]: !eh,
                    },
                    er,
                ),
                ref: ea,
                "aria-label": es.name,
                children: [
                    null != eI &&
                        (0, r.jsx)(_.LpS, {
                            text: eI,
                            disableColor: !0,
                            className: Y.qS,
                        }),
                    (0, r.jsx)(Z, {
                        guildId: et,
                        sku: es,
                        isCardHovered: ec,
                        variant: ee,
                        trackCardClick: eO,
                        analyticsLocations: ed,
                        analyticsContext: eu,
                    }),
                    null != eD
                        ? eh
                            ? (0, r.jsx)(j.A, {
                                  containerClassName: Y.Vl,
                                  foregroundImageClassName: Y.wP,
                                  cardImage: eD,
                                  altText: es.name,
                                  shape: "custom",
                                  backgroundImageClassName: Y.GC,
                                  cardBackgroundImage: eT,
                              })
                            : (0, r.jsx)(k.t, {})
                        : (0, r.jsx)("div", {
                              className: Y.t7,
                              children: (0, r.jsx)(d.qyI, {
                                  color: "white",
                                  size: "custom",
                                  height: W,
                                  width: W,
                                  className: Y.Cw,
                              }),
                          }),
                    2 !== ee
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: Y.iZ,
                                      style: { background: eR },
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: Y.zH,
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: Y.gn,
                                              children: eh
                                                  ? (0, r.jsx)(_.Text, {
                                                        color: "always-white",
                                                        variant: "text-md/medium",
                                                        lineClamp: 1,
                                                        children: es.name,
                                                    })
                                                  : (0, r.jsx)(k.r, {}),
                                          }),
                                          (0, r.jsx)("div", {
                                              className: Y.iQ,
                                              children: eh
                                                  ? (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            null != eA &&
                                                                (0, r.jsx)("img", {
                                                                    src: eA.toString(),
                                                                    alt: ev,
                                                                    className: Y.ye,
                                                                }),
                                                            (0, r.jsx)(_.Text, {
                                                                variant: "text-md/bold",
                                                                color: "always-white",
                                                                lineClamp: 1,
                                                                children: (0, I.$g)(
                                                                    null !=
                                                                        (t = null == (O = es.price) ? void 0 : O.amount)
                                                                        ? t
                                                                        : 0,
                                                                    null !=
                                                                        (n =
                                                                            null == (D = es.price)
                                                                                ? void 0
                                                                                : D.currency)
                                                                        ? n
                                                                        : B.Yr.USD,
                                                                ),
                                                            }),
                                                        ],
                                                    })
                                                  : (0, r.jsx)(k.r, {}),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)("div", {
                                      className: Y.li,
                                      children: (0, r.jsxs)(d.e2v, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, r.jsx)(d.$nd, {
                                                  variant: "primary",
                                                  onClick: (e) => {
                                                      e.stopPropagation(),
                                                          eO(V.bB.BUY_BUTTON),
                                                          (0, L.a)(
                                                              es,
                                                              { isGift: !1 },
                                                              {
                                                                  analyticsLocations: [
                                                                      m.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                  ],
                                                              },
                                                          );
                                                  },
                                                  text: H.intl.format(H.t.Xp5WTn, {
                                                      price: (0, I.$g)(
                                                          null != (a = null == (x = es.price) ? void 0 : x.amount)
                                                              ? a
                                                              : 0,
                                                          null != (o = null == (X = es.price) ? void 0 : X.currency)
                                                              ? o
                                                              : B.Yr.USD,
                                                      ),
                                                  }),
                                                  fullWidth: !0,
                                              }),
                                              (0, r.jsx)(M.A, {
                                                  onGift: (e) => {
                                                      e.stopPropagation(),
                                                          eO(V.bB.GIFT_BUTTON),
                                                          (0, L.a)(
                                                              es,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      m.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
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
