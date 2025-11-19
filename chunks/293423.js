n.d(t, { Z: () => _ }), n(953529);
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(584825),
    a = n(290348),
    s = n(934826),
    o = n(660196),
    c = n(330181),
    u = n(939225),
    d = n(36246),
    p = n(305342),
    f = n(726324),
    h = n(981631),
    g = n(388032),
    m = n(851418);
let _ = (e) => {
    var t, n;
    let { guild: _ } = e,
        b = (0, l.GG)(_.id)[0];
    (0, o.Z)({
        guildId: _.id,
        groupListingId: null == b ? void 0 : b.id,
        location: h.Sbl.ROLE_SUBSCRIPTIONS_TAB,
        relevantSubscriptionListingIds: null == b ? void 0 : b.subscription_listings_ids,
    });
    let { activeSubscription: E } = (0, s.Z)(null == b ? void 0 : b.id),
        O = (0, l.YB)(_.id),
        y = null == O ? void 0 : O.description,
        { editStateIds: v } = a.B7(null != (t = null == b ? void 0 : b.id) ? t : null, _.id);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(f.Z, {
                title: g.intl.format(g.t["rm+ojA"], { serverName: _.name }),
                description: null != y ? y : null,
                coverImageAsset: null != (n = null == O ? void 0 : O.cover_image_asset) ? n : null,
                guild: _,
                children: [
                    null != b
                        ? (0, r.jsx)(c.Z, {
                              className: m.pendingPlanChangeNotice,
                              groupListingId: b.id,
                              subscription: E,
                          })
                        : null,
                    (0, r.jsx)(u.Z, { subscription: E }),
                ],
            }),
            (0, r.jsx)(i.y5t, {
                children: (0, r.jsx)(d.Z, {
                    guildId: _.id,
                    children: v.map((e) => {
                        var t;
                        return (0, r.jsx)(
                            p.Z,
                            {
                                guildId: _.id,
                                groupListingId: null != (t = null == b ? void 0 : b.id) ? t : "",
                                listingId: e,
                                analyticsLocation: h.Sbl.ROLE_SUBSCRIPTIONS_TAB,
                            },
                            e,
                        );
                    }),
                }),
            }),
        ],
    });
};
