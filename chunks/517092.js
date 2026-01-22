n.d(t, {
    A: () => D,
}),
    n(896048),
    n(938796);
var r,
    l = n(665260),
    i = n(311907),
    a = n(73153),
    s = n(961350),
    o = n(734057),
    c = n(71393),
    u = n(309010),
    d = n(543465),
    f = n(927813),
    p = n(661191),
    h = n(887560),
    b = n(652215),
    g = n(790782),
    m = n(355097);

function A(e, t, n) {
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
let y = [
        {
            timeSinceJoin: +f.A.Millis.HOUR,
            sends: 1,
            viewTime: +f.A.Millis.MINUTE,
        },
        {
            timeSinceJoin: +f.A.Millis.DAY,
            sends: 2,
            viewTime: 2 * f.A.Millis.MINUTE,
        },
        {
            timeSinceJoin: +f.A.Millis.WEEK,
            sends: 5,
            viewTime: 5 * f.A.Millis.MINUTE,
        },
        {
            timeSinceJoin: +f.A.Millis.DAYS_30,
            sends: 10,
            viewTime: 30 * f.A.Millis.MINUTE,
        },
    ],
    O = 5 * y[y.length - 1].viewTime,
    j = f.A.Millis.WEEK,
    v = {
        channels: {},
    },
    x = new Set(),
    E = null,
    _ = 0,
    C = 0;

function S() {
    if (null == E || !T(E)) return !1;
    let e = N(E);
    if (e.lastActionTime > Date.now() - f.A.Millis.DAY && e.viewDuration > O) return !1;
    let t = Date.now();
    (e.lastActionTime = t), (e.viewDuration += t - _), (_ = t);
}

function I() {
    return (
        0 !== C && (clearInterval(C), (C = 0)),
        d.Ay.useNewNotifications &&
            (C = setInterval(() => {
                S() && R.emitChange();
            }, 15 * f.A.Millis.SECOND)),
        !1
    );
}

function N(e) {
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

function T(e) {
    if (!d.Ay.useNewNotifications || x.has(e)) return !1;
    let t = o.A.getBasicChannel(e);
    if (
        null == t ||
        null == t.guild_id ||
        d.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
        P(t.guild_id, t.id) ||
        P(t.guild_id, t.parent_id)
    )
        return !1;
    let n = d.Ay.resolveUnreadSetting(t);
    return d.Ay.getChannelUnreadSetting(t.guild_id, t.id) === g.e.UNSET && n !== g.e.ALL_MESSAGES;
}

function P(e, t) {
    if (null == t) return !1;
    let n = d.Ay.getChannelOverrides(e)[t];
    return (
        null != n &&
        !!(
            (null != n.message_notifications && n.message_notifications !== b.orn.NULL) ||
            (null != n.flags && (0, l.br)(n.flags, m.vv.UNREADS_ALL_MESSAGES | m.vv.UNREADS_ONLY_MENTIONS))
        )
    );
}
class w extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        null != e && (v.channels = e.channels), this.syncWith([d.Ay], I), this.waitFor(s.default, o.A, c.A, u.A, d.Ay);
    }
    getState() {
        return v;
    }
    getLastActionTime(e) {
        var t, n;
        return null != (t = null == (n = v.channels[e]) ? void 0 : n.lastActionTime) ? t : 0;
    }
    maybeAutoUpgradeChannel(e) {
        if (!T(e)) return !1;
        let t = o.A.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            !!(function (e) {
                var t;
                let n = c.A.getGuild(e.guild_id),
                    r = null != (t = null == n ? void 0 : n.joinedAt) ? t : new Date(),
                    l = Math.min(p.default.age(e.id), Date.now() - r.getTime()),
                    i = v.channels[e.id];
                if (null == i || i.lastActionTime < Date.now() - j) return !1;
                for (let e of y)
                    if (l < e.timeSinceJoin && (i.numSends >= e.sends || i.viewDuration >= e.viewTime)) return !0;
                return !1;
            })(t) &&
            (delete v.channels[e], x.add(e), (0, h.mA)(t.guild_id, t.id, g.e.ALL_MESSAGES), !0)
        );
    }
}
A(w, "displayName", "UnreadSettingNoticeStore2"), A(w, "persistKey", "UnreadSettingNoticeStore2");
let R = new w(a.h, {
        CHANNEL_SELECT: function () {
            let e = S();
            return (E = u.A.getChannelId()), (_ = Date.now()), e;
        },
        CONNECTION_OPEN: function () {
            (E = u.A.getChannelId()), (_ = Date.now()), I();
            let e = Date.now() - j;
            p.default.forEach(v.channels, (t, n) => {
                let { lastActionTime: r } = t;
                r < e && delete v.channels[n];
            });
        },
        MESSAGE_CREATE: function (e) {
            var t;
            if (
                e.optimistic ||
                e.isPushNotification ||
                (null == (t = e.message.author) ? void 0 : t.id) !== s.default.getId() ||
                !T(e.channelId)
            )
                return !1;
            let n = N(e.channelId);
            (n.lastActionTime = Date.now()), n.numSends++;
        },
    }),
    D = R;
