n.d(t, { Z: () => M }), n(653041);
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
    _ = n(15640),
    p = n(78839),
    f = n(74538),
    h = n(104494),
    x = n(639119),
    E = n(230916),
    C = n(694338),
    b = n(474936),
    v = n(388032),
    T = n(253405),
    N = n(102655),
    I = n(768236),
    R = n(314907),
    j = n(826701);
let S = () =>
        (0, i.jsx)('div', {
            className: T.comparisonTablePill,
            children: (0, i.jsx)(c.X6q, {
                className: T.mostPopularText,
                variant: 'text-xs/bold',
                children: v.intl.string(v.t.TR2B4e)
            })
        }),
    A = () =>
        (0, i.jsx)('div', {
            className: T.comparisonTablePill,
            children: (0, i.jsx)(c.X6q, {
                className: T.mostPopularText,
                variant: 'heading-deprecated-12/extrabold',
                children: v.intl.string(v.t.IBYG5e)
            })
        }),
    P = (e) => {
        let t,
            { premiumType: n } = e,
            r = (0, u.ZP)();
        t = n === b.p9.TIER_0 ? ((0, o.wj)(r) ? N : I) : (0, o.wj)(r) ? R : j;
        let a = (0, f.Px)(n);
        return (0, i.jsx)('img', {
            src: t,
            className: T.logo,
            alt: a
        });
    },
    Z = () =>
        (0, i.jsx)('thead', {
            children: (0, i.jsxs)('tr', {
                className: s()(T.headerRow, T.topBorderRadius),
                children: [
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: T.headerLabelCell,
                        children: (0, i.jsx)(c.X6q, {
                            className: T.__invalid_textColor,
                            variant: 'heading-xl/semibold',
                            children: v.intl.string(v.t.XXENra)
                        })
                    }),
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: T.headerCell,
                        children: (0, i.jsx)(P, { premiumType: b.p9.TIER_0 })
                    }),
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: s()(T.headerCell, T.topBorderRadius),
                        children: (0, i.jsx)(P, { premiumType: b.p9.TIER_2 })
                    })
                ]
            })
        }),
    w = (e) => {
        let { label: t, tier0Column: n, tier2Column: r, withBottomBorder: a = !0, withBottomMargin: l = !1 } = e;
        return (0, i.jsxs)('tr', {
            className: s()(T.row, {
                [T.rowBottomBorder]: a,
                [T.bottomMargin]: l
            }),
            children: [
                (0, i.jsx)('th', {
                    scope: 'row',
                    className: T.labelCell,
                    children: t
                }),
                (0, i.jsx)('td', {
                    className: s()(T.cell),
                    children: n
                }),
                (0, i.jsx)('td', {
                    className: s()(T.cell),
                    children: r
                })
            ]
        });
    },
    M = (e) => {
        var t;
        let n,
            { className: a, hidePill: o = !1, selectedPlanColumnClassName: c, selectedPlanTier: u = b.p9.TIER_2 } = e,
            { analyticsLocations: v } = (0, g.ZP)(m.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
            N = (0, l.e7)([p.ZP], () => p.ZP.hasFetchedSubscriptions()),
            I = (0, _.V)(),
            R = 'PlanComparisonTable';
        (0, d.j)({
            location: R + ' auto on',
            autoTrackExposure: !0
        }),
            (0, d.j)({
                location: R + ' auto off',
                autoTrackExposure: !1
            });
        let j = (0, x.N)(),
            P = null == j ? void 0 : null === (t = j.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
            M = (0, h.Ng)(),
            B = null != M && (0, h.Wp)(M, b.Si.TIER_2),
            y = (0, E.A)(b.Xh.PREMIUM_MONTH_TIER_2),
            k = ''.concat(y, '/').concat((0, f.eP)(b.rV.MONTH)),
            O = (0, f.CY)(b.Xh.PREMIUM_MONTH_TIER_0),
            L = (0, f.CY)(b.Xh.PREMIUM_MONTH_TIER_2),
            D = (0, C.a)(O, L, B, k);
        if (!N || !I) return null;
        D.push({
            label: null,
            tier0Column: null,
            tier2Column: null,
            withBottomBorder: !1
        }),
            (n = o ? null : null != j ? (0, i.jsx)(A, {}) : (0, i.jsx)(S, {}));
        let U = P === b.Si.TIER_0 || u === b.p9.TIER_0;
        return (0, i.jsx)(g.Gt, {
            value: v,
            children: (0, i.jsx)('div', {
                className: s()(T.root, a),
                'data-testid': 'v2-marketing-page-comparison-table',
                children: (0, i.jsxs)('div', {
                    className: T.tableWrapper,
                    children: [
                        (0, i.jsxs)('div', {
                            className: s()(c, {
                                [T.tier0ColumnPosition]: U,
                                [T.tier2ColumnPosition]: !U
                            }),
                            children: [
                                !U && n,
                                (0, i.jsx)('div', {
                                    className: s()({
                                        [T.tier0ColumnOuter]: U,
                                        [T.tier2ColumnOuter]: !U
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)('table', {
                            className: T.table,
                            children: [
                                (0, i.jsx)(Z, {}),
                                (0, i.jsx)('tbody', {
                                    children: D.map((e, t) =>
                                        (0, r.createElement)(w, {
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
