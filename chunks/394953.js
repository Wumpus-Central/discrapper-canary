"use strict";
n.d(t, { EJ: () => p, U4: () => S, i3: () => N, i7: () => T, lI: () => m, tZ: () => g, zo: () => C });
var i = n(892227),
    r = n(873263),
    a = n(17928),
    s = n(135978),
    l = n(966597),
    o = n(85109),
    d = n(226017),
    c = n(780964),
    u = n(734057),
    _ = n(71393);
n(232835);
var E = n(568548);
n(287809), n(927813);
var A = n(935208),
    h = n(310031),
    I = n(849077),
    f = n(652215);
function p(e) {
    let { messageId: t, channelId: n, guildId: i, ReadStateStore_: r = E.Ay, GuildStore_: a = _.A } = e;
    if (!r.hasUnread(n)) return !1;
    let s = r.ackMessageId(n);
    if (null == s) {
        if (null == i) return !0;
        let e = a.getGuild(i);
        if (null == e || null == e.joinedAt) return !1;
        s = A.default.fromTimestamp(e.joinedAt.getTime());
    }
    return A.default.compare(t, s) > 0;
}
function T(e) {
    let { id: t } = e,
        n = (0, i.default)(new Date(), A.default.extractTimestamp(t));
    return 0 === n ? I.Ur.TODAY : 1 === n ? I.Ur.YESTERDAY : I.Ur.OLDER;
}
function m() {
    let { pathname: e } = (0, r.zy)();
    return e.startsWith(f.BVt.CHANNEL(f.gNP));
}
function g(e) {
    {
        let { openUserSettings: t } = n(766075);
        t(c.X.NOTIFICATIONS_PANEL, { analyticsLocations: e });
    }
}
function S() {
    let e = (0, a.yK)([h.A], () => h.A.getNotifyingChannelIds() ?? []),
        t = (0, a.yK)([E.Ay], () => e.filter((e) => E.Ay.hasUnread(e)), [e]),
        n = (0, a.yK)([s.Ay], () => s.Ay.getSettingsFilteredMentions() ?? []);
    return {
        unreadRecentMentionsCount: (0, a.bG)([E.Ay, u.A, _.A], () => {
            let t =
                    n?.filter((e) => {
                        let t = u.A.getBasicChannel(e.channel_id);
                        return (
                            null != t &&
                            p({
                                messageId: e.id,
                                channelId: e.channel_id,
                                guildId: t.guild_id,
                                ReadStateStore_: E.Ay,
                                GuildStore_: _.A,
                            })
                        );
                    })?.length ?? 0,
                i = 0;
            for (let t of e) {
                let e = u.A.getBasicChannel(t);
                null != e && f.kvI.ALL_DMS.has(e.type) && (i += E.Ay.getMentionCount(t));
            }
            return t + i;
        }, [n, e]),
        unreadChannelIds: t,
    };
}
function N() {
    let { enabled: e } = l.A.useConfig({ location: "NotificationsInboxUtils" }),
        t = (0, a.bG)([o.A], () => o.A.getSavedMessageCount());
    return e && (t > 0 || (0, d.A)());
}
function C(e, t) {
    return null != t && e.channelId === t.channelId && A.default.compare(e.id, t.messageId) >= 0;
}
