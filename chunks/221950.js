"use strict";
n.d(t, { Cw: () => f, Ld: () => h, UD: () => _, aZ: () => p, jo: () => E, uO: () => d });
var i = n(228366),
    r = n(468689),
    s = n(976860),
    a = n(71393),
    o = n(134413),
    l = n(11541),
    u = n(652215),
    c = n(746080);
async function d(e) {
    await i.h.dispatch({ type: "INITIALIZE_MEMBER_SAFETY_STORE", guildId: e });
}
function _(e) {
    i.h.dispatch({ type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH", guildId: e });
}
function f(e, t) {
    let { continuationToken: n, ...r } = t;
    i.h.dispatch({ type: "MEMBER_SAFETY_PAGINATION_UPDATE", guildId: e, pagination: r });
}
async function h(e, t) {
    await i.h.dispatch({ type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE", guildId: e, searchState: t });
}
function p(e) {
    let t = (0, o.Ml)(e),
        n = a.A.getGuild(e);
    return (
        !!t &&
        null != n &&
        (n.features.has(u.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) ||
        n.features.has(u.GuildFeatures.COMMUNITY) ||
        n.features.has(u.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            ? (0, s.pX)(u.BVt.CHANNEL(e, c.VV.MEMBER_SAFETY))
            : r.A.open(n.id, u.BEX.MEMBERS),
        !0)
    );
}
async function E(e, t) {
    let n = await (0, l.vk)(e, t);
    return 0 === n.length
        ? []
        : (await i.h.dispatch({ type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS", guildId: e, memberSupplementals: n }),
          n);
}
