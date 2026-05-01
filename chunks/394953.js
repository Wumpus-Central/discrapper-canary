n.d(t, { EJ: () => S, U4: () => m, i3: () => O, i7: () => N, lI: () => f, tZ: () => p, zo: () => C });
var i = n(892227),
    a = n(873263),
    r = n(17928),
    s = n(135978),
    l = n(966597),
    o = n(85109),
    d = n(226017),
    c = n(780964),
    _ = n(734057),
    E = n(71393);
n(232835);
var u = n(222823);
n(287809), n(927813);
var A = n(935208),
    I = n(310031),
    T = n(849077),
    h = n(652215);
function S(e) {
    let { messageId: t, channelId: n, guildId: i, ReadStateStore_: a = u.Ay, GuildStore_: r = E.A } = e;
    if (!a.hasUnread(n)) return !1;
    let s = r.getGuild(i);
    if (null == s || null == s.joinedAt) return !1;
    let l = a.ackMessageId(n);
    if (null == l) {
        let e = r.getGuild(i);
        null != e && null != e.joinedAt && (l = A.default.fromTimestamp(e.joinedAt.getTime()));
    }
    return A.default.compare(t, l) > 0;
}
function N(e) {
    let { id: t } = e,
        n = (0, i.default)(new Date(), A.default.extractTimestamp(t));
    return 0 === n ? T.Ur.TODAY : 1 === n ? T.Ur.YESTERDAY : T.Ur.OLDER;
}
function f() {
    let { pathname: e } = (0, a.zy)();
    return e.startsWith(h.BVt.CHANNEL(h.gNP));
}
function p(e) {
    {
        let { openUserSettings: t } = n(858897);
        t(c.X.NOTIFICATIONS_PANEL, { analyticsLocations: e });
    }
}
function m() {
    let e = (0, r.yK)([I.A], () => I.A.getNotifyingChannelIds() ?? []),
        t = (0, r.yK)([u.Ay], () => e.filter((e) => u.Ay.hasUnread(e)), [e]),
        n = (0, r.yK)([s.Ay], () => s.Ay.getSettingsFilteredMentions() ?? []);
    return {
        unreadRecentMentionsCount: (0, r.bG)(
            [u.Ay, _.A, E.A],
            () =>
                n?.filter((e) => {
                    let t = _.A.getBasicChannel(e.channel_id);
                    return (
                        null != t &&
                        S({
                            messageId: e.id,
                            channelId: e.channel_id,
                            guildId: t.guild_id,
                            ReadStateStore_: u.Ay,
                            GuildStore_: E.A,
                        })
                    );
                })?.length ?? 0,
            [n],
        ),
        unreadChannelIds: t,
    };
}
function O() {
    let { enabled: e, inInbox: t } = l.A.useConfig({ location: "NotificationsInboxUtils" }),
        n = (0, r.bG)([o.A], () => o.A.getSavedMessageCount());
    return e && t && (n > 0 || (0, d.A)());
}
function C(e, t) {
    return null != t && e.channelId === t.channelId && A.default.compare(e.id, t.messageId) >= 0;
}
