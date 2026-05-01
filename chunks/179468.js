s.d(t, { A: () => ei }), s(321073);
var l = s(627968),
    i = s(64700),
    n = s(503698),
    a = s.n(n),
    r = s(17928),
    c = s(462887),
    o = s(862482),
    d = s(534514),
    u = s(736653),
    m = s(793574),
    x = s(688810),
    p = s(531260),
    h = s(160946),
    g = s(287809),
    j = s(166403),
    f = s(927578),
    N = s(40185),
    A = s(89366),
    _ = s(422936),
    C = s(234419),
    E = s(331322),
    I = s(508770),
    v = s(834730),
    R = s(441574),
    T = s(97352),
    b = s(580630),
    y = s(427262),
    M = s(622017),
    S = s(113090),
    P = s(88001),
    D = s(466919),
    O = s(985018),
    w = s(217899);
function G(e) {
    let { className: t, premiumGroupRole: s } = e,
        i = ((e, t) => {
            let s,
                l = (function () {
                    let { useCachedData: e = !0, fetch: t = !0 } =
                            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { premiumGroupMembership: s } = (0, S.A)({ useCachedData: e, fetch: t }),
                        { premiumGroupMembers: l } = (0, M.A)(s?.subscriptionId ?? null, {
                            useCachedData: e,
                            fetch: t,
                        });
                    return l?.primary != null ? (0, y.$3)(l?.primary) : null;
                })({ useCachedData: !0, fetch: e === R.qT.MEMBER }),
                i = (0, r.bG)([j.A], () => j.A.getPremiumGroupSubscription());
            return e === R.qT.UNSPECIFIED
                ? null
                : {
                      subheaderString:
                          null ==
                          (s =
                              e === R.qT.PRIMARY
                                  ? ((e) => {
                                        if (null == e) return null;
                                        let t = e.planIdFromItems;
                                        if (null == t) return null;
                                        let s = T.A.get(t);
                                        if (null == s) return null;
                                        let l = f.Ay.getPrice(t),
                                            i = (0, b.$g)(l.amount, l.currency),
                                            n = s.interval,
                                            a = s.intervalCount;
                                        return (0, b.CE)(i, n, a);
                                    })(i)
                                  : null == l
                                    ? null
                                    : O.intl.format(D.default.Nu9LNm, {
                                          primaryName: l,
                                          premiumGroupProductName: (0, P.DP)(),
                                      }))
                              ? "..."
                              : s,
                      bodyString:
                          e === R.qT.PRIMARY
                              ? O.intl.format(D.default["+R/K74"], {
                                    helpCenterLink: P.TE,
                                    premiumGroupProductName: (0, P.DP)(),
                                })
                              : O.intl.format(t ? D.default["xF+upx"] : D.default.qqfnOm, { helpCenterLink: P.TE }),
                  };
        })(s, !0);
    if (null == i) return null;
    let { subheaderString: n, bodyString: c } = i;
    return (0, l.jsxs)("div", {
        className: a()(w.kL, t),
        children: [
            (0, l.jsxs)(E.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                className: w.wx,
                children: [
                    (0, l.jsx)(d.D, { variant: "display-md", className: w.Ss, children: (0, P.DP)() }),
                    (0, l.jsx)(I.E, { type: "beta", variant: "expressive" }),
                ],
            }),
            (0, l.jsx)(v.E, { variant: "text-md/medium", className: w.m_, color: "text-default", children: n }),
            (0, l.jsx)(v.E, { variant: "text-md/medium", color: "text-default", children: c }),
        ],
    });
}
var L = s(194509),
    k = s(396375),
    U = s(511484),
    B = s(774774),
    F = s(231265),
    H = s(933832),
    z = s(140735),
    V = s(789645),
    K = s(773669),
    W = s(788868),
    Y = s(652215),
    Z = s(864386),
    Q = s(427227);
