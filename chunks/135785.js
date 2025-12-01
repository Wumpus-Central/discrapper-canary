n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(313789),
    l = n(518596),
    c = n(63063),
    u = n(74538),
    d = n(140465),
    f = n(474936),
    p = n(981631),
    _ = n(388032),
    m = n(561485);
let h = (e) => {
    let t,
        n,
        { premiumSubscription: i, className: h, textColor: g } = e,
        E = (0, d.Nx)();
    if (null == i) return null;
    let b = null != i ? u.ZP.getPremiumPlanItem(i) : null;
    if (
        (u.ZP.isBoostOnlySubscription(i)
            ? (t = _.intl.string(_.t.Uj0md3))
            : null != b && (t = u.ZP.getTierDisplayNameByPlanId(b.planId)),
        null == t)
    )
        return null;
    let y = () => (0, l.openUserSettings)(s.n.SUBSCRIPTIONS_PANEL, { section: p.oAB.SUBSCRIPTIONS }),
        O = (null != b ? u.ZP.getSkuIdForPlan(b.planId) : null) === f.Si.TIER_1;
    return (
        (n = null != g ? g : E ? "always-white" : "text-default"),
        (0, r.jsxs)(o.Zbd, {
            className: a()(m.container, h, { [m.centerText]: E }),
            type: o.Zbd.Types.CUSTOM,
            children: [
                (0, r.jsx)(o.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: a()(m.icon, { [m.lightThemeColorOnly]: E }),
                }),
                (0, r.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: n,
                    children: O
                        ? _.intl.format(_.t["tYuv+T"], {
                              helpdeskArticle: c.Z.getArticleURL(p.BhN.PREMIUM_DETAILS),
                              onSubscriptionsClick: y,
                          })
                        : _.intl.format(_.t.xHRgU2, {
                              subscriptionName: t,
                              onSubscriptionsClick: y,
                          }),
                }),
            ],
        })
    );
};
