n.d(t, { Z: () => W }), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(780384),
    c = n(755721),
    u = n(481060),
    d = n(410030),
    f = n(100527),
    _ = n(906732),
    p = n(975298),
    h = n(15640),
    m = n(594174),
    g = n(78839),
    E = n(74538),
    b = n(367074),
    y = n(775412),
    O = n(46062),
    v = n(622909),
    I = n(639119),
    T = n(736519),
    S = n(784238),
    A = n(230916),
    C = n(346497),
    N = n(382791),
    R = n(21023),
    P = n(474936),
    D = n(388032),
    w = n(17355),
    L = n(102655),
    x = n(768236),
    M = n(314907),
    j = n(826701);
function k(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                k(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Z = () => {
        let e = (0, C.W)();
        return (0, r.jsx)(N.Cy, {
            text: e,
            className: w.bogoPillWithSparkles,
            colorOptions: N.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL,
        });
    },
    F = () =>
        (0, r.jsx)("div", {
            className: w.mostPopularPill,
            children: (0, r.jsx)(u.Heading, {
                className: w.mostPopularText,
                variant: "heading-deprecated-12/extrabold",
                children: D.intl.string(D.t["o/oRJB"]),
            }),
        }),
    V = (e) => {
        let t,
            { premiumType: n } = e,
            i = (0, d.ZP)();
        t = n === P.PremiumTypes.TIER_0 ? ((0, l.wj)(i) ? L : x) : (0, l.wj)(i) ? M : j;
        let a = (0, E.Px)(n);
        return (0, r.jsx)("img", {
            src: t,
            className: w.logo,
            alt: a,
        });
    },
    H = (e) => {
        let { label: t, column1: n, column2: i } = e;
        return (0, r.jsxs)("tr", {
            className: o()(w.headerRow, w.rowBottomBorder, w.topBorderRadius),
            children: [
                (0, r.jsx)("th", {
                    scope: "col",
                    className: w.headerLabelCell,
                    children: t,
                }),
                (0, r.jsx)("th", {
                    scope: "col",
                    className: w.headerCell,
                    children: n,
                }),
                (0, r.jsx)("th", {
                    scope: "col",
                    className: o()(w.headerCell, w.topBorderRadius),
                    children: i,
                }),
            ],
        });
    },
    Y = (e) => {
        let {
            label: t,
            column1: n,
            column2: i,
            withBottomBorder: a = !0,
            withTopBorderRadius: s = !1,
            withBottomBorderRadius: l = !1,
            buttonsRow: c = !1,
            shortRow: u = !1,
        } = e;
        return (0, r.jsxs)("tr", {
            className: o()(w.row, {
                [w.wideRow]: c,
                [w.topBorderRadius]: s,
                [w.bottomBorderRadius]: l,
                [w.rowBottomBorder]: a,
                [w.shortRow]: u,
            }),
            children: [
                (0, r.jsx)("th", {
                    scope: "row",
                    className: w.labelCell,
                    children: t,
                }),
                (0, r.jsx)("td", {
                    className: o()(w.cell, { [w.buttonsCell]: c }),
                    children: n,
                }),
                (0, r.jsx)("td", {
                    className: o()(w.cell, {
                        [w.topBorderRadius]: s,
                        [w.bottomBorderRadius]: l,
                        [w.buttonsCell]: c,
                    }),
                    children: i,
                }),
            ],
        });
    },
    W = (e) => {
        var t;
        let n,
            {
                className: a,
                hideCTAs: C = !1,
                headingOverride: L,
                hidePill: x = !1,
                selectedPlanColumnClassName: M,
                selectedPlanTier: j = P.PremiumTypes.TIER_2,
            } = e,
            { analyticsLocations: k } = (0, _.ZP)(f.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
            G = (0, s.e7)([g.Z], () => g.Z.hasFetchedSubscriptions()),
            W = (0, h.V)(P.nS),
            K = (0, d.ZP)(),
            z = (0, l.ap)(K),
            q = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
            X = (0, E.M5)(q, P.PremiumTypes.TIER_2),
            Q = (0, I.N)(),
            J = null == Q || null == (t = Q.subscription_trial) ? void 0 : t.sku_id,
            $ = (0, y.rT)(),
            ee = (0, v.N)(),
            et = null != ee && (0, A.Wp)(ee, P.Si.TIER_2),
            en = (0, A.Aq)(P.Xh.PREMIUM_MONTH_TIER_2),
            er = "".concat(en, "/").concat((0, E.eP)(P.rV.MONTH)),
            ei = (0, E.CY)(P.Xh.PREMIUM_MONTH_TIER_0),
            ea = (0, E.CY)(P.Xh.PREMIUM_MONTH_TIER_2),
            eo = (0, p.Z)(),
            es = (0, R.n)(ei, ea, et, er, eo.fractionalState),
            el = (0, b.Vi)(),
            { enabled: ec } = O.T.useExperiment({ location: "PlanComparisonTable" });
        if (!G || !W) return null;
        let eu = ec ? D.intl.string(D.t.XXENra) : D.intl.string(D.t.ED4UVD),
            ed = {
                label: (0, r.jsx)(u.Heading, {
                    className: w.__invalid_textColor,
                    variant: "heading-lg/extrabold",
                    children: eu,
                }),
                column1: (0, r.jsx)(V, { premiumType: P.PremiumTypes.TIER_0 }),
                column2: (0, r.jsx)(V, { premiumType: P.PremiumTypes.TIER_2 }),
            };
        C
            ? es.push({
                  label: null,
                  column1: null,
                  column2: null,
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: !1,
                  shortRow: !0,
              })
            : es.push({
                  label: null,
                  column1: (0, r.jsxs)(r.Fragment, {
                      children: [
                          J === P.Si.TIER_2 || el
                              ? (0, r.jsx)(S.Z, {
                                    className: w.button,
                                    subscriptionTier: P.Si.TIER_0,
                                    showIcon: !1,
                                    look: c.iL.OUTLINED,
                                    color: z ? c.Tt.BRAND : c.Tt.WHITE,
                                })
                              : (0, r.jsx)(S.Z, {
                                    className: w.button,
                                    subscriptionTier: P.Si.TIER_0,
                                    showIcon: !1,
                                }),
                          $ === P.PremiumTypes.TIER_2 || null != J
                              ? null
                              : (0, r.jsx)(T.Z, {
                                    className: w.button,
                                    subscriptionTier: P.Si.TIER_0,
                                }),
                      ],
                  }),
                  column2: (0, r.jsxs)(r.Fragment, {
                      children: [
                          J === P.Si.TIER_0
                              ? (0, r.jsx)(S.Z, {
                                    className: w.button,
                                    subscriptionTier: P.Si.TIER_2,
                                    showIcon: !1,
                                    look: c.iL.OUTLINED,
                                    color: z ? c.Tt.BRAND : c.Tt.WHITE,
                                })
                              : (0, r.jsx)(S.Z, {
                                    className: w.button,
                                    subscriptionTier: P.Si.TIER_2,
                                    showIcon: !1,
                                    hasActivePromotion: el,
                                }),
                          $ === P.PremiumTypes.TIER_0 || null != J
                              ? null
                              : (0, r.jsx)(T.Z, {
                                    className: w.button,
                                    subscriptionTier: P.Si.TIER_2,
                                }),
                      ],
                  }),
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: null == J,
              }),
            (n = x
                ? null
                : null != J || null != $
                  ? (0, r.jsx)(N.Cy, {
                        text: null != J ? D.intl.string(D.t.IBYG5U) : D.intl.string(D.t.ce1v3V),
                        className: w.freeTrialPillWithSparkles,
                        colorOptions:
                            J === P.Si.TIER_0
                                ? z
                                    ? N.VE.PREMIUM_TIER_0_GRADIENT_FILL
                                    : N.VE.PREMIUM_TIER_0_WHITE_FILL
                                : z
                                  ? X
                                      ? N.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                      : N.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                                  : N.VE.PREMIUM_TIER_2_WHITE_FILL,
                    })
                  : el
                    ? (0, r.jsx)(Z, {})
                    : (0, r.jsx)(F, {}));
        let ef = J === P.Si.TIER_0 || $ === P.PremiumTypes.TIER_0 || j === P.PremiumTypes.TIER_0;
        return (0, r.jsx)(_.Gt, {
            value: k,
            children: (0, r.jsxs)("div", {
                className: o()(w.root, a),
                "data-testid": "v2-marketing-page-comparison-table",
                children: [
                    (0, r.jsx)(u.Heading, {
                        className: o()(w.titleText, w.__invalid_textColor),
                        variant: "heading-xxl/extrabold",
                        children: null != L ? L : D.intl.string(D.t.FIbMh9),
                    }),
                    (0, r.jsxs)("div", {
                        className: w.tableWrapper,
                        children: [
                            (0, r.jsx)("div", {
                                className: o()(M, {
                                    [w.tier0ColumnOuter]: ef,
                                    [w.tier2ColumnOuter]: !ef,
                                }),
                                children: !ef && n,
                            }),
                            (0, r.jsxs)("table", {
                                className: w.table,
                                children: [
                                    (0, r.jsx)("thead", { children: (0, r.jsx)(H, U({}, ed)) }),
                                    (0, r.jsx)("tbody", {
                                        children: es.map((e, t) => (0, i.createElement)(Y, B(U({}, e), { key: t }))),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
