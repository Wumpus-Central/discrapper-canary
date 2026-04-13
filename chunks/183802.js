n.d(e, { A: () => Z, s: () => J });
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
    H = n(688810),
    I = n(713517),
    C = n(427209),
    O = n(993046),
    S = n(544028),
    N = n(253932),
    h = n(67480),
    x = n(954571),
    M = n(871123),
    p = n(733391),
    b = n(439303),
    L = n(832163),
    v = n(35826),
    D = n(207654),
    k = n(310962),
    B = n(345938),
    j = n(533406),
    y = n(971146),
    U = n(366523),
    G = n(300182),
    w = n(620999),
    P = n(743693),
    F = n(696028),
    Y = n(914887),
    V = n(995393),
    W = n(652215),
    K = n(985018),
    q = n(105791);
let z = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    X = l()("#000000").darken(1.5).alpha(0.9).hex(),
    Q = l()("#000000").alpha(0).hex();
var J = (((r = {})[(r.SMALL = 0)] = "SMALL"), (r[(r.MEDIUM = 1)] = "MEDIUM"), (r[(r.EMBEDDED = 2)] = "EMBEDDED"), r);
function $(t) {
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
                        (a(V.bB.FORWARD_BUTTON),
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
            a(V.bB.WISHLIST_BUTTON);
        }, [a]),
        g = i.useMemo(() => c()(q.o, { [q.H5]: r }), [r]);
    return (0, s.jsxs)("div", {
        className: q.zu,
        children: [
            2 === l &&
                (0, s.jsx)(A.DUT, {
                    className: c()(g, q.gy),
                    onClick: d,
                    children: (0, s.jsx)(C.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, s.jsx)(P._, {
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
        C = i.useRef(null),
        B = i.useRef(null),
        P = (0, _.bG)([h.A], () => h.A.get(r)),
        { guildId: J } = (0, M.nG)(P?.applicationId),
        Z = (0, D.b)({ location: "storefront_card" }),
        tt = (0, _.bG)([S.A], () => (0, A.Mwr)(S.A.theme)),
        te = (0, _.bG)([R.A], () => R.A.useReducedMotion),
        tn = N.Q_.useSetting(),
        { isHoveringOrFocusing: tr } = (0, I.A)(C),
        ts = (0, b.jM)(),
        { analyticsLocations: ti } = (0, H.Ay)(o ?? []),
        ta = i.useRef({ positionInSection: e, analyticsLocations: ti }),
        [tl, tu] = i.useState(!1),
        tc = (0, _.bG)([L.A], () => (null != r ? L.A.getNormalizedSKUEligibility(r) : void 0), [r]),
        to = (0, k.A)(r, tl),
        td = i.useCallback((t) => {
            tu(t);
        }, []),
        tA = i.useMemo(() => c()(q.Nr, { [q.ax]: 0 === a, [q.GW]: 1 === a, [q.jz]: 2 === a }), [a]),
        { handleCardHover: t_, handleCardUnhover: tg } = (0, F.Z)(r, ts, e, ti),
        { handleCardVisibilityChange: tm } = (0, Y.a)(r, ts, e, ti);
    i.useEffect(() => {
        tm(tl);
    }, [tl]);
    let tT = i.useCallback(
            (t) => {
                let { analyticsLocations: e, positionInSection: n } = ta.current,
                    {
                        sessionId: s,
                        guildId: i,
                        pageIndex: a,
                        pageTitle: l,
                        pageSection: u,
                        pageSectionTitle: c,
                        isUserGuildMember: o,
                        pageHasLeaderboard: d,
                    } = ts;
                x.default.track(W.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
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
            [r, ts],
        ),
        { primaryIconAsset: tf, primaryIconLabel: tR } = i.useMemo(() => (0, M.Cv)(P, P?.applicationId), [P]),
        tE = (0, _.bG)([L.A], () => (null != J ? (L.A.getStorefrontState(J)?.activePage ?? 0) : 0)),
        tH = i.useMemo(() => {
            let t = P?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == t) return null;
            let e = d()(),
                n = Math.max(d()(t).diff(e, "days"), 1);
            return n <= 3 ? K.intl.format(K.t.PWw4Vp, { days: n }) : null;
        }, [P?.tenantMetadata?.socialLayer?.expiresAt]),
        tI = (0, M.xf)(P),
        tC = i.useMemo(() => {
            if (!to) return "none";
            let [t, e] = z[a];
            return `linear-gradient(to top, ${X} ${30 + t}%, ${Q} ${30 + e}%)`;
        }, [a, to]),
        tO = i.useCallback(() => {
            null != J && (0, p.iR)(J, r);
        }, [J, r]),
        tS = i.useCallback(() => {
            t_(),
                null != J &&
                    (B.current = setTimeout(() => {
                        (0, p.iR)(J, r);
                    }, 1e3));
        }, [J, r, t_]),
        tN = i.useCallback(() => {
            tg(), null != B.current && (clearTimeout(B.current), (B.current = null));
        }, [tg]);
    i.useEffect(
        () => () => {
            null != B.current && clearTimeout(B.current);
        },
        [],
    );
    let th = i.useCallback(() => {
            null != J && (0, v.A)({ guildId: J, pageIndex: tE, skuId: r, slug: P?.slug });
        }, [J, r, tE, P?.slug]),
        tx = i.useCallback(
            (t) => {
                (tT(V.bB.CARD), null != l && P?.applicationId != null)
                    ? l(t, { skuId: r, applicationId: P.applicationId })
                    : th();
            },
            [tT, l, th, r, P?.applicationId],
        ),
        tM = i.useCallback(
            (t) => {
                tn &&
                    (0, f.L3)(t, async () => {
                        let { default: t } = await n.e("97249").then(n.bind(n, 10680));
                        return (e) => (0, s.jsx)(t, { ...e, skuId: r });
                    });
            },
            [tn, r],
        ),
        {
            priceComponent: tp,
            extendedHeight: tb,
            displayPrice: tL,
        } = (function (t) {
            let { sku: e } = t,
                {
                    normalPrice: n,
                    discountedPrice: r,
                    discountPercent: a,
                } = (0, O.ou)({ sku: e, priceSetAssignmentPurchaseType: W.lid.DEFAULT }),
                l = r ?? n,
                u = i.useMemo(
                    () =>
                        null != e && null != e.orbsReward && e.orbsReward > 0
                            ? (0, s.jsx)("div", {
                                  className: q.pt,
                                  children: (0, s.jsx)(T.Text, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: K.intl.format(K.t.GiVd2Q, {
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
                                      className: q.p6,
                                      children: [
                                          null != n &&
                                              (0, s.jsx)(T.Text, {
                                                  className: q.of,
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
        })({ sku: P });
    if (null == P) return null;
    let tv = (0, M.fq)(P),
        tD = Z && to;
    return (0, s.jsx)(g.L, {
        innerRef: C,
        onChange: td,
        threshold: 0,
        children: (0, s.jsx)(A.vN3, {
            children: (0, s.jsxs)(T.sqX, {
                onClick: tx,
                onContextMenu: tM,
                onMouseEnter: tS,
                onMouseLeave: tN,
                className: c()(tA, { [q.Zl]: !te && 2 !== a, [q.BN]: tt, [tt ? q.Mn : q.YF]: tr, [q.Rc]: !to }, u),
                ref: C,
                "aria-label": P.name,
                children: [
                    null != tH && (0, s.jsx)(T.LpS, { text: tH, disableColor: !0, className: q.qS }),
                    (0, s.jsx)($, {
                        guildId: J,
                        sku: P,
                        isCardHovered: tr,
                        variant: a,
                        trackCardClick: tT,
                        analyticsLocations: ti,
                        analyticsContext: ts,
                    }),
                    null != tv
                        ? to
                            ? (0, s.jsx)(U.A, {
                                  containerClassName: q.Vl,
                                  foregroundImageClassName: q.wP,
                                  cardImage: tv,
                                  altText: P.name,
                                  shape: "custom",
                                  backgroundImageClassName: q.GC,
                                  cardBackgroundImage: tI,
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
                                  (0, s.jsx)("div", { className: q.iZ, style: { background: tC } }),
                                  (0, s.jsxs)("div", {
                                      className: q.zH,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: c()(q.gn, { [q.ov]: !(0, M.mC)(P), [q.w4]: tb }),
                                              children: [
                                                  tD &&
                                                      (0, s.jsx)("div", {
                                                          className: q.S1,
                                                          children: (0, s.jsx)(y.V, { textColor: "always-white" }),
                                                      }),
                                                  to
                                                      ? (0, s.jsxs)(s.Fragment, {
                                                            children: [
                                                                null != tf &&
                                                                    (0, s.jsx)("img", {
                                                                        src: tf.toString(),
                                                                        alt: tR,
                                                                        className: q.ye,
                                                                    }),
                                                                (0, s.jsx)(T.Text, {
                                                                    color: "always-white",
                                                                    variant: "text-md/medium",
                                                                    lineClamp: 1,
                                                                    children: P.name,
                                                                }),
                                                            ],
                                                        })
                                                      : (0, s.jsx)(w.r, {}),
                                              ],
                                          }),
                                          (0, s.jsx)("div", {
                                              className: q.iQ,
                                              children: to ? tp : (0, s.jsx)(w.r, {}),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)("div", {
                                      className: q.li,
                                      children: (0, s.jsxs)(A.e2v, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              tc
                                                  ? (0, s.jsx)(A.$nd, {
                                                        variant: "primary",
                                                        onMouseDown: tO,
                                                        onClick: (t) => {
                                                            t.stopPropagation(),
                                                                tT(V.bB.BUY_BUTTON),
                                                                (0, j.a)(
                                                                    P,
                                                                    { isGift: !1 },
                                                                    {
                                                                        analyticsLocations: [
                                                                            ...ti,
                                                                            E.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
                                                                        ],
                                                                        guildId: J,
                                                                    },
                                                                );
                                                        },
                                                        text:
                                                            null != tL
                                                                ? K.intl.format(K.t.Xp5WTn, { price: tL })
                                                                : K.intl.string(K.t.boqtTA),
                                                        fullWidth: !0,
                                                    })
                                                  : (0, s.jsx)(m.m, {
                                                        text: K.intl.string(K.t.IqlPbQ),
                                                        children: (0, s.jsx)(A.$nd, {
                                                            variant: "primary",
                                                            onClick: (t) => {
                                                                t.stopPropagation(), tT(V.bB.VIEW_DETAILS_BUTTON), th();
                                                            },
                                                            text: K.intl.string(K.t.KLBTgF),
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                              (0, s.jsx)(G.A, {
                                                  onGift: (t) => {
                                                      t.stopPropagation(),
                                                          tT(V.bB.GIFT_BUTTON),
                                                          (0, j.a)(
                                                              P,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...ti,
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
