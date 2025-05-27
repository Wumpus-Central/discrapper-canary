n.d(t, { Q: () => c });
var r = n(995638),
    i = n(592125),
    l = n(430824),
    o = n(306680),
    s = n(709054),
    a = n(982183);
function c(e) {
    if (
        (function (e) {
            if (!o.ZP.hasUnread(e.channel_id)) return !1;
            let t = i.Z.getChannel(e.channel_id);
            if (null == t) return !1;
            let n = l.Z.getGuild(t.guild_id);
            if (null == n || null == n.joinedAt) return !1;
            let r = o.ZP.ackMessageId(t.id);
            if (null == r) {
                let e = l.Z.getGuild(t.guild_id);
                null != e && null != e.joinedAt && (r = s.default.fromTimestamp(e.joinedAt.getTime()));
            }
            return s.default.compare(e.id, r) > 0;
        })(e)
    )
        return a.dm.UNREAD;
    let t = (0, r.default)(new Date(), e.timestamp);
    return 0 === t ? a.dm.TODAY : 1 === t ? a.dm.YESTERDAY : a.dm.OLDER;
}
