n.d(t, { Z: () => O }), n(388685);
var i,
    s,
    l = n(442837),
    r = n(570140),
    a = n(45114),
    d = n(897473),
    o = n(581883),
    h = n(314897),
    u = n(592125),
    c = n(984933),
    g = n(271383),
    C = n(430824),
    p = n(306680),
    f = n(9156),
    v = n(70956),
    I = n(709054),
    S = n(981631);
let y = new Set(),
    E = {},
    w = {};
function _(e, t) {
    let n = E[e];
    if (null != n && null != t && n.has(t)) {
        var i;
        !f.ZP.isOptInEnabled(e) ||
            (null == (i = u.Z.getChannel(t)) ? void 0 : i.isThread()) ||
            null != p.ZP.ackMessageId(t) ||
            r.Z.wait(() =>
                (0, a.In)(
                    t,
                    {
                        object: S.qAy.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
                        objectType: S.Qqv.ACK_AUTOMATIC,
                    },
                    !0,
                    !0,
                    I.default.atPreviousMillisecond(t),
                ),
            );
    }
}
function m(e) {
    var t;
    if (null != E[e]) return;
    let n = c.ZP.getChannels(e)[c.sH].map((e) => e.channel.id),
        i = null == (t = g.ZP.getMember(e, h.default.getId())) ? void 0 : t.joinedAt;
    if (null == i) return;
    E[e] = new Set();
    let s = new Date(i).getTime();
    0 !== n.length &&
        ((E[e] = new Set(
            n.filter((t) => {
                let n = I.default.extractTimestamp(t);
                return (
                    null == p.ZP.getTrackedAckMessageId(t) &&
                    n > Date.now() - v.Z.Millis.WEEK &&
                    n > o.Z.getGuildRecentsDismissedAt(e) &&
                    n > s &&
                    !f.ZP.isChannelOrParentOptedIn(e, t)
                );
            }),
        )),
        (w[e] = Date.now()));
}
function b() {
    I.default.keys(E).forEach((e) => {
        let t = E[e];
        E[e] = new Set([...t].filter((t) => !f.ZP.isChannelOrParentOptedIn(e, t)));
    });
}
class N extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(c.ZP, h.default, g.ZP, f.ZP, p.ZP, o.Z), this.syncWith([f.ZP], b);
    }
    getNewChannelIds(e) {
        var t;
        return null != e && null == E[e] && m(e), null != e && null != (t = E[e]) ? t : y;
    }
    shouldIndicateNewChannel(e, t) {
        var n;
        if (null == e) return !1;
        let i = C.Z.getGuild(e);
        return (
            null != i &&
            !!i.features.has(S.oNc.COMMUNITY) &&
            (null != e && null == E[e] && m(e),
            (null == (n = E[e]) ? void 0 : n.has(t)) && null == p.ZP.getTrackedAckMessageId(t))
        );
    }
}
(s = "displayName") in N
    ? Object.defineProperty(N, s, {
          value: "NewChannelsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (N[s] = "NewChannelsStore");
let O = new N(r.Z, {
    BULK_CLEAR_RECENTS: function (e) {
        let { guildId: t, channelIds: n } = e;
        if (null == E[t]) return !1;
        n.forEach((e) => E[t].delete(e)), 0 === E[t].size && delete E[t];
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        return (
            null != t && (null == E[t] || w[t] < Date.now() - v.Z.Millis.HOUR ? (m(t), !0) : (null != n && _(t, n), !1))
        );
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { guildId: t, channelId: n, sidebarType: i } = e;
        return null != t && i === d.tI.VIEW_CHANNEL && (_(t, n), !1);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { guildId: t, baseChannelId: n } = e;
        return null != t && (_(t, n), !1);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete E[t.id];
    },
    CHANNEL_CREATE: function (e) {
        var t;
        let { channel: n } = e;
        n.isVocal() || ((E[n.guild_id] = null != (t = E[n.guild_id]) ? t : new Set()), E[n.guild_id].add(n.id));
    },
});
