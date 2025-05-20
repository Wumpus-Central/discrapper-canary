n.d(t, { Z: () => h });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(230711),
    o = n(63063),
    c = n(74538),
    d = n(140465),
    u = n(474936),
    g = n(981631),
    m = n(388032),
    p = n(132383);
let h = (e) => {
    let t,
        n,
        { premiumSubscription: r, className: h, isFullscreen: f = !1, textColor: b } = e,
        _ = (0, d.Nx)();
    if (null == r) return null;
    let x = null != r ? c.ZP.getPremiumPlanItem(r) : null;
    if ((c.ZP.isBoostOnlySubscription(r) ? (t = m.intl.string(m.t.Uj0md3)) : null != x && (t = c.ZP.getDisplayPremiumType(x.planId)), null == t)) return null;
    let E = () => a.Z.open(g.oAB.SUBSCRIPTIONS),
        C = (null != x ? c.ZP.getSkuIdForPlan(x.planId) : null) === u.Si.TIER_1;
    return (
        (n = null != b ? b : _ || f ? 'always-white' : 'text-normal'),
        (0, i.jsxs)(l.Zbd, {
            className: s()(p.container, h, {
                [p.lightTextLink]: f,
                [p.centerText]: _
            }),
            type: l.Zbd.Types.CUSTOM,
            children: [
                (0, i.jsx)(l.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: s()(p.icon, { [p.lightThemeColorOnly]: _ || f })
                }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-sm/medium',
                    color: n,
                    children: C
                        ? m.intl.format(m.t['tYuv+f'], {
                              helpdeskArticle: o.Z.getArticleURL(g.BhN.PREMIUM_DETAILS),
                              onSubscriptionsClick: E
                          })
                        : m.intl.format(m.t.xHRgU1, {
                              subscriptionName: t,
                              onSubscriptionsClick: E
                          })
                })
            ]
        })
    );
};
