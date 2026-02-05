n.d(t, { A: () => F }), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(311907),
    o = n(582754),
    c = n(421380),
    d = n(397927),
    u = n(736653),
    _ = n(793574),
    m = n(688810),
    A = n(531260),
    g = n(160946),
    E = n(287809),
    h = n(166403),
    p = n(927578),
    C = n(40185),
    x = n(89366),
    T = n(411268),
    I = n(422936),
    S = n(234419),
    f = n(863156),
    N = n(194509),
    b = n(396375),
    R = n(511484),
    v = n(231265),
    O = n(795269),
    j = n(38720),
    P = n(788868),
    y = n(985018),
    L = n(562628),
    D = n(196093),
    M = n(979653),
    G = n(255631),
    U = n(193023);
let k = () => {
        let e = (0, v._)();
        return (0, i.jsx)(O.ir, { text: e, className: L.QR, colorOptions: O.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL });
    },
    B = () =>
        (0, i.jsx)("div", {
            className: L.Wm,
            children: (0, i.jsx)(d.Heading, {
                className: L.uC,
                variant: "heading-deprecated-12/extrabold",
                children: y.intl.string(y.t["o/oRJB"]),
            }),
        }),
    w = (e) => {
        let t,
            { premiumType: n, isPremiumGroup: s } = e,
            r = (0, u.Ay)();
        if (s)
            if (n === P.PremiumTypes.TIER_0)
                return (0, i.jsx)(d.Heading, {
                    variant: "display-md",
                    className: L.dW,
                    children: y.intl.string(y.t.tUbSDK),
                });
            else
                return (0, i.jsx)(d.Heading, {
                    variant: "display-md",
                    className: L.dW,
                    children: y.intl.string(y.t.Ipxkog),
                });
        t = n === P.PremiumTypes.TIER_0 ? ((0, o.Mw)(r) ? D : M) : (0, o.Mw)(r) ? G : U;
        let a = (0, p.Dd)(n);
        return (0, i.jsx)("img", { src: t, className: L.wm, alt: a });
    },
    H = (e) => {
        let { label: t, column1: n, column2: s } = e;
        return (0, i.jsxs)("tr", {
            className: a()(L.U1, L.YI, L.Y9),
            children: [
                (0, i.jsx)("th", { scope: "col", className: L.Cr, children: t }),
                (0, i.jsx)("th", { scope: "col", className: L.e4, children: n }),
                (0, i.jsx)("th", { scope: "col", className: a()(L.e4, L.Y9), children: s }),
            ],
        });
    },
    V = (e) => {
        let {
            label: t,
            column1: n,
            column2: s,
            withBottomBorder: r = !0,
            withTopBorderRadius: l = !1,
            withBottomBorderRadius: o = !1,
            buttonsRow: c = !1,
            shortRow: d = !1,
        } = e;
        return (0, i.jsxs)("tr", {
            className: a()(L.nM, { [L.EE]: c, [L.Y9]: l, [L.kS]: o, [L.YI]: r, [L.vs]: d }),
            children: [
                (0, i.jsx)("th", { scope: "row", className: L.nx, children: t }),
                (0, i.jsx)("td", { className: a()(L.Hn, { [L.SD]: c }), children: n }),
                (0, i.jsx)("td", { className: a()(L.Hn, { [L.Y9]: l, [L.kS]: o, [L.SD]: c }), children: s }),
            ],
        });
    },
    F = (e) => {
        let t,
            {
                className: n,
                hideCTAs: r = !1,
                headingOverride: v,
                hidePill: D = !1,
                selectedPlanColumnClassName: M,
                selectedPlanTier: G = P.PremiumTypes.TIER_2,
            } = e,
            { analyticsLocations: U } = (0, m.Ay)(_.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            F = (0, l.bG)([h.A], () => h.A.hasFetchedSubscriptions()),
            Y = (0, g.Y)(P.T7),
            W = (0, u.Ay)(),
            z = (0, o.qB)(W),
            K = (0, l.bG)([E.default], () => E.default.getCurrentUser()),
            Z = null != K && K.isPremiumWithPremiumGroup(),
            X = (0, p.YE)(K, P.PremiumTypes.TIER_2),
            q = (0, S.V)(),
            J = q?.subscription_trial?.sku_id,
            Q = (0, x.Us)(),
            $ = (0, I.O)(),
            ee = null != $ && (0, R.U9)($, P.pe.TIER_2),
            et = (0, R.N1)(P.gD.PREMIUM_MONTH_TIER_2),
            en = `${et}/${(0, p.FJ)(P.WT.MONTH)}`,
            ei = (0, p.JM)(P.gD.PREMIUM_MONTH_TIER_0),
            es = (0, p.JM)(P.gD.PREMIUM_MONTH_TIER_2),
            er = (0, A.A)(),
            ea = (0, j.R)(ei, es, ee, en, er.fractionalState),
            el = (0, C.cg)(),
            { enabled: eo } = T.K.useExperiment({ location: "PlanComparisonTable" });
        if (!F || !Y) return null;
        let ec = eo ? y.intl.string(y.t.XXENra) : y.intl.string(y.t.ED4UVD),
            ed = {
                label: (0, i.jsx)(d.Heading, {
                    className: L.__invalid_textColor,
                    variant: "heading-lg/extrabold",
                    children: ec,
                }),
                column1: (0, i.jsx)(w, { premiumType: P.PremiumTypes.TIER_0, isPremiumGroup: Z }),
                column2: (0, i.jsx)(w, { premiumType: P.PremiumTypes.TIER_2, isPremiumGroup: Z }),
            };
        r
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
                          J === P.pe.TIER_2 || el
                              ? (0, i.jsx)(b.A, {
                                    className: L.x6,
                                    subscriptionTier: P.pe.TIER_0,
                                    showIcon: !1,
                                    look: c.pR.OUTLINED,
                                    color: z ? c.XD.BRAND : c.XD.WHITE,
                                })
                              : (0, i.jsx)(b.A, { className: L.x6, subscriptionTier: P.pe.TIER_0, showIcon: !1 }),
                          Q === P.PremiumTypes.TIER_2 || null != J
                              ? null
                              : (0, i.jsx)(N.A, { className: L.x6, subscriptionTier: P.pe.TIER_0 }),
                      ],
                  }),
                  column2: (0, i.jsxs)(i.Fragment, {
                      children: [
                          J === P.pe.TIER_0
                              ? (0, i.jsx)(b.A, {
                                    className: L.x6,
                                    subscriptionTier: P.pe.TIER_2,
                                    showIcon: !1,
                                    look: c.pR.OUTLINED,
                                    color: z ? c.XD.BRAND : c.XD.WHITE,
                                })
                              : (0, i.jsx)(b.A, {
                                    className: L.x6,
                                    subscriptionTier: P.pe.TIER_2,
                                    showIcon: !1,
                                    hasActivePromotion: el,
                                }),
                          Q === P.PremiumTypes.TIER_0 || null != J
                              ? null
                              : (0, i.jsx)(N.A, { className: L.x6, subscriptionTier: P.pe.TIER_2 }),
                      ],
                  }),
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: null == J,
              }),
            (t = D
                ? null
                : null != J || null != Q
                  ? (0, i.jsx)(O.ir, {
                        text: null != J ? y.intl.string(y.t.IBYG5U) : y.intl.string(y.t.ce1v3V),
                        className: L.ls,
                        colorOptions:
                            J === P.pe.TIER_0
                                ? z
                                    ? O.at.PREMIUM_TIER_0_GRADIENT_FILL
                                    : O.at.PREMIUM_TIER_0_WHITE_FILL
                                : z
                                  ? X
                                      ? O.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      : O.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                                  : O.at.PREMIUM_TIER_2_WHITE_FILL,
                    })
                  : el
                    ? (0, i.jsx)(k, {})
                    : (0, i.jsx)(B, {}));
        let eu = J === P.pe.TIER_0 || Q === P.PremiumTypes.TIER_0 || G === P.PremiumTypes.TIER_0;
        return (0, i.jsx)(m.f5, {
            value: U,
            children: (0, i.jsxs)("div", {
                className: a()(L.zr, n),
                "data-testid": "v2-marketing-page-comparison-table",
                children: [
                    (0, i.jsx)(d.Heading, {
                        className: a()(L.Qw, L.__invalid_textColor),
                        variant: "heading-xxl/extrabold",
                        children: v ?? y.intl.string(y.t.FIbMh9),
                    }),
                    Z && (0, i.jsx)(f.A, { premiumGroupRole: K.premiumGroupRole, className: L.vg }),
                    (0, i.jsxs)("div", {
                        className: L.wY,
                        children: [
                            (0, i.jsx)("div", {
                                className: a()(M, { [L.A9]: eu, [L.ce]: !eu && !Z }),
                                children: !eu && t,
                            }),
                            (0, i.jsxs)("table", {
                                className: L.tp,
                                children: [
                                    (0, i.jsx)("thead", { children: (0, i.jsx)(H, { ...ed }) }),
                                    (0, i.jsx)("tbody", {
                                        children: ea.map((e, t) => (0, s.createElement)(V, { ...e, key: t })),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
