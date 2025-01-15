n(47120), n(789020);
var i,
    l = n(442837),
    r = n(570140),
    a = n(314897),
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
    C = n(526761);
function x(e, t, n) {
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
let v = [
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
    _ = 5 * v[v.length - 1].viewTime,
    I = u.Z.Millis.WEEK,
    E = { channels: {} },
    b = new Set(),
    Z = null,
    S = 0,
    N = 0;
function T() {
    if (null == Z || !y(Z)) return !1;
    let e = A(Z);
    if (e.lastActionTime > Date.now() - u.Z.Millis.DAY && e.viewDuration > _) return !1;
    let t = Date.now();
    (e.lastActionTime = t), (e.viewDuration += t - S), (S = t);
}
function j() {
    return (
        0 !== N && (clearInterval(N), (N = 0)),
        d.ZP.useNewNotifications &&
            (N = setInterval(() => {
                T() && R.emitChange();
            }, 15 * u.Z.Millis.SECOND)),
        !1
    );
}
function A(e) {
    return e in E.channels
        ? E.channels[e]
        : ((E.channels[e] = {
              lastActionTime: 0,
              viewDuration: 0,
              numSends: 0
          }),
          E.channels[e]);
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
    return null != n && (!!((null != n.message_notifications && n.message_notifications !== f.bL.NULL) || (null != n.flags && (0, h.EB)(n.flags, C.ic.UNREADS_ALL_MESSAGES | C.ic.UNREADS_ONLY_MENTIONS))) || !1);
}
class M extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        null != e && (E.channels = e.channels), this.syncWith([d.ZP], j), this.waitFor(d.ZP, c.Z, s.Z);
    }
    getState() {
        return E;
    }
    getLastActionTime(e) {
        var t, n;
        return null !== (n = null === (t = E.channels[e]) || void 0 === t ? void 0 : t.lastActionTime) && void 0 !== n ? n : 0;
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
                    l = p.default.age(e.id),
                    r = Math.min(l, Date.now() - i.getTime()),
                    a = E.channels[e.id];
                if (null == a || a.lastActionTime < Date.now() - I) return !1;
                for (let e of v) if (r < e.timeSinceJoin && (a.numSends >= e.sends || a.viewDuration >= e.viewTime)) return !0;
                return !1;
            })(t) &&
            (delete E.channels[e], b.add(e), (0, m.IG)(t.guild_id, t.id, g.i.ALL_MESSAGES), !0)
        );
    }
}
x(M, 'displayName', 'UnreadSettingNoticeStore2'), x(M, 'persistKey', 'UnreadSettingNoticeStore2');
let R = new M(r.Z, {
    CHANNEL_SELECT: function () {
        let e = T();
        return (Z = c.Z.getChannelId()), (S = Date.now()), e;
    },
    CONNECTION_OPEN: function () {
        (Z = c.Z.getChannelId()), (S = Date.now()), j();
        let e = Date.now() - I;
        p.default.forEach(E.channels, (t, n) => {
            let { lastActionTime: i } = t;
            i < e && delete E.channels[n];
        });
    },
    MESSAGE_CREATE: function (e) {
        var t;
        if (e.optimistic || e.isPushNotification || (null === (t = e.message.author) || void 0 === t ? void 0 : t.id) !== a.default.getId() || !y(e.channelId)) return !1;
        let n = A(e.channelId);
        (n.lastActionTime = Date.now()), n.numSends++;
    }
});
t.Z = R;
