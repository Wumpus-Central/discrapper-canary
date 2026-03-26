n.d(e, { A: () => Z, s: () => $ });
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
    R = n(397927),
    E = n(442433),
    m = n(775602),
    I = n(793574),
    f = n(688810),
    H = n(713517),
    S = n(427209),
    O = n(544028),
    C = n(253932),
    N = n(67480),
    M = n(954571),
    L = n(580630),
    h = n(871123),
    p = n(733391),
    x = n(439303),
    b = n(832163),
    D = n(35826),
    k = n(310962),
    B = n(44724),
    y = n(345938),
    U = n(533406),
    G = n(366523),
    v = n(300182),
    j = n(620999),
    w = n(743693),
    F = n(696028),
    P = n(914887),
    Y = n(995393),
    W = n(652215),
    V = n(818348),
    K = n(985018),
    q = n(105791);
let z = [
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
                        (a(Y.bB.FORWARD_BUTTON),
                        (0, y.d)({
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
            a(Y.bB.WISHLIST_BUTTON);
        }, [a]),
        g = i.useMemo(() => c()(q.o, { [q.H5]: r }), [r]);
    return (0, s.jsxs)("div", {
        className: q.zu,
        children: [
            2 === l &&
                (0, s.jsx)(A.DUT, {
                    className: c()(g, q.gy),
                    onClick: d,
                    children: (0, s.jsx)(S.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, s.jsx)(w._, {
                sku: n,
                isCardHovered: r,
                trackButtonClick: _,
                className: c()(g, q.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function Z(t) {
    let { positionInSection: e, skuId: r, variant: a = 0, onClick: l, className: u, analyticsLocations: o } = t,
        S = i.useRef(null),
        y = i.useRef(null),
        w = (0, _.bG)([N.A], () => N.A.get(r)),
        $ = (0, _.bG)([b.A], () => b.A.getGuildIdFromApplicationId(w?.applicationId)),
        Z = (0, _.bG)([O.A], () => (0, A.Mwr)(O.A.theme)),
        tt = (0, _.bG)([m.A], () => m.A.useReducedMotion),
        te = C.Q_.useSetting(),
        { isHoveringOrFocusing: tn } = (0, H.A)(S),
        tr = (0, x.jM)(),
        { analyticsLocations: ts } = (0, f.Ay)(o ?? []),
        ti = i.useRef({ positionInSection: e, analyticsLocations: ts }),
        [ta, tl] = i.useState(!1),
        tu = (0, _.bG)([b.A], () => (null != r ? b.A.getNormalizedSKUEligibility(r) : void 0), [r]),
        tc = (0, k.A)(r, ta),
        to = i.useCallback((t) => {
            tl(t);
        }, []),
        td = i.useMemo(() => c()(q.Nr, { [q.ax]: 0 === a, [q.GW]: 1 === a, [q.jz]: 2 === a }), [a]),
        { handleCardHover: tA, handleCardUnhover: t_ } = (0, F.Z)(r, tr, e, ts),
        { handleCardVisibilityChange: tg } = (0, P.a)(r, tr, e, ts);
    i.useEffect(() => {
        tg(ta);
    }, [ta]);
    let tT = i.useCallback(
            (t) => {
                let { analyticsLocations: e, positionInSection: n } = ti.current,
                    {
                        sessionId: s,
                        guildId: i,
                        pageIndex: a,
                        pageTitle: l,
                        pageSection: u,
                        pageSectionTitle: c,
                        isUserGuildMember: o,
                        pageHasLeaderboard: d,
                    } = tr;
                M.default.track(W.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
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
            [r, tr],
        ),
        { primaryIconAsset: tR, primaryIconLabel: tE } = i.useMemo(() => (0, h.Cv)(w, w?.applicationId), [w]),
        tm = (0, _.bG)([b.A], () => (null != $ ? (b.A.getStorefrontState($)?.activePage ?? 0) : 0)),
        tI = i.useMemo(() => {
            if (w?.tenantMetadata?.socialLayer?.expiresAt == null) return null;
            let t = d()(),
                e = Math.max(d()(w.tenantMetadata.socialLayer.expiresAt).diff(t, "days"), 1);
            return e <= 3 ? K.intl.format(K.t.PWw4Vp, { days: e }) : null;
        }, [w?.tenantMetadata?.socialLayer?.expiresAt]),
        tf = (0, h.xf)(w),
        tH = i.useMemo(() => {
            if (!tc) return "none";
            let [t, e] = z[a];
            return `linear-gradient(to top, ${X} ${30 + t}%, ${Q} ${30 + e}%)`;
        }, [a, tc]),
        tS = i.useCallback(() => {
            (0, B.X)({ guildId: $ });
        }, [$]),
        tO = i.useCallback(() => {
            null != $ && (0, p.iR)($, r, "SocialLayerStorefrontCard");
        }, [$, r]),
        tC = i.useCallback(() => {
            tA(),
                null != $ &&
                    (y.current = setTimeout(() => {
                        (0, p.iR)($, r, "SocialLayerStorefrontCard");
                    }, 1e3));
        }, [$, r, tA]),
        tN = i.useCallback(() => {
            t_(), null != y.current && (clearTimeout(y.current), (y.current = null));
        }, [t_]);
    i.useEffect(
        () => () => {
            null != y.current && clearTimeout(y.current);
        },
        [],
    );
    let tM = i.useCallback(() => {
            null != $ && (0, D.A)({ guildId: $, pageIndex: tm, skuId: r, slug: w?.slug });
        }, [$, r, tm, w?.slug]),
        tL = i.useCallback(
            (t) => {
                (tT(Y.bB.CARD), null != l && null != $ && w?.applicationId != null)
                    ? l(t, { skuId: r, applicationId: w.applicationId, guildId: $ })
                    : tM();
            },
            [tT, l, tM, r, w?.applicationId, $],
        ),
        th = i.useCallback(
            (t) => {
                te &&
                    (0, E.L3)(t, async () => {
                        let { default: t } = await n.e("97249").then(n.bind(n, 10680));
                        return (e) => (0, s.jsx)(t, { ...e, skuId: r });
                    });
            },
            [te, r],
        );
    if (null == w) return null;
    let tp = (0, h.fq)(w);
    return (0, s.jsx)(g.L, {
        innerRef: S,
        onChange: to,
        threshold: 0,
        children: (0, s.jsx)(A.vN3, {
            children: (0, s.jsxs)(R.sqX, {
                onClick: tL,
                onContextMenu: th,
                onMouseDown: tS,
                onMouseEnter: tC,
                onMouseLeave: tN,
                className: c()(td, { [q.Zl]: !tt && 2 !== a, [q.BN]: Z, [Z ? q.Mn : q.YF]: tn, [q.Rc]: !tc }, u),
                ref: S,
                "aria-label": w.name,
                children: [
                    null != tI && (0, s.jsx)(R.LpS, { text: tI, disableColor: !0, className: q.qS }),
                    (0, s.jsx)(J, {
                        guildId: $,
                        sku: w,
                        isCardHovered: tn,
                        variant: a,
                        trackCardClick: tT,
                        analyticsLocations: ts,
                        analyticsContext: tr,
                    }),
                    null != tp
                        ? tc
                            ? (0, s.jsx)(G.A, {
                                  containerClassName: q.Vl,
                                  foregroundImageClassName: q.wP,
                                  cardImage: tp,
                                  altText: w.name,
                                  shape: "custom",
                                  backgroundImageClassName: q.GC,
                                  cardBackgroundImage: tf,
                              })
                            : (0, s.jsx)(j.t, {})
                        : (0, s.jsx)("div", {
                              className: q.t7,
                              children: (0, s.jsx)(A.qyI, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: q.Cw,
                              }),
                          }),
                    2 !== a
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)("div", { className: q.iZ, style: { background: tH } }),
                                  (0, s.jsxs)("div", {
                                      className: q.zH,
                                      children: [
                                          (0, s.jsx)("div", {
                                              className: c()(q.gn, { [q.ov]: null == w.price }),
                                              children: tc
                                                  ? (0, s.jsxs)(s.Fragment, {
                                                        children: [
                                                            null != tR &&
                                                                (0, s.jsx)("img", {
                                                                    src: tR.toString(),
                                                                    alt: tE,
                                                                    className: q.ye,
                                                                }),
                                                            (0, s.jsx)(R.Text, {
                                                                color: "always-white",
                                                                variant: "text-md/medium",
                                                                lineClamp: 1,
                                                                children: w.name,
                                                            }),
                                                        ],
                                                    })
                                                  : (0, s.jsx)(j.r, {}),
                                          }),
                                          (0, s.jsx)("div", {
                                              className: q.iQ,
                                              children: tc
                                                  ? (0, s.jsxs)(s.Fragment, {
                                                        children: [
                                                            null != w.price &&
                                                                (0, s.jsx)(R.Text, {
                                                                    variant: "text-md/bold",
                                                                    color: "always-white",
                                                                    lineClamp: 1,
                                                                    children: (0, L.$g)(
                                                                        w.price?.amount ?? 0,
                                                                        w.price?.currency ?? V.Yr.USD,
                                                                    ),
                                                                }),
                                                            null != w.orbsReward &&
                                                                w.orbsReward > 0 &&
                                                                (0, s.jsx)("div", {
                                                                    className: q.pt,
                                                                    children: (0, s.jsx)(R.Text, {
                                                                        variant: "text-sm/semibold",
                                                                        color: "currentColor",
                                                                        children: K.intl.format(K.t.GiVd2Q, {
                                                                            orbCount: w.orbsReward,
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
                                                  : (0, s.jsx)(j.r, {}),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)("div", {
                                      className: q.li,
                                      children: (0, s.jsxs)(A.e2v, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              tu
                                                  ? (0, s.jsx)(A.$nd, {
                                                        variant: "primary",
                                                        onMouseDown: tO,
                                                        onClick: (t) => {
                                                            t.stopPropagation(),
                                                                tT(Y.bB.BUY_BUTTON),
                                                                (0, U.a)(
                                                                    w,
                                                                    { isGift: !1 },
                                                                    {
                                                                        analyticsLocations: [
                                                                            ...ts,
                                                                            I.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                        ],
                                                                        guildId: $,
                                                                    },
                                                                );
                                                        },
                                                        text:
                                                            null != w.price
                                                                ? K.intl.format(K.t.Xp5WTn, {
                                                                      price: (0, L.$g)(
                                                                          w.price?.amount ?? 0,
                                                                          w.price?.currency ?? V.Yr.USD,
                                                                      ),
                                                                  })
                                                                : K.intl.string(K.t.boqtTA),
                                                        fullWidth: !0,
                                                    })
                                                  : (0, s.jsx)(T.m, {
                                                        text: K.intl.string(K.t.IqlPbQ),
                                                        children: (0, s.jsx)(A.$nd, {
                                                            variant: "primary",
                                                            onClick: (t) => {
                                                                t.stopPropagation(), tT(Y.bB.VIEW_DETAILS_BUTTON), tM();
                                                            },
                                                            text: K.intl.string(K.t.KLBTgF),
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                              (0, s.jsx)(v.A, {
                                                  onGift: (t) => {
                                                      t.stopPropagation(),
                                                          tT(Y.bB.GIFT_BUTTON),
                                                          (0, U.a)(
                                                              w,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...ts,
                                                                      I.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
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
