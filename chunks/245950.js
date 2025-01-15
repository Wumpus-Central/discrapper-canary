n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(192379),
    s = n(913527),
    r = n.n(s),
    a = n(442837),
    l = n(430824),
    o = n(937615),
    c = n(584825),
    d = n(289393),
    u = n(697227),
    m = n(981631),
    g = n(388032);
function h(e) {
    let t = (0, u.W)(e),
        n = (0, a.e7)([d.Z], () => d.Z.getSubscriptionListingForPlan(t)),
        s = (0, a.e7)([d.Z], () => (null != n ? d.Z.getSubscriptionGroupListingForSubscriptionListing(n.id) : null)),
        h = (0, a.e7)([l.Z], () => l.Z.getGuild(null == s ? void 0 : s.guild_id)),
        [p, x] = i.useState(!1),
        { fetchSubscriptionsSettings: f } = (0, c.JH)();
    i.useEffect(() => {
        p && null != h && null == d.Z.getSubscriptionSettings(h.id) && f(h.id);
    }, [p, h, f]);
    let _ =
        null == n
            ? void 0
            : (function (e) {
                  let { subscription: t } = e,
                      n = r()(t.currentPeriodEnd).format('M/D/YY'),
                      i = null != t.price ? (0, o.T4)(t.price, t.currency) : '',
                      s = r()(t.createdAt).format('M/D/YY'),
                      a = t.status === m.O0b.CANCELED,
                      l = t.status === m.O0b.PAST_DUE,
                      c = null != t.trialId;
                  return {
                      memberSince: s,
                      nextRenewalDate: n,
                      nextRenewalLabel: a ? g.intl.string(g.t.UAfot7) : g.intl.string(g.t.CVjLcH),
                      subscriptionPrice: i,
                      isCancelled: a,
                      isPastDue: l,
                      isTrial: c
                  };
              })({ subscription: e });
    return {
        guild: h,
        expanded: p,
        handleToggleExpanded: () => x((e) => !e),
        listing: n,
        groupListing: s,
        subscriptionInfo: _
    };
}
