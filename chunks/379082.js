n.d(t, { A: () => _ });
var i = n(64700),
    s = n(989349),
    l = n.n(s),
    a = n(311907),
    r = n(71393),
    o = n(580630),
    d = n(599941),
    u = n(636194),
    c = n(624456),
    g = n(652215),
    m = n(985018);
function _(e) {
    let t = (0, c.M)(e),
        n = (0, a.bG)([u.A], () => u.A.getSubscriptionListingForPlan(t)),
        s = (0, a.bG)([u.A], () => (null != n ? u.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null)),
        _ = (0, a.bG)([r.A], () => r.A.getGuild(s?.guild_id)),
        [A, h] = i.useState(!1),
        { fetchSubscriptionsSettings: p } = (0, d.XE)();
    i.useEffect(() => {
        A && null != _ && null == u.A.getSubscriptionSettings(_.id) && p(_.id);
    }, [A, _, p]);
    let x =
        null == n
            ? void 0
            : (function (e) {
                  let { subscription: t } = e,
                      n = l()(t.currentPeriodEnd).format("M/D/YY"),
                      i = null != t.price ? (0, o.$g)(t.price, t.currency) : "",
                      s = l()(t.createdAt).format("M/D/YY"),
                      a = t.status === g.Dmq.CANCELED,
                      r = t.status === g.Dmq.PAST_DUE,
                      d = t.hasActiveTrial;
                  return {
                      memberSince: s,
                      nextRenewalDate: n,
                      nextRenewalLabel: a ? m.intl.string(m.t.UAfot2) : m.intl.string(m.t.CVjLcM),
                      subscriptionPrice: i,
                      isCancelled: a,
                      isPastDue: r,
                      isTrial: d,
                  };
              })({ subscription: e });
    return {
        guild: _,
        expanded: A,
        handleToggleExpanded: () => h((e) => !e),
        listing: n,
        groupListing: s,
        subscriptionInfo: x,
    };
}
