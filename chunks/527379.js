n.d(t, {
    Dr: () => _,
    YO: () => f,
    _X: () => O,
    _o: () => E,
    nb: () => g,
    zO: () => p
});
var r = n(570140),
    i = n(63568),
    l = n(434404),
    o = n(703656),
    a = n(430824),
    u = n(241559),
    s = n(327999),
    c = n(981631),
    d = n(176505);
async function p(e) {
    await r.Z.dispatch({
        type: 'INITIALIZE_MEMBER_SAFETY_STORE',
        guildId: e
    });
}
function f(e) {
    r.Z.dispatch({
        type: 'MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH',
        guildId: e
    });
}
function E(e, t) {
    var { continuationToken: n } = t,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(t, ['continuationToken']);
    r.Z.dispatch({
        type: 'MEMBER_SAFETY_PAGINATION_UPDATE',
        guildId: e,
        pagination: i
    });
}
async function _(e, t) {
    await r.Z.dispatch({
        type: 'MEMBER_SAFETY_SEARCH_STATE_UPDATE',
        guildId: e,
        searchState: t
    });
}
function O(e) {
    let t = (0, u.lv)(e),
        n = a.Z.getGuild(e);
    return !!t && null != n && (((0, i.K2)(e, 'Guild Sidebar') && n.hasFeature(c.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || n.hasFeature(c.oNc.COMMUNITY) || n.hasFeature(c.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? (0, o.uL)(c.Z5c.CHANNEL(e, d.oC.MEMBER_SAFETY)) : l.Z.open(n.id, c.pNK.MEMBERS), !0);
}
async function g(e, t) {
    let n = await (0, s._2)(e, t);
    return 0 === n.length
        ? []
        : (await r.Z.dispatch({
              type: 'FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS',
              guildId: e,
              memberSupplementals: n
          }),
          n);
}