let X = (e) => {
        let { text: t, badge: s, variant: i } = e;
        return (0, l.jsxs)(v.E, {
            color: "text-default",
            variant: null != i ? i : "text-sm/normal",
            children: [t, " ", s],
        });
    },
    J = (e) => {
        let { text: t, variant: s } = e;
        return (0, l.jsx)(v.E, { color: "text-strong", variant: null != s ? s : "text-md/semibold", children: t });
    },
    q = (e) => {
        let { includes: t } = e;
        return t
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(H.A, { size: "md", color: "currentColor", className: Q.$8, "aria-hidden": !0 }),
                      (0, l.jsx)(z.A, { children: O.intl.string(O.t["tq+6t/"]) }),
                  ],
              })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(V.P, { size: "md", color: "currentColor", className: Q.ut, "aria-hidden": !0 }),
                      (0, l.jsx)(z.A, { children: O.intl.string(O.t.l4qZrp) }),
                  ],
              });
    },
    $ = () => {
        let e = (0, F._)();
        return (0, l.jsx)(B.HU, { text: e, className: Q.QR, colorOptions: B.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL });
    },
    ee = () =>
        (0, l.jsx)("div", {
            className: Q.Wm,
            children: (0, l.jsx)(d.D, {
                className: Q.uC,
                variant: "heading-deprecated-12/extrabold",
                children: O.intl.string(O.t["o/oRJB"]),
            }),
        }),
    et = (e) => {
        let t,
            { premiumType: s, isPremiumGroup: i } = e,
            n = (0, u.Ay)();
        if (i)
            if (s === W.PremiumTypes.TIER_0)
                return (0, l.jsx)(d.D, { variant: "display-md", className: Q.dW, children: O.intl.string(O.t.tUbSDK) });
            else
                return (0, l.jsx)(d.D, { variant: "display-md", className: Q.dW, children: O.intl.string(O.t.Ipxkog) });
        t =
            s === W.PremiumTypes.TIER_0
                ? (0, c.M)(n)
                    ? "/assets/8b472f9ec50bc47c.png"
                    : "/assets/24c4ba2719f9bbc8.png"
                : (0, c.M)(n)
                  ? "/assets/3638711ae67443ff.png"
                  : "/assets/a6bb84f7256073af.png";
        let a = (0, f.Dd)(s);
        return (0, l.jsx)("img", { src: t, className: Q.wm, alt: a });
    },
    es = (e) => {
        let { label: t, column1: s, column2: i } = e;
        return (0, l.jsxs)("tr", {
            className: a()(Q.U1, Q.YI, Q.Y9),
            children: [
                (0, l.jsx)("th", { scope: "col", className: Q.Cr, children: t }),
                (0, l.jsx)("th", { scope: "col", className: Q.e4, children: s }),
                (0, l.jsx)("th", { scope: "col", className: a()(Q.e4, Q.Y9), children: i }),
            ],
        });
    },
    el = (e) => {
        let {
            label: t,
            column1: s,
            column2: i,
            withBottomBorder: n = !0,
            withTopBorderRadius: r = !1,
            withBottomBorderRadius: c = !1,
            buttonsRow: o = !1,
            shortRow: d = !1,
        } = e;
        return (0, l.jsxs)("tr", {
            className: a()(Q.nM, { [Q.EE]: o, [Q.Y9]: r, [Q.kS]: c, [Q.YI]: n, [Q.vs]: d }),
            children: [
                (0, l.jsx)("th", { scope: "row", className: Q.nx, children: t }),
                (0, l.jsx)("td", { className: a()(Q.Hn, { [Q.SD]: o }), children: s }),
                (0, l.jsx)("td", { className: a()(Q.Hn, { [Q.Y9]: r, [Q.kS]: c, [Q.SD]: o }), children: i }),
            ],
        });
    },
    ei = (e) => {
        var t;
        let s,
            n,
            E,
            {
                className: I,
                hideCTAs: v = !1,
                headingOverride: R,
                hidePill: T = !1,
                selectedPlanColumnClassName: y,
                selectedPlanTier: M = W.PremiumTypes.TIER_2,
            } = e,
            { analyticsLocations: S } = (0, x.Ay)(m.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            P = (0, r.bG)([j.A], () => j.A.hasFetchedSubscriptions()),
            D = (0, h.Y)(W.T7),
            w = (0, u.Ay)(),
            F = (0, c.q)(w),
            H = (0, r.bG)([g.default], () => g.default.getCurrentUser()),
            z = null != H && H.isPremiumWithPremiumGroup(),
            V = (0, f.YE)(H, W.PremiumTypes.TIER_2),
            ei = (0, C.V)(),
            en = ei?.subscription_trial?.sku_id,
            ea = (0, A.Us)(),
            er = (0, _.O)(),
            ec = null != er && (0, U.U9)(er, W.pe.TIER_2),
            eo = (0, U.N1)(W.gD.PREMIUM_MONTH_TIER_2),
            ed = `${eo}/${(0, f.FJ)(W.WT.MONTH)}`,
            eu = (0, f.JM)(W.gD.PREMIUM_MONTH_TIER_0),
            em = (0, f.JM)(W.gD.PREMIUM_MONTH_TIER_2),
            ex =
                ((t = (0, p.A)().fractionalState),
                (s = {
                    0: {
                        label: (0, l.jsx)(X, { text: O.intl.string(O.t["09yRK3"]) }),
                        column1: (0, l.jsx)(J, { text: f.Ay.formatPriceString(eu, W.WT.MONTH) }),
                        column2: (0, l.jsx)(J, { text: ec ? ed : f.Ay.formatPriceString(em, W.WT.MONTH) }),
                        withBottomBorder: !0,
                    },
                    1: {
                        label: (0, l.jsx)(X, { text: O.intl.string(O.t.vaDeDV) }),
                        column1: (0, l.jsx)(q, { includes: !0 }),
                        column2: (0, l.jsx)(q, { includes: !0 }),
                    },
                    2: {
                        label: (0, l.jsx)(X, { text: O.intl.string(O.t.DmfiwT) }),
                        column1: (0, l.jsx)(q, { includes: !0 }),
                        column2: (0, l.jsx)(q, { includes: !0 }),
                    },
                    3: {
                        label: (0, l.jsx)(X, { text: O.intl.string(O.t.OuItFi) }),
                        column1: (0, l.jsx)(q, { includes: !0 }),
                        column2: (0, l.jsx)(q, { includes: !0 }),
                    },
                    4: {
                        label: (0, l.jsx)(X, { text: O.intl.string(O.t["9kRJS8"]) }),
                        column1: (0, l.jsx)(q, { includes: !0 }),
                        column2: (0, l.jsx)(q, { includes: !0 }),
                    },
                    5: {
                        label: (0, l.jsx)(X, { text: O.intl.string(O.t["ufhQC+"]) }),
                        column1: (0, l.jsx)(J, { text: (0, f.EJ)(W.PremiumTypes.TIER_0) }),
                        column2: (0, l.jsx)(J, { text: (0, f.EJ)(W.PremiumTypes.TIER_2) }),
                    },
                    6: {
                        label: (0, l.jsx)(X, { text: O.intl.string(O.t.VwxlMw) }),
                        column1: (0, l.jsx)(q, { includes: !1 }),
                        column2: (0, l.jsx)(J, { text: O.intl.string(O.t.XdN6KU) }),
                    },
                    7: {
                        label: (0, l.jsx)(X, {
                            text: O.intl.formatToPlainString(O.t.nyhDpw, {
                                numBoosts: W.M4,
                                percentageOff: (0, b.l9)(K.default.locale, W.oX / 100),
                            }),
                        }),
                        column1: (0, l.jsx)(q, { includes: !1 }),
                        column2: (0, l.jsx)(q, { includes: !0 }),
                    },
                    8: {
                        label: (0, l.jsx)(X, { text: O.intl.string(O.t.tFbcuM) }),
                        column1: (0, l.jsx)(q, { includes: !1 }),
                        column2: (0, l.jsx)(q, { includes: !0 }),
                    },
                    9: {
                        label: (0, l.jsx)(X, { text: O.intl.string(Z.default["86GtGH"]) }),
                        column1: (0, l.jsx)(q, { includes: !1 }),
                        column2: (0, l.jsx)(q, { includes: !0 }),
                    },
                    10: {
                        label: (0, l.jsx)(X, { text: O.intl.string(O.t["aR/zTk"]) }),
                        column1: (0, l.jsx)(q, { includes: !1 }),
                        column2: (0, l.jsx)(q, { includes: !0 }),
                    },
                    11: {
                        label: (0, l.jsx)(X, { text: O.intl.string(O.t.IzrZHz) }),
                        column1: (0, l.jsx)(q, { includes: !1 }),
                        column2: (0, l.jsx)(q, { includes: !0 }),
                    },
                    12: {
                        label: (0, l.jsx)(X, { text: O.intl.string(O.t["HwNg/Z"]) }),
                        column1: (0, l.jsx)(q, { includes: !1 }),
                        column2: (0, l.jsx)(q, { includes: !0 }),
                    },
                    13: {
                        label: (0, l.jsx)(X, { text: O.intl.string(O.t["y+HHL9"]) }),
                        column1: (0, l.jsx)(q, { includes: !0 }),
                        column2: (0, l.jsx)(q, { includes: !0 }),
                    },
                    14: {
                        label: (0, l.jsx)(X, { text: O.intl.string(O.t.qQxxVc) }),
                        column1: (0, l.jsx)(q, { includes: !0 }),
                        column2: (0, l.jsx)(q, { includes: !0 }),
                    },
                    15: {
                        label: (0, l.jsx)(X, { text: O.intl.string(O.t.xi0NBE) }),
                        column1: (0, l.jsx)(q, { includes: !1 }),
                        column2: (0, l.jsx)(q, { includes: !0 }),
                        withBottomBorder: !0,
                    },
                    16: {
                        label: (0, l.jsx)(X, { text: O.intl.string(O.t.MfsUHm) }),
                        column1: (0, l.jsx)(q, { includes: !1 }),
                        column2: (0, l.jsx)(q, { includes: !0 }),
                    },
                    22: {
                        label: (0, l.jsx)(X, { text: O.intl.string(O.t["A+0H1f"]) }),
                        column1: (0, l.jsx)(q, { includes: !1 }),
                        column2: (0, l.jsx)(q, { includes: !0 }),
                    },
                    17: {
                        label: (0, l.jsx)(X, { text: O.intl.string(O.t["il8+nC"]) }),
                        column1: (0, l.jsx)(q, { includes: !1 }),
                        column2: (0, l.jsx)(q, { includes: !0 }),
                    },
                    18: {
                        label: (0, l.jsx)(X, { text: O.intl.formatToPlainString(O.t["8crdzJ"], { maxChars: Y.CS1 }) }),
                        column1: (0, l.jsx)(q, { includes: !1 }),
                        column2: (0, l.jsx)(q, { includes: !0 }),
                        withBottomBorder: !0,
                    },
                    19: {
                        label: (0, l.jsx)(d.D, {
                            className: Q.__invalid_textColor,
                            variant: "display-sm",
                            children: "Make Discord Yours",
                        }),
                        column1: null,
                        column2: null,
                        withBottomBorder: !1,
                    },
                    20: {
                        label: (0, l.jsx)(d.D, {
                            className: Q.__invalid_textColor,
                            variant: "display-sm",
                            children: "Enjoy an Upgraded Discord",
                        }),
                        column1: null,
                        column2: null,
                        withBottomBorder: !1,
                    },
                    21: {
                        label: (0, l.jsx)(d.D, {
                            className: Q.__invalid_textColor,
                            variant: "display-sm",
                            children: "Show Up the Way You Want",
                        }),
                        column1: null,
                        column2: null,
                        withBottomBorder: !1,
                    },
                    23: {
                        label: (0, l.jsx)(X, { text: O.intl.string(O.t["93xPy3"]) }),
                        column1: (0, l.jsx)(q, { includes: !1 }),
                        column2: (0, l.jsx)(q, { includes: !0 }),
                        withBottomBorder: !0,
                    },
                    24: {
                        label: (0, l.jsx)(X, { text: O.intl.string(O.t["5BJqNF"]) }),
                        column1: (0, l.jsx)(q, { includes: !1 }),
                        column2: (0, l.jsx)(q, { includes: !0 }),
                        withBottomBorder: !1,
                    },
                }),
                (n = t === W.xc.FP_ONLY),
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
            ep = (0, N.cg)();
        if (!P || !D) return null;
        let eh = {
            label: (0, l.jsx)(d.D, {
                className: Q.__invalid_textColor,
                variant: "heading-lg/extrabold",
                children: O.intl.string(O.t.ED4UVD),
            }),
            column1: (0, l.jsx)(et, { premiumType: W.PremiumTypes.TIER_0, isPremiumGroup: z }),
            column2: (0, l.jsx)(et, { premiumType: W.PremiumTypes.TIER_2, isPremiumGroup: z }),
        };
        v
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
                          en === W.pe.TIER_2 || ep
                              ? (0, l.jsx)(k.A, {
                                    className: Q.x6,
                                    subscriptionTier: W.pe.TIER_0,
                                    showIcon: !1,
                                    look: o.pR.OUTLINED,
                                    color: F ? o.XD.BRAND : o.XD.WHITE,
                                })
                              : (0, l.jsx)(k.A, { className: Q.x6, subscriptionTier: W.pe.TIER_0, showIcon: !1 }),
                          ea === W.PremiumTypes.TIER_2 || null != en
                              ? null
                              : (0, l.jsx)(L.A, { className: Q.x6, subscriptionTier: W.pe.TIER_0 }),
                      ],
                  }),
                  column2: (0, l.jsxs)(l.Fragment, {
                      children: [
                          en === W.pe.TIER_0
                              ? (0, l.jsx)(k.A, {
                                    className: Q.x6,
                                    subscriptionTier: W.pe.TIER_2,
                                    showIcon: !1,
                                    look: o.pR.OUTLINED,
                                    color: F ? o.XD.BRAND : o.XD.WHITE,
                                })
                              : (0, l.jsx)(k.A, {
                                    className: Q.x6,
                                    subscriptionTier: W.pe.TIER_2,
                                    showIcon: !1,
                                    hasActivePromotion: ep,
                                }),
                          ea === W.PremiumTypes.TIER_0 || null != en
                              ? null
                              : (0, l.jsx)(L.A, { className: Q.x6, subscriptionTier: W.pe.TIER_2 }),
                      ],
                  }),
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: null == en,
              }),
            (E = T
                ? null
                : null != en || null != ea
                  ? (0, l.jsx)(B.HU, {
                        text: null != en ? O.intl.string(O.t.IBYG5U) : O.intl.string(O.t.ce1v3V),
                        className: Q.ls,
                        colorOptions:
                            en === W.pe.TIER_0
                                ? F
                                    ? B.at.PREMIUM_TIER_0_GRADIENT_FILL
                                    : B.at.PREMIUM_TIER_0_WHITE_FILL
                                : F
                                  ? V
                                      ? B.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      : B.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                                  : B.at.PREMIUM_TIER_2_WHITE_FILL,
                    })
                  : ep
                    ? (0, l.jsx)($, {})
                    : (0, l.jsx)(ee, {}));
        let eg = en === W.pe.TIER_0 || ea === W.PremiumTypes.TIER_0 || M === W.PremiumTypes.TIER_0;
        return (0, l.jsx)(x.f5, {
            value: S,
            children: (0, l.jsxs)("div", {
                className: a()(Q.zr, I),
                "data-testid": "v2-marketing-page-comparison-table",
                children: [
                    (0, l.jsx)(d.D, {
                        className: a()(Q.Qw, Q.__invalid_textColor),
                        variant: "heading-xxl/extrabold",
                        children: R ?? O.intl.string(O.t.FIbMh9),
                    }),
                    z && (0, l.jsx)(G, { premiumGroupRole: H.premiumGroupRole, className: Q.vg }),
                    (0, l.jsxs)("div", {
                        className: Q.wY,
                        children: [
                            (0, l.jsx)("div", {
                                className: a()(y, { [Q.A9]: eg, [Q.ce]: !eg && !z }),
                                children: !eg && E,
                            }),
                            (0, l.jsxs)("table", {
                                className: Q.tp,
                                children: [
                                    (0, l.jsx)("thead", { children: (0, l.jsx)(es, { ...eh }) }),
                                    (0, l.jsx)("tbody", {
                                        children: ex.map((e, t) => (0, i.createElement)(el, { ...e, key: t })),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
