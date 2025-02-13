n.d(t, { Z: () => x }), n(47120);
var i = n(192379),
    s = n(913527),
    l = n.n(s),
    r = n(442837),
    a = n(812206),
    o = n(430824),
    c = n(551428),
    d = n(937615),
    u = n(488915),
    h = n(171246),
    m = n(981631),
    g = n(388032);
function x(e) {
    var t;
    let n = (0, h.bZ)(e),
        s = (0, r.e7)([u.Z], () => u.Z.getSubscriptionListingForPlan(n), [n]),
        x = (0, r.e7)([c.Z], () => (null != s ? c.Z.getForSKU(s.id) : null), [s]),
        _ = (0, r.e7)([u.Z], () => (null != s ? u.Z.getSubscriptionGroupListingForSubscriptionListing(s.id) : null), [s]),
        p = null == x ? void 0 : x.applicationId,
        E = (0, r.e7)([a.Z], () => (null != p ? a.Z.getApplication(p) : null), [p]),
        C = null === (t = e.metadata) || void 0 === t ? void 0 : t.application_subscription_guild_id,
        N = (0, r.e7)([o.Z], () => o.Z.getGuild(C), [C]),
        [I, f] = i.useState(!1),
        T =
            null == s
                ? void 0
                : (function (e) {
                      let { listing: t, subscription: n } = e,
                          i = n.currentPeriodEnd,
                          s = t.subscription_plans[0],
                          r = (0, d.T4)(s.price, s.currency),
                          a = n.createdAt,
                          o = n.status === m.O0b.CANCELED,
                          c = t.soft_deleted,
                          u = n.status === m.O0b.PAST_DUE;
                      return {
                          subscribedSinceDate: a,
                          currentPeriodEndDate: i,
                          currentPeriodEndLabel: l()().isAfter(n.currentPeriodEnd) ? g.intl.string(g.t.ntDlmJ) : g.intl.string(g.t.sq33d3),
                          subscriptionPlanPrice: r,
                          isCancelled: o,
                          isDeleted: c,
                          isPastDue: u
                      };
                  })({
                      listing: s,
                      subscription: e
                  });
    return {
        application: E,
        guild: N,
        expanded: I,
        handleToggleExpanded: () => f((e) => !e),
        listing: s,
        storeListing: x,
        groupListing: _,
        subscriptionInfo: T
    };
}
