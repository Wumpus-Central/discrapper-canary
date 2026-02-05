"use strict";
n.d(t, { AZ: () => Z, Ay: () => X, Fd: () => z, W$: () => q, d6: () => $, ej: () => _ }), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(713402),
    o = n(73153),
    l = n(961350),
    u = n(696451),
    c = n(661191),
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
};
function f(e) {
    let { id: t, scheduled_start_time: n } = e,
        r = z(e) ? "\0" : "\x01";
    return `${r}-${new Date(n).getTime()}-${t}`;
}
let p = (e) => {
        let { guild_id: t, entity_id: n, channel_id: r } = e,
            i = [t];
        return (
            null != n && i.push(n),
            i.push(_.GUILD_EVENT(t)),
            null != r && i.push(_.CHANNEL_EVENT(r)),
            z(e) &&
                (i.push(_.EVENT_ACTIVE),
                i.push(_.GUILD_EVENT_ACTIVE(t)),
                null != r && i.push(_.CHANNEL_EVENT_ACTIVE(r))),
            $(e) &&
                (i.push(_.EVENT_UPCOMING),
                i.push(_.GUILD_EVENT_UPCOMING(t)),
                null != r && i.push(_.CHANNEL_EVENT_UPCOMING(r))),
            i
        );
    },
    h = new s.J(p, f),
    m = 0,
    g = [],
    E = "SERIES",
    A = {},
    I = {};
