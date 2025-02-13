n.d(t, { Z: () => U }), n(653041);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(634894),
    u = n(410030),
    m = n(100527),
    g = n(906732),
    _ = n(975298),
    p = n(15640),
    f = n(594174),
    h = n(78839),
    x = n(74538),
    E = n(775412),
    C = n(104494),
    b = n(639119),
    v = n(230916),
    T = n(346497),
    N = n(823188),
    I = n(21023),
    R = n(318747),
    j = n(409100),
    S = n(474936),
    A = n(388032),
    P = n(226087),
    Z = n(102655),
    w = n(768236),
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
    k = () =>
        (0, i.jsx)('div', {
            className: P.mostPopularPill,
            children: (0, i.jsx)(c.X6q, {
                className: P.mostPopularText,
                variant: 'heading-deprecated-12/extrabold',
                children: A.intl.string(A.t['o/oRJC'])
            })
        }),
    O = (e) => {
        let t,
            { premiumType: n } = e,
            r = (0, u.ZP)();
        t = n === S.p9.TIER_0 ? ((0, o.wj)(r) ? Z : w) : (0, o.wj)(r) ? M : B;
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
    D = (e) => {
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
    },
    U = (e) => {
        var t;
        let n,
            { className: a, hideCTAs: Z = !1, headingOverride: w, hidePill: M = !1, selectedPlanColumnClassName: B, selectedPlanTier: U = S.p9.TIER_2 } = e,
            { analyticsLocations: G } = (0, g.ZP)(m.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
            V = (0, l.e7)([h.ZP], () => h.ZP.hasFetchedSubscriptions()),
            H = (0, p.V)(),
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
            Y = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
            q = (0, x.M5)(Y, S.p9.TIER_2),
            Q = (0, b.N)(),
            K = null == Q ? void 0 : null === (t = Q.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
            X = (0, E.rT)(),
            J = (0, C.Ng)(),
            $ = null != J && (0, C.Wp)(J, S.Si.TIER_2),
            ee = (0, v.A)(S.Xh.PREMIUM_MONTH_TIER_2),
            et = ''.concat(ee, '/').concat((0, x.eP)(S.rV.MONTH)),
            en = (0, x.CY)(S.Xh.PREMIUM_MONTH_TIER_0),
            ei = (0, x.CY)(S.Xh.PREMIUM_MONTH_TIER_2),
            er = (0, _.Z)(),
            ea = (0, I.n)(en, ei, $, et, er.fractionalState),
            es = (0, T.Vi)();
        if (!V || !H) return null;
        let el = {
            label: (0, i.jsx)(c.X6q, {
                className: P.__invalid_textColor,
                variant: 'heading-lg/extrabold',
                children: A.intl.string(A.t.ED4UVF)
            }),
            column1: (0, i.jsx)(O, { premiumType: S.p9.TIER_0 }),
            column2: (0, i.jsx)(O, { premiumType: S.p9.TIER_2 })
        };
        Z
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
                          K === S.Si.TIER_2 || es
                              ? (0, i.jsx)(j.Z, {
                                    className: P.button,
                                    subscriptionTier: S.Si.TIER_0,
                                    showIcon: !1,
                                    look: c.iLD.OUTLINED,
                                    color: z ? c.Ttl.BRAND : c.Ttl.WHITE,
                                    buttonShineClassName: void 0
                                })
                              : (0, i.jsx)(j.Z, {
                                    className: P.button,
                                    subscriptionTier: S.Si.TIER_0,
                                    showIcon: !1
                                }),
                          X === S.p9.TIER_2 || null != K
                              ? null
                              : (0, i.jsx)(R.Z, {
                                    className: P.button,
                                    subscriptionTier: S.Si.TIER_0
                                })
                      ]
                  }),
                  column2: (0, i.jsxs)(i.Fragment, {
                      children: [
                          K === S.Si.TIER_0
                              ? (0, i.jsx)(j.Z, {
                                    className: P.button,
                                    subscriptionTier: S.Si.TIER_2,
                                    showIcon: !1,
                                    look: c.iLD.OUTLINED,
                                    color: z ? c.Ttl.BRAND : c.Ttl.WHITE,
                                    buttonShineClassName: void 0
                                })
                              : (0, i.jsx)(j.Z, {
                                    className: P.button,
                                    subscriptionTier: S.Si.TIER_2,
                                    showIcon: !1,
                                    isEligibleForBogoPromotion: es
                                }),
                          X === S.p9.TIER_0 || null != K
                              ? null
                              : (0, i.jsx)(R.Z, {
                                    className: P.button,
                                    subscriptionTier: S.Si.TIER_2
                                })
                      ]
                  }),
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: null == K
              }),
            (n = M
                ? null
                : null != K || null != X
                  ? (0, i.jsx)(N.Cy, {
                        text: null != K ? A.intl.string(A.t.IBYG5e) : A.intl.string(A.t.ce1v3d),
                        className: P.freeTrialPillWithSparkles,
                        colorOptions: K === S.Si.TIER_0 ? (z ? N.VE.PREMIUM_TIER_0_GRADIENT_FILL : N.VE.PREMIUM_TIER_0_WHITE_FILL) : z ? (q ? N.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : N.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL) : N.VE.PREMIUM_TIER_2_WHITE_FILL
                    })
                  : es
                    ? (0, i.jsx)(y, {})
                    : (0, i.jsx)(k, {}));
        let eo = K === S.Si.TIER_0 || X === S.p9.TIER_0 || U === S.p9.TIER_0;
        return (0, i.jsx)(g.Gt, {
            value: G,
            children: (0, i.jsxs)('div', {
                className: s()(P.root, a),
                'data-testid': 'v2-marketing-page-comparison-table',
                children: [
                    (0, i.jsx)(c.X6q, {
                        className: s()(P.titleText, P.__invalid_textColor),
                        variant: 'heading-xxl/extrabold',
                        children: null != w ? w : A.intl.string(A.t.FIbMh4)
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
                                            (0, r.createElement)(D, {
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
