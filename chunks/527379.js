e.d(n, {
    Dr: function () {
        return p;
    },
    YO: function () {
        return _;
    },
    _X: function () {
        return g;
    },
    _o: function () {
        return E;
    },
    nb: function () {
        return S;
    },
    zO: function () {
        return f;
    }
});
var i = e(570140),
    r = e(63568),
    l = e(434404),
    u = e(703656),
    o = e(430824),
    a = e(241559),
    s = e(327999),
    c = e(981631),
    d = e(176505);
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
function E(t, n) {
    let { continuationToken: e, ...r } = n;
    i.Z.dispatch({
        type: 'MEMBER_SAFETY_PAGINATION_UPDATE',
        guildId: t,
        pagination: r
    });
}
async function p(t, n) {
    await i.Z.dispatch({
        type: 'MEMBER_SAFETY_SEARCH_STATE_UPDATE',
        guildId: t,
        searchState: n
    });
}
function g(t) {
    let n = (0, a.lv)(t),
        e = o.Z.getGuild(t);
    return !!n && null != e && (((0, r.K2)(t, 'Guild Sidebar') && e.hasFeature(c.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || e.hasFeature(c.oNc.COMMUNITY) || e.hasFeature(c.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? ((0, u.uL)(c.Z5c.CHANNEL(t, d.oC.MEMBER_SAFETY)), !0) : (l.Z.open(e.id, c.pNK.MEMBERS), !0));
}
async function S(t, n) {
    let e = await (0, s._2)(t, n);
    return 0 === e.length
        ? []
        : (await i.Z.dispatch({
              type: 'FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS',
              guildId: t,
              memberSupplementals: e
          }),
          e);
}
