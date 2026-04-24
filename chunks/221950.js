n.d(t, { Cw: () => _, Ld: () => A, UD: () => E, aZ: () => I, jo: () => h, uO: () => c });
var i = n(228366),
    l = n(997509),
    r = n(976860),
    a = n(71393),
    o = n(134413),
    s = n(11541),
    u = n(652215),
    d = n(746080);
async function c(e) {
    await i.h.dispatch({ type: "INITIALIZE_MEMBER_SAFETY_STORE", guildId: e });
}
function E(e) {
    i.h.dispatch({ type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH", guildId: e });
}
function _(e, t) {
    let { continuationToken: n, ...l } = t;
    i.h.dispatch({ type: "MEMBER_SAFETY_PAGINATION_UPDATE", guildId: e, pagination: l });
}
async function A(e, t) {
    await i.h.dispatch({ type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE", guildId: e, searchState: t });
}
function I(e) {
    let t = (0, o.Ml)(e),
        n = a.A.getGuild(e);
    return (
        !!t &&
        null != n &&
        (n.features.has(u.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) ||
        n.features.has(u.GuildFeatures.COMMUNITY) ||
        n.features.has(u.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            ? (0, r.pX)(u.BVt.CHANNEL(e, d.VV.MEMBER_SAFETY))
            : l.A.open(n.id, u.BEX.MEMBERS),
        !0)
    );
}
async function h(e, t) {
    let n = await (0, s.vk)(e, t);
    return 0 === n.length
        ? []
        : (await i.h.dispatch({ type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS", guildId: e, memberSupplementals: n }),
          n);
}
