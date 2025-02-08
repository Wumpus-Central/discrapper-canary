n.d(t, { Z: () => T }), n(47120);
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    d = n(594174),
    u = n(509545),
    m = n(78839),
    g = n(580130),
    h = n(74538),
    x = n(393411),
    _ = n(474936),
    p = n(981631),
    E = n(388032),
    C = n(461538);
function f(e) {
    let t,
        { user: n, planId: s, count: l, userPremiumSubscription: a, unconsumedFractionalPremiumUnits: d = [] } = e,
        [m, g] = (0, o.Wu)([u.Z], () => [u.Z.get(s), null != a ? u.Z.get(a.planId) : null]);
    if (null == m || h.ZP.getInterval(s).intervalType !== _.rV.MONTH) return null;
    let x = null != g ? g.skuId : null,
        f = m.skuId === x,
        T = h.ZP.getDisplayName(s);
    if (null != a) {
        let e;
        (e = new Date(a.status === p.O0b.PAUSED && null != a.pauseEndsAt ? a.pauseEndsAt : a.currentPeriodEnd)), (t = (0, h.N1)(e, d));
    }
    return (0, i.jsxs)('div', {
        className: C.accountCreditRow,
        children: [
            (0, i.jsx)('div', {
                className: r()({
                    [C.iconBackgroundTier0]: m.skuId === _.Si.TIER_0,
                    [C.iconBackgroundTier1]: m.skuId === _.Si.TIER_1,
                    [C.iconBackgroundTier2]: m.skuId === _.Si.TIER_2
                }),
                children: (0, i.jsx)(c.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: C.icon
                })
            }),
            (0, i.jsxs)('div', {
                className: C.rowDetails,
                children: [
                    (0, i.jsx)(c.X6q, {
                        variant: 'heading-md/semibold',
                        children: E.intl.format(E.t.LzobT0, { planName: T })
                    }),
                    n.hasFreePremium() || (null != a && a.isPurchasedExternally)
                        ? null
                        : (0, i.jsx)(c.X6q, {
                              className: C.rowApplied,
                              variant: 'heading-sm/semibold',
                              color: 'header-secondary',
                              children: f && null != a ? E.intl.formatToPlainString(E.t['5CNRRE'], { date: null != t ? t : 0 }) : E.intl.formatToPlainString(E.t.eNXZ5O, { planName: T })
                          })
                ]
            }),
            (0, i.jsx)(c.Text, {
                className: C.rowCreditCount,
                variant: 'text-md/semibold',
                children: E.intl.format(E.t['ess/xs'], { count: l })
            })
        ]
    });
}
let T = function (e) {
    let { className: t, entitlements: n } = e,
        s = a()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        l = (0, o.Wu)([g.Z], () => g.Z.getUnactivatedFractionalPremiumUnits()),
        u = (0, o.e7)([m.ZP], () => m.ZP.getPremiumSubscription()),
        h = (0, o.e7)([m.ZP], () => null == m.ZP.getPremiumTypeSubscription()),
        p = Object.keys(s).some((e) => e === _.Xh.PREMIUM_MONTH_TIER_1),
        T = (0, o.e7)([d.default], () => d.default.getCurrentUser());
    return null == T
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)('div', {
                      className: r()(t, C.premiumSubscriptionAccountCredit, C.accountCreditsContainer),
                      children: Object.keys(s).map((e) =>
                          (0, i.jsx)(
                              f,
                              {
                                  planId: e,
                                  count: s[e].length,
                                  userPremiumSubscription: u,
                                  user: T,
                                  unconsumedFractionalPremiumUnits: l
                              },
                              e
                          )
                      )
                  }),
                  p &&
                      h &&
                      (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(c.Text, {
                                  className: C.tier1AccountCreditHeader,
                                  variant: 'text-md/normal',
                                  children: E.intl.string(E.t['VNr4+P'])
                              }),
                              (0, i.jsx)(x.R, {})
                          ]
                      })
              ]
          });
};
