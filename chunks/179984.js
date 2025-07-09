(n.d(t, { Z: () => F }), n(539854));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(780384),
    c = n(755721),
    d = n(481060),
    u = n(634894),
    m = n(410030),
    p = n(100527),
    g = n(906732),
    h = n(975298),
    f = n(15640),
    b = n(594174),
    x = n(78839),
    _ = n(74538),
    j = n(367074),
    E = n(775412),
    O = n(104494),
    C = n(639119),
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
            r = (0, m.ZP)();
        t = n === A.p9.TIER_0 ? ((0, o.wj)(r) ? D : Z) : (0, o.wj)(r) ? w : k;
        let s = (0, _.Px)(n);
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
            { analyticsLocations: F } = (0, g.ZP)(p.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
            H = (0, l.e7)([x.Z], () => x.Z.hasFetchedSubscriptions()),
            z = (0, f.V)(),
            W = 'PlanComparisonTable';
        ((0, u.j)({
            location: W + ' auto on',
            autoTrackExposure: !0
        }),
            (0, u.j)({
                location: W + ' auto off',
                autoTrackExposure: !1
            }));
        let Y = (0, m.ZP)(),
            K = (0, o.ap)(Y),
            q = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
            X = (0, _.M5)(q, A.p9.TIER_2),
            Q = (0, C.N)(),
            J = null == Q || null == (t = Q.subscription_trial) ? void 0 : t.sku_id,
            $ = (0, E.rT)(),
            ee = (0, O.Ng)(),
            et = null != ee && (0, O.Wp)(ee, A.Si.TIER_2),
            en = (0, T.A)(A.Xh.PREMIUM_MONTH_TIER_2),
            ei = ''.concat(en, '/').concat((0, _.eP)(A.rV.MONTH)),
            er = (0, _.CY)(A.Xh.PREMIUM_MONTH_TIER_0),
            es = (0, _.CY)(A.Xh.PREMIUM_MONTH_TIER_2),
            ea = (0, h.Z)(),
            el = (0, y.n)(er, es, et, ei, ea.fractionalState),
            eo = (0, j.Vi)();
        if (!H || !z) return null;
        let ec = {
            label: (0, i.jsx)(d.X6q, {
                className: R.__invalid_textColor,
                variant: 'heading-lg/extrabold',
                children: P.intl.string(P.t.ED4UVF)
            }),
            column1: (0, i.jsx)(U, { premiumType: A.p9.TIER_0 }),
            column2: (0, i.jsx)(U, { premiumType: A.p9.TIER_2 })
        };
        (N
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
                          J === A.Si.TIER_2 || eo
                              ? (0, i.jsx)(S.Z, {
                                    className: R.button,
                                    subscriptionTier: A.Si.TIER_0,
                                    showIcon: !1,
                                    look: c.iL.OUTLINED,
                                    color: K ? c.Tt.BRAND : c.Tt.WHITE
                                })
                              : (0, i.jsx)(S.Z, {
                                    className: R.button,
                                    subscriptionTier: A.Si.TIER_0,
                                    showIcon: !1
                                }),
                          $ === A.p9.TIER_2 || null != J
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
                                    color: K ? c.Tt.BRAND : c.Tt.WHITE
                                })
                              : (0, i.jsx)(S.Z, {
                                    className: R.button,
                                    subscriptionTier: A.Si.TIER_2,
                                    showIcon: !1,
                                    hasActivePromotion: eo
                                }),
                          $ === A.p9.TIER_0 || null != J
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
                : null != J || null != $
                  ? (0, i.jsx)(I.Cy, {
                        text: null != J ? P.intl.string(P.t.IBYG5e) : P.intl.string(P.t.ce1v3d),
                        className: R.freeTrialPillWithSparkles,
                        colorOptions: J === A.Si.TIER_0 ? (K ? I.VE.PREMIUM_TIER_0_GRADIENT_FILL : I.VE.PREMIUM_TIER_0_WHITE_FILL) : K ? (X ? I.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : I.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL) : I.VE.PREMIUM_TIER_2_WHITE_FILL
                    })
                  : eo
                    ? (0, i.jsx)(B, {})
                    : (0, i.jsx)(M, {})));
        let ed = J === A.Si.TIER_0 || $ === A.p9.TIER_0 || k === A.p9.TIER_0;
        return (0, i.jsx)(g.Gt, {
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
                                    [R.tier0ColumnOuter]: ed,
                                    [R.tier2ColumnOuter]: !ed
                                }),
                                children: !ed && n
                            }),
                            (0, i.jsxs)('table', {
                                className: R.table,
                                children: [
                                    (0, i.jsx)('thead', { children: (0, i.jsx)(V, L({}, ec)) }),
                                    (0, i.jsx)('tbody', {
                                        children: el.map((e, t) => {
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
