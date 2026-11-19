(i.d(t, { A: () => et }), i(321073));
var s = i(477900),
    n = i(582128),
    a = i(503698),
    l = i.n(a),
    r = i(855986),
    c = i(462887),
    o = i(862482),
    d = i(534514),
    u = i(736653),
    m = i(793574),
    x = i(688810),
    g = i(531260),
    p = i(160946),
    h = i(287809),
    f = i(166403),
    N = i(448645),
    A = i(89366),
    j = i(423814),
    b = i(77528),
    E = i(331322),
    T = i(805251),
    C = i(834730),
    I = i(76573),
    R = i(728666),
    v = i(427262),
    _ = i(622017),
    y = i(113090),
    P = i(88001),
    S = i(107198),
    D = i(792996);
let M = function (e, t) {
    let i,
        s = (function () {
            let { useCachedData: e = !0, fetch: t = !0 } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { premiumGroupMembership: i } = (0, y.A)({ useCachedData: e, fetch: t }),
                { premiumGroupMembers: s } = (0, _.A)(i?.subscriptionId ?? null, { useCachedData: e, fetch: t });
            return s?.primary != null ? (0, v.$3)(s?.primary) : null;
        })({ useCachedData: !0, fetch: e === I.qT.MEMBER }),
        n = (0, r.bG)([f.A], () => f.A.getPremiumGroupSubscription());
    return e === I.qT.UNSPECIFIED
        ? null
        : {
              subheaderString:
                  null ==
                  (i =
                      e === I.qT.PRIMARY
                          ? (0, R.bV)(n, { withIntervals: !0 })
                          : null == s
                            ? null
                            : D.intl.format(S.default.Nu9LNm, { primaryName: s, premiumGroupProductName: (0, P.DP)() }))
                      ? "..."
                      : i,
              bodyString:
                  e === I.qT.PRIMARY
                      ? D.intl.format(S.default["+R/K74"], {
                            helpCenterLink: P.TE,
                            premiumGroupProductName: (0, P.DP)(),
                        })
                      : D.intl.format(t ? S.default["xF+upx"] : S.default.qqfnOm, { helpCenterLink: P.TE }),
          };
};
var O = i(139996);
function k(e) {
    let { className: t, premiumGroupRole: i } = e,
        n = M(i, !0);
    if (null == n) return null;
    let { subheaderString: a, bodyString: r } = n;
    return (0, s.jsxs)("div", {
        className: l()(O.kL, t),
        children: [
            (0, s.jsxs)(E.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                className: O.wx,
                children: [
                    (0, s.jsx)(d.D, { variant: "nitro-sm", children: (0, P.DP)() }),
                    (0, s.jsx)(T.E, { type: "beta", variant: "expressive" }),
                ],
            }),
            (0, s.jsx)(C.E, { variant: "body-md/medium", className: O.m_, color: "text-default", children: a }),
            (0, s.jsx)(C.E, { variant: "body-md/medium", color: "text-default", children: r }),
        ],
    });
}
var U = i(194509),
    L = i(396375),
    G = i(511484),
    w = i(774774),
    B = i(933832),
    H = i(140735),
    F = i(789645),
    V = i(773669),
    W = i(580630),
    z = i(682901);
i(652215);
var X = i(842671),
    Y = i(45526);
