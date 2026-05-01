n.d(t, { AZ: () => M, Ay: () => U, Fd: () => L, W$: () => b, d6: () => D, ej: () => E }), n(321073);
var i = n(735438),
    a = n.n(i),
    r = n(17928),
    s = n(713402),
    l = n(228366),
    o = n(495544),
    d = n(696451),
    c = n(935208),
    _ = n(988794);
let E = {
        EVENT: "event",
        EVENT_ACTIVE: "active",
        EVENT_UPCOMING: "event-upcoming",
        GUILD_EVENT: (e) => `${e}-${E.EVENT}`,
        GUILD_EVENT_ACTIVE: (e) => `${e}-${E.EVENT_ACTIVE}`,
        GUILD_EVENT_UPCOMING: (e) => `${e}-${E.EVENT_UPCOMING}`,
        CHANNEL_EVENT: (e) => `${e}-${E.EVENT}`,
        CHANNEL_EVENT_ACTIVE: (e) => `${e}-${E.EVENT_ACTIVE}`,
        CHANNEL_EVENT_UPCOMING: (e) => `${e}-${E.EVENT_UPCOMING}`,
    },
    u = new s.J(
        (e) => {
            let { guild_id: t, entity_id: n, channel_id: i } = e,
                a = [t];
            return (
                null != n && a.push(n),
                a.push(E.GUILD_EVENT(t)),
                null != i && a.push(E.CHANNEL_EVENT(i)),
                L(e) &&
                    (a.push(E.EVENT_ACTIVE),
                    a.push(E.GUILD_EVENT_ACTIVE(t)),
                    null != i && a.push(E.CHANNEL_EVENT_ACTIVE(i))),
                D(e) &&
                    (a.push(E.EVENT_UPCOMING),
                    a.push(E.GUILD_EVENT_UPCOMING(t)),
                    null != i && a.push(E.CHANNEL_EVENT_UPCOMING(i))),
                a
            );
        },
        function (e) {
            let { id: t, scheduled_start_time: n } = e,
                i = L(e) ? "\0" : "\x01";
            return `${i}-${new Date(n).getTime()}-${t}`;
        },
    ),
    A = 0,
    I = [],
    T = "SERIES",
    h = {},
    S = {};
