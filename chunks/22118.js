(s.d(t, { A: () => es }), s(321073));
var i = s(477900),
    n = s(582128),
    a = s(503698),
    l = s.n(a),
    r = s(17928),
    c = s(462887),
    o = s(862482),
    d = s(297264),
    u = s(736653),
    m = s(793574),
    x = s(688810),
    g = s(531260),
    p = s(160946),
    f = s(287809),
    h = s(166403),
    N = s(158045),
    A = s(89366),
    j = s(724651),
    E = s(732280),
    T = s(331322),
    b = s(62010),
    C = s(834730),
    R = s(441574),
    I = s(989790),
    _ = s(427262),
    v = s(622017),
    P = s(113090),
    y = s(88001),
    S = s(259589),
    D = s(105292);
let M = function (e, t) {
    let s,
        i = (function () {
            let { useCachedData: e = !0, fetch: t = !0 } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { premiumGroupMembership: s } = (0, P.A)({ useCachedData: e, fetch: t }),
                { premiumGroupMembers: i } = (0, v.A)(s?.subscriptionId ?? null, { useCachedData: e, fetch: t });
            return i?.primary != null ? (0, _.$3)(i?.primary) : null;
        })({ useCachedData: !0, fetch: e === R.qT.MEMBER }),
        n = (0, r.bG)([h.A], () => h.A.getPremiumGroupSubscription());
    return e === R.qT.UNSPECIFIED
        ? null
        : {
              subheaderString:
                  null ==
                  (s =
                      e === R.qT.PRIMARY
                          ? (0, I.bV)(n, { withIntervals: !0 })
                          : null == i
                            ? null
                            : D.intl.format(S.default.Nu9LNm, { primaryName: i, premiumGroupProductName: (0, y.DP)() }))
                      ? "..."
                      : s,
              bodyString:
                  e === R.qT.PRIMARY
                      ? D.intl.format(S.default["+R/K74"], {
                            helpCenterLink: y.TE,
                            premiumGroupProductName: (0, y.DP)(),
                        })
                      : D.intl.format(t ? S.default["xF+upx"] : S.default.qqfnOm, { helpCenterLink: y.TE }),
          };
};
var O = s(139996);
function U(e) {
    let { className: t, premiumGroupRole: s } = e,
        n = M(s, !0);
    if (null == n) return null;
    let { subheaderString: a, bodyString: r } = n;
    return (0, i.jsxs)("div", {
        className: l()(O.kL, t),
        children: [
            (0, i.jsxs)(T.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                className: O.wx,
                children: [
                    (0, i.jsx)(d.D, { variant: "nitro-sm", className: O.Ss, children: (0, y.DP)() }),
                    (0, i.jsx)(b.E, { type: "beta", variant: "expressive" }),
                ],
            }),
            (0, i.jsx)(C.E, { variant: "text-md/medium", className: O.m_, color: "text-default", children: a }),
            (0, i.jsx)(C.E, { variant: "text-md/medium", color: "text-default", children: r }),
        ],
    });
}
var L = s(194509),
    k = s(396375),
    G = s(511484),
    w = s(774774),
    B = s(933832),
    H = s(140735),
    F = s(789645),
    V = s(773669),
    W = s(580630),
    z = s(202541),
    Y = s(652215),
    X = s(763052),
    K = s(45526);