function K(e) {
    let { text: t, badge: i, variant: n } = e;
    return (0, s.jsxs)(C.E, {
        color: "text-default",
        variant: null != n ? n : "body-sm/normal",
        children: [t, " ", i],
    });
}
function q(e) {
    let { text: t, variant: i } = e;
    return (0, s.jsx)(C.E, { color: "text-strong", variant: null != i ? i : "body-md/semibold", children: t });
}
function Z(e) {
    let { includes: t } = e;
    return t
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(B.CheckmarkLargeIcon, {
                      size: "md",
                      color: "currentColor",
                      className: Y.$8,
                      "aria-hidden": !0,
                  }),
                  (0, s.jsx)(H.A, { children: D.intl.string(D.t["tq+6t/"]) }),
              ],
          })
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(F.XSmallIcon, { size: "md", color: "currentColor", className: Y.ut, "aria-hidden": !0 }),
                  (0, s.jsx)(H.A, { children: D.intl.string(D.t.l4qZrp) }),
              ],
          });
}
function J() {
    return (0, s.jsx)("div", {
        className: Y.Wm,
        children: (0, s.jsx)(d.D, {
            className: Y.uC,
            variant: "body-xs/semibold",
            children: D.intl.string(D.t["o/oRJB"]),
        }),
    });
}
function Q(e) {
    let t,
        { premiumType: i, isPremiumGroup: n } = e,
        a = (0, u.Ay)();
    if (n)
        if (i === z.PremiumTypes.TIER_0)
            return (0, s.jsx)(d.D, { variant: "nitro-md", className: Y.dW, children: D.intl.string(D.t.tUbSDK) });
        else return (0, s.jsx)(d.D, { variant: "nitro-md", className: Y.dW, children: D.intl.string(D.t.Ipxkog) });
    t =
        i === z.PremiumTypes.TIER_0
            ? (0, c.M)(a)
                ? "/assets/8b472f9ec50bc47c.png"
                : "/assets/24c4ba2719f9bbc8.png"
            : (0, c.M)(a)
              ? "/assets/3638711ae67443ff.png"
              : "/assets/a6bb84f7256073af.png";
    let l = (0, N.Dd)(i);
    return (0, s.jsx)("img", { src: t, className: Y.wm, alt: l });
}
function $(e) {
    let { label: t, column1: i, column2: n } = e;
    return (0, s.jsxs)("tr", {
        className: l()(Y.U1, Y.YI, Y.Y9),
        children: [
            (0, s.jsx)("th", { scope: "col", className: Y.Cr, children: t }),
            (0, s.jsx)("th", { scope: "col", className: Y.e4, children: i }),
            (0, s.jsx)("th", { scope: "col", className: l()(Y.e4, Y.Y9), children: n }),
        ],
    });
}
function ee(e) {
    let {
        label: t,
        column1: i,
        column2: n,
        withBottomBorder: a = !0,
        withTopBorderRadius: r = !1,
        withBottomBorderRadius: c = !1,
        buttonsRow: o = !1,
        shortRow: d = !1,
    } = e;
    return (0, s.jsxs)("tr", {
        className: l()(Y.nM, { [Y.EE]: o, [Y.Y9]: r, [Y.kS]: c, [Y.YI]: a, [Y.vs]: d }),
        children: [
            (0, s.jsx)("th", { scope: "row", className: Y.nx, children: t }),
            (0, s.jsx)("td", { className: l()(Y.Hn, { [Y.SD]: o }), children: i }),
            (0, s.jsx)("td", { className: l()(Y.Hn, { [Y.Y9]: r, [Y.kS]: c, [Y.SD]: o }), children: n }),
        ],
    });
}
let et = function (e) {
    var t;
    let i,
        a,
        E,
        {
            className: T,
            hideCTAs: C = !1,
            headingOverride: I,
            hidePill: R = !1,
            selectedPlanColumnClassName: v,
            selectedPlanTier: _ = z.PremiumTypes.TIER_2,
        } = e,
        { analyticsLocations: y } = (0, x.Ay)(m.A.PREMIUM_MARKETING_PLAN_COMPARISON),
        P = (0, r.bG)([f.A], () => f.A.hasFetchedSubscriptions()),
        S = (0, p.Y)(z.T7),
        M = (0, u.Ay)(),
        O = (0, c.q)(M),
        B = (0, r.bG)([h.default], () => h.default.getCurrentUser()),
        H = null != B && B.isPremiumWithPremiumGroup(),
        F = (0, N.YE)(B, z.PremiumTypes.TIER_2),
        et = (0, b.V)(),
        ei = et?.subscriptionTrial?.skuId,
        es = (0, A.Us)(),
        en = (0, j.O)(),
        ea = (0, G.YJ)(en),
        el = null != en && (0, G.U9)(en, z.pe.TIER_2) && ea === z.gD.PREMIUM_MONTH_TIER_2,
        er = (0, G.N1)(ea),
        ec = null != er ? `${er}/${(0, N.FJ)(z.WT.MONTH)}` : "",
        eo = (0, N.JM)(z.gD.PREMIUM_MONTH_TIER_0),
        ed = (0, N.JM)(z.gD.PREMIUM_MONTH_TIER_2),
        eu =
            ((t = (0, g.A)().fractionalState),
            (i = {
                0: {
                    label: (0, s.jsx)(K, { text: D.intl.string(D.t["09yRK3"]) }),
                    column1: (0, s.jsx)(q, { text: N.Ay.formatPriceString(eo, z.WT.MONTH) }),
                    column2: (0, s.jsx)(q, { text: el ? ec : N.Ay.formatPriceString(ed, z.WT.MONTH) }),
                    withBottomBorder: !0,
                },
                1: {
                    label: (0, s.jsx)(K, { text: D.intl.string(D.t.vaDeDV) }),
                    column1: (0, s.jsx)(Z, { includes: !0 }),
                    column2: (0, s.jsx)(Z, { includes: !0 }),
                },
                2: {
                    label: (0, s.jsx)(K, { text: D.intl.string(D.t.DmfiwT) }),
                    column1: (0, s.jsx)(Z, { includes: !0 }),
                    column2: (0, s.jsx)(Z, { includes: !0 }),
                },
                3: {
                    label: (0, s.jsx)(K, { text: D.intl.string(D.t.OuItFi) }),
                    column1: (0, s.jsx)(Z, { includes: !0 }),
                    column2: (0, s.jsx)(Z, { includes: !0 }),
                },
                4: {
                    label: (0, s.jsx)(K, { text: D.intl.string(D.t["9kRJS8"]) }),
                    column1: (0, s.jsx)(Z, { includes: !0 }),
                    column2: (0, s.jsx)(Z, { includes: !0 }),
                },
                5: {
                    label: (0, s.jsx)(K, { text: D.intl.string(D.t["ufhQC+"]) }),
                    column1: (0, s.jsx)(q, { text: (0, N.EJ)(z.PremiumTypes.TIER_0) }),
                    column2: (0, s.jsx)(q, { text: (0, N.EJ)(z.PremiumTypes.TIER_2) }),
                },
                6: {
                    label: (0, s.jsx)(K, { text: D.intl.string(D.t.VwxlMw) }),
                    column1: (0, s.jsx)(Z, { includes: !1 }),
                    column2: (0, s.jsx)(q, { text: D.intl.string(D.t.XdN6KU) }),
                },
                7: {
                    label: (0, s.jsx)(K, {
                        text: D.intl.formatToPlainString(D.t.nyhDpw, {
                            numBoosts: 2,
                            percentageOff: (0, W.l9)(V.default.locale, 0.3),
                        }),
                    }),
                    column1: (0, s.jsx)(Z, { includes: !1 }),
                    column2: (0, s.jsx)(Z, { includes: !0 }),
                },
                8: {
                    label: (0, s.jsx)(K, { text: D.intl.string(D.t.tFbcuM) }),
                    column1: (0, s.jsx)(Z, { includes: !1 }),
                    column2: (0, s.jsx)(Z, { includes: !0 }),
                },
                9: {
                    label: (0, s.jsx)(K, { text: D.intl.string(X.default["86GtGH"]) }),
                    column1: (0, s.jsx)(Z, { includes: !1 }),
                    column2: (0, s.jsx)(Z, { includes: !0 }),
                },
                10: {
                    label: (0, s.jsx)(K, { text: D.intl.string(D.t["aR/zTk"]) }),
                    column1: (0, s.jsx)(Z, { includes: !1 }),
                    column2: (0, s.jsx)(Z, { includes: !0 }),
                },
                11: {
                    label: (0, s.jsx)(K, { text: D.intl.string(D.t.IzrZHz) }),
                    column1: (0, s.jsx)(Z, { includes: !1 }),
                    column2: (0, s.jsx)(Z, { includes: !0 }),
                },
                12: {
                    label: (0, s.jsx)(K, { text: D.intl.string(D.t["HwNg/Z"]) }),
                    column1: (0, s.jsx)(Z, { includes: !1 }),
                    column2: (0, s.jsx)(Z, { includes: !0 }),
                },
                13: {
                    label: (0, s.jsx)(K, { text: D.intl.string(D.t["y+HHL9"]) }),
                    column1: (0, s.jsx)(Z, { includes: !0 }),
                    column2: (0, s.jsx)(Z, { includes: !0 }),
                },
                14: {
                    label: (0, s.jsx)(K, { text: D.intl.string(D.t.qQxxVc) }),
                    column1: (0, s.jsx)(Z, { includes: !0 }),
                    column2: (0, s.jsx)(Z, { includes: !0 }),
                },
                15: {
                    label: (0, s.jsx)(K, { text: D.intl.string(D.t.xi0NBE) }),
                    column1: (0, s.jsx)(Z, { includes: !1 }),
                    column2: (0, s.jsx)(Z, { includes: !0 }),
                    withBottomBorder: !0,
                },
                16: {
                    label: (0, s.jsx)(K, { text: D.intl.string(D.t.MfsUHm) }),
                    column1: (0, s.jsx)(Z, { includes: !1 }),
                    column2: (0, s.jsx)(Z, { includes: !0 }),
                },
                22: {
                    label: (0, s.jsx)(K, { text: D.intl.string(D.t["A+0H1f"]) }),
                    column1: (0, s.jsx)(Z, { includes: !1 }),
                    column2: (0, s.jsx)(Z, { includes: !0 }),
                },
                17: {
                    label: (0, s.jsx)(K, { text: D.intl.string(D.t["il8+nC"]) }),
                    column1: (0, s.jsx)(Z, { includes: !1 }),
                    column2: (0, s.jsx)(Z, { includes: !0 }),
                },
                18: {
                    label: (0, s.jsx)(K, { text: D.intl.formatToPlainString(D.t["8crdzJ"], { maxChars: 4e3 }) }),
                    column1: (0, s.jsx)(Z, { includes: !1 }),
                    column2: (0, s.jsx)(Z, { includes: !0 }),
                    withBottomBorder: !0,
                },
                19: {
                    label: (0, s.jsx)(d.D, {
                        className: Y.__invalid_textColor,
                        variant: "display-sm",
                        children: "Make Discord Yours",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                20: {
                    label: (0, s.jsx)(d.D, {
                        className: Y.__invalid_textColor,
                        variant: "display-sm",
                        children: "Enjoy an Upgraded Discord",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                21: {
                    label: (0, s.jsx)(d.D, {
                        className: Y.__invalid_textColor,
                        variant: "display-sm",
                        children: "Show Up the Way You Want",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                23: {
                    label: (0, s.jsx)(K, { text: D.intl.string(D.t["93xPy3"]) }),
                    column1: (0, s.jsx)(Z, { includes: !1 }),
                    column2: (0, s.jsx)(Z, { includes: !0 }),
                    withBottomBorder: !0,
                },
                24: {
                    label: (0, s.jsx)(K, { text: D.intl.string(D.t["5BJqNF"]) }),
                    column1: (0, s.jsx)(Z, { includes: !1 }),
                    column2: (0, s.jsx)(Z, { includes: !0 }),
                    withBottomBorder: !1,
                },
            }),
            (a = t === z.xc.FP_ONLY),
            [
                i[0],
                i[1],
                i[2],
                i[3],
                i[4],
                i[5],
                i[6],
                ...(a ? [] : [i[7]]),
                i[8],
                i[9],
                i[10],
                i[11],
                i[12],
                ...(a ? [] : [i[13]]),
                i[14],
                i[15],
                i[16],
                i[17],
                i[18],
                i[23],
                i[24],
            ]);
    if (!P || !S) return null;
    let em = {
        label: (0, s.jsx)(d.D, {
            className: Y.__invalid_textColor,
            variant: "heading-lg/semibold",
            children: D.intl.string(D.t.ED4UVD),
        }),
        column1: (0, s.jsx)(Q, { premiumType: z.PremiumTypes.TIER_0, isPremiumGroup: H }),
        column2: (0, s.jsx)(Q, { premiumType: z.PremiumTypes.TIER_2, isPremiumGroup: H }),
    };
    (C
        ? eu.push({
              label: null,
              column1: null,
              column2: null,
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: !1,
              shortRow: !0,
          })
        : eu.push({
              label: null,
              column1: (0, s.jsxs)(s.Fragment, {
                  children: [
                      ei === z.pe.TIER_2
                          ? (0, s.jsx)(L.A, {
                                className: Y.x6,
                                subscriptionTier: z.pe.TIER_0,
                                showIcon: !1,
                                look: o.pR.OUTLINED,
                                color: O ? o.XD.BRAND : o.XD.WHITE,
                            })
                          : (0, s.jsx)(L.A, { className: Y.x6, subscriptionTier: z.pe.TIER_0, showIcon: !1 }),
                      es === z.PremiumTypes.TIER_2 || null != ei
                          ? null
                          : (0, s.jsx)(U.A, { className: Y.x6, subscriptionTier: z.pe.TIER_0 }),
                  ],
              }),
              column2: (0, s.jsxs)(s.Fragment, {
                  children: [
                      ei === z.pe.TIER_0
                          ? (0, s.jsx)(L.A, {
                                className: Y.x6,
                                subscriptionTier: z.pe.TIER_2,
                                showIcon: !1,
                                look: o.pR.OUTLINED,
                                color: O ? o.XD.BRAND : o.XD.WHITE,
                            })
                          : (0, s.jsx)(L.A, { className: Y.x6, subscriptionTier: z.pe.TIER_2, showIcon: !1 }),
                      es === z.PremiumTypes.TIER_0 || null != ei
                          ? null
                          : (0, s.jsx)(U.A, { className: Y.x6, subscriptionTier: z.pe.TIER_2 }),
                  ],
              }),
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: null == ei,
          }),
        (E = R
            ? null
            : null != ei || null != es
              ? (0, s.jsx)(w.HU, {
                    text: null != ei ? D.intl.string(D.t.IBYG5U) : D.intl.string(D.t.ce1v3V),
                    className: Y.ls,
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
              : (0, s.jsx)(J, {})));
    let ex = ei === z.pe.TIER_0 || es === z.PremiumTypes.TIER_0 || _ === z.PremiumTypes.TIER_0;
    return (0, s.jsx)(x.f5, {
        value: y,
        children: (0, s.jsxs)("div", {
            className: l()(Y.zr, T),
            "data-testid": "v2-marketing-page-comparison-table",
            children: [
                (0, s.jsx)(d.D, {
                    className: l()(Y.Qw, Y.__invalid_textColor),
                    variant: "heading-xxl/semibold",
                    children: I ?? D.intl.string(D.t.FIbMh9),
                }),
                H && (0, s.jsx)(k, { premiumGroupRole: B.premiumGroupRole, className: Y.vg }),
                (0, s.jsxs)("div", {
                    className: Y.wY,
                    children: [
                        (0, s.jsx)("div", { className: l()(v, { [Y.A9]: ex, [Y.ce]: !ex && !H }), children: !ex && E }),
                        (0, s.jsxs)("table", {
                            className: Y.tp,
                            children: [
                                (0, s.jsx)("thead", { children: (0, s.jsx)($, { ...em }) }),
                                (0, s.jsx)("tbody", {
                                    children: eu.map((e, t) => (0, n.createElement)(ee, { ...e, key: t })),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
};
