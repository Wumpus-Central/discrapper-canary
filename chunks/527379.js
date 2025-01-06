n.d(e, {
    Dr: function () {
        return p;
    },
    YO: function () {
        return _;
    },
    _X: function () {
        return m;
    },
    _o: function () {
        return E;
    },
    nb: function () {
        return g;
    },
    zO: function () {
        return f;
    }
});
var i = n(570140),
    r = n(63568),
    l = n(434404),
    o = n(703656),
    u = n(430824),
    a = n(241559),
    s = n(327999),
    c = n(981631),
    d = n(176505);
async function f(t) {
    await i.Z.dispatch({
        type: 'INITIALIZE_MEMBER_SAFETY_STORE',
        guildId: t
    });
}
function _(t) {
    i.Z.dispatch({
        type: 'MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH',
        guildId: t
    });
}
function E(t, e) {
    let { continuationToken: n, ...r } = e;
    i.Z.dispatch({
        type: 'MEMBER_SAFETY_PAGINATION_UPDATE',
        guildId: t,
        pagination: r
    });
}
async function p(t, e) {
    await i.Z.dispatch({
        type: 'MEMBER_SAFETY_SEARCH_STATE_UPDATE',
        guildId: t,
        searchState: e
    });
}
function m(t) {
    let e = (0, a.lv)(t),
        n = u.Z.getGuild(t);
    return !!e && null != n && (((0, r.K2)(t, 'Guild Sidebar') && n.hasFeature(c.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || n.hasFeature(c.oNc.COMMUNITY) || n.hasFeature(c.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, o.uL)(c.Z5c.CHANNEL(t, d.oC.MEMBER_SAFETY)), !0) : (l.Z.open(n.id, c.pNK.MEMBERS), !0));
}
async function g(t, e) {
    let n = await (0, s._2)(t, e);
    return 0 === n.length
        ? []
        : (await i.Z.dispatch({
              type: 'FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS',
              guildId: t,
              memberSupplementals: n
          }),
          n);
}
