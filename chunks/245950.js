n.d(t, { Z: () => p }), n(47120);
var r = n(192379),
    i = n(913527),
    s = n.n(i),
    a = n(442837),
    l = n(430824),
    o = n(937615),
    c = n(584825),
    d = n(289393),
    u = n(697227),
    m = n(981631),
    g = n(388032);
function p(e) {
    let t = (0, u.W)(e),
        n = (0, a.e7)([d.Z], () => d.Z.getSubscriptionListingForPlan(t)),
        i = (0, a.e7)([d.Z], () => (null != n ? d.Z.getSubscriptionGroupListingForSubscriptionListing(n.id) : null)),
        p = (0, a.e7)([l.Z], () => l.Z.getGuild(null == i ? void 0 : i.guild_id)),
        [h, f] = r.useState(!1),
        { fetchSubscriptionsSettings: b } = (0, c.JH)();
    r.useEffect(() => {
        h && null != p && null == d.Z.getSubscriptionSettings(p.id) && b(p.id);
    }, [h, p, b]);
    let N =
        null == n
            ? void 0
            : (function (e) {
                  let { subscription: t } = e,
                      n = s()(t.currentPeriodEnd).format('M/D/YY'),
                      r = null != t.price ? (0, o.T4)(t.price, t.currency) : '',
                      i = s()(t.createdAt).format('M/D/YY'),
                      a = t.status === m.O0b.CANCELED,
                      l = t.status === m.O0b.PAST_DUE,
                      c = null != t.trialId;
                  return {
                      memberSince: i,
                      nextRenewalDate: n,
                      nextRenewalLabel: a ? g.NW.string(g.t.UAfot7) : g.NW.string(g.t.CVjLcH),
                      subscriptionPrice: r,
                      isCancelled: a,
                      isPastDue: l,
                      isTrial: c
                  };
              })({ subscription: e });
    return {
        guild: p,
        expanded: h,
        handleToggleExpanded: () => f((e) => !e),
        listing: n,
        groupListing: i,
        subscriptionInfo: N
    };
}
