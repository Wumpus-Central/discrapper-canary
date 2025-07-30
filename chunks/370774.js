n.d(t, {
    D: () => y,
    O4: () => v,
    YH: () => E,
    bl: () => b,
    j4: () => O,
    ux: () => I
});
var r = n(995638),
    i = n(114858),
    a = n(442837),
    o = n(230711),
    s = n(455199),
    l = n(2818),
    c = n(768943),
    u = n(175006),
    d = n(592125),
    f = n(430824);
n(375954);
var _ = n(306680);
(n(594174), n(70956));
var p = n(709054),
    h = n(787879),
    m = n(982183),
    g = n(981631);
function E(e) {
    let { messageId: t, channelId: n, guildId: r, ReadStateStore_: i = _.ZP, GuildStore_: a = f.Z } = e;
    if (!i.hasUnread(n)) return !1;
    let o = a.getGuild(r);
    if (null == o || null == o.joinedAt) return !1;
    let s = i.ackMessageId(n);
    if (null == s) {
        let e = a.getGuild(r);
        null != e && null != e.joinedAt && (s = p.default.fromTimestamp(e.joinedAt.getTime()));
    }
    return p.default.compare(t, s) > 0;
}
function b(e) {
    let { id: t } = e,
        n = (0, r.default)(new Date(), p.default.extractTimestamp(t));
    return 0 === n ? m.KZ.TODAY : 1 === n ? m.KZ.YESTERDAY : m.KZ.OLDER;
}
function y() {
    let { pathname: e } = (0, i.TH)();
    return e.startsWith(g.Z5c.NOTIFICATIONS_INBOX());
}
function O(e) {
    o.Z.open(g.oAB.NOTIFICATIONS, void 0, { analyticsLocations: e });
}
function v() {
    let e = (0, a.Wu)([h.Z], () => {
            var e;
            return null != (e = h.Z.getNotifyingChannelIds()) ? e : [];
        }),
        t = (0, a.Wu)([_.ZP], () => e.filter((e) => _.ZP.hasUnread(e)), [e]),
        n = (0, a.Wu)([s.ZP], () => {
            var e;
            return null != (e = s.ZP.getSettingsFilteredMentions()) ? e : [];
        });
    return {
        unreadRecentMentionsCount: (0, a.e7)(
            [_.ZP, d.Z, f.Z],
            () => {
                var e, t;
                return null !=
                    (t =
                        null == n ||
                        null ==
                            (e = n.filter((e) => {
                                let t = d.Z.getBasicChannel(e.channel_id);
                                return (
                                    null != t &&
                                    E({
                                        messageId: e.id,
                                        channelId: e.channel_id,
                                        guildId: t.guild_id,
                                        ReadStateStore_: _.ZP,
                                        GuildStore_: f.Z
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
function I() {
    let { enabled: e, inInbox: t } = l.Z.useExperiment({ location: 'NotificationsInboxUtils' }),
        n = (0, a.e7)([c.Z], () => c.Z.getSavedMessageCount());
    return e && t && (n > 0 || (0, u.Z)());
}
