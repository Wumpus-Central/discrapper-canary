n.d(t, {
    NF: () => d,
    Zy: () => u
}),
    n(35282),
    n(388685),
    n(512722);
var r = n(626135),
    i = n(777754),
    a = n(981631),
    o = n(388032);
let s = /^\d+$/,
    l = /^(.+?@.+?\..+?|.+?#\d{4})$/,
    c = /^[a-zA-Z0-9_\\.]+$/;
function u(e) {
    return c.test(e) || (e.includes('#') && l.test(e)) ? null : (f(e), o.intl.string(o.t.paDJBA));
}
function d(e, t) {
    switch (e) {
        case a.evJ.RELATIONSHIP_INCOMING_DISABLED:
            return o.intl.format(o.t.Oxe6Ul, { discordTag: t });
        case a.evJ.TOO_MANY_FRIENDS:
            return o.intl.string(o.t.tnBalJ);
        case a.evJ.RELATIONSHIP_ALREADY_FRIENDS:
            return o.intl.string(o.t.VNLnen);
        case a.evJ.USER_QUARANTINED:
        case a.evJ.USER_FRIEND_REQUEST_LIMITED_ACCESS:
            return o.intl.string(o.t.EouHws);
        case a.evJ.TOO_MANY_BLOCKED_USERS:
            return o.intl.string(o.t.sIGo1t);
        case a.evJ.TOO_MANY_PENDING_OUTGOING:
            return o.intl.string(o.t.k1K15u);
        case a.evJ.RELATIONSHIP_INCOMING_BLOCKED:
        case a.evJ.RELATIONSHIP_INVALID_SELF:
        case a.evJ.RELATIONSHIP_INVALUD_USER_BOT:
        case a.evJ.RELATIONSHIP_INVALID_DISCORD_TAG:
        default:
            return o.intl.string(o.t.paDJBA);
    }
}
function f(e) {
    let [t, n] = e.split('#');
    r.default.track(a.rMx.FRIEND_REQUEST_FAILED, {
        reason: 'Invalid Username',
        query: e,
        discrim_len: (null != n ? n : '').length,
        username_len: t.length,
        is_email_like: i.Z.isEmail(e),
        is_invite_like: i.Z.isInvite(e),
        is_num_only: s.test(e)
    });
}
