(n.d(t, { Z: () => N }), n(388685));
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
    m = n(306680),
    v = n(9156),
    h = n(70956),
    O = n(709054),
    y = n(981631);
let E = new Set(),
    S = {},
    j = {};
function x(e, t) {
    let n = S[e];
    if (null != n && null != t && n.has(t)) {
        var r;
        !v.ZP.isOptInEnabled(e) ||
            (null == (r = f.Z.getChannel(t)) ? void 0 : r.isThread()) ||
            null != m.ZP.ackMessageId(t) ||
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
function C(e) {
    var t;
    if (null != S[e]) return;
    let n = p.ZP.getChannels(e)[p.sH].map((e) => e.channel.id),
        r = null == (t = g.ZP.getMember(e, d.default.getId())) ? void 0 : t.joinedAt;
    if (null == r) return;
    S[e] = new Set();
    let i = new Date(r).getTime();
    0 !== n.length &&
        ((S[e] = new Set(
            n.filter((t) => {
                let n = O.default.extractTimestamp(t);
                return null == m.ZP.getTrackedAckMessageId(t) && n > Date.now() - h.Z.Millis.WEEK && n > u.Z.getGuildRecentsDismissedAt(e) && n > i && !v.ZP.isChannelOrParentOptedIn(e, t);
            })
        )),
        (j[e] = Date.now()));
}
function P() {
    O.default.keys(S).forEach((e) => {
        let t = S[e];
        S[e] = new Set([...t].filter((t) => !v.ZP.isChannelOrParentOptedIn(e, t)));
    });
}
class _ extends (r = l.ZP.Store) {
    initialize() {
        (this.waitFor(p.ZP, d.default, g.ZP, v.ZP, m.ZP, u.Z), this.syncWith([v.ZP], P));
    }
    getNewChannelIds(e) {
        var t;
        return (null != e && null == S[e] && C(e), null != e && null != (t = S[e]) ? t : E);
    }
    shouldIndicateNewChannel(e, t) {
        var n;
        if (null == e) return !1;
        let r = b.Z.getGuild(e);
        return null != r && !!r.features.has(y.oNc.COMMUNITY) && (null != e && null == S[e] && C(e), (null == (n = S[e]) ? void 0 : n.has(t)) && null == m.ZP.getTrackedAckMessageId(t));
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
let N = new _(o.Z, {
    BULK_CLEAR_RECENTS: function (e) {
        let { guildId: t, channelIds: n } = e;
        if (null == S[t]) return !1;
        (n.forEach((e) => S[t].delete(e)), 0 === S[t].size && delete S[t]);
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        return null != t && (null == S[t] || j[t] < Date.now() - h.Z.Millis.HOUR ? (C(t), !0) : (null != n && x(t, n), !1));
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
        delete S[t.id];
    },
    CHANNEL_CREATE: function (e) {
        var t;
        let { channel: n } = e;
        n.isVocal() || ((S[n.guild_id] = null != (t = S[n.guild_id]) ? t : new Set()), S[n.guild_id].add(n.id));
    }
});
