i.d(t, { TG: () => c, _Y: () => d, hA: () => r });
var l = i(702841),
    a = i(71393),
    n = i(652215);
let s = [
    n.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
    n.GuildFeatures.CREATOR_MONETIZABLE,
    n.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
];
function r(e) {
    return null != e && s.some((t) => e.features.has(t));
}
function c(e) {
    let t = a.A.getGuild(e);
    return t?.features.has(n.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
}
function d(e) {
    return (0, l.bG)([a.A], () => {
        let t = a.A.getGuild(e);
        return t?.features.has(n.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
    });
}
