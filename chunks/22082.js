n.d(t, { Z: () => x }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(45114),
    s = n(897473),
    l = n(581883),
    c = n(314897),
    u = n(592125),
    d = n(984933),
    f = n(271383),
    _ = n(430824),
    p = n(306680),
    h = n(9156),
    m = n(70956),
    g = n(709054),
    E = n(981631);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let y = new Set(),
    O = {},
    v = {};
function I(e) {
    let { guild: t } = e;
    delete O[t.id];
}
function T(e) {
    var t;
    let { channel: n } = e;
    n.isVocal() || ((O[n.guild_id] = null != (t = O[n.guild_id]) ? t : new Set()), O[n.guild_id].add(n.id));
}
function S(e) {
    let { guildId: t, channelIds: n } = e;
    if (null == O[t]) return !1;
    n.forEach((e) => O[t].delete(e)), 0 === O[t].size && delete O[t];
}
function A(e) {
    let { guildId: t, channelId: n } = e;
    return null != t && (null == O[t] || v[t] < Date.now() - m.Z.Millis.HOUR ? (P(t), !0) : (null != n && R(t, n), !1));
}
function C(e) {
    let { guildId: t, channelId: n, sidebarType: r } = e;
    return null != t && r === s.tI.VIEW_CHANNEL && (R(t, n), !1);
}
function N(e) {
    let { guildId: t, baseChannelId: n } = e;
    return null != t && (R(t, n), !1);
}
function R(e, t) {
    let n = O[e];
    if (null != n && null != t && n.has(t)) {
        var r;
        !h.ZP.isOptInEnabled(e) ||
            (null == (r = u.Z.getChannel(t)) ? void 0 : r.isThread()) ||
            null != p.ZP.ackMessageId(t) ||
            a.Z.wait(() =>
                (0, o.ack)(
                    t,
                    {
                        object: E.qAy.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
                        objectType: E.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    !0,
                    !0,
                    g.default.atPreviousMillisecond(t),
                ),
            );
    }
}
function P(e) {
    var t;
    if (null != O[e]) return;
    let n = d.ZP.getChannels(e)[d.sH].map((e) => e.channel.id),
        r = null == (t = f.ZP.getMember(e, c.default.getId())) ? void 0 : t.joinedAt;
    if (null == r) return;
    O[e] = new Set();
    let i = new Date(r).getTime();
    0 !== n.length &&
        ((O[e] = new Set(
            n.filter((t) => {
                let n = g.default.extractTimestamp(t);
                return (
                    null == p.ZP.getTrackedAckMessageId(t) &&
                    n > Date.now() - m.Z.Millis.WEEK &&
                    n > l.Z.getGuildRecentsDismissedAt(e) &&
                    n > i &&
                    !h.ZP.isChannelOrParentOptedIn(e, t)
                );
            }),
        )),
        (v[e] = Date.now()));
}
function D() {
    g.default.keys(O).forEach((e) => {
        let t = O[e];
        O[e] = new Set([...t].filter((t) => !h.ZP.isChannelOrParentOptedIn(e, t)));
    });
}
class w extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(c.default, u.Z, d.ZP, f.ZP, _.Z, p.ZP, h.ZP, l.Z), this.syncWith([h.ZP], D);
    }
    getNewChannelIds(e) {
        var t;
        return null != e && null == O[e] && P(e), null != e && null != (t = O[e]) ? t : y;
    }
    shouldIndicateNewChannel(e, t) {
        var n;
        if (null == e) return !1;
        let r = _.Z.getGuild(e);
        return (
            null != r &&
            !!r.features.has(E.GuildFeatures.COMMUNITY) &&
            (null != e && null == O[e] && P(e),
            (null == (n = O[e]) ? void 0 : n.has(t)) && null == p.ZP.getTrackedAckMessageId(t))
        );
    }
}
b(w, "displayName", "NewChannelsStore");
let x = new w(a.Z, {
    BULK_CLEAR_RECENTS: S,
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: A,
    SIDEBAR_VIEW_CHANNEL: C,
    SIDEBAR_VIEW_GUILD: N,
    GUILD_DELETE: I,
    CHANNEL_CREATE: T,
});
