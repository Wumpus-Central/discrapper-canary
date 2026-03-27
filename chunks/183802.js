n.d(e, { A: () => J, s: () => X });
var r,
    s = n(627968),
    i = n(64700),
    a = n(310784),
    l = n.n(a),
    u = n(503698),
    c = n.n(u),
    o = n(989349),
    d = n.n(o),
    A = n(158954),
    _ = n(311907),
    g = n(230109),
    T = n(990078),
    E = n(397927),
    R = n(442433),
    m = n(775602),
    f = n(793574),
    I = n(688810),
    H = n(713517),
    O = n(427209),
    S = n(544028),
    C = n(253932),
    N = n(67480),
    M = n(954571),
    L = n(871123),
    h = n(733391),
    p = n(439303),
    x = n(832163),
    b = n(35826),
    D = n(310962),
    k = n(44724),
    B = n(345938),
    U = n(533406),
    y = n(366523),
    G = n(300182),
    v = n(620999),
    j = n(743693),
    w = n(696028),
    F = n(914887),
    P = n(995393),
    Y = n(652215),
    W = n(985018),
    V = n(105791);
let K = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    q = l()("#000000").darken(1.5).alpha(0.9).hex(),
    z = l()("#000000").alpha(0).hex();
var X = (((r = {})[(r.SMALL = 0)] = "SMALL"), (r[(r.MEDIUM = 1)] = "MEDIUM"), (r[(r.EMBEDDED = 2)] = "EMBEDDED"), r);
function Q(t) {
    let {
            guildId: e,
            sku: n,
            isCardHovered: r,
            trackCardClick: a,
            variant: l,
            analyticsLocations: u,
            analyticsContext: o,
        } = t,
        d = i.useCallback(
            (t) => {
                t.stopPropagation(),
                    null != n &&
                        null != e &&
                        (a(P.bB.FORWARD_BUTTON),
                        (0, B.d)({
                            sku: n,
                            guildId: e,
                            analyticsContext: o,
                            analyticsLocations: u,
                            source: "social-layer-storefront-embed",
                        }));
            },
            [n, e, a, o, u],
        ),
        _ = i.useCallback(() => {
            a(P.bB.WISHLIST_BUTTON);
        }, [a]),
        g = i.useMemo(() => c()(V.o, { [V.H5]: r }), [r]);
    return (0, s.jsxs)("div", {
        className: V.zu,
        children: [
            2 === l &&
                (0, s.jsx)(A.DUT, {
                    className: c()(g, V.gy),
                    onClick: d,
                    children: (0, s.jsx)(O.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, s.jsx)(j._, {
                sku: n,
                isCardHovered: r,
                trackButtonClick: _,
                className: c()(g, V.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function J(t) {
    let { positionInSection: e, skuId: r, variant: a = 0, onClick: l, className: u, analyticsLocations: o } = t,
        O = i.useRef(null),
        B = i.useRef(null),
        j = (0, _.bG)([N.A], () => N.A.get(r)),
        { guildId: X } = (0, L.nG)(j?.applicationId),
        J = (0, _.bG)([S.A], () => (0, A.Mwr)(S.A.theme)),
        $ = (0, _.bG)([m.A], () => m.A.useReducedMotion),
        Z = C.Q_.useSetting(),
        { isHoveringOrFocusing: tt } = (0, H.A)(O),
        te = (0, p.jM)(),
        { analyticsLocations: tn } = (0, I.Ay)(o ?? []),
        tr = i.useRef({ positionInSection: e, analyticsLocations: tn }),
        [ts, ti] = i.useState(!1),
        ta = (0, _.bG)([x.A], () => (null != r ? x.A.getNormalizedSKUEligibility(r) : void 0), [r]),
        tl = (0, D.A)(r, ts),
        tu = i.useCallback((t) => {
            ti(t);
        }, []),
        tc = i.useMemo(() => c()(V.Nr, { [V.ax]: 0 === a, [V.GW]: 1 === a, [V.jz]: 2 === a }), [a]),
        { handleCardHover: to, handleCardUnhover: td } = (0, w.Z)(r, te, e, tn),
        { handleCardVisibilityChange: tA } = (0, F.a)(r, te, e, tn);
    i.useEffect(() => {
        tA(ts);
    }, [ts]);
    let t_ = i.useCallback(
            (t) => {
                let { analyticsLocations: e, positionInSection: n } = tr.current,
                    {
                        sessionId: s,
                        guildId: i,
                        pageIndex: a,
                        pageTitle: l,
                        pageSection: u,
                        pageSectionTitle: c,
                        isUserGuildMember: o,
                        pageHasLeaderboard: d,
                    } = te;
                M.default.track(Y.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: s,
                    sku_id: r,
                    guild_id: i,
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
            [r, te],
        ),
        { primaryIconAsset: tg, primaryIconLabel: tT } = i.useMemo(() => (0, L.Cv)(j, j?.applicationId), [j]),
        tE = (0, _.bG)([x.A], () => (null != X ? (x.A.getStorefrontState(X)?.activePage ?? 0) : 0)),
        tR = i.useMemo(() => {
            if (j?.tenantMetadata?.socialLayer?.expiresAt == null) return null;
            let t = d()(),
                e = Math.max(d()(j.tenantMetadata.socialLayer.expiresAt).diff(t, "days"), 1);
            return e <= 3 ? W.intl.format(W.t.PWw4Vp, { days: e }) : null;
        }, [j?.tenantMetadata?.socialLayer?.expiresAt]),
        tm = (0, L.xf)(j),
        tf = i.useMemo(() => {
            if (!tl) return "none";
            let [t, e] = K[a];
            return `linear-gradient(to top, ${q} ${30 + t}%, ${z} ${30 + e}%)`;
        }, [a, tl]),
        tI = i.useCallback(() => {
            (0, k.X)({ guildId: X });
        }, [X]),
        tH = i.useCallback(() => {
            null != X && (0, h.iR)(X, r, "SocialLayerStorefrontCard");
        }, [X, r]),
        tO = i.useCallback(() => {
            to(),
                null != X &&
                    (B.current = setTimeout(() => {
                        (0, h.iR)(X, r, "SocialLayerStorefrontCard");
                    }, 1e3));
        }, [X, r, to]),
        tS = i.useCallback(() => {
            td(), null != B.current && (clearTimeout(B.current), (B.current = null));
        }, [td]);
    i.useEffect(
        () => () => {
            null != B.current && clearTimeout(B.current);
        },
        [],
    );
    let tC = i.useCallback(() => {
            null != X && (0, b.A)({ guildId: X, pageIndex: tE, skuId: r, slug: j?.slug });
        }, [X, r, tE, j?.slug]),
        tN = i.useCallback(
            (t) => {
                (t_(P.bB.CARD), null != l && j?.applicationId != null)
                    ? l(t, { skuId: r, applicationId: j.applicationId })
                    : tC();
            },
            [t_, l, tC, r, j?.applicationId],
        ),
        tM = i.useCallback(
            (t) => {
                Z &&
                    (0, R.L3)(t, async () => {
                        let { default: t } = await n.e("97249").then(n.bind(n, 10680));
                        return (e) => (0, s.jsx)(t, { ...e, skuId: r });
                    });
            },
            [Z, r],
        );
    if (null == j) return null;
    let tL = (0, L.fq)(j);
    return (0, s.jsx)(g.L, {
        innerRef: O,
        onChange: tu,
        threshold: 0,
        children: (0, s.jsx)(A.vN3, {
            children: (0, s.jsxs)(E.sqX, {
                onClick: tN,
                onContextMenu: tM,
                onMouseDown: tI,
                onMouseEnter: tO,
                onMouseLeave: tS,
                className: c()(tc, { [V.Zl]: !$ && 2 !== a, [V.BN]: J, [J ? V.Mn : V.YF]: tt, [V.Rc]: !tl }, u),
                ref: O,
                "aria-label": j.name,
                children: [
                    null != tR && (0, s.jsx)(E.LpS, { text: tR, disableColor: !0, className: V.qS }),
                    (0, s.jsx)(Q, {
                        guildId: X,
                        sku: j,
                        isCardHovered: tt,
                        variant: a,
                        trackCardClick: t_,
                        analyticsLocations: tn,
                        analyticsContext: te,
                    }),
                    null != tL
                        ? tl
                            ? (0, s.jsx)(y.A, {
                                  containerClassName: V.Vl,
                                  foregroundImageClassName: V.wP,
                                  cardImage: tL,
                                  altText: j.name,
                                  shape: "custom",
                                  backgroundImageClassName: V.GC,
                                  cardBackgroundImage: tm,
                              })
                            : (0, s.jsx)(v.t, {})
                        : (0, s.jsx)("div", {
                              className: V.t7,
                              children: (0, s.jsx)(A.qyI, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: V.Cw,
                              }),
                          }),
                    2 !== a
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)("div", { className: V.iZ, style: { background: tf } }),
                                  (0, s.jsxs)("div", {
                                      className: V.zH,
                                      children: [
                                          (0, s.jsx)("div", {
                                              className: c()(V.gn, { [V.ov]: (0, L.mC)(j) }),
                                              children: tl
                                                  ? (0, s.jsxs)(s.Fragment, {
                                                        children: [
                                                            null != tg &&
                                                                (0, s.jsx)("img", {
                                                                    src: tg.toString(),
                                                                    alt: tT,
                                                                    className: V.ye,
                                                                }),
                                                            (0, s.jsx)(E.Text, {
                                                                color: "always-white",
                                                                variant: "text-md/medium",
                                                                lineClamp: 1,
                                                                children: j.name,
                                                            }),
                                                        ],
                                                    })
                                                  : (0, s.jsx)(v.r, {}),
                                          }),
                                          (0, s.jsx)("div", {
                                              className: V.iQ,
                                              children: tl
                                                  ? (0, s.jsxs)(s.Fragment, {
                                                        children: [
                                                            (0, L.mC)(j) &&
                                                                (0, s.jsx)(E.Text, {
                                                                    variant: "text-md/bold",
                                                                    color: "always-white",
                                                                    lineClamp: 1,
                                                                    children: (0, L.p3)(j, Y.lid.DEFAULT),
                                                                }),
                                                            null != j.orbsReward &&
                                                                j.orbsReward > 0 &&
                                                                (0, s.jsx)("div", {
                                                                    className: V.pt,
                                                                    children: (0, s.jsx)(E.Text, {
                                                                        variant: "text-sm/semibold",
                                                                        color: "currentColor",
                                                                        children: W.intl.format(W.t.GiVd2Q, {
                                                                            orbCount: j.orbsReward,
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
                                                  : (0, s.jsx)(v.r, {}),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)("div", {
                                      className: V.li,
                                      children: (0, s.jsxs)(A.e2v, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              ta
                                                  ? (0, s.jsx)(A.$nd, {
                                                        variant: "primary",
                                                        onMouseDown: tH,
                                                        onClick: (t) => {
                                                            t.stopPropagation(),
                                                                t_(P.bB.BUY_BUTTON),
                                                                (0, U.a)(
                                                                    j,
                                                                    { isGift: !1 },
                                                                    {
                                                                        analyticsLocations: [
                                                                            ...tn,
                                                                            f.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                        ],
                                                                        guildId: X,
                                                                    },
                                                                );
                                                        },
                                                        text: (0, L.mC)(j)
                                                            ? W.intl.format(W.t.Xp5WTn, {
                                                                  price: (0, L.p3)(j, Y.lid.DEFAULT),
                                                              })
                                                            : W.intl.string(W.t.boqtTA),
                                                        fullWidth: !0,
                                                    })
                                                  : (0, s.jsx)(T.m, {
                                                        text: W.intl.string(W.t.IqlPbQ),
                                                        children: (0, s.jsx)(A.$nd, {
                                                            variant: "primary",
                                                            onClick: (t) => {
                                                                t.stopPropagation(), t_(P.bB.VIEW_DETAILS_BUTTON), tC();
                                                            },
                                                            text: W.intl.string(W.t.KLBTgF),
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                              (0, s.jsx)(G.A, {
                                                  onGift: (t) => {
                                                      t.stopPropagation(),
                                                          t_(P.bB.GIFT_BUTTON),
                                                          (0, U.a)(
                                                              j,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...tn,
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
