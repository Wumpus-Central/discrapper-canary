n.d(t, { Z: () => N }), n(388685);
var l,
    i,
    r,
    a = n(442837),
    u = n(570140),
    s = n(45114),
    o = n(897473),
    d = n(581883),
    c = n(314897),
    f = n(592125),
    g = n(984933),
    h = n(271383),
    _ = n(430824),
    C = n(306680),
    E = n(9156),
    p = n(70956),
    S = n(709054),
    b = n(981631);
let v = new Set(),
    Z = {},
    w = {};
function P(e, t) {
    let n = Z[e];
    if (null != n && null != t && n.has(t)) {
        var l;
        !E.ZP.isOptInEnabled(e) ||
            (null == (l = f.Z.getChannel(t)) ? void 0 : l.isThread()) ||
            null != C.ZP.ackMessageId(t) ||
            u.Z.wait(() =>
                (0, s.In)(
                    t,
                    {
                        object: b.qAy.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
                        objectType: b.Qqv.ACK_AUTOMATIC
                    },
                    !0,
                    !0,
                    S.default.atPreviousMillisecond(t)
                )
            );
    }
}
function y(e) {
    var t;
    if (null != Z[e]) return;
    let n = g.ZP.getChannels(e)[g.sH].map((e) => e.channel.id),
        l = null == (t = h.ZP.getMember(e, c.default.getId())) ? void 0 : t.joinedAt;
    if (null == l) return;
    Z[e] = new Set();
    let i = new Date(l).getTime();
    0 !== n.length &&
        ((Z[e] = new Set(
            n.filter((t) => {
                let n = S.default.extractTimestamp(t);
                return null == C.ZP.getTrackedAckMessageId(t) && n > Date.now() - p.Z.Millis.WEEK && n > d.Z.getGuildRecentsDismissedAt(e) && n > i && !E.ZP.isChannelOrParentOptedIn(e, t);
            })
        )),
        (w[e] = Date.now()));
}
function I() {
    S.default.keys(Z).forEach((e) => {
        let t = Z[e];
        Z[e] = new Set([...t].filter((t) => !E.ZP.isChannelOrParentOptedIn(e, t)));
    });
}
class O extends (l = a.ZP.Store) {
    initialize() {
        this.waitFor(g.ZP, c.default, h.ZP, E.ZP, C.ZP, d.Z), this.syncWith([E.ZP], I);
    }
    getNewChannelIds(e) {
        var t;
        return null != e && null == Z[e] && y(e), null != e && null != (t = Z[e]) ? t : v;
    }
    shouldIndicateNewChannel(e, t) {
        var n;
        if (null == e) return !1;
        let l = _.Z.getGuild(e);
        return null != l && !!l.hasFeature(b.oNc.COMMUNITY) && (null != e && null == Z[e] && y(e), (null == (n = Z[e]) ? void 0 : n.has(t)) && null == C.ZP.getTrackedAckMessageId(t));
    }
}
(r = 'NewChannelsStore'),
    (i = 'displayName') in O
        ? Object.defineProperty(O, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (O[i] = r);
let N = new O(u.Z, {
    BULK_CLEAR_RECENTS: function (e) {
        let { guildId: t, channelIds: n } = e;
        if (null == Z[t]) return !1;
        n.forEach((e) => Z[t].delete(e)), 0 === Z[t].size && delete Z[t];
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        return null != t && (null == Z[t] || w[t] < Date.now() - p.Z.Millis.HOUR ? (y(t), !0) : (null != n && P(t, n), !1));
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { guildId: t, channelId: n, sidebarType: l } = e;
        return null != t && l === o.tI.VIEW_CHANNEL && (P(t, n), !1);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { guildId: t, baseChannelId: n } = e;
        return null != t && (P(t, n), !1);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete Z[t.id];
    },
    CHANNEL_CREATE: function (e) {
        var t;
        let { channel: n } = e;
        n.isVocal() || ((Z[n.guild_id] = null != (t = Z[n.guild_id]) ? t : new Set()), Z[n.guild_id].add(n.id));
    }
});
