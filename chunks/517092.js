n.d(t, { A: () => R }), n(938796);
var i = n(665260),
    l = n(17928),
    s = n(228366),
    r = n(495544),
    a = n(734057),
    u = n(71393),
    o = n(309010),
    d = n(543465),
    c = n(927813),
    h = n(935208),
    A = n(887560),
    f = n(652215),
    g = n(790782),
    E = n(355097);
let I = [
        { timeSinceJoin: +c.A.Millis.HOUR, sends: 1, viewTime: +c.A.Millis.MINUTE },
        { timeSinceJoin: +c.A.Millis.DAY, sends: 2, viewTime: 2 * c.A.Millis.MINUTE },
        { timeSinceJoin: +c.A.Millis.WEEK, sends: 5, viewTime: 5 * c.A.Millis.MINUTE },
        { timeSinceJoin: +c.A.Millis.DAYS_30, sends: 10, viewTime: 30 * c.A.Millis.MINUTE },
    ],
    S = 5 * I[I.length - 1].viewTime,
    _ = c.A.Millis.WEEK,
    T = { channels: {} },
    C = new Set(),
    m = null,
    p = 0,
    N = 0;
function M() {
    if (null == m || !y(m)) return !1;
    let e = v(m);
    if (e.lastActionTime > Date.now() - c.A.Millis.DAY && e.viewDuration > S) return !1;
    let t = Date.now();
    return (e.lastActionTime = t), (e.viewDuration += t - p), (p = t), !0;
}
function D() {
    return (
        0 !== N && (clearInterval(N), (N = 0)),
        d.Ay.useNewNotifications &&
            (N = setInterval(() => {
                M() && L.emitChange();
            }, 15 * c.A.Millis.SECOND)),
        !1
    );
}
function v(e) {
    return e in T.channels || (T.channels[e] = { lastActionTime: 0, viewDuration: 0, numSends: 0 }), T.channels[e];
}
function y(e) {
    if (!d.Ay.useNewNotifications || C.has(e)) return !1;
    let t = a.A.getBasicChannel(e);
    if (
        null == t ||
        null == t.guild_id ||
        d.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
        U(t.guild_id, t.id) ||
        U(t.guild_id, t.parent_id)
    )
        return !1;
    let n = d.Ay.resolveUnreadSetting(t);
    return d.Ay.getChannelUnreadSetting(t.guild_id, t.id) === g.e.UNSET && n !== g.e.ALL_MESSAGES;
}
function U(e, t) {
    if (null == t) return !1;
    let n = d.Ay.getChannelOverrides(e)[t];
    return (
        null != n &&
        !!(
            (null != n.message_notifications && n.message_notifications !== f.orn.NULL) ||
            (null != n.flags && (0, i.br)(n.flags, E.vv.UNREADS_ALL_MESSAGES | E.vv.UNREADS_ONLY_MENTIONS))
        )
    );
}
class O extends l.Ay.PersistedStore {
    static displayName = "UnreadSettingNoticeStore2";
    static persistKey = "UnreadSettingNoticeStore2";
    initialize(e) {
        null != e && (T.channels = e.channels), this.syncWith([d.Ay], D), this.waitFor(r.default, a.A, u.A, o.A, d.Ay);
    }
    getState() {
        return T;
    }
    getLastActionTime(e) {
        return T.channels[e]?.lastActionTime ?? 0;
    }
    maybeAutoUpgradeChannel(e) {
        if (!y(e)) return !1;
        let t = a.A.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            !!(function (e) {
                let t = u.A.getGuild(e.guild_id),
                    n = t?.joinedAt ?? new Date(),
                    i = Math.min(h.default.age(e.id), Date.now() - n.getTime()),
                    l = T.channels[e.id];
                if (null == l || l.lastActionTime < Date.now() - _) return !1;
                for (let e of I)
                    if (i < e.timeSinceJoin && (l.numSends >= e.sends || l.viewDuration >= e.viewTime)) return !0;
                return !1;
            })(t) &&
            (delete T.channels[e], C.add(e), (0, A.mA)(t.guild_id, t.id, g.e.ALL_MESSAGES), !0)
        );
    }
}
let L = new O(s.h, {
        CHANNEL_SELECT: function () {
            let e = M();
            return (m = o.A.getChannelId()), (p = Date.now()), e;
        },
        CONNECTION_OPEN: function () {
            (m = o.A.getChannelId()), (p = Date.now()), D();
            let e = Date.now() - _;
            h.default.forEach(T.channels, (t, n) => {
                let { lastActionTime: i } = t;
                i < e && delete T.channels[n];
            });
        },
        MESSAGE_CREATE: function (e) {
            if (e.optimistic || e.isPushNotification || e.message.author?.id !== r.default.getId() || !y(e.channelId))
                return !1;
            let t = v(e.channelId);
            (t.lastActionTime = Date.now()), t.numSends++;
        },
    }),
    R = L;
