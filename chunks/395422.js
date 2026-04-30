n.d(t, { Ty: () => c, vU: () => _ }), n(284009);
var i = n(954571),
    a = n(988102),
    r = n(652215),
    s = n(985018);
let l = /^\d+$/,
    o = /^(.+?@.+?\..+?|.+?#\d{4})$/,
    d = /^[a-zA-Z0-9_\\.]+$/;
function c(e) {
    return d.test(e) || (e.includes("#") && o.test(e))
        ? null
        : ((function (e) {
              let [t, n] = e.split("#");
              i.default.track(r.HAw.FRIEND_REQUEST_FAILED, {
                  reason: "Invalid Username",
                  query: e,
                  discrim_len: (n ?? "").length,
                  username_len: t.length,
                  is_email_like: a.A.isEmail(e),
                  is_invite_like: a.A.isInvite(e),
                  is_num_only: l.test(e),
              });
          })(e),
          s.intl.string(s.t.paDJBM));
}
function _(e, t) {
    switch (e) {
        case r.t02.RELATIONSHIP_INCOMING_DISABLED:
            return s.intl.format(s.t.Oxe6Ur, { discordTag: t });
        case r.t02.TOO_MANY_FRIENDS:
            return s.intl.string(s.t.tnBalD);
        case r.t02.RELATIONSHIP_ALREADY_FRIENDS:
            return s.intl.string(s.t.VNLneq);
        case r.t02.USER_QUARANTINED:
        case r.t02.USER_FRIEND_REQUEST_LIMITED_ACCESS:
            return s.intl.string(s.t.EouHwv);
        case r.t02.TOO_MANY_BLOCKED_USERS:
            return s.intl.string(s.t.sIGo1i);
        case r.t02.TOO_MANY_PENDING_OUTGOING:
            return s.intl.string(s.t.k1K15p);
        case r.t02.RELATIONSHIP_INCOMING_BLOCKED:
        case r.t02.RELATIONSHIP_INVALID_SELF:
        case r.t02.RELATIONSHIP_INVALUD_USER_BOT:
        case r.t02.RELATIONSHIP_INVALID_DISCORD_TAG:
        default:
            return s.intl.string(s.t.paDJBM);
    }
}
