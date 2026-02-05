n.d(t, { A: () => A });
var i = n(64700),
    s = n(989349),
    r = n.n(s),
    a = n(311907),
    l = n(71393),
    o = n(580630),
    c = n(599941),
    d = n(636194),
    u = n(624456),
    _ = n(652215),
    m = n(985018);
function A(e) {
    let t = (0, u.M)(e),
        n = (0, a.bG)([d.A], () => d.A.getSubscriptionListingForPlan(t)),
        s = (0, a.bG)([d.A], () => (null != n ? d.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null)),
        A = (0, a.bG)([l.A], () => l.A.getGuild(s?.guild_id)),
        [g, E] = i.useState(!1),
        { fetchSubscriptionsSettings: h } = (0, c.XE)();
    i.useEffect(() => {
        g && null != A && null == d.A.getSubscriptionSettings(A.id) && h(A.id);
    }, [g, A, h]);
    let p =
        null == n
            ? void 0
            : (function (e) {
                  let { subscription: t } = e,
                      n = r()(t.currentPeriodEnd).format("M/D/YY"),
                      i = null != t.price ? (0, o.$g)(t.price, t.currency) : "",
                      s = r()(t.createdAt).format("M/D/YY"),
                      a = t.status === _.Dmq.CANCELED,
                      l = t.status === _.Dmq.PAST_DUE,
                      c = t.hasActiveTrial;
                  return {
                      memberSince: s,
                      nextRenewalDate: n,
                      nextRenewalLabel: a ? m.intl.string(m.t.UAfot2) : m.intl.string(m.t.CVjLcM),
                      subscriptionPrice: i,
                      isCancelled: a,
                      isPastDue: l,
                      isTrial: c,
                  };
              })({ subscription: e });
    return {
        guild: A,
        expanded: g,
        handleToggleExpanded: () => E((e) => !e),
        listing: n,
        groupListing: s,
        subscriptionInfo: p,
    };
}
