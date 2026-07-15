"use strict";
n.d(t, { A: () => M }), n(938796);
var i = n(665260),
    r = n(17928),
    a = n(228366),
    s = n(280450),
    l = n(734057),
    o = n(71393),
    d = n(309010),
    c = n(543465),
    u = n(927813),
    _ = n(935208),
    E = n(887560),
    A = n(652215),
    h = n(790782),
    I = n(355097);
let f = [
        { timeSinceJoin: +u.A.Millis.HOUR, sends: 1, viewTime: +u.A.Millis.MINUTE },
        { timeSinceJoin: +u.A.Millis.DAY, sends: 2, viewTime: 2 * u.A.Millis.MINUTE },
        { timeSinceJoin: +u.A.Millis.WEEK, sends: 5, viewTime: 5 * u.A.Millis.MINUTE },
        { timeSinceJoin: +u.A.Millis.DAYS_30, sends: 10, viewTime: 30 * u.A.Millis.MINUTE },
    ],
    p = 5 * f[f.length - 1].viewTime,
    T = u.A.Millis.WEEK,
    m = { channels: {} },
    g = new Set(),
    S = null,
    N = 0,
    C = 0;
function R() {
    if (null == S || !D(S)) return !1;
    let e = L(S);
    if (e.lastActionTime > Date.now() - u.A.Millis.DAY && e.viewDuration > p) return !1;
    let t = Date.now();
    return (e.lastActionTime = t), (e.viewDuration += t - N), (N = t), !0;
}
function O() {
    return (
        0 !== C && (clearInterval(C), (C = 0)),
        c.Ay.useNewNotifications &&
            (C = setInterval(() => {
                R() && b.emitChange();
            }, 15 * u.A.Millis.SECOND)),
        !1
    );
}
function L(e) {
    return e in m.channels || (m.channels[e] = { lastActionTime: 0, viewDuration: 0, numSends: 0 }), m.channels[e];
}
function D(e) {
    if (!c.Ay.useNewNotifications || g.has(e)) return !1;
    let t = l.A.getBasicChannel(e);
    if (
        null == t ||
        null == t.guild_id ||
        c.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
        y(t.guild_id, t.id) ||
        y(t.guild_id, t.parent_id)
    )
        return !1;
    let n = c.Ay.resolveUnreadSetting(t);
    return c.Ay.getChannelUnreadSetting(t.guild_id, t.id) === h.e.UNSET && n !== h.e.ALL_MESSAGES;
}
function y(e, t) {
    if (null == t) return !1;
    let n = c.Ay.getChannelOverrides(e)[t];
    return (
        null != n &&
        !!(
            (null != n.message_notifications && n.message_notifications !== A.orn.NULL) ||
            (null != n.flags && (0, i.br)(n.flags, I.vv.UNREADS_ALL_MESSAGES | I.vv.UNREADS_ONLY_MENTIONS))
        )
    );
}
class v extends r.Ay.PersistedStore {
    static displayName = "UnreadSettingNoticeStore2";
    static persistKey = "UnreadSettingNoticeStore2";
    initialize(e) {
        null != e && (m.channels = e.channels), this.syncWith([c.Ay], O), this.waitFor(s.default, l.A, o.A, d.A, c.Ay);
    }
    getState() {
        return m;
    }
    getLastActionTime(e) {
        return m.channels[e]?.lastActionTime ?? 0;
    }
    maybeAutoUpgradeChannel(e) {
        if (!D(e)) return !1;
        let t = l.A.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            !!(function (e) {
                let t = o.A.getGuild(e.guild_id),
                    n = t?.joinedAt ?? new Date(),
                    i = Math.min(_.default.age(e.id), Date.now() - n.getTime()),
                    r = m.channels[e.id];
                if (null == r || r.lastActionTime < Date.now() - T) return !1;
                for (let e of f)
                    if (i < e.timeSinceJoin && (r.numSends >= e.sends || r.viewDuration >= e.viewTime)) return !0;
                return !1;
            })(t) &&
            (delete m.channels[e], g.add(e), (0, E.mA)(t.guild_id, t.id, h.e.ALL_MESSAGES), !0)
        );
    }
}
let b = new v(a.h, {
        CHANNEL_SELECT: function () {
            let e = R();
            return (S = d.A.getChannelId()), (N = Date.now()), e;
        },
        CONNECTION_OPEN: function () {
            (S = d.A.getChannelId()), (N = Date.now()), O();
            let e = Date.now() - T;
            _.default.forEach(m.channels, (t, n) => {
                let { lastActionTime: i } = t;
                i < e && delete m.channels[n];
            });
        },
        MESSAGE_CREATE: function (e) {
            if (e.optimistic || e.isPushNotification || e.message.author?.id !== s.default.getId() || !D(e.channelId))
                return !1;
            let t = L(e.channelId);
            (t.lastActionTime = Date.now()), t.numSends++;
        },
    }),
    M = b;
