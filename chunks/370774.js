if (
    (e.d(n, {
        D: () => T,
        YH: () => E,
        fW: () => I,
        j4: () => g,
        s: () => c
    }),
    e(467055),
    12633 == e.j)
)
    var i = e(995638);
var l = e(114858),
    r = e(442837),
    d = e(230711),
    a = e(592125),
    s = e(430824);
e(375954);
var _ = e(306680);
e(594174);
var u = e(709054),
    p = e(982183),
    o = e(981631);
function E(t) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Z,
        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Z,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _.ZP;
    if (!i.hasUnread(t.channel_id)) return !1;
    let l = e.getChannel(t.channel_id);
    if (null == l) return !1;
    let r = n.getGuild(l.guild_id);
    if (null == r || null == r.joinedAt) return !1;
    let d = i.ackMessageId(l.id);
    if (null == d) {
        let t = n.getGuild(l.guild_id);
        null != t && null != t.joinedAt && (d = u.default.fromTimestamp(t.joinedAt.getTime()));
    }
    return u.default.compare(t.id, d) > 0;
}
function I(t) {
    let n = (0, r.cj)([a.Z, _.ZP, s.Z], () =>
        Object.fromEntries(
            t.map((t) => [
                t.message.id,
                (function (t) {
                    if (E(t)) return p.KZ.UNREAD;
                    let n = (0, i.default)(new Date(), t.timestamp);
                    return 0 === n ? p.KZ.TODAY : 1 === n ? p.KZ.YESTERDAY : p.KZ.OLDER;
                })(t.message)
            ])
        )
    );
    return (t) => n[t];
}
function c(t) {
    let n = new Date(new Date().setHours(0, 0, 0, 0));
    return t.OLDER ? null : t.YESTERDAY ? u.default.fromTimestamp(new Date(n.setDate(n.getDate() - 1)).getTime()) : t.TODAY ? u.default.fromTimestamp(n.getTime()) : null;
}
function T() {
    let { pathname: t } = (0, l.TH)();
    return t.startsWith(o.Z5c.NOTIFICATIONS_INBOX());
}
function g(t) {
    d.Z.open(o.oAB.NOTIFICATIONS, void 0, { analyticsLocations: t });
}
