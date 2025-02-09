n.d(t, { Z: () => g }), n(47120);
var i = n(192379),
    s = n(913527),
    l = n.n(s),
    r = n(442837),
    a = n(430824),
    o = n(937615),
    c = n(584825),
    d = n(289393),
    u = n(697227),
    h = n(981631),
    m = n(388032);
function g(e) {
    let t = (0, u.W)(e),
        n = (0, r.e7)([d.Z], () => d.Z.getSubscriptionListingForPlan(t)),
        s = (0, r.e7)([d.Z], () => (null != n ? d.Z.getSubscriptionGroupListingForSubscriptionListing(n.id) : null)),
        g = (0, r.e7)([a.Z], () => a.Z.getGuild(null == s ? void 0 : s.guild_id)),
        [x, _] = i.useState(!1),
        { fetchSubscriptionsSettings: p } = (0, c.JH)();
    i.useEffect(() => {
        x && null != g && null == d.Z.getSubscriptionSettings(g.id) && p(g.id);
    }, [x, g, p]);
    let E =
        null == n
            ? void 0
            : (function (e) {
                  let { subscription: t } = e,
                      n = l()(t.currentPeriodEnd).format('M/D/YY'),
                      i = null != t.price ? (0, o.T4)(t.price, t.currency) : '',
                      s = l()(t.createdAt).format('M/D/YY'),
                      r = t.status === h.O0b.CANCELED,
                      a = t.status === h.O0b.PAST_DUE,
                      c = null != t.trialId;
                  return {
                      memberSince: s,
                      nextRenewalDate: n,
                      nextRenewalLabel: r ? m.intl.string(m.t.UAfot7) : m.intl.string(m.t.CVjLcH),
                      subscriptionPrice: i,
                      isCancelled: r,
                      isPastDue: a,
                      isTrial: c
                  };
              })({ subscription: e });
    return {
        guild: g,
        expanded: x,
        handleToggleExpanded: () => _((e) => !e),
        listing: n,
        groupListing: s,
        subscriptionInfo: E
    };
}
