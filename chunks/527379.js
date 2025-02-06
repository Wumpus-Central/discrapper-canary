n.d(t, {
    Dr: () => C,
    YO: () => g,
    _X: () => p,
    _o: () => f,
    nb: () => v,
    zO: () => h
});
var i = n(570140),
    l = n(63568),
    r = n(434404),
    s = n(703656),
    a = n(430824),
    o = n(241559),
    d = n(327999),
    u = n(981631),
    c = n(176505);
async function h(e) {
    await i.Z.dispatch({
        type: 'INITIALIZE_MEMBER_SAFETY_STORE',
        guildId: e
    });
}
function g(e) {
    i.Z.dispatch({
        type: 'MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH',
        guildId: e
    });
}
function f(e, t) {
    let { continuationToken: n, ...l } = t;
    i.Z.dispatch({
        type: 'MEMBER_SAFETY_PAGINATION_UPDATE',
        guildId: e,
        pagination: l
    });
}
async function C(e, t) {
    await i.Z.dispatch({
        type: 'MEMBER_SAFETY_SEARCH_STATE_UPDATE',
        guildId: e,
        searchState: t
    });
}
function p(e) {
    let t = (0, o.lv)(e),
        n = a.Z.getGuild(e);
    return !!t && null != n && (((0, l.K2)(e, 'Guild Sidebar') && n.hasFeature(u.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || n.hasFeature(u.oNc.COMMUNITY) || n.hasFeature(u.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? (0, s.uL)(u.Z5c.CHANNEL(e, c.oC.MEMBER_SAFETY)) : r.Z.open(n.id, u.pNK.MEMBERS), !0);
}
async function v(e, t) {
    let n = await (0, d._2)(e, t);
    return 0 === n.length
        ? []
        : (await i.Z.dispatch({
              type: 'FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS',
              guildId: e,
              memberSupplementals: n
          }),
          n);
}
