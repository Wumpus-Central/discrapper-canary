if (
    (e.d(n, {
        D: () => D,
        O4: () => O,
        YH: () => E,
        bl: () => m,
        j4: () => L,
        s: () => U
    }),
    12633 == e.j)
)
    var i = e(995638);
if (12633 == e.j) var l = e(89616);
var r = e(114858),
    d = e(442837),
    a = e(230711),
    _ = e(455199),
    s = e(592125),
    u = e(430824);
e(375954);
var p = e(306680);
e(594174);
var o = e(70956),
    I = e(709054),
    c = e(854454),
    T = e(982183),
    g = e(981631);
function E(t) {
    let { messageId: n, channelId: e, guildId: i, ReadStateStore_: l = p.ZP, GuildStore_: r = u.Z } = t;
    if (!l.hasUnread(e)) return !1;
    let d = r.getGuild(i);
    if (null == d || null == d.joinedAt) return !1;
    let a = l.ackMessageId(e);
    if (null == a) {
        let t = r.getGuild(i);
        null != t && null != t.joinedAt && (a = I.default.fromTimestamp(t.joinedAt.getTime()));
    }
    return I.default.compare(n, a) > 0;
}
function m(t) {
    let { id: n } = t,
        e = (0, i.default)(new Date(), I.default.extractTimestamp(n));
    return 0 === e ? T.KZ.TODAY : 1 === e ? T.KZ.YESTERDAY : T.KZ.OLDER;
}
function U(t) {
    let n = (0, l.Z)(),
        e = new Date(n.getTime() - o.Z.Millis.DAY);
    return t.OLDER ? '0' : t.YESTERDAY ? I.default.fromTimestamp(e.getTime()) : t.TODAY || t.UNREAD ? I.default.fromTimestamp(n.getTime()) : '0';
}
function D() {
    let { pathname: t } = (0, r.TH)();
    return t.startsWith(g.Z5c.NOTIFICATIONS_INBOX());
}
function L(t) {
    a.Z.open(g.oAB.NOTIFICATIONS, void 0, { analyticsLocations: t });
}
function O() {
    let t = (0, d.Wu)([c.ZP], () => {
            var t;
            return null != (t = c.ZP.getNotifyingChannelIds()) ? t : [];
        }),
        n = (0, d.Wu)([p.ZP], () => t.filter((t) => p.ZP.hasUnread(t) && !p.ZP.isEstimated(t)), [t]),
        e = (0, d.Wu)([_.ZP], () => {
            var t;
            return null != (t = _.ZP.getSettingsFilteredMentions()) ? t : [];
        });
    return {
        unreadRecentMentionsCount: (0, d.e7)(
            [p.ZP, s.Z, u.Z],
            () => {
                var t, n;
                return null !=
                    (n =
                        null == e ||
                        null ==
                            (t = e.filter((t) => {
                                let n = s.Z.getChannel(t.channel_id);
                                return (
                                    null != n &&
                                    E({
                                        messageId: t.id,
                                        channelId: t.channel_id,
                                        guildId: n.guild_id,
                                        ReadStateStore_: p.ZP,
                                        GuildStore_: u.Z
                                    })
                                );
                            }))
                            ? void 0
                            : t.length)
                    ? n
                    : 0;
            },
            [e]
        ),
        unreadChannelIds: n
    };
}
