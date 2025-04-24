n.d(t, {
    Dr: () => E,
    YO: () => p,
    _X: () => O,
    _o: () => f,
    nb: () => S,
    zO: () => d
});
var r = n(570140),
    i = n(434404),
    l = n(703656),
    o = n(430824),
    a = n(241559),
    u = n(327999),
    c = n(981631),
    s = n(176505);
async function d(e) {
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
function f(e, t) {
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
async function E(e, t) {
    await r.Z.dispatch({
        type: 'MEMBER_SAFETY_SEARCH_STATE_UPDATE',
        guildId: e,
        searchState: t
    });
}
function O(e) {
    let t = (0, a.lv)(e),
        n = o.Z.getGuild(e);
    return !!t && null != n && (n.hasFeature(c.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || n.hasFeature(c.oNc.COMMUNITY) || n.hasFeature(c.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? (0, l.uL)(c.Z5c.CHANNEL(e, s.oC.MEMBER_SAFETY)) : i.Z.open(n.id, c.pNK.MEMBERS), !0);
}
async function S(e, t) {
    let n = await (0, u._2)(e, t);
    return 0 === n.length
        ? []
        : (await r.Z.dispatch({
              type: 'FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS',
              guildId: e,
              memberSupplementals: n
          }),
          n);
}
