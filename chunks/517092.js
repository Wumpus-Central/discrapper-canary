n.d(t, { A: () => L }), n(938796);
var i = n(665260),
    l = n(311907),
    a = n(73153),
    s = n(961350),
    r = n(734057),
    o = n(71393),
    c = n(309010),
    d = n(543465),
    u = n(927813),
    h = n(661191),
    m = n(887560),
    A = n(652215),
    g = n(790782),
    _ = n(355097);
let p = [
        { timeSinceJoin: +u.A.Millis.HOUR, sends: 1, viewTime: +u.A.Millis.MINUTE },
        { timeSinceJoin: +u.A.Millis.DAY, sends: 2, viewTime: 2 * u.A.Millis.MINUTE },
        { timeSinceJoin: +u.A.Millis.WEEK, sends: 5, viewTime: 5 * u.A.Millis.MINUTE },
        { timeSinceJoin: +u.A.Millis.DAYS_30, sends: 10, viewTime: 30 * u.A.Millis.MINUTE },
    ],
    f = 5 * p[p.length - 1].viewTime,
    E = u.A.Millis.WEEK,
    C = { channels: {} },
    x = new Set(),
    S = null,
    I = 0,
    v = 0;
function N() {
    if (null == S || !b(S)) return !1;
    let e = y(S);
    if (e.lastActionTime > Date.now() - u.A.Millis.DAY && e.viewDuration > f) return !1;
    let t = Date.now();
    return (e.lastActionTime = t), (e.viewDuration += t - I), (I = t), !0;
}
function T() {
    return (
        0 !== v && (clearInterval(v), (v = 0)),
        d.Ay.useNewNotifications &&
            (v = setInterval(() => {
                N() && M.emitChange();
            }, 15 * u.A.Millis.SECOND)),
        !1
    );
}
function y(e) {
    return e in C.channels || (C.channels[e] = { lastActionTime: 0, viewDuration: 0, numSends: 0 }), C.channels[e];
}
function b(e) {
    if (!d.Ay.useNewNotifications || x.has(e)) return !1;
    let t = r.A.getBasicChannel(e);
    if (
        null == t ||
        null == t.guild_id ||
        d.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
        j(t.guild_id, t.id) ||
        j(t.guild_id, t.parent_id)
    )
        return !1;
    let n = d.Ay.resolveUnreadSetting(t);
    return d.Ay.getChannelUnreadSetting(t.guild_id, t.id) === g.e.UNSET && n !== g.e.ALL_MESSAGES;
}
function j(e, t) {
    if (null == t) return !1;
    let n = d.Ay.getChannelOverrides(e)[t];
    return (
        null != n &&
        !!(
            (null != n.message_notifications && n.message_notifications !== A.orn.NULL) ||
            (null != n.flags && (0, i.br)(n.flags, _.vv.UNREADS_ALL_MESSAGES | _.vv.UNREADS_ONLY_MENTIONS))
        )
    );
}
class R extends l.Ay.PersistedStore {
    static displayName = "UnreadSettingNoticeStore2";
    static persistKey = "UnreadSettingNoticeStore2";
    initialize(e) {
        null != e && (C.channels = e.channels), this.syncWith([d.Ay], T), this.waitFor(s.default, r.A, o.A, c.A, d.Ay);
    }
    getState() {
        return C;
    }
    getLastActionTime(e) {
        return C.channels[e]?.lastActionTime ?? 0;
    }
    maybeAutoUpgradeChannel(e) {
        if (!b(e)) return !1;
        let t = r.A.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            !!(function (e) {
                let t = o.A.getGuild(e.guild_id),
                    n = t?.joinedAt ?? new Date(),
                    i = Math.min(h.default.age(e.id), Date.now() - n.getTime()),
                    l = C.channels[e.id];
                if (null == l || l.lastActionTime < Date.now() - E) return !1;
                for (let e of p)
                    if (i < e.timeSinceJoin && (l.numSends >= e.sends || l.viewDuration >= e.viewTime)) return !0;
                return !1;
            })(t) &&
            (delete C.channels[e], x.add(e), (0, m.mA)(t.guild_id, t.id, g.e.ALL_MESSAGES), !0)
        );
    }
}
let M = new R(a.h, {
        CHANNEL_SELECT: function () {
            let e = N();
            return (S = c.A.getChannelId()), (I = Date.now()), e;
        },
        CONNECTION_OPEN: function () {
            (S = c.A.getChannelId()), (I = Date.now()), T();
            let e = Date.now() - E;
            h.default.forEach(C.channels, (t, n) => {
                let { lastActionTime: i } = t;
                i < e && delete C.channels[n];
            });
        },
        MESSAGE_CREATE: function (e) {
            if (e.optimistic || e.isPushNotification || e.message.author?.id !== s.default.getId() || !b(e.channelId))
                return !1;
            let t = y(e.channelId);
            (t.lastActionTime = Date.now()), t.numSends++;
        },
    }),
    L = M;
