n.d(t, { Z: () => m });
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
    _ = n(981631),
    p = n(388032),
    h = n(462240);
let m = (e) => {
    let t,
        n,
        { premiumSubscription: i, className: m, textColor: g } = e,
        E = (0, d.Nx)();
    if (null == i) return null;
    let b = null != i ? u.ZP.getPremiumPlanItem(i) : null;
    if (
        (u.ZP.isBoostOnlySubscription(i)
            ? (t = p.intl.string(p.t.Uj0md3))
            : null != b && (t = u.ZP.getDisplayPremiumType(b.planId)),
        null == t)
    )
        return null;
    let y = () => (0, l.openUserSettings)(s.n.SUBSCRIPTIONS_PANEL, { section: _.oAB.SUBSCRIPTIONS }),
        O = (null != b ? u.ZP.getSkuIdForPlan(b.planId) : null) === f.Si.TIER_1;
    return (
        (n = null != g ? g : E ? "always-white" : "text-default"),
        (0, r.jsxs)(o.Zbd, {
            className: a()(h.container, m, { [h.centerText]: E }),
            type: o.Zbd.Types.CUSTOM,
            children: [
                (0, r.jsx)(o.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: a()(h.icon, { [h.lightThemeColorOnly]: E }),
                }),
                (0, r.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: n,
                    children: O
                        ? p.intl.format(p.t["tYuv+T"], {
                              helpdeskArticle: c.Z.getArticleURL(_.BhN.PREMIUM_DETAILS),
                              onSubscriptionsClick: y,
                          })
                        : p.intl.format(p.t.xHRgU2, {
                              subscriptionName: t,
                              onSubscriptionsClick: y,
                          }),
                }),
            ],
        })
    );
};
