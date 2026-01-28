n.d(t, {
    EJ: () => E,
    U4: () => v,
    i3: () => A,
    i7: () => y,
    lI: () => b,
    tZ: () => O,
    zo: () => I,
});
var r = n(892227),
    i = n(960488),
    a = n(311907),
    o = n(187508),
    s = n(966597),
    l = n(85109),
    c = n(226017),
    u = n(780964),
    d = n(734057),
    f = n(71393);
n(320501);
var p = n(222823);
n(287809), n(927813);
var _ = n(661191),
    h = n(320697),
    m = n(849077),
    g = n(652215);

function E(e) {
    let { messageId: t, channelId: n, guildId: r, ReadStateStore_: i = p.Ay, GuildStore_: a = f.A } = e;
    if (!i.hasUnread(n)) return !1;
    let o = a.getGuild(r);
    if (null == o || null == o.joinedAt) return !1;
    let s = i.ackMessageId(n);
    if (null == s) {
        let e = a.getGuild(r);
        null != e && null != e.joinedAt && (s = _.default.fromTimestamp(e.joinedAt.getTime()));
    }
    return _.default.compare(t, s) > 0;
}

function y(e) {
    let { id: t } = e,
        n = (0, r.default)(new Date(), _.default.extractTimestamp(t));
    return 0 === n ? m.Ur.TODAY : 1 === n ? m.Ur.YESTERDAY : m.Ur.OLDER;
}

function b() {
    let { pathname: e } = (0, i.zy)();
    return e.startsWith(g.BVt.CHANNEL(g.gNP));
}

function O(e) {
    {
        let { openUserSettings: t } = n(840065);
        t(u.X.NOTIFICATIONS_PANEL, {
            section: g.nc_.NOTIFICATIONS,
            analyticsLocations: e,
        });
    }
}

function v() {
    let e = (0, a.yK)([h.A], () => {
            var e;
            return null != (e = h.A.getNotifyingChannelIds()) ? e : [];
        }),
        t = (0, a.yK)([p.Ay], () => e.filter((e) => p.Ay.hasUnread(e)), [e]),
        n = (0, a.yK)([o.Ay], () => {
            var e;
            return null != (e = o.Ay.getSettingsFilteredMentions()) ? e : [];
        });
    return {
        unreadRecentMentionsCount: (0, a.bG)([p.Ay, d.A, f.A], () => {
            var e, t;
            return null !=
                (e =
                    null == n ||
                    null ==
                        (t = n.filter((e) => {
                            let t = d.A.getBasicChannel(e.channel_id);
                            return (
                                null != t &&
                                E({
                                    messageId: e.id,
                                    channelId: e.channel_id,
                                    guildId: t.guild_id,
                                    ReadStateStore_: p.Ay,
                                    GuildStore_: f.A,
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

function A() {
    let { enabled: e, inInbox: t } = s.A.useExperiment({
            location: "NotificationsInboxUtils",
        }),
        n = (0, a.bG)([l.A], () => l.A.getSavedMessageCount());
    return e && t && (n > 0 || (0, c.A)());
}

function I(e, t) {
    return null != t && e.channelId === t.channelId && _.default.compare(e.id, t.messageId) >= 0;
}
