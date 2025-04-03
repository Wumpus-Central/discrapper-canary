n.d(t, { Z: () => b }), n(266796);
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(584825),
    a = n(290348),
    o = n(934826),
    s = n(660196),
    c = n(330181),
    u = n(939225),
    d = n(36246),
    p = n(305342),
    h = n(726324),
    f = n(981631),
    g = n(388032),
    m = n(210998);
let b = (e) => {
    var t, n;
    let { guild: b } = e,
        _ = (0, l.GG)(b.id)[0];
    (0, s.Z)({
        guildId: b.id,
        groupListingId: null == _ ? void 0 : _.id,
        location: f.Sbl.ROLE_SUBSCRIPTIONS_TAB,
        relevantSubscriptionListingIds: null == _ ? void 0 : _.subscription_listings_ids
    });
    let { activeSubscription: E } = (0, o.Z)(null == _ ? void 0 : _.id),
        O = (0, l.YB)(b.id),
        N = null == O ? void 0 : O.description,
        { editStateIds: y } = a.B7(null != (t = null == _ ? void 0 : _.id) ? t : null, b.id);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(h.Z, {
                title: g.NW.format(g.t['rm+ojI'], { serverName: b.toString() }),
                description: null != N ? N : null,
                coverImageAsset: null != (n = null == O ? void 0 : O.cover_image_asset) ? n : null,
                guild: b,
                children: [
                    null != _
                        ? (0, r.jsx)(c.Z, {
                              className: m.pendingPlanChangeNotice,
                              groupListingId: _.id,
                              subscription: E
                          })
                        : null,
                    (0, r.jsx)(u.Z, { subscription: E })
                ]
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
                                groupListingId: null != (t = null == _ ? void 0 : _.id) ? t : '',
                                listingId: e,
                                analyticsLocation: f.Sbl.ROLE_SUBSCRIPTIONS_TAB
                            },
                            e
                        );
                    })
                })
            })
        ]
    });
};