function Z(e) {
    let { text: t, badge: s, variant: n } = e;
    return (0, i.jsxs)(C.E, {
        color: "text-default",
        variant: null != n ? n : "text-sm/normal",
        children: [t, " ", s],
    });
}
function J(e) {
    let { text: t, variant: s } = e;
    return (0, i.jsx)(C.E, { color: "text-strong", variant: null != s ? s : "text-md/semibold", children: t });
}
function q(e) {
    let { includes: t } = e;
    return t
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(B.CheckmarkLargeIcon, {
                      size: "md",
                      color: "currentColor",
                      className: K.$8,
                      "aria-hidden": !0,
                  }),
                  (0, i.jsx)(H.A, { children: D.intl.string(D.t["tq+6t/"]) }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(F.P, { size: "md", color: "currentColor", className: K.ut, "aria-hidden": !0 }),
                  (0, i.jsx)(H.A, { children: D.intl.string(D.t.l4qZrp) }),
              ],
          });
}
function Q() {
    return (0, i.jsx)("div", {
        className: K.Wm,
        children: (0, i.jsx)(d.D, {
            className: K.uC,
            variant: "heading-deprecated-12/extrabold",
            children: D.intl.string(D.t["o/oRJB"]),
        }),
    });
}
function $(e) {
    let t,
        { premiumType: s, isPremiumGroup: n } = e,
        a = (0, u.Ay)();
    if (n)
        if (s === z.PremiumTypes.TIER_0)
            return (0, i.jsx)(d.D, { variant: "nitro-md", className: K.dW, children: D.intl.string(D.t.tUbSDK) });
        else return (0, i.jsx)(d.D, { variant: "nitro-md", className: K.dW, children: D.intl.string(D.t.Ipxkog) });
    t =
        s === z.PremiumTypes.TIER_0
            ? (0, c.M)(a)
                ? "/assets/8b472f9ec50bc47c.png"
                : "/assets/24c4ba2719f9bbc8.png"
            : (0, c.M)(a)
              ? "/assets/3638711ae67443ff.png"
              : "/assets/a6bb84f7256073af.png";
    let l = (0, N.Dd)(s);
    return (0, i.jsx)("img", { src: t, className: K.wm, alt: l });
}
function ee(e) {
    let { label: t, column1: s, column2: n } = e;
    return (0, i.jsxs)("tr", {
        className: l()(K.U1, K.YI, K.Y9),
        children: [
            (0, i.jsx)("th", { scope: "col", className: K.Cr, children: t }),
            (0, i.jsx)("th", { scope: "col", className: K.e4, children: s }),
            (0, i.jsx)("th", { scope: "col", className: l()(K.e4, K.Y9), children: n }),
        ],
    });
}
function et(e) {
    let {
        label: t,
        column1: s,
        column2: n,
        withBottomBorder: a = !0,
        withTopBorderRadius: r = !1,
        withBottomBorderRadius: c = !1,
        buttonsRow: o = !1,
        shortRow: d = !1,
    } = e;
    return (0, i.jsxs)("tr", {
        className: l()(K.nM, { [K.EE]: o, [K.Y9]: r, [K.kS]: c, [K.YI]: a, [K.vs]: d }),
        children: [
            (0, i.jsx)("th", { scope: "row", className: K.nx, children: t }),
            (0, i.jsx)("td", { className: l()(K.Hn, { [K.SD]: o }), children: s }),
            (0, i.jsx)("td", { className: l()(K.Hn, { [K.Y9]: r, [K.kS]: c, [K.SD]: o }), children: n }),
        ],
    });
}
let es = function (e) {
    var t;
    let s,
        a,
        T,
        {
            className: b,
            hideCTAs: C = !1,
            headingOverride: R,
            hidePill: I = !1,
            selectedPlanColumnClassName: _,
            selectedPlanTier: v = z.PremiumTypes.TIER_2,
        } = e,
        { analyticsLocations: P } = (0, x.Ay)(m.A.PREMIUM_MARKETING_PLAN_COMPARISON),
        y = (0, r.bG)([h.A], () => h.A.hasFetchedSubscriptions()),
        S = (0, p.Y)(z.T7),
        M = (0, u.Ay)(),
        O = (0, c.q)(M),
        B = (0, r.bG)([f.default], () => f.default.getCurrentUser()),
        H = null != B && B.isPremiumWithPremiumGroup(),
        F = (0, N.YE)(B, z.PremiumTypes.TIER_2),
        es = (0, E.V)(),
        ei = es?.subscriptionTrial?.skuId,
        en = (0, A.Us)(),
        ea = (0, j.O)(),
        el = (0, G.YJ)(ea),
        er = null != ea && (0, G.U9)(ea, z.pe.TIER_2) && el === z.gD.PREMIUM_MONTH_TIER_2,
        ec = (0, G.N1)(el),
        eo = null != ec ? `${ec}/${(0, N.FJ)(z.WT.MONTH)}` : "",
        ed = (0, N.JM)(z.gD.PREMIUM_MONTH_TIER_0),
        eu = (0, N.JM)(z.gD.PREMIUM_MONTH_TIER_2),
        em =
            ((t = (0, g.A)().fractionalState),
            (s = {
                0: {
                    label: (0, i.jsx)(Z, { text: D.intl.string(D.t["09yRK3"]) }),
                    column1: (0, i.jsx)(J, { text: N.Ay.formatPriceString(ed, z.WT.MONTH) }),
                    column2: (0, i.jsx)(J, { text: er ? eo : N.Ay.formatPriceString(eu, z.WT.MONTH) }),
                    withBottomBorder: !0,
                },
                1: {
                    label: (0, i.jsx)(Z, { text: D.intl.string(D.t.vaDeDV) }),
                    column1: (0, i.jsx)(q, { includes: !0 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                2: {
                    label: (0, i.jsx)(Z, { text: D.intl.string(D.t.DmfiwT) }),
                    column1: (0, i.jsx)(q, { includes: !0 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                3: {
                    label: (0, i.jsx)(Z, { text: D.intl.string(D.t.OuItFi) }),
                    column1: (0, i.jsx)(q, { includes: !0 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                4: {
                    label: (0, i.jsx)(Z, { text: D.intl.string(D.t["9kRJS8"]) }),
                    column1: (0, i.jsx)(q, { includes: !0 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                5: {
                    label: (0, i.jsx)(Z, { text: D.intl.string(D.t["ufhQC+"]) }),
                    column1: (0, i.jsx)(J, { text: (0, N.EJ)(z.PremiumTypes.TIER_0) }),
                    column2: (0, i.jsx)(J, { text: (0, N.EJ)(z.PremiumTypes.TIER_2) }),
                },
                6: {
                    label: (0, i.jsx)(Z, { text: D.intl.string(D.t.VwxlMw) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(J, { text: D.intl.string(D.t.XdN6KU) }),
                },
                7: {
                    label: (0, i.jsx)(Z, {
                        text: D.intl.formatToPlainString(D.t.nyhDpw, {
                            numBoosts: z.M4,
                            percentageOff: (0, W.l9)(V.default.locale, z.oX / 100),
                        }),
                    }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                8: {
                    label: (0, i.jsx)(Z, { text: D.intl.string(D.t.tFbcuM) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                9: {
                    label: (0, i.jsx)(Z, { text: D.intl.string(X.default["86GtGH"]) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                10: {
                    label: (0, i.jsx)(Z, { text: D.intl.string(D.t["aR/zTk"]) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                11: {
                    label: (0, i.jsx)(Z, { text: D.intl.string(D.t.IzrZHz) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                12: {
                    label: (0, i.jsx)(Z, { text: D.intl.string(D.t["HwNg/Z"]) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                13: {
                    label: (0, i.jsx)(Z, { text: D.intl.string(D.t["y+HHL9"]) }),
                    column1: (0, i.jsx)(q, { includes: !0 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                14: {
                    label: (0, i.jsx)(Z, { text: D.intl.string(D.t.qQxxVc) }),
                    column1: (0, i.jsx)(q, { includes: !0 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                15: {
                    label: (0, i.jsx)(Z, { text: D.intl.string(D.t.xi0NBE) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                    withBottomBorder: !0,
                },
                16: {
                    label: (0, i.jsx)(Z, { text: D.intl.string(D.t.MfsUHm) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                22: {
                    label: (0, i.jsx)(Z, { text: D.intl.string(D.t["A+0H1f"]) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                17: {
                    label: (0, i.jsx)(Z, { text: D.intl.string(D.t["il8+nC"]) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                18: {
                    label: (0, i.jsx)(Z, { text: D.intl.formatToPlainString(D.t["8crdzJ"], { maxChars: Y.CS1 }) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                    withBottomBorder: !0,
                },
                19: {
                    label: (0, i.jsx)(d.D, {
                        className: K.__invalid_textColor,
                        variant: "display-sm",
                        children: "Make Discord Yours",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                20: {
                    label: (0, i.jsx)(d.D, {
                        className: K.__invalid_textColor,
                        variant: "display-sm",
                        children: "Enjoy an Upgraded Discord",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                21: {
                    label: (0, i.jsx)(d.D, {
                        className: K.__invalid_textColor,
                        variant: "display-sm",
                        children: "Show Up the Way You Want",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                23: {
                    label: (0, i.jsx)(Z, { text: D.intl.string(D.t["93xPy3"]) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                    withBottomBorder: !0,
                },
                24: {
                    label: (0, i.jsx)(Z, { text: D.intl.string(D.t["5BJqNF"]) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                    withBottomBorder: !1,
                },
            }),
            (a = t === z.xc.FP_ONLY),
            [
                s[0],
                s[1],
                s[2],
                s[3],
                s[4],
                s[5],
                s[6],
                ...(a ? [] : [s[7]]),
                s[8],
                s[9],
                s[10],
                s[11],
                s[12],
                ...(a ? [] : [s[13]]),
                s[14],
                s[15],
                s[16],
                s[17],
                s[18],
                s[23],
                s[24],
            ]);
    if (!y || !S) return null;
    let ex = {
        label: (0, i.jsx)(d.D, {
            className: K.__invalid_textColor,
            variant: "heading-lg/extrabold",
            children: D.intl.string(D.t.ED4UVD),
        }),
        column1: (0, i.jsx)($, { premiumType: z.PremiumTypes.TIER_0, isPremiumGroup: H }),
        column2: (0, i.jsx)($, { premiumType: z.PremiumTypes.TIER_2, isPremiumGroup: H }),
    };
    (C
        ? em.push({
              label: null,
              column1: null,
              column2: null,
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: !1,
              shortRow: !0,
          })
        : em.push({
              label: null,
              column1: (0, i.jsxs)(i.Fragment, {
                  children: [
                      ei === z.pe.TIER_2
                          ? (0, i.jsx)(k.A, {
                                className: K.x6,
                                subscriptionTier: z.pe.TIER_0,
                                showIcon: !1,
                                look: o.pR.OUTLINED,
                                color: O ? o.XD.BRAND : o.XD.WHITE,
                            })
                          : (0, i.jsx)(k.A, { className: K.x6, subscriptionTier: z.pe.TIER_0, showIcon: !1 }),
                      en === z.PremiumTypes.TIER_2 || null != ei
                          ? null
                          : (0, i.jsx)(L.A, { className: K.x6, subscriptionTier: z.pe.TIER_0 }),
                  ],
              }),
              column2: (0, i.jsxs)(i.Fragment, {
                  children: [
                      ei === z.pe.TIER_0
                          ? (0, i.jsx)(k.A, {
                                className: K.x6,
                                subscriptionTier: z.pe.TIER_2,
                                showIcon: !1,
                                look: o.pR.OUTLINED,
                                color: O ? o.XD.BRAND : o.XD.WHITE,
                            })
                          : (0, i.jsx)(k.A, { className: K.x6, subscriptionTier: z.pe.TIER_2, showIcon: !1 }),
                      en === z.PremiumTypes.TIER_0 || null != ei
                          ? null
                          : (0, i.jsx)(L.A, { className: K.x6, subscriptionTier: z.pe.TIER_2 }),
                  ],
              }),
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: null == ei,
          }),
        (T = I
            ? null
            : null != ei || null != en
              ? (0, i.jsx)(w.HU, {
                    text: null != ei ? D.intl.string(D.t.IBYG5U) : D.intl.string(D.t.ce1v3V),
                    className: K.ls,
                    colorOptions:
                        ei === z.pe.TIER_0
                            ? O
                                ? w.at.PREMIUM_TIER_0_GRADIENT_FILL
                                : w.at.PREMIUM_TIER_0_WHITE_FILL
                            : O
                              ? F
                                  ? w.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  : w.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                              : w.at.PREMIUM_TIER_2_WHITE_FILL,
                })
              : (0, i.jsx)(Q, {})));
    let eg = ei === z.pe.TIER_0 || en === z.PremiumTypes.TIER_0 || v === z.PremiumTypes.TIER_0;
    return (0, i.jsx)(x.f5, {
        value: P,
        children: (0, i.jsxs)("div", {
            className: l()(K.zr, b),
            "data-testid": "v2-marketing-page-comparison-table",
            children: [
                (0, i.jsx)(d.D, {
                    className: l()(K.Qw, K.__invalid_textColor),
                    variant: "heading-xxl/extrabold",
                    children: R ?? D.intl.string(D.t.FIbMh9),
                }),
                H && (0, i.jsx)(U, { premiumGroupRole: B.premiumGroupRole, className: K.vg }),
                (0, i.jsxs)("div", {
                    className: K.wY,
                    children: [
                        (0, i.jsx)("div", { className: l()(_, { [K.A9]: eg, [K.ce]: !eg && !H }), children: !eg && T }),
                        (0, i.jsxs)("table", {
                            className: K.tp,
                            children: [
                                (0, i.jsx)("thead", { children: (0, i.jsx)(ee, { ...ex }) }),
                                (0, i.jsx)("tbody", {
                                    children: em.map((e, t) => (0, n.createElement)(et, { ...e, key: t })),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
};
