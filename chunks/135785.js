n.d(t, { Z: () => x });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(230711),
    o = n(63063),
    c = n(74538),
    d = n(140465),
    u = n(474936),
    m = n(981631),
    g = n(388032),
    h = n(234254);
let x = (e) => {
    let t,
        n,
        { premiumSubscription: s, className: x, isFullscreen: _ = !1, textColor: p } = e,
        E = (0, d.Nx)();
    if (null == s) return null;
    let C = null != s ? c.ZP.getPremiumPlanItem(s) : null;
    if ((c.ZP.isBoostOnlySubscription(s) ? (t = g.intl.string(g.t.Uj0md3)) : null != C && (t = c.ZP.getDisplayPremiumType(C.planId)), null == t)) return null;
    let f = () => a.Z.open(m.oAB.SUBSCRIPTIONS),
        T = (null != C ? c.ZP.getSkuIdForPlan(C.planId) : null) === u.Si.TIER_1;
    return (
        (n = null != p ? p : E || _ ? 'always-white' : 'text-normal'),
        (0, i.jsxs)(l.Zbd, {
            className: r()(h.container, x, {
                [h.lightTextLink]: _,
                [h.centerText]: E
            }),
            type: l.Zbd.Types.CUSTOM,
            children: [
                (0, i.jsx)(l.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: r()(h.icon, { [h.lightThemeColorOnly]: E || _ })
                }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-sm/medium',
                    color: n,
                    children: T
                        ? g.intl.format(g.t['tYuv+f'], {
                              helpdeskArticle: o.Z.getArticleURL(m.BhN.PREMIUM_DETAILS),
                              onSubscriptionsClick: f
                          })
                        : g.intl.format(g.t.xHRgU1, {
                              subscriptionName: t,
                              onSubscriptionsClick: f
                          })
                })
            ]
        })
    );
};
