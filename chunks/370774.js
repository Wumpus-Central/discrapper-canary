n.d(t, {
    D: () => I,
    ES: () => N,
    O4: () => S,
    Tj: () => C,
    YH: () => O,
    bl: () => v,
    j4: () => T,
    ux: () => A,
});
var r = n(995638),
    i = n(843611),
    a = n(442837),
    o = n(230711),
    s = n(81643),
    l = n(974814),
    c = n(622822),
    u = n(455199),
    d = n(2818),
    f = n(768943),
    _ = n(175006),
    p = n(592125),
    h = n(430824);
n(375954);
var m = n(306680);
n(594174), n(70956);
var g = n(709054),
    E = n(787879),
    b = n(982183),
    y = n(981631);
function O(e) {
    let { messageId: t, channelId: n, guildId: r, ReadStateStore_: i = m.ZP, GuildStore_: a = h.Z } = e;
    if (!i.hasUnread(n)) return !1;
    let o = a.getGuild(r);
    if (null == o || null == o.joinedAt) return !1;
    let s = i.ackMessageId(n);
    if (null == s) {
        let e = a.getGuild(r);
        null != e && null != e.joinedAt && (s = g.default.fromTimestamp(e.joinedAt.getTime()));
    }
    return g.default.compare(t, s) > 0;
}
function v(e) {
    let { id: t } = e,
        n = (0, r.default)(new Date(), g.default.extractTimestamp(t));
    return 0 === n ? b.KZ.TODAY : 1 === n ? b.KZ.YESTERDAY : b.KZ.OLDER;
}
function I() {
    let { pathname: e } = (0, i.TH)();
    return e.startsWith(y.Z5c.CHANNEL(y.STv));
}
function T(e) {
    o.Z.open(y.oAB.NOTIFICATIONS, void 0, { analyticsLocations: e });
}
function S() {
    let e = (0, a.Wu)([E.Z], () => {
            var e;
            return null != (e = E.Z.getNotifyingChannelIds()) ? e : [];
        }),
        t = (0, a.Wu)([m.ZP], () => e.filter((e) => m.ZP.hasUnread(e)), [e]),
        n = (0, a.Wu)([u.ZP], () => {
            var e;
            return null != (e = u.ZP.getSettingsFilteredMentions()) ? e : [];
        });
    return {
        unreadRecentMentionsCount: (0, a.e7)([m.ZP, p.Z, h.Z], () => {
            var e, t;
            return null !=
                (t =
                    null == n ||
                    null ==
                        (e = n.filter((e) => {
                            let t = p.Z.getBasicChannel(e.channel_id);
                            return (
                                null != t &&
                                O({
                                    messageId: e.id,
                                    channelId: e.channel_id,
                                    guildId: t.guild_id,
                                    ReadStateStore_: m.ZP,
                                    GuildStore_: h.Z,
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
function A() {
    let { enabled: e, inInbox: t } = d.Z.useExperiment({ location: "NotificationsInboxUtils" }),
        n = (0, a.e7)([f.Z], () => f.Z.getSavedMessageCount());
    return e && t && (n > 0 || (0, _.Z)());
}
function C(e, t) {
    return null != t && e.channelId === t.channelId && g.default.compare(e.id, t.messageId) >= 0;
}
function N(e) {
    if ((0, l.H1)({ location: "NotificationsInboxStore" }) && (0, s.sf)()) {
        let t = "nsfw" in e ? e : p.Z.getChannel(e.id);
        return null != t && (0, c.aC)(t);
    }
    return !1;
}
