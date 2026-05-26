i.d(t, { TG: () => o, _Y: () => d, hA: () => n });
var r = i(702841),
    l = i(71393),
    a = i(652215);
let s = [
        a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
        a.GuildFeatures.CREATOR_MONETIZABLE,
        a.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
    ],
    n = (e) => null != e && s.some((t) => e.features.has(t));
function o(e) {
    let t = l.A.getGuild(e);
    return t?.features.has(a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
}
function d(e) {
    return (0, r.bG)([l.A], () => {
        let t = l.A.getGuild(e);
        return t?.features.has(a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
    });
}
