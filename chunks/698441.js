"use strict";
n.d(t, { AZ: () => v, Ay: () => M, Fd: () => L, W$: () => D, d6: () => y, ej: () => _ }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(713402),
    l = n(228366),
    o = n(280450),
    d = n(696451),
    c = n(935208),
    u = n(988794);
let _ = {
        EVENT: "event",
        EVENT_ACTIVE: "active",
        EVENT_UPCOMING: "event-upcoming",
        GUILD_EVENT: (e) => `${e}-${_.EVENT}`,
        GUILD_EVENT_ACTIVE: (e) => `${e}-${_.EVENT_ACTIVE}`,
        GUILD_EVENT_UPCOMING: (e) => `${e}-${_.EVENT_UPCOMING}`,
        CHANNEL_EVENT: (e) => `${e}-${_.EVENT}`,
        CHANNEL_EVENT_ACTIVE: (e) => `${e}-${_.EVENT_ACTIVE}`,
        CHANNEL_EVENT_UPCOMING: (e) => `${e}-${_.EVENT_UPCOMING}`,
    },
    E = new s.J(
        function (e) {
            let { guild_id: t, entity_id: n, channel_id: i } = e,
                r = [t];
            return (
                null != n && r.push(n),
                r.push(_.GUILD_EVENT(t)),
                null != i && r.push(_.CHANNEL_EVENT(i)),
                L(e) &&
                    (r.push(_.EVENT_ACTIVE),
                    r.push(_.GUILD_EVENT_ACTIVE(t)),
                    null != i && r.push(_.CHANNEL_EVENT_ACTIVE(i))),
                y(e) &&
                    (r.push(_.EVENT_UPCOMING),
                    r.push(_.GUILD_EVENT_UPCOMING(t)),
                    null != i && r.push(_.CHANNEL_EVENT_UPCOMING(i))),
                r
            );
        },
        function (e) {
            let { id: t, scheduled_start_time: n } = e,
                i = L(e) ? "\0" : "\x01";
            return `${i}-${new Date(n).getTime()}-${t}`;
        },
    ),
    A = 0,
    h = [],
    I = "SERIES",
    f = {},
    p = {};
function T(e) {
    E.set(e.id, e), (A += 1);
}
function m(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    E.delete(e), delete f[e], t && delete p[e], (A += 1);
}
function g(e) {
    var t;
    let n,
        i,
        r,
        a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = e.guild_scheduled_event_id;
    null == f[l] && (f[l] = {});
    let o = e.guild_scheduled_event_exception_id ?? I;
    null == f[l][o] && (f[l][o] = {}),
        (f[l][o][e.user_id] = e),
        a &&
            ((n = (t = e).guild_scheduled_event_exception_id ?? I),
            (i = p[t.guild_scheduled_event_id]?.[n] ?? 0),
            (r =
                (null != t.guild_scheduled_event_exception_id && t.response === u.Qi.UNINTERESTED) ||
                (null == t.guild_scheduled_event_exception_id && t.response === u.Qi.INTERESTED)
                    ? 1
                    : -1),
            N(t.guild_scheduled_event_id, t.guild_scheduled_event_exception_id, i + r)),
        s && (A += 1);
}
function S(e) {
    var t;
    let n,
        i,
        r,
        a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        s = e.guild_scheduled_event_exception_id ?? I,
        l = f[e.guild_scheduled_event_id]?.[s]?.[e.user_id] != null,
        d = e.user_id === o.default.getId();
    (l || !d) &&
        (delete f[e.guild_scheduled_event_id]?.[s]?.[e.user_id],
        (n = (t = e).guild_scheduled_event_exception_id ?? I),
        (i = p[t.guild_scheduled_event_id]?.[n] ?? 0),
        (r =
            (null != t.guild_scheduled_event_exception_id && t.response === u.Qi.UNINTERESTED) ||
            (null == t.guild_scheduled_event_exception_id && t.response === u.Qi.INTERESTED)
                ? -1
                : 1),
        N(t.guild_scheduled_event_id, t.guild_scheduled_event_exception_id, i + r),
        a && (A += 1));
}
function N(e, t, n) {
    null == p[e] && (p[e] = {}), (p[e][t ?? I] = n);
}
function C(e, t) {
    E.values(_.GUILD_EVENT(e)).forEach((e) => m(e.id, t));
}
function R(e) {
    let { guildScheduledEvent: t } = e;
    return T(t), !0;
}
function O(e) {
    let { eventException: t } = e,
        n = E.get(t.event_id);
    if (null == n) return !1;
    let i = n.guild_scheduled_event_exceptions.findIndex((e) => e.event_exception_id === t.event_exception_id),
        r = [...n.guild_scheduled_event_exceptions];
    return i < 0 ? r.push(t) : (r[i] = t), T({ ...n, guild_scheduled_event_exceptions: r }), !0;
}
function L(e) {
    return null != e && e?.status === u.XG.ACTIVE;
}
function y(e) {
    return !u.lV.has(e.status);
}
function D(e, t) {
    return new Date(e.scheduled_start_time).getTime() < Date.now() + 1e3 * t;
}
function v(e) {
    return null != e && u.lV.has(e.status);
}
class b extends a.Ay.Store {
    initialize() {
        this.waitFor(o.default, d.Ay);
    }
    static displayName = "GuildScheduledEventStore";
    getGuildScheduledEvent(e) {
        return null == e ? null : (E.get(e) ?? null);
    }
    getGuildEventCountByIndex(e) {
        return E.size(e);
    }
    getGuildScheduledEventsForGuild(e) {
        return null == e ? [] : E.values(e);
    }
    getGuildScheduledEventsByIndex(e) {
        return E.values(e);
    }
    getRsvpVersion() {
        return A;
    }
    getRsvp(e, t, n) {
        return null == e ? null : f[e]?.[t ?? I]?.[n];
    }
    isInterestedInEventRecurrence(e, t) {
        let n = o.default.getId(),
            i = this.getRsvp(e, null, n),
            r = this.getRsvp(e, t, n),
            a = i?.response === u.Qi.INTERESTED,
            s = r?.response === u.Qi.INTERESTED,
            l = r?.response === u.Qi.UNINTERESTED;
        return (a && !l) || s;
    }
    getUserCount(e, t) {
        if (null == e) return 0;
        let n = p[e]?.[I] ?? 0;
        return null == t ? n : n - (p[e]?.[t] ?? 0);
    }
    hasUserCount(e, t) {
        return p[e]?.[t ?? I] != null;
    }
    isActive(e) {
        return null != e && L(E.get(e));
    }
    getActiveEventByChannel(e) {
        if (null != e) return this.getGuildScheduledEventsByIndex(_.CHANNEL_EVENT_ACTIVE(e))[0];
    }
    getUsersForGuildEvent(e, t) {
        return null == e ? {} : (f[e]?.[t ?? I] ?? {});
    }
}
let M = new b(l.h, {
    CONNECTION_OPEN: function (e) {
        let { guilds: t } = e;
        return (
            E.clear(),
            (A = 0),
            (f = {}),
            (p = {}),
            h.forEach(T),
            t.forEach((e) => e.guild_scheduled_events.forEach((e) => T(e))),
            !0
        );
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return C(t.id, !1), t.guild_scheduled_events.forEach((e) => T(e)), !0;
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return C(t.id, !0), !0;
    },
    FETCH_GUILD_EVENT: function (e) {
        let { guildScheduledEvent: t } = e;
        T(t);
    },
    FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
        let { guildId: t, guildScheduledEvents: n } = e,
            i = E.values(_.GUILD_EVENT(t), !0).map((e) => e.id),
            a = n.map((e) => e.id);
        for (let e of (r()
            .difference(i, a)
            .forEach((e) => {
                m(e);
            }),
        n))
            T(e);
        return !0;
    },
    GUILD_SCHEDULED_EVENT_CREATE: R,
    GUILD_SCHEDULED_EVENT_UPDATE: R,
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e;
        return m(t.id), !0;
    },
    GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
        let { userId: t, guildEventId: n, guildId: i, guildEventExceptionId: r, response: a } = e,
            s = r ?? I,
            l = f[n]?.[s]?.[t];
        null != l && S(l, !1);
        let o = d.Ay.getMember(i, t);
        return (
            g({
                user_id: t,
                guild_scheduled_event_id: n,
                member: o ?? void 0,
                guild_scheduled_event_exception_id: r,
                response: a,
            }),
            !0
        );
    },
    GUILD_SCHEDULED_EVENT_USER_REMOVE: function (e) {
        let { userId: t, guildEventId: n, guildEventExceptionId: i, response: r } = e;
        S({ user_id: t, guild_scheduled_event_id: n, guild_scheduled_event_exception_id: i, response: r });
    },
    GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: function (e) {
        let { guildScheduledEventUsers: t } = e;
        return t.forEach((e) => g(e, !1, !1)), (A += 1), !0;
    },
    GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function (e) {
        let { guildScheduledEventUsers: t } = e;
        return t.forEach((e) => g(e, !1, !1)), (A += 1), !0;
    },
    GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: function (e) {
        let { eventId: t, counts: n } = e;
        N(t, null, n.eventCount),
            c.default.forEachKey(n.recurrenceCounts, (e) => {
                N(t, e, n.eventCount - n.recurrenceCounts[e]);
            });
    },
    INVITE_RESOLVE_SUCCESS: function (e) {
        let { invite: t } = e,
            n = t.guild_scheduled_event;
        return null != n && (T(n), !0);
    },
    GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: O,
    GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: O,
    GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: function (e) {
        let { eventException: t } = e,
            n = E.get(t.event_id);
        if (null == n) return !1;
        let i = n.guild_scheduled_event_exceptions.filter((e) => e.event_exception_id !== t.event_exception_id);
        return T({ ...n, guild_scheduled_event_exceptions: i }), !0;
    },
    GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: function (e) {
        let { eventId: t } = e,
            n = E.get(t);
        return null != n && (T({ ...n, guild_scheduled_event_exceptions: [] }), !0);
    },
    LOGOUT: function () {
        return E.clear(), !0;
    },
});
