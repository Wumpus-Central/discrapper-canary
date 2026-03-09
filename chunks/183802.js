n.d(e, { A: () => tt, s: () => $ });
var r,
    a = n(627968),
    s = n(64700),
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
    m = n(397927),
    R = n(442433),
    E = n(775602),
    f = n(793574),
    S = n(688810),
    O = n(139146),
    I = n(713517),
    C = n(427209),
    N = n(544028),
    H = n(253932),
    h = n(67480),
    M = n(954571),
    L = n(580630),
    p = n(871123),
    x = n(733391),
    b = n(439303),
    D = n(832163),
    y = n(35826),
    k = n(310962),
    v = n(44724),
    U = n(486318),
    j = n(345938),
    B = n(533406),
    G = n(366523),
    w = n(300182),
    F = n(620999),
    P = n(696028),
    Y = n(914887),
    W = n(995393),
    V = n(652215),
    K = n(818348),
    z = n(985018),
    q = n(120690);
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
            trackCardClick: i,
            variant: l,
            analyticsLocations: u,
            analyticsContext: o,
        } = t,
        d = s.useCallback(
            (t) => {
                t.stopPropagation(),
                    null != n &&
                        null != e &&
                        (i(W.bB.FORWARD_BUTTON),
                        (0, j.d)({
                            sku: n,
                            guildId: e,
                            analyticsContext: o,
                            analyticsLocations: u,
                            source: "social-layer-storefront-embed",
                        }));
            },
            [n, e, i, o, u],
        ),
        _ = s.useCallback(() => {
            i(W.bB.WISHLIST_BUTTON);
        }, [i]),
        g = s.useMemo(() => c()(q.o, { [q.H5]: r }), [r]);
    return (0, a.jsxs)("div", {
        className: q.zu,
        children: [
            2 === l &&
                (0, a.jsx)(A.DUT, {
                    className: c()(g, q.gy),
                    onClick: d,
                    children: (0, a.jsx)(C.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, a.jsx)(O._, {
                skuId: n.id,
                productName: n.name,
                isCardHovered: r,
                nuxGraphic: (0, U.N)(n),
                onClick: _,
                className: c()(g, q.ij),
            }),
        ],
    });
}
function tt(t) {
    let {
            positionInSection: e,
            applicationId: r,
            skuId: i,
            variant: l = 0,
            guildId: u,
            onClick: o,
            className: O,
            analyticsLocations: C,
        } = t,
        U = s.useRef(null),
        j = s.useRef(null),
        $ = (0, _.bG)([h.A], () => h.A.get(i)),
        tt = (0, _.bG)([N.A], () => (0, A.Mwr)(N.A.theme)),
        te = (0, _.bG)([E.A], () => E.A.useReducedMotion),
        tn = H.Q_.useSetting(),
        { isHoveringOrFocusing: tr } = (0, I.A)(U),
        ta = (0, b.jM)(),
        { analyticsLocations: ts } = (0, S.Ay)(C ?? []),
        ti = s.useRef({ positionInSection: e, analyticsLocations: ts }),
        [tl, tu] = s.useState(!1),
        tc = (0, _.bG)([D.A], () => (null != i ? D.A.getNormalizedSKUEligibility(i) : void 0), [i]),
        to = (0, k.A)(i, tl),
        td = s.useCallback((t) => {
            tu(t);
        }, []),
        tA = s.useMemo(() => c()(q.Nr, { [q.ax]: 0 === l, [q.GW]: 1 === l, [q.jz]: 2 === l }), [l]),
        { handleCardHover: t_, handleCardUnhover: tg } = (0, P.Z)(i, ta, e, ts),
        { handleCardVisibilityChange: tT } = (0, Y.a)(i, ta, e, ts);
    s.useEffect(() => {
        tT(tl);
    }, [tl]);
    let tm = s.useCallback(
            (t) => {
                let { analyticsLocations: e, positionInSection: n } = ti.current,
                    {
                        sessionId: r,
                        guildId: a,
                        pageIndex: s,
                        pageTitle: l,
                        pageSection: u,
                        pageSectionTitle: c,
                        isUserGuildMember: o,
                        pageHasLeaderboard: d,
                    } = ta;
                M.default.track(V.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: r,
                    sku_id: i,
                    guild_id: a,
                    page_index: s,
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
            [i, ta],
        ),
        { primaryIconAsset: tR, primaryIconLabel: tE } = s.useMemo(() => (0, p.Cv)($, r), [$, r]),
        tf = (0, _.bG)([D.A], () => (null != u ? (D.A.getStorefrontState(u)?.activePage ?? 0) : 0)),
        tS = s.useMemo(() => {
            if ($?.tenantMetadata?.socialLayer?.expiresAt == null) return null;
            let t = d()(),
                e = Math.max(d()($.tenantMetadata.socialLayer.expiresAt).diff(t, "days"), 1);
            return e <= 3 ? z.intl.format(z.t.PWw4Vp, { days: e }) : null;
        }, [$?.tenantMetadata?.socialLayer?.expiresAt]),
        tO = (0, p.xf)($),
        tI = s.useMemo(() => {
            if (!to) return "none";
            let [t, e] = X[l];
            return `linear-gradient(to top, ${Q} ${30 + t}%, ${J} ${30 + e}%)`;
        }, [l, to]),
        tC = s.useCallback(() => {
            (0, v.X)({ guildId: u });
        }, [u]),
        tN = s.useCallback(() => {
            null != u && (0, x.iR)(u, i, "SocialLayerStorefrontCard");
        }, [u, i]),
        tH = s.useCallback(() => {
            t_(),
                null != u &&
                    (j.current = setTimeout(() => {
                        (0, x.iR)(u, i, "SocialLayerStorefrontCard");
                    }, 1e3));
        }, [u, i, t_]),
        th = s.useCallback(() => {
            tg(), null != j.current && (clearTimeout(j.current), (j.current = null));
        }, [tg]);
    s.useEffect(
        () => () => {
            null != j.current && clearTimeout(j.current);
        },
        [],
    );
    let tM = s.useCallback(() => {
            null != u && (0, y.A)({ guildId: u, pageIndex: tf, skuId: i, slug: $?.slug });
        }, [u, i, tf, $?.slug]),
        tL = s.useCallback(
            (t) => {
                (tm(W.bB.CARD), null != o) ? o(t) : tM();
            },
            [tm, o, tM],
        ),
        tp = s.useCallback(
            (t) => {
                tn &&
                    (0, R.L3)(t, async () => {
                        let { default: t } = await n.e("97249").then(n.bind(n, 10680));
                        return (e) => (0, a.jsx)(t, { ...e, skuId: i });
                    });
            },
            [tn, i],
        );
    if (null == $) return null;
    let tx = (0, p.fq)($);
    return (0, a.jsx)(g.L, {
        innerRef: U,
        onChange: td,
        threshold: 0,
        children: (0, a.jsx)(A.vN3, {
            children: (0, a.jsxs)(m.sqX, {
                onClick: tL,
                onContextMenu: tp,
                onMouseDown: tC,
                onMouseEnter: tH,
                onMouseLeave: th,
                className: c()(tA, { [q.Zl]: !te && 2 !== l, [q.BN]: tt, [tt ? q.Mn : q.YF]: tr, [q.Rc]: !to }, O),
                ref: U,
                "aria-label": $.name,
                children: [
                    null != tS && (0, a.jsx)(m.LpS, { text: tS, disableColor: !0, className: q.qS }),
                    (0, a.jsx)(Z, {
                        guildId: u,
                        sku: $,
                        isCardHovered: tr,
                        variant: l,
                        trackCardClick: tm,
                        analyticsLocations: ts,
                        analyticsContext: ta,
                    }),
                    null != tx
                        ? to
                            ? (0, a.jsx)(G.A, {
                                  containerClassName: q.Vl,
                                  foregroundImageClassName: q.wP,
                                  cardImage: tx,
                                  altText: $.name,
                                  shape: "custom",
                                  backgroundImageClassName: q.GC,
                                  cardBackgroundImage: tO,
                              })
                            : (0, a.jsx)(F.t, {})
                        : (0, a.jsx)("div", {
                              className: q.t7,
                              children: (0, a.jsx)(A.qyI, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: q.Cw,
                              }),
                          }),
                    2 !== l
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", { className: q.iZ, style: { background: tI } }),
                                  (0, a.jsxs)("div", {
                                      className: q.zH,
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: q.gn,
                                              children: to
                                                  ? (0, a.jsxs)(a.Fragment, {
                                                        children: [
                                                            null != tR &&
                                                                (0, a.jsx)("img", {
                                                                    src: tR.toString(),
                                                                    alt: tE,
                                                                    className: q.ye,
                                                                }),
                                                            (0, a.jsx)(m.Text, {
                                                                color: "always-white",
                                                                variant: "text-md/medium",
                                                                lineClamp: 1,
                                                                children: $.name,
                                                            }),
                                                        ],
                                                    })
                                                  : (0, a.jsx)(F.r, {}),
                                          }),
                                          (0, a.jsx)("div", {
                                              className: q.iQ,
                                              children: to
                                                  ? (0, a.jsxs)(a.Fragment, {
                                                        children: [
                                                            (0, a.jsx)(m.Text, {
                                                                variant: "text-md/bold",
                                                                color: "always-white",
                                                                lineClamp: 1,
                                                                children: (0, L.$g)(
                                                                    $.price?.amount ?? 0,
                                                                    $.price?.currency ?? K.Yr.USD,
                                                                ),
                                                            }),
                                                            null != $.orbsReward &&
                                                                $.orbsReward > 0 &&
                                                                (0, a.jsx)("div", {
                                                                    className: q.pt,
                                                                    children: (0, a.jsx)(m.Text, {
                                                                        variant: "text-sm/semibold",
                                                                        color: "currentColor",
                                                                        children: z.intl.format(z.t.GiVd2Q, {
                                                                            orbCount: $.orbsReward,
                                                                            orbIconHook: () =>
                                                                                (0, a.jsx)(
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
                                                  : (0, a.jsx)(F.r, {}),
                                          }),
                                      ],
                                  }),
                                  (0, a.jsx)("div", {
                                      className: q.li,
                                      children: (0, a.jsxs)(A.e2v, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              tc
                                                  ? (0, a.jsx)(A.$nd, {
                                                        variant: "primary",
                                                        onMouseDown: tN,
                                                        onClick: (t) => {
                                                            t.stopPropagation(),
                                                                tm(W.bB.BUY_BUTTON),
                                                                (0, B.a)(
                                                                    $,
                                                                    { isGift: !1 },
                                                                    {
                                                                        analyticsLocations: [
                                                                            ...ts,
                                                                            f.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                        ],
                                                                        guildId: u,
                                                                    },
                                                                );
                                                        },
                                                        text: z.intl.format(z.t.Xp5WTn, {
                                                            price: (0, L.$g)(
                                                                $.price?.amount ?? 0,
                                                                $.price?.currency ?? K.Yr.USD,
                                                            ),
                                                        }),
                                                        fullWidth: !0,
                                                    })
                                                  : (0, a.jsx)(T.m, {
                                                        text: z.intl.string(z.t.IqlPbQ),
                                                        children: (0, a.jsx)(A.$nd, {
                                                            variant: "primary",
                                                            onClick: (t) => {
                                                                t.stopPropagation(), tm(W.bB.VIEW_DETAILS_BUTTON), tM();
                                                            },
                                                            text: z.intl.string(z.t.KLBTgF),
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                              (0, a.jsx)(w.A, {
                                                  onGift: (t) => {
                                                      t.stopPropagation(),
                                                          tm(W.bB.GIFT_BUTTON),
                                                          (0, B.a)(
                                                              $,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...ts,
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
