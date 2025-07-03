i.d(t, { Z: () => d });
var n = i(442837),
    l = i(353926),
    r = i(496675),
    a = i(923726),
    s = i(981631),
    u = i(388032);
let d = {
    title: () => u.intl.string(u.t.aTFQKi),
    description: () => u.intl.string(u.t.oTbFQk),
    canCreateGuild: !1,
    useIsGuildSupported: () => (0, n.e7)([l.Z, r.Z], () => (e) => e.features.has(s.oNc.ROLE_SUBSCRIPTIONS_ENABLED) && !e.features.has(s.oNc.CREATOR_MONETIZABLE_RESTRICTED) && r.Z.can(s.Plq.ADMINISTRATOR, e) && (0, a.$F)() && (0, a.hQ)(e.id), [])
};
