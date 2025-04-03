n.d(t, { Z: () => R }), n(47120), n(789020);
var r,
    i = n(442837),
    l = n(570140),
    o = n(314897),
    a = n(592125),
    s = n(430824),
    c = n(944486),
    u = n(9156),
    d = n(70956),
    p = n(630388),
    h = n(709054),
    f = n(221259),
    m = n(981631),
    g = n(490897),
    b = n(526761);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let C = [
        {
            timeSinceJoin: +d.Z.Millis.HOUR,
            sends: 1,
            viewTime: +d.Z.Millis.MINUTE
        },
        {
            timeSinceJoin: +d.Z.Millis.DAY,
            sends: 2,
            viewTime: 2 * d.Z.Millis.MINUTE
        },
        {
            timeSinceJoin: +d.Z.Millis.WEEK,
            sends: 5,
            viewTime: 5 * d.Z.Millis.MINUTE
        },
        {
            timeSinceJoin: +d.Z.Millis.DAYS_30,
            sends: 10,
            viewTime: 30 * d.Z.Millis.MINUTE
        }
    ],
    y = 5 * C[C.length - 1].viewTime,
    x = d.Z.Millis.WEEK,
    v = { channels: {} },
    j = new Set(),
    O = null,
    E = 0,
    N = 0;
function I() {
    if (null == O || !Z(O)) return !1;
    let e = S(O);
    if (e.lastActionTime > Date.now() - d.Z.Millis.DAY && e.viewDuration > y) return !1;
    let t = Date.now();
    (e.lastActionTime = t), (e.viewDuration += t - E), (E = t);
}
function P() {
    return (
        0 !== N && (clearInterval(N), (N = 0)),
        u.ZP.useNewNotifications &&
            (N = setInterval(() => {
                I() && w.emitChange();
            }, 15 * d.Z.Millis.SECOND)),
        !1
    );
}
function S(e) {
    return (
        e in v.channels ||
            (v.channels[e] = {
                lastActionTime: 0,
                viewDuration: 0,
                numSends: 0
            }),
        v.channels[e]
    );
}
function Z(e) {
    if (!u.ZP.useNewNotifications || j.has(e)) return !1;
    let t = a.Z.getBasicChannel(e);
    if (null == t || null == t.guild_id || u.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) || T(t.guild_id, t.id) || T(t.guild_id, t.parent_id)) return !1;
    let n = u.ZP.resolveUnreadSetting(t);
    return u.ZP.getChannelUnreadSetting(t.guild_id, t.id) === g.i.UNSET && n !== g.i.ALL_MESSAGES;
}
function T(e, t) {
    if (null == t) return !1;
    let n = u.ZP.getChannelOverrides(e)[t];
    return null != n && !!((null != n.message_notifications && n.message_notifications !== m.bL.NULL) || (null != n.flags && (0, p.EB)(n.flags, b.ic.UNREADS_ALL_MESSAGES | b.ic.UNREADS_ONLY_MENTIONS)));
}
class A extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (v.channels = e.channels), this.syncWith([u.ZP], P), this.waitFor(u.ZP, c.Z, a.Z);
    }
    getState() {
        return v;
    }
    getLastActionTime(e) {
        var t, n;
        return null != (n = null == (t = v.channels[e]) ? void 0 : t.lastActionTime) ? n : 0;
    }
    maybeAutoUpgradeChannel(e) {
        if (!Z(e)) return !1;
        let t = a.Z.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            !!(function (e) {
                var t;
                let n = s.Z.getGuild(e.guild_id),
                    r = null != (t = null == n ? void 0 : n.joinedAt) ? t : new Date(),
                    i = Math.min(h.default.age(e.id), Date.now() - r.getTime()),
                    l = v.channels[e.id];
                if (null == l || l.lastActionTime < Date.now() - x) return !1;
                for (let e of C) if (i < e.timeSinceJoin && (l.numSends >= e.sends || l.viewDuration >= e.viewTime)) return !0;
                return !1;
            })(t) &&
            (delete v.channels[e], j.add(e), (0, f.IG)(t.guild_id, t.id, g.i.ALL_MESSAGES), !0)
        );
    }
}
_(A, 'displayName', 'UnreadSettingNoticeStore2'), _(A, 'persistKey', 'UnreadSettingNoticeStore2');
let w = new A(l.Z, {
        CHANNEL_SELECT: function () {
            let e = I();
            return (O = c.Z.getChannelId()), (E = Date.now()), e;
        },
        CONNECTION_OPEN: function () {
            (O = c.Z.getChannelId()), (E = Date.now()), P();
            let e = Date.now() - x;
            h.default.forEach(v.channels, (t, n) => {
                let { lastActionTime: r } = t;
                r < e && delete v.channels[n];
            });
        },
        MESSAGE_CREATE: function (e) {
            var t;
            if (e.optimistic || e.isPushNotification || (null == (t = e.message.author) ? void 0 : t.id) !== o.default.getId() || !Z(e.channelId)) return !1;
            let n = S(e.channelId);
            (n.lastActionTime = Date.now()), n.numSends++;
        }
    }),
    R = w;
