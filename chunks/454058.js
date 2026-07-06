"use strict";
n.d(t, { A: () => y });
var i = n(17928),
    r = n(228366),
    s = n(334738),
    a = n(940382),
    o = n(617617),
    l = n(280450),
    u = n(734057),
    c = n(808728),
    d = n(696451),
    _ = n(71393),
    h = n(568548),
    f = n(543465),
    E = n(927813),
    p = n(935208),
    m = n(652215);
let g = new Set(),
    A = {},
    I = {};
function T(e, t) {
    let n = A[e];
    null != n &&
        null != t &&
        n.has(t) &&
        f.Ay.isOptInEnabled(e) &&
        !u.A.getChannel(t)?.isThread() &&
        null == h.Ay.ackMessageId(t) &&
        r.h.wait(() =>
            (0, s.ack)(
                t,
                {
                    object: m.ZSU.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
                    objectType: m.AnalyticsObjectTypes.ACK_AUTOMATIC,
                },
                !0,
                !0,
                p.default.atPreviousMillisecond(t),
            ),
        );
}
function S(e) {
    if (null != A[e]) return;
    let t = c.Ay.getChannels(e)[c.I6].map((e) => e.channel.id),
        n = d.Ay.getMember(e, l.default.getId())?.joinedAt;
    if (null == n) return;
    A[e] = new Set();
    let i = new Date(n).getTime();
    0 !== t.length &&
        ((A[e] = new Set(
            t.filter((t) => {
                let n = p.default.extractTimestamp(t);
                return (
                    null == h.Ay.getTrackedAckMessageId(t) &&
                    n > Date.now() - E.A.Millis.WEEK &&
                    n > o.A.getGuildRecentsDismissedAt(e) &&
                    n > i &&
                    !f.Ay.isChannelOrParentOptedIn(e, t)
                );
            }),
        )),
        (I[e] = Date.now()));
}
function N() {
    p.default.keys(A).forEach((e) => {
        let t = A[e];
        A[e] = new Set([...t].filter((t) => !f.Ay.isChannelOrParentOptedIn(e, t)));
    });
}
class C extends i.Ay.Store {
    static displayName = "NewChannelsStore";
    initialize() {
        this.waitFor(l.default, u.A, c.Ay, d.Ay, _.A, h.Ay, f.Ay, o.A), this.syncWith([f.Ay], N);
    }
    getNewChannelIds(e) {
        return null != e && null == A[e] && S(e), null != e ? (A[e] ?? g) : g;
    }
    shouldIndicateNewChannel(e, t) {
        if (null == e) return !1;
        let n = _.A.getGuild(e);
        return (
            null != n &&
            !!n.features.has(m.GuildFeatures.COMMUNITY) &&
            (null != e && null == A[e] && S(e), A[e]?.has(t) && null == h.Ay.getTrackedAckMessageId(t))
        );
    }
}
let y = new C(r.h, {
    BULK_CLEAR_RECENTS: function (e) {
        let { guildId: t, channelIds: n } = e;
        if (null == A[t]) return !1;
        n.forEach((e) => A[t].delete(e)), 0 === A[t].size && delete A[t];
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        return (
            null != t && (null == A[t] || I[t] < Date.now() - E.A.Millis.HOUR ? (S(t), !0) : (null != n && T(t, n), !1))
        );
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { guildId: t, channelId: n, sidebarType: i } = e;
        return null != t && i === a.PE.VIEW_CHANNEL && (T(t, n), !1);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { guildId: t, baseChannelId: n } = e;
        return null != t && (T(t, n), !1);
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
