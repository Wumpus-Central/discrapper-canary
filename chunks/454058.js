"use strict";
n.d(t, { A: () => b });
var s = n(311907),
    i = n(73153),
    r = n(334738),
    l = n(940382),
    a = n(617617),
    o = n(961350),
    d = n(734057),
    h = n(808728),
    c = n(696451),
    u = n(71393),
    g = n(222823),
    p = n(543465),
    C = n(927813),
    f = n(661191),
    S = n(652215);
let A = new Set(),
    m = {},
    E = {};
function I(e, t) {
    let n = m[e];
    null != n &&
        null != t &&
        n.has(t) &&
        p.Ay.isOptInEnabled(e) &&
        !d.A.getChannel(t)?.isThread() &&
        null == g.Ay.ackMessageId(t) &&
        i.h.wait(() =>
            (0, r.ack)(
                t,
                {
                    object: S.ZSU.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
                    objectType: S.AnalyticsObjectTypes.ACK_AUTOMATIC,
                },
                !0,
                !0,
                f.default.atPreviousMillisecond(t),
            ),
        );
}
function v(e) {
    if (null != m[e]) return;
    let t = h.Ay.getChannels(e)[h.I6].map((e) => e.channel.id),
        n = c.Ay.getMember(e, o.default.getId())?.joinedAt;
    if (null == n) return;
    m[e] = new Set();
    let s = new Date(n).getTime();
    0 !== t.length &&
        ((m[e] = new Set(
            t.filter((t) => {
                let n = f.default.extractTimestamp(t);
                return (
                    null == g.Ay.getTrackedAckMessageId(t) &&
                    n > Date.now() - C.A.Millis.WEEK &&
                    n > a.A.getGuildRecentsDismissedAt(e) &&
                    n > s &&
                    !p.Ay.isChannelOrParentOptedIn(e, t)
                );
            }),
        )),
        (E[e] = Date.now()));
}
function y() {
    f.default.keys(m).forEach((e) => {
        let t = m[e];
        m[e] = new Set([...t].filter((t) => !p.Ay.isChannelOrParentOptedIn(e, t)));
    });
}
class _ extends s.Ay.Store {
    static displayName = "NewChannelsStore";
    initialize() {
        this.waitFor(o.default, d.A, h.Ay, c.Ay, u.A, g.Ay, p.Ay, a.A), this.syncWith([p.Ay], y);
    }
    getNewChannelIds(e) {
        return null != e && null == m[e] && v(e), null != e ? (m[e] ?? A) : A;
    }
    shouldIndicateNewChannel(e, t) {
        if (null == e) return !1;
        let n = u.A.getGuild(e);
        return (
            null != n &&
            !!n.features.has(S.GuildFeatures.COMMUNITY) &&
            (null != e && null == m[e] && v(e), m[e]?.has(t) && null == g.Ay.getTrackedAckMessageId(t))
        );
    }
}
let b = new _(i.h, {
    BULK_CLEAR_RECENTS: function (e) {
        let { guildId: t, channelIds: n } = e;
        if (null == m[t]) return !1;
        n.forEach((e) => m[t].delete(e)), 0 === m[t].size && delete m[t];
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        return (
            null != t && (null == m[t] || E[t] < Date.now() - C.A.Millis.HOUR ? (v(t), !0) : (null != n && I(t, n), !1))
        );
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { guildId: t, channelId: n, sidebarType: s } = e;
        return null != t && s === l.PE.VIEW_CHANNEL && (I(t, n), !1);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { guildId: t, baseChannelId: n } = e;
        return null != t && (I(t, n), !1);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete m[t.id];
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        t.isVocal() || ((m[t.guild_id] = m[t.guild_id] ?? new Set()), m[t.guild_id].add(t.id));
    },
});
