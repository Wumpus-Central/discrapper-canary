n.d(t, { A: () => Q, s: () => q });
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
    x = n(654107),
    E = n(139146),
    C = n(713517),
    I = n(427209),
    T = n(544028),
    v = n(67480),
    N = n(954571),
    S = n(580630),
    b = n(871123),
    y = n(439303),
    j = n(832163),
    R = n(35826),
    L = n(310962),
    M = n(44724),
    O = n(486318),
    P = n(345938),
    D = n(533406),
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
    [0, 30],
    [0, 30],
    [0, 20],
    [0, 0],
];
var q = (((i = {})[(i.SMALL = 0)] = "SMALL"), (i[(i.MEDIUM = 1)] = "MEDIUM"), (i[(i.EMBEDDED = 2)] = "EMBEDDED"), i);
function K(e) {
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
                        (0, P.d)({
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
                    children: (0, l.jsx)(I.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, l.jsx)(E._, {
                skuId: n.id,
                isCardHovered: i,
                nuxGraphic: (0, O.N)(n),
                onClick: _,
                className: d()(h, W.ij),
            }),
        ],
    });
}
function Q(e) {
    let {
            positionInSection: t,
            applicationId: n,
            skuId: i,
            variant: r = 0,
            guildId: o,
            onClick: c,
            className: E,
            analyticsLocations: I,
        } = e,
        O = a.useRef(null),
        P = (0, _.bG)([v.A], () => v.A.get(i)),
        q = (0, _.bG)([T.A], () => (0, m.Mwr)(T.A.theme)),
        Q = (0, _.bG)([g.A], () => g.A.useReducedMotion),
        { isHoveringOrFocusing: J } = (0, C.A)(O),
        X = (0, y.jM)(),
        { analyticsLocations: Z } = (0, f.Ay)(I ?? []),
        $ = a.useRef({ positionInSection: t, analyticsLocations: Z }),
        [ee, et] = a.useState(!1),
        en = (0, _.bG)([j.A], () => (null != i ? j.A.getNormalizedSKUEligibility(i) : void 0), [i]),
        ei = (0, L.A)(i, ee),
        el = a.useCallback((e) => {
            et(e);
        }, []),
        ea = a.useMemo(() => d()(W.Nr, { [W.ax]: 0 === r, [W.GW]: 1 === r, [W.jz]: 2 === r }), [r]),
        { handleCardHover: er, handleCardUnhover: es } = (0, G.Z)(i, X, t, Z),
        { handleCardVisibilityChange: eo } = (0, B.a)(i, X, t, Z);
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
                N.default.track(H.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
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
        { primaryIconAsset: ec, primaryIconLabel: eu } = a.useMemo(() => (0, b.Cv)(P, n), [P, n]),
        em = (0, _.bG)([j.A], () => (null != o ? (j.A.getStorefrontState(o)?.activePage ?? 0) : 0)),
        e_ = a.useMemo(() => {
            if (P?.tenantMetadata?.socialLayer?.expiresAt == null) return null;
            let e = u()(),
                t = Math.max(u()(P.tenantMetadata.socialLayer.expiresAt).diff(e, "days"), 1);
            return t <= 3 ? z.intl.format(z.t.PWw4Vp, { days: t }) : null;
        }, [P?.tenantMetadata?.socialLayer?.expiresAt]),
        eh = (0, b.xf)(P),
        [ep, eg] = (0, x.rh)(eh?.toString(), "#000000"),
        eA = a.useMemo(() => {
            let e = s()(ep).darken(1.5).alpha(0.9).hex(),
                t = s()(ep).alpha(0).hex(),
                [n, i] = Y[r];
            return (0 !== n || 0 !== i) && ei ? `linear-gradient(to top, ${e} ${30 + n}%, ${t} ${30 + i}%)` : "none";
        }, [ep, r, ei]),
        ef = a.useCallback(() => {
            (0, M.X)({ guildId: o });
        }, [o]),
        ex = a.useCallback(
            (e) => {
                (ed(F.bB.CARD), null != c)
                    ? c(e)
                    : null != o && (0, R.A)({ guildId: o, pageIndex: em, skuId: i, slug: P?.slug });
            },
            [ed, o, i, c, em, P?.slug],
        );
    if (null == P) return null;
    let eE = (0, b.fq)(P);
    return (0, l.jsx)(h.L, {
        innerRef: O,
        onChange: el,
        threshold: 0,
        children: (0, l.jsx)(m.vN3, {
            children: (0, l.jsxs)(p.sqX, {
                onClick: ex,
                onMouseDown: ef,
                onMouseEnter: er,
                onMouseLeave: es,
                className: d()(ea, { [W.Zl]: !Q && 2 !== r, [W.BN]: q, [q ? W.Mn : W.YF]: J, [W.Rc]: !ei }, E),
                ref: O,
                "aria-label": P.name,
                children: [
                    null != e_ && (0, l.jsx)(p.LpS, { text: e_, disableColor: !0, className: W.qS }),
                    (0, l.jsx)(K, {
                        guildId: o,
                        sku: P,
                        isCardHovered: J,
                        variant: r,
                        trackCardClick: ed,
                        analyticsLocations: Z,
                        analyticsContext: X,
                    }),
                    null != eE
                        ? ei
                            ? (0, l.jsx)(k.A, {
                                  containerClassName: W.Vl,
                                  foregroundImageClassName: W.wP,
                                  cardImage: eE,
                                  altText: P.name,
                                  shape: "custom",
                                  backgroundImageClassName: W.GC,
                                  cardBackgroundImage: eh,
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
                                              children: ei
                                                  ? (0, l.jsx)(p.Text, {
                                                        color: "always-white",
                                                        variant: "text-md/medium",
                                                        lineClamp: 1,
                                                        children: P.name,
                                                    })
                                                  : (0, l.jsx)(w.r, {}),
                                          }),
                                          (0, l.jsx)("div", {
                                              className: W.iQ,
                                              children: ei
                                                  ? (0, l.jsxs)(l.Fragment, {
                                                        children: [
                                                            null != ec &&
                                                                (0, l.jsx)("img", {
                                                                    src: ec.toString(),
                                                                    alt: eu,
                                                                    className: W.ye,
                                                                }),
                                                            (0, l.jsx)(p.Text, {
                                                                variant: "text-md/bold",
                                                                color: "always-white",
                                                                lineClamp: 1,
                                                                children: (0, S.$g)(
                                                                    P.price?.amount ?? 0,
                                                                    P.price?.currency ?? V.Yr.USD,
                                                                ),
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
                                                  onClick: (e) => {
                                                      e.stopPropagation(),
                                                          ed(F.bB.BUY_BUTTON),
                                                          (0, D.a)(
                                                              P,
                                                              { isGift: !1 },
                                                              {
                                                                  analyticsLocations: [
                                                                      A.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                  ],
                                                                  guildId: o,
                                                              },
                                                          );
                                                  },
                                                  text: en
                                                      ? z.intl.format(z.t.Xp5WTn, {
                                                            price: (0, S.$g)(
                                                                P.price?.amount ?? 0,
                                                                P.price?.currency ?? V.Yr.USD,
                                                            ),
                                                        })
                                                      : z.intl.string(z.t.cg0M2H),
                                                  fullWidth: !0,
                                                  disabled: !en,
                                              }),
                                              (0, l.jsx)(U.A, {
                                                  onGift: (e) => {
                                                      e.stopPropagation(),
                                                          ed(F.bB.GIFT_BUTTON),
                                                          (0, D.a)(
                                                              P,
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
