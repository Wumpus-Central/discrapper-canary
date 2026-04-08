n.d(e, { A: () => tt, s: () => $ });
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
    m = n(990078),
    T = n(397927),
    f = n(442433),
    R = n(775602),
    E = n(793574),
    C = n(688810),
    H = n(713517),
    I = n(427209),
    S = n(993046),
    O = n(544028),
    N = n(253932),
    h = n(67480),
    x = n(954571),
    M = n(871123),
    p = n(733391),
    L = n(439303),
    b = n(832163),
    D = n(35826),
    v = n(207654),
    k = n(310962),
    y = n(44724),
    B = n(345938),
    j = n(533406),
    U = n(971146),
    G = n(366523),
    w = n(300182),
    P = n(620999),
    F = n(743693),
    Y = n(696028),
    V = n(914887),
    W = n(995393),
    K = n(652215),
    q = n(985018),
    z = n(359170);
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
                        (a(W.bB.FORWARD_BUTTON),
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
            a(W.bB.WISHLIST_BUTTON);
        }, [a]),
        g = i.useMemo(() => c()(z.o, { [z.H5]: r }), [r]);
    return (0, s.jsxs)("div", {
        className: z.zu,
        children: [
            2 === l &&
                (0, s.jsx)(A.DUT, {
                    className: c()(g, z.gy),
                    onClick: d,
                    children: (0, s.jsx)(I.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, s.jsx)(F._, {
                sku: n,
                isCardHovered: r,
                trackButtonClick: _,
                className: c()(g, z.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function tt(t) {
    let { positionInSection: e, skuId: r, variant: a = 0, onClick: l, className: u, analyticsLocations: o } = t,
        I = i.useRef(null),
        B = i.useRef(null),
        F = (0, _.bG)([h.A], () => h.A.get(r)),
        { guildId: $ } = (0, M.nG)(F?.applicationId),
        tt = (0, v.b)({ location: "storefront_card" }),
        te = (0, _.bG)([O.A], () => (0, A.Mwr)(O.A.theme)),
        tn = (0, _.bG)([R.A], () => R.A.useReducedMotion),
        tr = N.Q_.useSetting(),
        { isHoveringOrFocusing: ts } = (0, H.A)(I),
        ti = (0, L.jM)(),
        { analyticsLocations: ta } = (0, C.Ay)(o ?? []),
        tl = i.useRef({ positionInSection: e, analyticsLocations: ta }),
        [tu, tc] = i.useState(!1),
        to = (0, _.bG)([b.A], () => (null != r ? b.A.getNormalizedSKUEligibility(r) : void 0), [r]),
        td = (0, k.A)(r, tu),
        tA = i.useCallback((t) => {
            tc(t);
        }, []),
        t_ = i.useMemo(() => c()(z.Nr, { [z.ax]: 0 === a, [z.GW]: 1 === a, [z.jz]: 2 === a }), [a]),
        { handleCardHover: tg, handleCardUnhover: tm } = (0, Y.Z)(r, ti, e, ta),
        { handleCardVisibilityChange: tT } = (0, V.a)(r, ti, e, ta);
    i.useEffect(() => {
        tT(tu);
    }, [tu]);
    let tf = i.useCallback(
            (t) => {
                let { analyticsLocations: e, positionInSection: n } = tl.current,
                    {
                        sessionId: s,
                        guildId: i,
                        pageIndex: a,
                        pageTitle: l,
                        pageSection: u,
                        pageSectionTitle: c,
                        isUserGuildMember: o,
                        pageHasLeaderboard: d,
                    } = ti;
                x.default.track(K.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
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
            [r, ti],
        ),
        { primaryIconAsset: tR, primaryIconLabel: tE } = i.useMemo(() => (0, M.Cv)(F, F?.applicationId), [F]),
        tC = (0, _.bG)([b.A], () => (null != $ ? (b.A.getStorefrontState($)?.activePage ?? 0) : 0)),
        tH = i.useMemo(() => {
            let t = F?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == t) return null;
            let e = d()(),
                n = Math.max(d()(t).diff(e, "days"), 1);
            return n <= 3 ? q.intl.format(q.t.PWw4Vp, { days: n }) : null;
        }, [F?.tenantMetadata?.socialLayer?.expiresAt]),
        tI = (0, M.xf)(F),
        tS = i.useMemo(() => {
            if (!td) return "none";
            let [t, e] = X[a];
            return `linear-gradient(to top, ${Q} ${30 + t}%, ${J} ${30 + e}%)`;
        }, [a, td]),
        tO = i.useCallback(() => {
            (0, y.X)({ guildId: $ });
        }, [$]),
        tN = i.useCallback(() => {
            null != $ && (0, p.iR)($, r, "SocialLayerStorefrontCard");
        }, [$, r]),
        th = i.useCallback(() => {
            tg(),
                null != $ &&
                    (B.current = setTimeout(() => {
                        (0, p.iR)($, r, "SocialLayerStorefrontCard");
                    }, 1e3));
        }, [$, r, tg]),
        tx = i.useCallback(() => {
            tm(), null != B.current && (clearTimeout(B.current), (B.current = null));
        }, [tm]);
    i.useEffect(
        () => () => {
            null != B.current && clearTimeout(B.current);
        },
        [],
    );
    let tM = i.useCallback(() => {
            null != $ && (0, D.A)({ guildId: $, pageIndex: tC, skuId: r, slug: F?.slug });
        }, [$, r, tC, F?.slug]),
        tp = i.useCallback(
            (t) => {
                (tf(W.bB.CARD), null != l && F?.applicationId != null)
                    ? l(t, { skuId: r, applicationId: F.applicationId })
                    : tM();
            },
            [tf, l, tM, r, F?.applicationId],
        ),
        tL = i.useCallback(
            (t) => {
                tr &&
                    (0, f.L3)(t, async () => {
                        let { default: t } = await n.e("97249").then(n.bind(n, 10680));
                        return (e) => (0, s.jsx)(t, { ...e, skuId: r });
                    });
            },
            [tr, r],
        ),
        {
            priceComponent: tb,
            extendedHeight: tD,
            displayPrice: tv,
        } = (function (t) {
            let { sku: e } = t,
                {
                    normalPrice: n,
                    discountedPrice: r,
                    discountPercent: a,
                } = (0, S.o)({ sku: e, priceSetAssignmentPurchaseType: K.lid.DEFAULT }),
                l = r ?? n,
                u = i.useMemo(
                    () =>
                        null != e && null != e.orbsReward && e.orbsReward > 0
                            ? (0, s.jsx)("div", {
                                  className: z.pt,
                                  children: (0, s.jsx)(T.Text, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: q.intl.format(q.t.GiVd2Q, {
                                          orbCount: e.orbsReward,
                                          orbIconHook: () =>
                                              (0, s.jsx)(A.Cp8, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                      }),
                                  }),
                              })
                            : null,
                    [e],
                );
            return null != e && (0, M.mC)(e)
                ? null != a && null != r
                    ? {
                          priceComponent: (0, s.jsxs)("div", {
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: z.p6,
                                      children: [
                                          null != n &&
                                              (0, s.jsx)(T.Text, {
                                                  className: z.of,
                                                  variant: "text-md/medium",
                                                  color: "text-muted",
                                                  lineClamp: 1,
                                                  children: n,
                                              }),
                                          (0, s.jsx)(T.Text, {
                                              variant: "text-md/bold",
                                              color: "always-white",
                                              lineClamp: 1,
                                              children: r,
                                          }),
                                          (0, s.jsxs)(T.Text, {
                                              variant: "text-md/bold",
                                              color: "text-feedback-positive",
                                              lineClamp: 1,
                                              children: ["(", a, ")"],
                                          }),
                                      ],
                                  }),
                                  u,
                              ],
                          }),
                          extendedHeight: null != u,
                          displayPrice: l,
                      }
                    : {
                          priceComponent: (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(T.Text, {
                                      variant: "text-md/bold",
                                      color: "always-white",
                                      lineClamp: 1,
                                      children: n,
                                  }),
                                  u,
                              ],
                          }),
                          extendedHeight: !1,
                          displayPrice: l,
                      }
                : { priceComponent: null, extendedHeight: !1, displayPrice: l };
        })({ sku: F });
    if (null == F) return null;
    let tk = (0, M.fq)(F),
        ty = tt && td;
    return (0, s.jsx)(g.L, {
        innerRef: I,
        onChange: tA,
        threshold: 0,
        children: (0, s.jsx)(A.vN3, {
            children: (0, s.jsxs)(T.sqX, {
                onClick: tp,
                onContextMenu: tL,
                onMouseDown: tO,
                onMouseEnter: th,
                onMouseLeave: tx,
                className: c()(t_, { [z.Zl]: !tn && 2 !== a, [z.BN]: te, [te ? z.Mn : z.YF]: ts, [z.Rc]: !td }, u),
                ref: I,
                "aria-label": F.name,
                children: [
                    null != tH && (0, s.jsx)(T.LpS, { text: tH, disableColor: !0, className: z.qS }),
                    (0, s.jsx)(Z, {
                        guildId: $,
                        sku: F,
                        isCardHovered: ts,
                        variant: a,
                        trackCardClick: tf,
                        analyticsLocations: ta,
                        analyticsContext: ti,
                    }),
                    null != tk
                        ? td
                            ? (0, s.jsx)(G.A, {
                                  containerClassName: z.Vl,
                                  foregroundImageClassName: z.wP,
                                  cardImage: tk,
                                  altText: F.name,
                                  shape: "custom",
                                  backgroundImageClassName: z.GC,
                                  cardBackgroundImage: tI,
                              })
                            : (0, s.jsx)(P.t, {})
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
                    2 !== a
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)("div", { className: z.iZ, style: { background: tS } }),
                                  (0, s.jsxs)("div", {
                                      className: z.zH,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: c()(z.gn, { [z.ov]: !(0, M.mC)(F), [z.w4]: tD }),
                                              children: [
                                                  ty &&
                                                      (0, s.jsx)("div", {
                                                          className: z.S1,
                                                          children: (0, s.jsx)(U.V, { textColor: "always-white" }),
                                                      }),
                                                  td
                                                      ? (0, s.jsxs)(s.Fragment, {
                                                            children: [
                                                                null != tR &&
                                                                    (0, s.jsx)("img", {
                                                                        src: tR.toString(),
                                                                        alt: tE,
                                                                        className: z.ye,
                                                                    }),
                                                                (0, s.jsx)(T.Text, {
                                                                    color: "always-white",
                                                                    variant: "text-md/medium",
                                                                    lineClamp: 1,
                                                                    children: F.name,
                                                                }),
                                                            ],
                                                        })
                                                      : (0, s.jsx)(P.r, {}),
                                              ],
                                          }),
                                          (0, s.jsx)("div", {
                                              className: z.iQ,
                                              children: td ? tb : (0, s.jsx)(P.r, {}),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)("div", {
                                      className: z.li,
                                      children: (0, s.jsxs)(A.e2v, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              to
                                                  ? (0, s.jsx)(A.$nd, {
                                                        variant: "primary",
                                                        onMouseDown: tN,
                                                        onClick: (t) => {
                                                            t.stopPropagation(),
                                                                tf(W.bB.BUY_BUTTON),
                                                                (0, j.a)(
                                                                    F,
                                                                    { isGift: !1 },
                                                                    {
                                                                        analyticsLocations: [
                                                                            ...ta,
                                                                            E.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                        ],
                                                                        guildId: $,
                                                                    },
                                                                );
                                                        },
                                                        text:
                                                            null != tv
                                                                ? q.intl.format(q.t.Xp5WTn, { price: tv })
                                                                : q.intl.string(q.t.boqtTA),
                                                        fullWidth: !0,
                                                    })
                                                  : (0, s.jsx)(m.m, {
                                                        text: q.intl.string(q.t.IqlPbQ),
                                                        children: (0, s.jsx)(A.$nd, {
                                                            variant: "primary",
                                                            onClick: (t) => {
                                                                t.stopPropagation(), tf(W.bB.VIEW_DETAILS_BUTTON), tM();
                                                            },
                                                            text: q.intl.string(q.t.KLBTgF),
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                              (0, s.jsx)(w.A, {
                                                  onGift: (t) => {
                                                      t.stopPropagation(),
                                                          tf(W.bB.GIFT_BUTTON),
                                                          (0, j.a)(
                                                              F,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...ta,
                                                                      E.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
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
