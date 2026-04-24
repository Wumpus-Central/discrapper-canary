n.d(t, { TG: () => o, _Y: () => d, hA: () => s });
var r = n(702841),
    l = n(71393),
    i = n(652215);
let a = [
        i.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
        i.GuildFeatures.CREATOR_MONETIZABLE,
        i.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
    ],
    s = (e) => null != e && a.some((t) => e.features.has(t));
function o(e) {
    let t = l.A.getGuild(e);
    return t?.features.has(i.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
}
function d(e) {
    return (0, r.bG)([l.A], () => {
        let t = l.A.getGuild(e);
        return t?.features.has(i.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
    });
}
