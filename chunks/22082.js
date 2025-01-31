n.d(t, { Z: () => P }), n(47120);
var i,
    l,
    r,
    s = n(442837),
    a = n(570140),
    o = n(45114),
    d = n(897473),
    u = n(581883),
    c = n(314897),
    h = n(592125),
    g = n(984933),
    C = n(271383),
    f = n(430824),
    p = n(306680),
    E = n(9156),
    v = n(70956),
    _ = n(709054),
    I = n(981631);
let S = new Set(),
    m = {},
    T = {};
function N(e, t) {
    let n = m[e];
    if (null != n && null != t && n.has(t)) {
        var i;
        !E.ZP.isOptInEnabled(e) || (null === (i = h.Z.getChannel(t)) || void 0 === i ? void 0 : i.isThread()) || null != p.ZP.ackMessageId(t) || a.Z.wait(() => (0, o.In)(t, !0, !0, _.default.atPreviousMillisecond(t)));
    }
}
function O(e) {
    var t;
    if (null != m[e]) return;
    let n = g.ZP.getChannels(e)[g.sH].map((e) => e.channel.id),
        i = null === (t = C.ZP.getMember(e, c.default.getId())) || void 0 === t ? void 0 : t.joinedAt;
    if (null == i) return;
    m[e] = new Set();
    let l = new Date(i).getTime();
    0 !== n.length &&
        ((m[e] = new Set(
            n.filter((t) => {
                let n = _.default.extractTimestamp(t);
                return null == p.ZP.getTrackedAckMessageId(t) && n > Date.now() - v.Z.Millis.WEEK && n > u.Z.getGuildRecentsDismissedAt(e) && n > l && !E.ZP.isChannelOrParentOptedIn(e, t);
            })
        )),
        (T[e] = Date.now()));
}
function A() {
    _.default.keys(m).forEach((e) => {
        let t = m[e];
        m[e] = new Set([...t].filter((t) => !E.ZP.isChannelOrParentOptedIn(e, t)));
    });
}
class y extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(g.ZP, c.default, C.ZP, E.ZP, p.ZP, u.Z), this.syncWith([E.ZP], A);
    }
    getNewChannelIds(e) {
        var t;
        return null != e && null == m[e] && O(e), null != e && null !== (t = m[e]) && void 0 !== t ? t : S;
    }
    shouldIndicateNewChannel(e, t) {
        var n;
        if (null == e) return !1;
        let i = f.Z.getGuild(e);
        return !!(null != i && i.hasFeature(I.oNc.COMMUNITY)) && (null != e && null == m[e] && O(e), (null === (n = m[e]) || void 0 === n ? void 0 : n.has(t)) && null == p.ZP.getTrackedAckMessageId(t));
    }
}
(r = 'NewChannelsStore'),
    (l = 'displayName') in y
        ? Object.defineProperty(y, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (y[l] = r);
let P = new y(a.Z, {
    BULK_CLEAR_RECENTS: function (e) {
        let { guildId: t, channelIds: n } = e;
        if (null == m[t]) return !1;
        n.forEach((e) => m[t].delete(e)), 0 === m[t].size && delete m[t];
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        return null != t && (null == m[t] || T[t] < Date.now() - v.Z.Millis.HOUR ? (O(t), !0) : (null != n && N(t, n), !1));
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { guildId: t, channelId: n, sidebarType: i } = e;
        return null != t && i === d.tI.VIEW_CHANNEL && (N(t, n), !1);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { guildId: t, baseChannelId: n } = e;
        return null != t && (N(t, n), !1);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete m[t.id];
    },
    CHANNEL_CREATE: function (e) {
        var t;
        let { channel: n } = e;
        n.isVocal() || ((m[n.guild_id] = null !== (t = m[n.guild_id]) && void 0 !== t ? t : new Set()), m[n.guild_id].add(n.id));
    }
});
