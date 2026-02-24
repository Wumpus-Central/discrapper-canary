n.d(t, { A: () => Z, s: () => J });
var i,
    l = n(627968),
    r = n(64700),
    a = n(310784),
    s = n.n(a),
    o = n(503698),
    d = n.n(o),
    c = n(989349),
    u = n.n(c),
    _ = n(158954),
    m = n(311907),
    h = n(230109),
    p = n(990078),
    g = n(397927),
    A = n(775602),
    x = n(793574),
    f = n(688810),
    C = n(139146),
    E = n(713517),
    I = n(427209),
    b = n(544028),
    T = n(67480),
    v = n(954571),
    S = n(580630),
    y = n(871123),
    N = n(733391),
    j = n(439303),
    L = n(832163),
    R = n(35826),
    P = n(310962),
    M = n(44724),
    w = n(486318),
    k = n(345938),
    D = n(533406),
    O = n(366523),
    U = n(300182),
    G = n(620999),
    B = n(696028),
    F = n(914887),
    H = n(995393),
    V = n(652215),
    W = n(818348),
    q = n(985018),
    Y = n(610084);
let z = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    K = s()("#000000").darken(1.5).alpha(0.9).hex(),
    Q = s()("#000000").alpha(0).hex();
var J = (((i = {})[(i.SMALL = 0)] = "SMALL"), (i[(i.MEDIUM = 1)] = "MEDIUM"), (i[(i.EMBEDDED = 2)] = "EMBEDDED"), i);
function X(e) {
    let {
            guildId: t,
            sku: n,
            isCardHovered: i,
            trackCardClick: a,
            variant: s,
            analyticsLocations: o,
            analyticsContext: c,
        } = e,
        u = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != n &&
                        null != t &&
                        (a(H.bB.FORWARD_BUTTON),
                        (0, k.d)({
                            sku: n,
                            guildId: t,
                            analyticsContext: c,
                            analyticsLocations: o,
                            source: "social-layer-storefront-embed",
                        }));
            },
            [n, t, a, c, o],
        ),
        m = r.useCallback(() => {
            a(H.bB.WISHLIST_BUTTON);
        }, [a]),
        h = r.useMemo(() => d()(Y.o, { [Y.H5]: i }), [i]);
    return (0, l.jsxs)("div", {
        className: Y.zu,
        children: [
            2 === s &&
                (0, l.jsx)(_.DUT, {
                    className: d()(h, Y.gy),
                    onClick: u,
                    children: (0, l.jsx)(I.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, l.jsx)(C._, {
                skuId: n.id,
                productName: n.name,
                isCardHovered: i,
                nuxGraphic: (0, w.N)(n),
                onClick: m,
                className: d()(h, Y.ij),
            }),
        ],
    });
}
function Z(e) {
    let {
            positionInSection: t,
            applicationId: n,
            skuId: i,
            variant: a = 0,
            guildId: s,
            onClick: o,
            className: c,
            analyticsLocations: C,
        } = e,
        I = r.useRef(null),
        w = r.useRef(null),
        k = (0, m.bG)([T.A], () => T.A.get(i)),
        J = (0, m.bG)([b.A], () => (0, _.Mwr)(b.A.theme)),
        Z = (0, m.bG)([A.A], () => A.A.useReducedMotion),
        { isHoveringOrFocusing: $ } = (0, E.A)(I),
        ee = (0, j.jM)(),
        { analyticsLocations: et } = (0, f.Ay)(C ?? []),
        en = r.useRef({ positionInSection: t, analyticsLocations: et }),
        [ei, el] = r.useState(!1),
        er = (0, m.bG)([L.A], () => (null != i ? L.A.getNormalizedSKUEligibility(i) : void 0), [i]),
        ea = (0, P.A)(i, ei),
        es = r.useCallback((e) => {
            el(e);
        }, []),
        eo = r.useMemo(() => d()(Y.Nr, { [Y.ax]: 0 === a, [Y.GW]: 1 === a, [Y.jz]: 2 === a }), [a]),
        { handleCardHover: ed, handleCardUnhover: ec } = (0, B.Z)(i, ee, t, et),
        { handleCardVisibilityChange: eu } = (0, F.a)(i, ee, t, et);
    r.useEffect(() => {
        eu(ei);
    }, [ei]);
    let e_ = r.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: n } = en.current,
                    {
                        sessionId: l,
                        guildId: r,
                        pageIndex: a,
                        pageTitle: s,
                        pageSection: o,
                        pageSectionTitle: d,
                        isUserGuildMember: c,
                        pageHasLeaderboard: u,
                    } = ee;
                v.default.track(V.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: l,
                    sku_id: i,
                    guild_id: r,
                    page_index: a,
                    page_title: s,
                    page_section: o,
                    page_section_title: d,
                    position_in_section: n,
                    is_user_guild_member: c,
                    page_has_leaderboard: u,
                    cta_type: e,
                    location_stack: t,
                });
            },
            [i, ee],
        ),
        { primaryIconAsset: em, primaryIconLabel: eh } = r.useMemo(() => (0, y.Cv)(k, n), [k, n]),
        ep = (0, m.bG)([L.A], () => (null != s ? (L.A.getStorefrontState(s)?.activePage ?? 0) : 0)),
        eg = r.useMemo(() => {
            if (k?.tenantMetadata?.socialLayer?.expiresAt == null) return null;
            let e = u()(),
                t = Math.max(u()(k.tenantMetadata.socialLayer.expiresAt).diff(e, "days"), 1);
            return t <= 3 ? q.intl.format(q.t.PWw4Vp, { days: t }) : null;
        }, [k?.tenantMetadata?.socialLayer?.expiresAt]),
        eA = (0, y.xf)(k),
        ex = r.useMemo(() => {
            if (!ea) return "none";
            let [e, t] = z[a];
            return `linear-gradient(to top, ${K} ${30 + e}%, ${Q} ${30 + t}%)`;
        }, [a, ea]),
        ef = r.useCallback(() => {
            (0, M.X)({ guildId: s });
        }, [s]),
        eC = r.useCallback(() => {
            null != s && (0, N.iR)(s, i, "SocialLayerStorefrontCard");
        }, [s, i]),
        eE = r.useCallback(() => {
            ed(),
                null != s &&
                    (w.current = setTimeout(() => {
                        (0, N.iR)(s, i, "SocialLayerStorefrontCard");
                    }, 1e3));
        }, [s, i, ed]),
        eI = r.useCallback(() => {
            ec(), null != w.current && (clearTimeout(w.current), (w.current = null));
        }, [ec]);
    r.useEffect(
        () => () => {
            null != w.current && clearTimeout(w.current);
        },
        [],
    );
    let eb = r.useCallback(() => {
            null != s && (0, R.A)({ guildId: s, pageIndex: ep, skuId: i, slug: k?.slug });
        }, [s, i, ep, k?.slug]),
        eT = r.useCallback(
            (e) => {
                (e_(H.bB.CARD), null != o) ? o(e) : eb();
            },
            [e_, o, eb],
        );
    if (null == k) return null;
    let ev = (0, y.fq)(k);
    return (0, l.jsx)(h.L, {
        innerRef: I,
        onChange: es,
        threshold: 0,
        children: (0, l.jsx)(_.vN3, {
            children: (0, l.jsxs)(g.sqX, {
                onClick: eT,
                onMouseDown: ef,
                onMouseEnter: eE,
                onMouseLeave: eI,
                className: d()(eo, { [Y.Zl]: !Z && 2 !== a, [Y.BN]: J, [J ? Y.Mn : Y.YF]: $, [Y.Rc]: !ea }, c),
                ref: I,
                "aria-label": k.name,
                children: [
                    null != eg && (0, l.jsx)(g.LpS, { text: eg, disableColor: !0, className: Y.qS }),
                    (0, l.jsx)(X, {
                        guildId: s,
                        sku: k,
                        isCardHovered: $,
                        variant: a,
                        trackCardClick: e_,
                        analyticsLocations: et,
                        analyticsContext: ee,
                    }),
                    null != ev
                        ? ea
                            ? (0, l.jsx)(O.A, {
                                  containerClassName: Y.Vl,
                                  foregroundImageClassName: Y.wP,
                                  cardImage: ev,
                                  altText: k.name,
                                  shape: "custom",
                                  backgroundImageClassName: Y.GC,
                                  cardBackgroundImage: eA,
                              })
                            : (0, l.jsx)(G.t, {})
                        : (0, l.jsx)("div", {
                              className: Y.t7,
                              children: (0, l.jsx)(_.qyI, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: Y.Cw,
                              }),
                          }),
                    2 !== a
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)("div", { className: Y.iZ, style: { background: ex } }),
                                  (0, l.jsxs)("div", {
                                      className: Y.zH,
                                      children: [
                                          (0, l.jsx)("div", {
                                              className: Y.gn,
                                              children: ea
                                                  ? (0, l.jsxs)(l.Fragment, {
                                                        children: [
                                                            null != em &&
                                                                (0, l.jsx)("img", {
                                                                    src: em.toString(),
                                                                    alt: eh,
                                                                    className: Y.ye,
                                                                }),
                                                            (0, l.jsx)(g.Text, {
                                                                color: "always-white",
                                                                variant: "text-md/medium",
                                                                lineClamp: 1,
                                                                children: k.name,
                                                            }),
                                                        ],
                                                    })
                                                  : (0, l.jsx)(G.r, {}),
                                          }),
                                          (0, l.jsx)("div", {
                                              className: Y.iQ,
                                              children: ea
                                                  ? (0, l.jsxs)(l.Fragment, {
                                                        children: [
                                                            (0, l.jsx)(g.Text, {
                                                                variant: "text-md/bold",
                                                                color: "always-white",
                                                                lineClamp: 1,
                                                                children: (0, S.$g)(
                                                                    k.price?.amount ?? 0,
                                                                    k.price?.currency ?? W.Yr.USD,
                                                                ),
                                                            }),
                                                            null != k.orbsReward &&
                                                                k.orbsReward > 0 &&
                                                                (0, l.jsx)("div", {
                                                                    className: Y.pt,
                                                                    children: (0, l.jsx)(g.Text, {
                                                                        variant: "text-sm/semibold",
                                                                        color: "currentColor",
                                                                        children: q.intl.format(q.t.GiVd2Q, {
                                                                            orbCount: k.orbsReward,
                                                                            orbIconHook: () =>
                                                                                (0, l.jsx)(
                                                                                    _.Cp8,
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
                                                  : (0, l.jsx)(G.r, {}),
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)("div", {
                                      className: Y.li,
                                      children: (0, l.jsxs)(_.e2v, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              er
                                                  ? (0, l.jsx)(_.$nd, {
                                                        variant: "primary",
                                                        onMouseDown: eC,
                                                        onClick: (e) => {
                                                            e.stopPropagation(),
                                                                e_(H.bB.BUY_BUTTON),
                                                                (0, D.a)(
                                                                    k,
                                                                    { isGift: !1 },
                                                                    {
                                                                        analyticsLocations: [
                                                                            ...et,
                                                                            x.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                        ],
                                                                        guildId: s,
                                                                    },
                                                                );
                                                        },
                                                        text: q.intl.format(q.t.Xp5WTn, {
                                                            price: (0, S.$g)(
                                                                k.price?.amount ?? 0,
                                                                k.price?.currency ?? W.Yr.USD,
                                                            ),
                                                        }),
                                                        fullWidth: !0,
                                                    })
                                                  : (0, l.jsx)(p.m, {
                                                        text: q.intl.string(q.t.IqlPbQ),
                                                        children: (0, l.jsx)(_.$nd, {
                                                            variant: "primary",
                                                            onClick: (e) => {
                                                                e.stopPropagation(), e_(H.bB.VIEW_DETAILS_BUTTON), eb();
                                                            },
                                                            text: q.intl.string(q.t.KLBTgF),
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                              (0, l.jsx)(U.A, {
                                                  onGift: (e) => {
                                                      e.stopPropagation(),
                                                          e_(H.bB.GIFT_BUTTON),
                                                          (0, D.a)(
                                                              k,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...et,
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
