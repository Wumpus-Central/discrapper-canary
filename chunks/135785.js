n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(230711),
    o = n(63063),
    c = n(74538),
    d = n(140465),
    u = n(474936),
    m = n(981631),
    g = n(388032),
    p = n(132383);
let h = (e) => {
    let t,
        n,
        { premiumSubscription: i, className: h, isFullscreen: f = !1, textColor: _ } = e,
        b = (0, d.Nx)();
    if (null == i) return null;
    let N = null != i ? c.ZP.getPremiumPlanItem(i) : null;
    if ((c.ZP.isBoostOnlySubscription(i) ? (t = g.NW.string(g.t.Uj0md3)) : null != N && (t = c.ZP.getDisplayPremiumType(N.planId)), null == t)) return null;
    let x = () => l.Z.open(m.oAB.SUBSCRIPTIONS),
        E = (null != N ? c.ZP.getSkuIdForPlan(N.planId) : null) === u.Si.TIER_1;
    return (
        (n = null != _ ? _ : b || f ? 'always-white' : 'text-normal'),
        (0, r.jsxs)(a.Zbd, {
            className: s()(p.container, h, {
                [p.lightTextLink]: f,
                [p.centerText]: b
            }),
            type: a.Zbd.Types.CUSTOM,
            children: [
                (0, r.jsx)(a.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: s()(p.icon, { [p.lightThemeColorOnly]: b || f })
                }),
                (0, r.jsx)(a.Text, {
                    variant: 'text-sm/medium',
                    color: n,
                    children: E
                        ? g.NW.format(g.t['tYuv+f'], {
                              helpdeskArticle: o.Z.getArticleURL(m.BhN.PREMIUM_DETAILS),
                              onSubscriptionsClick: x
                          })
                        : g.NW.format(g.t.xHRgU1, {
                              subscriptionName: t,
                              onSubscriptionsClick: x
                          })
                })
            ]
        })
    );
};
