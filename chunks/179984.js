n.d(t, { Z: () => V }), n(653041);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(634894),
    u = n(410030),
    m = n(100527),
    h = n(906732),
    g = n(975298),
    _ = n(15640),
    x = n(594174),
    p = n(78839),
    E = n(74538),
    C = n(775412),
    f = n(104494),
    T = n(639119),
    N = n(230916),
    I = n(346497),
    S = n(823188),
    b = n(21023),
    v = n(318747),
    j = n(409100),
    A = n(474936),
    O = n(388032),
    R = n(808112),
    P = n(102655),
    D = n(768236),
    y = n(314907),
    Z = n(826701);
let k = () => {
        let e = (0, I.W1)();
        return (0, i.jsx)(S.Cy, {
            text: e,
            className: R.bogoPillWithSparkles,
            colorOptions: S.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
        });
    },
    L = () =>
        (0, i.jsx)('div', {
            className: R.mostPopularPill,
            children: (0, i.jsx)(c.X6q, {
                className: R.mostPopularText,
                variant: 'heading-deprecated-12/extrabold',
                children: O.intl.string(O.t['o/oRJC'])
            })
        }),
    B = (e) => {
        let t,
            { premiumType: n } = e,
            s = (0, u.ZP)();
        t = n === A.p9.TIER_0 ? ((0, o.wj)(s) ? P : D) : (0, o.wj)(s) ? y : Z;
        let r = (0, E.Px)(n);
        return (0, i.jsx)('img', {
            src: t,
            className: R.logo,
            alt: r
        });
    },
    M = (e) => {
        let { label: t, column1: n, column2: s } = e;
        return (0, i.jsxs)('tr', {
            className: l()(R.headerRow, R.rowBottomBorder, R.topBorderRadius),
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
                    className: l()(R.headerCell, R.topBorderRadius),
                    children: s
                })
            ]
        });
    },
    w = (e) => {
        let { label: t, column1: n, column2: s, withBottomBorder: r = !0, withTopBorderRadius: a = !1, withBottomBorderRadius: o = !1, buttonsRow: c = !1, shortRow: d = !1 } = e;
        return (0, i.jsxs)('tr', {
            className: l()(R.row, {
                [R.wideRow]: c,
                [R.topBorderRadius]: a,
                [R.bottomBorderRadius]: o,
                [R.rowBottomBorder]: r,
                [R.shortRow]: d
            }),
            children: [
                (0, i.jsx)('th', {
                    scope: 'row',
                    className: R.labelCell,
                    children: t
                }),
                (0, i.jsx)('td', {
                    className: l()(R.cell, { [R.buttonsCell]: c }),
                    children: n
                }),
                (0, i.jsx)('td', {
                    className: l()(R.cell, {
                        [R.topBorderRadius]: a,
                        [R.bottomBorderRadius]: o,
                        [R.buttonsCell]: c
                    }),
                    children: s
                })
            ]
        });
    },
    V = (e) => {
        var t;
        let n,
            { className: r, hideCTAs: P = !1, headingOverride: D, hidePill: y = !1, selectedPlanColumnClassName: Z, selectedPlanTier: V = A.p9.TIER_2 } = e,
            { analyticsLocations: U } = (0, h.ZP)(m.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
            G = (0, a.e7)([p.ZP], () => p.ZP.hasFetchedSubscriptions()),
            F = (0, _.V)(),
            H = 'PlanComparisonTable';
        (0, d.j)({
            location: H + ' auto on',
            autoTrackExposure: !0
        }),
            (0, d.j)({
                location: H + ' auto off',
                autoTrackExposure: !1
            });
        let z = (0, u.ZP)(),
            Y = (0, o.ap)(z),
            W = (0, a.e7)([x.default], () => x.default.getCurrentUser()),
            K = (0, E.M5)(W, A.p9.TIER_2),
            X = (0, T.N)(),
            q = null == X ? void 0 : null === (t = X.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
            J = (0, C.rT)(),
            Q = (0, f.Ng)(),
            $ = null != Q && (0, f.Wp)(Q, A.Si.TIER_2),
            ee = (0, N.A)(A.Xh.PREMIUM_MONTH_TIER_2),
            et = ''.concat(ee, '/').concat((0, E.eP)(A.rV.MONTH)),
            en = (0, E.CY)(A.Xh.PREMIUM_MONTH_TIER_0),
            ei = (0, E.CY)(A.Xh.PREMIUM_MONTH_TIER_2),
            es = (0, g.Z)(),
            er = (0, b.n)(en, ei, $, et, es.fractionalState),
            el = (0, I.Vi)();
        if (!G || !F) return null;
        let ea = {
            label: (0, i.jsx)(c.X6q, {
                className: R.__invalid_textColor,
                variant: 'heading-lg/extrabold',
                children: O.intl.string(O.t.ED4UVF)
            }),
            column1: (0, i.jsx)(B, { premiumType: A.p9.TIER_0 }),
            column2: (0, i.jsx)(B, { premiumType: A.p9.TIER_2 })
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
                          q === A.Si.TIER_2 || el
                              ? (0, i.jsx)(j.Z, {
                                    className: R.button,
                                    subscriptionTier: A.Si.TIER_0,
                                    showIcon: !1,
                                    look: c.iLD.OUTLINED,
                                    color: Y ? c.Ttl.BRAND : c.Ttl.WHITE,
                                    buttonShineClassName: void 0
                                })
                              : (0, i.jsx)(j.Z, {
                                    className: R.button,
                                    subscriptionTier: A.Si.TIER_0,
                                    showIcon: !1
                                }),
                          J === A.p9.TIER_2 || null != q
                              ? null
                              : (0, i.jsx)(v.Z, {
                                    className: R.button,
                                    subscriptionTier: A.Si.TIER_0
                                })
                      ]
                  }),
                  column2: (0, i.jsxs)(i.Fragment, {
                      children: [
                          q === A.Si.TIER_0
                              ? (0, i.jsx)(j.Z, {
                                    className: R.button,
                                    subscriptionTier: A.Si.TIER_2,
                                    showIcon: !1,
                                    look: c.iLD.OUTLINED,
                                    color: Y ? c.Ttl.BRAND : c.Ttl.WHITE,
                                    buttonShineClassName: void 0
                                })
                              : (0, i.jsx)(j.Z, {
                                    className: R.button,
                                    subscriptionTier: A.Si.TIER_2,
                                    showIcon: !1,
                                    isEligibleForBogoPromotion: el
                                }),
                          J === A.p9.TIER_0 || null != q
                              ? null
                              : (0, i.jsx)(v.Z, {
                                    className: R.button,
                                    subscriptionTier: A.Si.TIER_2
                                })
                      ]
                  }),
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: null == q
              }),
            (n = y
                ? null
                : null != q || null != J
                  ? (0, i.jsx)(S.Cy, {
                        text: null != q ? O.intl.string(O.t.IBYG5e) : O.intl.string(O.t.ce1v3d),
                        className: R.freeTrialPillWithSparkles,
                        colorOptions: q === A.Si.TIER_0 ? (Y ? S.VE.PREMIUM_TIER_0_GRADIENT_FILL : S.VE.PREMIUM_TIER_0_WHITE_FILL) : Y ? (K ? S.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : S.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL) : S.VE.PREMIUM_TIER_2_WHITE_FILL
                    })
                  : el
                    ? (0, i.jsx)(k, {})
                    : (0, i.jsx)(L, {}));
        let eo = q === A.Si.TIER_0 || J === A.p9.TIER_0 || V === A.p9.TIER_0;
        return (0, i.jsx)(h.Gt, {
            value: U,
            children: (0, i.jsxs)('div', {
                className: l()(R.root, r),
                'data-testid': 'v2-marketing-page-comparison-table',
                children: [
                    (0, i.jsx)(c.X6q, {
                        className: l()(R.titleText, R.__invalid_textColor),
                        variant: 'heading-xxl/extrabold',
                        children: null != D ? D : O.intl.string(O.t.FIbMh4)
                    }),
                    (0, i.jsxs)('div', {
                        className: R.tableWrapper,
                        children: [
                            (0, i.jsx)('div', {
                                className: l()(Z, {
                                    [R.tier0ColumnOuter]: eo,
                                    [R.tier2ColumnOuter]: !eo
                                }),
                                children: !eo && n
                            }),
                            (0, i.jsxs)('table', {
                                className: R.table,
                                children: [
                                    (0, i.jsx)('thead', { children: (0, i.jsx)(M, { ...ea }) }),
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
