n.d(t, { A: () => D }), n(938796);
var i = n(665260),
    l = n(311907),
    s = n(73153),
    a = n(961350),
    r = n(734057),
    o = n(71393),
    c = n(309010),
    d = n(543465),
    u = n(927813),
    h = n(661191),
    m = n(887560),
    A = n(652215),
    g = n(790782),
    p = n(355097);
let f = [
        { timeSinceJoin: +u.A.Millis.HOUR, sends: 1, viewTime: +u.A.Millis.MINUTE },
        { timeSinceJoin: +u.A.Millis.DAY, sends: 2, viewTime: 2 * u.A.Millis.MINUTE },
        { timeSinceJoin: +u.A.Millis.WEEK, sends: 5, viewTime: 5 * u.A.Millis.MINUTE },
        { timeSinceJoin: +u.A.Millis.DAYS_30, sends: 10, viewTime: 30 * u.A.Millis.MINUTE },
    ],
    _ = 5 * f[f.length - 1].viewTime,
    E = u.A.Millis.WEEK,
    x = { channels: {} },
    C = new Set(),
    S = null,
    I = 0,
    T = 0;
function N() {
    if (null == S || !v(S)) return !1;
    let e = b(S);
    if (e.lastActionTime > Date.now() - u.A.Millis.DAY && e.viewDuration > _) return !1;
    let t = Date.now();
    return (e.lastActionTime = t), (e.viewDuration += t - I), (I = t), !0;
}
function y() {
    return (
        0 !== T && (clearInterval(T), (T = 0)),
        d.Ay.useNewNotifications &&
            (T = setInterval(() => {
                N() && M.emitChange();
            }, 15 * u.A.Millis.SECOND)),
        !1
    );
}
function b(e) {
    return e in x.channels || (x.channels[e] = { lastActionTime: 0, viewDuration: 0, numSends: 0 }), x.channels[e];
}
function v(e) {
    if (!d.Ay.useNewNotifications || C.has(e)) return !1;
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
            (null != n.flags && (0, i.br)(n.flags, p.vv.UNREADS_ALL_MESSAGES | p.vv.UNREADS_ONLY_MENTIONS))
        )
    );
}
class R extends l.Ay.PersistedStore {
    static displayName = "UnreadSettingNoticeStore2";
    static persistKey = "UnreadSettingNoticeStore2";
    initialize(e) {
        null != e && (x.channels = e.channels), this.syncWith([d.Ay], y), this.waitFor(a.default, r.A, o.A, c.A, d.Ay);
    }
    getState() {
        return x;
    }
    getLastActionTime(e) {
        return x.channels[e]?.lastActionTime ?? 0;
    }
    maybeAutoUpgradeChannel(e) {
        if (!v(e)) return !1;
        let t = r.A.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            !!(function (e) {
                let t = o.A.getGuild(e.guild_id),
                    n = t?.joinedAt ?? new Date(),
                    i = Math.min(h.default.age(e.id), Date.now() - n.getTime()),
                    l = x.channels[e.id];
                if (null == l || l.lastActionTime < Date.now() - E) return !1;
                for (let e of f)
                    if (i < e.timeSinceJoin && (l.numSends >= e.sends || l.viewDuration >= e.viewTime)) return !0;
                return !1;
            })(t) &&
            (delete x.channels[e], C.add(e), (0, m.mA)(t.guild_id, t.id, g.e.ALL_MESSAGES), !0)
        );
    }
}
let M = new R(s.h, {
        CHANNEL_SELECT: function () {
            let e = N();
            return (S = c.A.getChannelId()), (I = Date.now()), e;
        },
        CONNECTION_OPEN: function () {
            (S = c.A.getChannelId()), (I = Date.now()), y();
            let e = Date.now() - E;
            h.default.forEach(x.channels, (t, n) => {
                let { lastActionTime: i } = t;
                i < e && delete x.channels[n];
            });
        },
        MESSAGE_CREATE: function (e) {
            if (e.optimistic || e.isPushNotification || e.message.author?.id !== a.default.getId() || !v(e.channelId))
                return !1;
            let t = b(e.channelId);
            (t.lastActionTime = Date.now()), t.numSends++;
        },
    }),
    D = M;
