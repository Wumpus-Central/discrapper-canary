s.d(t, { A: () => er }), s(321073);
var a = s(627968),
    r = s(64700),
    i = s(503698),
    n = s.n(i),
    l = s(17928),
    o = s(462887),
    c = s(862482),
    d = s(534514),
    m = s(736653),
    u = s(793574),
    _ = s(688810),
    x = s(531260),
    p = s(160946),
    g = s(287809),
    h = s(166403),
    f = s(927578),
    C = s(40185),
    b = s(89366),
    j = s(422936),
    A = s(234419),
    N = s(331322),
    I = s(508770),
    T = s(834730),
    E = s(441574),
    v = s(97352),
    R = s(580630),
    M = s(427262),
    S = s(622017),
    y = s(113090),
    P = s(88001),
    k = s(466919),
    w = s(985018),
    B = s(217899);
function G(e) {
    let { className: t, premiumGroupRole: s } = e,
        r = ((e, t) => {
            let s,
                a = (function () {
                    let { useCachedData: e = !0, fetch: t = !0 } =
                            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { premiumGroupMembership: s } = (0, y.A)({ useCachedData: e, fetch: t }),
                        { premiumGroupMembers: a } = (0, S.A)(s?.subscriptionId ?? null, {
                            useCachedData: e,
                            fetch: t,
                        });
                    return a?.primary != null ? (0, M.$3)(a?.primary) : null;
                })({ useCachedData: !0, fetch: e === E.qT.MEMBER }),
                r = (0, l.bG)([h.A], () => h.A.getPremiumGroupSubscription());
            return e === E.qT.UNSPECIFIED
                ? null
                : {
                      subheaderString:
                          null ==
                          (s =
                              e === E.qT.PRIMARY
                                  ? ((e) => {
                                        if (null == e) return null;
                                        let t = e.planIdFromItems;
                                        if (null == t) return null;
                                        let s = v.A.get(t);
                                        if (null == s) return null;
                                        let a = f.Ay.getPrice(t),
                                            r = (0, R.$g)(a.amount, a.currency),
                                            i = s.interval,
                                            n = s.intervalCount;
                                        return (0, R.CE)(r, i, n);
                                    })(r)
                                  : null == a
                                    ? null
                                    : w.intl.format(k.default.Nu9LNm, {
                                          primaryName: a,
                                          premiumGroupProductName: (0, P.DP)(),
                                      }))
                              ? "..."
                              : s,
                      bodyString:
                          e === E.qT.PRIMARY
                              ? w.intl.format(k.default["+R/K74"], {
                                    helpCenterLink: P.TE,
                                    premiumGroupProductName: (0, P.DP)(),
                                })
                              : w.intl.format(t ? k.default["xF+upx"] : k.default.qqfnOm, { helpCenterLink: P.TE }),
                  };
        })(s, !0);
    if (null == r) return null;
    let { subheaderString: i, bodyString: o } = r;
    return (0, a.jsxs)("div", {
        className: n()(B.kL, t),
        children: [
            (0, a.jsxs)(N.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                className: B.wx,
                children: [
                    (0, a.jsx)(d.D, { variant: "display-md", className: B.Ss, children: (0, P.DP)() }),
                    (0, a.jsx)(I.E, { type: "beta", variant: "expressive" }),
                ],
            }),
            (0, a.jsx)(T.E, { variant: "text-md/medium", className: B.m_, color: "text-default", children: i }),
            (0, a.jsx)(T.E, { variant: "text-md/medium", color: "text-default", children: o }),
        ],
    });
}
var O = s(194509),
    D = s(396375),
    L = s(511484),
    H = s(774774),
    U = s(231265),
    F = s(933832),
    W = s(140735),
    z = s(789645),
    V = s(773669),
    K = s(788868),
    Q = s(652215),
    Z = s(864386),
    Y = s(427227);
