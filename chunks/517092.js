"use strict";
n.d(t, { A: () => w }), n(938796);
var i = n(665260),
    r = n(17928),
    s = n(228366),
    a = n(280450),
    o = n(734057),
    l = n(71393),
    u = n(309010),
    c = n(543465),
    d = n(927813),
    _ = n(935208),
    h = n(887560),
    f = n(652215),
    E = n(790782),
    p = n(355097);
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
    C = 0;
function y() {
    if (null == S || !v(S)) return !1;
    let e = R(S);
    if (e.lastActionTime > Date.now() - d.A.Millis.DAY && e.viewDuration > g) return !1;
    let t = Date.now();
    return (e.lastActionTime = t), (e.viewDuration += t - N), (N = t), !0;
}
function O() {
    return (
        0 !== C && (clearInterval(C), (C = 0)),
        c.Ay.useNewNotifications &&
            (C = setInterval(() => {
                y() && D.emitChange();
            }, 15 * d.A.Millis.SECOND)),
        !1
    );
}
function R(e) {
    return e in I.channels || (I.channels[e] = { lastActionTime: 0, viewDuration: 0, numSends: 0 }), I.channels[e];
}
function v(e) {
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
    return c.Ay.getChannelUnreadSetting(t.guild_id, t.id) === E.e.UNSET && n !== E.e.ALL_MESSAGES;
}
function b(e, t) {
    if (null == t) return !1;
    let n = c.Ay.getChannelOverrides(e)[t];
    return (
        null != n &&
        !!(
            (null != n.message_notifications && n.message_notifications !== f.orn.NULL) ||
            (null != n.flags && (0, i.br)(n.flags, p.vv.UNREADS_ALL_MESSAGES | p.vv.UNREADS_ONLY_MENTIONS))
        )
    );
}
class L extends r.Ay.PersistedStore {
    static displayName = "UnreadSettingNoticeStore2";
    static persistKey = "UnreadSettingNoticeStore2";
    initialize(e) {
        null != e && (I.channels = e.channels), this.syncWith([c.Ay], O), this.waitFor(a.default, o.A, l.A, u.A, c.Ay);
    }
    getState() {
        return I;
    }
    getLastActionTime(e) {
        return I.channels[e]?.lastActionTime ?? 0;
    }
    maybeAutoUpgradeChannel(e) {
        if (!v(e)) return !1;
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
            (delete I.channels[e], T.add(e), (0, h.mA)(t.guild_id, t.id, E.e.ALL_MESSAGES), !0)
        );
    }
}
let D = new L(s.h, {
        CHANNEL_SELECT: function () {
            let e = y();
            return (S = u.A.getChannelId()), (N = Date.now()), e;
        },
        CONNECTION_OPEN: function () {
            (S = u.A.getChannelId()), (N = Date.now()), O();
            let e = Date.now() - A;
            _.default.forEach(I.channels, (t, n) => {
                let { lastActionTime: i } = t;
                i < e && delete I.channels[n];
            });
        },
        MESSAGE_CREATE: function (e) {
            if (e.optimistic || e.isPushNotification || e.message.author?.id !== a.default.getId() || !v(e.channelId))
                return !1;
            let t = R(e.channelId);
            (t.lastActionTime = Date.now()), t.numSends++;
        },
    }),
    w = D;
