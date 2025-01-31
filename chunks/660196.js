n.d(t, { Z: () => p });
var i = n(192379),
    l = n(442837),
    a = n(367907),
    r = n(906732),
    s = n(703656),
    o = n(626135),
    c = n(730647),
    d = n(289393),
    u = n(934826),
    h = n(981631);
function p(e) {
    var t;
    let { guildId: n, groupListingId: p, location: m, relevantSubscriptionListingIds: f } = e,
        g = (0, c.f)('useTrackRoleSubscriptionUpsellAnalytics'),
        { activeSubscription: _ } = (0, u.Z)(p),
        C = null != _,
        x = (0, l.Wu)(
            [d.Z],
            () =>
                (null != f ? f : []).filter((e) => {
                    var t;
                    return (null === (t = d.Z.getSubscriptionListing(e)) || void 0 === t ? void 0 : t.published) === !0;
                }),
            [f]
        ),
        { analyticsLocations: v } = (0, r.ZP)(null !== (t = (0, s.DR)()) && void 0 !== t ? t : []),
        E = i.useRef(!1);
    i.useEffect(() => {
        g &&
            null != p &&
            null != x &&
            !E.current &&
            ((E.current = !0),
            o.default.track(h.rMx.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, {
                role_subscription_group_listing_id: p,
                role_subscription_listing_ids: x,
                is_premium_member: C,
                location_stack: v,
                location: m,
                ...(0, a.hH)(n)
            }));
    }, [n, p, g, m, x, C, v]);
}
