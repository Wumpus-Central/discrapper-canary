n.d(t, { AZ: () => U, Ay: () => M, Fd: () => h, W$: () => b, d6: () => g, ej: () => c }), n(321073);
var i = n(735438),
    r = n.n(i),
    a = n(17928),
    s = n(713402),
    _ = n(228366),
    l = n(495544),
    o = n(696451),
    E = n(935208),
    d = n(988794);
let c = {
        EVENT: "event",
        EVENT_ACTIVE: "active",
        EVENT_UPCOMING: "event-upcoming",
        GUILD_EVENT: (e) => `${e}-${c.EVENT}`,
        GUILD_EVENT_ACTIVE: (e) => `${e}-${c.EVENT_ACTIVE}`,
        GUILD_EVENT_UPCOMING: (e) => `${e}-${c.EVENT_UPCOMING}`,
        CHANNEL_EVENT: (e) => `${e}-${c.EVENT}`,
        CHANNEL_EVENT_ACTIVE: (e) => `${e}-${c.EVENT_ACTIVE}`,
        CHANNEL_EVENT_UPCOMING: (e) => `${e}-${c.EVENT_UPCOMING}`,
    },
    u = new s.J(
        (e) => {
            let { guild_id: t, entity_id: n, channel_id: i } = e,
                r = [t];
            return (
                null != n && r.push(n),
                r.push(c.GUILD_EVENT(t)),
                null != i && r.push(c.CHANNEL_EVENT(i)),
                h(e) &&
                    (r.push(c.EVENT_ACTIVE),
                    r.push(c.GUILD_EVENT_ACTIVE(t)),
                    null != i && r.push(c.CHANNEL_EVENT_ACTIVE(i))),
                g(e) &&
                    (r.push(c.EVENT_UPCOMING),
                    r.push(c.GUILD_EVENT_UPCOMING(t)),
                    null != i && r.push(c.CHANNEL_EVENT_UPCOMING(i))),
                r
            );
        },
        function (e) {
            let { id: t, scheduled_start_time: n } = e,
                i = h(e) ? "\0" : "\x01";
            return `${i}-${new Date(n).getTime()}-${t}`;
        },
    ),
    I = 0,
    A = [],
    T = "SERIES",
    S = {},
    N = {};
