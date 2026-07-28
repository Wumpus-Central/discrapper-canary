n.d(t, { A: () => L });
var i = n(17928),
    s = n(228366),
    l = n(334738),
    r = n(940382),
    a = n(617617),
    d = n(280450),
    h = n(734057),
    o = n(808728),
    u = n(696451),
    c = n(71393),
    g = n(568548),
    C = n(543465),
    p = n(927813),
    I = n(935208),
    y = n(652215);
let A = new Set(),
    f = {},
    S = {},
    E = new Set();
function _(e) {
    return c.A.getGuild(e)?.features.has(y.GuildFeatures.COMMUNITY) === !0;
}
function v() {
    for (let e of (E.clear(), c.A.getGuildIds())) _(e) && E.add(e);
    return !1;
}
function w(e, t) {
    let n = f[e];
    null != n &&
        null != t &&
        n.has(t) &&
        C.Ay.isOptInEnabled(e) &&
        !h.A.getChannel(t)?.isThread() &&
        null == g.Ay.ackMessageId(t) &&
        s.h.wait(() =>
            (0, l.ack)(
                t,
                {
                    object: y.ZSU.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
                    objectType: y.AnalyticsObjectTypes.ACK_AUTOMATIC,
                },
                !0,
                !0,
                I.default.atPreviousMillisecond(t),
            ),
        );
}
function m(e) {
    if (null != f[e]) return;
    let t = o.Ay.getChannels(e)[o.I6].map((e) => e.channel.id),
        n = u.Ay.getMember(e, d.default.getId())?.joinedAt;
    if (null == n) return;
    f[e] = new Set();
    let i = new Date(n).getTime();
    0 !== t.length &&
        ((f[e] = new Set(
            t.filter((t) => {
                let n = I.default.extractTimestamp(t);
                return (
                    null == g.Ay.getTrackedAckMessageId(t) &&
                    n > Date.now() - p.A.Millis.WEEK &&
                    n > a.A.getGuildRecentsDismissedAt(e) &&
                    n > i &&
                    !C.Ay.isChannelOrParentOptedIn(e, t)
                );
            }),
        )),
        (S[e] = Date.now()));
}
function R() {
    I.default.keys(f).forEach((e) => {
        let t = f[e];
        f[e] = new Set([...t].filter((t) => !C.Ay.isChannelOrParentOptedIn(e, t)));
    });
}
class N extends i.Ay.Store {
    static displayName = "NewChannelsStore";
    initialize() {
        this.waitFor(d.default, h.A, o.Ay, u.Ay, c.A, g.Ay, C.Ay, a.A), this.syncWith([C.Ay], R);
    }
    getNewChannelIds(e) {
        return null != e && null == f[e] && m(e), null != e ? (f[e] ?? A) : A;
    }
    shouldIndicateNewChannel(e, t) {
        if (null == e) return !1;
        let n = c.A.getGuild(e);
        return (
            null != n &&
            !!n.features.has(y.GuildFeatures.COMMUNITY) &&
            (null != e && null == f[e] && m(e), f[e]?.has(t) && null == g.Ay.getTrackedAckMessageId(t))
        );
    }
}
let L = new N(s.h, {
    BULK_CLEAR_RECENTS: function (e) {
        let { guildId: t, channelIds: n } = e;
        if (null == f[t]) return !1;
        n.forEach((e) => f[t].delete(e)), 0 === f[t].size && delete f[t];
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        return (
            null != t && (null == f[t] || S[t] < Date.now() - p.A.Millis.HOUR ? (m(t), !0) : (null != n && w(t, n), !1))
        );
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { guildId: t, channelId: n, sidebarType: i } = e;
        return null != t && i === r.PE.VIEW_CHANNEL && (w(t, n), !1);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { guildId: t, baseChannelId: n } = e;
        return null != t && (w(t, n), !1);
    },
    CONNECTION_OPEN: v,
    CACHE_LOADED: v,
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return _(t.id) && E.add(t.id), !1;
    },
    GUILD_UPDATE: function (e) {
        let { guild: t } = e,
            n = _(t.id);
        if (n && !E.has(t.id)) {
            E.add(t.id);
            let e = f[t.id],
                n = c.A.getGuild(t.id),
                i = new Set();
            return (
                null != n &&
                    null != e &&
                    [n.rulesChannelId, n.publicUpdatesChannelId].forEach((t) => {
                        null != t && e.has(t) && i.add(t);
                    }),
                (f[t.id] = i),
                (S[t.id] = Date.now()),
                !0
            );
        }
        return n || E.delete(t.id), !1;
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete f[t.id], E.delete(t.id);
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        t.isVocal() || ((f[t.guild_id] = f[t.guild_id] ?? new Set()), f[t.guild_id].add(t.id));
    },
});
