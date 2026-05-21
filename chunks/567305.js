l.d(t, { TG: () => o, _Y: () => d, hA: () => n });
var i = l(702841),
    r = l(71393),
    a = l(652215);
let s = [
        a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
        a.GuildFeatures.CREATOR_MONETIZABLE,
        a.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
    ],
    n = (e) => null != e && s.some((t) => e.features.has(t));
function o(e) {
    let t = r.A.getGuild(e);
    return t?.features.has(a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
}
function d(e) {
    return (0, i.bG)([r.A], () => {
        let t = r.A.getGuild(e);
        return t?.features.has(a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
    });
}
