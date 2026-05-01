n.d(t, { TG: () => o, _Y: () => u, hA: () => s });
var l = n(702841),
    i = n(71393),
    a = n(652215);
let r = [
        a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
        a.GuildFeatures.CREATOR_MONETIZABLE,
        a.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
    ],
    s = (e) => null != e && r.some((t) => e.features.has(t));
function o(e) {
    let t = i.A.getGuild(e);
    return t?.features.has(a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
}
function u(e) {
    return (0, l.bG)([i.A], () => {
        let t = i.A.getGuild(e);
        return t?.features.has(a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
    });
}
