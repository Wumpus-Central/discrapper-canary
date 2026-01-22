n.d(t, {
    AZ: () => et,
    Ay: () => er,
    Fd: () => $,
    W$: () => ee,
    d6: () => J,
    ej: () => g,
}),
    n(321073),
    n(896048);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(713402),
    l = n(73153),
    c = n(961350),
    u = n(696451),
    d = n(661191),
    f = n(988794);
function p(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = {
    EVENT: "event",
    EVENT_ACTIVE: "active",
    EVENT_UPCOMING: "event-upcoming",
    GUILD_EVENT: (e) => "".concat(e, "-").concat(g.EVENT),
    GUILD_EVENT_ACTIVE: (e) => "".concat(e, "-").concat(g.EVENT_ACTIVE),
    GUILD_EVENT_UPCOMING: (e) => "".concat(e, "-").concat(g.EVENT_UPCOMING),
    CHANNEL_EVENT: (e) => "".concat(e, "-").concat(g.EVENT),
    CHANNEL_EVENT_ACTIVE: (e) => "".concat(e, "-").concat(g.EVENT_ACTIVE),
    CHANNEL_EVENT_UPCOMING: (e) => "".concat(e, "-").concat(g.EVENT_UPCOMING),
};
function E(e) {
    let { id: t, scheduled_start_time: n } = e,
        r = $(e) ? "\0" : "\x01";
    return "".concat(r, "-").concat(new Date(n).getTime(), "-").concat(t);
}
let b = (e) => {
        let { guild_id: t, entity_id: n, channel_id: r } = e,
            i = [t];
        return (
            null != n && i.push(n),
            i.push(g.GUILD_EVENT(t)),
            null != r && i.push(g.CHANNEL_EVENT(r)),
            $(e) &&
                (i.push(g.EVENT_ACTIVE),
                i.push(g.GUILD_EVENT_ACTIVE(t)),
                null != r && i.push(g.CHANNEL_EVENT_ACTIVE(r))),
            J(e) &&
                (i.push(g.EVENT_UPCOMING),
                i.push(g.GUILD_EVENT_UPCOMING(t)),
                null != r && i.push(g.CHANNEL_EVENT_UPCOMING(r))),
            i
        );
    },
    y = new o.J(b, E),
    O = 0,
    A = [],
    v = "SERIES",
    S = {},
    I = {};
function T(e) {
    y.set(e.id, e), (O += 1);
}
function C(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    y.delete(e), delete S[e], t && delete I[e], (O += 1);
}
function N(e) {
    return null != e ? e : v;
}
function R(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = e.guild_scheduled_event_id;
    null == S[r] && (S[r] = {});
    let i = N(e.guild_scheduled_event_exception_id);
    null == S[r][i] && (S[r][i] = {}), (S[r][i][e.user_id] = e), t && D(e), n && (O += 1);
}
function w(e) {
    var t, n, r, i;
    let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        s = N(e.guild_scheduled_event_exception_id),
        o = (null == (n = S[e.guild_scheduled_event_id]) || null == (t = n[s]) ? void 0 : t[e.user_id]) != null,
        l = e.user_id === c.default.getId();
    (o || !l) &&
        (null == (i = S[e.guild_scheduled_event_id]) || null == (r = i[s]) || delete r[e.user_id], x(e), a && (O += 1));
}
function P(e, t, n) {
    let r = N(t);
    null == I[e] && (I[e] = {}), (I[e][r] = n);
}
function D(e) {
    var t, n;
    let r = N(e.guild_scheduled_event_exception_id),
        i =
            (null != (t = null == (n = I[e.guild_scheduled_event_id]) ? void 0 : n[r]) ? t : 0) +
            ((null != e.guild_scheduled_event_exception_id && e.response === f.Qi.UNINTERESTED) ||
            (null == e.guild_scheduled_event_exception_id && e.response === f.Qi.INTERESTED)
                ? 1
                : -1);
    P(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i);
}
function x(e) {
    var t, n;
    let r = N(e.guild_scheduled_event_exception_id),
        i =
            (null != (t = null == (n = I[e.guild_scheduled_event_id]) ? void 0 : n[r]) ? t : 0) +
            ((null != e.guild_scheduled_event_exception_id && e.response === f.Qi.UNINTERESTED) ||
            (null == e.guild_scheduled_event_exception_id && e.response === f.Qi.INTERESTED)
                ? -1
                : 1);
    P(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i);
}
function L(e) {
    let { guilds: t } = e;
    return (
        y.clear(),
        (O = 0),
        (S = {}),
        (I = {}),
        A.forEach(T),
        t.forEach((e) => e.guild_scheduled_events.forEach((e) => T(e))),
        !0
    );
}
function j(e) {
    let { guildScheduledEvent: t } = e;
    T(t);
}
function M(e) {
    let { guildId: t, guildScheduledEvents: n } = e,
        r = y.values(g.GUILD_EVENT(t), !0).map((e) => e.id),
        i = n.map((e) => e.id);
    for (let e of (a()
        .difference(r, i)
        .forEach((e) => {
            C(e);
        }),
    n))
        T(e);
    return !0;
}
function k(e) {
    let { guild: t } = e;
    return G(t.id, !1), t.guild_scheduled_events.forEach((e) => T(e)), !0;
}
function U(e) {
    let { guild: t } = e;
    return G(t.id, !0), !0;
}
function G(e, t) {
    y.values(g.GUILD_EVENT(e)).forEach((e) => C(e.id, t));
}
function V(e) {
    let { guildScheduledEvent: t } = e;
    return T(t), !0;
}
function F(e) {
    let { guildScheduledEvent: t } = e;
    return C(t.id), !0;
}
function B(e) {
    let { eventException: t } = e,
        n = y.get(t.event_id);
    if (null == n) return !1;
    let r = n.guild_scheduled_event_exceptions.findIndex((e) => e.event_exception_id === t.event_exception_id),
        i = [...n.guild_scheduled_event_exceptions];
    return r < 0 ? i.push(t) : (i[r] = t), T(m(_({}, n), { guild_scheduled_event_exceptions: i })), !0;
}
function H(e) {
    let { eventException: t } = e,
        n = y.get(t.event_id);
    if (null == n) return !1;
    let r = n.guild_scheduled_event_exceptions.filter((e) => e.event_exception_id !== t.event_exception_id);
    return T(m(_({}, n), { guild_scheduled_event_exceptions: r })), !0;
}
function Y(e) {
    let { eventId: t } = e,
        n = y.get(t);
    return null != n && (T(m(_({}, n), { guild_scheduled_event_exceptions: [] })), !0);
}
function W(e) {
    let { guildScheduledEventUsers: t } = e;
    return t.forEach((e) => R(e, !1, !1)), (O += 1), !0;
}
function K(e) {
    let { guildScheduledEventUsers: t } = e;
    return t.forEach((e) => R(e, !1, !1)), (O += 1), !0;
}
function z(e) {
    var t, n;
    let { userId: r, guildEventId: i, guildId: a, guildEventExceptionId: s, response: o } = e,
        l = N(s),
        c = null == (n = S[i]) || null == (t = n[l]) ? void 0 : t[r];
    null != c && w(c, !1);
    let d = u.Ay.getMember(a, r);
    return (
        R({
            user_id: r,
            guild_scheduled_event_id: i,
            member: null != d ? d : void 0,
            guild_scheduled_event_exception_id: s,
            response: o,
        }),
        !0
    );
}
function q(e) {
    let { userId: t, guildEventId: n, guildEventExceptionId: r, response: i } = e;
    w({
        user_id: t,
        guild_scheduled_event_id: n,
        guild_scheduled_event_exception_id: r,
        response: i,
    });
}
function X(e) {
    let { eventId: t, counts: n } = e;
    P(t, null, n.eventCount),
        d.default.forEachKey(n.recurrenceCounts, (e) => {
            P(t, e, n.eventCount - n.recurrenceCounts[e]);
        });
}
function Z() {
    return y.clear(), !0;
}
function Q(e) {
    let { invite: t } = e,
        n = t.guild_scheduled_event;
    return null != n && (T(n), !0);
}
function $(e) {
    return null != e && (null == e ? void 0 : e.status) === f.XG.ACTIVE;
}
function J(e) {
    return !f.lV.has(e.status);
}
function ee(e, t) {
    return new Date(e.scheduled_start_time).getTime() < Date.now() + 1000 * t;
}
function et(e) {
    return null != e && f.lV.has(e.status);
}
class en extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(c.default, u.Ay);
    }
    getGuildScheduledEvent(e) {
        var t;
        return null == e ? null : null != (t = y.get(e)) ? t : null;
    }
    getGuildEventCountByIndex(e) {
        return y.size(e);
    }
    getGuildScheduledEventsForGuild(e) {
        return null == e ? [] : y.values(e);
    }
    getGuildScheduledEventsByIndex(e) {
        return y.values(e);
    }
    getRsvpVersion() {
        return O;
    }
    getRsvp(e, t, n) {
        var r, i;
        if (null == e) return null;
        let a = N(t);
        return null == (i = S[e]) || null == (r = i[a]) ? void 0 : r[n];
    }
    isInterestedInEventRecurrence(e, t) {
        let n = c.default.getId(),
            r = this.getRsvp(e, null, n),
            i = this.getRsvp(e, t, n),
            a = (null == r ? void 0 : r.response) === f.Qi.INTERESTED,
            s = (null == i ? void 0 : i.response) === f.Qi.INTERESTED,
            o = (null == i ? void 0 : i.response) === f.Qi.UNINTERESTED;
        return (a && !o) || s;
    }
    getUserCount(e, t) {
        var n, r, i, a;
        if (null == e) return 0;
        let s = null != (n = null == (i = I[e]) ? void 0 : i[v]) ? n : 0;
        return null == t ? s : s - (null != (r = null == (a = I[e]) ? void 0 : a[t]) ? r : 0);
    }
    hasUserCount(e, t) {
        var n;
        let r = N(t);
        return (null == (n = I[e]) ? void 0 : n[r]) != null;
    }
    isActive(e) {
        return null != e && $(y.get(e));
    }
    getActiveEventByChannel(e) {
        if (null != e) return this.getGuildScheduledEventsByIndex(g.CHANNEL_EVENT_ACTIVE(e))[0];
    }
    getUsersForGuildEvent(e, t) {
        var n, r;
        if (null == e) return {};
        let i = N(t);
        return null != (n = null == (r = S[e]) ? void 0 : r[i]) ? n : {};
    }
}
p(en, "displayName", "GuildScheduledEventStore");
let er = new en(l.h, {
    CONNECTION_OPEN: L,
    GUILD_CREATE: k,
    GUILD_DELETE: U,
    FETCH_GUILD_EVENT: j,
    FETCH_GUILD_EVENTS_FOR_GUILD: M,
    GUILD_SCHEDULED_EVENT_CREATE: V,
    GUILD_SCHEDULED_EVENT_UPDATE: V,
    GUILD_SCHEDULED_EVENT_DELETE: F,
    GUILD_SCHEDULED_EVENT_USER_ADD: z,
    GUILD_SCHEDULED_EVENT_USER_REMOVE: q,
    GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: W,
    GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: K,
    GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: X,
    INVITE_RESOLVE_SUCCESS: Q,
    GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: B,
    GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: B,
    GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: H,
    GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: Y,
    LOGOUT: Z,
});
