n(653041);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(634894),
    u = n(410030),
    m = n(100527),
    g = n(906732),
    h = n(975298),
    p = n(15640),
    x = n(594174),
    f = n(78839),
    _ = n(74538),
    E = n(775412),
    C = n(104494),
    T = n(639119),
    S = n(230916),
    b = n(346497),
    I = n(823188),
    N = n(21023),
    v = n(318747),
    A = n(409100),
    j = n(474936),
    O = n(388032),
    R = n(808112),
    P = n(102655),
    y = n(768236),
    B = n(314907),
    D = n(826701);
let Z = () => {
        let e = (0, b.W1)();
        return (0, i.jsx)(I.Cy, {
            text: e,
            className: R.bogoPillWithSparkles,
            colorOptions: I.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
        });
    },
    L = () =>
        (0, i.jsx)('div', {
            className: R.mostPopularPill,
            children: (0, i.jsx)(c.Heading, {
                className: R.mostPopularText,
                variant: 'heading-deprecated-12/extrabold',
                children: O.intl.string(O.t['o/oRJC'])
            })
        }),
    M = (e) => {
        let t,
            { premiumType: n } = e,
            r = (0, u.ZP)();
        t = n === j.p9.TIER_0 ? ((0, o.wj)(r) ? P : y) : (0, o.wj)(r) ? B : D;
        let s = (0, _.Px)(n);
        return (0, i.jsx)('img', {
            src: t,
            className: R.logo,
            alt: s
        });
    },
    k = (e) => {
        let { label: t, column1: n, column2: r } = e;
        return (0, i.jsxs)('tr', {
            className: a()(R.headerRow, R.rowBottomBorder, R.topBorderRadius),
            children: [
                (0, i.jsx)('th', {
                    scope: 'col',
                    className: R.headerLabelCell,
                    children: t
                }),
                (0, i.jsx)('th', {
                    scope: 'col',
                    className: R.headerCell,
                    children: n
                }),
                (0, i.jsx)('th', {
                    scope: 'col',
                    className: a()(R.headerCell, R.topBorderRadius),
                    children: r
                })
            ]
        });
    },
    w = (e) => {
        let { label: t, column1: n, column2: r, withBottomBorder: s = !0, withTopBorderRadius: l = !1, withBottomBorderRadius: o = !1, buttonsRow: c = !1, shortRow: d = !1 } = e;
        return (0, i.jsxs)('tr', {
            className: a()(R.row, {
                [R.wideRow]: c,
                [R.topBorderRadius]: l,
                [R.bottomBorderRadius]: o,
                [R.rowBottomBorder]: s,
                [R.shortRow]: d
            }),
            children: [
                (0, i.jsx)('th', {
                    scope: 'row',
                    className: R.labelCell,
                    children: t
                }),
                (0, i.jsx)('td', {
                    className: a()(R.cell, { [R.buttonsCell]: c }),
                    children: n
                }),
                (0, i.jsx)('td', {
                    className: a()(R.cell, {
                        [R.topBorderRadius]: l,
                        [R.bottomBorderRadius]: o,
                        [R.buttonsCell]: c
                    }),
                    children: r
                })
            ]
        });
    };
