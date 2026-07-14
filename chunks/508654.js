"use strict";
n.d(t, { Ay: () => p, BP: () => S, Qs: () => T, RO: () => O, WG: () => g, ob: () => N, r2: () => C, vj: () => m });
var i = n(64700),
    r = n(17928),
    a = n(734057),
    s = n(71393),
    l = n(576705),
    o = n(927813),
    d = n(698441),
    c = n(357801),
    u = n(11550),
    _ = n(563312),
    E = n(974930),
    A = n(988794),
    h = n(652215);
let I = [],
    f = 15 * o.A.Millis.MINUTE;
function p(e, t) {
    return (0, r.yK)([s.A, d.Ay, l.A, a.A], () => {
        let n = s.A.getGuild(e);
        return null == n
            ? I
            : d.Ay.getGuildScheduledEventsByIndex(t ?? d.ej.GUILD_EVENT_UPCOMING(n.id)).filter((e) => {
                  let t = e.channel_id;
                  if (null == t) return !0;
                  let n = a.A.getChannel(t);
                  return l.A.can(h.xBc.VIEW_CHANNEL, n);
              });
    }, [t, e]);
}
function T(e) {
    return (0, r.bG)([d.Ay, a.A, l.A], () => {
        let t = a.A.getChannel(e);
        if (!l.A.can(h.xBc.VIEW_CHANNEL, t) || null == t?.guild_id) return null;
        let n = d.Ay.getGuildScheduledEventsByIndex(d.ej.CHANNEL_EVENT_ACTIVE(e));
        return n.length > 0 ? n[0] : null;
    }, [e]);
}
function m(e) {
    let t = (0, r.yK)([d.Ay], () => d.Ay.getGuildScheduledEventsForGuild(e), [e]);
    return i.useMemo(() => {
        let e = new Map();
        return (
            t.forEach((t) => {
                let n = t.channel_id;
                null != n && e.set(n, t);
            }),
            e
        );
    }, [t]);
}
function g(e) {
    let t = (0, r.yK)(
            [d.Ay, a.A, l.A],
            () =>
                d.Ay.getGuildScheduledEventsByIndex(d.ej.GUILD_EVENT_UPCOMING(e)).filter((e) => {
                    if (e.entity_type === A.Ps.NONE || e.status !== A.XG.SCHEDULED) return !1;
                    if (null == e.channel_id) return !0;
                    let t = a.A.getChannel(e.channel_id);
                    return l.A.can(h.xBc.VIEW_CHANNEL, t);
                }),
            [e],
        ),
        n = (0, r.cf)([u.A], () => u.A.getAllEventDismissals()),
        i = (0, r.cf)([u.A], () => u.A.getAllUpcomingNoticeSeenTimes()),
        o = (0, r.cf)(
            [d.Ay],
            () =>
                null == t
                    ? {}
                    : t.reduce((e, t) => {
                          let n = (0, E.G3)(t);
                          return { ...e, [t.id]: d.Ay.isInterestedInEventRecurrence(t.id, n) };
                      }, {}),
            [t],
        ),
        _ = (0, r.bG)([s.A], () => s.A.getGuild(e)),
        I =
            null != _ &&
            !_.features.has(h.GuildFeatures.COMMUNITY) &&
            _.features.has(h.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    if (null != t && null != o && I)
        for (let e = 0; e < t.length; e++) {
            let r = t[e],
                a = n[r.id],
                s = i[r.id],
                l = o[r.id] ?? !1,
                d = (0, c.F)(r, a, s, l);
            if (null != d) return { upcomingEvent: r, noticeType: d };
        }
}
function S(e) {
    return (0, r.bG)(
        [d.Ay, a.A, l.A],
        () =>
            d.Ay.getGuildScheduledEventsByIndex(d.ej.GUILD_EVENT_ACTIVE(e)).find((e) => {
                if (e.entity_type === A.Ps.NONE || !(0, d.Fd)(e)) return !1;
                if (null == e.channel_id) return !0;
                let t = a.A.getChannel(e.channel_id);
                return l.A.can(h.xBc.VIEW_CHANNEL, t);
            }),
        [e],
    );
}
function N(e) {
    return (0, r.bG)([d.Ay], () => d.Ay.getGuildScheduledEventsByIndex(d.ej.CHANNEL_EVENT_UPCOMING(e)), [e]);
}
function C(e) {
    return (0, r.bG)([a.A, d.Ay], () => {
        let t = d.Ay.getGuildScheduledEventsByIndex(d.ej.GUILD_EVENT_ACTIVE(e)).find(
            (e) => null != a.A.getChannel(e.channel_id),
        );
        return a.A.getChannel(t?.channel_id);
    }, [e]);
}
function O(e) {
    let [t, n] = i.useState(() => Date.now());
    i.useEffect(() => {
        let e = setInterval(() => {
            n(Date.now());
        }, f);
        return () => clearInterval(e);
    }, []);
    let a = (0, r.bG)(
        [d.Ay],
        () => (null == e ? [] : d.Ay.getGuildScheduledEventsByIndex(d.ej.CHANNEL_EVENT_UPCOMING(e))),
        [e, t],
    );
    return i.useMemo(
        () =>
            a.filter((e) => {
                let { startTime: t, endTime: n } = (0, _.YR)(e),
                    { withinStartWindow: i, diffMinutes: r } = (0, E.CC)(t.toISOString(), n?.toISOString());
                return e.status !== A.XG.ACTIVE && i && r < 15;
            }),
        [a],
    );
}
