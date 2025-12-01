n.d(t, { Z: () => g }), n(388685);
var r = n(473749),
    i = n(913527),
    a = n.n(i),
    o = n(442837),
    s = n(430824),
    l = n(937615),
    c = n(584825),
    u = n(289393),
    d = n(697227),
    f = n(981631),
    p = n(388032);
let _ = "M/D/YY",
    m = "M/D/YY";
function h(e) {
    let { subscription: t } = e,
        n = a()(t.currentPeriodEnd).format(_),
        r = null != t.price ? (0, l.T4)(t.price, t.currency) : "",
        i = a()(t.createdAt).format(m),
        o = t.status === f.O0b.CANCELED,
        s = t.status === f.O0b.PAST_DUE,
        c = t.hasActiveTrial;
    return {
        memberSince: i,
        nextRenewalDate: n,
        nextRenewalLabel: o ? p.intl.string(p.t.UAfot2) : p.intl.string(p.t.CVjLcM),
        subscriptionPrice: r,
        isCancelled: o,
        isPastDue: s,
        isTrial: c,
    };
}
function g(e) {
    let t = (0, d.W)(e),
        n = (0, o.e7)([u.Z], () => u.Z.getSubscriptionListingForPlan(t)),
        i = (0, o.e7)([u.Z], () => (null != n ? u.Z.getSubscriptionGroupListingForSubscriptionListing(n.id) : null)),
        a = (0, o.e7)([s.Z], () => s.Z.getGuild(null == i ? void 0 : i.guild_id)),
        [l, f] = r.useState(!1),
        p = () => f((e) => !e),
        { fetchSubscriptionsSettings: _ } = (0, c.JH)();
    r.useEffect(() => {
        l && null != a && null == u.Z.getSubscriptionSettings(a.id) && _(a.id);
    }, [l, a, _]);
    let m = null == n ? void 0 : h({ subscription: e });
    return {
        guild: a,
        expanded: l,
        handleToggleExpanded: p,
        listing: n,
        groupListing: i,
        subscriptionInfo: m,
    };
}
