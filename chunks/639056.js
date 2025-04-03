n.d(t, { Z: () => E }), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(392711),
    l = n.n(a),
    o = n(442837),
    c = n(481060),
    d = n(594174),
    u = n(509545),
    m = n(78839),
    g = n(580130),
    p = n(74538),
    h = n(393411),
    f = n(474936),
    b = n(981631),
    N = n(388032),
    x = n(846706);
function _(e) {
    let t,
        { user: n, planId: i, count: a, userPremiumSubscription: l, unconsumedFractionalPremiumUnits: d = [] } = e,
        [m, g] = (0, o.Wu)([u.Z], () => [u.Z.get(i), null != l ? u.Z.get(l.planId) : null]);
    if (null == m || p.ZP.getInterval(i).intervalType !== f.rV.MONTH) return null;
    let h = null != g ? g.skuId : null,
        _ = m.skuId === h,
        E = p.ZP.getDisplayName(i);
    if (null != l) {
        let e;
        (e = new Date(l.status === b.O0b.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd)), (t = (0, p.N1)(e, d));
    }
    return (0, r.jsxs)('div', {
        className: x.accountCreditRow,
        children: [
            (0, r.jsx)('div', {
                className: s()({
                    [x.iconBackgroundTier0]: m.skuId === f.Si.TIER_0,
                    [x.iconBackgroundTier1]: m.skuId === f.Si.TIER_1,
                    [x.iconBackgroundTier2]: m.skuId === f.Si.TIER_2
                }),
                children: (0, r.jsx)(c.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: x.icon
                })
            }),
            (0, r.jsxs)('div', {
                className: x.rowDetails,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-md/semibold',
                        children: N.NW.format(N.t.LzobT0, { planName: E })
                    }),
                    n.hasFreePremium() || (null != l && l.isPurchasedExternally)
                        ? null
                        : (0, r.jsx)(c.X6q, {
                              className: x.rowApplied,
                              variant: 'heading-sm/semibold',
                              color: 'header-secondary',
                              children: _ && null != l ? N.NW.formatToPlainString(N.t['5CNRRE'], { date: null != t ? t : 0 }) : N.NW.formatToPlainString(N.t.eNXZ5O, { planName: E })
                          })
                ]
            }),
            (0, r.jsx)(c.Text, {
                className: x.rowCreditCount,
                variant: 'text-md/semibold',
                children: N.NW.format(N.t['ess/xs'], { count: a })
            })
        ]
    });
}
let E = function (e) {
    let { className: t, entitlements: n } = e,
        i = l()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: r } = e;
                return null != t && null != n && !r;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        a = (0, o.Wu)([g.Z], () => g.Z.getUnactivatedFractionalPremiumUnits()),
        u = (0, o.e7)([m.ZP], () => m.ZP.getPremiumSubscription()),
        p = (0, o.e7)([m.ZP], () => null == m.ZP.getPremiumTypeSubscription()),
        b = Object.keys(i).some((e) => e === f.Xh.PREMIUM_MONTH_TIER_1),
        E = (0, o.e7)([d.default], () => d.default.getCurrentUser());
    return null == E
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)('div', {
                      className: s()(t, x.premiumSubscriptionAccountCredit, x.accountCreditsContainer),
                      children: Object.keys(i).map((e) =>
                          (0, r.jsx)(
                              _,
                              {
                                  planId: e,
                                  count: i[e].length,
                                  userPremiumSubscription: u,
                                  user: E,
                                  unconsumedFractionalPremiumUnits: a
                              },
                              e
                          )
                      )
                  }),
                  b &&
                      p &&
                      (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsx)(c.Text, {
                                  className: x.tier1AccountCreditHeader,
                                  variant: 'text-md/normal',
                                  children: N.NW.string(N.t['VNr4+P'])
                              }),
                              (0, r.jsx)(h.R, {})
                          ]
                      })
              ]
          });
};
