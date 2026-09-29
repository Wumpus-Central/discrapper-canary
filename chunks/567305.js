i.d(t, { TG: () => o, _Y: () => c, hA: () => r });
var l = i(702841),
    n = i(71393),
    a = i(652215);
let s = [
    a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
    a.GuildFeatures.CREATOR_MONETIZABLE,
    a.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
];
function r(e) {
    return null != e && s.some((t) => e.features.has(t));
}
function o(e) {
    let t = n.A.getGuild(e);
    return t?.features.has(a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
}
function c(e) {
    return (0, l.bG)([n.A], () => {
        let t = n.A.getGuild(e);
        return t?.features.has(a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
    });
}