let J = (e) => {
        let { text: t, badge: s, variant: r } = e;
        return (0, a.jsxs)(T.E, {
            color: "text-default",
            variant: null != r ? r : "text-sm/normal",
            children: [t, " ", s],
        });
    },
    q = (e) => {
        let { text: t, variant: s } = e;
        return (0, a.jsx)(T.E, { color: "text-strong", variant: null != s ? s : "text-md/semibold", children: t });
    },
    X = (e) => {
        let { includes: t } = e;
        return t
            ? (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(F.A, { size: "md", color: "currentColor", className: Y.$8, "aria-hidden": !0 }),
                      (0, a.jsx)(W.A, { children: w.intl.string(w.t["tq+6t/"]) }),
                  ],
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(z.P, { size: "md", color: "currentColor", className: Y.ut, "aria-hidden": !0 }),
                      (0, a.jsx)(W.A, { children: w.intl.string(w.t.l4qZrp) }),
                  ],
              });
    },
    $ = () => {
        let e = (0, U._)();
        return (0, a.jsx)(H.HU, { text: e, className: Y.QR, colorOptions: H.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL });
    },
    ee = () =>
        (0, a.jsx)("div", {
            className: Y.Wm,
            children: (0, a.jsx)(d.D, {
                className: Y.uC,
                variant: "heading-deprecated-12/extrabold",
                children: w.intl.string(w.t["o/oRJB"]),
            }),
        }),
    et = (e) => {
        let t,
            { premiumType: s, isPremiumGroup: r } = e,
            i = (0, m.Ay)();
        if (r)
            if (s === K.PremiumTypes.TIER_0)
                return (0, a.jsx)(d.D, { variant: "display-md", className: Y.dW, children: w.intl.string(w.t.tUbSDK) });
            else
                return (0, a.jsx)(d.D, { variant: "display-md", className: Y.dW, children: w.intl.string(w.t.Ipxkog) });
        t =
            s === K.PremiumTypes.TIER_0
                ? (0, o.M)(i)
                    ? "/assets/8b472f9ec50bc47c.png"
                    : "/assets/24c4ba2719f9bbc8.png"
                : (0, o.M)(i)
                  ? "/assets/3638711ae67443ff.png"
                  : "/assets/a6bb84f7256073af.png";
        let n = (0, f.Dd)(s);
        return (0, a.jsx)("img", { src: t, className: Y.wm, alt: n });
    },
    es = (e) => {
        let { label: t, column1: s, column2: r } = e;
        return (0, a.jsxs)("tr", {
            className: n()(Y.U1, Y.YI, Y.Y9),
            children: [
                (0, a.jsx)("th", { scope: "col", className: Y.Cr, children: t }),
                (0, a.jsx)("th", { scope: "col", className: Y.e4, children: s }),
                (0, a.jsx)("th", { scope: "col", className: n()(Y.e4, Y.Y9), children: r }),
            ],
        });
    },
    ea = (e) => {
        let {
            label: t,
            column1: s,
            column2: r,
            withBottomBorder: i = !0,
            withTopBorderRadius: l = !1,
            withBottomBorderRadius: o = !1,
            buttonsRow: c = !1,
            shortRow: d = !1,
        } = e;
        return (0, a.jsxs)("tr", {
            className: n()(Y.nM, { [Y.EE]: c, [Y.Y9]: l, [Y.kS]: o, [Y.YI]: i, [Y.vs]: d }),
            children: [
                (0, a.jsx)("th", { scope: "row", className: Y.nx, children: t }),
                (0, a.jsx)("td", { className: n()(Y.Hn, { [Y.SD]: c }), children: s }),
                (0, a.jsx)("td", { className: n()(Y.Hn, { [Y.Y9]: l, [Y.kS]: o, [Y.SD]: c }), children: r }),
            ],
        });
    },
    er = (e) => {
        var t;
        let s,
            i,
            N,
            {
                className: I,
                hideCTAs: T = !1,
                headingOverride: E,
                hidePill: v = !1,
                selectedPlanColumnClassName: M,
                selectedPlanTier: S = K.PremiumTypes.TIER_2,
            } = e,
            { analyticsLocations: y } = (0, _.Ay)(u.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            P = (0, l.bG)([h.A], () => h.A.hasFetchedSubscriptions()),
            k = (0, p.Y)(K.T7),
            B = (0, m.Ay)(),
            U = (0, o.q)(B),
            F = (0, l.bG)([g.default], () => g.default.getCurrentUser()),
            W = null != F && F.isPremiumWithPremiumGroup(),
            z = (0, f.YE)(F, K.PremiumTypes.TIER_2),
            er = (0, A.V)(),
            ei = er?.subscription_trial?.sku_id,
            en = (0, b.Us)(),
            el = (0, j.O)(),
            eo = null != el && (0, L.U9)(el, K.pe.TIER_2),
            ec = (0, L.N1)(K.gD.PREMIUM_MONTH_TIER_2),
            ed = `${ec}/${(0, f.FJ)(K.WT.MONTH)}`,
            em = (0, f.JM)(K.gD.PREMIUM_MONTH_TIER_0),
            eu = (0, f.JM)(K.gD.PREMIUM_MONTH_TIER_2),
            e_ =
                ((t = (0, x.A)().fractionalState),
                (s = {
                    0: {
                        label: (0, a.jsx)(J, { text: w.intl.string(w.t["09yRK3"]) }),
                        column1: (0, a.jsx)(q, { text: f.Ay.formatPriceString(em, K.WT.MONTH) }),
                        column2: (0, a.jsx)(q, { text: eo ? ed : f.Ay.formatPriceString(eu, K.WT.MONTH) }),
                        withBottomBorder: !0,
                    },
                    1: {
                        label: (0, a.jsx)(J, { text: w.intl.string(w.t.vaDeDV) }),
                        column1: (0, a.jsx)(X, { includes: !0 }),
                        column2: (0, a.jsx)(X, { includes: !0 }),
                    },
                    2: {
                        label: (0, a.jsx)(J, { text: w.intl.string(w.t.DmfiwT) }),
                        column1: (0, a.jsx)(X, { includes: !0 }),
                        column2: (0, a.jsx)(X, { includes: !0 }),
                    },
                    3: {
                        label: (0, a.jsx)(J, { text: w.intl.string(w.t.OuItFi) }),
                        column1: (0, a.jsx)(X, { includes: !0 }),
                        column2: (0, a.jsx)(X, { includes: !0 }),
                    },
                    4: {
                        label: (0, a.jsx)(J, { text: w.intl.string(w.t["9kRJS8"]) }),
                        column1: (0, a.jsx)(X, { includes: !0 }),
                        column2: (0, a.jsx)(X, { includes: !0 }),
                    },
                    5: {
                        label: (0, a.jsx)(J, { text: w.intl.string(w.t["ufhQC+"]) }),
                        column1: (0, a.jsx)(q, { text: (0, f.EJ)(K.PremiumTypes.TIER_0) }),
                        column2: (0, a.jsx)(q, { text: (0, f.EJ)(K.PremiumTypes.TIER_2) }),
                    },
                    6: {
                        label: (0, a.jsx)(J, { text: w.intl.string(w.t.VwxlMw) }),
                        column1: (0, a.jsx)(X, { includes: !1 }),
                        column2: (0, a.jsx)(q, { text: w.intl.string(w.t.XdN6KU) }),
                    },
                    7: {
                        label: (0, a.jsx)(J, {
                            text: w.intl.formatToPlainString(w.t.nyhDpw, {
                                numBoosts: K.M4,
                                percentageOff: (0, R.l9)(V.default.locale, K.oX / 100),
                            }),
                        }),
                        column1: (0, a.jsx)(X, { includes: !1 }),
                        column2: (0, a.jsx)(X, { includes: !0 }),
                    },
                    8: {
                        label: (0, a.jsx)(J, { text: w.intl.string(w.t.tFbcuM) }),
                        column1: (0, a.jsx)(X, { includes: !1 }),
                        column2: (0, a.jsx)(X, { includes: !0 }),
                    },
                    9: {
                        label: (0, a.jsx)(J, { text: w.intl.string(Z.default["86GtGH"]) }),
                        column1: (0, a.jsx)(X, { includes: !1 }),
                        column2: (0, a.jsx)(X, { includes: !0 }),
                    },
                    10: {
                        label: (0, a.jsx)(J, { text: w.intl.string(w.t["aR/zTk"]) }),
                        column1: (0, a.jsx)(X, { includes: !1 }),
                        column2: (0, a.jsx)(X, { includes: !0 }),
                    },
                    11: {
                        label: (0, a.jsx)(J, { text: w.intl.string(w.t.IzrZHz) }),
                        column1: (0, a.jsx)(X, { includes: !1 }),
                        column2: (0, a.jsx)(X, { includes: !0 }),
                    },
                    12: {
                        label: (0, a.jsx)(J, { text: w.intl.string(w.t["HwNg/Z"]) }),
                        column1: (0, a.jsx)(X, { includes: !1 }),
                        column2: (0, a.jsx)(X, { includes: !0 }),
                    },
                    13: {
                        label: (0, a.jsx)(J, { text: w.intl.string(w.t["y+HHL9"]) }),
                        column1: (0, a.jsx)(X, { includes: !0 }),
                        column2: (0, a.jsx)(X, { includes: !0 }),
                    },
                    14: {
                        label: (0, a.jsx)(J, { text: w.intl.string(w.t.qQxxVc) }),
                        column1: (0, a.jsx)(X, { includes: !0 }),
                        column2: (0, a.jsx)(X, { includes: !0 }),
                    },
                    15: {
                        label: (0, a.jsx)(J, { text: w.intl.string(w.t.xi0NBE) }),
                        column1: (0, a.jsx)(X, { includes: !1 }),
                        column2: (0, a.jsx)(X, { includes: !0 }),
                        withBottomBorder: !0,
                    },
                    16: {
                        label: (0, a.jsx)(J, { text: w.intl.string(w.t.MfsUHm) }),
                        column1: (0, a.jsx)(X, { includes: !1 }),
                        column2: (0, a.jsx)(X, { includes: !0 }),
                    },
                    22: {
                        label: (0, a.jsx)(J, { text: w.intl.string(w.t["A+0H1f"]) }),
                        column1: (0, a.jsx)(X, { includes: !1 }),
                        column2: (0, a.jsx)(X, { includes: !0 }),
                    },
                    17: {
                        label: (0, a.jsx)(J, { text: w.intl.string(w.t["il8+nC"]) }),
                        column1: (0, a.jsx)(X, { includes: !1 }),
                        column2: (0, a.jsx)(X, { includes: !0 }),
                    },
                    18: {
                        label: (0, a.jsx)(J, { text: w.intl.formatToPlainString(w.t["8crdzJ"], { maxChars: Q.CS1 }) }),
                        column1: (0, a.jsx)(X, { includes: !1 }),
                        column2: (0, a.jsx)(X, { includes: !0 }),
                        withBottomBorder: !0,
                    },
                    19: {
                        label: (0, a.jsx)(d.D, {
                            className: Y.__invalid_textColor,
                            variant: "display-sm",
                            children: "Make Discord Yours",
                        }),
                        column1: null,
                        column2: null,
                        withBottomBorder: !1,
                    },
                    20: {
                        label: (0, a.jsx)(d.D, {
                            className: Y.__invalid_textColor,
                            variant: "display-sm",
                            children: "Enjoy an Upgraded Discord",
                        }),
                        column1: null,
                        column2: null,
                        withBottomBorder: !1,
                    },
                    21: {
                        label: (0, a.jsx)(d.D, {
                            className: Y.__invalid_textColor,
                            variant: "display-sm",
                            children: "Show Up the Way You Want",
                        }),
                        column1: null,
                        column2: null,
                        withBottomBorder: !1,
                    },
                    23: {
                        label: (0, a.jsx)(J, { text: w.intl.string(w.t["93xPy3"]) }),
                        column1: (0, a.jsx)(X, { includes: !1 }),
                        column2: (0, a.jsx)(X, { includes: !0 }),
                        withBottomBorder: !0,
                    },
                    24: {
                        label: (0, a.jsx)(J, { text: w.intl.string(w.t["5BJqNF"]) }),
                        column1: (0, a.jsx)(X, { includes: !1 }),
                        column2: (0, a.jsx)(X, { includes: !0 }),
                        withBottomBorder: !1,
                    },
                }),
                (i = t === K.xc.FP_ONLY),
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
            ex = (0, C.cg)();
        if (!P || !k) return null;
        let ep = {
            label: (0, a.jsx)(d.D, {
                className: Y.__invalid_textColor,
                variant: "heading-lg/extrabold",
                children: w.intl.string(w.t.ED4UVD),
            }),
            column1: (0, a.jsx)(et, { premiumType: K.PremiumTypes.TIER_0, isPremiumGroup: W }),
            column2: (0, a.jsx)(et, { premiumType: K.PremiumTypes.TIER_2, isPremiumGroup: W }),
        };
        T
            ? e_.push({
                  label: null,
                  column1: null,
                  column2: null,
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: !1,
                  shortRow: !0,
              })
            : e_.push({
                  label: null,
                  column1: (0, a.jsxs)(a.Fragment, {
                      children: [
                          ei === K.pe.TIER_2 || ex
                              ? (0, a.jsx)(D.A, {
                                    className: Y.x6,
                                    subscriptionTier: K.pe.TIER_0,
                                    showIcon: !1,
                                    look: c.pR.OUTLINED,
                                    color: U ? c.XD.BRAND : c.XD.WHITE,
                                })
                              : (0, a.jsx)(D.A, { className: Y.x6, subscriptionTier: K.pe.TIER_0, showIcon: !1 }),
                          en === K.PremiumTypes.TIER_2 || null != ei
                              ? null
                              : (0, a.jsx)(O.A, { className: Y.x6, subscriptionTier: K.pe.TIER_0 }),
                      ],
                  }),
                  column2: (0, a.jsxs)(a.Fragment, {
                      children: [
                          ei === K.pe.TIER_0
                              ? (0, a.jsx)(D.A, {
                                    className: Y.x6,
                                    subscriptionTier: K.pe.TIER_2,
                                    showIcon: !1,
                                    look: c.pR.OUTLINED,
                                    color: U ? c.XD.BRAND : c.XD.WHITE,
                                })
                              : (0, a.jsx)(D.A, {
                                    className: Y.x6,
                                    subscriptionTier: K.pe.TIER_2,
                                    showIcon: !1,
                                    hasActivePromotion: ex,
                                }),
                          en === K.PremiumTypes.TIER_0 || null != ei
                              ? null
                              : (0, a.jsx)(O.A, { className: Y.x6, subscriptionTier: K.pe.TIER_2 }),
                      ],
                  }),
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: null == ei,
              }),
            (N = v
                ? null
                : null != ei || null != en
                  ? (0, a.jsx)(H.HU, {
                        text: null != ei ? w.intl.string(w.t.IBYG5U) : w.intl.string(w.t.ce1v3V),
                        className: Y.ls,
                        colorOptions:
                            ei === K.pe.TIER_0
                                ? U
                                    ? H.at.PREMIUM_TIER_0_GRADIENT_FILL
                                    : H.at.PREMIUM_TIER_0_WHITE_FILL
                                : U
                                  ? z
                                      ? H.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      : H.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                                  : H.at.PREMIUM_TIER_2_WHITE_FILL,
                    })
                  : ex
                    ? (0, a.jsx)($, {})
                    : (0, a.jsx)(ee, {}));
        let eg = ei === K.pe.TIER_0 || en === K.PremiumTypes.TIER_0 || S === K.PremiumTypes.TIER_0;
        return (0, a.jsx)(_.f5, {
            value: y,
            children: (0, a.jsxs)("div", {
                className: n()(Y.zr, I),
                "data-testid": "v2-marketing-page-comparison-table",
                children: [
                    (0, a.jsx)(d.D, {
                        className: n()(Y.Qw, Y.__invalid_textColor),
                        variant: "heading-xxl/extrabold",
                        children: E ?? w.intl.string(w.t.FIbMh9),
                    }),
                    W && (0, a.jsx)(G, { premiumGroupRole: F.premiumGroupRole, className: Y.vg }),
                    (0, a.jsxs)("div", {
                        className: Y.wY,
                        children: [
                            (0, a.jsx)("div", {
                                className: n()(M, { [Y.A9]: eg, [Y.ce]: !eg && !W }),
                                children: !eg && N,
                            }),
                            (0, a.jsxs)("table", {
                                className: Y.tp,
                                children: [
                                    (0, a.jsx)("thead", { children: (0, a.jsx)(es, { ...ep }) }),
                                    (0, a.jsx)("tbody", {
                                        children: e_.map((e, t) => (0, r.createElement)(ea, { ...e, key: t })),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
