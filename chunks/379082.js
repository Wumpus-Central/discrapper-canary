n.d(t, { A: () => g }), n(896048);
var r = n(64700),
    i = n(989349),
    a = n.n(i),
    s = n(311907),
    o = n(71393),
    l = n(580630),
    c = n(599941),
    u = n(636194),
    d = n(624456),
    f = n(652215),
    p = n(985018);
let _ = "M/D/YY",
    h = "M/D/YY";
function m(e) {
    let { subscription: t } = e,
        n = a()(t.currentPeriodEnd).format(_),
        r = null != t.price ? (0, l.$g)(t.price, t.currency) : "",
        i = a()(t.createdAt).format(h),
        s = t.status === f.Dmq.CANCELED,
        o = t.status === f.Dmq.PAST_DUE,
        c = t.hasActiveTrial;
    return {
        memberSince: i,
        nextRenewalDate: n,
        nextRenewalLabel: s ? p.intl.string(p.t.UAfot2) : p.intl.string(p.t.CVjLcM),
        subscriptionPrice: r,
        isCancelled: s,
        isPastDue: o,
        isTrial: c,
    };
}
function g(e) {
    let t = (0, d.M)(e),
        n = (0, s.bG)([u.A], () => u.A.getSubscriptionListingForPlan(t)),
        i = (0, s.bG)([u.A], () => (null != n ? u.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null)),
        a = (0, s.bG)([o.A], () => o.A.getGuild(null == i ? void 0 : i.guild_id)),
        [l, f] = r.useState(!1),
        p = () => f((e) => !e),
        { fetchSubscriptionsSettings: _ } = (0, c.XE)();
    r.useEffect(() => {
        l && null != a && null == u.A.getSubscriptionSettings(a.id) && _(a.id);
    }, [l, a, _]);
    let h = null == n ? void 0 : m({ subscription: e });
    return {
        guild: a,
        expanded: l,
        handleToggleExpanded: p,
        listing: n,
        groupListing: i,
        subscriptionInfo: h,
    };
}
