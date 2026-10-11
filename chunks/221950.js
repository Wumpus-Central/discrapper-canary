a.d(t, { Cw: () => h, Ld: () => p, UD: () => c, aZ: () => R, jo: () => d, uO: () => T });
var _ = a(73153),
    e = a(468689),
    M = a(976860),
    i = a(71393),
    n = a(134413),
    u = a(11541),
    s = a(652215),
    A = a(746080);
async function T(E) {
    await _.h.dispatch({ type: "INITIALIZE_MEMBER_SAFETY_STORE", guildId: E });
}
function c(E) {
    _.h.dispatch({ type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH", guildId: E });
}
function h(E, t) {
    let { continuationToken: a, ...e } = t;
    _.h.dispatch({ type: "MEMBER_SAFETY_PAGINATION_UPDATE", guildId: E, pagination: e });
}
async function p(E, t) {
    await _.h.dispatch({ type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE", guildId: E, searchState: t });
}
function R(E) {
    let t = (0, n.Ml)(E),
        a = i.A.getGuild(E);
    return (
        !!t &&
        null != a &&
        (a.features.has(s.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) ||
        a.features.has(s.GuildFeatures.COMMUNITY) ||
        a.features.has(s.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            ? (0, M.pX)(s.BVt.CHANNEL(E, A.VV.MEMBER_SAFETY))
            : e.A.open(a.id, s.BEX.MEMBERS),
        !0)
    );
}
async function d(E, t) {
    let a = await (0, u.vk)(E, t);
    return 0 === a.length
        ? []
        : (await _.h.dispatch({ type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS", guildId: E, memberSupplementals: a }),
          a);
}
