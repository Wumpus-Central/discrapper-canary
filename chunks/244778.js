s.d(t, { A: () => F }), s(321073);
var r = s(627968),
    a = s(64700),
    i = s(503698),
    n = s.n(i),
    l = s(311907),
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
    N = s(863156),
    I = s(194509),
    T = s(396375),
    v = s(511484),
    E = s(774774),
    R = s(231265),
    M = s(38720),
    S = s(788868),
    y = s(985018),
    P = s(427227),
    k = s(196093),
    B = s(979653),
    w = s(255631),
    G = s(193023);
let O = () => {
        let e = (0, R._)();
        return (0, r.jsx)(E.HU, { text: e, className: P.QR, colorOptions: E.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL });
    },
    D = () =>
        (0, r.jsx)("div", {
            className: P.Wm,
            children: (0, r.jsx)(d.D, {
                className: P.uC,
                variant: "heading-deprecated-12/extrabold",
                children: y.intl.string(y.t["o/oRJB"]),
            }),
        }),
    L = (e) => {
        let t,
            { premiumType: s, isPremiumGroup: a } = e,
            i = (0, m.Ay)();
        if (a)
            if (s === S.PremiumTypes.TIER_0)
                return (0, r.jsx)(d.D, { variant: "display-md", className: P.dW, children: y.intl.string(y.t.tUbSDK) });
            else
                return (0, r.jsx)(d.D, { variant: "display-md", className: P.dW, children: y.intl.string(y.t.Ipxkog) });
        t = s === S.PremiumTypes.TIER_0 ? ((0, o.M)(i) ? k : B) : (0, o.M)(i) ? w : G;
        let n = (0, f.Dd)(s);
        return (0, r.jsx)("img", { src: t, className: P.wm, alt: n });
    },
    H = (e) => {
        let { label: t, column1: s, column2: a } = e;
        return (0, r.jsxs)("tr", {
            className: n()(P.U1, P.YI, P.Y9),
            children: [
                (0, r.jsx)("th", { scope: "col", className: P.Cr, children: t }),
                (0, r.jsx)("th", { scope: "col", className: P.e4, children: s }),
                (0, r.jsx)("th", { scope: "col", className: n()(P.e4, P.Y9), children: a }),
            ],
        });
    },
    U = (e) => {
        let {
            label: t,
            column1: s,
            column2: a,
            withBottomBorder: i = !0,
            withTopBorderRadius: l = !1,
            withBottomBorderRadius: o = !1,
            buttonsRow: c = !1,
            shortRow: d = !1,
        } = e;
        return (0, r.jsxs)("tr", {
            className: n()(P.nM, { [P.EE]: c, [P.Y9]: l, [P.kS]: o, [P.YI]: i, [P.vs]: d }),
            children: [
                (0, r.jsx)("th", { scope: "row", className: P.nx, children: t }),
                (0, r.jsx)("td", { className: n()(P.Hn, { [P.SD]: c }), children: s }),
                (0, r.jsx)("td", { className: n()(P.Hn, { [P.Y9]: l, [P.kS]: o, [P.SD]: c }), children: a }),
            ],
        });
    },
    F = (e) => {
        let t,
            {
                className: s,
                hideCTAs: i = !1,
                headingOverride: R,
                hidePill: k = !1,
                selectedPlanColumnClassName: B,
                selectedPlanTier: w = S.PremiumTypes.TIER_2,
            } = e,
            { analyticsLocations: G } = (0, _.Ay)(u.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            F = (0, l.bG)([h.A], () => h.A.hasFetchedSubscriptions()),
            W = (0, p.Y)(S.T7),
            z = (0, m.Ay)(),
            V = (0, o.q)(z),
            K = (0, l.bG)([g.default], () => g.default.getCurrentUser()),
            Q = null != K && K.isPremiumWithPremiumGroup(),
            Z = (0, f.YE)(K, S.PremiumTypes.TIER_2),
            Y = (0, A.V)(),
            J = Y?.subscription_trial?.sku_id,
            X = (0, b.Us)(),
            q = (0, j.O)(),
            $ = null != q && (0, v.U9)(q, S.pe.TIER_2),
            ee = (0, v.N1)(S.gD.PREMIUM_MONTH_TIER_2),
            et = `${ee}/${(0, f.FJ)(S.WT.MONTH)}`,
            es = (0, f.JM)(S.gD.PREMIUM_MONTH_TIER_0),
            er = (0, f.JM)(S.gD.PREMIUM_MONTH_TIER_2),
            ea = (0, x.A)(),
            ei = (0, M.R)(es, er, $, et, ea.fractionalState),
            en = (0, C.cg)();
        if (!F || !W) return null;
        let el = {
            label: (0, r.jsx)(d.D, {
                className: P.__invalid_textColor,
                variant: "heading-lg/extrabold",
                children: y.intl.string(y.t.ED4UVD),
            }),
            column1: (0, r.jsx)(L, { premiumType: S.PremiumTypes.TIER_0, isPremiumGroup: Q }),
            column2: (0, r.jsx)(L, { premiumType: S.PremiumTypes.TIER_2, isPremiumGroup: Q }),
        };
        i
            ? ei.push({
                  label: null,
                  column1: null,
                  column2: null,
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: !1,
                  shortRow: !0,
              })
            : ei.push({
                  label: null,
                  column1: (0, r.jsxs)(r.Fragment, {
                      children: [
                          J === S.pe.TIER_2 || en
                              ? (0, r.jsx)(T.A, {
                                    className: P.x6,
                                    subscriptionTier: S.pe.TIER_0,
                                    showIcon: !1,
                                    look: c.pR.OUTLINED,
                                    color: V ? c.XD.BRAND : c.XD.WHITE,
                                })
                              : (0, r.jsx)(T.A, { className: P.x6, subscriptionTier: S.pe.TIER_0, showIcon: !1 }),
                          X === S.PremiumTypes.TIER_2 || null != J
                              ? null
                              : (0, r.jsx)(I.A, { className: P.x6, subscriptionTier: S.pe.TIER_0 }),
                      ],
                  }),
                  column2: (0, r.jsxs)(r.Fragment, {
                      children: [
                          J === S.pe.TIER_0
                              ? (0, r.jsx)(T.A, {
                                    className: P.x6,
                                    subscriptionTier: S.pe.TIER_2,
                                    showIcon: !1,
                                    look: c.pR.OUTLINED,
                                    color: V ? c.XD.BRAND : c.XD.WHITE,
                                })
                              : (0, r.jsx)(T.A, {
                                    className: P.x6,
                                    subscriptionTier: S.pe.TIER_2,
                                    showIcon: !1,
                                    hasActivePromotion: en,
                                }),
                          X === S.PremiumTypes.TIER_0 || null != J
                              ? null
                              : (0, r.jsx)(I.A, { className: P.x6, subscriptionTier: S.pe.TIER_2 }),
                      ],
                  }),
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: null == J,
              }),
            (t = k
                ? null
                : null != J || null != X
                  ? (0, r.jsx)(E.HU, {
                        text: null != J ? y.intl.string(y.t.IBYG5U) : y.intl.string(y.t.ce1v3V),
                        className: P.ls,
                        colorOptions:
                            J === S.pe.TIER_0
                                ? V
                                    ? E.at.PREMIUM_TIER_0_GRADIENT_FILL
                                    : E.at.PREMIUM_TIER_0_WHITE_FILL
                                : V
                                  ? Z
                                      ? E.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      : E.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                                  : E.at.PREMIUM_TIER_2_WHITE_FILL,
                    })
                  : en
                    ? (0, r.jsx)(O, {})
                    : (0, r.jsx)(D, {}));
        let eo = J === S.pe.TIER_0 || X === S.PremiumTypes.TIER_0 || w === S.PremiumTypes.TIER_0;
        return (0, r.jsx)(_.f5, {
            value: G,
            children: (0, r.jsxs)("div", {
                className: n()(P.zr, s),
                "data-testid": "v2-marketing-page-comparison-table",
                children: [
                    (0, r.jsx)(d.D, {
                        className: n()(P.Qw, P.__invalid_textColor),
                        variant: "heading-xxl/extrabold",
                        children: R ?? y.intl.string(y.t.FIbMh9),
                    }),
                    Q && (0, r.jsx)(N.A, { premiumGroupRole: K.premiumGroupRole, className: P.vg }),
                    (0, r.jsxs)("div", {
                        className: P.wY,
                        children: [
                            (0, r.jsx)("div", {
                                className: n()(B, { [P.A9]: eo, [P.ce]: !eo && !Q }),
                                children: !eo && t,
                            }),
                            (0, r.jsxs)("table", {
                                className: P.tp,
                                children: [
                                    (0, r.jsx)("thead", { children: (0, r.jsx)(H, { ...el }) }),
                                    (0, r.jsx)("tbody", {
                                        children: ei.map((e, t) => (0, a.createElement)(U, { ...e, key: t })),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
