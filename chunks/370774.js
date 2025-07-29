n.d(t, {
    D: () => g,
    O4: () => b,
    YH: () => h,
    bl: () => m,
    j4: () => E
});
var r = n(995638),
    i = n(114858),
    a = n(442837),
    o = n(230711),
    s = n(455199),
    l = n(592125),
    c = n(430824);
n(375954);
var u = n(306680);
(n(594174), n(70956));
var d = n(709054),
    _ = n(787879),
    f = n(982183),
    p = n(981631);
function h(e) {
    let { messageId: t, channelId: n, guildId: r, ReadStateStore_: i = u.ZP, GuildStore_: a = c.Z } = e;
    if (!i.hasUnread(n)) return !1;
    let o = a.getGuild(r);
    if (null == o || null == o.joinedAt) return !1;
    let s = i.ackMessageId(n);
    if (null == s) {
        let e = a.getGuild(r);
        null != e && null != e.joinedAt && (s = d.default.fromTimestamp(e.joinedAt.getTime()));
    }
    return d.default.compare(t, s) > 0;
}
function m(e) {
    let { id: t } = e,
        n = (0, r.default)(new Date(), d.default.extractTimestamp(t));
    return 0 === n ? f.KZ.TODAY : 1 === n ? f.KZ.YESTERDAY : f.KZ.OLDER;
}
function g() {
    let { pathname: e } = (0, i.TH)();
    return e.startsWith(p.Z5c.NOTIFICATIONS_INBOX());
}
function E(e) {
    o.Z.open(p.oAB.NOTIFICATIONS, void 0, { analyticsLocations: e });
}
function b() {
    let e = (0, a.Wu)([_.Z], () => {
            var e;
            return null != (e = _.Z.getNotifyingChannelIds()) ? e : [];
        }),
        t = (0, a.Wu)([u.ZP], () => e.filter((e) => u.ZP.hasUnread(e) && !u.ZP.isEstimated(e)), [e]),
        n = (0, a.Wu)([s.ZP], () => {
            var e;
            return null != (e = s.ZP.getSettingsFilteredMentions()) ? e : [];
        });
    return {
        unreadRecentMentionsCount: (0, a.e7)(
            [u.ZP, l.Z, c.Z],
            () => {
                var e, t;
                return null !=
                    (t =
                        null == n ||
                        null ==
                            (e = n.filter((e) => {
                                let t = l.Z.getBasicChannel(e.channel_id);
                                return (
                                    null != t &&
                                    h({
                                        messageId: e.id,
                                        channelId: e.channel_id,
                                        guildId: t.guild_id,
                                        ReadStateStore_: u.ZP,
                                        GuildStore_: c.Z
                                    })
                                );
                            }))
                            ? void 0
                            : e.length)
                    ? t
                    : 0;
            },
            [n]
        ),
        unreadChannelIds: t
    };
}
