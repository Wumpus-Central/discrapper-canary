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
    T = n(990078),
    m = n(397927),
    R = n(442433),
    E = n(775602),
    f = n(793574),
    H = n(688810),
    I = n(713517),
    C = n(427209),
    O = n(993046),
    N = n(544028),
    S = n(253932),
    x = n(67480),
    h = n(954571),
    M = n(871123),
    p = n(733391),
    L = n(439303),
    b = n(832163),
    v = n(35826),
    D = n(310962),
    B = n(345938),
    k = n(533406),
    j = n(263911),
    y = n(971146),
    U = n(366523),
    G = n(300182),
    w = n(620999),
    F = n(743693),
    P = n(696028),
    Y = n(914887),
    V = n(995393),
    W = n(652215),
    K = n(985018),
    q = n(900719);
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
            (0, s.jsx)(F._, {
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
        F = (0, _.bG)([x.A], () => x.A.get(r)),
        { guildId: J } = (0, M.nG)(F?.applicationId),
        Z = (0, _.bG)([N.A], () => (0, A.Mwr)(N.A.theme)),
        tt = (0, _.bG)([E.A], () => E.A.useReducedMotion),
        te = S.Q_.useSetting(),
        { isHoveringOrFocusing: tn } = (0, I.A)(C),
        tr = (0, L.jM)(),
        { analyticsLocations: ts } = (0, H.Ay)(o ?? []),
        ti = i.useRef({ positionInSection: e, analyticsLocations: ts }),
        [ta, tl] = i.useState(!1),
        tu = (0, _.bG)([b.A], () => (null != r ? b.A.getNormalizedSKUEligibility(r) : void 0), [r]),
        tc = (0, D.A)(r, ta),
        to = i.useCallback((t) => {
            tl(t);
        }, []),
        td = i.useMemo(() => c()(q.Nr, { [q.ax]: 0 === a, [q.GW]: 1 === a, [q.jz]: 2 === a }), [a]),
        { handleCardHover: tA, handleCardUnhover: t_ } = (0, P.Z)(r, tr, e, ts),
        { handleCardVisibilityChange: tg } = (0, Y.a)(r, tr, e, ts);
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
                h.default.track(W.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
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
        { primaryIconAsset: tm, primaryIconLabel: tR } = i.useMemo(() => (0, M.Cv)(F, F?.applicationId), [F]),
        tE = (0, _.bG)([b.A], () => (null != J ? (b.A.getStorefrontState(J)?.activePage ?? 0) : 0)),
        tf = i.useMemo(() => {
            let t = F?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == t) return null;
            let e = d()(),
                n = Math.max(d()(t).diff(e, "days"), 1);
            return n <= 3 ? K.intl.format(K.t.PWw4Vp, { days: n }) : null;
        }, [F?.tenantMetadata?.socialLayer?.expiresAt]),
        tH = (0, M.xf)(F),
        tI = i.useMemo(() => {
            if (!tc) return "none";
            let [t, e] = z[a];
            return `linear-gradient(to top, ${X} ${30 + t}%, ${Q} ${30 + e}%)`;
        }, [a, tc]),
        tC = i.useCallback(() => {
            null != J && (0, p.iR)(J, r);
        }, [J, r]),
        tO = i.useCallback(() => {
            tA(),
                null != J &&
                    (B.current = setTimeout(() => {
                        (0, p.iR)(J, r);
                    }, 1e3));
        }, [J, r, tA]),
        tN = i.useCallback(() => {
            t_(), null != B.current && (clearTimeout(B.current), (B.current = null));
        }, [t_]);
    i.useEffect(
        () => () => {
            null != B.current && clearTimeout(B.current);
        },
        [],
    );
    let tS = i.useCallback(() => {
            null != J && (0, v.A)({ guildId: J, pageIndex: tE, skuId: r, slug: F?.slug });
        }, [J, r, tE, F?.slug]),
        tx = i.useCallback(
            (t) => {
                (tT(V.bB.CARD), null != l && F?.applicationId != null)
                    ? l(t, { skuId: r, applicationId: F.applicationId })
                    : tS();
            },
            [tT, l, tS, r, F?.applicationId],
        ),
        th = i.useCallback(
            (t) => {
                te &&
                    (0, R.L3)(t, async () => {
                        let { default: t } = await n.e("97249").then(n.bind(n, 10680));
                        return (e) => (0, s.jsx)(t, { ...e, skuId: r });
                    });
            },
            [te, r],
        ),
        {
            priceComponent: tM,
            extendedHeight: tp,
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
                                  children: (0, s.jsx)(m.Text, {
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
                                              (0, s.jsx)(m.Text, {
                                                  className: q.of,
                                                  variant: "text-md/medium",
                                                  color: "text-muted",
                                                  lineClamp: 1,
                                                  children: n,
                                              }),
                                          (0, s.jsx)(m.Text, {
                                              variant: "text-md/bold",
                                              color: "always-white",
                                              lineClamp: 1,
                                              children: r,
                                          }),
                                          (0, s.jsxs)(m.Text, {
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
                                  (0, s.jsx)(m.Text, {
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
    let tb = (0, M.fq)(F);
    return (0, s.jsx)(g.L, {
        innerRef: C,
        onChange: to,
        threshold: 0,
        children: (0, s.jsx)(A.vN3, {
            children: (0, s.jsxs)(m.sqX, {
                onClick: tx,
                onContextMenu: th,
                onMouseEnter: tO,
                onMouseLeave: tN,
                className: c()(td, { [q.Zl]: !tt && 2 !== a, [q.BN]: Z, [Z ? q.Mn : q.YF]: tn, [q.Rc]: !tc }, u),
                ref: C,
                "aria-label": F.name,
                children: [
                    F.exclusive
                        ? (0, s.jsx)("div", { className: q.fC, children: (0, s.jsx)(j.I, {}) })
                        : null != tf && (0, s.jsx)(m.LpS, { text: tf, disableColor: !0, className: q.qS }),
                    (0, s.jsx)($, {
                        guildId: J,
                        sku: F,
                        isCardHovered: tn,
                        variant: a,
                        trackCardClick: tT,
                        analyticsLocations: ts,
                        analyticsContext: tr,
                    }),
                    null != tb
                        ? tc
                            ? (0, s.jsx)(U.A, {
                                  containerClassName: q.Vl,
                                  foregroundImageClassName: q.wP,
                                  cardImage: tb,
                                  altText: F.name,
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
                                  (0, s.jsx)("div", { className: q.iZ, style: { background: tI } }),
                                  (0, s.jsxs)("div", {
                                      className: q.zH,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: c()(q.gn, { [q.ov]: !(0, M.mC)(F), [q.w4]: tp }),
                                              children: [
                                                  tc &&
                                                      (0, s.jsx)("div", {
                                                          className: q.S1,
                                                          children: (0, s.jsx)(y.V, { textColor: "always-white" }),
                                                      }),
                                                  tc
                                                      ? (0, s.jsxs)(s.Fragment, {
                                                            children: [
                                                                null != tm &&
                                                                    (0, s.jsx)("img", {
                                                                        src: tm.toString(),
                                                                        alt: tR,
                                                                        className: q.ye,
                                                                    }),
                                                                (0, s.jsx)(m.Text, {
                                                                    color: "always-white",
                                                                    variant: "text-md/medium",
                                                                    lineClamp: 1,
                                                                    children: F.name,
                                                                }),
                                                            ],
                                                        })
                                                      : (0, s.jsx)(w.r, {}),
                                              ],
                                          }),
                                          (0, s.jsx)("div", {
                                              className: q.iQ,
                                              children: tc ? tM : (0, s.jsx)(w.r, {}),
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
                                                        onMouseDown: tC,
                                                        onClick: (t) => {
                                                            t.stopPropagation(),
                                                                tT(V.bB.BUY_BUTTON),
                                                                (0, k.a)(
                                                                    F,
                                                                    { isGift: !1 },
                                                                    {
                                                                        analyticsLocations: [
                                                                            ...ts,
                                                                            f.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON,
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
                                                  : (0, s.jsx)(T.m, {
                                                        text: K.intl.string(K.t.IqlPbQ),
                                                        children: (0, s.jsx)(A.$nd, {
                                                            variant: "primary",
                                                            onClick: (t) => {
                                                                t.stopPropagation(), tT(V.bB.VIEW_DETAILS_BUTTON), tS();
                                                            },
                                                            text: K.intl.string(K.t.KLBTgF),
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                              (0, s.jsx)(G.A, {
                                                  onGift: (t) => {
                                                      t.stopPropagation(),
                                                          tT(V.bB.GIFT_BUTTON),
                                                          (0, k.a)(
                                                              F,
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
