(n.d(t, { Z: () => g }), n(388685));
var i = n(73800),
    r = n(913527),
    s = n.n(r),
    a = n(442837),
    l = n(430824),
    o = n(937615),
    c = n(584825),
    d = n(289393),
    u = n(697227),
    m = n(981631),
    p = n(388032);
function g(e) {
    let t = (0, u.W)(e),
        n = (0, a.e7)([d.Z], () => d.Z.getSubscriptionListingForPlan(t)),
        r = (0, a.e7)([d.Z], () => (null != n ? d.Z.getSubscriptionGroupListingForSubscriptionListing(n.id) : null)),
        g = (0, a.e7)([l.Z], () => l.Z.getGuild(null == r ? void 0 : r.guild_id)),
        [h, f] = i.useState(!1),
        { fetchSubscriptionsSettings: b } = (0, c.JH)();
    i.useEffect(() => {
        h && null != g && null == d.Z.getSubscriptionSettings(g.id) && b(g.id);
    }, [h, g, b]);
    let x =
        null == n
            ? void 0
            : (function (e) {
                  let { subscription: t } = e,
                      n = s()(t.currentPeriodEnd).format('M/D/YY'),
                      i = null != t.price ? (0, o.T4)(t.price, t.currency) : '',
                      r = s()(t.createdAt).format('M/D/YY'),
                      a = t.status === m.O0b.CANCELED,
                      l = t.status === m.O0b.PAST_DUE,
                      c = t.hasActiveTrial;
                  return {
                      memberSince: r,
                      nextRenewalDate: n,
                      nextRenewalLabel: a ? p.intl.string(p.t.UAfot7) : p.intl.string(p.t.CVjLcH),
                      subscriptionPrice: i,
                      isCancelled: a,
                      isPastDue: l,
                      isTrial: c
                  };
              })({ subscription: e });
    return {
        guild: g,
        expanded: h,
        handleToggleExpanded: () => f((e) => !e),
        listing: n,
        groupListing: r,
        subscriptionInfo: x
    };
}
