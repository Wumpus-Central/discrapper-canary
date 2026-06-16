"use strict";
n.d(t, { EJ: () => g, U4: () => S, i3: () => y, i7: () => A, lI: () => I, tZ: () => T, zo: () => C });
var i = n(892227),
    r = n(873263),
    s = n(17928),
    a = n(135978),
    o = n(966597),
    l = n(85109),
    u = n(226017),
    c = n(780964),
    d = n(734057),
    _ = n(71393);
n(232835);
var h = n(222823);
n(287809), n(927813);
var f = n(935208),
    p = n(310031),
    E = n(849077),
    m = n(652215);
function g(e) {
    let { messageId: t, channelId: n, guildId: i, ReadStateStore_: r = h.Ay, GuildStore_: s = _.A } = e;
    if (!r.hasUnread(n)) return !1;
    let a = r.ackMessageId(n);
    if (null == a) {
        if (null == i) return !0;
        let e = s.getGuild(i);
        if (null == e || null == e.joinedAt) return !1;
        a = f.default.fromTimestamp(e.joinedAt.getTime());
    }
    return f.default.compare(t, a) > 0;
}
function A(e) {
    let { id: t } = e,
        n = (0, i.default)(new Date(), f.default.extractTimestamp(t));
    return 0 === n ? E.Ur.TODAY : 1 === n ? E.Ur.YESTERDAY : E.Ur.OLDER;
}
function I() {
    let { pathname: e } = (0, r.zy)();
    return e.startsWith(m.BVt.CHANNEL(m.gNP));
}
function T(e) {
    {
        let { openUserSettings: t } = n(766075);
        t(c.X.NOTIFICATIONS_PANEL, { analyticsLocations: e });
    }
}
function S() {
    let e = (0, s.yK)([p.A], () => p.A.getNotifyingChannelIds() ?? []),
        t = (0, s.yK)([h.Ay], () => e.filter((e) => h.Ay.hasUnread(e)), [e]),
        n = (0, s.yK)([a.Ay], () => a.Ay.getSettingsFilteredMentions() ?? []);
    return {
        unreadRecentMentionsCount: (0, s.bG)([h.Ay, d.A, _.A], () => {
            let t =
                    n?.filter((e) => {
                        let t = d.A.getBasicChannel(e.channel_id);
                        return (
                            null != t &&
                            g({
                                messageId: e.id,
                                channelId: e.channel_id,
                                guildId: t.guild_id,
                                ReadStateStore_: h.Ay,
                                GuildStore_: _.A,
                            })
                        );
                    })?.length ?? 0,
                i = 0;
            for (let t of e) {
                let e = d.A.getBasicChannel(t);
                null != e && m.kvI.ALL_DMS.has(e.type) && (i += h.Ay.getMentionCount(t));
            }
            return t + i;
        }, [n, e]),
        unreadChannelIds: t,
    };
}
function y() {
    let { enabled: e, inInbox: t } = o.A.useConfig({ location: "NotificationsInboxUtils" }),
        n = (0, s.bG)([l.A], () => l.A.getSavedMessageCount());
    return e && t && (n > 0 || (0, u.A)());
}
function C(e, t) {
    return null != t && e.channelId === t.channelId && f.default.compare(e.id, t.messageId) >= 0;
}
