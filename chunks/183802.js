n.d(t, { A: () => X, s: () => Q });
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
    C = n(713517),
    E = n(427209),
    I = n(544028),
    T = n(67480),
    v = n(954571),
    b = n(580630),
    N = n(871123),
    S = n(733391),
    j = n(439303),
    y = n(832163),
    R = n(35826),
    L = n(310962),
    M = n(44724),
    O = n(486318),
    D = n(345938),
    P = n(533406),
    k = n(366523),
    U = n(300182),
    w = n(620999),
    G = n(696028),
    B = n(914887),
    F = n(995393),
    H = n(652215),
    V = n(818348),
    z = n(985018),
    W = n(610084);
let Y = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    q = s()("#000000").darken(1.5).alpha(0.9).hex(),
    K = s()("#000000").alpha(0).hex();
var Q = (((i = {})[(i.SMALL = 0)] = "SMALL"), (i[(i.MEDIUM = 1)] = "MEDIUM"), (i[(i.EMBEDDED = 2)] = "EMBEDDED"), i);
function J(e) {
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
                        (r(F.bB.FORWARD_BUTTON),
                        (0, D.d)({
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
            r(F.bB.WISHLIST_BUTTON);
        }, [r]),
        h = a.useMemo(() => d()(W.o, { [W.H5]: i }), [i]);
    return (0, l.jsxs)("div", {
        className: W.zu,
        children: [
            2 === s &&
                (0, l.jsx)(m.DUT, {
                    className: d()(h, W.gy),
                    onClick: u,
                    children: (0, l.jsx)(E.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, l.jsx)(x._, {
                skuId: n.id,
                productName: n.name,
                isCardHovered: i,
                nuxGraphic: (0, O.N)(n),
                onClick: _,
                className: d()(h, W.ij),
            }),
        ],
    });
}
function X(e) {
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
        E = a.useRef(null),
        O = a.useRef(null),
        D = (0, _.bG)([T.A], () => T.A.get(i)),
        Q = (0, _.bG)([I.A], () => (0, m.Mwr)(I.A.theme)),
        X = (0, _.bG)([g.A], () => g.A.useReducedMotion),
        { isHoveringOrFocusing: Z } = (0, C.A)(E),
        $ = (0, j.jM)(),
        { analyticsLocations: ee } = (0, f.Ay)(x ?? []),
        et = a.useRef({ positionInSection: t, analyticsLocations: ee }),
        [en, ei] = a.useState(!1),
        el = (0, _.bG)([y.A], () => (null != i ? y.A.getNormalizedSKUEligibility(i) : void 0), [i]),
        ea = (0, L.A)(i, en),
        er = a.useCallback((e) => {
            ei(e);
        }, []),
        es = a.useMemo(() => d()(W.Nr, { [W.ax]: 0 === r, [W.GW]: 1 === r, [W.jz]: 2 === r }), [r]),
        { handleCardHover: eo, handleCardUnhover: ed } = (0, G.Z)(i, $, t, ee),
        { handleCardVisibilityChange: ec } = (0, B.a)(i, $, t, ee);
    a.useEffect(() => {
        ec(en);
    }, [en]);
    let eu = a.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: n } = et.current,
                    {
                        sessionId: l,
                        guildId: a,
                        pageIndex: r,
                        pageTitle: s,
                        pageSection: o,
                        pageSectionTitle: d,
                        isUserGuildMember: c,
                        pageHasLeaderboard: u,
                    } = $;
                v.default.track(H.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
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
            [i, $],
        ),
        { primaryIconAsset: em, primaryIconLabel: e_ } = a.useMemo(() => (0, N.Cv)(D, n), [D, n]),
        eh = (0, _.bG)([y.A], () => (null != s ? (y.A.getStorefrontState(s)?.activePage ?? 0) : 0)),
        ep = a.useMemo(() => {
            if (D?.tenantMetadata?.socialLayer?.expiresAt == null) return null;
            let e = u()(),
                t = Math.max(u()(D.tenantMetadata.socialLayer.expiresAt).diff(e, "days"), 1);
            return t <= 3 ? z.intl.format(z.t.PWw4Vp, { days: t }) : null;
        }, [D?.tenantMetadata?.socialLayer?.expiresAt]),
        eg = (0, N.xf)(D),
        eA = a.useMemo(() => {
            if (!ea) return "none";
            let [e, t] = Y[r];
            return `linear-gradient(to top, ${q} ${30 + e}%, ${K} ${30 + t}%)`;
        }, [r, ea]),
        ef = a.useCallback(() => {
            (0, M.X)({ guildId: s });
        }, [s]),
        ex = a.useCallback(() => {
            null != s && (0, S.iR)(s, i, "SocialLayerStorefrontCard");
        }, [s, i]),
        eC = a.useCallback(() => {
            eo(),
                null != s &&
                    (O.current = setTimeout(() => {
                        (0, S.iR)(s, i, "SocialLayerStorefrontCard");
                    }, 1e3));
        }, [s, i, eo]),
        eE = a.useCallback(() => {
            ed(), null != O.current && (clearTimeout(O.current), (O.current = null));
        }, [ed]);
    a.useEffect(
        () => () => {
            null != O.current && clearTimeout(O.current);
        },
        [],
    );
    let eI = a.useCallback(
        (e) => {
            (eu(F.bB.CARD), null != o)
                ? o(e)
                : null != s && (0, R.A)({ guildId: s, pageIndex: eh, skuId: i, slug: D?.slug });
        },
        [eu, s, i, o, eh, D?.slug],
    );
    if (null == D) return null;
    let eT = (0, N.fq)(D);
    return (0, l.jsx)(h.L, {
        innerRef: E,
        onChange: er,
        threshold: 0,
        children: (0, l.jsx)(m.vN3, {
            children: (0, l.jsxs)(p.sqX, {
                onClick: eI,
                onMouseDown: ef,
                onMouseEnter: eC,
                onMouseLeave: eE,
                className: d()(es, { [W.Zl]: !X && 2 !== r, [W.BN]: Q, [Q ? W.Mn : W.YF]: Z, [W.Rc]: !ea }, c),
                ref: E,
                "aria-label": D.name,
                children: [
                    null != ep && (0, l.jsx)(p.LpS, { text: ep, disableColor: !0, className: W.qS }),
                    (0, l.jsx)(J, {
                        guildId: s,
                        sku: D,
                        isCardHovered: Z,
                        variant: r,
                        trackCardClick: eu,
                        analyticsLocations: ee,
                        analyticsContext: $,
                    }),
                    null != eT
                        ? ea
                            ? (0, l.jsx)(k.A, {
                                  containerClassName: W.Vl,
                                  foregroundImageClassName: W.wP,
                                  cardImage: eT,
                                  altText: D.name,
                                  shape: "custom",
                                  backgroundImageClassName: W.GC,
                                  cardBackgroundImage: eg,
                              })
                            : (0, l.jsx)(w.t, {})
                        : (0, l.jsx)("div", {
                              className: W.t7,
                              children: (0, l.jsx)(m.qyI, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: W.Cw,
                              }),
                          }),
                    2 !== r
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)("div", { className: W.iZ, style: { background: eA } }),
                                  (0, l.jsxs)("div", {
                                      className: W.zH,
                                      children: [
                                          (0, l.jsx)("div", {
                                              className: W.gn,
                                              children: ea
                                                  ? (0, l.jsxs)(l.Fragment, {
                                                        children: [
                                                            null != em &&
                                                                (0, l.jsx)("img", {
                                                                    src: em.toString(),
                                                                    alt: e_,
                                                                    className: W.ye,
                                                                }),
                                                            (0, l.jsx)(p.Text, {
                                                                color: "always-white",
                                                                variant: "text-md/medium",
                                                                lineClamp: 1,
                                                                children: D.name,
                                                            }),
                                                        ],
                                                    })
                                                  : (0, l.jsx)(w.r, {}),
                                          }),
                                          (0, l.jsx)("div", {
                                              className: W.iQ,
                                              children: ea
                                                  ? (0, l.jsxs)(l.Fragment, {
                                                        children: [
                                                            (0, l.jsx)(p.Text, {
                                                                variant: "text-md/bold",
                                                                color: "always-white",
                                                                lineClamp: 1,
                                                                children: (0, b.$g)(
                                                                    D.price?.amount ?? 0,
                                                                    D.price?.currency ?? V.Yr.USD,
                                                                ),
                                                            }),
                                                            null != D.orbsReward &&
                                                                D.orbsReward > 0 &&
                                                                (0, l.jsx)("div", {
                                                                    className: W.pt,
                                                                    children: (0, l.jsx)(p.Text, {
                                                                        variant: "text-sm/semibold",
                                                                        color: "currentColor",
                                                                        children: z.intl.format(z.t.GiVd2Q, {
                                                                            orbCount: D.orbsReward,
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
                                                  : (0, l.jsx)(w.r, {}),
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)("div", {
                                      className: W.li,
                                      children: (0, l.jsxs)(m.e2v, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, l.jsx)(m.$nd, {
                                                  variant: "primary",
                                                  onMouseDown: ex,
                                                  onClick: (e) => {
                                                      e.stopPropagation(),
                                                          eu(F.bB.BUY_BUTTON),
                                                          (0, P.a)(
                                                              D,
                                                              { isGift: !1 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...ee,
                                                                      A.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                  ],
                                                                  guildId: s,
                                                              },
                                                          );
                                                  },
                                                  text: el
                                                      ? z.intl.format(z.t.Xp5WTn, {
                                                            price: (0, b.$g)(
                                                                D.price?.amount ?? 0,
                                                                D.price?.currency ?? V.Yr.USD,
                                                            ),
                                                        })
                                                      : z.intl.string(z.t.cg0M2H),
                                                  fullWidth: !0,
                                                  disabled: !el,
                                              }),
                                              (0, l.jsx)(U.A, {
                                                  onGift: (e) => {
                                                      e.stopPropagation(),
                                                          eu(F.bB.GIFT_BUTTON),
                                                          (0, P.a)(
                                                              D,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...ee,
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
