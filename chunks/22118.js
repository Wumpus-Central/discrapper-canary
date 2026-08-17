s.d(t, { A: () => ei }), s(321073);
var l = s(477900),
    n = s(582128),
    i = s(503698),
    r = s.n(i),
    a = s(17928),
    o = s(462887),
    c = s(862482),
    d = s(297264),
    u = s(736653),
    x = s(793574),
    m = s(688810),
    p = s(531260),
    h = s(160946),
    j = s(287809),
    _ = s(166403),
    g = s(158045),
    f = s(960851),
    A = s(89366),
    E = s(724651),
    C = s(732280),
    T = s(331322),
    I = s(508770),
    N = s(834730),
    R = s(441574),
    v = s(862990),
    y = s(427262),
    M = s(622017),
    b = s(113090),
    L = s(88001),
    O = s(466919),
    P = s(375708);
let S = function (e, t) {
    let s,
        l = (function () {
            let { useCachedData: e = !0, fetch: t = !0 } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { premiumGroupMembership: s } = (0, b.A)({ useCachedData: e, fetch: t }),
                { premiumGroupMembers: l } = (0, M.A)(s?.subscriptionId ?? null, { useCachedData: e, fetch: t });
            return l?.primary != null ? (0, y.$3)(l?.primary) : null;
        })({ useCachedData: !0, fetch: e === R.qT.MEMBER }),
        n = (0, a.bG)([_.A], () => _.A.getPremiumGroupSubscription());
    return e === R.qT.UNSPECIFIED
        ? null
        : {
              subheaderString:
                  null ==
                  (s =
                      e === R.qT.PRIMARY
                          ? (0, v.bV)(n, { withIntervals: !0 })
                          : null == l
                            ? null
                            : P.intl.format(O.default.Nu9LNm, { primaryName: l, premiumGroupProductName: (0, L.DP)() }))
                      ? "..."
                      : s,
              bodyString:
                  e === R.qT.PRIMARY
                      ? P.intl.format(O.default["+R/K74"], {
                            helpCenterLink: L.TE,
                            premiumGroupProductName: (0, L.DP)(),
                        })
                      : P.intl.format(t ? O.default["xF+upx"] : O.default.qqfnOm, { helpCenterLink: L.TE }),
          };
};
var w = s(988227);
function D(e) {
    let { className: t, premiumGroupRole: s } = e,
        n = S(s, !0);
    if (null == n) return null;
    let { subheaderString: i, bodyString: a } = n;
    return (0, l.jsxs)("div", {
        className: r()(w.kL, t),
        children: [
            (0, l.jsxs)(T.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                className: w.wx,
                children: [
                    (0, l.jsx)(d.D, { variant: "display-md", className: w.Ss, children: (0, L.DP)() }),
                    (0, l.jsx)(I.E, { type: "beta", variant: "expressive" }),
                ],
            }),
            (0, l.jsx)(N.E, { variant: "text-md/medium", className: w.m_, color: "text-default", children: i }),
            (0, l.jsx)(N.E, { variant: "text-md/medium", color: "text-default", children: a }),
        ],
    });
}
var G = s(194509),
    U = s(396375),
    F = s(511484),
    B = s(774774),
    k = s(231265),
    H = s(933832),
    V = s(140735),
    Z = s(789645),
    z = s(773669),
    W = s(580630),
    Y = s(202541),
    K = s(652215),
    $ = s(864386),
    q = s(702253);
