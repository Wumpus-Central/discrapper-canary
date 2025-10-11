n.d(t, { Z: () => p });
var r = n(647438),
    i = n(442837),
    l = n(367907),
    a = n(906732),
    s = n(703656),
    o = n(626135),
    c = n(730647),
    d = n(289393),
    u = n(934826),
    h = n(981631);
function p(e) {
    var t;
    let { guildId: n, groupListingId: p, location: f, relevantSubscriptionListingIds: g } = e,
        m = (0, c.f)("useTrackRoleSubscriptionUpsellAnalytics"),
        { activeSubscription: b } = (0, u.Z)(p),
        y = null != b,
        _ = (0, i.Wu)(
            [d.Z],
            () =>
                (null != g ? g : []).filter((e) => {
                    var t;
                    return (null == (t = d.Z.getSubscriptionListing(e)) ? void 0 : t.published) === !0;
                }),
            [g],
        ),
        { analyticsLocations: j } = (0, a.ZP)(null != (t = (0, s.DR)()) ? t : []),
        O = r.useRef(!1);
    r.useEffect(() => {
        m &&
            null != p &&
            null != _ &&
            !O.current &&
            ((O.current = !0),
            o.default.track(
                h.rMx.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        role_subscription_group_listing_id: p,
                        role_subscription_listing_ids: _,
                        is_premium_member: y,
                        location_stack: j,
                        location: f,
                    },
                    (0, l.hH)(n),
                ),
            ));
    }, [n, p, m, f, _, y, j]);
}
