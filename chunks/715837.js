n.d(t, {
    A: () => m,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(599941),
    a = n(922975),
    s = n(700206),
    o = n(950344),
    c = n(815332),
    u = n(456540),
    d = n(136179),
    p = n(250253),
    f = n(406140),
    h = n(652215),
    A = n(985018),
    g = n(510465);
let m = (e) => {
    var t, n;
    let { guild: m } = e,
        b = (0, l.uk)(m.id)[0];
    (0, o.A)({
        guildId: m.id,
        groupListingId: null == b ? void 0 : b.id,
        location: h.ThZ.ROLE_SUBSCRIPTIONS_TAB,
        relevantSubscriptionListingIds: null == b ? void 0 : b.subscription_listings_ids,
    });
    let { activeSubscription: _ } = (0, s.A)(null == b ? void 0 : b.id),
        E = (0, l.Tq)(m.id),
        O = null == E ? void 0 : E.description,
        { editStateIds: y } = a.d0(null != (t = null == b ? void 0 : b.id) ? t : null, m.id);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(f.A, {
                title: A.intl.format(A.t["rm+ojA"], {
                    serverName: m.name,
                }),
                description: null != O ? O : null,
                coverImageAsset: null != (n = null == E ? void 0 : E.cover_image_asset) ? n : null,
                guild: m,
                children: [
                    null != b
                        ? (0, r.jsx)(c.A, {
                              className: g.Ds,
                              groupListingId: b.id,
                              subscription: _,
                          })
                        : null,
                    (0, r.jsx)(u.A, {
                        subscription: _,
                    }),
                ],
            }),
            (0, r.jsx)(i.Fmo, {
                children: (0, r.jsx)(d.A, {
                    guildId: m.id,
                    children: y.map((e) => {
                        var t;
                        return (0, r.jsx)(
                            p.A,
                            {
                                guildId: m.id,
                                groupListingId: null != (t = null == b ? void 0 : b.id) ? t : "",
                                listingId: e,
                                analyticsLocation: h.ThZ.ROLE_SUBSCRIPTIONS_TAB,
                            },
                            e,
                        );
                    }),
                }),
            }),
        ],
    });
};
