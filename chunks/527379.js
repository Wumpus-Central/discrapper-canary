n.d(t, {
    Dr: () => g,
    YO: () => f,
    _X: () => v,
    _o: () => p,
    nb: () => C,
    zO: () => h
});
var i = n(570140),
    r = n(63568),
    l = n(434404),
    o = n(703656),
    s = n(430824),
    a = n(241559),
    u = n(327999),
    d = n(981631),
    c = n(176505);
async function h(e) {
    await i.Z.dispatch({
        type: 'INITIALIZE_MEMBER_SAFETY_STORE',
        guildId: e
    });
}
function f(e) {
    i.Z.dispatch({
        type: 'MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH',
        guildId: e
    });
}
function p(e, t) {
    var { continuationToken: n } = t,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++) (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(t, ['continuationToken']);
    i.Z.dispatch({
        type: 'MEMBER_SAFETY_PAGINATION_UPDATE',
        guildId: e,
        pagination: r
    });
}
async function g(e, t) {
    await i.Z.dispatch({
        type: 'MEMBER_SAFETY_SEARCH_STATE_UPDATE',
        guildId: e,
        searchState: t
    });
}
function v(e) {
    let t = (0, a.lv)(e),
        n = s.Z.getGuild(e);
    return !!t && null != n && (((0, r.K2)(e, 'Guild Sidebar') && n.hasFeature(d.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || n.hasFeature(d.oNc.COMMUNITY) || n.hasFeature(d.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? (0, o.uL)(d.Z5c.CHANNEL(e, c.oC.MEMBER_SAFETY)) : l.Z.open(n.id, d.pNK.MEMBERS), !0);
}
async function C(e, t) {
    let n = await (0, u._2)(e, t);
    return 0 === n.length
        ? []
        : (await i.Z.dispatch({
              type: 'FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS',
              guildId: e,
              memberSupplementals: n
          }),
          n);
}
