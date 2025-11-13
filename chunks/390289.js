n.d(t, { Z: () => M }), n(388685), n(997841);
var i,
    r = n(442837),
    l = n(570140),
    a = n(314897),
    o = n(592125),
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
function y(e, t, n) {
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
let C = [
        {
            timeSinceJoin: +d.Z.Millis.HOUR,
            sends: 1,
            viewTime: +d.Z.Millis.MINUTE,
        },
        {
            timeSinceJoin: +d.Z.Millis.DAY,
            sends: 2,
            viewTime: 2 * d.Z.Millis.MINUTE,
        },
        {
            timeSinceJoin: +d.Z.Millis.WEEK,
            sends: 5,
            viewTime: 5 * d.Z.Millis.MINUTE,
        },
        {
            timeSinceJoin: +d.Z.Millis.DAYS_30,
            sends: 10,
            viewTime: 30 * d.Z.Millis.MINUTE,
        },
    ],
    v = 5 * C[C.length - 1].viewTime,
    _ = d.Z.Millis.WEEK,
    x = { channels: {} },
    j = new Set(),
    O = null,
    E = 0,
    S = 0;
function P() {
    if (null == O || !T(O)) return !1;
    let e = Z(O);
    if (e.lastActionTime > Date.now() - d.Z.Millis.DAY && e.viewDuration > v) return !1;
    let t = Date.now();
    (e.lastActionTime = t), (e.viewDuration += t - E), (E = t);
}
function I() {
    return (
        0 !== S && (clearInterval(S), (S = 0)),
        u.ZP.useNewNotifications &&
            (S = setInterval(() => {
                P() && w.emitChange();
            }, 15 * d.Z.Millis.SECOND)),
        !1
    );
}
function Z(e) {
    return (
        e in x.channels ||
            (x.channels[e] = {
                lastActionTime: 0,
                viewDuration: 0,
                numSends: 0,
            }),
        x.channels[e]
    );
}
function T(e) {
    if (!u.ZP.useNewNotifications || j.has(e)) return !1;
    let t = o.Z.getBasicChannel(e);
    if (
        null == t ||
        null == t.guild_id ||
        u.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
        N(t.guild_id, t.id) ||
        N(t.guild_id, t.parent_id)
    )
        return !1;
    let n = u.ZP.resolveUnreadSetting(t);
    return u.ZP.getChannelUnreadSetting(t.guild_id, t.id) === g.i.UNSET && n !== g.i.ALL_MESSAGES;
}
function N(e, t) {
    if (null == t) return !1;
    let n = u.ZP.getChannelOverrides(e)[t];
    return (
        null != n &&
        !!(
            (null != n.message_notifications && n.message_notifications !== m.bL.NULL) ||
            (null != n.flags && (0, p.EB)(n.flags, b.ic.UNREADS_ALL_MESSAGES | b.ic.UNREADS_ONLY_MENTIONS))
        )
    );
}
class A extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        null != e && (x.channels = e.channels), this.syncWith([u.ZP], I), this.waitFor(a.default, o.Z, s.Z, c.Z, u.ZP);
    }
    getState() {
        return x;
    }
    getLastActionTime(e) {
        var t, n;
        return null != (n = null == (t = x.channels[e]) ? void 0 : t.lastActionTime) ? n : 0;
    }
    maybeAutoUpgradeChannel(e) {
        if (!T(e)) return !1;
        let t = o.Z.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            !!(function (e) {
                var t;
                let n = s.Z.getGuild(e.guild_id),
                    i = null != (t = null == n ? void 0 : n.joinedAt) ? t : new Date(),
                    r = Math.min(h.default.age(e.id), Date.now() - i.getTime()),
                    l = x.channels[e.id];
                if (null == l || l.lastActionTime < Date.now() - _) return !1;
                for (let e of C)
                    if (r < e.timeSinceJoin && (l.numSends >= e.sends || l.viewDuration >= e.viewTime)) return !0;
                return !1;
            })(t) &&
            (delete x.channels[e], j.add(e), (0, f.IG)(t.guild_id, t.id, g.i.ALL_MESSAGES), !0)
        );
    }
}
y(A, "displayName", "UnreadSettingNoticeStore2"), y(A, "persistKey", "UnreadSettingNoticeStore2");
let w = new A(l.Z, {
        CHANNEL_SELECT: function () {
            let e = P();
            return (O = c.Z.getChannelId()), (E = Date.now()), e;
        },
        CONNECTION_OPEN: function () {
            (O = c.Z.getChannelId()), (E = Date.now()), I();
            let e = Date.now() - _;
            h.default.forEach(x.channels, (t, n) => {
                let { lastActionTime: i } = t;
                i < e && delete x.channels[n];
            });
        },
        MESSAGE_CREATE: function (e) {
            var t;
            if (
                e.optimistic ||
                e.isPushNotification ||
                (null == (t = e.message.author) ? void 0 : t.id) !== a.default.getId() ||
                !T(e.channelId)
            )
                return !1;
            let n = Z(e.channelId);
            (n.lastActionTime = Date.now()), n.numSends++;
        },
    }),
    M = w;
