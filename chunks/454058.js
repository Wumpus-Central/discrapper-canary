"use strict";
n.d(t, { A: () => y });
var i = n(17928),
    r = n(228366),
    a = n(334738),
    s = n(940382),
    l = n(617617),
    o = n(280450),
    d = n(734057),
    c = n(808728),
    u = n(696451),
    _ = n(71393),
    E = n(568548),
    A = n(543465),
    h = n(927813),
    I = n(935208),
    f = n(652215);
let p = new Set(),
    T = {},
    m = {},
    g = new Set();
function S(e) {
    return _.A.getGuild(e)?.features.has(f.GuildFeatures.COMMUNITY) === !0;
}
function N() {
    for (let e of (g.clear(), _.A.getGuildIds())) S(e) && g.add(e);
    return !1;
}
function C(e, t) {
    let n = T[e];
    null != n &&
        null != t &&
        n.has(t) &&
        A.Ay.isOptInEnabled(e) &&
        !d.A.getChannel(t)?.isThread() &&
        null == E.Ay.ackMessageId(t) &&
        r.h.wait(() =>
            (0, a.ack)(
                t,
                {
                    object: f.ZSU.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
                    objectType: f.AnalyticsObjectTypes.ACK_AUTOMATIC,
                },
                !0,
                !0,
                I.default.atPreviousMillisecond(t),
            ),
        );
}
function R(e) {
    if (null != T[e]) return;
    let t = c.Ay.getChannels(e)[c.I6].map((e) => e.channel.id),
        n = u.Ay.getMember(e, o.default.getId())?.joinedAt;
    if (null == n) return;
    T[e] = new Set();
    let i = new Date(n).getTime();
    0 !== t.length &&
        ((T[e] = new Set(
            t.filter((t) => {
                let n = I.default.extractTimestamp(t);
                return (
                    null == E.Ay.getTrackedAckMessageId(t) &&
                    n > Date.now() - h.A.Millis.WEEK &&
                    n > l.A.getGuildRecentsDismissedAt(e) &&
                    n > i &&
                    !A.Ay.isChannelOrParentOptedIn(e, t)
                );
            }),
        )),
        (m[e] = Date.now()));
}
function O() {
    I.default.keys(T).forEach((e) => {
        let t = T[e];
        T[e] = new Set([...t].filter((t) => !A.Ay.isChannelOrParentOptedIn(e, t)));
    });
}
class L extends i.Ay.Store {
    static displayName = "NewChannelsStore";
    initialize() {
        this.waitFor(o.default, d.A, c.Ay, u.Ay, _.A, E.Ay, A.Ay, l.A), this.syncWith([A.Ay], O);
    }
    getNewChannelIds(e) {
        return null != e && null == T[e] && R(e), null != e ? (T[e] ?? p) : p;
    }
    shouldIndicateNewChannel(e, t) {
        if (null == e) return !1;
        let n = _.A.getGuild(e);
        return (
            null != n &&
            !!n.features.has(f.GuildFeatures.COMMUNITY) &&
            (null != e && null == T[e] && R(e), T[e]?.has(t) && null == E.Ay.getTrackedAckMessageId(t))
        );
    }
}
let y = new L(r.h, {
    BULK_CLEAR_RECENTS: function (e) {
        let { guildId: t, channelIds: n } = e;
        if (null == T[t]) return !1;
        n.forEach((e) => T[t].delete(e)), 0 === T[t].size && delete T[t];
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        return (
            null != t && (null == T[t] || m[t] < Date.now() - h.A.Millis.HOUR ? (R(t), !0) : (null != n && C(t, n), !1))
        );
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { guildId: t, channelId: n, sidebarType: i } = e;
        return null != t && i === s.PE.VIEW_CHANNEL && (C(t, n), !1);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { guildId: t, baseChannelId: n } = e;
        return null != t && (C(t, n), !1);
    },
    CONNECTION_OPEN: N,
    CACHE_LOADED: N,
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return S(t.id) && g.add(t.id), !1;
    },
    GUILD_UPDATE: function (e) {
        let { guild: t } = e,
            n = S(t.id);
        if (n && !g.has(t.id)) {
            g.add(t.id);
            let e = T[t.id],
                n = _.A.getGuild(t.id),
                i = new Set();
            return (
                null != n &&
                    null != e &&
                    [n.rulesChannelId, n.publicUpdatesChannelId].forEach((t) => {
                        null != t && e.has(t) && i.add(t);
                    }),
                (T[t.id] = i),
                (m[t.id] = Date.now()),
                !0
            );
        }
        return n || g.delete(t.id), !1;
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete T[t.id], g.delete(t.id);
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        t.isVocal() || ((T[t.guild_id] = T[t.guild_id] ?? new Set()), T[t.guild_id].add(t.id));
    },
});
