(n.d(t, { Z: () => O }), n(388685));
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(392711),
    l = n.n(a),
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
    x = n(388032),
    _ = n(846706);
function j(e) {
    let t,
        { user: n, planId: r, count: a, userPremiumSubscription: l, unconsumedFractionalPremiumUnits: d = [] } = e,
        [m, p] = (0, o.Wu)([u.Z], () => [u.Z.get(r), null != l ? u.Z.get(l.planId) : null]);
    if (null == m || g.ZP.getInterval(r).intervalType !== f.rV.MONTH) return null;
    let h = null != p ? p.skuId : null,
        j = m.skuId === h,
        O = g.ZP.getDisplayName(r);
    if (null != l) {
        let e;
        ((e = new Date(l.status === b.O0b.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd)), (t = (0, g.N1)(e, d)));
    }
    return (0, i.jsxs)('div', {
        className: _.accountCreditRow,
        children: [
            (0, i.jsx)('div', {
                className: s()({
                    [_.iconBackgroundTier0]: m.skuId === f.Si.TIER_0,
                    [_.iconBackgroundTier1]: m.skuId === f.Si.TIER_1,
                    [_.iconBackgroundTier2]: m.skuId === f.Si.TIER_2
                }),
                children: (0, i.jsx)(c.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: _.icon
                })
            }),
            (0, i.jsxs)('div', {
                className: _.rowDetails,
                children: [
                    (0, i.jsx)(c.X6q, {
                        variant: 'heading-md/semibold',
                        children: x.intl.format(x.t.LzobT0, { planName: O })
                    }),
                    n.hasFreePremium() || (null != l && l.isPurchasedExternally)
                        ? null
                        : (0, i.jsx)(c.X6q, {
                              className: _.rowApplied,
                              variant: 'heading-sm/semibold',
                              color: 'header-secondary',
                              children: j && null != l ? x.intl.formatToPlainString(x.t['5CNRRE'], { date: null != t ? t : 0 }) : x.intl.formatToPlainString(x.t.eNXZ5O, { planName: O })
                          })
                ]
            }),
            (0, i.jsx)(c.Text, {
                className: _.rowCreditCount,
                variant: 'text-md/semibold',
                children: x.intl.format(x.t['ess/xs'], { count: a })
            })
        ]
    });
}
let O = function (e) {
    let { className: t, entitlements: n } = e,
        r = l()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        a = (0, o.Wu)([p.Z], () => p.Z.getUnactivatedFractionalPremiumUnits()),
        u = (0, o.e7)([m.Z], () => m.Z.getPremiumSubscription()),
        g = (0, o.e7)([m.Z], () => null == m.Z.getPremiumTypeSubscription()),
        b = Object.keys(r).some((e) => e === f.Xh.PREMIUM_MONTH_TIER_1),
        O = (0, o.e7)([d.default], () => d.default.getCurrentUser());
    return null == O
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', {
                      className: s()(t, _.premiumSubscriptionAccountCredit, _.accountCreditsContainer),
                      children: Object.keys(r).map((e) =>
                          (0, i.jsx)(
                              j,
                              {
                                  planId: e,
                                  count: r[e].length,
                                  userPremiumSubscription: u,
                                  user: O,
                                  unconsumedFractionalPremiumUnits: a
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
                                  className: _.tier1AccountCreditHeader,
                                  variant: 'text-md/normal',
                                  children: x.intl.string(x.t['VNr4+P'])
                              }),
                              (0, i.jsx)(h.R, {})
                          ]
                      })
              ]
          });
};
