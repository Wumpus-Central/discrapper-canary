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
    v = n(9156),
    E = n(70956),
    _ = n(709054),
    I = n(981631);
let m = new Set(),
    S = {},
    T = {};
function N(e, t) {
    let n = S[e];
    if (null != n && null != t && n.has(t)) {
        var i;
        !v.ZP.isOptInEnabled(e) || (null === (i = h.Z.getChannel(t)) || void 0 === i ? void 0 : i.isThread()) || null != p.ZP.ackMessageId(t) || a.Z.wait(() => (0, o.In)(t, !0, !0, _.default.atPreviousMillisecond(t)));
    }
}
function O(e) {
    var t;
    if (null != S[e]) return;
    let n = g.ZP.getChannels(e)[g.sH].map((e) => e.channel.id),
        i = null === (t = C.ZP.getMember(e, c.default.getId())) || void 0 === t ? void 0 : t.joinedAt;
    if (null == i) return;
    S[e] = new Set();
    let l = new Date(i).getTime();
    0 !== n.length &&
        ((S[e] = new Set(
            n.filter((t) => {
                let n = _.default.extractTimestamp(t);
                return null == p.ZP.getTrackedAckMessageId(t) && n > Date.now() - E.Z.Millis.WEEK && n > u.Z.getGuildRecentsDismissedAt(e) && n > l && !v.ZP.isChannelOrParentOptedIn(e, t);
            })
        )),
        (T[e] = Date.now()));
}
function y() {
    _.default.keys(S).forEach((e) => {
        let t = S[e];
        S[e] = new Set([...t].filter((t) => !v.ZP.isChannelOrParentOptedIn(e, t)));
    });
}
class A extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(g.ZP, c.default, C.ZP, v.ZP, p.ZP, u.Z), this.syncWith([v.ZP], y);
    }
    getNewChannelIds(e) {
        var t;
        return null != e && null == S[e] && O(e), null != e && null !== (t = S[e]) && void 0 !== t ? t : m;
    }
    shouldIndicateNewChannel(e, t) {
        var n;
        if (null == e) return !1;
        let i = f.Z.getGuild(e);
        return !!(null != i && i.hasFeature(I.oNc.COMMUNITY)) && (null != e && null == S[e] && O(e), (null === (n = S[e]) || void 0 === n ? void 0 : n.has(t)) && null == p.ZP.getTrackedAckMessageId(t));
    }
}
(r = 'NewChannelsStore'),
    (l = 'displayName') in A
        ? Object.defineProperty(A, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (A[l] = r);
let P = new A(a.Z, {
    BULK_CLEAR_RECENTS: function (e) {
        let { guildId: t, channelIds: n } = e;
        if (null == S[t]) return !1;
        n.forEach((e) => S[t].delete(e)), 0 === S[t].size && delete S[t];
    },
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        return null != t && (null == S[t] || T[t] < Date.now() - E.Z.Millis.HOUR ? (O(t), !0) : (null != n && N(t, n), !1));
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
        delete S[t.id];
    },
    CHANNEL_CREATE: function (e) {
        var t;
        let { channel: n } = e;
        n.isVocal() || ((S[n.guild_id] = null !== (t = S[n.guild_id]) && void 0 !== t ? t : new Set()), S[n.guild_id].add(n.id));
    }
});
