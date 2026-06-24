s.d(t, { A: () => en }), s(321073);
var l = s(627968),
    i = s(64700),
    n = s(503698),
    r = s.n(n),
    a = s(17928),
    o = s(462887),
    c = s(862482),
    d = s(534514),
    u = s(736653),
    x = s(793574),
    m = s(688810),
    p = s(531260),
    j = s(160946),
    h = s(287809),
    _ = s(166403),
    f = s(428262),
    g = s(960851),
    E = s(89366),
    C = s(422936),
    A = s(234419),
    R = s(331322),
    T = s(508770),
    I = s(834730),
    N = s(441574),
    y = s(862990),
    v = s(427262),
    M = s(622017),
    b = s(113090),
    O = s(88001),
    L = s(466919),
    P = s(375708);
let w = function (e, t) {
    let s,
        l = (function () {
            let { useCachedData: e = !0, fetch: t = !0 } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { premiumGroupMembership: s } = (0, b.A)({ useCachedData: e, fetch: t }),
                { premiumGroupMembers: l } = (0, M.A)(s?.subscriptionId ?? null, { useCachedData: e, fetch: t });
            return l?.primary != null ? (0, v.$3)(l?.primary) : null;
        })({ useCachedData: !0, fetch: e === N.qT.MEMBER }),
        i = (0, a.bG)([_.A], () => _.A.getPremiumGroupSubscription());
    return e === N.qT.UNSPECIFIED
        ? null
        : {
              subheaderString:
                  null ==
                  (s =
                      e === N.qT.PRIMARY
                          ? (0, y.bV)(i, { withIntervals: !0 })
                          : null == l
                            ? null
                            : P.intl.format(L.default.Nu9LNm, { primaryName: l, premiumGroupProductName: (0, O.DP)() }))
                      ? "..."
                      : s,
              bodyString:
                  e === N.qT.PRIMARY
                      ? P.intl.format(L.default["+R/K74"], {
                            helpCenterLink: O.TE,
                            premiumGroupProductName: (0, O.DP)(),
                        })
                      : P.intl.format(t ? L.default["xF+upx"] : L.default.qqfnOm, { helpCenterLink: O.TE }),
          };
};
var S = s(217899);
function D(e) {
    let { className: t, premiumGroupRole: s } = e,
        i = w(s, !0);
    if (null == i) return null;
    let { subheaderString: n, bodyString: a } = i;
    return (0, l.jsxs)("div", {
        className: r()(S.kL, t),
        children: [
            (0, l.jsxs)(R.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                className: S.wx,
                children: [
                    (0, l.jsx)(d.D, { variant: "display-md", className: S.Ss, children: (0, O.DP)() }),
                    (0, l.jsx)(T.E, { type: "beta", variant: "expressive" }),
                ],
            }),
            (0, l.jsx)(I.E, { variant: "text-md/medium", className: S.m_, color: "text-default", children: n }),
            (0, l.jsx)(I.E, { variant: "text-md/medium", color: "text-default", children: a }),
        ],
    });
}
var G = s(194509),
    U = s(396375),
    F = s(410516),
    B = s(774774),
    k = s(231265),
    H = s(933832),
    V = s(140735),
    W = s(789645),
    z = s(773669),
    Y = s(580630),
    Z = s(788868),
    K = s(652215),
    q = s(864386),
    $ = s(965381);
