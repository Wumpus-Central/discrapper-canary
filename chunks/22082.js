n.d(t, { Z: () => P }), n(47120);
var i,
    r,
    l,
    o = n(442837),
    s = n(570140),
    a = n(45114),
    u = n(897473),
    d = n(581883),
    c = n(314897),
    h = n(592125),
    f = n(984933),
    p = n(271383),
    g = n(430824),
    v = n(306680),
    C = n(9156),
    E = n(70956),
    O = n(709054),
    m = n(981631);
let S = new Set(),
    _ = {},
    b = {};
function I(e, t) {
    let n = _[e];
    if (null != n && null != t && n.has(t)) {
        var i;
        !C.ZP.isOptInEnabled(e) || (null === (i = h.Z.getChannel(t)) || void 0 === i ? void 0 : i.isThread()) || null != v.ZP.ackMessageId(t) || s.Z.wait(() => (0, a.In)(t, !0, !0, O.default.atPreviousMillisecond(t)));
    }
}
function y(e) {
    var t;
    if (null != _[e]) return;
    let n = f.ZP.getChannels(e)[f.sH].map((e) => e.channel.id),
        i = null === (t = p.ZP.getMember(e, c.default.getId())) || void 0 === t ? void 0 : t.joinedAt;
    if (null == i) return;
    _[e] = new Set();
    let r = new Date(i).getTime();
    0 !== n.length &&
        ((_[e] = new Set(
            n.filter((t) => {
                let n = O.default.extractTimestamp(t);
                return null == v.ZP.getTrackedAckMessageId(t) && n > Date.now() - E.Z.Millis.WEEK && n > d.Z.getGuildRecentsDismissedAt(e) && n > r && !C.ZP.isChannelOrParentOptedIn(e, t);
            })
        )),
        (b[e] = Date.now()));
}
function N() {
    O.default.keys(_).forEach((e) => {
        let t = _[e];
        _[e] = new Set([...t].filter((t) => !C.ZP.isChannelOrParentOptedIn(e, t)));
    });
}
class T extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(f.ZP, c.default, p.ZP, C.ZP, v.ZP, d.Z), this.syncWith([C.ZP], N);
    }
    getNewChannelIds(e) {
        var t;
        return null != e && null == _[e] && y(e), null != e && null !== (t = _[e]) && void 0 !== t ? t : S;
    }
    shouldIndicateNewChannel(e, t) {
        var n;
        if (null == e) return !1;
        let i = g.Z.getGuild(e);
        return !!(null != i && i.hasFeature(m.oNc.COMMUNITY)) && (null != e && null == _[e] && y(e), (null === (n = _[e]) || void 0 === n ? void 0 : n.has(t)) && null == v.ZP.getTrackedAckMessageId(t));
    }
}
(l = 'NewChannelsStore'),
    (r = 'displayName') in T
        ? Object.defineProperty(T, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (T[r] = l);
let P = new T(s.Z, {
    BULK_CLEAR_RECENTS: function (e) {
        let { guildId: t, channelIds: n } = e;
        if (null == _[t]) return !1;
        n.forEach((e) => _[t].delete(e)), 0 === _[t].size && delete _[t];
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        return null != t && (null == _[t] || b[t] < Date.now() - E.Z.Millis.HOUR ? (y(t), !0) : (null != n && I(t, n), !1));
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { guildId: t, channelId: n, sidebarType: i } = e;
        return null != t && i === u.tI.VIEW_CHANNEL && (I(t, n), !1);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { guildId: t, baseChannelId: n } = e;
        return null != t && (I(t, n), !1);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete _[t.id];
    },
    CHANNEL_CREATE: function (e) {
        var t;
        let { channel: n } = e;
        n.isVocal() || ((_[n.guild_id] = null !== (t = _[n.guild_id]) && void 0 !== t ? t : new Set()), _[n.guild_id].add(n.id));
    }
});
