n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(192379),
    r = n(913527),
    s = n.n(r),
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
        r = (0, a.e7)([u.Z], () => u.Z.getSubscriptionListingForPlan(n), [n]),
        p = (0, a.e7)([c.Z], () => (null != r ? c.Z.getForSKU(r.id) : null), [r]),
        x = (0, a.e7)([u.Z], () => (null != r ? u.Z.getSubscriptionGroupListingForSubscriptionListing(r.id) : null), [r]),
        f = null == p ? void 0 : p.applicationId,
        E = (0, a.e7)([l.Z], () => (null != f ? l.Z.getApplication(f) : null), [f]),
        _ = null === (t = e.metadata) || void 0 === t ? void 0 : t.application_subscription_guild_id,
        C = (0, a.e7)([o.Z], () => o.Z.getGuild(_), [_]),
        [T, S] = i.useState(!1),
        b =
            null == r
                ? void 0
                : (function (e) {
                      let { listing: t, subscription: n } = e,
                          i = n.currentPeriodEnd,
                          r = t.subscription_plans[0],
                          a = (0, d.T4)(r.price, r.currency),
                          l = n.createdAt,
                          o = n.status === g.O0b.CANCELED,
                          c = t.soft_deleted,
                          u = n.status === g.O0b.PAST_DUE;
                      return {
                          subscribedSinceDate: l,
                          currentPeriodEndDate: i,
                          currentPeriodEndLabel: s()().isAfter(n.currentPeriodEnd) ? h.intl.string(h.t.ntDlmJ) : h.intl.string(h.t.sq33d3),
                          subscriptionPlanPrice: a,
                          isCancelled: o,
                          isDeleted: c,
                          isPastDue: u
                      };
                  })({
                      listing: r,
                      subscription: e
                  });
    return {
        application: E,
        guild: C,
        expanded: T,
        handleToggleExpanded: () => S((e) => !e),
        listing: r,
        storeListing: p,
        groupListing: x,
        subscriptionInfo: b
    };
}
