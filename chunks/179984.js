n.d(t, { Z: () => V }), n(539854);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(634894),
    u = n(410030),
    m = n(100527),
    g = n(906732),
    p = n(975298),
    h = n(15640),
    f = n(594174),
    b = n(78839),
    _ = n(74538),
    x = n(775412),
    E = n(104494),
    j = n(639119),
    C = n(230916),
    O = n(346497),
    S = n(823188),
    v = n(21023),
    T = n(318747),
    I = n(409100),
    N = n(474936),
    y = n(388032),
    A = n(554074),
    P = n(102655),
    R = n(768236),
    D = n(314907),
    Z = n(826701);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
let k = () => {
        let e = (0, O.W1)();
        return (0, i.jsx)(S.Cy, {
            text: e,
            className: A.bogoPillWithSparkles,
            colorOptions: S.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
        });
    },
    L = () =>
        (0, i.jsx)('div', {
            className: A.mostPopularPill,
            children: (0, i.jsx)(c.X6q, {
                className: A.mostPopularText,
                variant: 'heading-deprecated-12/extrabold',
                children: y.intl.string(y.t['o/oRJC'])
            })
        }),
    B = (e) => {
        let t,
            { premiumType: n } = e,
            r = (0, u.ZP)();
        t = n === N.p9.TIER_0 ? ((0, o.wj)(r) ? P : R) : (0, o.wj)(r) ? D : Z;
        let s = (0, _.Px)(n);
        return (0, i.jsx)('img', {
            src: t,
            className: A.logo,
            alt: s
        });
    },
    M = (e) => {
        let { label: t, column1: n, column2: r } = e;
        return (0, i.jsxs)('tr', {
            className: l()(A.headerRow, A.rowBottomBorder, A.topBorderRadius),
            children: [
                (0, i.jsx)('th', {
                    scope: 'col',
                    className: A.headerLabelCell,
                    children: t
                }),
                (0, i.jsx)('th', {
                    scope: 'col',
                    className: A.headerCell,
                    children: n
                }),
                (0, i.jsx)('th', {
                    scope: 'col',
                    className: l()(A.headerCell, A.topBorderRadius),
                    children: r
                })
            ]
        });
    },
    U = (e) => {
        let { label: t, column1: n, column2: r, withBottomBorder: s = !0, withTopBorderRadius: a = !1, withBottomBorderRadius: o = !1, buttonsRow: c = !1, shortRow: d = !1 } = e;
        return (0, i.jsxs)('tr', {
            className: l()(A.row, {
                [A.wideRow]: c,
                [A.topBorderRadius]: a,
                [A.bottomBorderRadius]: o,
                [A.rowBottomBorder]: s,
                [A.shortRow]: d
            }),
            children: [
                (0, i.jsx)('th', {
                    scope: 'row',
                    className: A.labelCell,
                    children: t
                }),
                (0, i.jsx)('td', {
                    className: l()(A.cell, { [A.buttonsCell]: c }),
                    children: n
                }),
                (0, i.jsx)('td', {
                    className: l()(A.cell, {
                        [A.topBorderRadius]: a,
                        [A.bottomBorderRadius]: o,
                        [A.buttonsCell]: c
                    }),
                    children: r
                })
            ]
        });
    },
    V = (e) => {
        var t;
        let n,
            { className: s, hideCTAs: P = !1, headingOverride: R, hidePill: D = !1, selectedPlanColumnClassName: Z, selectedPlanTier: V = N.p9.TIER_2 } = e,
            { analyticsLocations: G } = (0, g.ZP)(m.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
            F = (0, a.e7)([b.ZP], () => b.ZP.hasFetchedSubscriptions()),
            H = (0, h.V)(),
            z = 'PlanComparisonTable';
        (0, d.j)({
            location: z + ' auto on',
            autoTrackExposure: !0
        }),
            (0, d.j)({
                location: z + ' auto off',
                autoTrackExposure: !1
            });
        let Y = (0, u.ZP)(),
            W = (0, o.ap)(Y),
            K = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
            q = (0, _.M5)(K, N.p9.TIER_2),
            X = (0, j.N)(),
            Q = null == X || null == (t = X.subscription_trial) ? void 0 : t.sku_id,
            J = (0, x.rT)(),
            $ = (0, E.Ng)(),
            ee = null != $ && (0, E.Wp)($, N.Si.TIER_2),
            et = (0, C.A)(N.Xh.PREMIUM_MONTH_TIER_2),
            en = ''.concat(et, '/').concat((0, _.eP)(N.rV.MONTH)),
            ei = (0, _.CY)(N.Xh.PREMIUM_MONTH_TIER_0),
            er = (0, _.CY)(N.Xh.PREMIUM_MONTH_TIER_2),
            es = (0, p.Z)(),
            el = (0, v.n)(ei, er, ee, en, es.fractionalState),
            ea = (0, O.Vi)();
        if (!F || !H) return null;
        let eo = {
            label: (0, i.jsx)(c.X6q, {
                className: A.__invalid_textColor,
                variant: 'heading-lg/extrabold',
                children: y.intl.string(y.t.ED4UVF)
            }),
            column1: (0, i.jsx)(B, { premiumType: N.p9.TIER_0 }),
            column2: (0, i.jsx)(B, { premiumType: N.p9.TIER_2 })
        };
        P
            ? el.push({
                  label: null,
                  column1: null,
                  column2: null,
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: !1,
                  shortRow: !0
              })
            : el.push({
                  label: null,
                  column1: (0, i.jsxs)(i.Fragment, {
                      children: [
                          Q === N.Si.TIER_2 || ea
                              ? (0, i.jsx)(I.Z, {
                                    className: A.button,
                                    subscriptionTier: N.Si.TIER_0,
                                    showIcon: !1,
                                    look: c.iLD.OUTLINED,
                                    color: W ? c.Ttl.BRAND : c.Ttl.WHITE,
                                    buttonShineClassName: void 0
                                })
                              : (0, i.jsx)(I.Z, {
                                    className: A.button,
                                    subscriptionTier: N.Si.TIER_0,
                                    showIcon: !1
                                }),
                          J === N.p9.TIER_2 || null != Q
                              ? null
                              : (0, i.jsx)(T.Z, {
                                    className: A.button,
                                    subscriptionTier: N.Si.TIER_0
                                })
                      ]
                  }),
                  column2: (0, i.jsxs)(i.Fragment, {
                      children: [
                          Q === N.Si.TIER_0
                              ? (0, i.jsx)(I.Z, {
                                    className: A.button,
                                    subscriptionTier: N.Si.TIER_2,
                                    showIcon: !1,
                                    look: c.iLD.OUTLINED,
                                    color: W ? c.Ttl.BRAND : c.Ttl.WHITE,
                                    buttonShineClassName: void 0
                                })
                              : (0, i.jsx)(I.Z, {
                                    className: A.button,
                                    subscriptionTier: N.Si.TIER_2,
                                    showIcon: !1,
                                    hasActivePromotion: ea
                                }),
                          J === N.p9.TIER_0 || null != Q
                              ? null
                              : (0, i.jsx)(T.Z, {
                                    className: A.button,
                                    subscriptionTier: N.Si.TIER_2
                                })
                      ]
                  }),
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: null == Q
              }),
            (n = D
                ? null
                : null != Q || null != J
                  ? (0, i.jsx)(S.Cy, {
                        text: null != Q ? y.intl.string(y.t.IBYG5e) : y.intl.string(y.t.ce1v3d),
                        className: A.freeTrialPillWithSparkles,
                        colorOptions: Q === N.Si.TIER_0 ? (W ? S.VE.PREMIUM_TIER_0_GRADIENT_FILL : S.VE.PREMIUM_TIER_0_WHITE_FILL) : W ? (q ? S.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : S.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL) : S.VE.PREMIUM_TIER_2_WHITE_FILL
                    })
                  : ea
                    ? (0, i.jsx)(k, {})
                    : (0, i.jsx)(L, {}));
        let ec = Q === N.Si.TIER_0 || J === N.p9.TIER_0 || V === N.p9.TIER_0;
        return (0, i.jsx)(g.Gt, {
            value: G,
            children: (0, i.jsxs)('div', {
                className: l()(A.root, s),
                'data-testid': 'v2-marketing-page-comparison-table',
                children: [
                    (0, i.jsx)(c.X6q, {
                        className: l()(A.titleText, A.__invalid_textColor),
                        variant: 'heading-xxl/extrabold',
                        children: null != R ? R : y.intl.string(y.t.FIbMh4)
                    }),
                    (0, i.jsxs)('div', {
                        className: A.tableWrapper,
                        children: [
                            (0, i.jsx)('div', {
                                className: l()(Z, {
                                    [A.tier0ColumnOuter]: ec,
                                    [A.tier2ColumnOuter]: !ec
                                }),
                                children: !ec && n
                            }),
                            (0, i.jsxs)('table', {
                                className: A.table,
                                children: [
                                    (0, i.jsx)('thead', { children: (0, i.jsx)(M, w({}, eo)) }),
                                    (0, i.jsx)('tbody', {
                                        children: el.map((e, t) => {
                                            var n, i;
                                            return (0, r.createElement)(
                                                U,
                                                ((n = w({}, e)),
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
