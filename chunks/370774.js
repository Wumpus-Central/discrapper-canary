e.d(n, {
    D: () => g,
    YH: () => c,
    fW: () => I,
    j4: () => D,
    s: () => T
}),
    e(467055);
var i = e(73800);
if (12633 == e.j) var l = e(995638);
var r = e(114858),
    d = e(442837),
    a = e(230711),
    s = e(592125),
    _ = e(430824);
e(375954);
var u = e(306680);
e(594174);
var p = e(709054),
    o = e(982183),
    E = e(981631);
function c(t) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.Z,
        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Z,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.ZP;
    if (!i.hasUnread(t.channel_id)) return !1;
    let l = e.getChannel(t.channel_id);
    if (null == l) return !1;
    let r = n.getGuild(l.guild_id);
    if (null == r || null == r.joinedAt) return !1;
    let d = i.ackMessageId(l.id);
    if (null == d) {
        let t = n.getGuild(l.guild_id);
        null != t && null != t.joinedAt && (d = p.default.fromTimestamp(t.joinedAt.getTime()));
    }
    return p.default.compare(t.id, d) > 0;
}
function I(t) {
    let n = (0, d.cj)([s.Z, u.ZP, _.Z], () =>
        Object.fromEntries(
            t.map((t) => [
                t.message.id,
                (function (t) {
                    if (c(t)) return o.KZ.UNREAD;
                    let n = (0, l.default)(new Date(), t.timestamp);
                    return 0 === n ? o.KZ.TODAY : 1 === n ? o.KZ.YESTERDAY : o.KZ.OLDER;
                })(t.message)
            ])
        )
    );
    return i.useCallback((t) => n[t], [n]);
}
function T(t) {
    let n = new Date(new Date().setHours(0, 0, 0, 0));
    return t.OLDER ? null : t.YESTERDAY ? p.default.fromTimestamp(new Date(n.setDate(n.getDate() - 1)).getTime()) : t.TODAY ? p.default.fromTimestamp(n.getTime()) : null;
}
function g() {
    let { pathname: t } = (0, r.TH)();
    return t.startsWith(E.Z5c.NOTIFICATIONS_INBOX());
}
function D(t) {
    a.Z.open(E.oAB.NOTIFICATIONS, void 0, { analyticsLocations: t });
}
