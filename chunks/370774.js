if (
    (e.d(n, {
        D: () => E,
        O4: () => L,
        YH: () => g,
        bl: () => T,
        j4: () => U
    }),
    12633 == e.j)
)
    var i = e(995638);
var l = e(114858),
    r = e(442837),
    d = e(230711),
    a = e(455199),
    _ = e(592125),
    s = e(430824);
e(375954);
var u = e(306680);
(e(594174), e(70956));
var p = e(709054),
    o = e(787879),
    I = e(982183),
    c = e(981631);
function g(t) {
    let { messageId: n, channelId: e, guildId: i, ReadStateStore_: l = u.ZP, GuildStore_: r = s.Z } = t;
    if (!l.hasUnread(e)) return !1;
    let d = r.getGuild(i);
    if (null == d || null == d.joinedAt) return !1;
    let a = l.ackMessageId(e);
    if (null == a) {
        let t = r.getGuild(i);
        null != t && null != t.joinedAt && (a = p.default.fromTimestamp(t.joinedAt.getTime()));
    }
    return p.default.compare(n, a) > 0;
}
function T(t) {
    let { id: n } = t,
        e = (0, i.default)(new Date(), p.default.extractTimestamp(n));
    return 0 === e ? I.KZ.TODAY : 1 === e ? I.KZ.YESTERDAY : I.KZ.OLDER;
}
function E() {
    let { pathname: t } = (0, l.TH)();
    return t.startsWith(c.Z5c.NOTIFICATIONS_INBOX());
}
function U(t) {
    d.Z.open(c.oAB.NOTIFICATIONS, void 0, { analyticsLocations: t });
}
function L() {
    let t = (0, r.Wu)([o.Z], () => {
            var t;
            return null != (t = o.Z.getNotifyingChannelIds()) ? t : [];
        }),
        n = (0, r.Wu)([u.ZP], () => t.filter((t) => u.ZP.hasUnread(t) && !u.ZP.isEstimated(t)), [t]),
        e = (0, r.Wu)([a.ZP], () => {
            var t;
            return null != (t = a.ZP.getSettingsFilteredMentions()) ? t : [];
        });
    return {
        unreadRecentMentionsCount: (0, r.e7)(
            [u.ZP, _.Z, s.Z],
            () => {
                var t, n;
                return null !=
                    (n =
                        null == e ||
                        null ==
                            (t = e.filter((t) => {
                                let n = _.Z.getBasicChannel(t.channel_id);
                                return (
                                    null != n &&
                                    g({
                                        messageId: t.id,
                                        channelId: t.channel_id,
                                        guildId: n.guild_id,
                                        ReadStateStore_: u.ZP,
                                        GuildStore_: s.Z
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
