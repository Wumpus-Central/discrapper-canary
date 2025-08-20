n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(230711),
    l = n(63063),
    c = n(74538),
    u = n(140465),
    d = n(474936),
    f = n(981631),
    _ = n(388032),
    p = n(561485);
let h = (e) => {
    let t,
        n,
        { premiumSubscription: i, className: h, textColor: m } = e,
        g = (0, u.Nx)();
    if (null == i) return null;
    let E = null != i ? c.ZP.getPremiumPlanItem(i) : null;
    if (
        (c.ZP.isBoostOnlySubscription(i)
            ? (t = _.intl.string(_.t.Uj0md3))
            : null != E && (t = c.ZP.getDisplayPremiumType(E.planId)),
        null == t)
    )
        return null;
    let b = () => s.Z.open(f.oAB.SUBSCRIPTIONS),
        y = (null != E ? c.ZP.getSkuIdForPlan(E.planId) : null) === d.Si.TIER_1;
    return (
        (n = null != m ? m : g ? "always-white" : "text-default"),
        (0, r.jsxs)(o.Zbd, {
            className: a()(p.container, h, { [p.centerText]: g }),
            type: o.Zbd.Types.CUSTOM,
            children: [
                (0, r.jsx)(o.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: a()(p.icon, { [p.lightThemeColorOnly]: g }),
                }),
                (0, r.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: n,
                    children: y
                        ? _.intl.format(_.t["tYuv+f"], {
                              helpdeskArticle: l.Z.getArticleURL(f.BhN.PREMIUM_DETAILS),
                              onSubscriptionsClick: b,
                          })
                        : _.intl.format(_.t.xHRgU1, {
                              subscriptionName: t,
                              onSubscriptionsClick: b,
                          }),
                }),
            ],
        })
    );
};
