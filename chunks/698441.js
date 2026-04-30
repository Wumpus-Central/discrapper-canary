"use strict";
n.d(t, { AZ: () => D, Ay: () => w, Fd: () => O, W$: () => b, d6: () => R, ej: () => _ }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(713402),
    o = n(228366),
    l = n(495544),
    u = n(696451),
    c = n(935208),
    d = n(988794);
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
    f = new a.J(
        (e) => {
            let { guild_id: t, entity_id: n, channel_id: i } = e,
                r = [t];
            return (
                null != n && r.push(n),
                r.push(_.GUILD_EVENT(t)),
                null != i && r.push(_.CHANNEL_EVENT(i)),
                O(e) &&
                    (r.push(_.EVENT_ACTIVE),
                    r.push(_.GUILD_EVENT_ACTIVE(t)),
                    null != i && r.push(_.CHANNEL_EVENT_ACTIVE(i))),
                R(e) &&
                    (r.push(_.EVENT_UPCOMING),
                    r.push(_.GUILD_EVENT_UPCOMING(t)),
                    null != i && r.push(_.CHANNEL_EVENT_UPCOMING(i))),
                r
            );
        },
        function (e) {
            let { id: t, scheduled_start_time: n } = e,
                i = O(e) ? "\0" : "\x01";
            return `${i}-${new Date(n).getTime()}-${t}`;
        },
    ),
    h = 0,
    p = [],
    E = "SERIES",
    m = {},
    g = {};
function A(e) {
    f.set(e.id, e), (h += 1);
}
function I(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    f.delete(e), delete m[e], t && delete g[e], (h += 1);
}
function T(e) {
    var t;
    let n,
        i,
        r,
        s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = e.guild_scheduled_event_id;
    null == m[o] && (m[o] = {});
    let l = e.guild_scheduled_event_exception_id ?? E;
    null == m[o][l] && (m[o][l] = {}),
        (m[o][l][e.user_id] = e),
        s &&
            ((n = (t = e).guild_scheduled_event_exception_id ?? E),
            (i = g[t.guild_scheduled_event_id]?.[n] ?? 0),
            (r =
                (null != t.guild_scheduled_event_exception_id && t.response === d.Qi.UNINTERESTED) ||
                (null == t.guild_scheduled_event_exception_id && t.response === d.Qi.INTERESTED)
                    ? 1
                    : -1),
            N(t.guild_scheduled_event_id, t.guild_scheduled_event_exception_id, i + r)),
        a && (h += 1);
}
function S(e) {
    var t;
    let n,
        i,
        r,
        s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        a = e.guild_scheduled_event_exception_id ?? E,
        o = m[e.guild_scheduled_event_id]?.[a]?.[e.user_id] != null,
        u = e.user_id === l.default.getId();
    (o || !u) &&
        (delete m[e.guild_scheduled_event_id]?.[a]?.[e.user_id],
        (n = (t = e).guild_scheduled_event_exception_id ?? E),
        (i = g[t.guild_scheduled_event_id]?.[n] ?? 0),
        (r =
            (null != t.guild_scheduled_event_exception_id && t.response === d.Qi.UNINTERESTED) ||
            (null == t.guild_scheduled_event_exception_id && t.response === d.Qi.INTERESTED)
                ? -1
                : 1),
        N(t.guild_scheduled_event_id, t.guild_scheduled_event_exception_id, i + r),
        s && (h += 1));
}
function N(e, t, n) {
    null == g[e] && (g[e] = {}), (g[e][t ?? E] = n);
}
function y(e, t) {
    f.values(_.GUILD_EVENT(e)).forEach((e) => I(e.id, t));
}
function C(e) {
    let { guildScheduledEvent: t } = e;
    return A(t), !0;
}
function v(e) {
    let { eventException: t } = e,
        n = f.get(t.event_id);
    if (null == n) return !1;
    let i = n.guild_scheduled_event_exceptions.findIndex((e) => e.event_exception_id === t.event_exception_id),
        r = [...n.guild_scheduled_event_exceptions];
    return i < 0 ? r.push(t) : (r[i] = t), A({ ...n, guild_scheduled_event_exceptions: r }), !0;
}
function O(e) {
    return null != e && e?.status === d.XG.ACTIVE;
}
function R(e) {
    return !d.lV.has(e.status);
}
function b(e, t) {
    return new Date(e.scheduled_start_time).getTime() < Date.now() + 1e3 * t;
}
function D(e) {
    return null != e && d.lV.has(e.status);
}
class L extends s.Ay.Store {
    initialize() {
        this.waitFor(l.default, u.Ay);
    }
    static displayName = "GuildScheduledEventStore";
    getGuildScheduledEvent(e) {
        return null == e ? null : (f.get(e) ?? null);
    }
    getGuildEventCountByIndex(e) {
        return f.size(e);
    }
    getGuildScheduledEventsForGuild(e) {
        return null == e ? [] : f.values(e);
    }
    getGuildScheduledEventsByIndex(e) {
        return f.values(e);
    }
    getRsvpVersion() {
        return h;
    }
    getRsvp(e, t, n) {
        return null == e ? null : m[e]?.[t ?? E]?.[n];
    }
    isInterestedInEventRecurrence(e, t) {
        let n = l.default.getId(),
            i = this.getRsvp(e, null, n),
            r = this.getRsvp(e, t, n),
            s = i?.response === d.Qi.INTERESTED,
            a = r?.response === d.Qi.INTERESTED,
            o = r?.response === d.Qi.UNINTERESTED;
        return (s && !o) || a;
    }
    getUserCount(e, t) {
        if (null == e) return 0;
        let n = g[e]?.[E] ?? 0;
        return null == t ? n : n - (g[e]?.[t] ?? 0);
    }
    hasUserCount(e, t) {
        return g[e]?.[t ?? E] != null;
    }
    isActive(e) {
        return null != e && O(f.get(e));
    }
    getActiveEventByChannel(e) {
        if (null != e) return this.getGuildScheduledEventsByIndex(_.CHANNEL_EVENT_ACTIVE(e))[0];
    }
    getUsersForGuildEvent(e, t) {
        return null == e ? {} : (m[e]?.[t ?? E] ?? {});
    }
}
let w = new L(o.h, {
    CONNECTION_OPEN: function (e) {
        let { guilds: t } = e;
        return (
            f.clear(),
            (h = 0),
            (m = {}),
            (g = {}),
            p.forEach(A),
            t.forEach((e) => e.guild_scheduled_events.forEach((e) => A(e))),
            !0
        );
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return y(t.id, !1), t.guild_scheduled_events.forEach((e) => A(e)), !0;
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return y(t.id, !0), !0;
    },
    FETCH_GUILD_EVENT: function (e) {
        let { guildScheduledEvent: t } = e;
        A(t);
    },
    FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
        let { guildId: t, guildScheduledEvents: n } = e,
            i = f.values(_.GUILD_EVENT(t), !0).map((e) => e.id),
            s = n.map((e) => e.id);
        for (let e of (r()
            .difference(i, s)
            .forEach((e) => {
                I(e);
            }),
        n))
            A(e);
        return !0;
    },
    GUILD_SCHEDULED_EVENT_CREATE: C,
    GUILD_SCHEDULED_EVENT_UPDATE: C,
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e;
        return I(t.id), !0;
    },
    GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
        let { userId: t, guildEventId: n, guildId: i, guildEventExceptionId: r, response: s } = e,
            a = r ?? E,
            o = m[n]?.[a]?.[t];
        null != o && S(o, !1);
        let l = u.Ay.getMember(i, t);
        return (
            T({
                user_id: t,
                guild_scheduled_event_id: n,
                member: l ?? void 0,
                guild_scheduled_event_exception_id: r,
                response: s,
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
        return t.forEach((e) => T(e, !1, !1)), (h += 1), !0;
    },
    GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function (e) {
        let { guildScheduledEventUsers: t } = e;
        return t.forEach((e) => T(e, !1, !1)), (h += 1), !0;
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
        return null != n && (A(n), !0);
    },
    GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: v,
    GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: v,
    GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: function (e) {
        let { eventException: t } = e,
            n = f.get(t.event_id);
        if (null == n) return !1;
        let i = n.guild_scheduled_event_exceptions.filter((e) => e.event_exception_id !== t.event_exception_id);
        return A({ ...n, guild_scheduled_event_exceptions: i }), !0;
    },
    GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: function (e) {
        let { eventId: t } = e,
            n = f.get(t);
        return null != n && (A({ ...n, guild_scheduled_event_exceptions: [] }), !0);
    },
    LOGOUT: function () {
        return f.clear(), !0;
    },
});
