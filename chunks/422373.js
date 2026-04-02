i.d(e, { A: () => _ });
var s = i(627968);
i(64700);
var r = i(300233),
    n = i(599941),
    l = i(922975),
    d = i(700206),
    a = i(815332),
    o = i(456540),
    c = i(136179),
    C = i(250253),
    u = i(652215),
    x = i(495410);
function h(t) {
    let { guildId: e } = t,
        i = (0, n.uk)(e)[0],
        { editStateIds: r } = l.d0(i?.id ?? null, e),
        { activeSubscription: h } = (0, d.A)(i?.id);
    return (0, s.jsxs)("div", {
        className: x.k,
        children: [
            null != i ? (0, s.jsx)(a.A, { groupListingId: i.id, subscription: h }) : null,
            (0, s.jsx)(o.A, { subscription: h }),
            (0, s.jsx)(c.A, {
                children: r.map((t) =>
                    (0, s.jsx)(
                        C.A,
                        {
                            guildId: e,
                            groupListingId: i?.id ?? "",
                            listingId: t,
                            analyticsLocation: u.ThZ.ROLE_SUBSCRIPTIONS_TAB,
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}
function _(t) {
    let { guildId: e } = t;
    return (0, s.jsx)(r.H, { guildId: e, children: (0, s.jsx)(h, { guildId: e }) });
}