function J(e) {
    let { text: t, badge: s, variant: i } = e;
    return (0, l.jsxs)(I.E, {
        color: "text-default",
        variant: null != i ? i : "text-sm/normal",
        children: [t, " ", s],
    });
}
function Q(e) {
    let { text: t, variant: s } = e;
    return (0, l.jsx)(I.E, { color: "text-strong", variant: null != s ? s : "text-md/semibold", children: t });
}
function X(e) {
    let { includes: t } = e;
    return t
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(H.A, { size: "md", color: "currentColor", className: $.$8, "aria-hidden": !0 }),
                  (0, l.jsx)(V.A, { children: P.intl.string(P.t["tq+6t/"]) }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(W.P, { size: "md", color: "currentColor", className: $.ut, "aria-hidden": !0 }),
                  (0, l.jsx)(V.A, { children: P.intl.string(P.t.l4qZrp) }),
              ],
          });
}
function ee() {
    let e = (0, k._)();
    return (0, l.jsx)(B.HU, { text: e, className: $.QR, colorOptions: B.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL });
}
function et() {
    return (0, l.jsx)("div", {
        className: $.Wm,
        children: (0, l.jsx)(d.D, {
            className: $.uC,
            variant: "heading-deprecated-12/extrabold",
            children: P.intl.string(P.t["o/oRJB"]),
        }),
    });
}
function es(e) {
    let t,
        { premiumType: s, isPremiumGroup: i } = e,
        n = (0, u.Ay)();
    if (i)
        if (s === Z.PremiumTypes.TIER_0)
            return (0, l.jsx)(d.D, { variant: "display-md", className: $.dW, children: P.intl.string(P.t.tUbSDK) });
        else return (0, l.jsx)(d.D, { variant: "display-md", className: $.dW, children: P.intl.string(P.t.Ipxkog) });
    t =
        s === Z.PremiumTypes.TIER_0
            ? (0, o.M)(n)
                ? "/assets/8b472f9ec50bc47c.png"
                : "/assets/24c4ba2719f9bbc8.png"
            : (0, o.M)(n)
              ? "/assets/3638711ae67443ff.png"
              : "/assets/a6bb84f7256073af.png";
    let r = (0, f.Dd)(s);
    return (0, l.jsx)("img", { src: t, className: $.wm, alt: r });
}
function el(e) {
    let { label: t, column1: s, column2: i } = e;
    return (0, l.jsxs)("tr", {
        className: r()($.U1, $.YI, $.Y9),
        children: [
            (0, l.jsx)("th", { scope: "col", className: $.Cr, children: t }),
            (0, l.jsx)("th", { scope: "col", className: $.e4, children: s }),
            (0, l.jsx)("th", { scope: "col", className: r()($.e4, $.Y9), children: i }),
        ],
    });
}
function ei(e) {
    let {
        label: t,
        column1: s,
        column2: i,
        withBottomBorder: n = !0,
        withTopBorderRadius: a = !1,
        withBottomBorderRadius: o = !1,
        buttonsRow: c = !1,
        shortRow: d = !1,
    } = e;
    return (0, l.jsxs)("tr", {
        className: r()($.nM, { [$.EE]: c, [$.Y9]: a, [$.kS]: o, [$.YI]: n, [$.vs]: d }),
        children: [
            (0, l.jsx)("th", { scope: "row", className: $.nx, children: t }),
            (0, l.jsx)("td", { className: r()($.Hn, { [$.SD]: c }), children: s }),
            (0, l.jsx)("td", { className: r()($.Hn, { [$.Y9]: a, [$.kS]: o, [$.SD]: c }), children: i }),
        ],
    });
}
let en = function (e) {
    var t;
    let s,
        n,
        R,
        {
            className: T,
            hideCTAs: I = !1,
            headingOverride: N,
            hidePill: y = !1,
            selectedPlanColumnClassName: v,
            selectedPlanTier: M = Z.PremiumTypes.TIER_2,
        } = e,
        { analyticsLocations: b } = (0, m.Ay)(x.A.PREMIUM_MARKETING_PLAN_COMPARISON),
        O = (0, a.bG)([_.A], () => _.A.hasFetchedSubscriptions()),
        L = (0, j.Y)(Z.T7),
        w = (0, u.Ay)(),
        S = (0, o.q)(w),
        k = (0, a.bG)([h.default], () => h.default.getCurrentUser()),
        H = null != k && k.isPremiumWithPremiumGroup(),
        V = (0, f.YE)(k, Z.PremiumTypes.TIER_2),
        W = (0, A.V)(),
        en = W?.subscription_trial?.sku_id,
        er = (0, E.Us)(),
        ea = (0, C.O)(),
        eo = (0, F.YJ)(ea),
        ec = null != ea && (0, F.U9)(ea, Z.pe.TIER_2) && eo === Z.gD.PREMIUM_MONTH_TIER_2,
        ed = (0, F.N1)(eo),
        eu = null != ed ? `${ed}/${(0, f.FJ)(Z.WT.MONTH)}` : "",
        ex = (0, f.JM)(Z.gD.PREMIUM_MONTH_TIER_0),
        em = (0, f.JM)(Z.gD.PREMIUM_MONTH_TIER_2),
        ep =
            ((t = (0, p.A)().fractionalState),
            (s = {
                0: {
                    label: (0, l.jsx)(J, { text: P.intl.string(P.t["09yRK3"]) }),
                    column1: (0, l.jsx)(Q, { text: f.Ay.formatPriceString(ex, Z.WT.MONTH) }),
                    column2: (0, l.jsx)(Q, { text: ec ? eu : f.Ay.formatPriceString(em, Z.WT.MONTH) }),
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
                    column1: (0, l.jsx)(Q, { text: (0, f.EJ)(Z.PremiumTypes.TIER_0) }),
                    column2: (0, l.jsx)(Q, { text: (0, f.EJ)(Z.PremiumTypes.TIER_2) }),
                },
                6: {
                    label: (0, l.jsx)(J, { text: P.intl.string(P.t.VwxlMw) }),
                    column1: (0, l.jsx)(X, { includes: !1 }),
                    column2: (0, l.jsx)(Q, { text: P.intl.string(P.t.XdN6KU) }),
                },
                7: {
                    label: (0, l.jsx)(J, {
                        text: P.intl.formatToPlainString(P.t.nyhDpw, {
                            numBoosts: Z.M4,
                            percentageOff: (0, Y.l9)(z.default.locale, Z.oX / 100),
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
                    label: (0, l.jsx)(J, { text: P.intl.string(q.default["86GtGH"]) }),
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
                        className: $.__invalid_textColor,
                        variant: "display-sm",
                        children: "Make Discord Yours",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                20: {
                    label: (0, l.jsx)(d.D, {
                        className: $.__invalid_textColor,
                        variant: "display-sm",
                        children: "Enjoy an Upgraded Discord",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                21: {
                    label: (0, l.jsx)(d.D, {
                        className: $.__invalid_textColor,
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
            (n = t === Z.xc.FP_ONLY),
            [
                s[0],
                s[1],
                s[2],
                s[3],
                s[4],
                s[5],
                s[6],
                ...(n ? [] : [s[7]]),
                s[8],
                s[9],
                s[10],
                s[11],
                s[12],
                ...(n ? [] : [s[13]]),
                s[14],
                s[15],
                s[16],
                s[17],
                s[18],
                s[23],
                s[24],
            ]),
        ej = (0, g.cg)();
    if (!O || !L) return null;
    let eh = {
        label: (0, l.jsx)(d.D, {
            className: $.__invalid_textColor,
            variant: "heading-lg/extrabold",
            children: P.intl.string(P.t.ED4UVD),
        }),
        column1: (0, l.jsx)(es, { premiumType: Z.PremiumTypes.TIER_0, isPremiumGroup: H }),
        column2: (0, l.jsx)(es, { premiumType: Z.PremiumTypes.TIER_2, isPremiumGroup: H }),
    };
    I
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
                      en === Z.pe.TIER_2 || ej
                          ? (0, l.jsx)(U.A, {
                                className: $.x6,
                                subscriptionTier: Z.pe.TIER_0,
                                showIcon: !1,
                                look: c.pR.OUTLINED,
                                color: S ? c.XD.BRAND : c.XD.WHITE,
                            })
                          : (0, l.jsx)(U.A, { className: $.x6, subscriptionTier: Z.pe.TIER_0, showIcon: !1 }),
                      er === Z.PremiumTypes.TIER_2 || null != en
                          ? null
                          : (0, l.jsx)(G.A, { className: $.x6, subscriptionTier: Z.pe.TIER_0 }),
                  ],
              }),
              column2: (0, l.jsxs)(l.Fragment, {
                  children: [
                      en === Z.pe.TIER_0
                          ? (0, l.jsx)(U.A, {
                                className: $.x6,
                                subscriptionTier: Z.pe.TIER_2,
                                showIcon: !1,
                                look: c.pR.OUTLINED,
                                color: S ? c.XD.BRAND : c.XD.WHITE,
                            })
                          : (0, l.jsx)(U.A, {
                                className: $.x6,
                                subscriptionTier: Z.pe.TIER_2,
                                showIcon: !1,
                                hasActivePromotion: ej,
                            }),
                      er === Z.PremiumTypes.TIER_0 || null != en
                          ? null
                          : (0, l.jsx)(G.A, { className: $.x6, subscriptionTier: Z.pe.TIER_2 }),
                  ],
              }),
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: null == en,
          }),
        (R = y
            ? null
            : null != en || null != er
              ? (0, l.jsx)(B.HU, {
                    text: null != en ? P.intl.string(P.t.IBYG5U) : P.intl.string(P.t.ce1v3V),
                    className: $.ls,
                    colorOptions:
                        en === Z.pe.TIER_0
                            ? S
                                ? B.at.PREMIUM_TIER_0_GRADIENT_FILL
                                : B.at.PREMIUM_TIER_0_WHITE_FILL
                            : S
                              ? V
                                  ? B.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  : B.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                              : B.at.PREMIUM_TIER_2_WHITE_FILL,
                })
              : ej
                ? (0, l.jsx)(ee, {})
                : (0, l.jsx)(et, {}));
    let e_ = en === Z.pe.TIER_0 || er === Z.PremiumTypes.TIER_0 || M === Z.PremiumTypes.TIER_0;
    return (0, l.jsx)(m.f5, {
        value: b,
        children: (0, l.jsxs)("div", {
            className: r()($.zr, T),
            "data-testid": "v2-marketing-page-comparison-table",
            children: [
                (0, l.jsx)(d.D, {
                    className: r()($.Qw, $.__invalid_textColor),
                    variant: "heading-xxl/extrabold",
                    children: N ?? P.intl.string(P.t.FIbMh9),
                }),
                H && (0, l.jsx)(D, { premiumGroupRole: k.premiumGroupRole, className: $.vg }),
                (0, l.jsxs)("div", {
                    className: $.wY,
                    children: [
                        (0, l.jsx)("div", { className: r()(v, { [$.A9]: e_, [$.ce]: !e_ && !H }), children: !e_ && R }),
                        (0, l.jsxs)("table", {
                            className: $.tp,
                            children: [
                                (0, l.jsx)("thead", { children: (0, l.jsx)(el, { ...eh }) }),
                                (0, l.jsx)("tbody", {
                                    children: ep.map((e, t) => (0, i.createElement)(ei, { ...e, key: t })),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
};
