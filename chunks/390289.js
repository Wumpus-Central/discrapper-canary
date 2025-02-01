n.d(t, { Z: () => L }), n(47120), n(789020);
var i,
    l = n(442837),
    a = n(570140),
    r = n(314897),
    s = n(592125),
    o = n(430824),
    c = n(944486),
    d = n(9156),
    u = n(70956),
    h = n(630388),
    p = n(709054),
    m = n(221259),
    f = n(981631),
    g = n(490897),
    _ = n(526761);
function C(e, t, n) {
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
let x = [
        {
            timeSinceJoin: 1 * u.Z.Millis.HOUR,
            sends: 1,
            viewTime: 1 * u.Z.Millis.MINUTE
        },
        {
            timeSinceJoin: 1 * u.Z.Millis.DAY,
            sends: 2,
            viewTime: 2 * u.Z.Millis.MINUTE
        },
        {
            timeSinceJoin: 1 * u.Z.Millis.WEEK,
            sends: 5,
            viewTime: 5 * u.Z.Millis.MINUTE
        },
        {
            timeSinceJoin: 1 * u.Z.Millis.DAYS_30,
            sends: 10,
            viewTime: 30 * u.Z.Millis.MINUTE
        }
    ],
    v = 5 * x[x.length - 1].viewTime,
    E = u.Z.Millis.WEEK,
    I = { channels: {} },
    b = new Set(),
    Z = null,
    N = 0,
    T = 0;
function S() {
    if (null == Z || !y(Z)) return !1;
    let e = A(Z);
    if (e.lastActionTime > Date.now() - u.Z.Millis.DAY && e.viewDuration > v) return !1;
    let t = Date.now();
    (e.lastActionTime = t), (e.viewDuration += t - N), (N = t);
}
function j() {
    return (
        0 !== T && (clearInterval(T), (T = 0)),
        d.ZP.useNewNotifications &&
            (T = setInterval(() => {
                S() && M.emitChange();
            }, 15 * u.Z.Millis.SECOND)),
        !1
    );
}
function A(e) {
    return (
        e in I.channels ||
            (I.channels[e] = {
                lastActionTime: 0,
                viewDuration: 0,
                numSends: 0
            }),
        I.channels[e]
    );
}
function y(e) {
    if (!d.ZP.useNewNotifications || b.has(e)) return !1;
    let t = s.Z.getBasicChannel(e);
    if (null == t || null == t.guild_id || d.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) || P(t.guild_id, t.id) || P(t.guild_id, t.parent_id)) return !1;
    let n = d.ZP.resolveUnreadSetting(t);
    return d.ZP.getChannelUnreadSetting(t.guild_id, t.id) === g.i.UNSET && n !== g.i.ALL_MESSAGES;
}
function P(e, t) {
    if (null == t) return !1;
    let n = d.ZP.getChannelOverrides(e)[t];
    return null != n && !!((null != n.message_notifications && n.message_notifications !== f.bL.NULL) || (null != n.flags && (0, h.EB)(n.flags, _.ic.UNREADS_ALL_MESSAGES | _.ic.UNREADS_ONLY_MENTIONS)));
}
class R extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        null != e && (I.channels = e.channels), this.syncWith([d.ZP], j), this.waitFor(d.ZP, c.Z, s.Z);
    }
    getState() {
        return I;
    }
    getLastActionTime(e) {
        var t, n;
        return null !== (n = null === (t = I.channels[e]) || void 0 === t ? void 0 : t.lastActionTime) && void 0 !== n ? n : 0;
    }
    maybeAutoUpgradeChannel(e) {
        if (!y(e)) return !1;
        let t = s.Z.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            !!(function (e) {
                var t;
                let n = o.Z.getGuild(e.guild_id),
                    i = null !== (t = null == n ? void 0 : n.joinedAt) && void 0 !== t ? t : new Date(),
                    l = Math.min(p.default.age(e.id), Date.now() - i.getTime()),
                    a = I.channels[e.id];
                if (null == a || a.lastActionTime < Date.now() - E) return !1;
                for (let e of x) if (l < e.timeSinceJoin && (a.numSends >= e.sends || a.viewDuration >= e.viewTime)) return !0;
                return !1;
            })(t) &&
            (delete I.channels[e], b.add(e), (0, m.IG)(t.guild_id, t.id, g.i.ALL_MESSAGES), !0)
        );
    }
}
C(R, 'displayName', 'UnreadSettingNoticeStore2'), C(R, 'persistKey', 'UnreadSettingNoticeStore2');
let M = new R(a.Z, {
        CHANNEL_SELECT: function () {
            let e = S();
            return (Z = c.Z.getChannelId()), (N = Date.now()), e;
        },
        CONNECTION_OPEN: function () {
            (Z = c.Z.getChannelId()), (N = Date.now()), j();
            let e = Date.now() - E;
            p.default.forEach(I.channels, (t, n) => {
                let { lastActionTime: i } = t;
                i < e && delete I.channels[n];
            });
        },
        MESSAGE_CREATE: function (e) {
            var t;
            if (e.optimistic || e.isPushNotification || (null === (t = e.message.author) || void 0 === t ? void 0 : t.id) !== r.default.getId() || !y(e.channelId)) return !1;
            let n = A(e.channelId);
            (n.lastActionTime = Date.now()), n.numSends++;
        }
    }),
    L = M;
