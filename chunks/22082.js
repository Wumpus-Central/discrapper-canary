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
    p = n(430824),
    _ = n(306680),
    m = n(9156),
    h = n(70956),
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
function S(e) {
    let { guild: t } = e;
    delete O[t.id];
}
function I(e) {
    var t;
    let { channel: n } = e;
    n.isVocal() || ((O[n.guild_id] = null != (t = O[n.guild_id]) ? t : new Set()), O[n.guild_id].add(n.id));
}
function T(e) {
    let { guildId: t, channelIds: n } = e;
    if (null == O[t]) return !1;
    n.forEach((e) => O[t].delete(e)), 0 === O[t].size && delete O[t];
}
function C(e) {
    let { guildId: t, channelId: n } = e;
    return null != t && (null == O[t] || v[t] < Date.now() - h.Z.Millis.HOUR ? (R(t), !0) : (null != n && P(t, n), !1));
}
function A(e) {
    let { guildId: t, channelId: n, sidebarType: r } = e;
    return null != t && r === s.tI.VIEW_CHANNEL && (P(t, n), !1);
}
function N(e) {
    let { guildId: t, baseChannelId: n } = e;
    return null != t && (P(t, n), !1);
}
function P(e, t) {
    let n = O[e];
    if (null != n && null != t && n.has(t)) {
        var r;
        !m.ZP.isOptInEnabled(e) ||
            (null == (r = u.Z.getChannel(t)) ? void 0 : r.isThread()) ||
            null != _.ZP.ackMessageId(t) ||
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
function R(e) {
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
                    null == _.ZP.getTrackedAckMessageId(t) &&
                    n > Date.now() - h.Z.Millis.WEEK &&
                    n > l.Z.getGuildRecentsDismissedAt(e) &&
                    n > i &&
                    !m.ZP.isChannelOrParentOptedIn(e, t)
                );
            }),
        )),
        (v[e] = Date.now()));
}
function D() {
    g.default.keys(O).forEach((e) => {
        let t = O[e];
        O[e] = new Set([...t].filter((t) => !m.ZP.isChannelOrParentOptedIn(e, t)));
    });
}
class w extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(c.default, u.Z, d.ZP, f.ZP, p.Z, _.ZP, m.ZP, l.Z), this.syncWith([m.ZP], D);
    }
    getNewChannelIds(e) {
        var t;
        return null != e && null == O[e] && R(e), null != e && null != (t = O[e]) ? t : y;
    }
    shouldIndicateNewChannel(e, t) {
        var n;
        if (null == e) return !1;
        let r = p.Z.getGuild(e);
        return (
            null != r &&
            !!r.features.has(E.GuildFeatures.COMMUNITY) &&
            (null != e && null == O[e] && R(e),
            (null == (n = O[e]) ? void 0 : n.has(t)) && null == _.ZP.getTrackedAckMessageId(t))
        );
    }
}
b(w, "displayName", "NewChannelsStore");
let x = new w(a.Z, {
    BULK_CLEAR_RECENTS: T,
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: C,
    SIDEBAR_VIEW_CHANNEL: A,
    SIDEBAR_VIEW_GUILD: N,
    GUILD_DELETE: S,
    CHANNEL_CREATE: I,
});
