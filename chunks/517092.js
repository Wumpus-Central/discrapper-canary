(n.d(t, { A: () => L }), n(938796));
var i = n(665260),
    l = n(17928),
    r = n(73153),
    s = n(280450),
    a = n(734057),
    o = n(71393),
    u = n(309010),
    d = n(543465),
    c = n(927813),
    h = n(935208),
    f = n(887560),
    g = n(652215),
    A = n(790782),
    p = n(355097);
let m = [
        { timeSinceJoin: +c.A.Millis.HOUR, sends: 1, viewTime: +c.A.Millis.MINUTE },
        { timeSinceJoin: +c.A.Millis.DAY, sends: 2, viewTime: 2 * c.A.Millis.MINUTE },
        { timeSinceJoin: +c.A.Millis.WEEK, sends: 5, viewTime: 5 * c.A.Millis.MINUTE },
        { timeSinceJoin: +c.A.Millis.DAYS_30, sends: 10, viewTime: 30 * c.A.Millis.MINUTE },
    ],
    I = 5 * m[m.length - 1].viewTime,
    E = c.A.Millis.WEEK,
    S = { channels: {} },
    C = new Set(),
    _ = null,
    T = 0,
    N = 0;
function v() {
    if (null == _ || !D(_)) return !1;
    let e = M(_);
    if (e.lastActionTime > Date.now() - c.A.Millis.DAY && e.viewDuration > I) return !1;
    let t = Date.now();
    return ((e.lastActionTime = t), (e.viewDuration += t - T), (T = t), !0);
}
function y() {
    return (
        0 !== N && (clearInterval(N), (N = 0)),
        d.Ay.useNewNotifications &&
            (N = setInterval(() => {
                v() && x.emitChange();
            }, 15 * c.A.Millis.SECOND)),
        !1
    );
}
function M(e) {
    return (e in S.channels || (S.channels[e] = { lastActionTime: 0, viewDuration: 0, numSends: 0 }), S.channels[e]);
}
function D(e) {
    if (!d.Ay.useNewNotifications || C.has(e)) return !1;
    let t = a.A.getBasicChannel(e);
    if (
        null == t ||
        null == t.guild_id ||
        d.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
        R(t.guild_id, t.id) ||
        R(t.guild_id, t.parent_id)
    )
        return !1;
    let n = d.Ay.resolveUnreadSetting(t);
    return d.Ay.getChannelUnreadSetting(t.guild_id, t.id) === A.e.UNSET && n !== A.e.ALL_MESSAGES;
}
function R(e, t) {
    if (null == t) return !1;
    let n = d.Ay.getChannelOverrides(e)[t];
    return (
        null != n &&
        !!(
            (null != n.message_notifications && n.message_notifications !== g.orn.NULL) ||
            (null != n.flags && (0, i.br)(n.flags, p.vv.UNREADS_ALL_MESSAGES | p.vv.UNREADS_ONLY_MENTIONS))
        )
    );
}
class O extends l.Ay.PersistedStore {
    static displayName = "UnreadSettingNoticeStore2";
    static persistKey = "UnreadSettingNoticeStore2";
    initialize(e) {
        (null != e && (S.channels = e.channels),
            this.syncWith([d.Ay], y),
            this.waitFor(s.default, a.A, o.A, u.Ay, d.Ay));
    }
    getState() {
        return S;
    }
    getLastActionTime(e) {
        return S.channels[e]?.lastActionTime ?? 0;
    }
    maybeAutoUpgradeChannel(e) {
        if (!D(e)) return !1;
        let t = a.A.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            !!(function (e) {
                let t = o.A.getGuild(e.guild_id),
                    n = t?.joinedAt ?? new Date(),
                    i = Math.min(h.default.age(e.id), Date.now() - n.getTime()),
                    l = S.channels[e.id];
                if (null == l || l.lastActionTime < Date.now() - E) return !1;
                for (let e of m)
                    if (i < e.timeSinceJoin && (l.numSends >= e.sends || l.viewDuration >= e.viewTime)) return !0;
                return !1;
            })(t) &&
            (delete S.channels[e], C.add(e), (0, f.mA)(t.guild_id, t.id, A.e.ALL_MESSAGES), !0)
        );
    }
}
let x = new O(r.h, {
        CHANNEL_SELECT: function () {
            let e = v();
            return ((_ = u.Ay.getChannelId()), (T = Date.now()), e);
        },
        CONNECTION_OPEN: function () {
            ((_ = u.Ay.getChannelId()), (T = Date.now()), y());
            let e = Date.now() - E;
            h.default.forEach(S.channels, (t, n) => {
                let { lastActionTime: i } = t;
                i < e && delete S.channels[n];
            });
        },
        MESSAGE_CREATE: function (e) {
            if (e.optimistic || e.isPushNotification || e.message.author?.id !== s.default.getId() || !D(e.channelId))
                return !1;
            let t = M(e.channelId);
            ((t.lastActionTime = Date.now()), t.numSends++);
        },
    }),
    L = x;