function T(e) {
    h.set(e.id, e), (m += 1);
}
function y(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    h.delete(e), delete A[e], t && delete I[e], (m += 1);
}
function S(e) {
    return e ?? E;
}
function v(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = e.guild_scheduled_event_id;
    null == A[r] && (A[r] = {});
    let i = S(e.guild_scheduled_event_exception_id);
    null == A[r][i] && (A[r][i] = {}), (A[r][i][e.user_id] = e), t && N(e), n && (m += 1);
}
function C(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = S(e.guild_scheduled_event_exception_id),
        r = A[e.guild_scheduled_event_id]?.[n]?.[e.user_id] != null,
        i = e.user_id === l.default.getId();
    (r || !i) && (delete A[e.guild_scheduled_event_id]?.[n]?.[e.user_id], R(e), t && (m += 1));
}
function b(e, t, n) {
    let r = S(t);
    null == I[e] && (I[e] = {}), (I[e][r] = n);
}
function N(e) {
    let t = S(e.guild_scheduled_event_exception_id),
        n =
            (I[e.guild_scheduled_event_id]?.[t] ?? 0) +
            ((null != e.guild_scheduled_event_exception_id && e.response === d.Qi.UNINTERESTED) ||
            (null == e.guild_scheduled_event_exception_id && e.response === d.Qi.INTERESTED)
                ? 1
                : -1);
    b(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, n);
}
function R(e) {
    let t = S(e.guild_scheduled_event_exception_id),
        n =
            (I[e.guild_scheduled_event_id]?.[t] ?? 0) +
            ((null != e.guild_scheduled_event_exception_id && e.response === d.Qi.UNINTERESTED) ||
            (null == e.guild_scheduled_event_exception_id && e.response === d.Qi.INTERESTED)
                ? -1
                : 1);
    b(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, n);
}
function O(e) {
    let { guilds: t } = e;
    return (
        h.clear(),
        (m = 0),
        (A = {}),
        (I = {}),
        g.forEach(T),
        t.forEach((e) => e.guild_scheduled_events.forEach((e) => T(e))),
        !0
    );
}
function D(e) {
    let { guildScheduledEvent: t } = e;
    T(t);
}
function L(e) {
    let { guildId: t, guildScheduledEvents: n } = e,
        r = h.values(_.GUILD_EVENT(t), !0).map((e) => e.id),
        a = n.map((e) => e.id);
    for (let e of (i()
        .difference(r, a)
        .forEach((e) => {
            y(e);
        }),
    n))
        T(e);
    return !0;
}
function w(e) {
    let { guild: t } = e;
    return P(t.id, !1), t.guild_scheduled_events.forEach((e) => T(e)), !0;
}
function x(e) {
    let { guild: t } = e;
    return P(t.id, !0), !0;
}
function P(e, t) {
    h.values(_.GUILD_EVENT(e)).forEach((e) => y(e.id, t));
}
function M(e) {
    let { guildScheduledEvent: t } = e;
    return T(t), !0;
}
function k(e) {
    let { guildScheduledEvent: t } = e;
    return y(t.id), !0;
}
function U(e) {
    let { eventException: t } = e,
        n = h.get(t.event_id);
    if (null == n) return !1;
    let r = n.guild_scheduled_event_exceptions.findIndex((e) => e.event_exception_id === t.event_exception_id),
        i = [...n.guild_scheduled_event_exceptions];
    return r < 0 ? i.push(t) : (i[r] = t), T({ ...n, guild_scheduled_event_exceptions: i }), !0;
}
function G(e) {
    let { eventException: t } = e,
        n = h.get(t.event_id);
    if (null == n) return !1;
    let r = n.guild_scheduled_event_exceptions.filter((e) => e.event_exception_id !== t.event_exception_id);
    return T({ ...n, guild_scheduled_event_exceptions: r }), !0;
}
function V(e) {
    let { eventId: t } = e,
        n = h.get(t);
    return null != n && (T({ ...n, guild_scheduled_event_exceptions: [] }), !0);
}
function F(e) {
    let { guildScheduledEventUsers: t } = e;
    return t.forEach((e) => v(e, !1, !1)), (m += 1), !0;
}
function B(e) {
    let { guildScheduledEventUsers: t } = e;
    return t.forEach((e) => v(e, !1, !1)), (m += 1), !0;
}
function j(e) {
    let { userId: t, guildEventId: n, guildId: r, guildEventExceptionId: i, response: a } = e,
        s = S(i),
        o = A[n]?.[s]?.[t];
    null != o && C(o, !1);
    let l = u.Ay.getMember(r, t);
    return (
        v({
            user_id: t,
            guild_scheduled_event_id: n,
            member: l ?? void 0,
            guild_scheduled_event_exception_id: i,
            response: a,
        }),
        !0
    );
}
function H(e) {
    let { userId: t, guildEventId: n, guildEventExceptionId: r, response: i } = e;
    C({ user_id: t, guild_scheduled_event_id: n, guild_scheduled_event_exception_id: r, response: i });
}
function Y(e) {
    let { eventId: t, counts: n } = e;
    b(t, null, n.eventCount),
        c.default.forEachKey(n.recurrenceCounts, (e) => {
            b(t, e, n.eventCount - n.recurrenceCounts[e]);
        });
}
function W() {
    return h.clear(), !0;
}
function K(e) {
    let { invite: t } = e,
        n = t.guild_scheduled_event;
    return null != n && (T(n), !0);
}
function z(e) {
    return null != e && e?.status === d.XG.ACTIVE;
}
function $(e) {
    return !d.lV.has(e.status);
}
function q(e, t) {
    return new Date(e.scheduled_start_time).getTime() < Date.now() + 1e3 * t;
}
function Z(e) {
    return null != e && d.lV.has(e.status);
}
class Q extends a.Ay.Store {
    initialize() {
        this.waitFor(l.default, u.Ay);
    }
    static displayName = "GuildScheduledEventStore";
    getGuildScheduledEvent(e) {
        return null == e ? null : (h.get(e) ?? null);
    }
    getGuildEventCountByIndex(e) {
        return h.size(e);
    }
    getGuildScheduledEventsForGuild(e) {
        return null == e ? [] : h.values(e);
    }
    getGuildScheduledEventsByIndex(e) {
        return h.values(e);
    }
    getRsvpVersion() {
        return m;
    }
    getRsvp(e, t, n) {
        if (null == e) return null;
        let r = S(t);
        return A[e]?.[r]?.[n];
    }
    isInterestedInEventRecurrence(e, t) {
        let n = l.default.getId(),
            r = this.getRsvp(e, null, n),
            i = this.getRsvp(e, t, n),
            a = r?.response === d.Qi.INTERESTED,
            s = i?.response === d.Qi.INTERESTED,
            o = i?.response === d.Qi.UNINTERESTED;
        return (a && !o) || s;
    }
    getUserCount(e, t) {
        if (null == e) return 0;
        let n = I[e]?.[E] ?? 0;
        return null == t ? n : n - (I[e]?.[t] ?? 0);
    }
    hasUserCount(e, t) {
        let n = S(t);
        return I[e]?.[n] != null;
    }
    isActive(e) {
        return null != e && z(h.get(e));
    }
    getActiveEventByChannel(e) {
        if (null != e) return this.getGuildScheduledEventsByIndex(_.CHANNEL_EVENT_ACTIVE(e))[0];
    }
    getUsersForGuildEvent(e, t) {
        if (null == e) return {};
        let n = S(t);
        return A[e]?.[n] ?? {};
    }
}
let X = new Q(o.h, {
    CONNECTION_OPEN: O,
    GUILD_CREATE: w,
    GUILD_DELETE: x,
    FETCH_GUILD_EVENT: D,
    FETCH_GUILD_EVENTS_FOR_GUILD: L,
    GUILD_SCHEDULED_EVENT_CREATE: M,
    GUILD_SCHEDULED_EVENT_UPDATE: M,
    GUILD_SCHEDULED_EVENT_DELETE: k,
    GUILD_SCHEDULED_EVENT_USER_ADD: j,
    GUILD_SCHEDULED_EVENT_USER_REMOVE: H,
    GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: F,
    GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: B,
    GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: Y,
    INVITE_RESOLVE_SUCCESS: K,
    GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: U,
    GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: U,
    GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: G,
    GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: V,
    LOGOUT: W,
});
