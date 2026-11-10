(s.d(t, { A: () => et }), s(321073));
var i = s(477900),
    n = s(582128),
    a = s(503698),
    l = s.n(a),
    r = s(855986),
    c = s(462887),
    o = s(862482),
    d = s(534514),
    u = s(736653),
    m = s(793574),
    x = s(688810),
    g = s(531260),
    p = s(160946),
    h = s(287809),
    f = s(166403),
    N = s(448645),
    b = s(89366),
    A = s(423814),
    j = s(77528),
    E = s(331322),
    T = s(805251),
    C = s(834730),
    I = s(76573),
    R = s(728666),
    v = s(427262),
    _ = s(622017),
    y = s(113090),
    P = s(88001),
    S = s(107198),
    D = s(792996);
let M = function (e, t) {
    let s,
        i = (function () {
            let { useCachedData: e = !0, fetch: t = !0 } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { premiumGroupMembership: s } = (0, y.A)({ useCachedData: e, fetch: t }),
                { premiumGroupMembers: i } = (0, _.A)(s?.subscriptionId ?? null, { useCachedData: e, fetch: t });
            return i?.primary != null ? (0, v.$3)(i?.primary) : null;
        })({ useCachedData: !0, fetch: e === I.qT.MEMBER }),
        n = (0, r.bG)([f.A], () => f.A.getPremiumGroupSubscription());
    return e === I.qT.UNSPECIFIED
        ? null
        : {
              subheaderString:
                  null ==
                  (s =
                      e === I.qT.PRIMARY
                          ? (0, R.bV)(n, { withIntervals: !0 })
                          : null == i
                            ? null
                            : D.intl.format(S.default.Nu9LNm, { primaryName: i, premiumGroupProductName: (0, P.DP)() }))
                      ? "..."
                      : s,
              bodyString:
                  e === I.qT.PRIMARY
                      ? D.intl.format(S.default["+R/K74"], {
                            helpCenterLink: P.TE,
                            premiumGroupProductName: (0, P.DP)(),
                        })
                      : D.intl.format(t ? S.default["xF+upx"] : S.default.qqfnOm, { helpCenterLink: P.TE }),
          };
};
var O = s(139996);
function k(e) {
    let { className: t, premiumGroupRole: s } = e,
        n = M(s, !0);
    if (null == n) return null;
    let { subheaderString: a, bodyString: r } = n;
    return (0, i.jsxs)("div", {
        className: l()(O.kL, t),
        children: [
            (0, i.jsxs)(E.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                className: O.wx,
                children: [
                    (0, i.jsx)(d.D, { variant: "nitro-sm", children: (0, P.DP)() }),
                    (0, i.jsx)(T.E, { type: "beta", variant: "expressive" }),
                ],
            }),
            (0, i.jsx)(C.E, { variant: "body-md/medium", className: O.m_, color: "text-default", children: a }),
            (0, i.jsx)(C.E, { variant: "body-md/medium", color: "text-default", children: r }),
        ],
    });
}
var L = s(194509),
    U = s(396375),
    G = s(511484),
    w = s(774774),
    B = s(933832),
    H = s(140735),
    F = s(789645),
    V = s(773669),
    W = s(580630),
    z = s(682901);
s(652215);
var Y = s(842671),
    X = s(45526);