function N(e) {
    u.set(e.id, e), (A += 1);
}
function f(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    u.delete(e), delete h[e], t && delete S[e], (A += 1);
}
function p(e) {
    var t;
    let n,
        i,
        a,
        r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = e.guild_scheduled_event_id;
    null == h[l] && (h[l] = {});
    let o = e.guild_scheduled_event_exception_id ?? T;
    null == h[l][o] && (h[l][o] = {}),
        (h[l][o][e.user_id] = e),
        r &&
            ((n = (t = e).guild_scheduled_event_exception_id ?? T),
            (i = S[t.guild_scheduled_event_id]?.[n] ?? 0),
            (a =
                (null != t.guild_scheduled_event_exception_id && t.response === _.Qi.UNINTERESTED) ||
                (null == t.guild_scheduled_event_exception_id && t.response === _.Qi.INTERESTED)
                    ? 1
                    : -1),
            O(t.guild_scheduled_event_id, t.guild_scheduled_event_exception_id, i + a)),
        s && (A += 1);
}
function m(e) {
    var t;
    let n,
        i,
        a,
        r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        s = e.guild_scheduled_event_exception_id ?? T,
        l = h[e.guild_scheduled_event_id]?.[s]?.[e.user_id] != null,
        d = e.user_id === o.default.getId();
    (l || !d) &&
        (delete h[e.guild_scheduled_event_id]?.[s]?.[e.user_id],
        (n = (t = e).guild_scheduled_event_exception_id ?? T),
        (i = S[t.guild_scheduled_event_id]?.[n] ?? 0),
        (a =
            (null != t.guild_scheduled_event_exception_id && t.response === _.Qi.UNINTERESTED) ||
            (null == t.guild_scheduled_event_exception_id && t.response === _.Qi.INTERESTED)
                ? -1
                : 1),
        O(t.guild_scheduled_event_id, t.guild_scheduled_event_exception_id, i + a),
        r && (A += 1));
}
function O(e, t, n) {
    null == S[e] && (S[e] = {}), (S[e][t ?? T] = n);
}
function C(e, t) {
    u.values(E.GUILD_EVENT(e)).forEach((e) => f(e.id, t));
}
function R(e) {
    let { guildScheduledEvent: t } = e;
    return N(t), !0;
}
function g(e) {
    let { eventException: t } = e,
        n = u.get(t.event_id);
    if (null == n) return !1;
    let i = n.guild_scheduled_event_exceptions.findIndex((e) => e.event_exception_id === t.event_exception_id),
        a = [...n.guild_scheduled_event_exceptions];
    return i < 0 ? a.push(t) : (a[i] = t), N({ ...n, guild_scheduled_event_exceptions: a }), !0;
}
function L(e) {
    return null != e && e?.status === _.XG.ACTIVE;
}
function D(e) {
    return !_.lV.has(e.status);
}
function b(e, t) {
    return new Date(e.scheduled_start_time).getTime() < Date.now() + 1e3 * t;
}
function M(e) {
    return null != e && _.lV.has(e.status);
}
class P extends r.Ay.Store {
    initialize() {
        this.waitFor(o.default, d.Ay);
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
        return A;
    }
    getRsvp(e, t, n) {
        return null == e ? null : h[e]?.[t ?? T]?.[n];
    }
    isInterestedInEventRecurrence(e, t) {
        let n = o.default.getId(),
            i = this.getRsvp(e, null, n),
            a = this.getRsvp(e, t, n),
            r = i?.response === _.Qi.INTERESTED,
            s = a?.response === _.Qi.INTERESTED,
            l = a?.response === _.Qi.UNINTERESTED;
        return (r && !l) || s;
    }
    getUserCount(e, t) {
        if (null == e) return 0;
        let n = S[e]?.[T] ?? 0;
        return null == t ? n : n - (S[e]?.[t] ?? 0);
    }
    hasUserCount(e, t) {
        return S[e]?.[t ?? T] != null;
    }
    isActive(e) {
        return null != e && L(u.get(e));
    }
    getActiveEventByChannel(e) {
        if (null != e) return this.getGuildScheduledEventsByIndex(E.CHANNEL_EVENT_ACTIVE(e))[0];
    }
    getUsersForGuildEvent(e, t) {
        return null == e ? {} : (h[e]?.[t ?? T] ?? {});
    }
}
let U = new P(l.h, {
    CONNECTION_OPEN: function (e) {
        let { guilds: t } = e;
        return (
            u.clear(),
            (A = 0),
            (h = {}),
            (S = {}),
            I.forEach(N),
            t.forEach((e) => e.guild_scheduled_events.forEach((e) => N(e))),
            !0
        );
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return C(t.id, !1), t.guild_scheduled_events.forEach((e) => N(e)), !0;
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return C(t.id, !0), !0;
    },
    FETCH_GUILD_EVENT: function (e) {
        let { guildScheduledEvent: t } = e;
        N(t);
    },
    FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
        let { guildId: t, guildScheduledEvents: n } = e,
            i = u.values(E.GUILD_EVENT(t), !0).map((e) => e.id),
            r = n.map((e) => e.id);
        for (let e of (a()
            .difference(i, r)
            .forEach((e) => {
                f(e);
            }),
        n))
            N(e);
        return !0;
    },
    GUILD_SCHEDULED_EVENT_CREATE: R,
    GUILD_SCHEDULED_EVENT_UPDATE: R,
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e;
        return f(t.id), !0;
    },
    GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
        let { userId: t, guildEventId: n, guildId: i, guildEventExceptionId: a, response: r } = e,
            s = a ?? T,
            l = h[n]?.[s]?.[t];
        null != l && m(l, !1);
        let o = d.Ay.getMember(i, t);
        return (
            p({
                user_id: t,
                guild_scheduled_event_id: n,
                member: o ?? void 0,
                guild_scheduled_event_exception_id: a,
                response: r,
            }),
            !0
        );
    },
    GUILD_SCHEDULED_EVENT_USER_REMOVE: function (e) {
        let { userId: t, guildEventId: n, guildEventExceptionId: i, response: a } = e;
        m({ user_id: t, guild_scheduled_event_id: n, guild_scheduled_event_exception_id: i, response: a });
    },
    GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: function (e) {
        let { guildScheduledEventUsers: t } = e;
        return t.forEach((e) => p(e, !1, !1)), (A += 1), !0;
    },
    GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function (e) {
        let { guildScheduledEventUsers: t } = e;
        return t.forEach((e) => p(e, !1, !1)), (A += 1), !0;
    },
    GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: function (e) {
        let { eventId: t, counts: n } = e;
        O(t, null, n.eventCount),
            c.default.forEachKey(n.recurrenceCounts, (e) => {
                O(t, e, n.eventCount - n.recurrenceCounts[e]);
            });
    },
    INVITE_RESOLVE_SUCCESS: function (e) {
        let { invite: t } = e,
            n = t.guild_scheduled_event;
        return null != n && (N(n), !0);
    },
    GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: g,
    GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: g,
    GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: function (e) {
        let { eventException: t } = e,
            n = u.get(t.event_id);
        if (null == n) return !1;
        let i = n.guild_scheduled_event_exceptions.filter((e) => e.event_exception_id !== t.event_exception_id);
        return N({ ...n, guild_scheduled_event_exceptions: i }), !0;
    },
    GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: function (e) {
        let { eventId: t } = e,
            n = u.get(t);
        return null != n && (N({ ...n, guild_scheduled_event_exceptions: [] }), !0);
    },
    LOGOUT: function () {
        return u.clear(), !0;
    },
});
