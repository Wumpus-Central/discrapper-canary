n.d(t, {
    Dr: function () {
        return C;
    },
    YO: function () {
        return f;
    },
    _X: function () {
        return p;
    },
    _o: function () {
        return g;
    },
    nb: function () {
        return E;
    },
    zO: function () {
        return h;
    }
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
function g(e, t) {
    let { continuationToken: n, ...r } = t;
    i.Z.dispatch({
        type: 'MEMBER_SAFETY_PAGINATION_UPDATE',
        guildId: e,
        pagination: r
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
    let t = (0, a.lv)(e),
        n = s.Z.getGuild(e);
    return !!t && null != n && (((0, r.K2)(e, 'Guild Sidebar') && n.hasFeature(d.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || n.hasFeature(d.oNc.COMMUNITY) || n.hasFeature(d.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, o.uL)(d.Z5c.CHANNEL(e, c.oC.MEMBER_SAFETY)), !0) : (l.Z.open(n.id, d.pNK.MEMBERS), !0));
}
async function E(e, t) {
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
