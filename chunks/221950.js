"use strict";
n.d(t, { Cw: () => E, Ld: () => A, UD: () => _, aZ: () => m, jo: () => I, uO: () => d });
var i = n(73153),
    r = n(997509),
    l = n(976860),
    s = n(71393),
    a = n(134413),
    o = n(11541),
    c = n(652215),
    u = n(746080);
async function d(e) {
    await i.h.dispatch({ type: "INITIALIZE_MEMBER_SAFETY_STORE", guildId: e });
}
function _(e) {
    i.h.dispatch({ type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH", guildId: e });
}
function E(e, t) {
    let { continuationToken: n, ...r } = t;
    i.h.dispatch({ type: "MEMBER_SAFETY_PAGINATION_UPDATE", guildId: e, pagination: r });
}
async function A(e, t) {
    await i.h.dispatch({ type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE", guildId: e, searchState: t });
}
function m(e) {
    let t = (0, a.Ml)(e),
        n = s.A.getGuild(e);
    return (
        !!t &&
        null != n &&
        (n.features.has(c.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) ||
        n.features.has(c.GuildFeatures.COMMUNITY) ||
        n.features.has(c.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            ? (0, l.pX)(c.BVt.CHANNEL(e, u.VV.MEMBER_SAFETY))
            : r.A.open(n.id, c.BEX.MEMBERS),
        !0)
    );
}
async function I(e, t) {
    let n = await (0, o.vk)(e, t);
    return 0 === n.length
        ? []
        : (await i.h.dispatch({ type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS", guildId: e, memberSupplementals: n }),
          n);
}
