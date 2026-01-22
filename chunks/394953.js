n.d(t, {
    EJ: () => b,
    U4: () => v,
    i3: () => S,
    i7: () => y,
    lI: () => O,
    tZ: () => A,
    zo: () => I,
});
var r = n(892227),
    i = n(960488),
    a = n(311907),
    s = n(187508),
    o = n(966597),
    l = n(85109),
    c = n(226017),
    u = n(780964),
    d = n(358776),
    f = n(734057),
    p = n(71393);
n(320501);
var _ = n(222823);
n(287809), n(927813);
var h = n(661191),
    m = n(320697),
    g = n(849077),
    E = n(652215);
function b(e) {
    let { messageId: t, channelId: n, guildId: r, ReadStateStore_: i = _.Ay, GuildStore_: a = p.A } = e;
    if (!i.hasUnread(n)) return !1;
    let s = a.getGuild(r);
    if (null == s || null == s.joinedAt) return !1;
    let o = i.ackMessageId(n);
    if (null == o) {
        let e = a.getGuild(r);
        null != e && null != e.joinedAt && (o = h.default.fromTimestamp(e.joinedAt.getTime()));
    }
    return h.default.compare(t, o) > 0;
}
function y(e) {
    let { id: t } = e,
        n = (0, r.default)(new Date(), h.default.extractTimestamp(t));
    return 0 === n ? g.Ur.TODAY : 1 === n ? g.Ur.YESTERDAY : g.Ur.OLDER;
}
function O() {
    let { pathname: e } = (0, i.zy)();
    return e.startsWith(E.BVt.CHANNEL(E.gNP));
}
function A(e) {
    {
        let { openUserSettings: t } = n(840065);
        t((0, d.E7)("openNotificationSettings") ? u.X.NOTIFICATIONS_PANEL : u.X.LEGACY_NOTIFICATIONS_SETTINGS_PANEL, {
            section: E.nc_.NOTIFICATIONS,
            analyticsLocations: e,
        });
    }
}
function v() {
    let e = (0, a.yK)([m.A], () => {
            var e;
            return null != (e = m.A.getNotifyingChannelIds()) ? e : [];
        }),
        t = (0, a.yK)([_.Ay], () => e.filter((e) => _.Ay.hasUnread(e)), [e]),
        n = (0, a.yK)([s.Ay], () => {
            var e;
            return null != (e = s.Ay.getSettingsFilteredMentions()) ? e : [];
        });
    return {
        unreadRecentMentionsCount: (0, a.bG)([_.Ay, f.A, p.A], () => {
            var e, t;
            return null !=
                (e =
                    null == n ||
                    null ==
                        (t = n.filter((e) => {
                            let t = f.A.getBasicChannel(e.channel_id);
                            return (
                                null != t &&
                                b({
                                    messageId: e.id,
                                    channelId: e.channel_id,
                                    guildId: t.guild_id,
                                    ReadStateStore_: _.Ay,
                                    GuildStore_: p.A,
                                })
                            );
                        }))
                        ? void 0
                        : t.length)
                ? e
                : 0;
        }, [n]),
        unreadChannelIds: t,
    };
}
function S() {
    let { enabled: e, inInbox: t } = o.A.useExperiment({ location: "NotificationsInboxUtils" }),
        n = (0, a.bG)([l.A], () => l.A.getSavedMessageCount());
    return e && t && (n > 0 || (0, c.A)());
}
function I(e, t) {
    return null != t && e.channelId === t.channelId && h.default.compare(e.id, t.messageId) >= 0;
}
