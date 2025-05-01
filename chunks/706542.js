n.d(t, { Z: () => D }), n(539854);
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
    p = n(906732),
    g = n(15640),
    h = n(78839),
    f = n(74538),
    b = n(104494),
    _ = n(639119),
    x = n(230916),
    E = n(694338),
    j = n(474936),
    C = n(388032),
    O = n(835826),
    S = n(102655),
    v = n(768236),
    T = n(314907),
    I = n(826701);
let N = () =>
        (0, i.jsx)('div', {
            className: O.comparisonTablePill,
            children: (0, i.jsx)(c.X6q, {
                className: O.mostPopularText,
                variant: 'text-xs/bold',
                children: C.intl.string(C.t.TR2B4e)
            })
        }),
    y = () =>
        (0, i.jsx)('div', {
            className: O.comparisonTablePill,
            children: (0, i.jsx)(c.X6q, {
                className: O.mostPopularText,
                variant: 'heading-deprecated-12/extrabold',
                children: C.intl.string(C.t.IBYG5e)
            })
        }),
    A = (e) => {
        let t,
            { premiumType: n } = e,
            r = (0, u.ZP)();
        t = n === j.p9.TIER_0 ? ((0, o.wj)(r) ? S : v) : (0, o.wj)(r) ? T : I;
        let s = (0, f.Px)(n);
        return (0, i.jsx)('img', {
            src: t,
            className: O.logo,
            alt: s
        });
    },
    P = () =>
        (0, i.jsx)('thead', {
            children: (0, i.jsxs)('tr', {
                className: l()(O.headerRow, O.topBorderRadius),
                children: [
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: O.headerLabelCell,
                        children: (0, i.jsx)(c.X6q, {
                            className: O.__invalid_textColor,
                            variant: 'heading-xl/semibold',
                            children: C.intl.string(C.t.XXENra)
                        })
                    }),
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: O.headerCell,
                        children: (0, i.jsx)(A, { premiumType: j.p9.TIER_0 })
                    }),
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: l()(O.headerCell, O.topBorderRadius),
                        children: (0, i.jsx)(A, { premiumType: j.p9.TIER_2 })
                    })
                ]
            })
        }),
    R = (e) => {
        let { label: t, tier0Column: n, tier2Column: r, withBottomBorder: s = !0, withBottomMargin: a = !1 } = e;
        return (0, i.jsxs)('tr', {
            className: l()(O.row, {
                [O.rowBottomBorder]: s,
                [O.bottomMargin]: a
            }),
            children: [
                (0, i.jsx)('th', {
                    scope: 'row',
                    className: O.labelCell,
                    children: t
                }),
                (0, i.jsx)('td', {
                    className: O.cell,
                    children: n
                }),
                (0, i.jsx)('td', {
                    className: O.cell,
                    children: r
                })
            ]
        });
    },
    D = (e) => {
        var t;
        let n,
            { className: s, hidePill: o = !1, selectedPlanColumnClassName: c, selectedPlanTier: u = j.p9.TIER_2 } = e,
            { analyticsLocations: C } = (0, p.ZP)(m.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
            S = (0, a.e7)([h.ZP], () => h.ZP.hasFetchedSubscriptions()),
            v = (0, g.V)(),
            T = 'PlanComparisonTable';
        (0, d.j)({
            location: T + ' auto on',
            autoTrackExposure: !0
        }),
            (0, d.j)({
                location: T + ' auto off',
                autoTrackExposure: !1
            });
        let I = (0, _.N)(),
            A = null == I || null == (t = I.subscription_trial) ? void 0 : t.sku_id,
            D = (0, b.Ng)(),
            Z = null != D && (0, b.Wp)(D, j.Si.TIER_2),
            w = (0, x.A)(j.Xh.PREMIUM_MONTH_TIER_2),
            k = ''.concat(w, '/').concat((0, f.eP)(j.rV.MONTH)),
            L = (0, f.CY)(j.Xh.PREMIUM_MONTH_TIER_0),
            M = (0, f.CY)(j.Xh.PREMIUM_MONTH_TIER_2),
            B = (0, E.a)(L, M, Z, k);
        if (!S || !v) return null;
        B.push({
            label: null,
            tier0Column: null,
            tier2Column: null,
            withBottomBorder: !1
        }),
            (n = o ? null : null != I ? (0, i.jsx)(y, {}) : (0, i.jsx)(N, {}));
        let U = A === j.Si.TIER_0 || u === j.p9.TIER_0;
        return (0, i.jsx)(p.Gt, {
            value: C,
            children: (0, i.jsx)('div', {
                className: l()(O.root, s),
                'data-testid': 'v2-marketing-page-comparison-table',
                children: (0, i.jsxs)('div', {
                    className: O.tableWrapper,
                    children: [
                        (0, i.jsxs)('div', {
                            className: l()(c, {
                                [O.tier0ColumnPosition]: U,
                                [O.tier2ColumnPosition]: !U
                            }),
                            children: [
                                !U && n,
                                (0, i.jsx)('div', {
                                    className: l()({
                                        [O.tier0ColumnOuter]: U,
                                        [O.tier2ColumnOuter]: !U
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)('table', {
                            className: O.table,
                            children: [
                                (0, i.jsx)(P, {}),
                                (0, i.jsx)('tbody', {
                                    children: B.map((e, t) => {
                                        var n, i;
                                        return (0, r.createElement)(
                                            R,
                                            ((n = (function (e) {
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
                                            })({}, e)),
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
            })
        });
    };
