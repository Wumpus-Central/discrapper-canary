n.d(e, { A: () => Z, s: () => $ });
var r,
    s = n(627968),
    a = n(64700),
    i = n(310784),
    l = n.n(i),
    u = n(503698),
    c = n.n(u),
    o = n(989349),
    d = n.n(o),
    A = n(158954),
    _ = n(311907),
    g = n(230109),
    T = n(990078),
    R = n(397927),
    E = n(442433),
    m = n(775602),
    H = n(793574),
    S = n(688810),
    O = n(713517),
    f = n(427209),
    C = n(544028),
    I = n(253932),
    N = n(67480),
    M = n(954571),
    L = n(580630),
    h = n(871123),
    x = n(733391),
    D = n(439303),
    b = n(832163),
    p = n(35826),
    k = n(310962),
    B = n(44724),
    U = n(345938),
    y = n(533406),
    v = n(366523),
    G = n(300182),
    w = n(620999),
    j = n(743693),
    P = n(696028),
    Y = n(914887),
    F = n(995393),
    V = n(652215),
    W = n(818348),
    K = n(985018),
    z = n(610084);
let q = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    X = l()("#000000").darken(1.5).alpha(0.9).hex(),
    Q = l()("#000000").alpha(0).hex();
var $ = (((r = {})[(r.SMALL = 0)] = "SMALL"), (r[(r.MEDIUM = 1)] = "MEDIUM"), (r[(r.EMBEDDED = 2)] = "EMBEDDED"), r);
function J(t) {
    let {
            guildId: e,
            sku: n,
            isCardHovered: r,
            trackCardClick: i,
            variant: l,
            analyticsLocations: u,
            analyticsContext: o,
        } = t,
        d = a.useCallback(
            (t) => {
                t.stopPropagation(),
                    null != n &&
                        null != e &&
                        (i(F.bB.FORWARD_BUTTON),
                        (0, U.d)({
                            sku: n,
                            guildId: e,
                            analyticsContext: o,
                            analyticsLocations: u,
                            source: "social-layer-storefront-embed",
                        }));
            },
            [n, e, i, o, u],
        ),
        _ = a.useCallback(() => {
            i(F.bB.WISHLIST_BUTTON);
        }, [i]),
        g = a.useMemo(() => c()(z.o, { [z.H5]: r }), [r]);
    return (0, s.jsxs)("div", {
        className: z.zu,
        children: [
            2 === l &&
                (0, s.jsx)(A.DUT, {
                    className: c()(g, z.gy),
                    onClick: d,
                    children: (0, s.jsx)(f.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, s.jsx)(j._, { sku: n, isCardHovered: r, trackButtonClick: _, className: c()(g, z.ij) }),
        ],
    });
}
function Z(t) {
    let {
            positionInSection: e,
            applicationId: r,
            skuId: i,
            variant: l = 0,
            guildId: u,
            onClick: o,
            className: f,
            analyticsLocations: U,
        } = t,
        j = a.useRef(null),
        $ = a.useRef(null),
        Z = (0, _.bG)([N.A], () => N.A.get(i)),
        tt = (0, _.bG)([C.A], () => (0, A.Mwr)(C.A.theme)),
        te = (0, _.bG)([m.A], () => m.A.useReducedMotion),
        tn = I.Q_.useSetting(),
        { isHoveringOrFocusing: tr } = (0, O.A)(j),
        ts = (0, D.jM)(),
        { analyticsLocations: ta } = (0, S.Ay)(U ?? []),
        ti = a.useRef({ positionInSection: e, analyticsLocations: ta }),
        [tl, tu] = a.useState(!1),
        tc = (0, _.bG)([b.A], () => (null != i ? b.A.getNormalizedSKUEligibility(i) : void 0), [i]),
        to = (0, k.A)(i, tl),
        td = a.useCallback((t) => {
            tu(t);
        }, []),
        tA = a.useMemo(() => c()(z.Nr, { [z.ax]: 0 === l, [z.GW]: 1 === l, [z.jz]: 2 === l }), [l]),
        { handleCardHover: t_, handleCardUnhover: tg } = (0, P.Z)(i, ts, e, ta),
        { handleCardVisibilityChange: tT } = (0, Y.a)(i, ts, e, ta);
    a.useEffect(() => {
        tT(tl);
    }, [tl]);
    let tR = a.useCallback(
            (t) => {
                let { analyticsLocations: e, positionInSection: n } = ti.current,
                    {
                        sessionId: r,
                        guildId: s,
                        pageIndex: a,
                        pageTitle: l,
                        pageSection: u,
                        pageSectionTitle: c,
                        isUserGuildMember: o,
                        pageHasLeaderboard: d,
                    } = ts;
                M.default.track(V.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: r,
                    sku_id: i,
                    guild_id: s,
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
            [i, ts],
        ),
        { primaryIconAsset: tE, primaryIconLabel: tm } = a.useMemo(() => (0, h.Cv)(Z, r), [Z, r]),
        tH = (0, _.bG)([b.A], () => (null != u ? (b.A.getStorefrontState(u)?.activePage ?? 0) : 0)),
        tS = a.useMemo(() => {
            if (Z?.tenantMetadata?.socialLayer?.expiresAt == null) return null;
            let t = d()(),
                e = Math.max(d()(Z.tenantMetadata.socialLayer.expiresAt).diff(t, "days"), 1);
            return e <= 3 ? K.intl.format(K.t.PWw4Vp, { days: e }) : null;
        }, [Z?.tenantMetadata?.socialLayer?.expiresAt]),
        tO = (0, h.xf)(Z),
        tf = a.useMemo(() => {
            if (!to) return "none";
            let [t, e] = q[l];
            return `linear-gradient(to top, ${X} ${30 + t}%, ${Q} ${30 + e}%)`;
        }, [l, to]),
        tC = a.useCallback(() => {
            (0, B.X)({ guildId: u });
        }, [u]),
        tI = a.useCallback(() => {
            null != u && (0, x.iR)(u, i, "SocialLayerStorefrontCard");
        }, [u, i]),
        tN = a.useCallback(() => {
            t_(),
                null != u &&
                    ($.current = setTimeout(() => {
                        (0, x.iR)(u, i, "SocialLayerStorefrontCard");
                    }, 1e3));
        }, [u, i, t_]),
        tM = a.useCallback(() => {
            tg(), null != $.current && (clearTimeout($.current), ($.current = null));
        }, [tg]);
    a.useEffect(
        () => () => {
            null != $.current && clearTimeout($.current);
        },
        [],
    );
    let tL = a.useCallback(() => {
            null != u && (0, p.A)({ guildId: u, pageIndex: tH, skuId: i, slug: Z?.slug });
        }, [u, i, tH, Z?.slug]),
        th = a.useCallback(
            (t) => {
                (tR(F.bB.CARD), null != o) ? o(t) : tL();
            },
            [tR, o, tL],
        ),
        tx = a.useCallback(
            (t) => {
                tn &&
                    (0, E.L3)(t, async () => {
                        let { default: t } = await n.e("97249").then(n.bind(n, 10680));
                        return (e) => (0, s.jsx)(t, { ...e, skuId: i });
                    });
            },
            [tn, i],
        );
    if (null == Z) return null;
    let tD = (0, h.fq)(Z);
    return (0, s.jsx)(g.L, {
        innerRef: j,
        onChange: td,
        threshold: 0,
        children: (0, s.jsx)(A.vN3, {
            children: (0, s.jsxs)(R.sqX, {
                onClick: th,
                onContextMenu: tx,
                onMouseDown: tC,
                onMouseEnter: tN,
                onMouseLeave: tM,
                className: c()(tA, { [z.Zl]: !te && 2 !== l, [z.BN]: tt, [tt ? z.Mn : z.YF]: tr, [z.Rc]: !to }, f),
                ref: j,
                "aria-label": Z.name,
                children: [
                    null != tS && (0, s.jsx)(R.LpS, { text: tS, disableColor: !0, className: z.qS }),
                    (0, s.jsx)(J, {
                        guildId: u,
                        sku: Z,
                        isCardHovered: tr,
                        variant: l,
                        trackCardClick: tR,
                        analyticsLocations: ta,
                        analyticsContext: ts,
                    }),
                    null != tD
                        ? to
                            ? (0, s.jsx)(v.A, {
                                  containerClassName: z.Vl,
                                  foregroundImageClassName: z.wP,
                                  cardImage: tD,
                                  altText: Z.name,
                                  shape: "custom",
                                  backgroundImageClassName: z.GC,
                                  cardBackgroundImage: tO,
                              })
                            : (0, s.jsx)(w.t, {})
                        : (0, s.jsx)("div", {
                              className: z.t7,
                              children: (0, s.jsx)(A.qyI, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: z.Cw,
                              }),
                          }),
                    2 !== l
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)("div", { className: z.iZ, style: { background: tf } }),
                                  (0, s.jsxs)("div", {
                                      className: z.zH,
                                      children: [
                                          (0, s.jsx)("div", {
                                              className: z.gn,
                                              children: to
                                                  ? (0, s.jsxs)(s.Fragment, {
                                                        children: [
                                                            null != tE &&
                                                                (0, s.jsx)("img", {
                                                                    src: tE.toString(),
                                                                    alt: tm,
                                                                    className: z.ye,
                                                                }),
                                                            (0, s.jsx)(R.Text, {
                                                                color: "always-white",
                                                                variant: "text-md/medium",
                                                                lineClamp: 1,
                                                                children: Z.name,
                                                            }),
                                                        ],
                                                    })
                                                  : (0, s.jsx)(w.r, {}),
                                          }),
                                          (0, s.jsx)("div", {
                                              className: z.iQ,
                                              children: to
                                                  ? (0, s.jsxs)(s.Fragment, {
                                                        children: [
                                                            (0, s.jsx)(R.Text, {
                                                                variant: "text-md/bold",
                                                                color: "always-white",
                                                                lineClamp: 1,
                                                                children: (0, L.$g)(
                                                                    Z.price?.amount ?? 0,
                                                                    Z.price?.currency ?? W.Yr.USD,
                                                                ),
                                                            }),
                                                            null != Z.orbsReward &&
                                                                Z.orbsReward > 0 &&
                                                                (0, s.jsx)("div", {
                                                                    className: z.pt,
                                                                    children: (0, s.jsx)(R.Text, {
                                                                        variant: "text-sm/semibold",
                                                                        color: "currentColor",
                                                                        children: K.intl.format(K.t.GiVd2Q, {
                                                                            orbCount: Z.orbsReward,
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
                                                  : (0, s.jsx)(w.r, {}),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)("div", {
                                      className: z.li,
                                      children: (0, s.jsxs)(A.e2v, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              tc
                                                  ? (0, s.jsx)(A.$nd, {
                                                        variant: "primary",
                                                        onMouseDown: tI,
                                                        onClick: (t) => {
                                                            t.stopPropagation(),
                                                                tR(F.bB.BUY_BUTTON),
                                                                (0, y.a)(
                                                                    Z,
                                                                    { isGift: !1 },
                                                                    {
                                                                        analyticsLocations: [
                                                                            ...ta,
                                                                            H.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                        ],
                                                                        guildId: u,
                                                                    },
                                                                );
                                                        },
                                                        text: K.intl.format(K.t.Xp5WTn, {
                                                            price: (0, L.$g)(
                                                                Z.price?.amount ?? 0,
                                                                Z.price?.currency ?? W.Yr.USD,
                                                            ),
                                                        }),
                                                        fullWidth: !0,
                                                    })
                                                  : (0, s.jsx)(T.m, {
                                                        text: K.intl.string(K.t.IqlPbQ),
                                                        children: (0, s.jsx)(A.$nd, {
                                                            variant: "primary",
                                                            onClick: (t) => {
                                                                t.stopPropagation(), tR(F.bB.VIEW_DETAILS_BUTTON), tL();
                                                            },
                                                            text: K.intl.string(K.t.KLBTgF),
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                              (0, s.jsx)(G.A, {
                                                  onGift: (t) => {
                                                      t.stopPropagation(),
                                                          tR(F.bB.GIFT_BUTTON),
                                                          (0, y.a)(
                                                              Z,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...ta,
                                                                      H.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
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