function O(e) {
    u.set(e.id, e), (I += 1);
}
function R(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    u.delete(e), delete S[e], t && delete N[e], (I += 1);
}
function f(e) {
    var t;
    let n,
        i,
        r,
        a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        _ = e.guild_scheduled_event_id;
    null == S[_] && (S[_] = {});
    let l = e.guild_scheduled_event_exception_id ?? T;
    null == S[_][l] && (S[_][l] = {}),
        (S[_][l][e.user_id] = e),
        a &&
            ((n = (t = e).guild_scheduled_event_exception_id ?? T),
            (i = N[t.guild_scheduled_event_id]?.[n] ?? 0),
            (r =
                (null != t.guild_scheduled_event_exception_id && t.response === d.Qi.UNINTERESTED) ||
                (null == t.guild_scheduled_event_exception_id && t.response === d.Qi.INTERESTED)
                    ? 1
                    : -1),
            p(t.guild_scheduled_event_id, t.guild_scheduled_event_exception_id, i + r)),
        s && (I += 1);
}
function C(e) {
    var t;
    let n,
        i,
        r,
        a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        s = e.guild_scheduled_event_exception_id ?? T,
        _ = S[e.guild_scheduled_event_id]?.[s]?.[e.user_id] != null,
        o = e.user_id === l.default.getId();
    (_ || !o) &&
        (delete S[e.guild_scheduled_event_id]?.[s]?.[e.user_id],
        (n = (t = e).guild_scheduled_event_exception_id ?? T),
        (i = N[t.guild_scheduled_event_id]?.[n] ?? 0),
        (r =
            (null != t.guild_scheduled_event_exception_id && t.response === d.Qi.UNINTERESTED) ||
            (null == t.guild_scheduled_event_exception_id && t.response === d.Qi.INTERESTED)
                ? -1
                : 1),
        p(t.guild_scheduled_event_id, t.guild_scheduled_event_exception_id, i + r),
        a && (I += 1));
}
function p(e, t, n) {
    null == N[e] && (N[e] = {}), (N[e][t ?? T] = n);
}
function m(e, t) {
    u.values(c.GUILD_EVENT(e)).forEach((e) => R(e.id, t));
}
function L(e) {
    let { guildScheduledEvent: t } = e;
    return O(t), !0;
}
function D(e) {
    let { eventException: t } = e,
        n = u.get(t.event_id);
    if (null == n) return !1;
    let i = n.guild_scheduled_event_exceptions.findIndex((e) => e.event_exception_id === t.event_exception_id),
        r = [...n.guild_scheduled_event_exceptions];
    return i < 0 ? r.push(t) : (r[i] = t), O({ ...n, guild_scheduled_event_exceptions: r }), !0;
}
function h(e) {
    return null != e && e?.status === d.XG.ACTIVE;
}
function g(e) {
    return !d.lV.has(e.status);
}
function b(e, t) {
    return new Date(e.scheduled_start_time).getTime() < Date.now() + 1e3 * t;
}
function U(e) {
    return null != e && d.lV.has(e.status);
}
class P extends a.Ay.Store {
    initialize() {
        this.waitFor(l.default, o.Ay);
    }
    static displayName = "GuildScheduledEventStore";
    getGuildScheduledEvent(e) {
        return null == e ? null : (u.get(e) ?? null);
    }
    getGuildEventCountByIndex(e) {
        return u.size(e);
    }
    getGuildScheduledEventsForGuild(e) {
        return null == e ? [] : u.values(e);
    }
    getGuildScheduledEventsByIndex(e) {
        return u.values(e);
    }
    getRsvpVersion() {
        return I;
    }
    getRsvp(e, t, n) {
        return null == e ? null : S[e]?.[t ?? T]?.[n];
    }
    isInterestedInEventRecurrence(e, t) {
        let n = l.default.getId(),
            i = this.getRsvp(e, null, n),
            r = this.getRsvp(e, t, n),
            a = i?.response === d.Qi.INTERESTED,
            s = r?.response === d.Qi.INTERESTED,
            _ = r?.response === d.Qi.UNINTERESTED;
        return (a && !_) || s;
    }
    getUserCount(e, t) {
        if (null == e) return 0;
        let n = N[e]?.[T] ?? 0;
        return null == t ? n : n - (N[e]?.[t] ?? 0);
    }
    hasUserCount(e, t) {
        return N[e]?.[t ?? T] != null;
    }
    isActive(e) {
        return null != e && h(u.get(e));
    }
    getActiveEventByChannel(e) {
        if (null != e) return this.getGuildScheduledEventsByIndex(c.CHANNEL_EVENT_ACTIVE(e))[0];
    }
    getUsersForGuildEvent(e, t) {
        return null == e ? {} : (S[e]?.[t ?? T] ?? {});
    }
}
let M = new P(_.h, {
    CONNECTION_OPEN: function (e) {
        let { guilds: t } = e;
        return (
            u.clear(),
            (I = 0),
            (S = {}),
            (N = {}),
            A.forEach(O),
            t.forEach((e) => e.guild_scheduled_events.forEach((e) => O(e))),
            !0
        );
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return m(t.id, !1), t.guild_scheduled_events.forEach((e) => O(e)), !0;
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return m(t.id, !0), !0;
    },
    FETCH_GUILD_EVENT: function (e) {
        let { guildScheduledEvent: t } = e;
        O(t);
    },
    FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
        let { guildId: t, guildScheduledEvents: n } = e,
            i = u.values(c.GUILD_EVENT(t), !0).map((e) => e.id),
            a = n.map((e) => e.id);
        for (let e of (r()
            .difference(i, a)
            .forEach((e) => {
                R(e);
            }),
        n))
            O(e);
        return !0;
    },
    GUILD_SCHEDULED_EVENT_CREATE: L,
    GUILD_SCHEDULED_EVENT_UPDATE: L,
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e;
        return R(t.id), !0;
    },
    GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
        let { userId: t, guildEventId: n, guildId: i, guildEventExceptionId: r, response: a } = e,
            s = r ?? T,
            _ = S[n]?.[s]?.[t];
        null != _ && C(_, !1);
        let l = o.Ay.getMember(i, t);
        return (
            f({
                user_id: t,
                guild_scheduled_event_id: n,
                member: l ?? void 0,
                guild_scheduled_event_exception_id: r,
                response: a,
            }),
            !0
        );
    },
    GUILD_SCHEDULED_EVENT_USER_REMOVE: function (e) {
        let { userId: t, guildEventId: n, guildEventExceptionId: i, response: r } = e;
        C({ user_id: t, guild_scheduled_event_id: n, guild_scheduled_event_exception_id: i, response: r });
    },
    GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: function (e) {
        let { guildScheduledEventUsers: t } = e;
        return t.forEach((e) => f(e, !1, !1)), (I += 1), !0;
    },
    GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function (e) {
        let { guildScheduledEventUsers: t } = e;
        return t.forEach((e) => f(e, !1, !1)), (I += 1), !0;
    },
    GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: function (e) {
        let { eventId: t, counts: n } = e;
        p(t, null, n.eventCount),
            E.default.forEachKey(n.recurrenceCounts, (e) => {
                p(t, e, n.eventCount - n.recurrenceCounts[e]);
            });
    },
    INVITE_RESOLVE_SUCCESS: function (e) {
        let { invite: t } = e,
            n = t.guild_scheduled_event;
        return null != n && (O(n), !0);
    },
    GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: D,
    GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: D,
    GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: function (e) {
        let { eventException: t } = e,
            n = u.get(t.event_id);
        if (null == n) return !1;
        let i = n.guild_scheduled_event_exceptions.filter((e) => e.event_exception_id !== t.event_exception_id);
        return O({ ...n, guild_scheduled_event_exceptions: i }), !0;
    },
    GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: function (e) {
        let { eventId: t } = e,
            n = u.get(t);
        return null != n && (O({ ...n, guild_scheduled_event_exceptions: [] }), !0);
    },
    LOGOUT: function () {
        return u.clear(), !0;
    },
});
