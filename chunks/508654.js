"use strict";
n.d(t, { Ay: () => f, BP: () => I, Qs: () => x, RO: () => S, WG: () => E, ob: () => b, r2: () => N, vj: () => C });
var i = n(64700),
    s = n(311907),
    l = n(734057),
    r = n(71393),
    a = n(576705),
    o = n(927813),
    c = n(698441),
    d = n(357801),
    u = n(11550),
    h = n(563312),
    A = n(974930),
    p = n(988794),
    g = n(652215);
let m = [],
    _ = 15 * o.A.Millis.MINUTE;
function f(e, t) {
    return (0, s.yK)([r.A, c.Ay, a.A, l.A], () => {
        let n = r.A.getGuild(e);
        return null == n
            ? m
            : c.Ay.getGuildScheduledEventsByIndex(t ?? c.ej.GUILD_EVENT_UPCOMING(n.id)).filter((e) => {
                  let t = e.channel_id;
                  if (null == t) return !0;
                  let n = l.A.getChannel(t);
                  return a.A.can(g.xBc.VIEW_CHANNEL, n);
              });
    }, [t, e]);
}
function x(e) {
    return (0, s.bG)([c.Ay, l.A, a.A], () => {
        let t = l.A.getChannel(e);
        if (!a.A.can(g.xBc.VIEW_CHANNEL, t) || null == t?.guild_id) return null;
        let n = c.Ay.getGuildScheduledEventsByIndex(c.ej.CHANNEL_EVENT_ACTIVE(e));
        return n.length > 0 ? n[0] : null;
    }, [e]);
}
function C(e) {
    let t = (0, s.yK)([c.Ay], () => c.Ay.getGuildScheduledEventsForGuild(e), [e]);
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
function E(e) {
    let t = (0, s.yK)(
            [c.Ay, l.A, a.A],
            () =>
                c.Ay.getGuildScheduledEventsByIndex(c.ej.GUILD_EVENT_UPCOMING(e)).filter((e) => {
                    if (e.entity_type === p.Ps.NONE || e.status !== p.XG.SCHEDULED) return !1;
                    if (null == e.channel_id) return !0;
                    let t = l.A.getChannel(e.channel_id);
                    return a.A.can(g.xBc.VIEW_CHANNEL, t);
                }),
            [e],
        ),
        n = (0, s.cf)([u.A], () => u.A.getAllEventDismissals()),
        i = (0, s.cf)([u.A], () => u.A.getAllUpcomingNoticeSeenTimes()),
        o = (0, s.cf)(
            [c.Ay],
            () =>
                null == t
                    ? {}
                    : t.reduce((e, t) => {
                          let n = (0, A.G3)(t);
                          return { ...e, [t.id]: c.Ay.isInterestedInEventRecurrence(t.id, n) };
                      }, {}),
            [t],
        ),
        h = (0, s.bG)([r.A], () => r.A.getGuild(e)),
        m =
            null != h &&
            !h.features.has(g.GuildFeatures.COMMUNITY) &&
            h.features.has(g.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    if (null != t && null != o && m)
        for (let e = 0; e < t.length; e++) {
            let s = t[e],
                l = n[s.id],
                r = i[s.id],
                a = o[s.id] ?? !1,
                c = (0, d.F)(s, l, r, a);
            if (null != c) return { upcomingEvent: s, noticeType: c };
        }
}
function I(e) {
    return (0, s.bG)(
        [c.Ay, l.A, a.A],
        () =>
            c.Ay.getGuildScheduledEventsByIndex(c.ej.GUILD_EVENT_ACTIVE(e)).find((e) => {
                if (e.entity_type === p.Ps.NONE || !(0, c.Fd)(e)) return !1;
                if (null == e.channel_id) return !0;
                let t = l.A.getChannel(e.channel_id);
                return a.A.can(g.xBc.VIEW_CHANNEL, t);
            }),
        [e],
    );
}
function b(e) {
    return (0, s.bG)([c.Ay], () => c.Ay.getGuildScheduledEventsByIndex(c.ej.CHANNEL_EVENT_UPCOMING(e)), [e]);
}
function N(e) {
    return (0, s.bG)([l.A, c.Ay], () => {
        let t = c.Ay.getGuildScheduledEventsByIndex(c.ej.GUILD_EVENT_ACTIVE(e)).find(
            (e) => null != l.A.getChannel(e.channel_id),
        );
        return l.A.getChannel(t?.channel_id);
    }, [e]);
}
function S(e) {
    let [t, n] = i.useState(() => Date.now());
    i.useEffect(() => {
        let e = setInterval(() => {
            n(Date.now());
        }, _);
        return () => clearInterval(e);
    }, []);
    let l = (0, s.bG)(
        [c.Ay],
        () => (null == e ? [] : c.Ay.getGuildScheduledEventsByIndex(c.ej.CHANNEL_EVENT_UPCOMING(e))),
        [e, t],
    );
    return i.useMemo(
        () =>
            l.filter((e) => {
                let { startTime: t, endTime: n } = (0, h.YR)(e),
                    { withinStartWindow: i, diffMinutes: s } = (0, A.CC)(t.toISOString(), n?.toISOString());
                return e.status !== p.XG.ACTIVE && i && s < 15;
            }),
        [l],
    );
}
