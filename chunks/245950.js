n.d(t, { Z: () => h }), n(47120);
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
    g = n(388032);
function h(e) {
    let t = (0, u.W)(e),
        n = (0, l.e7)([d.Z], () => d.Z.getSubscriptionListingForPlan(t)),
        s = (0, l.e7)([d.Z], () => (null != n ? d.Z.getSubscriptionGroupListingForSubscriptionListing(n.id) : null)),
        h = (0, l.e7)([a.Z], () => a.Z.getGuild(null == s ? void 0 : s.guild_id)),
        [x, _] = i.useState(!1),
        { fetchSubscriptionsSettings: p } = (0, c.JH)();
    i.useEffect(() => {
        x && null != h && null == d.Z.getSubscriptionSettings(h.id) && p(h.id);
    }, [x, h, p]);
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
                      nextRenewalLabel: l ? g.intl.string(g.t.UAfot7) : g.intl.string(g.t.CVjLcH),
                      subscriptionPrice: i,
                      isCancelled: l,
                      isPastDue: a,
                      isTrial: c
                  };
              })({ subscription: e });
    return {
        guild: h,
        expanded: x,
        handleToggleExpanded: () => _((e) => !e),
        listing: n,
        groupListing: s,
        subscriptionInfo: E
    };
}
