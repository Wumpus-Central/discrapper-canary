n.d(t, { Z: () => D }), n(653041);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(634894),
    u = n(410030),
    m = n(100527),
    g = n(906732),
    p = n(15640),
    h = n(78839),
    f = n(74538),
    b = n(104494),
    N = n(639119),
    x = n(230916),
    _ = n(694338),
    E = n(474936),
    j = n(388032),
    O = n(835826),
    C = n(102655),
    S = n(768236),
    v = n(314907),
    T = n(826701);
let I = () =>
        (0, r.jsx)('div', {
            className: O.comparisonTablePill,
            children: (0, r.jsx)(c.X6q, {
                className: O.mostPopularText,
                variant: 'text-xs/bold',
                children: j.NW.string(j.t.TR2B4e)
            })
        }),
    y = () =>
        (0, r.jsx)('div', {
            className: O.comparisonTablePill,
            children: (0, r.jsx)(c.X6q, {
                className: O.mostPopularText,
                variant: 'heading-deprecated-12/extrabold',
                children: j.NW.string(j.t.IBYG5e)
            })
        }),
    A = (e) => {
        let t,
            { premiumType: n } = e,
            i = (0, u.ZP)();
        t = n === E.p9.TIER_0 ? ((0, o.wj)(i) ? C : S) : (0, o.wj)(i) ? v : T;
        let s = (0, f.Px)(n);
        return (0, r.jsx)('img', {
            src: t,
            className: O.logo,
            alt: s
        });
    },
    P = () =>
        (0, r.jsx)('thead', {
            children: (0, r.jsxs)('tr', {
                className: a()(O.headerRow, O.topBorderRadius),
                children: [
                    (0, r.jsx)('th', {
                        scope: 'col',
                        className: O.headerLabelCell,
                        children: (0, r.jsx)(c.X6q, {
                            className: O.__invalid_textColor,
                            variant: 'heading-xl/semibold',
                            children: j.NW.string(j.t.XXENra)
                        })
                    }),
                    (0, r.jsx)('th', {
                        scope: 'col',
                        className: O.headerCell,
                        children: (0, r.jsx)(A, { premiumType: E.p9.TIER_0 })
                    }),
                    (0, r.jsx)('th', {
                        scope: 'col',
                        className: a()(O.headerCell, O.topBorderRadius),
                        children: (0, r.jsx)(A, { premiumType: E.p9.TIER_2 })
                    })
                ]
            })
        }),
    R = (e) => {
        let { label: t, tier0Column: n, tier2Column: i, withBottomBorder: s = !0, withBottomMargin: l = !1 } = e;
        return (0, r.jsxs)('tr', {
            className: a()(O.row, {
                [O.rowBottomBorder]: s,
                [O.bottomMargin]: l
            }),
            children: [
                (0, r.jsx)('th', {
                    scope: 'row',
                    className: O.labelCell,
                    children: t
                }),
                (0, r.jsx)('td', {
                    className: O.cell,
                    children: n
                }),
                (0, r.jsx)('td', {
                    className: O.cell,
                    children: i
                })
            ]
        });
    },
    D = (e) => {
        var t;
        let n,
            { className: s, hidePill: o = !1, selectedPlanColumnClassName: c, selectedPlanTier: u = E.p9.TIER_2 } = e,
            { analyticsLocations: j } = (0, g.ZP)(m.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
            C = (0, l.e7)([h.ZP], () => h.ZP.hasFetchedSubscriptions()),
            S = (0, p.V)(),
            v = 'PlanComparisonTable';
        (0, d.j)({
            location: v + ' auto on',
            autoTrackExposure: !0
        }),
            (0, d.j)({
                location: v + ' auto off',
                autoTrackExposure: !1
            });
        let T = (0, N.N)(),
            A = null == T || null == (t = T.subscription_trial) ? void 0 : t.sku_id,
            D = (0, b.Ng)(),
            Z = null != D && (0, b.Wp)(D, E.Si.TIER_2),
            w = (0, x.A)(E.Xh.PREMIUM_MONTH_TIER_2),
            k = ''.concat(w, '/').concat((0, f.eP)(E.rV.MONTH)),
            W = (0, f.CY)(E.Xh.PREMIUM_MONTH_TIER_0),
            L = (0, f.CY)(E.Xh.PREMIUM_MONTH_TIER_2),
            B = (0, _.a)(W, L, Z, k);
        if (!C || !S) return null;
        B.push({
            label: null,
            tier0Column: null,
            tier2Column: null,
            withBottomBorder: !1
        }),
            (n = o ? null : null != T ? (0, r.jsx)(y, {}) : (0, r.jsx)(I, {}));
        let M = A === E.Si.TIER_0 || u === E.p9.TIER_0;
        return (0, r.jsx)(g.Gt, {
            value: j,
            children: (0, r.jsx)('div', {
                className: a()(O.root, s),
                'data-testid': 'v2-marketing-page-comparison-table',
                children: (0, r.jsxs)('div', {
                    className: O.tableWrapper,
                    children: [
                        (0, r.jsxs)('div', {
                            className: a()(c, {
                                [O.tier0ColumnPosition]: M,
                                [O.tier2ColumnPosition]: !M
                            }),
                            children: [
                                !M && n,
                                (0, r.jsx)('div', {
                                    className: a()({
                                        [O.tier0ColumnOuter]: M,
                                        [O.tier2ColumnOuter]: !M
                                    })
                                })
                            ]
                        }),
                        (0, r.jsxs)('table', {
                            className: O.table,
                            children: [
                                (0, r.jsx)(P, {}),
                                (0, r.jsx)('tbody', {
                                    children: B.map((e, t) => {
                                        var n, r;
                                        return (0, i.createElement)(
                                            R,
                                            ((n = (function (e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    'function' == typeof Object.getOwnPropertySymbols &&
                                                        (r = r.concat(
                                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                            })
                                                        )),
                                                        r.forEach(function (t) {
                                                            var r;
                                                            (r = n[t]),
                                                                t in e
                                                                    ? Object.defineProperty(e, t, {
                                                                          value: r,
                                                                          enumerable: !0,
                                                                          configurable: !0,
                                                                          writable: !0
                                                                      })
                                                                    : (e[t] = r);
                                                        });
                                                }
                                                return e;
                                            })({}, e)),
                                            (r = r = { key: t }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                                : (function (e, t) {
                                                      var n = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var r = Object.getOwnPropertySymbols(e);
                                                          n.push.apply(n, r);
                                                      }
                                                      return n;
                                                  })(Object(r)).forEach(function (e) {
                                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
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
