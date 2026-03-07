"use strict";
n.d(t, { EJ: () => g, U4: () => S, i3: () => y, i7: () => A, lI: () => I, tZ: () => T, zo: () => v });
var r = n(892227),
    i = n(873263),
    s = n(311907),
    a = n(187508),
    o = n(966597),
    l = n(85109),
    u = n(226017),
    c = n(780964),
    d = n(734057),
    _ = n(71393);
n(320501);
var f = n(222823);
n(287809), n(927813);
var p = n(661191),
    h = n(320697),
    m = n(849077),
    E = n(652215);
function g(e) {
    let { messageId: t, channelId: n, guildId: r, ReadStateStore_: i = f.Ay, GuildStore_: s = _.A } = e;
    if (!i.hasUnread(n)) return !1;
    let a = s.getGuild(r);
    if (null == a || null == a.joinedAt) return !1;
    let o = i.ackMessageId(n);
    if (null == o) {
        let e = s.getGuild(r);
        null != e && null != e.joinedAt && (o = p.default.fromTimestamp(e.joinedAt.getTime()));
    }
    return p.default.compare(t, o) > 0;
}
function A(e) {
    let { id: t } = e,
        n = (0, r.default)(new Date(), p.default.extractTimestamp(t));
    return 0 === n ? m.Ur.TODAY : 1 === n ? m.Ur.YESTERDAY : m.Ur.OLDER;
}
function I() {
    let { pathname: e } = (0, i.zy)();
    return e.startsWith(E.BVt.CHANNEL(E.gNP));
}
function T(e) {
    {
        let { openUserSettings: t } = n(840065);
        t(c.X.NOTIFICATIONS_PANEL, { section: E.nc_.NOTIFICATIONS, analyticsLocations: e });
    }
}
function S() {
    let e = (0, s.yK)([h.A], () => h.A.getNotifyingChannelIds() ?? []),
        t = (0, s.yK)([f.Ay], () => e.filter((e) => f.Ay.hasUnread(e)), [e]),
        n = (0, s.yK)([a.Ay], () => a.Ay.getSettingsFilteredMentions() ?? []);
    return {
        unreadRecentMentionsCount: (0, s.bG)(
            [f.Ay, d.A, _.A],
            () =>
                n?.filter((e) => {
                    let t = d.A.getBasicChannel(e.channel_id);
                    return (
                        null != t &&
                        g({
                            messageId: e.id,
                            channelId: e.channel_id,
                            guildId: t.guild_id,
                            ReadStateStore_: f.Ay,
                            GuildStore_: _.A,
                        })
                    );
                })?.length ?? 0,
            [n],
        ),
        unreadChannelIds: t,
    };
}
function y() {
    let { enabled: e, inInbox: t } = o.A.useConfig({ location: "NotificationsInboxUtils" }),
        n = (0, s.bG)([l.A], () => l.A.getSavedMessageCount());
    return e && t && (n > 0 || (0, u.A)());
}
function v(e, t) {
    return null != t && e.channelId === t.channelId && p.default.compare(e.id, t.messageId) >= 0;
}
