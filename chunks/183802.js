n.d(e, { A: () => te, s: () => Z });
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
    x = n(67480),
    h = n(954571),
    p = n(871123),
    M = n(733391),
    L = n(439303),
    b = n(832163),
    v = n(35826),
    D = n(207654),
    k = n(310962),
    j = n(44724),
    y = n(345938),
    B = n(533406),
    U = n(971146),
    G = n(665711),
    w = n(366523),
    P = n(300182),
    F = n(620999),
    Y = n(743693),
    V = n(696028),
    W = n(914887),
    K = n(995393),
    q = n(652215),
    z = n(985018),
    X = n(105791);
let Q = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    J = l()("#000000").darken(1.5).alpha(0.9).hex(),
    $ = l()("#000000").alpha(0).hex();
var Z = (((r = {})[(r.SMALL = 0)] = "SMALL"), (r[(r.MEDIUM = 1)] = "MEDIUM"), (r[(r.EMBEDDED = 2)] = "EMBEDDED"), r);
function tt(t) {
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
                        (a(K.bB.FORWARD_BUTTON),
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
            a(K.bB.WISHLIST_BUTTON);
        }, [a]),
        g = i.useMemo(() => c()(X.o, { [X.H5]: r }), [r]);
    return (0, s.jsxs)("div", {
        className: X.zu,
        children: [
            2 === l &&
                (0, s.jsx)(A.DUT, {
                    className: c()(g, X.gy),
                    onClick: d,
                    children: (0, s.jsx)(I.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, s.jsx)(Y._, {
                sku: n,
                isCardHovered: r,
                trackButtonClick: _,
                className: c()(g, X.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function te(t) {
    let { positionInSection: e, skuId: r, variant: a = 0, onClick: l, className: u, analyticsLocations: o } = t,
        I = i.useRef(null),
        y = i.useRef(null),
        Y = (0, _.bG)([x.A], () => x.A.get(r)),
        { guildId: Z, application: te } = (0, p.nG)(Y?.applicationId),
        tn = (0, D.b)({ location: "storefront_card" }),
        tr = (0, _.bG)([O.A], () => (0, A.Mwr)(O.A.theme)),
        ts = (0, _.bG)([R.A], () => R.A.useReducedMotion),
        ti = N.Q_.useSetting(),
        { isHoveringOrFocusing: ta } = (0, H.A)(I),
        tl = (0, L.jM)(),
        { analyticsLocations: tu } = (0, C.Ay)(o ?? []),
        tc = i.useRef({ positionInSection: e, analyticsLocations: tu }),
        [to, td] = i.useState(!1),
        tA = (0, _.bG)([b.A], () => (null != r ? b.A.getNormalizedSKUEligibility(r) : void 0), [r]),
        t_ = (0, k.A)(r, to),
        tg = i.useCallback((t) => {
            td(t);
        }, []),
        tm = i.useMemo(() => c()(X.Nr, { [X.ax]: 0 === a, [X.GW]: 1 === a, [X.jz]: 2 === a }), [a]),
        { handleCardHover: tT, handleCardUnhover: tf } = (0, V.Z)(r, tl, e, tu),
        { handleCardVisibilityChange: tR } = (0, W.a)(r, tl, e, tu);
    i.useEffect(() => {
        tR(to);
    }, [to]);
    let tE = i.useCallback(
            (t) => {
                let { analyticsLocations: e, positionInSection: n } = tc.current,
                    {
                        sessionId: s,
                        guildId: i,
                        pageIndex: a,
                        pageTitle: l,
                        pageSection: u,
                        pageSectionTitle: c,
                        isUserGuildMember: o,
                        pageHasLeaderboard: d,
                    } = tl;
                h.default.track(q.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
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
            [r, tl],
        ),
        { primaryIconAsset: tC, primaryIconLabel: tH } = i.useMemo(() => (0, p.Cv)(Y, Y?.applicationId), [Y]),
        tI = (0, _.bG)([b.A], () => (null != Z ? (b.A.getStorefrontState(Z)?.activePage ?? 0) : 0)),
        tS = i.useMemo(() => {
            let t = Y?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == t) return null;
            let e = d()(),
                n = Math.max(d()(t).diff(e, "days"), 1);
            return n <= 3 ? z.intl.format(z.t.PWw4Vp, { days: n }) : null;
        }, [Y?.tenantMetadata?.socialLayer?.expiresAt]),
        tO = (0, p.xf)(Y),
        tN = i.useMemo(() => {
            if (!t_) return "none";
            let [t, e] = Q[a];
            return `linear-gradient(to top, ${J} ${30 + t}%, ${$} ${30 + e}%)`;
        }, [a, t_]),
        tx = i.useCallback(() => {
            (0, j.X)({ guildId: Z });
        }, [Z]),
        th = i.useCallback(() => {
            null != Z && (0, M.iR)(Z, r, "SocialLayerStorefrontCard");
        }, [Z, r]),
        tp = i.useCallback(() => {
            tT(),
                null != Z &&
                    (y.current = setTimeout(() => {
                        (0, M.iR)(Z, r, "SocialLayerStorefrontCard");
                    }, 1e3));
        }, [Z, r, tT]),
        tM = i.useCallback(() => {
            tf(), null != y.current && (clearTimeout(y.current), (y.current = null));
        }, [tf]);
    i.useEffect(
        () => () => {
            null != y.current && clearTimeout(y.current);
        },
        [],
    );
    let tL = i.useCallback(() => {
            null != Z && (0, v.A)({ guildId: Z, pageIndex: tI, skuId: r, slug: Y?.slug });
        }, [Z, r, tI, Y?.slug]),
        tb = i.useCallback(
            (t) => {
                (tE(K.bB.CARD), null != l && Y?.applicationId != null)
                    ? l(t, { skuId: r, applicationId: Y.applicationId })
                    : tL();
            },
            [tE, l, tL, r, Y?.applicationId],
        ),
        tv = i.useCallback(
            (t) => {
                ti &&
                    (0, f.L3)(t, async () => {
                        let { default: t } = await n.e("97249").then(n.bind(n, 10680));
                        return (e) => (0, s.jsx)(t, { ...e, skuId: r });
                    });
            },
            [ti, r],
        ),
        {
            priceComponent: tD,
            extendedHeight: tk,
            displayPrice: tj,
        } = (function (t) {
            let { sku: e } = t,
                {
                    normalPrice: n,
                    discountedPrice: r,
                    discountPercent: a,
                } = (0, S.o)({ sku: e, priceSetAssignmentPurchaseType: q.lid.DEFAULT }),
                l = r ?? n,
                u = i.useMemo(
                    () =>
                        null != e && null != e.orbsReward && e.orbsReward > 0
                            ? (0, s.jsx)("div", {
                                  className: X.pt,
                                  children: (0, s.jsx)(T.Text, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: z.intl.format(z.t.GiVd2Q, {
                                          orbCount: e.orbsReward,
                                          orbIconHook: () =>
                                              (0, s.jsx)(A.Cp8, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                      }),
                                  }),
                              })
                            : null,
                    [e],
                );
            return null != e && (0, p.mC)(e)
                ? null != a && null != r
                    ? {
                          priceComponent: (0, s.jsxs)("div", {
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: X.p6,
                                      children: [
                                          (0, s.jsx)(T.Text, {
                                              className: X.of,
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
                                          (0, s.jsx)(T.Text, {
                                              variant: "text-md/bold",
                                              color: "text-feedback-positive",
                                              lineClamp: 1,
                                              children: a,
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
        })({ sku: Y });
    if (null == Y) return null;
    let ty = (0, p.fq)(Y),
        tB = tn && t_ && null != te;
    return (0, s.jsx)(g.L, {
        innerRef: I,
        onChange: tg,
        threshold: 0,
        children: (0, s.jsx)(A.vN3, {
            children: (0, s.jsxs)(T.sqX, {
                onClick: tb,
                onContextMenu: tv,
                onMouseDown: tx,
                onMouseEnter: tp,
                onMouseLeave: tM,
                className: c()(tm, { [X.Zl]: !ts && 2 !== a, [X.BN]: tr, [tr ? X.Mn : X.YF]: ta, [X.Rc]: !t_ }, u),
                ref: I,
                "aria-label": Y.name,
                children: [
                    tB &&
                        2 !== a &&
                        (0, s.jsx)("div", {
                            className: X.Zv,
                            children: (0, s.jsx)(G.W, { application: te, iconSize: 16 }),
                        }),
                    null != tS && (0, s.jsx)(T.LpS, { text: tS, disableColor: !0, className: X.qS }),
                    (0, s.jsx)(tt, {
                        guildId: Z,
                        sku: Y,
                        isCardHovered: ta,
                        variant: a,
                        trackCardClick: tE,
                        analyticsLocations: tu,
                        analyticsContext: tl,
                    }),
                    null != ty
                        ? t_
                            ? (0, s.jsx)(w.A, {
                                  containerClassName: X.Vl,
                                  foregroundImageClassName: X.wP,
                                  cardImage: ty,
                                  altText: Y.name,
                                  shape: "custom",
                                  backgroundImageClassName: X.GC,
                                  cardBackgroundImage: tO,
                              })
                            : (0, s.jsx)(F.t, {})
                        : (0, s.jsx)("div", {
                              className: X.t7,
                              children: (0, s.jsx)(A.qyI, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: X.Cw,
                              }),
                          }),
                    2 !== a
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)("div", { className: X.iZ, style: { background: tN } }),
                                  (0, s.jsxs)("div", {
                                      className: X.zH,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: c()(X.gn, { [X.ov]: !(0, p.mC)(Y), [X.w4]: tk }),
                                              children: [
                                                  tB &&
                                                      (0, s.jsx)("div", {
                                                          className: X.S1,
                                                          children: (0, s.jsx)(U.V, {
                                                              application: te,
                                                              textColor: "always-white",
                                                          }),
                                                      }),
                                                  t_
                                                      ? (0, s.jsxs)(s.Fragment, {
                                                            children: [
                                                                null != tC &&
                                                                    (0, s.jsx)("img", {
                                                                        src: tC.toString(),
                                                                        alt: tH,
                                                                        className: X.ye,
                                                                    }),
                                                                (0, s.jsx)(T.Text, {
                                                                    color: "always-white",
                                                                    variant: "text-md/medium",
                                                                    lineClamp: 1,
                                                                    children: Y.name,
                                                                }),
                                                            ],
                                                        })
                                                      : (0, s.jsx)(F.r, {}),
                                              ],
                                          }),
                                          (0, s.jsx)("div", {
                                              className: X.iQ,
                                              children: t_ ? tD : (0, s.jsx)(F.r, {}),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)("div", {
                                      className: X.li,
                                      children: (0, s.jsxs)(A.e2v, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              tA
                                                  ? (0, s.jsx)(A.$nd, {
                                                        variant: "primary",
                                                        onMouseDown: th,
                                                        onClick: (t) => {
                                                            t.stopPropagation(),
                                                                tE(K.bB.BUY_BUTTON),
                                                                (0, B.a)(
                                                                    Y,
                                                                    { isGift: !1 },
                                                                    {
                                                                        analyticsLocations: [
                                                                            ...tu,
                                                                            E.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                        ],
                                                                        guildId: Z,
                                                                    },
                                                                );
                                                        },
                                                        text: (0, p.mC)(Y)
                                                            ? z.intl.format(z.t.Xp5WTn, { price: tj })
                                                            : z.intl.string(z.t.boqtTA),
                                                        fullWidth: !0,
                                                    })
                                                  : (0, s.jsx)(m.m, {
                                                        text: z.intl.string(z.t.IqlPbQ),
                                                        children: (0, s.jsx)(A.$nd, {
                                                            variant: "primary",
                                                            onClick: (t) => {
                                                                t.stopPropagation(), tE(K.bB.VIEW_DETAILS_BUTTON), tL();
                                                            },
                                                            text: z.intl.string(z.t.KLBTgF),
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                              (0, s.jsx)(P.A, {
                                                  onGift: (t) => {
                                                      t.stopPropagation(),
                                                          tE(K.bB.GIFT_BUTTON),
                                                          (0, B.a)(
                                                              Y,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...tu,
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
