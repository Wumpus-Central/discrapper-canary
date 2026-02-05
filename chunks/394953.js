"use strict";
n.d(t, { EJ: () => E, U4: () => y, i3: () => S, i7: () => A, lI: () => I, tZ: () => T, zo: () => v });
var r = n(892227),
    i = n(960488),
    a = n(311907),
    s = n(187508),
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
    g = n(652215);
function E(e) {
    let { messageId: t, channelId: n, guildId: r, ReadStateStore_: i = f.Ay, GuildStore_: a = _.A } = e;
    if (!i.hasUnread(n)) return !1;
    let s = a.getGuild(r);
    if (null == s || null == s.joinedAt) return !1;
    let o = i.ackMessageId(n);
    if (null == o) {
        let e = a.getGuild(r);
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
    return e.startsWith(g.BVt.CHANNEL(g.gNP));
}
function T(e) {
    {
        let { openUserSettings: t } = n(840065);
        t(c.X.NOTIFICATIONS_PANEL, { section: g.nc_.NOTIFICATIONS, analyticsLocations: e });
    }
}
function y() {
    let e = (0, a.yK)([h.A], () => h.A.getNotifyingChannelIds() ?? []),
        t = (0, a.yK)([f.Ay], () => e.filter((e) => f.Ay.hasUnread(e)), [e]),
        n = (0, a.yK)([s.Ay], () => s.Ay.getSettingsFilteredMentions() ?? []);
    return {
        unreadRecentMentionsCount: (0, a.bG)(
            [f.Ay, d.A, _.A],
            () =>
                n?.filter((e) => {
                    let t = d.A.getBasicChannel(e.channel_id);
                    return (
                        null != t &&
                        E({
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
function S() {
    let { enabled: e, inInbox: t } = o.A.useExperiment({ location: "NotificationsInboxUtils" }),
        n = (0, a.bG)([l.A], () => l.A.getSavedMessageCount());
    return e && t && (n > 0 || (0, u.A)());
}
function v(e, t) {
    return null != t && e.channelId === t.channelId && p.default.compare(e.id, t.messageId) >= 0;
}
