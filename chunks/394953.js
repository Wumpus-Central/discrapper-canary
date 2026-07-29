"use strict";
n.d(t, { EJ: () => f, U4: () => g, i3: () => S, i7: () => p, lI: () => T, tZ: () => m, zo: () => N });
var i = n(892227),
    r = n(806163),
    a = n(17928),
    s = n(409686),
    l = n(8506),
    o = n(85109),
    d = n(780964),
    c = n(734057),
    u = n(71393);
n(232835);
var _ = n(568548);
n(287809), n(927813);
var E = n(935208),
    A = n(310031),
    h = n(849077),
    I = n(652215);
function f(e) {
    let { messageId: t, channelId: n, guildId: i, ReadStateStore_: r = _.Ay, GuildStore_: a = u.A } = e;
    if (!r.hasUnread(n)) return !1;
    let s = r.ackMessageId(n);
    if (null == s) {
        if (null == i) return !0;
        let e = a.getGuild(i);
        if (null == e || null == e.joinedAt) return !1;
        s = E.default.fromTimestamp(e.joinedAt.getTime());
    }
    return E.default.compare(t, s) > 0;
}
function p(e) {
    let { id: t } = e,
        n = (0, i.default)(new Date(), E.default.extractTimestamp(t));
    return 0 === n ? h.Ur.TODAY : 1 === n ? h.Ur.YESTERDAY : h.Ur.OLDER;
}
function T() {
    let { pathname: e } = (0, r.zy)();
    return e.startsWith(I.BVt.CHANNEL(I.gNP));
}
function m(e) {
    {
        let { openUserSettings: t } = n(766075);
        t(d.X.NOTIFICATIONS_PANEL, { analyticsLocations: e });
    }
}
function g() {
    let e = (0, a.yK)([A.A], () => A.A.getNotifyingChannelIds() ?? []),
        t = (0, a.yK)([_.Ay], () => e.filter((e) => _.Ay.hasUnread(e)), [e]),
        n = (0, a.yK)([s.Ay], () => s.Ay.getSettingsFilteredMentions() ?? []);
    return {
        unreadRecentMentionsCount: (0, a.bG)([_.Ay, c.A, u.A], () => {
            let t =
                    n?.filter((e) => {
                        let t = c.A.getBasicChannel(e.channel_id);
                        return (
                            null != t &&
                            f({
                                messageId: e.id,
                                channelId: e.channel_id,
                                guildId: t.guild_id,
                                ReadStateStore_: _.Ay,
                                GuildStore_: u.A,
                            })
                        );
                    })?.length ?? 0,
                i = 0;
            for (let t of e) {
                let e = c.A.getBasicChannel(t);
                null != e && I.kvI.ALL_DMS.has(e.type) && (i += _.Ay.getMentionCount(t));
            }
            return t + i;
        }, [n, e]),
        unreadChannelIds: t,
    };
}
function S() {
    let e = (0, l.jv)("NotificationsInboxUtils"),
        t = (0, l.lA)("NotificationsInboxUtils"),
        n = (0, a.bG)([o.A], () => o.A.getSavedMessageCount());
    return e && (n > 0 || t);
}
function N(e, t) {
    return null != t && e.channelId === t.channelId && E.default.compare(e.id, t.messageId) >= 0;
}
