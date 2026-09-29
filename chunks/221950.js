n.d(t, { Cw: () => _, Ld: () => A, UD: () => d, aZ: () => T, jo: () => I, uO: () => u });
var i = n(228366),
    l = n(468689),
    r = n(976860),
    s = n(71393),
    a = n(134413),
    o = n(11541),
    c = n(652215),
    E = n(746080);
async function u(e) {
    await i.h.dispatch({ type: "INITIALIZE_MEMBER_SAFETY_STORE", guildId: e });
}
function d(e) {
    i.h.dispatch({ type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH", guildId: e });
}
function _(e, t) {
    let { continuationToken: n, ...l } = t;
    i.h.dispatch({ type: "MEMBER_SAFETY_PAGINATION_UPDATE", guildId: e, pagination: l });
}
async function A(e, t) {
    await i.h.dispatch({ type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE", guildId: e, searchState: t });
}
function T(e) {
    let t = (0, a.Ml)(e),
        n = s.A.getGuild(e);
    return (
        !!t &&
        null != n &&
        (n.features.has(c.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) ||
        n.features.has(c.GuildFeatures.COMMUNITY) ||
        n.features.has(c.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            ? (0, r.pX)(c.BVt.CHANNEL(e, E.VV.MEMBER_SAFETY))
            : l.default.open(n.id, c.BEX.MEMBERS),
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
