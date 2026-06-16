s.d(t, { A: () => ei }), s(321073);
var l = s(627968),
    i = s(64700),
    r = s(503698),
    n = s.n(r),
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
    g = s(428262),
    f = s(960851),
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
    P = s(375708),
    w = s(217899);
function S(e) {
    let { className: t, premiumGroupRole: s } = e,
        i = ((e, t) => {
            let s,
                l = (function () {
                    let { useCachedData: e = !0, fetch: t = !0 } =
                            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { premiumGroupMembership: s } = (0, b.A)({ useCachedData: e, fetch: t }),
                        { premiumGroupMembers: l } = (0, M.A)(s?.subscriptionId ?? null, {
                            useCachedData: e,
                            fetch: t,
                        });
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
                                    : P.intl.format(L.default.Nu9LNm, {
                                          primaryName: l,
                                          premiumGroupProductName: (0, O.DP)(),
                                      }))
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
        })(s, !0);
    if (null == i) return null;
    let { subheaderString: r, bodyString: o } = i;
    return (0, l.jsxs)("div", {
        className: n()(w.kL, t),
        children: [
            (0, l.jsxs)(R.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                className: w.wx,
                children: [
                    (0, l.jsx)(d.D, { variant: "display-md", className: w.Ss, children: (0, O.DP)() }),
                    (0, l.jsx)(T.E, { type: "beta", variant: "expressive" }),
                ],
            }),
            (0, l.jsx)(I.E, { variant: "text-md/medium", className: w.m_, color: "text-default", children: r }),
            (0, l.jsx)(I.E, { variant: "text-md/medium", color: "text-default", children: o }),
        ],
    });
}
var D = s(194509),
    G = s(396375),
    U = s(410516),
    F = s(774774),
    B = s(231265),
    k = s(933832),
    H = s(140735),
    V = s(789645),
    W = s(773669),
    z = s(580630),
    Y = s(788868),
    Z = s(652215),
    K = s(864386),
    q = s(965381);
