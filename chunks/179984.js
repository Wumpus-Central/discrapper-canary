n(653041);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(634894),
    u = n(410030),
    g = n(100527),
    m = n(906732),
    f = n(975298),
    p = n(15640),
    _ = n(594174),
    h = n(78839),
    x = n(74538),
    E = n(775412),
    b = n(104494),
    C = n(639119),
    v = n(230916),
    T = n(346497),
    N = n(823188),
    I = n(21023),
    S = n(318747),
    R = n(409100),
    j = n(474936),
    A = n(388032),
    P = n(808112),
    O = n(102655),
    Z = n(768236),
    M = n(314907),
    B = n(826701);
let y = () => {
        let e = (0, T.W1)();
        return (0, i.jsx)(N.Cy, {
            text: e,
            className: P.bogoPillWithSparkles,
            colorOptions: N.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
        });
    },
    w = () =>
        (0, i.jsx)('div', {
            className: P.mostPopularPill,
            children: (0, i.jsx)(c.Heading, {
                className: P.mostPopularText,
                variant: 'heading-deprecated-12/extrabold',
                children: A.intl.string(A.t['o/oRJC'])
            })
        }),
    k = (e) => {
        let t,
            { premiumType: n } = e,
            r = (0, u.ZP)();
        t = n === j.p9.TIER_0 ? ((0, o.wj)(r) ? O : Z) : (0, o.wj)(r) ? M : B;
        let a = (0, x.Px)(n);
        return (0, i.jsx)('img', {
            src: t,
            className: P.logo,
            alt: a
        });
    },
    L = (e) => {
        let { label: t, column1: n, column2: r } = e;
        return (0, i.jsxs)('tr', {
            className: s()(P.headerRow, P.rowBottomBorder, P.topBorderRadius),
            children: [
                (0, i.jsx)('th', {
                    scope: 'col',
                    className: P.headerLabelCell,
                    children: t
                }),
                (0, i.jsx)('th', {
                    scope: 'col',
                    className: P.headerCell,
                    children: n
                }),
                (0, i.jsx)('th', {
                    scope: 'col',
                    className: s()(P.headerCell, P.topBorderRadius),
                    children: r
                })
            ]
        });
    },
    U = (e) => {
        let { label: t, column1: n, column2: r, withBottomBorder: a = !0, withTopBorderRadius: l = !1, withBottomBorderRadius: o = !1, buttonsRow: c = !1, shortRow: d = !1 } = e;
        return (0, i.jsxs)('tr', {
            className: s()(P.row, {
                [P.wideRow]: c,
                [P.topBorderRadius]: l,
                [P.bottomBorderRadius]: o,
                [P.rowBottomBorder]: a,
                [P.shortRow]: d
            }),
            children: [
                (0, i.jsx)('th', {
                    scope: 'row',
                    className: P.labelCell,
                    children: t
                }),
                (0, i.jsx)('td', {
                    className: s()(P.cell, { [P.buttonsCell]: c }),
                    children: n
                }),
                (0, i.jsx)('td', {
                    className: s()(P.cell, {
                        [P.topBorderRadius]: l,
                        [P.bottomBorderRadius]: o,
                        [P.buttonsCell]: c
                    }),
                    children: r
                })
            ]
        });
    };
