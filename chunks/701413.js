s.d(t, { A: () => el }), s(321073);
var i = s(627968),
    l = s(64700),
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
    N = s(960851),
    A = s(89366),
    _ = s(422936),
    C = s(234419),
    E = s(834730),
    I = s(933832),
    v = s(140735),
    R = s(789645),
    T = s(773669),
    b = s(580630),
    M = s(788868),
    y = s(652215),
    S = s(375708),
    P = s(864386),
    D = s(427227);
let O = (e) => {
        let { text: t, badge: s, variant: l } = e;
        return (0, i.jsxs)(E.E, {
            color: "text-default",
            variant: null != l ? l : "text-sm/normal",
            children: [t, " ", s],
        });
    },
    G = (e) => {
        let { text: t, variant: s } = e;
        return (0, i.jsx)(E.E, { color: "text-strong", variant: null != s ? s : "text-md/semibold", children: t });
    },
    w = (e) => {
        let { includes: t } = e;
        return t
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(I.A, { size: "md", color: "currentColor", className: D.$8, "aria-hidden": !0 }),
                      (0, i.jsx)(v.A, { children: S.intl.string(S.t["tq+6t/"]) }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(R.P, { size: "md", color: "currentColor", className: D.ut, "aria-hidden": !0 }),
                      (0, i.jsx)(v.A, { children: S.intl.string(S.t.l4qZrp) }),
                  ],
              });
    };
var L = s(331322),
    k = s(508770),
    U = s(441574),
    B = s(97352),
    F = s(427262),
    H = s(622017),
    z = s(113090),
    V = s(88001),
    W = s(466919),
    K = s(217899);
function Y(e) {
    let { className: t, premiumGroupRole: s } = e,
        l = ((e, t) => {
            let s,
                i = (function () {
                    let { useCachedData: e = !0, fetch: t = !0 } =
                            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { premiumGroupMembership: s } = (0, z.A)({ useCachedData: e, fetch: t }),
                        { premiumGroupMembers: i } = (0, H.A)(s?.subscriptionId ?? null, {
                            useCachedData: e,
                            fetch: t,
                        });
                    return i?.primary != null ? (0, F.$3)(i?.primary) : null;
                })({ useCachedData: !0, fetch: e === U.qT.MEMBER }),
                l = (0, r.bG)([j.A], () => j.A.getPremiumGroupSubscription());
            return e === U.qT.UNSPECIFIED
                ? null
                : {
                      subheaderString:
                          null ==
                          (s =
                              e === U.qT.PRIMARY
                                  ? ((e) => {
                                        if (null == e) return null;
                                        let t = e.planIdFromItems;
                                        if (null == t) return null;
                                        let s = B.A.get(t);
                                        if (null == s) return null;
                                        let i = f.Ay.getPrice(t),
                                            l = (0, b.$g)(i.amount, i.currency),
                                            n = s.interval,
                                            a = s.intervalCount;
                                        return (0, b.CE)(l, n, a);
                                    })(l)
                                  : null == i
                                    ? null
                                    : S.intl.format(W.default.Nu9LNm, {
                                          primaryName: i,
                                          premiumGroupProductName: (0, V.DP)(),
                                      }))
                              ? "..."
                              : s,
                      bodyString:
                          e === U.qT.PRIMARY
                              ? S.intl.format(W.default["+R/K74"], {
                                    helpCenterLink: V.TE,
                                    premiumGroupProductName: (0, V.DP)(),
                                })
                              : S.intl.format(t ? W.default["xF+upx"] : W.default.qqfnOm, { helpCenterLink: V.TE }),
                  };
        })(s, !0);
    if (null == l) return null;
    let { subheaderString: n, bodyString: c } = l;
    return (0, i.jsxs)("div", {
        className: a()(K.kL, t),
        children: [
            (0, i.jsxs)(L.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                className: K.wx,
                children: [
                    (0, i.jsx)(d.D, { variant: "display-md", className: K.Ss, children: (0, V.DP)() }),
                    (0, i.jsx)(k.E, { type: "beta", variant: "expressive" }),
                ],
            }),
            (0, i.jsx)(E.E, { variant: "text-md/medium", className: K.m_, color: "text-default", children: n }),
            (0, i.jsx)(E.E, { variant: "text-md/medium", color: "text-default", children: c }),
        ],
    });
}
var Z = s(194509),
    Q = s(396375),
    X = s(511484),
    J = s(774774),
    q = s(231265);
