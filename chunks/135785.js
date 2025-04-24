n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(230711),
    o = n(63063),
    c = n(74538),
    d = n(140465),
    u = n(474936),
    m = n(981631),
    p = n(388032),
    g = n(132383);
let h = (e) => {
    let t,
        n,
        { premiumSubscription: r, className: h, isFullscreen: f = !1, textColor: b } = e,
        _ = (0, d.Nx)();
    if (null == r) return null;
    let x = null != r ? c.ZP.getPremiumPlanItem(r) : null;
    if ((c.ZP.isBoostOnlySubscription(r) ? (t = p.intl.string(p.t.Uj0md3)) : null != x && (t = c.ZP.getDisplayPremiumType(x.planId)), null == t)) return null;
    let E = () => a.Z.open(m.oAB.SUBSCRIPTIONS),
        C = (null != x ? c.ZP.getSkuIdForPlan(x.planId) : null) === u.Si.TIER_1;
    return (
        (n = null != b ? b : _ || f ? 'always-white' : 'text-normal'),
        (0, i.jsxs)(l.Zbd, {
            className: s()(g.container, h, {
                [g.lightTextLink]: f,
                [g.centerText]: _
            }),
            type: l.Zbd.Types.CUSTOM,
            children: [
                (0, i.jsx)(l.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: s()(g.icon, { [g.lightThemeColorOnly]: _ || f })
                }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-sm/medium',
                    color: n,
                    children: C
                        ? p.intl.format(p.t['tYuv+f'], {
                              helpdeskArticle: o.Z.getArticleURL(m.BhN.PREMIUM_DETAILS),
                              onSubscriptionsClick: E
                          })
                        : p.intl.format(p.t.xHRgU1, {
                              subscriptionName: t,
                              onSubscriptionsClick: E
                          })
                })
            ]
        })
    );
};
