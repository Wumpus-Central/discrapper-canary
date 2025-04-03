n.d(t, { Z: () => L }), n(47120);
var i,
    s,
    l,
    r = n(442837),
    a = n(570140),
    d = n(45114),
    o = n(897473),
    h = n(581883),
    u = n(314897),
    c = n(592125),
    g = n(984933),
    C = n(271383),
    p = n(430824),
    f = n(306680),
    v = n(9156),
    I = n(70956),
    S = n(709054),
    y = n(981631);
let w = new Set(),
    E = {},
    _ = {};
function m(e, t) {
    let n = E[e];
    if (null != n && null != t && n.has(t)) {
        var i;
        !v.ZP.isOptInEnabled(e) || (null == (i = c.Z.getChannel(t)) ? void 0 : i.isThread()) || null != f.ZP.ackMessageId(t) || a.Z.wait(() => (0, d.In)(t, !0, !0, S.default.atPreviousMillisecond(t)));
    }
}
function b(e) {
    var t;
    if (null != E[e]) return;
    let n = g.ZP.getChannels(e)[g.sH].map((e) => e.channel.id),
        i = null == (t = C.ZP.getMember(e, u.default.getId())) ? void 0 : t.joinedAt;
    if (null == i) return;
    E[e] = new Set();
    let s = new Date(i).getTime();
    0 !== n.length &&
        ((E[e] = new Set(
            n.filter((t) => {
                let n = S.default.extractTimestamp(t);
                return null == f.ZP.getTrackedAckMessageId(t) && n > Date.now() - I.Z.Millis.WEEK && n > h.Z.getGuildRecentsDismissedAt(e) && n > s && !v.ZP.isChannelOrParentOptedIn(e, t);
            })
        )),
        (_[e] = Date.now()));
}
function O() {
    S.default.keys(E).forEach((e) => {
        let t = E[e];
        E[e] = new Set([...t].filter((t) => !v.ZP.isChannelOrParentOptedIn(e, t)));
    });
}
class N extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(g.ZP, u.default, C.ZP, v.ZP, f.ZP, h.Z), this.syncWith([v.ZP], O);
    }
    getNewChannelIds(e) {
        var t;
        return null != e && null == E[e] && b(e), null != e && null != (t = E[e]) ? t : w;
    }
    shouldIndicateNewChannel(e, t) {
        var n;
        if (null == e) return !1;
        let i = p.Z.getGuild(e);
        return null != i && !!i.hasFeature(y.oNc.COMMUNITY) && (null != e && null == E[e] && b(e), (null == (n = E[e]) ? void 0 : n.has(t)) && null == f.ZP.getTrackedAckMessageId(t));
    }
}
(l = 'NewChannelsStore'),
    (s = 'displayName') in N
        ? Object.defineProperty(N, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (N[s] = l);
let L = new N(a.Z, {
    BULK_CLEAR_RECENTS: function (e) {
        let { guildId: t, channelIds: n } = e;
        if (null == E[t]) return !1;
        n.forEach((e) => E[t].delete(e)), 0 === E[t].size && delete E[t];
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        return null != t && (null == E[t] || _[t] < Date.now() - I.Z.Millis.HOUR ? (b(t), !0) : (null != n && m(t, n), !1));
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { guildId: t, channelId: n, sidebarType: i } = e;
        return null != t && i === o.tI.VIEW_CHANNEL && (m(t, n), !1);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { guildId: t, baseChannelId: n } = e;
        return null != t && (m(t, n), !1);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete E[t.id];
    },
    CHANNEL_CREATE: function (e) {
        var t;
        let { channel: n } = e;
        n.isVocal() || ((E[n.guild_id] = null != (t = E[n.guild_id]) ? t : new Set()), E[n.guild_id].add(n.id));
    }
});
