(s.d(t, { A: () => es }), s(321073));
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
    f = s(89366),
    A = s(724651),
    E = s(732280),
    C = s(331322),
    T = s(508770),
    N = s(834730),
    I = s(441574),
    R = s(989790),
    v = s(427262),
    y = s(622017),
    b = s(113090),
    M = s(88001),
    L = s(148155),
    O = s(375708);
let P = function (e, t) {
    let s,
        l = (function () {
            let { useCachedData: e = !0, fetch: t = !0 } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { premiumGroupMembership: s } = (0, b.A)({ useCachedData: e, fetch: t }),
                { premiumGroupMembers: l } = (0, y.A)(s?.subscriptionId ?? null, { useCachedData: e, fetch: t });
            return l?.primary != null ? (0, v.$3)(l?.primary) : null;
        })({ useCachedData: !0, fetch: e === I.qT.MEMBER }),
        n = (0, a.bG)([_.A], () => _.A.getPremiumGroupSubscription());
    return e === I.qT.UNSPECIFIED
        ? null
        : {
              subheaderString:
                  null ==
                  (s =
                      e === I.qT.PRIMARY
                          ? (0, R.bV)(n, { withIntervals: !0 })
                          : null == l
                            ? null
                            : O.intl.format(L.default.Nu9LNm, { primaryName: l, premiumGroupProductName: (0, M.DP)() }))
                      ? "..."
                      : s,
              bodyString:
                  e === I.qT.PRIMARY
                      ? O.intl.format(L.default["+R/K74"], {
                            helpCenterLink: M.TE,
                            premiumGroupProductName: (0, M.DP)(),
                        })
                      : O.intl.format(t ? L.default["xF+upx"] : L.default.qqfnOm, { helpCenterLink: M.TE }),
          };
};
var S = s(139996);
function w(e) {
    let { className: t, premiumGroupRole: s } = e,
        n = P(s, !0);
    if (null == n) return null;
    let { subheaderString: i, bodyString: a } = n;
    return (0, l.jsxs)("div", {
        className: r()(S.kL, t),
        children: [
            (0, l.jsxs)(C.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                className: S.wx,
                children: [
                    (0, l.jsx)(d.D, { variant: "nitro-sm", className: S.Ss, children: (0, M.DP)() }),
                    (0, l.jsx)(T.E, { type: "beta", variant: "expressive" }),
                ],
            }),
            (0, l.jsx)(N.E, { variant: "text-md/medium", className: S.m_, color: "text-default", children: i }),
            (0, l.jsx)(N.E, { variant: "text-md/medium", color: "text-default", children: a }),
        ],
    });
}
var D = s(194509),
    G = s(396375),
    U = s(511484),
    F = s(774774),
    B = s(933832),
    k = s(140735),
    H = s(789645),
    V = s(773669),
    Z = s(580630),
    z = s(202541),
    Y = s(652215),
    W = s(701974),
    K = s(45526);
