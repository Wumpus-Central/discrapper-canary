n(47120);
var i,
    r,
    l,
    o,
    s = n(442837),
    a = n(570140),
    u = n(45114),
    d = n(897473),
    c = n(581883),
    h = n(314897),
    f = n(592125),
    g = n(984933),
    C = n(271383),
    p = n(430824),
    E = n(306680),
    _ = n(9156),
    I = n(70956),
    S = n(709054),
    v = n(981631);
let m = new Set(),
    T = {},
    N = {};
function A(e, t) {
    let n = T[e];
    if (null != n && null != t && n.has(t)) {
        var i;
        _.ZP.isOptInEnabled(e) && !(null === (i = f.Z.getChannel(t)) || void 0 === i ? void 0 : i.isThread()) && null == E.ZP.ackMessageId(t) && a.Z.wait(() => (0, u.In)(t, !0, !0, S.default.atPreviousMillisecond(t)));
    }
}
function y(e) {
    var t;
    if (null != T[e]) return;
    let n = g.ZP.getChannels(e)[g.sH].map((e) => e.channel.id),
        i = null === (t = C.ZP.getMember(e, h.default.getId())) || void 0 === t ? void 0 : t.joinedAt;
    if (null == i) return;
    T[e] = new Set();
    let r = new Date(i).getTime();
    if (0 !== n.length)
        (T[e] = new Set(
            n.filter((t) => {
                let n = S.default.extractTimestamp(t);
                return null == E.ZP.getTrackedAckMessageId(t) && n > Date.now() - I.Z.Millis.WEEK && n > c.Z.getGuildRecentsDismissedAt(e) && n > r && !_.ZP.isChannelOrParentOptedIn(e, t);
            })
        )),
            (N[e] = Date.now());
}
function O() {
    S.default.keys(T).forEach((e) => {
        let t = T[e];
        T[e] = new Set([...t].filter((t) => !_.ZP.isChannelOrParentOptedIn(e, t)));
    });
}
class L extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(g.ZP, h.default, C.ZP, _.ZP, E.ZP, c.Z), this.syncWith([_.ZP], O);
    }
    getNewChannelIds(e) {
        var t;
        return null != e && null == T[e] && y(e), null != e && null !== (t = T[e]) && void 0 !== t ? t : m;
    }
    shouldIndicateNewChannel(e, t) {
        var n;
        if (null == e) return !1;
        let i = p.Z.getGuild(e);
        return !!(null != i && i.hasFeature(v.oNc.COMMUNITY)) && (null != e && null == T[e] && y(e), (null === (n = T[e]) || void 0 === n ? void 0 : n.has(t)) && null == E.ZP.getTrackedAckMessageId(t));
    }
}
(o = 'NewChannelsStore'),
    (l = 'displayName') in (r = L)
        ? Object.defineProperty(r, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = o),
    (t.Z = new L(a.Z, {
        BULK_CLEAR_RECENTS: function (e) {
            let { guildId: t, channelIds: n } = e;
            if (null == T[t]) return !1;
            n.forEach((e) => T[t].delete(e)), 0 === T[t].size && delete T[t];
        },
        CHANNEL_ACK: () => !0,
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            return null != t && (null == T[t] || N[t] < Date.now() - I.Z.Millis.HOUR ? (y(t), !0) : (null != n && A(t, n), !1));
        },
        SIDEBAR_VIEW_CHANNEL: function (e) {
            let { guildId: t, channelId: n, sidebarType: i } = e;
            return null != t && i === d.tI.VIEW_CHANNEL && (A(t, n), !1);
        },
        SIDEBAR_VIEW_GUILD: function (e) {
            let { guildId: t, baseChannelId: n } = e;
            return null != t && (A(t, n), !1);
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            delete T[t.id];
        },
        CHANNEL_CREATE: function (e) {
            var t;
            let { channel: n } = e;
            !n.isVocal() && ((T[n.guild_id] = null !== (t = T[n.guild_id]) && void 0 !== t ? t : new Set()), T[n.guild_id].add(n.id));
        }
    }));
