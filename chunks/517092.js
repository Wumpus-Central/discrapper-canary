"use strict";
n.d(t, { A: () => w }), n(938796);
var i = n(665260),
    r = n(17928),
    s = n(228366),
    a = n(495544),
    o = n(734057),
    l = n(71393),
    u = n(309010),
    c = n(543465),
    d = n(927813),
    _ = n(935208),
    f = n(887560),
    h = n(652215),
    p = n(790782),
    E = n(355097);
let m = [
        { timeSinceJoin: +d.A.Millis.HOUR, sends: 1, viewTime: +d.A.Millis.MINUTE },
        { timeSinceJoin: +d.A.Millis.DAY, sends: 2, viewTime: 2 * d.A.Millis.MINUTE },
        { timeSinceJoin: +d.A.Millis.WEEK, sends: 5, viewTime: 5 * d.A.Millis.MINUTE },
        { timeSinceJoin: +d.A.Millis.DAYS_30, sends: 10, viewTime: 30 * d.A.Millis.MINUTE },
    ],
    g = 5 * m[m.length - 1].viewTime,
    A = d.A.Millis.WEEK,
    I = { channels: {} },
    T = new Set(),
    S = null,
    N = 0,
    y = 0;
function C() {
    if (null == S || !R(S)) return !1;
    let e = O(S);
    if (e.lastActionTime > Date.now() - d.A.Millis.DAY && e.viewDuration > g) return !1;
    let t = Date.now();
    return (e.lastActionTime = t), (e.viewDuration += t - N), (N = t), !0;
}
function v() {
    return (
        0 !== y && (clearInterval(y), (y = 0)),
        c.Ay.useNewNotifications &&
            (y = setInterval(() => {
                C() && L.emitChange();
            }, 15 * d.A.Millis.SECOND)),
        !1
    );
}
function O(e) {
    return e in I.channels || (I.channels[e] = { lastActionTime: 0, viewDuration: 0, numSends: 0 }), I.channels[e];
}
function R(e) {
    if (!c.Ay.useNewNotifications || T.has(e)) return !1;
    let t = o.A.getBasicChannel(e);
    if (
        null == t ||
        null == t.guild_id ||
        c.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
        b(t.guild_id, t.id) ||
        b(t.guild_id, t.parent_id)
    )
        return !1;
    let n = c.Ay.resolveUnreadSetting(t);
    return c.Ay.getChannelUnreadSetting(t.guild_id, t.id) === p.e.UNSET && n !== p.e.ALL_MESSAGES;
}
function b(e, t) {
    if (null == t) return !1;
    let n = c.Ay.getChannelOverrides(e)[t];
    return (
        null != n &&
        !!(
            (null != n.message_notifications && n.message_notifications !== h.orn.NULL) ||
            (null != n.flags && (0, i.br)(n.flags, E.vv.UNREADS_ALL_MESSAGES | E.vv.UNREADS_ONLY_MENTIONS))
        )
    );
}
class D extends r.Ay.PersistedStore {
    static displayName = "UnreadSettingNoticeStore2";
    static persistKey = "UnreadSettingNoticeStore2";
    initialize(e) {
        null != e && (I.channels = e.channels), this.syncWith([c.Ay], v), this.waitFor(a.default, o.A, l.A, u.A, c.Ay);
    }
    getState() {
        return I;
    }
    getLastActionTime(e) {
        return I.channels[e]?.lastActionTime ?? 0;
    }
    maybeAutoUpgradeChannel(e) {
        if (!R(e)) return !1;
        let t = o.A.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            !!(function (e) {
                let t = l.A.getGuild(e.guild_id),
                    n = t?.joinedAt ?? new Date(),
                    i = Math.min(_.default.age(e.id), Date.now() - n.getTime()),
                    r = I.channels[e.id];
                if (null == r || r.lastActionTime < Date.now() - A) return !1;
                for (let e of m)
                    if (i < e.timeSinceJoin && (r.numSends >= e.sends || r.viewDuration >= e.viewTime)) return !0;
                return !1;
            })(t) &&
            (delete I.channels[e], T.add(e), (0, f.mA)(t.guild_id, t.id, p.e.ALL_MESSAGES), !0)
        );
    }
}
let L = new D(s.h, {
        CHANNEL_SELECT: function () {
            let e = C();
            return (S = u.A.getChannelId()), (N = Date.now()), e;
        },
        CONNECTION_OPEN: function () {
            (S = u.A.getChannelId()), (N = Date.now()), v();
            let e = Date.now() - A;
            _.default.forEach(I.channels, (t, n) => {
                let { lastActionTime: i } = t;
                i < e && delete I.channels[n];
            });
        },
        MESSAGE_CREATE: function (e) {
            if (e.optimistic || e.isPushNotification || e.message.author?.id !== a.default.getId() || !R(e.channelId))
                return !1;
            let t = O(e.channelId);
            (t.lastActionTime = Date.now()), t.numSends++;
        },
    }),
    w = L;