t.Z = (e) => {
    var t;
    let n,
        { className: s, hideCTAs: P = !1, headingOverride: y, hidePill: B = !1, selectedPlanColumnClassName: D, selectedPlanTier: F = j.p9.TIER_2 } = e,
        { analyticsLocations: U } = (0, g.ZP)(m.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
        V = (0, l.e7)([f.ZP], () => f.ZP.hasFetchedSubscriptions()),
        G = (0, p.V)(),
        H = 'PlanComparisonTable';
    (0, d.j)({
        location: H + ' auto on',
        autoTrackExposure: !0
    }),
        (0, d.j)({
            location: H + ' auto off',
            autoTrackExposure: !1
        });
    let Y = (0, u.ZP)(),
        W = (0, o.ap)(Y),
        z = (0, l.e7)([x.default], () => x.default.getCurrentUser()),
        K = (0, _.M5)(z, j.p9.TIER_2),
        q = (0, T.N)(),
        Q = null == q ? void 0 : null === (t = q.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        X = (0, E.rT)(),
        J = (0, C.Ng)(),
        $ = null != J && (0, C.Wp)(J, j.Si.TIER_2),
        ee = (0, S.A)(j.Xh.PREMIUM_MONTH_TIER_2),
        et = ''.concat(ee, '/').concat((0, _.eP)(j.rV.MONTH)),
        en = (0, _.CY)(j.Xh.PREMIUM_MONTH_TIER_0),
        ei = (0, _.CY)(j.Xh.PREMIUM_MONTH_TIER_2),
        er = (0, h.Z)(),
        es = (0, N.n)(en, ei, $, et, er.fractionalState),
        ea = (0, b.Vi)();
    if (!V || !G) return null;
    let el = {
        label: (0, i.jsx)(c.Heading, {
            className: R.__invalid_textColor,
            variant: 'heading-lg/extrabold',
            children: O.intl.string(O.t.ED4UVF)
        }),
        column1: (0, i.jsx)(M, { premiumType: j.p9.TIER_0 }),
        column2: (0, i.jsx)(M, { premiumType: j.p9.TIER_2 })
    };
    P
        ? es.push({
              label: null,
              column1: null,
              column2: null,
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: !1,
              shortRow: !0
          })
        : es.push({
              label: null,
              column1: (0, i.jsxs)(i.Fragment, {
                  children: [
                      Q === j.Si.TIER_2 || ea
                          ? (0, i.jsx)(A.Z, {
                                className: R.button,
                                subscriptionTier: j.Si.TIER_0,
                                showIcon: !1,
                                look: c.ButtonLooks.OUTLINED,
                                color: W ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
                                buttonShineClassName: void 0
                            })
                          : (0, i.jsx)(A.Z, {
                                className: R.button,
                                subscriptionTier: j.Si.TIER_0,
                                showIcon: !1
                            }),
                      X === j.p9.TIER_2 || null != Q
                          ? null
                          : (0, i.jsx)(v.Z, {
                                className: R.button,
                                subscriptionTier: j.Si.TIER_0
                            })
                  ]
              }),
              column2: (0, i.jsxs)(i.Fragment, {
                  children: [
                      Q === j.Si.TIER_0
                          ? (0, i.jsx)(A.Z, {
                                className: R.button,
                                subscriptionTier: j.Si.TIER_2,
                                showIcon: !1,
                                look: c.ButtonLooks.OUTLINED,
                                color: W ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
                                buttonShineClassName: void 0
                            })
                          : (0, i.jsx)(A.Z, {
                                className: R.button,
                                subscriptionTier: j.Si.TIER_2,
                                showIcon: !1,
                                isEligibleForBogoPromotion: ea
                            }),
                      X === j.p9.TIER_0 || null != Q
                          ? null
                          : (0, i.jsx)(v.Z, {
                                className: R.button,
                                subscriptionTier: j.Si.TIER_2
                            })
                  ]
              }),
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: null == Q
          }),
        (n = B
            ? null
            : null != Q || null != X
              ? (0, i.jsx)(I.Cy, {
                    text: null != Q ? O.intl.string(O.t.IBYG5e) : O.intl.string(O.t.ce1v3d),
                    className: R.freeTrialPillWithSparkles,
                    colorOptions: Q === j.Si.TIER_0 ? (W ? I.VE.PREMIUM_TIER_0_GRADIENT_FILL : I.VE.PREMIUM_TIER_0_WHITE_FILL) : W ? (K ? I.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : I.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL) : I.VE.PREMIUM_TIER_2_WHITE_FILL
                })
              : ea
                ? (0, i.jsx)(Z, {})
                : (0, i.jsx)(L, {}));
    let eo = Q === j.Si.TIER_0 || X === j.p9.TIER_0 || F === j.p9.TIER_0;
    return (0, i.jsx)(g.Gt, {
        value: U,
        children: (0, i.jsxs)('div', {
            className: a()(R.root, s),
            'data-testid': 'v2-marketing-page-comparison-table',
            children: [
                (0, i.jsx)(c.Heading, {
                    className: a()(R.titleText, R.__invalid_textColor),
                    variant: 'heading-xxl/extrabold',
                    children: null != y ? y : O.intl.string(O.t.FIbMh4)
                }),
                (0, i.jsxs)('div', {
                    className: R.tableWrapper,
                    children: [
                        (0, i.jsx)('div', {
                            className: a()(D, {
                                [R.tier0ColumnOuter]: eo,
                                [R.tier2ColumnOuter]: !eo
                            }),
                            children: !eo && n
                        }),
                        (0, i.jsxs)('table', {
                            className: R.table,
                            children: [
                                (0, i.jsx)('thead', { children: (0, i.jsx)(k, { ...el }) }),
                                (0, i.jsx)('tbody', {
                                    children: es.map((e, t) =>
                                        (0, r.createElement)(w, {
                                            ...e,
                                            key: t
                                        })
                                    )
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