let $ = (e) => {
        let { text: t, badge: s, variant: i } = e;
        return (0, l.jsxs)(I.E, {
            color: "text-default",
            variant: null != i ? i : "text-sm/normal",
            children: [t, " ", s],
        });
    },
    J = (e) => {
        let { text: t, variant: s } = e;
        return (0, l.jsx)(I.E, { color: "text-strong", variant: null != s ? s : "text-md/semibold", children: t });
    },
    Q = (e) => {
        let { includes: t } = e;
        return t
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(k.A, { size: "md", color: "currentColor", className: q.$8, "aria-hidden": !0 }),
                      (0, l.jsx)(H.A, { children: P.intl.string(P.t["tq+6t/"]) }),
                  ],
              })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(V.P, { size: "md", color: "currentColor", className: q.ut, "aria-hidden": !0 }),
                      (0, l.jsx)(H.A, { children: P.intl.string(P.t.l4qZrp) }),
                  ],
              });
    },
    X = () => {
        let e = (0, B._)();
        return (0, l.jsx)(F.HU, { text: e, className: q.QR, colorOptions: F.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL });
    },
    ee = () =>
        (0, l.jsx)("div", {
            className: q.Wm,
            children: (0, l.jsx)(d.D, {
                className: q.uC,
                variant: "heading-deprecated-12/extrabold",
                children: P.intl.string(P.t["o/oRJB"]),
            }),
        }),
    et = (e) => {
        let t,
            { premiumType: s, isPremiumGroup: i } = e,
            r = (0, u.Ay)();
        if (i)
            if (s === Y.PremiumTypes.TIER_0)
                return (0, l.jsx)(d.D, { variant: "display-md", className: q.dW, children: P.intl.string(P.t.tUbSDK) });
            else
                return (0, l.jsx)(d.D, { variant: "display-md", className: q.dW, children: P.intl.string(P.t.Ipxkog) });
        t =
            s === Y.PremiumTypes.TIER_0
                ? (0, o.M)(r)
                    ? "/assets/8b472f9ec50bc47c.png"
                    : "/assets/24c4ba2719f9bbc8.png"
                : (0, o.M)(r)
                  ? "/assets/3638711ae67443ff.png"
                  : "/assets/a6bb84f7256073af.png";
        let n = (0, g.Dd)(s);
        return (0, l.jsx)("img", { src: t, className: q.wm, alt: n });
    },
    es = (e) => {
        let { label: t, column1: s, column2: i } = e;
        return (0, l.jsxs)("tr", {
            className: n()(q.U1, q.YI, q.Y9),
            children: [
                (0, l.jsx)("th", { scope: "col", className: q.Cr, children: t }),
                (0, l.jsx)("th", { scope: "col", className: q.e4, children: s }),
                (0, l.jsx)("th", { scope: "col", className: n()(q.e4, q.Y9), children: i }),
            ],
        });
    },
    el = (e) => {
        let {
            label: t,
            column1: s,
            column2: i,
            withBottomBorder: r = !0,
            withTopBorderRadius: a = !1,
            withBottomBorderRadius: o = !1,
            buttonsRow: c = !1,
            shortRow: d = !1,
        } = e;
        return (0, l.jsxs)("tr", {
            className: n()(q.nM, { [q.EE]: c, [q.Y9]: a, [q.kS]: o, [q.YI]: r, [q.vs]: d }),
            children: [
                (0, l.jsx)("th", { scope: "row", className: q.nx, children: t }),
                (0, l.jsx)("td", { className: n()(q.Hn, { [q.SD]: c }), children: s }),
                (0, l.jsx)("td", { className: n()(q.Hn, { [q.Y9]: a, [q.kS]: o, [q.SD]: c }), children: i }),
            ],
        });
    },
    ei = (e) => {
        var t;
        let s,
            r,
            R,
            {
                className: T,
                hideCTAs: I = !1,
                headingOverride: N,
                hidePill: y = !1,
                selectedPlanColumnClassName: v,
                selectedPlanTier: M = Y.PremiumTypes.TIER_2,
            } = e,
            { analyticsLocations: b } = (0, m.Ay)(x.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            O = (0, a.bG)([_.A], () => _.A.hasFetchedSubscriptions()),
            L = (0, j.Y)(Y.T7),
            w = (0, u.Ay)(),
            B = (0, o.q)(w),
            k = (0, a.bG)([h.default], () => h.default.getCurrentUser()),
            H = null != k && k.isPremiumWithPremiumGroup(),
            V = (0, g.YE)(k, Y.PremiumTypes.TIER_2),
            ei = (0, A.V)(),
            er = ei?.subscription_trial?.sku_id,
            en = (0, E.Us)(),
            ea = (0, C.O)(),
            eo = (0, U.YJ)(ea),
            ec = null != ea && (0, U.U9)(ea, Y.pe.TIER_2) && eo === Y.gD.PREMIUM_MONTH_TIER_2,
            ed = (0, U.N1)(eo),
            eu = null != ed ? `${ed}/${(0, g.FJ)(Y.WT.MONTH)}` : "",
            ex = (0, g.JM)(Y.gD.PREMIUM_MONTH_TIER_0),
            em = (0, g.JM)(Y.gD.PREMIUM_MONTH_TIER_2),
            ep =
                ((t = (0, p.A)().fractionalState),
                (s = {
                    0: {
                        label: (0, l.jsx)($, { text: P.intl.string(P.t["09yRK3"]) }),
                        column1: (0, l.jsx)(J, { text: g.Ay.formatPriceString(ex, Y.WT.MONTH) }),
                        column2: (0, l.jsx)(J, { text: ec ? eu : g.Ay.formatPriceString(em, Y.WT.MONTH) }),
                        withBottomBorder: !0,
                    },
                    1: {
                        label: (0, l.jsx)($, { text: P.intl.string(P.t.vaDeDV) }),
                        column1: (0, l.jsx)(Q, { includes: !0 }),
                        column2: (0, l.jsx)(Q, { includes: !0 }),
                    },
                    2: {
                        label: (0, l.jsx)($, { text: P.intl.string(P.t.DmfiwT) }),
                        column1: (0, l.jsx)(Q, { includes: !0 }),
                        column2: (0, l.jsx)(Q, { includes: !0 }),
                    },
                    3: {
                        label: (0, l.jsx)($, { text: P.intl.string(P.t.OuItFi) }),
                        column1: (0, l.jsx)(Q, { includes: !0 }),
                        column2: (0, l.jsx)(Q, { includes: !0 }),
                    },
                    4: {
                        label: (0, l.jsx)($, { text: P.intl.string(P.t["9kRJS8"]) }),
                        column1: (0, l.jsx)(Q, { includes: !0 }),
                        column2: (0, l.jsx)(Q, { includes: !0 }),
                    },
                    5: {
                        label: (0, l.jsx)($, { text: P.intl.string(P.t["ufhQC+"]) }),
                        column1: (0, l.jsx)(J, { text: (0, g.EJ)(Y.PremiumTypes.TIER_0) }),
                        column2: (0, l.jsx)(J, { text: (0, g.EJ)(Y.PremiumTypes.TIER_2) }),
                    },
                    6: {
                        label: (0, l.jsx)($, { text: P.intl.string(P.t.VwxlMw) }),
                        column1: (0, l.jsx)(Q, { includes: !1 }),
                        column2: (0, l.jsx)(J, { text: P.intl.string(P.t.XdN6KU) }),
                    },
                    7: {
                        label: (0, l.jsx)($, {
                            text: P.intl.formatToPlainString(P.t.nyhDpw, {
                                numBoosts: Y.M4,
                                percentageOff: (0, z.l9)(W.default.locale, Y.oX / 100),
                            }),
                        }),
                        column1: (0, l.jsx)(Q, { includes: !1 }),
                        column2: (0, l.jsx)(Q, { includes: !0 }),
                    },
                    8: {
                        label: (0, l.jsx)($, { text: P.intl.string(P.t.tFbcuM) }),
                        column1: (0, l.jsx)(Q, { includes: !1 }),
                        column2: (0, l.jsx)(Q, { includes: !0 }),
                    },
                    9: {
                        label: (0, l.jsx)($, { text: P.intl.string(K.default["86GtGH"]) }),
                        column1: (0, l.jsx)(Q, { includes: !1 }),
                        column2: (0, l.jsx)(Q, { includes: !0 }),
                    },
                    10: {
                        label: (0, l.jsx)($, { text: P.intl.string(P.t["aR/zTk"]) }),
                        column1: (0, l.jsx)(Q, { includes: !1 }),
                        column2: (0, l.jsx)(Q, { includes: !0 }),
                    },
                    11: {
                        label: (0, l.jsx)($, { text: P.intl.string(P.t.IzrZHz) }),
                        column1: (0, l.jsx)(Q, { includes: !1 }),
                        column2: (0, l.jsx)(Q, { includes: !0 }),
                    },
                    12: {
                        label: (0, l.jsx)($, { text: P.intl.string(P.t["HwNg/Z"]) }),
                        column1: (0, l.jsx)(Q, { includes: !1 }),
                        column2: (0, l.jsx)(Q, { includes: !0 }),
                    },
                    13: {
                        label: (0, l.jsx)($, { text: P.intl.string(P.t["y+HHL9"]) }),
                        column1: (0, l.jsx)(Q, { includes: !0 }),
                        column2: (0, l.jsx)(Q, { includes: !0 }),
                    },
                    14: {
                        label: (0, l.jsx)($, { text: P.intl.string(P.t.qQxxVc) }),
                        column1: (0, l.jsx)(Q, { includes: !0 }),
                        column2: (0, l.jsx)(Q, { includes: !0 }),
                    },
                    15: {
                        label: (0, l.jsx)($, { text: P.intl.string(P.t.xi0NBE) }),
                        column1: (0, l.jsx)(Q, { includes: !1 }),
                        column2: (0, l.jsx)(Q, { includes: !0 }),
                        withBottomBorder: !0,
                    },
                    16: {
                        label: (0, l.jsx)($, { text: P.intl.string(P.t.MfsUHm) }),
                        column1: (0, l.jsx)(Q, { includes: !1 }),
                        column2: (0, l.jsx)(Q, { includes: !0 }),
                    },
                    22: {
                        label: (0, l.jsx)($, { text: P.intl.string(P.t["A+0H1f"]) }),
                        column1: (0, l.jsx)(Q, { includes: !1 }),
                        column2: (0, l.jsx)(Q, { includes: !0 }),
                    },
                    17: {
                        label: (0, l.jsx)($, { text: P.intl.string(P.t["il8+nC"]) }),
                        column1: (0, l.jsx)(Q, { includes: !1 }),
                        column2: (0, l.jsx)(Q, { includes: !0 }),
                    },
                    18: {
                        label: (0, l.jsx)($, { text: P.intl.formatToPlainString(P.t["8crdzJ"], { maxChars: Z.CS1 }) }),
                        column1: (0, l.jsx)(Q, { includes: !1 }),
                        column2: (0, l.jsx)(Q, { includes: !0 }),
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
                        label: (0, l.jsx)($, { text: P.intl.string(P.t["93xPy3"]) }),
                        column1: (0, l.jsx)(Q, { includes: !1 }),
                        column2: (0, l.jsx)(Q, { includes: !0 }),
                        withBottomBorder: !0,
                    },
                    24: {
                        label: (0, l.jsx)($, { text: P.intl.string(P.t["5BJqNF"]) }),
                        column1: (0, l.jsx)(Q, { includes: !1 }),
                        column2: (0, l.jsx)(Q, { includes: !0 }),
                        withBottomBorder: !1,
                    },
                }),
                (r = t === Y.xc.FP_ONLY),
                [
                    s[0],
                    s[1],
                    s[2],
                    s[3],
                    s[4],
                    s[5],
                    s[6],
                    ...(r ? [] : [s[7]]),
                    s[8],
                    s[9],
                    s[10],
                    s[11],
                    s[12],
                    ...(r ? [] : [s[13]]),
                    s[14],
                    s[15],
                    s[16],
                    s[17],
                    s[18],
                    s[23],
                    s[24],
                ]),
            ej = (0, f.cg)();
        if (!O || !L) return null;
        let eh = {
            label: (0, l.jsx)(d.D, {
                className: q.__invalid_textColor,
                variant: "heading-lg/extrabold",
                children: P.intl.string(P.t.ED4UVD),
            }),
            column1: (0, l.jsx)(et, { premiumType: Y.PremiumTypes.TIER_0, isPremiumGroup: H }),
            column2: (0, l.jsx)(et, { premiumType: Y.PremiumTypes.TIER_2, isPremiumGroup: H }),
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
                          er === Y.pe.TIER_2 || ej
                              ? (0, l.jsx)(G.A, {
                                    className: q.x6,
                                    subscriptionTier: Y.pe.TIER_0,
                                    showIcon: !1,
                                    look: c.pR.OUTLINED,
                                    color: B ? c.XD.BRAND : c.XD.WHITE,
                                })
                              : (0, l.jsx)(G.A, { className: q.x6, subscriptionTier: Y.pe.TIER_0, showIcon: !1 }),
                          en === Y.PremiumTypes.TIER_2 || null != er
                              ? null
                              : (0, l.jsx)(D.A, { className: q.x6, subscriptionTier: Y.pe.TIER_0 }),
                      ],
                  }),
                  column2: (0, l.jsxs)(l.Fragment, {
                      children: [
                          er === Y.pe.TIER_0
                              ? (0, l.jsx)(G.A, {
                                    className: q.x6,
                                    subscriptionTier: Y.pe.TIER_2,
                                    showIcon: !1,
                                    look: c.pR.OUTLINED,
                                    color: B ? c.XD.BRAND : c.XD.WHITE,
                                })
                              : (0, l.jsx)(G.A, {
                                    className: q.x6,
                                    subscriptionTier: Y.pe.TIER_2,
                                    showIcon: !1,
                                    hasActivePromotion: ej,
                                }),
                          en === Y.PremiumTypes.TIER_0 || null != er
                              ? null
                              : (0, l.jsx)(D.A, { className: q.x6, subscriptionTier: Y.pe.TIER_2 }),
                      ],
                  }),
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: null == er,
              }),
            (R = y
                ? null
                : null != er || null != en
                  ? (0, l.jsx)(F.HU, {
                        text: null != er ? P.intl.string(P.t.IBYG5U) : P.intl.string(P.t.ce1v3V),
                        className: q.ls,
                        colorOptions:
                            er === Y.pe.TIER_0
                                ? B
                                    ? F.at.PREMIUM_TIER_0_GRADIENT_FILL
                                    : F.at.PREMIUM_TIER_0_WHITE_FILL
                                : B
                                  ? V
                                      ? F.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      : F.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                                  : F.at.PREMIUM_TIER_2_WHITE_FILL,
                    })
                  : ej
                    ? (0, l.jsx)(X, {})
                    : (0, l.jsx)(ee, {}));
        let e_ = er === Y.pe.TIER_0 || en === Y.PremiumTypes.TIER_0 || M === Y.PremiumTypes.TIER_0;
        return (0, l.jsx)(m.f5, {
            value: b,
            children: (0, l.jsxs)("div", {
                className: n()(q.zr, T),
                "data-testid": "v2-marketing-page-comparison-table",
                children: [
                    (0, l.jsx)(d.D, {
                        className: n()(q.Qw, q.__invalid_textColor),
                        variant: "heading-xxl/extrabold",
                        children: N ?? P.intl.string(P.t.FIbMh9),
                    }),
                    H && (0, l.jsx)(S, { premiumGroupRole: k.premiumGroupRole, className: q.vg }),
                    (0, l.jsxs)("div", {
                        className: q.wY,
                        children: [
                            (0, l.jsx)("div", {
                                className: n()(v, { [q.A9]: e_, [q.ce]: !e_ && !H }),
                                children: !e_ && R,
                            }),
                            (0, l.jsxs)("table", {
                                className: q.tp,
                                children: [
                                    (0, l.jsx)("thead", { children: (0, l.jsx)(es, { ...eh }) }),
                                    (0, l.jsx)("tbody", {
                                        children: ep.map((e, t) => (0, i.createElement)(el, { ...e, key: t })),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
