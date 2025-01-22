var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
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
        { premiumSubscription: r, className: p, isFullscreen: x = !1, textColor: f } = e,
        E = (0, d.Nx)();
    if (null == r) return null;
    let _ = null != r ? c.ZP.getPremiumPlanItem(r) : null;
    if ((c.ZP.isBoostOnlySubscription(r) ? (t = g.intl.string(g.t.Uj0md3)) : null != _ && (t = c.ZP.getDisplayPremiumType(_.planId)), null == t)) return null;
    let C = () => l.Z.open(m.oAB.SUBSCRIPTIONS),
        T = (null != _ ? c.ZP.getSkuIdForPlan(_.planId) : null) === u.Si.TIER_1;
    return (
        (n = null != f ? f : E || x ? 'always-white' : 'text-normal'),
        (0, i.jsxs)(a.Card, {
            className: s()(h.container, p, {
                [h.lightTextLink]: x,
                [h.centerText]: E
            }),
            type: a.Card.Types.CUSTOM,
            children: [
                (0, i.jsx)(a.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: s()(h.icon, { [h.lightThemeColorOnly]: E || x })
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
