n.d(t, { Z: () => j }), n(388685);
var i,
    r,
    s = n(442837),
    l = n(570140),
    o = n(45114),
    a = n(897473),
    u = n(581883),
    c = n(314897),
    d = n(592125),
    h = n(984933),
    p = n(271383),
    g = n(430824),
    f = n(306680),
    v = n(9156),
    m = n(70956),
    C = n(709054),
    b = n(981631);
let y = new Set(),
    O = {},
    S = {};
function E(e, t) {
    let n = O[e];
    if (null != n && null != t && n.has(t)) {
        var i;
        !v.ZP.isOptInEnabled(e) ||
            (null == (i = d.Z.getChannel(t)) ? void 0 : i.isThread()) ||
            null != f.ZP.ackMessageId(t) ||
            l.Z.wait(() =>
                (0, o.In)(
                    t,
                    {
                        object: b.qAy.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
                        objectType: b.Qqv.ACK_AUTOMATIC,
                    },
                    !0,
                    !0,
                    C.default.atPreviousMillisecond(t),
                ),
            );
    }
}
function _(e) {
    var t;
    if (null != O[e]) return;
    let n = h.ZP.getChannels(e)[h.sH].map((e) => e.channel.id),
        i = null == (t = p.ZP.getMember(e, c.default.getId())) ? void 0 : t.joinedAt;
    if (null == i) return;
    O[e] = new Set();
    let r = new Date(i).getTime();
    0 !== n.length &&
        ((O[e] = new Set(
            n.filter((t) => {
                let n = C.default.extractTimestamp(t);
                return (
                    null == f.ZP.getTrackedAckMessageId(t) &&
                    n > Date.now() - m.Z.Millis.WEEK &&
                    n > u.Z.getGuildRecentsDismissedAt(e) &&
                    n > r &&
                    !v.ZP.isChannelOrParentOptedIn(e, t)
                );
            }),
        )),
        (S[e] = Date.now()));
}
function w() {
    C.default.keys(O).forEach((e) => {
        let t = O[e];
        O[e] = new Set([...t].filter((t) => !v.ZP.isChannelOrParentOptedIn(e, t)));
    });
}
class I extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(h.ZP, c.default, p.ZP, v.ZP, f.ZP, u.Z), this.syncWith([v.ZP], w);
    }
    getNewChannelIds(e) {
        var t;
        return null != e && null == O[e] && _(e), null != e && null != (t = O[e]) ? t : y;
    }
    shouldIndicateNewChannel(e, t) {
        var n;
        if (null == e) return !1;
        let i = g.Z.getGuild(e);
        return (
            null != i &&
            !!i.features.has(b.oNc.COMMUNITY) &&
            (null != e && null == O[e] && _(e),
            (null == (n = O[e]) ? void 0 : n.has(t)) && null == f.ZP.getTrackedAckMessageId(t))
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
        if (null == O[t]) return !1;
        n.forEach((e) => O[t].delete(e)), 0 === O[t].size && delete O[t];
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        return (
            null != t && (null == O[t] || S[t] < Date.now() - m.Z.Millis.HOUR ? (_(t), !0) : (null != n && E(t, n), !1))
        );
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { guildId: t, channelId: n, sidebarType: i } = e;
        return null != t && i === a.tI.VIEW_CHANNEL && (E(t, n), !1);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { guildId: t, baseChannelId: n } = e;
        return null != t && (E(t, n), !1);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete O[t.id];
    },
    CHANNEL_CREATE: function (e) {
        var t;
        let { channel: n } = e;
        n.isVocal() || ((O[n.guild_id] = null != (t = O[n.guild_id]) ? t : new Set()), O[n.guild_id].add(n.id));
    },
});
