(t.d(n, { Z: () => y }), t(388685));
var l,
    i,
    r,
    a = t(442837),
    u = t(570140),
    s = t(45114),
    o = t(897473),
    d = t(581883),
    c = t(314897),
    g = t(592125),
    f = t(984933),
    h = t(271383),
    C = t(430824),
    E = t(306680),
    _ = t(9156),
    p = t(70956),
    S = t(709054),
    b = t(981631);
let v = new Set(),
    Z = {},
    w = {};
function P(e, n) {
    let t = Z[e];
    if (null != t && null != n && t.has(n)) {
        var l;
        !_.ZP.isOptInEnabled(e) ||
            (null == (l = g.Z.getChannel(n)) ? void 0 : l.isThread()) ||
            null != E.ZP.ackMessageId(n) ||
            u.Z.wait(() =>
                (0, s.In)(
                    n,
                    {
                        object: b.qAy.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
                        objectType: b.Qqv.ACK_AUTOMATIC
                    },
                    !0,
                    !0,
                    S.default.atPreviousMillisecond(n)
                )
            );
    }
}
function O(e) {
    var n;
    if (null != Z[e]) return;
    let t = f.ZP.getChannels(e)[f.sH].map((e) => e.channel.id),
        l = null == (n = h.ZP.getMember(e, c.default.getId())) ? void 0 : n.joinedAt;
    if (null == l) return;
    Z[e] = new Set();
    let i = new Date(l).getTime();
    0 !== t.length &&
        ((Z[e] = new Set(
            t.filter((n) => {
                let t = S.default.extractTimestamp(n);
                return null == E.ZP.getTrackedAckMessageId(n) && t > Date.now() - p.Z.Millis.WEEK && t > d.Z.getGuildRecentsDismissedAt(e) && t > i && !_.ZP.isChannelOrParentOptedIn(e, n);
            })
        )),
        (w[e] = Date.now()));
}
function I() {
    S.default.keys(Z).forEach((e) => {
        let n = Z[e];
        Z[e] = new Set([...n].filter((n) => !_.ZP.isChannelOrParentOptedIn(e, n)));
    });
}
class N extends (l = a.ZP.Store) {
    initialize() {
        (this.waitFor(f.ZP, c.default, h.ZP, _.ZP, E.ZP, d.Z), this.syncWith([_.ZP], I));
    }
    getNewChannelIds(e) {
        var n;
        return (null != e && null == Z[e] && O(e), null != e && null != (n = Z[e]) ? n : v);
    }
    shouldIndicateNewChannel(e, n) {
        var t;
        if (null == e) return !1;
        let l = C.Z.getGuild(e);
        return null != l && !!l.features.has(b.oNc.COMMUNITY) && (null != e && null == Z[e] && O(e), (null == (t = Z[e]) ? void 0 : t.has(n)) && null == E.ZP.getTrackedAckMessageId(n));
    }
}
((r = 'NewChannelsStore'),
    (i = 'displayName') in N
        ? Object.defineProperty(N, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (N[i] = r));
let y = new N(u.Z, {
    BULK_CLEAR_RECENTS: function (e) {
        let { guildId: n, channelIds: t } = e;
        if (null == Z[n]) return !1;
        (t.forEach((e) => Z[n].delete(e)), 0 === Z[n].size && delete Z[n]);
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function (e) {
        let { guildId: n, channelId: t } = e;
        return null != n && (null == Z[n] || w[n] < Date.now() - p.Z.Millis.HOUR ? (O(n), !0) : (null != t && P(n, t), !1));
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { guildId: n, channelId: t, sidebarType: l } = e;
        return null != n && l === o.tI.VIEW_CHANNEL && (P(n, t), !1);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { guildId: n, baseChannelId: t } = e;
        return null != n && (P(n, t), !1);
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        delete Z[n.id];
    },
    CHANNEL_CREATE: function (e) {
        var n;
        let { channel: t } = e;
        t.isVocal() || ((Z[t.guild_id] = null != (n = Z[t.guild_id]) ? n : new Set()), Z[t.guild_id].add(t.id));
    }
});