function $(e) {
    let { text: t, badge: s, variant: n } = e;
    return (0, l.jsxs)(N.E, {
        color: "text-default",
        variant: null != n ? n : "text-sm/normal",
        children: [t, " ", s],
    });
}
function q(e) {
    let { text: t, variant: s } = e;
    return (0, l.jsx)(N.E, { color: "text-strong", variant: null != s ? s : "text-md/semibold", children: t });
}
function J(e) {
    let { includes: t } = e;
    return t
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(B.CheckmarkLargeIcon, {
                      size: "md",
                      color: "currentColor",
                      className: K.$8,
                      "aria-hidden": !0,
                  }),
                  (0, l.jsx)(k.A, { children: O.intl.string(O.t["tq+6t/"]) }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(H.P, { size: "md", color: "currentColor", className: K.ut, "aria-hidden": !0 }),
                  (0, l.jsx)(k.A, { children: O.intl.string(O.t.l4qZrp) }),
              ],
          });
}
function Q() {
    return (0, l.jsx)("div", {
        className: K.Wm,
        children: (0, l.jsx)(d.D, {
            className: K.uC,
            variant: "heading-deprecated-12/extrabold",
            children: O.intl.string(O.t["o/oRJB"]),
        }),
    });
}
function X(e) {
    let t,
        { premiumType: s, isPremiumGroup: n } = e,
        i = (0, u.Ay)();
    if (n)
        if (s === z.PremiumTypes.TIER_0)
            return (0, l.jsx)(d.D, { variant: "nitro-md", className: K.dW, children: O.intl.string(O.t.tUbSDK) });
        else return (0, l.jsx)(d.D, { variant: "nitro-md", className: K.dW, children: O.intl.string(O.t.Ipxkog) });
    t =
        s === z.PremiumTypes.TIER_0
            ? (0, o.M)(i)
                ? "/assets/8b472f9ec50bc47c.png"
                : "/assets/24c4ba2719f9bbc8.png"
            : (0, o.M)(i)
              ? "/assets/3638711ae67443ff.png"
              : "/assets/a6bb84f7256073af.png";
    let r = (0, g.Dd)(s);
    return (0, l.jsx)("img", { src: t, className: K.wm, alt: r });
}
function ee(e) {
    let { label: t, column1: s, column2: n } = e;
    return (0, l.jsxs)("tr", {
        className: r()(K.U1, K.YI, K.Y9),
        children: [
            (0, l.jsx)("th", { scope: "col", className: K.Cr, children: t }),
            (0, l.jsx)("th", { scope: "col", className: K.e4, children: s }),
            (0, l.jsx)("th", { scope: "col", className: r()(K.e4, K.Y9), children: n }),
        ],
    });
}
function et(e) {
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
        className: r()(K.nM, { [K.EE]: c, [K.Y9]: a, [K.kS]: o, [K.YI]: i, [K.vs]: d }),
        children: [
            (0, l.jsx)("th", { scope: "row", className: K.nx, children: t }),
            (0, l.jsx)("td", { className: r()(K.Hn, { [K.SD]: c }), children: s }),
            (0, l.jsx)("td", { className: r()(K.Hn, { [K.Y9]: a, [K.kS]: o, [K.SD]: c }), children: n }),
        ],
    });
}
let es = function (e) {
    var t;
    let s,
        i,
        C,
        {
            className: T,
            hideCTAs: N = !1,
            headingOverride: I,
            hidePill: R = !1,
            selectedPlanColumnClassName: v,
            selectedPlanTier: y = z.PremiumTypes.TIER_2,
        } = e,
        { analyticsLocations: b } = (0, m.Ay)(x.A.PREMIUM_MARKETING_PLAN_COMPARISON),
        M = (0, a.bG)([_.A], () => _.A.hasFetchedSubscriptions()),
        L = (0, h.Y)(z.T7),
        P = (0, u.Ay)(),
        S = (0, o.q)(P),
        B = (0, a.bG)([j.default], () => j.default.getCurrentUser()),
        k = null != B && B.isPremiumWithPremiumGroup(),
        H = (0, g.YE)(B, z.PremiumTypes.TIER_2),
        es = (0, E.V)(),
        el = es?.subscriptionTrial?.skuId,
        en = (0, f.Us)(),
        ei = (0, A.O)(),
        er = (0, U.YJ)(ei),
        ea = null != ei && (0, U.U9)(ei, z.pe.TIER_2) && er === z.gD.PREMIUM_MONTH_TIER_2,
        eo = (0, U.N1)(er),
        ec = null != eo ? `${eo}/${(0, g.FJ)(z.WT.MONTH)}` : "",
        ed = (0, g.JM)(z.gD.PREMIUM_MONTH_TIER_0),
        eu = (0, g.JM)(z.gD.PREMIUM_MONTH_TIER_2),
        ex =
            ((t = (0, p.A)().fractionalState),
            (s = {
                0: {
                    label: (0, l.jsx)($, { text: O.intl.string(O.t["09yRK3"]) }),
                    column1: (0, l.jsx)(q, { text: g.Ay.formatPriceString(ed, z.WT.MONTH) }),
                    column2: (0, l.jsx)(q, { text: ea ? ec : g.Ay.formatPriceString(eu, z.WT.MONTH) }),
                    withBottomBorder: !0,
                },
                1: {
                    label: (0, l.jsx)($, { text: O.intl.string(O.t.vaDeDV) }),
                    column1: (0, l.jsx)(J, { includes: !0 }),
                    column2: (0, l.jsx)(J, { includes: !0 }),
                },
                2: {
                    label: (0, l.jsx)($, { text: O.intl.string(O.t.DmfiwT) }),
                    column1: (0, l.jsx)(J, { includes: !0 }),
                    column2: (0, l.jsx)(J, { includes: !0 }),
                },
                3: {
                    label: (0, l.jsx)($, { text: O.intl.string(O.t.OuItFi) }),
                    column1: (0, l.jsx)(J, { includes: !0 }),
                    column2: (0, l.jsx)(J, { includes: !0 }),
                },
                4: {
                    label: (0, l.jsx)($, { text: O.intl.string(O.t["9kRJS8"]) }),
                    column1: (0, l.jsx)(J, { includes: !0 }),
                    column2: (0, l.jsx)(J, { includes: !0 }),
                },
                5: {
                    label: (0, l.jsx)($, { text: O.intl.string(O.t["ufhQC+"]) }),
                    column1: (0, l.jsx)(q, { text: (0, g.EJ)(z.PremiumTypes.TIER_0) }),
                    column2: (0, l.jsx)(q, { text: (0, g.EJ)(z.PremiumTypes.TIER_2) }),
                },
                6: {
                    label: (0, l.jsx)($, { text: O.intl.string(O.t.VwxlMw) }),
                    column1: (0, l.jsx)(J, { includes: !1 }),
                    column2: (0, l.jsx)(q, { text: O.intl.string(O.t.XdN6KU) }),
                },
                7: {
                    label: (0, l.jsx)($, {
                        text: O.intl.formatToPlainString(O.t.nyhDpw, {
                            numBoosts: z.M4,
                            percentageOff: (0, Z.l9)(V.default.locale, z.oX / 100),
                        }),
                    }),
                    column1: (0, l.jsx)(J, { includes: !1 }),
                    column2: (0, l.jsx)(J, { includes: !0 }),
                },
                8: {
                    label: (0, l.jsx)($, { text: O.intl.string(O.t.tFbcuM) }),
                    column1: (0, l.jsx)(J, { includes: !1 }),
                    column2: (0, l.jsx)(J, { includes: !0 }),
                },
                9: {
                    label: (0, l.jsx)($, { text: O.intl.string(W.default["86GtGH"]) }),
                    column1: (0, l.jsx)(J, { includes: !1 }),
                    column2: (0, l.jsx)(J, { includes: !0 }),
                },
                10: {
                    label: (0, l.jsx)($, { text: O.intl.string(O.t["aR/zTk"]) }),
                    column1: (0, l.jsx)(J, { includes: !1 }),
                    column2: (0, l.jsx)(J, { includes: !0 }),
                },
                11: {
                    label: (0, l.jsx)($, { text: O.intl.string(O.t.IzrZHz) }),
                    column1: (0, l.jsx)(J, { includes: !1 }),
                    column2: (0, l.jsx)(J, { includes: !0 }),
                },
                12: {
                    label: (0, l.jsx)($, { text: O.intl.string(O.t["HwNg/Z"]) }),
                    column1: (0, l.jsx)(J, { includes: !1 }),
                    column2: (0, l.jsx)(J, { includes: !0 }),
                },
                13: {
                    label: (0, l.jsx)($, { text: O.intl.string(O.t["y+HHL9"]) }),
                    column1: (0, l.jsx)(J, { includes: !0 }),
                    column2: (0, l.jsx)(J, { includes: !0 }),
                },
                14: {
                    label: (0, l.jsx)($, { text: O.intl.string(O.t.qQxxVc) }),
                    column1: (0, l.jsx)(J, { includes: !0 }),
                    column2: (0, l.jsx)(J, { includes: !0 }),
                },
                15: {
                    label: (0, l.jsx)($, { text: O.intl.string(O.t.xi0NBE) }),
                    column1: (0, l.jsx)(J, { includes: !1 }),
                    column2: (0, l.jsx)(J, { includes: !0 }),
                    withBottomBorder: !0,
                },
                16: {
                    label: (0, l.jsx)($, { text: O.intl.string(O.t.MfsUHm) }),
                    column1: (0, l.jsx)(J, { includes: !1 }),
                    column2: (0, l.jsx)(J, { includes: !0 }),
                },
                22: {
                    label: (0, l.jsx)($, { text: O.intl.string(O.t["A+0H1f"]) }),
                    column1: (0, l.jsx)(J, { includes: !1 }),
                    column2: (0, l.jsx)(J, { includes: !0 }),
                },
                17: {
                    label: (0, l.jsx)($, { text: O.intl.string(O.t["il8+nC"]) }),
                    column1: (0, l.jsx)(J, { includes: !1 }),
                    column2: (0, l.jsx)(J, { includes: !0 }),
                },
                18: {
                    label: (0, l.jsx)($, { text: O.intl.formatToPlainString(O.t["8crdzJ"], { maxChars: Y.CS1 }) }),
                    column1: (0, l.jsx)(J, { includes: !1 }),
                    column2: (0, l.jsx)(J, { includes: !0 }),
                    withBottomBorder: !0,
                },
                19: {
                    label: (0, l.jsx)(d.D, {
                        className: K.__invalid_textColor,
                        variant: "display-sm",
                        children: "Make Discord Yours",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                20: {
                    label: (0, l.jsx)(d.D, {
                        className: K.__invalid_textColor,
                        variant: "display-sm",
                        children: "Enjoy an Upgraded Discord",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                21: {
                    label: (0, l.jsx)(d.D, {
                        className: K.__invalid_textColor,
                        variant: "display-sm",
                        children: "Show Up the Way You Want",
                    }),
                    column1: null,
                    column2: null,
                    withBottomBorder: !1,
                },
                23: {
                    label: (0, l.jsx)($, { text: O.intl.string(O.t["93xPy3"]) }),
                    column1: (0, l.jsx)(J, { includes: !1 }),
                    column2: (0, l.jsx)(J, { includes: !0 }),
                    withBottomBorder: !0,
                },
                24: {
                    label: (0, l.jsx)($, { text: O.intl.string(O.t["5BJqNF"]) }),
                    column1: (0, l.jsx)(J, { includes: !1 }),
                    column2: (0, l.jsx)(J, { includes: !0 }),
                    withBottomBorder: !1,
                },
            }),
            (i = t === z.xc.FP_ONLY),
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
            ]);
    if (!M || !L) return null;
    let em = {
        label: (0, l.jsx)(d.D, {
            className: K.__invalid_textColor,
            variant: "heading-lg/extrabold",
            children: O.intl.string(O.t.ED4UVD),
        }),
        column1: (0, l.jsx)(X, { premiumType: z.PremiumTypes.TIER_0, isPremiumGroup: k }),
        column2: (0, l.jsx)(X, { premiumType: z.PremiumTypes.TIER_2, isPremiumGroup: k }),
    };
    (N
        ? ex.push({
              label: null,
              column1: null,
              column2: null,
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: !1,
              shortRow: !0,
          })
        : ex.push({
              label: null,
              column1: (0, l.jsxs)(l.Fragment, {
                  children: [
                      el === z.pe.TIER_2
                          ? (0, l.jsx)(G.A, {
                                className: K.x6,
                                subscriptionTier: z.pe.TIER_0,
                                showIcon: !1,
                                look: c.pR.OUTLINED,
                                color: S ? c.XD.BRAND : c.XD.WHITE,
                            })
                          : (0, l.jsx)(G.A, { className: K.x6, subscriptionTier: z.pe.TIER_0, showIcon: !1 }),
                      en === z.PremiumTypes.TIER_2 || null != el
                          ? null
                          : (0, l.jsx)(D.A, { className: K.x6, subscriptionTier: z.pe.TIER_0 }),
                  ],
              }),
              column2: (0, l.jsxs)(l.Fragment, {
                  children: [
                      el === z.pe.TIER_0
                          ? (0, l.jsx)(G.A, {
                                className: K.x6,
                                subscriptionTier: z.pe.TIER_2,
                                showIcon: !1,
                                look: c.pR.OUTLINED,
                                color: S ? c.XD.BRAND : c.XD.WHITE,
                            })
                          : (0, l.jsx)(G.A, { className: K.x6, subscriptionTier: z.pe.TIER_2, showIcon: !1 }),
                      en === z.PremiumTypes.TIER_0 || null != el
                          ? null
                          : (0, l.jsx)(D.A, { className: K.x6, subscriptionTier: z.pe.TIER_2 }),
                  ],
              }),
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: null == el,
          }),
        (C = R
            ? null
            : null != el || null != en
              ? (0, l.jsx)(F.HU, {
                    text: null != el ? O.intl.string(O.t.IBYG5U) : O.intl.string(O.t.ce1v3V),
                    className: K.ls,
                    colorOptions:
                        el === z.pe.TIER_0
                            ? S
                                ? F.at.PREMIUM_TIER_0_GRADIENT_FILL
                                : F.at.PREMIUM_TIER_0_WHITE_FILL
                            : S
                              ? H
                                  ? F.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  : F.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                              : F.at.PREMIUM_TIER_2_WHITE_FILL,
                })
              : (0, l.jsx)(Q, {})));
    let ep = el === z.pe.TIER_0 || en === z.PremiumTypes.TIER_0 || y === z.PremiumTypes.TIER_0;
    return (0, l.jsx)(m.f5, {
        value: b,
        children: (0, l.jsxs)("div", {
            className: r()(K.zr, T),
            "data-testid": "v2-marketing-page-comparison-table",
            children: [
                (0, l.jsx)(d.D, {
                    className: r()(K.Qw, K.__invalid_textColor),
                    variant: "heading-xxl/extrabold",
                    children: I ?? O.intl.string(O.t.FIbMh9),
                }),
                k && (0, l.jsx)(w, { premiumGroupRole: B.premiumGroupRole, className: K.vg }),
                (0, l.jsxs)("div", {
                    className: K.wY,
                    children: [
                        (0, l.jsx)("div", { className: r()(v, { [K.A9]: ep, [K.ce]: !ep && !k }), children: !ep && C }),
                        (0, l.jsxs)("table", {
                            className: K.tp,
                            children: [
                                (0, l.jsx)("thead", { children: (0, l.jsx)(ee, { ...em }) }),
                                (0, l.jsx)("tbody", {
                                    children: ex.map((e, t) => (0, n.createElement)(et, { ...e, key: t })),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
};
