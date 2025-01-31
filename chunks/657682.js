n.d(t, {
    NF: () => d,
    Zy: () => c
}),
    n(47120),
    n(512722);
var i = n(626135),
    r = n(777754),
    a = n(981631),
    s = n(388032);
let o = /^\d+$/,
    l = /^(.+?@.+?\..+?|.+?#\d{4})$/,
    u = /^[a-zA-Z0-9_\\.]+$/;
function c(e) {
    return u.test(e) || (e.includes('#') && l.test(e)) ? null : (f(e), s.intl.string(s.t.paDJBA));
}
function d(e, t) {
    switch (e) {
        case a.evJ.RELATIONSHIP_INCOMING_DISABLED:
            return s.intl.format(s.t.Oxe6Ul, { discordTag: t });
        case a.evJ.TOO_MANY_FRIENDS:
            return s.intl.string(s.t.tnBalJ);
        case a.evJ.RELATIONSHIP_ALREADY_FRIENDS:
            return s.intl.string(s.t.VNLnen);
        case a.evJ.USER_QUARANTINED:
        case a.evJ.USER_FRIEND_REQUEST_LIMITED_ACCESS:
            return s.intl.string(s.t.EouHws);
        case a.evJ.TOO_MANY_BLOCKED_USERS:
            return s.intl.string(s.t.sIGo1t);
        case a.evJ.RELATIONSHIP_INCOMING_BLOCKED:
        case a.evJ.RELATIONSHIP_INVALID_SELF:
        case a.evJ.RELATIONSHIP_INVALUD_USER_BOT:
        case a.evJ.RELATIONSHIP_INVALID_DISCORD_TAG:
        default:
            return s.intl.string(s.t.paDJBA);
    }
}
function f(e) {
    let [t, n] = e.split('#');
    i.default.track(a.rMx.FRIEND_REQUEST_FAILED, {
        reason: 'Invalid Username',
        query: e,
        discrim_len: (null != n ? n : '').length,
        username_len: t.length,
        is_email_like: r.Z.isEmail(e),
        is_invite_like: r.Z.isInvite(e),
        is_num_only: o.test(e)
    });
}
