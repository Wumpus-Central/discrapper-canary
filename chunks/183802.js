n.d(t, { A: () => J, s: () => K });
var i,
    l = n(627968),
    a = n(64700),
    r = n(310784),
    s = n.n(r),
    o = n(503698),
    d = n.n(o),
    c = n(989349),
    u = n.n(c),
    m = n(158954),
    _ = n(311907),
    h = n(230109),
    p = n(397927),
    g = n(775602),
    A = n(793574),
    f = n(688810),
    x = n(139146),
    E = n(713517),
    C = n(427209),
    I = n(544028),
    T = n(67480),
    v = n(954571),
    N = n(580630),
    S = n(871123),
    b = n(439303),
    j = n(832163),
    y = n(35826),
    R = n(310962),
    L = n(44724),
    M = n(486318),
    O = n(345938),
    D = n(533406),
    P = n(366523),
    k = n(300182),
    U = n(620999),
    w = n(696028),
    G = n(914887),
    B = n(995393),
    F = n(652215),
    H = n(818348),
    V = n(985018),
    z = n(610084);
let W = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    Y = s()("#000000").darken(1.5).alpha(0.9).hex(),
    q = s()("#000000").alpha(0).hex();
var K = (((i = {})[(i.SMALL = 0)] = "SMALL"), (i[(i.MEDIUM = 1)] = "MEDIUM"), (i[(i.EMBEDDED = 2)] = "EMBEDDED"), i);
function Q(e) {
    let {
            guildId: t,
            sku: n,
            isCardHovered: i,
            trackCardClick: r,
            variant: s,
            analyticsLocations: o,
            analyticsContext: c,
        } = e,
        u = a.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != n &&
                        null != t &&
                        (r(B.bB.FORWARD_BUTTON),
                        (0, O.d)({
                            sku: n,
                            guildId: t,
                            analyticsContext: c,
                            analyticsLocations: o,
                            source: "social-layer-storefront-embed",
                        }));
            },
            [n, t, r, c, o],
        ),
        _ = a.useCallback(() => {
            r(B.bB.WISHLIST_BUTTON);
        }, [r]),
        h = a.useMemo(() => d()(z.o, { [z.H5]: i }), [i]);
    return (0, l.jsxs)("div", {
        className: z.zu,
        children: [
            2 === s &&
                (0, l.jsx)(m.DUT, {
                    className: d()(h, z.gy),
                    onClick: u,
                    children: (0, l.jsx)(C.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, l.jsx)(x._, {
                skuId: n.id,
                isCardHovered: i,
                nuxGraphic: (0, M.N)(n),
                onClick: _,
                className: d()(h, z.ij),
            }),
        ],
    });
}
function J(e) {
    let {
            positionInSection: t,
            applicationId: n,
            skuId: i,
            variant: r = 0,
            guildId: s,
            onClick: o,
            className: c,
            analyticsLocations: x,
        } = e,
        C = a.useRef(null),
        M = (0, _.bG)([T.A], () => T.A.get(i)),
        O = (0, _.bG)([I.A], () => (0, m.Mwr)(I.A.theme)),
        K = (0, _.bG)([g.A], () => g.A.useReducedMotion),
        { isHoveringOrFocusing: J } = (0, E.A)(C),
        X = (0, b.jM)(),
        { analyticsLocations: Z } = (0, f.Ay)(x ?? []),
        $ = a.useRef({ positionInSection: t, analyticsLocations: Z }),
        [ee, et] = a.useState(!1),
        en = (0, _.bG)([j.A], () => (null != i ? j.A.getNormalizedSKUEligibility(i) : void 0), [i]),
        ei = (0, R.A)(i, ee),
        el = a.useCallback((e) => {
            et(e);
        }, []),
        ea = a.useMemo(() => d()(z.Nr, { [z.ax]: 0 === r, [z.GW]: 1 === r, [z.jz]: 2 === r }), [r]),
        { handleCardHover: er, handleCardUnhover: es } = (0, w.Z)(i, X, t, Z),
        { handleCardVisibilityChange: eo } = (0, G.a)(i, X, t, Z);
    a.useEffect(() => {
        eo(ee);
    }, [ee]);
    let ed = a.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: n } = $.current,
                    {
                        sessionId: l,
                        guildId: a,
                        pageIndex: r,
                        pageTitle: s,
                        pageSection: o,
                        pageSectionTitle: d,
                        isUserGuildMember: c,
                        pageHasLeaderboard: u,
                    } = X;
                v.default.track(F.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: l,
                    sku_id: i,
                    guild_id: a,
                    page_index: r,
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
            [i, X],
        ),
        { primaryIconAsset: ec, primaryIconLabel: eu } = a.useMemo(() => (0, S.Cv)(M, n), [M, n]),
        em = (0, _.bG)([j.A], () => (null != s ? (j.A.getStorefrontState(s)?.activePage ?? 0) : 0)),
        e_ = a.useMemo(() => {
            if (M?.tenantMetadata?.socialLayer?.expiresAt == null) return null;
            let e = u()(),
                t = Math.max(u()(M.tenantMetadata.socialLayer.expiresAt).diff(e, "days"), 1);
            return t <= 3 ? V.intl.format(V.t.PWw4Vp, { days: t }) : null;
        }, [M?.tenantMetadata?.socialLayer?.expiresAt]),
        eh = (0, S.xf)(M),
        ep = a.useMemo(() => {
            if (!ei) return "none";
            let [e, t] = W[r];
            return `linear-gradient(to top, ${Y} ${30 + e}%, ${q} ${30 + t}%)`;
        }, [r, ei]),
        eg = a.useCallback(() => {
            (0, L.X)({ guildId: s });
        }, [s]),
        eA = a.useCallback(
            (e) => {
                (ed(B.bB.CARD), null != o)
                    ? o(e)
                    : null != s && (0, y.A)({ guildId: s, pageIndex: em, skuId: i, slug: M?.slug });
            },
            [ed, s, i, o, em, M?.slug],
        );
    if (null == M) return null;
    let ef = (0, S.fq)(M);
    return (0, l.jsx)(h.L, {
        innerRef: C,
        onChange: el,
        threshold: 0,
        children: (0, l.jsx)(m.vN3, {
            children: (0, l.jsxs)(p.sqX, {
                onClick: eA,
                onMouseDown: eg,
                onMouseEnter: er,
                onMouseLeave: es,
                className: d()(ea, { [z.Zl]: !K && 2 !== r, [z.BN]: O, [O ? z.Mn : z.YF]: J, [z.Rc]: !ei }, c),
                ref: C,
                "aria-label": M.name,
                children: [
                    null != e_ && (0, l.jsx)(p.LpS, { text: e_, disableColor: !0, className: z.qS }),
                    (0, l.jsx)(Q, {
                        guildId: s,
                        sku: M,
                        isCardHovered: J,
                        variant: r,
                        trackCardClick: ed,
                        analyticsLocations: Z,
                        analyticsContext: X,
                    }),
                    null != ef
                        ? ei
                            ? (0, l.jsx)(P.A, {
                                  containerClassName: z.Vl,
                                  foregroundImageClassName: z.wP,
                                  cardImage: ef,
                                  altText: M.name,
                                  shape: "custom",
                                  backgroundImageClassName: z.GC,
                                  cardBackgroundImage: eh,
                              })
                            : (0, l.jsx)(U.t, {})
                        : (0, l.jsx)("div", {
                              className: z.t7,
                              children: (0, l.jsx)(m.qyI, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: z.Cw,
                              }),
                          }),
                    2 !== r
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)("div", { className: z.iZ, style: { background: ep } }),
                                  (0, l.jsxs)("div", {
                                      className: z.zH,
                                      children: [
                                          (0, l.jsx)("div", {
                                              className: z.gn,
                                              children: ei
                                                  ? (0, l.jsxs)(l.Fragment, {
                                                        children: [
                                                            null != ec &&
                                                                (0, l.jsx)("img", {
                                                                    src: ec.toString(),
                                                                    alt: eu,
                                                                    className: z.ye,
                                                                }),
                                                            (0, l.jsx)(p.Text, {
                                                                color: "always-white",
                                                                variant: "text-md/medium",
                                                                lineClamp: 1,
                                                                children: M.name,
                                                            }),
                                                        ],
                                                    })
                                                  : (0, l.jsx)(U.r, {}),
                                          }),
                                          (0, l.jsx)("div", {
                                              className: z.iQ,
                                              children: ei
                                                  ? (0, l.jsxs)(l.Fragment, {
                                                        children: [
                                                            (0, l.jsx)(p.Text, {
                                                                variant: "text-md/bold",
                                                                color: "always-white",
                                                                lineClamp: 1,
                                                                children: (0, N.$g)(
                                                                    M.price?.amount ?? 0,
                                                                    M.price?.currency ?? H.Yr.USD,
                                                                ),
                                                            }),
                                                            null != M.orbsReward &&
                                                                M.orbsReward > 0 &&
                                                                (0, l.jsx)("div", {
                                                                    className: z.pt,
                                                                    children: (0, l.jsx)(p.Text, {
                                                                        variant: "text-sm/semibold",
                                                                        color: "currentColor",
                                                                        children: V.intl.format(V.t.GiVd2Q, {
                                                                            orbCount: M.orbsReward,
                                                                            orbIconHook: () =>
                                                                                (0, l.jsx)(
                                                                                    m.Cp8,
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
                                                  : (0, l.jsx)(U.r, {}),
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)("div", {
                                      className: z.li,
                                      children: (0, l.jsxs)(m.e2v, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, l.jsx)(m.$nd, {
                                                  variant: "primary",
                                                  onClick: (e) => {
                                                      e.stopPropagation(),
                                                          ed(B.bB.BUY_BUTTON),
                                                          (0, D.a)(
                                                              M,
                                                              { isGift: !1 },
                                                              {
                                                                  analyticsLocations: [
                                                                      A.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                  ],
                                                                  guildId: s,
                                                              },
                                                          );
                                                  },
                                                  text: en
                                                      ? V.intl.format(V.t.Xp5WTn, {
                                                            price: (0, N.$g)(
                                                                M.price?.amount ?? 0,
                                                                M.price?.currency ?? H.Yr.USD,
                                                            ),
                                                        })
                                                      : V.intl.string(V.t.cg0M2H),
                                                  fullWidth: !0,
                                                  disabled: !en,
                                              }),
                                              (0, l.jsx)(k.A, {
                                                  onGift: (e) => {
                                                      e.stopPropagation(),
                                                          ed(B.bB.GIFT_BUTTON),
                                                          (0, D.a)(
                                                              M,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      A.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
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
