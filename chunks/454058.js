n.d(t, { A: () => x }), n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(334738),
    o = n(940382),
    l = n(617617),
    c = n(961350),
    u = n(734057),
    d = n(808728),
    f = n(696451),
    p = n(71393),
    _ = n(222823),
    h = n(543465),
    m = n(927813),
    g = n(661191),
    E = n(652215);
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
    A = {};
function v(e) {
    let { guild: t } = e;
    delete O[t.id];
}
function S(e) {
    var t;
    let { channel: n } = e;
    n.isVocal() || ((O[n.guild_id] = null != (t = O[n.guild_id]) ? t : new Set()), O[n.guild_id].add(n.id));
}
function I(e) {
    let { guildId: t, channelIds: n } = e;
    if (null == O[t]) return !1;
    n.forEach((e) => O[t].delete(e)), 0 === O[t].size && delete O[t];
}
function T(e) {
    let { guildId: t, channelId: n } = e;
    return null != t && (null == O[t] || A[t] < Date.now() - m.A.Millis.HOUR ? (w(t), !0) : (null != n && R(t, n), !1));
}
function C(e) {
    let { guildId: t, channelId: n, sidebarType: r } = e;
    return null != t && r === o.PE.VIEW_CHANNEL && (R(t, n), !1);
}
function N(e) {
    let { guildId: t, baseChannelId: n } = e;
    return null != t && (R(t, n), !1);
}
function R(e, t) {
    let n = O[e];
    if (null != n && null != t && n.has(t)) {
        var r;
        !h.Ay.isOptInEnabled(e) ||
            (null == (r = u.A.getChannel(t)) ? void 0 : r.isThread()) ||
            null != _.Ay.ackMessageId(t) ||
            a.h.wait(() =>
                (0, s.ack)(
                    t,
                    {
                        object: E.ZSU.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
                        objectType: E.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
                    !0,
                    !0,
                    g.default.atPreviousMillisecond(t),
                ),
            );
    }
}
function w(e) {
    var t;
    if (null != O[e]) return;
    let n = d.Ay.getChannels(e)[d.I6].map((e) => e.channel.id),
        r = null == (t = f.Ay.getMember(e, c.default.getId())) ? void 0 : t.joinedAt;
    if (null == r) return;
    O[e] = new Set();
    let i = new Date(r).getTime();
    0 !== n.length &&
        ((O[e] = new Set(
            n.filter((t) => {
                let n = g.default.extractTimestamp(t);
                return (
                    null == _.Ay.getTrackedAckMessageId(t) &&
                    n > Date.now() - m.A.Millis.WEEK &&
                    n > l.A.getGuildRecentsDismissedAt(e) &&
                    n > i &&
                    !h.Ay.isChannelOrParentOptedIn(e, t)
                );
            }),
        )),
        (A[e] = Date.now()));
}
function P() {
    g.default.keys(O).forEach((e) => {
        let t = O[e];
        O[e] = new Set([...t].filter((t) => !h.Ay.isChannelOrParentOptedIn(e, t)));
    });
}
class D extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(c.default, u.A, d.Ay, f.Ay, p.A, _.Ay, h.Ay, l.A), this.syncWith([h.Ay], P);
    }
    getNewChannelIds(e) {
        var t;
        return null != e && null == O[e] && w(e), null != e && null != (t = O[e]) ? t : y;
    }
    shouldIndicateNewChannel(e, t) {
        var n;
        if (null == e) return !1;
        let r = p.A.getGuild(e);
        return (
            null != r &&
            !!r.features.has(E.GuildFeatures.COMMUNITY) &&
            (null != e && null == O[e] && w(e),
            (null == (n = O[e]) ? void 0 : n.has(t)) && null == _.Ay.getTrackedAckMessageId(t))
        );
    }
}
b(D, "displayName", "NewChannelsStore");
let x = new D(a.h, {
    BULK_CLEAR_RECENTS: I,
    CHANNEL_ACK: () => !0,
    CHANNEL_SELECT: T,
    SIDEBAR_VIEW_CHANNEL: C,
    SIDEBAR_VIEW_GUILD: N,
    GUILD_DELETE: v,
    CHANNEL_CREATE: S,
});
