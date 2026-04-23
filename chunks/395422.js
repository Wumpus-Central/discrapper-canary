n.d(t, { Ty: () => E, vU: () => d }), n(284009);
var i = n(954571),
    r = n(988102),
    a = n(652215),
    s = n(985018);
let _ = /^\d+$/,
    l = /^(.+?@.+?\..+?|.+?#\d{4})$/,
    o = /^[a-zA-Z0-9_\\.]+$/;
function E(e) {
    return o.test(e) || (e.includes("#") && l.test(e))
        ? null
        : ((function (e) {
              let [t, n] = e.split("#");
              i.default.track(a.HAw.FRIEND_REQUEST_FAILED, {
                  reason: "Invalid Username",
                  query: e,
                  discrim_len: (n ?? "").length,
                  username_len: t.length,
                  is_email_like: r.A.isEmail(e),
                  is_invite_like: r.A.isInvite(e),
                  is_num_only: _.test(e),
              });
          })(e),
          s.intl.string(s.t.paDJBM));
}
function d(e, t) {
    switch (e) {
        case a.t02.RELATIONSHIP_INCOMING_DISABLED:
            return s.intl.format(s.t.Oxe6Ur, { discordTag: t });
        case a.t02.TOO_MANY_FRIENDS:
            return s.intl.string(s.t.tnBalD);
        case a.t02.RELATIONSHIP_ALREADY_FRIENDS:
            return s.intl.string(s.t.VNLneq);
        case a.t02.USER_QUARANTINED:
        case a.t02.USER_FRIEND_REQUEST_LIMITED_ACCESS:
            return s.intl.string(s.t.EouHwv);
        case a.t02.TOO_MANY_BLOCKED_USERS:
            return s.intl.string(s.t.sIGo1i);
        case a.t02.TOO_MANY_PENDING_OUTGOING:
            return s.intl.string(s.t.k1K15p);
        case a.t02.RELATIONSHIP_INCOMING_BLOCKED:
        case a.t02.RELATIONSHIP_INVALID_SELF:
        case a.t02.RELATIONSHIP_INVALUD_USER_BOT:
        case a.t02.RELATIONSHIP_INVALID_DISCORD_TAG:
        default:
            return s.intl.string(s.t.paDJBM);
    }
}
