n.d(t, { Z: () => O }), n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    c = n(481060),
    u = n(594174),
    d = n(509545),
    f = n(78839),
    _ = n(580130),
    p = n(74538),
    h = n(393411),
    m = n(474936),
    g = n(981631),
    E = n(388032),
    b = n(764810);
function y(e) {
    let t,
        { user: n, planId: i, count: o, userPremiumSubscription: s, unconsumedFractionalPremiumUnits: u = [] } = e,
        [f, _] = (0, l.Wu)([d.Z], () => [d.Z.get(i), null != s ? d.Z.get(s.planId) : null]);
    if (null == f || p.ZP.getInterval(i).intervalType !== m.rV.MONTH) return null;
    let h = null != _ ? _.skuId : null,
        y = f.skuId === h,
        O = p.ZP.getDisplayName(i);
    if (null != s) {
        let e;
        (e = new Date(s.status === g.O0b.PAUSED && null != s.pauseEndsAt ? s.pauseEndsAt : s.currentPeriodEnd)),
            (t = (0, p.N1)(e, u));
    }
    return (0, r.jsxs)("div", {
        className: b.accountCreditRow,
        children: [
            (0, r.jsx)("div", {
                className: a()({
                    [b.iconBackgroundTier0]: f.skuId === m.Si.TIER_0,
                    [b.iconBackgroundTier1]: f.skuId === m.Si.TIER_1,
                    [b.iconBackgroundTier2]: f.skuId === m.Si.TIER_2,
                }),
                children: (0, r.jsx)(c.SrA, {
                    size: "md",
                    color: "currentColor",
                    className: b.icon,
                }),
            }),
            (0, r.jsxs)("div", {
                className: b.rowDetails,
                children: [
                    (0, r.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        children: E.intl.format(E.t.LzobT9, { planName: O }),
                    }),
                    n.hasFreePremium() || (null != s && s.isPurchasedExternally)
                        ? null
                        : (0, r.jsx)(c.Heading, {
                              className: b.rowApplied,
                              variant: "heading-sm/semibold",
                              color: "header-secondary",
                              children:
                                  y && null != s
                                      ? E.intl.formatToPlainString(E.t["5CNRRA"], { date: null != t ? t : 0 })
                                      : E.intl.formatToPlainString(E.t.eNXZ5O, { planName: O }),
                          }),
                ],
            }),
            (0, r.jsx)(c.Text, {
                className: b.rowCreditCount,
                variant: "text-md/semibold",
                children: E.intl.format(E.t["ess/xl"], { count: o }),
            }),
        ],
    });
}
let O = function (e) {
    let { className: t, entitlements: n } = e,
        i = s()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: r } = e;
                return null != t && null != n && !r;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        o = (0, l.Wu)([_.Z], () => _.Z.getUnactivatedFractionalPremiumUnits()),
        d = (0, l.e7)([f.Z], () => f.Z.getPremiumSubscription()),
        p = (0, l.e7)([f.Z], () => null == f.Z.getPremiumTypeSubscription()),
        g = Object.keys(i).some((e) => e === m.Xh.PREMIUM_MONTH_TIER_1) && p,
        O = (0, l.e7)([u.default], () => u.default.getCurrentUser());
    return null == O
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)("div", {
                      className: a()(t, b.premiumSubscriptionAccountCredit, b.accountCreditsContainer),
                      children: Object.keys(i).map((e) =>
                          (0, r.jsx)(
                              y,
                              {
                                  planId: e,
                                  count: i[e].length,
                                  userPremiumSubscription: d,
                                  user: O,
                                  unconsumedFractionalPremiumUnits: o,
                              },
                              e,
                          ),
                      ),
                  }),
                  g &&
                      (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(c.Text, {
                                  className: b.tier1AccountCreditHeader,
                                  variant: "text-md/normal",
                                  children: E.intl.string(E.t["VNr4+O"]),
                              }),
                              (0, r.jsx)(h.R, {}),
                          ],
                      }),
              ],
          });
};
