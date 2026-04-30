"use strict";
n.d(t, { Ay: () => g, BP: () => S, Qs: () => A, RO: () => C, WG: () => T, ob: () => N, r2: () => y, vj: () => I });
var i = n(64700),
    r = n(17928),
    s = n(734057),
    a = n(71393),
    o = n(576705),
    l = n(927813),
    u = n(698441),
    c = n(357801),
    d = n(11550),
    _ = n(563312),
    f = n(647090),
    h = n(988794),
    p = n(652215);
let E = [],
    m = 15 * l.A.Millis.MINUTE;
function g(e, t) {
    return (0, r.yK)([a.A, u.Ay, o.A, s.A], () => {
        let n = a.A.getGuild(e);
        return null == n
            ? E
            : u.Ay.getGuildScheduledEventsByIndex(t ?? u.ej.GUILD_EVENT_UPCOMING(n.id)).filter((e) => {
                  let t = e.channel_id;
                  if (null == t) return !0;
                  let n = s.A.getChannel(t);
                  return o.A.can(p.xBc.VIEW_CHANNEL, n);
              });
    }, [t, e]);
}
function A(e) {
    return (0, r.bG)([u.Ay, s.A, o.A], () => {
        let t = s.A.getChannel(e);
        if (!o.A.can(p.xBc.VIEW_CHANNEL, t) || null == t?.guild_id) return null;
        let n = u.Ay.getGuildScheduledEventsByIndex(u.ej.CHANNEL_EVENT_ACTIVE(e));
        return n.length > 0 ? n[0] : null;
    }, [e]);
}
function I(e) {
    let t = (0, r.yK)([u.Ay], () => u.Ay.getGuildScheduledEventsForGuild(e), [e]);
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
function T(e) {
    let t = (0, r.yK)(
            [u.Ay, s.A, o.A],
            () =>
                u.Ay.getGuildScheduledEventsByIndex(u.ej.GUILD_EVENT_UPCOMING(e)).filter((e) => {
                    if (e.entity_type === h.Ps.NONE || e.status !== h.XG.SCHEDULED) return !1;
                    if (null == e.channel_id) return !0;
                    let t = s.A.getChannel(e.channel_id);
                    return o.A.can(p.xBc.VIEW_CHANNEL, t);
                }),
            [e],
        ),
        n = (0, r.cf)([d.A], () => d.A.getAllEventDismissals()),
        i = (0, r.cf)([d.A], () => d.A.getAllUpcomingNoticeSeenTimes()),
        l = (0, r.cf)(
            [u.Ay],
            () =>
                null == t
                    ? {}
                    : t.reduce((e, t) => {
                          let n = (0, f.G3)(t);
                          return { ...e, [t.id]: u.Ay.isInterestedInEventRecurrence(t.id, n) };
                      }, {}),
            [t],
        ),
        _ = (0, r.bG)([a.A], () => a.A.getGuild(e)),
        E =
            null != _ &&
            !_.features.has(p.GuildFeatures.COMMUNITY) &&
            _.features.has(p.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    if (null != t && null != l && E)
        for (let e = 0; e < t.length; e++) {
            let r = t[e],
                s = n[r.id],
                a = i[r.id],
                o = l[r.id] ?? !1,
                u = (0, c.F)(r, s, a, o);
            if (null != u) return { upcomingEvent: r, noticeType: u };
        }
}
function S(e) {
    return (0, r.bG)(
        [u.Ay, s.A, o.A],
        () =>
            u.Ay.getGuildScheduledEventsByIndex(u.ej.GUILD_EVENT_ACTIVE(e)).find((e) => {
                if (e.entity_type === h.Ps.NONE || !(0, u.Fd)(e)) return !1;
                if (null == e.channel_id) return !0;
                let t = s.A.getChannel(e.channel_id);
                return o.A.can(p.xBc.VIEW_CHANNEL, t);
            }),
        [e],
    );
}
function N(e) {
    return (0, r.bG)([u.Ay], () => u.Ay.getGuildScheduledEventsByIndex(u.ej.CHANNEL_EVENT_UPCOMING(e)), [e]);
}
function y(e) {
    return (0, r.bG)([s.A, u.Ay], () => {
        let t = u.Ay.getGuildScheduledEventsByIndex(u.ej.GUILD_EVENT_ACTIVE(e)).find(
            (e) => null != s.A.getChannel(e.channel_id),
        );
        return s.A.getChannel(t?.channel_id);
    }, [e]);
}
function C(e) {
    let [t, n] = i.useState(() => Date.now());
    i.useEffect(() => {
        let e = setInterval(() => {
            n(Date.now());
        }, m);
        return () => clearInterval(e);
    }, []);
    let s = (0, r.bG)(
        [u.Ay],
        () => (null == e ? [] : u.Ay.getGuildScheduledEventsByIndex(u.ej.CHANNEL_EVENT_UPCOMING(e))),
        [e, t],
    );
    return i.useMemo(
        () =>
            s.filter((e) => {
                let { startTime: t, endTime: n } = (0, _.YR)(e),
                    { withinStartWindow: i, diffMinutes: r } = (0, f.CC)(t.toISOString(), n?.toISOString());
                return e.status !== h.XG.ACTIVE && i && r < 15;
            }),
        [s],
    );
}
