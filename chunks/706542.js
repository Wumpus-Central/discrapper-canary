n.d(t, { Z: () => y }), n(653041);
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
    g = n(15640),
    _ = n(78839),
    x = n(74538),
    p = n(104494),
    E = n(639119),
    C = n(230916),
    f = n(694338),
    T = n(474936),
    N = n(388032),
    I = n(637444),
    S = n(102655),
    b = n(768236),
    v = n(314907),
    j = n(826701);
let A = () =>
        (0, i.jsx)('div', {
            className: I.comparisonTablePill,
            children: (0, i.jsx)(c.X6q, {
                className: I.mostPopularText,
                variant: 'text-xs/bold',
                children: N.intl.string(N.t.TR2B4e)
            })
        }),
    O = () =>
        (0, i.jsx)('div', {
            className: I.comparisonTablePill,
            children: (0, i.jsx)(c.X6q, {
                className: I.mostPopularText,
                variant: 'heading-deprecated-12/extrabold',
                children: N.intl.string(N.t.IBYG5e)
            })
        }),
    R = (e) => {
        let t,
            { premiumType: n } = e,
            s = (0, u.ZP)();
        t = n === T.p9.TIER_0 ? ((0, o.wj)(s) ? S : b) : (0, o.wj)(s) ? v : j;
        let r = (0, x.Px)(n);
        return (0, i.jsx)('img', {
            src: t,
            className: I.logo,
            alt: r
        });
    },
    P = () =>
        (0, i.jsx)('thead', {
            children: (0, i.jsxs)('tr', {
                className: l()(I.headerRow, I.topBorderRadius),
                children: [
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: I.headerLabelCell,
                        children: (0, i.jsx)(c.X6q, {
                            className: I.__invalid_textColor,
                            variant: 'heading-xl/semibold',
                            children: N.intl.string(N.t.XXENra)
                        })
                    }),
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: I.headerCell,
                        children: (0, i.jsx)(R, { premiumType: T.p9.TIER_0 })
                    }),
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: l()(I.headerCell, I.topBorderRadius),
                        children: (0, i.jsx)(R, { premiumType: T.p9.TIER_2 })
                    })
                ]
            })
        }),
    D = (e) => {
        let { label: t, tier0Column: n, tier2Column: s, withBottomBorder: r = !0, withBottomMargin: a = !1 } = e;
        return (0, i.jsxs)('tr', {
            className: l()(I.row, {
                [I.rowBottomBorder]: r,
                [I.bottomMargin]: a
            }),
            children: [
                (0, i.jsx)('th', {
                    scope: 'row',
                    className: I.labelCell,
                    children: t
                }),
                (0, i.jsx)('td', {
                    className: l()(I.cell),
                    children: n
                }),
                (0, i.jsx)('td', {
                    className: l()(I.cell),
                    children: s
                })
            ]
        });
    },
    y = (e) => {
        var t;
        let n,
            { className: r, hidePill: o = !1, selectedPlanColumnClassName: c, selectedPlanTier: u = T.p9.TIER_2 } = e,
            { analyticsLocations: N } = (0, h.ZP)(m.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
            S = (0, a.e7)([_.ZP], () => _.ZP.hasFetchedSubscriptions()),
            b = (0, g.V)(),
            v = 'PlanComparisonTable';
        (0, d.j)({
            location: v + ' auto on',
            autoTrackExposure: !0
        }),
            (0, d.j)({
                location: v + ' auto off',
                autoTrackExposure: !1
            });
        let j = (0, E.N)(),
            R = null == j ? void 0 : null === (t = j.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
            y = (0, p.Ng)(),
            Z = null != y && (0, p.Wp)(y, T.Si.TIER_2),
            k = (0, C.A)(T.Xh.PREMIUM_MONTH_TIER_2),
            L = ''.concat(k, '/').concat((0, x.eP)(T.rV.MONTH)),
            B = (0, x.CY)(T.Xh.PREMIUM_MONTH_TIER_0),
            M = (0, x.CY)(T.Xh.PREMIUM_MONTH_TIER_2),
            w = (0, f.a)(B, M, Z, L);
        if (!S || !b) return null;
        w.push({
            label: null,
            tier0Column: null,
            tier2Column: null,
            withBottomBorder: !1
        }),
            (n = o ? null : null != j ? (0, i.jsx)(O, {}) : (0, i.jsx)(A, {}));
        let V = R === T.Si.TIER_0 || u === T.p9.TIER_0;
        return (0, i.jsx)(h.Gt, {
            value: N,
            children: (0, i.jsx)('div', {
                className: l()(I.root, r),
                'data-testid': 'v2-marketing-page-comparison-table',
                children: (0, i.jsxs)('div', {
                    className: I.tableWrapper,
                    children: [
                        (0, i.jsxs)('div', {
                            className: l()(c, {
                                [I.tier0ColumnPosition]: V,
                                [I.tier2ColumnPosition]: !V
                            }),
                            children: [
                                !V && n,
                                (0, i.jsx)('div', {
                                    className: l()({
                                        [I.tier0ColumnOuter]: V,
                                        [I.tier2ColumnOuter]: !V
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)('table', {
                            className: I.table,
                            children: [
                                (0, i.jsx)(P, {}),
                                (0, i.jsx)('tbody', {
                                    children: w.map((e, t) =>
                                        (0, s.createElement)(D, {
                                            ...e,
                                            key: t
                                        })
                                    )
                                })
                            ]
                        })
                    ]
                })
            })
        });
    };
