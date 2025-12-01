n.d(t, {
    D: () => O,
    O4: () => S,
    Tj: () => T,
    YH: () => b,
    bl: () => y,
    j4: () => v,
    ux: () => I,
});
var r = n(995638),
    i = n(828700),
    a = n(442837),
    o = n(455199),
    s = n(2818),
    l = n(768943),
    c = n(175006),
    u = n(313789),
    d = n(526665),
    f = n(592125),
    p = n(430824);
n(375954);
var _ = n(306680);
n(594174), n(70956);
var m = n(709054),
    h = n(787879),
    g = n(982183),
    E = n(981631);
function b(e) {
    let { messageId: t, channelId: n, guildId: r, ReadStateStore_: i = _.ZP, GuildStore_: a = p.Z } = e;
    if (!i.hasUnread(n)) return !1;
    let o = a.getGuild(r);
    if (null == o || null == o.joinedAt) return !1;
    let s = i.ackMessageId(n);
    if (null == s) {
        let e = a.getGuild(r);
        null != e && null != e.joinedAt && (s = m.default.fromTimestamp(e.joinedAt.getTime()));
    }
    return m.default.compare(t, s) > 0;
}
function y(e) {
    let { id: t } = e,
        n = (0, r.default)(new Date(), m.default.extractTimestamp(t));
    return 0 === n ? g.KZ.TODAY : 1 === n ? g.KZ.YESTERDAY : g.KZ.OLDER;
}
function O() {
    let { pathname: e } = (0, i.TH)();
    return e.startsWith(E.Z5c.CHANNEL(E.STv));
}
function v(e) {
    {
        let { openUserSettings: t } = n(518596);
        t((0, d.KV)("openNotificationSettings") ? u.n.NOTIFICATIONS_PANEL : u.n.LEGACY_NOTIFICATIONS_SETTINGS_PANEL, {
            section: E.oAB.NOTIFICATIONS,
            analyticsLocations: e,
        });
    }
}
function S() {
    let e = (0, a.Wu)([h.Z], () => {
            var e;
            return null != (e = h.Z.getNotifyingChannelIds()) ? e : [];
        }),
        t = (0, a.Wu)([_.ZP], () => e.filter((e) => _.ZP.hasUnread(e)), [e]),
        n = (0, a.Wu)([o.ZP], () => {
            var e;
            return null != (e = o.ZP.getSettingsFilteredMentions()) ? e : [];
        });
    return {
        unreadRecentMentionsCount: (0, a.e7)([_.ZP, f.Z, p.Z], () => {
            var e, t;
            return null !=
                (t =
                    null == n ||
                    null ==
                        (e = n.filter((e) => {
                            let t = f.Z.getBasicChannel(e.channel_id);
                            return (
                                null != t &&
                                b({
                                    messageId: e.id,
                                    channelId: e.channel_id,
                                    guildId: t.guild_id,
                                    ReadStateStore_: _.ZP,
                                    GuildStore_: p.Z,
                                })
                            );
                        }))
                        ? void 0
                        : e.length)
                ? t
                : 0;
        }, [n]),
        unreadChannelIds: t,
    };
}
function I() {
    let { enabled: e, inInbox: t } = s.Z.useExperiment({ location: "NotificationsInboxUtils" }),
        n = (0, a.e7)([l.Z], () => l.Z.getSavedMessageCount());
    return e && t && (n > 0 || (0, c.Z)());
}
function T(e, t) {
    return null != t && e.channelId === t.channelId && m.default.compare(e.id, t.messageId) >= 0;
}
