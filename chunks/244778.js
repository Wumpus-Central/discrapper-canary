n.d(t, { A: () => B }), n(321073);
var i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    l = n(311907),
    o = n(582754),
    c = n(421380),
    d = n(397927),
    u = n(736653),
    _ = n(793574),
    m = n(688810),
    A = n(531260),
    g = n(160946),
    h = n(287809),
    x = n(166403),
    p = n(927578),
    E = n(40185),
    C = n(89366),
    T = n(422936),
    S = n(234419),
    I = n(863156),
    f = n(194509),
    N = n(396375),
    b = n(511484),
    j = n(231265),
    v = n(795269),
    O = n(38720),
    R = n(788868),
    y = n(985018),
    P = n(562628),
    L = n(196093),
    D = n(979653),
    G = n(255631),
    M = n(193023);
let U = () => {
        let e = (0, j._)();
        return (0, i.jsx)(v.ir, { text: e, className: P.QR, colorOptions: v.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL });
    },
    k = () =>
        (0, i.jsx)("div", {
            className: P.Wm,
            children: (0, i.jsx)(d.Heading, {
                className: P.uC,
                variant: "heading-deprecated-12/extrabold",
                children: y.intl.string(y.t["o/oRJB"]),
            }),
        }),
    V = (e) => {
        let t,
            { premiumType: n, isPremiumGroup: s } = e,
            a = (0, u.Ay)();
        if (s)
            if (n === R.PremiumTypes.TIER_0)
                return (0, i.jsx)(d.Heading, {
                    variant: "display-md",
                    className: P.dW,
                    children: y.intl.string(y.t.tUbSDK),
                });
            else
                return (0, i.jsx)(d.Heading, {
                    variant: "display-md",
                    className: P.dW,
                    children: y.intl.string(y.t.Ipxkog),
                });
        t = n === R.PremiumTypes.TIER_0 ? ((0, o.Mw)(a) ? L : D) : (0, o.Mw)(a) ? G : M;
        let r = (0, p.Dd)(n);
        return (0, i.jsx)("img", { src: t, className: P.wm, alt: r });
    },
    w = (e) => {
        let { label: t, column1: n, column2: s } = e;
        return (0, i.jsxs)("tr", {
            className: r()(P.U1, P.YI, P.Y9),
            children: [
                (0, i.jsx)("th", { scope: "col", className: P.Cr, children: t }),
                (0, i.jsx)("th", { scope: "col", className: P.e4, children: n }),
                (0, i.jsx)("th", { scope: "col", className: r()(P.e4, P.Y9), children: s }),
            ],
        });
    },
    H = (e) => {
        let {
            label: t,
            column1: n,
            column2: s,
            withBottomBorder: a = !0,
            withTopBorderRadius: l = !1,
            withBottomBorderRadius: o = !1,
            buttonsRow: c = !1,
            shortRow: d = !1,
        } = e;
        return (0, i.jsxs)("tr", {
            className: r()(P.nM, { [P.EE]: c, [P.Y9]: l, [P.kS]: o, [P.YI]: a, [P.vs]: d }),
            children: [
                (0, i.jsx)("th", { scope: "row", className: P.nx, children: t }),
                (0, i.jsx)("td", { className: r()(P.Hn, { [P.SD]: c }), children: n }),
                (0, i.jsx)("td", { className: r()(P.Hn, { [P.Y9]: l, [P.kS]: o, [P.SD]: c }), children: s }),
            ],
        });
    },
    B = (e) => {
        let t,
            {
                className: n,
                hideCTAs: a = !1,
                headingOverride: j,
                hidePill: L = !1,
                selectedPlanColumnClassName: D,
                selectedPlanTier: G = R.PremiumTypes.TIER_2,
            } = e,
            { analyticsLocations: M } = (0, m.Ay)(_.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            B = (0, l.bG)([x.A], () => x.A.hasFetchedSubscriptions()),
            Y = (0, g.Y)(R.T7),
            F = (0, u.Ay)(),
            z = (0, o.qB)(F),
            W = (0, l.bG)([h.default], () => h.default.getCurrentUser()),
            K = null != W && W.isPremiumWithPremiumGroup(),
            Z = (0, p.YE)(W, R.PremiumTypes.TIER_2),
            q = (0, S.V)(),
            X = q?.subscription_trial?.sku_id,
            Q = (0, C.Us)(),
            J = (0, T.O)(),
            $ = null != J && (0, b.U9)(J, R.pe.TIER_2),
            ee = (0, b.N1)(R.gD.PREMIUM_MONTH_TIER_2),
            et = `${ee}/${(0, p.FJ)(R.WT.MONTH)}`,
            en = (0, p.JM)(R.gD.PREMIUM_MONTH_TIER_0),
            ei = (0, p.JM)(R.gD.PREMIUM_MONTH_TIER_2),
            es = (0, A.A)(),
            ea = (0, O.R)(en, ei, $, et, es.fractionalState),
            er = (0, E.cg)();
        if (!B || !Y) return null;
        let el = {
            label: (0, i.jsx)(d.Heading, {
                className: P.__invalid_textColor,
                variant: "heading-lg/extrabold",
                children: y.intl.string(y.t.ED4UVD),
            }),
            column1: (0, i.jsx)(V, { premiumType: R.PremiumTypes.TIER_0, isPremiumGroup: K }),
            column2: (0, i.jsx)(V, { premiumType: R.PremiumTypes.TIER_2, isPremiumGroup: K }),
        };
        a
            ? ea.push({
                  label: null,
                  column1: null,
                  column2: null,
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: !1,
                  shortRow: !0,
              })
            : ea.push({
                  label: null,
                  column1: (0, i.jsxs)(i.Fragment, {
                      children: [
                          X === R.pe.TIER_2 || er
                              ? (0, i.jsx)(N.A, {
                                    className: P.x6,
                                    subscriptionTier: R.pe.TIER_0,
                                    showIcon: !1,
                                    look: c.pR.OUTLINED,
                                    color: z ? c.XD.BRAND : c.XD.WHITE,
                                })
                              : (0, i.jsx)(N.A, { className: P.x6, subscriptionTier: R.pe.TIER_0, showIcon: !1 }),
                          Q === R.PremiumTypes.TIER_2 || null != X
                              ? null
                              : (0, i.jsx)(f.A, { className: P.x6, subscriptionTier: R.pe.TIER_0 }),
                      ],
                  }),
                  column2: (0, i.jsxs)(i.Fragment, {
                      children: [
                          X === R.pe.TIER_0
                              ? (0, i.jsx)(N.A, {
                                    className: P.x6,
                                    subscriptionTier: R.pe.TIER_2,
                                    showIcon: !1,
                                    look: c.pR.OUTLINED,
                                    color: z ? c.XD.BRAND : c.XD.WHITE,
                                })
                              : (0, i.jsx)(N.A, {
                                    className: P.x6,
                                    subscriptionTier: R.pe.TIER_2,
                                    showIcon: !1,
                                    hasActivePromotion: er,
                                }),
                          Q === R.PremiumTypes.TIER_0 || null != X
                              ? null
                              : (0, i.jsx)(f.A, { className: P.x6, subscriptionTier: R.pe.TIER_2 }),
                      ],
                  }),
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: null == X,
              }),
            (t = L
                ? null
                : null != X || null != Q
                  ? (0, i.jsx)(v.ir, {
                        text: null != X ? y.intl.string(y.t.IBYG5U) : y.intl.string(y.t.ce1v3V),
                        className: P.ls,
                        colorOptions:
                            X === R.pe.TIER_0
                                ? z
                                    ? v.at.PREMIUM_TIER_0_GRADIENT_FILL
                                    : v.at.PREMIUM_TIER_0_WHITE_FILL
                                : z
                                  ? Z
                                      ? v.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      : v.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                                  : v.at.PREMIUM_TIER_2_WHITE_FILL,
                    })
                  : er
                    ? (0, i.jsx)(U, {})
                    : (0, i.jsx)(k, {}));
        let eo = X === R.pe.TIER_0 || Q === R.PremiumTypes.TIER_0 || G === R.PremiumTypes.TIER_0;
        return (0, i.jsx)(m.f5, {
            value: M,
            children: (0, i.jsxs)("div", {
                className: r()(P.zr, n),
                "data-testid": "v2-marketing-page-comparison-table",
                children: [
                    (0, i.jsx)(d.Heading, {
                        className: r()(P.Qw, P.__invalid_textColor),
                        variant: "heading-xxl/extrabold",
                        children: j ?? y.intl.string(y.t.FIbMh9),
                    }),
                    K && (0, i.jsx)(I.A, { premiumGroupRole: W.premiumGroupRole, className: P.vg }),
                    (0, i.jsxs)("div", {
                        className: P.wY,
                        children: [
                            (0, i.jsx)("div", {
                                className: r()(D, { [P.A9]: eo, [P.ce]: !eo && !K }),
                                children: !eo && t,
                            }),
                            (0, i.jsxs)("table", {
                                className: P.tp,
                                children: [
                                    (0, i.jsx)("thead", { children: (0, i.jsx)(w, { ...el }) }),
                                    (0, i.jsx)("tbody", {
                                        children: ea.map((e, t) => (0, s.createElement)(H, { ...e, key: t })),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
