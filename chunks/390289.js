n.d(t, { Z: () => U }), n(388685), n(997841);
var r,
    i = n(442837),
    o = n(570140),
    a = n(314897),
    s = n(592125),
    l = n(430824),
    c = n(944486),
    u = n(9156),
    d = n(70956),
    f = n(630388),
    _ = n(709054),
    p = n(221259),
    h = n(981631),
    m = n(490897),
    g = n(526761);
function E(e, t, n) {
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
let b = [
        {
            timeSinceJoin: +d.Z.Millis.HOUR,
            sends: 1,
            viewTime: +d.Z.Millis.MINUTE,
        },
        {
            timeSinceJoin: +d.Z.Millis.DAY,
            sends: 2,
            viewTime: 2 * d.Z.Millis.MINUTE,
        },
        {
            timeSinceJoin: +d.Z.Millis.WEEK,
            sends: 5,
            viewTime: 5 * d.Z.Millis.MINUTE,
        },
        {
            timeSinceJoin: +d.Z.Millis.DAYS_30,
            sends: 10,
            viewTime: 30 * d.Z.Millis.MINUTE,
        },
    ],
    y = 5 * b[b.length - 1].viewTime,
    O = d.Z.Millis.WEEK,
    v = { channels: {} },
    I = new Set(),
    T = null,
    S = 0,
    A = 0;
function N(e) {
    var t;
    if (
        e.optimistic ||
        e.isPushNotification ||
        (null == (t = e.message.author) ? void 0 : t.id) !== a.default.getId() ||
        !L(e.channelId)
    )
        return !1;
    let n = D(e.channelId);
    (n.lastActionTime = Date.now()), n.numSends++;
}
function C() {
    if (null == T || !L(T)) return !1;
    let e = D(T);
    if (e.lastActionTime > Date.now() - d.Z.Millis.DAY && e.viewDuration > y) return !1;
    let t = Date.now();
    (e.lastActionTime = t), (e.viewDuration += t - S), (S = t);
}
function R() {
    (T = c.Z.getChannelId()), (S = Date.now()), P();
    let e = Date.now() - O;
    _.default.forEach(v.channels, (t, n) => {
        let { lastActionTime: r } = t;
        r < e && delete v.channels[n];
    });
}
function P() {
    return (
        0 !== A && (clearInterval(A), (A = 0)),
        u.ZP.useNewNotifications &&
            (A = setInterval(() => {
                C() && k.emitChange();
            }, 15 * d.Z.Millis.SECOND)),
        !1
    );
}
function w() {
    let e = C();
    return (T = c.Z.getChannelId()), (S = Date.now()), e;
}
function D(e) {
    return (
        e in v.channels ||
            (v.channels[e] = {
                lastActionTime: 0,
                viewDuration: 0,
                numSends: 0,
            }),
        v.channels[e]
    );
}
function L(e) {
    if (!u.ZP.useNewNotifications || I.has(e)) return !1;
    let t = s.Z.getBasicChannel(e);
    if (
        null == t ||
        null == t.guild_id ||
        u.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
        M(t.guild_id, t.id) ||
        M(t.guild_id, t.parent_id)
    )
        return !1;
    let n = u.ZP.resolveUnreadSetting(t);
    return u.ZP.getChannelUnreadSetting(t.guild_id, t.id) === m.i.UNSET && n !== m.i.ALL_MESSAGES;
}
function x(e) {
    var t;
    let n = l.Z.getGuild(e.guild_id),
        r = null != (t = null == n ? void 0 : n.joinedAt) ? t : new Date(),
        i = Math.min(_.default.age(e.id), Date.now() - r.getTime()),
        o = v.channels[e.id];
    if (null == o || o.lastActionTime < Date.now() - O) return !1;
    for (let e of b) if (i < e.timeSinceJoin && (o.numSends >= e.sends || o.viewDuration >= e.viewTime)) return !0;
    return !1;
}
function M(e, t) {
    if (null == t) return !1;
    let n = u.ZP.getChannelOverrides(e)[t];
    return (
        null != n &&
        !!(
            (null != n.message_notifications && n.message_notifications !== h.bL.NULL) ||
            (null != n.flags && (0, f.EB)(n.flags, g.ic.UNREADS_ALL_MESSAGES | g.ic.UNREADS_ONLY_MENTIONS))
        )
    );
}
class j extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (v.channels = e.channels), this.syncWith([u.ZP], P), this.waitFor(u.ZP, c.Z, s.Z);
    }
    getState() {
        return v;
    }
    getLastActionTime(e) {
        var t, n;
        return null != (n = null == (t = v.channels[e]) ? void 0 : t.lastActionTime) ? n : 0;
    }
    maybeAutoUpgradeChannel(e) {
        if (!L(e)) return !1;
        let t = s.Z.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            !!x(t) &&
            (delete v.channels[e], I.add(e), (0, p.IG)(t.guild_id, t.id, m.i.ALL_MESSAGES), !0)
        );
    }
}
E(j, "displayName", "UnreadSettingNoticeStore2"), E(j, "persistKey", "UnreadSettingNoticeStore2");
let k = new j(o.Z, {
        CHANNEL_SELECT: w,
        CONNECTION_OPEN: R,
        MESSAGE_CREATE: N,
    }),
    U = k;
