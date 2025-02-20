n.d(t, { Z: () => h }), n(47120);
var r = n(192379),
    i = n(913527),
    s = n.n(i),
    a = n(442837),
    l = n(812206),
    o = n(430824),
    c = n(551428),
    d = n(937615),
    u = n(488915),
    m = n(171246),
    g = n(981631),
    p = n(388032);
function h(e) {
    var t;
    let n = (0, m.bZ)(e),
        i = (0, a.e7)([u.Z], () => u.Z.getSubscriptionListingForPlan(n), [n]),
        h = (0, a.e7)([c.Z], () => (null != i ? c.Z.getForSKU(i.id) : null), [i]),
        f = (0, a.e7)([u.Z], () => (null != i ? u.Z.getSubscriptionGroupListingForSubscriptionListing(i.id) : null), [i]),
        b = null == h ? void 0 : h.applicationId,
        N = (0, a.e7)([l.Z], () => (null != b ? l.Z.getApplication(b) : null), [b]),
        x = null === (t = e.metadata) || void 0 === t ? void 0 : t.application_subscription_guild_id,
        _ = (0, a.e7)([o.Z], () => o.Z.getGuild(x), [x]),
        [E, j] = r.useState(!1),
        C =
            null == i
                ? void 0
                : (function (e) {
                      let { listing: t, subscription: n } = e,
                          r = n.currentPeriodEnd,
                          i = t.subscription_plans[0],
                          a = (0, d.T4)(i.price, i.currency),
                          l = n.createdAt,
                          o = n.status === g.O0b.CANCELED,
                          c = t.soft_deleted,
                          u = n.status === g.O0b.PAST_DUE;
                      return {
                          subscribedSinceDate: l,
                          currentPeriodEndDate: r,
                          currentPeriodEndLabel: s()().isAfter(n.currentPeriodEnd) ? p.NW.string(p.t.ntDlmJ) : p.NW.string(p.t.sq33d3),
                          subscriptionPlanPrice: a,
                          isCancelled: o,
                          isDeleted: c,
                          isPastDue: u
                      };
                  })({
                      listing: i,
                      subscription: e
                  });
    return {
        application: N,
        guild: _,
        expanded: E,
        handleToggleExpanded: () => j((e) => !e),
        listing: i,
        storeListing: h,
        groupListing: f,
        subscriptionInfo: C
    };
}
