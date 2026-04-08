n.d(t, { A: () => F }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(582754),
    d = n(421380),
    c = n(397927),
    u = n(736653),
    m = n(793574),
    g = n(688810),
    _ = n(531260),
    x = n(160946),
    A = n(287809),
    h = n(166403),
    p = n(927578),
    T = n(40185),
    f = n(89366),
    S = n(422936),
    b = n(234419),
    E = n(863156),
    C = n(194509),
    N = n(396375),
    v = n(511484),
    I = n(774774),
    j = n(231265),
    y = n(38720),
    O = n(788868),
    R = n(985018),
    P = n(70667),
    L = n(196093),
    D = n(979653),
    G = n(255631),
    M = n(193023);
let U = () => {
        let e = (0, j._)();
        return (0, i.jsx)(I.HU, { text: e, className: P.QR, colorOptions: I.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL });
    },
    k = () =>
        (0, i.jsx)("div", {
            className: P.Wm,
            children: (0, i.jsx)(c.Heading, {
                className: P.uC,
                variant: "heading-deprecated-12/extrabold",
                children: R.intl.string(R.t["o/oRJB"]),
            }),
        }),
    w = (e) => {
        let t,
            { premiumType: n, isPremiumGroup: s } = e,
            l = (0, u.Ay)();
        if (s)
            if (n === O.PremiumTypes.TIER_0)
                return (0, i.jsx)(c.Heading, {
                    variant: "display-md",
                    className: P.dW,
                    children: R.intl.string(R.t.tUbSDK),
                });
            else
                return (0, i.jsx)(c.Heading, {
                    variant: "display-md",
                    className: P.dW,
                    children: R.intl.string(R.t.Ipxkog),
                });
        t = n === O.PremiumTypes.TIER_0 ? ((0, o.Mw)(l) ? L : D) : (0, o.Mw)(l) ? G : M;
        let a = (0, p.Dd)(n);
        return (0, i.jsx)("img", { src: t, className: P.wm, alt: a });
    },
    V = (e) => {
        let { label: t, column1: n, column2: s } = e;
        return (0, i.jsxs)("tr", {
            className: a()(P.U1, P.YI, P.Y9),
            children: [
                (0, i.jsx)("th", { scope: "col", className: P.Cr, children: t }),
                (0, i.jsx)("th", { scope: "col", className: P.e4, children: n }),
                (0, i.jsx)("th", { scope: "col", className: a()(P.e4, P.Y9), children: s }),
            ],
        });
    },
    B = (e) => {
        let {
            label: t,
            column1: n,
            column2: s,
            withBottomBorder: l = !0,
            withTopBorderRadius: r = !1,
            withBottomBorderRadius: o = !1,
            buttonsRow: d = !1,
            shortRow: c = !1,
        } = e;
        return (0, i.jsxs)("tr", {
            className: a()(P.nM, { [P.EE]: d, [P.Y9]: r, [P.kS]: o, [P.YI]: l, [P.vs]: c }),
            children: [
                (0, i.jsx)("th", { scope: "row", className: P.nx, children: t }),
                (0, i.jsx)("td", { className: a()(P.Hn, { [P.SD]: d }), children: n }),
                (0, i.jsx)("td", { className: a()(P.Hn, { [P.Y9]: r, [P.kS]: o, [P.SD]: d }), children: s }),
            ],
        });
    },
    F = (e) => {
        let t,
            {
                className: n,
                hideCTAs: l = !1,
                headingOverride: j,
                hidePill: L = !1,
                selectedPlanColumnClassName: D,
                selectedPlanTier: G = O.PremiumTypes.TIER_2,
            } = e,
            { analyticsLocations: M } = (0, g.Ay)(m.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            F = (0, r.bG)([h.A], () => h.A.hasFetchedSubscriptions()),
            H = (0, x.Y)(O.T7),
            z = (0, u.Ay)(),
            Y = (0, o.qB)(z),
            X = (0, r.bG)([A.default], () => A.default.getCurrentUser()),
            K = null != X && X.isPremiumWithPremiumGroup(),
            W = (0, p.YE)(X, O.PremiumTypes.TIER_2),
            Z = (0, b.V)(),
            q = Z?.subscription_trial?.sku_id,
            Q = (0, f.Us)(),
            J = (0, S.O)(),
            $ = null != J && (0, v.U9)(J, O.pe.TIER_2),
            ee = (0, v.N1)(O.gD.PREMIUM_MONTH_TIER_2),
            et = `${ee}/${(0, p.FJ)(O.WT.MONTH)}`,
            en = (0, p.JM)(O.gD.PREMIUM_MONTH_TIER_0),
            ei = (0, p.JM)(O.gD.PREMIUM_MONTH_TIER_2),
            es = (0, _.A)(),
            el = (0, y.R)(en, ei, $, et, es.fractionalState),
            ea = (0, T.cg)();
        if (!F || !H) return null;
        let er = {
            label: (0, i.jsx)(c.Heading, {
                className: P.__invalid_textColor,
                variant: "heading-lg/extrabold",
                children: R.intl.string(R.t.ED4UVD),
            }),
            column1: (0, i.jsx)(w, { premiumType: O.PremiumTypes.TIER_0, isPremiumGroup: K }),
            column2: (0, i.jsx)(w, { premiumType: O.PremiumTypes.TIER_2, isPremiumGroup: K }),
        };
        l
            ? el.push({
                  label: null,
                  column1: null,
                  column2: null,
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: !1,
                  shortRow: !0,
              })
            : el.push({
                  label: null,
                  column1: (0, i.jsxs)(i.Fragment, {
                      children: [
                          q === O.pe.TIER_2 || ea
                              ? (0, i.jsx)(N.A, {
                                    className: P.x6,
                                    subscriptionTier: O.pe.TIER_0,
                                    showIcon: !1,
                                    look: d.pR.OUTLINED,
                                    color: Y ? d.XD.BRAND : d.XD.WHITE,
                                })
                              : (0, i.jsx)(N.A, { className: P.x6, subscriptionTier: O.pe.TIER_0, showIcon: !1 }),
                          Q === O.PremiumTypes.TIER_2 || null != q
                              ? null
                              : (0, i.jsx)(C.A, { className: P.x6, subscriptionTier: O.pe.TIER_0 }),
                      ],
                  }),
                  column2: (0, i.jsxs)(i.Fragment, {
                      children: [
                          q === O.pe.TIER_0
                              ? (0, i.jsx)(N.A, {
                                    className: P.x6,
                                    subscriptionTier: O.pe.TIER_2,
                                    showIcon: !1,
                                    look: d.pR.OUTLINED,
                                    color: Y ? d.XD.BRAND : d.XD.WHITE,
                                })
                              : (0, i.jsx)(N.A, {
                                    className: P.x6,
                                    subscriptionTier: O.pe.TIER_2,
                                    showIcon: !1,
                                    hasActivePromotion: ea,
                                }),
                          Q === O.PremiumTypes.TIER_0 || null != q
                              ? null
                              : (0, i.jsx)(C.A, { className: P.x6, subscriptionTier: O.pe.TIER_2 }),
                      ],
                  }),
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: null == q,
              }),
            (t = L
                ? null
                : null != q || null != Q
                  ? (0, i.jsx)(I.HU, {
                        text: null != q ? R.intl.string(R.t.IBYG5U) : R.intl.string(R.t.ce1v3V),
                        className: P.ls,
                        colorOptions:
                            q === O.pe.TIER_0
                                ? Y
                                    ? I.at.PREMIUM_TIER_0_GRADIENT_FILL
                                    : I.at.PREMIUM_TIER_0_WHITE_FILL
                                : Y
                                  ? W
                                      ? I.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      : I.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                                  : I.at.PREMIUM_TIER_2_WHITE_FILL,
                    })
                  : ea
                    ? (0, i.jsx)(U, {})
                    : (0, i.jsx)(k, {}));
        let eo = q === O.pe.TIER_0 || Q === O.PremiumTypes.TIER_0 || G === O.PremiumTypes.TIER_0;
        return (0, i.jsx)(g.f5, {
            value: M,
            children: (0, i.jsxs)("div", {
                className: a()(P.zr, n),
                "data-testid": "v2-marketing-page-comparison-table",
                children: [
                    (0, i.jsx)(c.Heading, {
                        className: a()(P.Qw, P.__invalid_textColor),
                        variant: "heading-xxl/extrabold",
                        children: j ?? R.intl.string(R.t.FIbMh9),
                    }),
                    K && (0, i.jsx)(E.A, { premiumGroupRole: X.premiumGroupRole, className: P.vg }),
                    (0, i.jsxs)("div", {
                        className: P.wY,
                        children: [
                            (0, i.jsx)("div", {
                                className: a()(D, { [P.A9]: eo, [P.ce]: !eo && !K }),
                                children: !eo && t,
                            }),
                            (0, i.jsxs)("table", {
                                className: P.tp,
                                children: [
                                    (0, i.jsx)("thead", { children: (0, i.jsx)(V, { ...er }) }),
                                    (0, i.jsx)("tbody", {
                                        children: el.map((e, t) => (0, s.createElement)(B, { ...e, key: t })),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
