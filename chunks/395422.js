"use strict";
n.d(t, { Ty: () => c, vU: () => d }), n(284009);
var i = n(174459),
    r = n(988102),
    s = n(652215),
    a = n(375708);
let o = /^\d+$/,
    l = /^(.+?@.+?\..+?|.+?#\d{4})$/,
    u = /^[a-zA-Z0-9_\\.]+$/;
function c(e) {
    return u.test(e) || (e.includes("#") && l.test(e))
        ? null
        : ((function (e) {
              let [t, n] = e.split("#");
              i.default.track(s.HAw.FRIEND_REQUEST_FAILED, {
                  reason: "Invalid Username",
                  query: e,
                  discrim_len: (n ?? "").length,
                  username_len: t.length,
                  is_email_like: r.A.isEmail(e),
                  is_invite_like: r.A.isInvite(e),
                  is_num_only: o.test(e),
              });
          })(e),
          a.intl.string(a.t.paDJBM));
}
function d(e, t) {
    switch (e) {
        case s.t02.RELATIONSHIP_INCOMING_DISABLED:
            return a.intl.format(a.t.Oxe6Ur, { discordTag: t });
        case s.t02.TOO_MANY_FRIENDS:
            return a.intl.string(a.t.tnBalD);
        case s.t02.RELATIONSHIP_ALREADY_FRIENDS:
            return a.intl.string(a.t.VNLneq);
        case s.t02.USER_QUARANTINED:
        case s.t02.USER_FRIEND_REQUEST_LIMITED_ACCESS:
            return a.intl.string(a.t.EouHwv);
        case s.t02.TOO_MANY_BLOCKED_USERS:
            return a.intl.string(a.t.sIGo1i);
        case s.t02.TOO_MANY_PENDING_OUTGOING:
            return a.intl.string(a.t.k1K15p);
        case s.t02.RELATIONSHIP_INCOMING_BLOCKED:
        case s.t02.RELATIONSHIP_INVALID_SELF:
        case s.t02.RELATIONSHIP_INVALUD_USER_BOT:
        case s.t02.RELATIONSHIP_INVALID_DISCORD_TAG:
        default:
            return a.intl.string(a.t.paDJBM);
    }
}
