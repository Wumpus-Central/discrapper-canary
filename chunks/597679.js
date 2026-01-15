n.d(e, { w: () => E });
var i = n(657707),
    l = n(509613),
    s = n(313789),
    u = n(526665),
    r = n(595242),
    a = n(904822),
    o = n(726985),
    T = n(388032);
let S = (0, l.wf)(s.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        usePredicate: () => !(0, u.gN)("LegacyPremiumGuildSubscriptionsPanel"),
        useTitle: () => T.intl.string(T.t["+CbP2v"]),
        StronglyDiscouragedCustomComponent: r.Z,
        buildLayout: () => [],
    }),
    c = (0, l.wf)(s.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        usePredicate: () => (0, u.gN)("PremiumGuildSubscriptionsPanel"),
        useTitle: () => T.intl.string(T.t["+CbP2v"]),
        buildLayout: () => [a.L],
    }),
    E = (0, l.m7)(s.n.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t["+CbP2v"]),
        getLegacySearchKey: () => ((0, u.Gl)("PremiumGuildSubscriptionsPanel") ? void 0 : o.s6.GUILD_BOOSTING),
        icon: i.BoostGemIcon,
        buildLayout: () => ((0, u.Gl)("PremiumGuildSubscriptionsPanel") ? [c] : [S]),
    });