let $ = () => {
        let e = (0, q._)();
        return (0, i.jsx)(J.HU, { text: e, className: D.QR, colorOptions: J.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL });
    },
    ee = () =>
        (0, i.jsx)("div", {
            className: D.Wm,
            children: (0, i.jsx)(d.D, {
                className: D.uC,
                variant: "heading-deprecated-12/extrabold",
                children: S.intl.string(S.t["o/oRJB"]),
            }),
        }),
    et = (e) => {
        let t,
            { premiumType: s, isPremiumGroup: l } = e,
            n = (0, u.Ay)();
        if (l)
            if (s === M.PremiumTypes.TIER_0)
                return (0, i.jsx)(d.D, { variant: "display-md", className: D.dW, children: S.intl.string(S.t.tUbSDK) });
            else
                return (0, i.jsx)(d.D, { variant: "display-md", className: D.dW, children: S.intl.string(S.t.Ipxkog) });
        t =
            s === M.PremiumTypes.TIER_0
                ? (0, c.M)(n)
                    ? "/assets/8b472f9ec50bc47c.png"
                    : "/assets/24c4ba2719f9bbc8.png"
                : (0, c.M)(n)
                  ? "/assets/3638711ae67443ff.png"
                  : "/assets/a6bb84f7256073af.png";
        let a = (0, f.Dd)(s);
        return (0, i.jsx)("img", { src: t, className: D.wm, alt: a });
    },
    es = (e) => {
        let { label: t, column1: s, column2: l } = e;
        return (0, i.jsxs)("tr", {
            className: a()(D.U1, D.YI, D.Y9),
            children: [
                (0, i.jsx)("th", { scope: "col", className: D.Cr, children: t }),
                (0, i.jsx)("th", { scope: "col", className: D.e4, children: s }),
                (0, i.jsx)("th", { scope: "col", className: a()(D.e4, D.Y9), children: l }),
            ],
        });
    },
    ei = (e) => {
        let {
            label: t,
            column1: s,
            column2: l,
            withBottomBorder: n = !0,
            withTopBorderRadius: r = !1,
            withBottomBorderRadius: c = !1,
            buttonsRow: o = !1,
            shortRow: d = !1,
        } = e;
        return (0, i.jsxs)("tr", {
            className: a()(D.nM, { [D.EE]: o, [D.Y9]: r, [D.kS]: c, [D.YI]: n, [D.vs]: d }),
            children: [
                (0, i.jsx)("th", { scope: "row", className: D.nx, children: t }),
                (0, i.jsx)("td", { className: a()(D.Hn, { [D.SD]: o }), children: s }),
                (0, i.jsx)("td", { className: a()(D.Hn, { [D.Y9]: r, [D.kS]: c, [D.SD]: o }), children: l }),
            ],
        });
    },
    el = (e) => {
        var t;
        let s,
            n,
            E,
            {
                className: I,
                hideCTAs: v = !1,
                headingOverride: R,
                hidePill: L = !1,
                selectedPlanColumnClassName: k,
                selectedPlanTier: U = M.PremiumTypes.TIER_2,
            } = e,
            { analyticsLocations: B } = (0, x.Ay)(m.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            F = (0, r.bG)([j.A], () => j.A.hasFetchedSubscriptions()),
            H = (0, h.Y)(M.T7),
            z = (0, u.Ay)(),
            V = (0, c.q)(z),
            W = (0, r.bG)([g.default], () => g.default.getCurrentUser()),
            K = null != W && W.isPremiumWithPremiumGroup(),
            q = (0, f.YE)(W, M.PremiumTypes.TIER_2),
            el = (0, C.V)(),
            en = el?.subscription_trial?.sku_id,
            ea = (0, A.Us)(),
            er = (0, _.O)(),
            ec = null != er && (0, X.U9)(er, M.pe.TIER_2),
            eo = (0, X.N1)(M.gD.PREMIUM_MONTH_TIER_2),
            ed = `${eo}/${(0, f.FJ)(M.WT.MONTH)}`,
            eu = (0, f.JM)(M.gD.PREMIUM_MONTH_TIER_0),
            em = (0, f.JM)(M.gD.PREMIUM_MONTH_TIER_2),
            ex =
                ((t = (0, p.A)().fractionalState),
                (s = {
                    0: {
                        label: (0, i.jsx)(O, { text: S.intl.string(S.t["09yRK3"]) }),
                        column1: (0, i.jsx)(G, { text: f.Ay.formatPriceString(eu, M.WT.MONTH) }),
                        column2: (0, i.jsx)(G, { text: ec ? ed : f.Ay.formatPriceString(em, M.WT.MONTH) }),
                        withBottomBorder: !0,
                    },
                    1: {
                        label: (0, i.jsx)(O, { text: S.intl.string(S.t.vaDeDV) }),
                        column1: (0, i.jsx)(w, { includes: !0 }),
                        column2: (0, i.jsx)(w, { includes: !0 }),
                    },
                    2: {
                        label: (0, i.jsx)(O, { text: S.intl.string(S.t.DmfiwT) }),
                        column1: (0, i.jsx)(w, { includes: !0 }),
                        column2: (0, i.jsx)(w, { includes: !0 }),
                    },
                    3: {
                        label: (0, i.jsx)(O, { text: S.intl.string(S.t.OuItFi) }),
                        column1: (0, i.jsx)(w, { includes: !0 }),
                        column2: (0, i.jsx)(w, { includes: !0 }),
                    },
                    4: {
                        label: (0, i.jsx)(O, { text: S.intl.string(S.t["9kRJS8"]) }),
                        column1: (0, i.jsx)(w, { includes: !0 }),
                        column2: (0, i.jsx)(w, { includes: !0 }),
                    },
                    5: {
                        label: (0, i.jsx)(O, { text: S.intl.string(S.t["ufhQC+"]) }),
                        column1: (0, i.jsx)(G, { text: (0, f.EJ)(M.PremiumTypes.TIER_0) }),
                        column2: (0, i.jsx)(G, { text: (0, f.EJ)(M.PremiumTypes.TIER_2) }),
                    },
                    6: {
                        label: (0, i.jsx)(O, { text: S.intl.string(S.t.VwxlMw) }),
                        column1: (0, i.jsx)(w, { includes: !1 }),
                        column2: (0, i.jsx)(G, { text: S.intl.string(S.t.XdN6KU) }),
                    },
                    7: {
                        label: (0, i.jsx)(O, {
                            text: S.intl.formatToPlainString(S.t.nyhDpw, {
                                numBoosts: M.M4,
                                percentageOff: (0, b.l9)(T.default.locale, M.oX / 100),
                            }),
                        }),
                        column1: (0, i.jsx)(w, { includes: !1 }),
                        column2: (0, i.jsx)(w, { includes: !0 }),
                    },
                    8: {
                        label: (0, i.jsx)(O, { text: S.intl.string(S.t.tFbcuM) }),
                        column1: (0, i.jsx)(w, { includes: !1 }),
                        column2: (0, i.jsx)(w, { includes: !0 }),
                    },
                    9: {
                        label: (0, i.jsx)(O, { text: S.intl.string(P.default["86GtGH"]) }),
                        column1: (0, i.jsx)(w, { includes: !1 }),
                        column2: (0, i.jsx)(w, { includes: !0 }),
                    },
                    10: {
                        label: (0, i.jsx)(O, { text: S.intl.string(S.t["aR/zTk"]) }),
                        column1: (0, i.jsx)(w, { includes: !1 }),
                        column2: (0, i.jsx)(w, { includes: !0 }),
                    },
                    11: {
                        label: (0, i.jsx)(O, { text: S.intl.string(S.t.IzrZHz) }),
                        column1: (0, i.jsx)(w, { includes: !1 }),
                        column2: (0, i.jsx)(w, { includes: !0 }),
                    },
                    12: {
                        label: (0, i.jsx)(O, { text: S.intl.string(S.t["HwNg/Z"]) }),
                        column1: (0, i.jsx)(w, { includes: !1 }),
                        column2: (0, i.jsx)(w, { includes: !0 }),
                    },
                    13: {
                        label: (0, i.jsx)(O, { text: S.intl.string(S.t["y+HHL9"]) }),
                        column1: (0, i.jsx)(w, { includes: !0 }),
                        column2: (0, i.jsx)(w, { includes: !0 }),
                    },
                    14: {
                        label: (0, i.jsx)(O, { text: S.intl.string(S.t.qQxxVc) }),
                        column1: (0, i.jsx)(w, { includes: !0 }),
                        column2: (0, i.jsx)(w, { includes: !0 }),
                    },
                    15: {
                        label: (0, i.jsx)(O, { text: S.intl.string(S.t.xi0NBE) }),
                        column1: (0, i.jsx)(w, { includes: !1 }),
                        column2: (0, i.jsx)(w, { includes: !0 }),
                        withBottomBorder: !0,
                    },
                    16: {
                        label: (0, i.jsx)(O, { text: S.intl.string(S.t.MfsUHm) }),
                        column1: (0, i.jsx)(w, { includes: !1 }),
                        column2: (0, i.jsx)(w, { includes: !0 }),
                    },
                    22: {
                        label: (0, i.jsx)(O, { text: S.intl.string(S.t["A+0H1f"]) }),
                        column1: (0, i.jsx)(w, { includes: !1 }),
                        column2: (0, i.jsx)(w, { includes: !0 }),
                    },
                    17: {
                        label: (0, i.jsx)(O, { text: S.intl.string(S.t["il8+nC"]) }),
                        column1: (0, i.jsx)(w, { includes: !1 }),
                        column2: (0, i.jsx)(w, { includes: !0 }),
                    },
                    18: {
                        label: (0, i.jsx)(O, { text: S.intl.formatToPlainString(S.t["8crdzJ"], { maxChars: y.CS1 }) }),
                        column1: (0, i.jsx)(w, { includes: !1 }),
                        column2: (0, i.jsx)(w, { includes: !0 }),
                        withBottomBorder: !0,
                    },
                    19: {
                        label: (0, i.jsx)(d.D, {
                            className: D.__invalid_textColor,
                            variant: "display-sm",
                            children: "Make Discord Yours",
                        }),
                        column1: null,
                        column2: null,
                        withBottomBorder: !1,
                    },
                    20: {
                        label: (0, i.jsx)(d.D, {
                            className: D.__invalid_textColor,
                            variant: "display-sm",
                            children: "Enjoy an Upgraded Discord",
                        }),
                        column1: null,
                        column2: null,
                        withBottomBorder: !1,
                    },
                    21: {
                        label: (0, i.jsx)(d.D, {
                            className: D.__invalid_textColor,
                            variant: "display-sm",
                            children: "Show Up the Way You Want",
                        }),
                        column1: null,
                        column2: null,
                        withBottomBorder: !1,
                    },
                    23: {
                        label: (0, i.jsx)(O, { text: S.intl.string(S.t["93xPy3"]) }),
                        column1: (0, i.jsx)(w, { includes: !1 }),
                        column2: (0, i.jsx)(w, { includes: !0 }),
                        withBottomBorder: !0,
                    },
                    24: {
                        label: (0, i.jsx)(O, { text: S.intl.string(S.t["5BJqNF"]) }),
                        column1: (0, i.jsx)(w, { includes: !1 }),
                        column2: (0, i.jsx)(w, { includes: !0 }),
                        withBottomBorder: !1,
                    },
                }),
                (n = t === M.xc.FP_ONLY),
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
        if (!F || !H) return null;
        let eh = {
            label: (0, i.jsx)(d.D, {
                className: D.__invalid_textColor,
                variant: "heading-lg/extrabold",
                children: S.intl.string(S.t.ED4UVD),
            }),
            column1: (0, i.jsx)(et, { premiumType: M.PremiumTypes.TIER_0, isPremiumGroup: K }),
            column2: (0, i.jsx)(et, { premiumType: M.PremiumTypes.TIER_2, isPremiumGroup: K }),
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
                  column1: (0, i.jsxs)(i.Fragment, {
                      children: [
                          en === M.pe.TIER_2 || ep
                              ? (0, i.jsx)(Q.A, {
                                    className: D.x6,
                                    subscriptionTier: M.pe.TIER_0,
                                    showIcon: !1,
                                    look: o.pR.OUTLINED,
                                    color: V ? o.XD.BRAND : o.XD.WHITE,
                                })
                              : (0, i.jsx)(Q.A, { className: D.x6, subscriptionTier: M.pe.TIER_0, showIcon: !1 }),
                          ea === M.PremiumTypes.TIER_2 || null != en
                              ? null
                              : (0, i.jsx)(Z.A, { className: D.x6, subscriptionTier: M.pe.TIER_0 }),
                      ],
                  }),
                  column2: (0, i.jsxs)(i.Fragment, {
                      children: [
                          en === M.pe.TIER_0
                              ? (0, i.jsx)(Q.A, {
                                    className: D.x6,
                                    subscriptionTier: M.pe.TIER_2,
                                    showIcon: !1,
                                    look: o.pR.OUTLINED,
                                    color: V ? o.XD.BRAND : o.XD.WHITE,
                                })
                              : (0, i.jsx)(Q.A, {
                                    className: D.x6,
                                    subscriptionTier: M.pe.TIER_2,
                                    showIcon: !1,
                                    hasActivePromotion: ep,
                                }),
                          ea === M.PremiumTypes.TIER_0 || null != en
                              ? null
                              : (0, i.jsx)(Z.A, { className: D.x6, subscriptionTier: M.pe.TIER_2 }),
                      ],
                  }),
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: null == en,
              }),
            (E = L
                ? null
                : null != en || null != ea
                  ? (0, i.jsx)(J.HU, {
                        text: null != en ? S.intl.string(S.t.IBYG5U) : S.intl.string(S.t.ce1v3V),
                        className: D.ls,
                        colorOptions:
                            en === M.pe.TIER_0
                                ? V
                                    ? J.at.PREMIUM_TIER_0_GRADIENT_FILL
                                    : J.at.PREMIUM_TIER_0_WHITE_FILL
                                : V
                                  ? q
                                      ? J.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      : J.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                                  : J.at.PREMIUM_TIER_2_WHITE_FILL,
                    })
                  : ep
                    ? (0, i.jsx)($, {})
                    : (0, i.jsx)(ee, {}));
        let eg = en === M.pe.TIER_0 || ea === M.PremiumTypes.TIER_0 || U === M.PremiumTypes.TIER_0;
        return (0, i.jsx)(x.f5, {
            value: B,
            children: (0, i.jsxs)("div", {
                className: a()(D.zr, I),
                "data-testid": "v2-marketing-page-comparison-table",
                children: [
                    (0, i.jsx)(d.D, {
                        className: a()(D.Qw, D.__invalid_textColor),
                        variant: "heading-xxl/extrabold",
                        children: R ?? S.intl.string(S.t.FIbMh9),
                    }),
                    K && (0, i.jsx)(Y, { premiumGroupRole: W.premiumGroupRole, className: D.vg }),
                    (0, i.jsxs)("div", {
                        className: D.wY,
                        children: [
                            (0, i.jsx)("div", {
                                className: a()(k, { [D.A9]: eg, [D.ce]: !eg && !K }),
                                children: !eg && E,
                            }),
                            (0, i.jsxs)("table", {
                                className: D.tp,
                                children: [
                                    (0, i.jsx)("thead", { children: (0, i.jsx)(es, { ...eh }) }),
                                    (0, i.jsx)("tbody", {
                                        children: ex.map((e, t) => (0, l.createElement)(ei, { ...e, key: t })),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