t.Z = (e) => {
    var t;
    let n,
        { className: a, hideCTAs: O = !1, headingOverride: Z, hidePill: M = !1, selectedPlanColumnClassName: B, selectedPlanTier: D = j.p9.TIER_2 } = e,
        { analyticsLocations: G } = (0, m.ZP)(g.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
        H = (0, l.e7)([h.ZP], () => h.ZP.hasFetchedSubscriptions()),
        V = (0, p.V)(),
        F = 'PlanComparisonTable';
    (0, d.j)({
        location: F + ' auto on',
        autoTrackExposure: !0
    }),
        (0, d.j)({
            location: F + ' auto off',
            autoTrackExposure: !1
        });
    let W = (0, u.ZP)(),
        z = (0, o.ap)(W),
        Y = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
        K = (0, x.M5)(Y, j.p9.TIER_2),
        Q = (0, C.N)(),
        q = null == Q ? void 0 : null === (t = Q.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        J = (0, E.rT)(),
        X = (0, b.Ng)(),
        $ = null != X && (0, b.Wp)(X, j.Si.TIER_2),
        ee = (0, v.A)(j.Xh.PREMIUM_MONTH_TIER_2),
        et = ''.concat(ee, '/').concat((0, x.eP)(j.rV.MONTH)),
        en = (0, x.CY)(j.Xh.PREMIUM_MONTH_TIER_0),
        ei = (0, x.CY)(j.Xh.PREMIUM_MONTH_TIER_2),
        er = (0, f.Z)(),
        ea = (0, I.n)(en, ei, $, et, er.fractionalState),
        es = (0, T.Vi)();
    if (!H || !V) return null;
    let el = {
        label: (0, i.jsx)(c.Heading, {
            className: P.__invalid_textColor,
            variant: 'heading-lg/extrabold',
            children: A.intl.string(A.t.ED4UVF)
        }),
        column1: (0, i.jsx)(k, { premiumType: j.p9.TIER_0 }),
        column2: (0, i.jsx)(k, { premiumType: j.p9.TIER_2 })
    };
    O
        ? ea.push({
              label: null,
              column1: null,
              column2: null,
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: !1,
              shortRow: !0
          })
        : ea.push({
              label: null,
              column1: (0, i.jsxs)(i.Fragment, {
                  children: [
                      q === j.Si.TIER_2 || es
                          ? (0, i.jsx)(R.Z, {
                                className: P.button,
                                subscriptionTier: j.Si.TIER_0,
                                showIcon: !1,
                                look: c.ButtonLooks.OUTLINED,
                                color: z ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
                                buttonShineClassName: void 0
                            })
                          : (0, i.jsx)(R.Z, {
                                className: P.button,
                                subscriptionTier: j.Si.TIER_0,
                                showIcon: !1
                            }),
                      J === j.p9.TIER_2 || null != q
                          ? null
                          : (0, i.jsx)(S.Z, {
                                className: P.button,
                                subscriptionTier: j.Si.TIER_0
                            })
                  ]
              }),
              column2: (0, i.jsxs)(i.Fragment, {
                  children: [
                      q === j.Si.TIER_0
                          ? (0, i.jsx)(R.Z, {
                                className: P.button,
                                subscriptionTier: j.Si.TIER_2,
                                showIcon: !1,
                                look: c.ButtonLooks.OUTLINED,
                                color: z ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
                                buttonShineClassName: void 0
                            })
                          : (0, i.jsx)(R.Z, {
                                className: P.button,
                                subscriptionTier: j.Si.TIER_2,
                                showIcon: !1,
                                isEligibleForBogoPromotion: es
                            }),
                      J === j.p9.TIER_0 || null != q
                          ? null
                          : (0, i.jsx)(S.Z, {
                                className: P.button,
                                subscriptionTier: j.Si.TIER_2
                            })
                  ]
              }),
              withBottomBorder: !1,
              withBottomBorderRadius: !0,
              buttonsRow: null == q
          }),
        (n = M
            ? null
            : null != q || null != J
              ? (0, i.jsx)(N.Cy, {
                    text: null != q ? A.intl.string(A.t.IBYG5e) : A.intl.string(A.t.ce1v3d),
                    className: P.freeTrialPillWithSparkles,
                    colorOptions: q === j.Si.TIER_0 ? (z ? N.VE.PREMIUM_TIER_0_GRADIENT_FILL : N.VE.PREMIUM_TIER_0_WHITE_FILL) : z ? (K ? N.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : N.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL) : N.VE.PREMIUM_TIER_2_WHITE_FILL
                })
              : es
                ? (0, i.jsx)(y, {})
                : (0, i.jsx)(w, {}));
    let eo = q === j.Si.TIER_0 || J === j.p9.TIER_0 || D === j.p9.TIER_0;
    return (0, i.jsx)(m.Gt, {
        value: G,
        children: (0, i.jsxs)('div', {
            className: s()(P.root, a),
            'data-testid': 'v2-marketing-page-comparison-table',
            children: [
                (0, i.jsx)(c.Heading, {
                    className: s()(P.titleText, P.__invalid_textColor),
                    variant: 'heading-xxl/extrabold',
                    children: null != Z ? Z : A.intl.string(A.t.FIbMh4)
                }),
                (0, i.jsxs)('div', {
                    className: P.tableWrapper,
                    children: [
                        (0, i.jsx)('div', {
                            className: s()(B, {
                                [P.tier0ColumnOuter]: eo,
                                [P.tier2ColumnOuter]: !eo
                            }),
                            children: !eo && n
                        }),
                        (0, i.jsxs)('table', {
                            className: P.table,
                            children: [
                                (0, i.jsx)('thead', { children: (0, i.jsx)(L, { ...el }) }),
                                (0, i.jsx)('tbody', {
                                    children: ea.map((e, t) =>
                                        (0, r.createElement)(U, {
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
