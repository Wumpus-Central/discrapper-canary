n.d(t, {
    NF: () => d,
    Zy: () => u
}),
    n(301563),
    n(47120),
    n(512722);
var r = n(626135),
    i = n(777754),
    o = n(981631),
    a = n(388032);
let s = /^\d+$/,
    l = /^(.+?@.+?\..+?|.+?#\d{4})$/,
    c = /^[a-zA-Z0-9_\\.]+$/;
function u(e) {
    return c.test(e) || (e.includes('#') && l.test(e)) ? null : (f(e), a.NW.string(a.t.paDJBA));
}
function d(e, t) {
    switch (e) {
        case o.evJ.RELATIONSHIP_INCOMING_DISABLED:
            return a.NW.format(a.t.Oxe6Ul, { discordTag: t });
        case o.evJ.TOO_MANY_FRIENDS:
            return a.NW.string(a.t.tnBalJ);
        case o.evJ.RELATIONSHIP_ALREADY_FRIENDS:
            return a.NW.string(a.t.VNLnen);
        case o.evJ.USER_QUARANTINED:
        case o.evJ.USER_FRIEND_REQUEST_LIMITED_ACCESS:
            return a.NW.string(a.t.EouHws);
        case o.evJ.TOO_MANY_BLOCKED_USERS:
            return a.NW.string(a.t.sIGo1t);
        case o.evJ.TOO_MANY_PENDING_OUTGOING:
            return a.NW.string(a.t.k1K15u);
        case o.evJ.RELATIONSHIP_INCOMING_BLOCKED:
        case o.evJ.RELATIONSHIP_INVALID_SELF:
        case o.evJ.RELATIONSHIP_INVALUD_USER_BOT:
        case o.evJ.RELATIONSHIP_INVALID_DISCORD_TAG:
        default:
            return a.NW.string(a.t.paDJBA);
    }
}
function f(e) {
    let [t, n] = e.split('#');
    r.default.track(o.rMx.FRIEND_REQUEST_FAILED, {
        reason: 'Invalid Username',
        query: e,
        discrim_len: (null != n ? n : '').length,
        username_len: t.length,
        is_email_like: i.Z.isEmail(e),
        is_invite_like: i.Z.isInvite(e),
        is_num_only: s.test(e)
    });
}