function K(e) {
    let { text: t, badge: s, variant: n } = e;
    return (0, i.jsxs)(C.E, {
        color: "text-default",
        variant: null != n ? n : "body-sm/normal",
        children: [t, " ", s],
    });
}
function Z(e) {
    let { text: t, variant: s } = e;
    return (0, i.jsx)(C.E, { color: "text-strong", variant: null != s ? s : "body-md/semibold", children: t });
}
function q(e) {
    let { includes: t } = e;
    return t
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(B.CheckmarkLargeIcon, {
                      size: "md",
                      color: "currentColor",
                      className: X.$8,
                      "aria-hidden": !0,
                  }),
                  (0, i.jsx)(H.A, { children: D.intl.string(D.t["tq+6t/"]) }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(F.XSmallIcon, { size: "md", color: "currentColor", className: X.ut, "aria-hidden": !0 }),
                  (0, i.jsx)(H.A, { children: D.intl.string(D.t.l4qZrp) }),
              ],
          });
}
function J() {
    return (0, i.jsx)("div", {
        className: X.Wm,
        children: (0, i.jsx)(d.D, {
            className: X.uC,
            variant: "body-xs/semibold",
            children: D.intl.string(D.t["o/oRJB"]),
        }),
    });
}
function Q(e) {
    let t,
        { premiumType: s, isPremiumGroup: n } = e,
        a = (0, u.Ay)();
    if (n)
        if (s === z.PremiumTypes.TIER_0)
            return (0, i.jsx)(d.D, { variant: "nitro-md", className: X.dW, children: D.intl.string(D.t.tUbSDK) });
        else return (0, i.jsx)(d.D, { variant: "nitro-md", className: X.dW, children: D.intl.string(D.t.Ipxkog) });
    t =
        s === z.PremiumTypes.TIER_0
            ? (0, c.M)(a)
                ? "/assets/8b472f9ec50bc47c.png"
                : "/assets/24c4ba2719f9bbc8.png"
            : (0, c.M)(a)
              ? "/assets/3638711ae67443ff.png"
              : "/assets/a6bb84f7256073af.png";
    let l = (0, N.Dd)(s);
    return (0, i.jsx)("img", { src: t, className: X.wm, alt: l });
}
function $(e) {
    let { label: t, column1: s, column2: n } = e;
    return (0, i.jsxs)("tr", {
        className: l()(X.U1, X.YI, X.Y9),
        children: [
            (0, i.jsx)("th", { scope: "col", className: X.Cr, children: t }),
            (0, i.jsx)("th", { scope: "col", className: X.e4, children: s }),
            (0, i.jsx)("th", { scope: "col", className: l()(X.e4, X.Y9), children: n }),
        ],
    });
}
function ee(e) {
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
        className: l()(X.nM, { [X.EE]: o, [X.Y9]: r, [X.kS]: c, [X.YI]: a, [X.vs]: d }),
        children: [
            (0, i.jsx)("th", { scope: "row", className: X.nx, children: t }),
            (0, i.jsx)("td", { className: l()(X.Hn, { [X.SD]: o }), children: s }),
            (0, i.jsx)("td", { className: l()(X.Hn, { [X.Y9]: r, [X.kS]: c, [X.SD]: o }), children: n }),
        ],
    });
}
let et = function (e) {
    var t;
    let s,
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
        et = (0, j.V)(),
        es = et?.subscriptionTrial?.skuId,
        ei = (0, b.Us)(),
        en = (0, A.O)(),
        ea = (0, G.YJ)(en),
        el = null != en && (0, G.U9)(en, z.pe.TIER_2) && ea === z.gD.PREMIUM_MONTH_TIER_2,
        er = (0, G.N1)(ea),
        ec = null != er ? `${er}/${(0, N.FJ)(z.WT.MONTH)}` : "",
        eo = (0, N.JM)(z.gD.PREMIUM_MONTH_TIER_0),
        ed = (0, N.JM)(z.gD.PREMIUM_MONTH_TIER_2),
        eu =
            ((t = (0, g.A)().fractionalState),
            (s = {
                0: {
                    label: (0, i.jsx)(K, { text: D.intl.string(D.t["09yRK3"]) }),
                    column1: (0, i.jsx)(Z, { text: N.Ay.formatPriceString(eo, z.WT.MONTH) }),
                    column2: (0, i.jsx)(Z, { text: el ? ec : N.Ay.formatPriceString(ed, z.WT.MONTH) }),
                    withBottomBorder: !0,
                },
                1: {
                    label: (0, i.jsx)(K, { text: D.intl.string(D.t.vaDeDV) }),
                    column1: (0, i.jsx)(q, { includes: !0 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                2: {
                    label: (0, i.jsx)(K, { text: D.intl.string(D.t.DmfiwT) }),
                    column1: (0, i.jsx)(q, { includes: !0 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                3: {
                    label: (0, i.jsx)(K, { text: D.intl.string(D.t.OuItFi) }),
                    column1: (0, i.jsx)(q, { includes: !0 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                4: {
                    label: (0, i.jsx)(K, { text: D.intl.string(D.t["9kRJS8"]) }),
                    column1: (0, i.jsx)(q, { includes: !0 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                5: {
                    label: (0, i.jsx)(K, { text: D.intl.string(D.t["ufhQC+"]) }),
                    column1: (0, i.jsx)(Z, { text: (0, N.EJ)(z.PremiumTypes.TIER_0) }),
                    column2: (0, i.jsx)(Z, { text: (0, N.EJ)(z.PremiumTypes.TIER_2) }),
                },
                6: {
                    label: (0, i.jsx)(K, { text: D.intl.string(D.t.VwxlMw) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(Z, { text: D.intl.string(D.t.XdN6KU) }),
                },
                7: {
                    label: (0, i.jsx)(K, {
                        text: D.intl.formatToPlainString(D.t.nyhDpw, {
                            numBoosts: 2,
                            percentageOff: (0, W.l9)(V.default.locale, 0.3),
                        }),
                    }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                8: {
                    label: (0, i.jsx)(K, { text: D.intl.string(D.t.tFbcuM) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                9: {
                    label: (0, i.jsx)(K, { text: D.intl.string(Y.default["86GtGH"]) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                10: {
                    label: (0, i.jsx)(K, { text: D.intl.string(D.t["aR/zTk"]) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                11: {
                    label: (0, i.jsx)(K, { text: D.intl.string(D.t.IzrZHz) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                12: {
                    label: (0, i.jsx)(K, { text: D.intl.string(D.t["HwNg/Z"]) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                13: {
                    label: (0, i.jsx)(K, { text: D.intl.string(D.t["y+HHL9"]) }),
                    column1: (0, i.jsx)(q, { includes: !0 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                14: {
                    label: (0, i.jsx)(K, { text: D.intl.string(D.t.qQxxVc) }),
                    column1: (0, i.jsx)(q, { includes: !0 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                15: {
                    label: (0, i.jsx)(K, { text: D.intl.string(D.t.xi0NBE) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                    withBottomBorder: !0,
                },
                16: {
                    label: (0, i.jsx)(K, { text: D.intl.string(D.t.MfsUHm) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                22: {
                    label: (0, i.jsx)(K, { text: D.intl.string(D.t["A+0H1f"]) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                17: {
                    label: (0, i.jsx)(K, { text: D.intl.string(D.t["il8+nC"]) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                },
                18: {
                    label: (0, i.jsx)(K, { text: D.intl.formatToPlainString(D.t["8crdzJ"], { maxChars: 4e3 }) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                    withBottomBorder: !0,
                },
                19: {
                    label: (0, i.jsx)(d.D, {
                        className: X.__invalid_textColor,
                        variant: "display-sm",
                        children: "Make Discord Yours",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                20: {
                    label: (0, i.jsx)(d.D, {
                        className: X.__invalid_textColor,
                        variant: "display-sm",
                        children: "Enjoy an Upgraded Discord",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                21: {
                    label: (0, i.jsx)(d.D, {
                        className: X.__invalid_textColor,
                        variant: "display-sm",
                        children: "Show Up the Way You Want",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                23: {
                    label: (0, i.jsx)(K, { text: D.intl.string(D.t["93xPy3"]) }),
                    column1: (0, i.jsx)(q, { includes: !1 }),
                    column2: (0, i.jsx)(q, { includes: !0 }),
                    withBottomBorder: !0,
                },
                24: {
                    label: (0, i.jsx)(K, { text: D.intl.string(D.t["5BJqNF"]) }),
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
    if (!P || !S) return null;
    let em = {
        label: (0, i.jsx)(d.D, {
            className: X.__invalid_textColor,
            variant: "heading-lg/semibold",
            children: D.intl.string(D.t.ED4UVD),
        }),
        column1: (0, i.jsx)(Q, { premiumType: z.PremiumTypes.TIER_0, isPremiumGroup: H }),
        column2: (0, i.jsx)(Q, { premiumType: z.PremiumTypes.TIER_2, isPremiumGroup: H }),
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
              column1: (0, i.jsxs)(i.Fragment, {
                  children: [
                      es === z.pe.TIER_2
                          ? (0, i.jsx)(U.A, {
                                className: X.x6,
                                subscriptionTier: z.pe.TIER_0,
                                showIcon: !1,
                                look: o.pR.OUTLINED,
                                color: O ? o.XD.BRAND : o.XD.WHITE,
                            })
                          : (0, i.jsx)(U.A, { className: X.x6, subscriptionTier: z.pe.TIER_0, showIcon: !1 }),
                      ei === z.PremiumTypes.TIER_2 || null != es
                          ? null
                          : (0, i.jsx)(L.A, { className: X.x6, subscriptionTier: z.pe.TIER_0 }),
                  ],
              }),
              column2: (0, i.jsxs)(i.Fragment, {
                  children: [
                      es === z.pe.TIER_0
                          ? (0, i.jsx)(U.A, {
                                className: X.x6,
                                subscriptionTier: z.pe.TIER_2,
                                showIcon: !1,
                                look: o.pR.OUTLINED,
                                color: O ? o.XD.BRAND : o.XD.WHITE,
                            })
                          : (0, i.jsx)(U.A, { className: X.x6, subscriptionTier: z.pe.TIER_2, showIcon: !1 }),
                      ei === z.PremiumTypes.TIER_0 || null != es
                          ? null
                          : (0, i.jsx)(L.A, { className: X.x6, subscriptionTier: z.pe.TIER_2 }),
                  ],
              }),
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: null == es,
          }),
        (E = R
            ? null
            : null != es || null != ei
              ? (0, i.jsx)(w.HU, {
                    text: null != es ? D.intl.string(D.t.IBYG5U) : D.intl.string(D.t.ce1v3V),
                    className: X.ls,
                    colorOptions:
                        es === z.pe.TIER_0
                            ? O
                                ? w.at.PREMIUM_TIER_0_GRADIENT_FILL
                                : w.at.PREMIUM_TIER_0_WHITE_FILL
                            : O
                              ? F
                                  ? w.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  : w.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                              : w.at.PREMIUM_TIER_2_WHITE_FILL,
                })
              : (0, i.jsx)(J, {})));
    let ex = es === z.pe.TIER_0 || ei === z.PremiumTypes.TIER_0 || _ === z.PremiumTypes.TIER_0;
    return (0, i.jsx)(x.f5, {
        value: y,
        children: (0, i.jsxs)("div", {
            className: l()(X.zr, T),
            "data-testid": "v2-marketing-page-comparison-table",
            children: [
                (0, i.jsx)(d.D, {
                    className: l()(X.Qw, X.__invalid_textColor),
                    variant: "heading-xxl/semibold",
                    children: I ?? D.intl.string(D.t.FIbMh9),
                }),
                H && (0, i.jsx)(k, { premiumGroupRole: B.premiumGroupRole, className: X.vg }),
                (0, i.jsxs)("div", {
                    className: X.wY,
                    children: [
                        (0, i.jsx)("div", { className: l()(v, { [X.A9]: ex, [X.ce]: !ex && !H }), children: !ex && E }),
                        (0, i.jsxs)("table", {
                            className: X.tp,
                            children: [
                                (0, i.jsx)("thead", { children: (0, i.jsx)($, { ...em }) }),
                                (0, i.jsx)("tbody", {
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
