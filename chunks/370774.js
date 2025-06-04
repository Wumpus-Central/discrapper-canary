if (
    (e.d(n, {
        D: () => g,
        bl: () => p,
        j4: () => I,
        s: () => E
    }),
    12633 == e.j)
)
    var i = e(995638);
var l = e(114858),
    r = e(230711),
    d = e(592125),
    a = e(430824),
    _ = e(306680),
    s = e(709054),
    u = e(982183),
    o = e(981631);
function p(t) {
    if (
        (function (t) {
            if (!_.ZP.hasUnread(t.channel_id)) return !1;
            let n = d.Z.getChannel(t.channel_id);
            if (null == n) return !1;
            let e = a.Z.getGuild(n.guild_id);
            if (null == e || null == e.joinedAt) return !1;
            let i = _.ZP.ackMessageId(n.id);
            if (null == i) {
                let t = a.Z.getGuild(n.guild_id);
                null != t && null != t.joinedAt && (i = s.default.fromTimestamp(t.joinedAt.getTime()));
            }
            return s.default.compare(t.id, i) > 0;
        })(t)
    )
        return u.KZ.UNREAD;
    let n = (0, i.default)(new Date(), t.timestamp);
    return 0 === n ? u.KZ.TODAY : 1 === n ? u.KZ.YESTERDAY : u.KZ.OLDER;
}
function E(t) {
    let n = new Date(new Date().setHours(0, 0, 0, 0));
    return t.OLDER ? null : t.YESTERDAY ? s.default.fromTimestamp(new Date(n.setDate(n.getDate() - 1)).getTime()) : t.TODAY ? s.default.fromTimestamp(n.getTime()) : null;
}
function g() {
    let { pathname: t } = (0, l.TH)();
    return t.startsWith(o.Z5c.NOTIFICATIONS_INBOX());
}
function I() {
    r.Z.open(o.oAB.NOTIFICATIONS, void 0);
}
