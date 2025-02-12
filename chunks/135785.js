n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    l = n(230711),
    o = n(63063),
    c = n(74538),
    d = n(140465),
    u = n(474936),
    m = n(981631),
    g = n(388032),
    _ = n(337005);
let p = (e) => {
    let t,
        n,
        { premiumSubscription: r, className: p, isFullscreen: f = !1, textColor: h } = e,
        x = (0, d.Nx)();
    if (null == r) return null;
    let E = null != r ? c.ZP.getPremiumPlanItem(r) : null;
    if ((c.ZP.isBoostOnlySubscription(r) ? (t = g.intl.string(g.t.Uj0md3)) : null != E && (t = c.ZP.getDisplayPremiumType(E.planId)), null == t)) return null;
    let C = () => l.Z.open(m.oAB.SUBSCRIPTIONS),
        b = (null != E ? c.ZP.getSkuIdForPlan(E.planId) : null) === u.Si.TIER_1;
    return (
        (n = null != h ? h : x || f ? 'always-white' : 'text-normal'),
        (0, i.jsxs)(s.Zbd, {
            className: a()(_.container, p, {
                [_.lightTextLink]: f,
                [_.centerText]: x
            }),
            type: s.Zbd.Types.CUSTOM,
            children: [
                (0, i.jsx)(s.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: a()(_.icon, { [_.lightThemeColorOnly]: x || f })
                }),
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/medium',
                    color: n,
                    children: b
                        ? g.intl.format(g.t['tYuv+f'], {
                              helpdeskArticle: o.Z.getArticleURL(m.BhN.PREMIUM_DETAILS),
                              onSubscriptionsClick: C
                          })
                        : g.intl.format(g.t.xHRgU1, {
                              subscriptionName: t,
                              onSubscriptionsClick: C
                          })
                })
            ]
        })
    );
};
