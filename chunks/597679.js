n.d(e, { w: () => d });
var i = n(951288),
    l = n(657707),
    r = n(509613),
    u = n(313789),
    s = n(595242),
    a = n(726985),
    o = n(388032);
let c = (0, r.x1)(u.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANE, {
        buildLayout: () => [],
        render: () => (0, i.jsx)(s.Z, {}),
    }),
    E = (0, r.wf)(u.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => o.intl.string(o.t["+CbP2v"]),
        buildLayout: () => [c],
    }),
    d = (0, r.m7)(u.n.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        icon: l.Ucv,
        useTitle: () => o.intl.string(o.t["+CbP2v"]),
        getLegacySearchKey: () => a.s6.GUILD_BOOSTING,
        buildLayout: () => [E],
    });
