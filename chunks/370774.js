if (
    (e.d(n, {
        D: () => c,
        fW: () => E,
        j4: () => I,
        s: () => g
    }),
    e(467055),
    12633 == e.j)
)
    var i = e(995638);
var l = e(114858),
    r = e(442837),
    d = e(230711),
    a = e(592125),
    s = e(430824),
    _ = e(306680),
    u = e(709054),
    o = e(982183),
    p = e(981631);
function E(t) {
    let n = (0, r.cj)([a.Z, _.ZP, s.Z], () =>
        Object.fromEntries(
            t.map((t) => [
                t.message.id,
                (function (t) {
                    if (
                        (function (t) {
                            if (!_.ZP.hasUnread(t.channel_id)) return !1;
                            let n = a.Z.getChannel(t.channel_id);
                            if (null == n) return !1;
                            let e = s.Z.getGuild(n.guild_id);
                            if (null == e || null == e.joinedAt) return !1;
                            let i = _.ZP.ackMessageId(n.id);
                            if (null == i) {
                                let t = s.Z.getGuild(n.guild_id);
                                null != t && null != t.joinedAt && (i = u.default.fromTimestamp(t.joinedAt.getTime()));
                            }
                            return u.default.compare(t.id, i) > 0;
                        })(t)
                    )
                        return o.KZ.UNREAD;
                    let n = (0, i.default)(new Date(), t.timestamp);
                    return 0 === n ? o.KZ.TODAY : 1 === n ? o.KZ.YESTERDAY : o.KZ.OLDER;
                })(t.message)
            ])
        )
    );
    return (t) => n[t];
}
function g(t) {
    let n = new Date(new Date().setHours(0, 0, 0, 0));
    return t.OLDER ? null : t.YESTERDAY ? u.default.fromTimestamp(new Date(n.setDate(n.getDate() - 1)).getTime()) : t.TODAY ? u.default.fromTimestamp(n.getTime()) : null;
}
function c() {
    let { pathname: t } = (0, l.TH)();
    return t.startsWith(p.Z5c.NOTIFICATIONS_INBOX());
}
function I(t) {
    d.Z.open(p.oAB.NOTIFICATIONS, void 0, { analyticsLocations: t });
}
