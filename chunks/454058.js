n.d(t, { A: () => O });
var l = n(17928),
    i = n(228366),
    s = n(334738),
    a = n(940382),
    r = n(617617),
    d = n(495544),
    u = n(734057),
    o = n(808728),
    c = n(696451),
    _ = n(71393),
    h = n(222823),
    A = n(543465),
    E = n(927813),
    S = n(935208),
    g = n(652215);
let I = new Set(),
    C = {},
    N = {};
function p(e, t) {
    let n = C[e];
    null != n &&
        null != t &&
        n.has(t) &&
        A.Ay.isOptInEnabled(e) &&
        !u.A.getChannel(t)?.isThread() &&
        null == h.Ay.ackMessageId(t) &&
        i.h.wait(() =>
            (0, s.ack)(
                t,
                {
                    object: g.ZSU.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
                    objectType: g.AnalyticsObjectTypes.ACK_AUTOMATIC,
                },
                !0,
                !0,
                S.default.atPreviousMillisecond(t),
            ),
        );
}
function y(e) {
    if (null != C[e]) return;
    let t = o.Ay.getChannels(e)[o.I6].map((e) => e.channel.id),
        n = c.Ay.getMember(e, d.default.getId())?.joinedAt;
    if (null == n) return;
    C[e] = new Set();
    let l = new Date(n).getTime();
    0 !== t.length &&
        ((C[e] = new Set(
            t.filter((t) => {
                let n = S.default.extractTimestamp(t);
                return (
                    null == h.Ay.getTrackedAckMessageId(t) &&
                    n > Date.now() - E.A.Millis.WEEK &&
                    n > r.A.getGuildRecentsDismissedAt(e) &&
                    n > l &&
                    !A.Ay.isChannelOrParentOptedIn(e, t)
                );
            }),
        )),
        (N[e] = Date.now()));
}
function w() {
    S.default.keys(C).forEach((e) => {
        let t = C[e];
        C[e] = new Set([...t].filter((t) => !A.Ay.isChannelOrParentOptedIn(e, t)));
    });
}
class L extends l.Ay.Store {
    static displayName = "NewChannelsStore";
    initialize() {
        this.waitFor(d.default, u.A, o.Ay, c.Ay, _.A, h.Ay, A.Ay, r.A), this.syncWith([A.Ay], w);
    }
    getNewChannelIds(e) {
        return null != e && null == C[e] && y(e), null != e ? (C[e] ?? I) : I;
    }
    shouldIndicateNewChannel(e, t) {
        if (null == e) return !1;
        let n = _.A.getGuild(e);
        return (
            null != n &&
            !!n.features.has(g.GuildFeatures.COMMUNITY) &&
            (null != e && null == C[e] && y(e), C[e]?.has(t) && null == h.Ay.getTrackedAckMessageId(t))
        );
    }
}
let O = new L(i.h, {
    BULK_CLEAR_RECENTS: function (e) {
        let { guildId: t, channelIds: n } = e;
        if (null == C[t]) return !1;
        n.forEach((e) => C[t].delete(e)), 0 === C[t].size && delete C[t];
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        return (
            null != t && (null == C[t] || N[t] < Date.now() - E.A.Millis.HOUR ? (y(t), !0) : (null != n && p(t, n), !1))
        );
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { guildId: t, channelId: n, sidebarType: l } = e;
        return null != t && l === a.PE.VIEW_CHANNEL && (p(t, n), !1);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { guildId: t, baseChannelId: n } = e;
        return null != t && (p(t, n), !1);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete C[t.id];
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        t.isVocal() || ((C[t.guild_id] = C[t.guild_id] ?? new Set()), C[t.guild_id].add(t.id));
    },
});
