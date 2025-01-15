n(653041);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
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
    R = n(388032),
    O = n(808112),
    P = n(102655),
    y = n(768236),
    D = n(314907),
    B = n(826701);
let Z = () => {
        let e = (0, b.W1)();
        return (0, i.jsx)(I.Cy, {
            text: e,
            className: O.bogoPillWithSparkles,
            colorOptions: I.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
        });
    },
    L = () =>
        (0, i.jsx)('div', {
            className: O.mostPopularPill,
            children: (0, i.jsx)(c.Heading, {
                className: O.mostPopularText,
                variant: 'heading-deprecated-12/extrabold',
                children: R.intl.string(R.t['o/oRJC'])
            })
        }),
    M = (e) => {
        let t,
            { premiumType: n } = e,
            s = (0, u.ZP)();
        t = n === j.p9.TIER_0 ? ((0, o.wj)(s) ? P : y) : (0, o.wj)(s) ? D : B;
        let r = (0, _.Px)(n);
        return (0, i.jsx)('img', {
            src: t,
            className: O.logo,
            alt: r
        });
    },
    k = (e) => {
        let { label: t, column1: n, column2: s } = e;
        return (0, i.jsxs)('tr', {
            className: a()(O.headerRow, O.rowBottomBorder, O.topBorderRadius),
            children: [
                (0, i.jsx)('th', {
                    scope: 'col',
                    className: O.headerLabelCell,
                    children: t
                }),
                (0, i.jsx)('th', {
                    scope: 'col',
                    className: O.headerCell,
                    children: n
                }),
                (0, i.jsx)('th', {
                    scope: 'col',
                    className: a()(O.headerCell, O.topBorderRadius),
                    children: s
                })
            ]
        });
    },
    w = (e) => {
        let { label: t, column1: n, column2: s, withBottomBorder: r = !0, withTopBorderRadius: l = !1, withBottomBorderRadius: o = !1, buttonsRow: c = !1, shortRow: d = !1 } = e;
        return (0, i.jsxs)('tr', {
            className: a()(O.row, {
                [O.wideRow]: c,
                [O.topBorderRadius]: l,
                [O.bottomBorderRadius]: o,
                [O.rowBottomBorder]: r,
                [O.shortRow]: d
            }),
            children: [
                (0, i.jsx)('th', {
                    scope: 'row',
                    className: O.labelCell,
                    children: t
                }),
                (0, i.jsx)('td', {
                    className: a()(O.cell, { [O.buttonsCell]: c }),
                    children: n
                }),
                (0, i.jsx)('td', {
                    className: a()(O.cell, {
                        [O.topBorderRadius]: l,
                        [O.bottomBorderRadius]: o,
                        [O.buttonsCell]: c
                    }),
                    children: s
                })
            ]
        });
    };
t.Z = (e) => {
    var t;
    let n,
        { className: r, hideCTAs: P = !1, headingOverride: y, hidePill: D = !1, selectedPlanColumnClassName: B, selectedPlanTier: F = j.p9.TIER_2 } = e,
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
        es = (0, h.Z)(),
        er = (0, N.n)(en, ei, $, et, es.fractionalState),
        ea = (0, b.Vi)();
    if (!V || !G) return null;
    let el = {
        label: (0, i.jsx)(c.Heading, {
            className: O.__invalid_textColor,
            variant: 'heading-lg/extrabold',
            children: R.intl.string(R.t.ED4UVF)
        }),
        column1: (0, i.jsx)(M, { premiumType: j.p9.TIER_0 }),
        column2: (0, i.jsx)(M, { premiumType: j.p9.TIER_2 })
    };
    P
        ? er.push({
              label: null,
              column1: null,
              column2: null,
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: !1,
              shortRow: !0
          })
        : er.push({
              label: null,
              column1: (0, i.jsxs)(i.Fragment, {
                  children: [
                      Q === j.Si.TIER_2 || ea
                          ? (0, i.jsx)(A.Z, {
                                className: O.button,
                                subscriptionTier: j.Si.TIER_0,
                                showIcon: !1,
                                look: c.ButtonLooks.OUTLINED,
                                color: W ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
                                buttonShineClassName: void 0
                            })
                          : (0, i.jsx)(A.Z, {
                                className: O.button,
                                subscriptionTier: j.Si.TIER_0,
                                showIcon: !1
                            }),
                      X === j.p9.TIER_2 || null != Q
                          ? null
                          : (0, i.jsx)(v.Z, {
                                className: O.button,
                                subscriptionTier: j.Si.TIER_0
                            })
                  ]
              }),
              column2: (0, i.jsxs)(i.Fragment, {
                  children: [
                      Q === j.Si.TIER_0
                          ? (0, i.jsx)(A.Z, {
                                className: O.button,
                                subscriptionTier: j.Si.TIER_2,
                                showIcon: !1,
                                look: c.ButtonLooks.OUTLINED,
                                color: W ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
                                buttonShineClassName: void 0
                            })
                          : (0, i.jsx)(A.Z, {
                                className: O.button,
                                subscriptionTier: j.Si.TIER_2,
                                showIcon: !1,
                                isEligibleForBogoPromotion: ea
                            }),
                      X === j.p9.TIER_0 || null != Q
                          ? null
                          : (0, i.jsx)(v.Z, {
                                className: O.button,
                                subscriptionTier: j.Si.TIER_2
                            })
                  ]
              }),
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: null == Q
          }),
        (n = D
            ? null
            : null != Q || null != X
              ? (0, i.jsx)(I.Cy, {
                    text: null != Q ? R.intl.string(R.t.IBYG5e) : R.intl.string(R.t.ce1v3d),
                    className: O.freeTrialPillWithSparkles,
                    colorOptions: Q === j.Si.TIER_0 ? (W ? I.VE.PREMIUM_TIER_0_GRADIENT_FILL : I.VE.PREMIUM_TIER_0_WHITE_FILL) : W ? (K ? I.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : I.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL) : I.VE.PREMIUM_TIER_2_WHITE_FILL
                })
              : ea
                ? (0, i.jsx)(Z, {})
                : (0, i.jsx)(L, {}));
    let eo = Q === j.Si.TIER_0 || X === j.p9.TIER_0 || F === j.p9.TIER_0;
    return (0, i.jsx)(g.Gt, {
        value: U,
        children: (0, i.jsxs)('div', {
            className: a()(O.root, r),
            'data-testid': 'v2-marketing-page-comparison-table',
            children: [
                (0, i.jsx)(c.Heading, {
                    className: a()(O.titleText, O.__invalid_textColor),
                    variant: 'heading-xxl/extrabold',
                    children: null != y ? y : R.intl.string(R.t.FIbMh4)
                }),
                (0, i.jsxs)('div', {
                    className: O.tableWrapper,
                    children: [
                        (0, i.jsx)('div', {
                            className: a()(B, {
                                [O.tier0ColumnOuter]: eo,
                                [O.tier2ColumnOuter]: !eo
                            }),
                            children: !eo && n
                        }),
                        (0, i.jsxs)('table', {
                            className: O.table,
                            children: [
                                (0, i.jsx)('thead', { children: (0, i.jsx)(k, { ...el }) }),
                                (0, i.jsx)('tbody', {
                                    children: er.map((e, t) =>
                                        (0, s.createElement)(w, {
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
