n.d(t, { EJ: () => N, U4: () => C, i3: () => p, i7: () => O, lI: () => R, tZ: () => f, zo: () => m });
var i = n(892227),
    r = n(873263),
    a = n(17928),
    s = n(135978),
    _ = n(966597),
    l = n(85109),
    o = n(226017),
    E = n(780964),
    d = n(734057),
    c = n(71393);
n(232835);
var u = n(222823);
n(287809), n(927813);
var I = n(935208),
    A = n(310031),
    T = n(849077),
    S = n(652215);
function N(e) {
    let { messageId: t, channelId: n, guildId: i, ReadStateStore_: r = u.Ay, GuildStore_: a = c.A } = e;
    if (!r.hasUnread(n)) return !1;
    let s = a.getGuild(i);
    if (null == s || null == s.joinedAt) return !1;
    let _ = r.ackMessageId(n);
    if (null == _) {
        let e = a.getGuild(i);
        null != e && null != e.joinedAt && (_ = I.default.fromTimestamp(e.joinedAt.getTime()));
    }
    return I.default.compare(t, _) > 0;
}
function O(e) {
    let { id: t } = e,
        n = (0, i.default)(new Date(), I.default.extractTimestamp(t));
    return 0 === n ? T.Ur.TODAY : 1 === n ? T.Ur.YESTERDAY : T.Ur.OLDER;
}
function R() {
    let { pathname: e } = (0, r.zy)();
    return e.startsWith(S.BVt.CHANNEL(S.gNP));
}
function f(e) {
    {
        let { openUserSettings: t } = n(858897);
        t(E.X.NOTIFICATIONS_PANEL, { analyticsLocations: e });
    }
}
function C() {
    let e = (0, a.yK)([A.A], () => A.A.getNotifyingChannelIds() ?? []),
        t = (0, a.yK)([u.Ay], () => e.filter((e) => u.Ay.hasUnread(e)), [e]),
        n = (0, a.yK)([s.Ay], () => s.Ay.getSettingsFilteredMentions() ?? []);
    return {
        unreadRecentMentionsCount: (0, a.bG)(
            [u.Ay, d.A, c.A],
            () =>
                n?.filter((e) => {
                    let t = d.A.getBasicChannel(e.channel_id);
                    return (
                        null != t &&
                        N({
                            messageId: e.id,
                            channelId: e.channel_id,
                            guildId: t.guild_id,
                            ReadStateStore_: u.Ay,
                            GuildStore_: c.A,
                        })
                    );
                })?.length ?? 0,
            [n],
        ),
        unreadChannelIds: t,
    };
}
function p() {
    let { enabled: e, inInbox: t } = _.A.useConfig({ location: "NotificationsInboxUtils" }),
        n = (0, a.bG)([l.A], () => l.A.getSavedMessageCount());
    return e && t && (n > 0 || (0, o.A)());
}
function m(e, t) {
    return null != t && e.channelId === t.channelId && I.default.compare(e.id, t.messageId) >= 0;
}
