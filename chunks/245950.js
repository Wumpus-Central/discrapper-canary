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
    _ = n(388032);
let p = "M/D/YY",
    h = "M/D/YY";
function m(e) {
    let { subscription: t } = e,
        n = a()(t.currentPeriodEnd).format(p),
        r = null != t.price ? (0, l.T4)(t.price, t.currency) : "",
        i = a()(t.createdAt).format(h),
        o = t.status === f.O0b.CANCELED,
        s = t.status === f.O0b.PAST_DUE,
        c = t.hasActiveTrial;
    return {
        memberSince: i,
        nextRenewalDate: n,
        nextRenewalLabel: o ? _.intl.string(_.t.UAfot2) : _.intl.string(_.t.CVjLcM),
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
        _ = () => f((e) => !e),
        { fetchSubscriptionsSettings: p } = (0, c.JH)();
    r.useEffect(() => {
        l && null != a && null == u.Z.getSubscriptionSettings(a.id) && p(a.id);
    }, [l, a, p]);
    let h = null == n ? void 0 : m({ subscription: e });
    return {
        guild: a,
        expanded: l,
        handleToggleExpanded: _,
        listing: n,
        groupListing: i,
        subscriptionInfo: h,
    };
}
