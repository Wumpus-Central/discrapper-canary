n(653041);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(634894),
    u = n(410030),
    m = n(100527),
    g = n(906732),
    h = n(15640),
    p = n(78839),
    x = n(74538),
    f = n(104494),
    _ = n(639119),
    E = n(230916),
    C = n(694338),
    T = n(474936),
    S = n(388032),
    b = n(600963),
    I = n(102655),
    N = n(768236),
    v = n(314907),
    A = n(826701);
let j = () =>
        (0, i.jsx)('div', {
            className: b.comparisonTablePill,
            children: (0, i.jsx)(c.Heading, {
                className: b.mostPopularText,
                variant: 'text-xs/bold',
                children: S.intl.string(S.t.TR2B4e)
            })
        }),
    O = () =>
        (0, i.jsx)('div', {
            className: b.comparisonTablePill,
            children: (0, i.jsx)(c.Heading, {
                className: b.mostPopularText,
                variant: 'heading-deprecated-12/extrabold',
                children: S.intl.string(S.t.IBYG5e)
            })
        }),
    R = (e) => {
        let t,
            { premiumType: n } = e,
            r = (0, u.ZP)();
        t = n === T.p9.TIER_0 ? ((0, o.wj)(r) ? I : N) : (0, o.wj)(r) ? v : A;
        let s = (0, x.Px)(n);
        return (0, i.jsx)('img', {
            src: t,
            className: b.logo,
            alt: s
        });
    },
    P = () =>
        (0, i.jsx)('thead', {
            children: (0, i.jsxs)('tr', {
                className: a()(b.headerRow, b.topBorderRadius),
                children: [
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: b.headerLabelCell,
                        children: (0, i.jsx)(c.Heading, {
                            className: b.__invalid_textColor,
                            variant: 'heading-xl/semibold',
                            children: S.intl.string(S.t.XXENra)
                        })
                    }),
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: b.headerCell,
                        children: (0, i.jsx)(R, { premiumType: T.p9.TIER_0 })
                    }),
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: a()(b.headerCell, b.topBorderRadius),
                        children: (0, i.jsx)(R, { premiumType: T.p9.TIER_2 })
                    })
                ]
            })
        }),
    y = (e) => {
        let { label: t, tier0Column: n, tier2Column: r, withBottomBorder: s = !0, withBottomMargin: l = !1 } = e;
        return (0, i.jsxs)('tr', {
            className: a()(b.row, {
                [b.rowBottomBorder]: s,
                [b.bottomMargin]: l
            }),
            children: [
                (0, i.jsx)('th', {
                    scope: 'row',
                    className: b.labelCell,
                    children: t
                }),
                (0, i.jsx)('td', {
                    className: a()(b.cell),
                    children: n
                }),
                (0, i.jsx)('td', {
                    className: a()(b.cell),
                    children: r
                })
            ]
        });
    };
t.Z = (e) => {
    var t;
    let n,
        { className: s, hidePill: o = !1, selectedPlanColumnClassName: c, selectedPlanTier: u = T.p9.TIER_2 } = e,
        { analyticsLocations: S } = (0, g.ZP)(m.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
        I = (0, l.e7)([p.ZP], () => p.ZP.hasFetchedSubscriptions()),
        N = (0, h.V)(),
        v = 'PlanComparisonTable';
    (0, d.j)({
        location: v + ' auto on',
        autoTrackExposure: !0
    }),
        (0, d.j)({
            location: v + ' auto off',
            autoTrackExposure: !1
        });
    let A = (0, _.N)(),
        R = null == A ? void 0 : null === (t = A.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        B = (0, f.Ng)(),
        D = null != B && (0, f.Wp)(B, T.Si.TIER_2),
        Z = (0, E.A)(T.Xh.PREMIUM_MONTH_TIER_2),
        L = ''.concat(Z, '/').concat((0, x.eP)(T.rV.MONTH)),
        M = (0, x.CY)(T.Xh.PREMIUM_MONTH_TIER_0),
        k = (0, x.CY)(T.Xh.PREMIUM_MONTH_TIER_2),
        w = (0, C.a)(M, k, D, L);
    if (!I || !N) return null;
    w.push({
        label: null,
        tier0Column: null,
        tier2Column: null,
        withBottomBorder: !1
    }),
        (n = o ? null : null != A ? (0, i.jsx)(O, {}) : (0, i.jsx)(j, {}));
    let F = R === T.Si.TIER_0 || u === T.p9.TIER_0;
    return (0, i.jsx)(g.Gt, {
        value: S,
        children: (0, i.jsx)('div', {
            className: a()(b.root, s),
            'data-testid': 'v2-marketing-page-comparison-table',
            children: (0, i.jsxs)('div', {
                className: b.tableWrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: a()(c, {
                            [b.tier0ColumnPosition]: F,
                            [b.tier2ColumnPosition]: !F
                        }),
                        children: [
                            !F && n,
                            (0, i.jsx)('div', {
                                className: a()({
                                    [b.tier0ColumnOuter]: F,
                                    [b.tier2ColumnOuter]: !F
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)('table', {
                        className: b.table,
                        children: [
                            (0, i.jsx)(P, {}),
                            (0, i.jsx)('tbody', {
                                children: w.map((e, t) =>
                                    (0, r.createElement)(y, {
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
