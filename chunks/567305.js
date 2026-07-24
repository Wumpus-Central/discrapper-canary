l.d(t, { TG: () => o, _Y: () => c, hA: () => s });
var a = l(702841),
    i = l(71393),
    n = l(652215);
let r = [
    n.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
    n.GuildFeatures.CREATOR_MONETIZABLE,
    n.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
];
function s(e) {
    return null != e && r.some((t) => e.features.has(t));
}
function o(e) {
    let t = i.A.getGuild(e);
    return t?.features.has(n.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
}
function c(e) {
    return (0, a.bG)([i.A], () => {
        let t = i.A.getGuild(e);
        return t?.features.has(n.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
    });
}
