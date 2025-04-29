n.d(t, { Z: () => j }), n(388685);
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    d = n(594174),
    u = n(509545),
    m = n(78839),
    p = n(580130),
    g = n(74538),
    h = n(393411),
    f = n(474936),
    b = n(981631),
    _ = n(388032),
    x = n(846706);
function E(e) {
    let t,
        { user: n, planId: r, count: l, userPremiumSubscription: a, unconsumedFractionalPremiumUnits: d = [] } = e,
        [m, p] = (0, o.Wu)([u.Z], () => [u.Z.get(r), null != a ? u.Z.get(a.planId) : null]);
    if (null == m || g.ZP.getInterval(r).intervalType !== f.rV.MONTH) return null;
    let h = null != p ? p.skuId : null,
        E = m.skuId === h,
        j = g.ZP.getDisplayName(r);
    if (null != a) {
        let e;
        (e = new Date(a.status === b.O0b.PAUSED && null != a.pauseEndsAt ? a.pauseEndsAt : a.currentPeriodEnd)), (t = (0, g.N1)(e, d));
    }
    return (0, i.jsxs)('div', {
        className: x.accountCreditRow,
        children: [
            (0, i.jsx)('div', {
                className: s()({
                    [x.iconBackgroundTier0]: m.skuId === f.Si.TIER_0,
                    [x.iconBackgroundTier1]: m.skuId === f.Si.TIER_1,
                    [x.iconBackgroundTier2]: m.skuId === f.Si.TIER_2
                }),
                children: (0, i.jsx)(c.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: x.icon
                })
            }),
            (0, i.jsxs)('div', {
                className: x.rowDetails,
                children: [
                    (0, i.jsx)(c.X6q, {
                        variant: 'heading-md/semibold',
                        children: _.intl.format(_.t.LzobT0, { planName: j })
                    }),
                    n.hasFreePremium() || (null != a && a.isPurchasedExternally)
                        ? null
                        : (0, i.jsx)(c.X6q, {
                              className: x.rowApplied,
                              variant: 'heading-sm/semibold',
                              color: 'header-secondary',
                              children: E && null != a ? _.intl.formatToPlainString(_.t['5CNRRE'], { date: null != t ? t : 0 }) : _.intl.formatToPlainString(_.t.eNXZ5O, { planName: j })
                          })
                ]
            }),
            (0, i.jsx)(c.Text, {
                className: x.rowCreditCount,
                variant: 'text-md/semibold',
                children: _.intl.format(_.t['ess/xs'], { count: l })
            })
        ]
    });
}
let j = function (e) {
    let { className: t, entitlements: n } = e,
        r = a()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        l = (0, o.Wu)([p.Z], () => p.Z.getUnactivatedFractionalPremiumUnits()),
        u = (0, o.e7)([m.ZP], () => m.ZP.getPremiumSubscription()),
        g = (0, o.e7)([m.ZP], () => null == m.ZP.getPremiumTypeSubscription()),
        b = Object.keys(r).some((e) => e === f.Xh.PREMIUM_MONTH_TIER_1),
        j = (0, o.e7)([d.default], () => d.default.getCurrentUser());
    return null == j
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', {
                      className: s()(t, x.premiumSubscriptionAccountCredit, x.accountCreditsContainer),
                      children: Object.keys(r).map((e) =>
                          (0, i.jsx)(
                              E,
                              {
                                  planId: e,
                                  count: r[e].length,
                                  userPremiumSubscription: u,
                                  user: j,
                                  unconsumedFractionalPremiumUnits: l
                              },
                              e
                          )
                      )
                  }),
                  b &&
                      g &&
                      (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(c.Text, {
                                  className: x.tier1AccountCreditHeader,
                                  variant: 'text-md/normal',
                                  children: _.intl.string(_.t['VNr4+P'])
                              }),
                              (0, i.jsx)(h.R, {})
                          ]
                      })
              ]
          });
};
