if (
    (e.d(n, {
        D: () => g,
        Qz: () => p,
        s: () => o
    }),
    12633 == e.j)
)
    var i = e(995638);
var l = e(114858),
    r = e(592125),
    d = e(430824),
    a = e(306680),
    _ = e(709054),
    s = e(982183),
    u = e(981631);
function p(t) {
    if (
        (function (t) {
            if (!a.ZP.hasUnread(t.channel_id)) return !1;
            let n = r.Z.getChannel(t.channel_id);
            if (null == n) return !1;
            let e = d.Z.getGuild(n.guild_id);
            if (null == e || null == e.joinedAt) return !1;
            let i = a.ZP.ackMessageId(n.id);
            if (null == i) {
                let t = d.Z.getGuild(n.guild_id);
                null != t && null != t.joinedAt && (i = _.default.fromTimestamp(t.joinedAt.getTime()));
            }
            return _.default.compare(t.id, i) > 0;
        })(t)
    )
        return s.dm.UNREAD;
    let n = (0, i.default)(new Date(), t.timestamp);
    return 0 === n ? s.dm.TODAY : 1 === n ? s.dm.YESTERDAY : s.dm.OLDER;
}
function o(t) {
    let n = new Date(new Date().setHours(0, 0, 0, 0));
    return t.OLDER ? null : t.YESTERDAY ? _.default.fromTimestamp(new Date(n.setDate(n.getDate() - 1)).getTime()) : t.TODAY ? _.default.fromTimestamp(n.getTime()) : null;
}
function g() {
    let { pathname: t } = (0, l.TH)();
    return t.startsWith(u.Z5c.NOTIFICATIONS_INBOX());
}
