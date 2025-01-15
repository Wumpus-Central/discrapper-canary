var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(481060),
    l = n(230711),
    o = n(63063),
    c = n(74538),
    d = n(140465),
    u = n(474936),
    m = n(981631),
    g = n(388032),
    h = n(521671);
t.Z = (e) => {
    let t,
        n,
        { premiumSubscription: s, className: p, isFullscreen: x = !1, textColor: f } = e,
        _ = (0, d.Nx)();
    if (null == s) return null;
    let E = null != s ? c.ZP.getPremiumPlanItem(s) : null;
    if ((c.ZP.isBoostOnlySubscription(s) ? (t = g.intl.string(g.t.Uj0md3)) : null != E && (t = c.ZP.getDisplayPremiumType(E.planId)), null == t)) return null;
    let C = () => l.Z.open(m.oAB.SUBSCRIPTIONS),
        T = (null != E ? c.ZP.getSkuIdForPlan(E.planId) : null) === u.Si.TIER_1;
    return (
        (n = null != f ? f : _ || x ? 'always-white' : 'text-normal'),
        (0, i.jsxs)(a.Card, {
            className: r()(h.container, p, {
                [h.lightTextLink]: x,
                [h.centerText]: _
            }),
            type: a.Card.Types.CUSTOM,
            children: [
                (0, i.jsx)(a.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: r()(h.icon, { [h.lightThemeColorOnly]: _ || x })
                }),
                (0, i.jsx)(a.Text, {
                    variant: 'text-sm/medium',
                    color: n,
                    children: T
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
