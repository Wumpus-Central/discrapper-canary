(n.d(t, { Z: () => w }), n(388685));
var r,
    i,
    s,
    l = n(442837),
    o = n(570140),
    a = n(45114),
    c = n(897473),
    u = n(581883),
    d = n(314897),
    f = n(592125),
    p = n(984933),
    g = n(271383),
    b = n(430824),
    v = n(306680),
    m = n(9156),
    h = n(70956),
    O = n(709054),
    y = n(981631);
let E = new Set(),
    j = {},
    S = {};
function x(e, t) {
    let n = j[e];
    if (null != n && null != t && n.has(t)) {
        var r;
        !m.ZP.isOptInEnabled(e) ||
            (null == (r = f.Z.getChannel(t)) ? void 0 : r.isThread()) ||
            null != v.ZP.ackMessageId(t) ||
            o.Z.wait(() =>
                (0, a.In)(
                    t,
                    {
                        object: y.qAy.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
                        objectType: y.Qqv.ACK_AUTOMATIC
                    },
                    !0,
                    !0,
                    O.default.atPreviousMillisecond(t)
                )
            );
    }
}
function P(e) {
    var t;
    if (null != j[e]) return;
    let n = p.ZP.getChannels(e)[p.sH].map((e) => e.channel.id),
        r = null == (t = g.ZP.getMember(e, d.default.getId())) ? void 0 : t.joinedAt;
    if (null == r) return;
    j[e] = new Set();
    let i = new Date(r).getTime();
    0 !== n.length &&
        ((j[e] = new Set(
            n.filter((t) => {
                let n = O.default.extractTimestamp(t);
                return null == v.ZP.getTrackedAckMessageId(t) && n > Date.now() - h.Z.Millis.WEEK && n > u.Z.getGuildRecentsDismissedAt(e) && n > i && !m.ZP.isChannelOrParentOptedIn(e, t);
            })
        )),
        (S[e] = Date.now()));
}
function C() {
    O.default.keys(j).forEach((e) => {
        let t = j[e];
        j[e] = new Set([...t].filter((t) => !m.ZP.isChannelOrParentOptedIn(e, t)));
    });
}
class _ extends (r = l.ZP.Store) {
    initialize() {
        (this.waitFor(p.ZP, d.default, g.ZP, m.ZP, v.ZP, u.Z), this.syncWith([m.ZP], C));
    }
    getNewChannelIds(e) {
        var t;
        return (null != e && null == j[e] && P(e), null != e && null != (t = j[e]) ? t : E);
    }
    shouldIndicateNewChannel(e, t) {
        var n;
        if (null == e) return !1;
        let r = b.Z.getGuild(e);
        return null != r && !!r.features.has(y.oNc.COMMUNITY) && (null != e && null == j[e] && P(e), (null == (n = j[e]) ? void 0 : n.has(t)) && null == v.ZP.getTrackedAckMessageId(t));
    }
}
((s = 'NewChannelsStore'),
    (i = 'displayName') in _
        ? Object.defineProperty(_, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (_[i] = s));
let w = new _(o.Z, {
    BULK_CLEAR_RECENTS: function (e) {
        let { guildId: t, channelIds: n } = e;
        if (null == j[t]) return !1;
        (n.forEach((e) => j[t].delete(e)), 0 === j[t].size && delete j[t]);
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        return null != t && (null == j[t] || S[t] < Date.now() - h.Z.Millis.HOUR ? (P(t), !0) : (null != n && x(t, n), !1));
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { guildId: t, channelId: n, sidebarType: r } = e;
        return null != t && r === c.tI.VIEW_CHANNEL && (x(t, n), !1);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { guildId: t, baseChannelId: n } = e;
        return null != t && (x(t, n), !1);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete j[t.id];
    },
    CHANNEL_CREATE: function (e) {
        var t;
        let { channel: n } = e;
        n.isVocal() || ((j[n.guild_id] = null != (t = j[n.guild_id]) ? t : new Set()), j[n.guild_id].add(n.id));
    }
});
