n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(192379),
    s = n(913527),
    r = n.n(s),
    a = n(442837),
    l = n(812206),
    o = n(430824),
    c = n(551428),
    d = n(937615),
    u = n(488915),
    m = n(171246),
    g = n(981631),
    h = n(388032);
function p(e) {
    var t;
    let n = (0, m.bZ)(e),
        s = (0, a.e7)([u.Z], () => u.Z.getSubscriptionListingForPlan(n), [n]),
        p = (0, a.e7)([c.Z], () => (null != s ? c.Z.getForSKU(s.id) : null), [s]),
        x = (0, a.e7)([u.Z], () => (null != s ? u.Z.getSubscriptionGroupListingForSubscriptionListing(s.id) : null), [s]),
        f = null == p ? void 0 : p.applicationId,
        _ = (0, a.e7)([l.Z], () => (null != f ? l.Z.getApplication(f) : null), [f]),
        E = null === (t = e.metadata) || void 0 === t ? void 0 : t.application_subscription_guild_id,
        C = (0, a.e7)([o.Z], () => o.Z.getGuild(E), [E]),
        [T, S] = i.useState(!1),
        b =
            null == s
                ? void 0
                : (function (e) {
                      let { listing: t, subscription: n } = e,
                          i = n.currentPeriodEnd,
                          s = t.subscription_plans[0],
                          a = (0, d.T4)(s.price, s.currency),
                          l = n.createdAt,
                          o = n.status === g.O0b.CANCELED,
                          c = t.soft_deleted,
                          u = n.status === g.O0b.PAST_DUE;
                      return {
                          subscribedSinceDate: l,
                          currentPeriodEndDate: i,
                          currentPeriodEndLabel: r()().isAfter(n.currentPeriodEnd) ? h.intl.string(h.t.ntDlmJ) : h.intl.string(h.t.sq33d3),
                          subscriptionPlanPrice: a,
                          isCancelled: o,
                          isDeleted: c,
                          isPastDue: u
                      };
                  })({
                      listing: s,
                      subscription: e
                  });
    return {
        application: _,
        guild: C,
        expanded: T,
        handleToggleExpanded: () => S((e) => !e),
        listing: s,
        storeListing: p,
        groupListing: x,
        subscriptionInfo: b
    };
}
