i.d(t, { TG: () => o, _Y: () => S, hA: () => s });
var n = i(702841),
    a = i(71393),
    l = i(652215);
let r = [
        l.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
        l.GuildFeatures.CREATOR_MONETIZABLE,
        l.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
    ],
    s = (e) => null != e && r.some((t) => e.features.has(t));
function o(e) {
    let t = a.A.getGuild(e);
    return t?.features.has(l.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
}
function S(e) {
    return (0, n.bG)([a.A], () => {
        let t = a.A.getGuild(e);
        return t?.features.has(l.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
    });
}
