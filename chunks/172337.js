i.d(t, { Z: () => d });
var n = i(442837),
    l = i(353926),
    r = i(496675),
    a = i(923726),
    u = i(981631),
    s = i(388032);
let d = {
    title: () => s.intl.string(s.t.aTFQKi),
    description: () => s.intl.string(s.t.oTbFQk),
    canCreateGuild: !1,
    useIsGuildSupported: () => (0, n.e7)([l.Z, r.Z], () => (e) => e.hasFeature(u.oNc.ROLE_SUBSCRIPTIONS_ENABLED) && !e.hasFeature(u.oNc.CREATOR_MONETIZABLE_RESTRICTED) && r.Z.can(u.Plq.ADMINISTRATOR, e) && (0, a.$F)() && (0, a.hQ)(e.id), [])
};
