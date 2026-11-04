var i = n(892227),
    r = n(806163),
    a = n(855986),
    s = n(849171),
    l = n(780964),
    o = n(734057),
    d = n(71393);
n(596344);
var c = n(218461);
(n(287809), n(927813));
var u = n(811091),
    _ = n(398269),
    E = n(849077),
    A = n(652215);
function h(e) {
    let { messageId: t, channelId: n, guildId: i, ReadStateStore_: r = c.Ay, GuildStore_: a = d.A } = e;
    if (!r.hasUnread(n)) return !1;
    let s = r.ackMessageId(n);
    if (null == s) {
        if (null == i) return !0;
        let e = a.getGuild(i);
        if (null == e || null == e.joinedAt) return !1;
        s = u.default.fromTimestamp(e.joinedAt.getTime());
    }
    return u.default.compare(t, s) > 0;
}
n.d(
    t,
    {},
    {
        EJ: h,
        U4: function () {
            let e = (0, a.yK)([_.A], () => _.A.getNotifyingChannelIds() ?? []),
                t = (0, a.yK)([c.Ay], () => e.filter((e) => c.Ay.hasUnread(e)), [e]),
                n = (0, a.yK)([s.Ay], () => s.Ay.getSettingsFilteredMentions() ?? []);
            return {
                unreadRecentMentionsCount: (0, a.bG)(
                    [c.Ay, o.A, d.A],
                    () => {
                        let t =
                                n?.filter((e) => {
                                    let t = o.A.getBasicChannel(e.channel_id);
                                    return (
                                        null != t &&
                                        h({
                                            messageId: e.id,
                                            channelId: e.channel_id,
                                            guildId: t.guild_id,
                                            ReadStateStore_: c.Ay,
                                            GuildStore_: d.A,
                                        })
                                    );
                                })?.length ?? 0,
                            i = 0;
                        for (let t of e) {
                            let e = o.A.getBasicChannel(t);
                            null != e && A.kvI.ALL_DMS.has(e.type) && (i += c.Ay.getMentionCount(t));
                        }
                        return t + i;
                    },
                    [n, e],
                ),
                unreadChannelIds: t,
            };
        },
        i7: function (e) {
            let { id: t } = e,
                n = (0, i.default)(new Date(), u.default.extractTimestamp(t));
            return 0 === n ? E.Ur.TODAY : 1 === n ? E.Ur.YESTERDAY : E.Ur.OLDER;
        },
        lI: function () {
            let { pathname: e } = (0, r.zy)();
            return e.startsWith(A.BVt.CHANNEL(A.gNP));
        },
        tZ: function (e) {
            {
                let { openUserSettings: t } = n(766075);
                t(l.X.NOTIFICATIONS_PANEL, { analyticsLocations: e });
            }
        },
    },
);
