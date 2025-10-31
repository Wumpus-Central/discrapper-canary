n.d(t, { Z: () => _ }), n(953529);
var r = n(951288);
n(647438);
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
    m = n(981631),
    h = n(388032),
    g = n(851418);
let _ = (e) => {
    var t, n;
    let { guild: _ } = e,
        b = (0, l.GG)(_.id)[0];
    (0, o.Z)({
        guildId: _.id,
        groupListingId: null == b ? void 0 : b.id,
        location: m.Sbl.ROLE_SUBSCRIPTIONS_TAB,
        relevantSubscriptionListingIds: null == b ? void 0 : b.subscription_listings_ids,
    });
    let { activeSubscription: E } = (0, s.Z)(null == b ? void 0 : b.id),
        O = (0, l.YB)(_.id),
        I = null == O ? void 0 : O.description,
        { editStateIds: y } = a.B7(null != (t = null == b ? void 0 : b.id) ? t : null, _.id);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(f.Z, {
                title: h.intl.format(h.t["rm+ojA"], { serverName: _.name }),
                description: null != I ? I : null,
                coverImageAsset: null != (n = null == O ? void 0 : O.cover_image_asset) ? n : null,
                guild: _,
                children: [
                    null != b
                        ? (0, r.jsx)(c.Z, {
                              className: g.pendingPlanChangeNotice,
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
                    children: y.map((e) => {
                        var t;
                        return (0, r.jsx)(
                            p.Z,
                            {
                                guildId: _.id,
                                groupListingId: null != (t = null == b ? void 0 : b.id) ? t : "",
                                listingId: e,
                                analyticsLocation: m.Sbl.ROLE_SUBSCRIPTIONS_TAB,
                            },
                            e,
                        );
                    }),
                }),
            }),
        ],
    });
};
