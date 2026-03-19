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
    H = n(688810),
    S = n(713517),
    O = n(427209),
    f = n(544028),
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
    U = n(345938),
    y = n(533406),
    G = n(366523),
    v = n(300182),
    w = n(620999),
    j = n(743693),
    P = n(696028),
    F = n(914887),
    Y = n(995393),
    V = n(652215),
    W = n(818348),
    K = n(985018),
    q = n(120690);
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
                        (0, U.d)({
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
                    children: (0, s.jsx)(O.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, s.jsx)(j._, { sku: n, isCardHovered: r, trackButtonClick: _, className: c()(g, q.ij) }),
        ],
    });
}
function Z(t) {
    let { positionInSection: e, skuId: r, variant: a = 0, onClick: l, className: u, analyticsLocations: o } = t,
        O = i.useRef(null),
        U = i.useRef(null),
        j = (0, _.bG)([N.A], () => N.A.get(r)),
        $ = (0, _.bG)([b.A], () => b.A.getGuildIdFromApplicationId(j?.applicationId)),
        Z = (0, _.bG)([f.A], () => (0, A.Mwr)(f.A.theme)),
        tt = (0, _.bG)([m.A], () => m.A.useReducedMotion),
        te = C.Q_.useSetting(),
        { isHoveringOrFocusing: tn } = (0, S.A)(O),
        tr = (0, x.jM)(),
        { analyticsLocations: ts } = (0, H.Ay)(o ?? []),
        ti = i.useRef({ positionInSection: e, analyticsLocations: ts }),
        [ta, tl] = i.useState(!1),
        tu = (0, _.bG)([b.A], () => (null != r ? b.A.getNormalizedSKUEligibility(r) : void 0), [r]),
        tc = (0, k.A)(r, ta),
        to = i.useCallback((t) => {
            tl(t);
        }, []),
        td = i.useMemo(() => c()(q.Nr, { [q.ax]: 0 === a, [q.GW]: 1 === a, [q.jz]: 2 === a }), [a]),
        { handleCardHover: tA, handleCardUnhover: t_ } = (0, P.Z)(r, tr, e, ts),
        { handleCardVisibilityChange: tg } = (0, F.a)(r, tr, e, ts);
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
                M.default.track(V.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
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
        { primaryIconAsset: tR, primaryIconLabel: tE } = i.useMemo(() => (0, h.Cv)(j, j?.applicationId), [j]),
        tm = (0, _.bG)([b.A], () => (null != $ ? (b.A.getStorefrontState($)?.activePage ?? 0) : 0)),
        tI = i.useMemo(() => {
            if (j?.tenantMetadata?.socialLayer?.expiresAt == null) return null;
            let t = d()(),
                e = Math.max(d()(j.tenantMetadata.socialLayer.expiresAt).diff(t, "days"), 1);
            return e <= 3 ? K.intl.format(K.t.PWw4Vp, { days: e }) : null;
        }, [j?.tenantMetadata?.socialLayer?.expiresAt]),
        tH = (0, h.xf)(j),
        tS = i.useMemo(() => {
            if (!tc) return "none";
            let [t, e] = z[a];
            return `linear-gradient(to top, ${X} ${30 + t}%, ${Q} ${30 + e}%)`;
        }, [a, tc]),
        tO = i.useCallback(() => {
            (0, B.X)({ guildId: $ });
        }, [$]),
        tf = i.useCallback(() => {
            null != $ && (0, p.iR)($, r, "SocialLayerStorefrontCard");
        }, [$, r]),
        tC = i.useCallback(() => {
            tA(),
                null != $ &&
                    (U.current = setTimeout(() => {
                        (0, p.iR)($, r, "SocialLayerStorefrontCard");
                    }, 1e3));
        }, [$, r, tA]),
        tN = i.useCallback(() => {
            t_(), null != U.current && (clearTimeout(U.current), (U.current = null));
        }, [t_]);
    i.useEffect(
        () => () => {
            null != U.current && clearTimeout(U.current);
        },
        [],
    );
    let tM = i.useCallback(() => {
            null != $ && (0, D.A)({ guildId: $, pageIndex: tm, skuId: r, slug: j?.slug });
        }, [$, r, tm, j?.slug]),
        tL = i.useCallback(
            (t) => {
                (tT(Y.bB.CARD), null != l && null != $ && j?.applicationId != null)
                    ? l(t, { skuId: r, applicationId: j.applicationId, guildId: $ })
                    : tM();
            },
            [tT, l, tM, r, j?.applicationId, $],
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
    if (null == j) return null;
    let tp = (0, h.fq)(j);
    return (0, s.jsx)(g.L, {
        innerRef: O,
        onChange: to,
        threshold: 0,
        children: (0, s.jsx)(A.vN3, {
            children: (0, s.jsxs)(R.sqX, {
                onClick: tL,
                onContextMenu: th,
                onMouseDown: tO,
                onMouseEnter: tC,
                onMouseLeave: tN,
                className: c()(td, { [q.Zl]: !tt && 2 !== a, [q.BN]: Z, [Z ? q.Mn : q.YF]: tn, [q.Rc]: !tc }, u),
                ref: O,
                "aria-label": j.name,
                children: [
                    null != tI && (0, s.jsx)(R.LpS, { text: tI, disableColor: !0, className: q.qS }),
                    (0, s.jsx)(J, {
                        guildId: $,
                        sku: j,
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
                                  altText: j.name,
                                  shape: "custom",
                                  backgroundImageClassName: q.GC,
                                  cardBackgroundImage: tH,
                              })
                            : (0, s.jsx)(w.t, {})
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
                                  (0, s.jsx)("div", { className: q.iZ, style: { background: tS } }),
                                  (0, s.jsxs)("div", {
                                      className: q.zH,
                                      children: [
                                          (0, s.jsx)("div", {
                                              className: c()(q.gn, { [q.ov]: null == j.price }),
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
                                                                children: j.name,
                                                            }),
                                                        ],
                                                    })
                                                  : (0, s.jsx)(w.r, {}),
                                          }),
                                          (0, s.jsx)("div", {
                                              className: q.iQ,
                                              children: tc
                                                  ? (0, s.jsxs)(s.Fragment, {
                                                        children: [
                                                            null != j.price &&
                                                                (0, s.jsx)(R.Text, {
                                                                    variant: "text-md/bold",
                                                                    color: "always-white",
                                                                    lineClamp: 1,
                                                                    children: (0, L.$g)(
                                                                        j.price?.amount ?? 0,
                                                                        j.price?.currency ?? W.Yr.USD,
                                                                    ),
                                                                }),
                                                            null != j.orbsReward &&
                                                                j.orbsReward > 0 &&
                                                                (0, s.jsx)("div", {
                                                                    className: q.pt,
                                                                    children: (0, s.jsx)(R.Text, {
                                                                        variant: "text-sm/semibold",
                                                                        color: "currentColor",
                                                                        children: K.intl.format(K.t.GiVd2Q, {
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
                                                  : (0, s.jsx)(w.r, {}),
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
                                                        onMouseDown: tf,
                                                        onClick: (t) => {
                                                            t.stopPropagation(),
                                                                tT(Y.bB.BUY_BUTTON),
                                                                (0, y.a)(
                                                                    j,
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
                                                            null != j.price
                                                                ? K.intl.format(K.t.Xp5WTn, {
                                                                      price: (0, L.$g)(
                                                                          j.price?.amount ?? 0,
                                                                          j.price?.currency ?? W.Yr.USD,
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
                                                          (0, y.a)(
                                                              j,
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
