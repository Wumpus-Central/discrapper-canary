n.d(t, { Ay: () => f, BP: () => C, Qs: () => x, RO: () => S, WG: () => I, ob: () => N, r2: () => T, vj: () => E });
var i = n(64700),
    l = n(311907),
    s = n(734057),
    a = n(71393),
    r = n(576705),
    o = n(927813),
    c = n(698441),
    d = n(357801),
    u = n(11550),
    h = n(563312),
    A = n(974930),
    _ = n(988794),
    m = n(652215);
let g = [],
    p = 15 * o.A.Millis.MINUTE;
function f(e, t) {
    return (0, l.yK)([a.A, c.Ay, r.A, s.A], () => {
        let n = a.A.getGuild(e);
        return null == n
            ? g
            : c.Ay.getGuildScheduledEventsByIndex(t ?? c.ej.GUILD_EVENT_UPCOMING(n.id)).filter((e) => {
                  let t = e.channel_id;
                  if (null == t) return !0;
                  let n = s.A.getChannel(t);
                  return r.A.can(m.xBc.VIEW_CHANNEL, n);
              });
    }, [t, e]);
}
function x(e) {
    return (0, l.bG)([c.Ay, s.A, r.A], () => {
        let t = s.A.getChannel(e);
        if (!r.A.can(m.xBc.VIEW_CHANNEL, t) || null == t?.guild_id) return null;
        let n = c.Ay.getGuildScheduledEventsByIndex(c.ej.CHANNEL_EVENT_ACTIVE(e));
        return n.length > 0 ? n[0] : null;
    }, [e]);
}
function E(e) {
    let t = (0, l.yK)([c.Ay], () => c.Ay.getGuildScheduledEventsForGuild(e), [e]);
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
function I(e) {
    let t = (0, l.yK)(
            [c.Ay, s.A, r.A],
            () =>
                c.Ay.getGuildScheduledEventsByIndex(c.ej.GUILD_EVENT_UPCOMING(e)).filter((e) => {
                    if (e.entity_type === _.Ps.NONE || e.status !== _.XG.SCHEDULED) return !1;
                    if (null == e.channel_id) return !0;
                    let t = s.A.getChannel(e.channel_id);
                    return r.A.can(m.xBc.VIEW_CHANNEL, t);
                }),
            [e],
        ),
        n = (0, l.cf)([u.A], () => u.A.getAllEventDismissals()),
        i = (0, l.cf)([u.A], () => u.A.getAllUpcomingNoticeSeenTimes()),
        o = (0, l.cf)(
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
        h = (0, l.bG)([a.A], () => a.A.getGuild(e)),
        g =
            null != h &&
            !h.features.has(m.GuildFeatures.COMMUNITY) &&
            h.features.has(m.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    if (null != t && null != o && g)
        for (let e = 0; e < t.length; e++) {
            let l = t[e],
                s = n[l.id],
                a = i[l.id],
                r = o[l.id] ?? !1,
                c = (0, d.F)(l, s, a, r);
            if (null != c) return { upcomingEvent: l, noticeType: c };
        }
}
function C(e) {
    return (0, l.bG)(
        [c.Ay, s.A, r.A],
        () =>
            c.Ay.getGuildScheduledEventsByIndex(c.ej.GUILD_EVENT_ACTIVE(e)).find((e) => {
                if (e.entity_type === _.Ps.NONE || !(0, c.Fd)(e)) return !1;
                if (null == e.channel_id) return !0;
                let t = s.A.getChannel(e.channel_id);
                return r.A.can(m.xBc.VIEW_CHANNEL, t);
            }),
        [e],
    );
}
function N(e) {
    return (0, l.bG)([c.Ay], () => c.Ay.getGuildScheduledEventsByIndex(c.ej.CHANNEL_EVENT_UPCOMING(e)), [e]);
}
function T(e) {
    return (0, l.bG)([s.A, c.Ay], () => {
        let t = c.Ay.getGuildScheduledEventsByIndex(c.ej.GUILD_EVENT_ACTIVE(e)).find(
            (e) => null != s.A.getChannel(e.channel_id),
        );
        return s.A.getChannel(t?.channel_id);
    }, [e]);
}
function S(e) {
    let [t, n] = i.useState(() => Date.now());
    i.useEffect(() => {
        let e = setInterval(() => {
            n(Date.now());
        }, p);
        return () => clearInterval(e);
    }, []);
    let s = (0, l.bG)(
        [c.Ay],
        () => (null == e ? [] : c.Ay.getGuildScheduledEventsByIndex(c.ej.CHANNEL_EVENT_UPCOMING(e))),
        [e, t],
    );
    return i.useMemo(
        () =>
            s.filter((e) => {
                let { startTime: t, endTime: n } = (0, h.YR)(e),
                    { withinStartWindow: i, diffMinutes: l } = (0, A.CC)(t.toISOString(), n?.toISOString());
                return e.status !== _.XG.ACTIVE && i && l < 15;
            }),
        [s],
    );
}
