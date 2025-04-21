n.d(t, { Z: () => p }), n(388685);
var i = n(192379),
    r = n(913527),
    s = n.n(r),
    l = n(442837),
    a = n(430824),
    o = n(937615),
    c = n(584825),
    d = n(289393),
    u = n(697227),
    m = n(981631),
    g = n(388032);
function p(e) {
    let t = (0, u.W)(e),
        n = (0, l.e7)([d.Z], () => d.Z.getSubscriptionListingForPlan(t)),
        r = (0, l.e7)([d.Z], () => (null != n ? d.Z.getSubscriptionGroupListingForSubscriptionListing(n.id) : null)),
        p = (0, l.e7)([a.Z], () => a.Z.getGuild(null == r ? void 0 : r.guild_id)),
        [h, f] = i.useState(!1),
        { fetchSubscriptionsSettings: b } = (0, c.JH)();
    i.useEffect(() => {
        h && null != p && null == d.Z.getSubscriptionSettings(p.id) && b(p.id);
    }, [h, p, b]);
    let _ =
        null == n
            ? void 0
            : (function (e) {
                  let { subscription: t } = e,
                      n = s()(t.currentPeriodEnd).format('M/D/YY'),
                      i = null != t.price ? (0, o.T4)(t.price, t.currency) : '',
                      r = s()(t.createdAt).format('M/D/YY'),
                      l = t.status === m.O0b.CANCELED,
                      a = t.status === m.O0b.PAST_DUE,
                      c = t.hasActiveTrial;
                  return {
                      memberSince: r,
                      nextRenewalDate: n,
                      nextRenewalLabel: l ? g.intl.string(g.t.UAfot7) : g.intl.string(g.t.CVjLcH),
                      subscriptionPrice: i,
                      isCancelled: l,
                      isPastDue: a,
                      isTrial: c
                  };
              })({ subscription: e });
    return {
        guild: p,
        expanded: h,
        handleToggleExpanded: () => f((e) => !e),
        listing: n,
        groupListing: r,
        subscriptionInfo: _
    };
}
