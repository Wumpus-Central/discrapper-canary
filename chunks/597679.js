n.d(e, { w: () => S });
var i = n(54381),
    l = n(657707),
    u = n(509613),
    r = n(313789),
    s = n(595242),
    a = n(726985),
    o = n(388032);
let c = (0, u.x1)(r.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANE, {
        buildLayout: () => [],
        render: () => (0, i.jsx)(s.Z, {}),
    }),
    E = (0, u.wf)(r.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => o.intl.string(o.t["+CbP2v"]),
        buildLayout: () => [c],
    }),
    S = (0, u.m7)(r.n.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        icon: l.Ucv,
        useTitle: () => o.intl.string(o.t["+CbP2v"]),
        getLegacySearchKey: () => a.s6.GUILD_BOOSTING,
        buildLayout: () => [E],
    });
