n.d(t, { A: () => _ });
var i = n(17928),
    s = n(228366),
    l = n(334738),
    r = n(940382),
    a = n(617617),
    o = n(495544),
    d = n(734057),
    h = n(808728),
    u = n(696451),
    c = n(71393),
    g = n(222823),
    C = n(543465),
    p = n(927813),
    y = n(935208),
    f = n(652215);
let I = new Set(),
    A = {},
    v = {};
function S(e, t) {
    let n = A[e];
    null != n &&
        null != t &&
        n.has(t) &&
        C.Ay.isOptInEnabled(e) &&
        !d.A.getChannel(t)?.isThread() &&
        null == g.Ay.ackMessageId(t) &&
        s.h.wait(() =>
            (0, l.ack)(
                t,
                {
                    object: f.ZSU.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
                    objectType: f.AnalyticsObjectTypes.ACK_AUTOMATIC,
                },
                !0,
                !0,
                y.default.atPreviousMillisecond(t),
            ),
        );
}
function w(e) {
    if (null != A[e]) return;
    let t = h.Ay.getChannels(e)[h.I6].map((e) => e.channel.id),
        n = u.Ay.getMember(e, o.default.getId())?.joinedAt;
    if (null == n) return;
    A[e] = new Set();
    let i = new Date(n).getTime();
    0 !== t.length &&
        ((A[e] = new Set(
            t.filter((t) => {
                let n = y.default.extractTimestamp(t);
                return (
                    null == g.Ay.getTrackedAckMessageId(t) &&
                    n > Date.now() - p.A.Millis.WEEK &&
                    n > a.A.getGuildRecentsDismissedAt(e) &&
                    n > i &&
                    !C.Ay.isChannelOrParentOptedIn(e, t)
                );
            }),
        )),
        (v[e] = Date.now()));
}
function m() {
    y.default.keys(A).forEach((e) => {
        let t = A[e];
        A[e] = new Set([...t].filter((t) => !C.Ay.isChannelOrParentOptedIn(e, t)));
    });
}
class E extends i.Ay.Store {
    static displayName = "NewChannelsStore";
    initialize() {
        this.waitFor(o.default, d.A, h.Ay, u.Ay, c.A, g.Ay, C.Ay, a.A), this.syncWith([C.Ay], m);
    }
    getNewChannelIds(e) {
        return null != e && null == A[e] && w(e), null != e ? (A[e] ?? I) : I;
    }
    shouldIndicateNewChannel(e, t) {
        if (null == e) return !1;
        let n = c.A.getGuild(e);
        return (
            null != n &&
            !!n.features.has(f.GuildFeatures.COMMUNITY) &&
            (null != e && null == A[e] && w(e), A[e]?.has(t) && null == g.Ay.getTrackedAckMessageId(t))
        );
    }
}
let _ = new E(s.h, {
    BULK_CLEAR_RECENTS: function (e) {
        let { guildId: t, channelIds: n } = e;
        if (null == A[t]) return !1;
        n.forEach((e) => A[t].delete(e)), 0 === A[t].size && delete A[t];
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        return (
            null != t && (null == A[t] || v[t] < Date.now() - p.A.Millis.HOUR ? (w(t), !0) : (null != n && S(t, n), !1))
        );
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { guildId: t, channelId: n, sidebarType: i } = e;
        return null != t && i === r.PE.VIEW_CHANNEL && (S(t, n), !1);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { guildId: t, baseChannelId: n } = e;
        return null != t && (S(t, n), !1);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete A[t.id];
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        t.isVocal() || ((A[t.guild_id] = A[t.guild_id] ?? new Set()), A[t.guild_id].add(t.id));
    },
});
