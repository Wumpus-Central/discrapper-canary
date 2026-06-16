"use strict";
n.d(t, { TG: () => l, _Y: () => u, hA: () => o });
var i = n(702841),
    r = n(71393),
    s = n(652215);
let a = [
        s.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
        s.GuildFeatures.CREATOR_MONETIZABLE,
        s.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
    ],
    o = (e) => null != e && a.some((t) => e.features.has(t));
function l(e) {
    let t = r.A.getGuild(e);
    return t?.features.has(s.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
}
function u(e) {
    return (0, i.bG)([r.A], () => {
        let t = r.A.getGuild(e);
        return t?.features.has(s.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
    });
}
