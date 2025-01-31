n.d(t, { Z: () => g }), n(47120);
var i = n(192379),
    s = n(913527),
    r = n.n(s),
    l = n(442837),
    a = n(430824),
    o = n(937615),
    c = n(584825),
    d = n(289393),
    u = n(697227),
    m = n(981631),
    h = n(388032);
function g(e) {
    let t = (0, u.W)(e),
        n = (0, l.e7)([d.Z], () => d.Z.getSubscriptionListingForPlan(t)),
        s = (0, l.e7)([d.Z], () => (null != n ? d.Z.getSubscriptionGroupListingForSubscriptionListing(n.id) : null)),
        g = (0, l.e7)([a.Z], () => a.Z.getGuild(null == s ? void 0 : s.guild_id)),
        [_, x] = i.useState(!1),
        { fetchSubscriptionsSettings: p } = (0, c.JH)();
    i.useEffect(() => {
        _ && null != g && null == d.Z.getSubscriptionSettings(g.id) && p(g.id);
    }, [_, g, p]);
    let E =
        null == n
            ? void 0
            : (function (e) {
                  let { subscription: t } = e,
                      n = r()(t.currentPeriodEnd).format('M/D/YY'),
                      i = null != t.price ? (0, o.T4)(t.price, t.currency) : '',
                      s = r()(t.createdAt).format('M/D/YY'),
                      l = t.status === m.O0b.CANCELED,
                      a = t.status === m.O0b.PAST_DUE,
                      c = null != t.trialId;
                  return {
                      memberSince: s,
                      nextRenewalDate: n,
                      nextRenewalLabel: l ? h.intl.string(h.t.UAfot7) : h.intl.string(h.t.CVjLcH),
                      subscriptionPrice: i,
                      isCancelled: l,
                      isPastDue: a,
                      isTrial: c
                  };
              })({ subscription: e });
    return {
        guild: g,
        expanded: _,
        handleToggleExpanded: () => x((e) => !e),
        listing: n,
        groupListing: s,
        subscriptionInfo: E
    };
}
