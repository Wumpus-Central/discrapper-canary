n.d(t, { Cw: () => _, Ld: () => h, UD: () => m, aZ: () => p, jo: () => g, uO: () => u });
var i = n(73153),
    l = n(997509),
    a = n(976860),
    r = n(71393),
    s = n(134413),
    o = n(11541),
    d = n(652215),
    c = n(746080);
async function u(e) {
    await i.h.dispatch({ type: "INITIALIZE_MEMBER_SAFETY_STORE", guildId: e });
}
function m(e) {
    i.h.dispatch({ type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH", guildId: e });
}
function _(e, t) {
    let { continuationToken: n, ...l } = t;
    i.h.dispatch({ type: "MEMBER_SAFETY_PAGINATION_UPDATE", guildId: e, pagination: l });
}
async function h(e, t) {
    await i.h.dispatch({ type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE", guildId: e, searchState: t });
}
function p(e) {
    let t = (0, s.Ml)(e),
        n = r.A.getGuild(e);
    return (
        !!t &&
        null != n &&
        (n.features.has(d.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) ||
        n.features.has(d.GuildFeatures.COMMUNITY) ||
        n.features.has(d.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            ? (0, a.pX)(d.BVt.CHANNEL(e, c.VV.MEMBER_SAFETY))
            : l.A.open(n.id, d.BEX.MEMBERS),
        !0)
    );
}
async function g(e, t) {
    let n = await (0, o.vk)(e, t);
    return 0 === n.length
        ? []
        : (await i.h.dispatch({ type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS", guildId: e, memberSupplementals: n }),
          n);
}
