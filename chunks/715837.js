n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(599941),
    a = n(922975),
    s = n(700206),
    o = n(950344),
    d = n(815332),
    c = n(456540),
    u = n(136179),
    A = n(250253),
    h = n(406140),
    _ = n(652215),
    m = n(985018),
    p = n(43955);
let g = (e) => {
    let { guild: t } = e,
        n = (0, l.uk)(t.id)[0];
    (0, o.A)({
        guildId: t.id,
        groupListingId: n?.id,
        location: _.ThZ.ROLE_SUBSCRIPTIONS_TAB,
        relevantSubscriptionListingIds: n?.subscription_listings_ids,
    });
    let { activeSubscription: g } = (0, s.A)(n?.id),
        E = (0, l.Tq)(t.id),
        I = E?.description,
        { editStateIds: f } = a.d0(n?.id ?? null, t.id);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(h.A, {
                title: m.intl.format(m.t["rm+ojA"], { serverName: t.name }),
                description: I ?? null,
                coverImageAsset: E?.cover_image_asset ?? null,
                guild: t,
                children: [
                    null != n ? (0, i.jsx)(d.A, { className: p.Ds, groupListingId: n.id, subscription: g }) : null,
                    (0, i.jsx)(c.A, { subscription: g }),
                ],
            }),
            (0, i.jsx)(r.Fmo, {
                children: (0, i.jsx)(u.A, {
                    guildId: t.id,
                    children: f.map((e) =>
                        (0, i.jsx)(
                            A.A,
                            {
                                guildId: t.id,
                                groupListingId: n?.id ?? "",
                                listingId: e,
                                analyticsLocation: _.ThZ.ROLE_SUBSCRIPTIONS_TAB,
                            },
                            e,
                        ),
                    ),
                }),
            }),
        ],
    });
};
