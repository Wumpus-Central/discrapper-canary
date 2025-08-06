n.d(t, {
    Dr: () => m,
    YO: () => p,
    _X: () => g,
    _o: () => h,
    nb: () => E,
    zO: () => _
});
var r = n(570140),
    i = n(434404),
    o = n(703656),
    a = n(430824),
    s = n(241559),
    l = n(327999),
    c = n(981631),
    u = n(176505);
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
async function _(e) {
    await r.Z.dispatch({
        type: 'INITIALIZE_MEMBER_SAFETY_STORE',
        guildId: e
    });
}
function p(e) {
    r.Z.dispatch({
        type: 'MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH',
        guildId: e
    });
}
function h(e, t) {
    var { continuationToken: n } = t,
        i = d(t, ['continuationToken']);
    r.Z.dispatch({
        type: 'MEMBER_SAFETY_PAGINATION_UPDATE',
        guildId: e,
        pagination: i
    });
}
async function m(e, t) {
    await r.Z.dispatch({
        type: 'MEMBER_SAFETY_SEARCH_STATE_UPDATE',
        guildId: e,
        searchState: t
    });
}
function g(e) {
    let t = (0, s.lv)(e),
        n = a.Z.getGuild(e);
    return !!t && null != n && (n.features.has(c.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || n.features.has(c.oNc.COMMUNITY) || n.features.has(c.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? (0, o.uL)(c.Z5c.CHANNEL(e, u.oC.MEMBER_SAFETY)) : i.Z.open(n.id, c.pNK.MEMBERS), !0);
}
async function E(e, t) {
    let n = await (0, l._2)(e, t);
    return 0 === n.length
        ? []
        : (await r.Z.dispatch({
              type: 'FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS',
              guildId: e,
              memberSupplementals: n
          }),
          n);
}
