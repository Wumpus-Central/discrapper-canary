n.d(t, { Z: () => j }), n(388685);
var i,
    r,
    s = n(442837),
    l = n(570140),
    o = n(45114),
    a = n(897473),
    c = n(581883),
    u = n(314897),
    d = n(592125),
    h = n(984933),
    p = n(271383),
    g = n(430824),
    f = n(306680),
    m = n(9156),
    b = n(70956),
    v = n(709054),
    C = n(981631);
let _ = new Set(),
    y = {},
    O = {};
function S(e, t) {
    let n = y[e];
    if (null != n && null != t && n.has(t)) {
        var i;
        !m.ZP.isOptInEnabled(e) ||
            (null == (i = d.Z.getChannel(t)) ? void 0 : i.isThread()) ||
            null != f.ZP.ackMessageId(t) ||
            l.Z.wait(() =>
                (0, o.In)(
                    t,
                    {
                        object: C.qAy.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
                        objectType: C.Qqv.ACK_AUTOMATIC,
                    },
                    !0,
                    !0,
                    v.default.atPreviousMillisecond(t),
                ),
            );
    }
}
function E(e) {
    var t;
    if (null != y[e]) return;
    let n = h.ZP.getChannels(e)[h.sH].map((e) => e.channel.id),
        i = null == (t = p.ZP.getMember(e, u.default.getId())) ? void 0 : t.joinedAt;
    if (null == i) return;
    y[e] = new Set();
    let r = new Date(i).getTime();
    0 !== n.length &&
        ((y[e] = new Set(
            n.filter((t) => {
                let n = v.default.extractTimestamp(t);
                return (
                    null == f.ZP.getTrackedAckMessageId(t) &&
                    n > Date.now() - b.Z.Millis.WEEK &&
                    n > c.Z.getGuildRecentsDismissedAt(e) &&
                    n > r &&
                    !m.ZP.isChannelOrParentOptedIn(e, t)
                );
            }),
        )),
        (O[e] = Date.now()));
}
function w() {
    v.default.keys(y).forEach((e) => {
        let t = y[e];
        y[e] = new Set([...t].filter((t) => !m.ZP.isChannelOrParentOptedIn(e, t)));
    });
}
class I extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(h.ZP, u.default, p.ZP, m.ZP, f.ZP, c.Z), this.syncWith([m.ZP], w);
    }
    getNewChannelIds(e) {
        var t;
        return null != e && null == y[e] && E(e), null != e && null != (t = y[e]) ? t : _;
    }
    shouldIndicateNewChannel(e, t) {
        var n;
        if (null == e) return !1;
        let i = g.Z.getGuild(e);
        return (
            null != i &&
            !!i.features.has(C.oNc.COMMUNITY) &&
            (null != e && null == y[e] && E(e),
            (null == (n = y[e]) ? void 0 : n.has(t)) && null == f.ZP.getTrackedAckMessageId(t))
        );
    }
}
(r = "displayName") in I
    ? Object.defineProperty(I, r, {
          value: "NewChannelsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (I[r] = "NewChannelsStore");
let j = new I(l.Z, {
    BULK_CLEAR_RECENTS: function (e) {
        let { guildId: t, channelIds: n } = e;
        if (null == y[t]) return !1;
        n.forEach((e) => y[t].delete(e)), 0 === y[t].size && delete y[t];
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        return (
            null != t && (null == y[t] || O[t] < Date.now() - b.Z.Millis.HOUR ? (E(t), !0) : (null != n && S(t, n), !1))
        );
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { guildId: t, channelId: n, sidebarType: i } = e;
        return null != t && i === a.tI.VIEW_CHANNEL && (S(t, n), !1);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { guildId: t, baseChannelId: n } = e;
        return null != t && (S(t, n), !1);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete y[t.id];
    },
    CHANNEL_CREATE: function (e) {
        var t;
        let { channel: n } = e;
        n.isVocal() || ((y[n.guild_id] = null != (t = y[n.guild_id]) ? t : new Set()), y[n.guild_id].add(n.id));
    },
});
