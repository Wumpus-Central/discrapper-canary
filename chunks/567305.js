l.d(t, { TG: () => o, _Y: () => c, hA: () => s });
var n = l(702841),
    i = l(71393),
    a = l(652215);
let r = [
    a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
    a.GuildFeatures.CREATOR_MONETIZABLE,
    a.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
];
function s(e) {
    return null != e && r.some((t) => e.features.has(t));
}
function o(e) {
    let t = i.A.getGuild(e);
    return t?.features.has(a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
}
function c(e) {
    return (0, n.bG)([i.A], () => {
        let t = i.A.getGuild(e);
        return t?.features.has(a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
    });
}
