n.d(t, { Z: () => M }), n(388685), n(997841);
var i,
    r = n(95015),
    l = n(442837),
    a = n(570140),
    o = n(314897),
    s = n(592125),
    c = n(430824),
    u = n(944486),
    d = n(9156),
    p = n(70956),
    f = n(709054),
    h = n(221259),
    m = n(981631),
    g = n(490897),
    b = n(526761);
function C(e, t, n) {
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
            timeSinceJoin: +p.Z.Millis.HOUR,
            sends: 1,
            viewTime: +p.Z.Millis.MINUTE,
        },
        {
            timeSinceJoin: +p.Z.Millis.DAY,
            sends: 2,
            viewTime: 2 * p.Z.Millis.MINUTE,
        },
        {
            timeSinceJoin: +p.Z.Millis.WEEK,
            sends: 5,
            viewTime: 5 * p.Z.Millis.MINUTE,
        },
        {
            timeSinceJoin: +p.Z.Millis.DAYS_30,
            sends: 10,
            viewTime: 30 * p.Z.Millis.MINUTE,
        },
    ],
    v = 5 * y[y.length - 1].viewTime,
    x = p.Z.Millis.WEEK,
    O = { channels: {} },
    E = new Set(),
    j = null,
    S = 0,
    _ = 0;
function P() {
    if (null == j || !T(j)) return !1;
    let e = Z(j);
    if (e.lastActionTime > Date.now() - p.Z.Millis.DAY && e.viewDuration > v) return !1;
    let t = Date.now();
    (e.lastActionTime = t), (e.viewDuration += t - S), (S = t);
}
function I() {
    return (
        0 !== _ && (clearInterval(_), (_ = 0)),
        d.ZP.useNewNotifications &&
            (_ = setInterval(() => {
                P() && w.emitChange();
            }, 15 * p.Z.Millis.SECOND)),
        !1
    );
}
function Z(e) {
    return (
        e in O.channels ||
            (O.channels[e] = {
                lastActionTime: 0,
                viewDuration: 0,
                numSends: 0,
            }),
        O.channels[e]
    );
}
function T(e) {
    if (!d.ZP.useNewNotifications || E.has(e)) return !1;
    let t = s.Z.getBasicChannel(e);
    if (
        null == t ||
        null == t.guild_id ||
        d.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
        N(t.guild_id, t.id) ||
        N(t.guild_id, t.parent_id)
    )
        return !1;
    let n = d.ZP.resolveUnreadSetting(t);
    return d.ZP.getChannelUnreadSetting(t.guild_id, t.id) === g.i.UNSET && n !== g.i.ALL_MESSAGES;
}
function N(e, t) {
    if (null == t) return !1;
    let n = d.ZP.getChannelOverrides(e)[t];
    return (
        null != n &&
        !!(
            (null != n.message_notifications && n.message_notifications !== m.bL.NULL) ||
            (null != n.flags && (0, r.EB)(n.flags, b.ic.UNREADS_ALL_MESSAGES | b.ic.UNREADS_ONLY_MENTIONS))
        )
    );
}
class A extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        null != e && (O.channels = e.channels), this.syncWith([d.ZP], I), this.waitFor(o.default, s.Z, c.Z, u.Z, d.ZP);
    }
    getState() {
        return O;
    }
    getLastActionTime(e) {
        var t, n;
        return null != (n = null == (t = O.channels[e]) ? void 0 : t.lastActionTime) ? n : 0;
    }
    maybeAutoUpgradeChannel(e) {
        if (!T(e)) return !1;
        let t = s.Z.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            !!(function (e) {
                var t;
                let n = c.Z.getGuild(e.guild_id),
                    i = null != (t = null == n ? void 0 : n.joinedAt) ? t : new Date(),
                    r = Math.min(f.default.age(e.id), Date.now() - i.getTime()),
                    l = O.channels[e.id];
                if (null == l || l.lastActionTime < Date.now() - x) return !1;
                for (let e of y)
                    if (r < e.timeSinceJoin && (l.numSends >= e.sends || l.viewDuration >= e.viewTime)) return !0;
                return !1;
            })(t) &&
            (delete O.channels[e], E.add(e), (0, h.IG)(t.guild_id, t.id, g.i.ALL_MESSAGES), !0)
        );
    }
}
C(A, "displayName", "UnreadSettingNoticeStore2"), C(A, "persistKey", "UnreadSettingNoticeStore2");
let w = new A(a.Z, {
        CHANNEL_SELECT: function () {
            let e = P();
            return (j = u.Z.getChannelId()), (S = Date.now()), e;
        },
        CONNECTION_OPEN: function () {
            (j = u.Z.getChannelId()), (S = Date.now()), I();
            let e = Date.now() - x;
            f.default.forEach(O.channels, (t, n) => {
                let { lastActionTime: i } = t;
                i < e && delete O.channels[n];
            });
        },
        MESSAGE_CREATE: function (e) {
            var t;
            if (
                e.optimistic ||
                e.isPushNotification ||
                (null == (t = e.message.author) ? void 0 : t.id) !== o.default.getId() ||
                !T(e.channelId)
            )
                return !1;
            let n = Z(e.channelId);
            (n.lastActionTime = Date.now()), n.numSends++;
        },
    }),
    M = w;