function J(e) {
    let { text: t, badge: s, variant: n } = e;
    return (0, l.jsxs)(N.E, {
        color: "text-default",
        variant: null != n ? n : "text-sm/normal",
        children: [t, " ", s],
    });
}
function Q(e) {
    let { text: t, variant: s } = e;
    return (0, l.jsx)(N.E, { color: "text-strong", variant: null != s ? s : "text-md/semibold", children: t });
}
function X(e) {
    let { includes: t } = e;
    return t
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(H.CheckmarkLargeIcon, {
                      size: "md",
                      color: "currentColor",
                      className: q.$8,
                      "aria-hidden": !0,
                  }),
                  (0, l.jsx)(V.A, { children: P.intl.string(P.t["tq+6t/"]) }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(Z.P, { size: "md", color: "currentColor", className: q.ut, "aria-hidden": !0 }),
                  (0, l.jsx)(V.A, { children: P.intl.string(P.t.l4qZrp) }),
              ],
          });
}
function ee() {
    let e = (0, k._)();
    return (0, l.jsx)(B.HU, { text: e, className: q.QR, colorOptions: B.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL });
}
function et() {
    return (0, l.jsx)("div", {
        className: q.Wm,
        children: (0, l.jsx)(d.D, {
            className: q.uC,
            variant: "heading-deprecated-12/extrabold",
            children: P.intl.string(P.t["o/oRJB"]),
        }),
    });
}
function es(e) {
    let t,
        { premiumType: s, isPremiumGroup: n } = e,
        i = (0, u.Ay)();
    if (n)
        if (s === Y.PremiumTypes.TIER_0)
            return (0, l.jsx)(d.D, { variant: "display-md", className: q.dW, children: P.intl.string(P.t.tUbSDK) });
        else return (0, l.jsx)(d.D, { variant: "display-md", className: q.dW, children: P.intl.string(P.t.Ipxkog) });
    t =
        s === Y.PremiumTypes.TIER_0
            ? (0, o.M)(i)
                ? "/assets/8b472f9ec50bc47c.png"
                : "/assets/24c4ba2719f9bbc8.png"
            : (0, o.M)(i)
              ? "/assets/3638711ae67443ff.png"
              : "/assets/a6bb84f7256073af.png";
    let r = (0, g.Dd)(s);
    return (0, l.jsx)("img", { src: t, className: q.wm, alt: r });
}
function el(e) {
    let { label: t, column1: s, column2: n } = e;
    return (0, l.jsxs)("tr", {
        className: r()(q.U1, q.YI, q.Y9),
        children: [
            (0, l.jsx)("th", { scope: "col", className: q.Cr, children: t }),
            (0, l.jsx)("th", { scope: "col", className: q.e4, children: s }),
            (0, l.jsx)("th", { scope: "col", className: r()(q.e4, q.Y9), children: n }),
        ],
    });
}
function en(e) {
    let {
        label: t,
        column1: s,
        column2: n,
        withBottomBorder: i = !0,
        withTopBorderRadius: a = !1,
        withBottomBorderRadius: o = !1,
        buttonsRow: c = !1,
        shortRow: d = !1,
    } = e;
    return (0, l.jsxs)("tr", {
        className: r()(q.nM, { [q.EE]: c, [q.Y9]: a, [q.kS]: o, [q.YI]: i, [q.vs]: d }),
        children: [
            (0, l.jsx)("th", { scope: "row", className: q.nx, children: t }),
            (0, l.jsx)("td", { className: r()(q.Hn, { [q.SD]: c }), children: s }),
            (0, l.jsx)("td", { className: r()(q.Hn, { [q.Y9]: a, [q.kS]: o, [q.SD]: c }), children: n }),
        ],
    });
}
let ei = function (e) {
    var t;
    let s,
        i,
        T,
        {
            className: I,
            hideCTAs: N = !1,
            headingOverride: R,
            hidePill: v = !1,
            selectedPlanColumnClassName: y,
            selectedPlanTier: M = Y.PremiumTypes.TIER_2,
        } = e,
        { analyticsLocations: b } = (0, m.Ay)(x.A.PREMIUM_MARKETING_PLAN_COMPARISON),
        L = (0, a.bG)([_.A], () => _.A.hasFetchedSubscriptions()),
        O = (0, h.Y)(Y.T7),
        S = (0, u.Ay)(),
        w = (0, o.q)(S),
        k = (0, a.bG)([j.default], () => j.default.getCurrentUser()),
        H = null != k && k.isPremiumWithPremiumGroup(),
        V = (0, g.YE)(k, Y.PremiumTypes.TIER_2),
        Z = (0, C.V)(),
        ei = Z?.subscriptionTrial?.skuId,
        er = (0, A.Us)(),
        ea = (0, E.O)(),
        eo = (0, F.YJ)(ea),
        ec = null != ea && (0, F.U9)(ea, Y.pe.TIER_2) && eo === Y.gD.PREMIUM_MONTH_TIER_2,
        ed = (0, F.N1)(eo),
        eu = null != ed ? `${ed}/${(0, g.FJ)(Y.WT.MONTH)}` : "",
        ex = (0, g.JM)(Y.gD.PREMIUM_MONTH_TIER_0),
        em = (0, g.JM)(Y.gD.PREMIUM_MONTH_TIER_2),
        ep =
            ((t = (0, p.A)().fractionalState),
            (s = {
                0: {
                    label: (0, l.jsx)(J, { text: P.intl.string(P.t["09yRK3"]) }),
                    column1: (0, l.jsx)(Q, { text: g.Ay.formatPriceString(ex, Y.WT.MONTH) }),
                    column2: (0, l.jsx)(Q, { text: ec ? eu : g.Ay.formatPriceString(em, Y.WT.MONTH) }),
                    withBottomBorder: !0,
                },
                1: {
                    label: (0, l.jsx)(J, { text: P.intl.string(P.t.vaDeDV) }),
                    column1: (0, l.jsx)(X, { includes: !0 }),
                    column2: (0, l.jsx)(X, { includes: !0 }),
                },
                2: {
                    label: (0, l.jsx)(J, { text: P.intl.string(P.t.DmfiwT) }),
                    column1: (0, l.jsx)(X, { includes: !0 }),
                    column2: (0, l.jsx)(X, { includes: !0 }),
                },
                3: {
                    label: (0, l.jsx)(J, { text: P.intl.string(P.t.OuItFi) }),
                    column1: (0, l.jsx)(X, { includes: !0 }),
                    column2: (0, l.jsx)(X, { includes: !0 }),
                },
                4: {
                    label: (0, l.jsx)(J, { text: P.intl.string(P.t["9kRJS8"]) }),
                    column1: (0, l.jsx)(X, { includes: !0 }),
                    column2: (0, l.jsx)(X, { includes: !0 }),
                },
                5: {
                    label: (0, l.jsx)(J, { text: P.intl.string(P.t["ufhQC+"]) }),
                    column1: (0, l.jsx)(Q, { text: (0, g.EJ)(Y.PremiumTypes.TIER_0) }),
                    column2: (0, l.jsx)(Q, { text: (0, g.EJ)(Y.PremiumTypes.TIER_2) }),
                },
                6: {
                    label: (0, l.jsx)(J, { text: P.intl.string(P.t.VwxlMw) }),
                    column1: (0, l.jsx)(X, { includes: !1 }),
                    column2: (0, l.jsx)(Q, { text: P.intl.string(P.t.XdN6KU) }),
                },
                7: {
                    label: (0, l.jsx)(J, {
                        text: P.intl.formatToPlainString(P.t.nyhDpw, {
                            numBoosts: Y.M4,
                            percentageOff: (0, W.l9)(z.default.locale, Y.oX / 100),
                        }),
                    }),
                    column1: (0, l.jsx)(X, { includes: !1 }),
                    column2: (0, l.jsx)(X, { includes: !0 }),
                },
                8: {
                    label: (0, l.jsx)(J, { text: P.intl.string(P.t.tFbcuM) }),
                    column1: (0, l.jsx)(X, { includes: !1 }),
                    column2: (0, l.jsx)(X, { includes: !0 }),
                },
                9: {
                    label: (0, l.jsx)(J, { text: P.intl.string($.default["86GtGH"]) }),
                    column1: (0, l.jsx)(X, { includes: !1 }),
                    column2: (0, l.jsx)(X, { includes: !0 }),
                },
                10: {
                    label: (0, l.jsx)(J, { text: P.intl.string(P.t["aR/zTk"]) }),
                    column1: (0, l.jsx)(X, { includes: !1 }),
                    column2: (0, l.jsx)(X, { includes: !0 }),
                },
                11: {
                    label: (0, l.jsx)(J, { text: P.intl.string(P.t.IzrZHz) }),
                    column1: (0, l.jsx)(X, { includes: !1 }),
                    column2: (0, l.jsx)(X, { includes: !0 }),
                },
                12: {
                    label: (0, l.jsx)(J, { text: P.intl.string(P.t["HwNg/Z"]) }),
                    column1: (0, l.jsx)(X, { includes: !1 }),
                    column2: (0, l.jsx)(X, { includes: !0 }),
                },
                13: {
                    label: (0, l.jsx)(J, { text: P.intl.string(P.t["y+HHL9"]) }),
                    column1: (0, l.jsx)(X, { includes: !0 }),
                    column2: (0, l.jsx)(X, { includes: !0 }),
                },
                14: {
                    label: (0, l.jsx)(J, { text: P.intl.string(P.t.qQxxVc) }),
                    column1: (0, l.jsx)(X, { includes: !0 }),
                    column2: (0, l.jsx)(X, { includes: !0 }),
                },
                15: {
                    label: (0, l.jsx)(J, { text: P.intl.string(P.t.xi0NBE) }),
                    column1: (0, l.jsx)(X, { includes: !1 }),
                    column2: (0, l.jsx)(X, { includes: !0 }),
                    withBottomBorder: !0,
                },
                16: {
                    label: (0, l.jsx)(J, { text: P.intl.string(P.t.MfsUHm) }),
                    column1: (0, l.jsx)(X, { includes: !1 }),
                    column2: (0, l.jsx)(X, { includes: !0 }),
                },
                22: {
                    label: (0, l.jsx)(J, { text: P.intl.string(P.t["A+0H1f"]) }),
                    column1: (0, l.jsx)(X, { includes: !1 }),
                    column2: (0, l.jsx)(X, { includes: !0 }),
                },
                17: {
                    label: (0, l.jsx)(J, { text: P.intl.string(P.t["il8+nC"]) }),
                    column1: (0, l.jsx)(X, { includes: !1 }),
                    column2: (0, l.jsx)(X, { includes: !0 }),
                },
                18: {
                    label: (0, l.jsx)(J, { text: P.intl.formatToPlainString(P.t["8crdzJ"], { maxChars: K.CS1 }) }),
                    column1: (0, l.jsx)(X, { includes: !1 }),
                    column2: (0, l.jsx)(X, { includes: !0 }),
                    withBottomBorder: !0,
                },
                19: {
                    label: (0, l.jsx)(d.D, {
                        className: q.__invalid_textColor,
                        variant: "display-sm",
                        children: "Make Discord Yours",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                20: {
                    label: (0, l.jsx)(d.D, {
                        className: q.__invalid_textColor,
                        variant: "display-sm",
                        children: "Enjoy an Upgraded Discord",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                21: {
                    label: (0, l.jsx)(d.D, {
                        className: q.__invalid_textColor,
                        variant: "display-sm",
                        children: "Show Up the Way You Want",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                23: {
                    label: (0, l.jsx)(J, { text: P.intl.string(P.t["93xPy3"]) }),
                    column1: (0, l.jsx)(X, { includes: !1 }),
                    column2: (0, l.jsx)(X, { includes: !0 }),
                    withBottomBorder: !0,
                },
                24: {
                    label: (0, l.jsx)(J, { text: P.intl.string(P.t["5BJqNF"]) }),
                    column1: (0, l.jsx)(X, { includes: !1 }),
                    column2: (0, l.jsx)(X, { includes: !0 }),
                    withBottomBorder: !1,
                },
            }),
            (i = t === Y.xc.FP_ONLY),
            [
                s[0],
                s[1],
                s[2],
                s[3],
                s[4],
                s[5],
                s[6],
                ...(i ? [] : [s[7]]),
                s[8],
                s[9],
                s[10],
                s[11],
                s[12],
                ...(i ? [] : [s[13]]),
                s[14],
                s[15],
                s[16],
                s[17],
                s[18],
                s[23],
                s[24],
            ]),
        eh = (0, f.cg)();
    if (!L || !O) return null;
    let ej = {
        label: (0, l.jsx)(d.D, {
            className: q.__invalid_textColor,
            variant: "heading-lg/extrabold",
            children: P.intl.string(P.t.ED4UVD),
        }),
        column1: (0, l.jsx)(es, { premiumType: Y.PremiumTypes.TIER_0, isPremiumGroup: H }),
        column2: (0, l.jsx)(es, { premiumType: Y.PremiumTypes.TIER_2, isPremiumGroup: H }),
    };
    N
        ? ep.push({
              label: null,
              column1: null,
              column2: null,
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: !1,
              shortRow: !0,
          })
        : ep.push({
              label: null,
              column1: (0, l.jsxs)(l.Fragment, {
                  children: [
                      ei === Y.pe.TIER_2 || eh
                          ? (0, l.jsx)(U.A, {
                                className: q.x6,
                                subscriptionTier: Y.pe.TIER_0,
                                showIcon: !1,
                                look: c.pR.OUTLINED,
                                color: w ? c.XD.BRAND : c.XD.WHITE,
                            })
                          : (0, l.jsx)(U.A, { className: q.x6, subscriptionTier: Y.pe.TIER_0, showIcon: !1 }),
                      er === Y.PremiumTypes.TIER_2 || null != ei
                          ? null
                          : (0, l.jsx)(G.A, { className: q.x6, subscriptionTier: Y.pe.TIER_0 }),
                  ],
              }),
              column2: (0, l.jsxs)(l.Fragment, {
                  children: [
                      ei === Y.pe.TIER_0
                          ? (0, l.jsx)(U.A, {
                                className: q.x6,
                                subscriptionTier: Y.pe.TIER_2,
                                showIcon: !1,
                                look: c.pR.OUTLINED,
                                color: w ? c.XD.BRAND : c.XD.WHITE,
                            })
                          : (0, l.jsx)(U.A, {
                                className: q.x6,
                                subscriptionTier: Y.pe.TIER_2,
                                showIcon: !1,
                                hasActivePromotion: eh,
                            }),
                      er === Y.PremiumTypes.TIER_0 || null != ei
                          ? null
                          : (0, l.jsx)(G.A, { className: q.x6, subscriptionTier: Y.pe.TIER_2 }),
                  ],
              }),
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: null == ei,
          }),
        (T = v
            ? null
            : null != ei || null != er
              ? (0, l.jsx)(B.HU, {
                    text: null != ei ? P.intl.string(P.t.IBYG5U) : P.intl.string(P.t.ce1v3V),
                    className: q.ls,
                    colorOptions:
                        ei === Y.pe.TIER_0
                            ? w
                                ? B.at.PREMIUM_TIER_0_GRADIENT_FILL
                                : B.at.PREMIUM_TIER_0_WHITE_FILL
                            : w
                              ? V
                                  ? B.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  : B.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                              : B.at.PREMIUM_TIER_2_WHITE_FILL,
                })
              : eh
                ? (0, l.jsx)(ee, {})
                : (0, l.jsx)(et, {}));
    let e_ = ei === Y.pe.TIER_0 || er === Y.PremiumTypes.TIER_0 || M === Y.PremiumTypes.TIER_0;
    return (0, l.jsx)(m.f5, {
        value: b,
        children: (0, l.jsxs)("div", {
            className: r()(q.zr, I),
            "data-testid": "v2-marketing-page-comparison-table",
            children: [
                (0, l.jsx)(d.D, {
                    className: r()(q.Qw, q.__invalid_textColor),
                    variant: "heading-xxl/extrabold",
                    children: R ?? P.intl.string(P.t.FIbMh9),
                }),
                H && (0, l.jsx)(D, { premiumGroupRole: k.premiumGroupRole, className: q.vg }),
                (0, l.jsxs)("div", {
                    className: q.wY,
                    children: [
                        (0, l.jsx)("div", { className: r()(y, { [q.A9]: e_, [q.ce]: !e_ && !H }), children: !e_ && T }),
                        (0, l.jsxs)("table", {
                            className: q.tp,
                            children: [
                                (0, l.jsx)("thead", { children: (0, l.jsx)(el, { ...ej }) }),
                                (0, l.jsx)("tbody", {
                                    children: ep.map((e, t) => (0, n.createElement)(en, { ...e, key: t })),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
};
