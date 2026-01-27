n.d(t, {
    A: () => w,
}),
    n(896048);
var i,
    s,
    r = n(311907),
    l = n(73153),
    o = n(334738),
    a = n(940382),
    d = n(617617),
    u = n(961350),
    c = n(734057),
    h = n(808728),
    g = n(696451),
    p = n(71393),
    f = n(222823),
    C = n(543465),
    v = n(927813),
    y = n(661191),
    b = n(652215);
let S = new Set(),
    m = {},
    A = {};

function E(e, t) {
    let n = m[e];
    if (null != n && null != t && n.has(t)) {
        var i;
        !C.Ay.isOptInEnabled(e) ||
            (null == (i = c.A.getChannel(t)) ? void 0 : i.isThread()) ||
            null != f.Ay.ackMessageId(t) ||
            l.h.wait(() =>
                (0, o.ack)(
                    t,
                    {
                        object: b.ZSU.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
                        objectType: b.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    !0,
                    !0,
                    y.default.atPreviousMillisecond(t),
                ),
            );
    }
}

function I(e) {
    var t;
    if (null != m[e]) return;
    let n = h.Ay.getChannels(e)[h.I6].map((e) => e.channel.id),
        i = null == (t = g.Ay.getMember(e, u.default.getId())) ? void 0 : t.joinedAt;
    if (null == i) return;
    m[e] = new Set();
    let s = new Date(i).getTime();
    0 !== n.length &&
        ((m[e] = new Set(
            n.filter((t) => {
                let n = y.default.extractTimestamp(t);
                return (
                    null == f.Ay.getTrackedAckMessageId(t) &&
                    n > Date.now() - v.A.Millis.WEEK &&
                    n > d.A.getGuildRecentsDismissedAt(e) &&
                    n > s &&
                    !C.Ay.isChannelOrParentOptedIn(e, t)
                );
            }),
        )),
        (A[e] = Date.now()));
}

function O() {
    y.default.keys(m).forEach((e) => {
        let t = m[e];
        m[e] = new Set([...t].filter((t) => !C.Ay.isChannelOrParentOptedIn(e, t)));
    });
}
class _ extends (i = r.Ay.Store) {
    initialize() {
        this.waitFor(u.default, c.A, h.Ay, g.Ay, p.A, f.Ay, C.Ay, d.A), this.syncWith([C.Ay], O);
    }
    getNewChannelIds(e) {
        var t;
        return null != e && null == m[e] && I(e), null != e && null != (t = m[e]) ? t : S;
    }
    shouldIndicateNewChannel(e, t) {
        var n;
        if (null == e) return !1;
        let i = p.A.getGuild(e);
        return (
            null != i &&
            !!i.features.has(b.GuildFeatures.COMMUNITY) &&
            (null != e && null == m[e] && I(e),
            (null == (n = m[e]) ? void 0 : n.has(t)) && null == f.Ay.getTrackedAckMessageId(t))
        );
    }
}
(s = "displayName") in _
    ? Object.defineProperty(_, s, {
          value: "NewChannelsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (_[s] = "NewChannelsStore");
let w = new _(l.h, {
    BULK_CLEAR_RECENTS: function (e) {
        let { guildId: t, channelIds: n } = e;
        if (null == m[t]) return !1;
        n.forEach((e) => m[t].delete(e)), 0 === m[t].size && delete m[t];
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        return (
            null != t && (null == m[t] || A[t] < Date.now() - v.A.Millis.HOUR ? (I(t), !0) : (null != n && E(t, n), !1))
        );
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { guildId: t, channelId: n, sidebarType: i } = e;
        return null != t && i === a.PE.VIEW_CHANNEL && (E(t, n), !1);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { guildId: t, baseChannelId: n } = e;
        return null != t && (E(t, n), !1);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete m[t.id];
    },
    CHANNEL_CREATE: function (e) {
        var t;
        let { channel: n } = e;
        n.isVocal() || ((m[n.guild_id] = null != (t = m[n.guild_id]) ? t : new Set()), m[n.guild_id].add(n.id));
    },
});
