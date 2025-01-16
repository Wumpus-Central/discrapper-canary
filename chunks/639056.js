n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(392711),
    l = n.n(a),
    o = n(442837),
    c = n(481060),
    d = n(594174),
    u = n(509545),
    m = n(78839),
    g = n(580130),
    h = n(74538),
    p = n(393411),
    x = n(474936),
    f = n(981631),
    _ = n(388032),
    E = n(461538);
function C(e) {
    let t,
        { user: n, planId: r, count: a, userPremiumSubscription: l, unconsumedFractionalPremiumUnits: d = [] } = e,
        [m, g] = (0, o.Wu)([u.Z], () => [u.Z.get(r), null != l ? u.Z.get(l.planId) : null]);
    if (null == m || h.ZP.getInterval(r).intervalType !== x.rV.MONTH) return null;
    let p = null != g ? g.skuId : null,
        C = m.skuId === p,
        T = h.ZP.getDisplayName(r);
    if (null != l) {
        let e;
        (e = l.status === f.O0b.PAUSED && null != l.pauseEndsAt ? new Date(l.pauseEndsAt) : new Date(l.currentPeriodEnd)), (t = (0, h.N1)(e, d));
    }
    return (0, i.jsxs)('div', {
        className: E.accountCreditRow,
        children: [
            (0, i.jsx)('div', {
                className: s()({
                    [E.iconBackgroundTier0]: m.skuId === x.Si.TIER_0,
                    [E.iconBackgroundTier1]: m.skuId === x.Si.TIER_1,
                    [E.iconBackgroundTier2]: m.skuId === x.Si.TIER_2
                }),
                children: (0, i.jsx)(c.NitroWheelIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: E.icon
                })
            }),
            (0, i.jsxs)('div', {
                className: E.rowDetails,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-md/semibold',
                        children: _.intl.format(_.t.LzobT0, { planName: T })
                    }),
                    n.hasFreePremium() || (null != l && l.isPurchasedExternally)
                        ? null
                        : (0, i.jsx)(c.Heading, {
                              className: E.rowApplied,
                              variant: 'heading-sm/semibold',
                              color: 'header-secondary',
                              children: C && null != l ? _.intl.formatToPlainString(_.t['5CNRRE'], { date: null != t ? t : 0 }) : _.intl.formatToPlainString(_.t.eNXZ5O, { planName: T })
                          })
                ]
            }),
            (0, i.jsx)(c.Text, {
                className: E.rowCreditCount,
                variant: 'text-md/semibold',
                children: _.intl.format(_.t['ess/xs'], { count: a })
            })
        ]
    });
}
t.Z = function (e) {
    let { className: t, entitlements: n } = e,
        r = l()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        a = (0, o.Wu)([g.Z], () => g.Z.getUnactivatedFractionalPremiumUnits()),
        u = (0, o.e7)([m.ZP], () => m.ZP.getPremiumSubscription()),
        h = (0, o.e7)([m.ZP], () => null == m.ZP.getPremiumTypeSubscription()),
        f = Object.keys(r).some((e) => e === x.Xh.PREMIUM_MONTH_TIER_1),
        T = (0, o.e7)([d.default], () => d.default.getCurrentUser());
    return null == T
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', {
                      className: s()(t, E.premiumSubscriptionAccountCredit, E.accountCreditsContainer),
                      children: Object.keys(r).map((e) =>
                          (0, i.jsx)(
                              C,
                              {
                                  planId: e,
                                  count: r[e].length,
                                  userPremiumSubscription: u,
                                  user: T,
                                  unconsumedFractionalPremiumUnits: a
                              },
                              e
                          )
                      )
                  }),
                  f &&
                      h &&
                      (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(c.Text, {
                                  className: E.tier1AccountCreditHeader,
                                  variant: 'text-md/normal',
                                  children: _.intl.string(_.t['VNr4+P'])
                              }),
                              (0, i.jsx)(p.R, {})
                          ]
                      })
              ]
          });
};
