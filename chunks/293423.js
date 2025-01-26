var i = n(200651);
n(192379);
var r = n(481060),
    l = n(584825),
    a = n(290348),
    s = n(934826),
    o = n(660196),
    c = n(330181),
    d = n(939225),
    u = n(36246),
    h = n(305342),
    m = n(726324),
    p = n(981631),
    g = n(388032),
    f = n(205572);
t.Z = (e) => {
    var t, n;
    let { guild: _ } = e,
        E = (0, l.GG)(_.id)[0];
    (0, o.Z)({
        guildId: _.id,
        groupListingId: null == E ? void 0 : E.id,
        location: p.Sbl.ROLE_SUBSCRIPTIONS_TAB,
        relevantSubscriptionListingIds: null == E ? void 0 : E.subscription_listings_ids
    });
    let { activeSubscription: I } = (0, s.Z)(null == E ? void 0 : E.id),
        C = (0, l.YB)(_.id),
        v = null == C ? void 0 : C.description,
        { editStateIds: N } = a.B7(null !== (t = null == E ? void 0 : E.id) && void 0 !== t ? t : null, _.id);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(m.Z, {
                title: g.intl.format(g.t['rm+ojI'], { serverName: _.toString() }),
                description: null != v ? v : null,
                coverImageAsset: null !== (n = null == C ? void 0 : C.cover_image_asset) && void 0 !== n ? n : null,
                guild: _,
                children: [
                    null != E
                        ? (0, i.jsx)(c.Z, {
                              className: f.pendingPlanChangeNotice,
                              groupListingId: E.id,
                              subscription: I
                          })
                        : null,
                    (0, i.jsx)(d.Z, { subscription: I })
                ]
            }),
            (0, i.jsx)(r.HeadingLevel, {
                children: (0, i.jsx)(u.Z, {
                    guildId: _.id,
                    children: N.map((e) => {
                        var t;
                        return (0, i.jsx)(
                            h.Z,
                            {
                                guildId: _.id,
                                groupListingId: null !== (t = null == E ? void 0 : E.id) && void 0 !== t ? t : '',
                                listingId: e,
                                analyticsLocation: p.Sbl.ROLE_SUBSCRIPTIONS_TAB
                            },
                            e
                        );
                    })
                })
            })
        ]
    });
};
