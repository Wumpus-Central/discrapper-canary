l.d(t, { Cw: () => h, Ld: () => _, UD: () => E, aZ: () => T, jo: () => A, uO: () => d });
var n = l(228366),
    i = l(997509),
    r = l(976860),
    s = l(71393),
    a = l(134413),
    u = l(11541),
    o = l(652215),
    c = l(746080);
async function d(e) {
    await n.h.dispatch({ type: "INITIALIZE_MEMBER_SAFETY_STORE", guildId: e });
}
function E(e) {
    n.h.dispatch({ type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH", guildId: e });
}
function h(e, t) {
    let { continuationToken: l, ...i } = t;
    n.h.dispatch({ type: "MEMBER_SAFETY_PAGINATION_UPDATE", guildId: e, pagination: i });
}
async function _(e, t) {
    await n.h.dispatch({ type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE", guildId: e, searchState: t });
}
function T(e) {
    let t = (0, a.Ml)(e),
        l = s.A.getGuild(e);
    return (
        !!t &&
        null != l &&
        (l.features.has(o.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) ||
        l.features.has(o.GuildFeatures.COMMUNITY) ||
        l.features.has(o.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            ? (0, r.pX)(o.BVt.CHANNEL(e, c.VV.MEMBER_SAFETY))
            : i.A.open(l.id, o.BEX.MEMBERS),
        !0)
    );
}
async function A(e, t) {
    let l = await (0, u.vk)(e, t);
    return 0 === l.length
        ? []
        : (await n.h.dispatch({ type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS", guildId: e, memberSupplementals: l }),
          l);
}
