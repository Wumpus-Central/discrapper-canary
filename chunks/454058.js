n.d(t, { A: () => D });
var i = n(17928),
    r = n(73153),
    a = n(334738),
    s = n(874850),
    l = n(940382),
    o = n(617617),
    d = n(280450),
    c = n(734057),
    u = n(808728),
    _ = n(696451),
    E = n(71393),
    A = n(573163),
    h = n(543465),
    f = n(927813),
    I = n(935208),
    p = n(652215);
let m = new Set(),
    T = {},
    g = {},
    S = new Set();
function N(e) {
    return E.A.getGuild(e)?.features.has(p.GuildFeatures.COMMUNITY) === !0;
}
function C() {
    for (let e of (S.clear(), E.A.getGuildIds())) N(e) && S.add(e);
    return !1;
}
function O(e, t) {
    let n = T[e];
    null != n &&
        null != t &&
        n.has(t) &&
        N(e) &&
        !c.A.getChannel(t)?.isThread() &&
        null == A.Ay.ackMessageId(t) &&
        0 === A.Ay.getMentionCount(t) &&
        (0, a.ack)(
            t,
            { object: p.ZSU.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED, objectType: p.AnalyticsObjectTypes.ACK_AUTOMATIC },
            !0,
            !0,
            I.default.atPreviousMillisecond(t),
        );
}
function R(e) {
    if (null != T[e]) return;
    let t = u.Ay.getChannels(e)[u.I6].map((e) => e.channel.id),
        n = _.Ay.getMember(e, d.default.getId())?.joinedAt;
    if (null == n) return;
    T[e] = new Set();
    let i = new Date(n).getTime();
    0 !== t.length &&
        ((T[e] = new Set(
            t.filter((t) => {
                let n = I.default.extractTimestamp(t);
                return (
                    null == A.Ay.getTrackedAckMessageId(t) &&
                    n > Date.now() - f.A.Millis.WEEK &&
                    n > o.A.getGuildRecentsDismissedAt(e) &&
                    n > i &&
                    !h.Ay.isChannelOrParentOptedIn(e, t)
                );
            }),
        )),
        (g[e] = Date.now()));
}
function L() {
    I.default.keys(T).forEach((e) => {
        let t = T[e];
        T[e] = new Set([...t].filter((t) => !h.Ay.isChannelOrParentOptedIn(e, t)));
    });
}
class y extends i.Ay.Store {
    static displayName = "NewChannelsStore";
    initialize() {
        (this.waitFor(d.default, c.A, u.Ay, _.Ay, E.A, A.Ay, h.Ay, o.A), this.syncWith([h.Ay], L));
    }
    getNewChannelIds(e) {
        null != e && null == T[e] && R(e);
        let t = null != e ? (T[e] ?? m) : m;
        return (0, s.EV)() ? t : new Set([...t].filter((e) => (0, s.G3)(c.A.getChannel(e))));
    }
    shouldIndicateNewChannel(e, t) {
        if (null == e) return !1;
        let n = E.A.getGuild(e);
        return (
            null != n &&
            !!n.features.has(p.GuildFeatures.COMMUNITY) &&
            (null != e && null == T[e] && R(e),
            !!T[e]?.has(t) && !!(0, s.G3)(c.A.getChannel(t)) && null == A.Ay.getTrackedAckMessageId(t))
        );
    }
}
let D = new y(r.h, {
    BULK_CLEAR_RECENTS: function (e) {
        let { guildId: t, channelIds: n } = e;
        if (null == T[t]) return !1;
        (n.forEach((e) => T[t].delete(e)), 0 === T[t].size && delete T[t]);
    },
    CHANNEL_ACK: () => !0,
    CURRENT_USER_UPDATE: () => !0,
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (null == t) return !1;
        let i = T[t],
            r = !1;
        return ((null == i || g[t] < Date.now() - f.A.Millis.HOUR) && (R(t), (r = !0)), null != n && O(t, n), r);
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { guildId: t, channelId: n, sidebarType: i } = e;
        return null != t && i === l.PE.VIEW_CHANNEL && (O(t, n), !1);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { guildId: t, baseChannelId: n } = e;
        return null != t && (O(t, n), !1);
    },
    CONNECTION_OPEN: C,
    CACHE_LOADED: C,
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return (N(t.id) && S.add(t.id), !1);
    },
    GUILD_UPDATE: function (e) {
        let { guild: t } = e,
            n = N(t.id);
        if (n && !S.has(t.id)) {
            S.add(t.id);
            let e = T[t.id],
                n = E.A.getGuild(t.id),
                i = new Set();
            return (
                null != n &&
                    null != e &&
                    [n.rulesChannelId, n.publicUpdatesChannelId].forEach((t) => {
                        null != t && e.has(t) && i.add(t);
                    }),
                (T[t.id] = i),
                (g[t.id] = Date.now()),
                !0
            );
        }
        return (n || S.delete(t.id), !1);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        (delete T[t.id], S.delete(t.id));
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        t.isVocal() || ((T[t.guild_id] = T[t.guild_id] ?? new Set()), T[t.guild_id].add(t.id));
    },
});
