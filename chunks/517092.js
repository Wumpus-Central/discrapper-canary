n.d(t, { A: () => x }), n(938796);
var i = n(665260),
    a = n(17928),
    r = n(228366),
    l = n(495544),
    s = n(734057),
    o = n(71393),
    c = n(309010),
    d = n(543465),
    u = n(927813),
    _ = n(935208),
    E = n(887560),
    f = n(652215),
    A = n(790782),
    S = n(355097);
let g = [
        { timeSinceJoin: +u.A.Millis.HOUR, sends: 1, viewTime: +u.A.Millis.MINUTE },
        { timeSinceJoin: +u.A.Millis.DAY, sends: 2, viewTime: 2 * u.A.Millis.MINUTE },
        { timeSinceJoin: +u.A.Millis.WEEK, sends: 5, viewTime: 5 * u.A.Millis.MINUTE },
        { timeSinceJoin: +u.A.Millis.DAYS_30, sends: 10, viewTime: 30 * u.A.Millis.MINUTE },
    ],
    m = 5 * g[g.length - 1].viewTime,
    h = u.A.Millis.WEEK,
    p = { channels: {} },
    C = new Set(),
    N = null,
    b = 0,
    T = 0;
function I() {
    if (null == N || !D(N)) return !1;
    let e = v(N);
    if (e.lastActionTime > Date.now() - u.A.Millis.DAY && e.viewDuration > m) return !1;
    let t = Date.now();
    return (e.lastActionTime = t), (e.viewDuration += t - b), (b = t), !0;
}
function L() {
    return (
        0 !== T && (clearInterval(T), (T = 0)),
        d.Ay.useNewNotifications &&
            (T = setInterval(() => {
                I() && O.emitChange();
            }, 15 * u.A.Millis.SECOND)),
        !1
    );
}
function v(e) {
    return e in p.channels || (p.channels[e] = { lastActionTime: 0, viewDuration: 0, numSends: 0 }), p.channels[e];
}
function D(e) {
    if (!d.Ay.useNewNotifications || C.has(e)) return !1;
    let t = s.A.getBasicChannel(e);
    if (
        null == t ||
        null == t.guild_id ||
        d.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
        M(t.guild_id, t.id) ||
        M(t.guild_id, t.parent_id)
    )
        return !1;
    let n = d.Ay.resolveUnreadSetting(t);
    return d.Ay.getChannelUnreadSetting(t.guild_id, t.id) === A.e.UNSET && n !== A.e.ALL_MESSAGES;
}
function M(e, t) {
    if (null == t) return !1;
    let n = d.Ay.getChannelOverrides(e)[t];
    return (
        null != n &&
        !!(
            (null != n.message_notifications && n.message_notifications !== f.orn.NULL) ||
            (null != n.flags && (0, i.br)(n.flags, S.vv.UNREADS_ALL_MESSAGES | S.vv.UNREADS_ONLY_MENTIONS))
        )
    );
}
class R extends a.Ay.PersistedStore {
    static displayName = "UnreadSettingNoticeStore2";
    static persistKey = "UnreadSettingNoticeStore2";
    initialize(e) {
        null != e && (p.channels = e.channels), this.syncWith([d.Ay], L), this.waitFor(l.default, s.A, o.A, c.A, d.Ay);
    }
    getState() {
        return p;
    }
    getLastActionTime(e) {
        return p.channels[e]?.lastActionTime ?? 0;
    }
    maybeAutoUpgradeChannel(e) {
        if (!D(e)) return !1;
        let t = s.A.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            !!(function (e) {
                let t = o.A.getGuild(e.guild_id),
                    n = t?.joinedAt ?? new Date(),
                    i = Math.min(_.default.age(e.id), Date.now() - n.getTime()),
                    a = p.channels[e.id];
                if (null == a || a.lastActionTime < Date.now() - h) return !1;
                for (let e of g)
                    if (i < e.timeSinceJoin && (a.numSends >= e.sends || a.viewDuration >= e.viewTime)) return !0;
                return !1;
            })(t) &&
            (delete p.channels[e], C.add(e), (0, E.mA)(t.guild_id, t.id, A.e.ALL_MESSAGES), !0)
        );
    }
}
let O = new R(r.h, {
        CHANNEL_SELECT: function () {
            let e = I();
            return (N = c.A.getChannelId()), (b = Date.now()), e;
        },
        CONNECTION_OPEN: function () {
            (N = c.A.getChannelId()), (b = Date.now()), L();
            let e = Date.now() - h;
            _.default.forEach(p.channels, (t, n) => {
                let { lastActionTime: i } = t;
                i < e && delete p.channels[n];
            });
        },
        MESSAGE_CREATE: function (e) {
            if (e.optimistic || e.isPushNotification || e.message.author?.id !== l.default.getId() || !D(e.channelId))
                return !1;
            let t = v(e.channelId);
            (t.lastActionTime = Date.now()), t.numSends++;
        },
    }),
    x = O;
