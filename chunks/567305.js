n.d(t, { TG: () => o, _Y: () => d, hA: () => s });
var l = n(417597),
    i = n(71393),
    r = n(652215);
let a = [
        r.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
        r.GuildFeatures.CREATOR_MONETIZABLE,
        r.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
    ],
    s = (e) => null != e && a.some((t) => e.features.has(t));
function o(e) {
    let t = i.A.getGuild(e);
    return t?.features.has(r.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
}
function d(e) {
    return (0, l.bG)([i.A], () => {
        let t = i.A.getGuild(e);
        return t?.features.has(r.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
    });
}
