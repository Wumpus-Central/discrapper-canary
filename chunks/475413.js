n.d(t, { Z: () => b }), n(953529);
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
    g = n(981631),
    h = n(388032),
    m = n(905442);
let b = (e) => {
    var t, n;
    let { guild: b } = e,
        _ = (0, l.GG)(b.id)[0];
    (0, o.Z)({
        guildId: b.id,
        groupListingId: null == _ ? void 0 : _.id,
        location: g.Sbl.ROLE_SUBSCRIPTIONS_TAB,
        relevantSubscriptionListingIds: null == _ ? void 0 : _.subscription_listings_ids,
    });
    let { activeSubscription: E } = (0, s.Z)(null == _ ? void 0 : _.id),
        O = (0, l.YB)(b.id),
        v = null == O ? void 0 : O.description,
        { editStateIds: y } = a.B7(null != (t = null == _ ? void 0 : _.id) ? t : null, b.id);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(f.Z, {
                title: h.intl.format(h.t["rm+ojA"], { serverName: b.name }),
                description: null != v ? v : null,
                coverImageAsset: null != (n = null == O ? void 0 : O.cover_image_asset) ? n : null,
                guild: b,
                children: [
                    null != _
                        ? (0, r.jsx)(c.Z, {
                              className: m.pendingPlanChangeNotice,
                              groupListingId: _.id,
                              subscription: E,
                          })
                        : null,
                    (0, r.jsx)(u.Z, { subscription: E }),
                ],
            }),
            (0, r.jsx)(i.y5t, {
                children: (0, r.jsx)(d.Z, {
                    guildId: b.id,
                    children: y.map((e) => {
                        var t;
                        return (0, r.jsx)(
                            p.Z,
                            {
                                guildId: b.id,
                                groupListingId: null != (t = null == _ ? void 0 : _.id) ? t : "",
                                listingId: e,
                                analyticsLocation: g.Sbl.ROLE_SUBSCRIPTIONS_TAB,
                            },
                            e,
                        );
                    }),
                }),
            }),
        ],
    });
};
