(n.d(t, { Z: () => F }), n(539854));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(780384),
    c = n(755721),
    d = n(481060),
    u = n(410030),
    m = n(100527),
    p = n(906732),
    g = n(975298),
    h = n(15640),
    f = n(594174),
    b = n(78839),
    x = n(74538),
    _ = n(367074),
    j = n(775412),
    C = n(46062),
    E = n(104494),
    O = n(639119),
    v = n(736519),
    S = n(784238),
    T = n(230916),
    N = n(346497),
    I = n(382791),
    y = n(21023),
    A = n(474936),
    P = n(388032),
    R = n(554074),
    D = n(102655),
    Z = n(768236),
    w = n(314907),
    k = n(826701);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
let B = () => {
        let e = (0, N.W)();
        return (0, i.jsx)(I.Cy, {
            text: e,
            className: R.bogoPillWithSparkles,
            colorOptions: I.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
        });
    },
    M = () =>
        (0, i.jsx)('div', {
            className: R.mostPopularPill,
            children: (0, i.jsx)(d.X6q, {
                className: R.mostPopularText,
                variant: 'heading-deprecated-12/extrabold',
                children: P.intl.string(P.t['o/oRJC'])
            })
        }),
    U = (e) => {
        let t,
            { premiumType: n } = e,
            r = (0, u.ZP)();
        t = n === A.p9.TIER_0 ? ((0, o.wj)(r) ? D : Z) : (0, o.wj)(r) ? w : k;
        let s = (0, x.Px)(n);
        return (0, i.jsx)('img', {
            src: t,
            className: R.logo,
            alt: s
        });
    },
    V = (e) => {
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
    G = (e) => {
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
    },
    F = (e) => {
        var t;
        let n,
            { className: s, hideCTAs: N = !1, headingOverride: D, hidePill: Z = !1, selectedPlanColumnClassName: w, selectedPlanTier: k = A.p9.TIER_2 } = e,
            { analyticsLocations: F } = (0, p.ZP)(m.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
            H = (0, l.e7)([b.Z], () => b.Z.hasFetchedSubscriptions()),
            W = (0, h.V)(A.nS),
            z = (0, u.ZP)(),
            Y = (0, o.ap)(z),
            K = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
            q = (0, x.M5)(K, A.p9.TIER_2),
            X = (0, O.N)(),
            J = null == X || null == (t = X.subscription_trial) ? void 0 : t.sku_id,
            Q = (0, j.rT)(),
            $ = (0, E.Ng)(),
            ee = null != $ && (0, E.Wp)($, A.Si.TIER_2),
            et = (0, T.A)(A.Xh.PREMIUM_MONTH_TIER_2),
            en = ''.concat(et, '/').concat((0, x.eP)(A.rV.MONTH)),
            ei = (0, x.CY)(A.Xh.PREMIUM_MONTH_TIER_0),
            er = (0, x.CY)(A.Xh.PREMIUM_MONTH_TIER_2),
            es = (0, g.Z)(),
            ea = (0, y.n)(ei, er, ee, en, es.fractionalState),
            el = (0, _.Vi)(),
            { enabled: eo } = C.T.useExperiment({ location: 'PlanComparisonTable' });
        if (!H || !W) return null;
        let ec = eo ? P.intl.string(P.t.XXENra) : P.intl.string(P.t.ED4UVF),
            ed = {
                label: (0, i.jsx)(d.X6q, {
                    className: R.__invalid_textColor,
                    variant: 'heading-lg/extrabold',
                    children: ec
                }),
                column1: (0, i.jsx)(U, { premiumType: A.p9.TIER_0 }),
                column2: (0, i.jsx)(U, { premiumType: A.p9.TIER_2 })
            };
        (N
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
                          J === A.Si.TIER_2 || el
                              ? (0, i.jsx)(S.Z, {
                                    className: R.button,
                                    subscriptionTier: A.Si.TIER_0,
                                    showIcon: !1,
                                    look: c.iL.OUTLINED,
                                    color: Y ? c.Tt.BRAND : c.Tt.WHITE
                                })
                              : (0, i.jsx)(S.Z, {
                                    className: R.button,
                                    subscriptionTier: A.Si.TIER_0,
                                    showIcon: !1
                                }),
                          Q === A.p9.TIER_2 || null != J
                              ? null
                              : (0, i.jsx)(v.Z, {
                                    className: R.button,
                                    subscriptionTier: A.Si.TIER_0
                                })
                      ]
                  }),
                  column2: (0, i.jsxs)(i.Fragment, {
                      children: [
                          J === A.Si.TIER_0
                              ? (0, i.jsx)(S.Z, {
                                    className: R.button,
                                    subscriptionTier: A.Si.TIER_2,
                                    showIcon: !1,
                                    look: c.iL.OUTLINED,
                                    color: Y ? c.Tt.BRAND : c.Tt.WHITE
                                })
                              : (0, i.jsx)(S.Z, {
                                    className: R.button,
                                    subscriptionTier: A.Si.TIER_2,
                                    showIcon: !1,
                                    hasActivePromotion: el
                                }),
                          Q === A.p9.TIER_0 || null != J
                              ? null
                              : (0, i.jsx)(v.Z, {
                                    className: R.button,
                                    subscriptionTier: A.Si.TIER_2
                                })
                      ]
                  }),
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: null == J
              }),
            (n = Z
                ? null
                : null != J || null != Q
                  ? (0, i.jsx)(I.Cy, {
                        text: null != J ? P.intl.string(P.t.IBYG5e) : P.intl.string(P.t.ce1v3d),
                        className: R.freeTrialPillWithSparkles,
                        colorOptions: J === A.Si.TIER_0 ? (Y ? I.VE.PREMIUM_TIER_0_GRADIENT_FILL : I.VE.PREMIUM_TIER_0_WHITE_FILL) : Y ? (q ? I.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : I.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL) : I.VE.PREMIUM_TIER_2_WHITE_FILL
                    })
                  : el
                    ? (0, i.jsx)(B, {})
                    : (0, i.jsx)(M, {})));
        let eu = J === A.Si.TIER_0 || Q === A.p9.TIER_0 || k === A.p9.TIER_0;
        return (0, i.jsx)(p.Gt, {
            value: F,
            children: (0, i.jsxs)('div', {
                className: a()(R.root, s),
                'data-testid': 'v2-marketing-page-comparison-table',
                children: [
                    (0, i.jsx)(d.X6q, {
                        className: a()(R.titleText, R.__invalid_textColor),
                        variant: 'heading-xxl/extrabold',
                        children: null != D ? D : P.intl.string(P.t.FIbMh4)
                    }),
                    (0, i.jsxs)('div', {
                        className: R.tableWrapper,
                        children: [
                            (0, i.jsx)('div', {
                                className: a()(w, {
                                    [R.tier0ColumnOuter]: eu,
                                    [R.tier2ColumnOuter]: !eu
                                }),
                                children: !eu && n
                            }),
                            (0, i.jsxs)('table', {
                                className: R.table,
                                children: [
                                    (0, i.jsx)('thead', { children: (0, i.jsx)(V, L({}, ed)) }),
                                    (0, i.jsx)('tbody', {
                                        children: ea.map((e, t) => {
                                            var n, i;
                                            return (0, r.createElement)(
                                                G,
                                                ((n = L({}, e)),
                                                (i = i = { key: t }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                                    : (function (e, t) {
                                                          var n = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var i = Object.getOwnPropertySymbols(e);
                                                              n.push.apply(n, i);
                                                          }
                                                          return n;
                                                      })(Object(i)).forEach(function (e) {
                                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                                      }),
                                                n)
                                            );
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    };
