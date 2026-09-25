l.d(t, { TG: () => c, _Y: () => h, hA: () => r });
var i = l(702841),
    a = l(71393),
    n = l(652215);
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
function h(e) {
    return (0, i.bG)([a.A], () => {
        let t = a.A.getGuild(e);
        return t?.features.has(n.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
    });
}
