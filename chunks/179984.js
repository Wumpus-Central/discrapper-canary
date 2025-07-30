(n.d(t, { Z: () => G }), n(539854));
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
    E = n(104494),
    O = n(639119),
    C = n(736519),
    v = n(784238),
    S = n(230916),
    T = n(346497),
    N = n(382791),
    I = n(21023),
    y = n(474936),
    A = n(388032),
    P = n(554074),
    R = n(102655),
    D = n(768236),
    Z = n(314907),
    w = n(826701);
function k(e) {
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
let L = () => {
        let e = (0, T.W)();
        return (0, i.jsx)(N.Cy, {
            text: e,
            className: P.bogoPillWithSparkles,
            colorOptions: N.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
        });
    },
    B = () =>
        (0, i.jsx)('div', {
            className: P.mostPopularPill,
            children: (0, i.jsx)(d.X6q, {
                className: P.mostPopularText,
                variant: 'heading-deprecated-12/extrabold',
                children: A.intl.string(A.t['o/oRJC'])
            })
        }),
    M = (e) => {
        let t,
            { premiumType: n } = e,
            r = (0, u.ZP)();
        t = n === y.p9.TIER_0 ? ((0, o.wj)(r) ? R : D) : (0, o.wj)(r) ? Z : w;
        let s = (0, x.Px)(n);
        return (0, i.jsx)('img', {
            src: t,
            className: P.logo,
            alt: s
        });
    },
    U = (e) => {
        let { label: t, column1: n, column2: r } = e;
        return (0, i.jsxs)('tr', {
            className: a()(P.headerRow, P.rowBottomBorder, P.topBorderRadius),
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
                    className: a()(P.headerCell, P.topBorderRadius),
                    children: r
                })
            ]
        });
    },
    V = (e) => {
        let { label: t, column1: n, column2: r, withBottomBorder: s = !0, withTopBorderRadius: l = !1, withBottomBorderRadius: o = !1, buttonsRow: c = !1, shortRow: d = !1 } = e;
        return (0, i.jsxs)('tr', {
            className: a()(P.row, {
                [P.wideRow]: c,
                [P.topBorderRadius]: l,
                [P.bottomBorderRadius]: o,
                [P.rowBottomBorder]: s,
                [P.shortRow]: d
            }),
            children: [
                (0, i.jsx)('th', {
                    scope: 'row',
                    className: P.labelCell,
                    children: t
                }),
                (0, i.jsx)('td', {
                    className: a()(P.cell, { [P.buttonsCell]: c }),
                    children: n
                }),
                (0, i.jsx)('td', {
                    className: a()(P.cell, {
                        [P.topBorderRadius]: l,
                        [P.bottomBorderRadius]: o,
                        [P.buttonsCell]: c
                    }),
                    children: r
                })
            ]
        });
    },
    G = (e) => {
        var t;
        let n,
            { className: s, hideCTAs: T = !1, headingOverride: R, hidePill: D = !1, selectedPlanColumnClassName: Z, selectedPlanTier: w = y.p9.TIER_2 } = e,
            { analyticsLocations: G } = (0, p.ZP)(m.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
            F = (0, l.e7)([b.Z], () => b.Z.hasFetchedSubscriptions()),
            H = (0, h.V)(y.nS),
            W = (0, u.ZP)(),
            z = (0, o.ap)(W),
            Y = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
            K = (0, x.M5)(Y, y.p9.TIER_2),
            q = (0, O.N)(),
            X = null == q || null == (t = q.subscription_trial) ? void 0 : t.sku_id,
            J = (0, j.rT)(),
            Q = (0, E.Ng)(),
            $ = null != Q && (0, E.Wp)(Q, y.Si.TIER_2),
            ee = (0, S.A)(y.Xh.PREMIUM_MONTH_TIER_2),
            et = ''.concat(ee, '/').concat((0, x.eP)(y.rV.MONTH)),
            en = (0, x.CY)(y.Xh.PREMIUM_MONTH_TIER_0),
            ei = (0, x.CY)(y.Xh.PREMIUM_MONTH_TIER_2),
            er = (0, g.Z)(),
            es = (0, I.n)(en, ei, $, et, er.fractionalState),
            ea = (0, _.Vi)();
        if (!F || !H) return null;
        let el = {
            label: (0, i.jsx)(d.X6q, {
                className: P.__invalid_textColor,
                variant: 'heading-lg/extrabold',
                children: A.intl.string(A.t.ED4UVF)
            }),
            column1: (0, i.jsx)(M, { premiumType: y.p9.TIER_0 }),
            column2: (0, i.jsx)(M, { premiumType: y.p9.TIER_2 })
        };
        (T
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
                          X === y.Si.TIER_2 || ea
                              ? (0, i.jsx)(v.Z, {
                                    className: P.button,
                                    subscriptionTier: y.Si.TIER_0,
                                    showIcon: !1,
                                    look: c.iL.OUTLINED,
                                    color: z ? c.Tt.BRAND : c.Tt.WHITE
                                })
                              : (0, i.jsx)(v.Z, {
                                    className: P.button,
                                    subscriptionTier: y.Si.TIER_0,
                                    showIcon: !1
                                }),
                          J === y.p9.TIER_2 || null != X
                              ? null
                              : (0, i.jsx)(C.Z, {
                                    className: P.button,
                                    subscriptionTier: y.Si.TIER_0
                                })
                      ]
                  }),
                  column2: (0, i.jsxs)(i.Fragment, {
                      children: [
                          X === y.Si.TIER_0
                              ? (0, i.jsx)(v.Z, {
                                    className: P.button,
                                    subscriptionTier: y.Si.TIER_2,
                                    showIcon: !1,
                                    look: c.iL.OUTLINED,
                                    color: z ? c.Tt.BRAND : c.Tt.WHITE
                                })
                              : (0, i.jsx)(v.Z, {
                                    className: P.button,
                                    subscriptionTier: y.Si.TIER_2,
                                    showIcon: !1,
                                    hasActivePromotion: ea
                                }),
                          J === y.p9.TIER_0 || null != X
                              ? null
                              : (0, i.jsx)(C.Z, {
                                    className: P.button,
                                    subscriptionTier: y.Si.TIER_2
                                })
                      ]
                  }),
                  withBottomBorder: !1,
                  withBottomBorderRadius: !0,
                  buttonsRow: null == X
              }),
            (n = D
                ? null
                : null != X || null != J
                  ? (0, i.jsx)(N.Cy, {
                        text: null != X ? A.intl.string(A.t.IBYG5e) : A.intl.string(A.t.ce1v3d),
                        className: P.freeTrialPillWithSparkles,
                        colorOptions: X === y.Si.TIER_0 ? (z ? N.VE.PREMIUM_TIER_0_GRADIENT_FILL : N.VE.PREMIUM_TIER_0_WHITE_FILL) : z ? (K ? N.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : N.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL) : N.VE.PREMIUM_TIER_2_WHITE_FILL
                    })
                  : ea
                    ? (0, i.jsx)(L, {})
                    : (0, i.jsx)(B, {})));
        let eo = X === y.Si.TIER_0 || J === y.p9.TIER_0 || w === y.p9.TIER_0;
        return (0, i.jsx)(p.Gt, {
            value: G,
            children: (0, i.jsxs)('div', {
                className: a()(P.root, s),
                'data-testid': 'v2-marketing-page-comparison-table',
                children: [
                    (0, i.jsx)(d.X6q, {
                        className: a()(P.titleText, P.__invalid_textColor),
                        variant: 'heading-xxl/extrabold',
                        children: null != R ? R : A.intl.string(A.t.FIbMh4)
                    }),
                    (0, i.jsxs)('div', {
                        className: P.tableWrapper,
                        children: [
                            (0, i.jsx)('div', {
                                className: a()(Z, {
                                    [P.tier0ColumnOuter]: eo,
                                    [P.tier2ColumnOuter]: !eo
                                }),
                                children: !eo && n
                            }),
                            (0, i.jsxs)('table', {
                                className: P.table,
                                children: [
                                    (0, i.jsx)('thead', { children: (0, i.jsx)(U, k({}, el)) }),
                                    (0, i.jsx)('tbody', {
                                        children: es.map((e, t) => {
                                            var n, i;
                                            return (0, r.createElement)(
                                                V,
                                                ((n = k({}, e)),
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
